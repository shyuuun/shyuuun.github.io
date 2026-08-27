"use client";

import { useTheme } from "next-themes";
import { DitherReveal } from "./dither-image-reveal";
import { AnimatePresence } from "motion/react";

export default function MyImage() {
  const { resolvedTheme } = useTheme();

  const image =
    resolvedTheme === "dark"
      ? {
          src: "image.jpeg",
          url: "image.jpeg",
          alt: "My cosplay image in dark theme",
        }
      : {
          src: "me.jpg",
          url: "me.jpg",
          alt: "My real image in light theme",
        };
  const color1 = resolvedTheme === "dark" ? "#123223" : "#0e0e0e";
  const color2 = resolvedTheme === "dark" ? "#bc84f8" : "#ffffff";

  return (
    <AnimatePresence>
      <DitherReveal
        image={image}
        style={{ height: 320, width: 320 }}
        color1={color1}
        color2={color2}
      />
    </AnimatePresence>
  );
}
