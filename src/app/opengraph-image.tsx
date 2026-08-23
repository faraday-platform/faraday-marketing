import { ImageResponse } from "next/og";

export const alt =
  "Faraday Capital Systems — The control plane for governed AI and business systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Rendered by Satori, which inherits neither Tailwind nor the CSS custom
 * properties in globals.css. Every value below is the resolved literal from the
 * @theme block, and every element with more than one child sets display:"flex"
 * explicitly — Satori throws at render time without it.
 */
const BACKGROUND = "#08080f";
const HEADING = "#ffffff";
const MUTED = "#777777";
const ACCENT = "#6366f1";
const ACCENT_LIGHT = "#818cf8";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BACKGROUND,
          padding: "72px 80px",
          fontFamily:
            '"Helvetica Neue", Helvetica, Arial, "DejaVu Sans", sans-serif',
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_LIGHT})`,
              color: HEADING,
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div
            style={{
              marginLeft: 20,
              color: HEADING,
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Faraday Capital Systems
          </div>
        </div>

        {/* Positioning */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: HEADING,
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.035em",
              maxWidth: 940,
            }}
          >
            The control plane for governed AI and business systems
          </div>
        </div>

        {/* Principle */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 4,
              height: 46,
              backgroundColor: ACCENT,
              borderRadius: 2,
              display: "flex",
            }}
          />
          <div
            style={{
              marginLeft: 22,
              color: ACCENT_LIGHT,
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Capability is not authority.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
