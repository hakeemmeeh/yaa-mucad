import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import PageBanner from "@/components/shared/PageBanner";
import CtaBanner from "@/components/home/CtaBanner";
import GoldDivider from "@/components/shared/GoldDivider";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Yaa Mucaad Export`,
    description: product.fullDesc,
  };
}

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();

  const related = products.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const marketLabel = product.market === "both" ? "GCC + EU" : product.market === "gcc" ? "GCC" : "EU";

  return (
    <>
      <PageBanner
        title={product.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      {/* Product Detail */}
      <section className="section-padding" style={{ background: '#FDFAF4' }}>
        <div className="container-main product-detail-two-col">
          <div
            style={{
              position: "relative",
              borderRadius: 12,
              overflow: "hidden",
              minHeight: 400,
              background: "#ffffff",
              border: "1px solid var(--color-border-lt)",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              unoptimized={product.image.endsWith(".svg")}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Details */}
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              <span style={{
                padding: '4px 12px', background: '#4A5C2F', color: 'white',
                fontSize: 11, fontWeight: 600, borderRadius: 4,
                fontFamily: 'DM Sans, sans-serif',
              }}>
                {product.category}
              </span>
              <span style={{
                padding: '4px 12px', background: '#FBF3DC', color: '#8A6B2A',
                fontSize: 11, fontWeight: 600, borderRadius: 4,
                fontFamily: 'DM Sans, sans-serif',
              }}>
                {marketLabel}
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 40,
              fontWeight: 700,
              color: '#4A5C2F',
              marginBottom: 12,
            }}>
              {product.name}
            </h1>

            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              fontStyle: 'italic',
              color: '#888878',
              marginBottom: 20,
            }}>
              Varieties: {product.varieties}
            </div>

            <GoldDivider />

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: '#555545',
              lineHeight: 1.8,
              marginBottom: 36,
              marginTop: 20,
            }}>
              {product.fullDesc}
            </p>

            {/* Info Rows */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              marginBottom: 40,
              padding: 24,
              background: '#EEF2E6',
              borderRadius: 8,
            }}>
              {[
                { label: "Season", value: product.season },
                { label: "Certification", value: product.cert },
                { label: "Packaging", value: product.packaging },
                { label: "MOQ", value: product.moq },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: i < 3 ? '1px solid #D6E0C0' : 'none',
                }}>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 13,
                    color: '#888878',
                    fontWeight: 500,
                  }}>
                    {row.label}
                  </span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 13,
                    color: '#2A2A1E',
                    fontWeight: 500,
                  }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={`/contact?product=${product.slug}`}
              className="btn-olive"
              style={{ width: '100%', justifyContent: 'center', padding: '14px 28px', fontSize: 15, marginBottom: 20 }}
            >
              Request Inquiry for This Product →
            </Link>

            <Link
              href="/products"
              style={{
                display: 'block',
                textAlign: 'center',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                color: '#8A6B2A',
                textDecoration: 'none',
              }}
            >
              ← Back to Catalogue
            </Link>
          </div>
        </div>

      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section-padding" style={{ background: '#F5F0E4' }}>
          <div className="container-main" style={{ padding: '0 24px' }}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 28,
              fontWeight: 600,
              color: '#4A5C2F',
              textAlign: 'center',
              marginBottom: 32,
            }}>
              More <em style={{ color: '#8A6B2A', fontStyle: 'italic' }}>Export Products</em>
            </h2>
            <ProductGrid>
              {related.map(p => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </ProductGrid>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
