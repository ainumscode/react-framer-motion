// apps/page.tsx
"use client";
import styles from "./responsive.module.css";
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="center">
      <div className="w-[150px] overflow-hidden flex relative flex-col aspect-2/4 bg-[#41352a] rounded-2xl">
        <div className={`h-full ${styles.fadeout}`}>
          <motion.div
            className="text-[80px] font-[monospace] origin-top-left leading-[0.8] inset-1 absolute break-all"
            animate={{
              opacity: [0, 1, 1, 1, 1, 1, 0],
              scaleX: [1.5, 1.5, 2.5, 2.5, 2.5, 1.5, 1.5],
              scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 8],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.05, 0.2, 0.3, 0.45, 0.7, 1],
              duration: 4,
            }}
          >
            responsive
          </motion.div>
        </div>
        <p className="mt-auto p-2">Make your animations work on all devices</p>
      </div>
    </div>
  );
}
