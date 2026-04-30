import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const globalStylesheets = [
  "app/globals.css",
  "apps/nmdc-dredging-marine/app/globals.css",
  "apps/nmdc-energy/app/globals.css",
  "apps/nmdc-infra/app/globals.css",
  "apps/nmdc-lts/app/globals.css",
];

test("all NMDC apps use Helvetica Neue as the default text font", () => {
  for (const stylesheet of globalStylesheets) {
    const css = readFileSync(stylesheet, "utf8");

    assert.match(
      css,
      /--font-sans:\s*"Helvetica Neue", "Helvetica", "Arial", sans-serif;/,
      `${stylesheet} should define Helvetica Neue as the sans font`,
    );
    assert.match(
      css,
      /body\s*\{[\s\S]*font-family:\s*var\(--font-sans\);/,
      `${stylesheet} should apply Helvetica Neue to body text`,
    );
    assert.match(
      css,
      /button,\s*\ninput,\s*\ntextarea,\s*\nselect\s*\{[\s\S]*font-family:\s*var\(--font-sans\);/,
      `${stylesheet} should apply Helvetica Neue to control text`,
    );
  }
});
