import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/portfolio/',
  basePath: '/portfolio',
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio',
  },
};

export default nextConfig;
