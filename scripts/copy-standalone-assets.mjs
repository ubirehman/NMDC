import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const target = process.argv[2] ?? "all";

const apps = {
  root: {
    publicDir: path.join(root, "public"),
    staticDir: path.join(root, ".next", "static"),
    standaloneDir: path.join(root, ".next", "standalone"),
    standalonePublicDir: path.join(root, ".next", "standalone", "public"),
    standaloneStaticDir: path.join(root, ".next", "standalone", ".next", "static"),
  },
  dm: {
    publicDir: path.join(root, "apps", "nmdc-dredging-marine", "public"),
    staticDir: path.join(root, "apps", "nmdc-dredging-marine", ".next", "static"),
    standaloneDir: path.join(root, "apps", "nmdc-dredging-marine", ".next", "standalone"),
    standalonePublicDir: path.join(
      root,
      "apps",
      "nmdc-dredging-marine",
      ".next",
      "standalone",
      "apps",
      "nmdc-dredging-marine",
      "public",
    ),
    standaloneStaticDir: path.join(
      root,
      "apps",
      "nmdc-dredging-marine",
      ".next",
      "standalone",
      "apps",
      "nmdc-dredging-marine",
      ".next",
      "static",
    ),
  },
  infra: {
    publicDir: path.join(root, "apps", "nmdc-infra", "public"),
    staticDir: path.join(root, "apps", "nmdc-infra", ".next", "static"),
    standaloneDir: path.join(root, "apps", "nmdc-infra", ".next", "standalone"),
    standalonePublicDir: path.join(
      root,
      "apps",
      "nmdc-infra",
      ".next",
      "standalone",
      "apps",
      "nmdc-infra",
      "public",
    ),
    standaloneStaticDir: path.join(
      root,
      "apps",
      "nmdc-infra",
      ".next",
      "standalone",
      "apps",
      "nmdc-infra",
      ".next",
      "static",
    ),
  },
  lts: {
    publicDir: path.join(root, "apps", "nmdc-lts", "public"),
    staticDir: path.join(root, "apps", "nmdc-lts", ".next", "static"),
    standaloneDir: path.join(root, "apps", "nmdc-lts", ".next", "standalone"),
    standalonePublicDir: path.join(
      root,
      "apps",
      "nmdc-lts",
      ".next",
      "standalone",
      "apps",
      "nmdc-lts",
      "public",
    ),
    standaloneStaticDir: path.join(
      root,
      "apps",
      "nmdc-lts",
      ".next",
      "standalone",
      "apps",
      "nmdc-lts",
      ".next",
      "static",
    ),
  },
  energy: {
    publicDir: path.join(root, "apps", "nmdc-energy", "public"),
    staticDir: path.join(root, "apps", "nmdc-energy", ".next", "static"),
    standaloneDir: path.join(root, "apps", "nmdc-energy", ".next", "standalone"),
    standalonePublicDir: path.join(
      root,
      "apps",
      "nmdc-energy",
      ".next",
      "standalone",
      "apps",
      "nmdc-energy",
      "public",
    ),
    standaloneStaticDir: path.join(
      root,
      "apps",
      "nmdc-energy",
      ".next",
      "standalone",
      "apps",
      "nmdc-energy",
      ".next",
      "static",
    ),
  },
};

function copyDir(from, to) {
  if (!existsSync(from)) {
    throw new Error(`Missing source directory: ${path.relative(root, from)}`);
  }

  rmSync(to, { force: true, recursive: true });
  mkdirSync(path.dirname(to), { recursive: true });
  cpSync(from, to, { recursive: true });
}

function copyForApp(appName) {
  const app = apps[appName];

  if (!existsSync(app.standaloneDir)) {
    throw new Error(
      `Missing standalone output for ${appName}: ${path.relative(root, app.standaloneDir)}`,
    );
  }

  copyDir(app.staticDir, app.standaloneStaticDir);
  copyDir(app.publicDir, app.standalonePublicDir);
}

if (target === "all") {
  copyForApp("root");
  copyForApp("dm");
  copyForApp("infra");
  copyForApp("lts");
  copyForApp("energy");
} else if (target in apps) {
  copyForApp(target);
} else {
  throw new Error(`Unknown standalone asset target: ${target}`);
}
