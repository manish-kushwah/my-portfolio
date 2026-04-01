import { useState, useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle state based on whether our top-of-page sentinel is visible
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: [0] },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Invisible sentinel element at the very top of the scroll container */}
      <div
        ref={sentinelRef}
        className="absolute top-0 left-0 w-full h-px pointer-events-none z-0"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,backdrop-filter,padding,border-color] duration-500 ease-out ${isScrolled
          ? "bg-zinc-950/20 backdrop-blur-sm border-white/4"
          : "bg-transparent border-transparent"
          }`}
      >
        <div className={`max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 transition-[padding] duration-500 ease-out ${isScrolled ? "py-4" : "py-6"}`}>
          <div className="flex flex-1 gap-2 md:gap-6 items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer active:scale-95 transition-transform"
            >
              <img src="/favicon.svg" alt="MK" className="w-6 h-6 object-contain" />
            </button>
            <div className="flex gap-1 items-center">
              <SocialIcon
                url={`https://x.com/${import.meta.env.VITE_CONTACT_X_USER}`}
                target="_blank"
                bgColor="transparent"
                fgColor="#737373"
                style={{ width: 28, height: 28 }}
                className="hover:opacity-100 opacity-60 transition-opacity"
              />
              <SocialIcon
                url={`https://github.com/${import.meta.env.VITE_CONTACT_GITHUB_USER}`}
                target="_blank"
                bgColor="transparent"
                fgColor="#737373"
                style={{ width: 28, height: 28 }}
                className="hover:opacity-100 opacity-60 transition-opacity"
              />
              <SocialIcon
                url={`https://www.linkedin.com/in/${import.meta.env.VITE_CONTACT_LINKEDIN_ID}`}
                target="_blank"
                bgColor="transparent"
                fgColor="#737373"
                style={{ width: 28, height: 28 }}
                className="hover:opacity-100 opacity-60 transition-opacity"
              />
            </div>
          </div>
          <div className="flex gap-6 md:gap-8 mono text-[10px] uppercase font-semibold">
            <a
              href="#work"
              className={`transition-all duration-300 ${isScrolled ? "text-muted hover:text-accent" : "text-muted hover:text-secondary"} relative group`}
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#about"
              className={`transition-all duration-300 ${isScrolled ? "text-muted hover:text-accent" : "text-muted hover:text-secondary"} relative group`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#contact"
              className={`transition-all duration-300 ${isScrolled ? "text-muted hover:text-accent" : "text-muted hover:text-secondary"} relative group`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
