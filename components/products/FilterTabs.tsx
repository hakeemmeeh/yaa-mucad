"use client";

export const FEATURED_PRODUCT_TABS = ["All", "Fruits", "Vegetables", "Herbs", "GCC", "Europe"];

interface FilterTabsProps {
  tabs: readonly string[] | string[];
  active: string;
  onChange: (tab: string) => void;
}

export default function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginBottom: 40,
      flexWrap: 'wrap',
    }}>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          style={{
            padding: '10px 24px',
            borderRadius: 'var(--radius-full)',
            border: '2px solid',
            borderColor: active === tab ? 'var(--color-primary)' : '#eeeeee',
            background: active === tab ? 'var(--color-primary)' : 'white',
            color: active === tab ? 'white' : 'var(--color-text)',
            fontFamily: 'var(--font-body)',
            fontSize: "14px",
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
