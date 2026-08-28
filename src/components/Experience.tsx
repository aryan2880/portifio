'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    date: 'July 2025 — October 2025',
    role: 'Software Intern',
    company: 'N D Savla & Associates',
    description:
      'Developed responsive websites and web applications using React, Next.js, Python, and PHP. Worked with MongoDB, SQL, Docker, HTML, and CSS for full-stack development. Built and customized websites using WordPress and Shopify, and implemented SEO, Google Business setup, and website optimization.',
  },
  {
    date: 'Aug 2024 — Jul 2026',
    role: 'Web Developer Intern',
    company: 'jupiterwave technologies',
    description:
      'Worked on frontend and backend development for real-time projects using React.js, Next.js, JavaScript, WordPress, and MongoDB. Built solutions with REST APIs, Git, HTML5, and CSS3 while contributing to end-to-end delivery of web products.',
  },
  {
    date: 'May 2025 — Aug 2026',
    role: 'Web Developer Intern',
    company: 'Shivam Infotech',
    description:
      'Developed responsive and user-friendly web applications using HTML, CSS, JavaScript, and Tailwind CSS. Contributed to development, testing, optimization, deployment, and maintenance while implementing SEO and Google Business setup strategies.',
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
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
            Career
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Work Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            position: 'relative',
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 20,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'var(--border)',
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                paddingLeft: 56,
                position: 'relative',
                marginBottom: i < experiences.length - 1 ? '3rem' : 0,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 12,
                  top: 6,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  border: '3px solid var(--accent)',
                }}
              />

              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  fontFamily: 'JetBrains Mono, monospace',
                  marginBottom: '0.5rem',
                }}
              >
                {exp.date}
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{exp.role}</h3>
              <h4
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.75rem',
                }}
              >
                {exp.company}
              </h4>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
