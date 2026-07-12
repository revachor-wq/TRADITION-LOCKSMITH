const site = require("../data/site");
const { icon } = require("../partials/icons");
const { coastalSkyline } = require("../partials/illustrations");

function render() {
  return `
  <section class="hero" style="min-height:60vh;display:flex;align-items:center;">
    ${coastalSkyline()}
    <div class="hero__content" style="text-align:center;margin-inline:auto;">
      <p class="eyebrow hero__eyebrow" style="justify-content:center">404</p>
      <h1>Looks Like This Page Wandered Off</h1>
      <p class="hero__lede" style="margin-inline:auto;text-align:center">We couldn't find that page. Try the homepage, or call us directly — we're happy to help.</p>
      <div class="hero__actions" style="justify-content:center">
        <a class="btn btn--gold" href="/">${icon("arrowRight", "btn__icon")}<span>Back to Homepage</span></a>
        <a class="btn btn--ghost" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
      </div>
    </div>
  </section>
  `;
}

module.exports = { render };
