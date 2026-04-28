import type { NavLink } from "./types";

export const nmdcBrand = {
  name: "NMDC Group",
  logo: "/images/landing/nmdc-group-logo.svg",
  logoAlt: "NMDC Group",
};

export const nmdcPageLinks = [
  { label: "Home", href: "/" },
  { label: "NMDC Overview", href: "/nmdc-group/nmdc-overview" },
  { label: "People & Culture", href: "/nmdc-group/people-and-culture" },
  { label: "Technology", href: "/nmdc-group/technology" },
  { label: "Safeen Subsea", href: "/nmdc-group/safeen-subsea" },
];

export function getNmdcNavLinks(activeHref: string): NavLink[] {
  return nmdcPageLinks.map((link) => ({
    ...link,
    active: link.href === activeHref,
  }));
}

export const nmdcBusinessLinks = [
  "NMDC Dredging & Marine",
  "NMDC Energy",
  "NMDC Engineering",
  "NMDC Infra",
  "NMDC LTS",
];

export const nmdcEmailLinks = [
  { label: "General inquiries", value: "NMDC@nmdc-group.com" },
  { label: "Commercial inquiries", value: "info@nmdc-group.com" },
  { label: "Careers", value: "recruitment@nmdc-group.com" },
  { label: "Vendors registration", value: "vendors@nmdc-group.com" },
];
