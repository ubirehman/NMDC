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
      title: "Integrated Marine Construction Operation",
      href: "/products/marine-vessels",
      image: `${productsImageBase}/marine-vessels.jpg`,
      alt: "NMDC marine vessel",
    },
    {
      title: "Mussafah Yard and Its Solutions",
      href: "/products/mussafah-yard",
      image: `${productsImageBase}/mussafah-yard.jpg`,
      alt: "Mussafah Yard offshore module",
    },
    {
      title: "Coastal and Hydrodynamic Center",
      href: "/products/coastal-hydrodynamic-center",
      image: `${productsImageBase}/coastal-hydrodynamic-center.jpg`,
      alt: "Coastal and hydrodynamic testing basin",
    },
    {
      title: "Hail and Ghasha Development Project",
      href: "/products/hail-ghasha-gop",
      image: `${productsImageBase}/valve-new.jpg`,
      alt: "Hail and Ghasha development project",
    },
    {
      title: "3D Printed Artificial Reefs",
      href: "/products/3d-printed-artificial-reefs",
      image: `${productsImageBase}/3d-printed-artificial-reefs.jpg`,
      alt: "3D printed artificial reef structure underwater",
    },
    {
      title: "Multicat 21",
      href: "/products/multicat-21",
      image: `${productsImageBase}/new-multicad-21.jpg`,
      alt: "Multicat product placeholder panel",
    },
    {
      title: "Valve",
      href: "/products/valve",
      image: `${productsImageBase}/valve-new.jpg`,
      alt: "Valve product placeholder panel",
    },
    {
      title: "Whipstock System",
      href: "/products/whipstock-system",
      image: `${productsImageBase}/whipstock-system.jpg`,
      alt: "Whipstock system product render",
    },
    {
      title: "Pipe Coating Materials",
      href: "/products/pipe-coating-materials",
      image: `${productsImageBase}/pipe-coating-materials.jpg`,
      alt: "Pipe coating materials placeholder panel",
    },
    {
      title: "ESP Pump",
      href: "/products/esp-pump",
      image: `${productsImageBase}/esp-pump.jpg`,
      alt: "ESP pump product placeholder panel",
    },
    {
      title: "Safeen Green",
      href: "/products/safeen-green",
      image: `${productsImageBase}/safeen-green.jpg`,
      alt: "Safeen Green vessel",
    },
    {
      title: "Safeen NAV",
      href: "/products/safeen-nav",
      image: `${productsImageBase}/safeen-nav.jpg`,
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
          href: "/products/marine-vessels",
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
          href: "/products/coastal-hydrodynamic-center",
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
          href: "/products/caissons-application",
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
          href: "/products/mussafah-yard",
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
          href: "/products/hail-ghasha-gop",
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
          href: "/products/hail-ghasha-pau",
          accentClassName: "text-[#00bd66]",
          images: [
            {
              src: `${productsImageBase}/hail-ghasha-pau-model.webp`,
              alt: "Hail and Ghasha PAU oil stabilization model",
            },
          ],
        },
        {
          title: "ESP Pump",
          href: "/products/esp-pump",
          accentClassName: "text-[#00bd66]",
          images: [
            {
              src: `${productsImageBase}/esp-pump.webp`,
              alt: "ESP pump product display",
            },
          ],
          description:
            "The Emirates' first sovereign artificial-lift capability, designed, manufactured, tested and dispatched from Abu Dhabi.",
        },
      ],
    },
    {
      logo: "/images/landing/logo-infra.png",
      logoAlt: "NMDC Infra",
      logoClassName: "h-[44px] w-auto",
      cards: [
        {
          title: "3D Printed Artificial Reefs",
          href: "/products/3d-printed-artificial-reefs",
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
          href: "/products/multicat-21",
          accentClassName: "text-[#ddc19c]",
          images: [
            {
              src: `${productsImageBase}/multicat-21-detail.png`,
              alt: "Multicat 21 vessel model dimensions",
            },
          ],
          description:
            "Muticat-21 is a versatile, high-capacity marine vessel designed for heavy-duty operations, combining strength, speed, and efficiency. Built for demanding tasks, it handles cargo, lifting, and marine support with unmatched reliability.",
        },
        {
          title: "Safeen Green",
          href: "/products/safeen-green",
          accentClassName: "text-primary-sky-blue",
          images: [
            {
              src: `${productsImageBase}/safeen-green.webp`,
              alt: "Safeen Green unmanned vessel",
            },
          ],
          description:
            "Remotely operated unmanned vessel that collects high-quality geophysical and hydrographic data with reduced environmental impact.",
        },
        {
          title: "Safeen NAV",
          href: "/products/safeen-nav",
          accentClassName: "text-primary-sky-blue",
          images: [
            {
              src: `${productsImageBase}/safeen-nav.jpg`,
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
          href: "/products/whipstock-system",
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
      label: "Coastal & Hydrodynamic Center",
      href: `${dredgingMarineAppUrl}/hydraulic-physical-model`,
    },
    { label: "Caisson Method", href: `${dredgingMarineAppUrl}/caisson-method` },
  ],
};
