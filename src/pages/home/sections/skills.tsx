import { TECH_DATA } from "../../../shared/constants/tech-data";
import { useQuery } from "urql";

const GET_SKILLS = `
  query GetSkills {
    skills(first: 100) {
      id
      name
      category
      iconIdentifier
    }
  }
`;

type SkillData = {
  id: string;
  name: string;
  category: string;
  iconIdentifier: string;
};

export const Skills = () => {
  const [result] = useQuery<{ skills: SkillData[] }>({
    query: GET_SKILLS,
  });

  const { data, fetching, error } = result;

  if (fetching) return null;
  if (error)
    return (
      <div className="text-red-500 p-10 text-center">
        Error loading skills...
      </div>
    );

  const groupedSkills = data?.skills.reduce(
    (acc: Record<string, SkillData[]>, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {},
  );

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
        <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12">
          {groupedSkills &&
            Object.entries(groupedSkills).map(([category, skills]) => {
              const sortedSkills = [...skills].sort((a, b) =>
                a.name.localeCompare(b.name),
              );
              return (
                <div key={category}>
                  <h4 className="mono text-[9px] text-(--accent) uppercase mb-6 border-b border-(--border) pb-3 h-12">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {sortedSkills.map((s) => {
                      const tech =
                        TECH_DATA[s.name] || TECH_DATA[s.iconIdentifier];
                      const Icon = tech?.icon;
                      return (
                        <li
                          key={s.id}
                          className="group flex items-center gap-3 text-sm font-medium transition-all duration-300 cursor-default"
                        >
                          <span
                            className="transition-all duration-500 ease-out flex items-center justify-center"
                            style={{
                              color: tech?.color || "var(--fg)",
                              filter: `drop-shadow(0 0 6px ${tech?.color || "var(--fg)"}66)`,
                            }}
                          >
                            {Icon ? (
                              <Icon size={22} />
                            ) : (
                              <div className="w-5 h-5 bg-(--surface-3) rounded-full" />
                            )}
                          </span>
                          <span className="text-(--muted) group-hover:translate-x-1 group-hover:text-(--fg) transition-all duration-300">
                            {s.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
