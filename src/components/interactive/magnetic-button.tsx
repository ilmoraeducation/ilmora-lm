"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
}: MagneticButtonProps) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        layoutId="button-bg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
    </Component>
  );
}

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function GlowButton({
  children,
  className = "",
  onClick,
  href,
}: GlowButtonProps) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden group cursor-pointer ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
    </Component>
  );
}
