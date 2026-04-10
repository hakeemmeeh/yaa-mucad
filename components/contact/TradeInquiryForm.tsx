"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

const countries = [
  "--- GCC ---",
  "UAE",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "--- Europe ---",
  "Netherlands",
  "Germany",
  "United Kingdom",
  "France",
  "Belgium",
  "Other",
] as const;

const volumes = [
  "500–1,000 kg/week",
  "1,000–5,000 kg/week",
  "5,000–10,000 kg/week",
  "10,000+ kg/week",
] as const;

const incoterms = ["FOB Nairobi", "CIF Destination", "DAP", "Not Sure"] as const;

const inquirySchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().min(1, "Valid email is required").email("Valid email is required"),
  phone: z.string().optional(),
  country: z
    .string()
    .min(1, "Please select a country")
    .refine(v => !v.startsWith("---"), "Please select a country"),
  product: z.string().min(1, "Please select a product"),
  volume: z.string().min(1, "Please select a volume"),
  incoterm: z.string().optional(),
  message: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export default function TradeInquiryForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      product: "",
      volume: "",
      incoterm: "",
      message: "",
    },
  });

  useEffect(() => {
    const productSlug = searchParams.get("product");
    if (productSlug) {
      const found = products.find(p => p.slug === productSlug);
      if (found) setValue("product", found.name);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: InquiryFormValues) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again or email exports@yaamucaad.com.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again or email exports@yaamucaad.com.");
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "#EEF2E6",
          borderRadius: 8,
          padding: 48,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
        <h3
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 24,
            fontWeight: 600,
            color: "#4A5C2F",
            marginBottom: 8,
          }}
        >
          Thank you!
        </h3>
        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "#555545" }}>
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
        <div>
          <label className="form-label">Full Name *</label>
          <input
            className={`form-input ${errors.fullName ? "error" : ""}`}
            placeholder="Your full name"
            {...register("fullName")}
          />
          {errors.fullName && <div className="form-error">{errors.fullName.message}</div>}
        </div>
        <div>
          <label className="form-label">Company Name *</label>
          <input
            className={`form-input ${errors.companyName ? "error" : ""}`}
            placeholder="Your company"
            {...register("companyName")}
          />
          {errors.companyName && <div className="form-error">{errors.companyName.message}</div>}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
        <div>
          <label className="form-label">Email *</label>
          <input
            type="email"
            className={`form-input ${errors.email ? "error" : ""}`}
            placeholder="you@company.com"
            {...register("email")}
          />
          {errors.email && <div className="form-error">{errors.email.message}</div>}
        </div>
        <div>
          <label className="form-label">Phone</label>
          <input type="tel" className="form-input" placeholder="+971 XX XXX XXXX" {...register("phone")} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
        <div>
          <label className="form-label">Country *</label>
          <select className={`form-input ${errors.country ? "error" : ""}`} {...register("country")}>
            <option value="">Select country</option>
            {countries.map(c => (
              <option key={c} value={c} disabled={c.startsWith("---")}>
                {c}
              </option>
            ))}
          </select>
          {errors.country && <div className="form-error">{errors.country.message}</div>}
        </div>
        <div>
          <label className="form-label">Product *</label>
          <select className={`form-input ${errors.product ? "error" : ""}`} {...register("product")}>
            <option value="">Select product</option>
            {products.map(p => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Multiple Products">Multiple Products</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
          {errors.product && <div className="form-error">{errors.product.message}</div>}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
        <div>
          <label className="form-label">Volume *</label>
          <select className={`form-input ${errors.volume ? "error" : ""}`} {...register("volume")}>
            <option value="">Select volume</option>
            {volumes.map(v => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
          {errors.volume && <div className="form-error">{errors.volume.message}</div>}
        </div>
        <div>
          <label className="form-label">Incoterm</label>
          <select className="form-input" {...register("incoterm")}>
            <option value="">Select incoterm</option>
            {incoterms.map(i => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="form-label">Message</label>
        <textarea
          className="form-input"
          placeholder="Tell us about your requirements..."
          style={{ minHeight: 120, resize: "vertical" }}
          {...register("message")}
        />
      </div>

      {submitError && (
        <p className="form-error" style={{ margin: 0 }}>
          {submitError}
        </p>
      )}

      <button
        type="submit"
        className="btn-olive"
        disabled={isSubmitting}
        style={{
          width: "100%",
          justifyContent: "center",
          padding: "14px 28px",
          fontSize: 15,
          opacity: isSubmitting ? 0.7 : 1,
          marginTop: 8,
        }}
      >
        {isSubmitting ? "Sending..." : "Send Trade Inquiry →"}
      </button>

      <p
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: 12,
          color: "#888878",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        We do not share your information with third parties.
        <br />
        We respond to all enquiries within 24 hours.
      </p>
    </form>
  );
}
