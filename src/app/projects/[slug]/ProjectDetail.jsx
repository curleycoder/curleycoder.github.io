'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaYoutube, FaFigma } from 'react-icons/fa';
import ImageViewer from '@/components/ImageViewer';

const label = {
  color: 'var(--accent)',
  fontSize: '0.68rem',
  fontWeight: '700',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  fontFamily: "'JetBrains Mono', monospace",
  marginBottom: '0.4rem',
  display: 'block',
};

export default function ProjectDetail({ project }) {
  return (
    <div style={{ paddingTop: '64px' }}>

      {/* Hero: two-column */}
      <section style={{ padding: '2rem 0 1.5rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pd-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'start',
              border: '1px solid var(--card-border)',
              borderTop: '3px solid var(--lime)',
              borderRadius: '14px',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              background: 'var(--card)',
            }}
          >
            {/* Left: info */}
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', fontSize: '0.78rem', letterSpacing: '0.04em', marginBottom: '1rem', display: 'block' }}>
                {project.year}
              </span>

              <h1
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  fontWeight: '800',
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                  marginBottom: '1.25rem',
                  color: 'var(--foreground)',
                }}
              >
                {project.title}
              </h1>

              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Role / team — above buttons */}
              {project.myRole && (
                <p style={{ color: 'var(--muted)', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace", marginBottom: '1.5rem' }}>
                  {project.myRole} <span style={{ color: 'var(--lime)', margin: '0 0.5rem' }}>·</span> {project.team}
                </p>
              )}

              {/* Visit site */}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem', display: 'inline-flex', marginBottom: '0.75rem' }}>
                  <FiExternalLink size={13} /> Visit site
                </a>
              )}

              {/* Secondary links — directly below visit site */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }}>
                    <FaGithub size={13} /> GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }}>
                    <FaYoutube size={13} /> Demo
                  </a>
                )}
                {project.prototypeUrl && (
                  <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }}>
                    <FaFigma size={13} /> Prototype
                  </a>
                )}
                {project.wireframeUrl && (
                  <a href={project.wireframeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }}>
                    <FaFigma size={13} /> Wireframe
                  </a>
                )}
              </div>
            </div>

            {/* Right: image viewer */}
            <div>
              <ImageViewer images={project.images} title={project.title} type={project.displayType || project.type} />
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 800px) {
          .pd-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>

      {/* Content */}
      <section style={{ padding: '1rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}
          >

            {/* Narrative: problem → approach → outcome */}
            <div style={{ borderLeft: '2px solid var(--card-border)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <span style={label}>The problem</span>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--foreground)' }}>{project.rationaleProblem}</p>
              </div>
              <div>
                <span style={label}>How I approached it</span>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--muted)' }}>{project.rationaleChallenge}</p>
              </div>
              <div>
                <span style={label}>The result</span>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--foreground)', fontWeight: '500' }}>{project.rationaleSolution}</p>
              </div>
            </div>

            {/* My contribution */}
            {project.contribution && (
              <div style={{ background: 'rgba(220,247,99,0.06)', borderLeft: '3px solid var(--lime)', borderRadius: '0 0.5rem 0.5rem 0', padding: '1rem 1.25rem' }}>
                <span style={label}>My contribution</span>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--foreground)' }}>{project.contribution}</p>
              </div>
            )}

            {/* What it does */}
            <div>
              <span style={label}>What it does</span>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.whatItDoes.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--foreground)' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: '0.6rem' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Under the hood: decisions + challenges combined */}
            {(project.technicalDecisions?.length > 0 || project.challenges?.length > 0) && (
              <div>
                <span style={label}>Under the hood</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {project.technicalDecisions?.map((d) => (
                    <div key={d.choice} style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '1rem' }}>
                      <p style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.2rem', color: 'var(--foreground)' }}>{d.choice}</p>
                      <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{d.reason}</p>
                    </div>
                  ))}
                  {project.challenges?.map((c) => (
                    <div key={c.problem} style={{ borderLeft: '2px solid var(--card-border)', paddingLeft: '1rem' }}>
                      <p style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.2rem', color: 'var(--foreground)' }}>{c.problem}</p>
                      <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{c.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.highlights.map((h) => (
                <span key={h} style={{ background: 'rgba(220,247,99,0.1)', border: '1px solid rgba(220,247,99,0.35)', color: 'var(--foreground)', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '500' }}>
                  {h}
                </span>
              ))}
            </div>

            {/* Bottom CTA */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--card-border)' }}>
              <Link href="/projects" className="btn-outline" style={{ padding: '0.4rem 0.875rem', fontSize: '0.82rem' }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 8H3M7 4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                All projects
              </Link>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}>
                  <FiExternalLink size={13} /> Visit site
                </a>
              )}
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
