import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const GeometricBird = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check initial
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Wing Path Definitions for Morphing
  const wingTopDown = "M40 50 L70 100 L95 45 Z"; // Stretched wing
  const wingTopUp = "M40 50 L65 15 L90 40 Z";
  const wingFolded = "M40 50 L60 35 L85 40 Z";

  return (
    <motion.div
      className="absolute z-50 pointer-events-none"
      initial={{ x: "-20vw", y: "45%", rotate: -5 }}
      animate={{
        x: ["-20vw", "120vw"],
        y: ["45%", "15%", "70%", "45%"], // Majestic wave for all
        rotate: [0, -20, 10, 0], // Consistent banking
      }}
      transition={{
        x: { duration: isMobile ? 4 : 25, repeat: Infinity, ease: "linear" },
        y: {
          duration: isMobile ? 4 : 8.33,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: isMobile ? 4 : 8.33,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <svg
        width={isMobile ? 120 : 195}
        height={isMobile ? 110 : 180}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_25px_rgba(109,112,255,0.25)]"
      >
        <defs>
          <linearGradient
            id="premiumAccent"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
            <stop
              offset="50%"
              stopColor="var(--accent-hover, #8e91ff)"
              stopOpacity="0.95"
            />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        {/* --- Back Wing (Wireframe Only) --- */}
        <motion.path
          animate={{
            d: [wingTopUp, wingTopDown, wingFolded, wingTopUp],
          }}
          transition={{
            duration: isMobile ? 1 : 2.2, // Faster flap for mobile
            repeat: Infinity,
            ease: [0.45, 0.05, 0.55, 0.95],
          }}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.4"
          strokeOpacity="0.4"
          transform="translate(4, -4)"
        />

        {/* --- Body and Head Core (Wireframe) --- */}
        {/* Head */}
        <path
          d="M90 45 L110 38 L105 52 L90 45 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.6"
          strokeOpacity="1"
        />
        <path
          d="M105 52 L110 38 L115 45 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.4"
          opacity="0.6"
        />

        {/* Neck/Chest */}
        <path
          d="M80 55 L105 52 L90 75 L80 55 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.6"
          strokeOpacity="0.8"
        />

        {/* Main Torso */}
        <path
          d="M40 50 L80 55 L75 80 L35 75 L40 50 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.8"
          strokeOpacity="0.9"
        />
        <path
          d="M75 80 L80 55 L90 75 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.3"
          strokeOpacity="0.4"
        />

        {/* --- Front Wing (Wireframe Morph Only) --- */}
        <motion.path
          animate={{
            d: [wingTopUp, wingTopDown, wingFolded, wingTopUp],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
            times: [0, 0.3, 0.6, 1],
          }}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeOpacity="0.8"
        />

        {/* --- Tail Fan (Wireframe) --- */}
        <path
          d="M35 75 L15 85 L5 95 L25 100 L35 75 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.6"
          strokeOpacity="0.8"
        />
        <path
          d="M15 85 L10 100 L25 100 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.4"
          strokeOpacity="0.4"
        />

        {/* --- Internal Architectural Grid --- */}
        <g stroke="var(--accent)" strokeWidth="0.4" strokeOpacity="0.5">
          <line x1="40" y1="50" x2="80" y2="55" />
          <line x1="80" y1="55" x2="35" y2="75" />
          <line x1="35" y1="75" x2="40" y2="50" />
          <line x1="90" y1="45" x2="105" y2="52" />
          {/* Enhanced Mesh Lines */}
          <line x1="40" y1="50" x2="65" y2="15" opacity="0.3" />
          <line x1="80" y1="55" x2="70" y2="95" opacity="0.3" />
        </g>
      </svg>
    </motion.div>
  );
};
