"use client";

import { useMemo, useRef } from "react";
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
  const r4 = seededRandom(i * 51.123);
  const r5 = seededRandom(i * 91.771);
  const r6 = seededRandom(i * 63.917);
  return {
    position: [
      (r1 - 0.5) * 10,
      (r2 - 0.5) * 6,
      (r3 - 0.5) * 4,
    ] as [number, number, number],
    rotation: [
      r4 * Math.PI * 2,
      r5 * Math.PI * 2,
      r6 * Math.PI * 2,
    ] as [number, number, number],
    scale: 0.3 + r1 * 0.5,
    speed: 0.1 + r2 * 0.15,
  };
});

/**
 * Biconcave disc profile (red blood cell cross-section), revolved around
 * the y-axis via LatheGeometry. x = radius from center, y = thickness
 * offset. Dimple depth ~28% of radius; rim is the thinnest point.
 */
function createBiconcaveGeometry() {
  const radius = 1;
  const dimpleDepth = radius * 0.28;
  const rimThickness = radius * 0.16;
  const centerThickness = radius * 0.42;

  const profile = [
    new THREE.Vector2(0.0, centerThickness / 2 - dimpleDepth),
    new THREE.Vector2(0.15, centerThickness / 2 - dimpleDepth * 0.9),
    new THREE.Vector2(0.35, centerThickness / 2 - dimpleDepth * 0.55),
    new THREE.Vector2(0.55, centerThickness / 2 - dimpleDepth * 0.1),
    new THREE.Vector2(0.72, centerThickness / 2 + dimpleDepth * 0.12),
    new THREE.Vector2(0.88, rimThickness / 2 + 0.02),
    new THREE.Vector2(1.0, rimThickness / 2),
    new THREE.Vector2(1.0, -rimThickness / 2),
    new THREE.Vector2(0.88, -(rimThickness / 2 + 0.02)),
    new THREE.Vector2(0.72, -(centerThickness / 2 + dimpleDepth * 0.12)),
    new THREE.Vector2(0.55, -(centerThickness / 2 - dimpleDepth * 0.1)),
    new THREE.Vector2(0.35, -(centerThickness / 2 - dimpleDepth * 0.55)),
    new THREE.Vector2(0.15, -(centerThickness / 2 - dimpleDepth * 0.9)),
    new THREE.Vector2(0.0, -(centerThickness / 2 - dimpleDepth)),
  ];

  const geometry = new THREE.LatheGeometry(profile, 20);
  geometry.rotateZ(Math.PI / 2);
  geometry.computeVertexNormals();
  return geometry;
}

function BloodCells() {
  const groupRef = useRef<THREE.Group>(null);
  const geometry = useMemo(() => createBiconcaveGeometry(), []);

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
      <Instances limit={PARTICLE_COUNT} geometry={geometry}>
        <meshPhysicalMaterial
          color="#B92C36"
          roughness={0.28}
          metalness={0.05}
          transmission={0.15}
          thickness={0.3}
          clearcoat={0.4}
          clearcoatRoughness={0.3}
        />
        {particles.map((p, i) => (
          <Instance
            key={i}
            position={p.position}
            rotation={p.rotation}
            scale={p.scale}
          />
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
      <ambientLight intensity={0.4} color="#fff1e8" />
      <pointLight position={[3, 4, 6]} intensity={1.6} color="#fff4ec" />
      <pointLight position={[-4, -2, 3]} intensity={0.5} color="#4fa8da" />
      <BloodCells />
    </Canvas>
  );
}
