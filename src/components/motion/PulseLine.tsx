"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

type PulseLineProps = {
  mode?: "once" | "onView";
  className?: string;
  color?: string;
};

const ECG_PATH =
  "M0 30 H60 L75 10 L90 50 L105 5 L120 55 L135 30 H200 L215 15 L230 45 L245 30 H400";

export default function PulseLine({
  mode = "onView",
  className,
  color = "var(--color-teal)",
}: PulseLineProps) {
  const reduced = useReducedMotion();

  const viewProps =
    mode === "once"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-40px" },
        };

  return (
    <svg
      viewBox="0 0 400 60"
      preserveAspectRatio="none"
      className={cn("h-8 w-full", className)}
      aria-hidden="true"
    >
      <motion.path
        d={ECG_PATH}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0.4 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: reduced
              ? { duration: 0.01 }
              : { duration: 1.4, ease: "easeInOut" },
          },
        }}
        {...viewProps}
      />
    </svg>
  );
}
