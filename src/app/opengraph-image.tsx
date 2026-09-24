import { ImageResponse } from "next/og";

export const alt = "Sahil Mansuri — Flutter Developer in Jaipur | Mobile App Developer";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#fbfbfb",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative Grid Line Borders */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "1px solid rgba(17, 17, 16, 0.12)",
            borderRadius: 16,
            pointerEvents: "none",
          }}
        />

        {/* Top Telemetry / Status Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "rgba(23, 55, 83, 0.08)",
              padding: "8px 18px",
              borderRadius: 9999,
              border: "1px solid rgba(23, 55, 83, 0.15)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#173753",
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#173753",
                textTransform: "uppercase",
              }}
            >
              SAHIL MANSURI // MOBILE LAB
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#ffffff",
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid rgba(17, 17, 16, 0.08)",
              fontSize: 13,
              fontWeight: 600,
              color: "#173753",
              letterSpacing: "0.08em",
            }}
          >
            1M+ GOOGLE PLAY DOWNLOADS
          </div>
        </div>

        {/* Center Main Headline & Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <h1
            style={{
              fontSize: 58,
              fontWeight: 900,
              color: "#111110",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Sahil Mansuri
          </h1>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#173753",
              letterSpacing: "-0.01em",
            }}
          >
            Flutter Developer &amp; Mobile App Developer
          </div>
          <p
            style={{
              fontSize: 18,
              color: "#5a5a62",
              lineHeight: 1.4,
              maxWidth: 950,
              margin: 0,
            }}
          >
            Building production mobile applications for iOS &amp; Android. Specializing in Flutter, Kotlin, Jetpack Compose, Bloc, Firebase, and Clean Architecture.
          </p>
        </div>

        {/* Bottom Tech Pills & Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(17, 17, 16, 0.08)",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Bloc", "Firebase", "REST APIs"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#173753",
                    backgroundColor: "#f4f5f6",
                    padding: "6px 14px",
                    borderRadius: 6,
                    border: "1px solid rgba(17, 17, 16, 0.06)",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>

          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#8b8b94",
              letterSpacing: "0.05em",
            }}
          >
            Jaipur, Rajasthan, India
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
