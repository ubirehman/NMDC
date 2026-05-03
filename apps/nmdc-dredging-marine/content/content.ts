const groupAppUrl =
  process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "http://localhost:3120";

const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

const energyAppUrl =
  process.env.NEXT_PUBLIC_ENERGY_APP_URL ?? "http://localhost:3124";

const infraAppUrl =
  process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122";

const ltsAppUrl =
  process.env.NEXT_PUBLIC_LTS_APP_URL ?? "http://localhost:3123";

const dredgingMarineBasePath =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_BASE_PATH ?? "";

const withDredgingMarineBasePath = (assetPath: string) =>
  dredgingMarineBasePath ? `${dredgingMarineBasePath}${assetPath}` : assetPath;

const withGroupAppPath = (path: string) =>
  `${groupAppUrl.replace(/\/$/, "")}${path}`;

const nmdcDredgingMarineVideoSources = [
  withDredgingMarineBasePath("/videos/nmdc_dm_1.mp4"),
  withDredgingMarineBasePath("/videos/nmdc_dm_2.mp4")
];

export const nmdcDredgingMarineContent = {
  brand: {
    name: "NMDC Dredging & Marine",
    logo: withDredgingMarineBasePath("/images/logo-dm.webp"),
    mobileLogo: withDredgingMarineBasePath("/images/nmdc-group-logo.svg"),
    logoAlt: "NMDC Dredging & Marine"
  },
  metadata: {
    titleDefault: "NMDC Dredging & Marine",
    titleTemplate: "%s | NMDC Dredging & Marine",
    description:
      "NMDC Dredging & Marine standalone website for marine construction, vessels, hydraulic physical modelling, and caisson methods.",
    themeColor: "#05263b"
  },
  header: {
    primaryLabel: "Primary",
    mobilePrimaryLabel: "Mobile primary",
    openMenuLabel: "Open D&M menu",
    closeMenuLabel: "Close D&M menu"
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Overview", href: "/overview" },
      { label: "Marine Vessels", href: "/marine-vessels" },
      { label: "Hydraulic Physical Model", href: "/hydraulic-physical-model" },
      { label: "Caisson Method", href: "/caisson-method" }
    ]
  },
  videoSources: [
    {
      src: nmdcDredgingMarineVideoSources[0],
      type: "video/mp4",
      playLabel: "Play NMDC Dredging and Marine video"
    },
    {
      src: nmdcDredgingMarineVideoSources[1],
      type: "video/mp4",
      playLabel: "Play NMDC Dredging and Marine ROV operations video"
    }
  ],
  home: {
    hero: {
      background: {
        src: withDredgingMarineBasePath("/images/dm/home-dredger-ghasha.jpg"),
        alt: "Dredging vessel operating at sea"
      },
      headline: {
        leading: "Achieving",
        neutral: "Excellence With",
        accent: ["Dredging & Marine", "Construction"]
      },
      subhead:
        "NMDC Dredging & Marine delivers complex marine infrastructure, dredging, reclamation, and coastal development projects with a modern fleet and proven engineering capability.",
      cta: {
        label: "Visit Us",
        href: "https://www.nmdc-dredgingmarine.com/en/"
      }
    },
    cards: [
      {
        title: "NMDC Group",
        href: groupAppUrl,
        image: withDredgingMarineBasePath("/images/dm/card-group.jpg"),
        logo: {
          src: withDredgingMarineBasePath("/images/dm/logo-group.svg"),
          alt: "NMDC Group",
        },
      },
      {
        title: "NMDC Energy",
        href: energyAppUrl,
        image: withDredgingMarineBasePath("/images/dm/card-energy.jpg"),
        logo: {
          src: withDredgingMarineBasePath("/images/dm/logo-energy.webp"),
          alt: "NMDC Energy",
        },
      },
      {
        title: "NMDC LTS",
        href: ltsAppUrl,
        image: withDredgingMarineBasePath("/images/dm/card-lts.jpg"),
        logo: {
          src: withDredgingMarineBasePath("/images/dm/logo-lts-card.svg"),
          alt: "NMDC LTS",
        },
      },
      {
        title: "NMDC Infra",
        href: infraAppUrl,
        image: withDredgingMarineBasePath("/images/dm/card-infra.jpg"),
        logo: {
          src: withDredgingMarineBasePath("/images/dm/logo-infra.png"),
          alt: "NMDC Infra",
        },
      },
      {
        title: "NMDC Product Highlight",
        href: withGroupAppPath("/products"),
        image: withDredgingMarineBasePath("/images/dm/card-product.jpg")
      },
    ]
  },
  overview: {
    activeHref: "/overview",
    eyebrow: "NMDC - Dredging & Marine",
    title: "At a glance",
    intro: [
      "NMDC Dredging & Marine combines global expertise with cutting-edge technology to deliver dredging, reclamation and construction services of exceptional quality. Working across the energy, tourism and urban development sectors, we shape the marine environments around us. The company's expertise spans a wide range of services, including dredging, reclamation, geotechnical works, and marine logistics. Its Marine Civil Works division executes complex projects such as jetties, marinas, breakwaters, and man-made islands, ensuring superior craftsmanship and structural integrity. Advanced ground improvement techniques like vibro compaction and stone column installation enhance soil stability, while hydrographic and geophysical surveys guide projects from concept to completion."
    ],
    image: {
      src: withDredgingMarineBasePath("/images/dm/vessel-al-mirfa.webp"),
      alt: "NMDC dredging vessel"
    },
    capabilities: {
      id: "capabilities",
      title: "Capabilities",
      items: [
        {
          title: "Dredging & Reclamation",
          copy:
            "NMDC Dredging & Marine has risen to become the Middle East's leading provider of dredging and reclamation services. Our highly professional dredging operation harnesses innovative equipment and technology to deliver turnkey solutions for ports, harbors, artificial islands, beaches, land reclamation, intake and outfall dredging.",
          image: withDredgingMarineBasePath("/images/dm/overview-vessel.jpg")
        },
        {
          title: "Survey",
          copy:
            "As key players in our field, we know the importance of regular and reliable surveying. We conduct surveys before, during and after each project, led by a dedicated, highly experienced team.",
          image: withDredgingMarineBasePath("/images/dm/hydraulic-model-1.jpg")
        },
        {
          title: "Marine Construction",
          copy:
            "Our marine construction capabilities include breakwaters, revetments, groyne and related rock works, concrete armor protection, marina and pontoon construction, and sheet and tubular steel piling works. We also erect gravity quay walls, retaining and diaphragm walls, boat ramps, and slipways.",
          image: withDredgingMarineBasePath("/images/dm/caisson-installation.jpg")
        },
        {
          title: "Marine Logistics",
          copy:
            "We offer a wide range of marine logistics services, such as project logistics for transferring cargo, materials, and equipment from source to destination, along with offshore support services using a diverse fleet of vessels and barges.",
          image: withDredgingMarineBasePath("/images/dm/vessel-sarb.jpg")
        },
        {
          title: "Geotechnical Works",
          copy:
            "We specialize in comprehensive ground improvement and geotechnical solutions, guiding projects from initial concept to final execution. We consistently surpass performance criteria, providing significant cost savings.",
          image: withDredgingMarineBasePath("/images/dm/hydraulic-model-2.jpg"),
          bullets: [
            "Vibro and Surface Compaction",
            "Vibro Replacement (Stone Columns)",
            "Geotechnical Investigation",
            "Vibro Coring & Geophysical Survey"
          ]
        }
      ]
    },
    operationalHighlights: {
      title: "Operational Highlights | Core Capabilities",
      items: [
        {
          title: "Dredging",
          copy:
            "Seabed excavation to support channel deepening and navigation purposes",
          unit: "In Mm3",
          image: {
            src: withDredgingMarineBasePath("/images/dm/overview-vessel.jpg"),
            alt: "NMDC dredging vessel supporting channel works"
          },
          values: [
            { year: "2023", value: 64.3 },
            { year: "2024", value: 49.5 },
            { year: "2025", value: 40.4 }
          ]
        },
        {
          title: "Reclamation",
          copy:
            "Creating new land through hydraulic filling to support coastal, port and Oil & Gas developments.",
          unit: "In Mm3",
          image: {
            src: withDredgingMarineBasePath("/images/dm/vessel-al-mirfa.webp"),
            alt: "Dredger pumping reclamation material at sea"
          },
          values: [
            { year: "2023", value: 119 },
            { year: "2024", value: 271 },
            { year: "2025", value: 98.3 }
          ]
        },
        {
          title: "Rock Installation",
          copy:
            "Placing graded rock of varying sizes for seabed stabilization, scour protection, and structural support",
          unit: "In Mm3",
          image: {
            src: withDredgingMarineBasePath("/images/dm/caisson-method-carousel.jpg"),
            alt: "Rock installation works for marine infrastructure"
          },
          values: [
            { year: "2023", value: 2.3 },
            { year: "2024", value: 1.5 },
            { year: "2025", value: 1.1 }
          ]
        },
        {
          title: "Quay Wall Blocks Installation",
          copy:
            "Installing precast blocks to form durable quay walls and berthing structures",
          unit: "In nos",
          image: {
            src: withDredgingMarineBasePath("/images/dm/caisson-installation.jpg"),
            alt: "Quay wall block installation from marine cranes"
          },
          values: [
            { year: "2023", value: 1661 },
            { year: "2024", value: 4254 },
            { year: "2025", value: 2973 }
          ]
        },
        {
          title: "Ground Improvement",
          copy:
            "Strengthening weak soils to enhance bearing capacity and control settlement",
          unit: "In Mm 2",
          image: {
            src: withDredgingMarineBasePath("/images/dm/hydraulic-model-2.jpg"),
            alt: "Ground improvement works at a marine construction site"
          },
          values: [
            { year: "2023", value: 0, label: "" },
            { year: "2024", value: 16.5 },
            { year: "2025", value: 17.7 }
          ]
        },
        {
          title: "NMDC D&M Project Status",
          copy:
            "The below charts show both the ongoing and completed projects during the period of 2023 to 2025",
          unit: "In Nos.",
          legend: [
            { label: "Completed", color: "#0b93cf" },
            { label: "Ongoing", color: "#062d44" }
          ],
          statusValues: [
            {
              year: "2023",
              totalLabel: "67.7",
              completed: 35,
              ongoing: 32
            },
            {
              year: "2024",
              totalLabel: "57",
              completed: 31,
              ongoing: 26
            },
            {
              year: "2025",
              totalLabel: "55",
              completed: 21,
              ongoing: 34
            }
          ]
        }
      ]
    }
  },
  marineVessels: {
    hero: {
      activeHref: "/marine-vessels",
      image: withDredgingMarineBasePath("/images/dm/vessel-jannah.jpg"),
      mobileImage: withDredgingMarineBasePath("/images/dm/vessel-al-yassat.jpg"),
      eyebrow: "NMDC Dredging and Marine",
      title: "Marine Vessels",
      copy: "Heavy Duty CSD | Date of Manufacturing 2001"
    },
    section: {
      eyebrow: "NMDC Dredging & Marine",
      title: "Featured marine vessels",
      cardKicker: "Marine Vessels",
      ctaLabel: "View specification"
    },
    detail: {
      backLabel: "Back",
      kicker: "Marine Vessels",
      title: "Specification",
      viewSpecificationLabel: "View specification",
      description:
        "A fleet asset configured for demanding dredging and marine construction work, supporting NMDC D&M projects across ports, coastal protection, reclamation, and offshore work areas."
    },
    items: [
      {
        slug: "al-yassat",
        name: "Al Yassat",
        type: "Heavy Duty CSDs",
        image: withDredgingMarineBasePath("/images/dm/vessel-al-yassat.jpg"),
        specs: [
          ["Dredging Depth", "36.0 m"],
          ["Breadth", "28 m"],
          ["Length Overall", "138 m"],
          ["Depth", "138 m"]
        ],
        detail: {
          image: withDredgingMarineBasePath("/images/dm/vessel-al-yassat-detail.jpg"),
          heroImage: withDredgingMarineBasePath("/images/dm/vessel-al-yassat-detail.jpg"),
          heroMeta: "Cutter Suction Dredger, Non-Propulsion | Date of Manufacturing -",
          specificationFile: withDredgingMarineBasePath("/pdfs/al-yassat.pdf"),
          classification: [
            ["Classification Society", "-"],
            ["Class Notation", "-"],
            ["Registration", "-"]
          ],
          technicalDetails: [
            ["Length Overall", "138 m"],
            ["Length of the Hull", "118 m"],
            ["Width", "28 m"],
            ["Depth", "8 m"],
            ["Draught", "5.5 m"],
            ["Cutter Power", "5,200 KW"],
            ["Installed Power", "26,100 KW"],
            ["Pump Power", "2 x 6,000 kW IBP + 5,200 kW UWP"],
            ["Max Dredging Depth", "35 m"],
            ["Diameter Suction", "1,000 mm"],
            ["Diameter Discharge", "1,000 mm"],
            ["Navigation Area", "International unrestricted navigation area"]
          ],
          panels: [
            {
              title: "Accommodation",
              items: [
                {
                  label: "On Board Crew Accomodation",
                  value: "45 pax"
                },
                {
                  label: "Spud Tilting",
                  value: "Automated spud tilting mechanism"
                }
              ]
            }
          ]
        }
      },
      {
        slug: "al-sadr",
        name: "Al Sadr",
        type: "Heavy Duty CSDs",
        image: withDredgingMarineBasePath("/images/dm/vessel-al-sadr.png"),
        specs: [
          ["Dredging Depth", "27.0 m"],
          ["Breadth", "20.30 m"],
          ["Length Overall", "117.50 m"],
          ["Depth", "6.00 m"]
        ],
        detail: {
          image: withDredgingMarineBasePath("/images/dm/vessel-al-sadr-detail.jpg"),
          heroImage: withDredgingMarineBasePath("/images/dm/vessel-al-sadr-detail.jpg"),
          heroMeta: "Heavy Duty CSD | Date of Manufacturing 1999",
          specificationFile: withDredgingMarineBasePath("/pdfs/al-sadr.pdf"),
          classification: [
            ["Classification Society", "-"],
            ["Class Notation", "-"],
            ["Registration", "-"]
          ],
          technicalDetails: [
            ["Length Overall", "117.50 m"],
            ["Length Over Pontoon", "97.30 m"],
            ["Width Over Pontoon", "20.30 m"],
            ["Depth", "6.00 m"],
            ["Dredging Depth", "6.00 / 27.00 m"],
            ["Diameter Suction Pipe", "900 mm"],
            ["Diameter Discharge Pipe", "850 mm"],
            ["Power Inboard Dredge Pump Engine", "2 x 4,400 KW"],
            ["Power Main Alternator Engine", "3 x 3,750 KW"],
            ["Power Auxillary / Harbour Engine's", "619 KW / 55 KW"]
          ],
          panels: [
            {
              title: "Machinery",
              items: [
                {
                  label: "Power Cutter Motor / Cutter Type Rh Rotation",
                  value:
                    "2,200 KW / Esco 6 Arm RH 52 D Spherilok HD Rock48 DS Spherilock LD Rock48 DS Helilok, sand / clay"
                },
                {
                  label: "Power Submersible Dredge Pump / Speed",
                  value: "2,200 KW @ Constant power 363-454 rpm"
                },
                {
                  label: "Submersible Dredge Pump Type & Speed",
                  value: "IHC single walled HR-MD 172-36-85 & 363/454 rpm"
                },
                {
                  label: "Dredge Pump Type & Speed",
                  value: "IHC double walled HR-HD 221-36-85 & 352 rpm"
                },
                {
                  label: "BV Registration Number",
                  value: "00427 R"
                }
              ]
            }
          ]
        }
      },
      {
        slug: "al-mirfa",
        name: "Al Mirfa",
        type: "Heavy Duty CSDs",
        image: withDredgingMarineBasePath("/images/dm/vessel-al-mirfa.jpg"),
        specs: [
          ["Dredging Depth", "20.0 m"],
          ["Breadth", "19.60 m"],
          ["Length Overall", "97.10 m"],
          ["Depth", "4.90 m"]
        ],
        detail: {
          heroImage: withDredgingMarineBasePath("/images/dm/vessel-al-yassat.jpg"),
          heroMeta: "Heavy Duty CSD | Date of Manufacturing 2001",
          specificationFile: withDredgingMarineBasePath("/pdfs/al-mirfa.pdf"),
          images: [
            { src: withDredgingMarineBasePath("/images/dm/vessel-al-mirfa-carousel-1.jpg"), alt: "Al Mirfa vessel view 1" },
            { src: withDredgingMarineBasePath("/images/dm/vessel-al-mirfa-carousel-2.jpg"), alt: "Al Mirfa vessel view 2" },
            { src: withDredgingMarineBasePath("/images/dm/vessel-al-mirfa-carousel-3.jpg"), alt: "Al Mirfa vessel view 3" },
            { src: withDredgingMarineBasePath("/images/dm/vessel-al-mirfa-carousel-4.jpg"), alt: "Al Mirfa vessel view 4" },
          ] as const,
          classification: [
            ["Classification Society", "-"],
            ["Class Notation", "-"],
            ["Registration", "-"]
          ],
          technicalDetails: [
            ["Length Overall", "97.10 m"],
            ["Length Over Pontoon", "78.40 m"],
            ["Width Over Pontoon", "19.60 m"],
            ["Average Draught", "3.55 m"],
            ["Dredging Depth", "4.50/20.00 m"]
          ],
          machinery: [
            {
              label: "Power Cutter Motor / Cutter Type Rh Rotation",
              value: "15,00 KW/Esco RH 48 DS Spherilock HD 11 tonnes, 6 arms"
            },
            {
              label: "Submersible Dredge Pump Type & Speed",
              value: "IHC Single walled HR-LD 165-41-94 & 338/352 rpm"
            },
            {
              label: "Dredge Pump Type & Speed",
              value: "IHC Double walled HR-HD 221-36-85 & 352/299 rpm"
            },
            {
              label: "BV Registration Number",
              value: "00893 X"
            }
          ]
        }
      },
      {
        slug: "jananah",
        name: "Jananah",
        type: "Beavers",
        formalName: "Jannah",
        image: withDredgingMarineBasePath("/images/dm/vessel-jannah.jpg"),
        specs: [
          ["Dredging Depth", "14.0 m"],
          ["Breadth", "8.55 m"],
          ["Length Overall", "47.50 m"],
          ["Depth", "2.75 m"]
        ],
        detail: {
          image: withDredgingMarineBasePath("/images/dm/vessel-jananah-detail.jpg"),
          heroImage: withDredgingMarineBasePath("/images/dm/vessel-jananah-detail.jpg"),
          heroMeta: "Cutter Suction Dredger, Non-Propulsion | Date of Manufacturing - 2004",
          specificationFile: withDredgingMarineBasePath("/pdfs/jananah.pdf"),
          classification: [
            ["Classification Society", "-"],
            ["Class Notation", "-"],
            ["Registration", "-"]
          ],
          technicalDetails: [
            ["Length Overall", "47.50 m"],
            ["Length Over Pontoon", "26.50 m"],
            ["Width Over Pontoon", "8.55 m"],
            ["Depth at Side", "2.75 m"],
            ["Maximum Draught", "1.60 m"],
            ["Dredging Depth", "600 mm"],
            ["Diameter Suction Pipe", "550 mm"],
            ["Power Inboard Dredge Pump Engine", "1,275 kW @ 1600 rpm"],
            ["Power Auxiliary Engine's", "465 kW @ 1800 rpm / 55 kW @ 1500 rpm"],
            ["Power Main Alternator Engine", "KM8 1 x 4700 Bhp / 1 x 3460 KW"]
          ],
          panels: [
            {
              title: "Machinery",
              items: [
                {
                  label: "Power Cutter Motor/Cutter Type Rh Rotation",
                  value: "276 KW / Esco V23"
                },
                {
                  label: "Dredge Pump Type & Speed",
                  value: "IHC Conventional H. Pressure Pump 150-27.5-55 / 426 rpm"
                },
                {
                  label: "BV Registration Number",
                  value: "04882 R"
                }
              ]
            }
          ]
        }
      },
      {
        slug: "sarb",
        name: "Sarb",
        type: "Backhoe Dredgers",
        image: withDredgingMarineBasePath("/images/dm/vessel-sarb.jpg"),
        specs: [
          ["Dredging Depth", "25 m"],
          ["Breadth", "18 m"],
          ["Length Overall", "60 m"],
          ["Depth", "4.5 m"]
        ],
        detail: {
          image: withDredgingMarineBasePath("/images/dm/vessel-sarb-detail.jpg"),
          heroImage: withDredgingMarineBasePath("/images/dm/vessel-sarb-detail.jpg"),
          heroKicker: "Backhoe Dredger",
          heroMeta: "Cutter Suction Dredger, Non-Propulsion | Date of Manufacturing - 2020",
          specificationFile: withDredgingMarineBasePath("/pdfs/sarb.pdf"),
          classification: [
            ["Classification Society", "-"],
            ["Class Notation", "-"],
            ["Registration", "-"]
          ],
          technicalDetails: [
            ["Overall Length", "60 m"],
            ["Breadth", "26.50 m"],
            ["Depth", "8.55 m"],
            ["Dredging Depth", "2.75 m"],
            ["Working Depth", "1.60 m"],
            ["Complement", "600 mm"],
            ["Diameter Suction Pipe", "550 mm"]
          ],
          panels: [
            {
              title: "Machinery",
              items: [
                {
                  label: "Assisting Thrusters",
                  value: "2 x Veth - hydraulic opersted - 2.8 knots"
                },
                {
                  label: "Excavator Type",
                  value: "LIEBHERR P995 mtu 16V4000C13 - Diesel engine - 1750 KW."
                },
                {
                  label: "Auxiliaries",
                  value: "2 x DBR Marine Diesel Generator sets - 250KVA."
                }
              ]
            },
            {
              title: "Fuel & Water Capacity",
              items: [
                {
                  label: "Fuel Tank Capacity",
                  value: "100 tons"
                },
                {
                  label: "Bucket Capacity",
                  value: "14.5 m3"
                }
              ]
            }
          ]
        }
      },
      {
        slug: "ghasha",
        name: "Ghasha",
        type: "Hopper Dredger",
        formalName: "GHASHA",
        image: withDredgingMarineBasePath("/images/dm/vessel-ghasha.jpg"),
        specs: [
          ["Dredging Depth", "45 m"],
          ["Breadth", "25 m"],
          ["Length Overall", "123 m"],
          ["Depth", "7.6 m"]
        ],
        detail: {
          image: withDredgingMarineBasePath("/images/dm/vessel-ghasha-detail.jpg"),
          heroImage: withDredgingMarineBasePath("/images/dm/vessel-ghasha-detail.jpg"),
          heroKicker: "Trailing Suction Hopper Dredger",
          heroMeta: "Cutter Suction Dredger, Non-Propulsion | Date of Manufacturing - 2020",
          specificationFile: withDredgingMarineBasePath("/pdfs/ghasha.pdf"),
          classification: [
            ["Classification Society", "-"],
            ["Class Notation", "-"],
            ["Registration", "-"]
          ],
          technicalDetails: [
            ["Length Overall", "47.50 m"],
            ["Width", "26.50 m"],
            ["Depth", "8.55 m"],
            ["Dredging Depth", "2.75 m"],
            ["Diameter Discharge Pipe", "1.60 m"],
            ["Draghead", "600 mm"],
            ["Dredge Pump", "550 mm"]
          ],
          leftPanels: [
            {
              title: "Fuel & Water Capacity",
              items: [
                {
                  label: "Heavy Fuel Oil",
                  value: "276 KW / Esco V23"
                },
                {
                  label: "Marine Diesel Oil",
                  value: "IHC Conventional H. Pressure Pump 150-27.5-55 / 426 rpm"
                },
                {
                  label: "Technical Fresh Water",
                  value: "04882 R"
                }
              ]
            },
            {
              title: "Total Installed Power",
              items: [
                {
                  label: "Total Installed Power",
                  value: "9674 kW"
                }
              ]
            }
          ],
          panels: [
            {
              title: "Cranes",
              items: [
                {
                  label: "Main Crane",
                  value: "1 x Liebherr (Main 30T at 25m - Aux 6.5T at 34.5m)"
                }
              ]
            },
            {
              title: "Machinery",
              items: [
                {
                  label: "Main Engines",
                  value: "2 x Wartsila 8L32 (4240 kW each)"
                },
                {
                  label: "Main Generators",
                  value: "2 x Siemens (4278 kVA each)"
                },
                {
                  label: "Auxiliary Generator",
                  value: "1 x 780 kW - CAT C32"
                },
                {
                  label: "Emergency Generator",
                  value: "1 x 342 Kw - CAT C18"
                },
                {
                  label: "Safety System",
                  value: "IHC System"
                },
                {
                  label: "Propulsion System",
                  value: "Wartsila"
                }
              ]
            }
          ]
        }
      }
    ]
  },
  hydraulicPhysicalModel: {
    hero: {
      activeHref: "/hydraulic-physical-model",
      image: withDredgingMarineBasePath("/images/dm/hydraulic-center-hero.jpg"),
      title: {
        neutral: "NMDC Dredging & marine",
        accent: "Costal & hydrodynamic center"
      }
    },
    overview: {
      image: {
        src: withDredgingMarineBasePath("/images/dm/hydraulic-center-overview.jpg"),
        alt: "Coastal and hydrodynamic center physical model"
      },
      paragraphs: [
        "The state-of-the-art NMDC D&M Coastal and Hydrodynamic Center, which spans approximately 2800 sqm, allows engineers to simulate and validate the impact of hydrodynamic environmental actions on strategic infrastructure, including ports, breakwaters, sea walls and offshore structures. Using scaled physical models to replicate real-world environments, it ensures that model behaviour reflects full-scale performance, including wave forces, pressures and structural response, enabling designs to be tested, refined and optimised before construction.",
        "The new facility features a 3D wave basin and 2D wave flume with advanced wave generation systems and controlled water environments, designed to test both fixed and floating structures across a wide range of conditions. It supports applications from early-stage research to validation of large-scale infrastructure, including wave transformation, overtopping, scour and harbor behavior under operational conditions."
      ],
      infoCards: [
        {
          title: "Laboratory Infrastructure:",
          tone: "dark",
          items: [
            "3D Wave Basin: 40.6 m x 35.6 m x 1.5 m",
            "2D Wave Flume: 44 m x 1.2 m x 1.5 m",
            "Underground water storage tank",
            "Advanced wave generation system by HR Wallingford"
          ]
        },
        {
          title: "Core Expertises:",
          tone: "light",
          items: [
            "Physical modeling of coastal, port, and marine structures.",
            "Testing under controlled hydraulic and wave conditions.",
            "In-house capability validated through third-party review (HR Wallingford)."
          ]
        }
      ]
    },
    media: [
      {
        type: "video",
        src: nmdcDredgingMarineVideoSources[0],
        image: withDredgingMarineBasePath("/images/dm/hydraulic-center-video.jpg"),
        alt: "NMDC Dredging and Marine engineers reviewing hydraulic model testing"
      }
    ],
    capabilities: {
      title: "CAPABILITIES.",
      items: [
        {
          title: "Hydraulic & Coastal Studies",
          points: [
            "Random and shallow-water wave transformation",
            "Wave climate and harbor tranquility studies",
            "Wave agitation inside harbors",
            "Wave reflection, transmission, and overtopping assessment"
          ]
        },
        {
          title: "Structural & Stability Testing",
          points: [
            "Stability of breakwaters, revetments, and coastal defenses",
            "Armor layer and toe stability evaluation",
            "Wave action on marine structures and mooring systems",
            "Moored ship behavior studies"
          ]
        },
        {
          title: "Sediment & Morphodynamics",
          points: [
            "Cross-shore and longshore sediment transport",
            "Littoral drift and sediment dynamics",
            "Scour and mobile bed studies",
            "Impact assessment of coastal works along sandy coastlines"
          ]
        }
      ]
    },
    testingFacilities: {
      eyebrow: "Testing facility",
      title: "Hydraulic Physical Model Testing Facility",
      items: [
        {
          title: "2D Flume Physical Modeling Test - Rubble mound Breakwater",
          image: withDredgingMarineBasePath("/images/dm/hydraulic-rubble-breakwater-01.jpg"),
          alt: "Rubble mound breakwater physical model test",
          images: [
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-rubble-breakwater-01.jpg"),
              alt: "2D flume rubble mound breakwater physical model test setup"
            },
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-rubble-breakwater-02.jpg"),
              alt: "Rubble mound breakwater model in the hydraulic flume"
            },
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-rubble-breakwater-03.jpg"),
              alt: "Wave flume testing for rubble mound breakwater stability"
            },
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-rubble-breakwater-04.jpg"),
              alt: "Detailed 2D flume view of rubble mound breakwater model"
            },
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-rubble-breakwater-05.jpg"),
              alt: "Hydraulic flume monitoring for rubble mound breakwater testing"
            }
          ]
        },
        {
          title: "2D Flume Physical Modeling Test - Coastal Protection",
          image: withDredgingMarineBasePath("/images/dm/hydraulic-test-coastal-protection.jpg"),
          alt: "Coastal protection physical model test"
        },
        {
          title: "3D Basin Physical Modeling - Marina Rubble mound Breakwater",
          image: withDredgingMarineBasePath("/images/dm/hydraulic-marina-breakwater-25.jpg"),
          alt: "Marina rubble mound breakwater basin model",
          images: [
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-marina-breakwater-25.jpg"),
              alt: "Marina rubble mound breakwater physical model in the 3D basin"
            },
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-marina-breakwater-24.jpg"),
              alt: "Wave testing setup for marina rubble mound breakwater model"
            },
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-marina-breakwater-23.jpg"),
              alt: "Detailed view of the marina breakwater physical model basin"
            },
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-marina-breakwater-22.jpg"),
              alt: "Rubble mound breakwater model during hydraulic basin testing"
            },
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-marina-breakwater-21.jpg"),
              alt: "Marina basin physical model with coastal structures"
            },
            {
              src: withDredgingMarineBasePath("/images/dm/hydraulic-marina-breakwater-20.jpg"),
              alt: "3D basin physical modeling view for marina breakwater testing"
            }
          ]
        }
      ]
    }
  },
  caissonMethod: {
    hero: {
      activeHref: "/caisson-method",
      backgroundImage: withDredgingMarineBasePath("/images/dm/hero_DM.jpg"),
      image: withDredgingMarineBasePath("/images/dm/hero_DM_sub.jpg"),
      alt: "Dredging vessel operating during caisson works"
    },
    overview: {
      eyebrow: "NMDC - Dredging & Marine",
      eyebrowAccent: "NMDC - Dredging &",
      eyebrowSuffix: "Marine",
      title: "Caisson Method",
      paragraph:
        "NMDC D&M has adopted precast caissons as a practical and efficient solution for marine infrastructure projects. These gravity-based structures provide a combination of environmental, technical, and economic benefits, offering an effective alternative to traditional methods. By minimizing underwater operations, reducing material usage, and improving project efficiency, precast caissons address key challenges in marine engineering while enhancing sustainability"
    },
    process: {
      title: "Construction and Installation Process",
      steps: [
        {
          icon: "fabrication",
          iconImage: {
            src: withDredgingMarineBasePath("/images/dm/caisson-fabrication-icon.png"),
            alt: ""
          },
          title: "Fabrication:",
          copy:
            "The caisson base slab and walls are constructed using a Gantry Hydraulic Slip-Form System on a floating dock or dry dock, ensuring consistent quality and precision. Reinforced concrete partitions form internal cells, providing stability and space for infill materials."
        },
        {
          icon: "launch",
          iconImage: {
            src: withDredgingMarineBasePath("/images/dm/caisson-launch-icon.png"),
            alt: ""
          },
          title: "Launch and Towing",
          copy:
            "Once construction reaches the required height, the caisson is floated and towed to the project site using tugboats."
        },
        {
          icon: "installation",
          iconImage: {
            src: withDredgingMarineBasePath("/images/dm/caisson-installation-icon.png"),
            alt: ""
          },
          title: "Installation",
          copy:
            "At the site, the caisson is ballasted with seawater until it settles on a prepared bedding layer. The internal cells are then filled with dredged sand for additional stability. This process minimizes underwater operations, ensures accurate placement, and improves overall project efficiency."
        }
      ],
      video: {
        src: nmdcDredgingMarineVideoSources[0],
        image: withDredgingMarineBasePath("/images/dm/caisson-method-video.jpg"),
        alt: "Caisson method video still"
      }
    },
    advantages: {
      title: "Technical and Economic Advantages of Caissons in Marine Engineering",
      items: [
        "High production rate due to the ability to prefabricate off-site.",
        "Caissons are cost-effective and environmentally friendly. Suitable for a wide range of water depths.",
        "Caissons allow unsuitable materials to be used as infill, reducing the need for disposal and benefiting the environment.",
        "Reduced concrete requirements and no need for structural rock. Minimizes underwater work.",
        "Caissons store dredged material, avoiding inland rock sources.",
        "Cells can be used to settle or remediate dredge spoils.",
        "Provides higher positioning tolerance compared to blockwork or precast wall units.",
        "Flexible in shape and allows for the integration of structural elements to enhance hydraulic performance.",
        "Less maintenance and repair requirements. Improved quality control, eliminating risks associated with deep piling or concrete block placement operation."
      ]
    },
    carousel: {
      images: [
        { src: withDredgingMarineBasePath("/images/dm/caisson-carousel-3.jpg"), alt: "Caisson construction at sea" },
        { src: withDredgingMarineBasePath("/images/dm/caisson-carousel-1.jpg"), alt: "Caisson installation process" },
        { src: withDredgingMarineBasePath("/images/dm/caisson-carousel-2.jpg"), alt: "Caisson method overview" },
      ] as const,
    }
  },
  footer: {
    businesses: [
      {
        label: "NMDC Dredging & Marine",
        href: dredgingMarineAppUrl,
        dotColor: "bg-dm-cyan"
      },
      { label: "NMDC Energy", href: energyAppUrl, dotColor: "bg-[#16bf70]" },
      {
        label: "NMDC Engineering",
        href: withGroupAppPath("/nmdc-overview"),
        dotColor: "bg-[#ff7a21]"
      },
      { label: "NMDC Infra", href: infraAppUrl, dotColor: "bg-[#ffc928]" },
      { label: "NMDC LTS", href: ltsAppUrl, dotColor: "bg-[#e2c48f]" }
    ],
    connect: {
      label: "Let's connect",
      href: "#contact"
    },
    socialLinks: [
      {
        label: "LinkedIn",
        marker: "in",
        href: "https://www.linkedin.com/company/nmdc-group/"
      },
      {
        label: "Instagram",
        marker: "ig",
        href: "https://www.instagram.com/nmdc_group?igsh=MWlqOXUxOGlza3h3ZA"
      }
    ],
    navigationLabel: "Footer navigation",
    navigationLinks: [
      { label: "Home", href: withGroupAppPath("/") },
      { label: "NMDC Overview", href: withGroupAppPath("/nmdc-overview") },
      { label: "People & Culture", href: withGroupAppPath("/people-and-culture") },
      { label: "Technology & Ai", href: withGroupAppPath("/technology") },
      { label: "Safeen Subsea", href: withGroupAppPath("/safeen-subsea") }
    ],
    emailTitle: "Email",
    emails: [
      { label: "General inquiries", value: "NMDC@nmdc-group.com" },
      { label: "Commercial inquiries", value: "info@nmdc-group.com" },
      { label: "Careers", value: "recruitment@nmdc-group.com" },
      { label: "Vendors registration", value: "vendors@nmdc-group.com" }
    ],
    copyright: "© Copyright, All rights reserved by NMDC Group."
  }
} as const;

export function getDmNavLinks(activeHref: string) {
  return nmdcDredgingMarineContent.nav.links.map((link) => ({
    ...link,
    active: link.href === activeHref
  }));
}
