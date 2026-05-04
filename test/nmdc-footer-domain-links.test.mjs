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

const footerPlacementFiles = [
  {
    name: "Shared NMDC",
    componentPath: "app/components/landing/NmdcFooter.tsx",
  },
  ...standaloneFooters.map((footer) => ({
    name: footer.name,
    componentPath: footer.componentPath,
  })),
];

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractBlock(source, marker) {
  const match = source.match(new RegExp(`${marker}:\\s*\\[(?<block>[\\s\\S]*?)\\]\\s*,`));
  assert.ok(match?.groups?.block, `${marker} should be present`);
  return match.groups.block;
}

function extractFooterComponentSource(componentPath, source) {
  if (componentPath === "apps/nmdc-infra/app/pages.tsx") {
    const match = source.match(/function InfraFooter\(\) \{[\s\S]*?\n\}\n\nfunction InfraProductCard/);
    assert.ok(match, "NMDC Infra footer source should be extractable");
    return match[0];
  }

  if (componentPath === "apps/nmdc-energy/app/pages.tsx") {
    const match = source.match(/function EnergyFooter\(\) \{[\s\S]*?\n\}\n\nexport function NmdcEnergyOverviewPage/);
    assert.ok(match, "NMDC Energy footer source should be extractable");
    return match[0];
  }

  return source;
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

test("all footers use the same desktop placement shell", () => {
  for (const footer of footerPlacementFiles) {
    const component = readFileSync(footer.componentPath, "utf8");

    assert.match(
      component,
      /md:grid-cols-\[365px_360px_minmax\(0,1fr\)\]/,
      `${footer.name} footer should use the shared desktop column placement`,
    );
    assert.match(
      component,
      /md:grid-rows-\[1fr_auto\]/,
      `${footer.name} footer should keep the copyright in a bottom row`,
    );
    assert.match(
      component,
      /md:gap-0/,
      `${footer.name} footer should align columns without desktop gaps`,
    );
    assert.match(
      component,
      /md:border-x/,
      `${footer.name} footer nav should keep the same center-column separators`,
    );
    assert.match(
      component,
      /md:col-span-3/,
      `${footer.name} footer copyright should span the three columns`,
    );
  }
});

test("shared NMDC footer centers the navigation with mx-auto without padding", () => {
  const component = readFileSync("app/components/landing/NmdcFooter.tsx", "utf8");
  const match = component.match(
    /<nav\s+aria-label="Footer navigation"\s+className="(?<className>[^"]+)"/,
  );

  assert.ok(match?.groups?.className, "shared footer navigation should expose its classes");

  const navClassName = match.groups.className;
  assert.match(navClassName, /md:mx-auto/);
  assert.match(navClassName, /md:w-fit/);
  assert.doesNotMatch(navClassName, /md:mx-auto\]/);
  assert.doesNotMatch(navClassName, /(?:^|\s)(?:px|md:px)-/);
});

test("all footers use 16px mobile typography", () => {
  for (const footer of footerPlacementFiles) {
    const component = extractFooterComponentSource(
      footer.componentPath,
      readFileSync(footer.componentPath, "utf8"),
    );
    const mobileFontSizes = [
      ...component.matchAll(/(?<!md:)text-\[(?<size>\d+)px\]/g),
    ].map((match) => match.groups.size);

    assert.ok(mobileFontSizes.length >= 6, `${footer.name} footer should define mobile font sizes`);
    assert.deepEqual(
      [...new Set(mobileFontSizes)],
      ["16"],
      `${footer.name} footer mobile font sizes should all be 16px`,
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
