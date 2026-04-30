const productsImageBase = "/images/landing/products";

const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

export const nmdcGroupProductsContent = {
  hero: {
    background: {
      src: `${productsImageBase}/hero-cutter-suction-dredger.webp`,
      alt: "Cutter suction dredger operating at sea",
    },
    titleLeading: "NMDC Group",
    titleAccent: "Products to be Showcased",
    subtitle:
      "Cutter Suction Dredger, Non-Propulsion  |  Date of Manufacturing - 2004",
  },
  desktopProducts: [
    {
      title: "Marine vessels",
      image: `${productsImageBase}/marine-vessels.webp`,
      alt: "NMDC marine vessel",
    },
    {
      title: "Mussafah Yard",
      image: `${productsImageBase}/mussafah-yard.webp`,
      alt: "Mussafah Yard offshore module",
    },
    {
      title: "Coastal and Hydrodynamic Center",
      image: `${productsImageBase}/coastal-hydrodynamic-center.webp`,
      alt: "Coastal and hydrodynamic testing basin",
    },
    {
      title: "Hail and Ghasha - GOP",
      image: `${productsImageBase}/hail-ghasha-gop.webp`,
      alt: "Hail and Ghasha GOP marine vessel",
    },
    {
      title: "Hail and Ghasha - PAU",
      image: `${productsImageBase}/hail-ghasha-pau.webp`,
      alt: "Hail and Ghasha PAU placeholder panel",
    },
    {
      title: "3D Printed Artificial Reefs",
      image: `${productsImageBase}/3d-printed-artificial-reefs.webp`,
      alt: "3D printed artificial reef structure underwater",
    },
    {
      title: "Multicad - 21",
      image: `${productsImageBase}/multicad-21.webp`,
      alt: "Multicad product placeholder panel",
    },
    {
      title: "Valve",
      image: `${productsImageBase}/valve.webp`,
      alt: "Valve product placeholder panel",
    },
    {
      title: "Pipe Coating Materials",
      image: `${productsImageBase}/pipe-coating-materials.webp`,
      alt: "Pipe coating materials placeholder panel",
    },
    {
      title: "Whipstock System",
      image: `${productsImageBase}/whipstock-system.webp`,
      alt: "Whipstock system product render",
    },
    {
      title: "ESP Pump",
      image: `${productsImageBase}/esp-pump.webp`,
      alt: "ESP pump product placeholder panel",
    },
    {
      title: "Safeen Green",
      image: `${productsImageBase}/safeen-green.webp`,
      alt: "Safeen Green vessel",
    },
    {
      title: "Safeen NAV",
      image: `${productsImageBase}/safeen-nav.webp`,
      alt: "Safeen NAV positioning product",
    },
  ],
  mobileSections: [
    {
      logo: "/images/landing/nmdc-group-logo.svg",
      logoAlt: "NMDC Group",
      logoClassName: "h-[42px] w-auto",
      cards: [
        {
          title: "Marine Vessels and Its Capabilities",
          accentClassName: "text-primary-sky-blue",
          images: [
            {
              src: `${productsImageBase}/marine-capabilities.webp`,
              alt: "Marine vessels and capabilities presentation model",
            },
          ],
          description:
            "Each vessel in our extensive line-up will highlight key dredging fleet and capabilities, including artificial island development, port construction, and other key marine works",
        },
        {
          title: "Coastal & Hydrodynamic Center",
          accentClassName: "text-primary-sky-blue",
          images: [
            {
              src: `${productsImageBase}/coastal-center-mobile.webp`,
              alt: "Coastal and hydrodynamic testing basin",
            },
          ],
          description:
            "The facility enables the simulation and physical testing of complex marine, coastal and offshore infrastructure under controlled conditions.",
        },
        {
          title: "Caissons Application",
          accentClassName: "text-primary-sky-blue",
          images: [
            {
              src: `${productsImageBase}/caissons-application.webp`,
              alt: "Caisson application at a marine construction site",
            },
          ],
          description:
            "These gravity-based structures provide a combination of environmental, technical, and economic benefits, offering an effective alternative to traditional methods.",
        },
      ],
    },
    {
      logo: "/images/landing/logo-energy.webp",
      logoAlt: "NMDC Energy",
      logoClassName: "h-[52px] w-auto",
      cards: [
        {
          title: "Mussafah Yard and Its Products",
          accentClassName: "text-[#00bd66]",
          images: [
            {
              src: `${productsImageBase}/mussafah-yard-plan.webp`,
              alt: "Mussafah Yard plan model",
            },
            {
              src: `${productsImageBase}/mussafah-yard-products.webp`,
              alt: "Mussafah Yard product models",
            },
          ],
          description:
            "The model will show the MFY Yard, end products of the yard such as: topsides, jackets, pressure vessel, bridge, accomodation platform, riser platform, well head tower, production platform, and gas treatment platform.",
        },
        {
          title:
            "Hail & Ghasha Development Project Offshore Facilities Ghasha Offshore Processing Plant ( GOP )",
          accentClassName: "text-[#00bd66]",
          images: [
            {
              src: `${productsImageBase}/hail-ghasha-gop-model.webp`,
              alt: "Hail and Ghasha GOP model",
            },
          ],
        },
        {
          title:
            "Hail & Ghasha Development Project Offshore Facilities Process Assembled Unit GH5121-PAU-01 Oil Stabilization",
          accentClassName: "text-[#00bd66]",
          images: [
            {
              src: `${productsImageBase}/hail-ghasha-pau-model.webp`,
              alt: "Hail and Ghasha PAU oil stabilization model",
            },
          ],
        },
      ],
    },
    {
      logo: "/images/landing/logo-infra.webp",
      logoAlt: "NMDC Infra",
      logoClassName: "h-[44px] w-auto",
      cards: [
        {
          title: "3D Printed Artificial Reefs",
          accentClassName: "text-[#ffcf00]",
          images: [
            {
              src: `${productsImageBase}/reefs-mobile.webp`,
              alt: "3D printed artificial reef product",
            },
          ],
          description:
            "Artificial reefs are human-made structures placed underwater to enhance marine habitats and ecosystems.",
        },
        {
          title: "Multicat 21 (M21) Vessel",
          accentClassName: "text-[#ddc19c]",
          images: [
            {
              src: `${productsImageBase}/multicat-21-mobile.webp`,
              alt: "Multicat 21 vessel model dimensions",
            },
          ],
          description:
            "Muticat-21 is a versatile, high-capacity marine vessel designed for heavy-duty operations, combining strength, speed, and efficiency. Built for demanding tasks, it handles cargo, lifting, and marine support with unmatched reliability.",
        },
        {
          title: "Safeen NAV",
          accentClassName: "text-primary-sky-blue",
          images: [
            {
              src: `${productsImageBase}/safeen-nav-mobile.webp`,
              alt: "Safeen NAV positioning unit",
            },
          ],
          description:
            "Proprietary marine positioning system that enhances accuracy and reduces costs in offshore and subsea operations.",
        },
      ],
    },
    {
      logo: `${productsImageBase}/emdad-logo.webp`,
      logoAlt: "EMDAD part of NMDC LTS",
      logoClassName: "h-[74px] w-auto",
      cards: [
        {
          title: "Whipstock System",
          accentClassName: "text-primary-sky-blue",
          images: [
            {
              src: `${productsImageBase}/whipstock-mobile.webp`,
              alt: "Whipstock system product display",
            },
          ],
          description:
            "Whipstock product - Whipstocks are specialized deflection tools used in drilling operations to initiate sidetracks from existing wellbores",
        },
      ],
    },
  ],
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "Overview", href: "/nmdc-overview" },
    { label: "Marine Vessels", href: `${dredgingMarineAppUrl}/marine-vessels` },
    {
      label: "Hydraulic Physical Model",
      href: `${dredgingMarineAppUrl}/hydraulic-physical-model`,
    },
    { label: "Caisson Method", href: `${dredgingMarineAppUrl}/caisson-method` },
  ],
};
