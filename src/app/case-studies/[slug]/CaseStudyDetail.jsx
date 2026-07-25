'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ACCENT = '#435058';
const LIME   = '#dcf763';

export default function CaseStudyDetail({ study }) {
  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Header */}
      <section style={{ padding: '4rem max(2rem, 7vw) 3rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            <Link
              href="/projects"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.06em', marginBottom: '2rem', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = ACCENT}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 8H3M7 4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Projects
            </Link>

            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              Case Study
            </p>
            <h1 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--foreground)' }}>
              {study.title}
            </h1>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1.05rem', color: 'var(--dark-text)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '1.5rem' }}>
              {study.tagline}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <span style={{ padding: '0.3rem 0.75rem', background: `${ACCENT}18`, border: `1px solid ${ACCENT}40`, borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: ACCENT, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {study.role}
              </span>
              <span style={{ padding: '0.3rem 0.75rem', background: 'transparent', border: '1px solid var(--card-border)', borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>
                {study.timeline}
              </span>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {study.metrics.map(m => (
                <div key={m.label} style={{ background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '8px', padding: '1rem 1.25rem' }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.75rem', fontWeight: 800, color: ACCENT, lineHeight: 1, margin: 0 }}>{m.value}</p>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.3rem', lineHeight: 1.5 }}>{m.sub}</p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.2rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.label}</p>
                </div>
              ))}
            </div>

            {/* Links */}
            {study.liveUrl && (
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.65rem 1.4rem', background: ACCENT, color: '#f1f2ee', border: `2px solid ${ACCENT}`, borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', textDecoration: 'none', letterSpacing: '0.04em', transition: 'background 0.2s, border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = LIME; e.currentTarget.style.borderColor = LIME; e.currentTarget.style.color = ACCENT; }}
                  onMouseLeave={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = '#f1f2ee'; }}
                >
                  Visit site
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2 2h8v8M2 10 10 2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '0 max(2rem, 7vw) 5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>

            {/* Overview */}
            <div style={{ marginBottom: '3rem' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Overview</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem' }}>{study.overview}</p>
            </div>

            {/* The Problem */}
            <div style={{ marginBottom: '3rem' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>The Problem</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem' }}>{study.problem}</p>
            </div>

            {/* How it came together */}
            <div style={{ marginBottom: '3rem' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>How It Came Together</p>
              <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--card-border)', borderRadius: '12px', overflow: 'hidden' }}>
                {study.sections.map((section, idx) => (
                  <details
                    key={section.title}
                    open={idx === 0}
                    style={{ borderBottom: idx < study.sections.length - 1 ? '1px solid var(--card-border)' : 'none' }}
                  >
                    <summary style={{ padding: '1rem 1.25rem', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--card)', userSelect: 'none' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: ACCENT, letterSpacing: '0.06em' }}>{String(idx + 1).padStart(2, '0')}</span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.82rem', color: 'var(--foreground)', letterSpacing: '0.04em' }}>{section.title}</span>
                      </span>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, color: 'var(--muted)' }}>
                        <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <p style={{ padding: '0.75rem 1.25rem 1.1rem', fontFamily: "'Inter', system-ui, sans-serif", color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>
                      {section.body}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <blockquote style={{ border: `1px solid ${ACCENT}40`, borderLeft: `3px solid ${ACCENT}`, borderRadius: '8px', padding: '1.5rem 1.75rem', marginBottom: '3rem', background: `${ACCENT}08` }}>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1rem', lineHeight: 1.8, color: 'var(--foreground)', marginBottom: '0.75rem' }}>
                &ldquo;{study.testimonialQuote}&rdquo;
              </p>
              <footer style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: ACCENT, letterSpacing: '0.06em' }}>
                — {study.testimonialAuthor}
              </footer>
            </blockquote>

            {/* Takeaway */}
            <div style={{ marginBottom: '3rem' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Takeaway</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem' }}>{study.conclusion}</p>
            </div>

            <Link
              href="/projects"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.06em', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = ACCENT}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 8H3M7 4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to case studies
            </Link>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
