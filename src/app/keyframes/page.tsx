// apps/page.tsx
"use client";
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="center">
      <motion.div
        className="size-24 bg-white"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          background: [null, "#f59e0b", "#06b6d4", "#ef4444", "#10b981"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.2, 0.5, 0.8, 1], // 0-1
        }}
      />
    </div>
  );
}
