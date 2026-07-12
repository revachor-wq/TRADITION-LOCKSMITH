const site = require("../data/site");
const services = require("../data/services");
const locations = require("../data/locations");
const { icon } = require("../partials/icons");
const { coastalSkyline, brandIllustration } = require("../partials/illustrations");

function serviceCard(cat) {
  return `<div class="service-card" id="${cat.id}">
    <div class="service-card__icon">${icon(cat.icon)}</div>
    <h3>${cat.label} Locksmith</h3>
    <p>${cat.summary}</p>
    <ul>${cat.items
      .slice(0, 4)
      .map((i) => `<li>${icon("checkCircle")}<span>${i}</span></li>`)
      .join("")}</ul>
    <a class="service-card__link" href="/services/#${cat.id}">See all ${cat.label.toLowerCase()} services ${icon("arrowRight")}</a>
  </div>`;
}

function locationTeaser(loc) {
  return `<a class="location-card" href="/locations/${loc.slug}/">
    <span class="location-card__county">${loc.county}</span>
    <h3>${loc.city}, FL</h3>
    <p>${loc.heroKicker}</p>
    <span class="location-card__link">View ${loc.city} service page ${icon("arrowRight")}</span>
  </a>`;
}

function render() {
  return `
  <section class="hero hero--split">
    ${coastalSkyline()}
    <div class="hero__content">
      <p class="hero__eyebrow eyebrow">${icon("shield", "eyebrow")} 24/7 Emergency Locksmith</p>
      <h1>Trusted Locksmith Service for the Treasure Coast</h1>
      <p class="hero__lede">Residential, commercial, and automotive locksmith service from a team based right in Port St. Lucie's Tradition neighborhood — available around the clock, every day of the year.</p>
      <div class="hero__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
        <a class="btn btn--ghost" href="/contact/">${icon("mail", "btn__icon")}<span>Request Service</span></a>
      </div>
      <div class="hero__badges">
        <span class="hero__badge">${icon("clock")} Open 24/7 — nights, weekends, holidays</span>
        <span class="hero__badge">${icon("mapPin")} Local to the Treasure Coast</span>
        <span class="hero__badge">${icon("key")} Residential · Commercial · Automotive</span>
      </div>
    </div>
  </section>

  <div class="trust-bar">
    <div class="container trust-bar__row">
      <span class="trust-bar__item">${icon("phone")} Live phone answer, 24/7</span>
      <span class="trust-bar__item">${icon("home")} Residential &amp; commercial</span>
      <span class="trust-bar__item">${icon("car")} Automotive key &amp; fob programming</span>
      <span class="trust-bar__item">${icon("mapPin")} 8 Treasure Coast service areas</span>
    </div>
  </div>

  <section class="section--sand" id="services">
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow">What We Do</p>
        <h2>One Call for Every Lock &amp; Key</h2>
        <p>From a first-time-buyer's front door to a fleet of commercial vehicles, Tradition Locksmith covers residential, commercial, and automotive work under one roof.</p>
      </div>
      <div class="grid-3">
        ${services.categories.map(serviceCard).join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="highlight-banner">
        <div class="highlight-banner__icon">${icon("siren")}</div>
        <div>
          <h2>Locked Out Right Now?</h2>
          <p>We answer the phone 24 hours a day, 7 days a week — including holidays. Call ${site.phone} and we'll get a locksmith headed your way.</p>
        </div>
        <a class="btn btn--gold" href="${site.phoneHref}" style="justify-self:start">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="info-split">
        <div>
          <p class="eyebrow">Why Locals Call Us</p>
          <h2>Based in Tradition. Built on Trust.</h2>
          <div class="info-list">
            <div class="info-list__item">
              <div class="icon-chip">${icon("mapPin")}</div>
              <div>
                <h3>Local, not a call center</h3>
                <p>Our shop is based right in Port St. Lucie's Tradition neighborhood — the calls you make and the trucks that show up are local to the Treasure Coast.</p>
              </div>
            </div>
            <div class="info-list__item">
              <div class="icon-chip">${icon("clock")}</div>
              <div>
                <h3>Actually open 24/7</h3>
                <p>Lockouts don't wait for business hours, so neither do we. Nights, weekends, and holidays are covered.</p>
              </div>
            </div>
            <div class="info-list__item">
              <div class="icon-chip">${icon("shield")}</div>
              <div>
                <h3>One shop, three specialties</h3>
                <p>Residential, commercial, and automotive locksmith work — you don't need three different companies for your house, your business, and your car.</p>
              </div>
            </div>
            <div class="info-list__item">
              <div class="icon-chip">${icon("chip")}</div>
              <div>
                <h3>Old locks and new tech</h3>
                <p>From decades-old original hardware to smart locks and transponder key programming, we carry the tools for both.</p>
              </div>
            </div>
          </div>
        </div>
        ${brandIllustration({ ratio: "4 / 5" })}
      </div>
    </div>
  </section>

  <section class="section--navy">
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow">How It Works</p>
        <h2>Simple, From Call to Key</h2>
      </div>
      <div class="steps">
        <div class="step">
          <div class="step__num">01</div>
          <h3>Call or request online</h3>
          <p>Reach us anytime at ${site.phone} or send details through our contact form.</p>
        </div>
        <div class="step">
          <div class="step__num">02</div>
          <h3>We talk through the job</h3>
          <p>Tell us what's going on — lockout, rekey, fob programming — and we'll explain what to expect.</p>
        </div>
        <div class="step">
          <div class="step__num">03</div>
          <h3>A locksmith heads your way</h3>
          <p>We dispatch from the Treasure Coast, so we're rarely far from wherever you are.</p>
        </div>
        <div class="step">
          <div class="step__num">04</div>
          <h3>Job done, on the spot</h3>
          <p>Most residential, commercial, and automotive jobs are completed in a single visit.</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow">Where We Work</p>
        <h2>Serving the Treasure Coast, Florida</h2>
        <p>Based in Port St. Lucie's Tradition neighborhood and serving eight communities across St. Lucie, Martin, Indian River, and northern Palm Beach counties.</p>
      </div>
      <div class="grid-4">
        ${locations.map(locationTeaser).join("")}
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <h2>Ready When You Are</h2>
      <p>Whether it's a late-night lockout or a scheduled rekey, Tradition Locksmith is one call away, 24/7.</p>
      <div class="cta-band__actions">
        <a class="btn btn--gold" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
        <a class="btn btn--ghost" href="/contact/">${icon("mail", "btn__icon")}<span>Contact Us</span></a>
      </div>
    </div>
  </section>
  `;
}

module.exports = { render };
