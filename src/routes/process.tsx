import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
    ArrowRight, CalendarCheck, Check, Clock, CodeXml, HeartHandshake,
    KeyRound, MessagesSquare, Palette, PenTool, Rocket, Search,
  } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/process")({
  head: () => ({ meta: [{ title: "How I Work — Mir Murtaza" }] }),
  component: ProcessPage,
});

const steps = [
  {
    icon: Search,
    title: "Discovery",
    duration: "Day 1",
    body: "Every project starts with understanding — your business, your customers, and what success actually looks like for you. No designing in the dark.",
    happens: ["Kickoff questionnaire or short call", "Goals, audience & competitors mapped", "Scope and fixed timeline agreed"],
    gets: "A written brief + honest quote",
  },
  {
    icon: PenTool,
    title: "Planning",
    duration: "Days 1–2",
    body: "Before a single pixel is drawn, the structure is mapped — which pages exist, how visitors flow through them, and what content goes where.",
    happens: ["Sitemap and page flow designed", "Content outline structured", "Nothing starts until you approve"],
    gets: "A site map + content plan to sign off",
  },
  {
    icon: Palette,
    title: "Design",
    duration: "Days 3–6",
    body: "A polished visual direction shaped around trust and clarity — colors, type, and layouts that make your business look established from the first glance.",
    happens: ["Homepage concept designed first", "Full pages designed around your brand", "Feedback rounds until it feels right"],
    gets: "Full Figma designs to review",
  },
  {
    icon: CodeXml,
    title: "Development",
    duration: "Days 7–12",
    body: "Clean, fast, responsive code with attention to every detail — smooth animations, quick load times, and a site that works beautifully on every device.",
    happens: ["Responsive build on every screen size", "Animations & SEO basics baked in", "Performance tuned as we go"],
    gets: "A live preview link to follow progress",
  },
  {
    icon: Rocket,
    title: "Launch",
    duration: "Day 13",
    body: "Final testing across devices and browsers, speed checks, and a smooth go-live — so launch day feels like a formality, not a gamble.",
    happens: ["Cross-device & browser testing", "Speed and performance checks", "Domain, hosting & go-live handled"],
    gets: "Your live website + handover notes",
  },
  {
    icon: HeartHandshake,
    title: "Support",
    duration: "Ongoing",
    body: "A website isn't a one-time delivery. As your business grows, your site grows with it — updates, improvements, and someone to call when you need changes.",
    happens: ["Content updates when you need them", "Small improvements over time", "Direct line to me — no support tickets"],
    gets: "Peace of mind, long after launch",
  },
];

const promises = [
  { icon: MessagesSquare, title: "Plain language", desc: "No tech jargon. You always know what's happening and why." },
  { icon: CalendarCheck, title: "Scheduled updates", desc: "Check-ins at every stage — you're never left guessing where things stand." },
  { icon: Clock, title: "On time, every time", desc: "The timeline we agree on in Discovery is the timeline we ship on." },
  { icon: KeyRound, title: "You own everything", desc: "Code, design files, accounts — everything belongs to you, always." },
];

function ProcessPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute top-24 -left-32 size-96 rounded-full blur-[140px]" style={{ background: "var(--violet)", opacity: 0.16 }} />
      <div aria-hidden className="pointer-events-none absolute top-[60%] -right-40 size-[28rem] rounded-full blur-[160px]" style={{ background: "var(--primary)", opacity: 0.12 }} />

      {/* Hero */}
      <section className="section-shell pt-36 pb-8 text-center lg:pt-44">
        <Reveal>
          <span className="eyebrow">The Process</span>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            How I <span className="text-gradient">Work</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground sm:text-lg">
            Six clear steps from first chat to launch — so you always know
            what's happening, what's next, and what you're getting.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              ["06", "clear steps"],
              ["~13", "days to launch"],
              ["00", "surprise invoices"],
            ].map(([value, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-gradient">{value}</span>
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Steps — sticky numbers */}
      <section className="section-shell mt-14">
        <div className="space-y-8 lg:space-y-10">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={0.04}>
              <div className="grid gap-5 lg:grid-cols-[170px_1fr] lg:gap-10">
                {/* Giant number + duration */}
                <div className="flex items-center gap-4 lg:sticky lg:top-32 lg:flex-col lg:items-start lg:gap-3 lg:self-start">
                  <span
                    className="font-display text-6xl font-bold sm:text-7xl"
                    style={{ color: "transparent", WebkitTextStroke: "1.5px oklch(0.75 0.2 290 / 45%)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="glass-card inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold">
                    <Clock size={13} className="text-primary" /> {step.duration}
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  data-hover
                  className="glass-card group relative overflow-hidden rounded-3xl p-7 sm:p-9"
                >
                  <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-primary/20 opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl" style={{ background: "oklch(0.72 0.22 290 / 14%)" }}>
                      <step.icon size={22} style={{ color: "var(--primary)" }} />
                    </span>
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">{step.title}</h2>
                  </div>
                  <p className="relative mt-4 max-w-2xl leading-relaxed text-muted-foreground">{step.body}</p>
                  <ul className="relative mt-7 grid gap-3 sm:grid-cols-3">
                    {step.happens.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm">
                        <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-7 border-t border-hairline pt-5">
                    <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">You walk away with</p>
                    <p className="text-gradient mt-2 inline-block font-display text-lg font-semibold">{step.gets}</p>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Promises */}
      <section className="section-shell mt-28">
        <SectionHeading
          eyebrow="The Promise"
          title={<>Working with me, <span className="text-gradient">minus the worry</span></>}
          description="The process keeps projects on track. These keep the relationship easy."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                data-hover
                className="glass-card group relative h-full overflow-hidden rounded-3xl p-6"
              >
                <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/20 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex size-11 items-center justify-center rounded-2xl" style={{ background: "oklch(0.72 0.22 290 / 14%)" }}>
                  <p.icon size={20} style={{ color: "var(--primary)" }} />
                </span>
                <h3 className="relative mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
<section className="section-shell relative mt-28 pb-24">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-[100%] bg-primary/25 blur-[90px]" />
            <h2 className="font-display relative text-3xl font-bold sm:text-4xl">
              Ready for step one?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-muted-foreground">
            Every project starts with a free Discovery chat — no commitment,
              just clarity on what your website could do for you.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/start-a-project"
                hash=""
                data-hover
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105"
                style={{ background: "var(--gradient-accent)" }}
              >
                Start the conversation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}