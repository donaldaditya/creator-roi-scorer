import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: "#111827",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            DA
          </div>
          <div style={{ fontSize: 22, color: "#111827", fontWeight: 500 }}>DA System</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 54, color: "#111827", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          <div>AI tools built to</div>
          <div style={{ color: "#9ca3af" }}>extend human judgement</div>
        </div>
        <div style={{ fontSize: 22, color: "#6b7280", marginTop: 32, maxWidth: 780 }}>
          Six production tools on the Anthropic API, deployed inside a live P&amp;L.
        </div>
      </div>
    ),
    { ...size }
  );
}
