const site = require("../data/site");
const serviceDetails = require("../data/serviceDetails");
const { icon } = require("../partials/icons");
const { coastalSkyline, brandIllustration, categoryIllustration } = require("../partials/illustrations");

const illustratedIcons = new Set(["home", "building", "car"]);

function render(service) {
  const others = serviceDetails.filter((s) => s.slug !== service.slug).slice(0, 3);
  const art = illustratedIcons.has(service.icon)
    ? categoryIllustration(service.icon, { ratio: "4 / 3" })
    : brandIllustration({ ratio: "4 / 3" });

  return `
  <section class="hero">
    ${coastalSkyline()}
    <div class="hero__content">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/services/">Services</a><span aria-hidden="true">/</span><span>${service.navLabel}</span></nav>
      <p class="eyebrow hero__eyebrow">${icon(service.icon, "eyebrow")} ${service.kicker}</p>
      <h1>${service.h1}</h1>
      <p class="hero__lede">${service.intro}</p>
      <div class="hero__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
        <a class="btn btn--ghost" href="/contact/">Request Service</a>
      </div>
      <div class="hero__badges">
        <span class="hero__badge">${icon("clock")} Available 24/7</span>
        <span class="hero__badge">${icon("mapPin")} Treasure Coast wide</span>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="info-split">
        <div>
          <p class="eyebrow">What's Included</p>
          <h2>${service.navLabel} Coverage</h2>
          <div class="chip-list" style="margin-top:10px">
            ${service.included.map((i) => `<span class="chip">${i}</span>`).join("")}
          </div>
        </div>
        ${art}
      </div>
    </div>
  </section>

  <section class="section--sand">
    <div class="container">
      <div class="section-head" style="max-width:75ch">
        ${service.body.map((p) => `<p>${p}</p>`).join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="highlight-banner">
        <div class="highlight-banner__icon">${icon("phone")}</div>
        <div>
          <h2>Ready for ${service.navLabel}?</h2>
          <p>Call ${site.phone} and describe what's going on — we'll tell you exactly what it takes and get a locksmith headed your way.</p>
        </div>
        <a class="btn btn--gold" href="${site.phoneHref}" style="justify-self:start">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
      </div>
    </div>
  </section>

  <section class="section--sand">
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow">FAQ</p>
        <h2>Common Questions About ${service.navLabel}</h2>
      </div>
      <div class="faq">
        ${service.faq
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
        <p class="eyebrow">More Services</p>
        <h2>Other Ways We Can Help</h2>
      </div>
      <div class="grid-3">
        ${others
          .map(
            (s) => `<a class="location-card" href="/services/${s.slug}/">
          <span class="location-card__county">${s.kicker}</span>
          <h3>${s.navLabel}</h3>
          <p>${s.metaDescription}</p>
          <span class="location-card__link">Learn more ${icon("arrowRight")}</span>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <h2>${service.navLabel}, Available 24/7</h2>
      <p>Call now and we'll get a locksmith headed your way, anywhere across the Treasure Coast.</p>
      <div class="cta-band__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
        <a class="btn btn--ghost" href="/contact/">Contact Us</a>
      </div>
    </div>
  </section>
  `;
}

module.exports = { render };
