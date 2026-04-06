import { motion } from "framer-motion";
import { FADE_UP_ANIMATION } from "../../../shared/constants/animations";

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
    <section className="relative py-32 px-8 md:px-10 border-t border-(--border) bg-(--surface-4) overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-display text-[24px] text-(--muted) font-bold uppercase mb-12 tracking-[12px]! lg:tracking-[14px]! leading-loose">
          Principles
        </h2>
        <motion.div
          {...FADE_UP_ANIMATION}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PRINCIPLES.map((item, i) => (
            <div
              key={item.title + i}
              className="p-8 border border-(--border) rounded-sharp hover:border-(--accent)/40 transition-all duration-300 bg-(--surface-2)/40 group hover:bg-(--surface-3)/10 backdrop-blur-sm"
            >
              <h3 className="text-xl mb-4 font-display uppercase tracking-tight text-(--fg) group-hover:text-(--accent) transition-colors">
                {item.title}
              </h3>
              <p className="text-(--muted)/80 text-sm leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
