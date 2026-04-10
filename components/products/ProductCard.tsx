import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const marketLabel =
    product.market === "both" ? "GCC+EU" : product.market === "gcc" ? "GCC" : "EU";

  return (
    <div
      className="product-card"
      style={{
        background: "white",
        borderRadius: "24px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #f0f0f0",
        transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
        height: "100%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "1 / 1",
          width: "100%",
          background: "#ffffff",
          borderBottom: "1px solid var(--color-border-lt)",
          overflow: "hidden",
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized={product.image.endsWith(".svg")}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="product-img-default object-cover"
          style={{ transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)" }}
        />

        <span
          style={{
            position: "absolute",
            top: 15,
            left: 15,
            padding: "5px 12px",
            background: "var(--color-primary)",
            color: "white",
            fontSize: "11px",
            fontWeight: 700,
            borderRadius: "var(--radius-full)",
            fontFamily: "var(--font-body)",
          }}
        >
          {product.category}
        </span>

        <span
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            padding: "4px 10px",
            background: "var(--color-gold-pale)",
            color: "var(--color-gold-dk)",
            fontSize: "10px",
            fontWeight: 600,
            borderRadius: "4px",
            fontFamily: "var(--font-body)",
          }}
        >
          {marketLabel}
        </span>

        <span
          style={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "4px 12px",
            background: "rgba(255,255,255,0.9)",
            color: "#555545",
            fontSize: 11,
            fontWeight: 500,
            borderRadius: 20,
            fontFamily: "DM Sans, sans-serif",
            backdropFilter: "blur(4px)",
          }}
        >
          {product.season}
        </span>
      </div>

      <div style={{ padding: "32px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div 
          className="eyebrow" 
          style={{ 
            marginBottom: 12, 
            letterSpacing: '0.15em', 
            fontSize: '10px', 
            fontWeight: 700,
            color: 'var(--color-primary)'
          }}
        >
          {product.category.toUpperCase()}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "24px",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "10px",
            lineHeight: 1.1,
          }}
        >
          {product.name}
        </h3>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--color-text-mid)",
            marginBottom: "20px",
            opacity: 0.8,
          }}
        >
          {product.varieties}
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "var(--color-text-mid)",
            lineHeight: 1.7,
            marginBottom: "24px",
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.shortDesc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="cert-badge" style={{ 
            background: '#f9f9f5', 
            color: 'var(--color-primary)', 
            border: '1px solid #eef0e8',
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '11px',
            fontWeight: 600
          }}>
            ✓ {product.cert}
          </span>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #f5f5f5",
          padding: "24px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: '#fafafa',
        }}
      >
        <Link 
          href={`/contact?product=${product.slug}`} 
          className="btn-olive" 
          style={{ 
            fontSize: "13px", 
            padding: "10px 24px",
            borderRadius: 'var(--radius-full)',
          }}
        >
          Request Inquiry
        </Link>
        <Link
          href={`/products/${product.slug}`}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--color-text)",
            textDecoration: "none",
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          DETAILS <span style={{ color: 'var(--color-primary)' }}>→</span>
        </Link>
      </div>
    </div>
  );
}
