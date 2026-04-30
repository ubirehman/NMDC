import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import test from "node:test";

const routePath = "app/nmdc-overview/page.tsx";
const oldRoutePath = "app/nmdc-group/nmdc-overview/page.tsx";
const atAGlanceRoutePath = "app/nmdc-overview/at-a-glance/page.tsx";
const oldAtAGlanceRoutePath = "app/nmdc-group/nmdc-overview/at-a-glance/page.tsx";
const pagePath = "features/landing-pages/nmdc-overview/NmdcOverviewPage.tsx";
const atAGlancePagePath = "features/landing-pages/nmdc-overview/NmdcAtAGlancePage.tsx";
const contentPath = "features/landing-pages/nmdc-overview/content.ts";

test("NMDC overview route exists at the root path", () => {
  assert.equal(existsSync(routePath), true);
  assert.equal(existsSync(oldRoutePath), false);
  assert.match(readFileSync(routePath, "utf8"), /NmdcOverviewPage/);
});

test("NMDC overview read-more opens the At a Glance detail page", () => {
  assert.equal(existsSync(atAGlanceRoutePath), true);
  assert.equal(existsSync(atAGlancePagePath), true);

  const overviewPage = readFileSync(pagePath, "utf8");
  const detailRoute = readFileSync(atAGlanceRoutePath, "utf8");
  const detailPage = readFileSync(atAGlancePagePath, "utf8");
  const content = readFileSync(contentPath, "utf8");

  assert.equal(existsSync(oldAtAGlanceRoutePath), false);
  assert.match(overviewPage, /href="\/nmdc-overview\/at-a-glance"/);
  assert.match(overviewPage, /Read more\.\.\./);
  assert.match(detailRoute, /NmdcAtAGlancePage/);
  assert.match(detailPage, /href="\/nmdc-overview"/);
  assert.match(detailPage, /Back/);
  assert.match(content, /At a Glance/);
  assert.match(content, /A leading global EPC and dredging contractor/);
  assert.match(detailPage, /overview-hero-sea\.jpg/);
  assert.match(detailPage, /md:min-h-\[1065px\]/);
  assert.match(detailPage, /<NmdcFooter variant="compact"/);
});

test("NMDC overview page matches the at-a-glance design sections", () => {
  assert.equal(existsSync(pagePath), true);
  const page = readFileSync(pagePath, "utf8");
  assert.match(page, /At a Glance/);
  assert.match(page, /KEY FIGURES & GLOBAL PRESENCE\./);
  assert.match(page, /<NmdcOverviewVideoSection/);
  assert.match(page, /<OverviewVideoPlayer/);
  assert.match(page, /bg-white px-5 pt-14/);
  assert.doesNotMatch(page, /iframe/);
  assert.match(page, /<NmdcFooter/);
  assert.match(page, /overview-hero-sea\.jpg/);
  assert.match(page, /overview-map\.webp/);
  assert.match(readFileSync(contentPath, "utf8"), /safeen-subsea-rov\.mp4/);
  assert.match(page, /bg-white px-5 py-12 md:px-10 md:pb-\[125px\] md:pt-\[45px\]/);
  assert.match(page, /md:grid-cols-\[510px_694px\]/);
  assert.match(page, /md:h-\[829px\]/);
  assert.match(page, /text-primary-blue/);
});

test("NMDC overview desktop order and geometry match the PDF design", () => {
  const page = readFileSync(pagePath, "utf8");
  const player = readFileSync(
    "features/landing-pages/nmdc-overview/OverviewVideoPlayer.tsx",
    "utf8",
  );

  assert.ok(
    page.indexOf("<NmdcOverviewVideoSection />") <
      page.indexOf("KEY FIGURES & GLOBAL PRESENCE."),
    "overview video should appear before the key figures section",
  );
  assert.match(page, /md:grid-cols-\[510px_694px\]/);
  assert.match(page, /md:gap-\[36px\]/);
  assert.match(page, /md:pb-\[168px\]/);
  assert.match(page, /md:pt-\[9px\]/);
  assert.match(page, /md:text-\[28px\]/);
  assert.match(page, /md:text-\[64px\]/);
  assert.match(page, /md:text-\[20px\]/);
  assert.match(page, /md:mt-\[28px\]/);
  assert.match(page, /rounded-\[16px\] bg-\[rgba\(49,61,67,0\.88\)\]/);
  assert.match(page, /md:min-h-\[153px\] md:p-4/);
  assert.match(page, /md:mt-6 md:text-\[15px\] md:leading-5/);
  assert.match(page, /h-8 w-\[104px\]/);
  assert.match(page, /h-8 w-\[82px\]/);
  assert.match(page, /md:h-\[829px\]/);
  assert.match(page, /md:pt-\[110px\]/);
  assert.match(player, /max-w-\[1240px\]/);
});

test("NMDC overview desktop key figures and map match the PDF scale", () => {
  const page = readFileSync(pagePath, "utf8");

  assert.match(page, /md:pb-\[125px\] md:pt-\[45px\]/);
  assert.match(page, /md:max-w-\[880px\]/);
  assert.match(page, /md:text-\[48px\]/);
  assert.match(page, /md:leading-\[64px\]/);
  assert.match(page, /md:text-\[16px\] md:leading-6/);
  assert.match(page, /md:mt-\[90px\]/);
  assert.match(page, /max-w-\[1240px\]/);
  assert.match(page, /md:text-\[18px\]/);
});

test("NMDC overview uses the shared PDF-aligned footer", () => {
  const page = readFileSync(pagePath, "utf8");
  const footer = readFileSync("app/components/landing/NmdcFooter.tsx", "utf8");
  assert.match(page, /<NmdcFooter/);
  assert.match(footer, /md:min-h-\[658px\]/);
  assert.match(footer, /md:min-h-\[525px\]/);
  assert.match(footer, /Let&apos;s connect/);
  assert.match(footer, /Email/);
});

test("NMDC overview content has the five group business cards and four key figures", () => {
  assert.equal(existsSync(contentPath), true);
  const content = readFileSync(contentPath, "utf8");
  const cardsContent = content.slice(
    content.indexOf("export const overviewCards"),
    content.indexOf("export const keyFigures"),
  );
  assert.match(content, /Marine dredging, reclamation, and construction/);
  assert.match(content, /EPC solutions - offshore and onshore energy services/);
  assert.match(content, /logo-engineering\.svg/);
  assert.match(content, /NMDC Engineering/);
  assert.match(content, /Coastal and marine engineering consultancy/);
  assert.match(content, /logo-infra\.webp/);
  assert.match(content, /Construction technology and precast solutions/);
  assert.match(content, /logo-lts\.svg/);
  assert.match(content, /Logistic and technical services operator/);
  assert.doesNotMatch(cardsContent, /nmdc-group-logo\.svg/);
  assert.match(content, /74%/);
  assert.match(content, /25k/);
  assert.match(content, /170\+/);
  assert.match(content, /50\+/);
});

test("NMDC overview video is self-hosted", () => {
  assert.equal(existsSync(contentPath), true);
  assert.equal(
    existsSync("public/videos/safeen-subsea-rov.mp4"),
    true,
    "public/videos/safeen-subsea-rov.mp4 should exist",
  );
  assert.ok(
    statSync("public/videos/safeen-subsea-rov.mp4").size > 1_000_000,
    "NMDC overview video should be a real copied video asset",
  );
  const player = readFileSync(
    "features/landing-pages/nmdc-overview/OverviewVideoPlayer.tsx",
    "utf8",
  );
  const page = readFileSync(pagePath, "utf8");
  const content = readFileSync(contentPath, "utf8");
  assert.match(content, /\/videos\/safeen-subsea-rov\.mp4/);
  assert.doesNotMatch(content, /poster:\s*|overview-video-vessel\.jpg/);
  assert.match(player, /<video/);
  assert.match(player, /<source/);
  assert.match(player, /\scontrols\s/);
  assert.match(player, /preload="metadata"/);
  assert.doesNotMatch(page, /poster=\{overviewVideo\.poster\}/);
  assert.doesNotMatch(player, /playVideo|controls=\{isPlaying\}|border-l-primary-sky-blue/);
  assert.match(player, /max-w-\[1240px\]/);
  assert.doesNotMatch(page, /iframe|youtube\.com|vimeo\.com/i);
});
