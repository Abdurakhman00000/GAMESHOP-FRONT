import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["psgamezz.ru"],
  },
  env: {
    NEXT_PUBLIC_DATABASE_API: process.env.NEXT_PUBLIC_DATABASE_API,
  },
};

export default nextConfig;
