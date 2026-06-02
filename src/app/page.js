'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiExternalLink } from 'react-icons/fi';

const YELLOW = '#ffffff';
const DARK_TEXT = '#46505C';
const WHITE = '#000000';

const SECTION_LABELS = ['Home', 'Accessibility', 'Theme', 'UX & UI'];

const SKILLS = [
  {
    title: 'AI Agents',
    desc: 'AI assistant flows that help users ask better questions, understand options, and take action.',
  },
  {
    title: 'Chatbots',
    desc: 'Business chatbots for FAQs, lead capture, service guidance, and booking support.',
  },
  {
    title: 'Frontend',
    desc: 'Polished, responsive interfaces with strong UI detail and clean user interaction.',
  },
  {
    title: 'Accessibility',
    desc: 'Semantic HTML, keyboard support, focus states, contrast, forms, and reduced motion.',
  },
];

const PROJECTS = [
  {
    name: 'Navly',
    desc: 'AI-powered Canadian immigration guidance platform that turns complex pathways into clearer user journeys.',
    stack: 'Next.js · Supabase · AI Assistant · UX Flow',
    href: '/projects/navly',
  },
  {
    name: 'Dew AI Assistant',
    desc: 'AI chatbot system for service businesses — answers questions, guides users, and captures leads.',
    stack: 'React · Node.js · AI API · Lead Capture',
    href: '/projects/dew',
  },
  {
    name: 'Elika Beauty',
    desc: 'Booking-focused business website with service pages, SEO, mobile UX, and clear conversion flow.',
    stack: 'React · Tailwind · Booking UX · SEO',
    href: '/case-studies/elika-beauty',
  },
];

function BottomDots({ current, total, onGo }) {
  return (
    <div
      aria-label="Section navigation"
      style={{
        marginTop: '4rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '0.85rem',
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGo(i)}
          aria-label={`Go to ${SECTION_LABELS[i]} section`}
          style={{
            width: i === current ? '18px' : '18px',
            height: '18px',
            borderRadius: '999px',
            border: `2px solid ${i === current ? '#BE00B5' : '#828282'}`,
            background: i === current ? '#BE00B5' : 'transparent',
            cursor: 'pointer',
            padding: 0,
            backgroundImage: 'none',
          }}
        />
      ))}
    </div>
  );
}

function CornerSymbols() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          left: '1.25rem',
          zIndex: 20,
          color: '#000000',
          fontSize: '1.25rem',
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '-0.2em',
        }}
      >
        △○□
      </div>

      <button
        aria-label="Portfolio information"
        style={{
          position: 'fixed',
          bottom: '1.15rem',
          right: '1.15rem',
          zIndex: 20,
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '2px solid #000000',
          background: 'transparent',
          color: '#000000',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        i
      </button>
    </>
  );
}

function TextureLayer() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
        backgroundSize: '5px 5px',
        opacity: 0.14,
        pointerEvents: 'none',
      }}
    />
  );
}

function HeroSection({ current, total, onGo }) {
  const [helloHovered, setHelloHovered] = useState(false);

  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        background: YELLOW,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: WHITE,
      }}
    >
      <TextureLayer />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 1.5rem',
          maxWidth: '1120px',
        }}
      >
        <p
          onMouseEnter={() => setHelloHovered(true)}
          onMouseLeave={() => setHelloHovered(false)}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontweight: 700,
            fontSize: '2rem',
            letterSpacing: '0.08em',
            margin: '0 0 1rem',
            cursor: 'default',
            transition: 'opacity 0.15s ease',
          }}
        >
          {helloHovered ? (
            <>
              <span style={{ color: '#BE00B5' }}>print</span>
              <span style={{ color: '#000000' }}>(&#34;Hello, world!&#34;);</span>
            </>
          ) : (
            <span style={{ color: '#BE00B5' }}>Hello, world!</span>
          )}
        </p>

        <h1
          style={{
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            fontSize: 'clamp(3.5rem, 12vw, 10.5rem)',
            lineHeight: 0.9,
            fontWeight: 900,
            margin: 0,
            color: WHITE,
            textTransform: 'uppercase',
          }}
        >
          I&#39;m Shabnam
        </h1>

        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
            color: 'rgba(70,80,92,0.75)',
            margin: '0.6rem 0 0',
            letterSpacing: '0.04em',
          }}
        >
          /ʃəbˈnæm/ a Persian name meaning "morning dew"
        </p>

        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: 'clamp(1.35rem, 3vw, 2.65rem)',
            lineHeight: 1.05,
            color: DARK_TEXT,
            margin: '2rem auto 3rem',
            maxWidth: '840px',
          }}
        >
          I'm a Full-Stack Developer
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.15rem', justifyContent: 'center' }}>
          <button
            onClick={() => onGo(1)}
            onMouseEnter={e => { e.currentTarget.style.border = '2px solid #000000'; e.currentTarget.style.color = '#000000'; }}
            onMouseLeave={e => { e.currentTarget.style.border = '2px solid #BE00B5'; e.currentTarget.style.color = '#BE00B5'; }}
            style={{
              padding: '0.5rem 1.15rem',
              borderRadius: '7px',
              border: '2px solid #BE00B5',
              background: 'transparent',
              color: '#BE00B5',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.35rem',
              lineHeight: 1,
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
          >
            View Projects
          </button>
          <button
            onClick={() => onGo(1)}
            onMouseEnter={e => { e.currentTarget.style.background = '#000000'; e.currentTarget.style.borderColor = '#000000'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#BE00B5'; e.currentTarget.style.borderColor = '#BE00B5'; }}
            style={{
              padding: '0.8rem 1.15rem',
              borderRadius: '7px',
              border: '2px solid #BE00B5',
              background: '#BE00B5',
              color: '#ffffff',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.35rem',
              lineHeight: 1,
              cursor: 'pointer',
              transition: 'background 0.2s ease, border-color 0.2s ease',
            }}
          >
            Resume
          </button>
        </div>

        <BottomDots current={current} total={total} onGo={onGo} />
      </motion.div>
    </section>
  );
}

function AccessibilitySection({ current, total, onGo }) {
  const items = [
    { label: 'Keyboard Navigation', desc: 'Every interaction reachable without a mouse.' },
    { label: 'Screen Reader Support', desc: 'Semantic HTML and ARIA labels done right.' },
    { label: 'Colour Contrast', desc: 'WCAG AA/AAA contrast on every text element.' },
    { label: 'Reduced Motion', desc: 'Animations respect prefers-reduced-motion.' },
  ];
  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        background: YELLOW,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: WHITE,
      }}
    >
      <TextureLayer />
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2, padding: '0 1.5rem', maxWidth: '900px', width: '100%' }}
      >
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', letterSpacing: '0.1em', color: '#BE00B5', margin: '0 0 0.75rem', textTransform: 'uppercase' }}>
          What I bring to the table
        </p>
        <h2 style={{ fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif", fontSize: 'clamp(3.5rem, 10vw, 8rem)', lineHeight: 0.9, fontWeight: 900, margin: '0 0 1rem', color: WHITE, textTransform: 'uppercase' }}>
          Accessibility First
        </h2>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95rem', color: DARK_TEXT, margin: '0 auto 2rem', maxWidth: '560px', lineHeight: 1.7 }}>
          I build for everyone — not just the average user. Accessibility is baked in from the start, not bolted on at the end.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', textAlign: 'left' }}>
          {items.map((item) => (
            <div key={item.label} style={{ border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: '10px', padding: '1.25rem 1.4rem', background: 'rgba(0,0,0,0.03)' }}>
              <p style={{ fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif", fontSize: '1.4rem', letterSpacing: '0.04em', color: '#BE00B5', margin: '0 0 0.35rem' }}>{item.label}</p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: DARK_TEXT, margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <BottomDots current={current} total={total} onGo={onGo} />
      </motion.div>
    </section>
  );
}

function ThemeSection({ current, total, onGo }) {
  const [dark, setDark] = useState(false);
  const bg = dark ? '#0a0a0a' : '#ffffff';
  const fg = dark ? '#ffffff' : '#000000';
  const sub = dark ? 'rgba(255,255,255,0.55)' : '#46505C';
  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        background: bg,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transition: 'background 0.5s ease',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2, padding: '0 1.5rem', maxWidth: '700px', width: '100%' }}
      >
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', letterSpacing: '0.1em', color: '#BE00B5', margin: '0 0 0.75rem', textTransform: 'uppercase', transition: 'color 0.5s' }}>
          What I bring to the table
        </p>
        <h2 style={{ fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif", fontSize: 'clamp(3.5rem, 10vw, 8rem)', lineHeight: 0.9, fontWeight: 900, margin: '0 0 1rem', color: fg, textTransform: 'uppercase', transition: 'color 0.5s ease' }}>
          {dark ? 'Dark Mode' : 'Light Mode'}
        </h2>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95rem', color: sub, margin: '0 auto 2.5rem', maxWidth: '480px', lineHeight: 1.7, transition: 'color 0.5s ease' }}>
          I design and build for both. Click the toggle to switch — every interface I make works beautifully in either context.
        </p>
        <button
          onClick={() => setDark(d => !d)}
          aria-label="Toggle theme"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1.75rem',
            borderRadius: '999px',
            border: `2px solid ${dark ? '#ffffff' : '#000000'}`,
            background: 'transparent',
            color: fg,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'border-color 0.4s ease, color 0.4s ease',
          }}
        >
          <span style={{ fontSize: '1.4rem' }}>{dark ? '☀️' : '🌙'}</span>
          {dark ? 'Switch to Light' : 'Switch to Dark'}
        </button>
        <BottomDots current={current} total={total} onGo={onGo} />
      </motion.div>
    </section>
  );
}

function UXSection({ current, total, onGo }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        background: YELLOW,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: WHITE,
      }}
    >
      <TextureLayer />
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2, padding: '0 1.5rem', maxWidth: '900px', width: '100%' }}
      >
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', letterSpacing: '0.1em', color: '#BE00B5', margin: '0 0 0.75rem', textTransform: 'uppercase' }}>
          What I bring to the table
        </p>
        <h2 style={{ fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif", fontSize: 'clamp(3.5rem, 10vw, 8rem)', lineHeight: 0.9, fontWeight: 900, margin: '0 0 1rem', color: WHITE, textTransform: 'uppercase' }}>
          UX & UI Design
        </h2>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95rem', color: DARK_TEXT, margin: '0 auto 2rem', maxWidth: '540px', lineHeight: 1.7 }}>
          Good UX is invisible. Bad UX is unforgettable. Click the button to see the difference.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', textAlign: 'left', marginBottom: '1.5rem' }}>
          {/* Bad UX card */}
          <div style={{ border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: '10px', padding: '1.25rem', background: 'rgba(0,0,0,0.03)', opacity: revealed ? 0.35 : 1, transition: 'opacity 0.4s ease' }}>
            <p style={{ fontFamily: 'Arial', fontSize: '0.65rem', color: '#aaa', margin: '0 0 0.5rem' }}>SIGN UP NOW!!!</p>
            <p style={{ fontFamily: 'Comic Sans MS, cursive', fontSize: '0.7rem', color: '#bbb', margin: '0 0 1rem', lineHeight: 1.3 }}>Enter your details below to get access to our amazing platform with all the features you need and more!</p>
            <button style={{ background: '#e00', color: '#ff0', fontFamily: 'Impact', fontSize: '0.65rem', border: 'none', padding: '0.2rem 0.5rem', cursor: 'pointer', borderRadius: '2px' }}>CLICK HERE NOW</button>
            <p style={{ fontFamily: 'Arial', fontSize: '0.55rem', color: '#ccc', marginTop: '0.5rem' }}>❌ Bad UX</p>
          </div>
          {/* Good UX card */}
          <div style={{ border: `1.5px solid ${revealed ? '#BE00B5' : 'rgba(0,0,0,0.12)'}`, borderRadius: '10px', padding: '1.25rem', background: revealed ? 'rgba(190,0,181,0.05)' : 'rgba(0,0,0,0.03)', transition: 'border-color 0.4s ease, background 0.4s ease' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#BE00B5', margin: '0 0 0.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Get started</p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: DARK_TEXT, margin: '0 0 1rem', lineHeight: 1.6 }}>Create your account in seconds. No credit card required.</p>
            <button style={{ background: '#BE00B5', color: '#fff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', border: 'none', padding: '0.45rem 1rem', cursor: 'pointer', borderRadius: '6px' }}>Create account</button>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#BE00B5', marginTop: '0.5rem' }}>✓ Good UX</p>
          </div>
        </div>
        <button
          onClick={() => setRevealed(r => !r)}
          onMouseEnter={e => { e.currentTarget.style.background = '#BE00B5'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#BE00B5'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000000'; e.currentTarget.style.borderColor = '#000000'; }}
          style={{ padding: '0.5rem 1.4rem', border: '2px solid #000000', borderRadius: '7px', background: 'transparent', color: '#000000', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', cursor: 'pointer', transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease' }}
        >
          {revealed ? 'Reset' : 'Show me why it matters →'}
        </button>
        <BottomDots current={current} total={total} onGo={onGo} />
      </motion.div>
    </section>
  );
}

function OldCreateSection({ current, total, onGo }) {
  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        background: YELLOW,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: WHITE,
      }}
    >
      <TextureLayer />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 1.5rem',
          maxWidth: '980px',
          width: '100%',
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            color: DARK_TEXT,
            margin: '0 0 0.5rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          User-first product thinking
        </p>

        <h2
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(4rem, 9vw, 8rem)',
            lineHeight: 0.9,
            letterSpacing: '0.02em',
            fontWeight: 900,
            margin: '0 0 1.6rem',
            color: WHITE,
            textTransform: 'uppercase',
          }}
        >
          I build useful systems
        </h2>

        <div
          className="skill-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            marginTop: '1.5rem',
          }}
        >
          {SKILLS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                minHeight: '170px',
                padding: '1.1rem',
                border: '2px solid rgba(255,255,255,0.85)',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                textAlign: 'left',
              }}
            >
              <h3
                style={{
                  margin: '0 0 0.6rem',
                  fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
                  color: '#000000',
                  fontSize: '1.8rem',
                  letterSpacing: '0.04em',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: 'rgba(70,80,92,0.9)',
                  fontSize: '0.82rem',
                  lineHeight: 1.65,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <BottomDots current={current} total={total} onGo={onGo} />
      </motion.div>
    </section>
  );
}

function ProjectsSection({ current, total, onGo }) {
  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        background: YELLOW,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: WHITE,
      }}
    >
      <TextureLayer />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 1.5rem',
          maxWidth: '920px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            color: DARK_TEXT,
            margin: '0 0 0.5rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          Selected work
        </p>

        <h2
          style={{
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            fontSize: 'clamp(4rem, 9vw, 8rem)',
            lineHeight: 0.9,
            letterSpacing: '0.02em',
            fontWeight: 900,
            margin: '0 0 1.3rem',
            color: WHITE,
            textTransform: 'uppercase',
          }}
        >
          Work & AI
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '0.8rem',
            textAlign: 'left',
            marginTop: '1.25rem',
          }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.45 }}
            >
              <Link
                href={project.href}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '1rem 1.15rem',
                  border: '2px solid rgba(255,255,255,0.86)',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.09)',
                  color: '#000000',
                  textDecoration: 'none',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: '0 0 0.25rem',
                      fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
                      fontSize: '1.65rem',
                      letterSpacing: '0.04em',
                      color: '#000000',
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      margin: '0 0 0.45rem',
                      color: DARK_TEXT,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.82rem',
                      lineHeight: 1.55,
                    }}
                  >
                    {project.desc}
                  </p>
                  <span
                    style={{
                      color: 'rgba(255,255,255,0.9)',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.68rem',
                    }}
                  >
                    {project.stack}
                  </span>
                </div>
                <FiArrowRight size={18} style={{ flexShrink: 0, marginTop: '0.45rem' }} />
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          href="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginTop: '1rem',
            color: '#000000',
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            fontSize: '1.25rem',
            letterSpacing: '0.04em',
            textDecoration: 'underline',
            textUnderlineOffset: '5px',
          }}
        >
          See all work <FiExternalLink size={14} />
        </Link>

        <BottomDots current={current} total={total} onGo={onGo} />
      </motion.div>
    </section>
  );
}

function ContactSection({ current, total, onGo }) {
  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: YELLOW,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: WHITE,
      }}
    >
      <TextureLayer />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 1.5rem',
          maxWidth: '900px',
        }}
      >
        <p
          style={{
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            color: DARK_TEXT,
            margin: '0 0 0.5rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          Let's connect
        </p>

        <h2
          style={{
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            fontSize: 'clamp(4rem, 9vw, 8rem)',
            lineHeight: 0.9,
            letterSpacing: '0.02em',
            fontWeight: 900,
            margin: '0 0 1rem',
            color: WHITE,
            textTransform: 'uppercase',
          }}
        >
          Build useful tech
        </h2>

        <p
          style={{
            maxWidth: '680px',
            margin: '0 auto 1.5rem',
            color: DARK_TEXT,
            fontSize: '0.95rem',
            lineHeight: 1.75,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          I'm looking for frontend, full-stack, and AI product opportunities where I can build
          accessible, user-first experiences.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.9rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="mailto:hello@shabnam.dev"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.52rem 1.15rem',
              border: '2px solid #000000',
              borderRadius: '8px',
              color: '#000000',
              textDecoration: 'none',
              fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
              fontSize: '1.25rem',
              letterSpacing: '0.04em',
            }}
          >
            <FiMail size={15} /> Email
          </a>

          <a
            href="https://linkedin.com/in/shabnam-beiraghian"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.52rem 1.15rem',
              border: '2px solid #000000',
              borderRadius: '8px',
              color: '#000000',
              textDecoration: 'none',
              fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
              fontSize: '1.25rem',
              letterSpacing: '0.04em',
            }}
          >
            <FiLinkedin size={15} /> LinkedIn
          </a>

          <a
            href="https://github.com/curleycoder"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.52rem 1.15rem',
              border: '2px solid #000000',
              borderRadius: '8px',
              color: '#000000',
              textDecoration: 'none',
              fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
              fontSize: '1.25rem',
              letterSpacing: '0.04em',
            }}
          >
            <FiGithub size={15} /> GitHub
          </a>
        </div>

        <BottomDots current={current} total={total} onGo={onGo} />
      </motion.div>
    </section>
  );
}

const SECTION_COMPONENTS = [HeroSection, CreateSection, ProjectsSection, ContactSection];

const pageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const isAnimating = useRef(false);
  const lastWheelTime = useRef(0);
  const touchStartY = useRef(null);

  const goTo = useCallback(
    (next) => {
      if (next === current || isAnimating.current) return;
      if (next < 0 || next >= SECTION_COMPONENTS.length) return;

      setCurrent(next);
      isAnimating.current = true;

      setTimeout(() => {
        isAnimating.current = false;
      }, 750);
    },
    [current]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onWheel = (e) => {
      const now = Date.now();
      if (now - lastWheelTime.current < 850) return;

      lastWheelTime.current = now;

      if (e.deltaY > 30) goNext();
      if (e.deltaY < -30) goPrev();
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [goNext, goPrev]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goNext();
      if (e.key === 'ArrowUp' || e.key === 'PageUp') goPrev();

      if (e.key === 'Home') goTo(0);
      if (e.key === 'End') goTo(SECTION_COMPONENTS.length - 1);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SECTION_COMPONENTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (touchStartY.current === null) return;

      const diff = touchStartY.current - e.changedTouches[0].clientY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext();
        else goPrev();
      }

      touchStartY.current = null;
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.background = YELLOW;

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.background = '';
    };
  }, []);

  const CurrentSection = SECTION_COMPONENTS[current];

  return (
    <main
      style={{
        height: '100vh',
        overflow: 'hidden',
        background: YELLOW,
        position: 'relative',
      }}
    >
      <AnimatePresence>
        <motion.div
          key={current}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          <CurrentSection current={current} total={SECTION_COMPONENTS.length} onGo={goTo} />
        </motion.div>
      </AnimatePresence>

      <CornerSymbols />

      <div
        style={{
          position: 'fixed',
          bottom: '1.55rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          color: 'rgba(255,255,255,0.78)',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.68rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'block' }}
          >
            {String(current + 1).padStart(2, '0')} / {String(SECTION_COMPONENTS.length).padStart(2, '0')} —{' '}
            {SECTION_LABELS[current]}
          </motion.span>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .skill-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 620px) {
          .skill-grid {
            grid-template-columns: 1fr !important;
          }

          h1,
          h2 {
            word-break: normal;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}