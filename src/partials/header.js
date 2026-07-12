const site = require("../data/site");
const nav = require("../data/nav");
const { icon } = require("./icons");

function header(activePath = "/") {
  const links = nav
    .map((item) => {
      const active = item.href === activePath ? ' aria-current="page"' : "";
      return `<li><a href="${item.href}"${active}>${item.label}</a></li>`;
    })
    .join("");

  return `<header class="site-header">
    <div class="site-header__bar">
      <a class="brand" href="/" aria-label="${site.name} — Home">
        <picture>
          <source srcset="/images/brand/emblem-sm.webp" type="image/webp">
          <img src="/images/brand/emblem-sm.webp" alt="" width="56" height="35" class="brand__mark" loading="eager">
        </picture>
        <span class="brand__type">
          <span class="brand__name">Tradition <em>Locksmith</em></span>
          <span class="brand__tag">Serving the Treasure Coast, Florida</span>
        </span>
      </a>

      <nav class="main-nav" aria-label="Primary">
        <ul>${links}</ul>
      </nav>

      <div class="site-header__actions">
        <a class="btn btn--ghost btn--sm header-hours" href="/contact/">
          ${icon("clock", "btn__icon")}<span>Open 24/7</span>
        </a>
        <a class="btn btn--gold btn--sm" href="${site.phoneHref}">
          ${icon("phone", "btn__icon")}<span>${site.phone}</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
          ${icon("menu", "nav-toggle__open")}
          ${icon("close", "nav-toggle__close")}
        </button>
      </div>
    </div>

    <div class="mobile-nav" id="mobile-nav">
      <ul>${links}</ul>
      <a class="btn btn--gold btn--block" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
    </div>
  </header>`;
}

module.exports = { header };
