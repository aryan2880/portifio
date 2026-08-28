'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '2px solid var(--border)' }}>
      {/* Marquee */}
      <div
        style={{
          overflow: 'hidden',
          borderBottom: '2px solid var(--border)',
          padding: '1rem 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'marquee 20s linear infinite',
          }}
        >
          {Array(4).fill(null).map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1rem, 3vw, 2.5rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                paddingRight: '2rem',
                color: 'var(--border-light)',
              }}
            >
              Available for work &mdash; Let&apos;s build something &mdash; Open to opportunities &mdash;{' '}
            </span>
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: '0 1.5rem' }}>
        {/* Main grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            padding: '2.5rem 0',
          }}
        >
          {/* Col 1 */}
          <div>
            <div
              className="mono footer-label"
              style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}
            >
              Navigate
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/work', label: 'Work' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="link-raw"
                  style={{ fontWeight: 500, fontSize: '0.95rem' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <div
              className="mono footer-label"
              style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}
            >
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: 'https://github.com/aryan2880', label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/aryan-v-34089b27a/', label: 'LinkedIn' },
                { href: 'mailto:aryanverma2880@gmail.com', label: 'Email' },
                { href: 'https://wa.me/919304453760', label: 'WhatsApp' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="link-raw"
                  style={{ fontWeight: 500, fontSize: '0.95rem' }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <div
              className="mono footer-label"
              style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}
            >
              Based in
            </div>
            <p style={{ fontWeight: 500, lineHeight: 1.7, fontSize: '0.95rem' }}>
              Mumbai, India
              <br />
              <span style={{ color: 'var(--text-muted)' }}>
                Available for remote
                <br />
                and hybrid roles.
              </span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: '2px solid var(--border)',
            padding: '1.5rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
            &copy; 2026 Aryan Verma
          </span>
          <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
            Built with Next.js &amp; Three.js
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 2rem 0 !important;
            text-align: center;
          }
          .footer-label {
            margin-bottom: 0.75rem !important;
          }
          .footer-grid > div > div:last-child {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center;
            gap: 0.5rem !important;
            padding: 1rem 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}
