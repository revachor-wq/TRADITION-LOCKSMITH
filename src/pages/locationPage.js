const site = require("../data/site");
const services = require("../data/services");
const locations = require("../data/locations");
const { icon } = require("../partials/icons");
const { coastalSkyline, photoPlaceholder } = require("../partials/illustrations");

function render(loc) {
  const others = loc.nearby.map((slug) => locations.find((l) => l.slug === slug));

  return `
  <section class="hero">
    ${coastalSkyline()}
    <div class="hero__content">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/locations/">Service Areas</a><span aria-hidden="true">/</span><span>${loc.city}</span></nav>
      <p class="eyebrow hero__eyebrow">${icon("mapPin", "eyebrow")} ${loc.heroKicker} · ${loc.county}</p>
      <h1>${loc.h1}</h1>
      <p class="hero__lede">${loc.intro}</p>
      <div class="hero__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
        <a class="btn btn--ghost" href="/contact/">Request Service</a>
      </div>
      <div class="hero__badges">
        <span class="hero__badge">${icon("clock")} Open 24/7 in ${loc.city}</span>
        <span class="hero__badge">${icon("key")} Residential · Commercial · Automotive</span>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="info-split">
        <div>
          <p class="eyebrow">Local to ${loc.city}</p>
          <h2>Know ${loc.city} Like the Back of Our Hand</h2>
          <p>${loc.localFlavor}</p>
          <p class="eyebrow" style="margin-top:1.5em">Neighborhoods &amp; Areas We Cover</p>
          <div class="chip-list" style="margin-top:10px">
            ${loc.neighborhoods.map((n) => `<span class="chip">${n}</span>`).join("")}
          </div>
        </div>
        ${photoPlaceholder({ iconName: "mapPin", ratio: "4 / 5", note: `${loc.city} service area` })}
      </div>
    </div>
  </section>

  <section class="section--sand">
    <div class="container">
      <div class="highlight-banner">
        <div class="highlight-banner__icon">${icon("shield")}</div>
        <div>
          <h2>${loc.city} Service Notes</h2>
          <p>${loc.serviceNote}</p>
        </div>
        <a class="btn btn--gold" href="${site.phoneHref}" style="justify-self:start">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow">Services in ${loc.city}</p>
        <h2>What We Handle in ${loc.city}, FL</h2>
      </div>
      <div class="grid-3">
        ${services.categories
          .map(
            (cat) => `<div class="service-card" id="${cat.id}">
          <div class="service-card__icon">${icon(cat.icon)}</div>
          <h3>${cat.label} Locksmith in ${loc.city}</h3>
          <p>${cat.summary}</p>
          <ul>${cat.items
            .slice(0, 4)
            .map((i) => `<li>${icon("checkCircle")}<span>${i}</span></li>`)
            .join("")}</ul>
        </div>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section--sand">
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow">${loc.city} FAQ</p>
        <h2>Common Questions from ${loc.city} Customers</h2>
      </div>
      <div class="faq">
        ${loc.faq
          .map(
            (f, i) => `<details class="faq-item" ${i === 0 ? "open" : ""}>
          <summary>${f.q}${icon("chevronDown")}</summary>
          <p>${f.a}</p>
        </details>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow">Nearby</p>
        <h2>Also Serving Nearby Areas</h2>
      </div>
      <div class="grid-4">
        ${others
          .map(
            (l) => `<a class="location-card" href="/locations/${l.slug}/">
          <span class="location-card__county">${l.county}</span>
          <h3>${l.city}, FL</h3>
          <p>${l.heroKicker}</p>
          <span class="location-card__link">View ${l.city} page ${icon("arrowRight")}</span>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <h2>Locked Out in ${loc.city}?</h2>
      <p>Call now and we'll get a locksmith headed your way — available 24 hours a day, 7 days a week.</p>
      <div class="cta-band__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
        <a class="btn btn--ghost" href="/contact/">Contact Us</a>
      </div>
    </div>
  </section>
  `;
}

module.exports = { render };
