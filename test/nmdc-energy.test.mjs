import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import test from "node:test";

const energyFiles = [
  "apps/nmdc-energy/app/page.tsx",
  "apps/nmdc-energy/app/overview/page.tsx",
  "apps/nmdc-energy/app/overview/at-a-glance/page.tsx",
  "apps/nmdc-energy/app/yard-highlights/page.tsx",
  "apps/nmdc-energy/app/products/page.tsx",
  "apps/nmdc-energy/app/pages.tsx",
  "apps/nmdc-energy/app/layout.tsx",
  "apps/nmdc-energy/app/globals.css",
  "apps/nmdc-energy/components/Header.tsx",
  "apps/nmdc-energy/components/EnergyHomeCardRail.tsx",
  "apps/nmdc-energy/components/EnergyOverviewVideoPlayer.tsx",
  "apps/nmdc-energy/components/icons.tsx",
  "apps/nmdc-energy/content/content.ts",
  "apps/nmdc-energy/next.config.ts",
  "apps/nmdc-energy/package.json",
  "apps/nmdc-energy/postcss.config.js",
  "apps/nmdc-energy/tsconfig.json",
];

test("NMDC Energy is implemented as a separate Next.js project", () => {
  for (const file of energyFiles) {
    assert.equal(existsSync(file), true, `${file} should exist`);
  }

  const pkg = readFileSync("apps/nmdc-energy/package.json", "utf8");
  assert.match(pkg, /"name": "nmdc-energy"/);
  assert.match(pkg, /standalone\/apps\/nmdc-energy\/server\.js/);

  const nextConfig = readFileSync("apps/nmdc-energy/next.config.ts", "utf8");
  assert.match(nextConfig, /output:\s*"standalone"/);
  assert.match(nextConfig, /devIndicators:\s*false/);
});

test("NMDC Energy home follows the supplied desktop and mobile PDF design", () => {
  const content = readFileSync("apps/nmdc-energy/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-energy/app/pages.tsx", "utf8");
  const css = readFileSync("apps/nmdc-energy/app/globals.css", "utf8");
  const cards = readFileSync(
    "apps/nmdc-energy/components/EnergyHomeCardRail.tsx",
    "utf8",
  );
  const header = readFileSync("apps/nmdc-energy/components/Header.tsx", "utf8");

  for (const asset of [
    "apps/nmdc-energy/public/images/energy/home-hero.jpg",
    "apps/nmdc-energy/public/images/energy/logo-energy.png",
    "apps/nmdc-energy/public/images/energy/logo-group.svg",
    "apps/nmdc-energy/public/images/energy/logo-dm.png",
    "apps/nmdc-energy/public/images/energy/logo-infra.png",
    "apps/nmdc-energy/public/images/energy/logo-lts-card.svg",
    "apps/nmdc-energy/public/images/energy/card-group.jpg",
    "apps/nmdc-energy/public/images/energy/card-dredging.jpg",
    "apps/nmdc-energy/public/images/energy/card-infra.jpg",
    "apps/nmdc-energy/public/images/energy/card-lts.jpg",
    "apps/nmdc-energy/public/images/energy/card-product.jpg",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(content, /nmdcEnergyContent/);
  assert.match(content, /NMDC Energy Overview/);
  assert.match(content, /Yard Highlights/);
  assert.match(content, /Our Products/);
  assert.match(content, /Innovative EPC/);
  assert.match(content, /Solutions/);
  assert.match(content, /To Complex Energy/);
  assert.match(content, /Challenges/);
  assert.match(content, /energy sector.s evolving needs/);
  assert.match(content, /Visit Us/);
  assert.match(
    content,
    /title:\s*"NMDC Product Highlight",\s*href:\s*`\$\{groupAppUrl\}\/products`/s,
  );
  assert.match(css, /--energy-green:\s*#00b765;/);
  assert.match(css, /--color-energy-green:\s*#00b765;/);
  assert.match(page, /NmdcEnergyHomePage/);
  assert.match(page, /EnergyHomeCardRail/);
  assert.match(page, /min-h-\[max\(786px,100svh\)\]/);
  assert.doesNotMatch(page, /<section className="relative isolate h-\[786px\]/);
  assert.match(page, /md:text-\[48px\]/);
  assert.match(page, /text-energy-green/);
  assert.match(page, /bg-energy-green/);
  assert.match(page, /group inline-flex items-center gap-\[3px\]/);
  assert.match(page, /h-\[49px\] w-\[174px\]/);
  assert.match(page, /size-\[49px\].*bg-energy-green/s);
  assert.match(page, /md:bottom-\[82px\] md:right-0/);
  assert.match(header, /rounded-full border border-white\/20/);
  assert.match(header, /text-energy-green/);
  assert.match(cards, /h-\[200px\] w-\[150px\]/);
  assert.match(cards, /drop-shadow-md/);
  assert.match(cards, /hover:drop-shadow-white/);
  assert.match(cards, /focus-visible:outline-white/);
  assert.match(cards, /focus-visible:shadow-\[0_0_28px_0_rgba\(255,255,255,0\.86\)\]/);
  assert.match(cards, /logoFrameOverflowClassName/);
  assert.match(cards, /group: "h-\[32px\] w-\[102px\]"/);
  assert.match(cards, /dm: "h-\[30px\] w-\[94px\]"/);
  assert.match(cards, /infra: "h-\[30px\] w-\[96px\]"/);
  assert.match(cards, /lts: "h-\[34px\] w-\[124px\]"/);
  assert.match(cards, /cardId === "lts" \? "overflow-visible" : "overflow-hidden"/);
  assert.match(cards, /sizes=\{cardId === "lts" \? "124px" : "102px"\}/);
  assert.match(cards, /group-hover:scale-\[1\.03\]/);
  assert.doesNotMatch(cards, /group-hover:bg-energy-green/);
  assert.doesNotMatch(page, /\b(?:lg|xl|2xl):/);
  assert.doesNotMatch(header, /\b(?:lg|xl|2xl):/);
  assert.doesNotMatch(cards, /\b(?:lg|xl|2xl):/);
});

test("NMDC Energy overview follows the supplied desktop and mobile PDF design", () => {
  const content = readFileSync("apps/nmdc-energy/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-energy/app/pages.tsx", "utf8");
  const route = readFileSync("apps/nmdc-energy/app/overview/page.tsx", "utf8");

  for (const asset of [
    "apps/nmdc-energy/public/images/energy/overview-hero.jpg",
    "apps/nmdc-energy/public/images/energy/overview-platforms.jpg",
    "apps/nmdc-energy/public/images/energy/overview-video.jpg",
    "apps/nmdc-energy/public/images/energy/overview-technology.jpg",
    "apps/nmdc-energy/public/images/energy/overview-footer-bg.jpg",
    "apps/nmdc-energy/public/images/energy/agent-business-proposal.png",
    "apps/nmdc-energy/public/images/energy/agent-goods.png",
    "apps/nmdc-energy/public/images/energy/agent-worker.png",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(route, /NmdcEnergyOverviewPage/);
  assert.match(content, /overview:\s*\{/);
  assert.match(content, /At a Glance/);
  assert.match(content, /href: "\/overview\/at-a-glance"/);
  assert.match(content, /National Petroleum Construction Company/);
  assert.match(content, /ICV Score/);
  assert.match(content, /ICV Score 2025/);
  assert.match(content, /85\.16%/);
  assert.match(content, /20-30/);
  assert.match(content, /Tender planning time\\n\\n\(down from 2-3 days\)/);
  assert.match(content, /42,677/);
  assert.match(content, /USD 1\.3/);
  assert.match(content, /Technology and Digital Transformation/);
  assert.match(content, /HSE AMAN 24\/7/);
  assert.match(content, /Yard Scan AI/);
  assert.match(content, /Collaborative Agents/);
  assert.match(content, /agent-business-proposal\.png/);
  assert.match(content, /agent-goods\.png/);
  assert.match(content, /agent-worker\.png/);
  assert.match(page, /NmdcEnergyOverviewPage/);
  assert.match(page, /EnergyOverviewHero/);
  assert.match(page, /EnergyIcvSection/);
  assert.match(page, /EnergyHighlightsSection/);
  assert.match(page, /EnergyHighlightLabel/);
  assert.match(page, /label\.split\("\\n"\)\.filter\(Boolean\)/);
  assert.match(page, /<EnergyHighlightLabel label=\{item\.label\} \/>/);
  assert.match(page, /EnergyOverviewVideo/);
  assert.match(page, /EnergyTechnologySection/);
  assert.match(page, /src=\{agent\.image\.src\}/);
  assert.match(page, /alt=\{agent\.image\.alt\}/);
  assert.match(page, /EnergyFooter/);
  assert.match(page, /md:grid-cols-\[minmax\(0,520px\)_minmax\(0,630px\)\]/);
  assert.match(page, /rounded-\[18px\]/);
  assert.match(page, /bg-energy-green/);
  assert.match(page, /text-energy-green/);
  assert.match(page, /shadow-\[0_18px_34px_rgba\(0,0,0,0\.22\)\]/);
  assert.match(page, /md:grid-cols-3/);
  assert.match(page, /md:grid-cols-\[390px_minmax\(0,1fr\)\]/);
  assert.doesNotMatch(page, /\b(?:lg|xl|2xl):/);
});

test("NMDC Energy overview video arrows use the Energy themed outline controls", () => {
  const player = readFileSync(
    "apps/nmdc-energy/components/EnergyOverviewVideoPlayer.tsx",
    "utf8",
  );

  assert.match(player, /aria-label="Previous video"[\s\S]*size-\[48px\][\s\S]*text-\[#8ca0b5\]/);
  assert.match(player, /aria-label="Next video"[\s\S]*size-\[48px\][\s\S]*text-energy-green/);
  assert.match(player, /<ArrowLeft className="size-6" \/>/);
  assert.match(player, /<ArrowRight className="size-6" \/>/);
  assert.doesNotMatch(player, /size-16/);
  assert.doesNotMatch(player, /hover:bg-energy-green/);
});

test("NMDC Energy overview streams local videos with native Safeen-style controls", () => {
  const content = readFileSync("apps/nmdc-energy/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-energy/app/pages.tsx", "utf8");
  const player = readFileSync(
    "apps/nmdc-energy/components/EnergyOverviewVideoPlayer.tsx",
    "utf8",
  );

  for (const asset of [
    "apps/nmdc-energy/public/videos/energy-overview-mussafah.mp4",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
    assert.ok(statSync(asset).size > 1_000_000, `${asset} should be a copied video asset`);
  }

  assert.match(content, /videos:\s*\[/);
  assert.match(content, /energy-overview-mussafah\.mp4/);
  assert.doesNotMatch(content, /energy-overview-green\.mp4/);
  assert.doesNotMatch(content, /energy-overview-rov\.mp4/);
  assert.match(content, /type:\s*"video\/mp4"/);
  assert.match(content, /poster:\s*withEnergyBasePath\("\/images\/energy\/video-posters\/overview-mussafah\.png"\)/);
  assert.match(page, /EnergyOverviewVideoPlayer/);
  assert.match(page, /videos=\{video\.videos\}/);
  assert.match(player, /"use client";/);
  assert.match(player, /useRef<Array<HTMLVideoElement \| null>>/);
  assert.match(player, /useState/);
  assert.match(player, /translateX\(-\$\{activeIndex \* 100\}%\)/);
  assert.match(player, /<video/);
  assert.match(player, /\scontrols\s/);
  assert.doesNotMatch(player, /controls=\{isPlaying\}/);
  assert.match(player, /playsInline/);
  assert.match(player, /preload="metadata"/);
  assert.match(player, /poster=\{video\.poster\}/);
  assert.match(player, /src=\{video\.src\}/);
  assert.doesNotMatch(player, /playVideo/);
  assert.doesNotMatch(player, /setIsPlaying/);
  assert.doesNotMatch(player, /onPlay/);
  assert.doesNotMatch(player, /border-l-energy-green/);
  assert.doesNotMatch(player, /absolute inset-0 grid place-items-center/);
  assert.match(player, /onClick=\{showPreviousVideo\}/);
  assert.match(player, /onClick=\{showNextVideo\}/);
  assert.match(player, /aria-label=\{video\.playLabel\}/);
});

test("NMDC Energy overview read-more opens the At a Glance detail page", () => {
  const content = readFileSync("apps/nmdc-energy/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-energy/app/pages.tsx", "utf8");
  const route = readFileSync(
    "apps/nmdc-energy/app/overview/at-a-glance/page.tsx",
    "utf8",
  );

  assert.match(route, /NmdcEnergyAtAGlancePage/);
  assert.match(content, /atAGlanceDetail:\s*\{/);
  assert.match(content, /back:\s*\{/);
  assert.match(content, /href: "\/overview"/);
  assert.match(content, /label: "Back"/);
  assert.match(content, /1\.3 million square meter yard/);
  assert.match(content, /1,500experienced engineers/);
  assert.match(content, /tangible value for the energy sector/);
  assert.match(page, /function NmdcEnergyAtAGlancePage/);
  assert.match(page, /getEnergyNavLinks\("\/overview"\)/);
  assert.match(page, /detail\.back\.href/);
  assert.match(page, /md:grid-cols-\[minmax\(0,520px\)_minmax\(0,630px\)\]/);
  assert.match(page, /md:h-\[821px\]/);
  assert.match(page, /md:pt-\[180px\]/);
  assert.match(page, /EnergyFooter/);
  assert.doesNotMatch(page, /\b(?:lg|xl|2xl):/);
});

test("NMDC Energy yard highlights follows the supplied desktop and mobile PDF design", () => {
  const content = readFileSync("apps/nmdc-energy/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-energy/app/pages.tsx", "utf8");
  const route = readFileSync("apps/nmdc-energy/app/yard-highlights/page.tsx", "utf8");
  const carouselPath = "apps/nmdc-energy/components/EnergyYardImageCarousel.tsx";
  assert.equal(existsSync(carouselPath), true, `${carouselPath} should exist`);
  const carousel = existsSync(carouselPath) ? readFileSync(carouselPath, "utf8") : "";

  for (const asset of [
    "apps/nmdc-energy/public/images/energy/yards-hero.jpg",
    "apps/nmdc-energy/public/images/energy/yards-aerial.jpg",
    "apps/nmdc-energy/public/images/energy/yard-highlight-1.jpg",
    "apps/nmdc-energy/public/images/energy/yard-highlight-2.jpg",
    "apps/nmdc-energy/public/images/energy/yard-highlight-3.jpg",
    "apps/nmdc-energy/public/images/energy/yard-highlight-4.jpg",
    "apps/nmdc-energy/public/images/energy/yard-capability-alert.png",
    "apps/nmdc-energy/public/images/energy/yard-capability-connection.png",
    "apps/nmdc-energy/public/images/energy/yard-capability-monitoring.png",
    "apps/nmdc-energy/public/images/energy/yard-capability-robot-arm.png",
    "apps/nmdc-energy/public/images/energy/yard-capability-steel.png",
    "apps/nmdc-energy/public/images/energy/yards-video.jpg",
    "apps/nmdc-energy/public/images/energy/guinness-world-record.png",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(route, /NmdcEnergyYardHighlightsPage/);
  assert.match(content, /yardHighlights:\s*\{/);
  assert.match(content, /Energy Yards/);
  assert.match(content, /Key Highlights/);
  assert.match(content, /aerialImages:\s*\[/);
  assert.match(content, /yard-highlight-1\.jpg[\s\S]*yard-highlight-2\.jpg[\s\S]*yard-highlight-3\.jpg[\s\S]*yard-highlight-4\.jpg/);
  assert.match(content, /ICAD-4 Yard/);
  assert.match(content, /Mussafah Yard \(UAE\)/);
  assert.match(content, /Area : 1,075,000 sqm/);
  assert.match(content, /Ras Al Khair Yard \(KSA\)/);
  assert.match(content, /\+2,100,000/);
  assert.match(content, /\+100,000/);
  assert.match(content, /107\.03/);
  assert.match(content, /Guinness World Record/);
  assert.match(content, /logo:\s*\{/);
  assert.match(content, /guinness-world-record\.png/);
  assert.match(content, /icon: "area"/);
  assert.match(content, /icon: "capabilities"/);
  assert.match(content, /icon: "manpower"/);
  assert.match(content, /Yard Achievements/);
  assert.match(content, /summaryTitle:\s*"Completed Fabrication and Loadout in 2025"/);
  assert.match(content, /32,000 Metric Tons/);
  assert.match(content, /Self Propelled Modular Trailers\(SPMT\)"/);
  assert.match(content, /Yard Capabilities/);
  assert.match(content, /165,000/);
  assert.match(content, /Robotic welding and COBOT Welding/);
  assert.match(content, /Proximity Warning Alert System/);
  assert.match(content, /yard-capability-steel\.png/);
  assert.match(content, /yard-capability-robot-arm\.png/);
  assert.match(content, /yard-capability-monitoring\.png/);
  assert.match(content, /yard-capability-connection\.png/);
  assert.match(content, /yard-capability-alert\.png/);
  assert.match(page, /function NmdcEnergyYardHighlightsPage/);
  assert.match(page, /EnergyYardHighlightsHero/);
  assert.match(page, /EnergyYardKeyHighlights/);
  assert.match(page, /EnergyYardImageCarousel/);
  assert.match(page, /images=\{keyHighlights\.aerialImages\}/);
  assert.match(page, /function EnergyYardFactIcon/);
  assert.match(page, /function EnergyYardRecordLogo/);
  assert.match(page, /keyHighlights\.record\.logo/);
  assert.match(carousel, /"use client"/);
  assert.match(carousel, /useState/);
  assert.match(carousel, /showPreviousImage/);
  assert.match(carousel, /showNextImage/);
  assert.match(carousel, /currentIndex \+ 1/);
  assert.match(page, /EnergyYardAchievements/);
  assert.match(page, /data-yard-achievements/);
  assert.match(page, /data-yard-achievement-icon-card/);
  assert.match(page, /ml-auto block h-px w-2\/3 bg-\[#b6c5cf\]/);
  assert.match(page, /data-yard-achievement-summary-card/);
  assert.match(page, /data-yard-achievement-copy/);
  assert.match(page, /md:grid-cols-\[236px_1px_193px_1px_minmax\(0,1fr\)\]/);
  assert.match(page, /achievements\.summaryTitle/);
  assert.match(page, /EnergyYardCapabilities/);
  assert.match(page, /function EnergyYardCapabilityIcon/);
  assert.match(page, /src=\{image\.src\}/);
  assert.match(page, /alt=\{image\.alt\}/);
  assert.match(page, /getEnergyNavLinks\("\/yard-highlights"\)/);
  assert.match(page, /md:h-\[486px\]/);
  assert.match(page, /md:grid-cols-\[minmax\(0,760px\)_436px\]/);
  assert.match(page, /md:grid-cols-2/);
  assert.match(page, /data-yard-capabilities/);
  assert.match(page, /data-yard-capability-grid/);
  assert.match(page, /data-yard-capability-card/);
  assert.match(page, /md:grid-cols-\[minmax\(0,1fr\)_minmax\(0,1fr\)\]/);
  assert.match(page, /md:grid-cols-\[184px_minmax\(0,1fr\)\]/);
  assert.doesNotMatch(page, /data-yard-capabilities[^>]+md:hidden/);
  assert.match(page, /EnergyFooter/);
  assert.doesNotMatch(page, /rounded-sm border border-energy-green/);
  assert.doesNotMatch(page, /\b(?:lg|xl|2xl):/);
});

test("NMDC Energy products follows the supplied desktop and mobile PDF design", () => {
  const content = readFileSync("apps/nmdc-energy/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-energy/app/pages.tsx", "utf8");
  const route = readFileSync("apps/nmdc-energy/app/products/page.tsx", "utf8");

  for (const asset of [
    "apps/nmdc-energy/public/images/energy/products-hero.jpg",
    "apps/nmdc-energy/public/images/energy/product-topside.jpg",
    "apps/nmdc-energy/public/images/energy/product-jackets.jpg",
    "apps/nmdc-energy/public/images/energy/product-bridges-boat-landings.jpg",
    "apps/nmdc-energy/public/images/energy/product-pressure-vessels.jpg",
    "apps/nmdc-energy/public/images/energy/product-process-skids.jpg",
    "apps/nmdc-energy/public/images/energy/product-pipe-coating.jpg",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(route, /NmdcEnergyProductsPage/);
  assert.match(content, /products:\s*\{/);
  assert.match(content, /activeHref: "\/products"/);
  assert.match(content, /titleLeading: "Our"/);
  assert.match(content, /titleAccent: "Products"/);
  assert.match(content, /href: "\/products\/topside"/);
  assert.match(content, /href: "\/products\/jackets"/);
  assert.match(content, /href: "\/products\/bridges-and-boat-landings"/);
  assert.match(content, /href: "\/products\/pressure-vessels"/);
  assert.match(content, /href: "\/products\/process-skids"/);
  assert.match(content, /href: "\/products\/pipe-coating"/);
  assert.match(content, /Topside/);
  assert.match(content, /Jackets/);
  assert.match(content, /Bridges And Boat Landings/);
  assert.match(content, /Pressure Vessels/);
  assert.match(content, /Process Skids/);
  assert.match(content, /Pipe Coating/);
  assert.match(page, /function EnergyProductCard/);
  assert.match(page, /href=\{product\.href\}/);
  assert.match(page, /function NmdcEnergyProductsPage/);
  assert.match(page, /getEnergyNavLinks\(products\.activeHref\)/);
  assert.match(page, /md:h-\[485px\]/);
  assert.match(page, /md:grid-cols-3/);
  assert.match(page, /max-w-\[1240px\]/);
  assert.match(page, /rounded-\[34px\].*md:rounded-\[42px\]/s);
  assert.match(page, /shadow-\[0_26px_44px_rgba\(6,40,33,0\.30\)\]/);
  assert.match(page, /EnergyFooter/);
  assert.doesNotMatch(page, /\b(?:lg|xl|2xl):/);
});

test("NMDC Energy product cards open their respective PDF-designed detail pages", () => {
  const content = readFileSync("apps/nmdc-energy/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-energy/app/pages.tsx", "utf8");
  const productImageCarousel = readFileSync(
    "apps/nmdc-energy/components/EnergyProductImageCarousel.tsx",
    "utf8",
  );
  const route = readFileSync("apps/nmdc-energy/app/products/[slug]/page.tsx", "utf8");

  for (const asset of [
    "apps/nmdc-energy/public/images/energy/product-topside-carousel-1.jpg",
    "apps/nmdc-energy/public/images/energy/product-topside-carousel-2.jpg",
    "apps/nmdc-energy/public/images/energy/product-topside-carousel-3.jpg",
    "apps/nmdc-energy/public/images/energy/product-topside-carousel-4.jpg",
    "apps/nmdc-energy/public/images/energy/product-jackets-detail.jpg",
    "apps/nmdc-energy/public/images/energy/product-jackets-carousel-1.jpg",
    "apps/nmdc-energy/public/images/energy/product-jackets-carousel-2.jpg",
    "apps/nmdc-energy/public/images/energy/product-jackets-carousel-3.jpg",
    "apps/nmdc-energy/public/images/energy/product-bridges-detail.jpg",
    "apps/nmdc-energy/public/images/energy/product-pressure-vessels-detail.jpg",
    "apps/nmdc-energy/public/images/energy/product-pressure-vessels-source-1.jpg",
    "apps/nmdc-energy/public/images/energy/product-pressure-vessels-source-2.jpg",
    "apps/nmdc-energy/public/images/energy/product-pressure-vessels-source-3.jpg",
    "apps/nmdc-energy/public/images/energy/product-pressure-vessels-source-4.jpg",
    "apps/nmdc-energy/public/images/energy/icon-pressure-vessel.png",
    "apps/nmdc-energy/public/images/energy/icon-pressure-vessel-weight.png",
    "apps/nmdc-energy/public/images/energy/icon-pressure-vessel-schedule.png",
    "apps/nmdc-energy/public/images/energy/product-process-skids-detail.jpg",
    "apps/nmdc-energy/public/images/energy/product-process-skids-carousel-1.jpg",
    "apps/nmdc-energy/public/images/energy/product-process-skids-carousel-2.jpg",
    "apps/nmdc-energy/public/images/energy/product-pipe-coating-video.jpg",
    "apps/nmdc-energy/public/images/energy/product-pipe-coating-mobile.jpg",
    "apps/nmdc-energy/public/images/energy/icon-pipe-coating-pipe.png",
    "apps/nmdc-energy/public/images/energy/icon-pipe-coating-plant.png",
    "apps/nmdc-energy/public/images/energy/icon-pipe-coating-loadout.png",
    "apps/nmdc-energy/public/images/energy/offshore-structure-01.png",
    "apps/nmdc-energy/public/images/energy/offshore-structure-02.png",
    "apps/nmdc-energy/public/images/energy/offshore-structure-03.png",
    "apps/nmdc-energy/public/images/energy/offshore-structure-04.png",
    "apps/nmdc-energy/public/images/energy/offshore-structure-05.png",
    "apps/nmdc-energy/public/images/energy/offshore-structure-06.png",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(route, /generateStaticParams/);
  assert.match(route, /NmdcEnergyProductDetailPage/);
  assert.match(route, /notFound/);
  assert.match(content, /details:\s*\[/);
  for (const slug of [
    "topside",
    "jackets",
    "bridges-and-boat-landings",
    "pressure-vessels",
    "process-skids",
    "pipe-coating",
  ]) {
    assert.match(content, new RegExp(`slug: "${slug}"`));
  }
  assert.match(content, /Riser Platform/);
  assert.match(content, /product-topside-carousel-1\.jpg[\s\S]*product-topside-carousel-2\.jpg[\s\S]*product-topside-carousel-3\.jpg[\s\S]*product-topside-carousel-4\.jpg/);
  assert.match(content, /Eight Legged Jacket/);
  assert.match(content, /product-jackets-carousel-1\.jpg[\s\S]*product-jackets-carousel-2\.jpg[\s\S]*product-jackets-carousel-3\.jpg/);
  assert.match(content, /Bridges"/);
  assert.match(content, /Storage Tank/);
  assert.match(content, /product-pressure-vessels-source-1\.jpg[\s\S]*product-pressure-vessels-source-2\.jpg[\s\S]*product-pressure-vessels-source-3\.jpg[\s\S]*product-pressure-vessels-source-4\.jpg/);
  assert.match(content, /icon-pressure-vessel\.png/);
  assert.match(content, /icon-pressure-vessel-weight\.png/);
  assert.match(content, /icon-pressure-vessel-schedule\.png/);
  assert.match(content, /Glycol Storage Unit/);
  assert.match(content, /product-process-skids-carousel-1\.jpg[\s\S]*product-process-skids-carousel-2\.jpg/);
  assert.match(content, /Double Jointed CWC Pipes/);
  assert.match(content, /PRODUCTION CAPACITY FOR EACH 3 LPO PLANT/);
  assert.match(content, /TYPES OF TOPSIDES/);
  assert.match(content, /pipeCoatingBackground/);
  assert.doesNotMatch(content, /piepCoatingBackground/);
  assert.match(content, /icon-pipe-coating-pipe\.png/);
  assert.match(content, /icon-pipe-coating-plant\.png/);
  assert.match(content, /icon-pipe-coating-loadout\.png/);
  assert.match(content, /offshore-structure-01\.png[\s\S]*offshore-structure-02\.png[\s\S]*offshore-structure-03\.png[\s\S]*offshore-structure-04\.png[\s\S]*offshore-structure-05\.png[\s\S]*offshore-structure-06\.png/);
  assert.match(page, /function EnergyProductHero/);
  assert.match(page, /function getEnergyProductSlugFromPath/);
  assert.match(page, /productPath\.split\("\/"\)/);
  assert.match(page, /jackets: hero\.jacketBackground/);
  assert.match(page, /"pipe-coating": hero\.pipeCoatingBackground/);
  assert.match(page, /selectedBackground \?\? hero\.topSideBackground/);
  assert.match(page, /productPath=\{`\/products\/\$\{detail\.slug\}`\}/);
  assert.match(page, /function EnergyProductDetailPage/);
  assert.match(page, /function NmdcEnergyProductDetailPage/);
  assert.match(page, /function EnergyProductBarChart/);
  assert.match(page, /function EnergyPipeCoatingCapabilitiesCard/);
  assert.match(page, /function EnergyPipeCoatingHighlightsList/);
  assert.match(page, /data-pipe-coating-overview/);
  assert.match(page, /data-pipe-coating-capabilities-card/);
  assert.match(page, /data-pipe-coating-highlights-list/);
  assert.match(page, /md:grid-cols-\[380px_minmax\(0,1fr\)\]/);
  assert.match(page, /md:grid-cols-\[190px_minmax\(0,1fr\)\]/);
  assert.match(page, /function EnergyProductMedia/);
  assert.match(page, /function EnergyPressureVesselsOverview/);
  assert.match(page, /data-pressure-vessels-overview/);
  assert.match(page, /data-pressure-vessels-highlights/);
  assert.match(page, /detail\.slug === "pressure-vessels"/);
  assert.match(page, /mediaImages/);
  assert.match(page, /EnergyProductImageCarousel/);
  assert.match(productImageCarousel, /"use client"/);
  assert.match(productImageCarousel, /useState/);
  assert.match(productImageCarousel, /showPreviousMediaImage/);
  assert.match(productImageCarousel, /showNextMediaImage/);
  assert.match(productImageCarousel, /showMediaImageAtProgress/);
  assert.match(productImageCarousel, /getBoundingClientRect/);
  assert.match(productImageCarousel, /aria-label=\{`Image \$\{currentIndex \+ 1\} of \$\{images\.length\}/);
  assert.match(productImageCarousel, /onClick=\{showPreviousMediaImage\}/);
  assert.match(productImageCarousel, /onClick=\{showNextMediaImage\}/);
  assert.match(productImageCarousel, /onClick=\{showMediaImageAtProgress\}/);
  assert.match(page, /function EnergyTopsideTypesSection/);
  assert.match(page, /detail\.offshore\.images\.map/);
  assert.match(page, /offshoreImage\.src/);
  assert.match(page, /offshoreImage\.alt/);
  assert.doesNotMatch(page, /detail\.offshore\.items\.map/);
  assert.match(page, /function EnergyPipeCoatingCapacityTable/);
  assert.match(page, /detail\.table\.rows\.map\(\(row, rowIndex\) =>/);
  assert.match(page, /row\.map\(\(cell, cellIndex\) =>/);
  assert.match(page, /key=\{`\$\{rowIndex\}-\$\{cellIndex\}`\}/);
  assert.doesNotMatch(page, /key=\{cell\}/);
  assert.match(page, /md:grid-cols-\[minmax\(0,560px\)_minmax\(0,640px\)\]/);
  assert.match(page, /md:grid-cols-3/);
  assert.match(page, /EnergyFooter/);
  assert.doesNotMatch(page, /\b(?:lg|xl|2xl):/);
});

test("NMDC Energy is wired into scripts, Docker, compose, and brand links", () => {
  const rootPkg = readFileSync("package.json", "utf8");
  const dockerfile = readFileSync("Dockerfile", "utf8");
  const compose = readFileSync("compose.yml", "utf8");
  const copyScript = readFileSync("scripts/copy-standalone-assets.mjs", "utf8");
  const groupContent = readFileSync("features/landing-pages/nmdc-group/content.ts", "utf8");
  const infraContent = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");
  const ltsContent = readFileSync("apps/nmdc-lts/content/content.ts", "utf8");

  assert.match(rootPkg, /"dev:energy": "npm --prefix apps\/nmdc-energy run dev"/);
  assert.match(rootPkg, /"build:energy": "npm --prefix apps\/nmdc-energy run build && node scripts\/copy-standalone-assets\.mjs energy"/);
  assert.match(rootPkg, /"start:energy": "npm --prefix apps\/nmdc-energy run start"/);
  assert.match(rootPkg, /NEXT_PUBLIC_ENERGY_APP_URL=\$\{NEXT_PUBLIC_ENERGY_APP_URL:-http:\/\/localhost:3124\}/);
  assert.match(rootPkg, /PORT=3124 HOSTNAME=0\.0\.0\.0 npm run start:energy/);
  assert.match(dockerfile, /NEXT_PUBLIC_ENERGY_APP_URL="http:\/\/localhost:3124"/);
  assert.match(dockerfile, /NMDC Energy/);
  assert.match(dockerfile, /EXPOSE 3120 3121 3122 3123 3124/);
  assert.match(compose, /NEXT_PUBLIC_ENERGY_APP_URL: "http:\/\/localhost:3124"/);
  assert.match(compose, /"3124:3124"/);
  assert.match(copyScript, /energy:\s*\{/);
  assert.match(copyScript, /"nmdc-energy"/);
  assert.match(groupContent, /const energyAppUrl/);
  assert.match(groupContent, /href: energyAppUrl/);
  assert.match(infraContent, /const energyAppUrl/);
  assert.match(infraContent, /href: energyAppUrl/);
  assert.match(ltsContent, /const energyAppUrl/);
  assert.match(ltsContent, /href: energyAppUrl/);
});
