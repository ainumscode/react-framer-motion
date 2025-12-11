// apps/page.tsx
"use client";
import { motion, useMotionValue } from "motion/react";

export default function page() {
  const scale = useMotionValue(1);

  const onRangeChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    // scale.get();
    scale.set(parseFloat(ev.target.value));
  };

  return (
    <div className="center overflow-hidden">
      <h1 className="fixed top-6 text-4xl font-bold">Motion Values</h1>

      <motion.button
        className="px-6 py-3 rounded-xl text-lg font-semibold bg-black"
        style={{ scale }}
        transition={{ type: "spring", stiffness: 400 }} // ❌ Doesn't work
      >
        SCALE ⚖️
      </motion.button>

      {/* Range Slider */}
      <div className="fixed flex items-center gap-4 bottom-8 left-1/2 -translate-x-1/2 bg-white/10 p-4 rounded-2xl">
        <span>0.5x</span>
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={onRangeChange}
          className="w-50 cursor-pointer"
        />
        <span>5x</span>
      </div>
    </div>
  );
}
