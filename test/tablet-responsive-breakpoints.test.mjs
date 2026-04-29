import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import test from "node:test";

const peopleCulturePath =
  "features/landing-pages/nmdc-people-culture/NmdcPeopleCulturePage.tsx";
const technologyPath =
  "features/landing-pages/nmdc-technology/NmdcTechnologyPage.tsx";

test("tablet widths use desktop layout breakpoints without changing phone mobile styles", () => {
  const peopleCulture = readFileSync(peopleCulturePath, "utf8");
  const technology = readFileSync(technologyPath, "utf8");

  assert.match(
    peopleCulture,
    /md:mt-\[38px\] md:grid-cols-\[minmax\(0,1fr\)_minmax\(0,1fr\)\] md:gap-4/,
  );
  assert.match(technology, /md:grid-cols-2 md:gap-6/);
  assert.match(technology, /<MobileTechnologyContent \/>/);
  assert.match(technology, /md:hidden/);

  const responsiveClasses = spawnSync(
    "rg",
    [
      "-n",
      "\\b(lg|xl|2xl):",
      "app",
      "features",
      "apps",
      "--glob",
      "*.{tsx,ts,css}",
    ],
    { encoding: "utf8" },
  );

  assert.ok(
    responsiveClasses.status === 0 || responsiveClasses.status === 1,
    responsiveClasses.stderr,
  );
  assert.equal(responsiveClasses.stdout.trim(), "");
});
