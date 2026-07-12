const { head } = require("./head");
const { header } = require("./header");
const { footer } = require("./footer");
const site = require("../data/site");
const assetVersion = require("../asset-version");

function layout({
  title,
  description,
  canonical,
  activePath = "/",
  bodyClass = "",
  schemaHtml = "",
  content,
}) {
  return `<!doctype html>
<html lang="en">
<head>
${head({ title, description, canonical, schemaHtml })}
</head>
<body class="${bodyClass}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${header(activePath)}
  <main id="main">
  ${content}
  </main>
  ${footer()}
  <a class="mobile-call-fab" href="${site.phoneHref}">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 4h3l1.5 4.5-2 1.5a11 11 0 0 0 6 6l1.5-2 4.5 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 4 5.6 1.5 1.5 0 0 1 5.5 4Z"/></svg>
    <span>Call Now</span>
  </a>
  <script src="/js/main.js?v=${assetVersion.get()}" defer></script>
</body>
</html>`;
}

module.exports = { layout };
