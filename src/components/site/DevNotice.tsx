import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Construction, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function DevNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("dev-notice-seen");
    if (!alreadySeen) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem("dev-notice-seen", "true");
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="glass-card relative w-full max-w-md rounded-3xl border border-border p-8 text-center"
          >
            <button
              onClick={dismiss}
              className="absolute right-5 top-5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
              <Construction size={26} className="text-primary" />
            </div>

            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
              Site Under Development
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This website is still being fine-tuned. If you spot anything
              that looks off, I'd really appreciate it if you let me know
              through the{" "}
              <Link to="/" hash="contact" className="text-primary underline underline-offset-2">
                contact form
              </Link>
              .
            </p>

            <button
              onClick={dismiss}
              className="glow-soft mt-6 w-full rounded-2xl py-3 font-display text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-accent)" }}
            >
              Got it, continue browsing
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}