import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/shared/PageBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import CertGrid from "@/components/home/CertGrid";
import CtaBanner from "@/components/home/CtaBanner";
import GoldDivider from "@/components/shared/GoldDivider";

export const metadata: Metadata = {
  title: "Quality & Compliance | Yaa Mucaad",
  description: "We Clear Every Border Before You Do — GlobalGAP, KEPHIS, MRL testing, phytosanitary certification. Full compliance for GCC and EU markets.",
};

export default function QualityPage() {
  const checklist = [
    "Visual inspection for blemishes and uniformity",
    "Size and weight grading to buyer specification",
    "Temperature verification (pre-cooling confirmed)",
    "MRL testing records from farm level",
    "Lot traceability to individual farm or farmer group",
    "Packaging integrity check before palletisation",
  ];

  return (
    <>
      <PageBanner
        title="Quality & Compliance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Quality" },
        ]}
        subtitle="We Clear Every Border Before You Do"
      />

      {/* Intro */}
      <section className="section-padding" style={{ background: '#FDFAF4' }}>
        <div className="container-main quality-intro-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>OUR APPROACH</div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 32,
              fontWeight: 600,
              color: '#4A5C2F',
              lineHeight: 1.2,
              marginBottom: 8,
            }}>
              Compliance Built Into <em style={{ color: '#8A6B2A', fontStyle: 'italic' }}>Every Step</em>
            </h2>
            <GoldDivider />
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: '#555545',
              lineHeight: 1.8,
              marginTop: 16,
            }}>
              Compliance isn&apos;t an afterthought — it&apos;s built into how we source, pack,
              and document every shipment. A single rejected consignment costs more than
              money. Our certifications and documentation protocols exist to prevent that.
            </p>
          </div>
          <div
            style={{
              position: 'relative',
              borderRadius: 12,
              overflow: 'hidden',
              minHeight: 300,
              background: '#EEF2E6',
            }}
          >
            <Image
              src="/placeholders/farm.svg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ opacity: 0.4 }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 80,
                pointerEvents: 'none',
              }}
            >
              🔬
            </div>
          </div>
        </div>

      </section>

      <CertGrid />

      {/* QC Checklist */}
      <section className="section-padding" style={{ background: '#FDFAF4' }}>
        <div className="container-main" style={{ padding: '0 24px' }}>
          <SectionHeader
            eyebrow="WHAT WE CHECK PER CONSIGNMENT"
            title="Every Shipment"
            titleEm="Passes Our Gate"
          />

          <div style={{
            maxWidth: 640,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            {checklist.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: 20,
                background: 'white',
                borderRadius: 8,
                border: '1px solid #EEEADC',
              }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: '#EEF2E6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4A5C2F',
                  fontSize: 16,
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  ✓
                </div>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  color: '#2A2A1E',
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GCC vs EU Compliance */}
      <section className="section-padding" style={{ background: '#F5F0E4' }}>
        <div className="container-main" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          padding: '0 24px',
        }}>
          {/* GCC Card */}
          <div style={{
            background: '#EEF2E6',
            borderRadius: 12,
            padding: 32,
            border: '1px solid #D6E0C0',
          }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>🇦🇪 🇸🇦 🇶🇦</div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 24,
              fontWeight: 600,
              color: '#4A5C2F',
              marginBottom: 16,
            }}>
              GCC Compliance
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#555545' }}>
              <div>• Health Certificate for food imports</div>
              <div>• Halal compliance where required</div>
              <div>• UAE MOIAT registration</div>
              <div>• Saudi SFDA requirements</div>
              <div>• Qatar MOPH import protocols</div>
            </div>
          </div>

          {/* EU Card */}
          <div style={{
            background: '#FBF3DC',
            borderRadius: 12,
            padding: 32,
            border: '1px solid #E8C97A',
          }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>🇳🇱 🇩🇪 🇬🇧</div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 24,
              fontWeight: 600,
              color: '#4A5C2F',
              marginBottom: 16,
            }}>
              EU Compliance
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#555545' }}>
              <div>• GlobalGAP Certification</div>
              <div>• MRL (Maximum Residue Level) testing</div>
              <div>• Euro 1 Certificate of Origin</div>
              <div>• BRC optional for UK supply chain</div>
              <div>• Full lot traceability documentation</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
