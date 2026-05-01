import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const standaloneFooters = [
  {
    name: "NMDC Energy",
    contentPath: "apps/nmdc-energy/content/content.ts",
    componentPath: "apps/nmdc-energy/app/pages.tsx",
    navigationMarkers: ["navigationLinks", "mobileNavigationLinks"],
    businessLabels: [
      "NMDC Dredging & Marine",
      "NMDC Energy",
      "NMDC Engineering",
      "NMDC Infra",
      "NMDC LTS",
    ],
  },
  {
    name: "NMDC Infra",
    contentPath: "apps/nmdc-infra/content/content.ts",
    componentPath: "apps/nmdc-infra/app/pages.tsx",
    navigationMarkers: ["navigationLinks", "mobileNavigationLinks"],
    businessLabels: [
      "NMDC Dredging & Marine",
      "NMDC Energy",
      "NMDC Engineering",
      "NMDC Infra",
      "NMDC LTS",
    ],
  },
  {
    name: "NMDC LTS",
    contentPath: "apps/nmdc-lts/content/content.ts",
    componentPath: "apps/nmdc-lts/components/Footer.tsx",
    navigationMarkers: ["desktopNav", "mobileNav"],
    businessLabels: [
      "NMDC Dredging & Marine",
      "NMDC Energy",
      "NMDC Engineering",
      "NMDC Infra",
      "NMDC LTS",
    ],
  },
  {
    name: "NMDC Dredging & Marine",
    contentPath: "apps/nmdc-dredging-marine/content/content.ts",
    componentPath: "apps/nmdc-dredging-marine/components/Footer.tsx",
    navigationMarkers: ["navigationLinks"],
    businessLabels: [
      "NMDC Dredging & Marine",
      "NMDC Energy",
      "NMDC Engineering",
      "NMDC Infra",
      "NMDC LTS",
    ],
  },
];

const expectedGroupFooterRoutes = [
  ["/nmdc-overview", "NMDC Overview"],
  ["/people-and-culture", "People & Culture"],
  ["/technology", "Technology & Ai"],
  ["/safeen-subsea", "Safeen Subsea"],
];

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractBlock(source, marker) {
  const match = source.match(new RegExp(`${marker}:\\s*\\[(?<block>[\\s\\S]*?)\\]\\s*,`));
  assert.ok(match?.groups?.block, `${marker} should be present`);
  return match.groups.block;
}

test("standalone footer business lists link to the correct app domains", () => {
  for (const footer of standaloneFooters) {
    const content = readFileSync(footer.contentPath, "utf8");
    const component = readFileSync(footer.componentPath, "utf8");
    const businesses = extractBlock(content, "businesses");

    for (const label of footer.businessLabels) {
      assert.match(
        businesses,
        new RegExp(`label:\\s*"${escapeRegex(label)}"[\\s\\S]*?href:`),
        `${footer.name} footer business "${label}" should have an href`,
      );
    }

    assert.match(
      component,
      /href=\{business\.href\}/,
      `${footer.name} footer should render business hrefs`,
    );
  }
});

test("standalone footer navigation uses NMDC Group domain routes", () => {
  for (const footer of standaloneFooters) {
    const content = readFileSync(footer.contentPath, "utf8");

    assert.match(
      content,
      /NEXT_PUBLIC_NMDC_GROUP_APP_URL/,
      `${footer.name} footer should know the NMDC Group domain`,
    );
    assert.match(
      content,
      /withGroupAppPath/,
      `${footer.name} footer should build absolute NMDC Group routes`,
    );
    for (const marker of footer.navigationMarkers) {
      const navigation = extractBlock(content, marker);
      assert.match(
        navigation,
        /label:\s*"Home"[^}]*href:\s*withGroupAppPath\("\/"\)/,
        `${footer.name} ${marker} Home should open the NMDC Group homepage`,
      );
    }

    for (const [path, label] of expectedGroupFooterRoutes) {
      assert.match(
        content,
        new RegExp(
          `label:\\s*"${escapeRegex(label)}"[\\s\\S]*?href:\\s*withGroupAppPath\\("${escapeRegex(path)}"\\)`,
        ),
        `${footer.name} footer route "${label}" should use ${path} on the group domain`,
      );
    }

    assert.doesNotMatch(content, /href:\s*"#(?:people-culture|technology-ai|safeen-subsea|nmdc-overview|overview|marine-vessels|hydraulic-physical-model|caisson-method)?"/);
  }
});

test("standalone footer navigation keys are stable when routes repeat", () => {
  for (const footer of standaloneFooters) {
    const component = readFileSync(footer.componentPath, "utf8");

    assert.doesNotMatch(
      component,
      /key=\{link\.href\}/,
      `${footer.name} footer should not key navigation items by href alone`,
    );
  }
});

test("legacy NMDC overview footer column data does not keep placeholder business anchors", () => {
  const content = readFileSync("features/landing-pages/nmdc-overview/content.ts", "utf8");

  assert.match(content, /NEXT_PUBLIC_DREDGING_MARINE_APP_URL/);
  assert.match(content, /NEXT_PUBLIC_ENERGY_APP_URL/);
  assert.match(content, /NEXT_PUBLIC_INFRA_APP_URL/);
  assert.match(content, /NEXT_PUBLIC_LTS_APP_URL/);
  assert.match(content, /Dredging & Marine[\s\S]*?href:\s*dredgingMarineAppUrl/);
  assert.match(content, /Energy[\s\S]*?href:\s*energyAppUrl/);
  assert.match(content, /Engineering[\s\S]*?href:\s*"\/nmdc-overview"/);
  assert.match(content, /Infra[\s\S]*?href:\s*infraAppUrl/);
  assert.match(content, /LTS[\s\S]*?href:\s*ltsAppUrl/);
  assert.doesNotMatch(content, /href:\s*"#(?:dredging|energy|infra|lts)"/);
});
