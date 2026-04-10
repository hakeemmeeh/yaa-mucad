"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSearchBar() {
  const router = useRouter();
  const [q, setQ] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = q.trim();
    if (trimmed) {
      router.push(`/products?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="reveal"
      style={{
        display: "flex",
        background: "white",
        borderRadius: "var(--radius-full)",
        padding: "6px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        maxWidth: 520,
        marginBottom: 32,
        border: "1px solid var(--color-border-lt)",
      }}
    >
      <input
        type="search"
        name="q"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search catalogue (avocado, beans, mango…)"
        aria-label="Search products"
        style={{
          flex: 1,
          border: "none",
          background: "transparent",
          padding: "0 24px",
          fontFamily: "var(--font-body)",
          fontSize: 15,
          outline: "none",
          color: "var(--color-text)",
        }}
      />
      <button
        type="submit"
        style={{
          background: "var(--color-primary)",
          color: "white",
          border: "none",
          borderRadius: "var(--radius-full)",
          padding: "12px 28px",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}
