'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectDetail({ project }) {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects"
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
              All projects
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{project.year}</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              {project.title}
            </h1>

            <p
              style={{
                color: 'var(--muted)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Live site
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2 2h8v8M2 10 10 2" strokeLinecap="round" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  GitHub
                </a>
              )}
              {project.prototypeUrl && (
                <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Prototype
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rationale */}
      <section style={{ padding: '2rem 0' }}>
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
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              Context &amp; Approach
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '1rem',
                marginBottom: '3rem',
              }}
            >
              {[
                { label: 'The problem', content: project.rationaleProblem },
                { label: 'The challenge', content: project.rationaleChallenge },
                { label: 'The outcome', content: project.rationaleSolution },
              ].map((block) => (
                <div
                  key={block.label}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '0.875rem',
                    padding: '1.5rem',
                  }}
                >
                  <p
                    style={{
                      color: 'var(--accent)',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.625rem',
                    }}
                  >
                    {block.label}
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {block.content}
                  </p>
                </div>
              ))}
            </div>

            {/* What it does */}
            <h2
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              What it does
            </h2>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                marginBottom: '3rem',
              }}
            >
              {project.whatItDoes.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: 'var(--foreground)',
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      flexShrink: 0,
                      marginTop: '0.55rem',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Highlights */}
            <h2
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              Highlights
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '4rem' }}>
              {project.highlights.map((h) => (
                <span
                  key={h}
                  style={{
                    background: 'rgba(109,40,217,0.12)',
                    border: '1px solid rgba(109,40,217,0.3)',
                    color: '#c4b5fd',
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            <Link href="/projects" className="btn-outline">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 8H3M7 4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
