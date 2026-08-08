import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/components/site/motion-primitives";
import { ProjectCard } from "@/components/site/ProjectCard";
import { portfolioProjects } from "@/data/portfolio-projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "All Projects — Mir Murtaza" },
      {
        name: "description",
        content:
          "The full collection of websites designed and built by Mir Murtaza, across restaurants, retail, education and logistics.",
      },
    ],
  }),
  component: AllProjects,
});

function AllProjects() {
  return (
    <section className="py-28">
      <div className="section-shell">
        <Link
          to="/"
          hash="work"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <SectionHeading
          eyebrow="All Work"
          title={
            <>
              Every <span className="text-gradient">Project</span>
            </>
          }
          description="A complete look at the websites I've designed and built — old and new."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {portfolioProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
