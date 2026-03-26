import { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';

export function useTimelineDraw(containerRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const trigger = { trigger: containerRef.current, start: 'top 70%' };

      gsap.fromTo(
        '[data-timeline-line]',
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 1.5, ease: 'power2.out', scrollTrigger: trigger }
      );

      gsap.fromTo(
        '[data-timeline-dot]',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.2, duration: 0.5, ease: 'back.out(1.7)', scrollTrigger: trigger }
      );

      gsap.fromTo(
        '[data-timeline-card]',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.2, duration: 0.9, ease: 'expo.out', scrollTrigger: trigger }
      );
    },
    { scope: containerRef, dependencies: [] }
  );
}
