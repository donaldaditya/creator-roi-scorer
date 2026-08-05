import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.da-system.ai";
const TITLE = "DA System";
const DESCRIPTION = "AI tools built to extend human judgement. Six production tools on the Anthropic API, deployed inside a live P&L.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Donald Aditya · DA System", template: "%s · Donald Aditya · DA System" },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
