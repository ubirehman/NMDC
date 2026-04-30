const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

const groupAppUrl =
  process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "http://localhost:3120";

const ltsAppUrl =
  process.env.NEXT_PUBLIC_LTS_APP_URL ?? "http://localhost:3123";

const energyAppUrl =
  process.env.NEXT_PUBLIC_ENERGY_APP_URL ?? "http://localhost:3124";

const infraBasePath = process.env.NEXT_PUBLIC_INFRA_BASE_PATH ?? "";

const withInfraBasePath = (assetPath: string) =>
  infraBasePath ? `${infraBasePath}${assetPath}` : assetPath;

export const nmdcInfraContent = {
  brand: {
    name: "NMDC Infra",
    logo: withInfraBasePath("/images/infra/logo-infra.webp"),
    logoAlt: "NMDC Infra",
  },
  metadata: {
    titleDefault: "NMDC Infra",
    titleTemplate: "%s | NMDC Infra",
    description:
      "NMDC Infra standalone website for general construction services and precast concrete production.",
    themeColor: "#071c28",
  },
  header: {
    primaryLabel: "Primary",
    mobilePrimaryLabel: "Mobile primary",
    openMenuLabel: "Open NMDC Infra menu",
    closeMenuLabel: "Close NMDC Infra menu",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "NMDC Infra Overview", href: "/overview" },
      { label: "Our Products", href: "/products" },
    ],
  },
  home: {
    hero: {
      background: {
        src: withInfraBasePath("/images/infra/home-hero.jpg"),
        alt: "NMDC Infra construction site",
      },
      headline: {
        leading: "Leading the Way with",
        accent: ["World Class", "Construction", "Services"],
      },
      subhead:
        "NMDC Infra has been a leader in general construction services since 2018, and prominent in the field of precast concrete production since 2006 under the name Emarat Europe.",
      cta: {
        label: "Visit Us",
        href: "/overview",
      },
    },
    cards: [
      {
        title: "NMDC Group",
        href: groupAppUrl,
        image: withInfraBasePath("/images/infra/card-platform.jpg"),
        logo: {
          src: withInfraBasePath("/images/infra/logo-group.svg"),
          alt: "NMDC Group",
        },
      },
      {
        title: "NMDC Dredging\n& Marine",
        href: dredgingMarineAppUrl,
        image: withInfraBasePath("/images/infra/card-dredging.jpg"),
        logo: {
          src: withInfraBasePath("/images/infra/logo-dm.webp"),
          alt: "NMDC Dredging & Marine",
        },
      },
      {
        title: "NMDC Energy",
        href: energyAppUrl,
        image: withInfraBasePath("/images/infra/card-energy.jpg"),
        logo: {
          src: withInfraBasePath("/images/infra/logo-energy.webp"),
          alt: "NMDC Energy",
        },
      },
      {
        title: "NMDC LTS",
        href: ltsAppUrl,
        image: withInfraBasePath("/images/infra/card-lts.jpg"),
        logo: {
          src: withInfraBasePath("/images/infra/logo-lts.svg"),
          alt: "NMDC LTS",
        },
      },
      {
        title: "NMDC Product Highlight",
        href: `${groupAppUrl}/products`,
        image: withInfraBasePath("/images/infra/card-product.jpg"),
      },
    ],
  },
  overview: {
    activeHref: "/overview",
    hero: {
      eyebrow: "NMDC INFRA",
      title: "At a Glance",
      paragraphs: [
        "With advanced engineering techniques, integrated capabilities, and a strong commitment to operational excellence, the company delivers comprehensive end-to-end solutions - from design and manufacturing to transportation and installation of critical structural components.",
        "This integrated approach ensures efficient execution, cost optimization, and consistently high-quality outcomes.",
      ],
      mobileParagraphs: [
        "With advanced engineering techniques, integrated capabilities, and a strong commitment to operational excellence, the company delivers comprehensive end-to-end solutions - from design and manufacturing to transportation and installation of critical structural components.",
        "This integrated approach ensures efficient execution,",
      ],
      readMoreLabel: "Read more...",
      readMoreHref: "/overview/at-a-glance",
      image: {
        src: withInfraBasePath("/images/infra/overview-hero-panel.jpg"),
        alt: "NMDC Infra HSE Day team photograph",
      },
    },
    detail: {
      backLabel: "Back",
      backHref: "/overview",
      eyebrow: "NMDC INFRA",
      title: "At a Glance",
      paragraphs: [
        "With advanced engineering techniques, integrated capabilities, and a strong commitment to operational excellence, the company delivers comprehensive end-to-end solutions - from design and manufacturing to transportation and installation of critical structural components.",
        "This integrated approach ensures efficient execution, cost optimization, and consistently high-quality outcomes. The company is supported by two state-of-the-art production plants, complemented by an in-house 3D printing facility that enhances precision, innovation, and flexibility in delivery.",
      ],
      image: {
        src: withInfraBasePath("/images/infra/overview-hero-panel.jpg"),
        alt: "NMDC Infra HSE Day team photograph",
      },
    },
    capabilities: {
      title: "Capabilities",
      cards: [
        {
          number: "01",
          title: "Infrastructure Construction",
          body: "We deliver major infrastructure projects - including rail and road systems - that enhance connectivity and drive economic growth.",
          image: {
            src: withInfraBasePath("/images/infra/capability-infrastructure.jpg"),
            alt: "Infrastructure construction worksite",
          },
        },
        {
          number: "02",
          title: "Energy and Utilities Construction",
          body: "We provide reliable, sustainable utility solutions across power, oil and gas, sewage, telecommunications, and water networks.",
          image: {
            src: withInfraBasePath("/images/infra/capability-energy-utilities.jpg"),
            alt: "Energy and utilities construction workers",
          },
        },
        {
          number: "03",
          title: "Industrial Construction",
          body: "We build advanced industrial facilities from chemical and pharmaceutical plants to manufacturing, processing, and waste treatment units, supporting diverse industries.",
          image: {
            src: withInfraBasePath("/images/infra/capability-industrial.jpg"),
            alt: "Industrial control monitors",
          },
        },
        {
          number: "04",
          title: "Institutional Construction",
          body: "We construct educational, healthcare, research, religious, and other institutional facilities that serve communities and support development.",
          image: {
            src: withInfraBasePath("/images/infra/capability-institutional.jpg"),
            alt: "Institutional buildings",
          },
        },
        {
          number: "05",
          title: "Commercial Construction",
          body: "We develop leisure and hospitality venues, office complexes, retail spaces, and recreational facilities that create vibrant business and lifestyle environments.",
          image: {
            src: withInfraBasePath("/images/infra/capability-commercial.jpg"),
            alt: "Commercial development rendering",
          },
        },
        {
          number: "06",
          title: "Residential Construction",
          body: "We develop leisure and hospitality venues, office complexes, retail spaces, and recreational facilities that create vibrant business and lifestyle environments.",
          image: {
            src: withInfraBasePath("/images/infra/capability-residential.jpg"),
            alt: "Residential construction piling work",
          },
        },
      ],
    },
    video: {
      image: {
        src: withInfraBasePath("/images/infra/overview-video.jpg"),
        alt: "NMDC Infra HSE Day speaker",
      },
      playLabel: "Play NMDC Infra overview video",
    },
    verticals: {
      title: "OUR VERTICALS",
      mobileTitle: "Capabilities",
      items: [
        {
          title: "NMDCCC",
          body: "We construct educational, healthcare, research, religious, and other institutional facilities that serve communities and support development.",
          image: {
            src: withInfraBasePath("/images/infra/vertical-nmdccc.jpg"),
            alt: "NMDC construction yard",
          },
          icon: "construction",
        },
        {
          title: "LANTANIA NMDC WATER",
          body: "Lantania NMDC Water is NMDC Infra's dedicated water and wastewater EPC platform, formed following the acquisition of a 51% controlling stake in Spain-based Lantania Aguas.",
          image: {
            src: withInfraBasePath("/images/infra/vertical-water.jpg"),
            alt: "Water infrastructure plant",
          },
          icon: "water",
        },
        {
          title: "EMARAT EUROPE",
          body: "Emarat Europe and NMDC Infra are at the forefront of innovation, pioneering precast construction and 3D printing solutions.",
          image: {
            src: withInfraBasePath("/images/infra/vertical-emarat-europe.jpg"),
            alt: "Precast concrete yard",
          },
          icon: "precast",
        },
      ],
    },
    sectors: {
      title: "SECTORS SERVED",
      items: [
        { label: "Industrial & Data Centre", icon: "industrial" },
        { label: "Roads, Bridges & Tunneling", icon: "roads" },
        { label: "Water Infrastructure", icon: "water" },
        { label: "Onshore Oil & Gas", icon: "oilGas" },
        { label: "Piling", icon: "piling" },
        { label: "Precast Construction & 3D Printing", icon: "precast" },
      ],
    },
    stats: {
      background: {
        src: withInfraBasePath("/images/infra/overview-dark-lines.jpg"),
        alt: "Dark technical line pattern",
      },
      items: [
        { label: "PROJECTS COMPLETED", value: "800+", icon: "projects" },
        { label: "PRODUCTION YARDS", value: "200K", unit: "SQUARE METER", icon: "yard" },
      ],
    },
  },
  products: {
    activeHref: "/products",
    title: "Our Products",
    hero: {
      titleLeading: "Our",
      titleAccent: "Products",
      background: {
        src: withInfraBasePath("/images/infra/products-hero.jpg"),
        alt: "NMDC Infra precast concrete yard",
      },
    },
    items: [
      {
        title: ["3D Printing Of", "Artificial Reefs"],
        href: "/products/3d-printing-artificial-reefs",
        image: {
          src: withInfraBasePath("/images/infra/product-3d-artificial-reefs.png"),
          alt: "3D printed artificial reef structure underwater",
          objectPosition: "50% 50%",
        },
      },
      {
        title: ["Ebawe", "Anlagentechnik"],
        href: "/products/ebawe-anlagentechnik",
        image: {
          src: withInfraBasePath("/images/infra/product-ebawe-anlagentechnik.png"),
          alt: "Ebawe Anlagentechnik precast concrete production yard",
          objectPosition: "50% 50%",
        },
      },
    ],
    detail: {
      backLabel: "Back",
      backHref: "/products",
      title: "3D PRINTING OF ARTICIAL REEFS",
      paragraphs: [
        "NMDC Infra is also pioneering digital manufacturing through its in-house 3D-printing facility, enabling production of innovative concrete forms.",
        "One key highlight is the development of 3Dprinted coral reefs, engineered to replicate natural reef structures and support marine ecosystem restoration.",
      ],
      readMoreLabel: "Read more...",
      readMoreHref: "#benefits",
      heroImage: {
        src: withInfraBasePath("/images/infra/product-3d-artificial-reefs.png"),
        alt: "3D printed artificial reef structure underwater",
      },
      detailImage: {
        src: withInfraBasePath("/images/infra/product-3d-reefs-detail.jpg"),
        alt: "NMDC Infra team inspecting 3D printed reef structures",
      },
      video: {
        image: {
          src: withInfraBasePath("/images/infra/product-3d-reefs-video.jpg"),
          alt: "Robotic 3D printing equipment producing reef forms",
        },
        playLabel: "Play 3D printing of artificial reefs video",
      },
      features: [
        {
          number: "01",
          title: "Customized Complexity",
          body: "Precisely designed structural complexity that mimics natural reef formations, creating optimal habitats for diverse marine species.",
          icon: "network",
        },
        {
          number: "02",
          title: "Sustainable Materials",
          body: "Can be created using eco-friendly materials like pHneutral concrete",
          icon: "leafCycle",
        },
        {
          number: "03",
          title: "Enhanced Performance",
          body: "Studies show 30-50% higher marine biodiversity compared to traditional artificial reef structures",
          icon: "performance",
        },
        {
          number: "04",
          title: "Research Optimization",
          body: "Allows for controlled experiments with different designs to determine optimal configurations for specific conservation goal",
          icon: "research",
        },
      ],
    },
    ebaweDetail: {
      backLabel: "Back",
      backHref: "/products",
      title: "EBAWE ANLAGENTECHNIK",
      introLayout: "wideImage",
      paragraphs: [
        "NMDC Infra, a leader in construction services and pre-cast concrete production, is equipped with a state-of-the-art carousel line for the production of solid and sandwich panels for insulated walls, along with a production line for the casting of roof pre-cast, pre-stressed hollow core slabs.",
        "The company uses 45 pallets from Ebawe Anlagen Technik, with the complete operation of the system. The multi-step process ensures each wall adheres to the highest quality standards.",
      ],
      heroImage: {
        src: withInfraBasePath("/images/infra/product-ebawe-detail.jpg"),
        alt: "Ebawe Anlagentechnik precast panel yard",
      },
      galleryImage: {
        src: withInfraBasePath("/images/infra/product-ebawe-gallery.jpg"),
        alt: "Ebawe carousel production line in a precast yard",
      },
      video: {
        image: {
          src: withInfraBasePath("/images/infra/product-ebawe-video.jpg"),
          alt: "Ebawe precast component lifting operation",
        },
        playLabel: "Play Ebawe Anlagentechnik video",
      },
    },
  },
  footer: {
    businesses: [
      { label: "NMDC Dredging & Marine", dotColor: "bg-[#20b8ed]" },
      { label: "NMDC Energy", dotColor: "bg-[#16bf70]" },
      { label: "NMDC Engineering", dotColor: "bg-[#ff7a21]" },
      { label: "NMDC Infra", dotColor: "bg-infra-yellow" },
      { label: "NMDC LTS", dotColor: "bg-[#e2c48f]" },
    ],
    connect: {
      label: "Let's connect",
      href: "#contact",
    },
    socialLinks: [
      { label: "Facebook", marker: "f", href: "#" },
      { label: "Instagram", marker: "◎", href: "#" },
      { label: "X", marker: "x", href: "#" },
      { label: "LinkedIn", marker: "in", href: "#" },
    ],
    navigationLabel: "Footer navigation",
    mobileNavigationLinks: [
      { label: "Home", href: "/" },
      { label: "NMDC Overview", href: "/overview" },
      { label: "People & Culture", href: "#" },
      { label: "Technology & Ai", href: "#" },
      { label: "Safeen Subsea", href: "#" },
    ],
    emailTitle: "Email",
    emails: [
      { label: "General inquiries", value: "NMDC@nmdc-group.com" },
      { label: "Commercial inquiries", value: "info@nmdc-group.com" },
      { label: "Careers", value: "recruitment@nmdc-group.com" },
      { label: "Vendors registration", value: "vendors@nmdc-group.com" },
    ],
    copyright: "© Copyright, All rights reserved by NMDC Group.",
  },
} as const;

export function getInfraNavLinks(activeHref: string) {
  return nmdcInfraContent.nav.links.map((link) => ({
    ...link,
    active: link.href === activeHref,
  }));
}
