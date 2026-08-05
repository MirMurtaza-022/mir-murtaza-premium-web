import { Github, Instagram, Linkedin } from "lucide-react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/MirMurtaza-022" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mir-murtaza-7148b3404" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/mirmurtaza072" },
 /* { label: "X", icon: Twitter, href: "#" } */,
];

export function Footer() {
  return (
    <footer className="border-t border-hairline py-14">
      <div className="section-shell flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-[0.18em] uppercase"
        >
          Mir<span className="text-primary">.</span>Murtaza
        </a>

        <nav className="flex flex-wrap justify-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="inline-flex size-9 items-center justify-center rounded-full border border-hairline text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground"
            >
              <social.icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <p className="section-shell mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mir Murtaza. All rights reserved.
      </p>
    </footer>
  );
}
