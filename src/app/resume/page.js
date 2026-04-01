'use client';

import { motion } from 'framer-motion';

export default function ResumePage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ padding: '4rem 0 3rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              RESUME
            </p>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.75rem' }}>
              Shabnam Beiraghian
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '2rem', maxWidth: '480px' }}>
              Full-Stack Developer — Vancouver, BC
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="/resume.pdf"
                download
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                View on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume viewer */}
      <section style={{ padding: '0 0 4rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* PDF embed */}
            <div
              style={{
                border: '1px solid var(--card-border)',
                borderRadius: '1rem',
                overflow: 'hidden',
                background: 'var(--card)',
              }}
            >
              <object
                data="/resume.pdf"
                type="application/pdf"
                width="100%"
                style={{ height: '80vh', display: 'block' }}
              >
                <div
                  style={{
                    padding: '4rem 2rem',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                    PDF preview not available in your browser.
                  </p>
                  <a href="/resume.pdf" download className="btn-primary">
                    Download resume
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick snapshot */}
      <section style={{ padding: '0 0 6rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  paddingBottom: '0.625rem',
                  borderBottom: '1px solid var(--card-border)',
                }}
              >
                Education
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  {
                    school: 'BCIT',
                    program: 'Diploma in Computer Systems Technology',
                    year: '2024–2025',
                  },
                  {
                    school: 'University (Iran)',
                    program: "Bachelor's in Architectural Engineering",
                    year: '2017–2022',
                  },
                ].map((edu) => (
                  <div
                    key={edu.school}
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '0.75rem',
                      padding: '1rem 1.25rem',
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
                    <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  paddingBottom: '0.625rem',
                  borderBottom: '1px solid var(--card-border)',
                }}
              >
                Key Skills
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[
                  'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS',
                  'Supabase', 'PostgreSQL', 'Auth0', 'Framer Motion', 'Git',
                  'Figma', 'REST APIs', 'React Native', 'Agile / Scrum',
                ].map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
