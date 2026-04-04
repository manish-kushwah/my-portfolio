import type { ReactNode } from "react";
import { Navbar } from "../../shared/components/composite/navbar/navbar";
import { Footer } from "../../shared/components/composite/footer/footer";
import { BackgroundEffects } from "../../shared/components/ui/background-effects";

import { useSmoothScroll } from "../../shared/hooks/use-smooth-scroll";
import { Toaster } from "react-hot-toast";
import { useThemeContext } from "../providers/theme-provider";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  useSmoothScroll(); // Initialize premium smooth scrolling
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <main
      className="min-h-screen bg-(--bg) text-(--fg) selection:bg-(--accent)/30 selection:text-(--fg)"
      style={{ transition: "background-color 0.4s ease, color 0.4s ease" }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: isDark ? 0.03 : 0.06,
        }}
      />
      <BackgroundEffects />
      <Navbar />
      {children}
      <Footer />

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: isDark ? "#0a0a0a" : "#ffffff",
            color: isDark ? "#ededed" : "#0a0a0a",
            border: `1px solid ${isDark ? "#262626" : "#d4d4d8"}`,
            borderRadius: "2px",
            fontSize: "12px",
            fontFamily: "var(--font-mono)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          },
        }}
      />
    </main>
  );
};
