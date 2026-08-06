import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyChooseMe } from "@/components/site/WhyChooseMe";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { TechStack } from "@/components/site/TechStack";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mir Murtaza — Websites That Grow Local Businesses" },
      {
        name: "description",
        content:
          "Premium web design for local businesses: modern, fast, mobile-ready websites that build trust and bring in more customers.",
      },
      {
        property: "og:title",
        content: "Mir Murtaza — Websites That Grow Local Businesses",
      },
      {
        property: "og:description",
        content:
          "Premium web design for local businesses: modern, fast, mobile-ready websites that build trust and bring in more customers.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <main>
        <Hero />
        <About />
        <WhyChooseMe />
        <Portfolio />
        <Process />
        <TechStack />
        <Services />
        <Stats />
        <Contact />
      </main>
      <Toaster />
    </div>
  );
}