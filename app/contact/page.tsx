import type { Metadata } from "next";
import { Suspense } from "react";
import PageBanner from "@/components/shared/PageBanner";
import TradeInquiryForm from "@/components/contact/TradeInquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Yaa Mucaad — Trade Enquiry",
  description:
    "Send a trade enquiry. We respond to all genuine trade enquiries within 24 hours. Volumes, seasonality, and logistics — let's discuss.",
};

const contactCards = [
  { icon: "📍", label: "Location", value: "Nairobi, Kenya" },
  { icon: "📧", label: "Email", value: "exports@yaamucaad.com" },
  { icon: "📞", label: "Phone", value: "+254 [TBC by client]" },
  { icon: "🕐", label: "Office Hours", value: "Mon–Fri 08:00–17:00 EAT (UTC+3)" },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        subtitle="Let's Start a Conversation"
      />

      {/* Contact Section */}
      <section className="section-padding" style={{ background: '#FDFAF4' }}>
        <div className="container-main contact-two-col">
          {/* Contact Cards */}
          <div>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: '#555545',
              lineHeight: 1.7,
              marginBottom: 32,
            }}>
              We respond to all genuine trade enquiries within 24 hours. Whether you&apos;re
              a first-time importer or an established buyer diversifying supply — we&apos;re
              ready to discuss volumes, seasonality, and logistics.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
            }}>
              {contactCards.map((card, i) => (
                <div key={i} style={{
                  background: '#EEF2E6',
                  borderRadius: 8,
                  padding: 24,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 8,
                    background: '#D6E0C0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    flexShrink: 0,
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#888878',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: 4,
                    }}>
                      {card.label}
                    </div>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 14,
                      color: '#2A2A1E',
                      fontWeight: 500,
                    }}>
                      {card.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trade Inquiry Form */}
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: '36px 32px',
            border: '1px solid #EEEADC',
          }}>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 24,
              fontWeight: 600,
              color: '#4A5C2F',
              marginBottom: 28,
            }}>
              Trade Inquiry Form
            </h3>
            <Suspense fallback={<div>Loading form...</div>}>
              <TradeInquiryForm />
            </Suspense>
          </div>
        </div>

      </section>

      {/* Map Section */}
      <section style={{ background: '#F5F0E4', padding: '48px 0' }}>
        <div className="container-main" style={{ padding: '0 24px' }}>
          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            height: 400,
            background: '#EEF2E6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #D6E0C0',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32335724093!2d36.68258!3d-1.3028619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yaa Mucaad Location — Nairobi, Kenya"
            />
          </div>
        </div>
      </section>
    </>
  );
}
