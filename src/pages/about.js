const site = require("../data/site");
const { icon } = require("../partials/icons");
const { coastalSkyline, brandIllustration } = require("../partials/illustrations");

function render() {
  return `
  <section class="hero">
    ${coastalSkyline()}
    <div class="hero__content">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>About</span></nav>
      <p class="eyebrow hero__eyebrow">${icon("shield", "eyebrow")} About Us</p>
      <h1>A Local Locksmith, Built for the Treasure Coast</h1>
      <p class="hero__lede">Tradition Locksmith is a Port St. Lucie-based locksmith serving residential, commercial, and automotive customers across the Treasure Coast.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="info-split">
        <div>
          <p class="eyebrow">Our Story</p>
          <h2>Named for Where We Started</h2>
          <p>Tradition Locksmith takes its name from the Tradition neighborhood in Port St. Lucie, where our shop is based. It's a fitting name for a locksmith, too — a trade built on old-world craftsmanship that now has to keep pace with smart locks, transponder keys, and electronic access systems.</p>
          <p>We operate as a DBA of ODA Group Services LLC (Florida Sunbiz registration #${site.sunbiz}), and we built this business around a simple idea: keep it local, answer the phone every time, and treat a homeowner's front door with the same care as a business owner's storefront or a driver's car ignition.</p>
        </div>
        ${brandIllustration({ ratio: "4 / 5" })}
      </div>
    </div>
  </section>

  <section class="section--sand">
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow">What Guides Us</p>
        <h2>Residential. Commercial. Automotive.</h2>
        <p>Three specialties, one team — so you never have to call three different companies.</p>
      </div>
      <div class="grid-3">
        <div class="card">
          <div class="icon-chip" style="margin-bottom:14px">${icon("home")}</div>
          <h3>Residential</h3>
          <p>Lockouts, rekeys, and smart lock installs for houses, condos, and rentals across the Treasure Coast.</p>
        </div>
        <div class="card">
          <div class="icon-chip" style="margin-bottom:14px">${icon("building")}</div>
          <h3>Commercial</h3>
          <p>Master key systems, panic hardware, and rekeys for offices, storefronts, and multi-tenant buildings.</p>
        </div>
        <div class="card">
          <div class="icon-chip" style="margin-bottom:14px">${icon("car")}</div>
          <h3>Automotive</h3>
          <p>Car lockouts, key fob programming, and ignition repair for most makes and models, on-site.</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="highlight-banner">
        <div class="highlight-banner__icon">${icon("mapPin")}</div>
        <div>
          <h2>Serving the Treasure Coast, Florida</h2>
          <p>Port St. Lucie, Stuart, Jensen Beach, Palm City, Hobe Sound, Fort Pierce, Jupiter, and Vero Beach — see our <a href="/locations/" style="color:var(--gold-300);text-decoration:underline;">full list of service areas</a>.</p>
        </div>
        <a class="btn btn--gold" href="${site.phoneHref}" style="justify-self:start">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
      </div>
    </div>
  </section>

  <section class="cta-band wave-top">
    <div class="container">
      <h2>Questions Before You Call?</h2>
      <p>Reach out any time — we're happy to explain what a job involves before we ever pick up a tool.</p>
      <div class="cta-band__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
        <a class="btn btn--ghost" href="/contact/">Contact Us</a>
      </div>
    </div>
  </section>
  `;
}

module.exports = { render };
