'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageViewer from '@/components/ImageViewer';

const ACCENT = '#435058';
const LIME   = 'var(--lime)';

export default function CaseStudyDetail({ study, project }) {
  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Header */}
      <section style={{ padding: '4rem max(2rem, 7vw) 3rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: LIME, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Case Study
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1rem' }}>
                {study.logo && (
                  <img src={study.logo} alt={`${study.title} logo`} style={{ width: '64px', height: '64px', objectFit: 'contain', borderRadius: '14px', flexShrink: 0 }} />
                )}
                <h1 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0, color: 'var(--foreground)' }}>
                  {study.title}
                </h1>
              </div>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1.05rem', color: 'var(--dark-text)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                {study.tagline}
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <span style={{ padding: '0.3rem 0.75rem', background: 'color-mix(in srgb, var(--lime) 15%, transparent)', border: `1px solid color-mix(in srgb, var(--lime) 40%, transparent)`, borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--foreground)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {study.role}
                </span>
                <span style={{ padding: '0.3rem 0.75rem', background: 'transparent', border: '1px solid var(--card-border)', borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>
                  {study.timeline}
                </span>
              </div>

              {/* Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {study.metrics.map(m => (
                  <div key={m.label} style={{ background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '8px', padding: '1rem 1.25rem' }}>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.75rem', fontWeight: 800, color: LIME, lineHeight: 1, margin: 0 }}>{m.value}</p>
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
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.65rem 1.4rem', background: LIME, color: ACCENT, border: `2px solid ${LIME}`, borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', textDecoration: 'none', letterSpacing: '0.04em', transition: 'transform 0.2s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
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

      <style jsx>{`
        @media (max-width: 800px) {
          .cs-feature-row {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>

      {/* Body */}
      <section style={{ padding: '0 max(2rem, 7vw) 5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>

            {/* Overview */}
            <div style={{ marginBottom: '3rem', maxWidth: '700px' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: LIME, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Overview</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem' }}>{study.overview}</p>
            </div>

            {/* The Problem */}
            <div style={{ marginBottom: '3rem', maxWidth: '700px' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: LIME, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>The Problem</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem' }}>{study.problem}</p>
            </div>

            {/* How it came together */}
            <div style={{ marginBottom: '3rem' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: LIME, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>How It Came Together</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {study.sections.map((section, idx) => (
                  <div
                    key={section.title}
                    className="cs-feature-row"
                    style={{ display: 'grid', gridTemplateColumns: section.image ? '1fr 1fr' : '1fr', gap: '2.5rem', alignItems: 'center' }}
                  >
                    <div>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: LIME, letterSpacing: '0.06em' }}>{String(idx + 1).padStart(2, '0')}</span>
                      <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '1.1rem', color: 'var(--foreground)', letterSpacing: '0.02em', margin: '0.3rem 0 0.75rem' }}>{section.title}</h3>
                      <p style={{ fontFamily: "'Inter', system-ui, sans-serif", color: 'var(--foreground)', fontSize: '0.92rem', lineHeight: 1.8, margin: 0, maxWidth: section.image ? 'none' : '700px' }}>
                        {section.body}
                      </p>
                    </div>
                    {section.image && (
                      <ImageViewer images={[section.image]} title={section.title} type={project?.displayType || project?.type} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <blockquote style={{ maxWidth: '700px', border: '1px solid color-mix(in srgb, var(--lime) 35%, transparent)', borderLeft: `3px solid ${LIME}`, borderRadius: '8px', padding: '1.5rem 1.75rem', marginBottom: '3rem', background: 'color-mix(in srgb, var(--lime) 6%, transparent)' }}>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1rem', lineHeight: 1.8, color: 'var(--foreground)', marginBottom: '0.75rem' }}>
                &ldquo;{study.testimonialQuote}&rdquo;
              </p>
              <footer style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: LIME, letterSpacing: '0.06em' }}>
                — {study.testimonialAuthor}
              </footer>
            </blockquote>

            {/* Takeaway */}
            <div style={{ marginBottom: '3rem', maxWidth: '700px' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: LIME, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Takeaway</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem' }}>{study.conclusion}</p>
            </div>

            <Link
              href="/projects"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.06em', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = LIME}
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
