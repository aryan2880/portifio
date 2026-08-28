'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const contactLinks = [
  { icon: '�', label: 'Location', value: 'Mumbai, India', href: 'https://maps.google.com/?q=Mumbai%20India' },
  { icon: '📞', label: 'Phone', value: '+91 9304453760', href: 'tel:+919304453760' },
  { icon: '📧', label: 'Email', value: 'aryanverma2880@gmail.com', href: 'mailto:aryanverma2880@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/aryan-v-34089b27a', href: 'https://www.linkedin.com/in/aryan-v-34089b27a/' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/aryan2880', href: 'https://github.com/aryan2880' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 2500);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
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
            Get in Touch
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Let&apos;s Work Together
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
          }}
          className="contact-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Have a project in mind?
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 1.7,
              }}
            >
              I&apos;m open to building modern websites, business platforms, and scalable digital
              experiences for startups and growing brands. Reach out and let&apos;s discuss your next idea.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  whileHover={{ x: 4, borderColor: 'var(--accent)' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 12,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: 'var(--accent-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      flexShrink: 0,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: '0.9rem' }}>{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: '2rem',
              }}
            >
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="name"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.5rem' }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    color: 'var(--text)',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="email"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.5rem' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    color: 'var(--text)',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="message"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.5rem' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    color: 'var(--text)',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: 120,
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.8rem 1.75rem',
                  borderRadius: 12,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  background: 'var(--gradient)',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 20px rgba(108, 99, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  pointerEvents: submitted ? 'none' : 'auto',
                }}
                onMouseEnter={(e) => {
                  if (!submitted) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(108, 99, 255, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(108, 99, 255, 0.3)';
                }}
              >
                {submitted ? '✅ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
