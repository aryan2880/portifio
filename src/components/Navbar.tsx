'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Work' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 2rem',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: scrolled ? '2px solid var(--border)' : '2px solid transparent',
          background: scrolled ? 'color-mix(in srgb, var(--bg) 90%, transparent)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.2s ease',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          Aryan Verma<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: pathname === link.href ? 'var(--text)' : 'var(--text-muted)',
                fontWeight: pathname === link.href ? 600 : 400,
                borderBottom: pathname === link.href ? '2px solid var(--accent)' : '2px solid transparent',
                paddingBottom: 2,
                transition: 'all 0.2s ease',
              }}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'none',
              border: '2px solid var(--border)',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s ease',
            }}
          >
            {theme === 'dark' ? 'S' : 'M'}
          </button>
        </div>

        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 4,
          }}
        >
          <span style={{
            display: 'block', width: 22, height: 2,
            background: 'var(--text)',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: 'var(--text)',
            opacity: menuOpen ? 0 : 1,
            transition: 'all 0.3s ease',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: 'var(--text)',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
          }} />
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'var(--bg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: pathname === link.href ? 'var(--accent)' : 'var(--text)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { toggleTheme(); setMenuOpen(false); }}
            style={{
              marginTop: '1rem',
              background: 'none',
              border: '2px solid var(--border)',
              padding: '0.5rem 1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              color: 'var(--text)',
            }}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
