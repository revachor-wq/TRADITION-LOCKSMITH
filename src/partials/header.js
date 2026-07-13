const site = require("../data/site");
const nav = require("../data/nav");
const { icon } = require("./icons");

function isActive(href, activePath) {
  return href === activePath;
}

function desktopLinks(activePath) {
  return nav
    .map((item) => {
      const active = isActive(item.href, activePath) ? ' aria-current="page"' : "";
      if (!item.children) {
        return `<li><a href="${item.href}"${active}>${item.label}</a></li>`;
      }
      const submenu = item.children
        .map((child) => `<li><a href="${child.href}">${child.label}</a></li>`)
        .join("");
      return `<li class="nav-dropdown">
        <a href="${item.href}"${active} aria-haspopup="true">${item.label}${icon("chevronDown", "nav-dropdown__caret")}</a>
        <ul class="nav-dropdown__menu">${submenu}</ul>
      </li>`;
    })
    .join("");
}

function mobileLinks(activePath) {
  return nav
    .map((item) => {
      const active = isActive(item.href, activePath) ? ' aria-current="page"' : "";
      if (!item.children) {
        return `<li><a href="${item.href}"${active}>${item.label}</a></li>`;
      }
      const submenu = item.children
        .map((child) => `<li><a class="mobile-nav__sublink" href="${child.href}">${child.label}</a></li>`)
        .join("");
      return `<li><a href="${item.href}"${active}>${item.label}</a></li>${submenu}`;
    })
    .join("");
}

function header(activePath = "/") {
  return `<header class="site-header">
    <div class="site-header__bar">
      <a class="brand" href="/">
        <img src="/images/brand/emblem-sm.png" alt="" width="52" height="38" class="brand__mark" loading="eager">
        <span class="brand__type">
          <span class="brand__name">Tradition <em>Locksmith</em></span>
          <span class="brand__tag">Serving the Treasure Coast, Florida</span>
        </span>
      </a>

      <nav class="main-nav" aria-label="Primary">
        <ul>${desktopLinks(activePath)}</ul>
      </nav>

      <div class="site-header__actions">
        <a class="btn btn--ghost btn--sm header-hours" href="/contact/">
          ${icon("clock", "btn__icon")}<span>Open 24/7</span>
        </a>
        <a class="btn btn--gold btn--sm" href="${site.phoneHref}" aria-label="Call ${site.phone}">
          ${icon("phone", "btn__icon")}<span aria-hidden="true">${site.phone}</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
          ${icon("menu", "nav-toggle__open")}
          ${icon("close", "nav-toggle__close")}
        </button>
      </div>
    </div>

    <div class="mobile-nav" id="mobile-nav">
      <ul>${mobileLinks(activePath)}</ul>
      <a class="btn btn--gold btn--block" href="${site.phoneHref}">${icon("phone", "btn__icon")}<span>Call ${site.phone}</span></a>
    </div>
  </header>`;
}

module.exports = { header };
