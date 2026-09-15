"use client";

import { Children, cloneElement, isValidElement } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

/**
 * Passes an incrementing `revealDelay` prop to each child (index *
 * staggerDelay), so a grid of self-animating Cards reveals in sequence
 * on scroll instead of firing all at once. Children must forward
 * `revealDelay` into their own whileInView transition (Card does).
 */
export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerGroupProps) {
  const reduced = useReducedMotion();

  return (
    <div className={cn(className)}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        const revealDelay = reduced ? 0 : index * staggerDelay;
        return cloneElement(
          child as React.ReactElement<{ revealDelay?: number }>,
          { revealDelay },
        );
      })}
    </div>
  );
}
