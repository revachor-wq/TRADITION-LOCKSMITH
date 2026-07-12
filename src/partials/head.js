const site = require("../data/site");

function head({ title, description, canonical, schemaHtml = "" }) {
  const url = `${site.siteUrl}${canonical}`;
  return `<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${url}">
  <meta name="theme-color" content="#0D2E51">
  <meta name="robots" content="index, follow">

  <meta property="og:type" content="business.business">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${url}">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:image" content="${site.siteUrl}/images/brand/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">

  <link rel="icon" type="image/png" sizes="32x32" href="/images/brand/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/images/brand/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/images/brand/favicon-180.png">
  <link rel="manifest" href="/site.webmanifest">

  <link rel="preload" as="font" type="font/woff2" href="/fonts/jost-latin-400-normal.woff2" crossorigin>
  <link rel="preload" as="font" type="font/woff2" href="/fonts/playfair-display-latin-700-normal.woff2" crossorigin>
  <link rel="stylesheet" href="/css/style.css">
  ${schemaHtml}`;
}

module.exports = { head };
