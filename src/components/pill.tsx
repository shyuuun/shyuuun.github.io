"use client";

import { motion } from "motion/react";
import StackIcon, { type IconName } from "tech-stack-icons";

const TECH_ICON_NAMES: Record<string, IconName> = {
  Flutter: "flutter",
  PHP: "php",
  Firebase: "firebase",
  React: "react",
  NextJS: "nextjs",
  "Vue.js": "vuejs",
  VueJS: "vuejs",
  Docker: "docker",
  Supabase: "supabase",
  PostgreSQL: "postgresql",
  Figma: "figma",
  JavaScript: "js",
  HTML: "html5",
  CSS: "css3",
  "C#": "csharp",
  MySQL: "mysql",
};

type PillProps = {
  name: string;
};

export default function Pill({ name }: PillProps) {
  const iconName = TECH_ICON_NAMES[name];

  return (
    <motion.span
      whileHover={{
        scale: 1.2,
        backgroundColor: "var(--primary)",
        color: "var(--background)",
      }}
      className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-primary/40 px-2.5 py-1 text-xs text-primary"
    >
      {iconName && (
        <StackIcon name={iconName} className="h-4 w-4" aria-hidden="true" />
      )}
      {name}
    </motion.span>
  );
}
