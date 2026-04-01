'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { caseStudies } from '../../../data/case-studies';

export default function CaseStudiesPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ padding: '4rem 0 3rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              DEEP DIVES
            </p>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.75rem' }}>
              Case Studies
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: '480px' }}>
              More detailed write-ups on how I approach problems, make decisions, and ship things.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '0 0 6rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/case-studies/${study.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div
                    className="card-hover"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '1rem',
                      padding: '2rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            color: 'var(--accent)',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {study.role}
                        </p>
                        <h2
                          style={{
                            fontSize: '1.4rem',
                            fontWeight: '700',
                            marginBottom: '0.75rem',
                            color: 'var(--foreground)',
                          }}
                        >
                          {study.title}
                        </h2>
                        <p
                          style={{
                            color: 'var(--muted)',
                            fontSize: '0.95rem',
                            lineHeight: 1.7,
                            marginBottom: '1.5rem',
                            maxWidth: '560px',
                          }}
                        >
                          {study.tagline}
                        </p>

                        {/* Metrics */}
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                          {study.metrics.map((m) => (
                            <div key={m.label}>
                              <p style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent)' }}>
                                {m.value}
                              </p>
                              <p style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{m.sub}</p>
                            </div>
                          ))}
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            color: 'var(--accent)',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                          }}
                        >
                          Read case study
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '0.35rem 0.875rem',
                            background: 'rgba(109,40,217,0.12)',
                            border: '1px solid rgba(109,40,217,0.25)',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            color: 'var(--accent)',
                            fontWeight: '500',
                          }}
                        >
                          {study.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
