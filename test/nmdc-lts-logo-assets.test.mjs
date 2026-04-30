import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const ltsLogoAssets = [
  "public/images/landing/logo-lts.svg",
  "public/images/landing/logo-lts-card.svg",
  "apps/nmdc-energy/public/images/energy/logo-lts.svg",
  "apps/nmdc-energy/public/images/energy/logo-lts-card.svg",
  "apps/nmdc-infra/public/images/infra/logo-lts.svg",
  "apps/nmdc-infra/public/images/infra/logo-lts-card.svg",
  "apps/nmdc-lts/public/images/lts/logo-lts.svg",
  "apps/nmdc-lts/public/images/lts/logo-lts-card.svg",
];

test("NMDC LTS logo SVG assets include a padded viewport so cards do not crop the mark", () => {
  for (const asset of ltsLogoAssets) {
    const svg = readFileSync(asset, "utf8");

    assert.match(svg, /preserveAspectRatio="xMidYMid meet"/, asset);
    assert.match(svg, /viewBox="-6 -2 80 24"/, asset);
    assert.doesNotMatch(svg, /preserveAspectRatio="none"/, asset);
    assert.doesNotMatch(svg, /viewBox="0 0 68 20"/, asset);
  }
});

test("NMDC Group and overview cards use the padded LTS SVG instead of the tightly cropped PNG", () => {
  const groupContent = readFileSync(
    "features/landing-pages/nmdc-group/content.ts",
    "utf8",
  );
  const overviewContent = readFileSync(
    "features/landing-pages/nmdc-overview/content.ts",
    "utf8",
  );

  assert.match(groupContent, /src:\s*"\/images\/landing\/logo-lts-card\.svg"/);
  assert.match(overviewContent, /logo:\s*"\/images\/landing\/logo-lts-card\.svg"/);
  assert.doesNotMatch(groupContent, /logo-lts\.png/);
  assert.doesNotMatch(overviewContent, /logo-lts\.png/);
});
