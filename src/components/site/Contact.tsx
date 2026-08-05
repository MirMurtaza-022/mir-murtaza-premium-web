import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./motion-primitives";

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+1 000 000 0000" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title={
            <>
              Let's build something{" "}
              <span className="text-gradient">premium</span>
            </>
          }
          description="Tell me about the business and what you need. I'll reply with a clear plan."
        />

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-2xl">
          <form
            className="glass-card rounded-4xl p-7 sm:p-10"
            onSubmit={(event) => {
              event.preventDefault();
              setSending(true);
              window.setTimeout(() => {
                setSending(false);
                toast.success("Thanks — your message has been noted.");
                (event.target as HTMLFormElement).reset();
              }, 700);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field, i) => (
                <div
                  key={field.name}
                  className={i === 2 ? "sm:col-span-2" : undefined}
                >
                  <label
                    htmlFor={field.name}
                    className="text-xs font-medium tracking-wide text-muted-foreground uppercase"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.name !== "phone"}
                    placeholder={field.placeholder}
                    className="mt-2 w-full rounded-2xl border border-input bg-surface px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-surface-strong"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label
                  htmlFor="details"
                  className="text-xs font-medium tracking-wide text-muted-foreground uppercase"
                >
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  required
                  placeholder="What kind of website do you need?"
                  className="mt-2 w-full resize-none rounded-2xl border border-input bg-surface px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-surface-strong"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="glow-soft mt-8 w-full rounded-2xl py-4 font-display text-base font-semibold text-primary-foreground disabled:opacity-70"
              style={{ background: "var(--gradient-accent)" }}
            >
              {sending ? "Sending…" : "Send"}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
