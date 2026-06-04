"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { universities, universityFilters } from "@/data/universities";
import {
  FadeIn,
  TextReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/text-reveal";
import { MapPin, Award, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const partnershipColors: Record<string, string> = {
  platinum: "from-violet-400 to-indigo-400",
  gold: "from-amber-400 to-yellow-400",
  silver: "from-gray-300 to-gray-400",
  partner: "from-cyan-400 to-blue-400",
};

export function UniversityNetwork() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? universities
      : activeFilter === "featured"
      ? universities.filter((u) => u.featured)
      : universities.filter((u) => u.partnershipLevel === activeFilter);

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-600/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-indigo-400 text-sm tracking-wider uppercase font-medium">
              University Network
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              delay={0.1}
            >
              World-Class Partners
            </TextReveal>
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
              Our network of prestigious universities spans multiple countries,
              offering programs across every discipline.
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {universityFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-white/10 text-white border border-white/10"
                    : "text-white/40 hover:text-white/60 border border-transparent"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* University Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.08}
            >
              {filtered.map((uni) => (
                <StaggerItem key={uni.id}>
                  <UniversityCard university={uni} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {/* View All CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <Link
              href="/universities"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
            >
              Explore All Universities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function UniversityCard({ university }: { university: (typeof universities)[0] }) {
  return (
    <div className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 h-full flex flex-col">
      {/* Partnership Badge */}
      <div className="absolute top-4 right-4">
        <span
          className={`text-xs font-semibold tracking-wider uppercase bg-gradient-to-r ${partnershipColors[university.partnershipLevel]} bg-clip-text text-transparent`}
        >
          {university.partnershipLevel}
        </span>
      </div>

      {/* Logo */}
      <div className="relative w-full h-16 mb-4 flex items-center">
        <Image
          src={university.logo}
          alt={university.name}
          width={160}
          height={60}
          className="max-h-12 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Info */}
      <h3 className="text-lg font-semibold text-white mb-1">
        {university.name}
      </h3>

      <div className="flex items-center gap-2 text-white/30 text-sm mb-3">
        <MapPin className="w-3 h-3" />
        {university.location}, {university.country}
      </div>

      <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">
        {university.description.slice(0, 120)}...
      </p>

      {/* Programs */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {university.programs.slice(0, 3).map((program) => (
          <span
            key={program}
            className="px-2 py-0.5 text-xs bg-white/5 text-white/40 rounded-md"
          >
            {program}
          </span>
        ))}
        {university.programs.length > 3 && (
          <span className="px-2 py-0.5 text-xs bg-white/5 text-white/30 rounded-md">
            +{university.programs.length - 3}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        {university.ranking && (
          <div className="flex items-center gap-1.5 text-xs text-white/30">
            <Award className="w-3 h-3" />
            {university.ranking}
          </div>
        )}
        <span className="text-xs text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          View Details <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}
