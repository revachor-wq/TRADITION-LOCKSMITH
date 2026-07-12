const { icon } = require("./icons");

// Full-bleed decorative coastal skyline used behind hero sections. Pure vector,
// brand-colored — no photography, so it renders instantly and never breaks.
function coastalSkyline(cls = "hero-skyline") {
  return `
  <svg class="${cls}" viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0D2E51"/>
        <stop offset="55%" stop-color="#173F66"/>
        <stop offset="100%" stop-color="#2A5178"/>
      </linearGradient>
      <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#F3D48A"/>
        <stop offset="100%" stop-color="#C49249"/>
      </radialGradient>
    </defs>
    <rect width="1440" height="420" fill="url(#skyGrad)"/>
    <circle cx="1180" cy="150" r="70" fill="url(#sunGrad)" opacity="0.9"/>
    <path d="M0 300 Q 180 260 360 300 T 720 300 T 1080 300 T 1440 300 V420 H0 Z" fill="#0A2440" opacity="0.55"/>
    <path d="M0 340 Q 200 300 400 340 T 800 340 T 1200 340 T 1440 335 V420 H0 Z" fill="#0A2440" opacity="0.8"/>
    <g opacity="0.9" fill="#0A2440">
      <path d="M120 300c-4-34-30-52-30-52s10 30 30 52Z"/>
      <path d="M120 300c8-40-6-66-6-66s-16 34 6 66Z"/>
      <path d="M120 300c-16-32-46-42-46-42s16 26 46 42Z"/>
      <path d="M120 300c18-30 12-60 12-60s-24 24-12 60Z"/>
      <path d="M120 300c-2-38 18-64 18-64s6 38-18 64Z"/>
      <rect x="115" y="235" width="10" height="70" rx="3"/>
    </g>
  </svg>`;
}

const placeholderLabels = {
  home: "Residential locksmith",
  building: "Commercial locksmith",
  car: "Automotive locksmith",
  key: "Key duplication",
  lockout: "Lockout service",
  chip: "Key fob programming",
  wrench: "Lock installation & repair",
  siren: "24/7 emergency service",
};

// Clearly-labeled placeholder used everywhere a real photo will eventually go.
// Not photography — a brand-styled card with an icon + explicit placeholder note,
// per project decision to avoid unverified/broken hotlinked stock images.
function photoPlaceholder({ iconName = "key", ratio = "4 / 3", note } = {}) {
  const label = note || placeholderLabels[iconName] || "Tradition Locksmith";
  return `
  <div class="photo-placeholder" style="--ratio:${ratio}">
    <div class="photo-placeholder__art">${icon(iconName, "photo-placeholder__icon")}</div>
    <span class="photo-placeholder__badge">Photo placeholder — ${label}</span>
  </div>`;
}

module.exports = { coastalSkyline, photoPlaceholder };
