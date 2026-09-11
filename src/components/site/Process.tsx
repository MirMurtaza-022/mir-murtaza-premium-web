import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./motion-primitives";

const steps = ["Discovery", "Planning", "Design", "Development", "Launch", "Support"];

export function Process() {
  return (
    <section id="process" className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="How We Work?"
          title={
            <>
              Six steps, <span className="text-gradient">no guesswork</span>
            </>
          }
          description="A clear process means fewer surprises, faster delivery, and a website built around your business goals."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-3">
            {steps.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                <span className="glass-card flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium">
                  <span className="font-display text-xs font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </span>
                {i < steps.length - 1 && (
                  <ArrowRight size={14} className="text-muted-foreground/50" aria-hidden />
                )}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <Link
            to="/process"
            data-hover
            className="group mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ background: "var(--gradient-accent)" }}
          >
            See the full process
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}