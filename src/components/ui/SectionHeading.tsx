"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className,
}: SectionHeadingProps) {
  const reduced = useReducedMotion();
  const initialY = reduced ? 0 : 16;
  const duration = reduced ? 0.01 : 0.45;

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <motion.p
        initial={{ opacity: 0, y: initialY }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration, ease: "easeOut" }}
        className="font-mono text-xs tracking-wide text-teal uppercase"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: initialY }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration, ease: "easeOut", delay: reduced ? 0 : 0.1 }}
        className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl"
      >
        {heading}
      </motion.h2>
      {subheading && (
        <p className="mt-3 font-body text-base text-ink-soft">{subheading}</p>
      )}
    </div>
  );
}
