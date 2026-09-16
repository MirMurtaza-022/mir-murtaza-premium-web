import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import logo from "@/assets/logo.png"; // ← adjust if your filename differs

// Total choreography ≈ 4s — matches the brief's 3–5s window
const DONE_AT = 4000;

// Faint digital dust — deterministic (no random re-renders)
const dust = [
  { l: "28%", t: "30%", s: 2, d: 0.9 }, { l: "70%", t: "26%", s: 3, d: 1.1 },
  { l: "62%", t: "68%", s: 2, d: 1.3 }, { l: "34%", t: "64%", s: 3, d: 1.0 },
  { l: "46%", t: "18%", s: 2, d: 1.4 }, { l: "78%", t: "48%", s: 2, d: 1.2 },
  { l: "20%", t: "50%", s: 2, d: 1.5 }, { l: "54%", t: "78%", s: 3, d: 0.8 },
];

// Fragments that converge into the logo as it reveals
const fragments = [
  { x: -170, y: -90, s: 4, sq: true }, { x: 160, y: -110, s: 3, sq: false },
  { x: -140, y: 100, s: 3, sq: false }, { x: 180, y: 80, s: 4, sq: true },
  { x: 0, y: -180, s: 3, sq: true }, { x: -30, y: 190, s: 4, sq: false },
  { x: 120, y: 160, s: 3, sq: false }, { x: -190, y: 10, s: 3, sq: true },
];

export function Loader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(onDone, reduce ? 500 : DONE_AT);
    return () => clearTimeout(t);
  }, [onDone, reduce]);

  return (
    <motion.div className="fixed inset-0 z-[100] cursor-none overflow-hidden" role="status" aria-label="Loading portfolio">
      {/* Accent curtain — sweeps up second (the reveal "flush") */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ background: "var(--gradient-accent)", opacity: 0.14 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.85, delay: 0.22, ease: [0.76, 0, 0.24, 1] }}
      />
      {/* Solid near-black curtain — sweeps up first */}
      <motion.div
        className="absolute inset-0 z-20" style={{ background: "oklch(0.14 0 0)" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Cinematic vignette */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, oklch(0 0 0 / 50%) 100%)" }}
        />
      </motion.div>

      {/* ---------- Scene ---------- */}
      <motion.div
        className="relative z-30 flex min-h-dvh items-center justify-center"
        exit={{ opacity: 0, scale: 0.97, filter: "blur(10px)" }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        {/* 1 · Ambient glow slowly waking up */}
        <motion.div
          aria-hidden
          className="absolute h-[30rem] w-[30rem] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--violet), transparent 62%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.14 }}
          transition={{ duration: 2.4, delay: 0.15, ease: "easeOut" }}
        />

        {/* Digital dust drifting */}
        {dust.map((p, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute rounded-full bg-white/40"
            style={{ left: p.l, top: p.t, width: p.s, height: p.s }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.5, 0.5, 0], y: [0, -14] }}
            transition={{ duration: 3.6, delay: p.d, times: [0, 0.2, 0.75, 1], ease: "easeInOut" }}
          />
        ))}

        {/* ---------- Center stage ---------- */}
        <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 lg:h-96 lg:w-96">

          {/* Logo halo */}
          <motion.div
            aria-hidden
            className="absolute h-40 w-40 rounded-full blur-[60px] sm:h-48 sm:w-48 lg:h-56 lg:w-56"
            style={{ background: "var(--gradient-accent)" }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }}
          />

          {/* 2 · Fragments converging as the logo forms */}
          {fragments.map((f, i) => (
            <motion.span
              key={i}
              aria-hidden
              className={`absolute z-0 ${f.sq ? "rounded-[2px]" : "rounded-full"}`}
              style={{
                width: f.s, height: f.s,
                background: i % 2 ? "var(--primary)" : "oklch(1 0 0 / 80%)",
              }}
              initial={{ x: f.x, y: f.y, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: [0, 0.9, 0.8, 0] }}
              transition={{ duration: 1.15, delay: 0.65 + i * 0.06, times: [0, 0.3, 0.8, 1], ease: "easeIn" }}
            />
          ))}

          {/* 3 · Precision machinery — guides, selection frame, plus nodes */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.1, delay: 1.3, times: [0, 0.12, 0.72, 1], ease: "easeInOut" }}
          >
            {/* Crosshair guides */}
            <motion.div
              className="absolute top-1/2 left-1/2 h-px w-[min(80vw,22rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 h-[min(60vh,22rem)] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent"
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 1.55, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Figma-style selection frame around the logo */}
            <motion.div
              className="absolute inset-7"
              initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
            >
              <span className="absolute top-0 left-0 h-4 w-4 border-t border-l border-white/30" />
              <span className="absolute top-0 right-0 h-4 w-4 border-t border-r border-white/30" />
              <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/30" />
              <span className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-white/30" />
            </motion.div>
            {/* Tiny nodes on the guides */}
            <span className="absolute top-1/2 left-1/2 size-1 -translate-x-20 -translate-y-1/2 bg-white/30" />
            <span className="absolute top-1/2 left-1/2 size-1 translate-x-19 -translate-y-1/2 bg-white/30" />
          </motion.div>

          {/* Click pulse */}
          <motion.span
            aria-hidden
            className="absolute z-10 left-[6.2rem] top-[5rem] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{ borderColor: "var(--primary)" }}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 1.9], opacity: [0, 0.9, 0] }}
            transition={{ duration: 0.6, delay: 2.85, ease: "easeOut" }}
          />

          {/* 4 · LOGO — constructs from darkness */}
          <motion.div
            className="relative z-10 overflow-hidden rounded-full"
            initial={{ opacity: 0, scale: 0.92, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.55, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.img
              src={logo}
              alt="Mir Murtaza logo"
              className="h-32 w-32 rounded-full sm:h-44 sm:w-44 lg:h-52 lg:w-52"
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 3, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* 5 · Single premium light pass */}
            <motion.div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, transparent 35%, oklch(1 0 0 / 55%) 50%, transparent 65%)",
              }}
              initial={{ x: "-130%" }}
              animate={{ x: "130%" }}
              transition={{ duration: 0.9, delay: 2.35, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Signature caption — appears, holds, dissolves */}
        <motion.div
          className="absolute mt-72 flex flex-col items-center gap-1.5 text-center sm:mt-80 lg:mt-96"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -6] }}
          transition={{ duration: 2, delay: 1.65, times: [0, 0.25, 0.8, 1], ease: "easeInOut" }}
        >
          <p className="text-[10px] tracking-[0.35em] text-white/60 uppercase">
            Mir Murtaza
          </p>
          <p className="text-[10px] tracking-[0.35em] text-muted-foreground/70 uppercase">
            Design · Develop · Deliver
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
