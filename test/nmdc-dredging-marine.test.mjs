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
  const content = readFileSync(
    "apps/nmdc-dredging-marine/content/content.ts",
    "utf8",
  );

  assert.match(content, /Marine Vessels/);
  assert.match(content, /Hydraulic Physical Model/);
  assert.match(content, /Caisson Method/);
  assert.match(content, /Overview/);
  assert.match(content, /Capabilities/);
  assert.match(content, /Al Mirfa/);
  assert.match(content, /GHASHA/);
  assert.match(page, /home-dredger-ghasha\.jpg/);
  assert.match(page, /href="\/overview"/);
  assert.match(page, /id="capabilities"/);
  assert.match(page, /Dredging &amp;/);
  assert.match(page, /Construction/);
  assert.match(page, /At a glance/);
  assert.match(page, /NMDC Dredging &amp; Marine/);
  assert.match(page, /bg-dm-navy px-5 pb-16 pt-\[132px\]/);
  assert.match(page, /bg-dm-ice px-5 py-12/);
  assert.match(page, /vessel-al-mirfa\.jpg/);
  assert.match(page, /Featured marine vessels/);
  assert.match(page, /View specification/);
  assert.match(page, /text-\[22px\] font-bold leading-7 text-white/);
  assert.match(page, /Testing facility/);
  assert.match(page, /Play \$\{title\}|Play /);
  assert.match(page, /Construction and installation process/i);
  assert.match(content, /hydraulicTestingFacilities/);
  assert.match(content, /caissonCapabilities/);
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

test("D&M extracted PDF assets are available", () => {
  for (const asset of [
    "apps/nmdc-dredging-marine/public/images/dm/home-hero.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/home-dredger-ghasha.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/overview-vessel.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/vessel-al-mirfa.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/hydraulic-hero.jpg",
    "apps/nmdc-dredging-marine/public/images/dm/caisson-hero.jpg",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }
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
