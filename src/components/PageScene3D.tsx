'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Wireframe Shape ─── */
function WireframeShape({ position, geometry, speed, scale }: {
  position: [number, number, number];
  geometry: 'icosahedron' | 'octahedron' | 'torus' | 'tetrahedron' | 'dodecahedron';
  speed: number;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case 'icosahedron': return <icosahedronGeometry args={[1, 1]} />;
      case 'octahedron': return <octahedronGeometry args={[1, 0]} />;
      case 'torus': return <torusGeometry args={[1, 0.15, 8, 16]} />;
      case 'tetrahedron': return <tetrahedronGeometry args={[1, 0]} />;
      case 'dodecahedron': return <dodecahedronGeometry args={[1, 0]} />;
    }
  }, [geometry]);

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        {geo}
        <meshBasicMaterial wireframe color="var(--border)" transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

/* ─── Particles ─── */
function SubtleParticles({ count, spread }: { count: number; spread: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * spread;
      pos[i + 1] = (Math.random() - 0.5) * spread;
      pos[i + 2] = (Math.random() - 0.5) * spread * 0.5 - 3;
    }
    return pos;
  }, [count, spread]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="var(--accent)" transparent opacity={0.25} sizeAttenuation />
    </points>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE SCENE — Simple wireframes + particles for inner pages
   ═══════════════════════════════════════════════════════════════ */
export default function PageScene3D({ variant = 'about' }: { variant?: string }) {
  const configs: Record<string, Array<{pos:[number,number,number];g:string;s:number;sp:number}>> = {
    about: [
      { pos: [-4, 2, -3], g: 'dodecahedron', s: 0.9, sp: 0.3 },
      { pos: [4, -1, -4], g: 'icosahedron', s: 0.7, sp: 0.35 },
      { pos: [-2, -2, -3], g: 'tetrahedron', s: 0.6, sp: 0.4 },
      { pos: [3, 3, -5], g: 'octahedron', s: 0.5, sp: 0.25 },
    ],
    work: [
      { pos: [-3, 2.5, -3], g: 'torus', s: 0.8, sp: 0.35 },
      { pos: [4, -1, -4], g: 'dodecahedron', s: 0.7, sp: 0.3 },
      { pos: [-4, -2, -5], g: 'icosahedron', s: 0.6, sp: 0.4 },
      { pos: [2, 3, -4], g: 'tetrahedron', s: 0.5, sp: 0.25 },
    ],
    contact: [
      { pos: [-4, 1, -3], g: 'icosahedron', s: 0.8, sp: 0.3 },
      { pos: [3, 2, -4], g: 'octahedron', s: 0.6, sp: 0.35 },
      { pos: [-2, -2, -5], g: 'torus', s: 0.7, sp: 0.25 },
    ],
  };

  const shapes = configs[variant] || configs.about;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />

        {shapes.map((shape, i) => (
          <WireframeShape key={i} position={shape.pos} geometry={shape.g as any} speed={shape.sp} scale={shape.s} />
        ))}

        <SubtleParticles count={50} spread={12} />
      </Canvas>
    </div>
  );
}
