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
                <a href="/resume.pdf" download className="btn-primary">
                  <FiDownload size={14} /> Download PDF
                </a>
                <a href="https://linkedin.com/in/shabnam-beiraghian" target="_blank" rel="noopener noreferrer" className="btn-outline">
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
                title="DEW AI Chatbot — Customer Interaction Tool"
                company=""
                period="December 2025"
                bullets={[
                  'Built and deployed AI chatbot integrated into business websites',
                  'Automated customer inquiries, improving response time and reducing manual workload',
                ]}
              />
              <ExperienceItem
                title="Forge — Mobile Trade Career App"
                company="Technical Manager & Full-Stack Developer · Team of 4"
                period="September 2025"
                bullets={[
                  'Led technical direction as Technical Manager — translated Figma specs into engineering requirements and reviewed all pull requests before merge',
                  'Built My Pathways and Explore Careers screens end-to-end, including AI-powered trade recommendations using Google GenAI SDK',
                  'Owned the deployment pipeline and coordinated the final demo presentation across the team',
                  'Backend built with Hono + Bun for high-speed performance; Redis-backed caching for mobile responsiveness',
                ]}
              />
              <ExperienceItem
                title="LendItOut — Peer-to-Peer Lending Platform"
                company="Scrum Master & Full-Stack Developer · Team of 4"
                period="April 2025"
                bullets={[
                  'Acted as Scrum Master — ran sprints, daily standups, and unblocked team throughout the project lifecycle',
                  'Owned homepage, chat system, notifications, and product detail pages — handling frontend, backend, and database design for each feature',
                  'Introduced a branching strategy mid-project that eliminated merge conflicts and taught the team professional collaboration on shared code',
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
                { school: 'British Columbia Institute of Technology (BCIT)', program: 'Diploma of Full Stack Development' },
                { school: 'Islamic Azad University', program: 'Bachelor of Architectural Engineering' },
              ].map((edu) => (
                <div key={edu.school} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.875rem' }}>
                  <div>
                    <p style={{ fontWeight: '600', fontSize: '0.925rem' }}>{edu.school}</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{edu.program}</p>
                  </div>
                </div>
              ))}
            </Section>

            {/* Volunteer */}
            <Section title="Volunteer" delay={0.35}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem' }}>
                <div>
                  <span style={{ fontWeight: '600', fontSize: '0.925rem' }}>BCIT Women In Computing (WiC)</span>
                  <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}> · Social Media Director</span>
                </div>
                <span style={{ color: 'var(--muted)', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace" }}>SEP 2025 – Present</span>
              </div>
            </Section>

            {/* Awards */}
            <Section title="Awards" delay={0.4}>
              {[
                { title: 'Pam and Jerry Bastien Bursary; BCIT Special Bursaries', period: 'March 2025' },
                { title: 'PBCIT Legacy of Leadership Bursary', period: 'March 2026' },
              ].map((award) => (
                <div key={award.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontWeight: '600', fontSize: '0.925rem' }}>{award.title}</span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{award.period}</span>
                </div>
              ))}
            </Section>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
