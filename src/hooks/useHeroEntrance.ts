import { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';

export function useHeroEntrance(containerRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.fromTo('[data-hero-kicker]',  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('[data-hero-name]',    { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.0 }, '-=0.3')
        .fromTo('[data-hero-title]',   { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('[data-hero-metrics]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .fromTo('[data-hero-chips] > *', { opacity: 0, y: 15, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, stagger: 0.07, duration: 0.5 }, '-=0.3')
        .fromTo('[data-hero-actions]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
        .fromTo('[data-hero-scroll]',  { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.2')
        .fromTo('[data-hero-orb-1]',   { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1.6, ease: 'power2.out' }, 0)
        .fromTo('[data-hero-orb-2]',   { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 2.0, ease: 'power2.out' }, 0.15);

      // Orb parallax on scroll
      gsap.to('[data-hero-orb-1]', {
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
      gsap.to('[data-hero-orb-2]', {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });
    },
    { scope: containerRef, dependencies: [] }
  );
}
