const serviceDetails = require("./serviceDetails");

module.exports = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "All Services", href: "/services/" },
      ...serviceDetails.map((s) => ({ label: s.navLabel, href: `/services/${s.slug}/` })),
    ],
  },
  { label: "Service Areas", href: "/locations/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
