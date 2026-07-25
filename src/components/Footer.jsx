'use client';

import { FiGithub, FiLinkedin } from 'react-icons/fi';

const ACCENT = '#435058';

const iconLinks = [
  { label: 'GitHub',   href: 'https://github.com/curleycoder',            icon: <FiGithub size={22} /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shabnam-beiraghian', icon: <FiLinkedin size={22} /> },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--background)',
        borderTop: '1px solid var(--card-border)',
        padding: '1rem 0 ',
        transition: 'background 0.5s ease, border-color 0.5s ease',
      }}
    >
      <div
        className="container"
        style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '1rem', paddingLeft: 0, paddingRight: 0 }}
      >
        {/* Left — logo */}
        <span style={{ fontWeight: 500, fontSize: '1.05rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--foreground)', letterSpacing: '-0.04em', transition: 'color 0.5s ease' }}>
          {'{'}<span style={{ letterSpacing: '-0.08em' }}>C</span><sup style={{ fontSize: '0.65em', position: 'relative', top: '-0.7em', marginLeft: '1px' }}>2</sup>{'}'}
        </span>

        {/* Center — copyright */}
        <p style={{ color: 'var(--foreground)', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace", textAlign: 'center', transition: 'color 0.5s ease' }}>
          &copy; {year} Shabnam Beiraghian
        </p>

        {/* Right — social links */}
        <nav aria-label="Social links" style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'flex-end' }}>
          {iconLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: 'var(--foreground)', display: 'flex', alignItems: 'center', transition: 'color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = ACCENT; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--foreground)'; }}
            >
              {icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
