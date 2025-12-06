"use client";
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl text-center font-bold"
      >
        Hello Framer Motion! 🔥
      </motion.div>
    </div>
  );
}
