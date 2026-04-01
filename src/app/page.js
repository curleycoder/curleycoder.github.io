'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/projects';
import { caseStudies } from '../../data/case-studies';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

// ─── Animation helpers ───────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, y = 24, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const roles = [
  'Full-Stack Developer',
  'UI/UX Thinker',
  'Systems Builder',
  'Problem Solver',
];

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Greeting */}
          <p
            style={{
              color: 'var(--accent)',
              fontWeight: '500',
              fontSize: '1rem',
              marginBottom: '1rem',
              letterSpacing: '0.04em',
            }}
          >
            Hey there —
          </p>

          {/* Name */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: '800',
              lineHeight: 1.1,
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            I&apos;m{' '}
            <span className="gradient-text">Shabnam</span>
          </h1>

          {/* Pronunciation */}
          <p
            style={{
              color: 'var(--muted)',
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
              fontStyle: 'italic',
            }}
          >
            [ʃæb.nǽm] — An Iranian name that means morning dew
          </p>

          {/* Cycling role */}
          <div
            style={{
              height: '2.5rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontWeight: '600',
                color: '#c4c4d4',
                transition: 'opacity 0.35s ease',
                opacity: visible ? 1 : 0,
              }}
            >
              {roles[roleIdx]}
            </span>
          </div>

          {/* Sub-tagline */}
          <p
            style={{
              color: 'var(--muted)',
              fontSize: '1.05rem',
              maxWidth: '520px',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}
          >
            I build thoughtful web experiences — from elegant UIs to the infrastructure behind them.
            Based in Vancouver.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/projects" className="btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <a href="https://github.com/curleycoder" target="_blank" rel="noopener noreferrer" className="btn-outline" aria-label="GitHub">
              <FiGithub size={17} /> GitHub
            </a>

            <a href="https://linkedin.com/in/shabnam-beiraghian" target="_blank" rel="noopener noreferrer" className="btn-outline" aria-label="LinkedIn">
              <FiLinkedin size={17} /> LinkedIn
            </a>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.4rem',
            }}
          >
            <span style={{ color: 'var(--muted)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              SCROLL
            </span>
            <div
              style={{
                width: '1px',
                height: '40px',
                background: 'linear-gradient(to bottom, var(--primary), transparent)',
              }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  return (
    <FadeIn delay={index * 0.1}>
      <Link
        href={`/projects/${project.slug}`}
        style={{ display: 'block', textDecoration: 'none' }}
      >
        <div
          className="card-hover"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--card-border)',
            borderRadius: '1rem',
            padding: '1.75rem',
            height: '100%',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.75rem',
            }}
          >
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--foreground)' }}>
              {project.title}
            </h3>
            <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{project.year}</span>
          </div>

          <p
            style={{
              color: 'var(--muted)',
              fontSize: '0.9rem',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
            }}
          >
            {project.shortDescription}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
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
            View project
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

// ─── Tech Stack ───────────────────────────────────────────────────────────────

const techStack = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js App Router', 'Tailwind CSS v4', 'shadcn/ui', 'Framer Motion', 'Accessibility'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'REST APIs', 'Auth0', 'Supabase · PostgreSQL', 'Drizzle ORM', 'Resend'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Expo', 'Xcode', 'Swift'],
  },
  {
    category: 'Dev',
    items: ['Git · GitHub', 'Vercel · Render', 'AWS S3', 'CI/CD'],
  },
  {
    category: 'Tools',
    items: ['Figma', 'Postman', 'VS Code', 'Jira · Taiga'],
  },
  {
    category: 'Leadership',
    items: ['Agile · Scrum', 'Scrum Master', 'Sprint Planning'],
  },
];

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/meepzeve', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label
            htmlFor="name"
            style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', color: 'var(--muted)' }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--card-border)',
              borderRadius: '0.5rem',
              padding: '0.65rem 1rem',
              color: 'var(--foreground)',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', color: 'var(--muted)' }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--card-border)',
              borderRadius: '0.5rem',
              padding: '0.65rem 1rem',
              color: 'var(--foreground)',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', color: 'var(--muted)' }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you working on?"
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--card-border)',
            borderRadius: '0.5rem',
            padding: '0.65rem 1rem',
            color: 'var(--foreground)',
            fontSize: '0.9rem',
            outline: 'none',
            resize: 'vertical',
            transition: 'border-color 0.2s',
            fontFamily: 'inherit',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className="btn-primary"
        style={{ alignSelf: 'flex-start' }}
      >
        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent!' : 'Send message'}
      </button>

      {status === 'error' && (
        <p style={{ color: '#f87171', fontSize: '0.85rem' }}>
          Something went wrong. Try emailing directly.
        </p>
      )}
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const caseStudy = caseStudies[0];

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Projects */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container">
          <FadeIn>
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              WORK
            </p>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">
              Things I&apos;ve built — solo and shipped.
            </p>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <FadeIn>
            <Link href="/projects" className="btn-outline">
              All projects
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Case Study teaser */}
      <section style={{ padding: '4rem 0', background: 'rgba(109,40,217,0.04)' }}>
        <div className="container">
          <FadeIn>
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              CASE STUDY
            </p>
            <h2 className="section-title">Elika Beauty</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="card-hover"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--card-border)',
                borderRadius: '1rem',
                padding: '2rem',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '2rem',
                alignItems: 'center',
                marginTop: '1.5rem',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                  {caseStudy.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '560px' }}>
                  {caseStudy.tagline}
                </p>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {caseStudy.metrics.map((m) => (
                    <div key={m.label}>
                      <p style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)' }}>
                        {m.value}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{m.sub}</p>
                    </div>
                  ))}
                </div>
                <Link href="/case-studies/elika-beauty" className="btn-primary">
                  Read case study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              <div
                style={{
                  textAlign: 'right',
                  color: 'var(--muted)',
                  fontSize: '0.8rem',
                  whiteSpace: 'nowrap',
                }}
              >
                <p>{caseStudy.role}</p>
                <p style={{ marginTop: '0.25rem' }}>{caseStudy.timeline}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <FadeIn>
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              SKILLS
            </p>
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle">Tools I reach for and trust.</p>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {techStack.map((group, i) => (
              <FadeIn key={group.category} delay={i * 0.07}>
                <div
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
                      marginBottom: '0.875rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {group.category}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {group.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '6rem 0' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                CONTACT
              </p>
              <h2 className="section-title">Let&apos;s talk</h2>
              <p className="section-subtitle">
                Open to full-time roles, freelance, and interesting conversations.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              style={{
                background: 'var(--card)',
                border: '1px solid var(--card-border)',
                borderRadius: '1rem',
                padding: '2.5rem',
                maxWidth: '640px',
                margin: '0 auto',
              }}
            >
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
