import { Suspense } from "react";
import ProductsCatalogue from "./ProductsCatalogue";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="section-padding" style={{ background: "#FDFAF4", textAlign: "center" }}>
          <p style={{ fontFamily: "DM Sans, sans-serif", color: "#888878" }}>Loading catalogue…</p>
        </div>
      }
    >
      <ProductsCatalogue />
    </Suspense>
  );
}
