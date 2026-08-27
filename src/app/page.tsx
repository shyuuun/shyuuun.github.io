import { AboutMe } from "@/components/sections/about-me";
import Navbar from "@/components/navbar";
import ExperienceSection from "@/components/sections/experience-section";
import MarqueeSection from "@/components/sections/marquee-section";
import ProjectsSection from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="pb-16">
      <Navbar />
      <AboutMe id="about" />
      <ProjectsSection id="projects" />
      <ExperienceSection id="experience" />
      <MarqueeSection />
    </main>
  );
}
