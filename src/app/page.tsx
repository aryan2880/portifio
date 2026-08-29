'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

const recentProjects = [
  {
    id: '01',
    title: 'Real-Time Object Detection',
    category: 'AI / Computer Vision',
    description: 'YOLO-powered object detection with bounding boxes, alerts, and analytics.',
    tech: ['Python', 'YOLO', 'OpenCV', 'SQLite'],
    year: '2025',
  },
  {
    id: '02',
    title: 'Doorstep Service',
    category: 'Full-Stack / Marketplace',
    description: 'Home-service booking platform with Hygraph CMS and OAuth auth.',
    tech: ['Next.js', 'Hygraph', 'GraphQL', 'Tailwind'],
    year: '2025',
  },
  {
    id: '03',
    title: 'RideConnect',
    category: 'Full-Stack / Ride-Hailing',
    description: 'Full-stack ride-hailing app with Google Maps, Socket.IO, and JWT.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    year: '2025',
  },
];

export default function Home() {
  return (
    <>
      <Scene3D />

      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="mono"
              style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}
            >
              01 &mdash; Hello, I&apos;m
            </div>

            <h1 className="heading-xl" style={{ marginBottom: '2rem' }}>
              Aryan
              <br />
              <span style={{ color: 'var(--accent)' }}>Verma</span>
            </h1>

            <p
              className="body-lg"
              style={{ maxWidth: 520, marginBottom: '3rem' }}
            >
              Software Developer with 2.5+ years of hands-on experience building
              responsive, modern, and result-driven websites and web applications.
              Based in Mumbai, India.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/work" className="btn-primary">
                View Work
              </Link>
              <Link href="/contact/" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div style={{ width: 40, height: 2, background: 'var(--border)' }} />
          <span className="mono" style={{ color: 'var(--text-muted)' }}>
            Scroll
          </span>
        </div>
      </section>

      {/* ─── ABOUT STRIP ─── */}
      <section style={{ borderTop: '2px solid var(--border)', borderBottom: '2px solid var(--border)', padding: '4rem 0' }}>
        <div className="container" style={{ padding: '4rem 2rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="about-strip-grid"
          >
            <div>
              <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                02 &mdash; About
              </div>
              <h2 className="heading-md">
                Developer based in<br />
                Mumbai, India
              </h2>
            </div>
            <div>
              <p className="body-lg" style={{ marginBottom: '1.5rem' }}>
                Currently pursuing BE in Computer Science at Rajiv Gandhi Institute of Technology.
                I blend frontend development, backend logic, and digital growth strategies to
                build functional, scalable, and user-friendly digital solutions.
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <div className="heading-lg" style={{ color: 'var(--accent)' }}>2.5+</div>
                  <div className="mono" style={{ color: 'var(--text-muted)' }}>Years exp</div>
                </div>
                <div>
                  <div className="heading-lg" style={{ color: 'var(--accent)' }}>20+</div>
                  <div className="mono" style={{ color: 'var(--text-muted)' }}>Websites live</div>
                </div>
                <div>
                  <div className="heading-lg" style={{ color: 'var(--accent)' }}>4</div>
                  <div className="mono" style={{ color: 'var(--text-muted)' }}>Internships</div>
                </div>
              </div>
              <Link
                href="/about"
                className="link-raw"
                style={{
                  display: 'inline-block',
                  marginTop: '2rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--accent)',
                }}
              >
                Read more about me &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED WORK ─── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '3rem',
            }}
          >
            <div>
              <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                03 &mdash; Selected Work
              </div>
              <h2 className="heading-lg">Recent Projects</h2>
            </div>              <Link
              href="/work"
              className="link-raw project-all-link"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--accent)',
              }}
            >
              View all &rarr;
            </Link>
          </div>

          {/* Project list */}
          <div>
            {recentProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  borderTop: i === 0 ? '2px solid var(--border)' : '1px solid var(--border-light)',
                  borderBottom: '2px solid var(--border)',
                  padding: '2rem 0',
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr auto',
                  gap: '2rem',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
                whileHover={{
                  backgroundColor: 'var(--card-hover)',
                  paddingLeft: '1rem',
                }}
                className="project-row"
              >
                <span className="mono" style={{ color: 'var(--text-muted)' }}>
                  {project.id}
                </span>
                <div>
                  <h3 className="heading-md" style={{ marginBottom: '0.25rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {project.description}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }} className="project-tags-desktop">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS STRIP ─── */}
      <section style={{ borderTop: '2px solid var(--border)', borderBottom: '2px solid var(--border)', padding: '4rem 0' }}>
        <div className="container">
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
            04 &mdash; Capabilities
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              { label: 'Frontend', items: 'React.js / Next.js / Three.js / Tailwind CSS' },
              { label: 'Backend', items: 'Node.js / Express.js / Python / Flask' },
              { label: 'Databases', items: 'MySQL / MongoDB / SQLite / GraphQL' },
              { label: 'Other', items: 'WordPress / Shopify / SEO / Google Setup / Docker' },
            ].map((skill) => (
              <div key={skill.label}>
                <div
                  className="mono"
                  style={{
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid var(--border-light)',
                  }}
                >
                  {skill.label}
                </div>
                <p style={{ fontWeight: 500, lineHeight: 1.6 }}>{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO LINKS ─── */}
      <section style={{ borderBottom: '2px solid var(--border)', padding: '4rem 0' }}>
        <div className="container">
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
            05 &mdash; Live Websites
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0',
            }}
          >
            {[
              'ndsavlaa.com',
              'cardiffservices.com',
              'theapplestore.in',
              'caselaadvisors.com',
              'brucedragon.com',
              'jupiterwavetech.com',
              'novacruitix.com',
              
              'glcintl.com'
            ].map((site, i) => (
              <a
                key={site}
                href={`https://${site}`}
                target="_blank"
                rel="noreferrer"
                className="link-raw"
                style={{
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--border-light)',
                  fontWeight: 500,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {site}
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>&rarr;</span>
              </a>
            ))}
          </div>
          <Link
              href="/work"
              className="link-raw project-all-link"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--accent)',
                marginTop: '2rem',
              }}
            >
              View all &rarr;
            </Link>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
            06 &mdash; Let&apos;s talk
          </div>
          <h2 className="heading-xl" style={{ marginBottom: '2rem' }}>
            Got a project?
            <br />
            <span style={{ color: 'var(--accent)' }}>Let&apos;s build it.</span>
          </h2>
          <a href="/contact/" className="btn-accent">
            Contact Me
          </a>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-strip-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .project-row {
            grid-template-columns: 40px 1fr !important;
          }
          .project-tags-desktop {
            display: none !important;
          }
          .project-all-link {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
