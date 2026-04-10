import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  { num: "01", title: "Farm Selection", desc: "Certified growers vetted for quality" },
  { num: "02", title: "Harvest & Collection", desc: "Picked at optimal ripeness" },
  { num: "03", title: "Packhouse QC", desc: "Graded, inspected, pre-cooled" },
  { num: "04", title: "Documentation", desc: "Phytosanitary, origin, health certs" },
  { num: "05", title: "Airfreight", desc: "Cold chain via JKIA to destination" },
];

export default function ProcessSteps() {
  return (
    <section id="process-steps" className="section-padding" style={{ background: "var(--color-paper)" }}>
      <div className="container-main" style={{ padding: "0 24px" }}>
        <SectionHeader eyebrow="HOW WE WORK" title="Farm to" titleEm="Port — Five Steps" />

        <div style={{ position: "relative" }}>
          <div className="process-line hidden md:block" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 28,
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontWeight: 700,
                    margin: "0 auto 18px",
                    border: "3px solid var(--color-primary-lt)",
                    boxShadow: "0 8px 24px rgba(130, 180, 64, 0.25)",
                  }}
                >
                  {step.num}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--color-text)",
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--color-text-muted)",
                    lineHeight: 1.55,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
