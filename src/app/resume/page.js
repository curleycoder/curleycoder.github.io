'use client';

import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiGlobe, FiDownload } from 'react-icons/fi';

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

            {/* Experience */}
            <Section title="Experience" delay={0.1}>
              <ExperienceItem
                title="Frontend Developer"
                company="Community of Guardians"
                period="JAN 2026 – Present"
                bullets={[
                  'Improved UI consistency across the platform by delivering weekly ticket-based updates aligned with the Figma design system',
                  'Transformed static designs into responsive, reusable components, improving maintainability and development speed',
                  'Strengthened team delivery by collaborating in Agile workflows (Git, Taiga, code reviews), contributing to smoother releases and clearer progress tracking',
                ]}
              />
              <ExperienceItem
                title="Full Stack Developer"
                company="Elika Beauty"
                period="JUN 2025 – Present"
                bullets={[
                  'Replaced manual booking and scheduling processes by designing and maintaining a full-stack platform used in daily business operations',
                  'Built core features (online booking, scheduling logic, admin dashboard), improving appointment management and reducing operational friction',
                  'Led end-to-end delivery (architecture, APIs, deployment on Vercel/Render), ensuring reliable performance and continuous system improvements',
                ]}
              />
              <ExperienceItem
                title="Customer Operations & Team Lead"
                company="Lordco Auto Parts"
                period="NOV 2019 – MAR 2025"
                bullets={[
                  'Handled ~100 daily customers, improving service speed through accurate problem diagnosis',
                  'Coordinated a team of 4 cashiers, ensuring smooth operations in a high-volume environment',
                  'Managed high-volume transactions, maintaining accurate reconciliation',
                ]}
              />
            </Section>

            {/* Projects */}
            <Section title="Projects" delay={0.2}>
              <ExperienceItem
                title="Full Stack Developer & Technical Project Manager"
                company="Forge"
                period="SEP 2025 – DEC 2025"
                bullets={[
                  'Built a mobile application in an 8-person cross-disciplinary team to help high-school students explore skilled-trade career pathways',
                ]}
              />
              <ExperienceItem
                title="Full Stack Developer & Scrum Master"
                company="LendItOut"
                period="APR 2025 – MAY 2025"
                bullets={[
                  'Developed a responsive web application in a 3-person team, translating high-fidelity Figma designs into a functional production-ready UI',
                ]}
              />
            </Section>

            {/* Education */}
            <Section title="Education" delay={0.3}>
              {[
                { school: 'British Columbia Institute of Technology (BCIT)', program: 'Diploma of Full Stack Development', year: '2024 – 2025' },
                { school: 'Islamic Azad University', program: 'Bachelor of Architectural Engineering', year: '2017 – 2022' },
              ].map((edu) => (
                <div key={edu.school} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.875rem' }}>
                  <div>
                    <p style={{ fontWeight: '600', fontSize: '0.925rem' }}>{edu.school}</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{edu.program}</p>
                  </div>
                  <span style={{ color: 'var(--muted)', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace" }}>{edu.year}</span>
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

            {/* Skills */}
            <Section title="Technical Skills" delay={0.4}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { label: 'Languages & Frameworks', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Hono', 'PHP', '.NET', 'Python', 'C#'] },
                  { label: 'Databases & Backend', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL', 'Prisma'] },
                  { label: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render', 'Jira', 'Trello', 'Slack', 'AWS S3', 'CI/CD', 'RESTful APIs', 'UI/UX', 'Agile', 'OOP', 'Xcode'] },
                ].map(({ label, items }) => (
                  <div key={label} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'baseline' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em', minWidth: '160px', fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>
                      {label}
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {items.map(item => <span key={item} className="tag">{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
