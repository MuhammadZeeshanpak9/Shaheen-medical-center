"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Extra whileInView delay in seconds, set by a StaggerGroup parent. */
  revealDelay?: number;
};

export default function Card({ children, className, revealDelay = 0 }: CardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduced ? 0.01 : 0.5,
        ease: "easeOut",
        delay: reduced ? 0 : revealDelay,
      }}
      className={cn(
        "rounded-2xl border border-line bg-white p-6 shadow-sm",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
