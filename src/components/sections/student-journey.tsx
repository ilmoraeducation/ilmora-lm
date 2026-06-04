"use client";

import { motion } from "framer-motion";
import { journeySteps } from "@/data/success-stories";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import {
  Sparkles,
  Map,
  FileText,
  Trophy,
  Plane,
  GraduationCap,
  Rocket,
} from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-6 h-6" />,
  map: <Map className="w-6 h-6" />,
  "file-text": <FileText className="w-6 h-6" />,
  trophy: <Trophy className="w-6 h-6" />,
  plane: <Plane className="w-6 h-6" />,
  "graduation-cap": <GraduationCap className="w-6 h-6" />,
  rocket: <Rocket className="w-6 h-6" />,
};

const gradients = [
  "from-violet-500 to-indigo-500",
  "from-indigo-500 to-blue-500",
  "from-blue-500 to-cyan-500",
  "from-cyan-500 to-teal-500",
  "from-teal-500 to-emerald-500",
  "from-emerald-500 to-green-500",
  "from-green-500 to-lime-500",
];

function JourneyStep({
  step,
  index,
}: {
  step: (typeof journeySteps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start gap-6 lg:gap-8"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline Line & Node */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white shadow-lg`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: index * 0.1,
          }}
        >
          {iconMap[step.icon]}
        </motion.div>
        {index < journeySteps.length - 1 && (
          <motion.div
            className="w-px h-16 lg:h-24 bg-gradient-to-b from-white/20 to-transparent mt-2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-8 lg:pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-white/30">
            Step {step.step}
          </span>
          <span className="text-xs text-white/20">•</span>
          <span
            className={`text-xs font-semibold tracking-wider uppercase bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent`}
          >
            {step.phase}
          </span>
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
          {step.title}
        </h3>
        <p className="text-white/40 text-sm lg:text-base leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function StudentJourney() {
  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-indigo-600/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeIn>
              <span className="text-cyan-400 text-sm tracking-wider uppercase font-medium">
                Your Journey
              </span>
            </FadeIn>
            <div className="mt-4">
              <TextReveal
                as="h2"
                className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight"
                delay={0.1}
              >
                From Dream to Reality
              </TextReveal>
            </div>
            <FadeIn delay={0.3}>
              <p className="mt-6 text-white/40 text-lg leading-relaxed">
                Every great achievement follows a journey. At ILMORA, we&apos;ve
                mapped out the complete pathway from your initial dream to a
                thriving career, with expert guidance at every milestone.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <p className="text-white/50 text-sm italic leading-relaxed">
                  &quot;The journey of a thousand miles begins with a single step.
                  We make sure that step — and every step after — is in the right
                  direction.&quot;
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            {journeySteps.map((step, i) => (
              <JourneyStep key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
