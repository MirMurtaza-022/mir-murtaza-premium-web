import { Counter, Reveal, SectionHeading } from "./motion-primitives";

const stats = [
  {
    value: 75,
    suffix: "%",
    label: "of users judge a company's credibility by its website design",
  },
  {
    value: 88,
    suffix: "%",
    label: "of online consumers are less likely to return after a poor website experience",
  },
  {
    value: 53,
    suffix: "%",
    label: "of mobile visitors leave a site that takes longer than 3 seconds to load",
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[26rem] -translate-y-1/2 opacity-25 blur-[130px]"
        style={{ background: "var(--gradient-accent)" }}
      />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Why good websites matter"
          align="center"
          title={
            <>
              First impressions happen{" "}
              <span className="text-gradient">online</span>
            </>
          }
          description="A professional website builds trust before a customer even makes contact. Fast websites improve experience, and modern design increases credibility."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="glass-card h-full rounded-3xl p-8 text-center">
                <p className="font-display text-5xl font-semibold sm:text-6xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
