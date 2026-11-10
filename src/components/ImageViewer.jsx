'use client';

import { useState } from 'react';

export default function ImageViewer({ images, title, type }) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) return null;

  const current = images[active];
  const src = typeof current === 'string' ? current : current.src;
  const caption = typeof current === 'string' ? null : current.caption;

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  const isMobile = type === 'mobile';

  const arrows = images.length > 1 && (
    <>
      <button onClick={prev} style={{ position: 'absolute', left: isMobile ? '-2.5rem' : '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'var(--arrow-bg)', border: '1px solid var(--card-border)', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', color: 'var(--arrow-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)', flexShrink: 0 }}>
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4L6 8l4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <button onClick={next} style={{ position: 'absolute', right: isMobile ? '-2.5rem' : '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'var(--arrow-bg)', border: '1px solid var(--card-border)', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', color: 'var(--arrow-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)', flexShrink: 0 }}>
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: isMobile ? 'center' : 'stretch' }}>

      {/* Frame */}
      {isMobile ? (
        /* Phone frame */
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div
            style={{
              width: '240px',
              borderRadius: '2.6rem',
              border: '6px solid #2a2a45',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,0.5)',
              overflow: 'hidden',
              lineHeight: 0,
            }}
          >
            <img
              src={src}
              alt={caption || `${title} screenshot ${active + 1}`}
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
          {arrows}
        </div>
      ) : (
        /* Browser frame */
        <div style={{ borderRadius: '0.875rem', overflow: 'hidden', border: '1px solid var(--card-border)', background: 'var(--card)', position: 'relative' }}>
          <div style={{ background: '#1a1a2e', borderBottom: '1px solid var(--card-border)', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28ca41', display: 'block' }} />
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '0.35rem', padding: '0.2rem 0.75rem', fontSize: '0.72rem', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {title.toLowerCase().replace(/\s+/g, '')}
            </div>
          </div>
          <div style={{ position: 'relative', lineHeight: 0 }}>
            <img src={src} alt={caption || `${title} screenshot ${active + 1}`} style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '220px', objectFit: 'cover' }} />
            {arrows}
          </div>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.5, textAlign: isMobile ? 'center' : 'left' }}>{caption}</p>
      )}

      {/* Thumbnails */}
      {images.length > 1 && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.1em', fontFamily: "'JetBrains Mono', monospace" }}>GALLERY</span>
            <span style={{ color: 'var(--muted)', fontSize: '0.7rem', fontFamily: "'JetBrains Mono', monospace" }}>{active + 1}/{images.length}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
            {images.map((img, i) => {
              const thumbSrc = typeof img === 'string' ? img : img.src;
              return (
                <button key={i} onClick={() => setActive(i)} style={{ flexShrink: 0, padding: 0, background: 'none', border: 'none', cursor: 'pointer', borderRadius: '0.4rem', overflow: 'hidden', outline: i === active ? '2px solid var(--primary)' : '2px solid transparent', outlineOffset: '2px', transition: 'outline 0.15s' }}>
                  <img src={thumbSrc} alt={`thumbnail ${i + 1}`} style={{ width: isMobile ? '48px' : '72px', height: isMobile ? '80px' : '48px', objectFit: 'cover', display: 'block' }} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
