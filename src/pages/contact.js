const site = require("../data/site");
const locations = require("../data/locations");
const { icon } = require("../partials/icons");
const { coastalSkyline } = require("../partials/illustrations");

function render() {
  const options = locations
    .map((l) => `<option value="${l.city}">${l.city}, FL</option>`)
    .join("");

  return `
  <section class="hero">
    ${coastalSkyline()}
    <div class="hero__content">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Contact</span></nav>
      <p class="eyebrow hero__eyebrow">${icon("mail", "eyebrow")} Get In Touch</p>
      <h1>Contact Tradition Locksmith</h1>
      <p class="hero__lede">Call anytime, day or night, or send us the details below and we'll follow up right away.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="info-split">
        <div>
          <h2>Send a Request</h2>
          <form class="form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact">
            <p class="field" style="display:none">
              <label>Don't fill this out if you're human: <input name="bot-field"></label>
            </p>
            <div class="form-row">
              <div class="field">
                <label for="name">Full Name</label>
                <input id="name" name="name" type="text" required autocomplete="name">
              </div>
              <div class="field">
                <label for="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" required autocomplete="tel">
              </div>
            </div>
            <div class="form-row">
              <div class="field">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" required autocomplete="email">
              </div>
              <div class="field">
                <label for="area">Service Area</label>
                <select id="area" name="area">
                  <option value="">Select a city</option>
                  ${options}
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label for="service">Type of Service</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Automotive">Automotive</option>
                <option value="Emergency / Lockout">Emergency / Lockout</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="field">
              <label for="message">Tell us what's going on</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div class="field field--checkbox">
              <input id="consent" name="consent" type="checkbox" required>
              <label for="consent">I agree to be contacted by Tradition Locksmith about this request.</label>
            </div>
            <button class="btn btn--gold btn--block" type="submit">${icon("mail", "btn__icon")}<span>Send Request</span></button>
          </form>
        </div>

        <div>
          <h2>Direct Contact</h2>
          <div class="info-list">
            <div class="info-list__item">
              <div class="icon-chip">${icon("phone")}</div>
              <div>
                <h3>Phone</h3>
                <p><a href="${site.phoneHref}" style="color:var(--navy-800);font-weight:600">${site.phone}</a><br>Live answer, 24 hours a day, 7 days a week.</p>
              </div>
            </div>
            <div class="info-list__item">
              <div class="icon-chip">${icon("mail")}</div>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:${site.email}" style="color:var(--navy-800);font-weight:600">${site.email}</a></p>
              </div>
            </div>
            <div class="info-list__item">
              <div class="icon-chip">${icon("mapPin")}</div>
              <div>
                <h3>Address</h3>
                <p><a href="${site.mapsDirectionsUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--navy-800);font-weight:600">${site.address.street}<br>${site.address.city}, ${site.address.state} ${site.address.zip}</a></p>
              </div>
            </div>
            <div class="info-list__item">
              <div class="icon-chip">${icon("clock")}</div>
              <div>
                <h3>Hours</h3>
                <p>${site.hours}</p>
              </div>
            </div>
          </div>

          <div class="card" style="margin-top:26px">
            <iframe
              title="Map to ${site.name} at ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}"
              src="https://www.google.com/maps?q=${encodeURIComponent(site.address.street + ", " + site.address.city + ", " + site.address.state + " " + site.address.zip)}&output=embed"
              width="100%" height="280" style="border:0;border-radius:10px" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

module.exports = { render };
