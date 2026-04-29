import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const peopleRoutePath = "app/nmdc-group/people-and-culture/page.tsx";
const maharaRoutePath =
  "app/nmdc-group/people-and-culture/mahara-fresh-graduate-development-program/page.tsx";
const peoplePagePath =
  "features/landing-pages/nmdc-people-culture/NmdcPeopleCulturePage.tsx";
const maharaPagePath =
  "features/landing-pages/nmdc-people-culture/NmdcMaharaFreshGraduatePage.tsx";
const contentPath = "features/landing-pages/nmdc-people-culture/content.ts";
const indexPath = "features/landing-pages/nmdc-people-culture/index.ts";
const metadataPath = "features/landing-pages/nmdc-people-culture/metadata.ts";

test("People & Culture read-more opens the Mahara detail page", () => {
  assert.equal(existsSync(maharaRoutePath), true);
  assert.equal(existsSync(maharaPagePath), true);

  const peoplePage = readFileSync(peoplePagePath, "utf8");
  const detailRoute = readFileSync(maharaRoutePath, "utf8");
  const detailPage = readFileSync(maharaPagePath, "utf8");
  const content = readFileSync(contentPath, "utf8");
  const index = readFileSync(indexPath, "utf8");
  const metadata = readFileSync(metadataPath, "utf8");

  assert.match(
    peoplePage,
    /href="\/nmdc-group\/people-and-culture\/mahara-fresh-graduate-development-program"/,
  );
  assert.match(peoplePage, /Read more\.\.\./);
  assert.match(detailRoute, /NmdcMaharaFreshGraduatePage/);
  assert.match(detailPage, /href="\/nmdc-group\/people-and-culture"/);
  assert.match(detailPage, /Back/);
  assert.match(detailPage, /people-hero-boardroom\.jpg/);
  assert.match(content, /people-mahara-women\.jpg/);
  assert.match(detailPage, /maharaFreshGraduateDetail/);
  assert.match(detailPage, /<NmdcFooter/);
  assert.match(index, /NmdcMaharaFreshGraduatePage/);
  assert.match(index, /nmdcMaharaFreshGraduateMetadata/);
  assert.match(metadata, /nmdcMaharaFreshGraduateMetadata/);
  assert.match(content, /The Hive Toastmasters/);
  assert.match(content, /Tumooh Initiative/);
});

test("Mahara detail page follows the supplied desktop article geometry", () => {
  const detailPage = readFileSync(maharaPagePath, "utf8");

  assert.match(detailPage, /md:h-\[487px\]/);
  assert.match(detailPage, /md:pt-\[104px\]/);
  assert.match(detailPage, /md:mt-\[43px\]/);
  assert.match(detailPage, /md:rounded-\[20px\]/);
  assert.match(detailPage, /md:px-8/);
  assert.match(detailPage, /md:py-\[31px\]/);
  assert.match(detailPage, /md:mt-\[64px\]/);
  assert.match(detailPage, /md:h-\[591px\]/);
  assert.match(detailPage, /max-w-\[1240px\]/);
});
