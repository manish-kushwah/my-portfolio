import { motion } from "framer-motion";
import { FADE_UP_ANIMATION } from "../../../shared/constants/animations";
import { useQuery } from "urql";
import { RichText } from "@graphcms/rich-text-react-renderer";

const GET_EXPERIENCE = `
  query GetExperience {
    experiences(orderBy: startDate_DESC) {
      id
      role
      companyName
      startDate
      endDate
      currentlyWorking
      companyLogo {
        url
      }
      description
    }
  }
`;

type ExperienceData = {
  id: string;
  role: string;
  companyName: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  companyLogo?: { url: string };
  description: {
    raw: any;
  } | null;
};

export const Experience = () => {
  const [result] = useQuery<{ experiences: ExperienceData[] }>({
    query: GET_EXPERIENCE,
  });

  const { data, fetching, error } = result;

  if (fetching) return null;
  if (error)
    return (
      <div className="text-red-500 p-10 text-center">
        Error loading experience data...
      </div>
    );

  const experiences = data?.experiences || [];

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Fallback if already formatted
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section
      id="experience"
      className="py-32 px-8 md:px-10 border-t border-(--border)"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[24px] text-(--muted) font-bold uppercase mb-16 tracking-[12px]! lg:tracking-[14px]! leading-loose">
          Experience
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 w-px h-full bg-(--border) hidden md:block" />

          <div className="space-y-24 md:space-y-32">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                {...FADE_UP_ANIMATION}
                transition={{
                  ...FADE_UP_ANIMATION.transition,
                  delay: index * 0.2,
                }}
                className="relative md:pl-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] top-4 w-2 h-2 rounded-full border border-(--border) bg-(--bg) group-hover:border-(--accent) group-hover:scale-125 transition-all duration-500 hidden md:block" />

                <div className="lg:col-span-5">
                  <div className="flex flex-col gap-2 mb-6">
                    <span className="mono text-[10px] text-(--accent) font-bold uppercase tracking-widest mb-2">
                      {formatDate(exp.startDate)} —{" "}
                      {exp.currentlyWorking
                        ? "Present"
                        : formatDate(exp.endDate)}
                    </span>

                    <div className="flex items-center gap-4 mb-4">
                      {exp.companyLogo?.url && (
                        <div className="w-10 h-10 rounded-sharp border border-(--border) bg-(--surface-3) overflow-hidden shrink-0 flex items-center justify-center p-1.5 shadow-sm group-hover:border-(--accent)/30 transition-colors duration-500">
                          <img
                            src={exp.companyLogo.url}
                            alt={`${exp.companyName} logo`}
                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      )}
                      <h3 className="text-xl md:text-2xl font-display font-black capitalize text-(--fg) group-hover:text-(--fg) transition-colors duration-500 leading-none m-0">
                        {exp.companyName}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xl font-display font-bold text-(--muted) capitalize tracking-tighter">
                        {exp.role}
                      </span>
                      <div className="h-px grow bg-(--border) opacity-50" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="space-y-4">
                    <RichText
                      content={exp.description?.raw}
                      renderers={{
                        p: ({ children }) => (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex gap-4 items-start group/item mb-4"
                          >
                            <span className="mt-2.5 w-1.5 h-1.5 border border-(--border) rotate-45 shrink-0 group-hover/item:border-(--accent) group-hover/item:bg-(--accent) transition-all duration-300" />
                            <div className="text-base md:text-lg text-(--fg)/70 leading-relaxed group-hover/item:text-(--fg) transition-colors duration-300">
                              {children}
                            </div>
                          </motion.div>
                        ),
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
