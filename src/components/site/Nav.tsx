import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Github, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";

const links: Array<{ label: string; to: "/" | "/about" | "/projects" | "/process"; hash?: string }> = [
  { label: "Home", to: "/", hash: "top" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Process", to: "/process" },
  { label: "Services", to: "/services" },
];

// ⬇️⬇️ REPLACE THESE WITH YOUR REAL PROFILE LINKS ⬇️⬇️
const socials = [
  { label: "GitHub", href: "https://github.com/MirMurtaza-022", Icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/mirmurtaza072", Icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mir-murtaza-7148b3404", Icon: Linkedin },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4 sm:py-4"
    >
      <div className="section-shell">
        <div
          className={`flex min-w-0 items-center justify-between gap-2 rounded-full px-3 py-2 sm:px-5 sm:py-3 ${
            scrolled || open ? "glass-card" : "border border-transparent"
          }`}
        >
          {/* Logo + Brand */}
          <Link to="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="MIR MURTAZA Logo"
              className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16"
            />
            <span className="truncate text-sm font-bold tracking-[0.18em] sm:text-lg sm:tracking-widest">
              MIR<span className="text-muted-foreground">.</span>MURTAZA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.hash}
                to={link.to}
                hash={link.hash}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA (hidden on mobile) */}
          <Link
            to="/start-a-project"
            className="hidden shrink-0 rounded-full border border-border bg-surface-strong px-5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 md:block"
          >
            Start a project
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-border bg-surface-strong md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-5 rounded-full bg-foreground"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-5 rounded-full bg-foreground"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-5 rounded-full bg-foreground"
            />
          </button>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card mt-2 overflow-hidden rounded-3xl p-3 md:hidden"
              aria-label="Mobile navigation"
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.hash}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    hash={link.hash}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors hover:bg-surface-strong"
                  >
                    {link.label}
                    <span className="text-muted-foreground">→</span>
                  </Link>
                </motion.div>
              ))}

              <div className="mt-2 border-t border-hairline p-2">
                <Link
                  to={"/link"}
                  onClick={() => setOpen(false)}
                  className="glow-soft mb-3 flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  Start a project
                </Link>
                <div className="flex items-center justify-center gap-3 pb-1">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}