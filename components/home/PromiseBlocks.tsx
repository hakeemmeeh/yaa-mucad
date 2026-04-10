export default function PromiseBlocks() {
  const blocks = [
    { icon: "🌿", title: "Consistent Quality", desc: "Every product graded, inspected, and packed to meet retailer specifications — no exceptions." },
    { icon: "📜", title: "Full Compliance", desc: "GlobalGAP, KEPHIS, MRL testing, phytosanitary — all documentation prepared before dispatch." },
    { icon: "✈️", title: "Reliable Delivery", desc: "Year-round weekly dispatch via JKIA. Cold chain monitored from packhouse to destination airport." },
  ];

  return (
    <section
      style={{
        background: "var(--color-primary-dk)",
        padding: "clamp(3rem, 8vw, 4.5rem) 0",
      }}
    >
      <div
        className="container-main"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 28,
          padding: "0 24px",
        }}
      >
        {blocks.map((b, i) => (
          <div
            key={i}
            className="hover-lift"
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 28px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 16 }}>{b.icon}</div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                color: "white",
                marginBottom: 12,
              }}
            >
              {b.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.65,
              }}
            >
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
