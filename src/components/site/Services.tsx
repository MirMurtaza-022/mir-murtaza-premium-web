import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./motion-primitives";

const services = [
  {
    title: "Website Design",
    body: "A distinctive visual identity built around how customers decide.",
  },
  {
    title: "Business Websites",
    body: "Multi-page sites that present a business with authority.",
  },
  {
    title: "Landing Pages",
    body: "Single-focus pages built to convert enquiries and bookings.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Services That <span className="text-gradient">Grow Your Business</span>
            </>
          }
          description="From a single landing page to a complete business site — pick what fits, skip what doesn't."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                className="group glass-card flex h-full flex-col justify-between gap-10 rounded-3xl p-7 transition-colors duration-500 hover:border-primary/40"
              >
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                </div>
                <span className="inline-flex size-9 items-center justify-center rounded-full border border-hairline text-primary transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/15">
                  <ArrowRight size={15} />
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <Link
            to="/services"
            data-hover
            className="group mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ background: "var(--gradient-accent)" }}
          >
            Explore all 6 services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}