"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/markets", label: "Markets" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} style={{ position: "relative" }}>
      <div
        className="container-main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 72,
          padding: "0 24px",
          position: "relative",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", zIndex: 2 }}>
          <Image src="/logo/logo.svg" alt="Yaa Mucaad" width={176} height={44} priority />
        </Link>

        <div
          className="hidden md:flex"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            alignItems: "center",
            gap: 28,
            zIndex: 1,
          }}
        >
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={`nav-link ${pathname === link.href ? "active" : ""}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, zIndex: 2 }}>
          <Link href="/contact" className="btn-olive hidden md:inline-flex" style={{ fontSize: 13, padding: "10px 20px" }}>
            Trade Enquiry
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Toggle mobile menu"
          >
            <span
              style={{
                width: 24,
                height: 2,
                background: "var(--color-primary)",
                display: "block",
                transition: "all 0.3s",
                transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              style={{
                width: 24,
                height: 2,
                background: "var(--color-primary)",
                display: "block",
                transition: "all 0.3s",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: 24,
                height: 2,
                background: "var(--color-primary)",
                display: "block",
                transition: "all 0.3s",
                transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`} style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid var(--color-bg-light)",
          }}
        >
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "22px", color: "var(--color-primary)" }}>
            Yaa Mucaad
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#4A5C2F" }}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "24px", gap: 0 }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: "16px 0",
                borderBottom: "1px solid var(--color-bg-light)",
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: pathname === link.href ? 600 : 400,
                color: pathname === link.href ? "var(--color-primary)" : "var(--color-text)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-olive"
            style={{ marginTop: 24, justifyContent: "center" }}
          >
            Trade Enquiry
          </Link>
        </div>
      </div>
    </nav>
  );
}
