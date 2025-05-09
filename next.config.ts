import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  unoptimized: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/men/**",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
