import type { DmNavLink } from "../components/Header";

export const dmNavItems = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/overview" },
  { label: "Marine Vessels", href: "/marine-vessels" },
  { label: "Hydraulic Physical Model", href: "/hydraulic-physical-model" },
  { label: "Caisson Method", href: "/caisson-method" }
];

export function getDmNavLinks(activeHref: string): DmNavLink[] {
  return dmNavItems.map((link) => ({
    ...link,
    active: link.href === activeHref
  }));
}

export const dmHomeCards = [
  {
    title: "Overview",
    href: "/overview",
    image: "/images/dm/overview-vessel.jpg"
  },
  {
    title: "Marine Vessels",
    href: "/marine-vessels",
    image: "/images/dm/vessel-al-mirfa.jpg"
  },
  {
    title: "Capabilities",
    href: "/overview#capabilities",
    image: "/images/dm/hydraulic-model-2.jpg"
  },
  {
    title: "Hydraulic Physical Model",
    href: "/hydraulic-physical-model",
    image: "/images/dm/hydraulic-model-1.jpg"
  },
  {
    title: "Caisson Method",
    href: "/caisson-method",
    image: "/images/dm/caisson-installation.jpg"
  }
];

export const overviewIntro = [
  "NMDC Dredging & Marine combines global expertise with cutting-edge technology to deliver dredging, reclamation and construction services of exceptional quality. Working across the energy, tourism and urban development sectors, we shape the marine environments around us. The company's expertise spans a wide range of services, including dredging, reclamation, geotechnical works, and marine logistics. Its Marine Civil Works division executes complex projects such as jetties, marinas, breakwaters, and man-made islands, ensuring superior craftsmanship and structural integrity. Advanced ground improvement techniques like vibro compaction and stone column installation enhance soil stability, while hydrographic and geophysical surveys guide projects from concept to completion."
];

export const dmCapabilities = [
  {
    title: "Dredging & Reclamation",
    copy: "NMDC Dredging & Marine has risen to become the Middle East's leading provider of dredging and reclamation services. Our highly professional dredging operation harnesses innovative equipment and technology to deliver turnkey solutions for ports, harbors, artificial islands, beaches, land reclamation, intake and outfall dredging.",
    image: "/images/dm/overview-vessel.jpg"
  },
  {
    title: "Survey",
    copy: "As key players in our field, we know the importance of regular and reliable surveying. We conduct surveys before, during and after each project, led by a dedicated, highly experienced team.",
    image: "/images/dm/hydraulic-model-1.jpg"
  },
  {
    title: "Marine Construction",
    copy: "Our marine construction capabilities include breakwaters, revetments, groyne and related rock works, concrete armor protection, marina and pontoon construction, and sheet and tubular steel piling works. We also erect gravity quay walls, retaining and diaphragm walls, boat ramps, and slipways.",
    image: "/images/dm/caisson-installation.jpg"
  },
  {
    title: "Marine Logistics",
    copy: "We offer a wide range of marine logistics services, such as project logistics for transferring cargo, materials, and equipment from source to destination, along with offshore support services using a diverse fleet of vessels and barges.",
    image: "/images/dm/vessel-sarb.jpg"
  },
  {
    title: "Geotechnical Works",
    copy: "We specialize in comprehensive ground improvement and geotechnical solutions, guiding projects from initial concept to final execution. Services include vibro and surface compaction, vibro replacement with stone columns, geotechnical investigation, vibro coring, and geophysical survey.",
    image: "/images/dm/hydraulic-model-2.jpg"
  }
];

export const dmVessels = [
  {
    slug: "al-mirfa",
    name: "Al Mirfa",
    type: "Cutter Suction Dredger",
    image: "/images/dm/vessel-al-mirfa.jpg",
    specs: [
      ["Installed Power", "15,000 kW"],
      ["Dredging Depth", "6.00 / 27.00 m"],
      ["Crew", "45 pax"],
      ["Cutter Type", "Heavy Duty CSD"]
    ]
  },
  {
    slug: "al-sadr",
    name: "Al Sadr",
    type: "Cutter Suction Dredger",
    image: "/images/dm/vessel-al-sadr.jpg",
    specs: [
      ["Length Overall", "117.50 m"],
      ["Breadth", "28 m"],
      ["Dredging Depth", "36.0 m"],
      ["Class", "Heavy Duty CSD"]
    ]
  },
  {
    slug: "al-yassat",
    name: "Al Yassat",
    type: "Cutter Suction Dredger",
    image: "/images/dm/vessel-al-yassat.jpg",
    specs: [
      ["Vessel Type", "CSD"],
      ["Operation", "Capital dredging"],
      ["Application", "Reclamation"],
      ["Status", "Marine fleet"]
    ]
  },
  {
    slug: "sarb",
    name: "Sarb",
    type: "Backhoe Dredger",
    image: "/images/dm/vessel-sarb.jpg",
    specs: [
      ["Vessel Type", "Backhoe dredger"],
      ["Operation", "Excavation"],
      ["Application", "Marine works"],
      ["Status", "Marine fleet"]
    ]
  },
  {
    slug: "ghasha",
    name: "GHASHA",
    type: "Trailing Suction Hopper Dredger",
    image: "/images/dm/vessel-ghasha.jpg",
    specs: [
      ["Vessel Type", "TSHD"],
      ["Operation", "Dredging and disposal"],
      ["Application", "Channels and basins"],
      ["Status", "Marine fleet"]
    ]
  },
  {
    slug: "jannah",
    name: "Jannah",
    type: "Marine Vessel",
    image: "/images/dm/vessel-jannah.jpg",
    specs: [
      ["Vessel Type", "Marine support"],
      ["Operation", "Support services"],
      ["Application", "Marine construction"],
      ["Status", "Marine fleet"]
    ]
  }
];

export const hydraulicCapabilities = [
  "Hydraulic and coastal studies",
  "Breakwater and stability testing",
  "Wave action on marine structures and sources",
  "Intake and outfall modelling",
  "3D basin and physical modelling",
  "Structural and stability testing"
];

export const hydraulicTestingFacilities = [
  {
    title: "2D flume physical modelling test - rubble mound breakwater",
    image: "/images/dm/hydraulic-model-1.jpg"
  },
  {
    title: "3D basin physical modelling test - coastal protection",
    image: "/images/dm/hydraulic-model-2.jpg"
  },
  {
    title: "3D basin physical modelling - marina rubble mound breakwater",
    image: "/images/dm/caisson-installation.jpg"
  }
];

export const caissonSteps = [
  "Construction and precast preparation",
  "Launching and towing",
  "Floatation and positioning",
  "Sinking, filling, and final installation"
];

export const caissonCapabilities = [
  {
    title: "Breakwaters & coastal studies",
    copy: "Practical marine construction methods for coastal protection, quay walls, and breakwater structures."
  },
  {
    title: "Structural & stability testing",
    copy: "Engineering validation for stability, load transfer, installation, and long-term coastal performance."
  },
  {
    title: "Reinforced caisson compartments",
    copy: "Internal partitions create stable cells and space for infill material after installation."
  }
];
