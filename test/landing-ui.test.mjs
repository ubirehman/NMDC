import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import sharp from "sharp";

const header = readFileSync("app/components/landing/Header.tsx", "utf8");
const brandCard = readFileSync("app/components/landing/BrandCard.tsx", "utf8");
const brandCards = readFileSync("app/components/landing/BrandCards.tsx", "utf8");
const globals = readFileSync("app/globals.css", "utf8");
const hero = readFileSync("app/components/landing/Hero.tsx", "utf8");
const groupLanding = readFileSync(
  "features/landing-pages/nmdc-group/NmdcGroupLandingPage.tsx",
  "utf8",
);

test("mobile header exposes an interactive navigation menu", () => {
  assert.match(header, /"use client"/);
  assert.match(header, /useState/);
  assert.match(header, /aria-expanded=\{isMenuOpen\}/);
  assert.match(header, /h-14[\s\S]*md:h-\[72px\]/);
  assert.match(header, /md:hidden[\s\S]*links\.map/);
});

test("brand cards use the white hover shadow from the design", () => {
  assert.match(brandCard, /transition-\[transform,box-shadow(?:,border-color)?\]/);
  assert.match(brandCard, /hover:(?:shadow-\[0_0_28px_0_rgba\(255,255,255,0\.86\)\]|drop-shadow-white)/);
});

test("D&M brand card has the Figma hover and click theme", () => {
  assert.match(brandCard, /isDredgingMarine/);
  assert.match(brandCard, /brand\.id === "dm"/);
  assert.match(brandCard, /hover:border-primary-sky-blue/);
  assert.match(brandCard, /hover:shadow-\[0_0_34px_0_rgba\(41,183,227,0\.70\)\]/);
  assert.match(brandCard, /active:scale-\[0\.98\]/);
  assert.match(brandCard, /group-active:bg-primary-blue/);
});

test("design palette is exposed as semantic Tailwind colors", () => {
  assert.match(globals, /--primary-sky-blue:\s*#29b7e3;/);
  assert.match(globals, /--primary-blue:\s*#0072bc;/);
  assert.match(globals, /--primary-navy-blue:\s*#0d2638;/);
  assert.match(globals, /--color-primary-sky-blue:\s*#29b7e3;/);
  assert.match(globals, /--color-primary-blue:\s*#0072bc;/);
  assert.match(globals, /--color-primary-navy-blue:\s*#0d2638;/);
  assert.match(globals, /--color-glass-navy-60:\s*#06182699;/);
  assert.match(globals, /--color-overlay-hero-bottom:\s*#030e1bd1;/);
  assert.match(globals, /--color-effect-cyan-glow:\s*#29d7e35e;/);
});

test("landing components keep brand color fallbacks while adopting semantic palette classes", () => {
  assert.match(header, /text-brand-sky text-primary-sky-blue/);
  assert.match(header, /focus-visible:outline-brand-sky focus-visible:outline-primary-sky-blue/);
});

test("header keeps Figma glass color fallback while using palette utilities", () => {
  assert.match(header, /bg-\[rgba\(6,24,38,0\.60\)\] bg-glass-navy-60/);
  assert.match(header, /bg-\[rgba\(6,24,38,0\.88\)\] bg-glass-navy-88/);
  assert.match(header, /border-\[1px\] border-gray-50\/20/);
});

test("desktop header navigation uses the PDF-sized link typography", () => {
  assert.match(header, /text-\[16px\] font-bold leading-6/);
  assert.match(header, /md:absolute md:left-1\/2 md:-translate-x-1\/2/);
  assert.match(header, /md:flex md:items-center md:justify-center md:gap-6/);
  assert.match(header, /shrink-0 whitespace-nowrap/);
});

test("mobile navigation is a left sliding drawer, not a dropdown", () => {
  assert.match(header, /fixed inset-y-0 left-0/);
  assert.match(header, /translate-x-0/);
  assert.match(header, /-translate-x-full/);
  assert.doesNotMatch(header, /top-\[calc\(100%\+10px\)\]/);
});

test("NMDC Group landing matches the 1440x786 PDF artboard geometry", () => {
  assert.match(groupLanding, /min-h-\[max\(786px,100svh\)\]/);
  assert.match(groupLanding, /md:bottom-\[80px\]/);
  assert.match(hero, /md:gap-6/);
  assert.match(hero, /max-w-\[320px\][^"]*md:max-w-\[559px\]/);
  assert.match(brandCards, /md:w-\[822px\]/);
  assert.doesNotMatch(groupLanding, /h-\[786px\]/);
});

test("brand card logos are cropped into a larger label frame", () => {
  assert.match(brandCard, /logoFrameClassName/);
  assert.match(brandCard, /h-10 w-\[118px\]/);
  assert.match(brandCard, /lts: "h-\[34px\] w-\[124px\]"/);
  assert.match(brandCard, /brand\.id === "lts" \? "overflow-visible" : "overflow-hidden"/);
  assert.match(brandCard, /object-cover/);
  assert.doesNotMatch(brandCard, /max-h-7/);
});

test("NMDC Group homepage images use the latest PDF-extracted assets", async () => {
  const expectedAssets = [
    ["public/images/landing/hero-bg.webp", 4096, 2897],
    ["public/images/landing/card-dm.webp", 4096, 2730],
    ["public/images/landing/card-energy.webp", 4096, 2594],
    ["public/images/landing/card-infra.webp", 4096, 2303],
    ["public/images/landing/card-lts.webp", 4096, 4096],
    ["public/images/landing/card-product.webp", 4096, 2731],
  ];

  for (const [asset, width, height] of expectedAssets) {
    const metadata = await sharp(asset).metadata();
    assert.equal(metadata.width, width, asset);
    assert.equal(metadata.height, height, asset);
  }
});
