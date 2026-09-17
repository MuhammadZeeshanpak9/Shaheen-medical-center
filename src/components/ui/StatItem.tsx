"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

type StatItemProps = {
  icon: React.ReactNode;
  label: string;
  description?: string;
  revealDelay?: number;
  /** Richer card treatment with hover lift/glow — used where a description is present. */
  variant?: "plain" | "card";
  className?: string;
};

export default function StatItem({
  icon,
  label,
  description,
  revealDelay = 0,
  variant = "plain",
  className,
}: StatItemProps) {
  const reduced = useReducedMotion();

  if (variant === "card") {
    return (
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        whileHover={reduced ? undefined : { y: -6 }}
        transition={{
          duration: reduced ? 0.01 : 0.45,
          ease: "easeOut",
          delay: reduced ? 0 : revealDelay,
        }}
        tabIndex={0}
        className={cn(
          "group cursor-default rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center outline-none transition-colors duration-200 hover:border-teal/40 hover:bg-white/[0.08] focus-visible:border-teal/60 focus-visible:ring-2 focus-visible:ring-teal/50",
          className,
        )}
      >
        <motion.span
          aria-hidden="true"
          whileHover={reduced ? undefined : { scale: 1.08, rotate: 4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/25 to-blue-light/20 text-teal shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-colors duration-200 group-hover:from-teal/40 group-hover:to-blue-light/30 group-hover:text-white [&>svg]:h-7 [&>svg]:w-7"
        >
          {icon}
        </motion.span>
        <p className="mt-4 font-display text-base font-semibold text-white">
          {label}
        </p>
        {description && (
          <p className="mt-2 font-body text-sm text-sky/70">{description}</p>
        )}
      </motion.div>
    );
  }

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
      className={cn("flex flex-col items-center gap-3 text-center", className)}
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
