'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiMoon, FiSun, FiCheck, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import Footer from '@/components/Footer';

const ACCENT = '#BE00B5';
const SECTION_LABELS = ['Intro', 'AI & Chatbots', 'Accessibility', 'Connect'];

// All colors come from CSS variables — toggling html.dark handles switching
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

// ─── Side nav ─────────────────────────────────────────────────────────────────
function SideNav({ current, total, onGo }) {
  const c = useC();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGo(i)}
          aria-label={`Go to ${SECTION_LABELS[i]}`}
          title={SECTION_LABELS[i]}
          style={{
            width: '3px', height: i === current ? '28px' : '10px', borderRadius: '2px',
            background: i === current ? ACCENT : c.border,
            border: 'none', cursor: 'pointer', padding: 0,
            transition: 'height 0.35s cubic-bezier(0.4,0,0.2,1), background 0.3s ease',
          }}
        />
      ))}
    </div>
  );
}

// ─── Cycling role title ────────────────────────────────────────────────────────
const ROLES = ['Full-Stack Developer', 'AI Builder', 'React Engineer', 'Product Builder'];

function CyclingRole() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;
    if (!deleting && text === target) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === '') {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    } else if (deleting) {
      timeout = setTimeout(() => setText(t => t.slice(0, -1)), 45);
    } else {
      timeout = setTimeout(() => setText(target.slice(0, text.length + 1)), 85);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span>
      {text}
      <span style={{ display: 'inline-block', width: '2px', height: '0.85em', background: ACCENT, marginLeft: '2px', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
    </span>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────────────
const TICKER = ['React', 'Next.js', 'Node.js', 'TypeScript', 'AI Chatbots', 'Accessibility', 'UX Design', 'Supabase', 'REST APIs', 'React Native', 'Python', 'Full-Stack Dev'];

function Marquee() {
  const c = useC();
  return (
    <div style={{ overflow: 'hidden', borderTop: `1px solid ${c.border}`, padding: '0.9rem 0', transition: 'border-color 0.5s ease' }}>
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

// ─── 1. INTRO ─────────────────────────────────────────────────────────────────
function IntroSection() {
  const c = useC();

  return (
    <section style={{ height: '100%', width: '100%', background: c.bg, color: c.fg, display: 'flex', flexDirection: 'column', transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '7rem max(2rem, 7vw) 2.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55 }}
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95rem', color: ACCENT, margin: '0 0 1.25rem', cursor: 'default', letterSpacing: '0.04em' }}
        >
          // <CyclingRole />
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
          {/* Proof statement */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1.05rem', color: c.fg, lineHeight: 1.7, margin: 0, transition: 'color 0.5s ease' }}>
              Building responsive web apps, AI tools, and business systems using{' '}
              <span style={{ color: ACCENT }}>React, Next.js, Node.js</span> and PostgreSQL.
            </p>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.92rem', color: c.sub, lineHeight: 1.7, margin: 0, transition: 'color 0.5s ease' }}>
              Recent: live booking platform for Elika Beauty · embeddable AI front-desk assistant · production frontend at Community of Guardians
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: c.muted, margin: 0, letterSpacing: '0.06em', transition: 'color 0.5s ease' }}>
              Vancouver, BC · Open to frontend and full-stack developer roles
            </p>
          </div>

          {/* Primary CTA */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              href="/case-studies/elika-beauty"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.7rem 1.5rem', background: ACCENT, color: '#fff', border: `2px solid ${ACCENT}`, borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#9a0093'; e.currentTarget.style.borderColor = '#9a0093'; }}
              onMouseLeave={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.borderColor = ACCENT; }}
            >
              View Elika Beauty <FiArrowRight size={13} />
            </Link>
          </div>

          {/* Social links + Download Resume */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.65rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/curleycoder"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.9rem', border: `1.5px solid ${c.border}`, borderRadius: '4px', color: c.sub, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.76rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.sub; }}
              >
                <FiGithub size={13} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/shabnam-beiraghian"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.9rem', border: `1.5px solid ${c.border}`, borderRadius: '4px', color: c.sub, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.76rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.sub; }}
              >
                <FiLinkedin size={13} /> LinkedIn
              </a>
              <Link
                href="/projects"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.9rem', border: `1.5px solid ${c.border}`, borderRadius: '4px', color: c.sub, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.76rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.sub; }}
              >
                All projects <FiArrowRight size={12} />
              </Link>
            </div>
            <Link
              href="/resume"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.45rem 0.9rem', background: 'transparent', color: c.sub, border: `1.5px solid ${c.border}`, borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.76rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.sub; }}
            >
              <FiDownload size={13} /> Download Resume
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.6 }}>
        <Marquee />
      </motion.div>
      <Footer />
    </section>
  );
}


// ─── 3. AI & CHATBOTS ─────────────────────────────────────────────────────────
const BOT_QA = {
  'What do you build?':    'AI chatbots and assistants for businesses — lead capture, FAQ automation, booking routing. Trained on your content, tuned to your voice.',
  'Can it embed in my site?': 'Yes. Any stack — React, Next.js, WordPress, Webflow. Delivered as a script tag or component. No platform lock-in.',
  'How does NLP work here?': 'Through AI APIs (OpenAI or custom models), the bot reads user intent, not just keywords. It handles varied phrasing, follow-ups, and edge cases naturally.',
  'Show me a result':      'Dew AI Assistant — built for a service business — handles FAQs, qualifies leads, routes bookings. Reduced manual email volume by ~60% in month one.',
};

function ChatSection() {
  const c = useC();
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi — I'm a demo of the kind of AI assistant I build for businesses. Try asking me something." },
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
    <section style={{ minHeight: '100vh', width: '100%', background: c.bg, color: c.fg, display: 'flex', alignItems: 'center', padding: '5rem max(2rem, 7vw)', transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div className="chat-grid" style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

        <div>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05, color: c.fg, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 1.75rem', transition: 'color 0.5s ease' }}>
            Embedded<br /><span style={{ color: ACCENT }}>AI</span>
          </h2>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: c.sub, lineHeight: 1.75, margin: '0 0 1.1rem', transition: 'color 0.5s ease' }}>
            What got me into AI wasn&#39;t the hype — it was watching a small business owner spend two hours answering the same five questions over email. I wanted to fix that.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Lead capture & qualification', 'FAQ & knowledge base automation', 'Booking routing & service guidance', 'Custom NLP tuning per business'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiCheck size={11} style={{ color: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: c.sub, transition: 'color 0.5s ease' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ border: `1px solid ${c.border}`, borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.5s ease' }}>
          {/* Chrome */}
          <div style={{ padding: '0.8rem 1.2rem', borderBottom: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', gap: '0.55rem', background: c.card, transition: 'background 0.5s ease, border-color 0.5s ease' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              {['#ff5f57','#febc2e','#28c840'].map(bg => <div key={bg} style={{ width: '10px', height: '10px', borderRadius: '50%', background: bg }} />)}
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: c.muted, marginLeft: '0.2rem', transition: 'color 0.5s ease' }}>dew-ai-assistant</span>
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
              <button key={q} onClick={() => ask(q)} disabled={typing} style={{ padding: '0.28rem 0.7rem', borderRadius: '999px', border: `1.5px solid ${c.border}`, background: 'transparent', color: c.muted, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.63rem', cursor: typing ? 'not-allowed' : 'pointer', opacity: typing ? 0.4 : 1, letterSpacing: '0.02em', transition: 'border-color 0.2s, color 0.2s, opacity 0.2s' }}
                onMouseEnter={e => { if (!typing) { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; } }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.muted; }}
              >{q}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. ACCESSIBILITY ─────────────────────────────────────────────────────────
function A11ySection({ isDark, toggleDark }) {
  const c = useC();
  const items = [
    { label: 'Keyboard Navigation', desc: 'Every interaction reachable without a mouse.' },
    { label: 'Screen Reader Support', desc: 'Semantic HTML and ARIA labels throughout.' },
    { label: 'Colour Contrast', desc: 'WCAG AA/AAA on every text element.' },
    { label: 'Reduced Motion', desc: 'Respects prefers-reduced-motion at OS level.' },
  ];

  return (
    <section style={{ minHeight: '100vh', width: '100%', background: c.bg, color: c.fg, display: 'flex', alignItems: 'center', padding: '5rem max(2rem, 7vw)', transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
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
            <span style={{ animation: 'moonblink 2s ease-in-out infinite', display: 'inline-flex' }}>
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </span>
            {isDark ? 'Switch to light' : 'Switch to dark'}
          </button>
        </div>

        <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: c.sub, maxWidth: '540px', lineHeight: 1.75, margin: '0 0 2.5rem', transition: 'color 0.5s ease' }}>
          I build for everyone — regardless of ability, device, or environment. The toggle above isn&#39;t a gimmick. Every page I ship works in both themes.
        </p>

        <div className="a11y-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', border: `1px solid ${c.border}`, borderRadius: '8px', overflow: 'hidden', transition: 'border-color 0.5s ease' }}>
          {items.map((item, i) => (
            <div key={item.label} style={{ padding: '1.5rem', background: c.card, borderRight: i % 2 === 0 ? `1px solid ${c.border}` : 'none', borderBottom: i < 2 ? `1px solid ${c.border}` : 'none', transition: 'background 0.5s ease, border-color 0.5s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.4rem' }}>
                <FiCheck size={11} style={{ color: ACCENT, flexShrink: 0 }} />
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.2rem', letterSpacing: '0.04em', color: c.fg, margin: 0, transition: 'color 0.5s ease' }}>{item.label}</p>
              </div>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: c.sub, margin: 0, lineHeight: 1.7, paddingLeft: '1.3rem', transition: 'color 0.5s ease' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. CONNECT ───────────────────────────────────────────────────────────────
function ConnectSection() {
  const c = useC();

  const ctas = [
    { label: 'View projects', href: '/projects', primary: false },
    { label: 'Get in touch', href: '/contact', primary: true },
  ];

  const socials = [
    { label: 'GitHub',   href: 'https://github.com/curleycoder',           icon: <FiGithub size={14} /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/shabnam-beiraghian', icon: <FiLinkedin size={14} /> },
    { label: 'Resume',   href: '/resume',                                    icon: <FiArrowRight size={14} /> },
  ];

  return (
    <section style={{ minHeight: '100vh', width: '100%', background: c.bg, color: c.fg, display: 'flex', alignItems: 'center', padding: '5rem max(2rem, 7vw)', transition: 'background 0.5s ease, color 0.5s ease' }}>
      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
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
      </div>
    </section>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
const SECTIONS = [IntroSection, ChatSection, A11ySection, ConnectSection];

const fade = { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } };

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [isDark, setIsDark] = useState(false); // light by default
  const animating = useRef(false);
  const lastWheel = useRef(0);
  const touchY = useRef(null);

  // Sync html class with dark state
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleDark = useCallback(() => setIsDark(d => !d), []);

  const goTo = useCallback((next) => {
    if (next === current || animating.current) return;
    if (next < 0 || next >= SECTIONS.length) return;
    setCurrent(next);
    animating.current = true;
    setTimeout(() => { animating.current = false; }, 700);
  }, [current]);

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onWheel = (e) => {
      const now = Date.now();
      if (now - lastWheel.current < 900) return;
      lastWheel.current = now;
      if (e.deltaY > 30) goNext();
      if (e.deltaY < -30) goPrev();
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [goNext, goPrev]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goNext();
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   goPrev();
      if (e.key === 'Home') goTo(0);
      if (e.key === 'End')  goTo(SECTIONS.length - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, goTo]);

  useEffect(() => {
    const onTouchStart = (e) => { touchY.current = e.touches[0].clientY; };
    const onTouchEnd   = (e) => {
      if (touchY.current === null) return;
      const diff = touchY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) { diff > 0 ? goNext() : goPrev(); }
      touchY.current = null;
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend',   onTouchEnd,   { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend',   onTouchEnd);
    };
  }, [goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    const globalFooter = document.querySelector('body > main + footer');
    if (globalFooter) globalFooter.style.display = 'none';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (globalFooter) globalFooter.style.display = '';
    };
  }, []);

  // Auto-advance sections
  useEffect(() => {
    const timer = setInterval(() => {
      if (animating.current) return;
      setCurrent(c => {
        const next = (c + 1) % SECTIONS.length;
        animating.current = true;
        setTimeout(() => { animating.current = false; }, 700);
        return next;
      });
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  const Cur = SECTIONS[current];

  return (
    <main style={{ height: '100vh', overflow: 'hidden', background: 'var(--background)', position: 'relative', transition: 'background 0.5s ease' }}>
      <AnimatePresence>
        <motion.div
          key={current}
          variants={fade}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.32, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
        >
          <Cur isDark={isDark} toggleDark={toggleDark} onGo={goTo} current={current} total={SECTIONS.length} />
        </motion.div>
      </AnimatePresence>

      {/* Right side nav dots */}
      <div style={{ position: 'fixed', right: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 50 }}>
        <SideNav current={current} total={SECTIONS.length} onGo={goTo} />
      </div>

<style jsx global>{`
        @keyframes tickerMove {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 760px) {
          .chat-grid  { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .fs-grid    { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 520px) {
          .a11y-grid  { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
