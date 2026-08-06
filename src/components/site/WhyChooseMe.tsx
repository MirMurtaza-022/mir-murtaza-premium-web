import { motion } from "motion/react";
import {
  Sparkles,
  Smartphone,
  Zap,
  Search,
  LayoutDashboard,
  LifeBuoy,
} from "lucide-react";
import { Reveal, SectionHeading } from "./motion-primitives";

const reasons = [
  {
    icon: Sparkles,
    title: "Professional First Impression",
    body: "Considered layouts and typography that make a business look established.",
  },
  {
    icon: Smartphone,
    title: "Perfect on Every Device",
    body: "Flawless on every screen, because most customers arrive on a phone.",
  },
  {
    icon: Zap,
    title: "Keep Visitors Engaged",
    body: "Lightweight builds tuned for speed so visitors never wait.",
  },
  {
    icon: Search,
    title: "Help Customers Find You",
    body: "Clean structure and metadata so the right people find you.",
  },
  {
    icon: LayoutDashboard,
    title: "Clean UI/UX",
    body: "Clear paths to the one action that matters — getting in touch.",
  },
  {
    icon: LifeBuoy,
    title: "We're Here After Launch",
    body: "Ongoing help after launch, with fast and direct communication.",
  },
];

export function WhyChooseMe() {
  return (
    <section className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why choose me"
          align="center"
          title={
            <>
              Everything Your Business <span className="text-gradient"> Needs Online</span>
            </>
          }
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="group glass-card h-full rounded-3xl p-7 transition-colors duration-500 hover:border-primary/40"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-hairline bg-surface-strong text-primary transition-colors duration-500 group-hover:bg-primary/15">
                  <reason.icon size={20} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {reason.body}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
