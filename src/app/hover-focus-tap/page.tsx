// apps/page.tsx
"use client";
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="center">
      <motion.button
        className="px-10 py-6 bg-linear-to-r from-purple-600 to-pink-600 text-2xl font-bold rounded-2xl shadow-2xl cursor-pointer"
        whileHover={{
          scale: 1.2,
          rotate: -5,
          boxShadow: "0 0 40px rgba(236, 72, 153, 0.8)",
        }}
        whileTap={{ scale: 0.9, rotate: 0 }}
        whileFocus={{ scale: 1.2, background: "#ef4444" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Hover me!
      </motion.button>
    </div>
  );
}
