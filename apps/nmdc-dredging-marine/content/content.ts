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
  "NMDC Dredging & Marine is a specialist marine construction and dredging business delivering major infrastructure projects across ports, waterways, islands, beaches, and offshore development zones.",
  "The business combines a modern dredging fleet, experienced engineering teams, and practical construction methods to deliver dredging, reclamation, coastal protection, and geotechnical works."
];

export const overviewStats = [
  { value: "45+", label: "Years of marine construction experience" },
  { value: "6", label: "Featured dredging and marine vessels" },
  { value: "5", label: "Core marine capability streams" }
];

export const dmCapabilities = [
  {
    title: "Capital Dredging",
    copy: "Large-scale dredging and marine construction for ports, waterways, islands, and coastal infrastructure.",
    image: "/images/dm/overview-vessel.jpg"
  },
  {
    title: "Reclamation",
    copy: "Integrated land reclamation and shoreline formation supported by NMDC's modern dredging fleet.",
    image: "/images/dm/vessel-al-mirfa.jpg"
  },
  {
    title: "Maintenance Dredging",
    copy: "Reliable channel, basin, intake, and outfall dredging to keep marine assets operational.",
    image: "/images/dm/vessel-al-yassat.jpg"
  },
  {
    title: "Marine Construction",
    copy: "Breakwaters, revetments, caissons, and coastal protection works delivered through practical engineering methods.",
    image: "/images/dm/caisson-installation.jpg"
  },
  {
    title: "Geotechnical Investigation",
    copy: "Marine investigation and field data support for construction planning and design validation.",
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
