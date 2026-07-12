const site = require("../data/site");
const locations = require("../data/locations");
const { icon } = require("../partials/icons");
const { coastalSkyline } = require("../partials/illustrations");

function render() {
  return `
  <section class="hero">
    ${coastalSkyline()}
    <div class="hero__content">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Service Areas</span></nav>
      <p class="eyebrow hero__eyebrow">${icon("mapPin", "eyebrow")} Service Areas</p>
      <h1>Serving the Treasure Coast, Florida</h1>
      <p class="hero__lede">Tradition Locksmith is based in Port St. Lucie and dispatches locksmiths across eight communities spanning St. Lucie, Martin, Indian River, and northern Palm Beach counties.</p>
      <div class="hero__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <h2 class="sr-only">All Treasure Coast Service Areas</h2>
      <div class="grid-4">
        ${locations
          .map(
            (l) => `<a class="location-card" href="/locations/${l.slug}/">
          <span class="location-card__county">${l.county}</span>
          <h3>${l.city}, FL</h3>
          <p>${l.heroKicker}</p>
          <span class="location-card__link">View ${l.city} service page ${icon("arrowRight")}</span>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <h2>Don't See Your City?</h2>
      <p>Call us anyway — we may still be able to help, even just outside our core coverage area.</p>
      <div class="cta-band__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
        <a class="btn btn--ghost" href="/contact/">Contact Us</a>
      </div>
    </div>
  </section>
  `;
}

module.exports = { render };
