"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextReveal, ScaleIn } from "@/components/animations/text-reveal";
import { CheckCircle, ArrowRight, FileCheck, Globe, BookOpen } from "lucide-react";

const steps = [
  {
    title: "Document Collection",
    desc: "Gather all academic transcripts, certificates, and identification documents.",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: "Authentication",
    desc: "Attestation from relevant authorities — embassy, notary, and government bodies.",
    icon: <FileCheck className="w-5 h-5" />,
  },
  {
    title: "MOE Submission",
    desc: "Submit authenticated documents to the UAE Ministry of Education for review.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Equivalency Issued",
    desc: "Receive your official equivalency certificate, valid across the UAE.",
    icon: <CheckCircle className="w-5 h-5" />,
  },
];

export function EquivalencySection() {
  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-emerald-600/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">
              UAE Equivalency
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              delay={0.1}
            >
              Recognized Worldwide
            </TextReveal>
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
              The UAE equivalency process ensures your international degree is
              fully recognized for employment and further education within the
              UAE. We make this complex process simple.
            </p>
          </FadeIn>
        </div>

        {/* Interactive Flowchart */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FlowStep key={i} step={step} index={i} />
            ))}
          </div>

          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:flex justify-center mt-6">
            <div className="flex items-center gap-2">
              {steps.map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-16 h-px bg-gradient-to-r from-emerald-500/30 to-emerald-500/10" />
                  {i < steps.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-emerald-500/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <ScaleIn delay={0.5}>
          <div className="mt-16 text-center">
            <a
              href="/services#equivalency"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
            >
              Learn About Equivalency Process
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}

function FlowStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-500 h-full">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
          {step.icon}
        </div>
        <span className="text-xs font-semibold text-emerald-400/60 tracking-wider uppercase">
          Step {index + 1}
        </span>
        <h4 className="mt-2 text-white font-semibold">{step.title}</h4>
        <p className="mt-2 text-white/40 text-sm leading-relaxed">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
