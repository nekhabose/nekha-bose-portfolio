/*import React, { useEffect, useRef } from 'react';
import styles from './SkillsCloud.module.css';
import TagCloud from 'https://cdn.skypack.dev/tagcloud';

const SkillsCloud = () => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    const skills = [
      'ReactJS','JavaScript','CSS','HTML','NodeJS',
      'Python','Docker','CI/CD','GCP','AWS',
      'Git','GitLab','Bitbucket','SQL','PostgreSQL',
      'MongoDB','Flutter','Dart','Sass','Kotlin'
    ];

    const tagCloud = TagCloud(container.current, skills, {
      radius: 200,            // sphere radius in px
      maxSpeed: 'normal',     // animation speed
      initSpeed: 'normal',    // initial speed
      direction: 135,         // 0–360 rotation tilt
      keep: true              // keep spinning on hover
    });

    return () => {
      // cleanup
      tagCloud.destroy();
    };
  }, []);

  return <div ref={container} className={styles.cloud} />;
};

export default SkillsCloud;
*/
/*
import React, { useEffect, useRef } from 'react';
import styles from './SkillsCloud.module.css';

const SkillsCloud = () => {
  const container = useRef(null);
  let cloudInstance = null;

  useEffect(() => {
    // Your list of skills
    const skills = [
      'ReactJS','JavaScript','CSS','HTML','NodeJS',
      'Python','Docker','CI/CD','GCP','AWS',
      'Git','GitLab','Bitbucket','SQL','PostgreSQL',
      'MongoDB','Flutter','Dart','Sass','Kotlin'
    ];

    const options = {
      radius: 200,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      direction: 135,
      keep: true,
    };

    // Function to initialize the cloud
    const initCloud = () => {
      if (window.TagCloud && container.current) {
        cloudInstance = window.TagCloud(container.current, skills, options);
      }
    };

    if (!window.TagCloud) {
      // Dynamically load the UMD script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/tagcloud/dist/TagCloud.min.js';
      script.onload = initCloud;
      document.body.appendChild(script);
    } else {
      initCloud();
    }

    // Cleanup on unmount
    return () => {
      if (cloudInstance && typeof cloudInstance.destroy === 'function') {
        cloudInstance.destroy();
      }
    };
  }, []);

  return <div ref={container} className={styles.cloud} />;
};

export default SkillsCloud;*/

import React, { useEffect, useRef } from 'react';
import styles from './SkillsCloud.module.css';

const SkillsCloud = () => {
  const container = useRef(null);
  let cloudInstance = null;

  useEffect(() => {
    if (!container.current) return;

    const skills = [
      'ReactJS','JavaScript','CSS','HTML','NodeJS',
      'Python','Docker','CI/CD','GCP','AWS',
      'Git','GitLab','Bitbucket','SQL','PostgreSQL',
      'MongoDB','Flutter','Dart','Sass','Kotlin'
    ];

    const options = {
      radius: 200,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      direction: 135,
      keep: true,
    };

    // Dynamically import the ESM build from Skypack
    import('https://cdn.skypack.dev/tagcloud')
      .then((mod) => {
        const TagCloud = mod.default || mod.TagCloud || mod;
        cloudInstance = TagCloud(container.current, skills, options);
      })
      .catch((err) => {
        console.error('Failed to load TagCloud', err);
      });

    return () => {
      if (cloudInstance && typeof cloudInstance.destroy === 'function') {
        cloudInstance.destroy();
      }
    };
  }, []);

  return <div ref={container} className={styles.cloud} />;
};

export default SkillsCloud;

