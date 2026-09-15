"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = containerRef.current?.querySelector("main h1");
    if (heading instanceof HTMLElement) {
      if (!heading.hasAttribute("tabindex")) {
        heading.setAttribute("tabindex", "-1");
      }
      heading.focus();
    }
  }, [pathname]);

  return (
    <motion.div
      ref={containerRef}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.22, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
