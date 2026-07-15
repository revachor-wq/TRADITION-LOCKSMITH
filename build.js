const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const site = require("./src/data/site");
const locations = require("./src/data/locations");
const serviceDetails = require("./src/data/serviceDetails");
const schema = require("./src/partials/schema");
const { layout } = require("./src/partials/layout");
const assetVersion = require("./src/asset-version");

const OUT = path.join(__dirname, "public");

function clean(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function writePage(routePath, html) {
  const dir = path.join(OUT, routePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

function buildPages() {
  const home = require("./src/pages/home");
  const servicesPage = require("./src/pages/services");
  const about = require("./src/pages/about");
  const contact = require("./src/pages/contact");
  const locationsIndex = require("./src/pages/locationsIndex");
  const locationPage = require("./src/pages/locationPage");
  const servicePage = require("./src/pages/servicePage");
  const notFound = require("./src/pages/notFound");

  const pages = [];

  pages.push({
    route: "",
    canonical: "/",
    title: "Tradition Locksmith | 24/7 Treasure Coast Locksmith",
    description:
      "24/7 residential, commercial & automotive locksmith service across the Treasure Coast, FL. Based in Port St. Lucie. Call 772-244-4552.",
    content: home.render(),
    schemaHtml: schema.localBusiness({
      description:
        "24/7 residential, commercial, and automotive locksmith serving the Treasure Coast, Florida from Port St. Lucie.",
    }),
  });

  pages.push({
    route: "services",
    canonical: "/services/",
    title: "Locksmith Services | Residential, Commercial & Auto",
    description:
      "Tradition Locksmith's full range of services: lockouts & rekeys, master key systems, key programming, and 24/7 emergency service.",
    content: servicesPage.render(),
    schemaHtml:
      schema.localBusiness({
        description: "Residential, commercial, and automotive locksmith services on the Treasure Coast, Florida.",
      }) + schema.breadcrumb([
        { name: "Home", url: `${site.siteUrl}/` },
        { name: "Services", url: `${site.siteUrl}/services/` },
      ]),
  });

  pages.push({
    route: "about",
    canonical: "/about/",
    title: "About Tradition Locksmith | Port St. Lucie, FL",
    description:
      "Tradition Locksmith is a Port St. Lucie-based locksmith serving the Treasure Coast with residential, commercial & automotive service, 24/7.",
    content: about.render(),
    schemaHtml:
      schema.localBusiness({ description: "About Tradition Locksmith, a Treasure Coast, Florida locksmith." }) +
      schema.breadcrumb([
        { name: "Home", url: `${site.siteUrl}/` },
        { name: "About", url: `${site.siteUrl}/about/` },
      ]),
  });

  pages.push({
    route: "contact",
    canonical: "/contact/",
    title: "Contact Tradition Locksmith | 772-244-4552",
    description:
      "Contact Tradition Locksmith for 24/7 locksmith service on the Treasure Coast, Florida. Call 772-244-4552, email, or send a service request online.",
    content: contact.render(),
    schemaHtml:
      schema.localBusiness({ description: "Contact Tradition Locksmith for 24/7 locksmith service." }) +
      schema.breadcrumb([
        { name: "Home", url: `${site.siteUrl}/` },
        { name: "Contact", url: `${site.siteUrl}/contact/` },
      ]),
  });

  pages.push({
    route: "locations",
    canonical: "/locations/",
    title: "Service Areas | Tradition Locksmith",
    description:
      "Tradition Locksmith serves Port St. Lucie, Stuart, Jensen Beach, Fort Pierce, Jupiter, Vero Beach & more. Find your city's locksmith page.",
    content: locationsIndex.render(),
    schemaHtml:
      schema.localBusiness({ description: "Treasure Coast, Florida locksmith service areas." }) +
      schema.breadcrumb([
        { name: "Home", url: `${site.siteUrl}/` },
        { name: "Service Areas", url: `${site.siteUrl}/locations/` },
      ]),
  });

  for (const loc of locations) {
    pages.push({
      route: `locations/${loc.slug}`,
      canonical: `/locations/${loc.slug}/`,
      title: loc.title,
      description: loc.metaDescription,
      content: locationPage.render(loc),
      schemaHtml:
        schema.locationBusiness(loc) +
        schema.breadcrumb([
          { name: "Home", url: `${site.siteUrl}/` },
          { name: "Service Areas", url: `${site.siteUrl}/locations/` },
          { name: loc.city, url: `${site.siteUrl}/locations/${loc.slug}/` },
        ]) +
        schema.faqPage(loc.faq),
    });
  }

  for (const svc of serviceDetails) {
    pages.push({
      route: `services/${svc.slug}`,
      canonical: `/services/${svc.slug}/`,
      title: svc.title,
      description: svc.metaDescription,
      content: servicePage.render(svc),
      schemaHtml:
        schema.service(svc) +
        schema.breadcrumb([
          { name: "Home", url: `${site.siteUrl}/` },
          { name: "Services", url: `${site.siteUrl}/services/` },
          { name: svc.navLabel, url: `${site.siteUrl}/services/${svc.slug}/` },
        ]) +
        schema.faqPage(svc.faq),
    });
  }

  for (const page of pages) {
    const html = layout({
      title: page.title,
      description: page.description,
      canonical: page.canonical,
      activePath: routeToNavPath(page.route),
      schemaHtml: page.schemaHtml,
      content: page.content,
    });
    writePage(page.route, html);
  }

  // 404
  const html404 = layout({
    title: "Page Not Found | Tradition Locksmith",
    description: "The page you're looking for couldn't be found.",
    canonical: "/404.html",
    content: notFound.render(),
  });
  fs.writeFileSync(path.join(OUT, "404.html"), html404);

  return pages;
}

function routeToNavPath(route) {
  if (route === "") return "/";
  if (route.startsWith("locations")) return "/locations/";
  if (route.startsWith("services")) return "/services/";
  return `/${route}/`;
}

function sitemapPriority(canonical) {
  if (canonical === "/") return "1.0";
  const isLocationDetail = canonical.startsWith("/locations/") && canonical !== "/locations/";
  const isServiceDetail = canonical.startsWith("/services/") && canonical !== "/services/";
  if (isLocationDetail || isServiceDetail) return "0.9";
  return "0.7";
}

function buildSitemap(pages) {
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${site.siteUrl}${p.canonical}</loc>
    <changefreq>monthly</changefreq>
    <priority>${sitemapPriority(p.canonical)}</priority>
  </url>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  fs.writeFileSync(path.join(OUT, "sitemap.xml"), xml);
}

function buildRobots() {
  const txt = `User-agent: *
Allow: /

Sitemap: ${site.siteUrl}/sitemap.xml
`;
  fs.writeFileSync(path.join(OUT, "robots.txt"), txt);
}

function buildManifest() {
  const manifest = {
    name: site.name,
    short_name: "Tradition Locksmith",
    start_url: "/",
    display: "standalone",
    background_color: "#0D2E51",
    theme_color: "#0D2E51",
    icons: [
      { src: "/images/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/brand/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
  fs.writeFileSync(path.join(OUT, "site.webmanifest"), JSON.stringify(manifest, null, 2));
}

function buildStaticAssets() {
  copyDir(path.join(__dirname, "src/styles"), path.join(OUT, "css"));
  copyDir(path.join(__dirname, "src/scripts"), path.join(OUT, "js"));
  copyDir(path.join(__dirname, "src/fonts"), path.join(OUT, "fonts"));
  copyDir(path.join(__dirname, "src/images"), path.join(OUT, "images"));
  if (fs.existsSync(path.join(__dirname, "src/static"))) {
    copyDir(path.join(__dirname, "src/static"), OUT);
  }

  // CSS/JS are served with a 1-year immutable cache (see netlify.toml), which is
  // only safe because every page links to them with this content-hash query
  // string — it changes whenever style.css or main.js changes, so browsers and
  // the CDN fetch a fresh copy instead of serving a stale cached one.
  const hash = crypto.createHash("sha256");
  hash.update(fs.readFileSync(path.join(OUT, "css/style.css")));
  hash.update(fs.readFileSync(path.join(OUT, "js/main.js")));
  assetVersion.set(hash.digest("hex").slice(0, 10));
}

function main() {
  clean(OUT);
  buildStaticAssets();
  const pages = buildPages();
  buildSitemap(pages);
  buildRobots();
  buildManifest();
  console.log(`Built ${pages.length} pages + 404 into /public`);
}

main();
