import type { NextConfig } from "next";

const { NODE_ENV: APP_ENV } = process.env;

const nextConfig: NextConfig = {
  /* config options here */
  // distDir: "../dist",
  poweredByHeader: false,
  productionBrowserSourceMaps: APP_ENV === "production",
  env: {
    APP_ENV,
  },
  experimental: {
    webpackBuildWorker: true,
    webpackMemoryOptimizations: true,
  },
  i18n: {
    locales: ["en-US", "pt-BR", "es-NL"],
    defaultLocale: "pt-BR",
  },
  headers: async () => [
    {
      source: "/manifest.json",
      headers: [{ key: "cache-control", value: "max-age=2628000" }], // a month in seconds
    },
  ],
};

export default nextConfig;
