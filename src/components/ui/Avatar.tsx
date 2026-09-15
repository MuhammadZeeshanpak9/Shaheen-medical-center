"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

type AvatarProps = {
  initials: string;
  name: string;
  className?: string;
};

export default function Avatar({ initials, name, className }: AvatarProps) {
  const reduced = useReducedMotion();

  return (
    <div style={{ perspective: 600 }}>
      <motion.div
        role="img"
        aria-label={name}
        style={{ transformStyle: "preserve-3d" }}
        whileHover={
          reduced ? undefined : { rotateX: -8, rotateY: 8, y: -2 }
        }
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full bg-navy font-display text-lg font-semibold text-sky",
          className,
        )}
      >
        {initials}
      </motion.div>
    </div>
  );
}
