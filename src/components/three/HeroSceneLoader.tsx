"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "@/lib/useReducedMotion";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

function StaticHeroFallback() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {[
        { top: "15%", left: "10%", size: 70 },
        { top: "55%", left: "80%", size: 100 },
        { top: "70%", left: "20%", size: 50 },
        { top: "25%", left: "65%", size: 60 },
      ].map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: c.top,
            left: c.left,
            width: c.size,
            height: c.size,
            borderRadius: "9999px",
            backgroundColor: "#e0665a",
            opacity: 0.1,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSceneLoader() {
  const reducedMotion = useReducedMotion();
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(supportsWebGL());
  }, []);

  const canRender3D = webglSupported === true && !reducedMotion;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {canRender3D ? <HeroScene /> : <StaticHeroFallback />}
    </div>
  );
}
