'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  FaTableTennis, FaBicycle, FaCar, FaSkiing, FaSwimmer, FaDumbbell,
} from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag";

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
  { icon: FaTableTennis, name: 'Tennis', caption: 'I serve. Sometimes it goes in.' },
  { icon: FaBicycle, name: 'Stanley Park biking', caption: 'Seawall laps. One speed: fast enough.' },
  { icon: FaCar, name: 'Road trips', caption: 'The best UI is an open highway.' },
  { icon: FaSkiing, name: 'Skiing', caption: 'Still learning to stop gracefully.' },
  { icon: FaSwimmer, name: 'Paddleboarding', caption: 'Falling in counts as commitment.' },
  { icon: FaDumbbell, name: 'Pilates', caption: "Looks easy. Trust me, it's not." },
];

const passions = [
  { name: '3D Printing', note: 'Turning an idea into something you can actually hold.' },
  { name: 'Cinema', note: 'A good film makes time disappear.' },
  { name: 'Giraffes', note: 'Unusual, calm, and completely unapologetic.' },
  { name: 'Whales', note: 'Quiet power. They don’t try hard, they just are.' },
  { name: 'Moon watching', note: 'Same moon, different phase of life.' },
  { name: 'Snow globes', note: 'Tiny worlds that feel oddly complete.' },
];

const places = [
  { city: 'Paris', country: 'France', code: 'FR' },
  { city: 'Venice', country: 'Italy', code: 'IT' },
  { city: 'Florence', country: 'Italy', code: 'IT' },
  { city: 'Rome', country: 'Italy', code: 'IT' },
  { city: 'Milan', country: 'Italy', code: 'IT' },
  { city: 'Cologne', country: 'Germany', code: 'DE' },
  { city: 'Stuttgart', country: 'Germany', code: 'DE' },
  { city: 'Cancun', country: 'Mexico', code: 'MX' },
  { city: 'Los Angeles', country: 'USA', code: 'US' },
  { city: 'Las Vegas', country: 'USA', code: 'US' },
  { city: 'Seattle', country: 'USA', code: 'US' },
  { city: 'Calgary', country: 'Canada', code: 'CA' },
  { city: 'Toronto', country: 'Canada', code: 'CA' },
  { city: 'Banff', country: 'Canada', code: 'CA' },
  { city: 'Istanbul', country: 'Turkey', code: 'TR' },
];
const uniqueCountries = [...new Set(places.map(p => p.country))];

const sectionLabel = {
  color: 'var(--accent)',
  fontSize: '0.72rem',
  fontWeight: '700',
  letterSpacing: '0.12em',
  fontFamily: "'JetBrains Mono', monospace",
  textTransform: 'uppercase',
  marginBottom: '1.5rem',
  display: 'block',
};

const iconBox = {
  width: '32px',
  height: '32px',
  borderRadius: '0.5rem',
  background: 'rgba(109,40,217,0.1)',
  border: '1px solid rgba(109,40,217,0.18)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: 'var(--accent)',
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Bio */}
      <section style={{ padding: '4rem 0 2.5rem', background: 'linear-gradient(180deg, rgba(109,40,217,0.05) 0%, transparent 100%)' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ color: 'var(--accent)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              About
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
              Hi, I&apos;m <span className="gradient-text">Shabnam</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: '1.75rem', fontSize: '0.88rem' }}>
              [&#643;&#230;b.n&#230;&#769;m] &#8212; An Iranian name that means morning dew
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '1rem', lineHeight: 1.8, color: 'var(--foreground)' }}>
              <p>
                I studied Architectural Engineering and learned how complex systems are designed and built to work under pressure. Alongside my degree, I completed 490+ hours of training in design software and IT &#8212; which gave me a strong base in problem-solving and technology.
              </p>
              <p>
                In 2019 I moved to Vancouver, a city with a strong tech industry. Being in that environment motivated me to shift careers. I kept the same problem-solving mindset, but started applying it through code.
              </p>
              <p>
                Since 2022 I&apos;ve been building full-stack applications &#8212; real projects, team collaboration, and AI tools for businesses.
              </p>
              <p style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
                Engineering taught me how to think. Development helps me build.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outside the code */}
      <section style={{ padding: '2.5rem 0' }}>
      <div className="container" style={{ maxWidth: '680px' }}>
        
        <FadeIn>
          <span style={sectionLabel}>Outside the code</span>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {activities.map((activity, i) => (
            <FadeIn key={activity.name} delay={i * 0.05}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '0.875rem 0',
                borderBottom: i < activities.length - 1 ? '1px solid var(--card-border)' : 'none',
              }}>
                <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                  {activity.name}
                </p>
                <p style={{
                  color: 'var(--muted)',
                  fontSize: '0.82rem',
                  fontStyle: 'italic',
                  textAlign: 'right',
                  maxWidth: '340px'
                }}>
                  {activity.caption}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>

      {/* Things I love */}
      <section style={{ padding: '2.5rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <FadeIn>
            <span style={sectionLabel}>Things I love</span>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          {passions.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.05}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '0.875rem 0',
                borderBottom: i < passions.length - 1 ? '1px solid var(--card-border)' : 'none',
              }}>
                <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                  {p.name}
                </p>
                <p style={{
                  color: 'var(--muted)',
                  fontSize: '0.82rem',
                  fontStyle: 'italic',
                  textAlign: 'right',
                  maxWidth: '340px'
                }}>
                  {p.note}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        </div>
      </section>

      {/* World so far */}
<section style={{ padding: '2.5rem 0' }}>
  <div className="container" style={{ maxWidth: '680px' }}>
    
    <FadeIn>
      <span style={sectionLabel}>
        The world so far — {places.length} cities, {uniqueCountries.length} countries
      </span>
    </FadeIn>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1rem' }}>
      {places.map((place, i) => (
        <FadeIn key={place.city} delay={i * 0.02}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.6rem',
            border: '1px solid var(--card-border)',
            borderRadius: '999px',
            fontSize: '0.75rem',
            color: 'var(--muted)'
          }}>
            <ReactCountryFlag
              countryCode={place.code}
              svg
              style={{ width: '1em', height: '1em' }}
            />
            {place.city}
          </div>
        </FadeIn>
      ))}
    </div>

  </div>
</section>
    </div>
  );
}
