'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'Real-Time Object Detection System',
    category: 'AI / Computer Vision',
    year: '2025',
    description: 'A real-time object detection application using YOLO, OpenCV, and Streamlit with bounding boxes, confidence scores, FPS tracking, alerts, recording, and downloadable reports.',
    tech: ['Python', 'YOLO', 'OpenCV', 'Streamlit', 'SQLite'],
    color: 'var(--accent)',
    details: [
      'Image/webcam detection with bounding boxes and confidence scores',
      'Real-time alerts, webcam recording, MP4 video export',
      'SQLite integration for detection history and analytics',
      'PDF/JSON report generation',
    ],
  },
  {
    id: '02',
    title: 'Doorstep Service',
    category: 'Full-Stack / Marketplace',
    year: '2025',
    description: 'A responsive home-service booking platform with service categories, business profiles, booking slots, and OAuth-based authentication.',
    tech: ['Next.js', 'Hygraph', 'Tailwind CSS', 'GraphQL', 'NextAuth'],
    color: 'var(--green)',
    details: [
      'Service categories and business profiles',
      'Booking slots and booking history',
      'Hygraph GraphQL for data management',
      'NextAuth + Descope OAuth/OIDC authentication',
      'Responsive UI with Tailwind CSS and shadcn/ui',
    ],
  },
  {
    id: '03',
    title: 'RideConnect',
    category: 'Full-Stack / Ride-Hailing',
    year: '2025',
    description: 'A full-stack ride-hailing application with rider and captain registration, ride booking, fare comparison, trip management, and real-time tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    color: 'var(--blue)',
    details: [
      'Rider & captain registration, ride booking, fare comparison',
      'Google Maps APIs for geocoding, distance, autocomplete',
      'Real-time ride tracking with Socket.IO',
      'JWT authentication, bcrypt, ride OTP verification',
      'React, Vite, Tailwind CSS, GSAP frontend',
    ],
  },
  {
    id: '04',
    title: 'Grocery Store Management System',
    category: 'Full-Stack / Management',
    year: '2024',
    description: 'A three-tier grocery management platform with product, UOM, and customer order management, REST APIs, and analytics dashboards.',
    tech: ['Python', 'Flask', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: 'var(--accent)',
    details: [
      'Product, UOM, and customer order management',
      'REST APIs for product and order operations',
      'Automatic order total calculation',
      'Order history dashboard',
      'Responsive UI with Bootstrap and jQuery',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      {/* ─── HERO ─── */}
      <section style={{ borderBottom: '2px solid var(--border)', padding: '5rem 0 4rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
              Work
            </div>
            <h1 className="heading-xl" style={{ marginBottom: '2rem' }}>
              Selected
              <br />
              <span style={{ color: 'var(--accent)' }}>Projects</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: 500 }}>
              A collection of projects I&apos;ve built — from AI-powered computer vision
              to full-stack marketplaces. Each one solved a real problem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECT LIST ─── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container-wide">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                borderTop: i === 0 ? '2px solid var(--border)' : '1px solid var(--border-light)',
                borderBottom: '2px solid var(--border)',
                padding: '3rem 0',
              }}
              className="project-block"
            >
              {/* Header */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  gap: '2rem',
                  alignItems: 'start',
                  marginBottom: '2rem',
                }}
                className="project-header"
              >
                <span
                  className="mono"
                  style={{ color: project.color, fontSize: '2rem', fontWeight: 700 }}
                >
                  {project.id}
                </span>
                <div>
                  <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    {project.category} / {project.year}
                  </div>
                  <h2 className="heading-lg">{project.title}</h2>
                </div>
              </div>

              {/* Description + Details */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '3rem',
                  paddingLeft: '80px',
                }}
                className="project-body"
              >
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {project.description}
                </p>
                <div>
                  <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Key Features
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {project.details.map((d) => (
                      <li
                        key={d}
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          paddingLeft: '1rem',
                          borderLeft: '2px solid var(--accent)',
                        }}
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech tags */}
              <div style={{ paddingLeft: '80px', marginTop: '2rem' }} className="project-body">
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .project-header {
            grid-template-columns: 1fr !important;
          }
          .project-body {
            grid-template-columns: 1fr !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
