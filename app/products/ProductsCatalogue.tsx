"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import FilterSidebar from "@/components/products/FilterSidebar";
import PageBanner from "@/components/shared/PageBanner";
import CategoryCircles from "@/components/home/CategoryCircles";
import CtaBanner from "@/components/home/CtaBanner";

const CATEGORIES = ["All", "Fruits", "Vegetables", "Herbs"] as const;

function matchesQuery(p: (typeof products)[0], q: string) {
  if (!q.trim()) return true;
  const n = q.toLowerCase();
  return (
    p.name.toLowerCase().includes(n) ||
    p.slug.toLowerCase().includes(n) ||
    p.category.toLowerCase().includes(n) ||
    p.shortDesc.toLowerCase().includes(n) ||
    p.varieties.toLowerCase().includes(n)
  );
}

export default function ProductsCatalogue() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeMarket, setActiveMarket] = useState("All");
  const [activeCert, setActiveCert] = useState("All");

  const activeCategory = useMemo(() => {
    const c = searchParams.get("category");
    if (c && (CATEGORIES as readonly string[]).includes(c)) return c;
    return "All";
  }, [searchParams]);

  const setActiveCategory = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") params.delete("category");
    else params.set("category", cat);
    const qs = params.toString();
    router.push(qs ? `/products?${qs}` : "/products");
  };

  const q = useMemo(() => searchParams.get("q")?.trim() ?? "", [searchParams]);

  const filtered = products.filter(p => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const certMatch = activeCert === "All" || p.cert === activeCert;
    const marketMatch =
      activeMarket === "All" ||
      (activeMarket === "GCC" && (p.market === "gcc" || p.market === "both")) ||
      (activeMarket === "European" && (p.market === "eu" || p.market === "both"));
    return catMatch && marketMatch && certMatch && matchesQuery(p, q);
  });

  return (
    <>
      <PageBanner
        title="Our Export Products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
        subtitle="Export-grade fruits and vegetables. Farm-direct. Fully certified."
      />

      <section
        className="section-padding"
        style={{ background: "var(--color-bg-white)", borderBottom: "1px solid var(--color-border-lt)" }}
      >
        <div className="container-main" style={{ padding: "0 24px" }}>
          <div className="eyebrow" style={{ marginBottom: 28, textAlign: "center" }}>
            EXPORT CATALOGUE
          </div>

          <div className="products-layout">
            <aside className="hidden lg:block" style={{ position: "sticky", top: 100, alignSelf: "start" }}>
              <FilterSidebar
                activeCategory={activeCategory}
                activeMarket={activeMarket}
                activeCert={activeCert}
                onCategoryChange={setActiveCategory}
                onMarketChange={setActiveMarket}
                onCertChange={setActiveCert}
              />
            </aside>

            <main>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--color-text-mid)",
                  marginBottom: 24,
                  fontWeight: 500,
                }}
              >
                Showing {filtered.length} of {products.length} products
                {q ? (
                  <>
                    {" "}
                    for &ldquo;{q}&rdquo;
                  </>
                ) : null}
              </div>

              <ProductGrid>
                {filtered.map(product => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </ProductGrid>

              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <p style={{ fontFamily: "var(--font-body)", color: "var(--color-text-muted)" }}>
                    No products match your filters or search.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("All");
                      setActiveMarket("All");
                      setActiveCert("All");
                      router.push("/products");
                    }}
                    className="btn-outline"
                    style={{ marginTop: 16 }}
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      <CategoryCircles />
      <CtaBanner />
    </>
  );
}
