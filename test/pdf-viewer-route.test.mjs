import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const pdfViewerRoutePath = "app/pdf-viewer/page.tsx";
const safeenPagePath =
  "features/landing-pages/nmdc-safeen-subsea/NmdcSafeenSubseaPage.tsx";
const safeenContentPath = "features/landing-pages/nmdc-safeen-subsea/content.ts";

test("PDF viewer route embeds a local PDF path from search params", () => {
  assert.equal(existsSync(pdfViewerRoutePath), true);

  const route = readFileSync(pdfViewerRoutePath, "utf8");

  assert.match(route, /type PdfViewerSearchParams = Promise/);
  assert.match(route, /searchParams:\s*PdfViewerSearchParams/);
  assert.match(route, /function getSafePdfPath/);
  assert.match(route, /startsWith\(`\$\{allowedPath\}\/`\)/);
  assert.match(route, /toLowerCase\(\)\.endsWith\("\.pdf"\)/);
  assert.match(route, /NEXT_PUBLIC_DREDGING_MARINE_APP_URL/);
  assert.match(route, /NEXT_PUBLIC_DREDGING_MARINE_BASE_PATH/);
  assert.match(route, /function getAllowedPdfOrigins/);
  assert.match(route, /function getAllowedPdfPaths/);
  assert.match(route, /new URL\(filePath\)/);
  assert.match(route, /allowedPdfPaths\.some/);
  assert.match(route, /allowedPdfOrigins\.has\(pdfUrl\.origin\)/);
  assert.match(route, /function getAllowedReturnOrigins/);
  assert.match(route, /allowedReturnOrigins\.has\(returnUrl\.origin\)/);
  assert.match(route, /includes\("\.\."\)/);
  assert.match(route, /<iframe/);
  assert.match(route, /src=\{pdfPath\}/);
  assert.match(route, /PDF file unavailable/);
});

test("Safeen specification buttons pass their PDF file path to the viewer", () => {
  const page = readFileSync(safeenPagePath, "utf8");
  const content = readFileSync(safeenContentPath, "utf8");

  assert.equal(existsSync("public/pdfs/safeen-green-specs.pdf"), true);
  assert.match(content, /specificationFile:\s*"\/pdfs\/safeen-green-specs\.pdf"/);
  assert.match(page, /function getPdfViewerHref/);
  assert.match(page, /new URLSearchParams/);
  assert.match(page, /file:\s*filePath/);
  assert.match(page, /title/);
  assert.match(page, /getPdfViewerHref\(product\.specificationFile,\s*product\.title\)/);
});
