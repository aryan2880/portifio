'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
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
              04 — Get in Touch
            </div>
            <h1 className="heading-xl" style={{ marginBottom: '2rem' }}>
              Let&apos;s
              <br />
              <span style={{ color: 'var(--accent)' }}>Talk</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: 500 }}>
              Have a project in mind? Need a developer on your team? Or just want to say hi?
              I&apos;m always open to conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT INFO ─── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
            }}
            className="contact-grid"
          >
            {/* Left: Direct Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
                Direct Links
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  {
                    label: 'Email',
                    value: 'aryanverma2880@gmail.com',
                    href: 'mailto:aryanverma2880@gmail.com',
                  },
                  {
                    label: 'Phone',
                    value: '+91 9304453760',
                    href: 'tel:+919304453760',
                  },
                  {
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/aryan-v-34089b27a',
                    href: 'https://www.linkedin.com/in/aryan-v-34089b27a/',
                  },
                  {
                    label: 'GitHub',
                    value: 'github.com/aryan2880',
                    href: 'https://github.com/aryan2880',
                  },
                  {
                    label: 'WhatsApp',
                    value: '+91 9304453760',
                    href: 'https://wa.me/919304453760',
                  },
                ].map((item, i, arr) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.25rem 0',
                      borderBottom: i < arr.length - 1 ? '1px solid var(--border-light)' : '2px solid var(--border)',
                      transition: 'all 0.2s ease',
                      color: 'var(--text)',
                    }}
                    className="contact-link"
                  >
                    <span className="mono" style={{ color: 'var(--text-muted)' }}>{item.label}</span>
                    <span style={{ fontWeight: 500, textAlign: 'right' }}>{item.value}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
                Quick Actions
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919304453760"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    border: '2px solid #25D366',
                    background: '#25D36615',
                    color: 'var(--text)',
                    transition: 'all 0.2s ease',
                  }}
                  className="contact-action"
                >
                  <span style={{ fontSize: '1.5rem' }}>💬</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.15rem' }}>WhatsApp Me</div>
                    <div className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                      Quick reply — +91 9304453760
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:aryanverma2880@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    border: '2px solid var(--border)',
                    color: 'var(--text)',
                    transition: 'all 0.2s ease',
                  }}
                  className="contact-action"
                >
                  <span style={{ fontSize: '1.5rem' }}>✉️</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.15rem' }}>Send Email</div>
                    <div className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                      aryanverma2880@gmail.com
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aryan-v-34089b27a/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    border: '2px solid #0A66C2',
                    background: '#0A66C210',
                    color: 'var(--text)',
                    transition: 'all 0.2s ease',
                  }}
                  className="contact-action"
                >
                  <span style={{ fontSize: '1.5rem' }}>💼</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.15rem' }}>LinkedIn</div>
                    <div className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                      Connect professionally
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/aryan2880"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    border: '2px solid var(--border)',
                    color: 'var(--text)',
                    transition: 'all 0.2s ease',
                  }}
                  className="contact-action"
                >
                  <span style={{ fontSize: '1.5rem' }}>🐙</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.15rem' }}>GitHub</div>
                    <div className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                      See my code &amp; projects
                    </div>
                  </div>
                </a>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Based in
                </div>
                <p style={{ fontWeight: 500, lineHeight: 1.7 }}>
                  Mumbai, India
                  <br />
                  <span style={{ color: 'var(--text-muted)' }}>
                    Available for remote and hybrid roles worldwide.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BIG CTA ─── */}
      <section style={{ borderTop: '2px solid var(--border)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
              Prefer a quick chat?
            </h2>
            <a
              href="https://wa.me/919304453760"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2.5rem',
                border: '2px solid #25D366',
                background: '#25D366',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .contact-link:hover {
          padding-left: 1rem !important;
          color: var(--accent) !important;
        }
        .contact-action:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
}
