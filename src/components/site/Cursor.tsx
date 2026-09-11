import {
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
  } from "motion/react";
  import { useEffect, useState } from "react";
  
  type CursorState = "default" | "hover" | "view";
  
  const SIZES: Record<CursorState, number> = {
    default: 36,
    hover: 64,
    view: 96,
  };
  
  export function Cursor() {
    const reduceMotion = useReducedMotion();
    const [enabled, setEnabled] = useState(false);
    const [visible, setVisible] = useState(false);
    const [pressed, setPressed] = useState(false);
    const [state, setState] = useState<CursorState>("default");
    const [label, setLabel] = useState("View");
  
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring(x, { stiffness: 280, damping: 28, mass: 0.6 });
    const ringY = useSpring(y, { stiffness: 280, damping: 28, mass: 0.6 });
  
    // Enable only on precise pointers, never with reduced motion
    useEffect(() => {
      if (reduceMotion) return;
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      setEnabled(true);
      document.body.classList.add("has-cursor");
      return () => document.body.classList.remove("has-cursor");
    }, [reduceMotion]);
  
    // Track the mouse
    useEffect(() => {
      if (!enabled) return;
      const move = (e: MouseEvent) => {
        x.set(e.clientX);
        y.set(e.clientY);
        setVisible(true);
      };
      const leave = () => setVisible(false);
      const down = () => setPressed(true);
      const up = () => setPressed(false);
      window.addEventListener("mousemove", move, { passive: true });
      document.documentElement.addEventListener("mouseleave", leave);
      window.addEventListener("mousedown", down);
      window.addEventListener("mouseup", up);
      return () => {
        window.removeEventListener("mousemove", move);
        document.documentElement.removeEventListener("mouseleave", leave);
        window.removeEventListener("mousedown", down);
        window.removeEventListener("mouseup", up);
      };
    }, [enabled, x, y]);
  
    // Hover states (delegated — works with all current + future elements)
    useEffect(() => {
      if (!enabled) return;
      const HOVER_SEL = "a, button, [data-hover]";
      const onOver = (e: MouseEvent) => {
        const t = e.target;
        if (!(t instanceof Element)) return;
        const labeled = t.closest("[data-cursor-label]");
        const viewed = t.closest('[data-cursor="view"]');
        if (labeled) {
          setLabel(labeled.getAttribute("data-cursor-label") || "View");
          setState("view");
        } else if (viewed) {
          setLabel(viewed.getAttribute("data-label") || "View");
          setState("view");
        } else if (t.closest(HOVER_SEL)) {
          setState("hover");
        }
      };
      const onOut = (e: MouseEvent) => {
        const t = e.target;
        const rt = e.relatedTarget;
        if (!(t instanceof Element)) return;
        const left = (sel: string) => {
          const m = t.closest(sel);
          return m && (!rt || !(rt instanceof Element) || !m.contains(rt));
        };
        if (left("[data-cursor-label]") || left('[data-cursor="view"]'))
          setState("default");
        if (left(HOVER_SEL)) setState("default");
      };
      document.addEventListener("mouseover", onOver);
      document.addEventListener("mouseout", onOut);
      return () => {
        document.removeEventListener("mouseover", onOver);
        document.removeEventListener("mouseout", onOut);
      };
    }, [enabled]);
  
    if (!enabled) return null;
  
    const size = SIZES[state];
  
    return (
      <>
        {/* Trailing ring */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 z-[200]"
          style={{ x: ringX, y: ringY }}
        >
          <motion.div
            className="absolute top-0 left-0 flex items-center justify-center rounded-full border border-primary/60 bg-primary/[0.06] backdrop-blur-[2px]"
            style={{ x: "-50%", y: "-50%" }}
            initial={false}
            animate={{
              width: size,
              height: size,
              scale: pressed ? 0.85 : 1,
              opacity: visible ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Gradient fill for "view" state */}
            <div
              className="absolute inset-0 rounded-full transition-opacity duration-300"
              style={{
                background: "var(--gradient-accent)",
                boxShadow: "0 12px 44px -8px var(--primary)",
                opacity: state === "view" ? 1 : 0,
              }}
            />
            <span
              className={`relative font-display text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 ${
                state === "view" ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
            >
              {label}
            </span>
          </motion.div>
        </motion.div>
  
        {/* Dot */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 z-[201]"
          style={{ x, y }}
        >
          <motion.div
            className="absolute top-0 left-0 h-1.5 w-1.5 rounded-full"
            style={{
              x: "-50%",
              y: "-50%",
              background: "var(--gradient-accent)",
              boxShadow: "0 0 10px var(--primary), 0 0 28px var(--violet)",
            }}
            initial={false}
            animate={{ opacity: visible ? 1 : 0, scale: pressed ? 0.5 : 1 }}
          />
        </motion.div>
      </>
    );
  }