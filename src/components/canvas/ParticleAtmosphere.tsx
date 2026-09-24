"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export const ParticleAtmosphere: React.FC<{ count?: number }> = ({ count = 900 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const c1 = new THREE.Color("#ffffff");
    const c2 = new THREE.Color("#8e8e93");
    const c3 = new THREE.Color("#48484a");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (pseudoRandom(i * 3 + 1) - 0.5) * 28;
      pos[i3 + 1] = (pseudoRandom(i * 3 + 2) - 0.5) * 28;
      pos[i3 + 2] = (pseudoRandom(i * 3 + 3) - 0.5) * 20;

      const mixed = i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3;
      cols[i3] = mixed.r;
      cols[i3 + 1] = mixed.g;
      cols[i3 + 2] = mixed.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
