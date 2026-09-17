"use client";

import { Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

type IllustratedCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  /** 1-based index, rendered as a large faint corner accent (e.g. 1 -> "01"). */
  index: number;
  revealDelay?: number;
  className?: string;
};

export default function IllustratedCard({
  title,
  description,
  icon = <Stethoscope />,
  index,
  revealDelay = 0,
  className,
}: IllustratedCardProps) {
  const reduced = useReducedMotion();
  const y = reduced ? 0 : 8;
  const indexLabel = String(index).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={reduced ? undefined : { y: -8, scale: 1.02 }}
      transition={{
        duration: reduced ? 0.01 : 0.4,
        ease: "easeOut",
        delay: reduced ? 0 : revealDelay,
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-hover/40 hover:shadow-xl hover:shadow-blue/5 sm:p-8",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-4 font-display text-6xl font-semibold text-navy/[0.05] transition-colors duration-200 group-hover:text-blue-light/10"
      >
        {indexLabel}
      </span>

      <div className="relative flex flex-col gap-5">
        <motion.span
          aria-hidden="true"
          whileHover={reduced ? undefined : { scale: 1.06 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky to-blue-light/40 text-blue transition-colors duration-200 group-hover:from-blue-light/50 group-hover:to-teal/30 group-hover:text-teal [&>svg]:h-7 [&>svg]:w-7 sm:h-[72px] sm:w-[72px] sm:[&>svg]:h-8 sm:[&>svg]:w-8"
        >
          {icon}
        </motion.span>

        <div>
          <motion.h3
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: reduced ? 0.01 : 0.35,
              ease: "easeOut",
              delay: reduced ? 0 : revealDelay,
            }}
            className="font-display text-lg font-semibold text-navy"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: reduced ? 0.01 : 0.35,
              ease: "easeOut",
              delay: reduced ? 0 : revealDelay + 0.08,
            }}
            className="mt-2 font-body text-sm text-ink-soft"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
