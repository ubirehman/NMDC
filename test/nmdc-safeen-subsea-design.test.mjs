import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const safeenPagePath =
  "features/landing-pages/nmdc-safeen-subsea/NmdcSafeenSubseaPage.tsx";

test("Safeen Subsea desktop hero and headings match the supplied design", () => {
  const page = readFileSync(safeenPagePath, "utf8");
  const heroTitleBlock = page.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? "";
  const capabilitiesHeadingBlock =
    page.match(/<h2[\s\S]*?Capabilities[\s\S]*?<\/h2>/)?.[0] ?? "";

  assert.match(heroTitleBlock, /safeenHero\.titleAccent/);
  assert.doesNotMatch(heroTitleBlock, /uppercase/);
  assert.match(capabilitiesHeadingBlock, />\s*Capabilities\s*</);
  assert.doesNotMatch(capabilitiesHeadingBlock, /Capabilities\./);
});
