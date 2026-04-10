import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, var(--color-primary-lt) 0%, var(--color-bg-white) 100%)",
        padding: "clamp(4rem, 12vw, 6rem) 0",
        borderTop: "1px solid var(--color-border-lt)",
      }}
    >
      <div className="container-main" style={{ textAlign: "center", padding: "0 24px" }}>
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 3rem)",
            background: "var(--color-bg-white)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border-lt)",
            boxShadow: "0 20px 48px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Ready to source from{" "}
            <span className="primary-em">Kenya?</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "var(--color-text-mid)",
              marginBottom: 28,
              lineHeight: 1.75,
            }}
          >
            We respond to all genuine trade enquiries within 24 hours. Let&apos;s discuss volumes, seasonality, and logistics.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/contact" className="btn-olive" style={{ fontSize: 15, padding: "15px 36px" }}>
              Send a Trade Enquiry →
            </Link>
            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: 15,
                color: "var(--color-primary-dk)",
                textDecoration: "none",
              }}
            >
              Explore catalogue →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
