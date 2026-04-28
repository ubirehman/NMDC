import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const header = readFileSync("app/components/landing/Header.tsx", "utf8");
const brandCard = readFileSync("app/components/landing/BrandCard.tsx", "utf8");
const globals = readFileSync("app/globals.css", "utf8");

test("mobile header exposes an interactive navigation menu", () => {
  assert.match(header, /"use client"/);
  assert.match(header, /useState/);
  assert.match(header, /aria-expanded=\{isMenuOpen\}/);
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

test("mobile navigation is a left sliding drawer, not a dropdown", () => {
  assert.match(header, /fixed inset-y-0 left-0/);
  assert.match(header, /translate-x-0/);
  assert.match(header, /-translate-x-full/);
  assert.doesNotMatch(header, /top-\[calc\(100%\+10px\)\]/);
});
