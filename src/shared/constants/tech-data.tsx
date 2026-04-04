import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMaterialdesign,
  SiStyledcomponents,
  SiAntdesign,
  SiWebpack,
  SiStorybook,
  SiGithubactions,
  SiFigma,
  SiPostgresql,
  SiJavascript,
  SiSass,
  SiGraphql,
  SiCss,
  SiSanity,
  SiHtml5,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscVscode, VscAzure, VscDatabase } from "react-icons/vsc";

export const TECH_DATA: Record<string, { icon: any; color: string }> = {
  // Frontend
  "React.js": { icon: SiReact, color: "#61DAFB" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  contextAPI: { icon: SiReact, color: "#61DAFB" },

  // UI
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  "Material UI": { icon: SiMaterialdesign, color: "#007FFF" },
  "Styled Components": { icon: SiStyledcomponents, color: "#DB7093" },
  "Styled components": { icon: SiStyledcomponents, color: "#DB7093" },
  "Ant Design": { icon: SiAntdesign, color: "#0170FE" },
  SCSS: { icon: SiSass, color: "#CC6699" },
  CSS: { icon: SiCss, color: "#1572B6" },

  // Tooling
  "RSpack / Webpack": { icon: SiWebpack, color: "#8DD6F9" },
  "Webpack/RSpack": { icon: SiWebpack, color: "#8DD6F9" },
  Webpack: { icon: SiWebpack, color: "#8DD6F9" },
  Storybook: { icon: SiStorybook, color: "#FF4785" },
  "CI/CD": { icon: SiGithubactions, color: "#2088FF" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  Git: { icon: SiGit, color: "#F05032" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  Sanity: { icon: SiSanity, color: "#F03E2F" },

  // Backend & Cloud
  ".NET Core": { icon: VscVscode, color: "#512BD4" }, // Using VSC icon as fallback for .NET
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  "AWS S3 / Scribe": { icon: FaAws, color: "#FF9900" },
  "AWS HealthScribe": { icon: FaAws, color: "#FF9900" },
  "Azure AD": { icon: VscAzure, color: "#0078D4" },
  "Tanstack Query": { icon: SiReact, color: "#FF4154" },
  IndexedDB: { icon: VscDatabase, color: "#007ACC" },
};
