"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import { statistics } from "@/data/statistics";
import {
  Target,
  Eye,
  Heart,
  Globe,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision",
    desc: "Data-driven strategies tailored to each student's unique aspirations and strengths.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Transparency",
    desc: "Complete visibility into every process, timeline, and decision throughout your journey.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Dedication",
    desc: "Every student receives our full attention and commitment from first consultation to graduation.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Mindset",
    desc: "International perspective combined with local expertise across 30+ countries.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partnership",
    desc: "We work alongside you as partners, not just advisors, in your educational journey.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    desc: "Continuously evolving our processes and technology to deliver the best outcomes.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "The Vision",
    desc: "ILMORA was founded with a clear vision: to transform how students access global higher education.",
  },
  {
    year: "2020",
    title: "Rapid Growth",
    desc: "Despite global challenges, we expanded our university network to 50+ partner institutions.",
  },
  {
    year: "2021",
    title: "UAE Recognition",
    desc: "Received official recognition from UAE education authorities and expanded our equivalency services.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    desc: "Opened new partnerships across Europe, Australia, and Canada, reaching 150+ universities.",
  },
  {
    year: "2023",
    title: "200+ Partners",
    desc: "Surpassed 200 university partnerships and helped over 1,500 students achieve their dreams.",
  },
  {
    year: "2024",
    title: "Innovation Era",
    desc: "Launched our digital platform, combining expert guidance with intelligent technology.",
  },
  {
    year: "2025",
    title: "The Future",
    desc: "Continuing to redefine global education access with 2,500+ students placed and growing.",
  },
];

export function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[200px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
          <FadeIn>
            <span className="text-violet-400 text-sm tracking-wider uppercase font-medium">
              About ILMORA
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
              delay={0.2}
            >
              Built for the Future of Education
            </TextReveal>
          </div>
          <FadeIn delay={0.5}>
            <p className="mt-6 text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              ILMORA Education Group exists at the intersection of expertise and
              technology, transforming how students connect with world-class
              universities across the globe.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <div className="p-8 lg:p-10 rounded-2xl border border-white/5 bg-white/[0.02]">
                <span className="text-violet-400 text-sm tracking-wider uppercase font-medium">
                  Our Mission
                </span>
                <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Making world-class education accessible to every ambitious
                  student
                </h3>
                <p className="mt-4 text-white/40 leading-relaxed">
                  We believe that talent is distributed equally across the world,
                  but opportunity is not. ILMORA exists to bridge that gap —
                  providing expert guidance, institutional partnerships, and
                  technology-driven processes that make the journey to global
                  education seamless, transparent, and successful.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 lg:p-10 rounded-2xl border border-white/5 bg-white/[0.02]">
                <span className="text-indigo-400 text-sm tracking-wider uppercase font-medium">
                  Our Vision
                </span>
                <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-white leading-tight">
                  The future operating system for global higher education
                </h3>
                <p className="mt-4 text-white/40 leading-relaxed">
                  We envision a world where every student with the ambition to
                  learn can access the best education on the planet — regardless
                  of geography, background, or complexity. ILMORA is building the
                  infrastructure to make that vision a reality.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-violet-600/3 rounded-full blur-[200px]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-cyan-400 text-sm tracking-wider uppercase font-medium">
                Our Values
              </span>
            </FadeIn>
            <TextReveal
              as="h2"
              className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight"
              delay={0.1}
            >
              What Drives Us
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">
                Our Journey
              </span>
            </FadeIn>
            <TextReveal
              as="h2"
              className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight"
              delay={0.1}
            >
              From Vision to Impact
            </TextReveal>
          </div>

          <div className="max-w-3xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="relative flex gap-8 pb-12 group">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-400 text-xs font-bold">
                        {item.year}
                      </span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2" />
                    )}
                  </div>

                  <div className="pb-4">
                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-white/40 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-black to-indigo-950/20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Story?
            </h2>
            <p className="text-white/40 text-lg mb-8">
              Join thousands of students who trusted ILMORA to transform their
              educational dreams into reality.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
