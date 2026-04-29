import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const energyFiles = [
  "apps/nmdc-energy/app/page.tsx",
  "apps/nmdc-energy/app/overview/page.tsx",
  "apps/nmdc-energy/app/overview/at-a-glance/page.tsx",
  "apps/nmdc-energy/app/yard-highlights/page.tsx",
  "apps/nmdc-energy/app/pages.tsx",
  "apps/nmdc-energy/app/layout.tsx",
  "apps/nmdc-energy/app/globals.css",
  "apps/nmdc-energy/components/Header.tsx",
  "apps/nmdc-energy/components/EnergyHomeCardRail.tsx",
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
    "apps/nmdc-energy/public/images/energy/logo-lts.svg",
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
  assert.match(css, /--energy-green:\s*#00b765;/);
  assert.match(css, /--color-energy-green:\s*#00b765;/);
  assert.match(page, /NmdcEnergyHomePage/);
  assert.match(page, /EnergyHomeCardRail/);
  assert.match(page, /h-\[786px\]/);
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
  assert.match(cards, /relative block shrink-0 overflow-hidden/);
  assert.match(cards, /group: "h-\[32px\] w-\[102px\]"/);
  assert.match(cards, /dm: "h-\[30px\] w-\[94px\]"/);
  assert.match(cards, /infra: "h-\[30px\] w-\[96px\]"/);
  assert.match(cards, /lts: "h-\[27px\] w-\[92px\]"/);
  assert.match(cards, /sizes="102px"/);
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
  assert.match(content, /42,677/);
  assert.match(content, /USD 1\.3/);
  assert.match(content, /Technology and Digital Transformation/);
  assert.match(content, /HSE AMAN 24\/7/);
  assert.match(content, /Yard Scan AI/);
  assert.match(content, /Collaborative Agents/);
  assert.match(page, /NmdcEnergyOverviewPage/);
  assert.match(page, /EnergyOverviewHero/);
  assert.match(page, /EnergyIcvSection/);
  assert.match(page, /EnergyHighlightsSection/);
  assert.match(page, /EnergyOverviewVideo/);
  assert.match(page, /EnergyTechnologySection/);
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

  for (const asset of [
    "apps/nmdc-energy/public/images/energy/yards-hero.jpg",
    "apps/nmdc-energy/public/images/energy/yards-aerial.jpg",
    "apps/nmdc-energy/public/images/energy/yards-video.jpg",
    "apps/nmdc-energy/public/images/energy/guinness-world-record.png",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(route, /NmdcEnergyYardHighlightsPage/);
  assert.match(content, /yardHighlights:\s*\{/);
  assert.match(content, /Energy Yards/);
  assert.match(content, /Key Highlights/);
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
  assert.match(content, /32,000 Metric Tons/);
  assert.match(content, /Yard Capabilities/);
  assert.match(content, /165,000/);
  assert.match(content, /Robotic welding and COBOT Welding/);
  assert.match(content, /Proximity Warning Alert System/);
  assert.match(page, /function NmdcEnergyYardHighlightsPage/);
  assert.match(page, /EnergyYardHighlightsHero/);
  assert.match(page, /EnergyYardKeyHighlights/);
  assert.match(page, /function EnergyYardFactIcon/);
  assert.match(page, /function EnergyYardRecordLogo/);
  assert.match(page, /keyHighlights\.record\.logo/);
  assert.match(page, /function EnergyYardArrowControls/);
  assert.match(page, /mt-4 flex items-center justify-center gap-5 md:hidden/);
  assert.match(page, /relative mt-4 hidden h-10 items-center justify-center md:flex/);
  assert.match(page, /absolute right-0 text-\[13px\] font-bold leading-5 text-energy-green/);
  assert.match(page, /EnergyYardAchievements/);
  assert.match(page, /EnergyYardCapabilities/);
  assert.match(page, /getEnergyNavLinks\("\/yard-highlights"\)/);
  assert.match(page, /md:h-\[486px\]/);
  assert.match(page, /md:grid-cols-\[minmax\(0,760px\)_436px\]/);
  assert.match(page, /md:grid-cols-2/);
  assert.match(page, /EnergyFooter/);
  assert.doesNotMatch(page, /rounded-sm border border-energy-green/);
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
