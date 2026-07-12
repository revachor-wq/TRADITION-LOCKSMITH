// Populated once by build.js (content hash of the built CSS/JS) so cache-busted
// URLs can be embedded in every page's <head>/<script> tags. Long, "immutable"
// cache headers on /css/* and /js/* are only safe because this query string
// changes whenever the file content changes.
let version = "dev";

module.exports = {
  get: () => version,
  set: (v) => {
    version = v;
  },
};
