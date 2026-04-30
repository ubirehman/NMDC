const productsImageBase = "/images/landing/products";

export const nmdcGroupProductDetails = [
  {
    slug: "marine-vessels",
    fullTitle: "NMDC Dredging and Marine | Marine Vessels",
    brandName: "NMDC Dredging and Marine",
    title: "Marine Vessels",
    accentClassName: "text-primary-sky-blue",
    media: [
      {
        src: `${productsImageBase}/marine-vessels.webp`,
        alt: "NMDC marine dredging vessel at sea",
        fit: "cover",
      },
    ],
    summary: [
      "Supported by a modern and extensive fleet of dredgers, support vessels and marine equipment, NMDC has the capabilities to operate anywhere in the world and overcome challenging site conditions.",
      "From heavy duty CSDs to Watermaster dredgers, the fleet supports complex marine projects across the UAE and worldwide.",
    ],
    sections: [
      {
        title: "Heavy Duty CSDs",
        stats: [
          { label: "Al Yassat", value: "Dredging depth 36.0 m, length overall 138 m, breadth 28 m." },
          { label: "Al Sadr", value: "Dredging depth 27.0 m, length overall 117.50 m, breadth 20.30 m." },
          { label: "Al Mirfa", value: "Dredging depth 20.0 m, length overall 97.10 m, breadth 19.60 m." },
        ],
      },
      {
        title: "Support Vessels",
        stats: [
          { label: "Jananah", value: "Beaver dredger with dredging depth of 14.0 m." },
          { label: "Sarb", value: "Backhoe dredger with dredging depth of 25 m." },
          { label: "Ghasha", value: "Hopper dredger with dredging depth of 45 m." },
        ],
      },
    ],
  },
  {
    slug: "mussafah-yard",
    layout: "mussafah-yard",
    fullTitle: "Mussafah Yard and Its Products",
    brandName: "NMDC Energy",
    title: "Mussafah Yard and Its Products",
    accentClassName: "text-[#00bd66]",
    media: [
      {
        src: `${productsImageBase}/mussafah-yard-detail.webp`,
        alt: "Mussafah Yard offshore structure",
        fit: "cover",
      },
    ],
    summary: [
      "The Company owns four (4) fabrication yards namely: Mussafah Yard, ICAD-4 Yard, NEMY Yard and the Ras Al Khair Yard (KSA). Mussafah Yard is considered the largest among the 4. Our fabrication yard is a fusion of precision and excellence, harmonizing skilled manpower, cutting-edge technology, and robotics to breathe life into our projects with unparalleled quality.",
    ],
    sections: [
      {
        title: "Mussafah Yard (UAE)",
        lines: [
          "Area: 1,075,000 sqm",
          "Capabilities: Major structures (platforms, decks, pancakes, and modularization)",
          "Manpower: 15,000",
        ],
      },
      {
        title: "Yard Capabilities",
        bullets: [
          "165,000 Metric Tons of steel produced in Yards.",
          "State-of-the-Art Robotic welding and COBOT Welding stations, for welding small to heavy components (up to 3 metric tons)",
          "Real Time Labor Tracking System - Alerts and Tracking",
          "AI-driven HSE site safety analyzer implemented at Heavy Shop facilities with real-time personnel tracking with automated alerts",
          "Industry leading cloud-connected equipment monitoring and AI-driven insights for: utilization, productivity, fuel consumption",
          "Proximity Warning Alert System installed onto heavy mobile equipment",
        ],
      },
      {
        title: "Highlighted Yard Products",
        bullets: [
          "Topside",
          "Jacket",
          "Bridges and Boat Landings",
          "Pressure Vessel",
          "Process Skids",
          "Pipe Coating",
        ],
      },
    ],
  },
  {
    slug: "coastal-hydrodynamic-center",
    fullTitle: "NMDC Dredging and Marine | Coastal & Hydrodynamic Center",
    brandName: "NMDC Dredging and Marine",
    title: "Coastal & Hydrodynamic Center",
    accentClassName: "text-primary-sky-blue",
    cta: { label: "Play virtual tour", href: "#" },
    media: [
      {
        src: `${productsImageBase}/coastal-hydrodynamic-center.webp`,
        alt: "Coastal and hydrodynamic testing basin",
        fit: "cover",
      },
      {
        src: `${productsImageBase}/coastal-center-mobile.webp`,
        alt: "Hydrodynamic basin close-up",
        fit: "cover",
      },
    ],
    summary: [
      "The NMDC D&M Coastal and Hydrodynamic Center spans approximately 2800 sqm and allows engineers to simulate and validate the impact of hydrodynamic environmental actions on strategic infrastructure.",
      "Using scaled physical models to replicate real-world environments, the facility tests and refines designs before construction.",
    ],
    sections: [
      {
        title: "Capabilities",
        bullets: [
          "3D wave basin and 2D wave flume.",
          "Advanced wave generation systems and controlled water environments.",
          "Testing for fixed and floating structures across a wide range of conditions.",
          "Applications include wave transformation, overtopping, scour and harbor behavior under operational conditions.",
        ],
      },
    ],
  },
  {
    slug: "hail-ghasha-gop",
    fullTitle: "NMDC Energy | Hail and Ghasha Development Project",
    brandName: "NMDC Energy",
    title: "Hail and Ghasha Development Project",
    accentClassName: "text-[#00bd66]",
    media: [
      {
        src: `${productsImageBase}/hail-ghasha-gop-model.webp`,
        alt: "Hail and Ghasha GOP model",
        fit: "contain",
      },
      {
        src: `${productsImageBase}/hail-ghasha-pau-model.webp`,
        alt: "Hail and Ghasha PAU oil stabilization model",
        fit: "contain",
      },
    ],
    summary: [
      "The Hail & Ghasha Development Project will develop untapped oil and gas reserves from the highly sour Hail and Ghasha fields.",
      "Production is targeted to start by Q4 2027 with sustainable production of 1 BSCFD of raw gas, and maximum production of 82.5 MSBPD of oil and 76.3 MSBPD of condensate.",
    ],
    sections: [
      {
        title: "Ghasha Offshore Processing Plant (GOP) Project",
        bullets: [
          "The Hail and Ghasha fields are situated offshore Abu Dhabi about 140 km away from Abu Dhabi mainland.",
          "The project includes drilling centers, subsea pipelines, umbilicals, power cable connections, seawater intake structure, bridges, risers and flare structure.",
          "Facilities at Ghasha Offshore Processing Plant are part of the offshore package.",
        ],
      },
      {
        title: "Purpose and Objective",
        bullets: [
          "Engineering, procurement, fabrication, construction, pre-commissioning, commissioning and start-up of the offshore package facilities.",
          "Plant design follows a modularization approach with PAUs, PARs and PABs.",
          "Selected materials are designed for highly sour raw gas feedstock.",
        ],
      },
    ],
  },
  {
    slug: "hail-ghasha-pau",
    fullTitle: "NMDC Energy | Hail and Ghasha Development Project",
    brandName: "NMDC Energy",
    title: "Process Assembled Unit GH5121-PAU-01 Oil Stabilization",
    accentClassName: "text-[#00bd66]",
    media: [
      {
        src: `${productsImageBase}/hail-ghasha-pau-model.webp`,
        alt: "Hail and Ghasha PAU oil stabilization model",
        fit: "contain",
      },
      {
        src: `${productsImageBase}/hail-ghasha-gop-model.webp`,
        alt: "Hail and Ghasha GOP model",
        fit: "contain",
      },
    ],
    summary: [
      "The Hail & Ghasha Development Project will develop untapped oil and gas reserves from the highly sour Hail and Ghasha fields.",
      "The offshore package facilities are intended for oil and gas production of strategic importance to Abu Dhabi.",
    ],
    sections: [
      {
        title: "Process Assembled Unit (PAU)",
        paragraphs: [
          "The plant design is based on a modularization approach with 29 Pre-assembled Units, 81 Pre-assembled Racks and 13 Pre-assembled Buildings.",
        ],
      },
      {
        title: "Operational Significance",
        bullets: [
          "Designed to comply with highly sour raw gas feedstock.",
          "Expected hydrogen sulphate concentration in excess of 30%.",
          "Supports safe delivery of offshore oil and gas production facilities.",
        ],
      },
    ],
  },
  {
    slug: "3d-printed-artificial-reefs",
    fullTitle: "NMDC Infra | 3d Printed Artificial Reefs",
    brandName: "NMDC Infra",
    title: "3d Printed Artificial Reefs",
    accentClassName: "text-[#ffcf00]",
    cta: { label: "Play virtual tour", href: "#" },
    media: [
      {
        src: `${productsImageBase}/3d-printed-artificial-reefs.webp`,
        alt: "3D printed artificial reef underwater",
        fit: "cover",
      },
      {
        src: `${productsImageBase}/reefs-mobile.webp`,
        alt: "3D printed reef components",
        fit: "cover",
      },
    ],
    summary: [
      "NMDC Infra is pioneering digital manufacturing through its in-house 3D-printing facility, enabling production of innovative concrete forms.",
      "One key highlight is the development of 3D-printed coral reefs engineered to replicate natural reef structures and support marine ecosystem restoration.",
    ],
    sections: [
      {
        title: "Digital Manufacturing",
        bullets: [
          "Rapid prototyping for advanced concrete forms.",
          "Precision manufacturing through additive technology.",
          "Support for marine habitat and ecosystem restoration.",
        ],
      },
    ],
  },
  {
    slug: "multicat-21",
    fullTitle: "NMDC LTS | Multicad 21",
    brandName: "NMDC LTS",
    title: "Multicad 21",
    accentClassName: "text-[#ddc19c]",
    media: [
      {
        src: `${productsImageBase}/multicat-21-mobile.webp`,
        alt: "Multicat 21 vessel render",
        fit: "contain",
      },
    ],
    summary: [
      "Multicat 21 is a versatile, high-capacity marine vessel designed for heavy-duty operations, combining strength, speed and efficiency.",
      "Built for demanding tasks, it handles cargo, lifting and marine support with reliable performance.",
    ],
    sections: [
      {
        title: "Built with Expertise",
        bullets: [
          "Constructed by NMDC LTS workshops.",
          "Bureau Veritas certified for safety and operational reliability.",
          "682 HP total power, reaching speeds up to 14 knots.",
          "Equipped with cranes rated 22.4T at 4m and 9T at 9.4m.",
          "Optimized for transport, lifting and multipurpose marine operations.",
        ],
      },
    ],
  },
  {
    slug: "valve",
    fullTitle: "NMDC Energy | Valve",
    brandName: "NMDC Energy",
    title: "Valve",
    accentClassName: "text-[#00bd66]",
    media: [
      {
        src: `${productsImageBase}/valve.webp`,
        alt: "Valve product showcase panel",
        fit: "contain",
      },
    ],
    summary: [
      "Valve products are showcased as part of NMDC Energy's fabrication and industrial product capability for offshore and onshore facilities.",
    ],
    sections: [
      {
        title: "Product Showcase",
        bullets: [
          "Supports modular fabrication and facility integration.",
          "Presented with NMDC Energy yard product capabilities.",
          "Part of the broader showcased products portfolio.",
        ],
      },
    ],
  },
  {
    slug: "pipe-coating-materials",
    fullTitle: "NMDC Energy | Pipe Coating Materials",
    brandName: "NMDC Energy",
    title: "Pipe Coating Materials",
    accentClassName: "text-[#00bd66]",
    media: [
      {
        src: `${productsImageBase}/pipe-coating-materials.webp`,
        alt: "Pipe coating materials showcase panel",
        fit: "contain",
      },
    ],
    summary: [
      "Pipe coating is highlighted within the Mussafah Yard product portfolio and supports the delivery of protected pipe systems for energy and marine infrastructure.",
    ],
    sections: [
      {
        title: "Highlighted Yard Product",
        bullets: [
          "Part of the yard product showcase alongside topsides, jackets, bridges, pressure vessels and process skids.",
          "Supports fabricated product delivery from NMDC Energy yards.",
        ],
      },
    ],
  },
  {
    slug: "whipstock-system",
    fullTitle: "EMDAD | Whipstock",
    brandName: "EMDAD",
    title: "Whipstock",
    accentClassName: "text-primary-sky-blue",
    media: [
      {
        src: `${productsImageBase}/whipstock-system.webp`,
        alt: "Whipstock system tools",
        fit: "contain",
      },
    ],
    summary: [
      "Emdad has a long-standing track record in delivering technical expertise and innovative solutions across the UAE and MENA region.",
      "Under NMDC ownership, Emdad is positioned as a cornerstone of NMDC's oil and gas business.",
    ],
    sections: [
      {
        title: "Whipstock Services",
        bullets: [
          "Specialized deflection tools used in drilling operations to initiate sidetracks from existing wellbores.",
          "Designed for efficient casing exit solutions.",
          "Equipped with hydraulic packers and mechanical anchors to support the whipstock concave in highly deviated holes.",
          "Supports reliable and efficient oil and gas operations.",
        ],
      },
    ],
  },
  {
    slug: "esp-pump",
    fullTitle: "NMDC Energy | ESP Pump",
    brandName: "NMDC Energy",
    title: "ESP Pump",
    accentClassName: "text-[#00bd66]",
    media: [
      {
        src: `${productsImageBase}/esp-pump.webp`,
        alt: "ESP pump product display",
        fit: "contain",
      },
    ],
    summary: [
      "The Emirates' first sovereign artificial-lift capability closes a critical technology gap for ageing producer wells.",
      "A wholly UAE-engineered electrical submersible pump can be designed, manufactured, tested and dispatched from Abu Dhabi.",
    ],
    sections: [
      {
        title: "The Capability",
        bullets: [
          "Wholly UAE-engineered electrical submersible pump system.",
          "Standard and harsh well configurations covered.",
          "Permanent-magnet motor option for the energy transition.",
          "Full lifecycle in country, from reservoir-driven sizing through DIFA refurbishment.",
        ],
      },
      {
        title: "Four Pillars of National Capability",
        bullets: [
          "In Country Value: UAE-domiciled supply chain for design, fabrication, assembly, test and field service.",
          "Industrial Resilience: continuity of supply for national production wells.",
          "Sovereign Supply: ESP capability owned by Emirati institutions.",
          "Export Readiness: engineered to UAE standards and configured for regional wells.",
        ],
      },
    ],
  },
  {
    slug: "safeen-green",
    fullTitle: "Safeen Subsea | Safeen Green",
    brandName: "Safeen Subsea",
    title: "Safeen Green",
    accentClassName: "text-primary-sky-blue",
    media: [
      {
        src: `${productsImageBase}/safeen-green.webp`,
        alt: "Safeen Green unmanned vessel",
        fit: "cover",
      },
    ],
    summary: [
      "SAFEEN Green is a remotely operated unmanned vessel launched by SAFEEN Subsea, part of AD Ports Group.",
      "It can operate up to 200 nautical miles offshore, collecting high-quality geophysical and hydrographic data with minimal environmental impact.",
    ],
    sections: [
      {
        title: "Low-Impact Operations",
        bullets: [
          "Operates on 100% renewable electric power or biofuel.",
          "Produces only 10% of the emissions of a conventional vessel.",
          "Controlled from an onshore Remote Operation Centre.",
          "Advanced navigation and safety technologies reduce personnel risk.",
        ],
      },
    ],
  },
  {
    slug: "safeen-nav",
    fullTitle: "Safeen Subsea | Safeen NAV",
    brandName: "Safeen Subsea",
    title: "Safeen NAV",
    accentClassName: "text-primary-sky-blue",
    media: [
      {
        src: `${productsImageBase}/safeen-nav.webp`,
        alt: "Safeen NAV positioning unit",
        fit: "cover",
      },
    ],
    summary: [
      "SAFEEN Nav is a proprietary positioning system that has redefined accuracy in marine operations.",
      "By replacing hired signals, the system enhances precision and reduces costs for offshore and subsea work.",
    ],
    sections: [
      {
        title: "Marine Positioning",
        bullets: [
          "Improves positioning accuracy in marine operations.",
          "Reduces dependency on hired signals.",
          "Supports more cost-efficient offshore and subsea delivery.",
        ],
      },
    ],
  },
  {
    slug: "caissons-application",
    fullTitle: "NMDC Dredging and Marine | Caissons Application",
    brandName: "NMDC Dredging and Marine",
    title: "Caissons Application",
    accentClassName: "text-primary-sky-blue",
    media: [
      {
        src: `${productsImageBase}/caissons-application.webp`,
        alt: "Caisson application at a marine construction site",
        fit: "cover",
      },
    ],
    summary: [
      "Caisson applications use gravity-based structures that provide environmental, technical and economic benefits for marine construction.",
    ],
    sections: [
      {
        title: "Application",
        bullets: [
          "Effective alternative to traditional marine construction methods.",
          "Supports port, coastal and marine infrastructure delivery.",
          "Showcased as part of NMDC Dredging and Marine capabilities.",
        ],
      },
    ],
  },
] as const;

export type NmdcGroupProductDetail = (typeof nmdcGroupProductDetails)[number];

export const nmdcGroupProductDetailSlugs = nmdcGroupProductDetails.map(
  (detail) => detail.slug,
);

export const nmdcGroupProductFooterLinks = [
  { label: "Home", href: "/" },
  { label: "NMDC Group Overview", href: "/nmdc-overview" },
  { label: "Yard Highlights", href: "/products" },
  { label: "Our Products", href: "/products" },
];

export function getNmdcGroupProductDetailBySlug(slug: string) {
  return nmdcGroupProductDetails.find((detail) => detail.slug === slug);
}
