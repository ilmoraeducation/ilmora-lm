"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const featured = testimonials.filter((t) => t.featured);

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % featured.length);
  };

  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + featured.length) % featured.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = featured[active];

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-violet-600/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-amber-400 text-sm tracking-wider uppercase font-medium">
              Testimonials
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              delay={0.1}
            >
              Voices of Success
            </TextReveal>
          </div>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center"
              >
                <Quote className="w-12 h-12 text-violet-400/20 mx-auto mb-8" />

                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed mb-10">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="text-white font-semibold text-lg">
                    {current.name}
                  </p>
                  <p className="text-white/40 text-sm">
                    {current.role} — {current.university}, {current.country}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {featured.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > active ? 1 : -1);
                      setActive(i);
                    }}
                    className={`w-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 h-2 bg-violet-400"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-3 h-3 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.quote.slice(0, 150)}...&rdquo;
                </p>
                <div>
                  <p className="text-white text-sm font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-white/30 text-xs">
                    {testimonial.role} — {testimonial.country}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
