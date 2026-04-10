"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import FilterTabs, { FEATURED_PRODUCT_TABS } from "@/components/products/FilterTabs";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = products.filter(p => {
    if (activeTab === "All") return true;
    if (activeTab === "GCC") return p.market === "gcc" || p.market === "both";
    if (activeTab === "Europe") return p.market === "eu" || p.market === "both";
    return p.category === activeTab;
  }).slice(0, 8);

  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, var(--color-primary-lt) 0%, var(--color-bg-white) 50%)",
        borderBottom: "1px solid var(--color-border-lt)",
      }}
    >
      <div className="container-main" style={{ padding: '0 24px' }}>
        <SectionHeader
          eyebrow="EXPORT CATALOGUE"
          title="Our"
          titleEm="Export Products"
        />

        <FilterTabs tabs={FEATURED_PRODUCT_TABS} active={activeTab} onChange={setActiveTab} />

        <div className="reveal" style={{ marginBottom: 48, animationDelay: '0.4s' }}>
          <ProductGrid>
          {filtered.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
          </ProductGrid>
        </div>

        {/* View All Link */}
        <div style={{ textAlign: 'center' }}>
          <Button href="/products" variant="outline">
            View Full Catalogue →
          </Button>
        </div>
      </div>
    </section>
  );
}
