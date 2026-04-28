import type { NavLink } from "../../../app/components/landing/types";

export const nmdcOverviewBrand = {
  name: "NMDC Group",
  logo: "/images/landing/nmdc-group-logo.svg",
  logoAlt: "NMDC Group",
};

export const nmdcOverviewNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "NMDC Overview", href: "/nmdc-group/nmdc-overview", active: true },
  { label: "People & Culture", href: "/nmdc-group/people-and-culture" },
  { label: "Technology", href: "/nmdc-group/technology" },
  { label: "Safeen Subsea", href: "/nmdc-group/safeen-subsea" },
];

export const overviewCards = [
  {
    logo: "/images/landing/logo-dm.webp",
    alt: "NMDC Dredging & Marine",
    copy: "Marine dredging, reclamation, and construction",
  },
  {
    logo: "/images/landing/logo-energy.webp",
    alt: "NMDC Energy",
    copy: "EPC solutions - offshore and onshore energy services",
  },
  {
    logo: "/images/landing/logo-infra.webp",
    alt: "NMDC Infra",
    copy: "Coastal and marine engineering consultancy, including marine, civil, hydraulics, geotechnical, and environmental engineering",
  },
  {
    logo: "/images/landing/logo-lts.svg",
    alt: "NMDC LTS",
    copy: "Construction technology and precast solutions",
  },
  {
    logo: "/images/landing/nmdc-group-logo.svg",
    alt: "NMDC Group",
    copy: "Logistic and technical services operator, including marine dredging technical expertise & equipment",
  },
];

export const keyFigures = [
  { value: "74%", label: "ICV Score" },
  { value: "25k", label: "Number of Employees" },
  { value: "170+", label: "Number of Marine Fleet" },
  { value: "50+", label: "Number of Land Equipment" },
];

export const overviewVideo = {
  eyebrow: "NMDC GROUP IN MOTION",
  title: "Engineering progress across marine and EPC operations.",
  copy: "Watch how NMDC Group combines marine assets, engineering expertise, and integrated delivery teams to execute complex projects across strategic markets.",
  poster: "/images/landing/overview-video-vessel.jpg",
  sources: [
    {
      src: "/videos/nmdc-group-overview.mp4",
      type: "video/mp4",
    },
  ],
};

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "NMDC Overview", href: "/nmdc-group/nmdc-overview" },
      { label: "People & Culture", href: "/nmdc-group/people-and-culture" },
      { label: "Technology & Ai", href: "/nmdc-group/technology" },
      { label: "Safeen Subsea", href: "/nmdc-group/safeen-subsea" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Dredging & Marine", href: "#dredging" },
      { label: "Energy", href: "#energy" },
      { label: "Infra", href: "#infra" },
      { label: "LTS", href: "#lts" },
    ],
  },
];

export const footerSocialLinks = ["LinkedIn", "X", "YouTube"];
