import {
    AnimatePresence,
    animate,
    motion,
    useMotionValue,
    useReducedMotion,
    useTransform,
  } from "motion/react";
  import { useEffect, useState } from "react";
  
  const NAME = ["M", "I", "R", "M", "U", "R", "T", "A", "Z", "A"];
  const WORDS = ["Design", "Develop", "Deliver"];
  
  export function Loader({ onDone }: { onDone: () => void }) {
    const reduceMotion = useReducedMotion();
    const progress = useMotionValue(0);
    const barWidth = useTransform(progress, (v) => `${v}%`);
    const [count, setCount] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
  
    useEffect(() => {
      if (reduceMotion) {
        onDone();
        return;
      }
      let doneTimer: ReturnType<typeof setTimeout>;
      const controls = animate(progress, 100, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setCount(Math.floor(v)),
        onComplete: () => {
          doneTimer = setTimeout(onDone, 300);
        },
      });
      const id = setInterval(
        () => setWordIndex((w) => (w + 1) % WORDS.length),
        650
      );
      return () => {
        controls.stop();
        clearInterval(id);
        clearTimeout(doneTimer);
      };
    }, [onDone, progress, reduceMotion]);
  
    return (
      <>
        {/* Gradient curtain — exits 0.12s behind the main panel */}
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[99]"
          style={{ background: "var(--gradient-accent)" }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.12 }}
        />
  
        {/* Main panel */}
        <motion.div
          
          role="status"
          aria-label="Loading website"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
          exit={{ y: "-101%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
            {/* ---- Ambient background ---- */}
<div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
  {/* Aurora orb — violet, top-left drift */}
  <motion.div
    className="absolute -top-[20%] left-[8%] h-[34rem] w-[34rem] rounded-full opacity-25 blur-[130px]"
    style={{ background: "var(--violet)" }}
    animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
  />
  {/* Aurora orb — blue, bottom-right drift */}
  <motion.div
    className="absolute right-[4%] -bottom-[25%] h-[30rem] w-[30rem] rounded-full opacity-20 blur-[130px]"
    style={{ background: "var(--primary)" }}
    animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
  {/* Dot grid, faded toward edges */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "radial-gradient(oklch(1 0 0 / 13%) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
    }}
  />
  {/* Film grain */}
  <svg className="absolute inset-0 h-full w-full opacity-[0.06]">
    <filter id="loader-grain">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.8"
        numOctaves="3"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#loader-grain)" />
  </svg>
  {/* Vignette */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 55%, oklch(0 0 0 / 55%) 100%)",
    }}
  />
</div>
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="px-6 text-center"
          >
            {/* Staggered logo */}
            <div className="overflow-hidden font-display text-4xl font-semibold tracking-[0.08em] sm:text-6xl">
              {NAME.map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.05 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={ch === "·" ? "text-gradient inline-block" : "inline-block"}
                >
                  {ch}
                </motion.span>
              ))}
            </div>
  
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="eyebrow mt-4"
            >
              Web Designer &amp; Developer
            </motion.p>
  
            {/* Rotating words */}
            <div className="mt-5 flex h-6 items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-gradient font-display text-sm font-semibold tracking-[0.24em] uppercase"
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
  
          {/* Meta + counter + progress */}
          <p className="eyebrow absolute bottom-7 left-7 !text-[11px]">
            Portfolio — 2026
          </p>
          <div className="text-gradient absolute right-6 bottom-4 font-display text-[clamp(5rem,15vw,10rem)] leading-none font-semibold tabular-nums">
            {count}
            <span className="align-super text-[0.22em]">%</span>
          </div>
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-border">
            <motion.div
              className="h-full"
              style={{ width: barWidth, background: "var(--gradient-accent)" }}
            />
          </div>
        </motion.div>
      </>
    );
  }