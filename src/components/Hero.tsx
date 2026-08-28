'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const titles = [
  'Software Developer',
  'Full-Stack Web Developer',
  'React.js & Next.js Specialist',
  'SEO & Web Optimization Expert',
  'Problem Solver',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= current.length) {
      setDisplayedText(current.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      setDisplayedText(current.substring(0, charIndex - 1));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      timeout = setTimeout(() => {}, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 700 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: 999,
              background: 'var(--accent-glow)',
              border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'var(--accent)',
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#22c55e',
                animation: 'pulse-glow 2s infinite',
              }}
            />
            Available for hire
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Aryan Verma</span>
            <br />
            {displayedText}
            <span className="cursor">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              maxWidth: 620,
              marginBottom: '2rem',
            }}
          >
            Software Developer with 2.5+ years of hands-on experience building responsive,
            modern, and result-driven websites and web applications. I focus on creating
            scalable digital experiences that blend performance, SEO, and user-friendly design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.75rem',
                borderRadius: 12,
                fontSize: '0.95rem',
                fontWeight: 600,
                background: 'var(--gradient)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(108, 99, 255, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(108, 99, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(108, 99, 255, 0.3)';
              }}
            >
              View My Work →
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.75rem',
                borderRadius: 12,
                fontSize: '0.95rem',
                fontWeight: 600,
                background: 'var(--surface)',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.background = 'var(--accent-glow)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--surface)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
