'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/shabnambeiraghian@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'var(--card)',
    border: '1px solid var(--card-border)',
    borderRadius: '6px',
    color: 'var(--foreground)',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '0.92rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Header */}
            <p style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.4rem', fontFamily: "'JetBrains Mono', monospace" }}>
              CONTACT
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
              Get in touch
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '3rem', maxWidth: '480px', lineHeight: 1.7 }}>
              Open to full-time roles, freelance projects, and interesting conversations. I&apos;ll get back to you within a day.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

              {/* Form */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                {status === 'sent' ? (
                  <div style={{ padding: '2rem', border: '1px solid var(--card-border)', borderRadius: '8px', textAlign: 'center' }}>
                    <p style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace", fontWeight: '700', marginBottom: '0.5rem' }}>Message sent!</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>Thanks — I&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>NAME</label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>EMAIL</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>MESSAGE</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What's on your mind?"
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
                      />
                    </div>
                    {status === 'error' && (
                      <p style={{ color: '#e53e3e', fontSize: '0.82rem', fontFamily: "'JetBrains Mono', monospace" }}>Something went wrong. Try emailing me directly.</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.5rem', background: 'var(--accent)', color: 'var(--background)', border: '2px solid var(--accent)', borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', cursor: status === 'sending' ? 'not-allowed' : 'pointer', opacity: status === 'sending' ? 0.7 : 1, letterSpacing: '0.06em', transition: 'background 0.2s, border-color 0.2s', alignSelf: 'flex-start' }}
                    >
                      <FiSend size={13} /> {status === 'sending' ? 'Sending…' : 'Send message'}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Contact info */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: <FiMail size={15} />, label: 'Email', value: 'shabnambeiraghian@gmail.com', href: 'mailto:shabnambeiraghian@gmail.com' },
                  { icon: <FiLinkedin size={15} />, label: 'LinkedIn', value: 'linkedin.com/in/shabnam-beiraghian', href: 'https://linkedin.com/in/shabnam-beiraghian' },
                  { icon: <FiGithub size={15} />, label: 'GitHub', value: 'github.com/curleycoder', href: 'https://github.com/curleycoder' },
                ].map(({ icon, label, value, href }) => (
                  <div key={label}>
                    <p style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>{label.toUpperCase()}</p>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--foreground)', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--foreground)'}
                    >
                      {icon} {value}
                    </a>
                  </div>
                ))}

                <div style={{ marginTop: '1rem', padding: '1.25rem', border: '1px solid var(--card-border)', borderRadius: '8px', background: 'var(--card)' }}>
                  <p style={{ fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>AVAILABILITY</p>
                  <p style={{ color: 'var(--foreground)', fontSize: '0.88rem', lineHeight: 1.65 }}>Open to full-time frontend and full-stack roles. Based in Vancouver, BC — open to remote.</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 640px) {
          .container > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
