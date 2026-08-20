"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingTechnicalNode: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.position.y = Math.sin(t * 1.2) * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.3;
      ringRef.current.rotation.x = mouseX * 0.5 + Math.sin(t * 0.8) * 0.2;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.y -= delta * 0.25;
      ringRef2.current.rotation.z = -mouseY * 0.5;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshPhysicalMaterial
          color="#38bdf8"
          roughness={0.15}
          metalness={0.85}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Inner Glowing Point */}
      <mesh>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color="#0284c7" />
      </mesh>

      {/* Orbital Ring 1 */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 64]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.5} />
      </mesh>

      {/* Orbital Ring 2 */}
      <mesh ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 64]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

export const ContactNode3D: React.FC = () => {
  return (
    <div className="w-full h-64 sm:h-80 relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 4]} intensity={2.0} color="#f8fafc" />
        <pointLight position={[-3, -3, 2]} intensity={1.5} color="#38bdf8" />
        <FloatingTechnicalNode />
      </Canvas>
    </div>
  );
};
