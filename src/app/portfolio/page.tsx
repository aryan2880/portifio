'use client';

import { motion } from 'framer-motion';

const portfolioSites = [
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
    description: 'Alternative version of the N D Savla website with updated design and content.',
    tech: ['WordPress', 'PHP', 'SEO'],
    color: 'var(--green)',
  },
  {
    id: '03',
    title: 'Cardiff Services',
    url: 'https://cardiffservices.com/',
    description: 'Home service marketplace with service categories, booking system, and business profiles.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'GraphQL'],
    color: 'var(--blue)',
  },
  {
    id: '04',
    title: 'The Apple Store',
    url: 'https://www.theapplestore.in/',
    description: 'E-commerce product showcase for Apple accessories and services with responsive design.',
    tech: ['WordPress', 'WooCommerce', 'SEO'],
    color: 'var(--accent)',
  },
  {
    id: '05',
    title: 'Bruce Dragon',
    url: 'https://brucedragon.com/',
    description: 'Creative portfolio and business website with modern UI and responsive layouts.',
    tech: ['WordPress', 'HTML5', 'CSS3', 'JavaScript'],
    color: 'var(--green)',
  },
  {
    id: '06',
    title: 'Casela Advisors',
    url: 'https://caselaadvisors.com/',
    description: 'Financial advisory firm website with service pages, team section, and consultation forms.',
    tech: ['WordPress', 'PHP', 'SEO', 'Google Setup'],
    color: 'var(--blue)',
  },
  {
    id: '07',
    title: 'The Classic Partners',
    url: 'https://theclassicpartners.com/',
    description: 'Corporate consultancy website with professional design and lead generation forms.',
    tech: ['WordPress', 'HTML', 'CSS', 'SEO'],
    color: 'var(--accent)',
  },
  {
    id: '08',
    title: 'Jupiterwave Technologies',
    url: 'https://jupiterwavetech.com/',
    description: 'Tech company website with service offerings, project showcases, and career page.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    color: 'var(--green)',
  },
  {
    id: '09',
    title: 'Adija Tours',
    url: 'https://adijatours.com/',
    description: 'Travel agency website with tour packages, booking system, and destination galleries.',
    tech: ['WordPress', 'PHP', 'MySQL', 'SEO'],
    color: 'var(--blue)',
  },
  {
    id: '10',
    title: 'Goldenrod Kangaroo',
    url: 'https://goldenrod-kangaroo-146551.hostingersite.com/',
    description: 'Hostinger-hosted project site with responsive design and interactive elements.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Hostinger'],
    color: 'var(--accent)',
  },
  {
    id: '11',
    title: 'NovaCruitix',
    url: 'https://novacruitix.com/',
    description: 'Recruitment platform with job listings, candidate profiles, and application tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    color: 'var(--green)',
  },
  {
    id: '12',
    title: 'GLC International',
    url: 'https://glcintl.com/',
    description: 'International business website with multi-service pages and global reach messaging.',
    tech: ['WordPress', 'PHP', 'SEO', 'Google Setup'],
    color: 'var(--blue)',
  },
  {
    id: '13',
    title: 'Nawab Saab',
    url: 'https://nawabsaab.ca/',
    description: 'Canadian restaurant website with menu display, reservation system, and location map.',
    tech: ['WordPress', 'HTML', 'CSS', 'SEO'],
    color: 'var(--accent)',
  },
  {
    id: '14',
    title: 'Aditya Homoeopathic Clinic',
    url: 'https://adityahomoeopathicclinic.com/',
    description: 'Healthcare clinic website with doctor profiles, appointment booking, and service info.',
    tech: ['WordPress', 'PHP', 'SEO', 'Google Business'],
    color: 'var(--green)',
  },
];

export default function PortfolioPage() {
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
              Portfolio
            </div>
            <h1 className="heading-xl" style={{ marginBottom: '2rem' }}>
              Live
              <br />
              <span style={{ color: 'var(--accent)' }}>Websites</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: 600 }}>
              A collection of websites I&apos;ve built and deployed for real businesses.
              From corporate sites to e-commerce platforms to service marketplaces.
              Each one live and serving real users.
            </p>

            {/* Stats strip */}
            <div
              style={{
                display: 'flex',
                gap: '3rem',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-light)',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div className="heading-lg" style={{ color: 'var(--accent)' }}>14+</div>
                <div className="mono" style={{ color: 'var(--text-muted)' }}>Live Sites</div>
              </div>
              <div>
                <div className="heading-lg" style={{ color: 'var(--accent)' }}>100%</div>
                <div className="mono" style={{ color: 'var(--text-muted)' }}>Delivered</div>
              </div>
              <div>
                <div className="heading-lg" style={{ color: 'var(--accent)' }}>SEO</div>
                <div className="mono" style={{ color: 'var(--text-muted)' }}>Optimized</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PORTFOLIO GRID ─── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container-wide">
          {/* Featured large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              border: '2px solid var(--border)',
              marginBottom: '2rem',
            }}
          >
            {/* Image placeholder */}
            <div
              style={{
                height: 350,
                background: `linear-gradient(135deg, ${portfolioSites[0].color}15, ${portfolioSites[0].color}08)`,
                borderBottom: '2px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Mock browser UI */}
              <div
                style={{
                  width: '90%',
                  maxWidth: 900,
                  background: 'var(--card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 8,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                }}
              >
                {/* Browser bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '0.6rem 1rem',
                    borderBottom: '1px solid var(--border-light)',
                    background: 'var(--bg-alt)',
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
                  <div
                    style={{
                      flex: 1,
                      marginLeft: 8,
                      padding: '0.2rem 0.6rem',
                      background: 'var(--bg)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 4,
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {portfolioSites[0].url.replace('https://', '')}
                  </div>
                </div>
                {/* Content mock */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 80, height: 24, background: 'var(--border-light)', borderRadius: 4 }} />
                    <div style={{ width: 60, height: 24, background: 'var(--border-light)', borderRadius: 4 }} />
                    <div style={{ width: 70, height: 24, background: 'var(--border-light)', borderRadius: 4 }} />
                    <div style={{ width: 50, height: 24, background: 'var(--border-light)', borderRadius: 4 }} />
                  </div>
                  <div style={{ width: '60%', height: 32, background: 'var(--border-light)', borderRadius: 4 }} />
                  <div style={{ width: '80%', height: 16, background: 'var(--border-light)', borderRadius: 4, opacity: 0.5 }} />
                  <div style={{ width: '70%', height: 16, background: 'var(--border-light)', borderRadius: 4, opacity: 0.5 }} />
                  <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
                    <div style={{ width: 120, height: 80, background: 'var(--border-light)', borderRadius: 6 }} />
                    <div style={{ width: 120, height: 80, background: 'var(--border-light)', borderRadius: 6 }} />
                    <div style={{ width: 120, height: 80, background: 'var(--border-light)', borderRadius: 6 }} />
                  </div>
                </div>
              </div>

              {/* LIVE badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  padding: '0.3rem 0.8rem',
                  background: '#22c55e',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                LIVE
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    {portfolioSites[0].id} / FEATURED
                  </div>
                  <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>
                    {portfolioSites[0].title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 500 }}>
                    {portfolioSites[0].description}
                  </p>
                </div>
                <a
                  href={portfolioSites[0].url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 2rem',
                    border: '2px solid var(--border)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    background: 'var(--border)',
                    color: 'var(--bg)',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--border)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  Visit Site &rarr;
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                {portfolioSites[0].tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Grid of remaining sites */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
              gap: '2rem',
            }}
            className="portfolio-grid"
          >
            {portfolioSites.slice(1).map((site, i) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  border: '2px solid var(--border)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                whileHover={{ y: -2 }}
              >
                {/* Image placeholder */}
                <div
                  style={{
                    height: 200,
                    background: `linear-gradient(135deg, ${site.color}12, ${site.color}06)`,
                    borderBottom: '2px solid var(--border)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Mock browser */}
                  <div
                    style={{
                      width: '88%',
                      background: 'var(--card)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 6,
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '0.4rem 0.8rem',
                        borderBottom: '1px solid var(--border-light)',
                        background: 'var(--bg-alt)',
                      }}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff5f57' }} />
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#febc2e' }} />
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#28c840' }} />
                      <div
                        style={{
                          flex: 1,
                          marginLeft: 6,
                          padding: '0.15rem 0.4rem',
                          background: 'var(--bg)',
                          border: '1px solid var(--border-light)',
                          borderRadius: 3,
                          fontSize: '0.6rem',
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
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ width: '50%', height: 14, background: 'var(--border-light)', borderRadius: 3 }} />
                      <div style={{ width: '80%', height: 8, background: 'var(--border-light)', borderRadius: 2, opacity: 0.5 }} />
                      <div style={{ width: '60%', height: 8, background: 'var(--border-light)', borderRadius: 2, opacity: 0.5 }} />
                      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                        <div style={{ width: 60, height: 40, background: 'var(--border-light)', borderRadius: 4 }} />
                        <div style={{ width: 60, height: 40, background: 'var(--border-light)', borderRadius: 4 }} />
                      </div>
                    </div>
                  </div>

                  {/* LIVE badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      padding: '0.2rem 0.5rem',
                      background: '#22c55e',
                      color: '#fff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    LIVE
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    {site.id}
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>
                    {site.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem', flex: 1, fontSize: '0.9rem' }}>
                    {site.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {site.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-raw"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
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

      {/* ─── CTA ─── */}
      <section style={{ borderTop: '2px solid var(--border)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
            Need a website?
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>
            I can build one for you.
          </h2>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2.5rem',
              border: '2px solid var(--border)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontWeight: 600,
              background: 'var(--border)',
              color: 'var(--bg)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--border)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
