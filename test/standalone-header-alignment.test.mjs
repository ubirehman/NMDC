import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const projectHeaders = [
  ["NMDC Dredging & Marine", "apps/nmdc-dredging-marine/components/Header.tsx"],
  ["NMDC Infra", "apps/nmdc-infra/components/Header.tsx"],
  ["NMDC LTS", "apps/nmdc-lts/components/Header.tsx"],
  ["NMDC Energy", "apps/nmdc-energy/components/Header.tsx"],
];

test("standalone project desktop headers center nav tabs like the NMDC Group header", () => {
  for (const [name, path] of projectHeaders) {
    const source = readFileSync(path, "utf8");

    assert.match(
      source,
      /md:absolute md:left-1\/2 md:-translate-x-1\/2/,
      `${name} desktop nav should be centered within the header`,
    );
    assert.match(
      source,
      /md:flex md:items-center md:justify-center/,
      `${name} desktop nav should align nav links around the center point`,
    );
    assert.match(
      source,
      /shrink-0 whitespace-nowrap/,
      `${name} desktop nav links should stay on one line at tablet desktop widths`,
    );
  }
});
