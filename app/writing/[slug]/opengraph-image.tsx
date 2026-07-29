import { ImageResponse } from "next/og";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.title ?? "DA System";
  const description = post?.description ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b1a2e",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 15, color: "#85B7EB", letterSpacing: 4, textTransform: "uppercase", marginBottom: 28 }}>
          Writing — DA System
        </div>
        <div style={{ fontSize: 48, color: "#ffffff", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 980 }}>
          {title}
        </div>
        {description && (
          <div style={{ fontSize: 20, color: "#6f8caf", marginTop: 32, maxWidth: 820, lineHeight: 1.5 }}>
            {description}
          </div>
        )}
        <div style={{ fontSize: 18, color: "#6f8caf", marginTop: 48 }}>
          da-system.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
