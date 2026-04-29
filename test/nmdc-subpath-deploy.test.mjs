import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const subpathApps = [
  {
    name: "dredging",
    config: "apps/nmdc-dredging-marine/next.config.ts",
    baseEnv: "NEXT_PUBLIC_DREDGING_MARINE_BASE_PATH",
    urlEnv: "NEXT_PUBLIC_DREDGING_MARINE_APP_URL",
    path: "/dredging",
    port: "3121",
  },
  {
    name: "infra",
    config: "apps/nmdc-infra/next.config.ts",
    baseEnv: "NEXT_PUBLIC_INFRA_BASE_PATH",
    urlEnv: "NEXT_PUBLIC_INFRA_APP_URL",
    path: "/infra",
    port: "3122",
  },
  {
    name: "lts",
    config: "apps/nmdc-lts/next.config.ts",
    baseEnv: "NEXT_PUBLIC_LTS_BASE_PATH",
    urlEnv: "NEXT_PUBLIC_LTS_APP_URL",
    path: "/lts",
    port: "3123",
  },
  {
    name: "energy",
    config: "apps/nmdc-energy/next.config.ts",
    baseEnv: "NEXT_PUBLIC_ENERGY_BASE_PATH",
    urlEnv: "NEXT_PUBLIC_ENERGY_APP_URL",
    path: "/energy",
    port: "3124",
  },
];

test("standalone apps are built with subpath-aware Next.js asset paths", () => {
  const dockerfile = readFileSync("Dockerfile", "utf8");

  for (const app of subpathApps) {
    const nextConfig = readFileSync(app.config, "utf8");

    assert.match(nextConfig, new RegExp(app.baseEnv));
    assert.match(nextConfig, /basePath/);
    assert.match(nextConfig, /basePath \? \{ basePath \} : \{\}/);
    assert.match(dockerfile, new RegExp(`ENV ${app.urlEnv}="${app.path}"`));
    assert.match(dockerfile, new RegExp(`ENV ${app.baseEnv}="${app.path}"`));
  }
});

test("Nginx subpath proxy config preserves prefixes for Next.js basePath apps without redirect loops", () => {
  const nginxPath = "deploy/nginx/nmdcgroups.conf";
  assert.equal(existsSync(nginxPath), true, `${nginxPath} should exist`);

  const nginx = readFileSync(nginxPath, "utf8");

  for (const app of subpathApps) {
    assert.match(
      nginx,
      new RegExp(`location = ${app.path.replace("/", "\\/")} \\{\\s*proxy_pass http:\\/\\/127\\.0\\.0\\.1:${app.port};`, "s"),
      `${app.name} exact base path must proxy to Next.js because the app canonicalizes ${app.path}/ back to ${app.path}`,
    );
    assert.doesNotMatch(
      nginx,
      new RegExp(`location = ${app.path.replace("/", "\\/")} \\{\\s*return 301 ${app.path.replace("/", "\\/")}\\/;\\s*\\}`, "s"),
      `${app.name} exact base path must not redirect to ${app.path}/ because that loops with Next.js trailing-slash redirects`,
    );
    assert.match(
      nginx,
      new RegExp(`location ${app.path.replace("/", "\\/")}\\/ \\{\\s*proxy_pass http:\\/\\/127\\.0\\.0\\.1:${app.port};`, "s"),
    );
    assert.doesNotMatch(
      nginx,
      new RegExp(`location ${app.path.replace("/", "\\/")}\\/ \\{[^}]*proxy_pass http:\\/\\/127\\.0\\.0\\.1:${app.port}\\/;`, "s"),
      `${app.name} proxy_pass must not include a trailing slash because that strips ${app.path}`,
    );
  }
}
);

test("subpath apps prefix raw public SVG and document assets", () => {
  const rawAssetContentFiles = [
    "apps/nmdc-dredging-marine/content/content.ts",
    "apps/nmdc-infra/content/content.ts",
    "apps/nmdc-lts/content/content.ts",
    "apps/nmdc-energy/content/content.ts",
  ];

  for (const file of rawAssetContentFiles) {
    const content = readFileSync(file, "utf8");

    assert.doesNotMatch(
      content,
      /:\s*"\/images\/[^"]+\.svg"/,
      `${file} should route raw SVG public assets through the app basePath helper`,
    );
    assert.doesNotMatch(
      content,
      /:\s*"\/documents\//,
      `${file} should route document downloads through the app basePath helper`,
    );
  }

  assert.match(
    readFileSync("apps/nmdc-dredging-marine/content/content.ts", "utf8"),
    /withDredgingMarineBasePath\("\/documents\/marine-vessels\/al-yassat\.pdf"\)/,
  );
});
