'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsShowcase() {
  const [activeType, setActiveType]       = useState('all');
  const [activeSlug, setActiveSlug]       = useState(projects[0].slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeType === 'all') return projects;
    return projects.filter((p) => p.type === activeType);
  }, [activeType]);

  const activeProject =
    filteredProjects.find((p) => p.slug === activeSlug) ||
    filteredProjects[0] ||
    projects[0];

  const isMobileProject = activeProject.type === 'mobile';

  // Web project images
  const desktopImage =
    activeProject.images?.[activeImageIndex]?.src ||
    activeProject.images?.[0]?.src;
  const cornerPhoneImage =
    activeProject.images?.[activeImageIndex + 1]?.src ||
    activeProject.images?.[1]?.src ||
    activeProject.images?.[0]?.src;

  // Mobile project images — two phones side by side
  const phoneImage1 = activeProject.images?.[activeImageIndex]?.src;
  const phoneImage2 =
    activeProject.images?.[activeImageIndex + 1]?.src ||
    activeProject.images?.[0]?.src;

  const liveUrlDisplay = activeProject.liveUrl
    ? activeProject.liveUrl
        .replace('https://', '')
        .replace('http://', '')
        .replace(/\/$/, '')
    : activeProject.title;

  function handleFilter(type) {
    const next =
      type === 'all' ? projects : projects.filter((p) => p.type === type);
    setActiveType(type);
    setActiveSlug(next[0]?.slug || projects[0].slug);
    setActiveImageIndex(0);
  }

  return (
    <section className="projects-showcase">
      <div className="container">

        {/* ── Header ──────────────────────────────────────────── */}
        <header className="projects-showcase-header">
          <p className="projects-eyebrow">Selected Work</p>

          <div className="projects-header-grid">
            <div>
              <h2 className="section-title">Projects with real product thinking.</h2>
              <p className="section-subtitle">
                Web and mobile products built with clean UI, practical engineering,
                and business-focused decision making.
              </p>
            </div>

            <div className="project-filters" aria-label="Project filters">
              {['all', 'web', 'mobile'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleFilter(type)}
                  className={activeType === type ? 'active' : ''}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* ── Layout ──────────────────────────────────────────── */}
        <div className="projects-showcase-layout">

          {/* Project list sidebar */}
          <aside className="project-list" aria-label="Project list">
            {filteredProjects.map((project) => (
              <button
                key={project.slug}
                type="button"
                className={`project-list-card ${
                  activeProject.slug === project.slug ? 'selected' : ''
                }`}
                onClick={() => {
                  setActiveSlug(project.slug);
                  setActiveImageIndex(0);
                }}
              >
                <span className="project-list-meta">
                  <span>{project.year}</span>
                  <span className={`project-type-badge project-type-badge--${project.type}`}>
                    {project.type}
                  </span>
                </span>
                <strong>{project.title}</strong>
                <span>{project.shortDescription}</span>
              </button>
            ))}
          </aside>

          {/* Feature panel */}
          <article className="project-feature">

            {/* ── Visual preview ────────────────────────────── */}
            <div
              className={`project-preview${
                isMobileProject ? ' project-preview--mobile' : ''
              }`}
            >
              {isMobileProject ? (
                /* Mobile project: two staggered phone mocks */
                <div className="phone-duo-wrap">
                  <div className="phone-duo-primary">
                    <div className="phone-notch" />
                    {phoneImage1 ? (
                      <img
                        src={phoneImage1}
                        alt={`${activeProject.title} screen 1`}
                      />
                    ) : (
                      <div className="empty-preview">
                        <span>{activeProject.title}</span>
                        <span>Mobile App</span>
                      </div>
                    )}
                  </div>

                  {activeProject.images?.length > 1 && (
                    <div className="phone-duo-secondary">
                      <div className="phone-notch" />
                      {phoneImage2 && (
                        <img
                          src={phoneImage2}
                          alt={`${activeProject.title} screen 2`}
                        />
                      )}
                    </div>
                  )}
                </div>
              ) : (
                /* Web project: browser mock + small phone in corner */
                <>
                  <div className="desktop-preview">
                    <div className="browser-bar">
                      <span />
                      <span />
                      <span />
                      <span className="browser-url">{liveUrlDisplay}</span>
                    </div>
                    {desktopImage ? (
                      <img
                        src={desktopImage}
                        alt={`${activeProject.title} desktop screen`}
                      />
                    ) : (
                      <div className="empty-preview">
                        <span>{activeProject.title}</span>
                        <span>Web App</span>
                      </div>
                    )}
                  </div>

                  <div className="mobile-preview">
                    <div className="phone-notch" />
                    {cornerPhoneImage && (
                      <img
                        src={cornerPhoneImage}
                        alt={`${activeProject.title} mobile screen`}
                      />
                    )}
                  </div>
                </>
              )}
            </div>

            {/* ── Details panel ─────────────────────────────── */}
            <div className="project-details">

              <div className="project-title-row">
                <div>
                  <p className="project-kind">{activeProject.type} project</p>
                  <h3>{activeProject.title}</h3>
                </div>
                <span aria-label={`Year: ${activeProject.year}`}>
                  {activeProject.year}
                </span>
              </div>

              <p className="project-description">{activeProject.description}</p>

              <div className="project-info-grid">
                <div>
                  <small>Role</small>
                  <strong>{activeProject.myRole}</strong>
                </div>
                <div>
                  <small>Team</small>
                  <strong>{activeProject.team}</strong>
                </div>
              </div>

              {/* Tech stack */}
              <div className="project-tags">
                {activeProject.tags.slice(0, 8).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* Key wins */}
              {activeProject.highlights?.length > 0 && (
                <div className="project-wins">
                  <h4>Key achievements</h4>
                  <ul>
                    {activeProject.highlights.slice(0, 5).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Image switcher dots */}
              {activeProject.images?.length > 1 && (
                <div className="project-image-dots">
                  {activeProject.images.map((img, i) => (
                    <button
                      key={`${img.src}-${i}`}
                      type="button"
                      className={activeImageIndex === i ? 'active' : ''}
                      onClick={() => setActiveImageIndex(i)}
                      aria-label={`Show screen ${i + 1}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}

              {/* CTA links */}
              <div className="project-links">
                {activeProject.liveUrl && (
                  <a href={activeProject.liveUrl} target="_blank" rel="noreferrer">
                    View Live
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a href={activeProject.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {activeProject.demoUrl && (
                  <a href={activeProject.demoUrl} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
                {activeProject.prototypeUrl && (
                  <a href={activeProject.prototypeUrl} target="_blank" rel="noreferrer">
                    Prototype
                  </a>
                )}
                {activeProject.wireframeUrl && (
                  <a href={activeProject.wireframeUrl} target="_blank" rel="noreferrer">
                    Wireframe
                  </a>
                )}
                <Link
                  href={activeProject.caseStudySlug
                    ? `/case-studies/${activeProject.caseStudySlug}`
                    : `/projects/${activeProject.slug}`}
                  className="project-link-case-study"
                >
                  Case Study →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
