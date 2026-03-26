import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { profile } from '../utils';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('about');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNav = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    scrollToSection(id);
    setActive(id);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setActive(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links, location.pathname]);

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <button type="button" className={styles.logo} onClick={() => handleNav('home')}>
          {profile.name}
        </button>
        <nav className={styles.navLinks}>
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNav(link.id)}
              className={active === link.id ? styles.active : undefined}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
            className={styles.resumeLink}
            download="Nekha_Bose_Resume.pdf"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
