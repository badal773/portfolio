import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/portfolio/',
  basePath: '/portfolio',
  output: 'export'
};


export default nextConfig;
