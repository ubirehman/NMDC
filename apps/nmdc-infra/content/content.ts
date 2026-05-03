const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

const groupAppUrl =
  process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "http://localhost:3120";

const ltsAppUrl =
  process.env.NEXT_PUBLIC_LTS_APP_URL ?? "http://localhost:3123";

const energyAppUrl =
  process.env.NEXT_PUBLIC_ENERGY_APP_URL ?? "http://localhost:3124";

const infraAppUrl =
  process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122";

const infraBasePath = process.env.NEXT_PUBLIC_INFRA_BASE_PATH ?? "";

const withInfraBasePath = (assetPath: string) =>
  infraBasePath ? `${infraBasePath}${assetPath}` : assetPath;

const withGroupAppPath = (path: string) =>
  `${groupAppUrl.replace(/\/$/, "")}${path}`;

export const nmdcInfraContent = {
  brand: {
    name: "NMDC Infra",
    logo: withInfraBasePath("/images/infra/logo-infra-new.png"),
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
        href: "https://www.nmdc-infra.com/en/",
      },
    },
    cards: [
      {
        title: "NMDC Group",
        href: groupAppUrl,
        image: withInfraBasePath("/images/infra/card-platform.png"),
        logo: {
          src: withInfraBasePath("/images/infra/logo-group.svg"),
          alt: "NMDC Group",
        },
      },
      {
        title: "NMDC Dredging\n& Marine",
        href: dredgingMarineAppUrl,
        image: withInfraBasePath("/images/infra/card-dredging.png"),
        logo: {
          src: withInfraBasePath("/images/infra/logo-dm.webp"),
          alt: "NMDC Dredging & Marine",
        },
      },
      {
        title: "NMDC Energy",
        href: energyAppUrl,
        image: withInfraBasePath("/images/infra/card-energy-new.png"),
        logo: {
          src: withInfraBasePath("/images/infra/logo-energy.webp"),
          alt: "NMDC Energy",
        },
      },
      {
        title: "NMDC LTS",
        href: ltsAppUrl,
        image: withInfraBasePath("/images/infra/card-lts.png"),
        logo: {
          src: withInfraBasePath("/images/infra/logo-lts-card.svg"),
          alt: "NMDC LTS",
        },
      },
      {
        title: "NMDC Product Highlight",
        href: withGroupAppPath("/products"),
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
        src: withInfraBasePath("/images/infra/overview-hero-panel-hero.png"),
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
        src: withInfraBasePath("/images/infra/overview-hero-panel-hero.png"),
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
      videos: [
        {
          title: "NMDC Infra overview",
          src: withInfraBasePath("/videos/nmdc_infra-porduction-overview.mp4"),
          type: "video/mp4",
          poster: withInfraBasePath("/images/infra/video-posters/overview.png"),
          playLabel: "Play NMDC Infra overview video",
        }
      ],
    },
    factoryHighlights: {
      title: "FACTORY HIGHLIGHTS",
      items: [
        {
          title: "Precast Wall Panels",
          copy: "Rapid installation solutions for structural and architectural precast elements.",
          image: {
            src: withInfraBasePath("/images/infra/product-ebawe-precast-excellence.png"),
            alt: "Precast wall panels at scale",
          },
          unit: "In Km3",
          values: [
            { year: "2023", value: 58.7 },
            { year: "2024", value: 72.2 },
            { year: "2025", value: 67.7 },
          ],
        },
        {
          title: "Hollow Core Slabs",
          copy: "Lightweight, prestressed slabs enabling faster floor construction.",
          image: {
            src: withInfraBasePath("/images/infra/product-ebawe-durable-infrastructure.png"),
            alt: "Hollow core slab infrastructure",
          },
          unit: "In Km3",
          values: [
            { year: "2023", value: 13.2 },
            { year: "2024", value: 19.7 },
            { year: "2025", value: 14.8 },
          ],
        },
        {
          title: "Quay Wall Blocks",
          copy: "Heavy duty precast concrete elements for port and marine infrastructure.",
          image: {
            src: withInfraBasePath("/images/infra/product-ebawe-quay-walls.png"),
            alt: "Precast concrete quay walls",
          },
          unit: "In Km3",
          values: [
            { year: "2023", value: 31.5 },
            { year: "2024", value: 106.8 },
            { year: "2025", value: 151.4 },
          ],
        },
        {
          title: "Concrete Sleeper",
          copy: "Durable concrete elements ensuring stability and long term performance to underwater pipelines.",
          image: {
            src: withInfraBasePath("/images/infra/product-ebawe-built-on-safety.png"),
            alt: "Concrete sleeper production",
          },
          unit: "In Km3",
          values: [
            { year: "2023", value: 11.9 },
            { year: "2024", value: 5.5 },
            { year: "2025", value: 15.7 },
          ],
        },
        {
          title: "Accropodes",
          copy: "Engineered concrete armour precast elements for coastal protection and breakwaters.",
          image: {
            src: withInfraBasePath("/images/infra/capability-industrial.jpg"),
            alt: "Accropodes coastal protection elements",
          },
          unit: "In Km3",
          values: [
            { year: "2023", value: 53 },
            { year: "2024", value: 6.2 },
          ],
        },
        {
          title: "3D Printed Artificial Reefs",
          copy: "Innovative marine concrete elements supporting biodiversity and coastal sustainability.",
          image: {
            src: withInfraBasePath("/images/infra/product-3d-reefs-gallery-01.jpg"),
            alt: "3D printed artificial reef structures",
          },
          unit: "In Km3",
          values: [
            { year: "2025", value: 67.7 },
          ],
        },
      ],
    },
    operationalHighlights: {
      title: "OPERATIONAL HIGHLIGHTS | CORE CAPABILITIES",
      subtitle: "Energy and Utilities Construction",
      description: "The below charts show both the ongoing and completed projects at both the Precast Factory and Infra construction projects during the period of 2023 to 2025",
      charts: [
        {
          title: "Precast Factory Projects",
          unit: "in nos.",
          values: [
            { year: "2023", value: 43 },
            { year: "2024", value: 41 },
            { year: "2025", value: 54 },
            { year: "2026", value: 24 },
          ],
        },
        {
          title: "Infra Construction Projects",
          unit: "in nos.",
          values: [
            { year: "2023", value: 28 },
            { year: "2024", value: 40 },
            { year: "2025", value: 32 },
            { year: "2026", value: 13 },
          ],
        },
      ],
    },
    verticals: {
      title: "OUR VERTICALS",
      mobileTitle: "Capabilities",
      items: [
        {
          title: "NMDCCC",
          body: "NMDC Infra & CCC Integrated Platform for Onshore Energy EPC in the UAE.",
          image: {
            src: withInfraBasePath("/images/infra/verticals/nmdccc.png"),
            alt: "NMDCCC onshore energy plant",
          },
          icon: "construction",
          iconImage: {
            src: withInfraBasePath("/images/infra/verticals/nmdccc-icon.png"),
            alt: "NMDCCC construction tools icon",
          },
        },
        {
          title: "LANTANIA NMDC WATER",
          body: "Lantania NMDC Water is NMDC Infra’s dedicated water and wastewater EPC platform, formed following the acquisition of a 51% controlling stake in Spain-based Lantania Aguas.",
          image: {
            src: withInfraBasePath("/images/infra/verticals/lantania-water.png"),
            alt: "Lantania NMDC Water treatment facility",
          },
          icon: "water",
          iconImage: {
            src: withInfraBasePath("/images/infra/verticals/lantania-water-icon.png"),
            alt: "Lantania NMDC Water drop icon",
          },
        },
        {
          title: "EMARAT EUROPE",
          body: "Emarat Europe and NMDC Infra are at the forefront of innovation, pioneering precast construction and 3D printing solutions.",
          image: {
            src: withInfraBasePath("/images/infra/verticals/emarat-europe.png"),
            alt: "Emarat Europe precast construction yard",
          },
          icon: "precast",
          iconImage: {
            src: withInfraBasePath("/images/infra/verticals/emarat-europe-icon.png"),
            alt: "Emarat Europe 3D printing icon",
          },
        },
      ],
    },
    sectors: {
      title: "SECTORS SERVED",
      items: [
        {
          label: "Industrial & Data Centre",
          icon: "industrial",
          iconImage: {
            src: withInfraBasePath("/images/infra/sector-icons/industrial-data-centre.png"),
            alt: "Industrial and data centre sector icon",
          },
        },
        {
          label: "Roads, Bridges & Tunneling",
          icon: "roads",
          iconImage: {
            src: withInfraBasePath("/images/infra/sector-icons/roads-bridges-tunneling.png"),
            alt: "Roads, bridges and tunneling sector icon",
          },
        },
        {
          label: "Water Infrastructure",
          icon: "water",
          iconImage: {
            src: withInfraBasePath("/images/infra/sector-icons/water-infrastructure.png"),
            alt: "Water infrastructure sector icon",
          },
        },
        {
          label: "Onshore Oil & Gas",
          icon: "oilGas",
          iconImage: {
            src: withInfraBasePath("/images/infra/sector-icons/onshore-oil-gas.png"),
            alt: "Onshore oil and gas sector icon",
          },
        },
        {
          label: "Piling",
          icon: "piling",
          iconImage: {
            src: withInfraBasePath("/images/infra/sector-icons/piling.png"),
            alt: "Piling sector icon",
          },
        },
        {
          label: "Precast Construction & 3D Printing",
          icon: "precast",
          iconImage: {
            src: withInfraBasePath("/images/infra/sector-icons/precast-3d-printing.png"),
            alt: "Precast construction and 3D printing sector icon",
          },
        },
      ],
    },
    stats: {
      background: {
        src: withInfraBasePath("/images/infra/overview-dark-lines.jpg"),
        alt: "Dark technical line pattern",
      },
      items: [
        { label: "PROJECTS COMPLETED", value: "800+", icon: "projects", image: withInfraBasePath("/images/infra/icon-projects-completed.png") },
        { label: "PRODUCTION YARDS", value: "200K", unit: "SQUARE METER", icon: "yard", image: withInfraBasePath("/images/infra/icon-production-yards.png") },
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
        src: withInfraBasePath("/images/infra/products-hero-.png"),
        alt: "NMDC Infra precast concrete yard",
      },
      printing: {
        src: withInfraBasePath("/images/infra/product-3d-reefs-detail-new.png"),
        alt: "NMDC Infra 3D printed artificial reef production yard",
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
        contentImage: {
        src: withInfraBasePath("/images/infra/product-ebawe-precast-excellence.png"),
        alt: "NMDC Infra precast excellence at scale",
      },
      },
    ],
    detail: {
      backLabel: "Back",
      backHref: "/products",
      title: "3D PRINTING OF ARTICIAL REEFS",
      mediaLayout: "videoFeaturesGallery",
      paragraphs: [
        "NMDC Infra is also pioneering digital manufacturing through its in-house 3D-printing facility, enabling production of innovative concrete forms.",
        "One key highlight is the development of 3Dprinted coral reefs, engineered to replicate natural reef structures and support marine ecosystem restoration.",
      ],
      readMoreLabel: "",
      readMoreHref: "#benefits",
      heroImage: {
        src: withInfraBasePath("/images/infra/product-3d-artificial-reefs.png"),
        alt: "3D printed artificial reef structure underwater",
      },
      contentImage: {
        src: withInfraBasePath("/images/infra/product-3d-artificial-reefs.png"),
        alt: "NMDC Infra precast excellence at scale",
      },
      detailImage: {
        src: withInfraBasePath("/images/infra/product-3d-reefs-carousel/1.jpeg"),
        alt: "NMDC Infra team inspecting 3D printed reef structures",
      },
      detailImages: [
        {
          src: withInfraBasePath("/images/infra/product-3d-reefs-carousel/1.jpeg"),
          alt: "NMDC Infra 3D printed artificial reef structure inspection",
        },
        {
          src: withInfraBasePath("/images/infra/product-3d-reefs-carousel/2.jpeg"),
          alt: "3D printed artificial reef units inside the NMDC Infra facility",
        },
        {
          src: withInfraBasePath("/images/infra/product-3d-reefs-carousel/3.jpeg"),
          alt: "Artificial reef concrete forms produced by 3D printing",
        },
        {
          src: withInfraBasePath("/images/infra/product-3d-reefs-carousel/4.jpeg"),
          alt: "NMDC Infra artificial reef fabrication area",
        },
        {
          src: withInfraBasePath("/images/infra/product-3d-reefs-carousel/5.jpeg"),
          alt: "Detailed view of a 3D printed artificial reef structure",
        },
        {
          src: withInfraBasePath("/images/infra/product-3d-reefs-carousel/6.jpeg"),
          alt: "3D printed reef module positioned in the production area",
        },
        {
          src: withInfraBasePath("/images/infra/product-3d-reefs-carousel/7.jpeg"),
          alt: "Artificial reef modules arranged for inspection",
        },
        {
          src: withInfraBasePath("/images/infra/product-3d-reefs-carousel/8.jpeg"),
          alt: "Close view of 3D printed concrete reef texture",
        },
      ],
      video: {
        image: {
          src: withInfraBasePath("/images/infra/product-3d-reefs-video.jpg"),
          alt: "Robotic 3D printing equipment producing reef forms",
        },
        playLabel: "Play 3D printing of artificial reefs video",
        videos: [
          {
            title: "3D printed artificial reefs",
            src: withInfraBasePath("/videos/nmdc_infra_3d_printing.mp4"),
            type: "video/mp4",
            poster: withInfraBasePath("/images/infra/video-posters/product-3d-reefs.png"),
            playLabel: "Play 3D printing of artificial reefs video",
          }
        ],
      },
      features: [
        {
          number: "01",
          title: "Customized Complexity",
          body: "Precisely designed structural complexity that mimics natural reef formations, creating optimal habitats for diverse marine species.",
          icon: "network",
          featureImage: {
            src: withInfraBasePath("/images/infra/product-3d-reefs-features/1.png"),
            alt: "Customized complexity feature icon",
          },
        },
        {
          number: "02",
          title: "Sustainable Materials",
          body: "Can be created using eco-friendly materials like pHneutral concrete",
          icon: "leafCycle",
          featureImage: {
            src: withInfraBasePath("/images/infra/product-3d-reefs-features/2.png"),
            alt: "Sustainable materials feature icon",
          },
        },
        {
          number: "03",
          title: "Enhanced Performance",
          body: "Studies show 30-50% higher marine biodiversity compared to traditional artificial reef structures",
          icon: "performance",
          featureImage: {
            src: withInfraBasePath("/images/infra/product-3d-reefs-features/3.png"),
            alt: "Enhanced performance feature icon",
          },
        },
        {
          number: "04",
          title: "Research Optimization",
          body: "Allows for controlled experiments with different designs to determine optimal configurations for specific conservation goal",
          icon: "research",
          featureImage: {
            src: withInfraBasePath("/images/infra/product-3d-reefs-features/4.png"),
            alt: "Research optimization feature icon",
          },
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
        src: withInfraBasePath("/images/infra/product-ebawe-precast-excellence.png"),
        alt: "NMDC Infra precast excellence at scale",
      },
      contentImage: {
        src: withInfraBasePath("/images/infra/product-ebawe-precast-excellence-.png"),
        alt: "NMDC Infra precast excellence at scale",
      },
      video: {
        image: {
          src: withInfraBasePath("/images/infra/product-ebawe-precast-excellence.png"),
          alt: "NMDC Infra precast operations built on safety",
        },
        playLabel: "Play Ebawe Anlagentechnik video",
        videos: [
          {
            title: "Ebawe Anlagentechnik",
            src: withInfraBasePath("/videos/nmdc_infra_ebawe.mp4"),
            type: "video/mp4",
            poster: withInfraBasePath("/images/infra/video-posters/product-ebawe.png"),
            playLabel: "Play Ebawe Anlagentechnik video",
          }
        ],
      },
    },
  },
  footer: {
    businesses: [
      {
        label: "NMDC Dredging & Marine",
        href: dredgingMarineAppUrl,
        dotColor: "bg-[#20b8ed]",
      },
      { label: "NMDC Energy", href: energyAppUrl, dotColor: "bg-[#16bf70]" },
      {
        label: "NMDC Engineering",
        href: withGroupAppPath("/nmdc-overview"),
        dotColor: "bg-[#ff7a21]",
      },
      { label: "NMDC Infra", href: infraAppUrl, dotColor: "bg-infra-yellow" },
      { label: "NMDC LTS", href: ltsAppUrl, dotColor: "bg-[#e2c48f]" },
    ],
    connect: {
      label: "Let's connect",
      href: "#contact",
    },
    socialLinks: [
      {
        label: "LinkedIn",
        marker: "in",
        href: "https://www.linkedin.com/company/nmdc-group/",
      },
      {
        label: "Instagram",
        marker: "ig",
        href: "https://www.instagram.com/nmdc_group?igsh=MWlqOXUxOGlza3h3ZA",
      },
    ],
    navigationLabel: "Footer navigation",
    navigationLinks: [
      { label: "Home", href: withGroupAppPath("/") },
      { label: "NMDC Infra Overview", href: "/overview" },
      { label: "Our Products", href: "/products" },
    ],
    mobileNavigationLinks: [
      { label: "Home", href: withGroupAppPath("/") },
      { label: "NMDC Infra Overview", href: "/overview" },
      { label: "Our Products", href: "/products" },
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
