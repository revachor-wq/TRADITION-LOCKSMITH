// Line-style inline SVG icons, currentColor stroke — small, crisp, no image requests.
const wrap = (paths, viewBox = "0 0 24 24") =>
  `<svg viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

const icons = {
  home: wrap(
    `<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9"/><path d="M9.5 20v-6h5v6"/>`
  ),
  building: wrap(
    `<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/><path d="M10 21v-3h4v3"/>`
  ),
  car: wrap(
    `<path d="M4 16v-3.5L6 8h12l2 4.5V16"/><path d="M4 16h16v2.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V17h-9v1.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V16Z"/><circle cx="7.5" cy="16" r="1.4"/><circle cx="16.5" cy="16" r="1.4"/>`
  ),
  phone: wrap(
    `<path d="M5.5 4h3l1.5 4.5-2 1.5a11 11 0 0 0 6 6l1.5-2 4.5 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 4 5.6 1.5 1.5 0 0 1 5.5 4Z"/>`
  ),
  mail: wrap(
    `<rect x="3.5" y="5.5" width="17" height="13" rx="1.4"/><path d="m4.5 6.5 7.5 6 7.5-6"/>`
  ),
  mapPin: wrap(
    `<path d="M12 21.5s7-6.3 7-12A7 7 0 0 0 5 9.5c0 5.7 7 12 7 12Z"/><circle cx="12" cy="9.5" r="2.4"/>`
  ),
  clock: wrap(`<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`),
  shield: wrap(
    `<path d="M12 3.5 19 6v6c0 5-3 8-7 8.5-4-.5-7-3.5-7-8.5V6Z"/><path d="m9 12 2 2 4-4.2"/>`
  ),
  key: wrap(
    `<circle cx="7.5" cy="15.5" r="3.5"/><path d="M10 13 18.5 4.5"/><path d="M15.5 7.5 18 5M18 10l2.5-2.5"/>`
  ),
  checkCircle: wrap(
    `<circle cx="12" cy="12" r="8.5"/><path d="m8.3 12.3 2.4 2.4 5-5.4"/>`
  ),
  menu: wrap(`<path d="M4 7h16M4 12h16M4 17h16"/>`),
  close: wrap(`<path d="M6 6l12 12M18 6 6 18"/>`),
  star: wrap(
    `<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8Z"/>`
  ),
  arrowRight: wrap(`<path d="M4 12h16M14 6l6 6-6 6"/>`),
  chevronDown: wrap(`<path d="m6 9 6 6 6-6"/>`),
  lockout: wrap(
    `<rect x="6" y="10.5" width="12" height="9.5" rx="1.4"/><path d="M9 10.5V8a3 3 0 0 1 6 0v2.5"/><circle cx="12" cy="14.5" r="1.4"/><path d="M12 16v1.6"/>`
  ),
  rekey: wrap(
    `<circle cx="8" cy="16" r="3.2"/><path d="M10.3 13.7 19 5"/><path d="M15.5 8.5 18 6M17.5 10.5 20 8"/>`
  ),
  chip: wrap(
    `<rect x="6" y="6" width="12" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l1.8 1.8M16.2 16.2 18 18M18 6l-1.8 1.8M7.8 16.2 6 18"/>`
  ),
  wrench: wrap(
    `<path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L4 16.7 7.3 20l5.3-5.3a4 4 0 0 0 5.1-5.4l-2.9 2.9-2.1-2.1Z"/>`
  ),
  siren: wrap(
    `<path d="M12 4v2"/><path d="M5.5 20h13l-.7-6.8A5.8 5.8 0 0 0 12 8a5.8 5.8 0 0 0-5.8 5.2Z"/><path d="M4 20h16"/>`
  ),
  quote: wrap(
    `<path d="M7 8.5c-1.8 0-3 1.4-3 3.2 0 1.9 1.4 3.3 3.2 3.3.2 2-1.2 3.5-3.2 4"/><path d="M16 8.5c-1.8 0-3 1.4-3 3.2 0 1.9 1.4 3.3 3.2 3.3.2 2-1.2 3.5-3.2 4"/>`
  ),
  facebook: wrap(
    `<path d="M14 21v-7h2.4l.4-3H14V9c0-.9.3-1.5 1.7-1.5H17V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H8.5v3H11v7Z"/>`,
    "0 0 24 24"
  ),
  google: wrap(
    `<path d="M20.5 12.2c0-.6-.1-1.2-.2-1.7h-8.1v3.4h4.6a4 4 0 0 1-1.7 2.6v2.2h2.7c1.6-1.5 2.5-3.7 2.5-6.5Z"/><path d="M12.2 20.5c2.3 0 4.2-.8 5.6-2.1l-2.7-2.2c-.8.5-1.7.8-2.9.8-2.2 0-4.1-1.5-4.8-3.5H4.6v2.3a8.5 8.5 0 0 0 7.6 4.7Z"/><path d="M7.4 13.5a5.1 5.1 0 0 1 0-3.2V8H4.6a8.5 8.5 0 0 0 0 7.8Z"/><path d="M12.2 6.8c1.3 0 2.4.4 3.3 1.3l2.4-2.4A8.3 8.3 0 0 0 12.2 3.5a8.5 8.5 0 0 0-7.6 4.5l2.8 2.3c.7-2 2.6-3.5 4.8-3.5Z"/>`,
    "0 0 24 24"
  ),
};

function icon(name, cls = "") {
  const svg = icons[name];
  if (!svg) throw new Error(`Unknown icon: ${name}`);
  return cls ? svg.replace("<svg ", `<svg class="${cls}" `) : svg;
}

module.exports = { icon };
