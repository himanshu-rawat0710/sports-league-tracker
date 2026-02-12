import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.thesportsdb.com", //  - Whitelisting the badge image domain
      },
      {
        protocol: "https",
        hostname: "www.thesportsdb.com", // Just in case they serve from main domain
      },
    ],
  },
};

export default nextConfig;