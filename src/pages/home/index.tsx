import { Hero } from "./sections/hero";
import { Systems } from "./sections/systems";
import { Experience } from "./sections/experience";
import { Projects } from "./sections/projects";
import { About } from "./sections/about";
import { Skills } from "./sections/skills";
import { Contact } from "./sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Systems />
      <Experience />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
