"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import {
  FadeIn,
  TextReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/text-reveal";
import {
  GraduationCap,
  Plane,
  ShieldCheck,
  Briefcase,
  Award,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="w-6 h-6" />,
  plane: <Plane className="w-6 h-6" />,
  "shield-check": <ShieldCheck className="w-6 h-6" />,
  briefcase: <Briefcase className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
};

export function ServicesEcosystem() {
  const [activeService, setActiveService] = useState(services[0].id);
  const currentService = services.find((s) => s.id === activeService)!;

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] bg-violet-600/3 rounded-full blur-[250px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-violet-400 text-sm tracking-wider uppercase font-medium">
              Our Ecosystem
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              delay={0.1}
            >
              Services Designed for Impact
            </TextReveal>
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
              Every service is interconnected, creating a seamless ecosystem that
              supports your entire academic journey.
            </p>
          </FadeIn>
        </div>

        {/* Interactive Service Selector */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Service Tabs */}
          <StaggerContainer
            className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:w-1/3"
            staggerDelay={0.05}
          >
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <button
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal w-full ${
                    activeService === service.id
                      ? "bg-white/10 border border-white/10"
                      : "bg-transparent border border-transparent hover:bg-white/5 hover:border-white/5"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeService === service.id
                        ? `bg-gradient-to-br ${service.gradient} text-white`
                        : "bg-white/5 text-white/40"
                    }`}
                  >
                    {iconMap[service.icon]}
                  </div>
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        activeService === service.id
                          ? "text-white"
                          : "text-white/50"
                      }`}
                    >
                      {service.title}
                    </p>
                    <p
                      className={`text-xs mt-0.5 ${
                        activeService === service.id
                          ? "text-white/60"
                          : "text-white/30"
                      }`}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Active Service Detail */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 lg:p-10 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${currentService.gradient} opacity-[0.03]`}
                />

                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${currentService.gradient} text-white mb-6`}
                  >
                    {iconMap[currentService.icon]}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {currentService.title}
                  </h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-8">
                    {currentService.longDescription}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {currentService.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: currentService.accentColor,
                          }}
                        />
                        <span className="text-white/60 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href={`/services#${currentService.id}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                  >
                    Learn more about {currentService.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Ecosystem Connection Visual */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-white/[0.02]">
              <div className="flex -space-x-2">
                {services.map((s, i) => (
                  <div
                    key={s.id}
                    className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-white text-xs"
                    style={{
                      background: `linear-gradient(135deg, ${s.accentColor}, ${s.accentColor}88)`,
                    }}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <span className="text-white/40 text-sm">
                All services work together as one ecosystem
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
