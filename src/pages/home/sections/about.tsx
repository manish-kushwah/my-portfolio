import { motion } from "framer-motion";
import { FADE_UP_ANIMATION } from "../../../shared/constants/animations";
import profileImg from "../../../assets/images/profile-portrait.jpeg";
import { useQuery } from "urql";
import { RichText } from "@graphcms/rich-text-react-renderer";

const GET_ABOUT = `
  query GetAbout {
    profiles(first: 1) {
      bio {
        raw
      }
    }
  }
`;

export const About = () => {
  const [result] = useQuery({ query: GET_ABOUT });
  const { data } = result;

  const rawBio = data?.profiles[0]?.bio?.raw;

  return (
    <section
      id="about"
      className="py-32 px-8 md:px-10 border-t border-(--border) bg-(--surface-3)"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <motion.div {...FADE_UP_ANIMATION}>
          <h2 className="font-display text-[24px] text-(--muted) font-bold uppercase mb-12 tracking-[12px]! lg:tracking-[14px]! leading-loose">
            About
          </h2>
          <div className="space-y-6 text-(--muted)/80 leading-relaxed font-medium text-sm md:text-base">
            <h3 className="text-4xl font-display font-black uppercase mb-8 leading-tight text-(--fg)">
              Engineering
              <br />
              Scalable Web Interfaces
              <br />
              with Industrial
              <br />
              Precision.
            </h3>
            {rawBio ? (
              <RichText
                content={rawBio}
                renderers={{
                  h3: ({ children }) => (
                    <h3 className="text-4xl font-display font-black uppercase mb-8 leading-tight text-(--fg)">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => <p>{children}</p>,
                  bold: ({ children }) => (
                    <span className="font-bold text-(--fg)">{children}</span>
                  ),
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      className="text-(--accent) underline underline-offset-4 decoration-(--accent)/30"
                    >
                      {children}
                    </a>
                  ),
                }}
              />
            ) : (
              // Fallback content while loading or if data is missing
              <>
                <p>
                  I solve complexity with components. With 6+ years across the
                  stack, I specialize in building UI systems that don't just
                  look good but scale. From implementing{" "}
                  <span className="text-(--accent) underline underline-offset-4 decoration-(--accent)/30">
                    96Meridian.ai
                  </span>{" "}
                  (converting audio to SOAP notes) to orchestrating multi-brand
                  component libraries, my focus is always on maintenance and DX.
                </p>
                <p>
                  My recent tenure at{" "}
                  <span className="font-bold text-(--fg)">Waveaxis</span> has
                  focus area in{" "}
                  <span className="font-bold text-(--fg)">
                    Build Optimization (RSpack)
                  </span>{" "}
                  and{" "}
                  <span className="font-bold text-(--fg)">
                    Storybook themer logic
                  </span>
                  . I've successfully reduced bundle sizes by 80% and build
                  times by 10x, proving that performance is as much an
                  architectural decision as it is a feature.
                </p>
              </>
            )}
          </div>{" "}
        </motion.div>

        <motion.div
          {...FADE_UP_ANIMATION}
          className="relative group md:pt-24 md:max-w-sm mx-auto md:ml-auto w-full"
        >
          <div className="aspect-4/5 bg-(--surface-3) border border-(--border) rounded-sharp overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-40 select-none pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="mono text-[10px] text-(--accent) uppercase block mb-2 tracking-tighter">
                Current Status
              </span>
              <p className="text-sm font-bold text-white uppercase tracking-tight">
                Senior Frontend Engineer @ Waveaxis
              </p>
            </div>
            <img
              src={profileImg}
              alt="Manish Kushwah Portrait"
              className="w-full h-full object-cover object-[center_18%] grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 group-active:scale-100"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-(--accent)/10 border border-(--border) rounded-sharp -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 group-active:translate-x-2 group-active:translate-y-2 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
