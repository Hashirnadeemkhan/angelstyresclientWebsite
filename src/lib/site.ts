// Central business information for West Yorkshire Mobile Mechanic.
// Update these values in one place and they flow through the whole site.

export const site = {
  name: "West Yorkshire Mobile Mechanic",
  shortName: "WY Mobile Mechanic",
  tagline: "Mobile Car Repairs & Servicing — We Come To You",
  phoneDisplay: "+44 7467 478567",
  phoneHref: "tel:+447467478567",
  whatsappHref: "https://wa.me/447467478567",
  email: "info@westyorkshiremobilemechanic.co.uk",
  address: {
    street: "44 Balmoral Ave",
    city: "Huddersfield",
    postcode: "HD4 5LJ",
    country: "United Kingdom",
    full: "44 Balmoral Ave, Huddersfield HD4 5LJ",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=44+Balmoral+Ave+Huddersfield+HD4+5LJ",
  hours: "Mon–Sun · 7:00am – 9:00pm",
  url: "https://www.westyorkshiremobilemechanic.co.uk",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;
