'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '@/data/projects';

const ACCENT = '#7B40E0';

function ArrowBtn({ onClick, disabled, dir }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'left' ? 'Previous image' : 'Next image'}
      style={{
        width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: disabled ? 'transparent' : 'var(--background)',
        border: `1.5px solid ${disabled ? 'transparent' : 'var(--card-border)'}`,
        color: disabled ? 'transparent' : 'var(--foreground)',
        cursor: disabled ? 'default' : 'pointer',
        transition: 'border-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => { if (!disabled) { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; } }}
      onMouseLeave={e => { if (!disabled) { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--foreground)'; } }}
    >
      {dir === 'left' ? <FiArrowLeft size={14} /> : <FiArrowRight size={14} />}
    </button>
  );
}

export default function ProjectsShowcase() {
  const [activeType, setActiveType]             = useState('all');
  const [activeSlug, setActiveSlug]             = useState(projects[0].slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeType === 'all') return projects;
    return projects.filter((p) => p.type === activeType);
  }, [activeType]);

  const activeProject =
    filteredProjects.find((p) => p.slug === activeSlug) ||
    filteredProjects[0] ||
    projects[0];

  const isMobile     = (activeProject.displayType || activeProject.type) === 'mobile';
  const images       = activeProject.images || [];
  const currentImage = images[activeImageIndex];
  const hasPrev      = activeImageIndex > 0;
  const hasNext      = activeImageIndex < images.length - 1;

  function handleFilter(type) {
    const next = type === 'all' ? projects : projects.filter((p) => p.type === type);
    setActiveType(type);
    setActiveSlug(next[0]?.slug || projects[0].slug);
    setActiveImageIndex(0);
  }

  function handleSelect(slug) {
    setActiveSlug(slug);
    setActiveImageIndex(0);
  }

  function goPrev() { if (hasPrev) setActiveImageIndex(i => i - 1); }
  function goNext() { if (hasNext) setActiveImageIndex(i => i + 1); }

  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--background)',
      color: 'var(--foreground)',
      paddingTop: '8rem',
      paddingBottom: '6rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 max(2rem, 4vw)' }}>

        {/* ── Header ── */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '4rem', gap: '1.5rem', flexWrap: 'wrap',
        }}>
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
              letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT,
              margin: '0 0 0.6rem',
            }}>
              Selected Work
            </p>
            <h1 style={{
              fontFamily: "'JetBrains Mono', monospace", fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1,
              letterSpacing: '-0.03em', textTransform: 'uppercase', margin: 0,
            }}>
              Projects
            </h1>
          </div>

          <div style={{
            display: 'flex', border: '1px solid var(--card-border)',
            borderRadius: '4px', overflow: 'hidden',
          }}>
            {['all', 'web', 'mobile'].map((type, i) => (
              <button
                key={type}
                onClick={() => handleFilter(type)}
                style={{
                  padding: '0.45rem 1rem',
                  background: activeType === type ? ACCENT : 'transparent',
                  color: activeType === type ? '#fff' : 'var(--muted)',
                  border: 'none',
                  borderRight: i < 2 ? '1px solid var(--card-border)' : 'none',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'background 0.2s, color 0.2s',
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* ── Body ── */}
        <div className="ps-layout">

          {/* ── Sidebar ── */}
          <nav style={{ borderTop: '1px solid var(--card-border)' }}>
            {filteredProjects.map((project) => {
              const isActive = activeProject.slug === project.slug;
              return (
                <button
                  key={project.slug}
                  onClick={() => handleSelect(project.slug)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '0.9rem 0 0.9rem 0.85rem',
                    background: 'none', border: 'none',
                    borderBottom: '1px solid var(--card-border)',
                    borderLeft: `2px solid ${isActive ? ACCENT : 'transparent'}`,
                    cursor: 'pointer', transition: 'border-left-color 0.2s',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.borderLeftColor = 'var(--card-border)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.borderLeftColor = 'transparent'; }}
                >
                  <span style={{
                    display: 'block', fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    color: isActive ? ACCENT : 'var(--foreground)',
                    marginBottom: '0.2rem', transition: 'color 0.2s',
                  }}>
                    {project.title}
                  </span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
                    letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase',
                  }}>
                    {project.year} · {project.type}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* ── Main panel ── */}
          <article>

            {/* ── Image with arrow navigation ── */}
            {isMobile ? (
              /* Mobile: portrait image with arrows on either side */
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', justifyContent: 'center' }}>
                <ArrowBtn onClick={goPrev} disabled={!hasPrev} dir="left" />
                <div style={{ borderRadius: '38px', overflow: 'hidden', border: '1px solid var(--card-border)', flexShrink: 0 }}>
                  {currentImage ? (
                    <img
                      src={currentImage.src}
                      alt={currentImage.caption || activeProject.title}
                      style={{ height: '480px', width: 'auto', display: 'block', maxWidth: '260px', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ height: '480px', width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--card)' }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>{activeProject.title}</span>
                    </div>
                  )}
                </div>
                <ArrowBtn onClick={goNext} disabled={!hasNext} dir="right" />
              </div>
            ) : (
              /* Web: full-width landscape image with overlaid arrows */
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--card-border)', background: 'var(--card)' }}>
                  {currentImage ? (
                    <img
                      src={currentImage.src}
                      alt={currentImage.caption || activeProject.title}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  ) : (
                    <div style={{ height: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{activeProject.title}</span>
                    </div>
                  )}
                </div>
                {images.length > 1 && (
                  <>
                    <div style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                      <ArrowBtn onClick={goPrev} disabled={!hasPrev} dir="left" />
                    </div>
                    <div style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                      <ArrowBtn onClick={goNext} disabled={!hasNext} dir="right" />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Caption + counter */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '1rem', marginBottom: '2rem', minHeight: '1.4rem',
            }}>
              <span style={{
                fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.82rem',
                color: 'var(--muted)', fontStyle: 'italic',
              }}>
                {currentImage?.caption || ''}
              </span>
              {images.length > 1 && (
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
                  letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase',
                  flexShrink: 0,
                }}>
                  {activeImageIndex + 1} / {images.length}
                </span>
              )}
            </div>

            {/* Title + year */}
            <div style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              gap: '1rem', marginBottom: '0.4rem', flexWrap: 'wrap',
            }}>
              <h2 style={{
                fontFamily: "'JetBrains Mono', monospace", fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1,
                letterSpacing: '-0.03em', textTransform: 'uppercase', margin: 0,
              }}>
                {activeProject.title}
              </h2>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
                letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase',
              }}>
                {activeProject.year}
              </span>
            </div>

            <p style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem',
              letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase',
              margin: '0 0 1.25rem',
            }}>
              {activeProject.myRole} · {activeProject.team}
            </p>

            <p style={{
              fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1rem',
              color: 'var(--dark-text)', lineHeight: 1.75, margin: '0 0 1.5rem',
              maxWidth: '640px',
            }}>
              {activeProject.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.75rem' }}>
              {activeProject.tags.slice(0, 8).map((tag) => (
                <span key={tag} style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '0.2rem 0.55rem',
                  border: '1px solid var(--card-border)', borderRadius: '3px',
                  color: 'var(--muted)',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Highlights */}
            {activeProject.highlights?.length > 0 && (
              <div style={{
                borderTop: '1px solid var(--card-border)',
                paddingTop: '1.25rem', marginBottom: '1.75rem',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.45rem 1.5rem' }}>
                  {activeProject.highlights.slice(0, 6).map((h) => (
                    <span key={h} style={{
                      fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem',
                      color: 'var(--dark-text)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem',
                    }}>
                      <span style={{ color: ACCENT, marginTop: '1px', flexShrink: 0 }}>↗</span>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.55rem 1.1rem', background: ACCENT, color: '#fff',
                    border: `1.5px solid ${ACCENT}`, borderRadius: '4px',
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
                    textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#6230C0'; e.currentTarget.style.borderColor = '#6230C0'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.borderColor = ACCENT; }}
                >
                  Live <FiExternalLink size={11} />
                </a>
              )}
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.55rem 1rem', background: 'transparent',
                    color: 'var(--foreground)', border: '1.5px solid var(--card-border)',
                    borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem', textDecoration: 'none', letterSpacing: '0.06em',
                    textTransform: 'uppercase', transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--foreground)'; }}
                >
                  <FiGithub size={11} /> GitHub
                </a>
              )}
              {activeProject.demoUrl && (
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.55rem 1rem', background: 'transparent',
                    color: 'var(--foreground)', border: '1.5px solid var(--card-border)',
                    borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem', textDecoration: 'none', letterSpacing: '0.06em',
                    textTransform: 'uppercase', transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--foreground)'; }}
                >
                  Demo <FiExternalLink size={11} />
                </a>
              )}
              <Link
                href={
                  activeProject.caseStudySlug
                    ? `/case-studies/${activeProject.caseStudySlug}`
                    : `/projects/${activeProject.slug}`
                }
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.55rem 1rem', background: 'transparent',
                  color: 'var(--foreground)', border: '1.5px solid var(--card-border)',
                  borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem', textDecoration: 'none', letterSpacing: '0.06em',
                  textTransform: 'uppercase', transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--foreground)'; }}
              >
                Case Study <FiArrowRight size={11} />
              </Link>
            </div>

          </article>
        </div>
      </div>

      <style jsx>{`
        .ps-layout {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        @media (max-width: 800px) {
          .ps-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
