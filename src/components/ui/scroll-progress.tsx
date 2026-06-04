"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-interactions";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX: progress,
        background:
          "linear-gradient(90deg, #7C3AED, #4F46E5, #0891B2, #059669)",
      }}
    />
  );
}
