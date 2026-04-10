import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary-dk)', color: 'white', fontFamily: 'var(--font-body)' }}>
      <div className="container-main" style={{ padding: '60px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: 12 }}>
              <Image src="/logo/logo-white.svg" alt="Yaa Mucaad" width={176} height={44} />
            </Link>
            <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.8, marginBottom: 16 }}>
              Premium Kenyan fruits and vegetables, exported to GCC and European markets with full certification and cold chain integrity.
            </p>
            <div style={{ fontSize: "12px", color: 'white', fontStyle: 'italic', letterSpacing: '0.05em', opacity: 0.9 }}>
              &ldquo;Mother of Promise&rdquo;
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: "20px", fontWeight: 600, color: 'white', marginBottom: '16px' }}>
              Products
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {["Hass Avocado", "Mango", "French Beans", "Passion Fruit", "Sugar Snap Peas", "Fresh Herbs"].map(p => (
                <Link key={p} href="/products" style={{ color: 'white', textDecoration: 'none', fontSize: "13px", opacity: 0.8, transition: 'opacity 0.2s' }}>
                  {p}
                </Link>
              ))}
            </div>
          </div>

          {/* Markets */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: "20px", fontWeight: 600, color: 'white', marginBottom: '16px' }}>
              Markets
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link href="/markets" style={{ color: '#D6E0C0', textDecoration: 'none', fontSize: 13, opacity: 0.8 }}>🇦🇪 UAE</Link>
              <Link href="/markets" style={{ color: '#D6E0C0', textDecoration: 'none', fontSize: 13, opacity: 0.8 }}>🇸🇦 Saudi Arabia</Link>
              <Link href="/markets" style={{ color: '#D6E0C0', textDecoration: 'none', fontSize: 13, opacity: 0.8 }}>🇳🇱 Netherlands</Link>
              <Link href="/markets" style={{ color: '#D6E0C0', textDecoration: 'none', fontSize: 13, opacity: 0.8 }}>🇩🇪 Germany</Link>
              <Link href="/markets" style={{ color: '#D6E0C0', textDecoration: 'none', fontSize: 13, opacity: 0.8 }}>🇬🇧 United Kingdom</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: "20px", fontWeight: 600, color: 'white', marginBottom: '16px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
              <div>📍 Nairobi, Kenya</div>
              <div>📧 exports@yaamucaad.com</div>
              <div>📞 +254 [TBC by client]</div>
              <div>🕐 Mon–Fri 08:00–17:00 EAT</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          fontSize: 12,
          opacity: 0.7,
        }}>
          <div>© {new Date().getFullYear()} Yaa Mucaad Global Fruits Export Ltd. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span className="cert-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 'var(--radius-full)' }}>✓ GlobalGAP</span>
            <span className="cert-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 'var(--radius-full)' }}>✓ KEPHIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
