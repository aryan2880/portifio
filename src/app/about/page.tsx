'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const PageScene3D = dynamic(() => import('@/components/PageScene3D'), { ssr: false });

const timeline = [
  {
    period: 'Aug 2024 — Jul 2026',
    role: 'Web Developer Intern',
    company: 'Jupiterwave Technologies',
    description: 'Frontend & backend development for real-time projects using React.js, Next.js, JavaScript, WordPress, MongoDB, REST APIs, and Git.',
  },
  {
    period: 'May 2025 — Aug 2026',
    role: 'Web Developer Intern',
    company: 'Shivam Infotech',
    description: 'Responsive and user-friendly web applications using HTML, CSS, JavaScript, Tailwind CSS. Contributed to development, testing, optimization, deployment, SEO & Google Business Setup.',
  },
  {
    period: 'Jul 2025 — Oct 2025',
    role: 'Software Intern',
    company: 'N D Savla & Associates',
    description: 'Developed responsive websites and web applications using React, Next.js, Python, PHP. Worked with MongoDB, SQL, Docker, WordPress, Shopify, SEO & website optimization.',
  },
];

const education = [
  {
    period: 'Jul 2023 — Aug 2027',
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'Rajiv Gandhi Institute of Technology',
  },
  {
    period: 'Mar 2021 — Jul 2023',
    degree: 'Higher Secondary (CBSE)',
    school: 'PL Shiksha Niketan',
  },
];

const values = [
  {
    number: '01',
    title: 'Ship It',
    text: 'I focus on delivering functional, working products. Real projects, real results.',
  },
  {
    number: '02',
    title: 'Full-Stack Thinking',
    text: 'I understand both frontend polish and backend logic. Every project I build covers the full picture.',
  },
  {
    number: '03',
    title: 'SEO & Growth',
    text: 'Beyond code, I help businesses strengthen their online presence through optimization and digital strategy.',
  },
  {
    number: '04',
    title: 'Stay Learning',
    text: 'From Python to Three.js to Docker — I keep adding to my toolkit with every project and internship.',
  },
];

const certifications = [
  { name: 'Python Certificate', issuer: 'GUVI & Google for Education' },
  { name: 'Google Cloud', issuer: 'Google' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <PageScene3D variant="about" />

      {/* ─── HERO ─── */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
              About
            </div>
            <h1 className="heading-xl" style={{ marginBottom: '2rem' }}>
              Developer,
              <br />
              <span style={{ color: 'var(--accent)' }}>Problem</span>
              <br />
              Solver
            </h1>
            <p className="body-lg" style={{ maxWidth: 600 }}>
              Software Developer with 2.5+ years of hands-on experience. From responsive websites
              to AI-powered apps — I build things that work and help businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── TWO-COL BIO ─── */}
      <section style={{ borderBottom: '2px solid var(--border)' }}>
        <div className="container" style={{ padding: '4rem 2rem' }}>
          <div
            className="bio-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' , marginTop:'2rem'}}>
                Background
              </div>
              <p className="body-lg" style={{ marginBottom: '1.5rem' }}>
                I&apos;m Aryan Verma, a software developer based in Mumbai, India, with 2.5+ years of
                experience creating modern websites and web applications for businesses. My work
                blends frontend development, backend logic, and digital growth strategies.
              </p>
              <p className="body-lg">
                I&apos;m especially interested in helping brands strengthen their online presence through
                clean web architecture, responsive interfaces, and performance-focused SEO. I enjoy
                turning technical challenges into practical, scalable business solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                Fast Facts
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  ['Location', 'Mumbai, India'],
                  ['Experience', '2.5+ years'],
                  ['Focus', 'Full-Stack / SEO / WordPress'],
                  ['Education', 'BE Computer Science (ongoing)'],
                  ['Languages', 'English, Hindi'],
                  ['Phone', '+91 9304453760'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="fact-row"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBottom: '0.75rem',
                      borderBottom: '1px solid var(--border-light)',
                    }}
                  >
                    <span className="mono" style={{ color: 'var(--text-muted)' }}>{label}</span>
                    <span style={{ fontWeight: 500 }}>{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section style={{ borderBottom: '2px solid var(--border)', padding: '5rem 0' }}>
        <div className="container">
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
            Philosophy
          </div>
          <div
            className="values-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0',
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="value-card"
                style={{
                  padding: '2rem',
                  borderRight: i % 2 === 0 ? '2px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '2px solid var(--border)' : 'none',
                }}
              >
                <div
                  className="mono value-number"
                  style={{ color: 'var(--accent)' }}
                >
                  {v.number}
                </div>
                <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section style={{ borderBottom: '2px solid var(--border)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div className="mono" style={{ color: 'var(--accent)' }}>
              Experience
            </div>
            <div style={{ flex: 1, height: 1, background: 'var(--border-light)' }} />
            <div className="mono" style={{ color: 'var(--text-muted)' }}>
              {timeline.length} roles
            </div>
          </div>

          <div className="exp-timeline">
            {/* Vertical line */}
            <div className="exp-timeline-line" />

            {timeline.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="exp-card"
              >
                {/* Dot on timeline */}
                <div className="exp-dot" />

                {/* Period badge */}
                <div className="exp-card-period">
                  {exp.period}
                </div>

                {/* Card content */}
                <div className="exp-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <h3 className="heading-md" style={{ marginBottom: '0.3rem' }}>{exp.role}</h3>
                      <div className="mono" style={{ color: 'var(--accent)' }}>
                        {exp.company}
                      </div>
                    </div>
                    <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '1rem', fontSize: '0.95rem' }}>
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section style={{ borderTop: '2px solid var(--border)', borderBottom: '2px solid var(--border)', padding: '4rem 0' }}>
        <div className="container">
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
            Education
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }} className="edu-grid">
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className="edu-card"
                style={{
                  padding: '1.5rem 2rem',
                  borderRight: i === 0 ? '2px solid var(--border)' : 'none',
                }}
              >
                <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{edu.period}</div>
                <h3 className="heading-md" style={{ marginBottom: '0.25rem' }}>{edu.degree}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section style={{ borderBottom: '2px solid var(--border)', padding: '4rem 0' }}>
        <div className="container">
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
            Certifications
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="cert-row"
                style={{
                  padding: '1rem 0',
                  borderBottom: i < certifications.length - 1 ? '1px solid var(--border-light)' : '2px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontWeight: 600 }}>{cert.name}</span>
                <span className="mono" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile overrides for about page are in globals.css */}
    </div>
  );
}
