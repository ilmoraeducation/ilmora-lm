"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    detail: siteConfig.links.phoneDisplay,
    href: `tel:${siteConfig.links.phone}`,
    color: "from-violet-500/20 to-indigo-500/20",
    textColor: "text-violet-400",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    detail: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    color: "from-indigo-500/20 to-cyan-500/20",
    textColor: "text-indigo-400",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    detail: "Chat with us instantly",
    href: siteConfig.links.whatsapp,
    color: "from-emerald-500/20 to-green-500/20",
    textColor: "text-emerald-400",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    detail: siteConfig.links.address.full,
    href: "#map",
    color: "from-amber-500/20 to-orange-500/20",
    textColor: "text-amber-400",
  },
];

export function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[200px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
          <FadeIn>
            <span className="text-violet-400 text-sm tracking-wider uppercase font-medium">
              Contact Us
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
              delay={0.2}
            >
              Let&apos;s Talk
            </TextReveal>
          </div>
          <FadeIn delay={0.5}>
            <p className="mt-6 text-white/40 text-lg md:text-xl max-w-2xl mx-auto">
              Every great journey starts with a conversation. Reach out to us
              and discover how ILMORA can transform your educational aspirations
              into reality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center ${method.textColor} mb-4`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    {method.title}
                  </h3>
                  <p className="text-white/40 text-sm">{method.detail}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Begin Your Journey Today
                </h2>
                <p className="text-white/40 text-lg leading-relaxed mb-8">
                  Fill out the form and one of our expert counselors will get
                  back to you within 24 hours. Or reach out directly through any
                  of the methods above.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/40">
                    <Clock className="w-4 h-4 text-violet-400" />
                    <span className="text-sm">
                      Response within 24 hours, guaranteed
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40">
                    <MessageCircle className="w-4 h-4 text-violet-400" />
                    <span className="text-sm">
                      Free initial consultation — no obligations
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40">
                    <MapPin className="w-4 h-4 text-violet-400" />
                    <span className="text-sm">
                      In-person meetings available at our Dubai office
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-sm mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-sm mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-sm mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-sm mb-2">
                      Interested In
                    </label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/50 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all appearance-none">
                      <option value="">Select a service</option>
                      <option value="admissions">University Admissions</option>
                      <option value="visa">Visa Processing</option>
                      <option value="equivalency">UAE Equivalency</option>
                      <option value="career">Career Guidance</option>
                      <option value="scholarships">
                        Scholarship Assistance
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/50 text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all resize-none"
                      placeholder="Tell us about your educational goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section id="map" className="relative h-[400px] bg-white/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-violet-400/30 mx-auto mb-4" />
            <p className="text-white/30 text-lg">
              {siteConfig.links.address.full}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                siteConfig.links.address.full
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-violet-400 text-sm hover:underline"
            >
              Open in Google Maps
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
