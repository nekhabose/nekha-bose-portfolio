import { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';

interface ScrollRevealOptions {
  y?: number;
  stagger?: number;
  delay?: number;
  duration?: number;
  start?: string;
}

export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  selector: string = '[data-reveal]',
  options: ScrollRevealOptions = {}
) {
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const targets = containerRef.current?.querySelectorAll(selector);
      if (!targets?.length) return;

      gsap.fromTo(
        Array.from(targets),
        { opacity: 0, y: options.y ?? 40 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.9,
          stagger: options.stagger ?? 0.12,
          delay: options.delay ?? 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: options.start ?? 'top 80%',
          },
        }
      );
    },
    { scope: containerRef, dependencies: [] }
  );
}
