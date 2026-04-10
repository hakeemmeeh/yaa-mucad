import type { Metadata } from "next";
import PageBanner from "@/components/shared/PageBanner";
import ProcessSteps from "@/components/home/ProcessSteps";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Export Services | Yaa Mucaad",
  description: "Farm Sourcing, Packhouse QC, Cold Chain, Export Documentation, Air Freight Logistics, and Buyer Support — end-to-end export services from Kenya.",
};

const services = [
  {
    icon: "🌾",
    title: "Farm Sourcing & Procurement",
    desc: "We identify and vet certified growers and farming cooperatives across Kenya's key growing regions. Every supplier is assessed for GlobalGAP compliance, farm-level traceability, and consistent output quality.",
  },
  {
    icon: "🔍",
    title: "Packhouse Quality Control",
    desc: "Every product is graded, inspected, and packed in our controlled-environment packhouse facility. Visual quality, size uniformity, temperature, and packaging integrity are verified before sealing.",
  },
  {
    icon: "❄️",
    title: "Cold Chain Management",
    desc: "Pre-cooling at source, refrigerated transport to JKIA, and temperature-controlled holding before loading. We maintain chain integrity from farm gate to aircraft cargo hold.",
  },
  {
    icon: "📋",
    title: "Export Documentation",
    desc: "Phytosanitary certificates, health certificates, certificates of origin, MRL test reports, and airway bills — all prepared accurately and on time for smooth customs clearance.",
  },
  {
    icon: "✈️",
    title: "Air Freight Logistics",
    desc: "Weekly dispatch from JKIA Nairobi to GCC and European airports. Direct flights to Dubai, Riyadh, Doha, Amsterdam, London, and Frankfurt. We handle booking, palletisation, and ULD planning.",
  },
  {
    icon: "🤝",
    title: "Buyer Support & Communication",
    desc: "Dedicated account management for every buyer relationship. Pre-shipment samples, real-time dispatch updates, arrival coordination, and rapid issue resolution.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Export Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services Grid */}
      <section className="section-padding" style={{ background: '#FDFAF4' }}>
        <div className="container-main" style={{ padding: '0 24px' }}>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: 8,
                padding: 32,
                border: '1px solid #EEEADC',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: '#EEF2E6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  marginBottom: 20,
                }}>
                  {s.icon}
                </div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 22,
                  fontWeight: 600,
                  color: '#4A5C2F',
                  marginBottom: 12,
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  color: '#555545',
                  lineHeight: 1.7,
                }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CtaBanner />
    </>
  );
}
