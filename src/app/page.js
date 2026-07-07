'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiArrowRight, FiMoon, FiSun, FiCheck, FiGithub, FiLinkedin } from 'react-icons/fi';

const ACCENT = '#BE00B5';

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
    <div style={{ overflow: 'hidden', borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '0.9rem 0', transition: 'border-color 0.5s ease' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'tickerMove 28s linear infinite' }}>
        {[0, 1].map(copy => (
          <span key={copy} style={{ display: 'flex', alignItems: 'center', gap: '0', whiteSpace: 'nowrap' }}>
            {TICKER.map((item, i) => (
              <span key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: c.muted, transition: 'color 0.5s ease' }}>
                {item}<span style={{ color: ACCENT, margin: '0 1.5rem' }}>·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────────
function HeroSection() {
  const c = useC();

  return (
    <section style={{ minHeight: '100vh', width: '100%', background: c.bg, color: c.fg, display: 'flex', flexDirection: 'column', transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '7rem max(2rem, 7vw) 2.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55 }}
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95rem', color: ACCENT, margin: '0 0 1.25rem', cursor: 'default', letterSpacing: '0.04em' }}
        >
          // Full-Stack Developer
        </motion.p>

        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '104%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 8vw, 6.5rem)', lineHeight: 1, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.03em', margin: 0, transition: 'color 0.5s ease' }}
          >
            Shabnam
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '2.25rem' }}>
          <motion.h1
            initial={{ y: '104%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 8vw, 6.5rem)', lineHeight: 1, color: ACCENT, textTransform: 'uppercase', letterSpacing: '-0.03em', margin: 0 }}
          >
            Beiraghian
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1.05rem', color: c.fg, lineHeight: 1.7, margin: 0, transition: 'color 0.5s ease' }}>
              Building accessible web applications and AI tools that solve real business problems.
            </p>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.92rem', color: c.sub, lineHeight: 1.7, margin: 0, transition: 'color 0.5s ease' }}>
              Recent work includes a production booking platform, an AI front-desk assistant, and frontend systems for real users.
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: c.muted, margin: 0, letterSpacing: '0.06em', transition: 'color 0.5s ease' }}>
              Vancouver, BC · Open to frontend and full-stack developer roles
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="#projects"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.7rem 1.5rem', background: ACCENT, color: '#fff', border: `2px solid ${ACCENT}`, borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#9a0093'; e.currentTarget.style.borderColor = '#9a0093'; }}
              onMouseLeave={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.borderColor = ACCENT; }}
            >
              View selected work <FiArrowRight size={13} />
            </a>
            <Link
              href="/resume"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.7rem 1.5rem', background: 'transparent', color: c.fg, border: `2px solid ${c.border}`, borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.fg; }}
            >
              View resume
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/curleycoder"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.9rem', border: `1.5px solid ${c.border}`, borderRadius: '4px', color: c.sub, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.76rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.sub; }}
            >
              <FiGithub size={13} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/shabnam-beiraghian"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.9rem', border: `1.5px solid ${c.border}`, borderRadius: '4px', color: c.sub, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.76rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.sub; }}
            >
              <FiLinkedin size={13} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.6 }}>
        <Marquee />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', padding: '2.5rem 0 1.5rem', cursor: 'default' }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: `linear-gradient(to bottom, var(--muted), transparent)` }}
        />
      </motion.div>
    </section>
  );
}

// ─── 2. PROJECT EXPLORER ──────────────────────────────────────────────────────
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

  return (
    <section id="projects" style={{ padding: '3.5rem max(2rem, 7vw)', background: c.card, color: c.fg, transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeIn>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>// selected work</p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 2rem', transition: 'color 0.5s ease' }}>
            Built for<br /><span style={{ color: ACCENT }}>real users.</span>
          </h2>
        </FadeIn>

        <div className="project-layout" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Project list */}
          <div style={{ display: 'flex', flexDirection: 'column', position: 'sticky', top: '5rem' }}>
            {PROJECTS.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setSelected(index)}
                style={{
                  position: 'relative', display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.85rem 1rem 0.85rem 1.25rem', background: 'transparent',
                  border: 'none', borderLeft: `2px solid ${selected === index ? ACCENT : c.border}`,
                  color: selected === index ? ACCENT : c.muted,
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem',
                  cursor: 'pointer', textAlign: 'left', width: '100%',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                <span style={{ fontSize: '0.62rem', opacity: 0.55, flexShrink: 0 }}>0{index + 1}</span>
                {item.name}
              </button>
            ))}
          </div>

          {/* Project detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{ padding: '2rem', border: `1px solid ${c.border}`, borderRadius: '12px', background: c.card, transition: 'border-color 0.5s ease, background 0.5s ease' }}
            >
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 0.35rem' }}>{project.type}</p>
              <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: '1.6rem', color: c.fg, margin: '0 0 0.75rem', letterSpacing: '-0.01em', transition: 'color 0.5s ease' }}>{project.name}</h3>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: c.sub, lineHeight: 1.7, margin: '0 0 1.5rem', transition: 'color 0.5s ease' }}>{project.outcome}</p>

              <div className="project-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1rem', border: `1px solid ${c.border}`, borderRadius: '8px', transition: 'border-color 0.5s ease' }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: c.muted, letterSpacing: '0.09em', textTransform: 'uppercase', margin: '0 0 0.4rem' }}>Challenge</p>
                  <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.88rem', color: c.sub, lineHeight: 1.65, margin: 0, transition: 'color 0.5s ease' }}>{project.challenge}</p>
                </div>
                <div style={{ padding: '1rem', border: `1px solid ${c.border}`, borderRadius: '8px', transition: 'border-color 0.5s ease' }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: c.muted, letterSpacing: '0.09em', textTransform: 'uppercase', margin: '0 0 0.4rem' }}>Engineering decision</p>
                  <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.88rem', color: c.sub, lineHeight: 1.65, margin: 0, transition: 'color 0.5s ease' }}>{project.decision}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.stack.map(tool => (
                  <span key={tool} style={{ padding: '0.25rem 0.6rem', border: `1px solid ${c.border}`, borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: c.muted, transition: 'border-color 0.5s ease, color 0.5s ease' }}>{tool}</span>
                ))}
              </div>

              <Link
                href={project.link}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: ACCENT, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.04em', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {project.linkLabel} <FiArrowRight size={12} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ─── 3. AI & CHATBOTS ─────────────────────────────────────────────────────────
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
  const endRef = useRef(null);

  const ask = (q) => {
    if (typing) return;
    setMessages(m => [...m, { from: 'user', text: q }]);
    setTyping(true);
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: BOT_QA[q] }]);
      setTyping(false);
    }, 950);
  };

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, typing]);

  return (
    <section style={{ padding: '3.5rem max(2rem, 7vw)', width: '100%', background: c.bg, color: c.fg, transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div className="chat-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

        <FadeIn>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 1.75rem', transition: 'color 0.5s ease' }}>
            Embedded<br /><span style={{ color: ACCENT }}>AI</span>
          </h2>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: c.sub, lineHeight: 1.75, margin: '0 0 1.5rem', transition: 'color 0.5s ease' }}>
            What got me into AI was watching a small business owner spend two hours answering the same five questions over email. I built a system to handle that automatically.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {['Intent-based response flows', 'Knowledge-base retrieval', 'Booking and lead-routing logic', 'Human handoff for complex cases'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiCheck size={11} style={{ color: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: c.sub, transition: 'color 0.5s ease' }}>{f}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ border: `1px solid ${c.border}`, borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.5s ease' }}>
            {/* Chrome bar */}
            <div style={{ padding: '0.8rem 1.2rem', borderBottom: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', gap: '0.55rem', background: c.card, transition: 'background 0.5s ease, border-color 0.5s ease' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                {['#ff5f57','#febc2e','#28c840'].map(bg => <div key={bg} style={{ width: '10px', height: '10px', borderRadius: '50%', background: bg }} />)}
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: c.muted, marginLeft: '0.2rem', transition: 'color 0.5s ease' }}>AI assistant prototype</span>
              <div style={{ marginLeft: 'auto', width: '7px', height: '7px', borderRadius: '50%', background: '#28c840' }} />
            </div>
            {/* Messages */}
            <div style={{ padding: '1rem', minHeight: '160px', maxHeight: '210px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {messages.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ maxWidth: '80%', padding: '0.55rem 0.9rem', borderRadius: m.from === 'user' ? '12px 12px 3px 12px' : '12px 12px 12px 3px', background: m.from === 'user' ? ACCENT : 'var(--chat-bubble-bg)', color: m.from === 'user' ? '#fff' : c.fg, fontFamily: "'Lora', Georgia, serif", fontSize: '0.88rem', lineHeight: 1.65, transition: 'background 0.5s ease, color 0.5s ease' }}>
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
              <div ref={endRef} />
            </div>
            {/* Chips */}
            <div style={{ padding: '0.7rem', borderTop: `1px solid ${c.border}`, display: 'flex', gap: '0.4rem', flexWrap: 'wrap', transition: 'border-color 0.5s ease' }}>
              {Object.keys(BOT_QA).map(q => (
                <button key={q} onClick={() => ask(q)} disabled={typing}
                  style={{ padding: '0.28rem 0.7rem', borderRadius: '999px', border: `1.5px solid ${c.border}`, background: 'transparent', color: c.muted, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.63rem', cursor: typing ? 'not-allowed' : 'pointer', opacity: typing ? 0.4 : 1, letterSpacing: '0.02em', transition: 'border-color 0.2s, color 0.2s, opacity 0.2s' }}
                  onMouseEnter={e => { if (!typing) { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; } }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.muted; }}
                >{q}</button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 4. ACCESSIBILITY ─────────────────────────────────────────────────────────
function A11ySection() {
  const c = useC();
  const [isDark, setIsDark] = useState(false);

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
    setIsDark(next);
  };

  const items = [
    { label: 'Keyboard Navigation', desc: 'Every interaction reachable without a mouse.' },
    { label: 'Screen Reader Support', desc: 'Semantic HTML and ARIA labels throughout.' },
    { label: 'WCAG-aware Contrast', desc: 'Designed with contrast ratios that meet accessibility guidelines across all text.' },
    { label: 'Reduced Motion', desc: 'Respects prefers-reduced-motion at OS level.' },
  ];

  return (
    <section style={{ padding: '3.5rem max(2rem, 7vw)', width: '100%', background: c.card, color: c.fg, transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5.5vw, 4.5rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0, transition: 'color 0.5s ease' }}>
              Built for<br /><span style={{ color: ACCENT }}>everyone.</span>
            </h2>

            <button
              onClick={toggleDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.85rem 1.75rem', border: `2px solid ${c.border}`, borderRadius: '4px', background: 'transparent', color: c.fg, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', cursor: 'pointer', transition: 'border-color 0.25s, color 0.25s, background 0.5s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.fg; }}
            >
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
              {isDark ? 'Switch to light' : 'Switch to dark'}
            </button>
          </div>

          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: c.sub, maxWidth: '540px', lineHeight: 1.75, margin: '0 0 2.5rem', transition: 'color 0.5s ease' }}>
            I build for everyone — regardless of ability, device, or environment. The toggle above is a live example. Every page I ship works in both themes.
          </p>

          <div className="a11y-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', border: `1px solid ${c.border}`, borderRadius: '8px', overflow: 'hidden', transition: 'border-color 0.5s ease' }}>
            {items.map((item, i) => (
              <div key={item.label} style={{ padding: '1.5rem', background: c.card, borderRight: i % 2 === 0 ? `1px solid ${c.border}` : 'none', borderBottom: i < 2 ? `1px solid ${c.border}` : 'none', transition: 'background 0.5s ease, border-color 0.5s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.4rem' }}>
                  <FiCheck size={11} style={{ color: ACCENT, flexShrink: 0 }} />
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.05rem', letterSpacing: '0.03em', color: c.fg, margin: 0, transition: 'color 0.5s ease' }}>{item.label}</p>
                </div>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: c.sub, margin: 0, lineHeight: 1.7, paddingLeft: '1.3rem', transition: 'color 0.5s ease' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 5. ABOUT ─────────────────────────────────────────────────────────────────
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
    <section style={{ padding: '3.5rem max(2rem, 7vw)', width: '100%', background: c.bg, color: c.fg, transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div className="chat-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

        <FadeIn>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 1.75rem', transition: 'color 0.5s ease' }}>
            Built to<br /><span style={{ color: ACCENT }}>ship.</span>
          </h2>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: c.sub, lineHeight: 1.75, margin: '0 0 1.5rem', transition: 'color 0.5s ease' }}>
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
                <FiCheck size={11} style={{ color: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.92rem', color: c.sub, transition: 'color 0.5s ease' }}>{f}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${c.border}`, borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.5s ease' }}>
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
                    {open !== i && <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.78rem', color: c.muted, margin: '0.15rem 0 0', transition: 'color 0.5s ease' }}>{card.hint}</p>}
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
                      <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: c.sub, lineHeight: 1.75, margin: 0, padding: '0 1.25rem 1.1rem', transition: 'color 0.5s ease' }}>{card.body}</p>
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

// ─── 6. CONNECT ───────────────────────────────────────────────────────────────
function ConnectSection() {
  const c = useC();

  const ctas = [
    { label: 'View projects', href: '/projects', primary: false },
    { label: 'Get in touch', href: '/contact', primary: true },
  ];

  const socials = [
    { label: 'GitHub',   href: 'https://github.com/curleycoder',            icon: <FiGithub size={14} /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/shabnam-beiraghian', icon: <FiLinkedin size={14} /> },
    { label: 'View resume', href: '/resume',                                  icon: <FiArrowRight size={14} /> },
  ];

  return (
    <section style={{ padding: '3.5rem max(2rem, 7vw)', width: '100%', background: c.card, color: c.fg, transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 2rem', transition: 'color 0.5s ease' }}>
            Open for<br /><span style={{ color: ACCENT }}>new roles.</span>
          </h2>

          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: c.sub, maxWidth: '500px', lineHeight: 1.75, margin: '0 0 3rem', transition: 'color 0.5s ease' }}>
            Looking for a full-time position where I can build real products with a team that cares. Based in Vancouver — open to remote.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {ctas.map(({ label, href, primary }) => (
              <Link
                key={label}
                href={href}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', background: primary ? ACCENT : 'transparent', color: primary ? '#fff' : c.fg, border: `2px solid ${primary ? ACCENT : c.border}`, borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', textDecoration: 'none', letterSpacing: '0.04em', transition: 'background 0.2s, border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => {
                  if (primary) { e.currentTarget.style.background = '#9a0093'; e.currentTarget.style.borderColor = '#9a0093'; }
                  else { e.currentTarget.style.borderColor = c.fg; }
                }}
                onMouseLeave={e => {
                  if (primary) { e.currentTarget.style.background = ACCENT; e.currentTarget.style.borderColor = ACCENT; }
                  else { e.currentTarget.style.borderColor = c.border; }
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
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 1.1rem', border: `1.5px solid ${c.border}`, borderRadius: '4px', color: c.sub, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.76rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.sub; }}
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
  return (
    <main style={{ background: 'var(--background)', transition: 'background 0.5s ease' }}>
      <HeroSection />
      <ProjectExplorer />
      <ChatSection />
      <A11ySection />
      <AboutSection />
      <ConnectSection />

      <style jsx global>{`
        @keyframes tickerMove {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 760px) {
          .chat-grid     { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .project-layout { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .project-cards { grid-template-columns: 1fr !important; }
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
