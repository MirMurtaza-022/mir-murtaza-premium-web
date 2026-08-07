import { motion } from "motion/react";
import { ArrowUpRight, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "./motion-primitives";
import restaurant from "@/assets/BBQ.png";
import Essence from "@/assets/Essence.png";
import logistics from "@/assets/ShayMah.png";
import School from "@/assets/School.png";

const projects = [
  {
    title: "Royal BBQ",
    category: "Restaurant",
    image: restaurant,
    link: "https://royal-bbq-digital-experience.vercel.app/",
    caseStudy: "/work/royal-bbq",
  },
  {
    title: "Balochi Essence",
    category: "Fragrance",
    image: Essence,
    link: "https://balochi-essence.vercel.app/",
    caseStudy: "null",
  },
  {
    title: "ShayMah logistics hub",
    category: "Logistics",
    image: logistics,
    link: "https://shay-mah-logistics-hub.vercel.app",
    caseStudy: "null",
  },
  {
    title: "Gawadar Grammar School",
    category: "School",
    image: School,
    link: "https://gwadar-grammar-school.vercel.app",
    caseStudy: "null",
  },
];

export function Portfolio() {
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
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.07}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="group glass-card relative overflow-hidden rounded-3xl"
              >
                <div className="">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} website design`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className=" w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
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

                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors duration-500 hover:border-primary/50 group-hover:bg-primary/15">
                        View Project
                        <ArrowUpRight size={14} />
                      </span>
                    </a>

                    {/* {project.caseStudy && (
                      <Link to={project.caseStudy}>
                        <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors duration-500 hover:border-primary/50 group-hover:bg-primary/15">
                          Case Study
                          <FileText size={14} />
                        </span>
                      </Link>
                    )} */}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
