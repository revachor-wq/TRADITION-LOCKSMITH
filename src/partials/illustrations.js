// Custom brand illustrations (hand-built inline SVG — no external images).
//
// PLACEHOLDER NOTE: these illustrations stand in for real on-location
// photography (team, workshop, jobs in progress) that doesn't exist yet.
// They're intentionally designed to brand standard (navy/gold, coastal line
// art, echoing the logo's circle + palm + padlock + key motif) rather than
// looking like a temporary stand-in — but they should be swapped for real
// photos once available. Search the codebase for calls to
// `brandIllustration()` (Home/About/location pages) and
// `categoryIllustration()` (Services page) to find every usage.

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

let uid = 0;
function nextId(prefix) {
  uid += 1;
  return `${prefix}${uid}`;
}

// Shared card shell: gradient background + dashed brand-motif arc + a couple
// of gold sparkle accents. Every illustration below sits on this.
function cardShell(bgId, sunId, { withCoast = false } = {}) {
  const coast = withCoast
    ? `
    <circle cx="52" cy="0" r="0" opacity="0"/>
    <circle cx="58" cy="422" r="26" fill="url(#${sunId})" opacity="0.95"/>
    <path d="M0 452 Q 60 432 130 452 T 260 452 T 400 452 V500 H0 Z" fill="#08213C" opacity="0.7"/>
    <g opacity="0.85" fill="#0A2440">
      <path d="M62 422c-3-22-20-34-20-34s7 20 20 34Z"/>
      <path d="M62 422c5-26-4-43-4-43s-11 22 4 43Z"/>
      <path d="M62 422c-11-21-30-27-30-27s11 17 30 27Z"/>
      <path d="M62 422c12-19 8-39 8-39s-16 16-8 39Z"/>
      <rect x="58" y="378" width="7" height="46" rx="2"/>
    </g>`
    : "";
  return `
    <defs>
      <linearGradient id="${bgId}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#173F66"/>
        <stop offset="100%" stop-color="#0A2440"/>
      </linearGradient>
      <radialGradient id="${sunId}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#F3D48A"/>
        <stop offset="100%" stop-color="#C49249"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#${bgId})"/>
    ${coast}`;
}

function dashedArc(cx, cy, r) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#C49249" stroke-width="2" stroke-dasharray="3 9" stroke-linecap="round" opacity="0.4"/>`;
}

function sparkle(x, y, s = 6) {
  return `<path d="M${x} ${y - s} L${x + s * 0.28} ${y - s * 0.28} L${x + s} ${y} L${x + s * 0.28} ${y + s * 0.28} L${x} ${y + s} L${x - s * 0.28} ${y + s * 0.28} L${x - s} ${y} L${x - s * 0.28} ${y - s * 0.28} Z" fill="#E8C98A" opacity="0.7"/>`;
}

// Signature illustration: line-art padlock + key with a subtle palm/sunset
// coastal accent, echoing the logo without reproducing it. Used generically
// on Home, About, and every location page (per design direction: one strong
// reusable illustration rather than a unique one per city).
function brandIllustration({ ratio = "4 / 5" } = {}) {
  const bg = nextId("bg");
  const sun = nextId("sun");
  return `
  <div class="brand-illustration-wrap" style="--ratio:${ratio}">
  <svg class="brand-illustration" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of a padlock and key, Tradition Locksmith brand style">
    ${cardShell(bg, sun, { withCoast: true })}
    ${dashedArc(232, 200, 148)}
    ${sparkle(320, 96, 7)}
    ${sparkle(300, 340, 5)}

    <!-- key, crossing behind the lock -->
    <g fill="#C49249">
      <rect x="230" y="222" width="150" height="16" rx="8"/>
      <path d="M356 214 366 224 356 234 346 224Z"/>
      <path d="M330 214 340 224 330 234 320 224Z"/>
      <circle cx="245" cy="230" r="26"/>
    </g>
    <circle cx="245" cy="230" r="10" fill="#0A2440"/>

    <!-- padlock -->
    <path d="M160 210v-38a56 56 0 0 1 112 0v38" fill="none" stroke="#F7F1E6" stroke-width="10" stroke-linecap="round"/>
    <rect x="130" y="205" width="152" height="130" rx="18" fill="#173F66" stroke="#F7F1E6" stroke-width="6"/>
    <circle cx="206" cy="256" r="16" fill="#C49249"/>
    <path d="M199 268 L213 268 L209 296 L203 296 Z" fill="#C49249"/>
  </svg>
  </div>`;
}

const categoryMeta = {
  home: { label: "Residential" },
  building: { label: "Commercial" },
  car: { label: "Automotive" },
};

function residentialArt() {
  return `
  <g>
    <path d="M60 190 L200 90 L340 190" fill="none" stroke="#F7F1E6" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="90" y="180" width="220" height="130" rx="6" fill="#173F66" stroke="#F7F1E6" stroke-width="6"/>
    <rect x="176" y="230" width="48" height="80" rx="4" fill="#C49249"/>
    <rect x="118" y="212" width="38" height="38" rx="4" fill="#0A2440" stroke="#E8C98A" stroke-width="3"/>
    <rect x="244" y="212" width="38" height="38" rx="4" fill="#0A2440" stroke="#E8C98A" stroke-width="3"/>
    <rect x="30" y="308" width="340" height="8" rx="4" fill="#0A2440" opacity="0.6"/>
  </g>`;
}

function commercialArt() {
  return `
  <g>
    <rect x="110" y="70" width="180" height="240" rx="6" fill="#173F66" stroke="#F7F1E6" stroke-width="6"/>
    ${[0, 1, 2, 3].map((row) => [0, 1, 2].map((col) => `<rect x="${132 + col * 48}" y="${96 + row * 48}" width="30" height="30" rx="3" fill="#0A2440" stroke="#E8C98A" stroke-width="2.5"/>`).join("")).join("")}
    <rect x="176" y="270" width="48" height="40" rx="3" fill="#C49249"/>
    <rect x="30" y="308" width="340" height="8" rx="4" fill="#0A2440" opacity="0.6"/>
  </g>`;
}

function automotiveArt() {
  return `
  <g>
    <path d="M56 232 74 176a20 20 0 0 1 19-13h134a20 20 0 0 1 18 11l30 58" fill="none" stroke="#F7F1E6" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="46" y="228" width="308" height="58" rx="20" fill="#173F66" stroke="#F7F1E6" stroke-width="6"/>
    <path d="M96 176 118 138h134l24 38Z" fill="#0A2440" stroke="#E8C98A" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="122" cy="288" r="26" fill="#0A2440" stroke="#F7F1E6" stroke-width="6"/>
    <circle cx="278" cy="288" r="26" fill="#0A2440" stroke="#F7F1E6" stroke-width="6"/>
    <g fill="#C49249">
      <rect x="330" y="176" width="34" height="12" rx="6" transform="rotate(28 330 176)"/>
      <circle cx="324" cy="170" r="15"/>
      <circle cx="324" cy="170" r="6" fill="#0A2440"/>
    </g>
    <rect x="20" y="308" width="360" height="8" rx="4" fill="#0A2440" opacity="0.6"/>
  </g>`;
}

const categoryArt = { home: residentialArt, building: commercialArt, car: automotiveArt };

// Services page illustrations: smaller, category-specific line art matching
// the residential/commercial/automotive icons already used in the logo.
function categoryIllustration(iconName, { ratio = "4 / 3" } = {}) {
  const bg = nextId("bg");
  const sun = nextId("sun");
  const art = (categoryArt[iconName] || residentialArt)();
  const label = categoryMeta[iconName]?.label || "Locksmith";
  return `
  <div class="brand-illustration-wrap" style="--ratio:${ratio}">
  <svg class="brand-illustration" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${label} locksmith illustration">
    ${cardShell(bg, sun)}
    ${dashedArc(200, 190, 155)}
    ${sparkle(346, 56, 6)}
    ${art}
  </svg>
  </div>`;
}

module.exports = { coastalSkyline, brandIllustration, categoryIllustration };
