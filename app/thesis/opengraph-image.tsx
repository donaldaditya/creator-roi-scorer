import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TITLE = "The AI race moved from capability to commercialisation";
const DESCRIPTION =
  "Companies buy AI at scale and cannot find the return in gross margin, headcount or cycle time. The scarce skill is getting a model into a business and keeping it there.";

export default async function Image() {
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
          background: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 15, color: "#9ca3af", letterSpacing: 4, textTransform: "uppercase", marginBottom: 28 }}>
          Thesis
        </div>
        <div style={{ fontSize: 48, color: "#111827", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 980 }}>
          {TITLE}
        </div>
        <div style={{ fontSize: 20, color: "#6b7280", marginTop: 32, maxWidth: 820, lineHeight: 1.5 }}>
          {DESCRIPTION}
        </div>
        <div style={{ fontSize: 18, color: "#9ca3af", marginTop: 48 }}>da-system.ai</div>
      </div>
    ),
    { ...size }
  );
}
