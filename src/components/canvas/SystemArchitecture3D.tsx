"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export const SystemArchitecture3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const phoneRef = useRef<THREE.Group>(null);
  const apiNodeRef = useRef<THREE.Mesh>(null);
  const backendNodeRef = useRef<THREE.Mesh>(null);
  const dbClusterRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Animated data pulses traveling between Mobile -> API -> Backend -> DB
  const particleCount = 60;
  const positions = useMemo(() => new Float32Array(particleCount * 3), [particleCount]);
  const progressesRef = useRef<Float32Array>(
    new Float32Array(Array.from({ length: particleCount }, (_, idx) => pseudoRandom(idx + 1)))
  );

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    if (groupRef.current) {
      // Gentle overall scene parallax
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseX * 0.25,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouseY * 0.18,
        0.05
      );
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.12;
    }

    // 1. Mobile Phone Frame subtle tilt
    if (phoneRef.current) {
      phoneRef.current.rotation.y = 0.35 + Math.sin(t * 1.1) * 0.05;
      phoneRef.current.rotation.x = 0.15 + Math.cos(t * 0.9) * 0.04;
    }

    // 2. API Gateway pulse
    if (apiNodeRef.current) {
      apiNodeRef.current.rotation.y += delta * 0.6;
      apiNodeRef.current.rotation.x += delta * 0.4;
      const s = 1 + Math.sin(t * 2.5) * 0.06;
      apiNodeRef.current.scale.set(s, s, s);
    }

    // 3. Backend Node rotation
    if (backendNodeRef.current) {
      backendNodeRef.current.rotation.y += delta * 0.4;
      backendNodeRef.current.rotation.z += delta * 0.3;
    }

    // 4. Database Cylinders slow hover
    if (dbClusterRef.current) {
      dbClusterRef.current.rotation.y += delta * 0.2;
    }

    // 5. Update data particle positions along the pipeline
    if (particlesRef.current) {
      const posAttr = particlesRef.current.geometry.attributes.position;
      const posArray = posAttr.array as Float32Array;

      // Pipeline points:
      // Point A: Mobile Phone (-3.2, 0, 0)
      // Point B: REST API Gateway (-1.0, 0.4, 0.2)
      // Point C: Node/Express Backend (1.2, -0.2, 0)
      // Point D: MongoDB/Firebase Cluster (3.4, 0.2, -0.2)

      const progresses = progressesRef.current;
      for (let i = 0; i < particleCount; i++) {
        progresses[i] = (progresses[i] + delta * 0.35) % 1;
        const p = progresses[i];
        const i3 = i * 3;

        let x = 0, y = 0, z = 0;
        if (p < 0.33) {
          // Mobile -> API
          const segP = p / 0.33;
          x = THREE.MathUtils.lerp(-3.2, -1.0, segP);
          y = THREE.MathUtils.lerp(0, 0.4, segP) + Math.sin(segP * Math.PI) * 0.3;
          z = THREE.MathUtils.lerp(0, 0.2, segP);
        } else if (p < 0.66) {
          // API -> Backend
          const segP = (p - 0.33) / 0.33;
          x = THREE.MathUtils.lerp(-1.0, 1.2, segP);
          y = THREE.MathUtils.lerp(0.4, -0.2, segP) - Math.sin(segP * Math.PI) * 0.25;
          z = THREE.MathUtils.lerp(0.2, 0, segP);
        } else {
          // Backend -> Database
          const segP = (p - 0.66) / 0.34;
          x = THREE.MathUtils.lerp(1.2, 3.4, segP);
          y = THREE.MathUtils.lerp(-0.2, 0.2, segP) + Math.sin(segP * Math.PI) * 0.2;
          z = THREE.MathUtils.lerp(0, -0.2, segP);
        }

        // Slight jitter
        posArray[i3] = x;
        posArray[i3 + 1] = y + Math.sin(t * 3 + i) * 0.03;
        posArray[i3 + 2] = z + Math.cos(t * 3 + i) * 0.03;
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. NODE A: Mobile Client (Flutter/Kotlin Device Frame) */}
      <group ref={phoneRef} position={[-3.2, 0, 0]}>
        {/* Phone Outer Chassis */}
        <mesh>
          <boxGeometry args={[1.8, 3.6, 0.18]} />
          <meshPhysicalMaterial
            color="#090d16"
            metalness={0.9}
            roughness={0.2}
            clearcoat={1.0}
            reflectivity={0.9}
          />
        </mesh>

        {/* Screen Wireframe Glow */}
        <mesh position={[0, 0, 0.1]}>
          <planeGeometry args={[1.6, 3.3, 4, 8]} />
          <meshBasicMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Screen Inner Blueprint Lines */}
        <mesh position={[0, 0, 0.095]}>
          <planeGeometry args={[1.55, 3.25]} />
          <meshBasicMaterial color="#0284c7" transparent opacity={0.08} />
        </mesh>
      </group>

      {/* 2. NODE B: REST API Gateway (Octahedron with Orbital Rings) */}
      <group position={[-1.0, 0.4, 0.2]}>
        <mesh ref={apiNodeRef}>
          <octahedronGeometry args={[0.65, 0]} />
          <meshPhysicalMaterial
            color="#6366f1"
            roughness={0.1}
            metalness={0.8}
            wireframe
            transparent
            opacity={0.7}
          />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.05, 0.02, 16, 64]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* 3. NODE C: Backend Engine (Node.js / Express Server Cuboid) */}
      <group position={[1.2, -0.2, 0]}>
        <mesh ref={backendNodeRef}>
          <boxGeometry args={[1.1, 1.1, 1.1]} />
          <meshPhysicalMaterial
            color="#10b981"
            roughness={0.2}
            metalness={0.7}
            wireframe
            transparent
            opacity={0.65}
          />
        </mesh>
        <mesh>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshBasicMaterial color="#34d399" transparent opacity={0.15} />
        </mesh>
      </group>

      {/* 4. NODE D: Database Cluster (MongoDB & Firebase Cylinders) */}
      <group ref={dbClusterRef} position={[3.4, 0.2, -0.2]}>
        {/* Tier 1 Cylinder */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.75, 0.75, 0.35, 24]} />
          <meshPhysicalMaterial
            color="#06b6d4"
            roughness={0.15}
            metalness={0.85}
            clearcoat={0.8}
          />
        </mesh>
        {/* Tier 2 Cylinder */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.75, 0.75, 0.35, 24]} />
          <meshPhysicalMaterial
            color="#0284c7"
            roughness={0.15}
            metalness={0.85}
            clearcoat={0.8}
          />
        </mesh>
        {/* Tier 3 Cylinder */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.75, 0.75, 0.35, 24]} />
          <meshPhysicalMaterial
            color="#0369a1"
            roughness={0.15}
            metalness={0.85}
            clearcoat={0.8}
          />
        </mesh>
      </group>

      {/* 5. Architectural Pipeline Connection Lines (Static Neon Splines) */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array([
                -3.2, 0, 0,
                -1.0, 0.4, 0.2,
                1.2, -0.2, 0,
                3.4, 0.2, -0.2,
              ]),
              3,
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#475569" transparent opacity={0.3} />
      </line>

      {/* 6. Moving Data Pulse Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#38bdf8"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};
