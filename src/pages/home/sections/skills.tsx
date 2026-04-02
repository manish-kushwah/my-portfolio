import { TECH_DATA, SKILL_GROUPS } from "../../../shared/constants/tech-data";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 px-8 md:px-10 border-t border-border bg-black"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:max-w-xs max-w-full">
          <h2 className="font-display text-[24px] text-[rgb(107,114,128)] font-bold uppercase mb-6 tracking-[12px]! lg:tracking-[14px]! leading-loose">
            Skills
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Leveraging the modern web primitives to build systems that are fast
            by default and resilient by design.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12">
          {SKILL_GROUPS.map((group) => (
            <div key={group.cat}>
              <h4 className="mono text-[9px] text-accent uppercase mb-6 border-b border-zinc-800 pb-2">
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
                          color: data?.color || "#fff",
                          filter: `drop-shadow(0 0 6px ${data?.color || "#fff"}66)`,
                        }}
                      >
                        {Icon ? (
                          <Icon size={22} />
                        ) : (
                          <div className="w-5 h-5 bg-zinc-800 rounded-full" />
                        )}
                      </span>
                      <span className="text-muted group-hover:translate-x-1 group-hover:text-secondary transition-all duration-300">
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
