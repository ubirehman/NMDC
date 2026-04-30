import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const linkedInUrl = "https://www.linkedin.com/company/nmdc-group/";
const instagramUrl = "https://www.instagram.com/nmdc_group?igsh=MWlqOXUxOGlza3h3ZA";

const footerDataFiles = [
  "app/components/landing/NmdcFooter.tsx",
  "apps/nmdc-energy/content/content.ts",
  "apps/nmdc-infra/content/content.ts",
  "apps/nmdc-lts/content/content.ts",
  "apps/nmdc-dredging-marine/content/content.ts",
  "features/landing-pages/nmdc-overview/content.ts",
];

const footerRenderFiles = [
  "app/components/landing/NmdcFooter.tsx",
  "apps/nmdc-energy/app/pages.tsx",
  "apps/nmdc-infra/app/pages.tsx",
  "apps/nmdc-lts/components/Footer.tsx",
  "apps/nmdc-dredging-marine/components/Footer.tsx",
];

function socialBlockFor(source, file) {
  const match = source.match(
    /(?:const\s+(?:footerSocialLinks|socialLinks)\s*=\s*|socialLinks:\s*)\[(?<block>[\s\S]*?)\]\s*(?:,|;)/,
  );
  assert.ok(match?.groups?.block, `${file} should define footer social links`);
  return match.groups.block;
}

test("footer social link data only includes provided NMDC channels", () => {
  for (const file of footerDataFiles) {
    const source = readFileSync(file, "utf8");
    const block = socialBlockFor(source, file);
    const labels = [...block.matchAll(/label:\s*"([^"]+)"/g)].map((match) => match[1]);

    assert.deepEqual(labels, ["LinkedIn", "Instagram"], `${file} should only expose provided channels`);
    assert.match(block, new RegExp(linkedInUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(block, new RegExp(instagramUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.doesNotMatch(block, /Facebook|Twitter|YouTube|label:\s*"X"/);
    assert.doesNotMatch(block, /href:\s*"#(?:facebook|instagram|twitter|linkedin)?"/);
  }
});

test("footer social anchors open external channels consistently", () => {
  for (const file of footerRenderFiles) {
    const source = readFileSync(file, "utf8");

    assert.match(source, /socialLinks\.map/, `${file} should render footer social links`);
    assert.match(source, /target="_blank"/, `${file} should open social links in a new tab`);
    assert.match(source, /rel="noreferrer"/, `${file} should use safe external link rel`);
  }
});
