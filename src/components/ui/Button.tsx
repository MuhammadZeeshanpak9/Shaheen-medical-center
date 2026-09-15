"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2";

const variants = {
  primary: "bg-blue text-white hover:bg-navy",
  secondary: "bg-white text-navy border border-line hover:bg-sky",
};

const MotionLink = motion.create(Link);

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  type = "button",
}: ButtonProps) {
  const reduced = useReducedMotion();
  const classes = cn(base, variants[variant], className);
  const motionProps = reduced
    ? {}
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  if (href) {
    return (
      <MotionLink href={href} className={classes} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
