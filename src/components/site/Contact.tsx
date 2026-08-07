import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./motion-primitives";

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your Full Name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+1 000 000 0000" },
];

const WHATSAPP_NUMBER = "923042572827";
const WHATSAPP_MESSAGE = "Hi! I'd like to talk about a website project.";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.887.526 3.653 1.44 5.159L2 22l4.977-1.406A9.945 9.945 0 0 0 12.001 22C17.523 22 22 17.522 22 12S17.523 2 12.001 2zm0 18.181a8.15 8.15 0 0 1-4.161-1.138l-.298-.177-3.096.875.85-3.07-.194-.316A8.15 8.15 0 0 1 3.82 12c0-4.516 3.665-8.181 8.181-8.181 4.516 0 8.181 3.665 8.181 8.181 0 4.516-3.665 8.181-8.181 8.181z" />
    </svg>
  );
}

function validateField(name: string, value: string) {
  if (name === "name") {
    if (value.trim().length < 2) return "Name must be at least 2 letters";
    if (!/^[a-zA-Z\s]+$/.test(value)) return "Name can only contain letters";
  }
  if (name === "email") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email";
  }
  if (name === "phone" && value.trim() !== "") {
    if (!/^\+?[0-9\s-]{7,15}$/.test(value)) return "Enter a valid phone number";
  }
  return "";
}

export function Contact() {
  const [sending, setSending] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  return (
    <section id="contact" className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title={
            <>
              Ready to Grow {" "}
              <span className="text-gradient">Your Business?</span>
            </>
          }
          description="Tell us about your business and we'll create a website that helps you attract more customers and grow online."
        />

        <Reveal delay={0.06} className="mx-auto mt-14 max-w-2xl">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-soft flex w-full items-center justify-center gap-3 rounded-2xl py-4 font-display text-base font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.01]"
            style={{ background: "#25D366" }}
          >
            <WhatsAppIcon size={20} />
            Chat on WhatsApp
          </a>

          <div className="my-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-hairline" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Or send a message
            </span>
            <span className="h-px flex-1 bg-hairline" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="glass-card flex flex-col items-center rounded-4xl p-10 text-center sm:p-14"
              >
                <motion.svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.circle
                    cx="36"
                    cy="36"
                    r="34"
                    stroke="url(#successGradient)"
                    strokeWidth="3"
                    variants={{
                      hidden: { pathLength: 0 },
                      visible: { pathLength: 1, transition: { duration: 0.6, ease: "easeInOut" } },
                    }}
                  />
                  <motion.path
                    d="M22 37L32 47L50 27"
                    stroke="url(#successGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                      hidden: { pathLength: 0 },
                      visible: {
                        pathLength: 1,
                        transition: { duration: 0.4, ease: "easeInOut", delay: 0.5 },
                      },
                    }}
                  />
                  <defs>
                    <linearGradient id="successGradient" x1="0" y1="0" x2="72" y2="72">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </motion.svg>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="mt-6 font-display text-2xl font-semibold text-foreground"
                >
                  Message sent!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="mt-2 max-w-sm text-sm text-muted-foreground"
                >
                  Thanks for reaching out. I'll review your project details
                  and get back to you within 24 hours.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-strong"
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-4xl p-7 sm:p-10"
                onSubmit={async (event) => {
                  event.preventDefault();
                
                  const form = event.currentTarget;
                
                  const newErrors = {
                    name: validateField("name", values.name),
                    email: validateField("email", values.email),
                    phone: validateField("phone", values.phone),
                  };
                
                  setErrors(newErrors);
                
                  const hasError = Object.values(newErrors).some((msg) => msg !== "");
                  if (hasError) {
                    toast.error("Please fix the errors before submitting.");
                    return;
                  }
                
                  setSending(true);
                
                  try {
                    const formData = new FormData(form);
                
                    formData.append(
                      "access_key",
                      "f3d00772-4136-4aff-addf-7ef0284cb49e"
                    );
                
                    const response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData,
                    });
                
                    const data = await response.json();
                
                    if (data.success) {
                      setSubmitted(true);
                
                      form.reset();
                
                      setValues({
                        name: "",
                        email: "",
                        phone: "",
                      });
                
                      toast.success("Message sent successfully!");
                    } else {
                      console.error(data);
                      toast.error("Something went wrong. Please try again.");
                    }
                  } catch (error) {
                    console.error(error);
                    toast.error("Failed to send message.");
                  } finally {
                    setSending(false);
                  }
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field, i) => (
                    <div key={field.name} className={i === 2 ? "sm:col-span-2" : undefined}>
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
                        value={values[field.name as keyof typeof values]}
                        onChange={handleChange}
                        required={field.name !== "phone"}
                        placeholder={field.placeholder}
                        className="mt-2 w-full rounded-2xl border border-input bg-surface px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-surface-strong"
                      />
                      {errors[field.name as keyof typeof errors] && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors[field.name as keyof typeof errors]}
                        </p>
                      )}
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
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
