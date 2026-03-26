import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { profile } from '../utils';
import { useHeroEntrance } from '../hooks/useHeroEntrance';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useHeroEntrance(containerRef);

  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

  const goProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--color-void)',
      }}
    >
      {/* Blue orb — top right */}
      <div
        data-hero-orb-1
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: 'clamp(300px, 50vw, 600px)',
          height: 'clamp(300px, 50vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Purple orb — bottom left */}
      <div
        data-hero-orb-2
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: 'clamp(250px, 40vw, 500px)',
          height: 'clamp(250px, 40vw, 500px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,78,216,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Dot grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content */}
      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          paddingTop: 'clamp(7rem, 15vw, 10rem)',
          paddingBottom: 'clamp(5rem, 10vw, 8rem)',
        }}
      >
        <p
          data-hero-kicker
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: '1.5rem',
            opacity: 0,
          }}
        >
          Senior software delivery
        </p>

        <h1
          data-hero-name
          style={{
            fontSize: 'var(--text-hero)',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
            opacity: 0,
          }}
        >
          {profile.name}
        </h1>

        <p
          data-hero-title
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
            maxWidth: '680px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.5,
            opacity: 0,
          }}
        >
          Full-Stack Engineer · AI &amp; Agentic Systems · Cloud Architecture
        </p>

        {/* Metrics row */}
        <div
          data-hero-metrics
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(1.5rem, 5vw, 3.5rem)',
            marginBottom: '2.5rem',
            opacity: 0,
          }}
        >
          {profile.heroMetrics.map((m) => (
            <div key={m.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                lineHeight: 1,
              }}>
                {m.value}
              </div>
              <div style={{
                fontSize: '0.78rem',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                marginTop: '0.35rem',
              }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Focus area chips */}
        <div
          data-hero-chips
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.625rem',
            marginBottom: '2.5rem',
          }}
        >
          {profile.focusAreas.map((area) => (
            <span
              key={area}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--color-text-secondary)',
                backgroundColor: 'rgba(255,255,255,0.04)',
                transition: 'border-color 0.2s, color 0.2s',
                cursor: 'default',
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(59,130,246,0.35)';
                el.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.color = 'var(--color-text-secondary)';
              }}
            >
              {area}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          data-hero-actions
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            opacity: 0,
          }}
        >
          <button onClick={goProjects} className="btn-primary">
            View Projects
          </button>
          <a href={resumeUrl} download="Nekha_Bose_Resume.pdf" className="btn-secondary">
            Download Resume
          </a>
          <button onClick={goContact} className="btn-ghost">
            Contact
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        data-hero-scroll
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0,
        }}
      >
        <span style={{
          fontSize: '0.65rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
        }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '3rem',
          background: 'linear-gradient(to bottom, var(--color-text-muted), transparent)',
        }} />
      </div>
    </section>
  );
};

export default Hero;
