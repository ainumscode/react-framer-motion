"use client";

import { motion } from "motion/react";
import { MyCustomComponent } from "./_components/my-custom-component";

const AnimatedCustomComponent = motion.create(MyCustomComponent);

export default function Page() {
  return (
    <div className="center flex-col gap-4">
      {/* <motion.button
        initial={{ opacity: 0, scale: 0.5, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        className="bg-blue-500 rounded-md p-3 font-bold"
      >
        Hello World!
      </motion.button> */}

      {/* Custom Component */}
      <AnimatedCustomComponent className="bg-amber-500 p-4 rounded-md font-bold">
        <img src="https://images.unsplash.com/photo-1763244737839-220b4cd0259e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"></img>
      </AnimatedCustomComponent>
    </div>
  );
}
