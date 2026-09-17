"use client";

import { motion } from "framer-motion";
import {
  TestTube,
  Syringe,
  Activity,
  Stethoscope,
  Pill,
  HeartPulse,
  Cross,
  Thermometer,
} from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Shape = {
  type: "circle" | "icon";
  Icon?: typeof TestTube;
  top: string;
  left: string;
  size: number;
  opacity: number;
  color: string;
  driftX: number;
  driftY: number;
  duration: number;
};

const shapes: Shape[] = [
  { type: "circle", top: "6%", left: "10%", size: 110, opacity: 0.1, color: "var(--color-teal)", driftX: 65, driftY: 50, duration: 10 },
  { type: "circle", top: "60%", left: "80%", size: 160, opacity: 0.09, color: "var(--color-blue-light)", driftX: -70, driftY: 55, duration: 12 },
  { type: "circle", top: "36%", left: "2%", size: 70, opacity: 0.11, color: "var(--color-navy)", driftX: 50, driftY: -60, duration: 9 },
  { type: "icon", Icon: TestTube, top: "16%", left: "84%", size: 88, opacity: 0.22, color: "var(--color-navy)", driftX: -55, driftY: 60, duration: 11 },
  { type: "icon", Icon: Syringe, top: "76%", left: "14%", size: 82, opacity: 0.22, color: "var(--color-ink)", driftX: 60, driftY: -50, duration: 10 },
  { type: "icon", Icon: Activity, top: "8%", left: "46%", size: 96, opacity: 0.2, color: "var(--color-blue)", driftX: -65, driftY: 45, duration: 13 },
  { type: "icon", Icon: Stethoscope, top: "88%", left: "58%", size: 84, opacity: 0.22, color: "var(--color-navy)", driftX: 52, driftY: -65, duration: 11 },
  { type: "icon", Icon: Syringe, top: "44%", left: "92%", size: 70, opacity: 0.2, color: "var(--color-ink)", driftX: -48, driftY: 58, duration: 9 },
  { type: "icon", Icon: TestTube, top: "58%", left: "24%", size: 74, opacity: 0.2, color: "var(--color-blue)", driftX: 56, driftY: -52, duration: 12 },
  { type: "icon", Icon: Activity, top: "94%", left: "6%", size: 78, opacity: 0.21, color: "var(--color-navy)", driftX: -60, driftY: 48, duration: 10 },
  { type: "icon", Icon: Stethoscope, top: "26%", left: "62%", size: 72, opacity: 0.2, color: "var(--color-ink)", driftX: 54, driftY: -58, duration: 13 },
  { type: "icon", Icon: Pill, top: "68%", left: "42%", size: 76, opacity: 0.21, color: "var(--color-navy)", driftX: -58, driftY: 46, duration: 11 },
  { type: "icon", Icon: HeartPulse, top: "12%", left: "20%", size: 90, opacity: 0.2, color: "var(--color-ink)", driftX: 62, driftY: -54, duration: 12 },
  { type: "icon", Icon: Cross, top: "50%", left: "8%", size: 68, opacity: 0.21, color: "var(--color-blue)", driftX: -50, driftY: 56, duration: 9 },
  { type: "icon", Icon: Thermometer, top: "80%", left: "88%", size: 72, opacity: 0.2, color: "var(--color-navy)", driftX: 58, driftY: -48, duration: 10 },
  { type: "icon", Icon: Pill, top: "32%", left: "76%", size: 66, opacity: 0.2, color: "var(--color-ink)", driftX: -54, driftY: 52, duration: 13 },
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
              opacity: shape.opacity,
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
              <shape.Icon size={shape.size} strokeWidth={2} />
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}
