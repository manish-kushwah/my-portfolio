import { TECH_DATA, SKILL_GROUPS } from "../../../shared/constants/tech-data";

export const Capabilities = () => {
  return (
    <section className="py-20 px-10 border-t border-border bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="max-w-xs">
          <h2 className="mono text-[10px] text-muted uppercase mb-6 tracking-widest">Capabilities</h2>
          <p className="text-sm text-muted leading-relaxed">
            Leveraging the modern web primitives to build systems that are fast by default and resilient by design.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12">
          {SKILL_GROUPS.map(group => (
            <div key={group.cat}>
              <h4 className="mono text-[9px] text-accent uppercase mb-6 border-b border-zinc-800 pb-2">{group.cat}</h4>
              <ul className="space-y-3">
                {group.skills.map(s => {
                  const data = TECH_DATA[s];
                  const Icon = data?.icon;
                  return (
                    <li 
                      key={s} 
                      className="group flex items-center gap-3 text-sm font-medium transition-all duration-300 cursor-default"
                      style={{ "--hover-color": data?.color || "#fff" } as any}
                    >
                      <span className="text-muted group-hover:text-(--hover-color) transition-colors duration-300">
                        {Icon ? <Icon size={16} /> : <div className="w-4 h-4 bg-zinc-800 rounded-full" />}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
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
