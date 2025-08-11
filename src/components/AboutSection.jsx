// import React from 'react';
// import styles from './AboutSection.module.css';
// import headshot from '../assets/images/hero-bg.jpg';
// import SkillsCloud from './SkillsCloud';

// const AboutSection = () => (
//   <section className={styles.about}>
//     <div className={styles.left}>
//       <img src={headshot} alt="Nekha Bose" className={styles.headshot} />
//     </div>
//     <div className={styles.right}>
//       <h2>About Me</h2>
//       <p>
//         I’m Nekha Bose, a result-driven AI and Full-Stack Engineer with 5+ years of experience across enterprise and startup environments.
//         Currently pursuing my MS in IT from Illinois Institute of Technology, I specialize in building secure, scalable systems and designing clean, usable interfaces.
//         I’ve worked across domains—from e-commerce and lifestyle to data automation—always focused on impact.
//       </p>
//       <div className={styles.skills}>
//         {[
//           'React', 'Node.js', 'Spring Boot', 'Firebase', 'GCP',
//           'AWS', 'Gemini AI', 'Figma', 'SQL', 'MongoDB',
//           'Docker', 'Kubernetes', 'Airflow',
//         ].map((skill) => (
//           <span key={skill} className={styles.badge}>{skill}</span>
//         ))}
//       </div>
//       <a href="/Resume_NBose.pdf" download className={styles.resumeBtn}>
//         Download Resume
//       </a>
//     </div>
//   </section>
// );

// export default AboutSection;

import React from 'react';
import styles from './AboutSection.module.css';
import headshot from '../assets/images/hero-bg.jpg';
import SkillsCloud from './SkillsCloud';

const AboutSection = () => (
  <section className={styles.about}>
    <div className={styles.profile}>
      <div className={styles.left}>
        <img src={headshot} alt="Nekha Bose" className={styles.headshot} />
      </div>
      <div className={styles.right}>
        <h2>About Me</h2>
        <p>
          I’m Nekha Bose, a result-driven AI and Full-Stack Engineer with 5+ years of 
          experience across enterprise and startup environments. Currently pursuing 
          my MS in IT from Illinois Institute of Technology, I specialize in building 
          secure, scalable systems and designing clean, usable interfaces. I’ve worked 
          across domains—from e-commerce and lifestyle to data automation—always focused 
          on impact.
        </p>
        <a href="./Resume_NBose.pdf" download className={styles.resumeBtn}>
          Download Resume
        </a>
      </div>
    </div>

    <div className={styles.skillsCloud}>
      <h3 className={styles.cloudTitle}>My Skillset</h3>
      <SkillsCloud />
    </div>
  </section>
);

export default AboutSection;
