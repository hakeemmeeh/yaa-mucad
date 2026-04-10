import { certifications } from "@/data/certifications";
import SectionHeader from "@/components/shared/SectionHeader";

export default function CertGrid() {
  return (
    <section className="section-padding" style={{ background: "var(--color-bg-white)" }}>
      <div className="container-main" style={{ padding: "0 24px" }}>
        <SectionHeader
          eyebrow="CERTIFICATIONS & COMPLIANCE"
          title="We Clear Every Border"
          titleEm="Before You Do"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 28,
          }}
        >
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="hover-lift"
              style={{
                background: "var(--color-primary-lt)",
                borderRadius: "var(--radius-lg)",
                padding: "28px 24px",
                border: "1px solid var(--color-border-lt)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  background: "var(--color-bg-white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  marginBottom: 18,
                  border: "1px solid var(--color-border-lt)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                {cert.icon}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: 10,
                }}
              >
                {cert.name}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--color-text-mid)",
                  lineHeight: 1.6,
                }}
              >
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
