import { Reveal, SectionHeading } from "./motion-primitives";

const steps = [
  {
    title: "Discovery",
    body: "Understanding the business, the customer, and what success looks like.",
  },
  {
    title: "Planning",
    body: "Structure, page flow, and content mapped before a pixel is drawn.",
  },
  {
    title: "Design",
    body: "A polished visual direction shaped around trust and clarity.",
  },
  {
    title: "Development",
    body: "Clean, fast, responsive build with attention to every detail.",
  },
  { title: "Launch", body: "Testing, performance checks, and a smooth go-live." },
  {
    title: "Support",
    body: "Updates and improvements as the business keeps growing.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="My process"
          title={
            <>
              Six steps, <span className="text-gradient">no guesswork</span>
            </>
          }
        />

        <ol className="relative mt-16 border-l border-hairline pl-10 sm:pl-14">
          {steps.map((step, i) => (
            <li key={step.title} className="relative pb-12 last:pb-0">
              <Reveal delay={i * 0.05}>
                <span
                  className="absolute -left-[3.25rem] mt-1 flex size-9 items-center justify-center rounded-full border border-hairline bg-background font-display text-xs font-semibold text-primary sm:-left-[4.25rem]"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
