'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaYoutube, FaFigma } from 'react-icons/fa';

function ImageViewer({ images, title, type }) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) return null;

  const current = images[active];
  const src = typeof current === 'string' ? current : current.src;
  const caption = typeof current === 'string' ? null : current.caption;

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  const isMobile = type === 'mobile';

  const arrows = images.length > 1 && (
    <>
      <button onClick={prev} style={{ position: 'absolute', left: isMobile ? '-2.5rem' : '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'var(--arrow-bg)', border: '1px solid var(--card-border)', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', color: 'var(--arrow-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)', flexShrink: 0 }}>
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4L6 8l4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <button onClick={next} style={{ position: 'absolute', right: isMobile ? '-2.5rem' : '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'var(--arrow-bg)', border: '1px solid var(--card-border)', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', color: 'var(--arrow-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)', flexShrink: 0 }}>
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: isMobile ? 'center' : 'stretch' }}>

      {/* Frame */}
      {isMobile ? (
        /* Phone frame */
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div
            style={{
              width: '240px',
              borderRadius: '2.6rem',
              border: '6px solid #2a2a45',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,0.5)',
              overflow: 'hidden',
              lineHeight: 0,
            }}
          >
            <img
              src={src}
              alt={caption || `${title} screenshot ${active + 1}`}
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
          {arrows}
        </div>
      ) : (
        /* Browser frame */
        <div style={{ borderRadius: '0.875rem', overflow: 'hidden', border: '1px solid var(--card-border)', background: 'var(--card)', position: 'relative' }}>
          <div style={{ background: '#1a1a2e', borderBottom: '1px solid var(--card-border)', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28ca41', display: 'block' }} />
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '0.35rem', padding: '0.2rem 0.75rem', fontSize: '0.72rem', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {title.toLowerCase().replace(/\s+/g, '')}
            </div>
          </div>
          <div style={{ position: 'relative', lineHeight: 0 }}>
            <img src={src} alt={caption || `${title} screenshot ${active + 1}`} style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '220px', objectFit: 'cover' }} />
            {arrows}
          </div>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.5, textAlign: isMobile ? 'center' : 'left' }}>{caption}</p>
      )}

      {/* Thumbnails */}
      {images.length > 1 && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.1em', fontFamily: "'JetBrains Mono', monospace" }}>GALLERY</span>
            <span style={{ color: 'var(--muted)', fontSize: '0.7rem', fontFamily: "'JetBrains Mono', monospace" }}>{active + 1}/{images.length}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
            {images.map((img, i) => {
              const thumbSrc = typeof img === 'string' ? img : img.src;
              return (
                <button key={i} onClick={() => setActive(i)} style={{ flexShrink: 0, padding: 0, background: 'none', border: 'none', cursor: 'pointer', borderRadius: '0.4rem', overflow: 'hidden', outline: i === active ? '2px solid var(--primary)' : '2px solid transparent', outlineOffset: '2px', transition: 'outline 0.15s' }}>
                  <img src={thumbSrc} alt={`thumbnail ${i + 1}`} style={{ width: isMobile ? '48px' : '72px', height: isMobile ? '80px' : '48px', objectFit: 'cover', display: 'block' }} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

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
      <section style={{ padding: '0 0 1.5rem' }}>
        <div className="container">
          <Link
            href="/projects"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              color: 'var(--muted)', fontSize: '0.82rem', marginBottom: '1.5rem',
              transition: 'color 0.15s', textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 8H3M7 4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All projects
          </Link>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ paddingTop: '1rem' }}
            >
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1rem', display: 'block' }}>
                {project.year}
              </span>

              <h1
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: '800',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  marginBottom: '1.25rem',
                }}
              >
                {project.title}
              </h1>

              <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Role / team — above buttons */}
              {project.myRole && (
                <p style={{ color: 'var(--muted)', fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace", marginBottom: '1rem' }}>
                  {project.myRole} · {project.team}
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
            </motion.div>

            {/* Right: image viewer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ImageViewer images={project.images} title={project.title} type={project.type} />
            </motion.div>
          </div>
        </div>
      </section>

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
              <div style={{ background: 'rgba(109,40,217,0.06)', borderLeft: '3px solid var(--primary)', borderRadius: '0 0.5rem 0.5rem 0', padding: '1rem 1.25rem' }}>
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
                <span key={h} style={{ background: 'rgba(109,40,217,0.1)', border: '1px solid rgba(109,40,217,0.25)', color: 'var(--accent)', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '500' }}>
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
