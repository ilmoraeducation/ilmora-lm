"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, blogCategories } from "@/data/blog";
import { FadeIn, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations/text-reveal";
import { Clock, ArrowUpRight, Tag } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Admissions: "text-violet-400 bg-violet-500/10",
  "Visa Guide": "text-cyan-400 bg-cyan-500/10",
  Scholarships: "text-amber-400 bg-amber-500/10",
  "Career Tips": "text-emerald-400 bg-emerald-500/10",
  "Student Life": "text-pink-400 bg-pink-500/10",
  "UAE Education": "text-indigo-400 bg-indigo-500/10",
};

export function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[200px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-32 pb-16">
          <FadeIn>
            <span className="text-cyan-400 text-sm tracking-wider uppercase font-medium">
              Insights & Guides
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-4xl md:text-6xl font-bold text-white tracking-tight"
              delay={0.2}
            >
              The ILMORA Journal
            </TextReveal>
          </div>
          <FadeIn delay={0.5}>
            <p className="mt-6 text-white/40 text-lg max-w-xl mx-auto">
              Expert insights, comprehensive guides, and the latest in global
              higher education.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-black border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Tag className="w-4 h-4 text-white/30 flex-shrink-0" />
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-white/10 text-white"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {activeCategory === "All" && (
        <section className="py-16 bg-black">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-xl font-semibold text-white mb-8">
                Featured Articles
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((post, i) => (
                <FadeIn key={post.id} delay={i * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 h-full">
                      <span
                        className={`inline-block px-2 py-0.5 text-xs font-medium rounded-md mb-4 ${
                          categoryColors[post.category] || "text-white/40 bg-white/5"
                        }`}
                      >
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-white/30">
                        <span>{formatDate(post.date)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <StaggerContainer
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                staggerDelay={0.05}
              >
                {filtered.map((post) => (
                  <StaggerItem key={post.id}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 h-full flex flex-col">
                        <span
                          className={`inline-block px-2 py-0.5 text-xs font-medium rounded-md mb-3 self-start ${
                            categoryColors[post.category] || "text-white/40 bg-white/5"
                          }`}
                        >
                          {post.category}
                        </span>
                        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-white/30 pt-3 border-t border-white/5">
                          <span>{formatDate(post.date)}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
