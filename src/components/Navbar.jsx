'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/resume', label: 'RESUME' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        fontFamily: "'JetBrains Mono', monospace",
        background: 'var(--nav-bg-scrolled)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--nav-border-color)',
        transition: 'background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.25s ease',
      }}
    >
      <div
        className="portfolio-nav-inner"
        style={{
          width: '100%',
          height: '64px',
          padding: '0 1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          aria-label="Go to homepage"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#435058',
          }}
        >
          <span
            className="accent-glow"
            style={{
              fontWeight: '700',
              fontSize: '1.05rem',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#435058',
              letterSpacing: '-0.04em',
            }}
          >
            {'{'}
            <span style={{ letterSpacing: '-0.08em' }}>C</span>
            <sup style={{ fontSize: '0.65em', position: 'relative', top: '-0.7em', marginLeft: '1px' }}>2</sup>
            {'}'}
          </span>
          <span
            className="logo-text"
            style={{ display: 'inline-flex', flexDirection: 'column', marginLeft: '0.55rem', lineHeight: 1.05 }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 400,
                fontSize: '1rem',
                color: 'var(--nav-link-color)',
                transition: 'color 0.5s ease',
              }}
            >
              CurleyCoder
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          className="desktop-nav"
          style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}
        >
          {navLinks.map((link) => {

            const isActive =
              link.href === '/'
                ? pathname === '/'
                : !link.href.includes('#') && pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? 'accent-glow' : ''}
                style={{
                  color: isActive ? '#435058' : 'var(--nav-link-color)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  lineHeight: 1,
                  letterSpacing: '0.06em',
                  fontWeight: isActive ? 600 : 400,
                  fontFamily: "'JetBrains Mono', monospace",
                  transition: 'color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#435058';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? '#435058' : 'var(--nav-link-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* ── Sky toggle ──────────────────────────────────────────── */}
          <button
            onClick={toggleDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              width: '54px',
              height: '26px',
              borderRadius: '999px',
              border: `1.5px solid ${isDark ? 'rgba(132,140,142,0.35)' : '#bfb7b6'}`,
              background: isDark ? '#1c2529' : '#e8e9e5',
              cursor: 'pointer',
              padding: '2px',
              transition: 'background 0.45s ease, border-color 0.45s ease',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            {/* Stars — fade in dark mode */}
            {[
              { left: '8px',  top: '5px',  size: 1.5 },
              { left: '16px', top: '14px', size: 1   },
              { left: '24px', top: '7px',  size: 2   },
            ].map((s, i) => (
              <span
                key={i}
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: s.left,
                  top: s.top,
                  width: `${s.size}px`,
                  height: `${s.size}px`,
                  borderRadius: '50%',
                  background: '#dcf763',
                  opacity: isDark ? 1 : 0,
                  transition: `opacity 0.3s ease ${i * 0.07}s`,
                  pointerEvents: 'none',
                }}
              />
            ))}

            {/* Sun rays — fade in light mode */}
            {[0, 45, 90, 135].map((deg, i) => (
              <span
                key={deg}
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  width: '6px',
                  height: '1.5px',
                  borderRadius: '1px',
                  background: '#848c8e',
                  transformOrigin: 'right center',
                  transform: `translateY(-50%) rotate(${deg}deg) translateX(6px)`,
                  opacity: isDark ? 0 : 0.55,
                  transition: `opacity 0.3s ease ${i * 0.05}s`,
                  pointerEvents: 'none',
                }}
              />
            ))}

            {/* Sliding orb */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: isDark ? '#dcf763' : '#435058',
                transform: `translateX(${isDark ? '29px' : '1px'})`,
                transition: 'transform 0.45s cubic-bezier(0.34, 1.4, 0.64, 1), background 0.45s ease, box-shadow 0.45s ease',
                boxShadow: isDark ? '0 0 10px rgba(220,247,99,0.55)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isDark
                ? <FiMoon size={10} style={{ color: '#1c2529', flexShrink: 0 }} />
                : <FiSun  size={10} style={{ color: '#f1f2ee', flexShrink: 0 }} />
              }
            </span>
          </button>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="mobile-menu-btn"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--nav-link-color)',
            width: '38px',
            height: '38px',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.5s ease',
          }}
        >
          <svg width="30" height="30" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="5" y1="5" x2="17" y2="17" />
                <line x1="17" y1="5" x2="5" y2="17" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="18" y2="7" />
                <line x1="4" y1="11" x2="18" y2="11" />
                <line x1="4" y1="15" x2="18" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="mobile-nav"
          style={{
            background: 'var(--nav-mobile-bg)',
            borderTop: '1px solid var(--nav-mobile-border)',
            padding: '1rem 1.75rem 1.25rem',
            transition: 'background 0.5s ease',
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : !link.href.includes('#') && pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? 'accent-glow' : ''}
                style={{
                  display: 'block',
                  padding: '0.85rem 0',
                  color: isActive ? '#435058' : 'var(--nav-link-color)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.06em',
                  fontWeight: isActive ? 600 : 400,
                  borderBottom: '1px solid var(--nav-mobile-border)',
                  transition: 'color 0.5s ease',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 520px) {
          .portfolio-nav-inner {
            padding: 0 1rem !important;
          }
          .logo-text {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
