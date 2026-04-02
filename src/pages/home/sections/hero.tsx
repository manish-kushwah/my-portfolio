import { motion } from "framer-motion";
import { GeometricBird } from "../../../shared/components/ui/geometric-bird";

export const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-8 md:px-10 overflow-hidden">
      <GeometricBird />
      {/* Background Subtle Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Floating Industrial Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-12 bg-accent/10"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="inline-block px-3 py-1 mb-6 border border-accent/20 bg-accent/10 rounded-sharp mono text-[10px] text-accent tracking-widest font-bold uppercase">
            Senior Frontend Engineer @ Waveaxis
          </div>

          <div className="relative group mb-10">
            {/* Base Heading */}
            <h1 className="text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] tracking-tighter uppercase font-black -ml-2 text-secondary drop-shadow-sm">
              Frontend
              <br />
              Engineer.
            </h1>

            {/* Smooth Shine Highlight Effect */}
            <motion.h1
              className="absolute inset-0 text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] tracking-tighter uppercase font-black -ml-2 pointer-events-none select-none"
              style={{
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                backgroundImage:
                  "linear-gradient(90deg, transparent 20%, var(--accent) 50%, transparent 80%)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["200% 0", "-200% 0"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 5,
              }}
            >
              Frontend
              <br />
              Engineer.
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <p className="lg:max-w-md max-w-fuull text-lg text-muted/80 leading-relaxed font-medium">
              6+ years of building{" "}
              <span className="text-secondary">
                high-performance UI systems
              </span>
              . Expert in component-driven architecture, bundler optimization
              (Webpack/RSpack), and scalable frontend platforms.
            </p>
            <div className="flex gap-4">
              <div className="h-24 w-44 bg-zinc-900/50 backdrop-blur-sm border border-border/50 rounded-sharp flex flex-col justify-start px-6 group hover:border-accent/40 transition-colors">
                <span className="mono text-[10px] text-muted mb-1 uppercase tracking-tight">
                  UX Consistency
                </span>
                <span className="text-3xl font-bold font-display text-secondary group-hover:text-accent transition-colors">
                  Atomic Design
                </span>
              </div>
              <div className="h-24 w-44 bg-zinc-900/50 backdrop-blur-sm border border-border/50 rounded-sharp flex flex-col justify-start px-6 group hover:border-accent/40 transition-colors">
                <span className="mono text-[10px] text-muted mb-1 uppercase tracking-tight">
                  Years Exp.
                </span>
                <span className="text-3xl font-bold font-display text-secondary group-hover:text-accent transition-colors">
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
