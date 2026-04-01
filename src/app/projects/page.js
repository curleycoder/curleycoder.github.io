'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '../../../data/projects';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaYoutube } from 'react-icons/fa';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
        <div
          className="card-hover"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--card-border)',
            borderRadius: '1rem',
            padding: '2rem',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.875rem',
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--foreground)' }}>
              {project.title}
            </h2>
            <span style={{ color: 'var(--muted)', fontSize: '0.8rem', flexShrink: 0, marginLeft: '1rem' }}>
              {project.year}
            </span>
          </div>

          <p
            style={{
              color: 'var(--muted)',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              marginBottom: '1rem',
            }}
          >
            {project.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {project.liveUrl && (
              <span
                onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }}
                style={{ width: '30px', height: '30px', borderRadius: '0.4rem', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', cursor: 'pointer' }}
                title="Live site"
              >
                <FiExternalLink size={13} />
              </span>
            )}
            {project.githubUrl && (
              <span
                onClick={(e) => { e.preventDefault(); window.open(project.githubUrl, '_blank'); }}
                style={{ width: '30px', height: '30px', borderRadius: '0.4rem', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', cursor: 'pointer' }}
                title="GitHub"
              >
                <FaGithub size={14} />
              </span>
            )}
            {project.demoUrl && (
              <span
                onClick={(e) => { e.preventDefault(); window.open(project.demoUrl, '_blank'); }}
                style={{ width: '30px', height: '30px', borderRadius: '0.4rem', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', cursor: 'pointer' }}
                title="Demo"
              >
                <FaYoutube size={14} />
              </span>
            )}
            <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: '500' }}>
              View details →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
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
              WORK
            </p>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.75rem' }}>
              Projects
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: '480px' }}>
              A collection of things I&apos;ve shipped — from solo MVPs to production apps used by real clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '0 0 6rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
