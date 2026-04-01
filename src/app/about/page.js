'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const activities = [
  { name: 'Tennis', caption: 'I serve. Sometimes it goes in.' },
  { name: 'Stanley Park biking', caption: 'Seawall laps. One speed: fast enough.' },
  { name: 'Road trips', caption: 'The best UI is an open highway.' },
  { name: 'Skiing', caption: 'Still learning to stop gracefully.' },
  { name: 'Paddleboarding', caption: 'Falling in counts as commitment.' },
  { name: 'Pilates', caption: "Looks easy, but trust me it's not." },
];

const passions = [
  { name: 'Cinema', note: 'Three-hour films that feel like thirty minutes.' },
  { name: 'Giraffes', note: "The most impractical animal. I respect that." },
  { name: 'Whales', note: 'Largest brain on the planet. I relate.' },
  { name: 'Moon watching', note: 'Same moon, different city, different year.' },
  { name: 'Snow globes', note: 'A whole world you can hold.' },
];

const places = [
  { city: 'Paris', country: 'France' },
  { city: 'Venice', country: 'Italy' },
  { city: 'Florence', country: 'Italy' },
  { city: 'Rome', country: 'Italy' },
  { city: 'Milan', country: 'Italy' },
  { city: 'Cologne', country: 'Germany' },
  { city: 'Stuttgart', country: 'Germany' },
  { city: 'Cancún', country: 'Mexico' },
  { city: 'Tehran', country: 'Iran' },
  { city: 'Toronto', country: 'Canada' },
  { city: 'Calgary', country: 'Canada' },
  { city: 'Banff', country: 'Canada' },
  { city: 'Los Angeles', country: 'USA' },
  { city: 'Seattle', country: 'USA' },
  { city: 'Tacoma', country: 'USA' },
  { city: 'Las Vegas', country: 'USA' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section
        style={{
          padding: '5rem 0 3rem',
          background: 'linear-gradient(180deg, rgba(109,40,217,0.05) 0%, transparent 100%)',
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              ABOUT
            </p>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
              }}
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Shabnam</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: '1.75rem', fontSize: '0.9rem' }}>
              [ʃæb.nǽm] — An Iranian name that means morning dew
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                color: '#c8c8dc',
                fontSize: '1.025rem',
                lineHeight: 1.8,
              }}
            >
              <p>
                I studied Architectural Engineering in northern Iran, then moved to Vancouver after
                graduating — missed my own ceremony, but traded it for a fresh start.
              </p>
              <p>
                Computing was always pulling at me, so I went back to school at BCIT and got my
                diploma. Turns out designing buildings and designing software aren&apos;t that
                different — both start with a problem, a blank page, and the pressure to make
                something that actually holds up.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How I Move */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <FadeIn>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              How I Move
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '1.75rem', fontSize: '0.9rem' }}>
              What I&apos;m doing when I&apos;m not at a desk.
            </p>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {activities.map((activity, i) => (
              <FadeIn key={activity.name} delay={i * 0.07}>
                <div
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '0.875rem',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <p style={{ fontWeight: '600', marginBottom: '0.35rem', fontSize: '0.95rem' }}>
                    {activity.name}
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.55 }}>
                    {activity.caption}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Places */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <FadeIn>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              Places I&apos;ve Been
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '1.75rem', fontSize: '0.9rem' }}>
              A few places I&apos;ve been lucky enough to see.
            </p>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '0.6rem',
            }}
          >
            {places.map((place, i) => (
              <FadeIn key={place.city} delay={i * 0.04}>
                <div
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '0.625rem',
                    padding: '0.75rem 1rem',
                  }}
                >
                  <p style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.15rem' }}>
                    {place.city}
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>
                    {place.country}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Random Passions */}
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <FadeIn>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              Random Passions
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '1.75rem', fontSize: '0.9rem' }}>
              The things that make me interesting at parties.
            </p>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {passions.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.07}>
                <div
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '0.875rem',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>{p.name}</p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>
                    {p.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
