import { motion } from "framer-motion";
import { FADE_UP_ANIMATION } from "../../../shared/constants/animations";
import { TECH_DATA } from "../../../shared/constants/tech-data";
import { useQuery } from "urql";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const GET_PROJECTS = `
  query GetProjects {
    projects(orderBy: orderNumber_ASC) {
      id
      projectTitle
      role
      projectAbout
      projectTasks
      projectMetrics
      techStacks
      previewImage {
        url
      }
      githubUrl
      liveUrl
    }
  }
`;

type ProjectData = {
  id: string;
  projectTitle: string;
  role: string;
  projectAbout: string;
  projectTasks: string;
  projectMetrics: { label: string; value: string }[];
  techStacks: string[];
  previewImage?: { url: string };
  githubUrl?: string;
  liveUrl?: string;
};

export const Projects = () => {
  const [result] = useQuery<{ projects: ProjectData[] }>({
    query: GET_PROJECTS,
  });

  const { data, fetching, error } = result;

  if (fetching) return null;
  if (error)
    return (
      <div className="text-red-500 p-10 text-center">
        Error loading projects...
      </div>
    );

  return (
    <section
      id="work"
      className="py-32 px-8 md:px-10 border-t border-(--border)"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[24px] text-(--muted) font-bold uppercase mb-12 tracking-[12px]! lg:tracking-[14px]! leading-loose">
          Projects
        </h2>
        <div className="space-y-32">
          {data?.projects.map((project, i) => (
            <motion.div
              key={project.id}
              {...FADE_UP_ANIMATION}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              <div className="lg:col-span-5">
                <span className="mono text-[10px] text-(--accent) font-bold mb-4 block uppercase tracking-tighter decoration-accent underline underline-offset-4">
                  Project {i + 1}
                </span>
                <div className="flex items-center gap-5 mb-4 sm:mb-6">
                  {project.previewImage?.url && (
                    <div className="w-12 h-12 rounded-sharp border border-(--border) bg-(--surface-3) overflow-hidden shrink-0 flex items-center justify-center shadow-sm">
                      <img
                        src={project.previewImage.url}
                        alt={`${project.projectTitle} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-4xl font-display font-black uppercase leading-none italic text-(--fg) m-0">
                    {project.projectTitle}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4 items-center mb-8">
                  <div className="inline-block px-3 py-1 bg-(--surface-3) border border-(--border) rounded-sharp mono text-[9px] text-(--muted)">
                    ROLE: {project.role}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--muted) hover:text-(--accent) transition-colors"
                        title="GitHub Repository"
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--muted) hover:text-(--accent) transition-colors"
                        title="Live Preview"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="mono text-[9px] text-(--muted) uppercase mb-2">
                      About
                    </h4>
                    <p className="text-sm text-(--fg)/70 leading-relaxed lg:max-w-sm max-w-full whitespace-pre-wrap">
                      {project.projectAbout}
                    </p>
                  </div>
                  <div>
                    <h4 className="mono text-[9px] text-(--muted) uppercase mb-2">
                      Tasks
                    </h4>
                    <p className="text-sm text-(--fg)/70 leading-relaxed lg:max-w-sm max-w-full whitespace-pre-wrap">
                      {project.projectTasks}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 h-full">
                {project.projectMetrics?.map((m, j) => (
                  <div
                    key={j}
                    className="border border-(--border) p-6 rounded-sharp bg-(--surface-4) flex flex-col justify-center group hover:bg-(--surface-3) transition-colors"
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
                  {project.techStacks?.map((s) => {
                    const tech = TECH_DATA[s];
                    const Icon = tech?.icon;
                    return (
                      <span
                        key={s}
                        className="group px-3 py-1.5 border border-(--border) rounded-sharp mono text-[10px] text-(--muted) flex items-center gap-2 transition-all duration-300 cursor-default hover:bg-(--surface-3)"
                      >
                        <span
                          className="transition-colors duration-300"
                          style={{ color: tech?.color || "var(--fg)" }}
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
