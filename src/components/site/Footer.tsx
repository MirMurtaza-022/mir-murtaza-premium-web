import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin } from "lucide-react";

const links: Array<{ label: string; to: "/" | "/about" | "/projects"; hash?: string }> = [
  { label: "Home", to: "/", hash: "top" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Process", to: "/process" },
  { label: "Services", to: "/services" },
];

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/MirMurtaza-022" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mir-murtaza-7148b3404" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/mirmurtaza072" },
  // { label: "X", icon: Twitter, href: "#" }, // ← add Twitter import before enabling
];

export function Footer() {
  return (
    <footer className="border-t border-hairline py-14">
      <div className="section-shell flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <Link
          to="/"
          className="font-display text-sm font-semibold tracking-[0.18em] uppercase"
        >
          Mir<span className="text-primary">.</span>Murtaza
        </Link>

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((item) => (
            <Link
              key={`${item.to}#${item.hash ?? ""}`}
              to={item.to}
              hash={item.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-hairline text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </div>

      <p className="section-shell mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mir Murtaza. All rights reserved.
      </p>
    </footer>
  );
}
