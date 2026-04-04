# Personal Portfolio

A modern, high-performance personal portfolio website built with an "Industrial Minimalist" aesthetic. This project showcases dynamic animations, seamless theme switching, and a robust CMS-driven architecture.

## 📸 Previews

<div align="center">
  <img src="https://ap-south-1.graphassets.com/cmnc9hweq12c407pi0hku5t2t/cmnkygycx7zda07pn9twdlfy2" alt="About Section Profile" width="800" />
</div>
<br />
<div align="center">
  <img src="https://ap-south-1.graphassets.com/cmnc9hweq12c407pi0hku5t2t/cmnkyiivr7zg507pn6x8avaje" alt="Portfolio Light Theme" width="400" />
  <img src="https://ap-south-1.graphassets.com/cmnc9hweq12c407pi0hku5t2t/cmnkyiito7zfy07pnmnfwog75" alt="Portfolio Dark Theme" width="400" />
</div>
![alt text](image.png)
## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4, Mantine (Core & Hooks)
- **Animations**: Framer Motion (Geometric bird background animations, SVG path morphing) & Lenis (Smooth Scrolling)
- **CMS & Data**: Hygraph (GraphQL headless CMS), `urql` for data fetching, `@graphcms/rich-text-react-renderer`
- **Forms & Interactions**: React Hook Form, React Hot Toast, React Icons

## ✨ Key Features

- **Industrial Minimalist Design**: A curated, sophisticated aesthetic with standardized layouts and geometric elements.
- **Dynamic Framer Motion Animations**: Features an intricate "Architect's Bird" SVG path morphing background effect in the Hero section that is responsive and performant.
- **CMS-Driven Architecture**: The Projects and About sections are fully integrated with Hygraph, enabling dynamic updating of portfolio content without code changes. Features custom GraphQL queries for project data (e.g., `projectTitle`, `projectAbout`, `projectTasks`, `projectMetrics`).
- **Robust Theming System**: Seamless Light and Dark mode integration utilizing React context and CSS variables to match user preferences across all components.
- **Responsive Navigation**: Mobile-optimized layouts featuring a responsive hamburger menu for enhanced accessibility.
- **Smooth User Experience**: Integrated smooth scrolling and polished micro-animations across Hero, About, Skills, Projects, Systems, and Contact sections.

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You will also need to configure your environment variables for the CMS endpoint.

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

- `src/pages/` - Core application pages and section components (Hero, About, Skills, Projects, Systems, Contact).
- `src/components/` - Reusable UI elements, icons, and theme toggles.
- `src/context/` - React contexts (e.g., Theme management).
- `src/graphql/` - GraphQL queries and configurations for Hygraph CMS integration.

## 📝 License

This project is private and intended as a personal portfolio.
