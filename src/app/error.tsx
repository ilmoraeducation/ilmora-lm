"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-6xl font-bold bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
          Error
        </span>
        <h1 className="mt-6 text-2xl font-bold text-white">
          Something went wrong
        </h1>
        <p className="mt-4 text-white/40 max-w-md mx-auto">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
        >
          Try Again
        </button>
      </motion.div>
    </div>
  );
}
