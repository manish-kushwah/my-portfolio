import { motion } from "framer-motion";
import { GeometricBird } from "../../../shared/components/ui/geometric-bird";
import { useQuery } from "urql";
import { RichText } from "@graphcms/rich-text-react-renderer";

const GET_HERO_PROFILE = `
  query GetHeroProfile {
    profiles(first: 1) {
      tagline {
        raw
      }
    }
  }
`;

import { FADE_UP_ANIMATION } from "../../../shared/constants/animations";

export const Hero = () => {
  const [result] = useQuery({ query: GET_HERO_PROFILE });
  const { data } = result;

  const rawTagline = data?.profiles?.[0]?.tagline?.raw;

  return (
    <section className="relative pt-48 pb-32 px-8 md:px-10 overflow-hidden">
      <GeometricBird />
      {/* Background Subtle Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-(--accent)/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Floating Industrial Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-12 bg-(--accent)/10"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div {...FADE_UP_ANIMATION}>
          <div className="inline-block px-3 py-1 mb-6 border border-(--accent)/20 bg-(--accent)/10 rounded-sharp mono text-[10px] text-(--accent) tracking-widest font-bold uppercase">
            Senior Frontend Engineer @ Waveaxis
          </div>

          <div className="relative group mb-10">
            {/* Base Heading */}
            <h1 className="text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] uppercase font-black -ml-2 text-(--fg) drop-shadow-sm">
              <motion.span
                className="block"
                initial={{
                  x: "-15%",
                  opacity: 0,
                  filter: "blur(15px)",
                  letterSpacing: "0.2em",
                  scale: 1.05,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  letterSpacing: "0.0em",
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
              >
                Frontend
              </motion.span>
              <motion.span
                className="block"
                initial={{
                  x: "15%",
                  opacity: 0,
                  filter: "blur(15px)",
                  letterSpacing: "0.2em",
                  scale: 1.05,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  letterSpacing: "0.0em",
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
              >
                Engineer.
              </motion.span>
            </h1>

            {/* Smooth Shine Highlight Effect */}
            <h1 className="absolute inset-0 text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] tracking-normal! uppercase font-black -ml-2 pointer-events-none select-none">
              <motion.span
                className="block"
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundImage:
                    "linear-gradient(90deg, transparent 20%, var(--accent) 50%, transparent 80%)",
                  backgroundSize: "200% 100%",
                }}
                initial={{
                  x: "-15%",
                  opacity: 0,
                  filter: "blur(15px)",
                  letterSpacing: "0.2em",
                  scale: 1.05,
                  backgroundPosition: "200% 0",
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  letterSpacing: "0.0em",
                  scale: 1,
                  backgroundPosition: "-200% 0",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 3,
                  ease: [0.22, 1, 0.36, 1],
                  backgroundPosition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                Frontend
              </motion.span>
              <motion.span
                className="block"
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundImage:
                    "linear-gradient(90deg, transparent 20%, var(--accent) 50%, transparent 80%)",
                  backgroundSize: "200% 100%",
                }}
                initial={{
                  x: "15%",
                  opacity: 0,
                  filter: "blur(15px)",
                  letterSpacing: "0.2em",
                  scale: 1.05,
                  backgroundPosition: "200% 0",
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  letterSpacing: "0.0em",
                  scale: 1,
                  backgroundPosition: "-200% 0",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 3,
                  ease: [0.22, 1, 0.36, 1],
                  backgroundPosition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                Engineer.
              </motion.span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="lg:max-w-md max-w-full text-lg text-(--muted)/80 leading-relaxed font-medium">
              {rawTagline ? (
                <RichText
                  content={rawTagline}
                  renderers={{
                    p: ({ children }) => <p>{children}</p>,
                    bold: ({ children }) => (
                      <span className="font-bold text-(--fg)">{children}</span>
                    ),
                  }}
                />
              ) : (
                <p>
                  6+ years of building{" "}
                  <span className="text-(--fg)">
                    high-performance UI systems
                  </span>
                  . Expert in component-driven architecture, bundler
                  optimization (Webpack/RSpack), and scalable frontend
                  platforms.
                </p>
              )}
            </div>
            <div className="flex gap-4">
              <div className="min-h-24 h-auto w-44 bg-(--surface-3)/50 backdrop-blur-sm border border-(--border)/50 rounded-sharp flex flex-col justify-start px-6 py-3 group hover:border-(--accent)/40 transition-colors">
                <span className="mono text-[10px] text-(--muted) mb-1 uppercase tracking-tight">
                  UX Consistency
                </span>
                <span className="text-3xl font-bold font-display text-(--fg) group-hover:text-(--accent) transition-colors">
                  Atomic Design
                </span>
              </div>
              <div className="min-h-24 h-auto w-44 bg-(--surface-3)/50 backdrop-blur-sm border border-(--border)/50 rounded-sharp flex flex-col justify-start px-6 py-3 group hover:border-(--accent)/40 transition-colors">
                <span className="mono text-[10px] text-(--muted) mb-1 uppercase tracking-tight">
                  Years Exp.
                </span>
                <span className="text-3xl font-bold font-display text-(--fg) group-hover:text-(--accent) transition-colors">
                  6+
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
