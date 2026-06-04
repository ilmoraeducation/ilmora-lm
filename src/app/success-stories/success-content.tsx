"use client";

import { motion } from "framer-motion";
import { successStories } from "@/data/success-stories";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import { MapPin, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

export function SuccessStoriesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/5 rounded-full blur-[200px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
          <FadeIn>
            <span className="text-rose-400 text-sm tracking-wider uppercase font-medium">
              Student Stories
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
              delay={0.2}
            >
              Dreams Realized
            </TextReveal>
          </div>
          <FadeIn delay={0.5}>
            <p className="mt-6 text-white/40 text-lg md:text-xl max-w-2xl mx-auto">
              Every story is a testament to what happens when ambition meets the
              right guidance. These are the journeys that inspire everything we
              do.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stories */}
      <section className="relative py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 space-y-20">
          {successStories.map((story, i) => (
            <FadeIn key={story.id} delay={0.1}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <span
                    className={`text-sm tracking-wider uppercase font-medium bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent`}
                  >
                    {story.program}
                  </span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
                    {story.name}
                  </h2>

                  <div className="mt-3 flex items-center gap-4 text-white/30 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {story.origin}
                    </span>
                    <span>→</span>
                    <span className="flex items-center gap-1 text-white/50">
                      <MapPin className="w-3 h-3" />
                      {story.destination}
                    </span>
                  </div>

                  <p className="mt-4 text-white/30 text-sm">{story.university}</p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-white/30 mb-2">
                        The Challenge
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {story.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-white/30 mb-2">
                        The Journey
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {story.journey}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-white/30 mb-2">
                        The Outcome
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {story.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-white/40 text-sm italic">
                      &ldquo;{story.advice}&rdquo;
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-center justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div
                    className={`relative w-full max-w-md aspect-[4/3] rounded-3xl bg-gradient-to-br ${story.gradient} p-[1px]`}
                  >
                    <div className="absolute inset-0 rounded-3xl bg-black/90 flex flex-col justify-center items-center text-center p-8">
                      <Quote className="w-10 h-10 text-white/10 mb-4" />
                      <p className="text-white/50 text-lg italic leading-relaxed">
                        &ldquo;{story.summary}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/10 via-transparent to-indigo-950/10" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Your Story Starts Here
            </h2>
            <p className="text-white/40 text-lg mb-8">
              The next success story could be yours. Begin your journey with
              ILMORA today.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
