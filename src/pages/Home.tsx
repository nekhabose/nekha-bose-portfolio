import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from './About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.hash]);

  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="about" style={{ scrollMarginTop: '5rem' }} className="section-padding">
        <div className="section-container">
          <About />
        </div>
      </section>

      <section id="skills" style={{ scrollMarginTop: '5rem' }} className="section-padding">
        <div className="section-container">
          <span className="eyebrow">Skills</span>
          <h2 style={{ fontSize: 'var(--text-section)', marginBottom: '2.5rem' }}>
            Stack coverage organized for quick scanning.
          </h2>
          <Skills />
        </div>
      </section>

      <section id="projects" style={{ scrollMarginTop: '5rem' }} className="section-padding">
        <div className="section-container">
          <span className="eyebrow">Projects</span>
          <h2 style={{ fontSize: 'var(--text-section)', marginBottom: '2.5rem' }}>
            Selected work
          </h2>
          <Projects />
        </div>
      </section>

      <section id="experience" style={{ scrollMarginTop: '5rem' }} className="section-padding">
        <div className="section-container">
          <span className="eyebrow">Experience</span>
          <h2 style={{ fontSize: 'var(--text-section)', marginBottom: '2.5rem' }}>
            Enterprise product and platform delivery.
          </h2>
          <Experience />
        </div>
      </section>

      <section id="contact" style={{ scrollMarginTop: '5rem' }} className="section-padding">
        <div className="section-container">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
