import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useThemeContext } from "../../../app/providers/theme-provider";
import { Tooltip } from "@mantine/core";
import { FiDownload, FiMail } from "react-icons/fi";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>();

  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_CONTACT_FORM_W3FORMS_ACCESS_KEY,
          from_name: data.name,
          subject: `Portfolio: ${data.subject}`,
          message: data.message,
          email: data.email,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message delivered successfully");
        reset();
      } else {
        toast.error("Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Try again later.");
    }
  };


  return (
    <section
      id="contact"
      className="relative py-32 px-8 md:px-10 border-t border-(--border) bg-(--surface-4) overflow-hidden"
    >
      {/* Subtle Background Glow for Form focus area */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-(--accent)/2 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-20"
      >
        <div className="lg:max-w-md max-w-full">
          <h2 className="font-display text-[24px] text-(--muted) font-bold uppercase mb-12 tracking-[12px]! lg:tracking-[14px]! leading-loose">
            Connect
          </h2>
          <h3 className="text-6xl font-black font-display tracking-tighter uppercase mb-6 leading-none text-(--fg)">
            Let's build
            <br />
            the next
            <br className="hidden lg:block" /> big thing.
          </h3>
          <p className="text-(--muted) leading-relaxed mb-10">
            Open for Lead Frontend Roles, Architectural Consulting, and
            open-source collaborations. Currently focusing on the 2026-level web
            standard.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <Tooltip
              label="Open Mailbox"
              withArrow
              position="top"
              offset={10}
              transitionProps={{
                transition: "skew-down",
                duration: 300,
              }}
              styles={{
                tooltip: {
                  backgroundColor: isDark
                    ? "#3f3f3f"
                    : "color-mix(in srgb, var(--accent), transparent 50%)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  fontSize: "9px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "6px 12px",
                  borderRadius: "2px",
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.05)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                },
                arrow: {
                  border: "none",
                  backgroundColor: isDark
                    ? "#3f3f3f"
                    : "color-mix(in srgb, var(--accent), transparent 50%)",
                },
              }}
            >
              <a
                href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                className="w-14 h-14 border border-(--border) rounded-sharp flex items-center justify-center bg-(--surface-2) wave-fill transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group shadow-sm hover:shadow-[0_4px_20px_rgba(85,88,232,0.15)]"
              >
                <FiMail className="w-5 h-5 text-(--muted) group-hover:text-white/90 dark:group-hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
            </Tooltip>

            <Tooltip
              label="Download Resume"
              withArrow
              position="top"
              offset={10}
              transitionProps={{
                transition: "skew-down",
                duration: 300,
              }}
              styles={{
                tooltip: {
                  backgroundColor: isDark
                    ? "#3f3f3f"
                    : "color-mix(in srgb, var(--accent), transparent 50%)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  fontSize: "9px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "6px 12px",
                  borderRadius: "2px",
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.05)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                },
                arrow: {
                  border: "none",
                  backgroundColor: isDark
                    ? "#3f3f3f"
                    : "color-mix(in srgb, var(--accent), transparent 50%)",
                },
              }}
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-14 h-14 border border-(--border) rounded-sharp flex items-center justify-center bg-(--surface-2) wave-fill transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group shadow-sm hover:shadow-[0_4px_20px_rgba(85,88,232,0.15)]"
              >
                <FiDownload className="w-5 h-5 text-(--muted) group-hover:text-white/90 dark:group-hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
            </Tooltip>
          </div>
        </div>

        <div className="flex-1 w-full bg-(--surface-3) border border-(--border) p-10 rounded-sharp">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="mono text-[9px] text-(--muted) uppercase block">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full bg-transparent border-b ${errors.name ? "border-red-500" : "border-(--border)"} py-2 input-wave font-medium text-(--fg) placeholder:text-(--muted)/30`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span className="mono text-[8px] text-red-500 uppercase">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <label className="mono text-[9px] text-(--muted) uppercase block">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full bg-transparent border-b ${errors.email ? "border-red-500" : "border-(--border)"} py-2 input-wave font-medium text-(--fg) placeholder:text-(--muted)/30`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <span className="mono text-[8px] text-red-500 uppercase">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label className="mono text-[9px] text-(--muted) uppercase block">
                Subject
              </label>
              <input
                type="text"
                {...register("subject", { required: "Subject is required" })}
                className={`w-full bg-transparent border-b ${errors.subject ? "border-red-500" : "border-(--border)"} py-2 input-wave font-medium text-(--fg) placeholder:text-(--muted)/30`}
                placeholder="Architectural Consultation"
              />
              {errors.subject && (
                <span className="mono text-[8px] text-red-500 uppercase">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <label className="mono text-[9px] text-(--muted) uppercase block">
                Message
              </label>
              <textarea
                rows={4}
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Min 10 characters" },
                })}
                className={`w-full bg-transparent border-b ${errors.message ? "border-red-500" : "border-(--border)"} py-2 resize-none input-wave font-medium text-(--fg) placeholder:text-(--muted)/30`}
                placeholder="How can I help you scale?"
              />
              {errors.message && (
                <span className="mono text-[8px] text-red-500 uppercase">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              disabled={isSubmitting}
              style={{
                backgroundColor: "color-mix(in srgb, var(--accent), transparent 10%)",
                "--wave-bg": "color-mix(in srgb, var(--accent), black 12%)",
              } as React.CSSProperties}
              className="relative wave-fill text-white! px-10 py-5 rounded-sharp mono cursor-pointer text-[11px] font-black uppercase active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-[0_4px_30px_rgba(109,112,255,0.4)] overflow-hidden group border-none"
            >
              <span className="relative z-10 transition-colors duration-500 font-bold tracking-widest!">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};
