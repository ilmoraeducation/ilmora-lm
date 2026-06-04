"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 lg:py-48 bg-black overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-violet-600/5 rounded-full blur-[300px]" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/20 bg-violet-400/5 mb-8">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 text-xs tracking-wider uppercase">
              Begin Your Journey
            </span>
          </div>
        </FadeIn>

        <div className="mb-6">
          <TextReveal
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight"
            delay={0.2}
          >
            Your Future is Waiting
          </TextReveal>
        </div>

        <FadeIn delay={0.6}>
          <p className="text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed">
            The distance between where you are and where you want to be is
            shorter than you think. Let ILMORA bridge that gap with expertise,
            dedication, and a proven track record of transforming dreams into
            degrees.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={siteConfig.contact.ctaLink}
              className="group relative inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full text-lg hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-500"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                {siteConfig.contact.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 border border-white/15 text-white/70 hover:text-white hover:border-white/30 rounded-full text-lg transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
