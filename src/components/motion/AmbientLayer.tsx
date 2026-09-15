"use client";

import { motion } from "framer-motion";
import { TestTube, Syringe, Activity, Stethoscope } from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Shape = {
  type: "circle" | "icon";
  Icon?: typeof TestTube;
  top: string;
  left: string;
  size: number;
  color: string;
  driftX: number;
  driftY: number;
  duration: number;
};

const shapes: Shape[] = [
  { type: "circle", top: "8%", left: "12%", size: 90, color: "var(--color-teal)", driftX: 24, driftY: 18, duration: 18 },
  { type: "circle", top: "62%", left: "78%", size: 130, color: "var(--color-blue-light)", driftX: -30, driftY: 20, duration: 22 },
  { type: "circle", top: "40%", left: "4%", size: 60, color: "var(--color-navy)", driftX: 16, driftY: -24, duration: 16 },
  { type: "icon", Icon: TestTube, top: "20%", left: "82%", size: 48, color: "var(--color-blue)", driftX: -14, driftY: 16, duration: 20 },
  { type: "icon", Icon: Syringe, top: "78%", left: "18%", size: 44, color: "var(--color-teal)", driftX: 18, driftY: -14, duration: 19 },
  { type: "icon", Icon: Activity, top: "10%", left: "48%", size: 52, color: "var(--color-blue-light)", driftX: -20, driftY: 12, duration: 24 },
  { type: "icon", Icon: Stethoscope, top: "85%", left: "60%", size: 46, color: "var(--color-navy)", driftX: 14, driftY: -18, duration: 21 },
];

export default function AmbientLayer() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {shapes.map((shape, i) => {
        const animate = reduced
          ? {}
          : {
              x: [0, shape.driftX, 0],
              y: [0, shape.driftY, 0],
            };
        const transition = reduced
          ? undefined
          : {
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut" as const,
            };

        return (
          <motion.div
            key={i}
            animate={animate}
            transition={transition}
            style={{
              position: "absolute",
              top: shape.top,
              left: shape.left,
              opacity: 0.08,
              color: shape.color,
            }}
          >
            {shape.type === "circle" ? (
              <div
                style={{
                  width: shape.size,
                  height: shape.size,
                  borderRadius: "9999px",
                  backgroundColor: shape.color,
                }}
              />
            ) : shape.Icon ? (
              <shape.Icon size={shape.size} strokeWidth={1.25} />
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}
