import { Github, Instagram, Linkedin } from "lucide-react";
import { Reveal, SectionHeading } from "./motion-primitives";
import profilePic from "@/assets/profile.jpg";

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/MirMurtaza-022" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mir-murtaza-7148b3404" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/mirmurtaza072" },
];

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                Who <span className="text-gradient">I Am</span>
              </>
            }
          />

          <div className="relative w-full max-w-md aspect-square shrink-0 animate-float mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500 via-blue-500 to-purple-500 animate-spin-slow blur-sm opacity-70"></div>
            <img
              src={profilePic}
              alt="Your Name"
              className="relative w-full h-full rounded-3xl object-cover border-4 border-background hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <Reveal delay={0.05}>
            <p>
            Every business deserves a website that creates a great first impression, builds credibility, and turns visitors into customers.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
            Every website is optimized for speed, mobile devices, and user experience so your customers enjoy a seamless experience on any screen.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-xl font-medium text-foreground sm:text-2xl">
            The goal is simple: help your business look professional, build trust, and generate more enquiries online.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}