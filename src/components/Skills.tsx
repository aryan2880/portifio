'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    icon: '🎨',
    title: 'Frontend Development',
    description: 'Building responsive, engaging, and performant interfaces with React.js, Next.js, and modern UI patterns.',
    tags: ['React.js', 'Next.js', 'Three.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: '⚙️',
    title: 'Backend & APIs',
    description: 'Designing and integrating backend systems with secure APIs, logic, and database connectivity.',
    tags: ['Node.js', 'Express.js', 'Python', 'PHP', 'REST APIs'],
  },
  {
    icon: '🗄️',
    title: 'Databases & Tools',
    description: 'Working with data-driven applications, optimization, and collaborative workflows across modern tools.',
    tags: ['MongoDB', 'MySQL', 'SQL', 'Docker', 'Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    icon: '📈',
    title: 'SEO & Website Growth',
    description: 'Improving business visibility with Google Business Profile setup, optimization, indexing, and site structure improvements.',
    tags: ['SEO', 'Google Business Setup', 'Indexing', 'Sitemap', 'WordPress', 'Shopify'],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 0' }}>
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
            What I Do
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Skills &amp; Expertise
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={item}
              whileHover={{
                y: -4,
                borderColor: 'var(--accent)',
              }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: '2rem',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: 'var(--gradient)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                className="skill-top-line"
              />
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  background: 'var(--accent-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                {skill.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.25rem',
                }}
              >
                {skill.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: 999,
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <style jsx>{`
                div:hover .skill-top-line {
                  opacity: 1 !important;
                }
              `}</style>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
