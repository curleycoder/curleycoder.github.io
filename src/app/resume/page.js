'use client';

import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

function Section({ title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ marginBottom: '2.5rem' }}
    >
      <h2
        style={{
          fontSize: '0.7rem',
          fontWeight: '700',
          letterSpacing: '0.14em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid var(--card-border)',
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {title}
      </h2>
      {children}
    </motion.div>
  );
}

function ExperienceItem({ title, company, period, bullets }) {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.6rem' }}>
        <div>
          <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{title}</span>
          <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}> · {company}</span>
        </div>
        <span style={{ color: 'var(--muted)', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{period}</span>
      </div>
      <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.4rem', fontFamily: "'JetBrains Mono', monospace" }}>RESUME</p>
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>
                  Shabnam Beiraghian
                </h1>
                <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '1.25rem' }}>Full Stack Developer — Vancouver, BC</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {[
                    { icon: <FiMail size={13} />, label: 'shabnambeiraghian@gmail.com', href: 'mailto:shabnambeiraghian@gmail.com' },
                    { icon: <FiGithub size={13} />, label: 'github.com/curleycoder', href: 'https://github.com/curleycoder' },
                    { icon: <FiLinkedin size={13} />, label: 'linkedin.com/in/shabnam-beiraghian', href: 'https://linkedin.com/in/shabnam-beiraghian' },
                  ].map(({ icon, label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--muted)', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                    >
                      {icon} {label}
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <a
                  href="/resume.pdf"
                  download
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.6rem', background: '#435058', color: '#f1f2ee', border: '2px solid #435058', borderRadius: '6px', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#dcf763'; e.currentTarget.style.borderColor = '#dcf763'; e.currentTarget.style.color = '#435058'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#435058'; e.currentTarget.style.borderColor = '#435058'; e.currentTarget.style.color = '#f1f2ee'; }}
                >
                  <FiDownload size={14} /> Download PDF
                </a>
                <a
                  href="https://linkedin.com/in/shabnam-beiraghian"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.6rem', background: 'transparent', color: 'var(--foreground)', border: '2px solid var(--card-border)', borderRadius: '6px', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#435058'; e.currentTarget.style.color = '#435058'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--foreground)'; }}
                >
                  <FiLinkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Summary */}
            <Section title="Summary" delay={0.1}>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                Full-stack developer with a background in architectural engineering, applying structured design principles to build reliable, user-focused web applications. Experienced in developing and maintaining production systems.
              </p>
            </Section>

            {/* Experience */}
            <Section title="Experience" delay={0.15}>
              <ExperienceItem
                title="Frontend Developer"
                company="Community of Guardians"
                period="JAN 2026 – Present"
                bullets={[
                  'Deliver UI updates aligned with Figma design system, improving consistency',
                  'Build reusable responsive components and support Agile team workflows',
                ]}
              />
              <ExperienceItem
                title="Full Stack Developer"
                company="Elika Beauty"
                period="JUN 2025 – Present"
                bullets={[
                  'Design and deploy a full-stack booking platform used in daily business operations',
                  'Build REST APIs and scheduling logic with conflict prevention and time-slot validation',
                  'Develop responsive React frontend optimized for real user interactions',
                  'Manage deployment (Vercel, Render), ensuring system reliability and performance',
                ]}
              />
              <ExperienceItem
                title="Enumerator"
                company="Statistics Canada"
                period="JUN 2026 - JUL 2026"
                bullets={[
                  'Conducted door-to-door data collection for the national census across assigned geographic areas',
                  'Ensured accurate and complete census responses from households within the designated enumeration area',
                  'Handled sensitive personal data with confidentiality in compliance with Statistics Canada protocols',
                ]}
              />
              <ExperienceItem
                title="Customer Operations & Team Lead"
                company="Lordco Auto Parts"
                period="NOV 2019 – MAR 2025"
                bullets={[
                  'Managed high-volume customer interactions (~100/day) in fast-paced environment',
                  'Coordinated team operations and ensured accuracy in transactions',
                ]}
              />
            </Section>

            {/* Projects */}
            <Section title="Projects" delay={0.2}>
              <ExperienceItem
                title="DEW AI Assistant — AI Chatbot"
                company=""
                period="December 2025"
                bullets={[
                  'Built and deployed an AI chatbot assistant integrated into business websites',
                  'Automated customer inquiries with intent-based response flows and human escalation paths',
                  'Reduced repetitive customer messages and improved response time for service businesses',
                ]}
              />
              <ExperienceItem
                title="Navly — Immigration Tracker"
                company=""
                period="2025"
                bullets={[
                  'Designed and launched an immigration tracking app to help users monitor application status, deadlines, and document requirements',
                  'Built a clear dashboard with status timelines and deadline alerts to simplify a complex, stressful process',
                  'Owned the full development lifecycle from concept to production deployment',
                ]}
              />
            </Section>

            {/* Technical Skills */}
            <Section title="Technical Skills" delay={0.25}>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.8, fontFamily: "'JetBrains Mono', monospace" }}>
                JavaScript · TypeScript · React · Next.js · React Native · Node.js · Express · Hono · Bun · MongoDB · PostgreSQL · Supabase · Drizzle ORM · Redis · Clerk · Auth0 · Tailwind CSS · Framer Motion · Git · Vercel · Render · AWS S3 · CI/CD · Figma · Accessibility (WCAG)
              </p>
            </Section>

            {/* Education */}
            <Section title="Education" delay={0.3}>
              {[
                { school: 'British Columbia Institute of Technology (BCIT)', program: 'Diploma of Full Stack Development', period: 'APR 2026' },
                { school: 'Islamic Azad University', program: 'Bachelor of Architectural Engineering', period: 'JAN 2019' },
              ].map((edu) => (
                <div key={edu.school} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{edu.school}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{edu.period}</span>
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                    <li style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>{edu.program}</li>
                  </ul>
                </div>
              ))}
            </Section>

            {/* Volunteer */}
            <Section title="Volunteer" delay={0.35}>
              {[
                { org: 'BCIT Women In Computing (WiC)', role: 'Social Media Director', period: 'SEP 2025 – Present' },
                { org: 'Web Summit Vancouver', role: 'Data Collection & Analytics', period: 'MAY 2025' },
              ].map((v) => (
                <div key={v.org} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{v.org}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{v.period}</span>
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                    <li style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>{v.role}</li>
                  </ul>
                </div>
              ))}
            </Section>

            {/* Awards */}
            <Section title="Awards" delay={0.4}>
              <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { title: 'Pam and Jerry Bastien Bursary — BCIT Special Bursaries', period: 'March 2025' },
                  { title: 'BCIT Legacy of Leadership Bursary', period: 'March 2026' },
                ].map((award) => (
                  <li key={award.title} style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span style={{ color: 'var(--foreground)', fontWeight: '600' }}>{award.title}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{award.period}</span>
                  </li>
                ))}
              </ul>
            </Section>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
