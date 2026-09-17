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
  /** Use "dark" on navy/dark backgrounds so heading/subheading stay readable. */
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className,
  tone = "light",
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
        className={cn(
          "mt-2 font-display text-2xl font-semibold sm:text-3xl",
          tone === "dark" ? "text-white" : "text-navy",
        )}
      >
        {heading}
      </motion.h2>
      {subheading && (
        <p
          className={cn(
            "mt-3 font-body text-base",
            tone === "dark" ? "text-sky/80" : "text-ink-soft",
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
