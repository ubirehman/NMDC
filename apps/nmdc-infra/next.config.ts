import type { NextConfig } from "next";
import path from "node:path";

const basePath = process.env.NEXT_PUBLIC_INFRA_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  devIndicators: false,
  output: "standalone",
  turbopack: {
    root: path.resolve(process.cwd(), "../.."),
  },
};

export default nextConfig;
