'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FiArrowRight, FiMoon, FiSun, FiCheck,
  FiGithub, FiLinkedin, FiCode, FiZap, FiDatabase, FiCpu,
} from 'react-icons/fi';

const ACCENT = '#435058';
const LIME   = 'var(--lime)';

function useC() {
  return {
    bg:     'var(--background)',
    fg:     'var(--foreground)',
    muted:  'var(--muted)',
    sub:    'var(--dark-text)',
    border: 'var(--card-border)',
    card:   'var(--card)',
  };
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────────────
const TICKER = ['React', 'Next.js', 'Node.js', 'TypeScript', 'AI Chatbots', 'Accessibility', 'UX Design', 'Supabase', 'REST APIs', 'React Native', 'Python', 'Full-Stack Dev'];

function Marquee() {
  const c = useC();
  return (
    <div style={{ overflow: 'hidden', borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '0.85rem 0', transition: 'border-color 0.5s ease' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'tickerMove 28s linear infinite' }}>
        {[0, 1].map(copy => (
          <span key={copy} style={{ display: 'flex', alignItems: 'center', gap: '0', whiteSpace: 'nowrap' }}>
            {TICKER.map((item, i) => (
              <span key={i} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: c.muted, transition: 'color 0.5s ease' }}>
                {item}<span style={{ color: LIME, margin: '0 1.5rem', fontWeight: 700 }}>·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Typewriter Role ───────────────────────────────────────────────────────────
const ROLES = ['Full-Stack Developer', 'AI Integrator', 'Frontend Engineer', 'Data Scientist'];

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setCursorOn(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const atEnd = !isDeleting && text.length === current.length;
    const delay = atEnd ? 1700 : isDeleting ? 45 : 90;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < current.length) setText(current.slice(0, text.length + 1));
        else setIsDeleting(true);
      } else {
        if (text.length > 0) setText(current.slice(0, text.length - 1));
        else { setIsDeleting(false); setRoleIdx(i => (i + 1) % ROLES.length); }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIdx]);

  return (
    <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {text}
      <span style={{ color: LIME, opacity: cursorOn ? 1 : 0, fontWeight: 700, transition: 'opacity 0.05s' }}>|</span>
    </span>
  );
}

// ─── Terminal Card ─────────────────────────────────────────────────────────────
const CODE_LINES = [
  [{ t: 'const ',      c: '#89b4fa' }, { t: 'dev',              c: '#cba6f7' }, { t: ' = {',   c: 'var(--muted)' }],
  [{ t: '  name',      c: 'var(--foreground)' }, { t: ': ',    c: 'var(--muted)' }, { t: '"Shabnam Beiraghian"', c: '#dcf763' }, { t: ',', c: 'var(--muted)' }],
  [{ t: '  role',      c: 'var(--foreground)' }, { t: ': ',    c: 'var(--muted)' }, { t: '"Full-Stack + AI"',    c: '#dcf763' }, { t: ',', c: 'var(--muted)' }],
  [{ t: '  stack',     c: 'var(--foreground)' }, { t: ': [',   c: 'var(--muted)' }],
  [{ t: '    ',        c: 'var(--foreground)' }, { t: '"React"',      c: '#a6e3a1' }, { t: ', ', c: 'var(--muted)' }, { t: '"Next.js"',  c: '#a6e3a1' }, { t: ', ', c: 'var(--muted)' }, { t: '"Node"',      c: '#a6e3a1' }, { t: ',', c: 'var(--muted)' }],
  [{ t: '    ',        c: 'var(--foreground)' }, { t: '"TypeScript"', c: '#a6e3a1' }, { t: ', ', c: 'var(--muted)' }, { t: '"Supabase"', c: '#a6e3a1' }, { t: ',', c: 'var(--muted)' }],
  [{ t: '  ],',        c: 'var(--muted)' }],
  [{ t: '  ai',        c: 'var(--foreground)' }, { t: ': [',   c: 'var(--muted)' }, { t: '"Groq"',   c: '#89dceb' }, { t: ', ', c: 'var(--muted)' }, { t: '"Gemini"', c: '#89dceb' }, { t: ', ', c: 'var(--muted)' }, { t: '"OpenAI"', c: '#89dceb' }, { t: '],', c: 'var(--muted)' }],
  [{ t: '  shipped',   c: 'var(--foreground)' }, { t: ': ',    c: 'var(--muted)' }, { t: '5',         c: '#fab387' }, { t: ',  ', c: 'var(--muted)' }, { t: '// production projects', c: '#6c7086' }],
  [{ t: '  location',  c: 'var(--foreground)' }, { t: ': ',    c: 'var(--muted)' }, { t: '"Vancouver, BC"',      c: '#dcf763' }, { t: ',', c: 'var(--muted)' }],
  [{ t: '  status',    c: 'var(--foreground)' }, { t: ': ',    c: 'var(--muted)' }, { t: '"open to work"',       c: '#a6e3a1' }, { t: ',', c: 'var(--muted)' }],
  [{ t: '}',           c: 'var(--muted)' }],
];

function TerminalCard() {
  const c = useC();
  const [visible, setVisible] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setCursorOn(b => !b), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    // Start after the parent motion.div finishes fading in (0.45s delay + 0.85s duration)
    const start = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setVisible(i);
        if (i >= CODE_LINES.length) clearInterval(interval);
      }, 95);
      return () => clearInterval(interval);
    }, 650);
    return () => clearTimeout(start);
  }, []);

  return (
    <div
      style={{
        borderRadius: '14px',
        overflow: 'hidden',
        border: `1px solid ${c.border}`,
        boxShadow: '0 24px 80px rgba(67,80,88,0.12), 0 4px 20px rgba(67,80,88,0.06)',
        transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
      }}
    >
      {/* Title bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1rem', background: ACCENT }}>
        {['#ff5f57', '#febc2e', '#28c840'].map(bg => (
          <div key={bg} style={{ width: '11px', height: '11px', borderRadius: '50%', background: bg, flexShrink: 0 }} />
        ))}
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(241,242,238,0.5)', marginLeft: '0.45rem', letterSpacing: '0.04em', flex: 1 }}>
          ~/portfolio/shabnam.js
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#28c840' }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.58rem', color: '#28c840', letterSpacing: '0.04em' }}>live</span>
        </div>
      </div>

      {/* Code area */}
      <div style={{ display: 'flex', background: '#1a1b26' }}>
        {/* Line numbers */}
        <div style={{ padding: '1rem 0.65rem 1rem 0.9rem', borderRight: '1px solid rgba(255,255,255,0.07)', minWidth: '2.6rem', userSelect: 'none' }}>
          {CODE_LINES.map((_, i) => (
            <div key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', lineHeight: 1.9, color: i < visible ? '#585b70' : 'transparent', textAlign: 'right' }}>
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code */}
        <div style={{ padding: '1rem 1.1rem', flex: 1, overflowX: 'auto' }}>
          {CODE_LINES.map((line, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.73rem',
                lineHeight: 1.9,
                opacity: i < visible ? 1 : 0,
                transition: i < visible ? 'opacity 0.18s ease' : 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {line.map((part, j) => (
                <span key={j} style={{ color: part.c }}>{part.t}</span>
              ))}
              {i === visible - 1 && visible < CODE_LINES.length && (
                <span style={{ color: LIME, opacity: cursorOn ? 1 : 0 }}>_</span>
              )}
            </div>
          ))}
          {visible >= CODE_LINES.length && (
            <div style={{ height: '1.9em', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.73rem', color: LIME, opacity: cursorOn ? 1 : 0 }}>_</span>
            </div>
          )}
        </div>
      </div>

      {/* Status bar */}
      <div style={{ padding: '0.38rem 1rem', background: ACCENT, borderTop: `1px solid ${c.border}`, display: 'flex', gap: '1.5rem', transition: 'background 0.5s ease, border-color 0.5s ease' }}>
        {['JS', 'Node 20', 'UTF-8', 'Prettier'].map(s => (
          <span key={s} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.58rem', color: c.muted, letterSpacing: '0.04em' }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────────
function HeroSection() {
  const c = useC();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh', width: '100%', background: c.bg, color: c.fg,
        display: 'flex', flexDirection: 'column',
        transition: 'background 0.5s ease, color 0.5s ease',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'radial-gradient(circle, var(--card-border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.65,
        }}
      />
      {/* Lime radial orb — top right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '-12%', right: '-6%',
          width: '42vw', height: '42vw', maxWidth: '580px', maxHeight: '580px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,247,99,0.1) 0%, transparent 68%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* 2-column content */}
      <div
        className="hero-inner-grid"
        style={{
          flex: 1, position: 'relative', zIndex: 1,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
          padding: '7rem max(2rem, 5vw) 2.5rem',
          maxWidth: '1200px', margin: '0 auto', width: '100%',
          alignItems: 'center',
        }}
      >
        {/* ── Left: Text ── */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 1.25rem', color: LIME }}
          >
            // Full-Stack · AI · Frontend
          </motion.p>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '104%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.03em', margin: 0, transition: 'color 0.5s ease' }}
            >
              Shabnam
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '1.1rem' }}>
            <motion.h1
              initial={{ y: '104%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.03em', margin: 0 }}
            >
              <span style={{ borderBottom: `4px solid ${LIME}`, paddingBottom: '0.04em' }}>Beiraghian</span>
            </motion.h1>
          </div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)', color: c.muted, marginBottom: '1.5rem', minHeight: '1.7em', transition: 'color 0.5s ease' }}
          >
            <TypewriterRole />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1rem', color: c.fg, lineHeight: 1.7, margin: 0, transition: 'color 0.5s ease' }}>
                Building accessible web applications and AI tools that solve real business problems.
              </p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.88rem', color: c.sub, lineHeight: 1.65, margin: 0, transition: 'color 0.5s ease' }}>
                Recent work includes a production booking platform, an AI front-desk assistant, and frontend systems for real users.
              </p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem', color: c.fg, margin: 0, transition: 'color 0.5s ease' }}>
                Vancouver, BC · Open to frontend and full-stack roles
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.6rem', background: ACCENT, color: '#f1f2ee', border: `2px solid ${ACCENT}`, borderRadius: '6px', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = LIME; e.currentTarget.style.borderColor = LIME; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = '#f1f2ee'; }}
              >
                View selected work <FiArrowRight size={13} />
              </a>
              <Link
                href="/resume"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: c.sub, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = c.fg; }}
                onMouseLeave={e => { e.currentTarget.style.color = c.sub; }}
              >
                Resume <FiArrowRight size={12} />
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { href: 'https://github.com/curleycoder', label: 'GitHub', icon: <FiGithub size={15} /> },
                { href: 'https://linkedin.com/in/shabnam-beiraghian', label: 'LinkedIn', icon: <FiLinkedin size={15} /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', border: `1.5px solid ${c.border}`, borderRadius: '8px', color: c.sub, textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.background = LIME; e.currentTarget.style.color = ACCENT; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = c.sub; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right: Terminal card ── */}
        <motion.div
          className="hero-terminal"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <TerminalCard />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.6 }}>
        <Marquee />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={scrolled ? { duration: 0.3 } : { delay: 1.1, duration: 0.6 }}
        style={{ position: 'fixed', bottom: '4rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', cursor: 'default', zIndex: 50, pointerEvents: 'none' }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--muted), transparent)' }}
        />
      </motion.div>
    </section>
  );
}

// ─── 3. PROJECT EXPLORER ──────────────────────────────────────────────────────
const PROJECTS = [
  {
    name: 'Elika Beauty',
    type: 'Booking Platform',
    outcome: 'Production booking system running daily operations for a Vancouver beauty business.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Nodemailer'],
    challenge: 'Prevent booking conflicts while keeping the flow simple for both clients and staff.',
    decision: 'Built duration-aware service booking with conflict detection and service incompatibility rules, plus automated confirmation emails on every booking.',
    link: '/case-studies/elika-beauty',
    linkLabel: 'Read case study',
  },
  {
    name: 'DEW AI Assistant',
    type: 'AI Business Tool',
    outcome: 'Embeddable AI front-desk assistant that handles FAQs, qualifies leads, and routes bookings for service businesses.',
    stack: ['React', 'OpenAI API', 'Node.js', 'Prompt Design'],
    challenge: 'Reduce repetitive customer messages without making the experience feel robotic or generic.',
    decision: 'Designed structured intent flows with business-specific answer layers and human escalation paths for edge cases the AI cannot resolve.',
    link: '/projects',
    linkLabel: 'View project',
  },
  {
    name: 'Forge',
    type: 'Mobile Career App · Team of 4',
    outcome: 'Trade career guidance app with AI-powered pathway recommendations, shipped in a team sprint.',
    stack: ['React Native', 'Hono', 'Bun', 'Redis', 'Google GenAI'],
    challenge: 'Translate Figma specs into engineering requirements and coordinate four developers across concurrent features without blocking each other.',
    decision: 'Led as Technical Manager — owned AI recommendation screen end-to-end, introduced Redis caching for mobile performance, and set a branching strategy that kept the team unblocked.',
    link: '/projects',
    linkLabel: 'View project',
  },
  {
    name: 'LendItOut',
    type: 'P2P Lending Platform · Team of 4',
    outcome: 'Peer-to-peer item lending platform with real-time chat, notifications, and a full booking flow.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
    challenge: 'Coordinate four developers on overlapping features without merge conflicts derailing the sprint.',
    decision: 'Introduced a feature-branch strategy mid-project that eliminated conflicts and gave the team a professional workflow for shared codebases.',
    link: '/projects',
    linkLabel: 'View project',
  },
];

function ProjectExplorer() {
  const c = useC();
  const [selected, setSelected] = useState(0);
  const project = PROJECTS[selected];
  const detailRef = useRef(null);

  const handleSelect = (index) => {
    setSelected(index);
    if (typeof window !== 'undefined' && window.innerWidth <= 760) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  };

  return (
    <section id="projects" style={{ padding: '5rem max(2rem, 7vw)', background: c.card, color: c.fg, transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeIn>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem', color: LIME }}>// selected work</p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 2.5rem', transition: 'color 0.5s ease' }}>
            Built for<br /><span style={{ color: '#A0C20A' }}>real users.</span>
          </h2>
        </FadeIn>

        <div className="project-layout" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Sidebar list */}
          <div style={{ display: 'flex', flexDirection: 'column', position: 'sticky', top: '5rem' }}>
            {PROJECTS.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleSelect(index)}
                style={{
                  position: 'relative',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.85rem 1rem 0.85rem 1.25rem',
                  border: 'none',
                  borderLeft: `3px solid ${selected === index ? LIME : c.border}`,
                  background: selected === index ? `rgba(220,247,99,0.07)` : 'transparent',
                  color: selected === index ? c.fg : c.muted,
                  fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.82rem',
                  cursor: 'pointer', textAlign: 'left', width: '100%',
                  transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                  borderRadius: '0 6px 6px 0',
                }}
              >
                <span style={{ fontSize: '0.62rem', opacity: 0.5, flexShrink: 0, fontFamily: "'JetBrains Mono', monospace" }}>0{index + 1}</span>
                {item.name}
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div ref={detailRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '2rem',
                border: `1px solid ${c.border}`,
                borderTop: `3px solid ${LIME}`,
                borderRadius: '12px',
                background: 'var(--background)',
                transition: 'border-color 0.5s ease, background 0.5s ease',
              }}
            >
              <p className="accent-glow" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 0.35rem' }}>{project.type}</p>
              <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: '1.6rem', color: c.fg, margin: '0 0 0.75rem', letterSpacing: '-0.01em', transition: 'color 0.5s ease' }}>{project.name}</h3>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.95rem', color: c.fg, lineHeight: 1.7, margin: '0 0 1.5rem', transition: 'color 0.5s ease' }}>{project.outcome}</p>

              <div className="project-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { label: 'Challenge', text: project.challenge },
                  { label: 'Engineering decision', text: project.decision },
                ].map(({ label, text }) => (
                  <div key={label} style={{ padding: '1rem', border: `1px solid ${c.border}`, borderRadius: '8px', background: 'var(--background)', transition: 'border-color 0.5s ease, background 0.5s ease' }}>
                    <p className="accent-glow" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: ACCENT, letterSpacing: '0.09em', textTransform: 'uppercase', margin: '0 0 0.4rem' }}>{label}</p>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.88rem', color: c.fg, lineHeight: 1.65, margin: 0, transition: 'color 0.5s ease' }}>{text}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.stack.map(tool => (
                  <span key={tool} style={{ padding: '0.25rem 0.65rem', border: `1px solid ${c.border}`, borderRadius: '999px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: c.fg, transition: 'border-color 0.5s ease, color 0.5s ease' }}>{tool}</span>
                ))}
              </div>

              <Link
                href={project.link}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: ACCENT, fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#848c8e'}
                onMouseLeave={e => e.currentTarget.style.color = ACCENT}
              >
                {project.linkLabel} <FiArrowRight size={12} />
              </Link>
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. AI & CHATBOTS ─────────────────────────────────────────────────────────
const BOT_QA = {
  'What do you build?':       'AI assistants for service businesses — FAQ automation, lead qualification, booking routing. Trained on your content, designed around your customer flow.',
  'Can it embed in my site?': 'Yes. Any stack — React, Next.js, WordPress, Webflow. Delivered as a script tag or component. No platform lock-in.',
  'How does intent work?':    'Through AI APIs, the assistant reads user intent rather than matching keywords. It handles varied phrasing, follow-ups, and edge cases naturally — with human escalation paths for anything it cannot resolve.',
  'What did you build?':      'DEW AI Assistant — built for a service business. Handles FAQs, qualifies leads, and routes bookings. Integrated into the business website and used in daily operations.',
};

function ChatSection() {
  const c = useC();
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi — I'm a demo of the kind of AI assistant I build for service businesses. Ask me something." },
  ]);
  const [typing, setTyping] = useState(false);
  const messagesRef = useRef(null);

  const ask = (q) => {
    if (typing) return;
    setMessages(m => [...m, { from: 'user', text: q }]);
    setTyping(true);
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: BOT_QA[q] }]);
      setTyping(false);
    }, 950);
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, typing]);

  return (
    <section style={{ padding: '5rem max(2rem, 7vw)', width: '100%', background: c.bg, color: c.fg, transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div className="chat-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        <FadeIn>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem', color: LIME }}>// AI integration</p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 1.75rem', transition: 'color 0.5s ease' }}>
            Embedded<br /><span style={{ color: '#B0D50B' }}>AI</span>
          </h2>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1rem', color: c.sub, lineHeight: 1.75, margin: '0 0 1.5rem', transition: 'color 0.5s ease' }}>
            What got me into AI was watching a small business owner spend two hours answering the same five questions over email. I built a system to handle that automatically.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {['Intent-based response flows', 'Knowledge-base retrieval', 'Booking and lead-routing logic', 'Human handoff for complex cases'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiCheck size={11} style={{ color: LIME, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.95rem', color: c.sub, transition: 'color 0.5s ease' }}>{f}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ border: `1px solid ${c.border}`, borderTop: `3px solid ${LIME}`, borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.5s ease', boxShadow: '0 8px 40px rgba(67,80,88,0.08)' }}>
            {/* Chrome bar */}
            <div style={{ padding: '0.8rem 1.2rem', borderBottom: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', gap: '0.55rem', background: c.card, transition: 'background 0.5s ease, border-color 0.5s ease' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                {['#ff5f57','#febc2e','#28c840'].map(bg => <div key={bg} style={{ width: '10px', height: '10px', borderRadius: '50%', background: bg }} />)}
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: c.muted, marginLeft: '0.2rem', transition: 'color 0.5s ease' }}>AI assistant · prototype</span>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#28c840' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#28c840' }}>online</span>
              </div>
            </div>
            {/* Messages */}
            <div ref={messagesRef} style={{ padding: '1rem', minHeight: '160px', maxHeight: '210px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {messages.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ maxWidth: '80%', padding: '0.55rem 0.9rem', borderRadius: m.from === 'user' ? '12px 12px 3px 12px' : '12px 12px 12px 3px', background: m.from === 'user' ? ACCENT : 'var(--chat-bubble-bg)', color: m.from === 'user' ? '#fff' : c.fg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.88rem', lineHeight: 1.65, transition: 'background 0.5s ease, color 0.5s ease' }}>
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '0.55rem 0.9rem', borderRadius: '12px 12px 12px 3px', background: 'var(--chat-bubble-bg)', transition: 'background 0.5s ease' }}>
                    <span style={{ color: c.muted, letterSpacing: '0.12em' }}>&#8226;&#8226;&#8226;</span>
                  </div>
                </div>
              )}
            </div>
            {/* Chips */}
            <div style={{ padding: '0.7rem', borderTop: `1px solid ${c.border}`, display: 'flex', gap: '0.4rem', flexWrap: 'wrap', transition: 'border-color 0.5s ease' }}>
              {Object.keys(BOT_QA).map(q => (
                <button key={q} onClick={() => ask(q)} disabled={typing}
                  style={{ padding: '0.28rem 0.7rem', borderRadius: '999px', border: `1.5px solid ${c.border}`, background: 'transparent', color: c.muted, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.63rem', cursor: typing ? 'not-allowed' : 'pointer', opacity: typing ? 0.4 : 1, letterSpacing: '0.02em', transition: 'border-color 0.2s, color 0.2s, background 0.2s, opacity 0.2s' }}
                  onMouseEnter={e => { if (!typing) { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.background = LIME; e.currentTarget.style.color = ACCENT; } }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = c.muted; }}
                >{q}</button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 5. SKILLS BENTO ─────────────────────────────────────────────────────────
const SKILL_GROUPS = [
  {
    icon: <FiCode size={17} />,
    label: 'Frontend',
    accent: '#89b4fa',
    skills: ['React', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS', 'Framer Motion', 'Accessibility (WCAG)'],
  },
  {
    icon: <FiDatabase size={17} />,
    label: 'Backend & Data',
    accent: '#a6e3a1',
    skills: ['Node.js', 'Express', 'Hono', 'PostgreSQL', 'MongoDB', 'Supabase', 'Redis', 'Drizzle ORM'],
  },
  {
    icon: <FiCpu size={17} />,
    label: 'AI & Integration',
    accent: '#89dceb',
    skills: ['OpenAI API', 'Google Gemini', 'Groq', 'Python', 'Prompt Engineering', 'Clerk', 'Auth0'],
  },
  {
    icon: <FiZap size={17} />,
    label: 'DevOps & Tools',
    accent: LIME,
    skills: ['Git', 'Vercel', 'Render', 'AWS S3', 'CI/CD', 'Figma', 'Bun', 'REST APIs'],
  },
];

function SkillsSection() {
  const c = useC();

  return (
    <section style={{ padding: '5rem max(2rem, 7vw)', background: c.card, transition: 'background 0.5s ease' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeIn>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem', color: LIME }}>// tech stack</p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 2.5rem', transition: 'color 0.5s ease' }}>
            Tools I<br /><span style={{ color: '#B0D50B' }}>ship with.</span>
          </h2>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="skills-bento">
          {SKILL_GROUPS.map((group, i) => (
            <FadeIn key={group.label} delay={i * 0.08}>
              <div
                className="skill-card-hover"
                style={{
                  padding: '1.75rem',
                  border: `1px solid ${c.border}`,
                  borderRadius: '16px',
                  background: 'var(--background)',
                  height: '100%',
                  transition: 'border-color 0.25s ease, background 0.5s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = group.accent + '70'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.15rem' }}>
                  <div style={{ color: group.accent, display: 'flex', alignItems: 'center', flexShrink: 0 }}>{group.icon}</div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.85rem', color: c.fg, textTransform: 'uppercase', letterSpacing: '0.07em', transition: 'color 0.5s ease' }}>{group.label}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      style={{
                        padding: '0.22rem 0.65rem',
                        borderRadius: '999px',
                        border: `1px solid ${c.border}`,
                        color: c.muted,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.7rem',
                        letterSpacing: '0.02em',
                        cursor: 'default',
                        transition: 'border-color 0.2s, color 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = group.accent; e.currentTarget.style.color = group.accent; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.muted; }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. ACCESSIBILITY ─────────────────────────────────────────────────────────
function A11ySection() {
  const c = useC();
  const [isDark, setIsDark] = useState(false);
  const [srAnnounced, setSrAnnounced] = useState(false);
  const [srText, setSrText] = useState('');
  const [lastFocus, setLastFocus] = useState(null);
  const [focusMethod, setFocusMethod] = useState(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  const announce = () => {
    const msg = 'Screen reader test: This portfolio is built with semantic HTML, ARIA labels, and full keyboard navigation throughout every page.';
    setSrText(msg);
    setSrAnnounced(true);
    setTimeout(() => setSrAnnounced(false), 3500);
  };

  const cell = (right, bottom) => ({
    padding: '1.5rem',
    background: c.card,
    borderRight: right ? `1px solid ${c.border}` : 'none',
    borderBottom: bottom ? `1px solid ${c.border}` : 'none',
    transition: 'background 0.5s ease, border-color 0.5s ease',
  });

  const cellTitle = (label) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.35rem' }}>
      <FiCheck size={11} style={{ color: LIME, flexShrink: 0 }} />
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', letterSpacing: '0.03em', color: c.fg, margin: 0, transition: 'color 0.5s ease' }}>{label}</p>
    </div>
  );

  const cellDesc = (text) => (
    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.82rem', color: c.muted, margin: '0 0 0.85rem', lineHeight: 1.6, paddingLeft: '1.3rem', transition: 'color 0.5s ease' }}>{text}</p>
  );

  return (
    <section style={{ padding: '5rem max(2rem, 7vw)', width: '100%', background: c.bg, color: c.fg, transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeIn>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem', color: LIME }}>// accessibility</p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5.5vw, 4.5rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 0.85rem', transition: 'color 0.5s ease' }}>
            Built for<br /><span style={{ color: '#B0D50B' }}>everyone.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1rem', color: c.sub, maxWidth: '520px', lineHeight: 1.75, margin: '0 0 2.5rem', transition: 'color 0.5s ease' }}>
            I build for everyone — regardless of ability, device, or environment. Each cell below is a live demo.
          </p>

          <div aria-live="polite" aria-atomic="true" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
            {srText}
          </div>

          <div className="a11y-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: `1px solid ${c.border}`, borderTop: `3px solid ${LIME}`, borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.5s ease' }}>

            {/* 1 — Keyboard navigation */}
            <div style={cell(true, true)}>
              {cellTitle('Keyboard Navigation')}
              {cellDesc('Tab to each button and press Enter — the focus ring shows where you are without a mouse.')}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '1.3rem' }}>
                <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                  {['Action A', 'Action B', 'Action C'].map((label, i) => {
                    const active = lastFocus === i;
                    return (
                      <button
                        key={label}
                        aria-label={`Keyboard demo button: ${label}`}
                        onMouseDown={() => setFocusMethod('mouse')}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setFocusMethod('keyboard'); }}
                        onClick={() => setLastFocus(lastFocus === i ? null : i)}
                        style={{ padding: '0.28rem 0.65rem', border: `1.5px solid ${active ? LIME : c.border}`, borderRadius: '4px', background: active ? LIME : 'transparent', color: active ? ACCENT : c.fg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.68rem', cursor: 'pointer', transition: 'all 0.2s' }}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
                {lastFocus !== null && (
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: ACCENT, margin: 0, letterSpacing: '0.04em' }}>
                    ✓ {['Action A', 'Action B', 'Action C'][lastFocus]} activated via {focusMethod}
                  </p>
                )}
              </div>
            </div>

            {/* 2 — Screen reader */}
            <div style={cell(false, true)}>
              {cellTitle('Screen Reader Support')}
              {cellDesc('Press the button — screen readers announce it aloud. Sighted users see the transcript.')}
              <div style={{ paddingLeft: '1.3rem' }}>
                <button
                  onClick={announce}
                  aria-label="Trigger a screen reader announcement"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.32rem 0.8rem', border: `1.5px solid ${srAnnounced ? ACCENT : c.border}`, borderRadius: '4px', background: srAnnounced ? 'rgba(67,80,88,0.08)' : 'transparent', color: srAnnounced ? ACCENT : c.fg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.7rem', cursor: 'pointer', transition: 'all 0.25s' }}
                >
                  <span style={{ fontSize: '0.65rem' }}>{srAnnounced ? '✓' : '▶'}</span>
                  {srAnnounced ? 'Announced' : 'Trigger announcement'}
                </button>
                {srAnnounced && (
                  <div style={{ marginTop: '0.6rem', padding: '0.55rem 0.75rem', border: `1px solid rgba(67,80,88,0.25)`, borderRadius: '4px', background: 'rgba(67,80,88,0.04)' }}>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: ACCENT, margin: '0 0 0.25rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Screen reader heard:</p>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: c.fg, margin: 0, lineHeight: 1.55 }}>"{srText}"</p>
                  </div>
                )}
              </div>
            </div>

            {/* 3 — Contrast / dark mode */}
            <div style={cell(true, false)}>
              {cellTitle('WCAG-aware Contrast')}
              {cellDesc('Contrast ratios meet accessibility guidelines. Check both themes:')}
              <div style={{ paddingLeft: '1.3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button
                    onClick={toggleDark}
                    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '54px', height: '26px', borderRadius: '999px', border: `1.5px solid ${isDark ? 'rgba(132,140,142,0.35)' : '#bfb7b6'}`, background: isDark ? '#1c2529' : '#e8e9e5', cursor: 'pointer', padding: '2px', transition: 'background 0.45s ease, border-color 0.45s ease', overflow: 'hidden', flexShrink: 0 }}
                  >
                    {[{ left: '8px', top: '5px', size: 1.5 }, { left: '16px', top: '14px', size: 1 }, { left: '24px', top: '7px', size: 2 }].map((s, i) => (
                      <span key={i} aria-hidden="true" style={{ position: 'absolute', left: s.left, top: s.top, width: `${s.size}px`, height: `${s.size}px`, borderRadius: '50%', background: '#dcf763', opacity: isDark ? 1 : 0, transition: `opacity 0.3s ease ${i * 0.07}s`, pointerEvents: 'none' }} />
                    ))}
                    {[0, 45, 90, 135].map((deg, i) => (
                      <span key={deg} aria-hidden="true" style={{ position: 'absolute', left: '10px', top: '50%', width: '6px', height: '1.5px', borderRadius: '1px', background: '#848c8e', transformOrigin: 'right center', transform: `translateY(-50%) rotate(${deg}deg) translateX(6px)`, opacity: isDark ? 0 : 0.55, transition: `opacity 0.3s ease ${i * 0.05}s`, pointerEvents: 'none' }} />
                    ))}
                    <span aria-hidden="true" style={{ position: 'absolute', width: '20px', height: '20px', borderRadius: '50%', background: isDark ? '#dcf763' : '#435058', transform: `translateX(${isDark ? '29px' : '1px'})`, transition: 'transform 0.45s cubic-bezier(0.34, 1.4, 0.64, 1), background 0.45s ease, box-shadow 0.45s ease', boxShadow: isDark ? '0 0 10px rgba(220,247,99,0.55)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {isDark ? <FiMoon size={10} style={{ color: '#1c2529', flexShrink: 0 }} /> : <FiSun size={10} style={{ color: '#f1f2ee', flexShrink: 0 }} />}
                    </span>
                  </button>
                  <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: c.muted }}>
                    {isDark ? 'Dark' : 'Light'}
                  </span>
                </div>
              </div>
            </div>

            {/* 4 — Reduced motion */}
            <div style={cell(false, false)}>
              {cellTitle('Reduced Motion')}
              {cellDesc('Animations pause automatically when OS motion preference is set:')}
              <div style={{ paddingLeft: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <div className="a11y-pulse" style={{ width: '9px', height: '9px', borderRadius: '50%', background: LIME, flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: c.muted, letterSpacing: '0.04em' }}>
                  Pauses when reduce-motion is on
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 7. ABOUT ─────────────────────────────────────────────────────────────────
const ABOUT_CARDS = [
  {
    label: 'My story',
    hint: 'Architecture → Vancouver → Full-Stack',
    body: "I studied Architectural Engineering — five years of learning how complex systems are designed under pressure. In 2019 I moved to Vancouver, one of Canada's strongest tech cities. Being in that environment pushed me toward software. Same problem-solving mindset, applied through code. Since 2022 I've been building full-stack applications and AI tools for real businesses.",
  },
  {
    label: 'What I build',
    hint: 'Full-stack apps, AI tools, production systems',
    body: 'React, Next.js, Node.js, TypeScript, PostgreSQL, Supabase — frontend to backend, deployed and running. A live booking platform for a beauty business. An embeddable AI front-desk assistant. A production frontend shipping to real users at Community of Guardians.',
  },
  {
    label: 'What I bring',
    hint: 'Ownership, structure, speed',
    body: "I take a feature from Figma to deployed product without stopping at the edge of my lane. Architectural training means I catch structural problems before they become technical debt. I've led standups, reviewed PRs, and unblocked teammates as both Scrum Master and Technical Manager — I make teams faster, not just code.",
  },
  {
    label: 'Why hire me',
    hint: 'Proven in production, low overhead, high output',
    body: "The Elika Beauty platform runs daily operations. The Community of Guardians frontend ships to real users. I pick up new tools fast — React Native, Hono, Redis, Google GenAI — and use them effectively, not experimentally. Give me a problem, a team, and a standard. I'll deliver.",
  },
];

function AboutSection() {
  const c = useC();
  const [open, setOpen] = useState(0);

  return (
    <section style={{ padding: '5rem max(2rem, 7vw)', width: '100%', background: c.card, color: c.fg, transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div className="chat-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

        <FadeIn>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem', color: LIME }}>// about</p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 1.75rem', transition: 'color 0.5s ease' }}>
            Built to<br /><span style={{ color: '#B0D50B' }}>ship.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1rem', color: c.sub, lineHeight: 1.75, margin: '0 0 1.5rem', transition: 'color 0.5s ease' }}>
            Full-stack developer with a background in architectural engineering. I build production systems — not prototypes.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {[
              'Frontend & backend, start to finish',
              'AI-powered tools for real businesses',
              'Team lead experience — Scrum & technical',
              'Vancouver, BC · open to remote',
            ].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiCheck size={11} style={{ color: LIME, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.92rem', color: c.sub, transition: 'color 0.5s ease' }}>{f}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${c.border}`, borderTop: `3px solid ${LIME}`, borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.5s ease' }}>
            {ABOUT_CARDS.map((card, i) => (
              <div key={i} style={{ borderBottom: i < ABOUT_CARDS.length - 1 ? `1px solid ${c.border}` : 'none', transition: 'border-color 0.5s ease' }}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  aria-controls={`about-panel-${i}`}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', background: open === i ? `${ACCENT}12` : c.card, border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'background 0.2s ease' }}
                >
                  <div>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', fontWeight: 700, color: open === i ? ACCENT : c.fg, margin: 0, letterSpacing: '0.04em', transition: 'color 0.2s' }}>{card.label}</p>
                    {open !== i && <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.78rem', color: c.muted, margin: '0.15rem 0 0', transition: 'color 0.5s ease' }}>{card.hint}</p>}
                  </div>
                  <span style={{ color: open === i ? ACCENT : c.muted, fontSize: '1rem', lineHeight: 1, transition: 'transform 0.25s, color 0.2s', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0, marginLeft: '1rem' }}>+</span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="body"
                      id={`about-panel-${i}`}
                      role="region"
                      aria-label={card.label}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.9rem', color: c.sub, lineHeight: 1.75, margin: 0, padding: '0 1.25rem 1.1rem', transition: 'color 0.5s ease' }}>{card.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 8. CONNECT ───────────────────────────────────────────────────────────────
function ConnectSection() {
  const c = useC();

  const ctas = [
    { label: 'View projects', href: '/projects', primary: false },
    { label: 'Get in touch', href: '/contact', primary: true },
  ];

  const socials = [
    { label: 'GitHub',      href: 'https://github.com/curleycoder',            icon: <FiGithub size={14} /> },
    { label: 'LinkedIn',    href: 'https://linkedin.com/in/shabnam-beiraghian', icon: <FiLinkedin size={14} /> },
    { label: 'View resume', href: '/resume',                                     icon: <FiArrowRight size={14} /> },
  ];

  return (
    <section className="connect-section" style={{ padding: '5rem max(2rem, 7vw)', width: '100%', background: c.bg, color: c.fg, transition: 'background 0.5s ease, color 0.5s ease', position: 'relative', overflow: 'hidden' }}>
      {/* Lime orb bottom-left */}
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '36vw', height: '36vw', maxWidth: '450px', maxHeight: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,247,99,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem', color: LIME }}>// let's work</p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 1.25rem', transition: 'color 0.5s ease' }}>
            Open for<br /><span style={{ color: '#B0D50B' }}>new roles.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '1rem', color: c.sub, maxWidth: '500px', lineHeight: 1.75, margin: '0 0 2.5rem', transition: 'color 0.5s ease' }}>
            Looking for a full-time position where I can build real products with a team that cares. Based in Vancouver — open to remote.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {ctas.map(({ label, href, primary }) => (
              <Link
                key={label}
                href={href}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', background: primary ? ACCENT : 'transparent', color: primary ? '#f1f2ee' : c.fg, border: `2px solid ${primary ? ACCENT : c.border}`, borderRadius: '6px', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => {
                  if (primary) { e.currentTarget.style.background = LIME; e.currentTarget.style.borderColor = LIME; e.currentTarget.style.color = ACCENT; }
                  else { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }
                }}
                onMouseLeave={e => {
                  if (primary) { e.currentTarget.style.background = ACCENT; e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = '#f1f2ee'; }
                  else { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.fg; }
                }}
              >
                {label} <FiArrowRight size={13} />
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 1.1rem', border: `1.5px solid ${c.border}`, borderRadius: '6px', color: c.sub, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.82rem', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s, background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.background = LIME; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = c.sub; }}
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main style={{ background: 'var(--background)', transition: 'background 0.5s ease' }}>
      <HeroSection />
      <ProjectExplorer />
      <ChatSection />
      <SkillsSection />
      <A11ySection />
      <AboutSection />
      <ConnectSection />

      <style jsx global>{`
        @keyframes tickerMove {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 760px) {
          .chat-grid      { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .project-layout { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .project-cards  { grid-template-columns: 1fr !important; }
          .connect-section { padding: 3rem max(1.5rem, 5vw) !important; }
        }
        @media (max-width: 520px) {
          .a11y-grid { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
