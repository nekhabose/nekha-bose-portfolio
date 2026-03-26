import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import type { Project } from '../types';

interface Props {
  project: Project;
  onClose: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: '1.75rem' }}>
    <h4 style={{
      fontFamily: 'var(--font-display)',
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)',
      marginBottom: '0.75rem',
    }}>
      {title}
    </h4>
    {children}
  </div>
);

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef   = useRef<HTMLDivElement>(null);

  // GSAP entrance
  useGSAP(() => {
    if (!panelRef.current || !overlayRef.current) return;
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 });
    gsap.fromTo(panelRef.current,
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'expo.out' }
    );
  }, { dependencies: [] });

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(8,12,20,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        ref={panelRef}
        style={{
          maxWidth: '760px',
          width: '100%',
          maxHeight: '88vh',
          overflowY: 'auto',
          borderRadius: '1.25rem',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: 'var(--shadow-card-hover)',
        }}
      >
        {/* Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.5rem 1.75rem 1.25rem',
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '0.4rem',
            }}>
              {project.category}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
            }}>
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              flexShrink: 0,
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
              background: 'none',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)';
              (e.currentTarget as HTMLElement).style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.75rem' }}>
          {/* Hero image */}
          {project.hero && (
            <div style={{ marginBottom: '1.75rem', borderRadius: '0.875rem', overflow: 'hidden' }}>
              <img src={project.hero} alt={project.title} style={{ width: '100%', aspectRatio: '16/7', objectFit: 'cover', display: 'block' }} />
            </div>
          )}

          {/* Short description */}
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {project.short}
          </p>

          {/* Tech stack */}
          <Section title="Tech Stack">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </Section>

          {/* Metrics */}
          {project.metrics?.length > 0 && (
            <Section title="Highlights">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.metrics.map((m) => (
                  <span key={m} className="accent-tag">{m}</span>
                ))}
              </div>
            </Section>
          )}

          {/* Problem */}
          {project.problem && (
            <Section title="Problem">
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{project.problem}</p>
            </Section>
          )}

          {/* Approach */}
          {project.approach?.length && (
            <Section title="Approach">
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.approach.map((a, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    <span style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.1rem' }}>→</span>
                    {a}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Architecture flow */}
          {project.architectureFlow?.length && (
            <Section title="Architecture">
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
                {project.architectureFlow.map((step, i) => (
                  <React.Fragment key={step}>
                    <span className="tag">{step}</span>
                    {i < (project.architectureFlow?.length ?? 0) - 1 && (
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Section>
          )}

          {/* Results */}
          {project.results?.length && (
            <Section title={project.resultsTitle ?? 'Results'}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.results.map((r, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0, marginTop: '0.55rem' }} />
                    {r}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* External links */}
          {project.links?.length && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
