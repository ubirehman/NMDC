const groupAppUrl =
  process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "http://localhost:3120";

const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

const infraAppUrl =
  process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122";

const ltsAppUrl =
  process.env.NEXT_PUBLIC_LTS_APP_URL ?? "http://localhost:3123";

const energyAppUrl =
  process.env.NEXT_PUBLIC_ENERGY_APP_URL ?? "http://localhost:3124";

const energyBasePath = process.env.NEXT_PUBLIC_ENERGY_BASE_PATH ?? "";

const withEnergyBasePath = (assetPath: string) =>
  energyBasePath ? `${energyBasePath}${assetPath}` : assetPath;

const withGroupAppPath = (path: string) =>
  `${groupAppUrl.replace(/\/$/, "")}${path}`;

export const nmdcEnergyContent = {
  brand: {
    name: "NMDC Energy",
    logo: withEnergyBasePath("/images/energy/logo-energy.png"),
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
        src: withEnergyBasePath("/images/energy/overview-hero.jpg"),
        alt: "NMDC Energy specialist inspecting equipment offshore",
      },
      image: {
        src: withEnergyBasePath("/images/energy/overview-platforms.jpg"),
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
        src: withEnergyBasePath("/images/energy/overview-hero.jpg"),
        alt: "NMDC Energy specialist inspecting equipment offshore",
      },
      image: {
        src: withEnergyBasePath("/images/energy/overview-platforms.jpg"),
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
          label: "Tender planning time\n\n(down from 2-3 days)",
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
      videos: [
        {
          title: "NMDC Energy overview",
          src: withEnergyBasePath("/videos/energy-overview-green.mp4"),
          type: "video/mp4",
          playLabel: "Play NMDC Energy overview video",
        },
        {
          title: "NMDC Energy ROV operations",
          src: withEnergyBasePath("/videos/energy-overview-rov.mp4"),
          type: "video/mp4",
          playLabel: "Play NMDC Energy ROV operations video",
        },
      ],
    },
    technology: {
      title: "Technology and Digital Transformation",
      image: {
        src: withEnergyBasePath("/images/energy/safeen_subsea_TD.png"),
        alt: "NMDC Energy offshore module on a barge",
      },
      cards: [
        {
          title: "HSE AMAN 24/7",
          body: "Pioneer AI solution for HSE hazard detection, now adopted by other EPC players and implemented in KSA.",
          icon: "shield",
          image: {
            src: withEnergyBasePath("/images/energy/nmdc_energy_24_7.png"),
            alt: "NMDC Energy offshore module on a barge",
          }
        },
        {
          title: "Yard Scan AI",
          body: "AI-powered, daily yard operation for real-timetracking and accurate metal tag data capture using phone cameras.",
          icon: "scan",
          image: {
            src: withEnergyBasePath("/images/energy/nmdc_energy_yard.png"),
            alt: "NMDC Energy offshore module on a barge",
          }
        },
      ],
      agents: {
        title: "Collaborative Agents",
        subtitle: "Across Departments",
        items: [
          {
            label: "Proposal & Estimation",
            icon: "proposal",
            image: {
              src: withEnergyBasePath("/images/energy/agent-business-proposal.png"),
              alt: "Business proposal icon",
            },
          },
          {
            label: "Procurement/Supply Chain",
            icon: "procurement",
            image: {
              src: withEnergyBasePath("/images/energy/agent-goods.png"),
              alt: "Goods procurement icon",
            },
          },
          {
            label: "Engineering",
            icon: "engineering",
            image: {
              src: withEnergyBasePath("/images/energy/agent-worker.png"),
              alt: "Engineering worker icon",
            },
          },
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
        src: withEnergyBasePath("/images/energy/yards-hero.png"),
        alt: "NMDC Energy construction vessel with crane at sea",
      },
    },
    keyHighlights: {
      title: "Key Highlights",
      activeYard: "",
      aerialImages: [
        {
          src: withEnergyBasePath("/images/energy/yard-highlight-1.jpg"),
          alt: "NMDC Energy yard highlight 1",
        },
        {
          src: withEnergyBasePath("/images/energy/yard-highlight-2.jpg"),
          alt: "NMDC Energy yard highlight 2",
        },
        {
          src: withEnergyBasePath("/images/energy/yard-highlight-3.jpg"),
          alt: "NMDC Energy yard highlight 3",
        },
        {
          src: withEnergyBasePath("/images/energy/yard-highlight-4.jpg"),
          alt: "NMDC Energy yard highlight 4",
        },
      ],
      yards: [
        {
          name: "Mussafah Yard (UAE)",
          flag: "🇦🇪",
          facts: [
            { icon: "area", text: "Area : 1,075,000 sqm" },
            { icon: "capabilities", text: "Capabilities : Major structures" },
            { icon: "manpower", text: "Man power : 15,000" },
          ],
        },
        {
          name: "ICAD-4 Yard (UAE)",
          flag: "🇦🇪",
          facts: [
            { icon: "area", text: "Area : 555,000 sqm" },
            { icon: "capabilities", text: "Capabilities : Pipe coating and modularization" },
            { icon: "manpower", text: "Man power : 350" },
          ],
        },
        {
          name: "NEMY Yard (UAE)",
          flag: "🇦🇪",
          facts: [
            { icon: "area", text: "Area : 184,000 sqm" },
            { icon: "capabilities", text: "Capabilities : Modular fabrication" },
            { icon: "manpower", text: "Man power : 3,000" },
          ],
        },
        {
          name: "Ras Al Khair Yard (KSA)",
          flag: "🇸🇦",
          facts: [
            { icon: "area", text: "Area : 400,000 sqm" },
            {
              icon: "capabilities",
              text: "Capabilities : PDMs, jackets, offshore structures, and modularization",
            },
            { icon: "manpower", text: "Man power : 15,000" },
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
        logo: {
          src: withEnergyBasePath("/images/energy/guinness-world-record.png"),
          alt: "Guinness World Records",
        },
        title: "Guinness World Record",
        body: "Holds the record for the fabrication, loadout and installation of the \"Heaviest single-module topside on a fixed steel jacket\"",
      },
      video: {
        image: {
          src: withEnergyBasePath("/images/energy/yards-video.jpg"),
          alt: "Offshore NMDC Energy platforms and vessels",
        },
        playLabel: "Play NMDC Energy yards video",
        videos: [
          {
            title: "NMDC Energy yards",
            src: withEnergyBasePath("/videos/nmdc_yardhighlight_1.mp4"),
            type: "video/mp4",
            playLabel: "Play NMDC Energy yards video",
          },
          {
            title: "NMDC Energy yard operations",
            src: withEnergyBasePath("/videos/nmdc_yardhighlight.mp4"),
            type: "video/mp4",
            playLabel: "Play NMDC Energy yard operations video",
          },
        ],
      },
    },
    achievements: {
      title: "Yard Achievements",
      summaryTitle: "Completed Fabrication and Loadout in 2025",
      stats: [
        { value: "51", label: "Structures" },
        { value: "80,000", label: "Metric tons" },
      ],
      intro: "Record-Breaking mega operations such as :",
      bullets: [
        "Fabrication & Loadout of a 32,000 Metric Tons (Guinness World Record) Fixed Steel Structure",
        "Fabrication & Loadout of an 8,200 Metric Tons structure through Self Propelled Modular Trailers(SPMT)",
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
          image: {
            src: withEnergyBasePath("/images/energy/yard-capability-steel.png"),
            alt: "Steel beam icon",
          },
        },
        {
          body: "State-of-the-Art Robotic welding and COBOT Welding stations, for welding small to heavy components (up to 3 metric tons)",
          icon: "robot",
          image: {
            src: withEnergyBasePath("/images/energy/yard-capability-robot-arm.png"),
            alt: "Robotic arm icon",
          },
        },
        {
          body: "Real Time Labor Tracking System – Alerts and Tracking",
          icon: "monitor",
          image: {
            src: withEnergyBasePath("/images/energy/yard-capability-monitoring.png"),
            alt: "Labor monitoring icon",
          },
        },
        {
          body: "AI-driven HSE site safety analyzer implemented at Heavy Shop facilities with real-time personnel tracking with automated alerts",
          icon: "shield",
        },
        {
          body: "Industry leading cloud-connected equipment monitoring and AI-driven insights for : utilization, productivity, fuel consumption",
          icon: "cloud",
          image: {
            src: withEnergyBasePath("/images/energy/yard-capability-connection.png"),
            alt: "Cloud connection icon",
          },
        },
        {
          body: "Proximity Warning Alert System installed onto heavy mobile equipment",
          icon: "alert",
          image: {
            src: withEnergyBasePath("/images/energy/yard-capability-alert.png"),
            alt: "Warning alert icon",
          },
        },
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
        src: withEnergyBasePath("/images/energy/products--hero-.png"),
        alt: "NMDC Energy offshore module at a fabrication yard",
      },
      topSideBackground: {
        src: withEnergyBasePath("/images/energy/products-topside-hero_.png"),
        alt: "NMDC Energy offshore module at a fabrication yard",
      },
      jacketBackground: {
        src: withEnergyBasePath("/images/energy/products-jacket-hero.png"),
        alt: "NMDC Energy offshore module at a fabrication yard",
      },
      bridgesAndBoatLandingsBackground: {
        src: withEnergyBasePath("/images/energy/products-bridges-boat-landings-hero.png"),
        alt: "NMDC Energy offshore module at a fabrication yard",
      },
      pressureVesselsBackground: {
        src: withEnergyBasePath("/images/energy/products-pressure-vessels-hero.png"),
        alt: "NMDC Energy offshore module at a fabrication yard",
      },
      pipeCoatingBackground: {
        src: withEnergyBasePath("/images/energy/products-pipe-coating-hero.png"),
        alt: "NMDC Energy offshore module at a fabrication yard",
      },
    },
    items: [
      {
        title: "Topside",
        href: "/products/topside",
        image: {
          src: withEnergyBasePath("/images/energy/product-topside.jpg"),
          alt: "NMDC Energy topside module at a waterfront yard",
          objectPosition: "47% 50%",
        },
      },
      {
        title: "Jackets",
        href: "/products/jackets",
        image: {
          src: withEnergyBasePath("/images/energy/product-jackets.png"),
          alt: "Steel jacket structure under construction",
          objectPosition: "50% 50%",
        },
      },
      {
        title: "Bridges And Boat Landings",
        href: "/products/bridges-and-boat-landings",
        image: {
          src: withEnergyBasePath("/images/energy/product-bridges-boat-landings.png"),
          alt: "Bridge and boat landing structure being lifted by cranes",
          objectPosition: "50% 50%",
        },
      },
      {
        title: "Pressure Vessels",
        href: "/products/pressure-vessels",
        image: {
          src: withEnergyBasePath("/images/energy/product-pressure-vessels.png"),
          alt: "Pressure vessel being handled at an industrial yard",
          objectPosition: "48% 50%",
        },
      },
      {
        title: "Process Skids",
        href: "/products/process-skids",
        image: {
          src: withEnergyBasePath("/images/energy/product-process-skids.png"),
          alt: "Process skid equipment mounted above a pressure vessel",
          objectPosition: "50% 50%",
        },
      },
      {
        title: "Pipe Coating",
        href: "/products/pipe-coating",
        image: {
          src: withEnergyBasePath("/images/energy/product-pipe-coating.png"),
          alt: "Coated pipe sections stacked in an industrial yard",
          objectPosition: "50% 50%",
        },
      },
    ],
    details: [
      {
        slug: "topside",
        title: "TOPSIDE",
        intro: {
          paragraphs: [
            "Topsides in oil and gas construction refer to the above-ground or above-water facilities installed on a platform, structure, or foundation, both offshore and onshore.",
            "They accommodate critical operational systems such as process equipment, power generation, control rooms, utilities, safety systems, and accommodation, enabling safe and efficient production and processing activities.",
          ],
        },
        chart: {
          title: "Total Manufactured Topside From 2003",
          values: [
            { year: "2023", value: 3 },
            { year: "2024", value: 11 },
            { year: "2025", value: 36 },
          ],
        },
        media: {
          label: "Riser Platform",
          image: {
            src: withEnergyBasePath("/images/energy/product-topside-detail.jpg"),
            alt: "NMDC Energy riser platform topside module",
            objectPosition: "50% 50%",
          },
        },
        typesTitle: "TYPES OF TOPSIDES",
        offshore: {
          title: "OFFSHORE STRUCTURES",
          images: [
            {
              src: withEnergyBasePath("/images/energy/offshore-structure-01.png"),
              alt: "Oil or gas production platform and wellhead tower capacity",
            },
            {
              src: withEnergyBasePath("/images/energy/offshore-structure-02.png"),
              alt: "Water injection platform capacity",
            },
            {
              src: withEnergyBasePath("/images/energy/offshore-structure-03.png"),
              alt: "Power distribution platform capacity",
            },
            {
              src: withEnergyBasePath("/images/energy/offshore-structure-04.png"),
              alt: "Gas treatment platform capacity",
            },
            {
              src: withEnergyBasePath("/images/energy/offshore-structure-05.png"),
              alt: "Riser platform and tie-in platform capacity",
            },
            {
              src: withEnergyBasePath("/images/energy/offshore-structure-06.png"),
              alt: "Accommodation platform capacity",
            },
          ],
        },
        onshore: {
          title: "ONSHORE STRUCTURES",
          module: {
            title: "Pre-assembled Module (Substations/ Process Modules)",
            value: "500 MT",
            unit: "per each module (metric tons)",
          },
          specs: [
            { title: "Approximate Topside Weight", value: "Vary from 300 MT up to 32,000 MT" },
            { title: "Approximate Topside size", value: "Up to 68 m x 75 m" },
            { title: "Fabrication Duration", value: "1 year to 5 Years" },
          ],
        },
      },
      {
        slug: "jackets",
        title: "JACKETS",
        intro: {
          title: "FIXED TYPE JACKETS",
          bullets: [
            "Jackets are used as foundations to install different types of topside",
            "Jacket's height depend on the water depth up to 90 meters",
            "Number of jacket legs vary from three (3) legs up to eight (8) legs based on the topside and the water depth",
            "Approximately weighs from 500 MT up to 4500 MT (metric tons)",
          ],
        },
        chart: {
          title: "Total Manufactured Topside From 2003",
          values: [
            { year: "2023", value: 23 },
            { year: "2024", value: 10 },
            { year: "2025", value: 9 },
          ],
        },
        media: {
          label: "Eight Legged Jacket",
          image: {
            src: withEnergyBasePath("/images/energy/product-jackets-detail.jpg"),
            alt: "Eight legged jacket structure on a transport platform",
            objectPosition: "50% 50%",
          },
        },
      },
      {
        slug: "bridges-and-boat-landings",
        title: "BRIDGES AND BOAT LANDINGS",
        intro: {
          bullets: [
            "Bridges are used to connect between different topsides at sea",
            "Boat landing is required to facilitate the access to topsides from barges/boats",
            "Approximately weighs from 250 MT to 500 MT (metric tons)",
          ],
        },
        chart: {
          title: "Total Manufactured Topside From 2003",
          values: [
            { year: "2023", value: 0 },
            { year: "2024", value: 2 },
            { year: "2025", value: 6 },
          ],
        },
        media: {
          label: "Bridges",
          image: {
            src: withEnergyBasePath("/images/energy/product-bridges-detail.jpg"),
            alt: "Fabricated bridge structure in an NMDC Energy yard",
            objectPosition: "50% 50%",
          },
        },
      },
      {
        slug: "pressure-vessels",
        title: "PRESSURE VESSELS",
        intro: {
          paragraphs: [
            "Pressure vessels in oil & gas platforms are closed containers designed to safely hold fluids or gases at pressures significantly different from ambient conditions during processing, separation, storage, or transportation.",
          ],
        },
        highlightsTitle: "Key Highlights",
        highlights: [
          { title: "Fabricated Around", value: "1200", unit: "Pieces", icon: "pressure" },
          { title: "Weighs up to", value: "300", unit: "Metric ton per piece", icon: "weight" },
          { title: "Fabrication duration", value: "3 to 12", unit: "Months", icon: "duration" },
        ],
        media: {
          label: "Storage Tank",
          image: {
            src: withEnergyBasePath("/images/energy/product-pressure-vessels-detail.png"),
            alt: "Storage tank pressure vessel in a fabrication workshop",
            objectPosition: "50% 50%",
          },
        },
      },
      {
        slug: "process-skids",
        title: "PROCESS SKIDS",
        intro: {
          paragraphs: [
            "Process skids in oil & gas platforms are modular, pre-assembled units that integrate piping, equipment, instrumentation, and controls to perform specific processing functions onsite.",
          ],
        },
        highlightsTitle: "Key Highlight",
        highlights: [
          { title: "Fabrication Duration", value: "6 to 12", unit: "Months", icon: "duration" },
        ],
        media: {
          label: "Glycol Storage Unit",
          image: {
            src: withEnergyBasePath("/images/energy/process_skids_image.png"),
            alt: "Glycol storage unit process skid in a workshop",
            objectPosition: "50% 50%",
          },
        },
      },
      {
        slug: "pipe-coating",
        title: "PIPE COATING",
        intro: {
          title: "ICAD IV - Pipe Coating Yard",
          paragraphs: [
            "The yard is specialized in 1LFBE, 2LFBE (Single & Dual Layer Fusion Bonded Epoxy), 3-Layer Polyolefin (3LPC): 3-Layer Polyethylene/Polypropylene, Internal Liquid Epoxy/ Flow coating & Concrete Weight Coating on line pipes.",
          ],
        },
        capabilities: [
          "FBE/ 3LPO Coating of 3\"- 64\" OD Pipes",
          "CWC coating of 4\" - 48\" OD Pipes",
          "Internal Painting of 16\" - 64\" OD Pipes",
        ],
        highlights: [
          {
            title: "15,000 KM",
            value: "Pipeline coating completed",
            unit: "(~1.230 Million pipes coated, since inception, equivalent to 1/3 the circumference of the Earth)",
            icon: "pipe",
            image: {
              src: withEnergyBasePath("/images/energy/icon-pipe-coating-pipe.png"),
              alt: "Pipe coating production icon",
            },
          },
          {
            title: "2025",
            value: "1,005 km of pipe coating completed",
            unit: "82,400 pipes.",
            icon: "coating",
            image: {
              src: withEnergyBasePath("/images/energy/icon-pipe-coating-plant.png"),
              alt: "Pipe coating plant icon",
            },
          },
          {
            title: "58,626 pieces",
            value: "Loaded out 28,114 pipes concrete weight coated to Offshore and 30,512 pipes 2-Layer FBE & 3LPE/PP coated to Onshore",
            unit: "(Totaling 58,626 pipes).",
            icon: "stack",
            image: {
              src: withEnergyBasePath("/images/energy/icon-pipe-coating-loadout.png"),
              alt: "Pipe coating loadout icon",
            },
          },
        ],
        media: {
          label: "Double Jointed CWC Pipes",
          image: {
            src: withEnergyBasePath("/images/energy/product-pipe-coating-video.jpg"),
            alt: "Aerial view of NMDC Energy ICAD 4 pipe coating yard",
            objectPosition: "50% 50%",
          },
          mobileImage: {
            src: withEnergyBasePath("/images/energy/product-pipe-coating-mobile.jpg"),
            alt: "Double jointed CWC pipes being transported by truck",
            objectPosition: "50% 50%",
          },
          playLabel: "Play pipe coating yard video",
          videos: [
            {
              title: "Pipe coating yard",
              src: withEnergyBasePath("/videos/our_products_icad_pipe_coating.mp4"),
              type: "video/mp4",
              playLabel: "Play pipe coating yard video",
            }
          ],
        },
        table: {
          title: "PRODUCTION CAPACITY FOR EACH 3 LPO PLANT",
          columns: [
            "Outer Diameter (inches)",
            "Fusion Bonded Epoxy (FBE) (1)",
            "3 Layer (2)",
            "Concrete Coating on Top of (1) and (2)",
          ],
          rows: [
            ["4.5\"", "4.87 m / min", "4.87 m / min", "2.2 m / min"],
            ["12.75\"", "4.57 m / min", "4.57 m / min", "2.2 m / min"],
            ["20\"", "2.65 m / min", "2.65 m / min", "1.73 m / min"],
            ["48\"", "1.07 m / min", "1.07 m / min", "1.13 m / min"],
          ],
        },
      },
    ],
  },
  footer: {
    background: {
      src: withEnergyBasePath("/images/energy/overview-footer-bg.jpg"),
      alt: "",
    },
    businesses: [
      {
        label: "NMDC Dredging & Marine",
        href: dredgingMarineAppUrl,
        dotColor: "bg-[#18a7e0]",
      },
      { label: "NMDC Energy", href: energyAppUrl, dotColor: "bg-energy-green" },
      {
        label: "NMDC Engineering",
        href: withGroupAppPath("/nmdc-overview"),
        dotColor: "bg-[#ff8730]",
      },
      { label: "NMDC Infra", href: infraAppUrl, dotColor: "bg-[#ffce0b]" },
      { label: "NMDC LTS", href: ltsAppUrl, dotColor: "bg-[#dfc7a5]" },
    ],
    connect: {
      label: "Let's connect",
      href: "#contact",
    },
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/nmdc-group/",
        marker: "in",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/nmdc_group?igsh=MWlqOXUxOGlza3h3ZA",
        marker: "ig",
      },
    ],
    navigationLabel: "Footer navigation",
    navigationLinks: [
      { label: "Home", href: withGroupAppPath("/") },
      { label: "NMDC Overview", href: withGroupAppPath("/nmdc-overview") },
      { label: "People & Culture", href: withGroupAppPath("/people-and-culture") },
      { label: "Technology & Ai", href: withGroupAppPath("/technology") },
      { label: "Safeen Subsea", href: withGroupAppPath("/safeen-subsea") },
    ],
    mobileNavigationLinks: [
      { label: "Home", href: withGroupAppPath("/") },
      { label: "NMDC Overview", href: withGroupAppPath("/nmdc-overview") },
      { label: "People & Culture", href: withGroupAppPath("/people-and-culture") },
      { label: "Technology & Ai", href: withGroupAppPath("/technology") },
      { label: "Safeen Subsea", href: withGroupAppPath("/safeen-subsea") },
    ],
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
        src: withEnergyBasePath("/images/energy/home-hero.jpg"),
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
        href: "https://www.nmdc-energy.com/en/",
      },
    },
    cards: [
      {
        title: "NMDC Group",
        href: groupAppUrl,
        image: withEnergyBasePath("/images/energy/card-group.jpg"),
        logo: {
          src: withEnergyBasePath("/images/energy/logo-group.svg"),
          alt: "NMDC Group",
        },
      },
      {
        title: "NMDC Dredging\n& Marine",
        href: dredgingMarineAppUrl,
        image: withEnergyBasePath("/images/energy/card-dredging.jpg"),
        logo: {
          src: withEnergyBasePath("/images/energy/logo-dm.png"),
          alt: "NMDC Dredging & Marine",
        },
      },
      {
        title: "NMDC Infra",
        href: infraAppUrl,
        image: withEnergyBasePath("/images/energy/card-infra.webp"),
        logo: {
          src: withEnergyBasePath("/images/energy/logo-infra.png"),
          alt: "NMDC Infra",
        },
      },
      {
        title: "NMDC LTS",
        href: ltsAppUrl,
        image: withEnergyBasePath("/images/energy/card-lts.jpg"),
        logo: {
          src: withEnergyBasePath("/images/energy/logo-lts-card.svg"),
          alt: "NMDC LTS",
        },
      },
      {
        title: "NMDC Product Highlight",
        href: `${groupAppUrl}/products`,
        image: withEnergyBasePath("/images/energy/card-product.jpg"),
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
