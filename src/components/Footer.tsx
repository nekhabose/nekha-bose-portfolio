import React from 'react';
import { profile } from '../utils';

const Footer: React.FC = () => (
  <footer style={{
    borderTop: '1px solid rgba(255,255,255,0.06)',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  }}>
    <div
      className="section-container"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}
    >
      <div>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          fontSize: '0.95rem',
        }}>
          {profile.name}
        </span>
        <span style={{
          color: 'var(--color-text-muted)',
          fontSize: '0.85rem',
          marginLeft: '0.75rem',
        }}>
          Senior Software Engineer
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { label: 'GitHub',   href: profile.github,              external: true  },
          { label: 'LinkedIn', href: profile.linkedin,            external: true  },
          { label: 'Email',    href: `mailto:${profile.email}`,   external: false },
        ].map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            style={{
              fontSize: '0.85rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              transition: 'color 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
