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
  {
    title: "Website Redesign",
    body: "Turning an outdated site into something that earns trust.",
  },
  {
    title: "Portfolio Websites",
    body: "Elegant showcases for creatives and independent professionals.",
  },
  {
    title: "Maintenance & Updates",
    body: "Keeping content fresh, secure, and performing month after month.",
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
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
}
