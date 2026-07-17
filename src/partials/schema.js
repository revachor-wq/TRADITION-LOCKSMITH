const site = require("../data/site");
const locations = require("../data/locations");

const baseBusiness = {
  "@type": ["LocalBusiness", "Locksmith"],
  "@id": `${site.siteUrl}/#business`,
  name: site.name,
  legalName: site.legalName,
  url: site.siteUrl,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
};

// Site-wide LocalBusiness schema (homepage / non-location pages)
function localBusiness({ description } = {}) {
  const data = {
    "@context": "https://schema.org",
    ...baseBusiness,
    description,
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.city}, FL`,
    })),
  };
  return jsonLd(data);
}

// Per-location LocalBusiness schema, with areaServed narrowed to that city
// and a page-specific @id so each location page has a distinct entity.
function locationBusiness(location) {
  const data = {
    "@context": "https://schema.org",
    ...baseBusiness,
    "@id": `${site.siteUrl}/locations/${location.slug}/#business`,
    description: location.metaDescription,
    areaServed: {
      "@type": "City",
      name: `${location.city}, FL`,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.county,
      },
    },
    mainEntityOfPage: `${site.siteUrl}/locations/${location.slug}/`,
  };
  return jsonLd(data);
}

// Service schema for the six dedicated /services/<slug>/ pages, with the
// business referenced as provider and areaServed covering every location.
function service(svc) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.siteUrl}/services/${svc.slug}/#service`,
    name: svc.navLabel,
    serviceType: svc.navLabel,
    description: svc.metaDescription,
    url: `${site.siteUrl}/services/${svc.slug}/`,
    provider: {
      "@type": ["LocalBusiness", "Locksmith"],
      "@id": `${site.siteUrl}/#business`,
      name: site.name,
      telephone: site.phone,
    },
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.city}, FL`,
    })),
  };
  return jsonLd(data);
}

function breadcrumb(items) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return jsonLd(data);
}

function faqPage(faq) {
  if (!faq || !faq.length) return "";
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return jsonLd(data);
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

module.exports = { localBusiness, locationBusiness, service, breadcrumb, faqPage };
