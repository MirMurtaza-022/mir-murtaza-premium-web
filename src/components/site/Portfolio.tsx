import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./motion-primitives";
import restaurant from "@/assets/work-restaurant.jpg";
import clinic from "@/assets/work-clinic.jpg";
import realestate from "@/assets/work-realestate.jpg";
import fitness from "@/assets/work-fitness.jpg";

const projects = [
  { title: "Azur Restaurant", category: "Restaurant", image: restaurant },
  { title: "Bright Smiles", category: "Dental Clinic", image: clinic },
  { title: "Valoria Estates", category: "Real Estate", image: realestate },
  { title: "Elevate Studio", category: "Fitness Studio", image: fitness },
];

export function Portfolio() {
  return (
    <section id="work" className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              A look at the <span className="text-gradient">craft</span>
            </>
          }
          description="Placeholder projects showing the design language, structure, and detail level applied to every build."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.07}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="group glass-card relative overflow-hidden rounded-3xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} website design`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-4/3 w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background from-15% via-background/75 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                  <div>
                    <p className="eyebrow">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="glass-card inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors duration-500 group-hover:border-primary/50 group-hover:bg-primary/15">
                    View Project
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
