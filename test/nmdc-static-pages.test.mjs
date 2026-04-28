import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const pages = [
  {
    name: "people and culture",
    route: "app/nmdc-group/people-and-culture/page.tsx",
    feature: "features/landing-pages/nmdc-people-culture/NmdcPeopleCulturePage.tsx",
    content: "features/landing-pages/nmdc-people-culture/content.ts",
    component: "NmdcPeopleCulturePage",
    phrases: [
      "NMDC PEOPLE",
      "National Talent & Emiratization Enablement",
      "Masar programm for UAE nationals",
      "Mahara Fresh Graduate Development Program",
    ],
  },
  {
    name: "technology",
    route: "app/nmdc-group/technology/page.tsx",
    feature: "features/landing-pages/nmdc-technology/NmdcTechnologyPage.tsx",
    content: "features/landing-pages/nmdc-technology/content.ts",
    component: "NmdcTechnologyPage",
    phrases: [
      "Technology & AI",
      "NMDC AI Hub",
      "Digital Integration Across NMDC",
      "Oracle Fusion Procurement & Supply Chain AI Platform",
    ],
  },
  {
    name: "safeen subsea",
    route: "app/nmdc-group/safeen-subsea/page.tsx",
    feature: "features/landing-pages/nmdc-safeen-subsea/NmdcSafeenSubseaPage.tsx",
    content: "features/landing-pages/nmdc-safeen-subsea/content.ts",
    component: "NmdcSafeenSubseaPage",
    phrases: [
      "Safeen Subsea & AD Ports JV.",
      "29 Years of Service Legacy",
      "Capabilities",
      "Safeen Green",
      "Safeen NAV",
    ],
  },
];

test("NMDC static pages have app routes and feature modules", () => {
  for (const page of pages) {
    assert.equal(existsSync(page.route), true, `${page.route} should exist`);
    assert.match(readFileSync(page.route, "utf8"), new RegExp(page.component));
    assert.equal(existsSync(page.feature), true, `${page.feature} should exist`);
    assert.equal(existsSync(page.content), true, `${page.content} should exist`);
  }
});

test("NMDC static pages include the Figma export content", () => {
  for (const page of pages) {
    const feature = readFileSync(page.feature, "utf8")
      .replaceAll("&amp;", "&")
      .replaceAll("&apos;", "'");
    const content = readFileSync(page.content, "utf8")
      .replaceAll("&amp;", "&")
      .replaceAll("&apos;", "'");
    for (const phrase of page.phrases) {
      assert.match(`${feature}\n${content}`, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    }
  }
});

test("inner NMDC pages follow the PDF section order", () => {
  const people = readFileSync(
    "features/landing-pages/nmdc-people-culture/NmdcPeopleCulturePage.tsx",
    "utf8",
  );
  const technology = readFileSync(
    "features/landing-pages/nmdc-technology/NmdcTechnologyPage.tsx",
    "utf8",
  );
  const safeen = readFileSync(
    "features/landing-pages/nmdc-safeen-subsea/NmdcSafeenSubseaPage.tsx",
    "utf8",
  );

  assert.match(people, /emiratizationContent/);
  assert.match(people, /bg-\[#f5fcff\]/);
  assert.match(people, /maharaSections/);
  assert.match(people, /border-\[2px\] border-primary-sky-blue/);
  assert.match(people, /(?:h-\[321px\]|h-80\.25)/);
  assert.match(people, /md:h-\[265px\]/);
  assert.doesNotMatch(people, /mt-48/);
  assert.match(people, /<Header/);
  assert.match(people, /nmdcPeopleCultureNavLinks/);
  assert.match(people, /masarProgramIntro/);
  assert.match(people, /MobileMaharaCard/);
  assert.match(people, /MobileMediaGallery/);
  assert.match(people, /peopleCultureGallery\.slice\(0, 2\)/);
  assert.match(people, /peopleCultureMobileGallery/);
  assert.doesNotMatch(people, /shadow-\[0_24px_70px/);

  assert.match(technology, /bg-\[#f4f7fa\]/);
  assert.match(technology, /NMDC AI platforms/);
  assert.doesNotMatch(technology, /bg-\[#062c45\] px-5 py-10 text-white/);

  assert.match(safeen, /bg-white px-5 py-10 md:px-10 md:py-12/);
  assert.match(safeen, /safeen-vessel\.jpg/);
  assert.match(safeen, /OUR PRODUCTS/);
  assert.doesNotMatch(safeen, /Key Facts\./);
});

test("landing navigation targets every implemented NMDC group page", () => {
  const groupContent = readFileSync("features/landing-pages/nmdc-group/content.ts", "utf8");
  const overviewContent = readFileSync("features/landing-pages/nmdc-overview/content.ts", "utf8");
  for (const href of [
    "/nmdc-group/nmdc-overview",
    "/nmdc-group/people-and-culture",
    "/nmdc-group/technology",
    "/nmdc-group/safeen-subsea",
  ]) {
    assert.match(groupContent, new RegExp(href));
    assert.match(overviewContent, new RegExp(href));
  }
});

test("shared NMDC footer exposes the designed email columns", () => {
  const footerPath = "app/components/landing/NmdcFooter.tsx";
  assert.equal(existsSync(footerPath), true);
  const footer = `${readFileSync(footerPath, "utf8")}\n${readFileSync(
    "app/components/landing/nmdcShared.ts",
    "utf8",
  )}`;
  assert.match(footer, /General inquiries/);
  assert.match(footer, /Commercial inquiries/);
  assert.match(footer, /Vendors registration/);
  assert.match(footer, /businessDotColors/);
  assert.match(footer, /socialLinks/);
  assert.match(footer, /© Copyright, All rights reserved by NMDC Group\./);
});
