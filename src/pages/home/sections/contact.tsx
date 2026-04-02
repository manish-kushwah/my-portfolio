import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SocialIcon } from "react-social-icons";

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
      className="relative py-32 px-8 md:px-10 border-t border-border bg-zinc-950 overflow-hidden"
    >
      {/* Subtle Background Glow for Form focus area */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-accent/2 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-20"
      >
        <div className="lg:max-w-md max-w-full">
          <h2 className="font-display text-[24px] text-[rgb(107,114,128)] font-bold uppercase mb-12 tracking-[12px]! lg:tracking-[14px]! leading-loose">
            Connect
          </h2>
          <h3 className="text-6xl font-black font-display tracking-tighter uppercase mb-6 leading-none">
            Let's build
            <br />
            the next
            <br className="hidden lg:block" /> big thing.
          </h3>
          <p className="text-muted leading-relaxed mb-10">
            Open for Lead Frontend Roles, Architectural Consulting, and
            open-source collaborations. Currently focusing on the 2026-level web
            standard.
          </p>
          <div className="flex flex-col gap-6">
            <div className="group flex items-center justify-start cursor-pointer">
              <span className="mono text-[9px] text-accent block">Email: </span>
              <SocialIcon
                url={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                bgColor="transparent"
                fgColor="#737373"
                style={{ width: 40, height: 40 }}
                className="hover:opacity-100 opacity-60 transition-opacity shrink-0 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 w-full bg-zinc-900 border border-border p-10 rounded-sharp">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="mono text-[9px] text-muted uppercase block">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full bg-transparent border-b ${errors.name ? "border-red-500" : "border-border"} py-2 focus:border-accent outline-none font-medium placeholder:text-zinc-800`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span className="mono text-[8px] text-red-500 uppercase">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <label className="mono text-[9px] text-muted uppercase block">
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
                  className={`w-full bg-transparent border-b ${errors.email ? "border-red-500" : "border-border"} py-2 focus:border-accent outline-none font-medium placeholder:text-zinc-800`}
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
              <label className="mono text-[9px] text-muted uppercase block">
                Subject
              </label>
              <input
                type="text"
                {...register("subject", { required: "Subject is required" })}
                className={`w-full bg-transparent border-b ${errors.subject ? "border-red-500" : "border-border"} py-2 focus:border-accent outline-none font-medium placeholder:text-zinc-800`}
                placeholder="Architectural Consultation"
              />
              {errors.subject && (
                <span className="mono text-[8px] text-red-500 uppercase">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <label className="mono text-[9px] text-muted uppercase block">
                Message
              </label>
              <textarea
                rows={4}
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Min 10 characters" },
                })}
                className={`w-full bg-transparent border-b ${errors.message ? "border-red-500" : "border-border"} py-2 resize-none focus:border-accent outline-none font-medium placeholder:text-zinc-800`}
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
              className="bg-accent text-primary px-8 py-4 rounded-sharp mono cursor-pointer text-[11px] font-black uppercase hover:bg-accent-hover active:scale-[0.98] transition-all duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(109,112,255,0.2)] hover:shadow-[0_4px_25px_rgba(109,112,255,0.4)]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};
