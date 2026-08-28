'use client';

import { motion } from 'framer-motion';

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
      {/* ─── HERO ─── */}
      <section style={{ borderBottom: '2px solid var(--border)', padding: '5rem 0 4rem' }}>
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
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
            }}
            className="bio-grid"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
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
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0',
            }}
            className="values-grid"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  padding: '2rem',
                  borderRight: i % 2 === 0 ? '2px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '2px solid var(--border)' : 'none',
                }}
              >
                <div
                  className="mono"
                  style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.5rem' }}
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
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
            Experience
          </div>
          <div>
            {timeline.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  borderTop: i === 0 ? '2px solid var(--border)' : '1px solid var(--border-light)',
                  borderBottom: '2px solid var(--border)',
                  padding: '2rem 0',
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr 1fr',
                  gap: '2rem',
                  alignItems: 'start',
                }}
                className="exp-row"
              >
                <div className="mono" style={{ color: 'var(--text-muted)', paddingTop: '0.3rem' }}>
                  {exp.period}
                </div>
                <div>
                  <h3 className="heading-md">{exp.role}</h3>
                  <div className="mono" style={{ color: 'var(--accent)', marginTop: '0.25rem' }}>
                    {exp.company}
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{exp.description}</p>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
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

      <style jsx>{`
        @media (max-width: 768px) {
          .bio-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
          }
          .values-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light) !important;
          }
          .exp-row {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
          .edu-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light) !important;
          }
        }
      `}</style>
    </div>
  );
}
