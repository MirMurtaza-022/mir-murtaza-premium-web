import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./motion-primitives";

const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Vite"
];

export function TechStack() {
  return (
    <section className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Tech stack"
          align="center"
          title={
            <>
              Built With Modern <span className="text-gradient">Technologies</span>
            </>
          }
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {stack.map((tech, i) => (
            <Reveal key={tech} delay={i * 0.04} y={14}>
              <motion.span
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35 }}
                className="glass-card inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-500 hover:border-primary/45"
              >
                <span
                  aria-hidden
                  className="size-2 rounded-full"
                  style={{ background: "var(--gradient-accent)" }}
                />
                {tech}
              </motion.span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
