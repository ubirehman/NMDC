import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const routePath = "app/nmdc-group/nmdc-overview/page.tsx";
const pagePath = "features/landing-pages/nmdc-overview/NmdcOverviewPage.tsx";
const contentPath = "features/landing-pages/nmdc-overview/content.ts";

test("NMDC overview route exists under nmdc-group", () => {
  assert.equal(existsSync(routePath), true);
  assert.match(readFileSync(routePath, "utf8"), /NmdcOverviewPage/);
});

test("NMDC overview page matches the at-a-glance design sections", () => {
  assert.equal(existsSync(pagePath), true);
  const page = readFileSync(pagePath, "utf8");
  assert.match(page, /At a Glance/);
  assert.match(page, /KEY FIGURES & GLOBAL PRESENCE\./);
  assert.match(page, /<NmdcOverviewVideoSection/);
  assert.match(page, /<OverviewVideoPlayer/);
  assert.match(page, /bg-white px-5 pb-14/);
  assert.doesNotMatch(page, /iframe/);
  assert.match(page, /<NmdcFooter/);
  assert.match(page, /overview-hero-sea\.jpg/);
  assert.match(page, /overview-map\.webp/);
  assert.match(readFileSync(contentPath, "utf8"), /overview-video-vessel\.jpg/);
  assert.match(page, /bg-white px-5 py-12 md:px-10 md:py-16/);
  assert.match(page, /grid-cols-\[minmax\(0,510px\)_minmax\(0,610px\)\]/);
  assert.match(page, /md:h-\[696px\]/);
  assert.match(page, /text-primary-blue/);
});

test("NMDC overview uses the shared PDF-aligned footer", () => {
  const page = readFileSync(pagePath, "utf8");
  const footer = readFileSync("app/components/landing/NmdcFooter.tsx", "utf8");
  assert.match(page, /<NmdcFooter/);
  assert.match(footer, /Let&apos;s connect/);
  assert.match(footer, /Email/);
});

test("NMDC overview content has the five group business cards and four key figures", () => {
  assert.equal(existsSync(contentPath), true);
  const content = readFileSync(contentPath, "utf8");
  assert.match(content, /Marine dredging, reclamation, and construction/);
  assert.match(content, /EPC solutions - offshore and onshore energy services/);
  assert.match(content, /Logistic and technical services operator/);
  assert.match(content, /74%/);
  assert.match(content, /25k/);
  assert.match(content, /170\+/);
  assert.match(content, /50\+/);
});

test("NMDC overview video is self-hosted", () => {
  assert.equal(existsSync(contentPath), true);
  const player = readFileSync(
    "features/landing-pages/nmdc-overview/OverviewVideoPlayer.tsx",
    "utf8",
  );
  const page = readFileSync(pagePath, "utf8");
  const content = readFileSync(contentPath, "utf8");
  assert.match(content, /\/videos\/nmdc-group-overview\.mp4/);
  assert.match(content, /\/images\/landing\/overview-video-vessel\.jpg/);
  assert.match(player, /<video/);
  assert.match(player, /<source/);
  assert.match(player, /max-w-\[1040px\]/);
  assert.match(player, /aria-label="Play NMDC Group overview video"/);
  assert.doesNotMatch(page, /iframe|youtube\.com|vimeo\.com/i);
});
