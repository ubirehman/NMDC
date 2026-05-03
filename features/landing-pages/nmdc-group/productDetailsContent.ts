const productsImageBase = "/images/landing/products";
const dredgingMarineAppUrl = (
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121"
).replace(/\/$/, "");

const hailGhashaPanels = [
  {
    title:
      "Ghasha Offshore Processing Plant ( GOP ) Project and Process Assembled Unit (PAU) Oil Stabilization Project",
    highlights: [
      "One of the world’s largest offshore sour gas developments projects.",
      "A key strategic project supporting the UAE’s gas self-sufficiency and energy security goals.",
      "Incorporates advanced technologies for carbon capture and sulfur handling, aligning with national sustainability and decarbonization targets.",
    ],
    paragraphs: [
      "The Hail & Ghasha Development (HGD) Project will develop the untapped oil and gas reserves from the highly sour Hail and Ghasha fields. Production is targeted to start by Q4 2027 with sustainable production of 1 BSCFD of Raw Gas, and max production of 82.5 MSBPD of Oil, 76.3 MSBPD of Condensate.",
    ],
    sections: [
      {
        title: "Project Overview:",
        bullets: [
          "The Hail and Ghasha fields are situated offshore Abu Dhabi about 140 km away from Abu Dhabi mainland in water depths varying from 0 to 15 meters.",
          "The Hail and Ghasha Project Offshore Package (EPC 01) comprises the following: four Offshore Drilling Centers (DCs), Subsea Pipelines, Umbilicals, Power Cable Connections, Seawater Intake",
          "Structure, Bridges, Risers, Flare Structure, facilities at Ghasha Offshore Processing Plant (GOP)",
          "The HGD Project will be executed in a single phase approach. It will start production from three Drilling Centres (Reeah, Jzool & Seebah) in Ghasha Field to GOP and from Gaff Island in Hail Field to OPP. Remaining Drilling Centres, gas injection, and other associated facilities will be developed in ‘future’ to sustain production from Hail & Ghasha fields.",
        ],
      },
      {
        title: "Purpose and Objective of the Project:",
        paragraphs: [
          "Project objectives are the engineering, procurement, fabrication, construction, pre-commissioning, commissioning and start-up of the Offshore Package facilities. The plant design is based on a modularization approach with definition of 29 Pre-assembled Units (PAU), 81 Pre-assembled Racks (PAR) and 13 Pre-assembled Buildings (PAB), along with other minor modules such as: MOV skids and pre-assembled rack frames (PAF), pre-assembled stairs (PAS).",
        ],
      },
      {
        title: "Intended Use and Operational Significance:",
        paragraphs: [
          "The HGD Offshore Package facilities are intended for the oil and gas production, of strategic importance to the Emirate of Abu Dhabi. The plant and selected materials are designed to comply with the highly sour raw gas feedstock whose expected composition is characterized by a hydrogen sulphate concentration in excess of 30%, which represents one of the major challenges of the Project.",
        ],
      },
    ],
  },
] as const;

export const nmdcGroupProductDetails = [
  {
    slug: "marine-vessels",
    layout: "marine-vessels",
    fullTitle: "NMDC Dredging and Marine | Marine Vessels",
    brandName: null,
    title: "Integrated Marine Construction Operation",
    accentClassName: "text-primary-sky-blue",
    media: [
      {
        src: `${productsImageBase}/marine-vessels.webp`,
        alt: "NMDC marine dredging vessel at sea",
        fit: "cover",
      },
    ],
    summary: [
      "Supported by a modern and extensive fleet of dredgers, support vessels and marine equipment, we have the capabilities to operate anywhere in the world and overcome even the most challenging site conditions. From heavy duty CSDs to Watermaster dredgers, we work with a variety of industry leading vessels to deliver exciting, complex projects in the UAE and worldwide.",
    ],
    vesselCards: [
      {
        name: "Al Yassat",
        type: "Heavy Duty CSDs",
        image: `${productsImageBase}/marine-vessel-al-yassat.jpg`,
        alt: "Al Yassat heavy duty cutter suction dredger",
        specs: [
          { label: "Dredging Depth", value: "36.0 m" },
          { label: "Breadth", value: "28 m" },
          { label: "Length Overall", value: "138 m" },
          { label: "Depth", value: "13.8 m" },
        ],
      },
      {
        name: "Al Sadr",
        type: "Heavy Duty CSDs",
        image: `${productsImageBase}/marine-vessel-al-sadr.jpg`,
        alt: "Al Sadr heavy duty cutter suction dredger",
        specs: [
          { label: "Dredging Depth", value: "27.0 m" },
          { label: "Breadth", value: "20.30 m" },
          { label: "Length Overall", value: "117.50 m" },
          { label: "Depth", value: "6.00 m" },
        ],
      },
      {
        name: "Al Mirfa",
        type: "Heavy Duty CSDs",
        image: `${productsImageBase}/marine-vessel-al-mirfa.jpg`,
        alt: "Al Mirfa heavy duty cutter suction dredger",
        specs: [
          { label: "Dredging Depth", value: "20.0 m" },
          { label: "Breadth", value: "19.60 m" },
          { label: "Length Overall", value: "97.10 m" },
          { label: "Depth", value: "4.90 m" },
        ],
      },
      {
        name: "Jananah",
        type: "Beavers",
        image: `${productsImageBase}/marine-vessel-jananah.jpg`,
        alt: "Jananah beaver dredger",
        specs: [
          { label: "Dredging Depth", value: "14.0 m" },
          { label: "Breadth", value: "8.55 m" },
          { label: "Length Overall", value: "47.50 m" },
          { label: "Depth", value: "2.75 m" },
        ],
      },
      {
        name: "Sarb",
        type: "Backhoe Dredgers",
        image: `${productsImageBase}/marine-vessel-sarb.jpg`,
        alt: "Sarb backhoe dredger",
        specs: [
          { label: "Dredging Depth", value: "25 m" },
          { label: "Breadth", value: "18 m" },
          { label: "Length Overall", value: "60 m" },
          { label: "Depth", value: "4.5 m" },
        ],
      },
      {
        name: "Ghasha",
        type: "Hopper Dredger",
        image: `${productsImageBase}/marine-vessel-ghasha.jpg`,
        alt: "Ghasha hopper dredger",
        specs: [
          { label: "Dredging Depth", value: "45 m" },
          { label: "Breadth", value: "25 m" },
          { label: "Length Overall", value: "123 m" },
          { label: "Depth", value: "7.6 m" },
        ],
      },
    ],
    sections: [],
  },
  {
    slug: "mussafah-yard",
    layout: "mussafah-yard",
    fullTitle: "Mussafah Yard and Its Products",
    brandName: null,
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
    layout: "coastal-hydrodynamic-center",
    fullTitle: "NMDC Dredging and Marine | Coastal & Hydrodynamic Center",
    brandName: null,
    title: "Coastal & Hydrodynamic Center",
    accentClassName: "text-primary-sky-blue",
    cta: {
      label: "Play virtual tour",
      href: `${dredgingMarineAppUrl}/hydraulic-physical-model#virtual-tour`,
    },
    media: [
      {
        src: `${productsImageBase}/coastal-hydrodynamic-center.webp`,
        alt: "Coastal and hydrodynamic testing basin",
        fit: "cover",
      },
    ],
    collageImage: {
      src: `${productsImageBase}/coastal-hydrodynamic-collage.png`,
      alt: "Coastal and hydrodynamic center wave basin collage",
      fit: "cover",
    },
    summary: [
      "The state-of-the-art NMDC D&M Coastal and Hydrodynamic Center, which spans approximately 2800 sqm, allows engineers to simulate and validate the impact of hydrodynamic environmental actions on strategic infrastructure, including ports, breakwaters, sea walls and offshore structures. Using scaled physical models to replicate real-world environments, it ensures that model behaviour reflects full-scale performance, including wave forces, pressures and structural response, enabling designs to be tested, refined and optimised before construction.The new facility features a 3D wave basin and 2D wave flume with advanced wave generation systems and controlled water environments, designed to test both fixed and floating structures across a wide range of conditions. It supports applications from early-stage research to validation of large-scale infrastructure, including wave transformation, overtopping, scour and harbor behavior under operational conditions.",
    ],
    sections: [],
  },
  {
    slug: "hail-ghasha-gop",
    layout: "hail-ghasha",
    fullTitle: "NMDC Energy | Hail and Ghasha Development Project",
    brandName: null,
    title: "Hail and Ghasha Development Project",
    accentClassName: "text-[#00bd66]",
    hailPanels: hailGhashaPanels,
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
    layout: "hail-ghasha",
    fullTitle: "NMDC Energy | Hail and Ghasha Development Project",
    brandName: null,
    title: "Hail and Ghasha Development Project",
    accentClassName: "text-[#00bd66]",
    hailPanels: hailGhashaPanels,
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
    fullTitle: "3D Printed Artificial Reefs",
    brandName: null,
    title: "3D Printed Artificial Reefs",
    accentClassName: "text-[#ffcf00]",
    panelHeightClassName: "md:min-h-[731px]",
    sectionMinHeightClassName: "md:min-h-[1341px]",
    media: [
      {
        src: `${productsImageBase}/3d-printed-artificial-reefs-detail.png`,
        alt: "3D printing robot producing artificial reef structures",
        fit: "cover",
      },
    ],
    summary: [
      "NMDC Infra is also pioneering digital manufacturing through its in-house 3D-printing facility, enabling production of innovative concrete forms. One key highlight is the development of 3D-printed coral reefs, engineered to replicate natural reef structures and support marine ecosystem restoration. The 3D printing machine at Emarat Europe factory enhances rapid prototyping and precision manufacturing with advanced additive technology",
    ],
    sections: [],
  },
  {
    slug: "multicat-21",
    fullTitle: "NMDC LTS | Multicad 21",
    brandName: null,
    title: "Multicad 21",
    accentClassName: "text-[#ddc19c]",
    panelHeightClassName: "md:min-h-[607px]",
    sectionMinHeightClassName: "md:min-h-[1341px]",
    media: [
      {
        src: `${productsImageBase}/multicat-21-detail-new.png`,
        alt: "Multicat 21 vessel render",
        fit: "cover",
      },
    ],
    summary: [
      "Multicat 21 is a versatile, high-capacity marine vessel designed for heavy-duty operations, combining strength, speed, and efficiency. Built for demanding tasks, it handles cargo, lifting, and marine support with unmatched reliability.",
    ],
    sections: [
      {
        title: "Built with Expertise",
        titleClassName: "text-white/92",
        paragraphs: ["Constructed by NMDC LTS -Workshops"],
        bullets: [
          "Classification: Bureau Veritas certified for safety and operational reliability",
          "Power & Performance: 682 HP total, reaching speeds up to 14 knots",
          "Cranes & Lifting: Equipped with cranes-22.4T at 4m and 9T at 9.4m -ideal for cargo handling and offshore operations",
          "Material Sourcing: All materials purchased from the local market, supporting reliability",
          "Equipment: High-quality imported systems from overseas manufacturers for trusted performance",
          "Versatile Design: Optimized for transport, lifting, and multipurpose marine operations",
        ],
      },
    ],
  },
  {
    slug: "valve",
    layout: "valve",
    fullTitle: "NMDC Energy | Valve",
    brandName: null,
    title: "Valve",
    accentClassName: "text-[#00bd66]",
    media: [],
    introTitle: "Valve Description including size and rating:",
    summary: [
      "Manual Ball Valve with size of 20”; thickness of 12.7 mm and Class 150 rating (Bi-directional Sealing)",
    ],
    sections: [
      {
        title: "Material of Construction:",
        bullets: [
          "Body: (Carbon Steel) ASTM A352 LCC",
          "Stem: INCONEL 825 (ASTM B564 UNS N08825)",
          "Ball: Carbon Steel + INCONEL 625 Cladding",
        ],
      },
      {
        title: "Design Temperature Range:",
        paragraphs: ["-45°C~ 150°C"],
      },
      {
        title: "Service:",
        paragraphs: [
          "SOUR TOXIC- High Pressure Flare- Low Pressure Flare- Hydrocarbon Sour",
        ],
      },
    ],
  },
  {
    slug: "pipe-coating-materials",
    fullTitle: "NMDC Energy | Pipe Coating Sample Materials",
    brandName: null,
    title: "Pipe Coating Sample Materials",
    accentClassName: "text-[#00bd66]",
    media: [
      {
        type: "video" as const,
        src: "/videos/our_products_icad_pipe_coating.mp4",
        alt: "Pipe coating yard video",
        fit: "cover",
      },
    ],
    summary: [
      "Occupying an area of 140,000 square meters, the ICAD - IV Pipe Coating Yard enables us to offer a wide range of specialist pipe coating services.",
    ],
    sections: [
      {
        title: "",
        bullets: [
          'Coal-Tar Enamel anti-corrosion coating (CTE) plant processing pipes ranging from 4" to 48" in outer diameter.',
          'Fusion Bonded Epoxy (FBE), Polyethylene (PE), Polypropylene (PP) plant processing coating for pipes ranging from 3" to 48" in outer diameter.',
          "Concrete Weight Coating (CC) plant with facilities for anode installation.",
          'Internal pipe cleaning machine with a shot/grit blasting process for pipes from 18" to 48" in diameter.',
          "On-bottom stability calculators.",
        ],
      },
    ],
  },
  {
    slug: "whipstock-system",
    fullTitle: "EMDAD | Whipstock",
    brandName: null,
    title: "Whipstock",
    accentClassName: "text-[#ddc19c]",
    panelHeightClassName: "md:min-h-[581px]",
    sectionMinHeightClassName: "md:min-h-[1188px]",
    media: [
      {
        src: `${productsImageBase}/whipstock-system-updated.png`,
        alt: "Whipstock system tools",
        fit: "cover",
        className: "object-cover object-center",
      },
    ],
    summary: [
      "Emdad, founded in 1979, has a long-standing track record in delivering technical expertise and innovative solutions across the UAE and MENA region. Under NMDC’s ownership, Emdad is positioned as a cornerstone of NMDC’s oil and gas business, leveraging combined capabilities to improve service excellence, expand regional reach, and create greater value for clients. The integration also aligns with NMDC’s strategy to diversify its energy portfolio and drive sustainable growth.",
      "Emdad Proudly produces a UAE Patent Whipstock system that is 100% designed and manufactured locally leveraging UAE talents and expertise. Our Whipstock systems are proven directional drilling tools used to initiate controlled sidetracks from existing wellbores. provide a stable and accurately oriented kickoff point for casing exit and re-entry operations, enabling efficient wellbore redirection while reducing rig time and intervention costs.",
      "The systems are available in hydraulic and mechanical configurations, and can be deployed as permanent or retrievable assemblies, depending on well objectives and operational strategy.",
      "Designed for HPHT environments, the systems ensure high structural integrity and consistent performance under demanding downhole conditions.",
      "Whipstocks are typically available for casing sizes ranging from 7\" to 20\", with custom sizes available upon request."
    ],
    sections: [],
  },
  {
    slug: "esp-pump",
    fullTitle: "NMDC Energy | ESP Pump",
    brandName: null,
    title: "ESP Pump",
    accentClassName: "text-[#00bd66]",
    introTitle: "The Emirates' first sovereign artificial-lift capability.",
    panelHeightClassName: "md:min-h-[774px]",
    sectionMinHeightClassName: "md:min-h-[1384px]",
    media: [
      {
        src: `${productsImageBase}/esp-pump-detail.png`,
        alt: "ESP pump product display",
        fit: "contain",
        className: "object-contain p-0",
      },
    ],
    summary: [
      "The Emirates has built sovereign capability in aluminum, in steel, in advanced electronics, and in space. Artificial lift - the technology that energizes every ageing producer well - has remained imported.",
      "This consortium closes that gap. A wholly UAE-engineered electrical submersible pump, designed in Abu Dhabi, manufactured in Abu Dhabi, tested in Abu Dhabi, dispatched from Abu Dhabi to every well that needs it.",
    ],
    sections: [
      {
        title: "The Capability",
        paragraphs: [
          "Wholly UAE-engineered electrical submersible pump system. Standard and harsh well configurations covered. Designed for run-life consistency and supply security. Permanent-magnet motor option for the energy transition. Full lifecycle in country - from reservoir-driven sizing through DIFA refurbishment.",
        ],
      },
      {
        title: "Four Pillars of National Capability",
        pillars: [
          {
            label: "1. In Country Value",
            body: "Wholly UAE-domiciled supply chain - design, fabrication, assembly, test, field service.",
          },
          {
            label: "2. Industrial Resilience",
            body: "Continuity of supply for the wells that fund the nation. No exposure to external disruption.",
          },
          {
            label: "3. Sovereign Supply",
            body: "An ESP capability owned by Emirati institutions, governed under Abu Dhabi law.",
          },
          {
            label: "4. Export Readiness",
            body: "Engineered to UAE standards from the first weld; configured to lift wells regionally and beyond.",
          },
        ],
      },
    ],
  },
  {
    slug: "safeen-green",
    fullTitle: "Safeen Subsea | Safeen Green",
    brandName: null,
    title: "Safeen Green",
    accentClassName: "text-primary-sky-blue",
    panelHeightClassName: "md:min-h-[328px]",
    sectionMinHeightClassName: "md:min-h-[936px]",
    media: [
      {
        src: `${productsImageBase}/safeen-green.webp`,
        alt: "Safeen Green unmanned vessel",
        fit: "cover",
      },
    ],
    summary: [
      "SAFEEN Green is a state-of-the-art remotely operated unmanned vessel (USV) launched by SAFEEN Subsea, part of AD Ports Group. It can operate up to 200 nautical miles offshore, collecting high-quality geophysical and hydrographic data with minimal environmental impact. Operating on 100% renewable electric power or biofuel, SAFEEN Green has only 10% of the emissions of a conventional vessel, significantly reducing its carbon footprint. The vessel is controlled from an onshore Remote Operation Centre (ROC) and features advanced navigation and safety technologies, enhancing safety and efficiency while eliminating risks to personnel.",
    ],
    sections: [],
  },
  {
    slug: "safeen-nav",
    fullTitle: "Safeen Subsea | Safeen NAV",
    brandName: null,
    title: "Safeen NAV",
    accentClassName: "text-primary-sky-blue",
    panelHeightClassName: "md:min-h-[370px]",
    sectionMinHeightClassName: "md:min-h-[980px]",
    specificationFile: "/pdfs/safeen-nav-specs.pdf",
    media: [
      {
        src: `${productsImageBase}/safeen-nav.jpg`,
        alt: "Safeen NAV positioning unit",
        fit: "cover",
      },
    ],
    summary: [
      "Our proprietary SAFEEN Nav positioning system has redefined accuracy in marine operations. By replacing hired signals, we've enhanced precision and reduced costs - another step forward in innovation.",
    ],
    sections: [],
  },
  {
    slug: "caissons-application",
    fullTitle: "NMDC Dredging and Marine | Caissons Application",
    brandName: null,
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
