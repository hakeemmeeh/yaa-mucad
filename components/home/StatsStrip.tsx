"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "14+", label: "Export Products" },
  { value: "GCC & EU", label: "Markets Served" },
  { value: "52", label: "Weeks Supply" },
  { value: "24h", label: "Response Time" },
];

export default function StatsStrip() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "var(--color-primary-dk)",
        padding: "clamp(2.5rem, 6vw, 3.75rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 45%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="container-main"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 32,
          padding: "0 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(15px)",
              transition: `all 0.6s ease ${i * 0.12}s`,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 42px)",
                fontWeight: 700,
                color: "var(--color-gold)",
                marginBottom: 6,
                lineHeight: 1.1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "rgba(255,255,255,0.88)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
