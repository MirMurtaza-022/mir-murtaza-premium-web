import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import restaurant from "@/assets/work-restaurant.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[70rem] -translate-x-1/2 rounded-full opacity-40 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, var(--primary), transparent 60%), radial-gradient(circle at 70% 60%, var(--violet), transparent 60%)",
        }}
      />

      <div className="section-shell relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            Web design studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
            className="mt-5 text-[2.75rem] leading-[1.03] font-semibold sm:text-6xl lg:text-[4.25rem]"
          >
            We Build Websites <br className="hidden sm:block" />
            That <span className="text-gradient">Grow Businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Professional websites designed for local businesses that want to
            stand out, earn trust, and generate more customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
            href="#work"
  className="glow-soft rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
  style={{ background: "var(--gradient-accent)" }}
>
  View My Work
</a>
<a
  href="#contact"
  className="rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-surface-strong"
>
  Contact Me
</a>
          </motion.div>
        </div>

        <LaptopMockup image={restaurant} />
      </div>
    </section>
  );
}

function LaptopMockup({ image }: { image: string }) {
  const tiltRef = useRef<HTMLDivElement>(null);

  // Raw mouse position within the card, normalized to -0.5 → 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Convert position into a smoothed rotation angle
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = tiltRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.2, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
      className="relative"
      style={{ perspective: 1200 }}
    >
      {/* Mouse-tilt layer — wraps the mockup, doesn't fight the entrance animation above */}
      <motion.div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="glass-card glow-soft rounded-3xl p-3">
            <div className="overflow-hidden rounded-2xl border border-hairline bg-background">
              <div className="flex items-center gap-1.5 border-b border-hairline bg-surface px-4 py-3">
                <span className="size-2.5 rounded-full bg-surface-strong" />
                <span className="size-2.5 rounded-full bg-surface-strong" />
                <span className="size-2.5 rounded-full bg-surface-strong" />
                <span className="ml-4 h-5 flex-1 rounded-full bg-surface-strong" />
              </div>
              <div className="h-[22rem] overflow-hidden">
                <motion.img
                  src={image}
                  alt="Preview of a premium restaurant website designed by Mir Murtaza"
                  width={1280}
                  height={960}
                  animate={{ y: ["0%", "-42%", "0%"] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto h-3 w-[86%] rounded-b-3xl border-x border-b border-hairline bg-surface-strong" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(40px)" }}
          className="glass-card absolute -bottom-6 -left-4 hidden rounded-2xl px-5 py-3 sm:block"
        >
          <p className="font-display text-lg font-semibold">98</p>
          <p className="text-xs text-muted-foreground">Performance score</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}