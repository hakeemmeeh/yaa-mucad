import Image from "next/image";
import Link from "next/link";

/**
 * jThemes Organic index-2–style "trusted store" band + newsletter CTA (B2B: leads to contact).
 */
export default function TrustedBand() {
  return (
    <section
      className="section-padding"
      style={{
        background: "var(--color-primary-lt)",
        borderTop: "1px solid var(--color-border-lt)",
        borderBottom: "1px solid var(--color-border-lt)",
      }}
    >
      <div className="container-main" style={{ padding: "0 24px" }}>
        <div className="trusted-band">
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              minHeight: 320,
              background: "var(--color-bg-white)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.06)",
              border: "8px solid white",
            }}
          >
            <Image
              src="/placeholders/farm.jpg"
              alt="Kenyan highland farmland"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              Fresh from our farms
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                color: "var(--color-text)",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              Trusted partner for{" "}
              <span className="primary-em">conscious importing</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--color-text-mid)",
                lineHeight: 1.8,
                marginBottom: 28,
                maxWidth: 540,
              }}
            >
              Premium Kenyan fruits and vegetables for GCC and European buyers — farm-direct sourcing, full
              certification, and cold chain you can rely on. Tell us what you need; we respond within 24 hours.
            </p>

            <form
              action="/contact"
              method="get"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                alignItems: "center",
              }}
            >
              <input
                type="email"
                name="prefill"
                placeholder="Your work email"
                className="form-input"
                style={{
                  flex: "1 1 220px",
                  minWidth: 200,
                  borderRadius: "var(--radius-full)",
                  padding: "14px 22px",
                  border: "1px solid var(--color-border)",
                }}
              />
              <Link
                href="/contact"
                className="btn-olive"
                style={{ padding: "14px 28px", whiteSpace: "nowrap" }}
              >
                Get trade updates →
              </Link>
            </form>
            <p
              style={{
                marginTop: 12,
                fontSize: 12,
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-body)",
              }}
            >
              No spam — export buyers only. Or{" "}
              <Link href="/products" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                browse the catalogue
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
