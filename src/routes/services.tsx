import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, Briefcase, Check, Clock, LayoutGrid, MousePointerClick,
  PenTool, Plus, RefreshCcw, ShieldCheck,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — Mir Murtaza" }] }),
  component: ServicesPage,
});

// ✏️ Durations are honest estimates — edit to match your real timelines
const services = [
  {
    slug: "website-design",
    icon: PenTool,
    title: "Website Design",
    duration: "~4 days",
    body: "A distinctive visual identity built around how your customers actually decide. Every color, font, and layout choice earns trust before a single word is read.",
    includes: ["Custom visual direction", "Mobile-first layouts", "Brand colors & type system", "Up to 2 revision rounds"],
    bestFor: "New brands that need to look established from day one",
  },
  {
    slug: "business-websites",
    icon: Briefcase,
    title: "Business Websites",
    duration: "~2 weeks",
    body: "A complete multi-page site that presents your business with authority — everything a customer needs to understand you, trust you, and contact you.",
    includes: ["Home, About, Services & Contact pages", "SEO-ready structure", "Enquiry & contact forms", "Google Maps + social setup"],
    bestFor: "Established businesses ready for a real online presence",
  },
  {
    slug: "landing-pages",
    icon: MousePointerClick,
    title: "Landing Pages",
    duration: "3–5 days",
    body: "One page, one job: turn visitors into enquiries and bookings. Strip away every distraction and guide people to a single clear action.",
    includes: ["One clear call-to-action", "Conversion-focused structure", "Blazing load speed", "WhatsApp / form integration"],
    bestFor: "Campaigns, offers, and testing a new idea fast",
  },
  {
    slug: "website-redesign",
    icon: RefreshCcw,
    title: "Website Redesign",
    duration: "~1 week",
    body: "Your business grew — your website should show it. A complete modern refresh that keeps your content and fixes everything that feels dated.",
    includes: ["Fresh, modern visual direction", "Your existing content, elevated", "Mobile fixes included", "Speed & performance boost"],
    bestFor: "Sites that look tired next to their competitors",
  },
  {
    slug: "portfolio-websites",
    icon: LayoutGrid,
    title: "Portfolio Websites",
    duration: "~1 week",
    body: "An elegant showcase that puts your work front and center — smooth galleries, subtle animation, and a site that feels as good as the work inside it.",
    includes: ["Gallery & project pages", "About + contact sections", "Subtle, tasteful animations", "Easy to update yourself"],
    bestFor: "Creatives and independent professionals",
  },
  {
    slug: "maintenance",
    icon: ShieldCheck,
    title: "Maintenance & Updates",
    duration: "Monthly",
    body: "Websites aren't set-and-forget. Ongoing care that keeps your content fresh, your site secure, and your performance sharp — month after month.",
    includes: ["Content updates on request", "Security & backups", "Performance checks", "Priority support line"],
    bestFor: "Owners who'd rather run the business than the website",
  },
];

const addons = [
  "Extra pages", "Copywriting polish", "Logo refresh",
  "Blog setup", "Analytics setup", "Multi-language",
];

const scenarios = [
  ["Starting fresh with one offer to promote", "a Landing Page"],
  ["Established business needing full presence", "a Business Website"],
  ["Already have a site, but it looks tired", "a Redesign"],
];

function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient background — dot grid + orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(oklch(1 0 0 / 6%) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "linear-gradient(to bottom, black, transparent 45%)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent 45%)",
          }}
        />
        <motion.div
          className="absolute -top-24 -right-40 size-[26rem] rounded-full blur-[140px]"
          style={{ background: "var(--violet)", opacity: 0.16 }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[55%] -left-48 size-[28rem] rounded-full blur-[150px]"
          style={{ background: "var(--primary)", opacity: 0.13 }}
          animate={{ x: [0, 50, 0], y: [0, -35, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero */}
      <section className="section-shell relative pt-36 pb-8 text-center lg:pt-44">
        <Reveal>
          <span className="eyebrow">Services</span>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            What I can <span className="text-gradient">build</span> for you
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground sm:text-lg">
            Six ways to get a website that actually works for your business 
            from a single landing page to ongoing care after launch.
            The Website can take more time accourding to the requirements.
          </p>
        </Reveal>

        {/* Jump links */}
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                data-hover
                className="glass-card rounded-full px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.title}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Zigzag service rows */}
      <section className="section-shell relative mt-14 space-y-16 lg:space-y-20">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={0.04}>
            <div id={s.slug} className="grid scroll-mt-32 items-center gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
              {/* Visual panel */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                data-hover
                className={`glass-card group relative overflow-hidden rounded-3xl p-8 sm:p-10 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-primary/20 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />
                <span
                  aria-hidden
                  className="font-display absolute top-6 right-8 text-7xl font-bold"
                  style={{ color: "transparent", WebkitTextStroke: "1.5px oklch(0.75 0.2 290 / 30%)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative flex min-h-[180px] flex-col justify-between gap-8">
                  <span className="flex size-16 items-center justify-center rounded-3xl" style={{ background: "oklch(0.72 0.22 290 / 14%)" }}>
                    <s.icon size={30} style={{ color: "var(--primary)" }} />
                  </span>
                  <span className="glass-card inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold">
                    <Clock size={13} className="text-primary" /> {s.duration}
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="eyebrow">Service {String(i + 1).padStart(2, "0")}</p>
                <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{s.title}</h2>
                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-6 grid max-w-lg gap-3 sm:grid-cols-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="glass-card mt-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold">
                  <span className="size-1.5 rounded-full" style={{ background: "var(--primary)" }} />
                  Best for: {s.bestFor}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Add-ons */}
      <section className="section-shell relative mt-28 text-center">
        <Reveal>
          <span className="eyebrow">Extras</span>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Add-ons, <span className="text-gradient">any build</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {addons.map((a) => (
              <span key={a} className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium">
                <Plus size={14} className="text-primary" /> {a}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Quick guide */}
      <section className="section-shell relative mt-28">
        <SectionHeading
          eyebrow="Quick Guide"
          title={<>Which one do <span className="text-gradient">you</span> need?</>}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {scenarios.map(([q, a], i) => (
            <Reveal key={q} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass-card h-full rounded-3xl p-7"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">“{q}”</p>
                <p className="mt-4 flex items-center gap-2 font-display font-semibold">
                  <ArrowRight size={16} className="shrink-0 text-primary" />
                  You need <span className="text-gradient">{a}</span>
                </p>
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
              Have a project in mind?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-muted-foreground">
              Tell me what you're building — I'll reply with honest advice,
              a clear timeline, and a fair quote.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/start-a-project"
                hash=""
                data-hover
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105"
                style={{ background: "var(--gradient-accent)" }}
              >
                Get a free quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/process"
                data-hover
                className="glass-card inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-transform hover:scale-105"
              >
                See how I work
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}