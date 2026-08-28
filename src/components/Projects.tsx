'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    icon: '🎯',
    title: 'Real-Time Object Detection System',
    description:
      'Developed a real-time object detection application using YOLO, OpenCV, and Streamlit with bounding boxes, confidence scores, FPS tracking, alerts, recording, and downloadable reports.',
    tech: ['Python', 'YOLO', 'OpenCV', 'Streamlit', 'SQLite'],
    demo: '#',
    source: '#',
  },
  {
    icon: '🏠',
    title: 'Doorstep Service',
    description:
      'Built a responsive home-service marketplace using Next.js and React with service categories, business profiles, booking slots, booking history, and OAuth-based authentication.',
    tech: ['Next.js', 'React', 'Hygraph', 'GraphQL', 'NextAuth'],
    demo: '#',
    source: '#',
  },
  {
    icon: '🛒',
    title: 'Grocery Store Management System (GSMS)',
    description:
      'Created a three-tier grocery management platform using Flask and MySQL with product, UOM, and customer order management, REST APIs, automatic totals, and analytics dashboards.',
    tech: ['Python', 'Flask', 'MySQL', 'Bootstrap', 'JavaScript'],
    demo: '#',
    source: '#',
  },
  {
    icon: '🚕',
    title: 'RideConnect',
    description:
      'Built a full-stack ride-hailing app with rider and captain registration, ride booking, fare comparison, trip management, JWT security, map integrations, and real-time tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    demo: '#',
    source: '#',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
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
            Portfolio
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -4, borderColor: 'var(--accent)' }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  height: 200,
                  background: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  position: 'relative',
                }}
              >
                {project.icon}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, var(--bg-card))',
                  }}
                />
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: 6,
                        background: 'var(--accent-glow)',
                        color: 'var(--accent)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href={project.demo}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.source}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    📂 Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
