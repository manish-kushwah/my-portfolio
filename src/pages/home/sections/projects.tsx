import { motion } from "framer-motion";
import { TECH_DATA } from "../../../shared/constants/tech-data";

const PROJECTS = [
  {
    title: "96Meridian.ai",
    role: "Senior Frontend Engineer",
    problem:
      "Inefficient clinician workflows requiring manual transcription of medical consultations into SOAP notes.",
    solution:
      "Led architecture for an AI-powered documentation engine using AWS HealthScribe and RSpack for ultra-fast builds.",
    metrics: [
      { label: "Build Speed", value: "10x" },
      { label: "Bundle Size", value: "- 70%" },
      { label: "Efficiency", value: "+ 40%" },
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind",
      "Tanstack Query",
      "AWS HealthScribe",
      "Webpack/RSpack",
      "IndexedDB",
    ],
  },
  {
    title: "LetsLocalise",
    role: "Frontend Developer",
    problem:
      "Schools and businesses lacked a centralized, scalable platform for direct resource and community connection.",
    solution:
      "Built a complex multi-user pledger dashboard and signup module with specialized first-time user experience (FTUE).",
    metrics: [
      { label: "Onboarding Speed", value: "+ 50%" },
      { label: "Core Web Vitals", value: "+ 20%" },
      { label: "SEO Score", value: "100" },
    ],
    stack: [
      "React",
      "JavaScript",
      "contextAPI",
      "SCSS",
      "Styled components",
      "Webpack",
    ],
  },
];

export const Projects = () => {
  return (
    <section id="work" className="py-32 px-8 md:px-10 border-t border-(--border)">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[24px] text-(--muted) font-bold uppercase mb-12 tracking-[12px]! lg:tracking-[14px]! leading-loose">
          Projects
        </h2>
        <div className="space-y-32">
          {PROJECTS.map((system, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true, margin: "-15%" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              <div className="lg:col-span-5">
                <span className="mono text-[10px] text-(--accent) font-bold mb-4 block uppercase tracking-tighter decoration-accent underline underline-offset-4">
                  Project {i + 1}
                </span>
                <h3 className="text-4xl font-display font-black uppercase mb-2 sm:mb-6 leading-none italic text-(--fg)">
                  {system.title}
                </h3>
                <div className="inline-block px-3 py-1 bg-(--surface-3) border border-(--border) rounded-sharp mono text-[9px] mb-8 text-(--muted)">
                  ROLE: {system.role}
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="mono text-[9px] text-(--muted) uppercase mb-2">
                      Problem
                    </h4>
                    <p className="text-sm text-(--fg)/70 leading-relaxed lg:max-w-sm max-w-full">
                      {system.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="mono text-[9px] text-(--muted) uppercase mb-2">
                      Solution
                    </h4>
                    <p className="text-sm text-(--fg)/70 leading-relaxed lg:max-w-sm max-w-full">
                      {system.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
                {system.metrics.map((m, j) => (
                  <div
                    key={j}
                    className="border border-(--border) p-6 rounded-sharp bg-(--surface-4) flex flex-col justify-end min-h-[160px] group hover:bg-(--surface-3) transition-colors"
                  >
                    <span className="text-3xl font-display font-bold mb-2 group-hover:text-(--accent) transition-colors tracking-tighter text-(--fg)">
                      {m.value}
                    </span>
                    <span className="mono text-[10px] text-(--muted) uppercase">
                      {m.label}
                    </span>
                  </div>
                ))}
                <div className="sm:col-span-3 border border-(--border) p-4 rounded-sharp bg-(--surface-1) flex flex-wrap gap-2">
                  {system.stack.map((s) => {
                    const data = TECH_DATA[s];
                    const Icon = data?.icon;
                    return (
                      <span
                        key={s}
                        className="group px-3 py-1.5 border border-(--border) rounded-sharp mono text-[10px] text-(--muted) flex items-center gap-2 transition-all duration-300 cursor-default hover:bg-(--surface-3)"
                      >
                        <span
                          className="transition-colors duration-300"
                          style={{ color: data?.color || "var(--fg)" }}
                        >
                          {Icon && <Icon size={17} />}
                        </span>
                        <span className="text-(--muted) group-hover:translate-x-1 group-hover:text-(--fg) transition-all duration-300">
                          {s}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
