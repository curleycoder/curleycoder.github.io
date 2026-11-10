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

function ExperienceItem({ title, company, link, period, bullets }) {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.6rem' }}>
        <div>
          <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{title}</span>
          {company && <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}> · {company}</span>}
          {link && (
            <>
              {' '}
              <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '0.85rem', textDecoration: 'underline' }}>{link.label}</a>
            </>
          )}
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
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.6rem', background: 'var(--lime)', color: '#435058', border: '2px solid var(--lime)', borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'transform 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <FiDownload size={13} /> Download PDF
                </a>
                <a
                  href="https://linkedin.com/in/shabnam-beiraghian"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.6rem', background: 'transparent', color: 'var(--lime)', border: '2px solid var(--lime)', borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'transform 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <FiLinkedin size={13} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Summary */}
            <Section title="Summary" delay={0.1}>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                Full-stack developer and AI product builder who ships real products end to end. Built and deployed an embeddable AI chatbot live on a client&apos;s website and a SaaS immigration tracker (navly.ca). Combines strong systems thinking with fast, practical delivery of tools that solve real business problems.
              </p>
            </Section>

            {/* Experience */}
            <Section title="Experience" delay={0.15}>
              <ExperienceItem
                title="Full Stack Developer"
                company="Self Employed (beiraghian.com) · Burnaby"
                period="JUN 2025 – Present"
                bullets={[
                  'Re-platformed ELIKA Beauty\'s salon operations onto a custom full-stack booking system (React, Node.js, REST API), owning the full process from architecture to deployment on Vercel and Render',
                  'Reduced booking errors by ~90% by building a scheduling engine with conflict detection and automated time-slot validation',
                  'Worked directly with the business owner to gather requirements, iterate on features, and manage the full product lifecycle',
                ]}
              />
              <ExperienceItem
                title="Census Enumerator"
                company="Statistics Canada · Burnaby, BC"
                period="JUN 2026 – AUG 2026"
                bullets={[
                  'Collected and entered census data accurately for households, meeting daily targets and federal data-quality standards',
                  'Explained the census process clearly to residents and handled hesitant or upset people calmly and professionally',
                  'Kept detailed records of every visit and follow-up while working independently with minimal supervision',
                ]}
              />
              <ExperienceItem
                title="Sales Associate / Cashier Team Lead"
                company="Lordco Auto Parts · Vancouver"
                period="NOV 2019 – MAR 2025"
                bullets={[
                  'Served about 100 customers a day in a fast-paced team, quickly finding the right auto parts for their vehicles',
                  'Answered customer phone calls about parts, pricing, and stock, and solved problems on the first call',
                  'Led the cashier team: trained new staff, managed shift coverage, and kept transactions accurate',
                  'Handled returns, complaints, and difficult situations calmly, helping keep customers satisfied and coming back',
                  'Used inventory and point-of-sale systems daily to look up parts, check stock, and process transactions accurately',
                ]}
              />
            </Section>

            {/* Projects */}
            <Section title="Projects" delay={0.2}>
              <ExperienceItem
                title="Navly — Canadian Immigration Tracker (SaaS)"
                link={{ href: 'https://navly.ca', label: 'navly.ca' }}
                period="APR 2026"
                bullets={[
                  'Built and launched a freemium SaaS that helps immigrants track their Canadian PR pathway — CRS score estimator, stage-based checklist, and live IRCC draw notifications',
                  'Sole founder — owned product design, full-stack build (Next.js, Supabase), pricing, and go-to-market end to end',
                ]}
              />
              <ExperienceItem
                title="DEW AI Chatbot — Embeddable AI Front-Desk Tool"
                link={{ href: 'https://dew.beiraghian.com', label: 'dew.beiraghian.com' }}
                period="DEC 2025"
                bullets={[
                  'Built and deployed an embeddable AI assistant (Next.js, FastAPI, Google Gemini API) now active on ELIKA Beauty\'s website — automating customer inquiries around the clock',
                  'Designed a prompt engineering system using injected knowledge files to deliver context-aware, business-specific responses without hallucination',
                ]}
              />
            </Section>

            {/* Education */}
            <Section title="Education" delay={0.25}>
              {[
                { school: 'British Columbia Institute of Technology (BCIT)', program: 'Full Stack Web Development Diploma — With Distinction', period: 'APR 2026' },
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
            <Section title="Volunteer" delay={0.3}>
              {[
                { org: 'nwPlus', role: 'HackCamp Judge', period: 'NOV 2026' },
                { org: 'BCIT Women In Computing (WiC)', role: 'Social Media Director', period: 'SEP 2025 – APR 2026' },
                { org: 'Web Summit Vancouver', role: 'Analytics & Data Collection', period: 'MAY 2026' },
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

          </motion.div>
        </div>
      </section>
    </div>
  );
}
