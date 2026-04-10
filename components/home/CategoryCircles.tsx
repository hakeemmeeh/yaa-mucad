import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import SectionHeader from "@/components/shared/SectionHeader";

export default function CategoryCircles() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--color-bg-white)", borderTop: "1px solid var(--color-border-lt)" }}
    >
      <div className="container-main" style={{ padding: "0 24px" }}>
        <SectionHeader eyebrow="FRESH FROM OUR FARMS" title="Popular" titleEm="Categories" />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(20px, 4vw, 36px)",
            flexWrap: "wrap",
          }}
        >
          {categories.map(cat => (
            <Link
              key={cat.name}
              href={`/products?category=${cat.slug}`}
              className="category-circle"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "clamp(110px, 14vw, 140px)",
                  height: "clamp(110px, 14vw, 140px)",
                  borderRadius: "50%",
                  background: "#ffffff",
                  border: "3px solid var(--color-bg-white)",
                  boxShadow: "0 12px 28px rgba(130, 180, 64, 0.18)",
                  overflow: "hidden",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
              >
                <Image
                  src={cat.image}
                  alt=""
                  fill
                  unoptimized={cat.image.endsWith(".svg")}
                  sizes="140px"
                  className="object-cover"
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--color-text)",
                  transition: "color 0.3s ease",
                  textAlign: "center",
                  maxWidth: 120,
                }}
              >
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
