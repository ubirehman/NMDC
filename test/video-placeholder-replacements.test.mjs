import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import test from "node:test";

test("remaining video placeholders use local playable videos", () => {
  for (const asset of [
    "apps/nmdc-infra/public/videos/nmdc_infra-porduction-overview.mp4",
    "apps/nmdc-infra/public/videos/nmdc_infra_3d_printing.mp4",
    "apps/nmdc-infra/public/videos/nmdc_infra_ebawe.mp4",
    "apps/nmdc-dredging-marine/public/videos/nmdc_dm_1.mp4",
    "apps/nmdc-dredging-marine/public/videos/nmdc_dm_2.mp4",
  ]) {
    assert.equal(existsSync(asset), true, `${asset} should exist`);
    assert.ok(statSync(asset).size > 1_000_000, `${asset} should be a real video asset`);
  }

  for (const poster of [
    "public/images/landing/video-posters/nmdc-overview.png",
    "public/images/landing/video-posters/nmdc-technology.png",
    "public/images/landing/video-posters/nmdc-people-culture-at-glance.png",
    "public/images/landing/video-posters/safeen-corporate.png",
    "public/images/landing/video-posters/safeen-subsea-rov.png",
    "apps/nmdc-infra/public/images/infra/video-posters/overview.png",
    "apps/nmdc-infra/public/images/infra/video-posters/product-3d-reefs.png",
    "apps/nmdc-infra/public/images/infra/video-posters/product-ebawe.png",
    "apps/nmdc-energy/public/images/energy/video-posters/overview-mussafah.png",
    "apps/nmdc-energy/public/images/energy/video-posters/yards-1.png",
    "apps/nmdc-energy/public/images/energy/video-posters/yards-2.png",
    "apps/nmdc-energy/public/images/energy/video-posters/product-pipe-coating.png",
    "apps/nmdc-dredging-marine/public/images/dm/video-posters/nmdc-dm-1.png",
    "apps/nmdc-dredging-marine/public/images/dm/video-posters/nmdc-dm-2.png",
  ]) {
    assert.equal(existsSync(poster), true, `${poster} should exist`);
    assert.ok(statSync(poster).size > 10_000, `${poster} should be a generated video poster`);
  }

  const infraContent = readFileSync("apps/nmdc-infra/content/content.ts", "utf8");
  const infraPage = readFileSync("apps/nmdc-infra/app/pages.tsx", "utf8");
  const infraCarousel = readFileSync("apps/nmdc-infra/components/InfraVideoCarousel.tsx", "utf8");

  assert.match(infraContent, /overview:[\s\S]*video:[\s\S]*videos:\s*\[/);
  assert.match(infraContent, /products:[\s\S]*detail:[\s\S]*video:[\s\S]*videos:\s*\[/);
  assert.match(infraContent, /ebaweDetail:[\s\S]*video:[\s\S]*videos:\s*\[/);
  assert.match(infraContent, /withInfraBasePath\("\/videos\/nmdc_infra-porduction-overview\.mp4"\)/);
  assert.match(infraContent, /withInfraBasePath\("\/videos\/nmdc_infra_3d_printing\.mp4"\)/);
  assert.match(infraContent, /withInfraBasePath\("\/videos\/nmdc_infra_ebawe\.mp4"\)/);
  assert.match(infraPage, /InfraVideoCarousel/);
  assert.match(infraPage, /videos=\{video\.videos\}/);
  assert.match(infraCarousel, /"use client";/);
  assert.match(infraCarousel, /useRef<Array<HTMLVideoElement \| null>>/);
  assert.match(infraCarousel, /<video/);
  assert.match(infraCarousel, /\scontrols\s/);
  assert.match(infraCarousel, /poster=\{video\.poster\}/);
  assert.match(infraContent, /poster:\s*withInfraBasePath\("\/images\/infra\/video-posters\/overview\.png"\)/);
  assert.match(infraContent, /poster:\s*withInfraBasePath\("\/images\/infra\/video-posters\/product-3d-reefs\.png"\)/);
  assert.match(infraContent, /poster:\s*withInfraBasePath\("\/images\/infra\/video-posters\/product-ebawe\.png"\)/);
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
  assert.match(energyContent, /withEnergyBasePath\("\/videos\/energy-overview-mussafah\.mp4"\)/);
  assert.doesNotMatch(energyContent, /withEnergyBasePath\("\/videos\/energy-overview-green\.mp4"\)/);
  assert.doesNotMatch(energyContent, /withEnergyBasePath\("\/videos\/energy-overview-rov\.mp4"\)/);
  assert.match(energyPage, /<EnergyOverviewVideoPlayer[\s\S]*videos=\{keyHighlights\.video\.videos\}/);
  assert.match(energyPage, /<EnergyOverviewVideoPlayer[\s\S]*videos=\{detail\.media\.videos\}/);
  assert.match(energyPlayer, /frameClassName/);
  assert.match(energyPlayer, /videoClassName/);
  assert.match(energyPlayer, /controlsClassName/);
  assert.match(energyPlayer, /poster=\{video\.poster\}/);
  assert.match(energyContent, /poster:\s*withEnergyBasePath\("\/images\/energy\/video-posters\/overview-mussafah\.png"\)/);
  assert.match(energyContent, /poster:\s*withEnergyBasePath\("\/images\/energy\/video-posters\/yards-1\.png"\)/);
  assert.match(energyContent, /poster:\s*withEnergyBasePath\("\/images\/energy\/video-posters\/yards-2\.png"\)/);
  assert.match(energyContent, /poster:\s*withEnergyBasePath\("\/images\/energy\/video-posters\/product-pipe-coating\.png"\)/);

  const dmContent = readFileSync("apps/nmdc-dredging-marine/content/content.ts", "utf8");
  const dmPage = readFileSync("apps/nmdc-dredging-marine/app/pages.tsx", "utf8");
  const dmPlayer = readFileSync("apps/nmdc-dredging-marine/components/DmVideoPlayer.tsx", "utf8");

  assert.match(dmContent, /videoSources:\s*\[/);
  assert.match(dmContent, /withDredgingMarineBasePath\("\/videos\/nmdc_dm_1\.mp4"\)/);
  assert.match(dmContent, /withDredgingMarineBasePath\("\/videos\/nmdc_dm_2\.mp4"\)/);
  assert.match(dmContent, /type:\s*"video"[\s\S]*src:\s*nmdcDredgingMarineVideoSources\[0\]/);
  assert.match(dmContent, /video:[\s\S]*src:\s*nmdcDredgingMarineVideoSources\[0\]/);
  assert.match(dmPage, /DmVideoPlayer/);
  assert.match(dmPlayer, /<video/);
  assert.match(dmPlayer, /\scontrols\s/);
  assert.match(dmPlayer, /src=\{src\}/);
  assert.match(dmPlayer, /poster=\{poster\}/);
  assert.match(dmPage, /poster=\{content\.videoSources\[0\]\.poster\}/);
  assert.match(dmPage, /poster=\{item\.image\}/);
  assert.match(dmPage, /poster=\{caisson\.process\.video\.image\}/);
  assert.match(dmContent, /poster:\s*withDredgingMarineBasePath\("\/images\/dm\/video-posters\/nmdc-dm-1\.png"\)/);
  assert.match(dmContent, /poster:\s*withDredgingMarineBasePath\("\/images\/dm\/video-posters\/nmdc-dm-2\.png"\)/);
  assert.match(dmContent, /image:\s*withDredgingMarineBasePath\("\/images\/dm\/video-posters\/nmdc-dm-1\.png"\)/);
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
  assert.match(people, /src:\s*"\/videos\/nmdc_technology\.mp4"/);
  assert.match(people, /src:\s*"\/videos\/nmdc_people_and_culture_and_at-a_glance\.mp4"/);
  assert.match(landingCarousel, /"use client";/);
  assert.match(landingCarousel, /<video/);
  assert.match(landingCarousel, /\scontrols\s/);
  assert.match(landingCarousel, /poster=\{video\.poster\}/);
  assert.match(people, /poster:\s*"\/images\/landing\/video-posters\/nmdc-technology\.png"/);
  assert.match(people, /poster:\s*"\/images\/landing\/video-posters\/nmdc-people-culture-at-glance\.png"/);
  assert.match(landingCarousel, /onClick=\{showPreviousVideo\}/);
  assert.match(landingCarousel, /onClick=\{showNextVideo\}/);

  const groupProductDetails = readFileSync(
    "features/landing-pages/nmdc-group/productDetailsContent.ts",
    "utf8",
  );
  assert.doesNotMatch(groupProductDetails, /label:\s*"Play virtual tour",\s*href:\s*"#"/);
  assert.match(groupProductDetails, /href:\s*`\$\{dredgingMarineAppUrl\}\/hydraulic-physical-model#virtual-tour`/);
});
