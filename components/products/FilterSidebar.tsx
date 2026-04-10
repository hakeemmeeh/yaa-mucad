"use client";

interface FilterSidebarProps {
  activeCategory: string;
  activeMarket: string;
  activeCert: string;
  onCategoryChange: (cat: string) => void;
  onMarketChange: (market: string) => void;
  onCertChange: (cert: string) => void;
}

const categories = ["All", "Fruits", "Vegetables", "Herbs"] as const;
const markets = ["All", "GCC", "European"] as const;
const certifications = ["All", "GlobalGAP", "KEPHIS"] as const;

export default function FilterSidebar({
  activeCategory,
  activeMarket,
  activeCert,
  onCategoryChange,
  onMarketChange,
  onCertChange,
}: FilterSidebarProps) {
  const renderGroup = (
    title: string,
    items: readonly string[],
    active: string,
    onSelect: (v: string) => void
  ) => (
    <>
      <h4
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: 18,
          fontWeight: 600,
          color: "#4A5C2F",
          marginBottom: 16,
        }}
      >
        {title}
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 28 }}>
        {items.map(item => (
          <button
            key={item}
            type="button"
            onClick={() => onSelect(item)}
            style={{
              textAlign: "left",
              padding: "10px 14px",
              borderRadius: 4,
              border: "none",
              background: active === item ? "#EEF2E6" : "transparent",
              color: active === item ? "#4A5C2F" : "#555545",
              fontFamily: "DM Sans, sans-serif",
              fontSize: 14,
              fontWeight: active === item ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );

  return (
    <div
      style={{
        width: "100%",
        background: "white",
        borderRadius: 8,
        border: "1px solid #EEEADC",
        padding: 24,
      }}
    >
      {renderGroup("Categories", categories, activeCategory, onCategoryChange)}
      {renderGroup("Market", markets, activeMarket, onMarketChange)}
      {renderGroup("Certification", certifications, activeCert, onCertChange)}
    </div>
  );
}
