import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import PortfolioGrid from '../components/PortfolioGrid';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillsTicker from '../components/SkillsTicker';
import CertificationsList from '../components/CertificationsList';
import About from './About';
import ContactForm from '../components/ContactForm';
import styles from './Home.module.css';

const Home = () => {
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
    <div className={styles.sections}>
      <section id="home" className={`${styles.anchor} ${styles.heroSection}`}>
        <Hero />
      </section>

      <section id="about" className={styles.anchor}>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>About</p>
          <h2>Senior engineer focused on delivery, scale, and measurable outcomes.</h2>
          <p>Resume-aligned summary, education, and impact context for the roles and projects below.</p>
        </header>
        <About />
      </section>

      <section id="experience" className={styles.anchor}>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Experience</p>
          <h2>Enterprise product and platform delivery across AI, commerce, and data systems.</h2>
          <p>Roles and metrics are aligned to the latest resume content, with emphasis on scope, leadership, and results.</p>
        </header>
        <ExperienceTimeline />
      </section>

      <section id="projects" className={styles.anchor}>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Projects</p>
          <h2>Selected case studies</h2>
          <p>Featured work includes AI platform architecture, enterprise commerce patterns, and strong full-stack execution.</p>
        </header>
        <PortfolioGrid />
      </section>

      <section id="skills" className={styles.anchor}>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Skills</p>
          <h2>Stack coverage organized for quick scanning.</h2>
          <p>Grouped by the capabilities most relevant to senior product, platform, and AI engineering roles.</p>
        </header>
        <SkillsTicker />
      </section>

      <section id="certifications" className={styles.anchor}>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Certifications</p>
          <h2>Formal AI credentialing</h2>
          <p>Certification and academic background that support the enterprise AI and platform work showcased here.</p>
        </header>
        <CertificationsList />
      </section>

      <section id="contact" className={styles.anchor}>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Contact</p>
          <h2>Contact</h2>
          <p>Send a note about the team, platform, or product outcomes you need to improve.</p>
        </header>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
