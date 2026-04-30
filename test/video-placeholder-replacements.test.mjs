import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import test from "node:test";

test("remaining video placeholders use local playable videos", () => {
  for (const asset of [
    "apps/nmdc-infra/public/videos/safeen-subsea-green.mp4",
    "apps/nmdc-infra/public/videos/safeen-subsea-rov.mp4",
    "apps/nmdc-dredging-marine/public/videos/safeen-subsea-green.mp4",
    "apps/nmdc-dredging-marine/public/videos/safeen-subsea-rov.mp4",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
    assert.ok(statSync(asset).size > 1_000_000, `${asset} should be a real video asset`);
  }

  const infraContent = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");
  const infraPage = readFileSync("apps/nmdc-infra/app/pages.tsx", "utf8");
  const infraCarousel = readFileSync("apps/nmdc-infra/components/InfraVideoCarousel.tsx", "utf8");

  assert.match(infraContent, /overview:[\s\S]*video:[\s\S]*videos:\s*\[/);
  assert.match(infraContent, /products:[\s\S]*detail:[\s\S]*video:[\s\S]*videos:\s*\[/);
  assert.match(infraContent, /ebaweDetail:[\s\S]*video:[\s\S]*videos:\s*\[/);
  assert.match(infraContent, /withInfraBasePath\("\/videos\/safeen-subsea-green\.mp4"\)/);
  assert.match(infraContent, /withInfraBasePath\("\/videos\/safeen-subsea-rov\.mp4"\)/);
  assert.match(infraPage, /InfraVideoCarousel/);
  assert.match(infraPage, /videos=\{video\.videos\}/);
  assert.match(infraCarousel, /"use client";/);
  assert.match(infraCarousel, /useRef<Array<HTMLVideoElement \| null>>/);
  assert.match(infraCarousel, /<video/);
  assert.match(infraCarousel, /\scontrols\s/);
  assert.match(infraCarousel, /src=\{video\.src\}/);
  assert.match(infraCarousel, /onClick=\{showPreviousVideo\}/);
  assert.match(infraCarousel, /onClick=\{showNextVideo\}/);

  const energyContent = readFileSync("apps/nmdc-energy/content/content.ts", "utf8");
  const energyPage = readFileSync("apps/nmdc-energy/app/pages.tsx", "utf8");
  const energyPlayer = readFileSync(
    "apps/nmdc-energy/components/EnergyOverviewVideoPlayer.tsx",
    "utf8",
  );

  assert.match(energyContent, /yardHighlights:[\s\S]*keyHighlights:[\s\S]*video:[\s\S]*videos:\s*\[/);
  assert.match(energyContent, /media:[\s\S]*playLabel:\s*"Play pipe coating yard video"[\s\S]*videos:\s*\[/);
  assert.match(energyContent, /withEnergyBasePath\("\/videos\/energy-overview-green\.mp4"\)/);
  assert.match(energyContent, /withEnergyBasePath\("\/videos\/energy-overview-rov\.mp4"\)/);
  assert.match(energyPage, /<EnergyOverviewVideoPlayer[\s\S]*videos=\{keyHighlights\.video\.videos\}/);
  assert.match(energyPage, /<EnergyOverviewVideoPlayer[\s\S]*videos=\{detail\.media\.videos\}/);
  assert.match(energyPlayer, /frameClassName/);
  assert.match(energyPlayer, /videoClassName/);
  assert.match(energyPlayer, /controlsClassName/);

  const dmContent = readFileSync("apps/nmdc-dredging-marine/content/content.ts", "utf8");
  const dmPage = readFileSync("apps/nmdc-dredging-marine/app/pages.tsx", "utf8");
  const dmPlayer = readFileSync("apps/nmdc-dredging-marine/components/DmVideoPlayer.tsx", "utf8");

  assert.match(dmContent, /videoSources:\s*\[/);
  assert.match(dmContent, /withDredgingMarineBasePath\("\/videos\/safeen-subsea-green\.mp4"\)/);
  assert.match(dmContent, /withDredgingMarineBasePath\("\/videos\/safeen-subsea-rov\.mp4"\)/);
  assert.match(dmContent, /type:\s*"video"[\s\S]*src:\s*nmdcDredgingMarineVideoSources\[0\]/);
  assert.match(dmContent, /video:[\s\S]*src:\s*nmdcDredgingMarineVideoSources\[0\]/);
  assert.match(dmPage, /DmVideoPlayer/);
  assert.match(dmPlayer, /<video/);
  assert.match(dmPlayer, /\scontrols\s/);
  assert.match(dmPlayer, /src=\{src\}/);
  assert.doesNotMatch(dmPage, /Play hydraulic physical model video[\s\S]*border-l-current/);
  assert.doesNotMatch(dmPage, /Play Caisson Method video[\s\S]*border-l-current/);

  const people = readFileSync(
    "features/landing-pages/nmdc-people-culture/NmdcPeopleCulturePage.tsx",
    "utf8",
  );
  const landingCarousel = readFileSync(
    "app/components/landing/LandingVideoCarousel.tsx",
    "utf8",
  );

  assert.match(people, /peopleCultureVideos/);
  assert.match(people, /LandingVideoCarousel/);
  assert.match(people, /src:\s*"\/videos\/safeen-subsea-green\.mp4"/);
  assert.match(people, /src:\s*"\/videos\/safeen-subsea-rov\.mp4"/);
  assert.match(landingCarousel, /"use client";/);
  assert.match(landingCarousel, /<video/);
  assert.match(landingCarousel, /\scontrols\s/);
  assert.match(landingCarousel, /onClick=\{showPreviousVideo\}/);
  assert.match(landingCarousel, /onClick=\{showNextVideo\}/);

  const groupProductDetails = readFileSync(
    "features/landing-pages/nmdc-group/productDetailsContent.ts",
    "utf8",
  );
  assert.doesNotMatch(groupProductDetails, /label:\s*"Play virtual tour",\s*href:\s*"#"/);
  assert.match(groupProductDetails, /label:\s*"Play virtual tour",\s*href:\s*"\/videos\/safeen-subsea-green\.mp4"/);
});
