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
import {
  MapPin,
  Award,
  ExternalLink,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";

const partnershipColors: Record<string, { text: string; bg: string }> = {
  platinum: { text: "text-violet-400", bg: "bg-violet-500/10" },
  gold: { text: "text-amber-400", bg: "bg-amber-500/10" },
  silver: { text: "text-gray-300", bg: "bg-gray-500/10" },
  partner: { text: "text-cyan-400", bg: "bg-cyan-500/10" },
};

export function UniversitiesPageContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = universities.filter((uni) => {
    const matchesFilter =
      activeFilter === "all"
        ? true
        : activeFilter === "featured"
        ? uni.featured
        : uni.partnershipLevel === activeFilter;

    const matchesSearch =
      searchQuery === "" ||
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.programs.some((p) =>
        p.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[200px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
          <FadeIn>
            <span className="text-indigo-400 text-sm tracking-wider uppercase font-medium">
              University Network
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
              delay={0.2}
            >
              Find Your University
            </TextReveal>
          </div>
          <FadeIn delay={0.5}>
            <p className="mt-6 text-white/40 text-lg md:text-xl max-w-2xl mx-auto">
              Browse our curated network of prestigious universities, filter by
              partnership level, or search for specific programs and locations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="relative py-8 bg-black border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search universities, programs, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="w-4 h-4 text-white/30 flex-shrink-0" />
              {universityFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-white/10 text-white"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-white/30 text-sm">
              Showing{" "}
              <span className="text-white font-medium">{filtered.length}</span>{" "}
              universities
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filtered.length > 0 ? (
                <StaggerContainer
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  staggerDelay={0.05}
                >
                  {filtered.map((uni) => (
                    <StaggerItem key={uni.id}>
                      <div className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 h-full flex flex-col">
                        {/* Partnership Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`px-2 py-0.5 text-xs font-semibold tracking-wider uppercase rounded-md ${partnershipColors[uni.partnershipLevel].bg} ${partnershipColors[uni.partnershipLevel].text}`}
                          >
                            {uni.partnershipLevel} partner
                          </span>
                          {uni.featured && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-violet-500/10 text-violet-400 rounded-md">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Logo */}
                        <div className="w-full h-16 flex items-center mb-4">
                          <Image
                            src={uni.logo}
                            alt={uni.name}
                            width={180}
                            height={60}
                            className="max-h-12 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-1">
                          {uni.name}
                        </h3>
                        <div className="flex items-center gap-2 text-white/30 text-sm mb-3">
                          <MapPin className="w-3 h-3" />
                          {uni.location}, {uni.country}
                        </div>

                        <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">
                          {uni.description}
                        </p>

                        {/* Programs */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {uni.programs.slice(0, 4).map((program) => (
                            <span
                              key={program}
                              className="px-2 py-0.5 text-xs bg-white/5 text-white/40 rounded-md"
                            >
                              {program}
                            </span>
                          ))}
                          {uni.programs.length > 4 && (
                            <span className="px-2 py-0.5 text-xs bg-white/5 text-white/30 rounded-md">
                              +{uni.programs.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          {uni.ranking && (
                            <div className="flex items-center gap-1.5 text-xs text-white/30">
                              <Award className="w-3 h-3" />
                              {uni.ranking}
                            </div>
                          )}
                          {uni.website && (
                            <a
                              href={uni.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-violet-400 flex items-center gap-1 hover:underline"
                            >
                              Official Site
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        {/* Highlights */}
                        <div className="mt-4 space-y-1.5">
                          {uni.highlights.map((h) => (
                            <div
                              key={h}
                              className="flex items-center gap-2 text-xs text-white/30"
                            >
                              <div className="w-1 h-1 rounded-full bg-violet-400/50" />
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              ) : (
                <div className="text-center py-20">
                  <p className="text-white/30 text-lg">
                    No universities found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setActiveFilter("all");
                      setSearchQuery("");
                    }}
                    className="mt-4 text-violet-400 text-sm hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/10 via-transparent to-indigo-950/10" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-white/40 text-lg mb-8">
              Our network includes 200+ universities. Contact us for
              personalized recommendations.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
            >
              Get Personalized Recommendations
              <ExternalLink className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
