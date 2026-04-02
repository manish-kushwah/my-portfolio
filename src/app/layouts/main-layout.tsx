import type { ReactNode } from "react";
import { Navbar } from "../../shared/components/composite/navbar/navbar";
import { Footer } from "../../shared/components/composite/footer/footer";
import { BackgroundEffects } from "../../shared/components/ui/background-effects";

import { useSmoothScroll } from "../../shared/hooks/use-smooth-scroll";
import { Toaster } from "react-hot-toast";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  useSmoothScroll(); // Initialize premium smooth scrolling

  return (
    <main className="min-h-screen bg-primary text-secondary selection:bg-accent selection:text-primary">
      <div className="fixed inset-0 grid-paper opacity-[0.03] pointer-events-none" />
      <BackgroundEffects />
      <Navbar />
      {children}
      <Footer />

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#0a0a0a",
            color: "#ededed",
            border: "1px solid #262626",
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
