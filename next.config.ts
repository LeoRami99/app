import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['rickandmortyapi.com'],
  }
};

export default nextConfig;
