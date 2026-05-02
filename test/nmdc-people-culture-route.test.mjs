import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const peopleRoutePath = "app/people-and-culture/page.tsx";
const oldPeopleRoutePath = "app/nmdc-group/people-and-culture/page.tsx";
const maharaRoutePath =
  "app/people-and-culture/mahara-fresh-graduate-development-program/page.tsx";
const oldMaharaRoutePath =
  "app/nmdc-group/people-and-culture/mahara-fresh-graduate-development-program/page.tsx";
const peoplePagePath =
  "features/landing-pages/nmdc-people-culture/NmdcPeopleCulturePage.tsx";
const maharaPagePath =
  "features/landing-pages/nmdc-people-culture/NmdcMaharaFreshGraduatePage.tsx";
const contentPath = "features/landing-pages/nmdc-people-culture/content.ts";
const indexPath = "features/landing-pages/nmdc-people-culture/index.ts";
const metadataPath = "features/landing-pages/nmdc-people-culture/metadata.ts";

test("People & Culture read-more opens the Mahara detail page", () => {
  assert.equal(existsSync(peopleRoutePath), true);
  assert.equal(existsSync(oldPeopleRoutePath), false);
  assert.equal(existsSync(maharaRoutePath), true);
  assert.equal(existsSync(oldMaharaRoutePath), false);
  assert.equal(existsSync(maharaPagePath), true);

  const peoplePage = readFileSync(peoplePagePath, "utf8");
  const detailRoute = readFileSync(maharaRoutePath, "utf8");
  const detailPage = readFileSync(maharaPagePath, "utf8");
  const content = readFileSync(contentPath, "utf8");
  const index = readFileSync(indexPath, "utf8");
  const metadata = readFileSync(metadataPath, "utf8");

  assert.match(
    peoplePage,
    /href="\/people-and-culture\/mahara-fresh-graduate-development-program"/,
  );
  assert.match(peoplePage, /Read more\.\.\./);
  assert.match(detailRoute, /NmdcMaharaFreshGraduatePage/);
  assert.match(detailPage, /href="\/people-and-culture"/);
  assert.match(detailPage, /Back/);
  assert.match(detailPage, /people-hero-boardroom\.jpg/);
  assert.match(content, /people_culture_at_glance\.jpeg/);
  assert.match(detailPage, /maharaFreshGraduateDesignDetail/);
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

test("Mahara detail design uses isolated PDF copy", () => {
  const content = readFileSync(contentPath, "utf8");
  const detailPage = readFileSync(maharaPagePath, "utf8");
  const designStart = content.indexOf(
    "export const maharaFreshGraduateDesignDetail",
  );
  const designEnd = content.indexOf("export const peopleCultureGallery");
  const designBlock = content.slice(designStart, designEnd);

  assert.notEqual(designStart, -1);
  assert.match(detailPage, /maharaFreshGraduateDesignDetail/);
  assert.match(detailPage, /maharaFreshGraduateDesignDetail\.title/);
  assert.match(detailPage, /maharaFreshGraduateDesignDetail\.sections\.map/);
  assert.match(designBlock, /title:\s*"Other Initiatives"/);
  assert.match(designBlock, /Women Empowerment Initiatives \(Yard\)"/);
  assert.match(
    designBlock,
    /Leadership and Communication Development - The Hive Toastmasters"/,
  );
  assert.match(
    designBlock,
    /E-Learning and Continuous Development - Tumooh Initiative"/,
  );
  assert.match(
    designBlock,
    /practice influence, decision-making, and effective communication/,
  );
  assert.match(designBlock, /organizational capability development/);
  assert.doesNotMatch(designBlock, /Read More|pace\.Mahara/);
  assert.doesNotMatch(designBlock, /- 29 UAE Nationals|\(10 UAE Nationals\)/);
  assert.equal([...designBlock.matchAll(/^\s+title:\s*"/gm)].length, 5);
});
