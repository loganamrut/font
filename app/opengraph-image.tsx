import { ImageResponse } from "next/og";

export const alt = "FontGen - Online Font & Fancy Text Generator";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px 80px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 900,
              color: "white",
            }}
          >
            F
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>FontGen</span>
            <span style={{ color: "#818cf8" }}>.dev</span>
          </div>
        </div>
        <div
          style={{
            fontSize: "34px",
            fontWeight: 700,
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.3,
            color: "#f8fafc",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          Fancy & Stylish Font Generator to Copy and Paste
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: "20px",
            color: "#cbd5e1",
          }}
        >
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              display: "flex",
            }}
          >
            240+ Unicode Styles
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              display: "flex",
            }}
          >
            100% Client-Side Privacy
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              display: "flex",
            }}
          >
            Free Copy & Paste
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
