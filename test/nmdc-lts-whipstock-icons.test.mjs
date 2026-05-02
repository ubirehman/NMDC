import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

test("NMDC LTS Whipstock feature cards use supplied image icons and light 20px text", () => {
  const content = readFileSync("apps/nmdc-lts/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-lts/app/pages.tsx", "utf8");

  for (const asset of [
    "apps/nmdc-lts/public/images/lts/whipstock-icon-hydraulic.png",
    "apps/nmdc-lts/public/images/lts/whipstock-icon-mechanical.png",
    "apps/nmdc-lts/public/images/lts/whipstock-icon-permanent.png",
    "apps/nmdc-lts/public/images/lts/whipstock-icon-retrievable.png",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(content, /iconImage:\s*\{/);
  assert.match(content, /whipstock-icon-hydraulic\.png/);
  assert.match(content, /whipstock-icon-mechanical\.png/);
  assert.match(content, /whipstock-icon-permanent\.png/);
  assert.match(content, /whipstock-icon-retrievable\.png/);

  assert.doesNotMatch(page, /function WhipstockFeatureIcon/);
  assert.doesNotMatch(page, /viewBox="0 0 64 64"/);
  assert.match(page, /src=\{feature\.iconImage\.src\}/);
  assert.match(page, /alt=\{feature\.iconImage\.alt\}/);
  assert.match(page, /text-\[20px\] font-light/);
  assert.doesNotMatch(page, /text-\[24px\] font-bold leading-\[42px\]/);
});
