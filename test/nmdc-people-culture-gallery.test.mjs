import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const carouselPath =
  "features/landing-pages/nmdc-people-culture/PeopleCultureGalleryCarousel.tsx";
const peoplePagePath =
  "features/landing-pages/nmdc-people-culture/NmdcPeopleCulturePage.tsx";
const contentPath = "features/landing-pages/nmdc-people-culture/content.ts";

test("People & Culture gallery arrows cycle through the page images", () => {
  assert.equal(existsSync(carouselPath), true);

  const carousel = readFileSync(carouselPath, "utf8");
  const peoplePage = readFileSync(peoplePagePath, "utf8");
  const content = readFileSync(contentPath, "utf8");

  assert.match(carousel, /"use client";/);
  assert.match(carousel, /useState/);
  assert.match(carousel, /activeIndex/);
  assert.match(carousel, /showPreviousImage/);
  assert.match(carousel, /showNextImage/);
  assert.match(carousel, /onClick=\{showPreviousImage\}/);
  assert.match(carousel, /onClick=\{showNextImage\}/);
  assert.match(carousel, /\(index - 1 \+ images\.length\) % images\.length/);
  assert.match(carousel, /\(index \+ 1\) % images\.length/);
  assert.match(carousel, /src=\{activeImage\.src\}/);
  assert.match(carousel, /alt=\{activeImage\.alt\}/);

  assert.match(peoplePage, /PeopleCultureGalleryCarousel/);
  assert.match(peoplePage, /images=\{peopleCultureGallery\}/);
  assert.match(peoplePage, /images=\{peopleCultureMobileGallery\}/);
  assert.match(content, /\/images\/landing\/AVI04001\.jpg/);
  assert.match(content, /\/images\/landing\/LMH1_75\.jpg/);
});
