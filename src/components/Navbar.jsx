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
  const pathname = usePathname();

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
        background: scrolled ? 'rgba(15, 15, 26, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(42, 42, 69, 0.8)' : '1px solid transparent',
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
              fontWeight: '400',
              fontSize: '1rem',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#c4c4d4',
              marginLeft: '0.5rem',
            }}
          >
            CurleyCoder
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
                  color: isActive ? '#a78bfa' : '#c4c4d4',
                  background: isActive ? 'rgba(109, 40, 217, 0.12)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side: Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
              color: '#c4c4d4',
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
            background: 'rgba(15, 15, 26, 0.98)',
            borderTop: '1px solid rgba(42, 42, 69, 0.8)',
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
                  color: isActive ? '#a78bfa' : '#c4c4d4',
                  borderBottom: '1px solid rgba(42, 42, 69, 0.4)',
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
