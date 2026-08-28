'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ target, suffix = '+' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 40);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { number: 2, label: 'Years+ Experience' },
  { number: 12, label: 'Projects Built' },
  { number: 15, label: 'Websites Delivered' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem',
              }}
            >
              About Me
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Building responsive,
              <br />
              SEO-friendly digital experiences
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginTop: '1.5rem',
                fontSize: '1.05rem',
              }}
            >
              I&apos;m Aryan Verma, a software developer based in Mumbai, India, with 2.5+
              years of experience creating modern websites and web applications for businesses.
              My work blends frontend development, backend logic, and digital growth strategies.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginTop: '1.25rem',
                fontSize: '1.05rem',
              }}
            >
              I&apos;m especially interested in helping brands strengthen their online presence
              through clean web architecture, responsive interfaces, and performance-focused SEO.
              I enjoy turning technical challenges into practical, scalable business solutions.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                marginTop: '2rem',
              }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -2, borderColor: 'var(--accent)' }}
                  style={{
                    textAlign: 'center',
                    padding: '1.25rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      background: 'var(--gradient)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    <AnimatedCounter target={stat.number} />
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.25rem',
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              order: -1,
            }}
            className="about-image"
          >
            <div
              style={{
                position: 'relative',
                width: 300,
                height: 300,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                  border: '1px dashed var(--accent)',
                  opacity: 0.3,
                  animation: 'spin 30s linear infinite',
                }}
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'var(--gradient)',
                  padding: 4,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '6rem',
                  }}
                >
                  👨‍💻
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .about-image {
            order: -1 !important;
          }
        }
      `}</style>
    </section>
  );
}
