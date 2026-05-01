import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const routePath = "app/products/page.tsx";
const groupedRoutePath = "app/nmdc-group/products/page.tsx";
const productDetailRoutePath = "app/products/[slug]/page.tsx";
const pagePath = "features/landing-pages/nmdc-group/NmdcGroupProductsPage.tsx";
const detailPagePath =
  "features/landing-pages/nmdc-group/NmdcGroupProductDetailPage.tsx";
const productsContentPath = "features/landing-pages/nmdc-group/productsContent.ts";
const detailContentPath =
  "features/landing-pages/nmdc-group/productDetailsContent.ts";
const landingContentPath = "features/landing-pages/nmdc-group/content.ts";

const productDetailSlugs = [
  "marine-vessels",
  "mussafah-yard",
  "coastal-hydrodynamic-center",
  "hail-ghasha-gop",
  "hail-ghasha-pau",
  "3d-printed-artificial-reefs",
  "multicat-21",
  "valve",
  "pipe-coating-materials",
  "whipstock-system",
  "esp-pump",
  "safeen-green",
  "safeen-nav",
];

test("NMDC Group products page route is available from root and legacy nmdc-group path redirects", () => {
  assert.ok(existsSync(routePath), "products route should exist");
  assert.ok(existsSync(groupedRoutePath), "nmdc-group products route should exist");
  assert.ok(existsSync(pagePath), "products page component should exist");
  assert.ok(existsSync(productsContentPath), "products page content should exist");

  const route = readFileSync(routePath, "utf8");
  const groupedRoute = readFileSync(groupedRoutePath, "utf8");
  const landingContent = readFileSync(landingContentPath, "utf8");

  assert.match(route, /NmdcGroupProductsPage/);
  assert.match(route, /nmdcGroupProductsMetadata/);
  assert.match(groupedRoute, /permanentRedirect/);
  assert.match(groupedRoute, /permanentRedirect\("\/products"\)/);
  assert.doesNotMatch(groupedRoute, /NmdcGroupProductsPage/);
  assert.match(landingContent, /href:\s*"\/products"/);
});

test("NMDC Group products desktop layout follows the supplied three-column showcase design", () => {
  assert.ok(existsSync(pagePath), "products page component should exist");
  const page = readFileSync(pagePath, "utf8");
  const content = readFileSync(productsContentPath, "utf8");

  assert.match(content, /Products to be Showcased/);
  assert.match(page, /md:grid-cols-3/);
  assert.match(page, /hidden md:grid/);
  assert.match(page, /md:hidden/);
  assert.match(page, /Back/);
  assert.doesNotMatch(page, /\b(?:lg|xl|2xl):/);

  for (const product of [
    "Marine vessels",
    "Mussafah Yard",
    "Coastal and Hydrodynamic Center",
    "Hail and Ghasha - GOP",
    "Hail and Ghasha - PAU",
    "3D Printed Artificial Reefs",
    "Multicad - 21",
    "Valve",
    "Pipe Coating Materials",
    "Whipstock System",
    "ESP Pump",
    "Safeen Green",
    "Safeen NAV",
  ]) {
    assert.match(content, new RegExp(product.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("NMDC Group products mobile layout contains the PDF descriptive showcase groups", () => {
  assert.ok(existsSync(productsContentPath), "products page content should exist");
  const content = readFileSync(productsContentPath, "utf8");

  for (const expected of [
    "Marine Vessels and Its Capabilities",
    "Coastal & Hydrodynamic Center",
    "Caissons Application",
    "Mussafah Yard and Its Products",
    "Hail & Ghasha Development Project Offshore Facilities Ghasha Offshore Processing Plant",
    "Hail & Ghasha Development Project Offshore Facilities Process Assembled Unit",
    "3D Printed Artificial Reefs",
    "Multicat 21 (M21) Vessel",
    "Safeen NAV",
    "Whipstock System",
  ]) {
    assert.match(content, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("NMDC Group product cards link to canonical showcased product detail pages", () => {
  assert.ok(existsSync(productsContentPath), "products page content should exist");
  assert.ok(existsSync(pagePath), "products page component should exist");

  const content = readFileSync(productsContentPath, "utf8");
  const page = readFileSync(pagePath, "utf8");

  for (const slug of productDetailSlugs) {
    assert.match(content, new RegExp(`href:\\s*"\\/products\\/${slug}"`));
  }

  assert.match(page, /<Link[\s\S]*href=\{product\.href\}/);
  assert.match(page, /aria-label=\{`Open \$\{product\.title\}`\}/);
  assert.match(page, /<Link[\s\S]*href=\{card\.href\}/);
  assert.doesNotMatch(page, /\b(?:lg|xl|2xl):/);
});

test("NMDC Group product detail pages are generated for every showcased product design", () => {
  assert.ok(existsSync(productDetailRoutePath), "product detail route should exist");
  assert.ok(existsSync(detailPagePath), "product detail page component should exist");
  assert.ok(existsSync(detailContentPath), "product detail content should exist");

  const route = readFileSync(productDetailRoutePath, "utf8");
  const detailPage = readFileSync(detailPagePath, "utf8");
  const detailContent = readFileSync(detailContentPath, "utf8");

  assert.match(route, /generateStaticParams/);
  assert.match(route, /nmdcGroupProductDetailSlugs/);
  assert.match(route, /getNmdcGroupProductDetailBySlug/);
  assert.match(route, /notFound\(\)/);

  assert.match(detailPage, /NmdcGroupProductDetailPage/);
  assert.match(detailPage, /href="\/products"/);
  assert.match(detailPage, /md:grid-cols-\[/);
  assert.match(detailPage, /md:hidden/);
  assert.match(detailPage, /hidden md:/);
  assert.match(detailPage, /ProductQrCode/);
  assert.doesNotMatch(detailPage, /\b(?:lg|xl|2xl):/);

  for (const slug of productDetailSlugs) {
    assert.match(detailContent, new RegExp(`slug:\\s*"${slug}"`));
  }

  for (const expectedTitle of [
    "NMDC Dredging and Marine | Marine Vessels",
    "Mussafah Yard and Its Products",
    "NMDC Energy | Hail and Ghasha Development Project",
    "NMDC Infra | 3d Printed Artificial Reefs",
    "EMDAD | Whipstock",
    "Safeen Subsea | Safeen NAV",
  ]) {
    assert.match(detailContent, new RegExp(expectedTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("Mussafah Yard product detail follows the supplied desktop Figma layout", () => {
  assert.ok(existsSync(detailPagePath), "product detail page component should exist");
  assert.ok(existsSync(detailContentPath), "product detail content should exist");

  const detailPage = readFileSync(detailPagePath, "utf8");
  const detailContent = readFileSync(detailContentPath, "utf8");

  assert.match(detailContent, /slug:\s*"mussafah-yard"[\s\S]*layout:\s*"mussafah-yard"/);
  assert.match(detailContent, /mussafah-yard-detail\.webp/);
  assert.match(detailContent, /"The Company owns four \(4\) fabrication yards namely: Mussafah Yard/);
  assert.match(detailContent, /"165,000 Metric Tons of steel produced in Yards\."/);
  assert.match(detailContent, /"Pipe Coating"/);

  assert.match(detailPage, /detail\.slug === "mussafah-yard"/);
  assert.match(detailPage, /MussafahYardDetailLayout/);
  assert.match(detailPage, /md:min-h-\[1390px\]/);
  assert.match(detailPage, /md:grid-cols-\[641px_583px\]/);
  assert.match(detailPage, /md:h-\[846px\]/);
  assert.match(detailPage, /detail\.fullTitle/);
  assert.match(detailPage, /logo-energy\.webp/);
  assert.doesNotMatch(detailPage, /\b(?:lg|xl|2xl):/);
});

test("Marine Vessels product detail follows the supplied desktop vessel card grid design", () => {
  assert.ok(existsSync(detailPagePath), "product detail page component should exist");
  assert.ok(existsSync(detailContentPath), "product detail content should exist");

  const detailPage = readFileSync(detailPagePath, "utf8");
  const detailContent = readFileSync(detailContentPath, "utf8");

  assert.match(detailContent, /slug:\s*"marine-vessels"[\s\S]*layout:\s*"marine-vessels"/);
  assert.match(detailContent, /vesselCards:\s*\[/);

  for (const vessel of [
    "Al Yassat",
    "Al Sadr",
    "Al Mirfa",
    "Jananah",
    "Sarb",
    "Ghasha",
  ]) {
    assert.match(detailContent, new RegExp(`name:\\s*"${vessel}"`));
  }

  for (const asset of [
    "public/images/landing/products/marine-vessel-al-yassat.jpg",
    "public/images/landing/products/marine-vessel-al-sadr.jpg",
    "public/images/landing/products/marine-vessel-al-mirfa.jpg",
    "public/images/landing/products/marine-vessel-jananah.jpg",
    "public/images/landing/products/marine-vessel-sarb.jpg",
    "public/images/landing/products/marine-vessel-ghasha.jpg",
  ]) {
    assert.ok(existsSync(asset), `${asset} should exist`);
  }

  assert.match(detailPage, /detail\.slug === "marine-vessels"/);
  assert.match(detailPage, /MarineVesselsDetailLayout/);
  assert.match(detailPage, /MarineVesselCard/);
  assert.match(detailPage, /md:min-h-\[1728px\]/);
  assert.match(detailPage, /md:grid-cols-3/);
  assert.match(detailPage, /md:h-\[421px\]/);
  assert.match(detailPage, /bg-\[#22475b\]\/92/);
  assert.match(detailPage, /detail\.vesselCards\.map/);
  assert.match(detailPage, /vessel\.specs\.map/);
  assert.match(detailPage, /ProductQrImage/);
  assert.match(detailPage, /energyProductFooterLinks/);
  assert.match(detailPage, /logo-energy\.webp/);
  assert.doesNotMatch(detailPage, /\b(?:lg|xl|2xl):/);
});

test("Coastal and Hydrodynamic Center product detail follows the supplied desktop collage design", () => {
  assert.ok(existsSync(detailPagePath), "product detail page component should exist");
  assert.ok(existsSync(detailContentPath), "product detail content should exist");

  const detailPage = readFileSync(detailPagePath, "utf8");
  const detailContent = readFileSync(detailContentPath, "utf8");

  assert.match(
    detailContent,
    /slug:\s*"coastal-hydrodynamic-center"[\s\S]*layout:\s*"coastal-hydrodynamic-center"/,
  );
  assert.match(detailContent, /collageImage:\s*\{/);
  assert.match(detailContent, /coastal-hydrodynamic-center\.webp/);
  assert.match(detailContent, /coastal-hydrodynamic-collage\.png/);
  assert.match(detailContent, /"The state-of-the-art NMDC D&M Coastal and Hydrodynamic Center/);
  assert.match(detailContent, /"Play virtual tour"/);

  for (const asset of [
    "public/images/landing/products/coastal-hydrodynamic-center.webp",
    "public/images/landing/products/coastal-hydrodynamic-collage.png",
  ]) {
    assert.ok(existsSync(asset), `${asset} should exist`);
  }

  assert.match(detailPage, /detail\.slug === "coastal-hydrodynamic-center"/);
  assert.match(detailPage, /CoastalHydrodynamicDetailLayout/);
  assert.match(detailPage, /detail\.collageImage\.src/);
  assert.match(detailPage, /md:min-h-\[1458px\]/);
  assert.match(detailPage, /md:grid-cols-\[641px_583px\]/);
  assert.match(detailPage, /md:h-\[862px\]/);
  assert.match(detailPage, /ProductQrImage/);
  assert.match(detailPage, /energyProductFooterLinks/);
  assert.match(detailPage, /logo-energy\.webp/);
  assert.doesNotMatch(detailPage, /\b(?:lg|xl|2xl):/);
});
