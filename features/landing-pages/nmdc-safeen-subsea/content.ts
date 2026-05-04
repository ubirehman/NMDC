import { getNmdcNavLinks, nmdcBrand } from "../../../app/components/landing/nmdcShared";

export const nmdcSafeenSubseaBrand = nmdcBrand;
export const nmdcSafeenSubseaNavLinks = getNmdcNavLinks(
  "/safeen-subsea",
);

export const safeenHero = {
  image: "/images/landing/safeen-subsea-hero-new-computer.png",
  alt: "SAFEEN offshore vessel operating in rough sea",
  titlePrefix: "",
  titleAccent: "Safeen Subsea",
};

export const safeenOverview = {
  lead:
    "Safeen Survey & Subsea Services contributes to the UAE’s industrial ecosystem by delivering locally based offshore survey, subsea engineering and marine support services that enable the development and maintenance of critical offshore infrastructure. With over 29 years of service and an integrated fleet of more than 15 offshore support vessels, Safeen supports the full lifecycle of offshore projects, from planning and construction through to inspection, repair and maintenance.",
heading:
    "An NMDC Group and AD Ports JV",
  image: "/images/landing/safeen-subsea-hero-.png",
  alt: "SAFEEN offshore vessel at sea",
};

export const safeenEnablers = [
  "",
];

export const safeenKeyFacts = [
  {
    title: "Industrial Ecosystem",
    copy: "SAFEEN Survey & Subsea Services enhances the UAE's industrial landscape by providing local offshore survey, subsea engineering, and marine support for vital offshore infrastructure.",
  },
  {
    title: "29 Years of Service Legacy",
    copy: "With 29+ years and 15+ offshore vessels, SAFEEN supports all offshore project phases from planning to maintenance.",
  },
  {
    title: "Global Hub for Offshore",
    copy: "SAFEEN boosts UAE's local value by using local resources, cutting dependence on foreign contractors, and backing the UAE's goal to be a global offshore and marine hub.",
  },
];

export const safeenCapabilities = [
  "Offshore survey and geophysical data acquisition",
  "Subsea inspection using remotely operated vehicles",
  "Diving services for inspection, repair and maintenance",
  "Offshore construction and installation support",
  "Pipeline and cable inspection and tracking",
  "Hydrographic survey and seabed mapping",
  "Integrated offshore project execution",
];

export const safeenProducts = [
  {
    title: "Safeen Green",
    image: "/images/landing/safeen-green.jpg",
    alt: "SAFEEN Green unmanned survey vessel",
    specificationLabel: "View Specifications",
    specificationHref: "#",
    specificationFile: "/pdfs/safeen-green-specs.pdf",
    copy: "SAFEEN Green is a state-of-the-art remotely operated unmanned vessel (USV) launched by SAFEEN Subsea, part of AD Ports Group. It can operate up to 200 nautical miles offshore, collecting high-quality geophysical and hydrographic data with minimal environmental impact. Operating on 100% renewable electric power or biofuel, SAFEEN Green has only 10% of the emissions of a conventional vessel, significantly reducing its carbon footprint. The vessel is controlled from an onshore Remote Operation Centre (ROC) and features advanced navigation and safety technologies, enhancing safety and efficiency while eliminating risks to personnel.",
  },
  {
    title: "Safeen NAV",
    image: "/images/landing/safeen-nav.jpg",
    alt: "SAFEEN Nav positioning system hardware",
    specificationLabel: "View Specifications",
    specificationHref: "#",
    specificationFile: "/pdfs/safeen-nav-specs.pdf",
    copy: "Our proprietary SAFEEN Nav positioning system has redefined accuracy in marine operations. By replacing hired signals, we've enhanced precision and reduced costs-another step forward in innovation.",
  },
];

export const safeenVideos = [
  {
    title: "SAFEEN Green",
    src: "/videos/SAFFEN_CORPORATE_VIDEO_V1.mp4",
    poster: "/images/landing/video-posters/safeen-corporate.png",
    alt: "SAFEEN Green vessel video",
    playLabel: "Play SAFEEN Green video",
  },
  {
    title: "SAFEEN Green",
    src: "/videos/safeen-subsea-rov.mp4",
    poster: "/images/landing/video-posters/safeen-subsea-rov.png",
    alt: "SAFEEN Green vessel video",
    playLabel: "Play SAFEEN Green video",
  }
] as const;

export const safeenVideo = safeenVideos[0];
