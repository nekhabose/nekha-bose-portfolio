import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { experiences } from '../utils';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    experiences.forEach((_, i) => {
      const entry = document.querySelector(`[data-exp-entry="${i}"]`);
      if (!entry) return;

      const year    = entry.querySelector('[data-exp-year]');
      const content = entry.querySelector('[data-exp-content]');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: entry,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'expo.out' },
      });

      if (year)    tl.fromTo(year,    { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.6 }, 0);
      if (content) tl.fromTo(content, { opacity: 0, y: 28  }, { opacity: 1, y: 0, duration: 0.75 }, 0.08);
    });
  }, { scope: containerRef, dependencies: [] });

  return (
    <div ref={containerRef}>
      {experiences.map((exp, i) => (
        <div
          key={exp.id}
          data-exp-entry={i}
          style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(5rem, 12%, 9rem) 1fr',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            paddingTop: 'clamp(2rem, 4vw, 2.75rem)',
            paddingBottom: 'clamp(2rem, 4vw, 2.75rem)',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            alignItems: 'flex-start',
          }}
          className="exp-row"
        >
          {/* Year / period */}
          <div data-exp-year style={{ opacity: 0 }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: 'var(--color-text-muted)',
              lineHeight: 1.4,
              whiteSpace: 'pre-line',
            }}>
              {exp.period.replace(' - ', '\n')}
            </span>
          </div>

          {/* Content */}
          <div data-exp-content style={{ opacity: 0 }}>
            {/* Role */}
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              marginBottom: '0.3rem',
            }}>
              {exp.role}
            </h3>

            {/* Company + location */}
            <p style={{
              fontSize: '0.875rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: 'var(--color-accent)',
              marginBottom: '1rem',
            }}>
              {exp.company}
              <span style={{ color: 'var(--color-text-muted)', fontWeight: 400, marginLeft: '0.6rem' }}>
                · {exp.location}
              </span>
            </p>

            {/* Bullets */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
              {exp.bullets.map((b, bi) => (
                <li key={bi} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                }}>
                  <span style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent)',
                    marginTop: '0.6rem',
                    flexShrink: 0,
                  }} />
                  {b}
                </li>
              ))}
            </ul>

            {/* Metrics */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
              {exp.metrics.map((m) => (
                <span key={m} className="accent-tag">{m}</span>
              ))}
            </div>

            {/* Tech */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {exp.tech.map((t) => (
                <span key={t} className="tag" style={{ fontSize: '0.72rem' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
