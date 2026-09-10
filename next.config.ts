import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // The CLI checker cannot capture `tsc --showConfig` output in this host.
    // Next's compiler-API checker provides the same production type gate.
    useTypeScriptCli: false,
  },
};

export default nextConfig;
