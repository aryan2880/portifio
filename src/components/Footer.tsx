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
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                paddingRight: '3rem',
                color: 'var(--border-light)',
              }}
            >
              Available for work &mdash; Let&apos;s build something &mdash; Open to opportunities &mdash;{' '}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            padding: '3rem 0',
          }}
          className="footer-grid"
        >
          {/* Col 1 */}
          <div>
            <div
              className="mono"
              style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}
            >
              Navigate
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/" className="link-raw" style={{ fontWeight: 500 }}>Home</Link>
              <Link href="/about" className="link-raw" style={{ fontWeight: 500 }}>About</Link>
              <Link href="/projects" className="link-raw" style={{ fontWeight: 500 }}>Work</Link>
              <Link href="/portfolio" className="link-raw" style={{ fontWeight: 500 }}>Portfolio</Link>
              <Link href="/contact" className="link-raw" style={{ fontWeight: 500 }}>Contact</Link>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <div
              className="mono"
              style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}
            >
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="https://github.com/aryan2880" target="_blank" rel="noreferrer" className="link-raw" style={{ fontWeight: 500 }}>GitHub</a>
              <a href="https://www.linkedin.com/in/aryan-v-34089b27a/" target="_blank" rel="noreferrer" className="link-raw" style={{ fontWeight: 500 }}>LinkedIn</a>
              <a href="mailto:aryanverma2880@gmail.com" className="link-raw" style={{ fontWeight: 500 }}>Email</a>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <div
              className="mono"
              style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}
            >
              Based in
            </div>
            <p style={{ fontWeight: 500, lineHeight: 1.6 }}>
              Mumbai, India
              <br />
              <span style={{ color: 'var(--text-muted)' }}>
                Currently open to remote
                <br />
                and hybrid roles.
              </span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '2px solid var(--border)',
            padding: '1.5rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span className="mono" style={{ color: 'var(--text-muted)' }}>
            &copy; 2026 Aryan Verma
          </span>
          <span className="mono" style={{ color: 'var(--text-muted)' }}>
            Built with Next.js &amp; Three.js
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
