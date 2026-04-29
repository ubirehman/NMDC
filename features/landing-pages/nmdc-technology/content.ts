import { getNmdcNavLinks, nmdcBrand } from "../../../app/components/landing/nmdcShared";

export const nmdcTechnologyBrand = nmdcBrand;
export const nmdcTechnologyNavLinks = getNmdcNavLinks("/nmdc-group/technology");

export const technologyHero = {
  title: "Technology & Ai",
  mobileTitle: "Technology & AI",
  subtitle:
    "Powering NMDC Group's future with intelligent systems and digital innovation.",
  image: "/images/landing/technology-hero.jpg",
  imageAlt: "NMDC AI Hub command center",
};

export const technologyIntro = {
  title: "NMDC AI Hub - Empowering a Smarter, Safer and More Connected Future",
  copy: "The NMDC AI HUB is the Group's central digital platform, bringing together all AI-powered tools and smart systems across NMDC Group into one intelligent interface. It reflects our commitment to innovation, efficiency, and safety across every project and business unit.",
};

export const technologySections = [
  {
    title: "Digital Integration Across NMDC",
    icon: "network",
    points: [
      "Acts as a unified digital gateway to all NMDC applications and platforms.",
      "Integrates systems like the AI-Powered HSE Camera Monitoring, Connected Worker Platform, and Digital Twin environments for real-time visibility and decision-making.",
      "Connects the Group's key divisions - Energy, Infra, Dredging & Marine, and LTS - under one digital ecosystem.",
      "Supports the NMDC 4.0 transformation, enhancing productivity, collaboration, and sustainability.",
    ],
    mobilePoints: [
      "Acts as a unified digital gateway to all NMDC applications and platforms.",
      "Integrates systems like AI-Powered HSE Camera Monitoring, Connected Worker Platform, and Digital Twin environments for real-time visibility.",
      "Connects the Group's key divisions - Energy, Infra, Dredging & Marine, and LTS - under one digital ecosystem.",
      "Supports the NMDC 4.0 transformation, enhancing productivity, collaboration, and sustainability.",
    ],
  },
  {
    title: "Driving Efficiency and Innovation",
    icon: "bolt",
    points: [
      "Enhances Safety: Through AI vision, predictive alerts, and smart monitoring to protect people and assets.",
      "Improves Efficiency: Centralizes access to data and applications, reducing time and improving workflow across operations.",
      "Drives Sustainability: Uses AI insights to optimize energy use and support NMDC Group's journey toward net-zero operations.",
      "Fosters Innovation: Positions NMDC Group at the forefront of digitalization in energy, marine, and infrastructure sectors.",
    ],
    mobilePoints: [
      "Enhances Safety: Through AI vision, predictive alerts, and smart monitoring to protect people and assets.",
      "Improves Efficiency: Centralises access to data and applications, reducing time and improving workflow across operations.",
      "Drives Sustainability: Uses AI insights to optimise energy use and support NMDC Group's journey toward net-zero operations.",
      "Fosters Innovation: Positions NMDC Group at the forefront of digitalization in energy, marine, and infrastructure sectors.",
    ],
  },
];

export const technologyApplications = {
  title: "Applications in Our AI Hub",
  knowMoreLabel: "Know more-",
  href: "https://ai.nmdc-group.com/",
};

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

export const technologyVideo = {
  poster: "/images/landing/technology-video.jpg",
  sources: [{ src: "/videos/nmdc-group-overview.mp4", type: "video/mp4" }],
};
