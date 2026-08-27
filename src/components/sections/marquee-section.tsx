"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";

const ITEMS = [
  "creative",
  "coffee lover",
  "thinking",
  "full stack developer",
  "flutter developer",
  "ui ux specialist",
  "creative",
  "coffee lover",
  "thinking",
  "full stack developer",
  "flutter developer",
  "ui ux specialist",
];

export default function MarqueeSection() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div className="container mt-12 overflow-hidden border-y select-none">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="text-sm ">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
