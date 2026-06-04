"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";

export function WhyIlmoraSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-black overflow-hidden"
    >
      {/* Cinematic Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-violet-600/5 rounded-full blur-[200px]" />
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Scene 1: The Problem */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <FadeIn>
            <span className="text-rose-400/80 text-sm tracking-wider uppercase font-medium">
              The Problem
            </span>
          </FadeIn>

          <div className="mt-8">
            <TextReveal
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
              delay={0.2}
            >
              The path to global education is broken
            </TextReveal>
          </div>

          <FadeIn delay={0.6}>
            <p className="mt-8 text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
              Students face a maze of confusing requirements, endless paperwork,
              unreliable advice, and overwhelming choices. The dream of studying
              abroad — something that should be exciting — becomes a source of
              anxiety and uncertainty.
            </p>
          </FadeIn>

          {/* Visual Divider */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/20" />
            <motion.div
              className="w-3 h-3 rounded-full border-2 border-violet-400/50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>

        {/* Scene 2: The Confusion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
          <div className="flex flex-col justify-center">
            <FadeIn>
              <span className="text-amber-400/80 text-sm tracking-wider uppercase font-medium">
                The Reality
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="mt-4 text-2xl md:text-4xl font-bold text-white leading-tight">
                Students deserve better
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-white/40 text-lg leading-relaxed">
                Outdated processes, fragmented information, and generic advice
                fail the very students who need expert guidance the most. Every
                year, thousands of dreams are derailed not by lack of talent, but
                by lack of proper support.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/10 to-rose-500/10 border border-white/5 p-8 flex flex-col justify-center items-center text-center">
                <div className="space-y-4 w-full">
                  {[
                    "Complex admission requirements",
                    "Visa processing nightmares",
                    "Unreliable guidance",
                    "Hidden scholarship opportunities",
                    "Degree recognition confusion",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full bg-rose-400/60 flex-shrink-0" />
                      <span className="text-white/40 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scene 3: The Solution */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="text-emerald-400/80 text-sm tracking-wider uppercase font-medium">
              The Solution
            </span>
          </FadeIn>
          <div className="mt-8">
            <TextReveal
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
              delay={0.2}
            >
              ILMORA exists to change this
            </TextReveal>
          </div>
          <FadeIn delay={0.6}>
            <p className="mt-8 text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
              We&apos;ve built a comprehensive platform that combines expert
              human guidance with intelligent technology to make world-class
              education accessible to every student with the ambition to pursue
              it.
            </p>
          </FadeIn>
        </div>

        {/* Mission Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Precision",
              desc: "Data-driven university matching and application strategies tailored to each student's unique profile.",
              gradient: "from-violet-500/20 to-indigo-500/20",
              color: "text-violet-400",
            },
            {
              title: "Partnership",
              desc: "Direct relationships with 200+ universities across 30+ countries, ensuring the best opportunities.",
              gradient: "from-indigo-500/20 to-cyan-500/20",
              color: "text-indigo-400",
            },
            {
              title: "Purpose",
              desc: "Every decision we make is guided by the singular purpose of transforming student futures.",
              gradient: "from-cyan-500/20 to-emerald-500/20",
              color: "text-cyan-400",
            },
          ].map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative">
                  <span
                    className={`text-sm font-semibold tracking-wider uppercase ${pillar.color}`}
                  >
                    {pillar.title}
                  </span>
                  <p className="mt-3 text-white/40 text-sm leading-relaxed">
                    {pillar.desc}
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
