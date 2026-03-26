import React, { useRef, useState } from 'react';
import { FaChevronDown, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../utils';
import { useTimelineDraw } from '../hooks/useTimelineDraw';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string>(experiences[0]?.id ?? '');

  useTimelineDraw(containerRef as React.RefObject<HTMLElement>);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* Vertical timeline line */}
      <div
        data-timeline-line
        style={{
          position: 'absolute',
          left: '5px',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'linear-gradient(to bottom, var(--color-accent), rgba(255,255,255,0.06), transparent)',
          transformOrigin: 'top center',
        }}
      />

      {experiences.map((exp) => {
        const isOpen = openId === exp.id;
        return (
          <div
            key={exp.id}
            data-timeline-card
            style={{
              position: 'relative',
              paddingLeft: '2.25rem',
              paddingBottom: '1.5rem',
              opacity: 0,
            }}
          >
            {/* Dot */}
            <div
              data-timeline-dot
              style={{
                position: 'absolute',
                left: 0,
                top: '1.4rem',
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
                boxShadow: '0 0 0 3px var(--color-base)',
                zIndex: 1,
                opacity: 0,
              }}
            />

            {/* Accordion button */}
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? '' : exp.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '1.375rem 1.5rem',
                borderRadius: '1rem',
                backgroundColor: 'var(--color-surface)',
                border: `1px solid ${isOpen ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: 'var(--shadow-card)',
                cursor: 'pointer',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                if (!isOpen) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                if (!isOpen) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  {/* Role + company */}
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.25rem',
                    lineHeight: 1.3,
                  }}>
                    {exp.role}
                  </h3>

                  {/* Meta row */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '0.875rem',
                    alignItems: 'center',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                      <FaBuilding size={11} /> {exp.company}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <FaCalendarAlt size={11} /> {exp.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <FaMapMarkerAlt size={11} /> {exp.location}
                    </span>
                  </div>

                  {/* Metric chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {exp.metrics.map((m) => (
                      <span key={m} className="accent-tag">{m}</span>
                    ))}
                  </div>
                </div>

                {/* Chevron */}
                <FaChevronDown
                  size={14}
                  style={{
                    color: 'var(--color-text-muted)',
                    flexShrink: 0,
                    marginTop: '0.25rem',
                    transition: 'transform 0.25s',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </div>
            </button>

            {/* Expandable body */}
            <div
              style={{
                overflow: 'hidden',
                maxHeight: isOpen ? '1000px' : '0',
                opacity: isOpen ? 1 : 0,
                transition: 'max-height 0.35s ease, opacity 0.25s ease',
                marginTop: isOpen ? '2px' : 0,
              }}
            >
              <div style={{
                padding: '1.375rem 1.5rem',
                backgroundColor: 'var(--color-elevated)',
                borderRadius: '0 0 1rem 1rem',
                border: '1px solid rgba(255,255,255,0.06)',
                borderTop: 'none',
              }}>
                {/* Bullets */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.25rem' }}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.7rem',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.65,
                    }}>
                      <span style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent)',
                        marginTop: '0.5rem',
                        flexShrink: 0,
                      }} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {exp.tech.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: '0.72rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
