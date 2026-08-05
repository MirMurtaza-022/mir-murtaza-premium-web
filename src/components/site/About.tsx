import { Reveal, SectionHeading } from "./motion-primitives";
import profilePic from "@/assets/profile.jpg";

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
              I design professional websites focused on helping local businesses
              build credibility and attract more customers.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
            I specialize in designing and developing modern websites that help local & international businesses establish a strong online presence. My focus goes beyond creating attractive designs. I build websites that are fast, responsive, and easy to navigate, ensuring every visitor has a seamless experience. From thoughtful layouts to clean branding, every detail is crafted with purpose. I believe a professional website is one of the most valuable investments a business can make, helping it build trust, stand out from competitors, and convert visitors into loyal customers. My goal is simple: create digital experiences that look premium, perform exceptionally, and support real business growth.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-xl font-medium text-foreground sm:text-2xl">
              My goal is simple: create websites that make businesses look
              premium.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}