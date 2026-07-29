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
      // Tool 06 — DA Trading (separate Vercel project "da-system",
      // built with basePath /da_trading so pages + assets all live
      // under this prefix; invite-gated inside the app itself)
      {
        source: "/da_trading",
        destination: "https://da-system-beta.vercel.app/da_trading",
      },
      {
        source: "/da_trading/:path*",
        destination: "https://da-system-beta.vercel.app/da_trading/:path*",
      },
    ];
  },
};

export default nextConfig;
