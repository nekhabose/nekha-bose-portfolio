import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { profile } from '../utils';

const links = [
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
];

const Navbar: React.FC = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [active, setActive]     = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll-aware background
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Scroll-spy via IntersectionObserver (preserved from original)
  useEffect(() => {
    if (location.pathname !== '/') { setActive(''); return; }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // GSAP mobile menu animation
  useGSAP(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'expo.out' }
      );
    }
  }, { dependencies: [menuOpen] });

  const handleNav = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '1rem', paddingBottom: '1rem' }}>
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav('home')}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1rem',
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.01em',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            flexShrink: 0,
          }}
        >
          {profile.name}
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexWrap: 'wrap' }}
             className="hidden-mobile">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNav(link.id)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '0.875rem',
                padding: '0.5rem 0.875rem',
                borderRadius: '9999px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                color: active === link.id ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                backgroundColor: active === link.id ? 'rgba(255,255,255,0.06)' : 'transparent',
                transition: 'color 0.2s, background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                if (active !== link.id) (e.target as HTMLElement).style.color = 'var(--color-text-secondary)';
              }}
              onMouseLeave={(e) => {
                if (active !== link.id) (e.target as HTMLElement).style.color = 'var(--color-text-muted)';
              }}
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/blog"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.875rem',
              padding: '0.5rem 0.875rem',
              borderRadius: '9999px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: location.pathname.startsWith('/blog') ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
              backgroundColor: location.pathname.startsWith('/blog') ? 'rgba(255,255,255,0.06)' : 'transparent',
              transition: 'color 0.2s, background-color 0.2s',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Blog
          </Link>
          <a
            href={resumeUrl}
            download="Nekha_Bose_Resume.pdf"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.875rem',
              padding: '0.5rem 1.125rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--color-text-primary)',
              marginLeft: '0.5rem',
              transition: 'border-color 0.2s, background-color 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.4)';
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-elevated)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            Resume
          </a>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          className="show-mobile"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '2px',
            backgroundColor: 'var(--color-text-primary)',
            transition: 'transform 0.25s',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            backgroundColor: 'var(--color-text-primary)',
            transition: 'opacity 0.25s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            backgroundColor: 'var(--color-text-primary)',
            transition: 'transform 0.25s',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            backgroundColor: 'rgba(15, 23, 42, 0.97)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="section-container" style={{ paddingTop: '1rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNav(link.id)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  background: active === link.id ? 'rgba(255,255,255,0.06)' : 'none',
                  cursor: 'pointer',
                  color: active === link.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  textAlign: 'left',
                  transition: 'color 0.2s, background-color 0.2s',
                }}
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                background: location.pathname.startsWith('/blog') ? 'rgba(255,255,255,0.06)' : 'none',
                color: location.pathname.startsWith('/blog') ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              Blog
            </Link>
            <a
              href={resumeUrl}
              download="Nekha_Bose_Resume.pdf"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--color-text-primary)',
                display: 'block',
                marginTop: '0.5rem',
                textAlign: 'center',
                transition: 'border-color 0.2s',
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
