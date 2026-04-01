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
      <button onClick={prev} style={{ position: 'absolute', left: isMobile ? '-2.5rem' : '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(15,15,26,0.75)', border: '1px solid var(--card-border)', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)', flexShrink: 0 }}>
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4L6 8l4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <button onClick={next} style={{ position: 'absolute', right: isMobile ? '-2.5rem' : '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(15,15,26,0.75)', border: '1px solid var(--card-border)', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)', flexShrink: 0 }}>
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
            <img src={src} alt={caption || `${title} screenshot ${active + 1}`} style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '400px', objectFit: 'cover' }} />
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

export default function ProjectDetail({ project }) {
  return (
    <div style={{ paddingTop: '64px' }}>

      {/* Hero: two-column */}
      <section style={{ padding: '0.5rem 0 3rem' }}>
        <div className="container">
          <Link
            href="/projects"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '2.5rem',
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
              style={{ paddingTop: '4rem' }}
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

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <FiExternalLink size={14} /> Visit site
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FaGithub size={15} /> GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FaYoutube size={15} /> Demo
                  </a>
                )}
                {project.prototypeUrl && (
                  <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FaFigma size={14} /> Prototype
                  </a>
                )}
                {project.wireframeUrl && (
                  <a href={project.wireframeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FaFigma size={14} /> Wireframe
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

      {/* Rationale */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2
              style={{
                fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.5rem',
                paddingBottom: '0.75rem', borderBottom: '1px solid var(--card-border)',
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
                    background: 'var(--card)', border: '1px solid var(--card-border)',
                    borderRadius: '0.875rem', padding: '1.5rem',
                  }}
                >
                  <p style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.625rem' }}>
                    {block.label}
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>{block.content}</p>
                </div>
              ))}
            </div>

            <h2
              style={{
                fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.25rem',
                paddingBottom: '0.75rem', borderBottom: '1px solid var(--card-border)',
              }}
            >
              What it does
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '3rem' }}>
              {project.whatItDoes.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: '0.55rem' }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2
              style={{
                fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.25rem',
                paddingBottom: '0.75rem', borderBottom: '1px solid var(--card-border)',
              }}
            >
              Highlights
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '4rem' }}>
              {project.highlights.map((h) => (
                <span
                  key={h}
                  style={{
                    background: 'rgba(109,40,217,0.12)', border: '1px solid rgba(109,40,217,0.3)',
                    color: '#c4b5fd', padding: '0.45rem 1rem', borderRadius: '9999px',
                    fontSize: '0.85rem', fontWeight: '500',
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
