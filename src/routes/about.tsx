import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, Brain, FlaskConical, Gamepad2, Github, Instagram,
  Linkedin, Sparkles, Star, Zap,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";
import profilePic from "@/assets/profile2.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "About — Mir Murtaza" }] }),
});

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/MirMurtaza-022" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mir-murtaza-7148b3404" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/mirmurtaza072" },
];

const timeline = [
  {
    year: "2022",
    title: "Curiosity started",
    text: "Began paying closer attention to the websites, interfaces, and digital experiences behind the brands I interacted with every day.",
  },
  {
    year: "2023",
    title: "Exploring the craft",
    text: "Started experimenting with web design and development, learning how ideas become interfaces and how small design decisions shape the overall experience.",
  },
  {
    year: "2025",
    title: "Building for real",
    text: "Turned that exploration into real projects, creating websites with a stronger focus on visual quality, usability, responsiveness, and purpose.",
  },
  {
    year: "Today",
    title: "Still evolving",
    text: "Continuing to build, experiment, and refine a process focused on creating websites that look distinctive and work beautifully — and help businesses grow.",
  },
];

const beyond = [
  {
    icon: Sparkles,
    title: "Pixel obsessed",
    text: "I notice the details most people skip. Spacing, typography, motion, hierarchy, and the tiny interactions that make a site feel finished.",
  },
  {
    icon: Brain,
    title: "Built to think",
    text: "I don't just make websites look good. I think about structure, usability, performance, and how every section moves a visitor toward an action.",
  },
  {
    icon: FlaskConical,
    title: "Always experimenting",
    text: "New technologies, interfaces, animations, and ideas constantly end up in the lab. Some survive. Most become educational casualties.",
  },
  {
    icon: Star,
    title: "More Than Code",
    text: "Good websites aren’t just about writing code. I care about design, usability, performance, and the small details that make an experience feel complete.",
  },
];

const facts = [
  "Based in Karachi, working with clients worldwide.",
  "I reply to every serious enquiry within 24 hours.",
  "Every website starts from your idea — and I'll make it real.",
  "I listen, think, and come up with an idea that will always convince you.",
];

const marqueeWords = ["Design", "Develop", "Optimize", "Deliver", "Strategy", "Launch", "Evolve", "Support", "Growth", "Research"];
const stackWords = ["React", "TypeScript", "Tailwind CSS", "TanStack Start", "Figma", "Motion", "UI/UX"];

function AboutPage() {
  return (
    <main className="relative overflow-clip pt-36 pb-10 sm:pt-44">
      {/* ---------- Ambient page glow ---------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-[140px]"
          style={{ background: "radial-gradient(circle at 30% 40%, var(--primary), transparent 60%), radial-gradient(circle at 70% 60%, var(--violet), transparent 60%)" }}
        />
        <div className="absolute top-[45%] -right-40 h-[26rem] w-[26rem] rounded-full opacity-15 blur-[130px]" style={{ background: "var(--violet)" }} />
        <div className="absolute top-[70%] -left-40 h-[24rem] w-[24rem] rounded-full opacity-15 blur-[130px]" style={{ background: "var(--primary)" }} />
      </div>

      {/* ---------- Hero ---------- */}
      <div className="section-shell relative mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Hi, I'm <span className="text-gradient">Mir Murtaza.</span>
              <br />I turn businesses into brands; trusted by people.
            </>
          }
        />
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-green-400" />
              </span>
              Available for new projects
            </span>
          </div>
        </Reveal>

        {/* Portrait editorial collage */}
        <Reveal delay={0.18}>
          <div className="relative mx-auto mt-14 w-64 sm:w-72">
            <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
              <motion.p
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="font-display text-[6rem] leading-none font-bold tracking-tight whitespace-nowrap sm:text-[8rem]"
                style={{ color: "transparent", WebkitTextStroke: "1.5px oklch(1 0 0 / 14%)" }}
              >
                MIR MURTAZA
              </motion.p>
            </div>

            <div aria-hidden className="absolute -inset-10 rounded-full opacity-30 blur-[90px]" style={{ background: "radial-gradient(circle, var(--primary), transparent 65%)" }} />

            <motion.div
              initial={{ rotate: 5 }}
              animate={{ rotate: 5 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              data-hover
              className="glass-card relative rounded-3xl p-3"
            >
              <div aria-hidden className="absolute -top-3 left-8 z-10 h-7 w-20 -rotate-[10deg] rounded-sm bg-white/15 backdrop-blur-sm" />
              <div aria-hidden className="absolute -top-3 right-8 z-10 h-7 w-20 rotate-[10deg] rounded-sm bg-white/15 backdrop-blur-sm" />

              <img src={profilePic} alt="Portrait of Mir Murtaza" className="relative aspect-[3/4] w-full rounded-2xl object-cover" />
              <div className="flex items-center justify-between px-2 pt-3 pb-1">
                <p className="font-display text-sm font-semibold">MIR MURTAZA</p>
                <p className="text-xs text-muted-foreground">2026</p>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [8, 4, 8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-3 flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-white shadow-lg sm:-right-6"
                style={{ background: "var(--gradient-accent)" }}
              >
                <Star size={13} className="fill-current" /> Top Rated
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [-6, -2, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card absolute -bottom-5 -left-3 flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold sm:-left-6"
              >
                <Zap size={13} className="text-primary" /> Fast Delivery
              </motion.div>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mx-auto mt-10 max-w-xl leading-relaxed text-muted-foreground">
            Designer and developer for businesses that want to look established
            online. Below is the stuff that doesn't fit on the homepage — my
            story, my quirks, and how we could work together.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/start-a-project"
              hash=""
              className="glow-soft inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: "var(--gradient-accent)" }}
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-hairline text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---------- Marquee bands ---------- */}
      <div aria-hidden className="relative -mx-2 mt-20 -rotate-1 space-y-3">
        <div className="overflow-hidden border-y border-hairline bg-surface/60 py-4">
          <motion.div
            className="flex w-max whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1, 2, 3].map((dup) => (
              <div key={dup} className="flex">
                {marqueeWords.map((word) => (
                  <span key={word} className="mx-6 font-display text-lg font-semibold tracking-[0.2em] text-foreground uppercase">
                    {word}{" "}
                    <span className="text-gradient drop-shadow-[0_0_12px_var(--primary)]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden border-y border-primary/30 py-4" style={{ background: "var(--gradient-accent)" }}>
          <motion.div
            className="flex w-max whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1, 2, 3].map((dup) => (
              <div key={dup} className="flex">
                {stackWords.map((word) => (
                  <span key={word} className="mx-6 font-display text-lg font-semibold tracking-[0.2em] text-white uppercase">
                    {word} <span className="text-white/70">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ---------- Story ---------- */}
      <div className="section-shell relative mt-24 max-w-3xl">
        <SectionHeading eyebrow="Story" title={<>How I <span className="text-gradient">got here</span></>} />
        <div className="relative mt-10 border-l border-hairline pl-8">
          <motion.span
            aria-hidden
            className="absolute top-0 bottom-0 left-[-1px] w-[2px] origin-top"
            style={{ background: "var(--gradient-accent)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={0.05 + i * 0.06}>
              <div data-hover className="group relative pb-10 last:pb-0">
                <span className="absolute top-1 -left-8 size-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-125 group-hover:bg-primary" />
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-primary">{item.year}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---------- Beyond the screen ---------- */}
      <div className="section-shell relative mt-24">
        <SectionHeading eyebrow="Personal" title={<>Beyond <span className="text-gradient">the screen</span></>} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {beyond.map((item, i) => (
            <Reveal key={item.title} delay={0.05 + i * 0.06}>
              <div
                data-hover
                className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_-8px_var(--primary)]"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <item.icon size={19} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---------- Quick facts ---------- */}
      <div className="section-shell relative mt-24 max-w-3xl">
        <SectionHeading eyebrow="Facts" title={<>Good to <span className="text-gradient">know</span></>} />
        <div className="mt-8 divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-surface">
          {facts.map((fact, i) => (
            <Reveal key={fact} delay={0.04 + i * 0.05}>
              <div data-hover className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-surface-strong/60">
                <span className="font-display text-sm font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-muted-foreground">{fact}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---------- Currently booking ---------- */}
      <section className="section-shell relative mt-28 pb-24">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-[100%] bg-primary/25 blur-[90px]" />
            <h2 className="font-display relative text-3xl font-bold sm:text-4xl">Currently booking</h2>
            <p className="relative mx-auto mt-3 max-w-md text-muted-foreground">
              Have an idea in mind? Let's talk and make it real!
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/start-a-project"
                hash=""
                data-hover
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105"
                style={{ background: "var(--gradient-accent)" }}
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/process" data-hover className="glass-card inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-transform hover:scale-105">
                See how I work
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}