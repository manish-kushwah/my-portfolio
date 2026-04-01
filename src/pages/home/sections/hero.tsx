import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-10 overflow-hidden">
      {/* Background Subtle Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

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
          <h1 className="text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] tracking-tighter uppercase font-black -ml-2 mb-10 text-center text-secondary drop-shadow-sm">
            Frontend<br />Engineer.
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="max-w-md text-lg text-muted/80 leading-relaxed font-medium">
              6+ years of building <span className="text-secondary">high-performance UI systems</span>. Expert in component-driven architecture, bundler optimization (Webpack/RSpack), and scalable frontend platforms.
            </p>
            <div className="flex gap-4">
              <div className="h-24 w-44 bg-zinc-900/50 backdrop-blur-sm border border-border/50 rounded-sharp flex flex-col justify-center px-6 group hover:border-accent/40 transition-colors">
                <span className="mono text-[10px] text-muted mb-1 uppercase tracking-tight">Lighthouse score</span>
                <span className="text-3xl font-bold font-display text-secondary group-hover:text-accent transition-colors">100<span className="text-muted text-lg">/100</span></span>
              </div>
              <div className="h-24 w-44 bg-zinc-900/50 backdrop-blur-sm border border-border/50 rounded-sharp flex flex-col justify-center px-6 group hover:border-accent/40 transition-colors">
                <span className="mono text-[10px] text-muted mb-1 uppercase tracking-tight">Years Exp.</span>
                <span className="text-3xl font-bold font-display text-secondary group-hover:text-accent transition-colors">06+ <span className="text-muted text-lg">YRS</span></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
