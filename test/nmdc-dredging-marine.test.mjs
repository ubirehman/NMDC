import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const dmRoutes = [
  "apps/nmdc-dredging-marine/app/page.tsx",
  "apps/nmdc-dredging-marine/app/overview/page.tsx",
  "apps/nmdc-dredging-marine/app/marine-vessels/page.tsx",
  "apps/nmdc-dredging-marine/app/marine-vessels/[slug]/page.tsx",
  "apps/nmdc-dredging-marine/app/hydraulic-physical-model/page.tsx",
  "apps/nmdc-dredging-marine/app/caisson-method/page.tsx",
];

function extractHomeCardsBlock(source) {
  const match = source.match(
    /home:\s*{[\s\S]*?cards:\s*\[(?<cards>[\s\S]*?)\]\s*}\s*,\s*overview:/,
  );

  assert.ok(match?.groups?.cards, "D&M home cards block should be present");
  return match.groups.cards;
}

test("D&M pages are implemented as a separate Next.js project", () => {
  for (const route of dmRoutes) {
    assert.equal(existsSync(route), true, `${route} should exist`);
  }

  const appHome = readFileSync("app/page.tsx", "utf8");
  assert.equal(existsSync("apps/nmdc-dredging-marine/package.json"), true);
  assert.equal(existsSync("apps/nmdc-dredging-marine/next.config.ts"), true);
  assert.equal(existsSync("app/nmdc-dredging-marine/page.tsx"), false);
  assert.equal(existsSync("features/landing-pages/nmdc-dredging-marine/content.ts"), false);
  assert.doesNotMatch(appHome, /DredgingMarineHomePage|NmdcDredgingMarineHomePage/);
  assert.match(
    readFileSync("features/landing-pages/nmdc-group/content.ts", "utf8"),
    /NEXT_PUBLIC_DREDGING_MARINE_APP_URL/,
  );
});

test("D&M pages include the PDF navigation and major sections", () => {
  const page = readFileSync(
    "apps/nmdc-dredging-marine/app/pages.tsx",
    "utf8",
  );
  const dmVideoCarousel = readFileSync(
    "apps/nmdc-dredging-marine/components/DmVideoCarousel.tsx",
    "utf8",
  );
  const content = readFileSync(
    "apps/nmdc-dredging-marine/content/content.ts",
    "utf8",
  );

  assert.match(content, /Marine Vessels/);
  assert.equal(
    existsSync("apps/nmdc-dredging-marine/components/DmVideoCarousel.tsx"),
    true,
  );
  assert.match(content, /Hydraulic Physical Model/);
  assert.match(content, /Caisson Method/);
  assert.match(content, /Overview/);
  assert.match(content, /Capabilities/);
  assert.match(content, /Al Mirfa/);
  assert.match(content, /GHASHA/);
  assert.match(content, /nmdcDredgingMarineContent/);
  assert.match(content, /home-dredger-ghasha\.jpg/);
  assert.match(content, /href: "\/overview"/);
  assert.match(content, /id: "capabilities"/);
  assert.match(content, /Dredging & Marine/);
  assert.match(content, /Construction/);
  assert.match(content, /At a glance/);
  assert.match(content, /NMDC Dredging & Marine/);
  assert.match(page, /nmdcDredgingMarineContent as content/);
  assert.match(page, /content\.home/);
  assert.match(page, /\[@media_\(pointer:coarse\)_and_\(min-width:768px\)_and_\(max-width:1199px\)\]:max-w-\[calc\(100vw-80px\)\]/);
  assert.match(page, /content\.overview/);
  assert.match(page, /content\.marineVessels/);
  assert.match(page, /DmVideoCarousel/);
  assert.match(page, /data-marine-vessels-video-carousel/);
  assert.match(page, /videos=\{content\.videoSources\}/);
  assert.match(page, /content\.hydraulicPhysicalModel/);
  assert.match(page, /content\.caissonMethod/);
  assert.match(page, /bg-dm-navy px-5 pb-\[56px\] pt-\[132px\]/);
  assert.match(page, /bg-\[#f4f4f6\] px-5 pb-\[86px\] pt-\[70px\]/);
  assert.match(content, /vessel-al-mirfa\.jpg/);
  assert.match(content, /Featured marine vessels/);
  assert.match(content, /View specification/);
  assert.match(page, /text-\[22px\] font-bold leading-7 text-white/);
  assert.match(content, /Testing facility/);
  assert.match(page, /Play \$\{title\}|Play /);
  assert.match(dmVideoCarousel, /"use client"/);
  assert.match(dmVideoCarousel, /useState\(0\)/);
  assert.match(dmVideoCarousel, /showPreviousVideo/);
  assert.match(dmVideoCarousel, /showNextVideo/);
  assert.match(dmVideoCarousel, /onClick=\{showPreviousVideo\}/);
  assert.match(dmVideoCarousel, /onClick=\{showNextVideo\}/);
  assert.match(dmVideoCarousel, /translateX\(-\$\{activeIndex \* 100\}%\)/);
  assert.match(content, /Construction and installation process/i);
  assert.match(content, /testingFacilities/);
  assert.match(content, /caissonMethod/);
  assert.match(content, /global expertise with cutting-edge technology/);
  assert.match(content, /Dredging & Reclamation/);
  assert.match(content, /Marine Logistics/);
  assert.doesNotMatch(content, /overviewStats/);
  assert.match(
    readFileSync("apps/nmdc-dredging-marine/next.config.ts", "utf8"),
    /devIndicators:\s*false/,
  );
  assert.match(readFileSync("apps/nmdc-dredging-marine/app/marine-vessels/[slug]/page.tsx", "utf8"), /generateStaticParams/);
  assert.match(page, /DredgingMarineVesselDetailPage/);
});

test("D&M At a Glance section follows the supplied desktop PDF geometry", () => {
  const page = readFileSync(
    "apps/nmdc-dredging-marine/app/pages.tsx",
    "utf8",
  );
  const content = readFileSync(
    "apps/nmdc-dredging-marine/content/content.ts",
    "utf8",
  );

  assert.match(page, /DredgingMarineOverviewPage/);
  assert.match(page, /md:min-h-\[843px\]/);
  assert.match(page, /max-w-\[1240px\]/);
  assert.match(page, /md:grid-cols-\[minmax\(0,482px\)_minmax\(0,715px\)\]/);
  assert.match(page, /md:h-\[584px\]/);
  assert.match(page, /md:text-\[31px\]/);
  assert.match(page, /md:text-\[64px\]/);
  assert.match(page, /md:text-\[21px\]/);
  assert.match(content, /background:\s*\{[\s\S]*overview-hero\.png/);
  assert.match(content, /image:\s*\{[\s\S]*vessel-al-mirfa\.webp/);
  assert.match(page, /overview\.background\.src/);
  assert.equal(
    existsSync("apps/nmdc-dredging-marine/public/images/dm/overview-hero.png"),
    true,
    "D&M overview hero image should exist",
  );
  assert.match(page, /bg-\[#f4f4f6\] px-5 pb-\[86px\] pt-\[70px\]/);
  assert.match(page, /md:grid-cols-3 md:gap-x-\[20px\] md:gap-y-\[20px\]/);
  assert.match(page, /md:min-h-\[468px\]/);
  assert.match(page, /md:h-\[158px\] md:w-\[274px\]/);
  assert.match(page, /String\(index \+ 1\)\.padStart\(2, "0"\)/);
  assert.match(page, /"bullets" in capability/);
  assert.match(content, /bullets:\s*\[/);
  assert.match(content, /Vibro and Surface Compaction/);
  assert.match(content, /Vibro Replacement \(Stone Columns\)/);
});

test("D&M overview includes the operational highlights section from the desktop PDF", () => {
  const page = readFileSync(
    "apps/nmdc-dredging-marine/app/pages.tsx",
    "utf8",
  );
  const content = readFileSync(
    "apps/nmdc-dredging-marine/content/content.ts",
    "utf8",
  );

  assert.match(content, /operationalHighlights/);
  assert.match(content, /Operational Highlights \| Core Capabilities/);
  assert.match(content, /Dredging/);
  assert.match(content, /Reclamation/);
  assert.match(content, /Rock Installation/);
  assert.match(content, /Quay Wall Blocks Installation/);
  assert.match(content, /Ground Improvement/);
  assert.match(content, /NMDC D&M Project Status/);
  assert.match(content, /In Mm3/);
  assert.match(content, /In nos/);
  assert.match(content, /In Nos\./);
  assert.match(content, /Completed/);
  assert.match(content, /Ongoing/);
  const operationalImages = [
    "overview-operational-dredging.jpg",
    "overview-operational-reclamation.jpg",
    "overview-operational-rock-installation.jpg",
    "overview-operational-quay-wall-blocks.jpg",
    "overview-operational-ground-improvement.jpg",
  ];

  for (const image of operationalImages) {
    assert.match(content, new RegExp(`/images/dm/${image}`));
    assert.equal(
      existsSync(`apps/nmdc-dredging-marine/public/images/dm/${image}`),
      true,
      `${image} should exist for the operational highlights section`,
    );
  }
  assert.match(page, /DmOperationalHighlightsSection/);
  assert.match(page, /DmOperationalHighlightCard/);
  assert.match(page, /DmOperationalBarChart/);
  assert.match(page, /DmProjectStatusChart/);
  assert.match(page, /md:grid-cols-2/);
  assert.match(page, /overview\.operationalHighlights/);
});

test("D&M home cards match the NMDC Group brand card shell", () => {
  const dmCards = readFileSync(
    "apps/nmdc-dredging-marine/components/DmHomeCardRail.tsx",
    "utf8",
  );
  const dmGlobals = readFileSync(
    "apps/nmdc-dredging-marine/app/globals.css",
    "utf8",
  );

  assert.match(dmCards, /h-\[200px\] w-\[150px\]/);
  assert.match(dmCards, /\[@media_\(pointer:coarse\)_and_\(min-width:768px\)_and_\(max-width:1199px\)\]:overflow-x-auto/);
  assert.match(dmCards, /\[@media_\(pointer:coarse\)_and_\(min-width:768px\)_and_\(max-width:1199px\)\]:flex/);
  assert.match(dmCards, /function getCardId/);
  assert.match(dmCards, /logo\?:/);
  assert.match(dmCards, /card\.logo \?/);
  assert.match(dmCards, /logoFrameClassName/);
  assert.match(dmCards, /group: "h-\[32px\] w-\[102px\]"/);
  assert.match(dmCards, /energy: "h-\[30px\] w-\[118px\]"/);
  assert.match(dmCards, /infra: "h-\[30px\] w-\[96px\]"/);
  assert.match(dmCards, /lts: "h-\[34px\] w-\[124px\]"/);
  assert.match(dmCards, /cardId === "lts" \? "overflow-visible" : "overflow-hidden"/);
  assert.match(dmCards, /rounded-2xl border-\[1\.2px\] border-white bg-white/);
  assert.match(dmCards, /shadow-\[0_12px_32px_-6px_rgba\(5,20,31,0\.76\)\]/);
  assert.match(dmCards, /hover:border-primary-sky-blue/);
  assert.match(dmCards, /group-hover:bg-primary-sky-blue\/12/);
  assert.match(dmCards, /bg-\[#05263b\]\/78/);
  assert.match(dmCards, /absolute inset-x-0 bottom-0 flex h-12 items-center justify-center rounded-t-lg/);
  assert.match(dmCards, /bg-glass-deep-navy-72/);
  assert.match(dmCards, /group-hover:bg-primary-sky-blue/);
  assert.match(dmCards, /group-active:bg-primary-blue/);
  assert.match(dmCards, /backdrop-blur-\[26\.5px\]/);
  assert.match(dmCards, /whitespace-pre-line text-left text-xs font-bold leading-\[1\.35\] text-white/);
  assert.match(dmGlobals, /--color-primary-sky-blue:\s*#29b7e3;/);
  assert.match(dmGlobals, /--color-primary-blue:\s*#0072bc;/);
  assert.match(dmGlobals, /--color-glass-deep-navy-72:\s*#05263bb8;/);
  assert.match(dmGlobals, /box-sizing:\s*border-box;/);
  assert.match(dmGlobals, /overflow-x:\s*hidden;/);
});

test("D&M home cards use the PDF brand order and cross-site routes", () => {
  const content = readFileSync(
    "apps/nmdc-dredging-marine/content/content.ts",
    "utf8",
  );
  const cards = extractHomeCardsBlock(content);
  const expectedOrder = [
    "NMDC Group",
    "NMDC Energy",
    "NMDC LTS",
    "NMDC Infra",
    "NMDC Product Highlight",
  ];

  let previousIndex = -1;
  for (const title of expectedOrder) {
    const index = cards.indexOf(`title: "${title}"`);
    assert.ok(index > previousIndex, `${title} should appear in PDF card order`);
    previousIndex = index;
  }

  assert.match(cards, /title:\s*"NMDC Group"[\s\S]*?href:\s*groupAppUrl[\s\S]*?card-group\.jpg[\s\S]*?logo-group\.svg/);
  assert.match(cards, /title:\s*"NMDC Energy"[\s\S]*?href:\s*energyAppUrl[\s\S]*?card-energy\.jpg[\s\S]*?logo-energy\.webp/);
  assert.match(cards, /title:\s*"NMDC LTS"[\s\S]*?href:\s*ltsAppUrl[\s\S]*?card-lts\.jpg[\s\S]*?logo-lts-card\.svg/);
  assert.match(cards, /title:\s*"NMDC Infra"[\s\S]*?href:\s*infraAppUrl[\s\S]*?card-infra\.jpg[\s\S]*?logo-infra\.png/);
  assert.match(cards, /title:\s*"NMDC Product Highlight"[\s\S]*?href:\s*withGroupAppPath\("\/products"\)[\s\S]*?card-product\.jpg/);
  assert.doesNotMatch(cards, /href:\s*"\/(?:overview|marine-vessels|hydraulic-physical-model|caisson-method)"/);
  assert.doesNotMatch(cards, /Capabilities|Hydraulic\\nPhysical Model|Caisson Method/);
});

test("D&M extracted PDF assets are available", () => {
  for (const asset of [
    "apps/nmdc-dredging-marine/public/images/dm/home-hero.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/home-dredger-ghasha.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/card-group.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/card-energy.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/card-lts.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/card-infra.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/card-product.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/logo-group.svg",
    "apps/nmdc-dredging-marine/public/images/dm/logo-energy.webp",
    "apps/nmdc-dredging-marine/public/images/dm/logo-lts-card.svg",
    "apps/nmdc-dredging-marine/public/images/dm/logo-infra.png",
    "apps/nmdc-dredging-marine/public/images/dm/overview-vessel.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/vessel-al-mirfa.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-hero.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/caisson-hero.jpg",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }
});

test("D&M hydraulic physical model page follows the Coastal and Hydrodynamic PDF", () => {
  const content = readFileSync(
    "apps/nmdc-dredging-marine/content/content.ts",
    "utf8",
  );
  const page = readFileSync(
    "apps/nmdc-dredging-marine/app/pages.tsx",
    "utf8",
  );

  for (const asset of [
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-center-hero.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-center-overview.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-center-360.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-center-video.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-test-rubble-breakwater.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-test-coastal-protection.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-test-marina-breakwater.jpg",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(content, /spans approximately 2800 sqm/);
  assert.match(content, /3D Wave Basin: 40\.6 m/);
  assert.match(content, /Advanced wave generation system by HR Wallingford/);
  assert.match(content, /Core Expertises/);
  assert.match(content, /Hydraulic & Coastal Studies/);
  assert.match(content, /Structural & Stability Testing/);
  assert.match(content, /Sediment & Morphodynamics/);
  assert.match(content, /2D Flume Physical Modeling Test - Coastal Protection/);
  assert.match(content, /3D Basin Physical Modeling - Marina Rubble mound Breakwater/);
  assert.match(content, /type: "video"/);
  assert.match(page, /HydraulicInfoCard/);
  assert.match(page, /HydraulicCapabilityCard/);
  assert.match(page, /bg-\[#17384d\]/);
  assert.match(page, /text-white/);
  assert.match(page, /bg-white/);
  assert.doesNotMatch(page, /HydraulicCapabilityCard[\s\S]*border-2 border-dm-cyan bg-white/);
  assert.match(page, /HydraulicMediaFrame/);
  assert.match(page, /item\.type === "video"/);
  assert.match(page, /my\.matterport\.com\/show\/\?m=rMCdYNJoynP/);
  assert.match(page, /title="NMDC D&M Coastal and Hydrodynamic Center 3D tour"/);
  assert.match(page, /allow="fullscreen; xr-spatial-tracking"/);
  assert.doesNotMatch(page, />\s*sada\s*</);
  assert.match(page, /hydraulic\.media/);
  assert.match(page, /hydraulic\.overview\.infoCards/);
  assert.match(page, /hydraulic\.testingFacilities\.items/);
});

test("D&M hydraulic testing facilities with image sets use interactive galleries", () => {
  const content = readFileSync(
    "apps/nmdc-dredging-marine/content/content.ts",
    "utf8",
  );
  const page = readFileSync(
    "apps/nmdc-dredging-marine/app/pages.tsx",
    "utf8",
  );
  const carouselPath =
    "apps/nmdc-dredging-marine/components/HydraulicFacilityImageCarousel.tsx";

  assert.equal(existsSync(carouselPath), true, `${carouselPath} should exist`);

  const carousel = readFileSync(carouselPath, "utf8");
  const expectedMarinaAssets = [
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-marina-breakwater-25.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-marina-breakwater-24.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-marina-breakwater-23.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-marina-breakwater-22.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-marina-breakwater-21.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-marina-breakwater-20.jpg",
  ];
  const expectedRubbleAssets = [
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-rubble-breakwater-01.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-rubble-breakwater-02.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-rubble-breakwater-03.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-rubble-breakwater-04.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-rubble-breakwater-05.jpg",
  ];

  for (const asset of [...expectedMarinaAssets, ...expectedRubbleAssets]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(content, /2D Flume Physical Modeling Test - Rubble mound Breakwater[\s\S]*images:\s*\[/);
  assert.match(content, /hydraulic-rubble-breakwater-01\.jpg/);
  assert.match(content, /hydraulic-rubble-breakwater-05\.jpg/);
  assert.match(content, /3D Basin Physical Modeling - Marina Rubble mound Breakwater[\s\S]*images:\s*\[/);
  assert.match(content, /hydraulic-marina-breakwater-25\.jpg/);
  assert.match(content, /hydraulic-marina-breakwater-20\.jpg/);
  assert.match(page, /HydraulicFacilityImageCarousel/);
  assert.match(page, /facility\.images/);
  assert.match(carousel, /"use client";/);
  assert.match(carousel, /useState/);
  assert.match(carousel, /activeIndex/);
  assert.match(carousel, /showPreviousImage/);
  assert.match(carousel, /showNextImage/);
  assert.match(carousel, /onClick=\{showPreviousImage\}/);
  assert.match(carousel, /onClick=\{showNextImage\}/);
  assert.match(carousel, /\(index - 1 \+ images\.length\) % images\.length/);
  assert.match(carousel, /\(index \+ 1\) % images\.length/);
});

test("D&M caisson method page follows the Caisson Method PDF", () => {
  const content = readFileSync(
    "apps/nmdc-dredging-marine/content/content.ts",
    "utf8",
  );
  const page = readFileSync(
    "apps/nmdc-dredging-marine/app/pages.tsx",
    "utf8",
  );

  for (const asset of [
    "apps/nmdc-dredging-marine/public/images/dm/hero_DM.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/caisson-method-hero.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/caisson-method-video.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/caisson-method-carousel.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/caisson-fabrication-icon.png",
    "apps/nmdc-dredging-marine/public/images/dm/caisson-launch-icon.png",
    "apps/nmdc-dredging-marine/public/images/dm/caisson-installation-icon.png",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(content, /gravity-based structures provide a combination/);
  assert.match(content, /backgroundImage: withDredgingMarineBasePath\("\/images\/dm\/hero_DM\.jpg"\)/);
  assert.match(content, /Gantry Hydraulic Slip-Form System/);
  assert.match(content, /Launch and Towing/);
  assert.match(content, /ballasted with seawater/);
  assert.match(content, /caisson-fabrication-icon\.png/);
  assert.match(content, /caisson-launch-icon\.png/);
  assert.match(content, /caisson-installation-icon\.png/);
  assert.match(content, /Technical and Economic Advantages of Caissons in Marine Engineering/);
  assert.match(content, /High production rate due to the ability to prefabricate off-site/);
  assert.match(content, /Less maintenance and repair requirements/);
  assert.match(page, /CaissonProcessCard/);
  assert.match(page, /step\.iconImage\.src/);
  assert.match(page, /CaissonAdvantagesPanel/);
  assert.match(page, /caisson\.overview\.paragraph/);
  assert.match(page, /caisson\.process\.steps/);
  assert.match(page, /caisson\.advantages\.items/);
  assert.match(page, /caisson\.carousel\.image/);
  assert.match(page, /src=\{caisson\.hero\.backgroundImage\}/);
  assert.match(page, /absolute inset-0 bg-\[linear-gradient\(180deg,rgba\(3,15,26,0\.46\)_0%,rgba\(3,15,26,0\.54\)_48%,rgba\(3,15,26,0\.72\)_100%\)\]/);
});

test("D&M caisson method mobile layout follows the mobile PDF", () => {
  const content = readFileSync(
    "apps/nmdc-dredging-marine/content/content.ts",
    "utf8",
  );
  const page = readFileSync(
    "apps/nmdc-dredging-marine/app/pages.tsx",
    "utf8",
  );
  const icons = readFileSync(
    "apps/nmdc-dredging-marine/components/icons.tsx",
    "utf8",
  );
  const caissonCarousel = readFileSync(
    "apps/nmdc-dredging-marine/components/CaissonImageCarousel.tsx",
    "utf8",
  );

  assert.match(content, /eyebrowAccent: "NMDC - Dredging &"/);
  assert.match(content, /eyebrowSuffix: "Marine"/);
  assert.match(content, /icon: "fabrication"/);
  assert.match(content, /icon: "launch"/);
  assert.match(content, /icon: "installation"/);
  assert.match(page, /CaissonStepIcon/);
  assert.match(page, /text-justify/);
  assert.match(page, /text-\[24px\] font-bold leading-\[36px\]/);
  assert.match(page, /h-\[260px\].*md:h-\[360px\]/s);
  assert.match(page, /CaissonImageCarousel/);
  assert.match(caissonCarousel, /h-\[312px\].*md:h-\[560px\]/s);
  assert.match(caissonCarousel, /onClick=\{showPrev\}/);
  assert.match(caissonCarousel, /onClick=\{showNext\}/);
  assert.match(icons, /CaissonFabricationIcon/);
  assert.match(icons, /CaissonLaunchIcon/);
  assert.match(icons, /CaissonInstallationIcon/);
});

test("D&M marine vessel specification pages use the extracted PDF content", () => {
  const content = readFileSync(
    "apps/nmdc-dredging-marine/content/content.ts",
    "utf8",
  );
  const page = readFileSync(
    "apps/nmdc-dredging-marine/app/pages.tsx",
    "utf8",
  );

  for (const pdf of [
    "al-sadr.pdf",
    "al-yassat.pdf",
    "al-mirfa.pdf",
    "jananah.pdf",
    "sarb.pdf",
    "ghasha.pdf",
  ]) {
    assert.equal(
      existsSync(`apps/nmdc-dredging-marine/public/pdfs/${pdf}`),
      true,
      `${pdf} should be available for PDF viewing`,
    );
    assert.equal(existsSync(`public/pdfs/${pdf}`), true, `${pdf} should be available to the central PDF viewer`);
  }

  assert.match(content, /specificationFile: withDredgingMarineBasePath\("\/pdfs\/al-sadr\.pdf"\)/);
  assert.match(content, /Power Submersible Dredge Pump/);
  assert.match(content, /BV Registration Number/);
  assert.match(content, /specificationFile: withDredgingMarineBasePath\("\/pdfs\/al-yassat\.pdf"\)/);
  assert.match(content, /Navigation Area/);
  assert.match(content, /On Board Crew Accomodation/);
  assert.match(content, /specificationFile: withDredgingMarineBasePath\("\/pdfs\/jananah\.pdf"\)/);
  assert.match(content, /04882 R/);
  assert.match(content, /specificationFile: withDredgingMarineBasePath\("\/pdfs\/sarb\.pdf"\)/);
  assert.match(content, /Backhoe Dredger/);
  assert.match(content, /Fuel & Water Capacity/);
  assert.match(content, /Bucket Capacity/);
  assert.match(content, /specificationFile: withDredgingMarineBasePath\("\/pdfs\/ghasha\.pdf"\)/);
  assert.match(content, /Trailing Suction Hopper Dredger/);
  assert.match(content, /Total Installed Power/);
  assert.match(content, /9674 kW/);
  assert.match(content, /leftPanels/);
  assert.match(content, /panels/);
  assert.match(page, /function getPdfViewerHref/);
  assert.match(page, /NEXT_PUBLIC_NMDC_GROUP_APP_URL/);
  assert.match(page, /NEXT_PUBLIC_DREDGING_MARINE_APP_URL/);
  assert.match(page, /baseUrl\.startsWith\("http"\)/);
  assert.match(page, /getDredgingMarinePdfSource\(vessel\.detail\.specificationFile\)/);
  assert.match(page, /getDredgingMarineReturnPath\("\/marine-vessels"\)/);
  assert.match(page, /getDredgingMarineReturnPath\(`\/marine-vessels\/\$\{vessel\.slug\}`\)/);
  assert.match(page, /detailLeftPanels/);
  assert.match(page, /detailPanels/);
  assert.doesNotMatch(page, /\sdownload(?:=|\s|>)/);
});

test("Docker runs the NMDC Group and D&M apps together", () => {
  const dockerfile = readFileSync("Dockerfile", "utf8");
  const compose = readFileSync("compose.yml", "utf8");
  const pkg = readFileSync("package.json", "utf8");

  assert.match(pkg, /"dev:all"/);
  assert.match(pkg, /"build:all"/);
  assert.match(pkg, /copy-standalone-assets\.mjs root/);
  assert.match(pkg, /copy-standalone-assets\.mjs dm/);
  assert.match(pkg, /"start:all"/);
  assert.equal(existsSync("scripts/copy-standalone-assets.mjs"), true);
  assert.match(dockerfile, /EXPOSE 3120 3121/);
  assert.match(dockerfile, /npm", "run", "start:all"/);
  assert.match(compose, /3120:3120/);
  assert.match(compose, /3121:3121/);
});
