type GHCTrainingLogoProps = {
  size?: "sm" | "md" | "lg";
  darkText?: boolean;
  showText?: boolean;
  tagline?: boolean;
};

export default function GHCTrainingLogo({
  size = "md",
  darkText = true,
  showText = true,
  tagline = true,
}: GHCTrainingLogoProps) {
  const sizes = {
    sm: { mark: 34, title: 15, subtitle: 8, gap: 10 },
    md: { mark: 46, title: 20, subtitle: 9, gap: 13 },
    lg: { mark: 64, title: 30, subtitle: 12, gap: 18 },
  };

  const current = sizes[size];
  const mainText = darkText ? "#101412" : "#F2F4F1";
  const mutedText = darkText ? "rgba(16,20,18,0.68)" : "rgba(242,244,241,0.72)";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: current.gap,
      }}
    >
      <div
        style={{
          width: current.mark,
          height: current.mark,
          position: "relative",
          display: "grid",
          placeItems: "center",
          borderRadius: Math.round(current.mark * 0.26),
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.16), rgba(34,214,91,0.12)), #080B0A",
          border: "1px solid rgba(255,255,255,0.20)",
          boxShadow: "0 16px 35px rgba(0,0,0,0.18), 0 0 34px rgba(34,214,91,0.12)",
          overflow: "hidden",
        }}
      >
        <svg
          width={Math.round(current.mark * 0.76)}
          height={Math.round(current.mark * 0.76)}
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M50 5L88.97 27.5V72.5L50 95L11.03 72.5V27.5L50 5Z"
            stroke="url(#ghcOuterGradientTraining)"
            strokeWidth="8.5"
            strokeLinejoin="round"
          />
          <path
            d="M50 22L74 36V64L50 78L26 64V36L50 22Z"
            stroke="rgba(242,244,241,0.72)"
            strokeWidth="7.5"
            strokeLinejoin="round"
          />
          <path
            d="M50 22L74 36V64L50 78L26 64V36L50 22Z"
            stroke="url(#ghcInnerGradientTraining)"
            strokeWidth="7.5"
            strokeLinejoin="round"
            strokeDasharray="106 85"
            strokeLinecap="round"
          />
          <path
            d="M66 39H51C42.7 39 36 45.7 36 54C36 62.3 42.7 69 51 69H66"
            stroke="#22D65B"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M51 54H73"
            stroke="#22D65B"
            strokeWidth="8.5"
            strokeLinecap="round"
          />
          <path
            d="M51 54H62"
            stroke="rgba(242,244,241,0.76)"
            strokeWidth="4.8"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="ghcOuterGradientTraining"
              x1="18"
              y1="10"
              x2="84"
              y2="92"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F2F4F1" stopOpacity="0.96" />
              <stop offset="0.48" stopColor="#8A8F98" stopOpacity="0.72" />
              <stop offset="1" stopColor="#22D65B" stopOpacity="0.96" />
            </linearGradient>
            <linearGradient
              id="ghcInnerGradientTraining"
              x1="26"
              y1="24"
              x2="75"
              y2="76"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F2F4F1" stopOpacity="0.72" />
              <stop offset="1" stopColor="#22D65B" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 72% 72%, rgba(34,214,91,0.22), transparent 42%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {showText && (
        <div style={{ display: "grid", gap: size === "lg" ? 5 : 2, lineHeight: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: size === "lg" ? 13 : 8 }}>
            <span
              style={{
                fontSize: current.title,
                fontWeight: 950,
                letterSpacing: "0.16em",
                color: mainText,
              }}
            >
              GHC
            </span>
            <span
              style={{
                fontSize: Math.round(current.title * 0.82),
                fontWeight: 600,
                letterSpacing: "0.30em",
                color: mutedText,
              }}
            >
              TRAINING
            </span>
          </div>
          {tagline && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: size === "lg" ? 48 : 30, height: 1, background: "#22D65B", opacity: 0.82 }} />
              <span
                style={{
                  fontSize: current.subtitle,
                  fontWeight: 900,
                  letterSpacing: "0.26em",
                  color: "#22D65B",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Health Through Strength
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
