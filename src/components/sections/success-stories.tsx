"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { successStories } from "@/data/success-stories";
import {
  FadeIn,
  TextReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/text-reveal";
import { MapPin, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export function SuccessStories() {
  const [activeStory, setActiveStory] = useState(0);
  const current = successStories[activeStory];

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-violet-600/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-rose-400 text-sm tracking-wider uppercase font-medium">
              Success Stories
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              delay={0.1}
            >
              Dreams Transformed
            </TextReveal>
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
              Every number represents a story. Here are some of the journeys
              that define what ILMORA makes possible.
            </p>
          </FadeIn>
        </div>

        {/* Story Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {successStories.map((story, i) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeStory === i
                  ? "bg-white/10 text-white border border-white/10"
                  : "text-white/40 hover:text-white/60 border border-transparent"
              }`}
            >
              {story.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Active Story */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${current.gradient} p-[1px]`}
          >
            <div className="relative rounded-3xl bg-black/95 p-8 lg:p-12">
              {/* Journey Path */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/50">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{current.origin}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-white/20 hidden lg:block" />
                <div className="w-8 h-px bg-white/20 hidden lg:block" />
                <ChevronRight className="w-4 h-4 text-white/20 hidden lg:block" />
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {current.destination}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {current.name}
              </h3>
              <p className="text-white/50 mb-1">{current.university}</p>
              <p className="text-white/30 text-sm mb-6">{current.program}</p>

              <p className="text-lg text-white/40 italic mb-8">
                &ldquo;{current.summary}&rdquo;
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-white/30">
                    The Challenge
                  </span>
                  <p className="mt-2 text-white/50 text-sm leading-relaxed">
                    {current.challenge}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-white/30">
                    The Journey
                  </span>
                  <p className="mt-2 text-white/50 text-sm leading-relaxed">
                    {current.journey}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-white/30">
                    The Outcome
                  </span>
                  <p className="mt-2 text-white/50 text-sm leading-relaxed">
                    {current.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View All */}
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/success-stories"
              className="group inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
            >
              Read all success stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
