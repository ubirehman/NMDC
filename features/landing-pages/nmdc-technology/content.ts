import { getNmdcNavLinks, nmdcBrand } from "../../../app/components/landing/nmdcShared";

export const nmdcTechnologyBrand = nmdcBrand;
export const nmdcTechnologyNavLinks = getNmdcNavLinks("/nmdc-group/technology");

export const technologySections = [
  {
    title: "Digital Integration Across NMDC",
    points: [
      "Acts as a unified digital gateway to all NMDC applications and platforms.",
      "Integrates systems like the AI-Powered HSE Camera Monitoring, Connected Worker Platform, and Digital Twin environments for real-time visibility and decision-making.",
      "Connects the Group's key divisions - Energy, Infra, Dredging & Marine, and LTS - under one digital ecosystem.",
      "Supports the NMDC 4.0 transformation, enhancing productivity, collaboration, and sustainability.",
    ],
  },
  {
    title: "Driving Efficiency and Innovation",
    points: [
      "Enhances Safety: Through AI vision, predictive alerts, and smart monitoring to protect people and assets.",
      "Improves Efficiency: Centralizes access to data and applications, reducing time and improving workflow across operations.",
      "Drives Sustainability: Uses AI insights to optimize energy use and support NMDC Group's journey toward net-zero operations.",
      "Fosters Innovation: Positions NMDC Group at the forefront of digitalization in energy, marine, and infrastructure sectors.",
    ],
  },
];

export const aiPlatforms = [
  "NHSE AI Camera System (AMAN)",
  "NMDC 4.0 Platform",
  "Procurement & Supply Chain AI Platform",
  "PEngineering AI Platform",
  "Yard AI Platform",
  "Tender & Estimation AI Platform",
  "People & Culture AI Platform",
  "Offshore AI Platform",
  "HSE AI Platform",
  "Oracle Fusion Procurement & Supply Chain AI Platform",
];

export const technologyMedia = [
  {
    src: "/images/landing/technology-70-ai.jpg",
    alt: "By 2025, NMDC has developed 70 plus AI agents across its operations",
  },
  {
    src: "/images/landing/technology-booth.jpg",
    alt: "NMDC technology exhibition booth",
  },
];
