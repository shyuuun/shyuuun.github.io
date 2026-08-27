import { AboutMe } from "@/components/sections/about-me";
import Navbar from "@/components/navbar";
import ExperienceSection from "@/components/sections/experience-section";
import MarqueeSection from "@/components/sections/marquee-section";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact-section";
import Contributions from "@/components/sections/contributions";

export default function Home() {
  return (
    <main className="pb-16">
      <Navbar />
      <AboutMe id="about" />
      <ProjectsSection id="projects" />
      <ExperienceSection id="experience" />
      <MarqueeSection />
      <ContactSection id="contact" />
      <Contributions />

      <footer className="container mt-12 border-t border-foreground/15 pt-4 text-center text-xs text-foreground/50">
        <p>© 2026 Frederick Vigilia. Built with care.</p>
      </footer>
    </main>
  );
}
