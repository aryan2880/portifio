'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

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
              Contact
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

      {/* ─── CONTACT CONTENT ─── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '4rem',
            }}
            className="contact-grid"
          >
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                Get in Touch
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
                    onMouseEnter={(e) => {
                      e.currentTarget.style.paddingLeft = '1rem';
                      e.currentTarget.style.color = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.paddingLeft = '0';
                      e.currentTarget.style.color = 'var(--text)';
                    }}
                  >
                    <span className="mono" style={{ color: 'var(--text-muted)' }}>{item.label}</span>
                    <span style={{ fontWeight: 500, textAlign: 'right' }}>{item.value}</span>
                  </a>
                ))}
              </div>

              <div style={{ marginTop: '3rem' }}>
                <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
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

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ border: '2px solid var(--border)', padding: '2.5rem' }}>
                <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  Send a Message
                </div>

                <form onSubmit={handleSubmit}>
                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    { id: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?" },
                  ].map((field) => (
                    <div key={field.id} style={{ marginBottom: '1.5rem' }}>
                      <label
                        htmlFor={field.id}
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          marginBottom: '0.5rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem 0',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '2px solid var(--border-light)',
                          color: 'var(--text)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '1rem',
                          outline: 'none',
                          transition: 'border-color 0.2s ease',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--accent)')}
                        onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--border-light)')}
                      />
                    </div>
                  ))}

                  <div style={{ marginBottom: '2rem' }}>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '2px solid var(--border-light)',
                        color: 'var(--text)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--accent)')}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--border-light)')}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid var(--border)',
                      background: 'var(--border)',
                      color: 'var(--bg)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      pointerEvents: submitted ? 'none' : 'auto',
                    }}
                    onMouseEnter={(e) => {
                      if (!submitted) {
                        e.currentTarget.style.background = 'var(--accent)';
                        e.currentTarget.style.borderColor = 'var(--accent)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!submitted) {
                        e.currentTarget.style.background = 'var(--border)';
                        e.currentTarget.style.borderColor = 'var(--border)';
                      }
                    }}
                  >
                    {submitted ? 'Message Sent. Thank You.' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO SITES ─── */}
      <section style={{ borderTop: '2px solid var(--border)', padding: '4rem 0' }}>
        <div className="container">
          <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
            Portfolio Sites
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0',
            }}
          >
            {[
              'www.ndsavla.com',
              'www.ndsavlaa.com',
              'cardiffservices.com',
              'www.theapplestore.in',
              'brucedragon.com',
              'caselaadvisors.com',
              'theclassicpartners.com',
              'jupiterwavetech.com',
              'adijatours.com',
              'novacruitix.com',
              'glcintl.com',
              'nawabsaab.ca',
              'adityahomoeopathicclinic.com',
            ].map((site, i) => (
              <a
                key={site}
                href={`https://${site}`}
                target="_blank"
                rel="noreferrer"
                className="link-raw"
                style={{
                  padding: '0.85rem 1rem',
                  borderBottom: '1px solid var(--border-light)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = '1.5rem';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = '1rem';
                  e.currentTarget.style.color = 'var(--text)';
                }}
              >
                {site}
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BIG CTA ─── */}
      <section style={{ borderTop: '2px solid var(--border)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Prefer email? Reach me at
          </h2>
          <a
            href="mailto:aryanverma2880@gmail.com"
            className="link-raw"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--accent)',
            }}
          >
            aryanverma2880@gmail.com
          </a>
        </div>
      </section>

      <style jsx>{`
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
