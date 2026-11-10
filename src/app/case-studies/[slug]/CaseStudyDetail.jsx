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
      <section style={{ padding: '3.5rem max(2rem, 7vw) 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ border: '1px solid var(--card-border)', borderTop: `3px solid ${LIME}`, borderRadius: '14px', padding: 'clamp(1.75rem, 4vw, 3rem)', background: 'var(--card)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.5rem' }}>
              {study.logo && (
                <img src={study.logo} alt={`${study.title} logo`} style={{ width: '52px', height: '52px', objectFit: 'contain', borderRadius: '12px', border: '1px solid var(--card-border)', flexShrink: 0 }} />
              )}
              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: LIME, letterSpacing: '0.14em', textTransform: 'uppercase', margin: 0 }}>
                  Case Study
                </p>
                <h1 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0.15rem 0 0', color: 'var(--foreground)' }}>
                  {study.title}
                </h1>
              </div>
            </div>

            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1.1rem', color: 'var(--foreground)', lineHeight: 1.7, maxWidth: '640px', marginBottom: '1.25rem' }}>
              {study.tagline}
            </p>

            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: 'var(--muted)', letterSpacing: '0.03em', marginBottom: '2rem' }}>
              {study.role} <span style={{ color: LIME, margin: '0 0.5rem' }}>·</span> {study.timeline}
            </p>

            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.65rem 1.4rem', background: LIME, color: ACCENT, border: `2px solid ${LIME}`, borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'transform 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Visit site
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 2h8v8M2 10 10 2" strokeLinecap="round" />
                </svg>
              </a>
            )}
          </motion.div>

          {/* Metrics strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="cs-metrics-strip"
            style={{ display: 'grid', gridTemplateColumns: `repeat(${study.metrics.length}, 1fr)`, marginTop: '2.5rem' }}
          >
            {study.metrics.map((m, i) => (
              <div key={m.label} style={{ padding: '0 1.5rem', borderLeft: i > 0 ? '1px solid var(--card-border)' : 'none' }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: LIME, lineHeight: 1, margin: 0 }}>{m.value}</p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--foreground)', marginTop: '0.6rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.label}</p>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.2rem', lineHeight: 1.5 }}>{m.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 800px) {
          .cs-feature-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .cs-feature-row > div {
            order: initial !important;
          }
        }
        @media (max-width: 640px) {
          .cs-metrics-strip {
            grid-template-columns: repeat(2, 1fr) !important;
            row-gap: 1.75rem !important;
          }
          .cs-metrics-strip > div:nth-child(odd) {
            border-left: none !important;
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
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: LIME, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Inside the Build</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {study.sections.map((section, idx) => {
                  const imageFirst = section.image && idx % 2 === 1;
                  return (
                    <div
                      key={section.title}
                      className="cs-feature-row"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: section.image ? '1fr 1fr' : '1fr',
                        gap: '3rem',
                        alignItems: 'center',
                        padding: '2.75rem 0',
                        borderTop: '1px solid var(--card-border)',
                      }}
                    >
                      <div style={{ order: imageFirst ? 2 : 1 }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '2.25rem', fontWeight: 800, color: 'color-mix(in srgb, var(--lime) 35%, transparent)', lineHeight: 1 }}>{String(idx + 1).padStart(2, '0')}</span>
                        <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '1.3rem', color: 'var(--foreground)', letterSpacing: '0.01em', margin: '0.5rem 0 0.85rem' }}>{section.title}</h3>
                        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", color: 'var(--foreground)', fontSize: '0.95rem', lineHeight: 1.8, margin: 0, maxWidth: section.image ? 'none' : '700px' }}>
                          {section.body}
                        </p>
                      </div>
                      {section.image && (
                        <div style={{ order: imageFirst ? 1 : 2 }}>
                          <ImageViewer images={[section.image]} title={section.title} type={project?.displayType || project?.type} />
                        </div>
                      )}
                    </div>
                  );
                })}
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
