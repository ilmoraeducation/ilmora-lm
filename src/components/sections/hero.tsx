"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, Play } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/animations/text-reveal";

const HeroScene = dynamic(
  () =>
    import("@/components/three/hero-scene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-transparent to-indigo-950/20 z-[1]" />

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[200px] z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <FadeIn delay={0.3}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            <span className="text-white/60 text-xs tracking-wider uppercase">
              The Future of Global Higher Education
            </span>
          </motion.div>
        </FadeIn>

        {/* Main Headline */}
        <div className="mb-8">
          <TextReveal
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[0.95]"
            delay={0.6}
          >
            Your Future Begins Here
          </TextReveal>
        </div>

        {/* Subheadline */}
        <FadeIn delay={1.2}>
          <p className="text-lg md:text-xl lg:text-2xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            ILMORA transforms the way students access world-class education.
            From dream to graduation, we guide every step.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={1.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={siteConfig.contact.ctaLink}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
            >
              {siteConfig.contact.ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/universities"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/80 hover:text-white hover:border-white/30 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Play className="w-4 h-4" />
              {siteConfig.contact.secondaryCta}
            </Link>
          </div>
        </FadeIn>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white/30 text-xs tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
