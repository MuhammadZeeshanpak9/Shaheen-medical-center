"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

type PulseLineProps = {
  mode?: "once" | "onView" | "loop";
  className?: string;
  color?: string;
};

const ECG_PATH =
  "M0 30 H55 L68 10 L82 52 L96 4 L110 56 L124 30 H185 L198 14 L212 46 L226 30 H290 L302 12 L316 50 L330 28 H400";

export default function PulseLine({
  mode = "onView",
  className,
  color = "var(--color-teal)",
}: PulseLineProps) {
  const reduced = useReducedMotion();
  const controls = useAnimationControls();

  useEffect(() => {
    if (mode === "loop" && !reduced) {
      const run = async () => {
        while (true) {
          await controls.start({
            pathLength: [0, 1],
            opacity: [0.5, 1, 0.8],
            transition: { duration: 2.2, ease: "easeInOut" },
          });
          await controls.start({
            opacity: [0.8, 0],
            transition: { duration: 0.4, ease: "easeIn" },
          });
        }
      };
      run();
    }
  }, [mode, reduced, controls]);

  if (mode === "loop") {
    return (
      <svg
        viewBox="0 0 400 60"
        preserveAspectRatio="none"
        className={cn("h-8 w-full", className)}
        aria-hidden="true"
      >
        <defs>
          <filter id="ecg-glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Shadow/glow trail */}
        <motion.path
          d={ECG_PATH}
          fill="none"
          stroke={color}
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={0.25}
          filter="url(#ecg-glow)"
          animate={controls}
        />
        {/* Main bright line */}
        <motion.path
          d={ECG_PATH}
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
        />
      </svg>
    );
  }

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

