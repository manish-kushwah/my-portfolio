import { TECH_DATA, SKILL_GROUPS } from "../../../shared/constants/tech-data";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-8 md:px-10 border-t border-(--border) bg-(--section-alt) overflow-hidden"
    >
      {/* Background Accent Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-(--accent)/5 blur-[150px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:max-w-xs max-w-full">
          <h2 className="font-display text-[24px] text-(--muted) font-bold uppercase mb-6 tracking-[12px]! lg:tracking-[14px]! leading-loose">
            Skills
          </h2>
          <p className="text-sm text-(--muted) leading-relaxed">
            Leveraging the modern web primitives to build systems that are fast
            by default and resilient by design.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12">
          {SKILL_GROUPS.map((group) => (
            <div key={group.cat}>
              <h4 className="mono text-[9px] text-(--accent) uppercase mb-6 border-b border-(--border) pb-2">
                {group.cat}
              </h4>
              <ul className="space-y-3">
                {group.skills.map((s) => {
                  const data = TECH_DATA[s];
                  const Icon = data?.icon;
                  return (
                    <li
                      key={s}
                      className="group flex items-center gap-3 text-sm font-medium transition-all duration-300 cursor-default"
                    >
                      <span
                        className="transition-all duration-500 ease-out flex items-center justify-center"
                        style={{
                          color: data?.color || "var(--fg)",
                          filter: `drop-shadow(0 0 6px ${data?.color || "var(--fg)"}66)`,
                        }}
                      >
                        {Icon ? (
                          <Icon size={22} />
                        ) : (
                          <div className="w-5 h-5 bg-(--surface-3) rounded-full" />
                        )}
                      </span>
                      <span className="text-(--muted) group-hover:translate-x-1 group-hover:text-(--fg) transition-all duration-300">
                        {s}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
