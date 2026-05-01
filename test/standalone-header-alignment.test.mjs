import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const projectHeaders = [
  [
    "NMDC Dredging & Marine",
    "apps/nmdc-dredging-marine/components/Header.tsx",
    /fixed inset-x-0 top-6 z-\[100\] flex justify-center px-5 md:top-8 md:px-10/,
  ],
  [
    "NMDC Infra",
    "apps/nmdc-infra/components/Header.tsx",
    /fixed inset-x-0 z-\[100\] flex justify-center px-5 md:top-8 md:px-10/,
  ],
  [
    "NMDC LTS",
    "apps/nmdc-lts/components/Header.tsx",
    /fixed inset-x-0 top-\[25px\] z-\[100\] flex justify-center px-5 md:top-8 md:px-10/,
  ],
  [
    "NMDC Energy",
    "apps/nmdc-energy/components/Header.tsx",
    /fixed inset-x-0 top-\[25px\] z-\[100\] flex justify-center px-5 md:top-8 md:px-10/,
  ],
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

test("standalone project headers stay fixed while preserving design top offsets", () => {
  for (const [name, path, positionPattern] of projectHeaders) {
    const source = readFileSync(path, "utf8");

    assert.match(
      source,
      positionPattern,
      `${name} header should remain pinned without changing its top offset`,
    );
  }
});

test("standalone project headers render through the document body layer", () => {
  for (const [name, path] of projectHeaders) {
    const source = readFileSync(path, "utf8");

    assert.match(source, /createPortal/, `${name} header should escape page stacking contexts`);
    assert.match(source, /useEffect/, `${name} header should mount its body portal on the client`);
    assert.match(source, /document\.body/, `${name} header should portal into document.body`);
    assert.match(
      source,
      /portalTarget \? createPortal\(headerContent, portalTarget\) : headerContent/,
      `${name} header should fall back to inline SSR markup before mounting`,
    );
  }
});
