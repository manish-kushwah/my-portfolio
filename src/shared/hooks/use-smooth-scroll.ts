import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Hook to initialize the buttery-smooth scrolling (Lenis) for the entire app.
 * A Senior-level architecture uses this to ensure frame-rate consistent scrolling
 * that synchronizes perfectly with Framer Motion.
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,             // The "Luxury Glide" sweet spot
      wheelMultiplier: 1.1,  // Enhanced flick power
      touchMultiplier: 1.5,
      smoothWheel: true,
    });

    // 🏆 LUXURY REFINEMENT: Smooth anchor scroll synchronization
    const handleAnchorScroll = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.hash && target.origin === window.location.origin) {
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(target.hash, {
            offset: -80, // Accounts for sticky header
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }
      }
    };

    window.addEventListener('click', handleAnchorScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up to prevent memory leaks and duplicate instances
    return () => {
      window.removeEventListener('click', handleAnchorScroll);
      lenis.destroy();
    };
  }, []);
};
