import { Hero } from "./sections/hero";
import { Systems } from "./sections/systems";
import { Projects } from "./sections/projects";
import { About } from "./sections/about";
import { Skills } from "./sections/skills";
import { Contact } from "./sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Systems />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
