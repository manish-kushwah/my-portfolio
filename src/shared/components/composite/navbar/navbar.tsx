import { useState, useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../../ui/theme-toggle";
import { useThemeContext } from "../../../../app/providers/theme-provider";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: [0] },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const iconFgColor = isDark ? "#737373" : "#52525b";
  const menuIconFgColor = isDark ? "#fff" : "#09090b";

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 left-0 w-full h-px pointer-events-none z-0"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-100 border-b transition-all duration-500 ease-out ${
          isScrolled || isMenuOpen
            ? "bg-(--bg)/80 backdrop-blur-md border-(--border)/30"
            : "bg-transparent border-transparent"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 transition-all duration-500 ease-out ${isScrolled ? "py-4" : "py-6"}`}
        >
          <div className="flex flex-1 gap-2 md:gap-6 items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer active:scale-95 transition-transform"
            >
              <img
                src="/favicon.svg"
                alt="MK"
                className="w-6 h-6 object-contain"
              />
            </button>
            <div className="hidden sm:flex gap-1 items-center">
              <SocialIcon
                url={`https://x.com/${import.meta.env.VITE_CONTACT_X_USER}`}
                target="_blank"
                bgColor="transparent"
                fgColor={iconFgColor}
                style={{ width: 28, height: 28 }}
                className="hover:opacity-100 opacity-60 transition-opacity"
              />
              <SocialIcon
                url={`https://github.com/${import.meta.env.VITE_CONTACT_GITHUB_USER}`}
                target="_blank"
                bgColor="transparent"
                fgColor={iconFgColor}
                style={{ width: 28, height: 28 }}
                className="hover:opacity-100 opacity-60 transition-opacity"
              />
              <SocialIcon
                url={`https://www.linkedin.com/in/${import.meta.env.VITE_CONTACT_LINKEDIN_ID}`}
                target="_blank"
                bgColor="transparent"
                fgColor={iconFgColor}
                style={{ width: 28, height: 28 }}
                className="hover:opacity-100 opacity-60 transition-opacity"
              />
            </div>
          </div>

          {/* Desktop Nav (Tablet & Above) */}
          <div className="hidden sm:flex gap-4 md:gap-6 items-center mono text-[10px] uppercase font-bold tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-all duration-300 text-(--muted) hover:text-(--accent) relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-(--accent) transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile: Theme toggle + Hamburger */}
          <div className="sm:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-110"
            >
              <span
                className={`w-6 h-[1.5px] bg-(--fg) transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              />
              <span
                className={`w-6 h-[1.5px] bg-(--fg) transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`w-6 h-[1.5px] bg-(--fg) transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="absolute top-0 left-0 w-full min-h-screen bg-(--bg)/95 backdrop-blur-xl flex flex-col items-center justify-center gap-12 z-[-1] sm:hidden"
            >
              <div className="flex flex-col items-center gap-8 px-10">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-black uppercase tracking-tighter text-(--fg) hover:text-(--accent) transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 items-center"
              >
                <SocialIcon
                  url={`https://x.com/${import.meta.env.VITE_CONTACT_X_USER}`}
                  bgColor="transparent"
                  fgColor={menuIconFgColor}
                  style={{ width: 40, height: 40 }}
                />
                <SocialIcon
                  url={`https://github.com/${import.meta.env.VITE_CONTACT_GITHUB_USER}`}
                  bgColor="transparent"
                  fgColor={menuIconFgColor}
                  style={{ width: 40, height: 40 }}
                />
                <SocialIcon
                  url={`https://www.linkedin.com/in/${import.meta.env.VITE_CONTACT_LINKEDIN_ID}`}
                  bgColor="transparent"
                  fgColor={menuIconFgColor}
                  style={{ width: 40, height: 40 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
