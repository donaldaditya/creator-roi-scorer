import type { NextConfig } from "next";

// Keep in sync with NEXT_PUBLIC_POSTHOG_REGION in lib/analytics/config.ts.
const PH = process.env.NEXT_PUBLIC_POSTHOG_REGION === "eu" ? "eu" : "us";

const nextConfig: NextConfig = {
  // Required by the /ingest proxy below: without it Next 308-redirects
  // /ingest/decide and PostHog's config request fails.
  skipTrailingSlashRedirect: true,

  async rewrites() {
    return [
      // --- PostHog reverse proxy -------------------------------------------
      // Served from our own origin so uBlock/Brave — which block
      // *.i.posthog.com by default — do not silently drop the technical
      // audience /thesis is written for. Must stay first in this array.
      {
        source: "/ingest/static/:path*",
        destination: `https://${PH}-assets.i.posthog.com/static/:path*`,
      },
      {
        source: "/ingest/:path*",
        destination: `https://${PH}.i.posthog.com/:path*`,
      },
      // ---------------------------------------------------------------------
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
