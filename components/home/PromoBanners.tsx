import Image from "next/image";
import Link from "next/link";

export default function PromoBanners() {
  return (
    <section
      className="section-padding"
      style={{
        background: "var(--color-bg-light)",
        borderTop: "1px solid var(--color-border-lt)",
      }}
    >
      <div className="container-main" style={{ padding: "0 24px" }}>
        <div
          className="eyebrow"
          style={{ textAlign: "center", marginBottom: 12, letterSpacing: "0.2em" }}
        >
          Best trending
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(26px, 4vw, 36px)",
            fontWeight: 700,
            textAlign: "center",
            color: "var(--color-text)",
            marginBottom: 40,
          }}
        >
          Seasonal highlights from{" "}
          <span className="primary-em">our export range</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: 32,
          }}
        >
          <div
            className="hover-lift"
            style={{
              background: "var(--color-bg-white)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--color-border-lt)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ position: "relative", height: 220, background: "#ffffff" }}>
              <Image
                src="/placeholders/farm.jpg"
                alt="Premium Kenyan avocados"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 72,
                }}
              >
                🥑
              </div>
            </div>
            <div style={{ padding: "32px 28px" }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>
                Seasonal · Mar–Oct
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: 12,
                }}
              >
                Premium Kenyan avocados
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--color-text-mid)",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                Hass & Fuerte · GCC & EU markets · GlobalGAP pathways.
              </p>
              <Link
                href="/products?category=Fruits"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "var(--color-primary-dk)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Shop range →
              </Link>
            </div>
          </div>

          <div
            className="hover-lift"
            style={{
              background: "linear-gradient(145deg, #fff9f0 0%, var(--color-gold-pale) 100%)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              border: "1px solid rgba(232, 163, 55, 0.25)",
              boxShadow: "0 8px 32px rgba(184, 134, 11, 0.06)",
            }}
          >
            <div style={{ position: "relative", height: 220, background: "#ffffff" }}>
              <Image
                src="/placeholders/farm.jpg"
                alt="Fresh vegetables for export"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 72,
                }}
              >
                🫛
              </div>
            </div>
            <div style={{ padding: "32px 28px" }}>
              <div className="eyebrow" style={{ marginBottom: 10, color: "var(--color-gold-dk)" }}>
                Year-round supply
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: 12,
                }}
              >
                Vegetables for retail & food service
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--color-text-mid)",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                French beans, snaps, baby corn & more — graded to your spec.
              </p>
              <Link
                href="/products?category=Vegetables"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "var(--color-primary-dk)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Shop range →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
