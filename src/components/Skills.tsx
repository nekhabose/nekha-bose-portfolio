import React, { useRef } from 'react';
import { skillGroups } from '../utils';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef as React.RefObject<HTMLElement>, '[data-skills-card]', { stagger: 0.07, y: 30 });

  return (
    <div
      ref={containerRef}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1.125rem',
      }}
    >
      {skillGroups.map((group) => (
        <article
          key={group.title}
          data-skills-card
          className="card"
          style={{
            padding: '1.5rem',
            opacity: 0,
            cursor: 'default',
            transition: 'border-color 0.3s, transform 0.3s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'rgba(59,130,246,0.2)';
            el.style.transform = 'translateY(-3px)';
            const title = el.querySelector('[data-category-title]') as HTMLElement;
            if (title) title.style.color = 'var(--color-accent)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'rgba(255,255,255,0.06)';
            el.style.transform = 'translateY(0)';
            const title = el.querySelector('[data-category-title]') as HTMLElement;
            if (title) title.style.color = 'var(--color-text-muted)';
          }}
        >
          <h3
            data-category-title
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBottom: '1rem',
              transition: 'color 0.2s',
            }}
          >
            {group.title}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {group.items.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Skills;
