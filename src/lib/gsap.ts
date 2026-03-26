import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: 'expo.out',
  duration: 0.8,
});

ScrollTrigger.defaults({
  start: 'top 85%',
  toggleActions: 'play none none none',
});

export { gsap, ScrollTrigger };
