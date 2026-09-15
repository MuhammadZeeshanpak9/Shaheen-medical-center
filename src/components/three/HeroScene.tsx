"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";
import * as THREE from "three";

const PARTICLE_COUNT = 42;

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const r1 = seededRandom(i * 12.9898);
  const r2 = seededRandom(i * 78.233);
  const r3 = seededRandom(i * 37.719);
  return {
    position: [
      (r1 - 0.5) * 10,
      (r2 - 0.5) * 6,
      (r3 - 0.5) * 4,
    ] as [number, number, number],
    scale: 0.15 + r1 * 0.25,
    speed: 0.1 + r2 * 0.15,
  };
});

function BloodCells() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.03;
    groupRef.current.children.forEach((child, i) => {
      const p = particles[i];
      if (!p) return;
      child.position.y = p.position[1] + Math.sin(t * p.speed + i) * 0.4;
    });
  });

  return (
    <group ref={groupRef}>
      <Instances limit={PARTICLE_COUNT}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#e0665a"
          roughness={0.4}
          metalness={0.1}
        />
        {particles.map((p, i) => (
          <Instance key={i} position={p.position} scale={p.scale} />
        ))}
      </Instances>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} color="#4fa8da" />
      <pointLight position={[4, 3, 5]} intensity={0.8} color="#4fa8da" />
      <BloodCells />
    </Canvas>
  );
}
