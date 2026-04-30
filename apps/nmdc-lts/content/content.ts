const groupAppUrl =
  process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "http://localhost:3120";

const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

const infraAppUrl =
  process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122";

const energyAppUrl =
  process.env.NEXT_PUBLIC_ENERGY_APP_URL ?? "http://localhost:3124";

const ltsBasePath = process.env.NEXT_PUBLIC_LTS_BASE_PATH ?? "";

const withLtsBasePath = (assetPath: string) =>
  ltsBasePath ? `${ltsBasePath}${assetPath}` : assetPath;

export const nmdcLtsContent = {
  brand: {
    name: "NMDC LTS",
    logo: withLtsBasePath("/images/lts/logo-lts.svg"),
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
      { label: "Marine Vessels", href: "/marine-vessels" },
      { label: "Whipstock System", href: "/whipstock-system" },
    ],
  },
  home: {
    hero: {
      background: {
        src: withLtsBasePath("/images/lts/home-hero.jpg"),
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
        image: withLtsBasePath("/images/lts/card-platform.jpg"),
        logo: {
          src: withLtsBasePath("/images/lts/logo-group.svg"),
          alt: "NMDC Group",
        },
      },
      {
        title: "NMDC Dredging\n& Marine",
        href: dredgingMarineAppUrl,
        image: withLtsBasePath("/images/lts/card-dredging.jpg"),
        logo: {
          src: withLtsBasePath("/images/lts/logo-dm.webp"),
          alt: "NMDC Dredging & Marine",
        },
      },
      {
        title: "NMDC Energy",
        href: energyAppUrl,
        image: withLtsBasePath("/images/lts/card-energy.jpg"),
        logo: {
          src: withLtsBasePath("/images/lts/logo-energy.webp"),
          alt: "NMDC Energy",
        },
      },
      {
        title: "NMDC Infra",
        href: infraAppUrl,
        image: withLtsBasePath("/images/lts/card-infra.jpg"),
        logo: {
          src: withLtsBasePath("/images/lts/logo-infra.webp"),
          alt: "NMDC Infra",
        },
      },
      {
        title: "NMDC Product Highlight",
        href: `${groupAppUrl}/products`,
        image: withLtsBasePath("/images/lts/card-product.jpg"),
      },
    ],
  },
  atAGlance: {
    backLabel: "Back",
    backHref: "/",
    hero: {
      background: {
        src: withLtsBasePath("/images/lts/at-glance-hero.jpg"),
        alt: "LTS vessels at sunset",
      },
      eyebrow: "NMDC LTS",
      title: "At a Glance",
      readMoreLabel: "Read more....",
      image: {
        src: withLtsBasePath("/images/lts/at-glance-vessel.jpg"),
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
            src: withLtsBasePath("/images/lts/capability-vessel-chartering.jpg"),
            alt: "Offshore support vessel and barge",
          },
          description:
            "Tailored to both short and long-term project requirements, our flexible vessel chartering solutions provide access to a world-class fleet of over 220 offshore support vessels and 90+ barges.",
        },
        {
          title: "Towing Services",
          image: {
            src: withLtsBasePath("/images/lts/capability-towing-services.jpg"),
            alt: "Tug vessels coordinating towing services",
          },
          description:
            "We offer safe, reliable, and fully coordinated towing services, ensuring the seamless movement of offshore units and support vessels worldwide, and safeguarding the progress of key projects.",
        },
        {
          title: "Integrated Logistics",
          image: {
            src: withLtsBasePath("/images/lts/capability-integrated-logistics.jpg"),
            alt: "Support vessel and workboat at sea",
          },
          description:
            "Our end-to-end logistics services manage the transport of people, equipment, and materials across offshore and onshore operations, including terminal handling, storage, air freight, and sea freight.",
        },
        {
          title: "Technical Services",
          image: {
            src: withLtsBasePath("/images/lts/capability-technical-services.jpg"),
            alt: "Technical service crew on vessel deck",
          },
          description:
            "Led by a highly skilled and experienced team, our comprehensive technical solutions span the operation of dry dock facilities, new vessel construction, and ongoing maintenance and repair.",
        },
      ],
    },
  },
  marineVessels: {
    hero: {
      background: {
        src: withLtsBasePath("/images/lts/marine-vessels-hero.png"),
        alt: "Marine vessel and tugboat working offshore at sunrise",
      },
      title: {
        leading: "Marine",
        accent: "Vessels",
      },
    },
    vessels: [
      {
        title: "Multicat M-21",
        theme: "dark",
        image: {
          src: withLtsBasePath("/images/lts/marine-vessel-multicat.png"),
          alt: "Multicat M-21 vessel illustration",
        },
        description:
          "Muticat is a versatile, high-capacity marine vessel designed for heavy duty operations, combining strength, speed, and efficiency. Built for demanding tasks, it handles cargo, lifting, and marine support with unmatched reliability.",
        detailsTitle: "Built with Expertise",
        detailsSubtitle: "Constructed by NMDC LTS -Workshops",
        bullets: [
          "Classification: Bureau Veritas certified for safety and operational reliability",
          "Power & Performance: 682 HP total, reaching speeds up to 14 knots",
          "Cranes & Lifting: Equipped with cranes-22.4T at 4m and 9T at 9.4m-ideal for cargo handling and offshore operations",
          "Material Sourcing: All materials purchased from the local market, supporting reliability",
          "High-quality imported systems from overseas manufacturers for trusted performance",
          "Optimized for transport, lifting, and multipurpose marine operations",
        ],
        specificationsLabel: "View Specifications",
        specificationsHref: "#multicat-m-21-specifications",
      },
      {
        title: "Pushy Cat - P14 & Pushy Cat - P15",
        theme: "light",
        image: {
          src: withLtsBasePath("/images/lts/marine-vessel-pushy-cat.png"),
          alt: "Pushy Cat workboat illustration",
        },
        description:
          "Pushy Cat is a compact, high-performance workboat designed for efficient harbor operations and marine support tasks. Combining solid construction with dependable power, it delivers consistent performance in demanding conditions.",
        detailsTitle: "Built with Confidence",
        mobileDetailsTitle: "Built with Expertise",
        detailsSubtitle:
          "Constructed by NMDC LTS -Workshops , Pushy Cat reflects proven shipbuilding expertise and quality standards, using our internals capabilities from equipment and slipways",
        bullets: [
          "Hull Material with high-grade steel for strength and durability, Material Sourcing Locally procured materials supporting reliability and availability",
          "Equipment: Fitted with high-quality imported systems from overseas manufacturers",
          "Build Timeframe: Completed in just 6 months, demonstrating efficiency and rapid delivery",
        ],
        specificationsLabel: "View Specifications",
        specificationsHref: "#pushy-cat-specifications",
      },
      {
        title: "Tug Boat - T9",
        theme: "dark",
        image: {
          src: withLtsBasePath("/images/lts/marine-vessel-tug-boat.png"),
          alt: "Tug Boat T9 vessel illustration",
        },
        description:
          "This Tug Boat is a robust, high-performance vessel designed to handle demanding harbor and port operations. With strong steel construction, reliable imported equipment, and efficient maneuverability, it is ideal for towing, pushing, and positioning vessels of all sizes.",
        detailsTitle: "Built with Expertise",
        detailsSubtitle:
          "Constructed by NMDC LTS- Workshops , this Tug Boat reflects precision engineering and rapid delivery.",
        bullets: [
          "Classification: Bureau Veritas certified for safety and operational reliability",
          "Hull Material: High-grade steel for maximum durability",
          "Power & Performance: 600 HP total, reaching speeds up to 11 knots",
          "Material Sourcing: All materials purchased from the local market to ensure reliability and availability",
          "Equipment: Equipped with high-quality imported systems from overseas suppliers for trusted performance",
          "Build Timeframe: Completed in just 9 months, demonstrating efficiency and rapid project execution",
        ],
        specificationsLabel: "View Specifications",
        specificationsHref: "#tug-boat-t9-specifications",
      },
    ],
  },
  whipstockSystem: {
    hero: {
      desktopBackground: {
        src: withLtsBasePath("/images/lts/whipstock-hero-desktop.png"),
        alt: "Tug vessel towing a barge at sea",
      },
      mobileBackground: {
        src: withLtsBasePath("/images/lts/whipstock-hero-mobile.png"),
        alt: "Marine vessel working offshore",
      },
      title: {
        leading: "EMDAD |",
        accent: "Whipstock System",
      },
    },
    introduction: [
      "Emdad, founded in 1979, has a long-standing track record in delivering technical expertise and innovative solutions across the UAE and MENA region. Under NMDC’s ownership, Emdad is positioned as a cornerstone of NMDC’s oil and gas business, leveraging combined capabilities to improve service excellence, expand regional reach, and create greater value for clients. The integration also aligns with NMDC’s strategy to diversify its energy portfolio and drive sustainable growth.",
      "Specializing in whipstock services for the oil and gas industry. They offer a range of products and solutions, including high-pressure hoses, rotating machinery, and various drilling tools. Their whipstock system is designed for efficient casing exit solutions and is equipped with hydraulic packers and mechanical anchors to support the whipstock concave in highly deviated holes.",
      "Emdad has a strong reputation for providing innovative and integrated services, ensuring reliability and efficiency in oil and gas operations.",
      "Whipstocks are specialized deflection tools used in drilling operations to initiate sidetracks from existing wellbores. They provide a controlled kickoff point for window milling, directional drilling, re-entry, or bypass operations.",
    ],
    features: [
      {
        icon: "hydraulic",
        title: "Hydraulic",
        description:
          "Uses applied pressure through drill pipe to activate the anchor mechanism.",
      },
      {
        icon: "mechanical",
        title: "Mechanical",
        description:
          "Uses applied weight through drill string to set the anchor.",
      },
      {
        icon: "permanent",
        title: "Permanent",
        description: "Remains in well for the lifetime of the sidetrack.",
      },
      {
        icon: "retrievable",
        title: "Retrievable",
        description:
          "Can be removed to restore casing drift ID after operations.",
      },
    ],
    diagram: {
      src: withLtsBasePath("/images/lts/whipstock-system-diagram.png"),
      alt: "Whipstock system technical diagram",
    },
    specificationsLabel: "View Specifications",
    specificationsHref: "#whipstock-system-specifications",
  },
  footer: {
    background: {
      src: withLtsBasePath("/images/lts/footer-lines.jpg"),
      alt: "Dark blue contour line background",
    },
    desktopLogo: {
      src: withLtsBasePath("/images/lts/logo-group.svg"),
      alt: "NMDC Group",
    },
    mobileLogo: {
      src: withLtsBasePath("/images/lts/logo-dm.webp"),
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
