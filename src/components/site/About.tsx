import { Reveal, SectionHeading } from "./motion-primitives";

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Who <span className="text-gradient">I Am</span>
            </>
          }
        />

        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <Reveal delay={0.05}>
            <p>
              I design professional websites focused on helping local businesses
              build credibility and attract more customers.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Every website is crafted with clean design, fast performance,
              mobile responsiveness, and a strong user experience.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-xl font-medium text-foreground sm:text-2xl">
              My goal is simple: create websites that make businesses look
              premium.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
