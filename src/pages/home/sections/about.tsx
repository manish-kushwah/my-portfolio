import { motion } from "framer-motion";
import profileImg from "../../../assets/images/profile-portrait.jpeg";

export const About = () => {
  return (
    <section id="about" className="py-20 px-10 border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <h2 className="font-display text-[24px] text-[rgb(107,114,128)] font-bold uppercase mb-12 tracking-[12px]! lg:tracking-[14px]! leading-loose">
            About
          </h2>
          <h3 className="text-4xl font-display font-black uppercase mb-8 leading-tight">
            Engineering
            <br />
            Scalable Web Interfaces
            <br />
            with Industrial
            <br />
            Precision.
          </h3>
          <div className="space-y-6 text-muted/80 leading-relaxed font-medium text-sm md:text-base">
            <p>
              I solve complexity with components. With 6+ years across the
              stack, I specialize in building UI systems that don't just look
              good but scale. From implementing{" "}
              <span className="text-accent underline underline-offset-4 decoration-accent/30">
                96Meridian.ai
              </span>{" "}
              (converting audio to SOAP notes) to orchestrating multi-brand
              component libraries, my focus is always on maintenance and DX.
            </p>
            <p>
              My recent tenure at{" "}
              <span className="font-bold text-secondary">Waveaxis</span> has
              focus area in{" "}
              <span className="font-bold text-secondary">
                Build Optimization (RSpack)
              </span>{" "}
              and{" "}
              <span className="font-bold text-secondary">
                Storybook themer logic
              </span>
              . I've successfully reduced bundle sizes by 80% and build times by
              10x, proving that performance is as much an architectural decision
              as it is a feature.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          className="relative group"
        >
          <div className="aspect-8/9 bg-zinc-900 border border-border rounded-sharp overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-40 select-none pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="mono text-[10px] text-accent uppercase block mb-2 tracking-tighter">
                Current Status
              </span>
              <p className="text-sm font-bold text-secondary uppercase tracking-tight">
                Senior Frontend Engineer @ Waveaxis
              </p>
            </div>
            {/* User can add their own image here */}
            <img
              src={profileImg}
              alt="Manish Kushwah Portrait"
              className="w-full h-full object-cover object-[center_18%] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-accent/10 border border-border rounded-sharp -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
