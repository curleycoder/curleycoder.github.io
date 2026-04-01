'use client';

import { motion } from 'framer-motion';

const experience = [
  // TODO: fill in your work experience
  // {
  //   title: 'Job Title',
  //   company: 'Company Name',
  //   period: 'Jan 2024 – Present',
  //   location: 'Vancouver, BC',
  //   bullets: [
  //     'Did something impactful',
  //     'Built something cool',
  //   ],
  // },
];

const education = [
  {
    school: 'BCIT',
    program: 'Diploma in Computer Systems Technology',
    year: '2024–2025',
    location: 'Vancouver, BC',
  },
  {
    school: 'University (Iran)',
    program: "Bachelor's in Architectural Engineering",
    year: '2017–2022',
    location: 'Iran',
  },
];

const skills = {
  Frontend: ['React', 'Next.js App Router', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
  Backend: ['Node.js', 'REST APIs', 'Supabase', 'PostgreSQL', 'Drizzle ORM', 'Auth0', 'Resend'],
  Mobile: ['React Native', 'Expo', 'Xcode'],
  Tools: ['Git', 'GitHub', 'Figma', 'Vercel', 'AWS S3', 'Postman', 'VS Code'],
  Leadership: ['Agile', 'Scrum', 'Scrum Master', 'Sprint Planning', 'Jira'],
};

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2
        style={{
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '0.12em',
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
    </div>
  );
}

export default function ResumePage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            {/* Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}
            >
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  RESUME
                </p>
                <h1
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    fontWeight: '800',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.4rem',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Shabnam Beiraghian
                </h1>
                <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>
                  Full-Stack Developer — Vancouver, BC
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <a href="/resume.pdf" download className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </a>
                <a
                  href="https://linkedin.com/in/shabnamb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Experience */}
            {experience.length > 0 && (
              <Section title="Experience">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {experience.map((job, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.4rem' }}>
                        <div>
                          <span style={{ fontWeight: '700', fontSize: '0.975rem' }}>{job.title}</span>
                          <span style={{ color: 'var(--accent)', fontWeight: '500', fontSize: '0.9rem' }}> · {job.company}</span>
                        </div>
                        <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{job.period} · {job.location}</span>
                      </div>
                      <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        {job.bullets.map((b, j) => (
                          <li key={j} style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Education */}
            <Section title="Education">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    <div>
                      <p style={{ fontWeight: '600', fontSize: '0.925rem' }}>{edu.school}</p>
                      <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{edu.program}</p>
                    </div>
                    <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{edu.year} · {edu.location}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Skills */}
            <Section title="Skills">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'baseline' }}>
                    <span
                      style={{
                        color: 'var(--muted)',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        minWidth: '90px',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {category}
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {items.map((item) => (
                        <span key={item} className="tag">{item}</span>
                      ))}
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
