import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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

type StatusFilter = "All" | "Demo" | "Sold";
const statusOptions: StatusFilter[] = ["All", "Demo", "Sold"];

function AllProjects() {
  const [status, setStatus] = useState<StatusFilter>("All");
  const [category, setCategory] = useState("All");

  // Categories build themselves — add a project to the data file and its chip appears automatically
  const categories = useMemo(
    () => ["All", ...new Set(portfolioProjects.map((p) => p.category))],
    []
  );

  const counts = useMemo(
    () => ({
      All: portfolioProjects.length,
      Demo: portfolioProjects.filter((p) => p.status === "Demo").length,
      Sold: portfolioProjects.filter((p) => p.status === "Sold").length,
    }),
    []
  );

  const filtered = portfolioProjects.filter(
    (p) =>
      (status === "All" || p.status === status) &&
      (category === "All" || p.category === category)
  );

  return (
    <section className="relative overflow-clip py-28">
      {/* ---------- Ambient page glow ---------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, var(--primary), transparent 60%), radial-gradient(circle at 70% 60%, var(--violet), transparent 60%)",
          }}
        />
        <div className="absolute top-[32%] -right-40 h-[26rem] w-[26rem] rounded-full opacity-15 blur-[130px]" style={{ background: "var(--violet)" }} />
        <div className="absolute top-[68%] -left-40 h-[24rem] w-[24rem] rounded-full opacity-15 blur-[130px]" style={{ background: "var(--primary)" }} />
        <div className="absolute top-[80%] left-1/2 h-[28rem] w-[70rem] -translate-x-1/2 rounded-full opacity-10 blur-[150px]" style={{ background: "var(--primary)" }} />
      </div>

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="All Work"
          title={<>Every <span className="text-gradient">Project</span></>}
          description="A complete look at the websites I've designed and built; old and new."
        />

        {/* ---------- Status toggle + live count ---------- */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="glass-card inline-flex rounded-full p-1">
            {statusOptions.map((option) => {
              const active = status === option;
              return (
                <button
                  key={option}
                  type="button"
                  data-hover
                  onClick={() => setStatus(option)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="status-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--gradient-accent)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    {option}{" "}
                    <span className={active ? "text-white/70" : "text-muted-foreground/60"}>
                      {counts[option]}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <p aria-live="polite" className="text-sm text-muted-foreground">
            Showing {filtered.length} of {portfolioProjects.length} projects
          </p>
        </div>

        {/* ---------- Category chips ---------- */}
        <div className="mt-5 flex flex-wrap gap-2.5">
          {categories.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                type="button"
                data-hover
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  active
                    ? "border-primary/60 bg-primary/15 text-foreground"
                    : "border-hairline bg-surface text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* ---------- Animated grid ---------- */}
        {filtered.length > 0 ? (
          <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} delay={0} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="glass-card mt-12 rounded-3xl p-12 text-center">
            <p className="font-display text-xl font-semibold">Nothing here yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No {status.toLowerCase()} projects in "{category}" yet — maybe
              yours will be the first. 👀
            </p>
          </div>
        )}
      </div>
    </section>
  );
}