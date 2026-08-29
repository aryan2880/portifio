'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

/* ═══════════════════════════════════════════════════════════════
   ThemeTransition
   — When the theme toggles, a wave of particles sweeps across
     the screen to visually bridge light ↔ dark.
   ═══════════════════════════════════════════════════════════════ */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export default function ThemeTransition() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const prevTheme = useRef(theme);
  const particles = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    if (prevTheme.current !== theme) {
      prevTheme.current = theme;
      spawnBurst();
    }
  }, [theme]);

  const spawnBurst = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = window.innerWidth;
    const h = window.innerHeight;

    const isDark = theme === 'dark';
    const colors = isDark
      ? ['#ff4d5a', '#4da6ff', '#50fa7b', '#ffbd2e']
      : ['#e63946', '#1d3557', '#2d6a4f', '#ff8a5c'];

    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 2;
      particles.current.push({
        x: w / 2 + (Math.random() - 0.5) * 200,
        y: h / 2 + (Math.random() - 0.5) * 200,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Sweep wave
    for (let i = 0; i < 30; i++) {
      particles.current.push({
        x: Math.random() * w,
        y: -10,
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * 6 + 3,
        life: 1,
        maxLife: 1.2,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    if (!animRef.current) animate();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current = particles.current.filter((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.life -= 0.02;

      if (p.life <= 0) return false;

      ctx.save();
      ctx.globalAlpha = p.life * 0.6;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 15;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      return true;
    });

    if (particles.current.length > 0) {
      animRef.current = requestAnimationFrame(animate);
    } else {
      animRef.current = 0;
    }
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}
