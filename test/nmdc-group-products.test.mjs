import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const routePath = "app/products/page.tsx";
const groupedRoutePath = "app/nmdc-group/products/page.tsx";
const pagePath = "features/landing-pages/nmdc-group/NmdcGroupProductsPage.tsx";
const productsContentPath = "features/landing-pages/nmdc-group/productsContent.ts";
const landingContentPath = "features/landing-pages/nmdc-group/content.ts";

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
  assert.match(landingContent, /href:\s*"\/nmdc-group\/products"/);
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
