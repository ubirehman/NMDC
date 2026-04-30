import type { NavLink } from "./types";

const nmdcGroupAppUrl = process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "";

const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

const infraAppUrl =
  process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122";

const ltsAppUrl =
  process.env.NEXT_PUBLIC_LTS_APP_URL ?? "http://localhost:3123";

const energyAppUrl =
  process.env.NEXT_PUBLIC_ENERGY_APP_URL ?? "http://localhost:3124";

const withNmdcGroupPath = (path: string) =>
  nmdcGroupAppUrl ? `${nmdcGroupAppUrl.replace(/\/$/, "")}${path}` : path;

export const nmdcGroupOverviewHref = withNmdcGroupPath("/nmdc-overview");

export const nmdcBrand = {
  name: "NMDC Group",
  logo: "/images/landing/nmdc-group-logo.svg",
  logoAlt: "NMDC Group",
};

export const nmdcPageLinks = [
  { label: "Home", href: "/" },
  { label: "NMDC Overview", href: "/nmdc-overview" },
  { label: "People & Culture", href: "/people-and-culture" },
  { label: "Technology", href: "/technology" },
  { label: "Safeen Subsea", href: "/safeen-subsea" },
];

export function getNmdcNavLinks(activeHref: string): NavLink[] {
  return nmdcPageLinks.map((link) => ({
    ...link,
    active: link.href === activeHref,
  }));
}

export const nmdcBusinessLinks = [
  { label: "NMDC Dredging & Marine", href: dredgingMarineAppUrl },
  { label: "NMDC Energy", href: energyAppUrl },
  { label: "NMDC Engineering", href: nmdcGroupOverviewHref },
  { label: "NMDC Infra", href: infraAppUrl },
  { label: "NMDC LTS", href: ltsAppUrl },
];

export const nmdcEmailLinks = [
  { label: "General inquiries", value: "NMDC@nmdc-group.com" },
  { label: "Commercial inquiries", value: "info@nmdc-group.com" },
  { label: "Careers", value: "recruitment@nmdc-group.com" },
  { label: "Vendors registration", value: "vendors@nmdc-group.com" },
];
