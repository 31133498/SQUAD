import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: Dangerously allow production builds with ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
