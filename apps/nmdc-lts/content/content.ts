const groupAppUrl =
  process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "http://localhost:3120";

const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

const infraAppUrl =
  process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122";

export const nmdcLtsContent = {
  brand: {
    name: "NMDC LTS",
    logo: "/images/lts/logo-lts.svg",
    logoAlt: "NMDC LTS",
  },
  metadata: {
    titleDefault: "NMDC LTS",
    titleTemplate: "%s | NMDC LTS",
    description:
      "NMDC LTS standalone website for integrated vessel chartering, logistics, and technical services.",
    themeColor: "#062a36",
  },
  header: {
    primaryLabel: "Primary",
    mobilePrimaryLabel: "Mobile primary",
    openMenuLabel: "Open NMDC LTS menu",
    closeMenuLabel: "Close NMDC LTS menu",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Key Highlights", href: "/key-highlights" },
      { label: "Marine Vessels", href: "#marine-vessels" },
      { label: "Whipstock System", href: "#whipstock-system" },
    ],
  },
  home: {
    hero: {
      background: {
        src: "/images/lts/home-hero.jpg",
        alt: "Marine vessel towing a platform structure at sea",
      },
      headline: {
        leading: "Driving Global Marine Logistics",
        accent: "with Precision and Scale",
        mobile: {
          lines: [
            "Driving Global Marine",
            "Logistics with Precision",
            "and Scale",
          ],
          secondLeading: "Logistics",
          secondAccent: "with Precision",
        },
      },
      subhead:
        "Integrated vessel chartering, logistics and technical services backed by a world-class fleet",
      cta: {
        label: "Visit Us",
        href: "/key-highlights",
      },
    },
    cards: [
      {
        title: "NMDC Group",
        href: groupAppUrl,
        image: "/images/lts/card-platform.jpg",
        logo: {
          src: "/images/lts/logo-group.svg",
          alt: "NMDC Group",
        },
      },
      {
        title: "NMDC Dredging\n& Marine",
        href: dredgingMarineAppUrl,
        image: "/images/lts/card-dredging.jpg",
        logo: {
          src: "/images/lts/logo-dm.webp",
          alt: "NMDC Dredging & Marine",
        },
      },
      {
        title: "NMDC Energy",
        href: "#energy",
        image: "/images/lts/card-energy.jpg",
        logo: {
          src: "/images/lts/logo-energy.webp",
          alt: "NMDC Energy",
        },
      },
      {
        title: "NMDC Infra",
        href: infraAppUrl,
        image: "/images/lts/card-infra.jpg",
        logo: {
          src: "/images/lts/logo-infra.webp",
          alt: "NMDC Infra",
        },
      },
      {
        title: "NMDC Product Highlight",
        href: "#product-highlight",
        image: "/images/lts/card-product.jpg",
      },
    ],
  },
  atAGlance: {
    backLabel: "Back",
    backHref: "/",
    hero: {
      background: {
        src: "/images/lts/at-glance-hero.jpg",
        alt: "LTS vessels at sunset",
      },
      eyebrow: "NMDC LTS",
      title: "At a Glance",
      readMoreLabel: "Read more....",
      image: {
        src: "/images/lts/at-glance-vessel.jpg",
        alt: "AL ALIA support vessel at sea",
      },
      paragraphs: [
        "Founded in 2024, NMDC LTS (Logistics & Technical Services) was established to advance NMDC Group’s growth strategy and strengthen its position as the UAE’s largest marine fleet owner and vessel charterer.",
        "With a versatile fleet comprising 90 owned and 220 chartered vessels, NMDC LTS plays a pivotal role in expanding the Group’s presence in marine logistics and building global networks to support entry into new markets. NMDC LTS focuses on streamlining marine vessel chartering services to enhance operational efficiency",
      ],
    },
    capabilities: {
      title: "Capabilities",
      items: [
        {
          title: "Vessel Chartering",
          image: {
            src: "/images/lts/capability-vessel-chartering.jpg",
            alt: "Offshore support vessel and barge",
          },
          description:
            "Tailored to both short and long-term project requirements, our flexible vessel chartering solutions provide access to a world-class fleet of over 220 offshore support vessels and 90+ barges.",
        },
        {
          title: "Towing Services",
          image: {
            src: "/images/lts/capability-towing-services.jpg",
            alt: "Tug vessels coordinating towing services",
          },
          description:
            "We offer safe, reliable, and fully coordinated towing services, ensuring the seamless movement of offshore units and support vessels worldwide, and safeguarding the progress of key projects.",
        },
        {
          title: "Integrated Logistics",
          image: {
            src: "/images/lts/capability-integrated-logistics.jpg",
            alt: "Support vessel and workboat at sea",
          },
          description:
            "Our end-to-end logistics services manage the transport of people, equipment, and materials across offshore and onshore operations, including terminal handling, storage, air freight, and sea freight.",
        },
        {
          title: "Technical Services",
          image: {
            src: "/images/lts/capability-technical-services.jpg",
            alt: "Technical service crew on vessel deck",
          },
          description:
            "Led by a highly skilled and experienced team, our comprehensive technical solutions span the operation of dry dock facilities, new vessel construction, and ongoing maintenance and repair.",
        },
      ],
    },
  },
  footer: {
    background: {
      src: "/images/lts/footer-lines.jpg",
      alt: "Dark blue contour line background",
    },
    desktopLogo: {
      src: "/images/lts/logo-group.svg",
      alt: "NMDC Group",
    },
    mobileLogo: {
      src: "/images/lts/logo-dm.webp",
      alt: "NMDC Dredging & Marine",
    },
    businesses: [
      { label: "NMDC Dredging & Marine", color: "#009fe3" },
      { label: "NMDC Energy", color: "#10c66b" },
      { label: "NMDC Engineering", color: "#ff7926" },
      { label: "NMDC Infra", color: "#ffc414" },
      { label: "NMDC LTS", color: "#ddc19c" },
    ],
    connectLabel: "Let’s connect",
    socialLinks: [
      { label: "Facebook", href: "#facebook", shortLabel: "f" },
      { label: "Instagram", href: "#instagram", shortLabel: "ig" },
      { label: "Twitter", href: "#twitter", shortLabel: "t" },
      { label: "LinkedIn", href: "#linkedin", shortLabel: "in" },
    ],
    desktopNav: [
      { label: "Home", href: "/" },
      { label: "NMDC Overview", href: "#nmdc-overview" },
      { label: "People & Culture", href: "#people-culture" },
      { label: "Technology & Ai", href: "#technology-ai" },
      { label: "Safeen Subsea", href: "#safeen-subsea" },
    ],
    mobileNav: [
      { label: "Home", href: "/" },
      { label: "Overview", href: "#overview" },
      { label: "Marine Vessels", href: "#marine-vessels" },
      { label: "Hydraulic Physical Model", href: "#hydraulic-physical-model" },
      { label: "Caisson Method", href: "#caisson-method" },
    ],
    emailTitle: "Email",
    contacts: [
      { label: "General inquiries", email: "NMDC@nmdc-group.com" },
      { label: "Commercial inquiries", email: "info@nmdc-group.com" },
      { label: "Careers", email: "recruitment@nmdc-group.com" },
      { label: "Vendors registration", email: "vendors@nmdc-group.com" },
    ],
    copyright: "© Copyright, All rights reserved by NMDC Group.",
  },
} as const;

export function getLtsNavLinks(activeHref = "/") {
  return nmdcLtsContent.nav.links.map((link) => ({
    ...link,
    active: link.href === activeHref,
  }));
}
