import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/instagram",
        destination: "https://instagram-da-production.up.railway.app/",
      },
      {
        source: "/instagram/:path*",
        destination: "https://instagram-da-production.up.railway.app/:path*",
      },
    ];
  },
};

export default nextConfig;
