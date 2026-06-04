"use client";

import { useCounter, useInView } from "@/hooks/use-interactions";
import { statistics, achievements } from "@/data/statistics";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/text-reveal";
import { useRef } from "react";

function StatCard({
  stat,
  index,
}: {
  stat: (typeof statistics)[0];
  index: number;
}) {
  const { count, ref } = useCounter(stat.value, 2500);
  const inViewRef = useRef(null);

  return (
    <StaggerItem>
      <div
        ref={ref}
        className="relative group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            {count}
            {stat.suffix}
          </span>
          <p className="mt-2 text-white font-medium text-lg">{stat.label}</p>
          <p className="mt-1 text-white/40 text-sm">{stat.description}</p>
        </div>
      </div>
    </StaggerItem>
  );
}

export function TrustSection() {
  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-violet-600/3 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-violet-400 text-sm tracking-wider uppercase font-medium">
              Trust & Authority
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Numbers That Speak
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
              Every number represents a student&apos;s dream realized, a career
              launched, a future transformed.
            </p>
          </FadeIn>
        </div>

        {/* Statistics Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {statistics.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </StaggerContainer>

        {/* Achievements Bar */}
        <FadeIn delay={0.5}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-4">
            {achievements.map((achievement, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-white/40 text-xs tracking-wide"
              >
                <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                {achievement}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
