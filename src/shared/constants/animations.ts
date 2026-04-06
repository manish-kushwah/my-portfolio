export const FADE_UP_ANIMATION = {
  initial: { opacity: 0, y: 70 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: {
    duration: 2,
    ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier
  },
} as const;

