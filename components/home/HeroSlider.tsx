"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    badge: "PREMIUM EXPORT",
    title: "Fresh",
    titleEm: "Organic",
    titleEnd: "Fruits",
    subtitle: "From Kenya's Highlands",
    desc: "Hass & Fuerte avocados grown at 1,800m+ altitude. Rich, creamy, and GlobalGAP certified for the world's most discerning markets.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=2000",
    link: "/products/hass-avocado",
    cta: "View Avocados",
  },
  {
    badge: "YEAR-ROUND SUPPLY",
    title: "Premium",
    titleEm: "Kenyan",
    titleEnd: "Mangoes",
    subtitle: "Kent · Apple · Ngowe",
    desc: "Sun-ripened Kent mangoes for GCC premium. Apple mangoes for EU retail. Sourced direct from Kenya's finest growers.",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=2000",
    link: "/products/mango",
    cta: "View Mangoes",
  },
  {
    badge: "EU & GCC MARKETS",
    title: "Export",
    titleEm: "Grade",
    titleEnd: "Vegetables",
    subtitle: "French Beans · Sugar Snaps · Baby Corn",
    desc: "Precision-graded to EU specification. MRL compliant, blemish-free, packed for retail and food service channels.",
    image: "https://images.unsplash.com/photo-1595856424584-6338b552d0a4?auto=format&fit=crop&q=80&w=2000",
    link: "/products/french-beans",
    cta: "View Vegetables",
  },
];

const AUTO_INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [current, goNext]);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden group/hero bg-[#fcfdfa]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image full-bleed */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={slide.image}
              alt={slide.titleEnd}
              fill
              priority={index === 0}
              className={`object-cover transition-transform duration-[6000ms] ease-out ${
                index === current ? "scale-105" : "scale-100"
              }`}
              sizes="100vw"
              style={{ objectPosition: "center right" }}
            />
          </div>

          {/* Elegant Overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff] via-[#ffffff]/80 to-transparent md:to-[#ffffff]/20" />

          {/* Text Content */}
          <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
            <div className="max-w-xl">
              {/* Arabic branding */}
              <div
                style={{
                  fontFamily: "serif",
                  fontSize: 26,
                  color: "#C9A84C",
                  direction: "rtl",
                  marginBottom: 16,
                  opacity: 0.85,
                }}
                dir="rtl"
                className={`transition-all duration-700 delay-100 ${index === current ? 'translate-y-0 opacity-85' : 'translate-y-4 opacity-0'}`}
              >
                يا معاذ
              </div>

              {/* Badge */}
              <div
                className={`inline-block px-5 py-1.5 mb-6 text-[11px] font-bold tracking-[0.12em] text-primary-dk bg-primary/10 backdrop-blur-sm rounded-full transition-all duration-700 delay-200 ${
                  index === current ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {slide.badge}
              </div>

              {/* Main title */}
              <h1
                className={`font-display text-[clamp(2.5rem,6vw,4rem)] font-bold text-gray-900 leading-[1.1] mb-4 tracking-tight transition-all duration-700 delay-300 ${
                  index === current ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {slide.title}{" "}
                <span className="text-primary">{slide.titleEm}</span>
                <br />
                {slide.titleEnd}
              </h1>

              {/* Subtitle */}
              <div
                className={`font-body text-[clamp(16px,2vw,20px)] font-medium text-amber-600 mb-5 transition-all duration-700 delay-[400ms] ${
                  index === current ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {slide.subtitle}
              </div>

              {/* Description */}
              <p
                className={`font-body text-base text-gray-600 leading-relaxed mb-8 max-w-md transition-all duration-700 delay-[500ms] ${
                  index === current ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {slide.desc}
              </p>

              {/* CTAs */}
              <div
                className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-[600ms] ${
                  index === current ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Link href={slide.link} className="btn-olive !px-8 !py-3.5">
                  {slide.cta}
                </Link>
                <Link href="/contact" className="btn-outline !px-8 !py-3.5 bg-white/50 backdrop-blur-[2px]">
                  Request Trade Inquiry
                </Link>
              </div>

              {/* Certifications */}
              <div
                className={`flex flex-wrap gap-5 text-[11px] font-semibold tracking-wider text-gray-500 uppercase transition-all duration-700 delay-[700ms] ${
                  index === current ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span>✓ GlobalGAP</span>
                <span>✓ KEPHIS</span>
                <span>✓ Farm-to-Air</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Floating badges (only for slide 0 to match previous behavior, or hide for cleaner Heykal look) */}
      <div className={`absolute z-20 bottom-1/4 right-[15%] bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl p-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] float-badge hidden lg:block transition-opacity duration-700 ${current === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="font-display text-xl font-bold text-primary-dk">1,800m+</div>
        <div className="text-[11px] text-gray-500 font-medium">Growing altitude</div>
      </div>

      <div className={`absolute z-20 top-[22%] right-[10%] bg-primary-dk text-white rounded-full px-5 py-2.5 text-xs font-bold shadow-[0_8px_24px_rgba(108,154,50,0.3)] float-badge hidden lg:block transition-opacity duration-700 delay-200 ${current === 0 || current === 2 ? 'opacity-100' : 'opacity-0'}`}>
        GlobalGAP ✓
      </div>

      {/* ─── Arrow Navigation ─── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 md:w-14 md:h-14 rounded-full
          bg-white/80 backdrop-blur-sm border border-gray-200
          flex items-center justify-center text-gray-700
          opacity-0 group-hover/hero:opacity-100 md:opacity-0
          hover:bg-primary hover:border-primary hover:text-white hover:scale-110
          transition-all duration-300 cursor-pointer shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 md:w-14 md:h-14 rounded-full
          bg-white/80 backdrop-blur-sm border border-gray-200
          flex items-center justify-center text-gray-700
          opacity-0 group-hover/hero:opacity-100 md:opacity-0
          hover:bg-primary hover:border-primary hover:text-white hover:scale-110
          transition-all duration-300 cursor-pointer shadow-lg"
      >
        <ChevronRight size={24} />
      </button>

      {/* ─── Dot Indicators + Slide Counter ─── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 shadow-sm">
        {/* Slide number */}
        <span className="text-gray-500 font-mono text-sm tracking-wider hidden sm:inline">
          {String(current + 1).padStart(2, "0")}
        </span>

        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full h-2 ${
                i === current ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Total */}
        <span className="text-gray-500 font-mono text-sm tracking-wider hidden sm:inline">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

