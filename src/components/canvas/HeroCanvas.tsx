"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { SystemArchitecture3D } from "./SystemArchitecture3D";
import { ParticleAtmosphere } from "./ParticleAtmosphere";

export const HeroCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        {/* Atmosphere Fog */}
        <fog attach="fog" args={["#030303", 6, 18]} />

        {/* Multi-point studio lighting */}
        <ambientLight intensity={0.45} />
        <directionalLight position={[6, 8, 7]} intensity={3.0} color="#f8fafc" />
        <directionalLight position={[-6, -4, -3]} intensity={1.2} color="#60a5fa" />
        <pointLight position={[0, -4, 5]} intensity={1.8} color="#38bdf8" />

        {/* System Architecture 3D Assets */}
        <Suspense fallback={null}>
          <SystemArchitecture3D />
          <ParticleAtmosphere count={600} />
        </Suspense>
      </Canvas>
    </div>
  );
};
