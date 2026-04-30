import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const infraFiles = [
  "apps/nmdc-infra/app/page.tsx",
  "apps/nmdc-infra/app/overview/page.tsx",
  "apps/nmdc-infra/app/overview/at-a-glance/page.tsx",
  "apps/nmdc-infra/app/products/page.tsx",
  "apps/nmdc-infra/app/products/3d-printing-artificial-reefs/page.tsx",
  "apps/nmdc-infra/app/products/ebawe-anlagentechnik/page.tsx",
  "apps/nmdc-infra/app/pages.tsx",
  "apps/nmdc-infra/app/layout.tsx",
  "apps/nmdc-infra/app/globals.css",
  "apps/nmdc-infra/components/Header.tsx",
  "apps/nmdc-infra/components/InfraHomeCardRail.tsx",
  "apps/nmdc-infra/components/icons.tsx",
  "apps/nmdc-infra/content/content.ts",
  "apps/nmdc-infra/next.config.ts",
  "apps/nmdc-infra/package.json",
  "apps/nmdc-infra/postcss.config.js",
  "apps/nmdc-infra/tsconfig.json",
];

test("NMDC Infra is implemented as a separate Next.js project", () => {
  for (const file of infraFiles) {
    assert.equal(existsSync(file), true, `${file} should exist`);
  }

  assert.equal(existsSync("app/nmdc-infra/page.tsx"), false);

  const pkg = readFileSync("apps/nmdc-infra/package.json", "utf8");
  assert.match(pkg, /"name": "nmdc-infra"/);
  assert.match(pkg, /standalone\/apps\/nmdc-infra\/server\.js/);

  const nextConfig = readFileSync("apps/nmdc-infra/next.config.ts", "utf8");
  assert.match(nextConfig, /output:\s*"standalone"/);
  assert.match(nextConfig, /devIndicators:\s*false/);
});

test("NMDC Infra home follows the supplied desktop and mobile PDF theme", () => {
  const content = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-infra/app/pages.tsx", "utf8");
  const css = readFileSync("apps/nmdc-infra/app/globals.css", "utf8");
  const cards = readFileSync(
    "apps/nmdc-infra/components/InfraHomeCardRail.tsx",
    "utf8",
  );

  for (const asset of [
    "apps/nmdc-infra/public/images/infra/home-hero.jpg",
    "apps/nmdc-infra/public/images/infra/logo-infra.webp",
    "apps/nmdc-infra/public/images/infra/card-platform.jpg",
    "apps/nmdc-infra/public/images/infra/card-dredging.jpg",
    "apps/nmdc-infra/public/images/infra/card-energy.jpg",
    "apps/nmdc-infra/public/images/infra/card-lts.jpg",
    "apps/nmdc-infra/public/images/infra/card-product.jpg",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(content, /nmdcInfraContent/);
  assert.match(content, /Home/);
  assert.match(content, /NMDC Infra Overview/);
  assert.match(content, /Our Products/);
  assert.match(content, /Leading the Way/);
  assert.match(content, /World Class/);
  assert.match(content, /Construction/);
  assert.match(content, /Services/);
  assert.match(content, /Emarat Europe/);
  assert.match(content, /Visit Us/);
  assert.match(content, /NMDC Product Highlight/);
  assert.match(
    content,
    /title:\s*"NMDC Product Highlight",\s*href:\s*`\$\{groupAppUrl\}\/nmdc-group\/products`/s,
  );
  assert.match(content, /href: "\/overview"/);
  assert.match(css, /--infra-yellow:\s*#ffcf00;/);
  assert.match(css, /--color-infra-yellow:\s*#ffcf00;/);
  assert.match(page, /NmdcInfraHomePage/);
  assert.match(page, /InfraHomeCardRail/);
  assert.match(page, /<Header links=\{getInfraNavLinks\("\/"\)\} \/>/);
  assert.doesNotMatch(page, /<Header links=\{getInfraNavLinks\("\/overview"\)\} \/>/);
  assert.match(page, /min-h-\[max\(786px,100svh\)\]/);
  assert.doesNotMatch(page, /relative isolate h-\[786px\]/);
  assert.match(page, /group inline-flex items-center gap-\[3px\]/);
  assert.match(page, /h-\[49px\] w-\[174px\] items-center justify-center rounded-full bg-white/);
  assert.match(page, /size-\[49px\] items-center justify-center rounded-full bg-infra-yellow/);
  assert.match(page, /md:text-\[48px\]/);
  assert.match(page, /text-infra-yellow/);
  assert.match(page, /bg-infra-yellow/);
  assert.match(page, /md:absolute md:bottom-\[74px\] md:right-0/);
  assert.match(cards, /h-\[200px\] w-\[150px\]/);
  assert.match(cards, /function getCardId/);
  assert.match(cards, /logoFrameClassName/);
  assert.match(cards, /dm:\s*"h-\[28px\] w-\[122px\]"/);
  assert.match(cards, /energy:\s*"h-\[28px\] w-\[122px\]"/);
  assert.match(cards, /cardId === "dm" \|\| cardId === "energy"/);
  assert.match(cards, /fill/);
  assert.match(cards, /hover:border-infra-yellow/);
  assert.match(cards, /group-hover:bg-infra-yellow/);
});

test("NMDC Infra overview follows the supplied desktop PDF structure", () => {
  const content = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-infra/app/pages.tsx", "utf8");

  for (const phrase of [
    "At a Glance",
    "With advanced engineering techniques",
    "Capabilities",
    "Infrastructure Construction",
    "Energy and Utilities Construction",
    "Industrial Construction",
    "Institutional Construction",
    "Commercial Construction",
    "Residential Construction",
    "OUR VERTICALS",
    "NMDCCC",
    "LANTANIA NMDC WATER",
    "EMARAT EUROPE",
    "SECTORS SERVED",
    "Industrial & Data Centre",
    "Roads, Bridges & Tunneling",
    "Water Infrastructure",
    "Onshore Oil & Gas",
    "Piling",
    "Precast Construction & 3D Printing",
    "PROJECTS COMPLETED",
    "PRODUCTION YARDS",
    "800+",
    "200K",
    "SQUARE METER",
  ]) {
    assert.match(content, new RegExp(phrase.replace(/[&]/g, "\\$&")));
  }

  assert.match(page, /NmdcInfraOverviewPage/);
  assert.match(page, /InfraSectionHeading/);
  assert.match(page, /InfraCapabilityCard/);
  assert.match(page, /InfraVerticalCard/);
  assert.match(page, /InfraSectorCard/);
  assert.match(page, /InfraStatCard/);
  assert.match(page, /md:h-\[652px\]/);
  assert.match(page, /md:grid-cols-\[minmax\(0,520px\)_minmax\(0,659px\)\]/);
  assert.match(page, /md:grid-cols-3/);
  assert.match(page, /md:grid-cols-6/);
  assert.match(page, /bg-infra-yellow/);
  assert.match(page, /text-infra-yellow/);
});

test("NMDC Infra overview follows the supplied mobile PDF layout", () => {
  const content = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-infra/app/pages.tsx", "utf8");
  const header = readFileSync("apps/nmdc-infra/components/Header.tsx", "utf8");

  assert.match(content, /mobileParagraphs/);
  assert.match(content, /This integrated approach ensures efficient execution,/);
  assert.match(content, /mobileTitle:\s*"Capabilities"/);
  assert.match(content, /mobileNavigationLinks/);
  assert.match(content, /Technology & Ai/);
  assert.match(content, /icon:\s*"projects"/);
  assert.match(content, /icon:\s*"yard"/);
  assert.match(page, /md:hidden/);
  assert.match(page, /hidden md:block/);
  assert.match(page, /grid-cols-2 md:grid-cols-6/);
  assert.match(page, /h-\[407px\].*md:h-\[609px\]/s);
  assert.match(page, /pt-\[104px\].*md:h-\[652px\]/s);
  assert.match(page, /pt-\[40px\].*md:py-\[68px\]/s);
  assert.match(page, /text-\[9px\].*md:text-\[16px\]/s);
  assert.match(page, /size-\[214px\].*md:size-\[146px\]/s);
  assert.match(page, /md:hidden.*OverviewLineIcon/s);
  assert.match(header, /max-w-\[320px\] md:max-w-\[1240px\]/);
  assert.match(header, /md:h-\[72px\].*h-\[52px\]/s);
});

test("NMDC Infra overview read-more opens the At a Glance detail page", () => {
  const content = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-infra/app/pages.tsx", "utf8");
  const detailRoute = readFileSync(
    "apps/nmdc-infra/app/overview/at-a-glance/page.tsx",
    "utf8",
  );

  assert.match(content, /readMoreHref:\s*"\/overview\/at-a-glance"/);
  assert.match(page, /href=\{hero\.readMoreHref\}/);
  assert.match(detailRoute, /NmdcInfraAtAGlancePage/);
  assert.match(page, /function NmdcInfraAtAGlancePage/);
  assert.match(content, /backHref:\s*"\/overview"/);
  assert.match(page, /href=\{detail\.backHref\}/);
  assert.match(page, /Back/);
  assert.match(content, /state-of-the-art production plants/);
  assert.match(content, /in-house 3D printing facility/);
  assert.match(page, /md:min-h-\[825px\]/);
  assert.match(page, /md:pt-\[182px\]/);
  assert.match(page, /md:items-start/);
  assert.match(page, /md:grid-cols-\[minmax\(0,570px\)_minmax\(0,659px\)\]/);
  assert.match(page, /<InfraFooter \/>/);
});

test("NMDC Infra At a Glance detail follows the supplied mobile PDF layout", () => {
  const page = readFileSync("apps/nmdc-infra/app/pages.tsx", "utf8");
  const header = readFileSync("apps/nmdc-infra/components/Header.tsx", "utf8");

  assert.match(page, /hidden md:inline-flex/);
  assert.match(page, /mobileSize="large"/);
  assert.match(page, /pt-\[157px\].*md:min-h-\[825px\]/s);
  assert.match(page, /pb-\[20px\].*md:pb-\[56px\]/s);
  assert.match(page, /text-\[20px\].*md:text-\[28px\]/s);
  assert.match(page, /mt-\[19px\].*md:text-\[64px\]/s);
  assert.match(page, /text-\[15px\] font-normal leading-\[22px\].*md:text-\[20px\]/s);
  assert.match(page, /h-\[226px\].*md:h-\[393px\]/s);
  assert.match(page, /gap-\[42px\].*md:gap-\[11px\]/s);
  assert.match(header, /mobileSize/);
  assert.match(header, /top-8.*top-\[25px\]/s);
  assert.match(header, /h-\[62px\].*h-\[52px\]/s);
});

test("NMDC Infra products follows the supplied desktop and mobile PDF layouts", () => {
  const content = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-infra/app/pages.tsx", "utf8");

  for (const asset of [
    "apps/nmdc-infra/public/images/infra/products-hero.jpg",
    "apps/nmdc-infra/public/images/infra/product-3d-artificial-reefs.png",
    "apps/nmdc-infra/public/images/infra/product-ebawe-anlagentechnik.png",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(content, /products:\s*\{/);
  assert.match(content, /hero:\s*\{/);
  assert.match(content, /items:\s*\[/);
  assert.match(content, /3D Printing Of/);
  assert.match(content, /Artificial Reefs/);
  assert.match(content, /Ebawe/);
  assert.match(content, /Anlagentechnik/);
  assert.match(content, /href:\s*"\/products\/ebawe-anlagentechnik"/);
  assert.match(page, /function InfraProductCard/);
  assert.match(page, /NmdcInfraProductsPage/);
  assert.doesNotMatch(page, /NmdcInfraProductsPage\(\)[\s\S]*?<InfraInteriorPage/);
  assert.match(page, /mobileSize="large"/);
  assert.match(page, /h-\[317px\].*md:h-\[485px\]/s);
  assert.match(page, /text-\[40px\].*md:text-\[48px\]/s);
  assert.match(page, /bg-white px-5 pb-\[34px\] pt-\[36px\].*md:pb-\[110px\] md:pt-\[76px\]/s);
  assert.match(page, /grid gap-\[26px\].*md:grid-cols-2 md:gap-\[34px\]/s);
  assert.match(page, /h-\[412px\].*md:h-\[500px\]/s);
  assert.match(page, /rounded-\[34px\].*md:rounded-\[42px\]/s);
  assert.match(page, /size-\[79px\].*md:size-\[96px\]/s);
  assert.match(page, /<InfraFooter \/>/);
});

test("NMDC Infra 3D printed reefs product card opens the supplied detail page", () => {
  const content = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-infra/app/pages.tsx", "utf8");
  const detailRoute = readFileSync(
    "apps/nmdc-infra/app/products/3d-printing-artificial-reefs/page.tsx",
    "utf8",
  );

  for (const asset of [
    "apps/nmdc-infra/public/images/infra/product-3d-reefs-detail.jpg",
    "apps/nmdc-infra/public/images/infra/product-3d-reefs-video.jpg",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(content, /href:\s*"\/products\/3d-printing-artificial-reefs"/);
  assert.match(detailRoute, /NmdcInfraArtificialReefsPage/);
  assert.match(page, /function NmdcInfraArtificialReefsPage/);
  assert.match(content, /detail:\s*\{/);
  assert.match(content, /Customized Complexity/);
  assert.match(content, /Sustainable Materials/);
  assert.match(content, /Enhanced Performance/);
  assert.match(content, /Research Optimization/);
  assert.match(content, /30-50% higher marine biodiversity/);
  assert.match(page, /href=\{detail\.backHref\}/);
  assert.match(page, /data-product-detail-hero/);
  assert.match(page, /h-\[317px\].*md:h-\[485px\]/s);
  assert.match(page, /pt-\[35px\].*md:pt-\[64px\]/s);
  assert.match(page, /md:grid-cols-\[minmax\(0,760px\)_minmax\(0,399px\)\]/);
  assert.match(page, /h-\[342px\].*md:h-\[284px\]/s);
  assert.match(page, /h-\[321px\].*md:h-\[625px\]/s);
  assert.match(page, /grid gap-\[12px\].*md:grid-cols-2 md:gap-\[16px\]/s);
  assert.match(page, /h-\[203px\].*md:h-\[478px\]/s);
  assert.match(page, /<InfraFooter \/>/);
});

test("NMDC Infra Ebawe product card opens the supplied detail page", () => {
  const content = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");
  const page = readFileSync("apps/nmdc-infra/app/pages.tsx", "utf8");
  const detailRoute = readFileSync(
    "apps/nmdc-infra/app/products/ebawe-anlagentechnik/page.tsx",
    "utf8",
  );

  for (const asset of [
    "apps/nmdc-infra/public/images/infra/product-ebawe-detail.jpg",
    "apps/nmdc-infra/public/images/infra/product-ebawe-gallery.jpg",
    "apps/nmdc-infra/public/images/infra/product-ebawe-video.jpg",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
  }

  assert.match(content, /href:\s*"\/products\/ebawe-anlagentechnik"/);
  assert.match(detailRoute, /NmdcInfraEbawePage/);
  assert.match(page, /function NmdcInfraEbawePage/);
  assert.match(page, /function NmdcInfraProductDetailPage/);
  assert.match(content, /ebaweDetail:\s*\{/);
  assert.match(content, /EBAWE ANLAGENTECHNIK/);
  assert.match(content, /state-of-the-art carousel line/);
  assert.match(content, /pre-stressed hollow core slabs/);
  assert.match(content, /45 pallets from Ebawe Anlagen Technik/);
  assert.match(content, /multi-step process ensures each wall/);
  assert.match(content, /introLayout:\s*"wideImage"/);
  assert.match(page, /const isWideImageIntro = detail\.introLayout === "wideImage"/);
  assert.match(page, /data-product-detail-intro/);
  assert.match(page, /md:grid-cols-\[minmax\(0,700px\)_minmax\(0,528px\)\]/);
  assert.match(page, /md:whitespace-nowrap/);
  assert.match(page, /md:h-\[356px\] md:rounded-\[22px\]/);
  assert.match(page, /md:max-w-\[650px\]/);
  assert.match(page, /data-product-detail-rule/);
  assert.match(page, /detail\.galleryImage/);
  assert.match(page, /detail\.video/);
  assert.match(page, /detail\.features && detail\.features\.length > 0/);
  assert.match(page, /data-product-detail-gallery/);
  assert.match(page, /data-product-detail-video/);
  assert.match(page, /h-\[246px\].*md:h-\[625px\]/s);
  assert.match(page, /h-\[319px\].*md:h-\[478px\]/s);
});

test("NMDC Infra is wired into Docker and the NMDC Group card", () => {
  const rootPkg = readFileSync("package.json", "utf8");
  const dockerfile = readFileSync("Dockerfile", "utf8");
  const compose = readFileSync("compose.yml", "utf8");
  const copyScript = readFileSync("scripts/copy-standalone-assets.mjs", "utf8");
  const groupContent = readFileSync(
    "features/landing-pages/nmdc-group/content.ts",
    "utf8",
  );

  assert.match(rootPkg, /"dev:infra"/);
  assert.match(rootPkg, /"build:infra"/);
  assert.match(rootPkg, /"start:infra"/);
  assert.match(rootPkg, /3122/);
  assert.match(rootPkg, /NEXT_PUBLIC_INFRA_APP_URL/);
  assert.match(dockerfile, /NEXT_PUBLIC_INFRA_APP_URL="http:\/\/localhost:3122"/);
  assert.match(dockerfile, /EXPOSE 3120 3121 3122/);
  assert.match(dockerfile, /NMDC Infra/);
  assert.match(compose, /NEXT_PUBLIC_INFRA_APP_URL: "http:\/\/localhost:3122"/);
  assert.match(compose, /3122:3122/);
  assert.match(copyScript, /infra:/);
  assert.match(copyScript, /nmdc-infra/);
  assert.match(groupContent, /NEXT_PUBLIC_INFRA_APP_URL/);
  assert.match(groupContent, /href: infraAppUrl/);
});
