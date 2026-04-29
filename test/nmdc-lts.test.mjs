import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const ltsFiles = [
  "apps/nmdc-lts/app/page.tsx",
  "apps/nmdc-lts/app/key-highlights/page.tsx",
  "apps/nmdc-lts/app/marine-vessels/page.tsx",
  "apps/nmdc-lts/app/whipstock-system/page.tsx",
  "apps/nmdc-lts/app/pages.tsx",
  "apps/nmdc-lts/app/layout.tsx",
  "apps/nmdc-lts/app/globals.css",
  "apps/nmdc-lts/components/Footer.tsx",
  "apps/nmdc-lts/components/Header.tsx",
  "apps/nmdc-lts/components/LtsHomeCardRail.tsx",
  "apps/nmdc-lts/components/icons.tsx",
  "apps/nmdc-lts/content/content.ts",
  "apps/nmdc-lts/next.config.ts",
  "apps/nmdc-lts/package.json",
  "apps/nmdc-lts/postcss.config.js",
  "apps/nmdc-lts/tsconfig.json",
];

test("NMDC LTS is implemented as a separate Next.js project", () => {
  for (const file of ltsFiles) {
    assert.equal(existsSync(file), true, `${file} should exist`);
  }

  assert.equal(existsSync("app/nmdc-lts/page.tsx"), false);

  const pkg = readFileSync("apps/nmdc-lts/package.json", "utf8");
  assert.match(pkg, /"name": "nmdc-lts"/);
  assert.match(pkg, /standalone\/apps\/nmdc-lts\/server\.js/);

  const nextConfig = readFileSync("apps/nmdc-lts/next.config.ts", "utf8");
  assert.match(nextConfig, /output:\s*"standalone"/);
  assert.match(nextConfig, /devIndicators:\s*false/);
});

test("NMDC LTS home follows the supplied desktop and mobile PDF design", () => {
  const content = readFileSync("apps/nmdc-lts/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-lts/app/pages.tsx", "utf8");
  const css = readFileSync("apps/nmdc-lts/app/globals.css", "utf8");
  const cards = readFileSync(
    "apps/nmdc-lts/components/LtsHomeCardRail.tsx",
    "utf8",
  );
  const header = readFileSync("apps/nmdc-lts/components/Header.tsx", "utf8");

  for (const asset of [
    "apps/nmdc-lts/public/images/lts/home-hero.jpg",
    "apps/nmdc-lts/public/images/lts/logo-lts.svg",
    "apps/nmdc-lts/public/images/lts/card-platform.jpg",
    "apps/nmdc-lts/public/images/lts/card-dredging.jpg",
    "apps/nmdc-lts/public/images/lts/card-energy.jpg",
    "apps/nmdc-lts/public/images/lts/card-infra.jpg",
    "apps/nmdc-lts/public/images/lts/card-product.jpg",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(content, /nmdcLtsContent/);
  assert.match(content, /Home/);
  assert.match(content, /Key Highlights/);
  assert.match(content, /Marine Vessels/);
  assert.match(content, /Whipstock System/);
  assert.match(content, /Driving Global Marine/);
  assert.match(content, /Logistics with Precision/);
  assert.match(content, /and Scale/);
  assert.match(content, /Integrated vessel chartering, logistics and technical services/);
  assert.match(content, /world-class fleet/);
  assert.match(content, /Visit Us/);
  assert.match(content, /href: "\/key-highlights"/);
  assert.match(content, /NMDC Product Highlight/);
  assert.match(content, /NEXT_PUBLIC_NMDC_GROUP_APP_URL/);
  assert.match(content, /NEXT_PUBLIC_DREDGING_MARINE_APP_URL/);
  assert.match(content, /NEXT_PUBLIC_INFRA_APP_URL/);
  assert.match(css, /--lts-navy:\s*#062a36;/);
  assert.match(css, /--lts-tan:\s*#ddc19c;/);
  assert.match(css, /--color-lts-tan:\s*#ddc19c;/);
  assert.match(page, /NmdcLtsHomePage/);
  assert.match(page, /LtsHomeCardRail/);
  assert.match(page, /h-\[776px\] md:h-\[786px\]/);
  assert.match(page, /pt-\[136px\] md:absolute md:left-0 md:top-\[244px\]/);
  assert.match(page, /top-\[447px\] z-10 px-5 md:absolute md:bottom-\[82px\]/);
  assert.match(page, /group inline-flex items-center gap-\[3px\]/);
  assert.match(page, /h-\[49px\] w-\[174px\] items-center justify-center rounded-full bg-white/);
  assert.match(page, /size-\[49px\] items-center justify-center rounded-full bg-lts-tan/);
  assert.match(page, /md:text-\[48px\]/);
  assert.match(page, /text-lts-tan/);
  assert.match(page, /bg-lts-tan/);
  assert.match(page, /md:absolute md:bottom-\[82px\] md:right-0/);
  assert.match(page, /object-\[62%_50%\].*md:object-center/s);
  assert.match(cards, /h-\[200px\] w-\[150px\]/);
  assert.match(cards, /md:w-\[150px\]/);
  assert.match(cards, /hover:border-lts-tan/);
  assert.match(cards, /group-hover:bg-lts-tan/);
  assert.match(cards, /Previous NMDC LTS cards/);
  assert.match(header, /max-w-\[320px\] md:max-w-\[1240px\]/);
  assert.match(header, /md:h-\[72px\]/);
  assert.match(header, /text-lts-tan/);
});

test("NMDC LTS at a glance follows the supplied desktop and mobile PDF design", () => {
  const content = readFileSync("apps/nmdc-lts/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-lts/app/pages.tsx", "utf8");
  const route = readFileSync(
    "apps/nmdc-lts/app/key-highlights/page.tsx",
    "utf8",
  );
  const footer = readFileSync("apps/nmdc-lts/components/Footer.tsx", "utf8");

  for (const asset of [
    "apps/nmdc-lts/public/images/lts/at-glance-hero.jpg",
    "apps/nmdc-lts/public/images/lts/at-glance-vessel.jpg",
    "apps/nmdc-lts/public/images/lts/capability-vessel-chartering.jpg",
    "apps/nmdc-lts/public/images/lts/capability-towing-services.jpg",
    "apps/nmdc-lts/public/images/lts/capability-integrated-logistics.jpg",
    "apps/nmdc-lts/public/images/lts/capability-technical-services.jpg",
    "apps/nmdc-lts/public/images/lts/footer-lines.jpg",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(route, /NmdcLtsAtAGlancePage/);
  assert.match(content, /atAGlance/);
  assert.match(content, /Back/);
  assert.match(content, /NMDC LTS/);
  assert.match(content, /At a Glance/);
  assert.match(content, /Founded in 2024/);
  assert.match(content, /90 owned and 220 chartered vessels/);
  assert.match(content, /Read more\.\.\.\./);
  assert.match(content, /Capabilities/);
  assert.match(content, /Vessel Chartering/);
  assert.match(content, /Towing Services/);
  assert.match(content, /Integrated Logistics/);
  assert.match(content, /Technical Services/);
  assert.match(content, /Our end-to-end logistics services manage the transport/);
  assert.match(content, /Let’s connect/);
  assert.match(content, /NMDC Dredging & Marine/);
  assert.match(content, /NMDC Overview/);
  assert.match(content, /Hydraulic Physical Model/);
  assert.match(content, /footer-lines\.jpg/);
  assert.match(content, /logo-group\.svg/);
  assert.match(content, /logo-dm\.webp/);

  assert.match(page, /NmdcLtsAtAGlancePage/);
  assert.match(page, /LtsCapabilityCard/);
  assert.match(page, /LtsFooter/);
  assert.match(page, /getLtsNavLinks\("\/key-highlights"\)/);
  assert.match(page, /h-\[1060px\] md:h-\[760px\]/);
  assert.match(page, /md:grid-cols-\[minmax\(0,690px\)_minmax\(0,423px\)\]/);
  assert.match(page, /md:pt-\[134px\]/);
  assert.match(page, /md:h-\[505px\]/);
  assert.match(page, /rounded-\[32px\]/);
  assert.match(page, /bg-white text-lts-ink/);
  assert.match(page, /text-\[38px\] md:text-\[48px\]/);
  assert.match(page, /bg-lts-deep-navy/);
  assert.match(page, /rounded-\[52px\]/);
  assert.match(page, /md:grid-cols-2/);
  assert.match(page, /String\(index \+ 1\)\.padStart\(2, "0"\)/);
  assert.match(page, /h-\[138px\] w-\[118px\]/);
  assert.match(page, /md:h-\[120px\] md:w-\[160px\]/);

  assert.match(footer, /md:grid-cols-\[minmax\(0,420px\)_minmax\(0,300px\)_minmax\(0,360px\)\]/);
  assert.match(footer, /rounded-\[28px\] md:rounded-\[18px\]/);
});

test("NMDC LTS marine vessels follows the supplied desktop, mobile, and iPad desktop-layout design", () => {
  const content = readFileSync("apps/nmdc-lts/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-lts/app/pages.tsx", "utf8");
  const route = readFileSync(
    "apps/nmdc-lts/app/marine-vessels/page.tsx",
    "utf8",
  );

  for (const asset of [
    "apps/nmdc-lts/public/images/lts/marine-vessels-hero.png",
    "apps/nmdc-lts/public/images/lts/marine-vessel-multicat.png",
    "apps/nmdc-lts/public/images/lts/marine-vessel-pushy-cat.png",
    "apps/nmdc-lts/public/images/lts/marine-vessel-tug-boat.png",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(route, /NmdcLtsMarineVesselsPage/);
  assert.match(content, /marineVessels/);
  assert.match(content, /href: "\/marine-vessels"/);
  assert.match(content, /Marine Vessels/);
  assert.match(content, /Multicat M-21/);
  assert.match(content, /Pushy Cat - P14 & Pushy Cat - P15/);
  assert.match(content, /Tug Boat - T9/);
  assert.match(content, /Built with Expertise/);
  assert.match(content, /Built with Confidence/);
  assert.match(content, /View Specifications/);
  assert.match(content, /marine-vessels-hero\.png/);
  assert.match(content, /marine-vessel-multicat\.png/);
  assert.match(content, /marine-vessel-pushy-cat\.png/);
  assert.match(content, /marine-vessel-tug-boat\.png/);

  assert.match(page, /NmdcLtsMarineVesselsPage/);
  assert.match(page, /MarineVesselsHero/);
  assert.match(page, /LtsVesselSection/);
  assert.match(page, /getLtsNavLinks\("\/marine-vessels"\)/);
  assert.match(page, /h-\[360px\] md:h-\[486px\]/);
  assert.match(page, /md:grid-cols-2/);
  assert.match(page, /md:min-h-\[714px\]/);
  assert.match(page, /md:border-l/);
  assert.match(page, /md:text-\[48px\]/);
  assert.match(page, /uppercase md:normal-case/);
  assert.doesNotMatch(page, /\b(?:lg|xl|2xl):/);
});

test("NMDC LTS whipstock system follows the supplied desktop, mobile, and iPad desktop-layout design", () => {
  const content = readFileSync("apps/nmdc-lts/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-lts/app/pages.tsx", "utf8");
  const route = readFileSync(
    "apps/nmdc-lts/app/whipstock-system/page.tsx",
    "utf8",
  );

  for (const asset of [
    "apps/nmdc-lts/public/images/lts/whipstock-hero-desktop.png",
    "apps/nmdc-lts/public/images/lts/whipstock-hero-mobile.png",
    "apps/nmdc-lts/public/images/lts/whipstock-system-diagram.png",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(route, /NmdcLtsWhipstockSystemPage/);
  assert.match(content, /whipstockSystem/);
  assert.match(content, /href: "\/whipstock-system"/);
  assert.match(content, /EMDAD/);
  assert.match(content, /Whipstock System/);
  assert.match(content, /founded in 1979/);
  assert.match(content, /Hydraulic/);
  assert.match(content, /Mechanical/);
  assert.match(content, /Permanent/);
  assert.match(content, /Retrievable/);
  assert.match(content, /View Specifications/);
  assert.match(content, /whipstock-hero-desktop\.png/);
  assert.match(content, /whipstock-hero-mobile\.png/);
  assert.match(content, /whipstock-system-diagram\.png/);

  assert.match(page, /NmdcLtsWhipstockSystemPage/);
  assert.match(page, /WhipstockHero/);
  assert.match(page, /WhipstockFeatureCard/);
  assert.match(page, /WhipstockDiagram/);
  assert.match(page, /getLtsNavLinks\("\/whipstock-system"\)/);
  assert.match(page, /h-\[421px\] md:h-\[486px\]/);
  assert.match(page, /md:grid-cols-\[minmax\(0,560px\)_minmax\(0,670px\)\]/);
  assert.match(page, /md:order-1/);
  assert.match(page, /md:order-2/);
  assert.match(page, /md:h-\[624px\]/);
  assert.match(page, /md:w-\[1240px\]/);
  assert.doesNotMatch(page, /\b(?:lg|xl|2xl):/);
});

test("NMDC LTS is wired into root scripts, Docker, compose, and brand links", () => {
  const pkg = readFileSync("package.json", "utf8");
  const dockerfile = readFileSync("Dockerfile", "utf8");
  const compose = readFileSync("compose.yml", "utf8");
  const standaloneAssets = readFileSync(
    "scripts/copy-standalone-assets.mjs",
    "utf8",
  );
  const groupContent = readFileSync(
    "features/landing-pages/nmdc-group/content.ts",
    "utf8",
  );
  const infraContent = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");

  assert.match(pkg, /"dev:lts": "npm --prefix apps\/nmdc-lts run dev"/);
  assert.match(pkg, /"build:lts": "npm --prefix apps\/nmdc-lts run build/);
  assert.match(pkg, /"start:lts": "npm --prefix apps\/nmdc-lts run start"/);
  assert.match(pkg, /3123/);
  assert.match(dockerfile, /NEXT_PUBLIC_LTS_APP_URL="http:\/\/localhost:3123"/);
  assert.match(dockerfile, /EXPOSE 3120 3121 3122 3123/);
  assert.match(dockerfile, /standalone NMDC LTS app/);
  assert.match(compose, /NEXT_PUBLIC_LTS_APP_URL: "http:\/\/localhost:3123"/);
  assert.match(compose, /"3123:3123"/);
  assert.match(compose, /apps\/nmdc-lts\/\.next/);
  assert.match(standaloneAssets, /lts:\s*\{/);
  assert.match(standaloneAssets, /nmdc-lts/);
  assert.match(groupContent, /NEXT_PUBLIC_LTS_APP_URL/);
  assert.match(groupContent, /href: ltsAppUrl/);
  assert.match(infraContent, /NEXT_PUBLIC_LTS_APP_URL/);
  assert.match(infraContent, /href: ltsAppUrl/);
});
