import type { NavLink } from "../../../app/components/landing/types";

const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

const energyAppUrl =
  process.env.NEXT_PUBLIC_ENERGY_APP_URL ?? "http://localhost:3124";

const infraAppUrl =
  process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122";

const ltsAppUrl =
  process.env.NEXT_PUBLIC_LTS_APP_URL ?? "http://localhost:3123";

export const nmdcOverviewBrand = {
  name: "NMDC Group",
  logo: "/images/landing/nmdc-group-logo.svg",
  logoAlt: "NMDC Group",
};

export const nmdcOverviewNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "NMDC Overview", href: "/nmdc-overview", active: true },
  { label: "People & Culture", href: "/people-and-culture" },
  { label: "Technology", href: "/technology" },
  { label: "Safeen Subsea", href: "/safeen-subsea" },
];

export const overviewCards = [
  {
    logo: "/images/landing/logo-dm.webp",
    alt: "NMDC Dredging & Marine",
    copy: "Marine dredging, reclamation, and construction",
  },
  {
    logo: "/images/landing/logo-energy.webp",
    alt: "NMDC Energy",
    copy: "EPC solutions - offshore and onshore energy services",
  },
  {
    logo: "/images/landing/logo-engineering.svg",
    alt: "NMDC Engineering",
    copy: "Coastal and marine engineering consultancy, including marine, civil, hydraulics, geotechnical, and environmental engineering",
  },
  {
    logo: "/images/landing/logo-infra-new.png",
    alt: "NMDC Infra",
    copy: "Construction technology and precast solutions",
  },
  {
    logo: "/images/landing/logo-lts-card.svg",
    alt: "NMDC LTS",
    copy: "Logistic and technical services operator, including marine dredging technical expertise & equipment",
  },
];

export const keyFigures = [
  { value: "74%", label: "ICV Score" },
  { value: "25k", label: "Number of Employees" },
  { value: "170+", label: "Number of Marine Fleet" },
  { value: "50+", label: "Number of Land Equipment" },
];

export const overviewVideo = {
  eyebrow: "NMDC GROUP IN MOTION",
  title: "Engineering progress across marine and EPC operations.",
  copy: "Watch how NMDC Group combines marine assets, engineering expertise, and integrated delivery teams to execute complex projects across strategic markets.",
  sources: [
    {
      src: "/videos/nmdc-overview.mp4",
      type: "video/mp4",
    },
  ],
};

export const atAGlanceDetail = {
  eyebrow: "NMDC GROUP",
  title: "At a Glance",
  lead:
    "A leading global EPC and dredging contractor, uniquely positioned to engineer and execute complex national megaprojects.",
  paragraphs: [
    "NMDC Group stands as a global leader in the engineering, procurement, and construction (EPC) solutions for onshore and offshore projects, as well as state-of-the-art marine dredging and construction capabilities, uniquely positioned to drive growth and innovation with extensive industry expertise and world-class assets. With 50 years of experience in EPC and marine dredging, NMDC Group delivers turnkey solutions for both onshore and offshore projects across the energy (oil and gas and renewables), environment, seaborne trade, urban development, and tourism industries. The Group’s capabilities extend across a diverse portfolio of leading companies, each excelling in their respective fields and, together, they uniquely position the Group as an industry leader with invaluable know-how across the full EPC value chain.",
    "From delivering large-scale marine dredging projects to high-profile EPC solutions, NMDC Group is the trusted partner for complex, high-scope projects, consistently setting new standards across the Middle East and North Africa (MENA) region, Southeast Asia, and beyond. NMDC Group, with a diverse global workforce, operates through five main verticals: NMDC Dredging & Marine (D&M), NMDC Energy, NMDC Engineering, NMDC Construction, NMDC Logistics & Technical Services (LTS). These units complement one another through sharing knowledge, expertise, and resources, enabling the Group to continue delivering high-quality, tailored solutions that are aligned with international standards. This collaborative approach allows us to stay at the forefront of quality and innovation, effectively addressing the diverse needs of the MENA region and beyond.",
    "By leveraging its expansive industry network and distinctive competencies, NMDC Group consistently raises the benchmark for excellence in project delivery. The Group’s proven track record of financial performance reflects its commitment to driving value for shareholders, while its extensive knowledge and strategic core assets position the Group for continued growth—expanding into new sectors and geographies.",
  ],
};

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "NMDC Overview", href: "/nmdc-overview" },
      { label: "People & Culture", href: "/people-and-culture" },
      { label: "Technology & Ai", href: "/technology" },
      { label: "Safeen Subsea", href: "/safeen-subsea" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Dredging & Marine", href: dredgingMarineAppUrl },
      { label: "Energy", href: energyAppUrl },
      { label: "Engineering", href: "/nmdc-overview" },
      { label: "Infra", href: infraAppUrl },
      { label: "LTS", href: ltsAppUrl },
    ],
  },
];

export const footerSocialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nmdc-group/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nmdc_group?igsh=MWlqOXUxOGlza3h3ZA",
  },
];
