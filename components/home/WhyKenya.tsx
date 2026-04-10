import GoldDivider from "@/components/shared/GoldDivider";

type WhyKenyaVariant = "home" | "about";

const features = [
  { icon: "🌾", title: "Farm-Direct", desc: "We work directly with certified growers and cooperatives — no middlemen, consistent quality." },
  { icon: "❄️", title: "Cold Chain", desc: "Pre-cooling at source, refrigerated transport, and temperature-controlled holding at JKIA." },
  { icon: "📋", title: "Full Docs", desc: "Phytosanitary, health certificates, origin docs, MRL reports — every border requirement covered." },
  { icon: "✈️", title: "Air Freight", desc: "Direct flights from JKIA to GCC in 4–6 hours. To Europe in 8–11 hours. Weekly dispatch." },
];

const aboutStats = ["1,500–2,800m Altitude", "Volcanic Soils", "Year-Round Rain", "Farm-Direct"];

export default function WhyKenya({ variant = "home" }: { variant?: WhyKenyaVariant }) {
  return (
    <section className="section-padding" style={{ background: "var(--color-paper)" }}>
      <div className="container-main why-kenya-grid">
        <div>
          {variant === "about" && (
            <div className="eyebrow" style={{ marginBottom: 12 }}>
              KENYA&apos;S ADVANTAGE
            </div>
          )}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "36px",
              fontWeight: 700,
              color: "var(--color-text)",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            Sourced from <br />
            <span className="primary-em">Africa&apos;s Organic Garden</span>
          </h2>
          <GoldDivider />
          {variant === "about" && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 16,
                marginBottom: 20,
                fontFamily: "DM Sans, sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#7A9148",
                letterSpacing: "0.06em",
              }}
            >
              {aboutStats.map(s => (
                <span
                  key={s}
                  style={{
                    padding: "6px 12px",
                    background: "#EEF2E6",
                    borderRadius: 20,
                    border: "1px solid #D6E0C0",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          )}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--color-text-mid)",
              lineHeight: 1.8,
              maxWidth: "480px",
              marginBottom: "32px",
              marginTop: variant === "home" ? "16px" : "0",
            }}
          >
            Kenya sits at the intersection of perfect altitude and equatorial sun. Our volcanic soils and consistent rainfall
            create a horticultural origin without peer. We bring this natural luxury directly to your supply chain.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-olive-pale)",
                borderRadius: "8px",
                padding: "32px",
                transition: "all 0.3s ease",
                border: "1px solid var(--color-border-lt)",
              }}
              className="hover-lift"
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  marginBottom: "8px",
                }}
              >
                {f.title}
              </h4>
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 13,
                  color: "#555545",
                  lineHeight: 1.6,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
