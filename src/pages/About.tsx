import React, { useRef } from 'react';
import heroPhoto from '../assets/hero/Hero.jpeg';
import { education, profile, certifications } from '../utils';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

  useScrollReveal(containerRef as React.RefObject<HTMLElement>, '[data-about-reveal]', { stagger: 0.1 });

  return (
    <div ref={containerRef}>
      <span className="eyebrow">About</span>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'clamp(200px, 28%, 340px) 1fr',
        gap: 'clamp(2rem, 6vw, 5rem)',
        alignItems: 'start',
      }}
        className="about-grid"
      >
        {/* Photo */}
        {/* Outer div: GSAP reveal (opacity + translateY) */}
        <div data-about-reveal style={{ opacity: 0, flexShrink: 0 }}>
          {/* Inner div: CSS float animation — separate from GSAP transform */}
          <div
            className="about-photo-wrap"
            style={{
              position: 'relative',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
              border: '1px solid rgba(255,255,255,0.06)',
              animation: 'photoFloat 5s ease-in-out infinite',
              transition: 'box-shadow 0.4s, border-color 0.4s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px 6px rgba(59,130,246,0.25), var(--shadow-card)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.35)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
            }}
          >
            <img
              src={heroPhoto}
              alt="Nekha Bose"
              loading="lazy"
              style={{
                width: '100%',
                display: 'block',
                aspectRatio: '3/4',
                objectFit: 'cover',
                objectPosition: 'top center',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
            />
            {/* gradient fade at bottom */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13,17,23,0.5) 0%, transparent 50%)',
              pointerEvents: 'none',
            }} />
          </div>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div data-about-reveal style={{ opacity: 0 }}>
            <h2 style={{
              fontSize: 'var(--text-section)',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}>
              Senior engineer focused on delivery, scale, and measurable outcomes.
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.75,
            }}>
              {profile.about}
            </p>
          </div>

          {/* Education + Certification cards */}
          <div
            data-about-reveal
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.875rem',
              opacity: 0,
            }}
          >
            {education.map((item) => (
              <div
                key={item.degree}
                className="card"
                style={{
                  padding: '1.25rem',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.2)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Education</p>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.3,
                  marginBottom: '0.35rem',
                }}>
                  {item.degree}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{item.school}</p>
                {item.meta && (
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', display: 'block', marginTop: '0.4rem' }}>
                    {item.meta}
                  </span>
                )}
              </div>
            ))}
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="card"
                style={{
                  padding: '1.25rem',
                  gridColumn: education.length === 2 ? '1 / -1' : undefined,
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.2)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Certification</p>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.3,
                  marginBottom: '0.35rem',
                }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{cert.detail}</p>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div data-about-reveal style={{ opacity: 0 }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {profile.achievements.map((a) => (
                <li key={a} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent)',
                    marginTop: '0.5rem',
                    flexShrink: 0,
                  }} />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Resume CTA */}
          <div data-about-reveal style={{ opacity: 0 }}>
            <a href={resumeUrl} download="Nekha_Bose_Resume.pdf" className="btn-secondary" style={{ width: 'fit-content' }}>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @keyframes photoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 820px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
