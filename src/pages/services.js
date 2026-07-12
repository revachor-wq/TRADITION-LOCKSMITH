const site = require("../data/site");
const services = require("../data/services");
const { icon } = require("../partials/icons");
const { coastalSkyline, photoPlaceholder } = require("../partials/illustrations");

function categoryBlock(cat, i) {
  const reversed = i % 2 === 1;
  return `<section id="${cat.id}" class="${reversed ? "section--sand" : ""}">
    <div class="container">
      <div class="info-split">
        <div style="${reversed ? "order:2" : ""}">
          <div class="icon-chip" style="margin-bottom:16px;width:56px;height:56px;">${icon(cat.icon)}</div>
          <h2>${cat.label} Locksmith</h2>
          <p>${cat.summary}</p>
          <div class="chip-list">
            ${cat.items.map((i2) => `<span class="chip">${i2}</span>`).join("")}
          </div>
          <div class="hero__actions" style="margin-top:24px">
            <a class="btn btn--navy" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
            <a class="btn btn--outline" href="/contact/">Request Service</a>
          </div>
        </div>
        <div style="${reversed ? "order:1" : ""}">
          ${photoPlaceholder({ iconName: cat.icon, ratio: "4 / 3", note: `${cat.label} locksmith service` })}
        </div>
      </div>
    </div>
  </section>`;
}

function render() {
  return `
  <section class="hero">
    ${coastalSkyline()}
    <div class="hero__content">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Services</span></nav>
      <p class="eyebrow hero__eyebrow">${icon("key", "eyebrow")} Our Services</p>
      <h1>Residential, Commercial &amp; Automotive Locksmith Services</h1>
      <p class="hero__lede">Every lock and key service Tradition Locksmith offers across the Treasure Coast — available 24 hours a day, 7 days a week.</p>
      <div class="hero__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
      </div>
    </div>
  </section>

  ${services.categories.map(categoryBlock).join("")}

  <section id="emergency" class="section--navy">
    <div class="container">
      <div class="highlight-banner" style="background:linear-gradient(120deg, var(--navy-800), var(--navy-600));">
        <div class="highlight-banner__icon">${icon("siren")}</div>
        <div>
          <h2>${services.emergency.label}</h2>
          <p>${services.emergency.summary}</p>
        </div>
        <a class="btn btn--gold" href="${site.phoneHref}" style="justify-self:start">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <h2>Not Sure Which Service You Need?</h2>
      <p>Call and describe what's going on — we'll tell you exactly what it'll take to fix it.</p>
      <div class="cta-band__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
        <a class="btn btn--ghost" href="/contact/">Contact Us</a>
      </div>
    </div>
  </section>
  `;
}

module.exports = { render };
