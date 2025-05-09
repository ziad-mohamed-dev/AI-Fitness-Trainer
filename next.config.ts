import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      new URL("https://randomuser.me/api/portraits/men/**"),
      new URL("https://img.clerk.com/**"),
    ],
  },
  /* config options here */
};

export default nextConfig;
