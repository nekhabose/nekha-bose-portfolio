import React, { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const finalClass = [styles.reveal, visible ? styles.visible : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={finalClass} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export default Reveal;
