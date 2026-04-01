'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CaseStudyDetail({ study }) {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section
        style={{
          padding: '4rem 0 3rem',
          background: 'linear-gradient(180deg, rgba(109,40,217,0.06) 0%, transparent 100%)',
          borderBottom: '1px solid var(--card-border)',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/case-studies"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--muted)',
                fontSize: '0.875rem',
                marginBottom: '2rem',
                transition: 'color 0.15s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 8H3M7 4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Case studies
            </Link>

            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.75rem',
                  background: 'rgba(109,40,217,0.12)',
                  border: '1px solid rgba(109,40,217,0.25)',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  fontWeight: '600',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {study.role}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.75rem',
                  background: 'transparent',
                  border: '1px solid var(--card-border)',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  color: 'var(--muted)',
                }}
              >
                {study.timeline}
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              {study.title}
            </h1>

            <p
              style={{
                color: '#c4c4d4',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                maxWidth: '620px',
                marginBottom: '2.5rem',
              }}
            >
              {study.tagline}
            </p>

            {/* Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '0.75rem',
                    padding: '1rem 1.25rem',
                  }}
                >
                  <p style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent)', lineHeight: 1 }}>
                    {m.value}
                  </p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.3rem' }}>{m.sub}</p>
                  <p style={{ fontSize: '0.72rem', color: '#6b6b88', marginTop: '0.15rem' }}>{m.label}</p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {study.liveUrl && (
                <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit site
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2 2h8v8M2 10 10 2" strokeLinecap="round" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              Overview
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem', marginBottom: '3rem' }}>
              {study.overview}
            </p>

            <h2
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              The Problem
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem', marginBottom: '3rem' }}>
              {study.problem}
            </p>

            {/* Sections accordion */}
            <h2
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              How It Came Together
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
              {study.sections.map((section, idx) => (
                <details
                  key={section.title}
                  open={idx === 0}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                  }}
                >
                  <summary
                    style={{
                      padding: '1rem 1.5rem',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      color: 'var(--foreground)',
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      userSelect: 'none',
                    }}
                  >
                    <span>
                      <span style={{ color: 'var(--accent)', marginRight: '0.5rem' }}>
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      {section.title}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ flexShrink: 0, opacity: 0.5 }}
                    >
                      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p
                    style={{
                      padding: '0 1.5rem 1.25rem',
                      color: 'var(--muted)',
                      fontSize: '0.9rem',
                      lineHeight: 1.75,
                    }}
                  >
                    {section.body}
                  </p>
                </details>
              ))}
            </div>

            {/* Testimonial */}
            <blockquote
              style={{
                background: 'linear-gradient(135deg, rgba(109,40,217,0.08), rgba(109,40,217,0.04))',
                border: '1px solid rgba(109,40,217,0.25)',
                borderLeft: '4px solid var(--primary)',
                borderRadius: '0.875rem',
                padding: '1.75rem 2rem',
                marginBottom: '3rem',
              }}
            >
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  color: '#d4d4e8',
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                }}
              >
                &ldquo;{study.testimonialQuote}&rdquo;
              </p>
              <footer style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.875rem' }}>
                — {study.testimonialAuthor}
              </footer>
            </blockquote>

            {/* Conclusion */}
            <h2
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              Takeaway
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem', marginBottom: '3rem' }}>
              {study.conclusion}
            </p>

            <Link href="/case-studies" className="btn-outline">
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
