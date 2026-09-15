"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

type StatItemProps = {
  icon: React.ReactNode;
  label: string;
  revealDelay?: number;
};

export default function StatItem({
  icon,
  label,
  revealDelay = 0,
}: StatItemProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduced ? 0.01 : 0.4,
        ease: "easeOut",
        delay: reduced ? 0 : revealDelay,
      }}
      className="flex flex-col items-center gap-3 text-center"
    >
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full bg-sky text-blue [&>svg]:h-6 [&>svg]:w-6"
        aria-hidden="true"
      >
        {icon}
      </span>
      <p className="font-body text-sm font-semibold text-navy">{label}</p>
    </motion.div>
  );
}
