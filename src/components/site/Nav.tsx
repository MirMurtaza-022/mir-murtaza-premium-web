import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-x-0 top-0 z-50 py-4"
    >
      <div className="section-shell">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-card" : "border border-transparent"
          }`}
        >
          <a
            href="#top"
            className="font-display text-sm font-semibold tracking-[0.18em] uppercase"
          >
            Mir<span className="text-primary">.</span>Murtaza
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-border bg-surface-strong px-5 py-2 text-sm font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
          >
            Start a project
          </a>
        </div>
      </div>
    </motion.header>
  );
}
