const groupAppUrl =
  process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "http://localhost:3120";

const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

const infraAppUrl =
  process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122";

const ltsAppUrl =
  process.env.NEXT_PUBLIC_LTS_APP_URL ?? "http://localhost:3123";

const energyBasePath = process.env.NEXT_PUBLIC_ENERGY_BASE_PATH ?? "";

const withEnergyBasePath = (assetPath: string) =>
  energyBasePath ? `${energyBasePath}${assetPath}` : assetPath;

export const nmdcEnergyContent = {
  brand: {
    name: "NMDC Energy",
    logo: "/images/energy/logo-energy.png",
    logoAlt: "NMDC Energy",
  },
  metadata: {
    titleDefault: "NMDC Energy",
    titleTemplate: "%s | NMDC Energy",
    description:
      "NMDC Energy standalone website for EPC solutions addressing complex energy challenges.",
    themeColor: "#062821",
  },
  header: {
    primaryLabel: "Primary",
    mobilePrimaryLabel: "Mobile primary",
    openMenuLabel: "Open NMDC Energy menu",
    closeMenuLabel: "Close NMDC Energy menu",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "NMDC Energy Overview", href: "/overview" },
      { label: "Yard Highlights", href: "/yard-highlights" },
      { label: "Our Products", href: "/products" },
    ],
  },
  overview: {
    hero: {
      eyebrow: "NMDC Energy",
      title: "At a Glance",
      background: {
        src: "/images/energy/overview-hero.jpg",
        alt: "NMDC Energy specialist inspecting equipment offshore",
      },
      image: {
        src: "/images/energy/overview-platforms.jpg",
        alt: "Offshore energy platforms in blue water",
      },
      intro: [
        "In 1973, NMDC Energy was founded by ADNOC and CCC as the National Petroleum Construction Company (NPCC) to encourage innovation in the energy sector and drive sustainable growth.",
        "Since then, we have developed an exceptional track record for our forward thinking, integrated EPC solutions for the energy sector. Our vast capacity enables us to achieve exceptional results for projects of all complexities, with 10,000 skilled employees,",
      ],
      readMore: {
        label: "Read more...",
        href: "/overview/at-a-glance",
      },
    },
    atAGlanceDetail: {
      back: {
        label: "Back",
        href: "/overview",
      },
      eyebrow: "NMDC Energy",
      title: "At a Glance",
      background: {
        src: "/images/energy/overview-hero.jpg",
        alt: "NMDC Energy specialist inspecting equipment offshore",
      },
      image: {
        src: "/images/energy/overview-platforms.jpg",
        alt: "Offshore NMDC Energy platforms in turquoise water",
      },
      body: [
        "In 1973, NMDC Energy was founded by ADNOC and CCC as the National Petroleum Construction Company (NPCC) to encourage innovation in the energy sector and drive sustainable growth.",
        "Since then, we have developed an exceptional track record for our forward thinking, integrated EPC solutions for the energy sector.Our vast capacity enables us to achieve exceptional results for projects of all complexities, with 10,000 skilled employees, more than 1,500experienced engineers, an extensive fleet and a 1.3 million square meter yard. We specialize in offshore construction and operations for the oil, gas and energy sectors, and are committed to continuous investment in our equipment, fleet, people and capabilities. Together, we are leading the field and creating tangible value for the energy sector.",
      ],
    },
    icv: {
      id: "icv-score",
      title: "ICV Score",
      body: [
        "The company maintained a substantial UAE asset base of AED 2.99 billion in 2023 and AED 2.54 billion in 2024, creating a combined UAE asset footprint of AED 5.53 billion.",
        "Local procurement remained strong at AED 2.68 billion in FY2023 and AED 2.45 billion in FY2024, demonstrating sustained support for UAE suppliers across multiple Emirates.",
      ],
      scoreLabel: "ICV Score 2025",
      score: "85.16%",
    },
    highlights: {
      title: "Key Highlights",
      items: [
        {
          value: "20-30",
          unit: "Minutes",
          label: "Tender planning time (down from 2-3 days)",
          icon: "clock",
        },
        {
          value: "42,677",
          unit: "",
          label: "Man-hours saved annually",
          icon: "people",
        },
        {
          value: "USD 1.3",
          unit: "mn",
          label: "Cost savings per year",
          icon: "cost",
        },
      ],
    },
    video: {
      image: {
        src: "/images/energy/overview-video.jpg",
        alt: "NMDC Energy vessel at sea",
      },
      playLabel: "Play NMDC Energy overview video",
    },
    technology: {
      title: "Technology and Digital Transformation",
      image: {
        src: "/images/energy/overview-technology.jpg",
        alt: "NMDC Energy offshore module on a barge",
      },
      cards: [
        {
          title: "HSE AMAN 24/7",
          body: "Pioneer AI solution for HSE hazard detection, now adopted by other EPC players and implemented in KSA.",
          icon: "shield",
        },
        {
          title: "Yard Scan AI",
          body: "AI-powered, daily yard operation for real-time tracking and accurate metal tag data capture using phone cameras.",
          icon: "scan",
        },
      ],
      agents: {
        title: "Collaborative Agents",
        subtitle: "Across Departments",
        items: [
          { label: "Proposal & Estimation", icon: "proposal" },
          { label: "Procurement/Supply Chain", icon: "procurement" },
          { label: "Engineering", icon: "engineering" },
        ],
      },
    },
  },
  yardHighlights: {
    hero: {
      title: {
        white: "NMDC",
        accent: "Energy Yards",
      },
      background: {
        src: "/images/energy/yards-hero.jpg",
        alt: "NMDC Energy construction vessel with crane at sea",
      },
    },
    keyHighlights: {
      title: "Key Highlights",
      activeYard: "ICAD-4 Yard",
      aerialImage: {
        src: "/images/energy/yards-aerial.jpg",
        alt: "Aerial view of NMDC Energy yard facilities",
      },
      slideCount: "(1/4)",
      yards: [
        {
          name: "Mussafah Yard (UAE)",
          flag: "🇦🇪",
          facts: [
            "Area : 1,075,000 sqm",
            "Capabilities : Major structures",
            "Man power : 15,000",
          ],
        },
        {
          name: "ICAD-4 Yard (UAE)",
          flag: "🇦🇪",
          facts: [
            "Area : 555,000 sqm",
            "Capabilities : Pipe coating and modularization",
            "Man power : 350",
          ],
        },
        {
          name: "NEMY Yard (UAE)",
          flag: "🇦🇪",
          facts: [
            "Area : 184,000 sqm",
            "Capabilities : Modular fabrication",
            "Man power : 3,000",
          ],
        },
        {
          name: "Ras Al Khair Yard (KSA)",
          flag: "🇸🇦",
          facts: [
            "Area : 400,000 sqm",
            "Capabilities : PDMs, jackets, offshore structures, and modularization",
            "Man power : 15,000",
          ],
        },
      ],
      stats: [
        {
          value: "+2,100,000",
          unit: "sqm",
          label: "Total Fabrication Area",
          icon: "grid",
        },
        {
          value: "+100,000",
          unit: "metric ton",
          label: "Annual Fabrication Capacity",
          icon: "expand",
        },
        {
          value: "107.03",
          unit: "million",
          label: "Safe Man Hours in 2025",
          icon: "worker",
        },
      ],
      record: {
        title: "Guinness World Record",
        body: "Holds the record for the fabrication, loadout and installation of the \"Heaviest single-module topside on a fixed steel jacket\"",
      },
      video: {
        image: {
          src: "/images/energy/yards-video.jpg",
          alt: "Offshore NMDC Energy platforms and vessels",
        },
        playLabel: "Play NMDC Energy yards video",
      },
    },
    achievements: {
      title: "Yard Achievements",
      stats: [
        { value: "51", label: "Structures" },
        { value: "80,000", label: "Metric tons" },
      ],
      intro: "Record-Breaking mega operations such as :",
      bullets: [
        "Fabrication & Loadout of a 32,000 Metric Tons (Guinness World Record) Fixed Steel Structure",
        "Fabrication & Loadout of an 8,200 Metric Tons structure through Self Propelled Modular Trailers(SPMT), led and executed by Emirati personnel",
        "Heavy Lifts of modularized platform levels, engineered and executed through in-house capabilities with the heaviest reaching 1,500 MT",
      ],
    },
    capabilities: {
      title: "Yard Capabilities",
      items: [
        {
          value: "165,000",
          body: "Metric Tons of steel produced in Yards.",
          icon: "steel",
        },
        {
          body: "State-of-the-Art Robotic welding and COBOT Welding stations, for welding small to heavy components (up to 3 metric tons)",
          icon: "robot",
        },
        {
          body: "Real Time Labor Tracking System – Alerts and Tracking",
          icon: "monitor",
        },
        {
          body: "AI-driven HSE site safety analyzer implemented at Heavy Shop facilities with real-time personnel tracking with automated alerts",
          icon: "shield",
        },
        {
          body: "Industry leading cloud-connected equipment monitoring and AI-driven insights for : utilization, productivity, fuel consumption",
          icon: "cloud",
        },
        {
          body: "Proximity Warning Alert System installed onto heavy mobile equipment",
          icon: "alert",
        },
      ],
    },
  },
  footer: {
    background: {
      src: "/images/energy/overview-footer-bg.jpg",
      alt: "",
    },
    businesses: [
      { label: "NMDC Dredging & Marine", dotColor: "bg-[#18a7e0]" },
      { label: "NMDC Energy", dotColor: "bg-energy-green" },
      { label: "NMDC Engineering", dotColor: "bg-[#ff8730]" },
      { label: "NMDC Infra", dotColor: "bg-[#ffce0b]" },
      { label: "NMDC LTS", dotColor: "bg-[#dfc7a5]" },
    ],
    connect: {
      label: "Let's connect",
      href: "#contact",
    },
    socialLinks: [
      { label: "Facebook", href: "#", marker: "f" },
      { label: "Instagram", href: "#", marker: "ig" },
      { label: "X", href: "#", marker: "x" },
      { label: "LinkedIn", href: "#", marker: "in" },
    ],
    navigationLabel: "Footer navigation",
    emailTitle: "Email",
    emails: [
      { label: "General inquiries", value: "NMDC@nmdc-group.com" },
      { label: "Commercial inquiries", value: "marketing@nmdc-group.com" },
      { label: "Careers", value: "recruitment@nmdc-group.com" },
      { label: "Vendors registration", value: "vendors@nmdc-group.com" },
    ],
    copyright: "© Copyright, All rights reserved by NMDC Group.",
  },
  home: {
    hero: {
      background: {
        src: "/images/energy/home-hero.jpg",
        alt: "Offshore energy platforms in turquoise water",
      },
      headline: {
        white: ["Innovative EPC", "Solutions"],
        accent: ["To Complex Energy", "Challenges"],
      },
      subhead:
        "NMDC Energy specializes in harnessing the power of innovation to address the energy sector’s evolving needs.",
      cta: {
        label: "Visit Us",
        href: "/overview",
      },
    },
    cards: [
      {
        title: "NMDC Group",
        href: groupAppUrl,
        image: "/images/energy/card-group.jpg",
        logo: {
          src: withEnergyBasePath("/images/energy/logo-group.svg"),
          alt: "NMDC Group",
        },
      },
      {
        title: "NMDC Dredging\n& Marine",
        href: dredgingMarineAppUrl,
        image: "/images/energy/card-dredging.jpg",
        logo: {
          src: "/images/energy/logo-dm.png",
          alt: "NMDC Dredging & Marine",
        },
      },
      {
        title: "NMDC Infra",
        href: infraAppUrl,
        image: "/images/energy/card-infra.jpg",
        logo: {
          src: "/images/energy/logo-infra.png",
          alt: "NMDC Infra",
        },
      },
      {
        title: "NMDC LTS",
        href: ltsAppUrl,
        image: "/images/energy/card-lts.jpg",
        logo: {
          src: withEnergyBasePath("/images/energy/logo-lts.svg"),
          alt: "NMDC LTS",
        },
      },
      {
        title: "NMDC Product Highlight",
        href: "/products",
        image: "/images/energy/card-product.jpg",
      },
    ],
  },
};

export function getEnergyNavLinks(activeHref: string) {
  return nmdcEnergyContent.nav.links.map((link) => ({
    ...link,
    active: link.href === activeHref,
  }));
}
