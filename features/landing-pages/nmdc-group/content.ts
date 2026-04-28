import type { LandingContent } from "../../../app/components/landing/types";

const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

export const nmdcGroupLandingContent: LandingContent = {
  brand: {
    name: "NMDC Group",
    logo: "/images/landing/nmdc-group-logo.svg",
    logoAlt: "NMDC Group",
  },
  nav: {
    links: [
      { label: "Home", href: "/", active: true },
      { label: "NMDC Overview", href: "/nmdc-group/nmdc-overview" },
      { label: "People & Culture", href: "/nmdc-group/people-and-culture" },
      { label: "Technology", href: "/nmdc-group/technology" },
      { label: "Safeen Subsea", href: "/nmdc-group/safeen-subsea" },
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
      desktop: { label: "Visit Us", href: "#contact" },
      mobile: { label: "Contact us", href: "#contact" },
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
      href: "#energy",
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
      href: "#infra",
      image: {
        src: "/images/landing/card-infra.webp",
        alt: "NMDC Infra construction site",
      },
      logo: {
        src: "/images/landing/logo-infra.webp",
        alt: "NMDC Infra",
      },
    },
    {
      id: "lts",
      name: "NMDC LTS",
      href: "#lts",
      image: {
        src: "/images/landing/card-lts.webp",
        alt: "NMDC LTS vessel",
      },
      logo: {
        src: "/images/landing/logo-lts.svg",
        alt: "NMDC LTS",
      },
    },
    {
      id: "product",
      name: "NMDC Product Highlight",
      href: "#product-highlight",
      image: {
        src: "/images/landing/card-product.webp",
        alt: "NMDC product highlight",
      },
      label: "NMDC Product\nHighlight",
    },
  ],
};
