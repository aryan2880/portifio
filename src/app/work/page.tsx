'use client';

import { motion } from 'framer-motion';

/* ─── Technical Projects ─── */
const techProjects = [
  {
    id: '01',
    title: 'Real-Time Object Detection System',
    category: 'AI / Computer Vision',
    year: '2025',
    description:
      'A real-time object detection application using YOLO, OpenCV, and Streamlit with bounding boxes, confidence scores, FPS tracking, alerts, recording, and downloadable reports.',
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
    description:
      'A responsive home-service booking platform with service categories, business profiles, booking slots, and OAuth-based authentication.',
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
    description:
      'A full-stack ride-hailing application with rider and captain registration, ride booking, fare comparison, trip management, and real-time tracking.',
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
    description:
      'A three-tier grocery management platform with product, UOM, and customer order management, REST APIs, and analytics dashboards.',
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

/* ─── Live Websites ─── */
const liveSites = [
  {
    id: '01',
    title: 'N D Savla & Associates',
    url: 'https://www.ndsavla.com/',
    description: 'Professional business website with service listings, client testimonials, and contact integration.',
    tech: ['WordPress', 'HTML', 'CSS', 'SEO'],
    color: 'var(--accent)',
  },
  {
    id: '02',
    title: 'N D Savla & Associates (Alt)',
    url: 'https://www.ndsavlaa.com/',
    description: 'Alternative version with updated design and content.',
    tech: ['WordPress', 'PHP', 'SEO'],
    color: 'var(--green)',
  },
  {
    id: '03',
    title: 'Cardiff Services',
    url: 'https://cardiffservices.com/',
    description: 'Home service marketplace with booking system and business profiles.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'GraphQL'],
    color: 'var(--blue)',
  },
  {
    id: '04',
    title: 'The Apple Store',
    url: 'https://www.theapplestore.in/',
    description: 'E-commerce product showcase for Apple accessories and services.',
    tech: ['WordPress', 'WooCommerce', 'SEO'],
    color: 'var(--accent)',
  },
  {
    id: '05',
    title: 'Bruce Dragon',
    url: 'https://brucedragon.com/',
    description: 'Creative portfolio and business website with modern UI.',
    tech: ['WordPress', 'HTML5', 'CSS3', 'JavaScript'],
    color: 'var(--green)',
  },
  {
    id: '06',
    title: 'Casela Advisors',
    url: 'https://caselaadvisors.com/',
    description: 'Financial advisory firm website with service pages and consultation forms.',
    tech: ['WordPress', 'PHP', 'SEO', 'Google Setup'],
    color: 'var(--blue)',
  },
  {
    id: '07',
    title: 'The Classic Partners',
    url: 'https://theclassicpartners.com/',
    description: 'Corporate consultancy website with professional design and lead generation.',
    tech: ['WordPress', 'HTML', 'CSS', 'SEO'],
    color: 'var(--accent)',
  },
  {
    id: '08',
    title: 'Jupiterwave Technologies',
    url: 'https://jupiterwavetech.com/',
    description: 'Tech company website with services, project showcases, and career page.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    color: 'var(--green)',
  },
  {
    id: '09',
    title: 'Adija Tours',
    url: 'https://adijatours.com/',
    description: 'Travel agency website with tour packages, booking, and destination galleries.',
    tech: ['WordPress', 'PHP', 'MySQL', 'SEO'],
    color: 'var(--blue)',
  },
  {
    id: '10',
    title: 'Goldenrod Kangaroo',
    url: 'https://goldenrod-kangaroo-146551.hostingersite.com/',
    description: 'Hostinger-hosted project site with responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Hostinger'],
    color: 'var(--accent)',
  },
  {
    id: '11',
    title: 'NovaCruitix',
    url: 'https://novacruitix.com/',
    description: 'Recruitment platform with job listings and application tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    color: 'var(--green)',
  },
  {
    id: '12',
    title: 'GLC International',
    url: 'https://glcintl.com/',
    description: 'International business website with multi-service pages.',
    tech: ['WordPress', 'PHP', 'SEO', 'Google Setup'],
    color: 'var(--blue)',
  },
  {
    id: '13',
    title: 'Nawab Saab',
    url: 'https://nawabsaab.ca/',
    description: 'Canadian restaurant website with menu, reservation, and location map.',
    tech: ['WordPress', 'HTML', 'CSS', 'SEO'],
    color: 'var(--accent)',
  },
  {
    id: '14',
    title: 'Aditya Homoeopathic Clinic',
    url: 'https://adityahomoeopathicclinic.com/',
    description: 'Healthcare clinic website with doctor profiles and appointment booking.',
    tech: ['WordPress', 'PHP', 'SEO', 'Google Business'],
    color: 'var(--green)',
  },
];

/* ─── Mock Browser Card ─── */
function MockBrowser({ site, large }: { site: (typeof liveSites)[0]; large?: boolean }) {
  return (
    <div
      className="mock-browser-wrap"
      style={{
        height: large ? 320 : 180,
        background: `linear-gradient(135deg, ${site.color}15, ${site.color}08)`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: large ? '92%' : '88%',
          background: 'var(--card)',
          border: '1px solid var(--border-light)',
          borderRadius: large ? 8 : 6,
          overflow: 'hidden',
          boxShadow: large ? '0 20px 60px rgba(0,0,0,0.1)' : '0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        {/* Browser bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: large ? 6 : 4,
            padding: large ? '0.6rem 1rem' : '0.4rem 0.8rem',
            borderBottom: '1px solid var(--border-light)',
            background: 'var(--bg-alt)',
          }}
        >
          <div style={{ width: large ? 8 : 6, height: large ? 8 : 6, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: large ? 8 : 6, height: large ? 8 : 6, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: large ? 8 : 6, height: large ? 8 : 6, borderRadius: '50%', background: '#28c840' }} />
          <div
            className="mock-url-bar"
            style={{
              flex: 1,
              marginLeft: large ? 8 : 6,
              padding: large ? '0.2rem 0.6rem' : '0.15rem 0.4rem',
              background: 'var(--bg)',
              border: '1px solid var(--border-light)',
              borderRadius: 4,
              fontSize: large ? '0.7rem' : '0.6rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {site.url.replace('https://', '')}
          </div>
        </div>
        {/* Content mock */}
        <div style={{ padding: large ? '2rem' : '1rem', display: 'flex', flexDirection: 'column', gap: large ? 10 : 5 }}>
          <div style={{ display: 'flex', gap: large ? 10 : 6, marginBottom: large ? 6 : 4 }}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} style={{ width: large ? 70 : 45, height: large ? 18 : 10, background: 'var(--border-light)', borderRadius: 3 }} />
            ))}
          </div>
          <div style={{ width: '55%', height: large ? 24 : 12, background: 'var(--border-light)', borderRadius: 3 }} />
          <div style={{ width: '75%', height: large ? 12 : 6, background: 'var(--border-light)', borderRadius: 2, opacity: 0.5 }} />
          <div style={{ width: '65%', height: large ? 12 : 6, background: 'var(--border-light)', borderRadius: 2, opacity: 0.5 }} />
          <div style={{ display: 'flex', gap: large ? 14 : 8, marginTop: large ? 6 : 2 }}>
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="mock-img-placeholder"
                style={{
                  width: large ? 100 : 55,
                  height: large ? 65 : 35,
                  background: 'var(--border-light)',
                  borderRadius: large ? 5 : 3,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* LIVE badge */}
      <div
        className="live-badge"
        style={{
          position: 'absolute',
          top: large ? 16 : 8,
          right: large ? 16 : 8,
          padding: large ? '0.3rem 0.7rem' : '0.2rem 0.45rem',
          background: '#22c55e',
          color: '#fff',
          fontFamily: 'var(--font-mono)',
          fontSize: large ? '0.7rem' : '0.55rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        LIVE
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      {/* ════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════ */}
      <section style={{ borderBottom: '2px solid var(--border)', padding: '5rem 0 4rem' }} className="work-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
              02 — What I&apos;ve Built
            </div>
            <h1 className="heading-xl" style={{ marginBottom: '2rem' }}>
              Selected
              <br />
              <span style={{ color: 'var(--accent)' }}>Work</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: 560 }}>
              From AI-powered computer vision to full-stack marketplaces to
              14+ live production websites. Each project solved a real problem
              for real users.
            </p>

            {/* Stats strip */}
            <div className="work-stats-strip">
              {[
                { value: '4', label: 'Technical Projects' },
                { value: '14+', label: 'Live Websites' },
                { value: '3', label: 'Industries Served' },
                { value: '100%', label: 'Delivery Rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="heading-lg" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                  <div className="mono" style={{ color: 'var(--text-muted)', marginTop: '0.25rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TECHNICAL PROJECTS
          ════════════════════════════════════════════════════════ */}
      <section style={{ borderBottom: '2px solid var(--border)' }}>
        {/* Section header */}
        <div style={{ borderBottom: '2px solid var(--border)' }}>
          <div className="container work-section-header">
            <span className="work-section-title">
              Technical Projects
            </span>
            <span
              className="mono work-section-count"
            >
              {techProjects.length} featured
            </span>
          </div>
        </div>

        {/* Project blocks */}
        {techProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="project-block"
            style={{
              borderBottom: i < techProjects.length - 1 ? '1px solid var(--border-light)' : '2px solid var(--border)',
              padding: '3.5rem 0',
            }}
          >
            <div className="container">
              {/* Header row */}
              <div className="project-header">
                <span
                  className="mono project-id"
                  style={{ color: project.color }}
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

              {/* Description + details */}
              <div className="project-body">
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  {project.description}
                </p>
                <div>
                  <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Key Features
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {project.details.map((d) => (
                      <li
                        key={d}
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          paddingLeft: '1rem',
                          borderLeft: `2px solid ${project.color}`,
                        }}
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech tags */}
              <div className="project-tags">
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ════════════════════════════════════════════════════════
          DIVIDER / BAND
          ════════════════════════════════════════════════════════ */}
      <div className="work-marquee-wrap">
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 15s linear infinite' }}>
          {Array(6).fill(null).map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                paddingRight: '2rem',
                color: 'var(--border-light)',
              }}
            >
              React &bull; Next.js &bull; Python &bull; Node.js &bull; MongoDB &bull; WordPress &bull; Docker &bull; SEO &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          LIVE WEBSITES
          ════════════════════════════════════════════════════════ */}
      <section style={{ borderBottom: '2px solid var(--border)' }}>
        {/* Section header */}
        <div style={{ borderBottom: '2px solid var(--border)' }}>
          <div className="container work-section-header">
            <span className="work-section-title">
              Live Websites
            </span>
            <span
              className="mono work-section-count"
            >
              {liveSites.length} deployed
            </span>
          </div>
        </div>

        {/* Featured large card */}
        <div className="container work-featured-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="featured-card"
          >
            <MockBrowser site={liveSites[0]} large />
            <div style={{ padding: '2rem' }} className="featured-card-body">
              <div className="featured-card-inner">
                <div>
                  <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    FEATURED
                  </div>
                  <h3 className="heading-lg" style={{ marginBottom: '0.75rem' }}>
                    {liveSites[0].title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 500 }}>
                    {liveSites[0].description}
                  </p>
                </div>
                <a
                  href={liveSites[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="work-cta-btn"
                >
                  Visit Site &rarr;
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                {liveSites[0].tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="portfolio-grid">
            {liveSites.slice(1).map((site, i) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="site-card"
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
              >
                <MockBrowser site={site} />
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem', fontSize: '0.7rem' }}>
                    {site.id}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
                    {site.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '0.75rem', flex: 1, fontSize: '0.85rem' }}>
                    {site.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    {site.tech.map((t) => (
                      <span key={t} className="tag" style={{ fontSize: '0.6rem', padding: '0.15rem 0.4rem' }}>{t}</span>
                    ))}
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-raw"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontWeight: 600,
                      color: 'var(--accent)',
                    }}
                  >
                    Visit Live Site &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════════════════ */}
      <section className="work-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
              Interested in working together?
            </div>
            <h2 className="heading-xl" style={{ marginBottom: '2rem' }}>
              Let&apos;s Build
              <br />
              <span style={{ color: 'var(--accent)' }}>Something.</span>
            </h2>
            <a
              href="/contact"
              className="work-cta-btn"
              style={{ fontSize: '0.9rem', padding: '1rem 3rem' }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .work-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 2rem;
          border: 2px solid var(--border);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 600;
          background: var(--border);
          color: var(--bg);
          transition: all 0.2s ease;
          flex-shrink: 0;
          cursor: pointer;
          text-decoration: none;
        }
        .work-cta-btn:hover {
          background: var(--accent);
          border-color: var(--accent);
        }
        .featured-card {
          border: 2px solid var(--border);
          margin-bottom: 2.5rem;
          transition: transform 0.2s ease;
        }
        .featured-card:hover {
          transform: translateY(-2px);
        }

        /* ── Section headers ── */
        .work-section-header {
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .work-section-title {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.03em;
        }
        .work-section-count {
          color: var(--text-muted);
          border-left: 2px solid var(--border);
          padding-left: 1rem;
        }

        /* ── Stats strip ── */
        .work-stats-strip {
          display: flex;
          gap: 4rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-light);
          flex-wrap: wrap;
        }

        /* ── Project header ── */
        .project-header {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 2rem;
          align-items: start;
          margin-bottom: 2.5rem;
        }
        .project-id {
          font-size: 2rem;
          font-weight: 700;
        }

        /* ── Project body ── */
        .project-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          padding-left: 80px;
        }

        /* ── Project tags ── */
        .project-tags {
          padding-left: 80px;
          margin-top: 2rem;
        }

        /* ── Marquee ── */
        .work-marquee-wrap {
          border-bottom: 2px solid var(--border);
          padding: 1.5rem 0;
          overflow: hidden;
        }

        /* ── Featured card body ── */
        .featured-card-body {
          padding: 2rem;
        }
        .featured-card-inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* ── Portfolio grid ── */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
        }
        .site-card {
          border: 2px solid var(--border);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        /* ── CTA section ── */
        .work-cta-section {
          padding: 6rem 0;
        }

        /* ══════════════════════════════════════════════════
           TABLET (768px)
           ══════════════════════════════════════════════════ */
        @media (max-width: 768px) {
          .work-hero {
            padding: 3rem 0 2.5rem !important;
          }
          .work-section-header {
            padding: 1.5rem 0;
          }
          .work-section-header .container {
            padding: 0 1rem;
          }
          .work-stats-strip {
            gap: 1.5rem;
          }
          .project-block {
            padding: 2rem 0 !important;
          }
          .project-header {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
            margin-bottom: 1.5rem !important;
          }
          .project-id {
            font-size: 1.4rem !important;
          }
          .project-body {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding-left: 0 !important;
          }
          .project-tags {
            padding-left: 0 !important;
          }
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
          .work-featured-wrap {
            padding: 2rem 0;
          }
          .featured-card-body {
            padding: 1.25rem !important;
          }
          .featured-card-inner {
            flex-direction: column !important;
          }
          .work-cta-section {
            padding: 3rem 0 !important;
          }
          .work-marquee-wrap {
            padding: 1rem 0;
          }
        }

        /* ══════════════════════════════════════════════════
           MOBILE (480px)
           ══════════════════════════════════════════════════ */
        @media (max-width: 480px) {
          .work-hero {
            padding: 2rem 0 2rem !important;
          }
          .work-stats-strip {
            gap: 1rem;
          }
          .project-block {
            padding: 1.5rem 0 !important;
          }
          .mock-browser-wrap {
            height: 140px !important;
          }
          .live-badge {
            top: 4px !important;
            right: 4px !important;
            padding: 0.15rem 0.35rem !important;
            font-size: 0.5rem !important;
          }
          .mock-url-bar {
            font-size: 0.5rem !important;
            padding: 0.1rem 0.3rem !important;
          }
          .mock-img-placeholder {
            width: 40px !important;
            height: 25px !important;
          }
          .featured-card-body {
            padding: 1rem !important;
          }
          .work-cta-section {
            padding: 2.5rem 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
