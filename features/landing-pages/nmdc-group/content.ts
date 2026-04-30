import type { LandingContent } from "../../../app/components/landing/types";

const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

const infraAppUrl =
  process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122";

const ltsAppUrl =
  process.env.NEXT_PUBLIC_LTS_APP_URL ?? "http://localhost:3123";

const energyAppUrl =
  process.env.NEXT_PUBLIC_ENERGY_APP_URL ?? "http://localhost:3124";

export const nmdcGroupLandingContent: LandingContent = {
  brand: {
    name: "NMDC Group",
    logo: "/images/landing/nmdc-group-logo.svg",
    logoAlt: "NMDC Group",
  },
  nav: {
    links: [
      { label: "Home", href: "/", active: true },
      { label: "NMDC Overview", href: "/nmdc-overview" },
      { label: "People & Culture", href: "/people-and-culture" },
      { label: "Technology", href: "/technology" },
      { label: "Safeen Subsea", href: "/safeen-subsea" },
    ],
  },
  hero: {
    background: {
      src: "/images/landing/hero-bg.webp",
      alt: "Offshore platform at sea",
    },
    headline: {
      leadingAccent: "Innovative Solutions For",
      neutral: "A ",
      trailingAccent: "Sustainable Future",
    },
    subhead:
      "NMDC Group is an integrated EPC and marine services company operating across MENA, South Asia, & beyond, delivering innovative solutions",
    cta: {
      desktop: { label: "Visit Us", href: "https://nmdc-group.com/en/" },
      mobile: { label: "Contact us", href: "https://nmdc-group.com/en/" },
    },
  },
  brands: [
    {
      id: "dm",
      name: "NMDC Dredging & Marine",
      href: dredgingMarineAppUrl,
      image: {
        src: "/images/landing/card-dm.webp",
        alt: "NMDC Dredging & Marine vessel",
      },
      logo: {
        src: "/images/landing/logo-dm.webp",
        alt: "NMDC Dredging & Marine",
      },
    },
    {
      id: "energy",
      name: "NMDC Energy",
      href: energyAppUrl,
      image: {
        src: "/images/landing/card-energy.webp",
        alt: "NMDC Energy offshore facility",
      },
      logo: {
        src: "/images/landing/logo-energy.webp",
        alt: "NMDC Energy",
      },
    },
    {
      id: "infra",
      name: "NMDC Infra",
      href: infraAppUrl,
      image: {
        src: "/images/landing/card-infra.webp",
        alt: "NMDC Infra construction site",
      },
      logo: {
        src: "/images/landing/logo-infra-new.png",
        alt: "NMDC Infra",
      },
    },
    {
      id: "lts",
      name: "NMDC LTS",
      href: ltsAppUrl,
      image: {
        src: "/images/landing/card-lts.webp",
        alt: "NMDC LTS vessel",
      },
      logo: {
        src: "/images/landing/logo-lts.png",
        alt: "NMDC LTS",
      },
    },
    {
      id: "product",
      name: "NMDC Product Highlight",
      href: "/products",
      image: {
        src: "/images/landing/card-product.webp",
        alt: "NMDC product highlight",
      },
      label: "NMDC Product\nHighlight",
    },
  ],
};
