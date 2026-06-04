"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import {
  GraduationCap,
  Plane,
  ShieldCheck,
  Briefcase,
  Award,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="w-8 h-8" />,
  plane: <Plane className="w-8 h-8" />,
  "shield-check": <ShieldCheck className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
  award: <Award className="w-8 h-8" />,
};

export function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[200px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
          <FadeIn>
            <span className="text-indigo-400 text-sm tracking-wider uppercase font-medium">
              Our Services
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
              delay={0.2}
            >
              Complete Ecosystem
            </TextReveal>
          </div>
          <FadeIn delay={0.5}>
            <p className="mt-6 text-white/40 text-lg md:text-xl max-w-2xl mx-auto">
              Every service is designed to work together, creating a seamless
              journey from your first consultation to your career launch.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Detail */}
      <section className="relative py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <FadeIn>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ${
                      i % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex flex-col justify-center ${
                        i % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6`}
                      >
                        {iconMap[service.icon]}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-white/50 text-sm tracking-wider uppercase mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-white/40 text-lg leading-relaxed mb-8">
                        {service.longDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3"
                          >
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{
                                backgroundColor: `${service.accentColor}20`,
                              }}
                            >
                              <Check
                                className="w-3 h-3"
                                style={{ color: service.accentColor }}
                              />
                            </div>
                            <span className="text-white/60 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual */}
                    <div
                      className={`flex items-center justify-center ${
                        i % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <div
                        className={`relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br ${service.gradient} p-[1px]`}
                      >
                        <div className="absolute inset-0 rounded-3xl bg-black/90 p-8 flex flex-col justify-center items-center text-center">
                          <div
                            className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 opacity-20`}
                          >
                            {iconMap[service.icon]}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-white/30 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Divider */}
                {i < services.length - 1 && (
                  <div className="mt-32 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                )}
              </div>
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
              Not Sure Where to Start?
            </h2>
            <p className="text-white/40 text-lg mb-8">
              Book a free consultation and let our experts map out your complete
              journey.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
