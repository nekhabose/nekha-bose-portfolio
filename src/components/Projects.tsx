import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { projects } from '../utils';
import ProjectModal from './ProjectModal';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    projects.forEach((_, i) => {
      const card   = document.querySelector(`[data-project-index="${i}"]`);
      const reveal = document.querySelector(`[data-img-curtain="${i}"]`);
      const img    = document.querySelector(`[data-img-inner="${i}"]`);
      const num    = document.querySelector(`[data-project-num="${i}"]`);
      const body   = document.querySelector(`[data-project-body="${i}"]`);
      if (!card || !reveal || !img) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'expo.out' },
      });

      // Number fades in first
      if (num) tl.fromTo(num, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 }, 0);

      // Body slides up
      if (body) tl.fromTo(body, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1);

      // Image: curtain slides from left to right, revealing image beneath
      tl.fromTo(img,
        { scale: 1.12 },
        { scale: 1, duration: 1.1, ease: 'expo.out' },
        0
      );
      tl.fromTo(reveal,
        { scaleX: 1, transformOrigin: 'left center' },
        { scaleX: 0, transformOrigin: 'right center', duration: 0.9, ease: 'expo.inOut' },
        0.05
      );
    });
  }, { scope: containerRef, dependencies: [] });

  return (
    <>
      <div ref={containerRef}>
        {projects.map((project, i) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={i}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
};

interface RowProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectRow: React.FC<RowProps> = ({ project, index, onClick }) => {
  const num = String(index + 1).padStart(2, '0');
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const img = imgRef.current?.querySelector('[data-img-inner]') as HTMLElement | null;
    if (img) gsap.to(img, { scale: 1.06, duration: 0.6, ease: 'expo.out' });
  };
  const handleMouseLeave = () => {
    const img = imgRef.current?.querySelector('[data-img-inner]') as HTMLElement | null;
    if (img) gsap.to(img, { scale: 1, duration: 0.6, ease: 'expo.out' });
  };

  return (
    <article
      data-project-index={index}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'grid',
        gridTemplateColumns: '3.5rem 1fr clamp(220px, 36%, 420px)',
        gap: 'clamp(1.25rem, 3vw, 2.5rem)',
        alignItems: 'center',
        paddingTop: 'clamp(2rem, 4vw, 2.75rem)',
        paddingBottom: 'clamp(2rem, 4vw, 2.75rem)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        cursor: 'pointer',
        position: 'relative',
      }}
      className="project-row"
    >
      {/* Number */}
      <span
        data-project-num={index}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          color: 'var(--color-text-muted)',
          alignSelf: 'flex-start',
          paddingTop: '0.2rem',
          opacity: 0,
        }}
      >
        {num}
      </span>

      {/* Content */}
      <div data-project-body={index} style={{ opacity: 0 }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: '0.5rem',
        }}>
          {project.category}
        </p>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          color: 'var(--color-text-primary)',
          lineHeight: 1.2,
          marginBottom: '0.75rem',
          transition: 'color 0.2s',
        }}
          className="project-title"
        >
          {project.title}
        </h3>

        <p style={{
          fontSize: '0.9rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          marginBottom: '1.25rem',
          maxWidth: '52ch',
        }}>
          {project.short}
        </p>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="tag" style={{ fontSize: '0.7rem', padding: '0.22rem 0.6rem' }}>{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-display)', fontWeight: 600, padding: '0.22rem 0.4rem' }}>
              +{project.tech.length - 5} more
            </span>
          )}
        </div>

        {/* Action row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <span style={{
            fontSize: '0.8rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'color 0.2s',
          }}
            className="view-details"
          >
            View details
            <span style={{ fontSize: '1rem', transition: 'transform 0.2s' }} className="arrow-icon">→</span>
          </span>

          {project.links?.map((link) => (
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
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Image with curtain reveal */}
      <div
        ref={imgRef}
        style={{
          position: 'relative',
          borderRadius: '0.875rem',
          overflow: 'hidden',
          aspectRatio: '4/3',
          flexShrink: 0,
        }}
      >
        <img
          data-img-inner={index}
          src={project.thumb}
          alt={project.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: 'scale(1.12)',
          }}
        />
        {/* Dark gradient on image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(8,12,20,0.4) 0%, transparent 60%)',
          pointerEvents: 'none',
          transition: 'opacity 0.4s',
        }}
          className="img-overlay"
        />
        {/* Curtain — slides away on reveal */}
        <div
          data-img-curtain={index}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'var(--color-base)',
            zIndex: 2,
            transformOrigin: 'left center',
          }}
        />
      </div>
    </article>
  );
};

export default Projects;
