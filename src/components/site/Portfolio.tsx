import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./motion-primitives";
import { ProjectCard } from "./ProjectCard";
import { portfolioProjects } from "@/data/portfolio-projects";

const HOMEPAGE_COUNT = 2;

export function Portfolio() {
  const featured = portfolioProjects.slice(0, HOMEPAGE_COUNT);

  return (
    <section id="work" className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Recent <span className="text-gradient">Projects</span>
            </>
          }
          description="Every project is designed to strengthen a brand, improve user experience, and support business goals."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.07} />
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/projects"
              className="glow-soft inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: "var(--gradient-accent)" }}
            >
              View All Projects
              <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
