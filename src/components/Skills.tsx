import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { skillGroups } from '../utils';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Each column reveals independently
    gsap.fromTo('[data-skill-col]',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 78%',
        },
      }
    );

    // Each item in the columns staggers in after the column
    gsap.fromTo('[data-skill-item]',
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.025,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      }
    );
  }, { scope: containerRef, dependencies: [] });

  return (
    <div
      ref={containerRef}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
        gap: '0',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {skillGroups.map((group, colIndex) => (
        <div
          key={group.title}
          data-skill-col
          style={{
            padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
            borderRight: '1px solid rgba(255,255,255,0.07)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            opacity: 0,
          }}
        >
          {/* Category label */}
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '1.25rem',
          }}>
            {group.title}
          </p>

          {/* Items as plain text list */}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {group.items.map((item) => (
              <li
                key={item}
                data-skill-item
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  transition: 'color 0.15s, transform 0.15s',
                  cursor: 'default',
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--color-text-primary)';
                  el.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--color-text-secondary)';
                  el.style.transform = 'translateX(0)';
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
