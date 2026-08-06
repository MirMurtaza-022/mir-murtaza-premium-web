import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./motion-primitives";

const stack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
];

export function TechStack() {
  return (
    <section className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Built for Results"
          align="center"
          title={
            <>
              Built for speed, trust, and{" "}
              <span className="text-gradient">business growth</span>
            </>
          }
          description="Every technology we use is carefully selected to deliver fast performance, strong security, and a seamless user experience that helps turn visitors into customers."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {stack.map((tech, i) => (
            <Reveal key={tech} delay={i * 0.04} y={14}>
              <motion.span
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ duration: 0.35 }}
                className="glass-card inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-500 hover:border-primary/45"
              >
                <span
                  aria-hidden="true"
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