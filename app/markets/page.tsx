import type { Metadata } from "next";
import PageBanner from "@/components/shared/PageBanner";
import { markets } from "@/data/markets";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Markets We Serve | Yaa Mucaad",
  description: "Two Continents. One Reliable Source. Yaa Mucaad exports premium Kenyan fresh produce to GCC and European markets.",
};

export default function MarketsPage() {
  return (
    <>
      <PageBanner
        title="Markets We Serve"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Markets" },
        ]}
        subtitle="Two Continents. One Reliable Source."
      />

      {/* Market Cards */}
      <section className="section-padding" style={{ background: '#FDFAF4' }}>
        <div className="container-main" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 32,
          padding: '0 24px',
        }}>
          {/* GCC Card */}
          <div style={{
            background: '#EEF2E6',
            borderRadius: 12,
            padding: 40,
            border: '1px solid #D6E0C0',
          }}>
            <div style={{ fontSize: 32, marginBottom: 16, letterSpacing: 4 }}>{markets.gcc.flags}</div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>{markets.gcc.label}</div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 32,
              fontWeight: 600,
              color: '#4A5C2F',
              marginBottom: 16,
            }}>
              {markets.gcc.title}
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              color: '#555545',
              lineHeight: 1.7,
              marginBottom: 24,
            }}>
              {markets.gcc.copy}
            </p>

            {/* Country Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {markets.gcc.countries.map(c => (
                <span key={c} style={{
                  padding: '6px 14px',
                  background: 'white',
                  borderRadius: 20,
                  fontSize: 12,
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  color: '#4A5C2F',
                }}>
                  {c}
                </span>
              ))}
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#555545' }}>
              <div>✈️ Transit: {markets.gcc.transit}</div>
              <div>📋 Incoterms: {markets.gcc.incoterms}</div>
              <div>🥭 Key products: {markets.gcc.products.join(", ")}</div>
            </div>
          </div>

          {/* Europe Card */}
          <div style={{
            background: '#FBF3DC',
            borderRadius: 12,
            padding: 40,
            border: '1px solid #E8C97A',
          }}>
            <div style={{ fontSize: 32, marginBottom: 16, letterSpacing: 4 }}>{markets.europe.flags}</div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>{markets.europe.label}</div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 32,
              fontWeight: 600,
              color: '#4A5C2F',
              marginBottom: 16,
            }}>
              {markets.europe.title}
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              color: '#555545',
              lineHeight: 1.7,
              marginBottom: 24,
            }}>
              {markets.europe.copy}
            </p>

            {/* Country Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {markets.europe.countries.map(c => (
                <span key={c} style={{
                  padding: '6px 14px',
                  background: 'white',
                  borderRadius: 20,
                  fontSize: 12,
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  color: '#4A5C2F',
                }}>
                  {c}
                </span>
              ))}
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#555545' }}>
              <div>✈️ Transit: {markets.europe.transit}</div>
              <div>📋 Certs: {markets.europe.certs}</div>
              <div>🥑 Key products: {markets.europe.products.join(", ")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics */}
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
            Logistics <em style={{ color: '#8A6B2A', fontStyle: 'italic' }}>at a Glance</em>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}>
            {[
              { icon: "🛫", title: "Dispatch Point", desc: "JKIA — Jomo Kenyatta International Airport, Nairobi" },
              { icon: "🇦🇪", title: "GCC Flights", desc: "Weekly direct flights to DXB, RUH, DOH — 4–6 hours" },
              { icon: "🇳🇱", title: "Europe Flights", desc: "Weekly flights to AMS, LHR, FRA — 8–11 hours" },
            ].map((l, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: 8,
                padding: 28,
                textAlign: 'center',
                border: '1px solid #EEEADC',
              }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{l.icon}</div>
                <h4 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#4A5C2F',
                  marginBottom: 8,
                }}>
                  {l.title}
                </h4>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13,
                  color: '#555545',
                  lineHeight: 1.5,
                }}>
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
