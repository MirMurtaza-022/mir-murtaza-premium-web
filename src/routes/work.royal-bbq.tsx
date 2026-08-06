import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal } from "@/components/site/motion-primitives";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  ExternalLink,
  Github,
  Check,
  Monitor,
  Tablet,
  Smartphone,
  Keyboard,
  Eye,
  Hand,
  Type,
  ShieldCheck,
  MapPin,
  Clock,
  MessageSquareText,
  UtensilsCrossed,
  Image as ImageIcon,
  Star,
  Phone,
  Palette,
  Ruler,
  Square,
} from "lucide-react";

export const Route = createFileRoute("/work/royal-bbq")({
  head: () => ({
    meta: [
      { title: "Royal BBQ — Case Study | Mir Murtaza" },
      {
        name: "description",
        content:
          "A premium restaurant website concept built to turn browsing visitors into booked tables — the story behind Royal BBQ.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: RoyalBBQCaseStudy,
});

/* -----------------------------------------------------------------------
   CONFIG — swap these when real assets / links are ready
----------------------------------------------------------------------- */
const LIVE_URL: string | null = null; // e.g. "https://royalbbq.example.com"
const SOURCE_URL: string | null = null; // e.g. "https://github.com/..."

/* -----------------------------------------------------------------------
   SHARED PRIMITIVES
----------------------------------------------------------------------- */

function Chapter({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="font-serif text-5xl italic leading-none text-[#D4AF37]/40 sm:text-6xl"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {n}
      </span>
      <span className="h-px w-10 bg-[#D4AF37]/40 sm:w-16" />
      <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#D4AF37]/80">
        {label}
      </span>
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
      {children}
    </p>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#D4AF37]/15 bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-white/[0.04] ${className}`}
    >
      {children}
    </div>
  );
}

function BrowserMockup({
  label,
  aspect = "aspect-[16/10]",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-[#151210] shadow-[0_30px_80px_-30px_rgba(212,175,55,0.15)]">
      <div className="flex items-center gap-1.5 border-b border-[#D4AF37]/10 bg-[#0F0F0F] px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/10" />
        <span className="size-2.5 rounded-full bg-white/10" />
        <span className="size-2.5 rounded-full bg-white/10" />
      </div>
      <div
        className={`${aspect} flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.12),transparent_60%)]`}
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/25">
          {label} preview
        </span>
      </div>
    </div>
  );
}

function DeviceMockup({
  variant,
  className = "",
}: {
  variant: "desktop" | "mobile";
  className?: string;
}) {
  if (variant === "mobile") {
    return (
      <div
        className={`animate-float w-40 rounded-[2rem] border-4 border-[#1c1815] bg-[#0F0F0F] p-2 shadow-[0_40px_100px_-30px_rgba(212,175,55,0.25)] sm:w-48 ${className}`}
      >
        <div className="aspect-[9/19] w-full overflow-hidden rounded-[1.4rem] bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_65%)]">
          <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
            <UtensilsCrossed className="size-6 text-[#D4AF37]/50" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Mobile
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`animate-float w-full max-w-xl rounded-2xl border-4 border-[#1c1815] bg-[#0F0F0F] p-2 shadow-[0_40px_100px_-30px_rgba(212,175,55,0.25)] ${className}`}
      style={{ animationDelay: "0.4s" }}
    >
      <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_60%)]">
        <div className="flex h-full flex-col items-center justify-center gap-3">
          <span
            className="text-2xl italic text-[#D4AF37]/60"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Royal BBQ
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
            Desktop
          </span>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------------------
   PAGE
----------------------------------------------------------------------- */

const overview = [
  { label: "Industry", value: "Restaurant" },
  { label: "Project Type", value: "Concept Project" },
  { label: "My Role", value: "UI Design & Frontend Development" },
  { label: "Duration", value: "4 Days" },
];

const technologies = ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Vite"];

const solutionBlocks = [
  {
    title: "Premium Visual Identity",
    points: ["Dark luxury color palette", "Gold accents", "Elegant typography"],
  },
  {
    title: "Mobile First Layout",
    points: ["Responsive navigation", "Touch friendly buttons", "Optimized spacing"],
  },
];

const journey = [
  "Visitor lands",
  "Views menu",
  "Reads reviews",
  "Explores gallery",
  "Books a table",
];

const restaurantFeatures = [
  "Online Reservation Form",
  "Interactive Menu",
  "Image Gallery",
  "Customer Reviews",
  "About Section",
  "Contact Section",
  "Google Maps Integration",
  "Opening Hours",
  "WhatsApp Contact",
];

const technicalFeatures = [
  "Responsive Design",
  "Component-Based Architecture",
  "Clean UI",
  "Fast Loading",
  "SEO-Friendly Structure",
  "Smooth Animations",
];

const showcase = [
  {
    title: "Homepage",
    copy: "Clean hero section introducing the restaurant with premium imagery and clear navigation.",
  },
  {
    title: "Menu",
    copy: "Large food photography increases appetite appeal while category organization improves browsing.",
  },
  {
    title: "Gallery",
    copy: "A masonry-style gallery showcases the restaurant atmosphere and creates a premium visual experience.",
  },
  {
    title: "About",
    copy: "Storytelling combined with immersive imagery builds trust and emotional connection.",
  },
  {
    title: "Reviews",
    copy: "Customer testimonials provide social proof and increase confidence.",
  },
  {
    title: "Contact",
    copy: "Reservation form, WhatsApp, contact details, and Google Maps are combined into one clear booking experience.",
  },
];

const decisions = [
  {
    q: "Why Dark Colors?",
    a: "Dark tones reinforce the premium steakhouse atmosphere while allowing food photography to become the visual focus.",
  },
  {
    q: "Why Gold?",
    a: "Gold communicates elegance and complements the restaurant's luxury branding.",
  },
  {
    q: "Why Large Images?",
    a: "Food photography is one of the strongest selling tools for restaurants. Large imagery increases visual appeal and encourages exploration.",
  },
  {
    q: "Why Minimal Navigation?",
    a: "Simple navigation helps users reach key information quickly without distractions.",
  },
];

const accessibility = [
  { icon: Smartphone, label: "Responsive Layout" },
  { icon: Keyboard, label: "Keyboard Friendly Navigation" },
  { icon: Type, label: "Readable Typography" },
  { icon: Eye, label: "Accessible Contrast" },
  { icon: Hand, label: "Touch Friendly Buttons" },
];

const goals = [
  "Premium Brand Identity",
  "Simple Customer Journey",
  "Mobile-First Experience",
  "Strong Visual Storytelling",
  "Fast Performance",
  "Easy Reservations",
  "Professional Online Presence",
  "Elegant User Experience",
];

function RoyalBBQCaseStudy() {
  return (
    <div
      className="min-h-screen bg-[#0F0F0F] text-white antialiased"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Back bar */}
      <div className="border-b border-[#D4AF37]/10 bg-[#0F0F0F]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[#D4AF37]"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>
          <span className="text-xs uppercase tracking-[0.25em] text-white/30">
            Case Study
          </span>
        </div>
      </div>

      {/* ---------------------------------------------------------------
          SECTION 1 — HERO
      --------------------------------------------------------------- */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#6F4E37]/20 blur-[120px]" />

        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
              Premium Restaurant Website Concept
            </span>
            <h1
              className="mt-5 text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Royal <span className="italic text-[#D4AF37]">BBQ</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
              A modern restaurant website designed to create a premium dining
              experience while making reservations, menu browsing, and
              customer engagement effortless.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              {LIVE_URL ? (
                <motion.a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0F0F0F] transition-shadow duration-300 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)]"
                >
                  Visit Live Website
                  <ExternalLink size={15} />
                </motion.a>
              ) : (
                <span className="inline-flex cursor-default items-center gap-2 rounded-full border border-[#D4AF37]/30 px-7 py-3.5 text-sm font-semibold text-[#D4AF37]/60">
                  Live Website Coming Soon
                </span>
              )}
              {SOURCE_URL && (
                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
                >
                  <Github size={15} />
                  View Source
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative flex flex-col items-center gap-6">
              <DeviceMockup variant="desktop" />
              <DeviceMockup
                variant="mobile"
                className="self-end sm:-mt-16 sm:mr-6"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 2 — QUICK OVERVIEW
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {overview.map((item, i) => (
              <Reveal key={item.label} delay={0.05 * i}>
                <Card className="text-center">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4AF37]/70">
                    {item.label}
                  </span>
                  <p className="mt-3 text-base font-medium text-white sm:text-lg">
                    {item.value}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#D4AF37]/25 px-5 py-2 text-xs font-medium uppercase tracking-wide text-[#D4AF37]/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 3 — THE OBJECTIVE
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <Chapter n="01" label="The Objective" />
            <Heading>Designing for a premium dining experience</Heading>
            <Prose>
              The goal was to design a modern restaurant website that
              reflects a premium dining experience while making it easy for
              visitors to explore the menu, reserve tables, and discover the
              restaurant from any device.
            </Prose>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 4 — THE CHALLENGE
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 bg-white/[0.015] py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <Chapter n="02" label="The Challenge" />
            <Heading>Most local restaurants are invisible online</Heading>
            <Prose>
              Many local restaurants rely heavily on social media and often
              lack a professional website where customers can easily explore
              the menu, make reservations, or learn about the restaurant.
              This project explores how a premium digital experience can
              strengthen a restaurant's online presence.
            </Prose>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 5 — MY SOLUTION
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Chapter n="03" label="My Solution" />
            <Heading>Three moves that shaped the experience</Heading>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {solutionBlocks.map((block, i) => (
              <Reveal key={block.title} delay={0.1 * i}>
                <Card className="h-full">
                  <h3
                    className="text-xl font-semibold text-[#D4AF37]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {block.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {block.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-white/60"
                      >
                        <Check size={15} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <Card>
                <h3
                  className="text-xl font-semibold text-[#D4AF37]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Customer Journey
                </h3>
                <div className="mt-8 flex flex-col items-center">
                  {journey.map((step, i) => (
                    <div key={step} className="flex flex-col items-center">
                      <div className="flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#0F0F0F] px-6 py-3">
                        <span className="text-sm font-medium text-white/80">
                          {step}
                        </span>
                      </div>
                      {i < journey.length - 1 && (
                        <ArrowDown size={18} className="my-2 text-[#D4AF37]/40" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 6 — KEY FEATURES
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 bg-white/[0.015] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Chapter n="04" label="Key Features" />
            <Heading>Everything a diner needs, nothing they don't</Heading>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal delay={0.05}>
              <Card className="h-full">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Restaurant Features
                </h3>
                <ul className="mt-5 space-y-3">
                  {restaurantFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                      <Check size={15} className="shrink-0 text-[#D4AF37]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="h-full">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Technical Features
                </h3>
                <ul className="mt-5 space-y-3">
                  {technicalFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                      <Check size={15} className="shrink-0 text-[#D4AF37]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 7 — DESIGN SYSTEM
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Chapter n="05" label="Design System" />
            <Heading>The visual language, in one place</Heading>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0.05}>
              <Card className="h-full">
                <Palette size={18} className="text-[#D4AF37]" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
                  Color
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="size-7 rounded-full border border-white/10 bg-[#D4AF37]" />
                    <span className="text-sm text-white/70">Gold — Primary</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="size-7 rounded-full border border-white/10 bg-[#0F0F0F]" />
                    <span className="text-sm text-white/70">Black — Secondary</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="size-7 rounded-full border border-white/10 bg-[#6F4E37]" />
                    <span className="text-sm text-white/70">Warm Brown — Accent</span>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="h-full">
                <Type size={18} className="text-[#D4AF37]" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
                  Typography
                </p>
                <p
                  className="mt-4 text-2xl italic text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Playfair Display
                </p>
                <p className="mt-2 text-sm text-white/70">Inter</p>
              </Card>
            </Reveal>

            <Reveal delay={0.15}>
              <Card className="h-full">
                <Ruler size={18} className="text-[#D4AF37]" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
                  Spacing
                </p>
                <p className="mt-4 text-lg text-white">8px Grid</p>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="h-full">
                <Square size={18} className="text-[#D4AF37]" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
                  Border Radius
                </p>
                <p className="mt-4 text-lg text-white">16px</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 8 — UI SHOWCASE
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 bg-white/[0.015] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Chapter n="06" label="UI Showcase" />
            <Heading>A walk through every screen</Heading>
          </Reveal>

          <div className="mt-14 flex flex-col gap-20">
            {showcase.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <BrowserMockup label={item.title} />
                  <div>
                    <h3
                      className="text-2xl font-semibold text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-white/60">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 9 — RESPONSIVE DESIGN
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Chapter n="07" label="Responsive Design" />
            <Heading>One experience, every screen</Heading>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-end">
              <div className="flex flex-col items-center gap-3">
                <Monitor size={90} strokeWidth={1} className="text-[#D4AF37]/70" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Desktop
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Tablet size={64} strokeWidth={1} className="text-[#D4AF37]/70" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Tablet
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Smartphone size={44} strokeWidth={1} className="text-[#D4AF37]/70" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Mobile
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 10 — DESIGN DECISIONS
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 bg-white/[0.015] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Chapter n="08" label="Design Decisions" />
            <Heading>Design Decisions</Heading>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {decisions.map((d, i) => (
              <Reveal key={d.q} delay={0.05 * i}>
                <Card className="h-full">
                  <h3
                    className="text-lg font-semibold text-[#D4AF37]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {d.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{d.a}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 11 — ACCESSIBILITY
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Chapter n="09" label="Accessibility" />
            <Heading>Built to work for everyone</Heading>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {accessibility.map((a, i) => (
              <Reveal key={a.label} delay={0.05 * i}>
                <Card className="flex h-full flex-col items-center gap-3 text-center">
                  <a.icon size={20} className="text-[#D4AF37]" />
                  <span className="text-sm text-white/70">{a.label}</span>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 12 & 13 — WHAT I LEARNED / FINAL RESULT
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 bg-white/[0.015] py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <Chapter n="10" label="What I Learned" />
            <Prose>
              This project strengthened my ability to design immersive
              restaurant experiences while balancing aesthetics, usability,
              and responsive development.
            </Prose>
          </Reveal>

          <Reveal delay={0.1}>
            <Chapter n="11" label="Final Result" />
            <Prose>
              The final result is a premium restaurant website concept that
              combines elegant branding with practical functionality.
              Visitors can explore the menu, browse the gallery, learn about
              the restaurant, and make reservations through a clean,
              responsive interface.
            </Prose>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 14 — DESIGN GOALS
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Chapter n="12" label="Design Goals" />
            <Heading>What success looked like</Heading>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal, i) => (
              <Reveal key={goal} delay={0.04 * i}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-[#D4AF37]/15 bg-white/[0.02] px-5 py-4 transition-colors duration-300 hover:border-[#D4AF37]/40">
                  <Star size={14} className="shrink-0 text-[#D4AF37]" />
                  <span className="text-sm text-white/75">{goal}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SECTION 15 — CALL TO ACTION
      --------------------------------------------------------------- */}
      <section className="border-t border-[#D4AF37]/10 py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2
              className="text-4xl font-semibold leading-tight text-white sm:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Need a premium website{" "}
              <span className="italic text-[#D4AF37]">for your business?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
              Let's build something that reflects your brand and helps you
              stand out online.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-9 inline-block"
            >
              <Link
                to="/start-a-project"
                className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-[#0F0F0F] transition-shadow duration-300 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)]"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
