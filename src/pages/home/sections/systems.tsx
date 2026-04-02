import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    title: "Architecture First",
    desc: "Every line of code is a long-term liability. I build for maintenance, not just for delivery.",
  },
  {
    title: "Scale-Ready Systems",
    desc: "Implementing patterns that sustain 100+ daily deployments without regressions.",
  },
  {
    title: "Performance as Feature",
    desc: "Speed is a UX requirement. Bundle micro-analysis and runtime monitoring are default.",
  },
];

export const Systems = () => {
  return (
    <section className="py-20 px-10 border-t border-border bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[24px] text-[rgb(107,114,128)] font-bold uppercase mb-12 tracking-[12px]! lg:tracking-[14px]! leading-loose">
          Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRINCIPLES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1], // Custom refined ease
              }}
              viewport={{ once: true, margin: "-10%" }}
              className="p-8 border border-border rounded-sharp hover:border-accent/40 transition-all duration-300 bg-black/40 group hover:bg-zinc-900/10"
            >
              <h3 className="text-xl mb-4 font-display uppercase tracking-tight text-secondary group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted/80 text-sm leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
