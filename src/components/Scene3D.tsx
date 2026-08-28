'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

function WireframeShape({ position, geometry, speed, scale = 1 }: {
  position: [number, number, number];
  geometry: 'icosahedron' | 'octahedron' | 'torus' | 'tetrahedron';
  speed: number;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

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
    }
  }, [geometry]);

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        {geo}
        <meshBasicMaterial
          wireframe
          color="var(--border)"
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

function SubtleParticles() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 15;
      pos[i + 1] = (Math.random() - 0.5) * 15;
      pos[i + 2] = (Math.random() - 0.5) * 8 - 3;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

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
      <pointsMaterial
        size={0.03}
        color="var(--accent)"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />

        {/* Wireframe shapes - subtle, not flashy */}
        <WireframeShape position={[-4, 2.5, -3]} geometry="icosahedron" speed={0.4} scale={1.2} />
        <WireframeShape position={[4, -1.5, -4]} geometry="torus" speed={0.3} scale={1} />
        <WireframeShape position={[2, 3, -5]} geometry="octahedron" speed={0.35} scale={0.8} />
        <WireframeShape position={[-3, -2, -3]} geometry="tetrahedron" speed={0.45} scale={0.9} />
        <WireframeShape position={[5, 1, -6]} geometry="icosahedron" speed={0.25} scale={0.7} />

        <SubtleParticles />
      </Canvas>
    </div>
  );
}
