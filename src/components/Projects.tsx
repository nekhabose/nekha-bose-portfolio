import React, { useRef, useState } from 'react';
import { projects } from '../utils';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectModal from './ProjectModal';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useScrollReveal(containerRef as React.RefObject<HTMLElement>, '[data-project-card]', { stagger: 0.1, y: 50 });

  return (
    <>
      <div
        ref={containerRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '1.375rem',
        }}
      >
        {projects.map((project) => (
          <article
            key={project.id}
            data-project-card
            onClick={() => setActiveProject(project)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '1.125rem',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: 'var(--shadow-card)',
              cursor: 'pointer',
              opacity: 0,
              transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(59,130,246,0.2)';
              el.style.boxShadow = 'var(--shadow-card-hover)';
              el.style.transform = 'translateY(-4px)';
              const img = el.querySelector('[data-card-img]') as HTMLElement;
              if (img) img.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.06)';
              el.style.boxShadow = 'var(--shadow-card)';
              el.style.transform = 'translateY(0)';
              const img = el.querySelector('[data-card-img]') as HTMLElement;
              if (img) img.style.transform = 'scale(1)';
            }}
          >
            {/* Thumbnail */}
            <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
              <img
                data-card-img
                src={project.thumb}
                alt={project.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
              {/* Gradient overlay on thumb */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 50%)',
                pointerEvents: 'none',
              }} />
              {/* Category badge */}
              <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                <span style={{
                  padding: '0.3rem 0.7rem',
                  borderRadius: '9999px',
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  backgroundColor: 'rgba(8,12,20,0.75)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--color-text-secondary)',
                }}>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Body */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              padding: '1.375rem',
              gap: '0.75rem',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--color-text-primary)',
                lineHeight: 1.3,
              }}>
                {project.title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                flex: 1,
              }}>
                {project.short}
              </p>

              {/* Tech pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.tech.slice(0, 5).map((t) => (
                  <span key={t} className="tag" style={{ fontSize: '0.7rem', padding: '0.25rem 0.6rem' }}>
                    {t}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '0.25rem 0.6rem',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                  }}>
                    +{project.tech.length - 5} more
                  </span>
                )}
              </div>

              {/* Links or indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                {project.links?.length ? (
                  <div style={{ display: 'flex', gap: '0.875rem' }}>
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          color: 'var(--color-accent)',
                          transition: 'color 0.15s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                ) : (
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                    Private / enterprise project
                  </span>
                )}
                <span style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                }}>
                  View details →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
};

export default Projects;
