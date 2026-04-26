'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/resume', label: 'Resume' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.dataset.theme = next;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--nav-border-color)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontWeight: '700',
              fontSize: '1rem',
              fontFamily: "'JetBrains Mono', monospace",
              background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #6D28D9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {'{'}<span style={{ letterSpacing: '-0.05em' }}>{'C'}</span><sup style={{ fontSize: '0.65em', WebkitTextFillColor: '#a78bfa' }}>2</sup><span style={{ letterSpacing: '-0.05em' }}>{'}'}</span>
          </span>
          <span
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              marginLeft: '0.5rem',
              lineHeight: 1.15,
            }}
          >
            <span
              style={{
                fontWeight: '500',
                fontSize: '0.9rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: 'var(--foreground)',
              }}
            >
              Shabnam Beiraghian
            </span>
            <span
              style={{
                fontWeight: '400',
                fontSize: '0.65rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#8b7ec8',
                letterSpacing: '0.03em',
              }}
            >
              aka CurleyCoder
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '0.4rem 0.875rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? '600' : '400',
                  color: isActive ? 'var(--accent)' : 'var(--nav-link-color)',
                  background: isActive ? 'var(--nav-link-active-bg)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side: Theme toggle + Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Day/Night toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              background: 'none',
              border: '1px solid var(--nav-border-color)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              color: 'var(--nav-link-color)',
              padding: '0.35rem 0.45rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s, border-color 0.2s, background 0.2s',
            }}
          >
            {theme === 'dark' ? (
              /* Sun icon — click to go light */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon icon — click to go dark */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="/#contact"
            className="btn-primary"
            style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
          >
            Contact
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--nav-link-color)',
              padding: '0.25rem',
              display: 'none',
            }}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="16" x2="19" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: 'var(--nav-mobile-bg)',
            borderTop: '1px solid var(--nav-border-color)',
            padding: '1rem 1.5rem',
          }}
          className="mobile-nav"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                  fontWeight: isActive ? '600' : '400',
                  color: isActive ? 'var(--accent)' : 'var(--nav-link-color)',
                  borderBottom: '1px solid var(--nav-mobile-border)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
