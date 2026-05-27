import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { skillGroups } from '../utils';

const CATEGORY_META: Record<string, { color: string; wide?: boolean }> = {
  'Frontend':                 { color: '#3b82f6' },
  'Backend':                  { color: '#6366f1' },
  'AI and Agentic':           { color: '#8b5cf6', wide: true },
  'Cloud and DevOps':         { color: '#06b6d4' },
  'Data and ETL':             { color: '#10b981' },
  'Testing and Methods':      { color: '#f59e0b' },
  'Design and Collaboration': { color: '#ec4899' },
};

const HIGHLIGHTS: Record<string, string[]> = {
  'Frontend':                 ['React', 'TypeScript', 'React Native'],
  'Backend':                  ['Node.js', 'FastAPI', 'Spring Boot', 'PostgreSQL'],
  'AI and Agentic':           ['LangChain', 'LangGraph', 'RAG systems', 'OpenAI', 'LlamaIndex'],
  'Cloud and DevOps':         ['GCP', 'AWS', 'Docker', 'Kubernetes'],
  'Data and ETL':             ['Airflow', 'Tableau', 'Data pipelines'],
  'Testing and Methods':      ['A/B testing', 'Agile'],
  'Design and Collaboration': ['Technical leadership', 'Mentorship'],
};

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.fromTo('[data-skill-card]',
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 78%',
        },
      }
    );
  }, { scope: containerRef, dependencies: [] });

  return (
    <div
      ref={containerRef}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
        gap: '1rem',
      }}
    >
      {skillGroups.map((group) => {
        const meta = CATEGORY_META[group.title] ?? { color: '#3b82f6' };
        const highlights = new Set(HIGHLIGHTS[group.title] ?? []);
        const hex = meta.color;

        return (
          <div
            key={group.title}
            data-skill-card
            style={{
              gridColumn: meta.wide ? 'span 2' : undefined,
              opacity: 0,
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px',
              padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = `${hex}44`;
              el.style.boxShadow = `0 0 32px ${hex}18, 0 4px 24px rgba(0,0,0,0.3)`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.07)';
              el.style.boxShadow = 'none';
            }}
          >
            {/* accent top bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '1.5rem',
              right: '1.5rem',
              height: '2px',
              borderRadius: '0 0 4px 4px',
              background: `linear-gradient(90deg, ${hex}, ${hex}44)`,
            }} />

            {/* category label */}
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: hex,
              marginBottom: '1rem',
              marginTop: '0.25rem',
            }}>
              {group.title}
            </p>

            {/* skill pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {group.items.map((item) => {
                const isHighlight = highlights.has(item);
                return (
                  <span
                    key={item}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.78rem',
                      fontWeight: isHighlight ? 600 : 500,
                      padding: '0.3rem 0.7rem',
                      borderRadius: '999px',
                      border: `1px solid ${isHighlight ? `${hex}55` : 'rgba(255,255,255,0.08)'}`,
                      background: isHighlight ? `${hex}1a` : 'rgba(255,255,255,0.04)',
                      color: isHighlight ? hex : 'var(--color-text-secondary)',
                      transition: 'background 0.15s, color 0.15s, transform 0.15s',
                      cursor: 'default',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${hex}2e`;
                      el.style.color = isHighlight ? hex : 'var(--color-text-primary)';
                      el.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = isHighlight ? `${hex}1a` : 'rgba(255,255,255,0.04)';
                      el.style.color = isHighlight ? hex : 'var(--color-text-secondary)';
                      el.style.transform = 'translateY(0)';
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
