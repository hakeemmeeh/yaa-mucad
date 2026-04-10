import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";
import CategoryCircles from "@/components/home/CategoryCircles";
import WhyKenya from "@/components/home/WhyKenya";
import ProcessSteps from "@/components/home/ProcessSteps";
import StatsStrip from "@/components/home/StatsStrip";
import CtaBanner from "@/components/home/CtaBanner";
import GoldDivider from "@/components/shared/GoldDivider";

export const metadata: Metadata = {
  title: "About Us | Yaa Mucaad — Premium Kenyan Fresh Produce Export",
  description:
    "Learn about Yaa Mucaad Global Fruits Export Ltd — our story, mission, and commitment to delivering premium Kenyan fresh produce to GCC and European markets.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="section-padding" style={{ background: "#FDFAF4" }}>
        <div className="container-main about-two-col">
          <div
            style={{
              position: "relative",
              borderRadius: 12,
              overflow: "hidden",
              minHeight: 360,
              background: "#EEF2E6",
            }}
          >
            <Image
              src="/placeholders/farm.svg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ opacity: 0.5 }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 80,
                pointerEvents: "none",
              }}
            >
              🌾
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>
              OUR STORY
            </div>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 36,
                fontWeight: 600,
                color: "#4A5C2F",
                lineHeight: 1.2,
                marginBottom: 8,
              }}
            >
              A Name That Carries a <em style={{ color: "#8A6B2A", fontStyle: "italic" }}>Promise</em>
            </h2>
            <GoldDivider />

            <div
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 15,
                color: "#555545",
                lineHeight: 1.8,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p>
                In Somali, Yaa Mucaad means &ldquo;mother of promise.&rdquo; It is a name that speaks of commitment, of reliability,
                of something given and honoured. That meaning sits at the heart of how we operate.
              </p>
              <p>
                Founded with a clear purpose: to connect Kenya&apos;s exceptional agricultural talent to the world&apos;s most demanding
                markets — and to do it with the consistency and professionalism those markets require.
              </p>
              <p>
                Operating from Nairobi, we work directly with certified growers and farming cooperatives across the Central Highlands,
                Rift Valley, Eastern Province, and the Coast. We don&apos;t just buy and ship — we build relationships with farmers, invest in
                post-harvest handling, and stand behind every consignment.
              </p>
            </div>

            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
              {["Integrity", "Quality First", "Partnership"].map((v, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#4A5C2F",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "#2A2A1E", fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>

            <Link
              href="#process-steps"
              className="btn-olive"
              style={{ marginTop: 28, display: "inline-flex" }}
            >
              Learn About Our Process →
            </Link>
          </div>
        </div>

      </section>

      <CategoryCircles />
      <WhyKenya variant="about" />
      <ProcessSteps />
      <StatsStrip />
      <CtaBanner />
    </>
  );
}
