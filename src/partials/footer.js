const site = require("../data/site");
const locations = require("../data/locations");
const serviceDetails = require("../data/serviceDetails");
const { icon } = require("./icons");
const { footerWatermark } = require("./illustrations");

function footer() {
  const locationLinks = locations
    .map((l) => `<li><a href="/locations/${l.slug}/">${l.city}, FL</a></li>`)
    .join("");
  const serviceLinks = serviceDetails
    .map((s) => `<li><a href="/services/${s.slug}/">${s.navLabel}</a></li>`)
    .join("");

  return `<footer class="site-footer">
    ${footerWatermark()}
    <div class="site-footer__grid">
      <div class="footer-col footer-col--brand">
        <a class="brand brand--footer" href="/">
          <picture>
            <source srcset="/images/brand/emblem-sm.webp" type="image/webp">
            <img src="/images/brand/emblem-sm.png" alt="" width="44" height="32" class="brand__mark" loading="lazy">
          </picture>
          <span class="brand__name">Tradition <em>Locksmith</em></span>
        </a>
        <p class="footer-col__tagline">Serving the Treasure Coast, Florida</p>
        <p class="footer-col__legal">${site.legalName}<br>Sunbiz Reg. #${site.sunbiz}</p>
        <div class="footer-social" aria-label="Directions">
          <a href="${site.mapsDirectionsUrl}" target="_blank" rel="noopener noreferrer" aria-label="Get directions on Google Maps">${icon("mapPin")}</a>
          <a href="${site.phoneHref}" aria-label="Call ${site.name}">${icon("phone")}</a>
          <a href="mailto:${site.email}" aria-label="Email ${site.name}">${icon("mail")}</a>
        </div>
      </div>

      <div class="footer-col">
        <h3>Contact</h3>
        <ul class="footer-contact">
          <li><a href="${site.phoneHref}">${icon("phone")}<span>${site.phone}</span></a></li>
          <li><a href="mailto:${site.email}">${icon("mail")}<span>${site.email}</span></a></li>
          <li><a href="${site.mapsDirectionsUrl}" target="_blank" rel="noopener noreferrer">${icon("mapPin")}<span>${site.address.street}<br>${site.address.city}, ${site.address.state} ${site.address.zip}</span></a></li>
          <li>${icon("clock")}<span>${site.hours}</span></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Services</h3>
        <ul>${serviceLinks}</ul>
      </div>

      <div class="footer-col">
        <h3>Service Areas</h3>
        <ul class="footer-locations">${locationLinks}</ul>
      </div>
    </div>

    <div class="site-footer__bottom">
      <p>&copy; ${new Date().getFullYear()} ${site.name}. All rights reserved.</p>
      <p class="site-footer__disclaimer">Site imagery is brand illustration placeholder pending on-location photography.</p>
    </div>
  </footer>`;
}

module.exports = { footer };
