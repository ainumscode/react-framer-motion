// app/page.tsx
"use client";
import { motion } from "motion/react";

export default function page() {
  return (
    <div className="center overflow-hidden">
      <motion.div
        className="size-40 bg-linear-to-br from-cyan-400 to-pink-500 rounded-3xl shadow-2xl center text-4xl font-bold"
        initial={{ y: -300, rotate: -180, scale: 0 }}
        animate={{ y: 0, rotate: 0, scale: 1 }}
        transition={{
          duration: 1.5,   // seconds
          ease: "easeOut", // linear | easeIn | easeOut | easeInOut
          type: "spring",  // "tween" | "spring" | "inertia"
          stiffness: 260,   // higher = snappier
          damping: 8,       // Default: 10 higher = less bounce
          mass: 2,          // Default: 1 higher = heavier
          repeat: 0,        // number | Infinity
          repeatType: undefined, // reverse | mirror | loop
          repeatDelay: 0.8,   // seconds
        }}
      >
        Motion
      </motion.div>
    </div>
  );
}
