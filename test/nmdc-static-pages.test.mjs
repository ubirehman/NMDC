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
      "Technology & Ai",
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
  const technologyContent = readFileSync(
    "features/landing-pages/nmdc-technology/content.ts",
    "utf8",
  );
  const technologyDesign = `${technology}\n${technologyContent}`;
  const safeen = readFileSync(
    "features/landing-pages/nmdc-safeen-subsea/NmdcSafeenSubseaPage.tsx",
    "utf8",
  );

  assert.match(people, /emiratizationContent/);
  assert.match(people, /bg-\[#f5fcff\]/);
  assert.match(people, /maharaSections/);
  assert.match(people, /border-\[2px\] border-primary-sky-blue/);
  assert.match(people, /h-\[318px\]/);
  assert.match(people, /md:h-\[487px\]/);
  assert.match(people, /md:pb-\[89px\]/);
  assert.match(people, /md:hidden\" mobile/);
  assert.match(people, /mobile\s+\?\s+"h-\[177px\]/);
  assert.match(people, /px-\[15px\] py-5 md:hidden/);
  assert.match(people, /index === 0 \? "h-\[540px\]" : "h-\[320px\]"/);
  assert.match(people, /pb-\[87px\] pt-12 md:hidden/);
  assert.match(people, /lg:grid-cols-\[minmax\(0,618px\)_minmax\(0,606px\)\]/);
  assert.match(people, /lg:gap-4/);
  assert.match(people, /md:min-h-\[1159px\]/);
  assert.match(people, /md:min-h-\[177px\]/);
  assert.match(people, /md:text-\[48px\]/);
  assert.match(people, /md:h-\[610px\]/);
  assert.match(people, /showPlay=\{index === 1\}/);
  assert.match(people, /<NmdcFooter variant="compact" \/>/);
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
  assert.match(technologyDesign, /Applications in Our AI Hub/);
  assert.doesNotMatch(technologyDesign, /NMDC AI platforms/);
  assert.doesNotMatch(technology, /bg-\[#062c45\] px-5 py-10 text-white/);

  assert.match(safeen, /safeenOverview/);
  assert.match(safeen, /safeenVideo/);
  assert.match(safeen, /OUR PRODUCTS/);
  assert.doesNotMatch(safeen, /Key Facts\./);
});

test("NMDC Technology follows the supplied desktop PDF layout", () => {
  const technology = readFileSync(
    "features/landing-pages/nmdc-technology/NmdcTechnologyPage.tsx",
    "utf8",
  );
  const technologyContent = readFileSync(
    "features/landing-pages/nmdc-technology/content.ts",
    "utf8",
  );
  const technologyDesign = `${technology}\n${technologyContent}`;

  assert.match(technology, /md:h-\[487px\]/);
  assert.match(technologyDesign, /Technology &(?:amp; )?Ai/);
  assert.match(technologyDesign, /NMDC AI Hub - Empowering a Smarter, Safer and More/);
  assert.match(technology, /lg:grid-cols-\[minmax\(0,609px\)_minmax\(0,609px\)\]/);
  assert.match(technologyDesign, /Digital Integration Across NMDC/);
  assert.match(technologyDesign, /bg-\[#062c45\].*Digital Integration Across NMDC/s);
  assert.match(technologyDesign, /Applications in Our AI Hub/);
  assert.match(technologyDesign, /Know more-/);
  assert.match(technology, /technologyMedia/);
  assert.match(technology, /OverviewVideoPlayer/);
  assert.match(technology, /NmdcFooter/);
});

test("NMDC Technology follows the supplied mobile PDF layout", () => {
  const technology = readFileSync(
    "features/landing-pages/nmdc-technology/NmdcTechnologyPage.tsx",
    "utf8",
  );
  const technologyContent = readFileSync(
    "features/landing-pages/nmdc-technology/content.ts",
    "utf8",
  );
  const technologyDesign = `${technology}\n${technologyContent}`;

  assert.match(technology, /h-\[290px\].*md:h-\[487px\]/s);
  assert.match(technologyDesign, /Powering NMDC Group.*intelligent systems.*digital innovation/s);
  assert.match(technology, /MobileTechnologyContent/);
  assert.match(technology, /hidden md:block/);
  assert.match(technology, /md:hidden/);
  assert.match(technology, /technologyMedia\[0\].*h-\[207px\]/s);
  assert.match(technology, /technologyMedia\[1\].*h-\[325px\]/s);
  assert.match(technology, /MobileTechnologySection/);
  assert.match(technology, /technologySections\[0\].*OverviewVideoPlayer.*technologySections\[1\]/s);
  assert.match(technology, /break-words/);
});

test("NMDC Safeen Subsea follows the supplied desktop PDF layout", () => {
  const safeen = readFileSync(
    "features/landing-pages/nmdc-safeen-subsea/NmdcSafeenSubseaPage.tsx",
    "utf8",
  );
  const content = readFileSync(
    "features/landing-pages/nmdc-safeen-subsea/content.ts",
    "utf8",
  );

  assert.match(content, /safeenHero/);
  assert.match(content, /safeenOverview/);
  assert.match(content, /safeen-subsea-hero\.jpg/);
  assert.match(content, /specificationLabel: "View Specifications"/);
  assert.match(safeen, /SafeenProductCard/);
  assert.match(safeen, /object-cover object-bottom/);
  assert.match(safeen, /md:whitespace-nowrap/);
  assert.match(safeen, /md:h-\[487px\]/);
  assert.match(safeen, /md:text-\[48px\]/);
  assert.match(safeen, /md:grid-cols-\[minmax\(0,744px\)_438px\]/);
  assert.match(safeen, /border-y border-\[#c8d5e3\]/);
  assert.match(safeen, /bg-\[#001d2d\]/);
  assert.match(safeen, /md:grid-cols-4/);
  assert.match(safeen, /bg-\[#e5edf6\].*md:rounded-\[20px\].*md:border-\[2px\].*md:border-primary-sky-blue/s);
  assert.match(safeen, /h-\[320px\].*md:h-\[640px\]/s);
  assert.match(safeen, /bg-\[#113f57\]\/88.*md:rounded-\[22px\]/s);
  assert.match(safeen, /ArrowUpRight/);
  assert.match(safeen, /h-\[316px\].*md:h-\[480px\]/s);
});

test("NMDC Safeen Subsea follows the supplied mobile PDF layout", () => {
  const safeen = readFileSync(
    "features/landing-pages/nmdc-safeen-subsea/NmdcSafeenSubseaPage.tsx",
    "utf8",
  );

  assert.match(safeen, /h-\[318px\].*md:h-\[487px\]/s);
  assert.match(safeen, /pb-\[107px\].*md:pb-\[128px\]/s);
  assert.match(safeen, /max-w-\[320px\].*text-center.*text-\[24px\]/s);
  assert.match(safeen, /text-\[16px\] leading-6.*md:text-\[20px\]/s);
  assert.match(safeen, /min-h-\[122px\].*border-0.*md:border-\[2px\]/s);
  assert.match(safeen, /h-\[320px\].*md:h-\[640px\]/s);
  assert.match(safeen, /h-\[48px\].*min-w-\[160px\].*md:h-\[70px\]/s);
  assert.match(safeen, /text-\[14px\] leading-\[27px\].*md:text-\[18px\]/s);
  assert.match(safeen, /justify-self-center.*md:justify-self-end/s);
  assert.match(safeen, /h-\[316px\].*md:h-\[480px\]/s);
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
