import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/start-a-project")({
  component: StartAProject,
});

const countries = ["Pakistan", "United States", "United Kingdom", "Canada", "UAE", "Other"];

const budgetTiersByCountry: Record<string, string[]> = {
  Pakistan: ["Under Rs 50,000", "Rs 50,000 – 150,000", "Rs 150,000 – 350,000", "Rs 350,000+", "Not sure yet"],
  "United States": ["Under $500", "$500 – $1,500", "$1,500 – $3,000", "$3,000+", "Not sure yet"],
  "United Kingdom": ["Under £400", "£400 – £1,200", "£1,200 – £2,500", "£2,500+", "Not sure yet"],
  Canada: ["Under CA$700", "CA$700 – CA$2,000", "CA$2,000 – CA$4,000", "CA$4,000+", "Not sure yet"],
  UAE: ["Under AED 1,800", "AED 1,800 – 5,500", "AED 5,500 – 11,000", "AED 11,000+", "Not sure yet"],
  Other: ["Under $500", "$500 – $1,500", "$1,500 – $3,000", "$3,000+", "Not sure yet"],
};

const websiteTypes = ["Business", "E-commerce", "Portfolio", "Blog", "Other"];
const pageOptions = ["1–3 pages", "4–6 pages", "7–10 pages", "10+ pages"];
const timelineOptions = ["ASAP (1–2 weeks)", "1 month", "2–3 months", "Flexible"];

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

function CustomSelect({
  label,
  value,
  options,
  onSelect,
  error,
}: {
  label: string;
  value: string;
  options: string[];
  onSelect: (val: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      tabIndex={0}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <label className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="mt-2 flex w-full items-center justify-between rounded-2xl border border-input bg-surface px-4 py-3.5 text-left text-sm outline-none transition-all duration-300 focus:border-primary/60 focus:bg-surface-strong"
      >
        <span className={value ? "text-foreground" : "text-muted-foreground/70"}>
          {value || `Select ${label.toLowerCase()}`}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-background py-1 shadow-xl"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onSelect(option);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-primary/10 ${
                  value === option ? "text-primary" : "text-foreground"
                }`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function StartAProject() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    budget: "",
    websiteType: "",
    pages: "",
    timeline: "",
    logoNeeded: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (name === "name" || name === "email" || name === "phone") {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  const budgetOptions = values.country
    ? budgetTiersByCountry[values.country]
    : budgetTiersByCountry.Other;

  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Start a Project"
          align="center"
          title={
            <>
              Ready to Build Something <span className="text-gradient">Great?</span>
            </>
          }
          description="Fill in the details below and I'll follow up with a plan, timeline, and either a quick demo or next steps."
        />

        <Reveal delay={0.08} className="relative mx-auto mt-14 max-w-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="glass-card flex flex-col items-center rounded-4xl border border-primary/20 p-10 text-center sm:p-14"
              >
                <motion.svg width="120" height="92" viewBox="0 0 120 92" fill="none" initial="hidden" animate="visible">
                  <defs>
                    <linearGradient id="browserGradient" x1="0" y1="0" x2="120" y2="92">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <motion.rect
                    x="4" y="4" width="112" height="84" rx="10"
                    stroke="url(#browserGradient)" strokeWidth="3"
                    variants={{
                      hidden: { pathLength: 0 },
                      visible: { pathLength: 1, transition: { duration: 0.8, ease: "easeInOut" } },
                    }}
                  />
                  <motion.line
                    x1="4" y1="26" x2="116" y2="26"
                    stroke="url(#browserGradient)" strokeWidth="2"
                    variants={{
                      hidden: { pathLength: 0 },
                      visible: { pathLength: 1, transition: { duration: 0.4, ease: "easeInOut", delay: 0.8 } },
                    }}
                  />
                  {[16, 26, 36].map((cx, i) => (
                    <motion.circle
                      key={cx}
                      cx={cx} cy="15" r="3" fill="url(#browserGradient)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 + i * 0.1, duration: 0.3 }}
                    />
                  ))}
                  <motion.path
                    d="M42 56L54 68L80 38"
                    stroke="url(#browserGradient)" strokeWidth="5"
                    strokeLinecap="round" strokeLinejoin="round"
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 1.3 } },
                    }}
                  />
                </motion.svg>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.4 }}
                  className="mt-6 font-display text-2xl font-semibold text-foreground"
                >
                  Your project is in!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.85, duration: 0.4 }}
                  className="mt-2 max-w-sm text-sm text-muted-foreground"
                >
                  I've received your details and will follow up soon with
                  either a demo or next steps.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-4xl border border-border p-7 sm:p-10"
                onSubmit={(event) => {
                  event.preventDefault();

                  const newErrors: Record<string, string> = {
                    name: validateField("name", values.name),
                    email: validateField("email", values.email),
                    phone: validateField("phone", values.phone),
                    country: values.country ? "" : "Please select a country",
                    budget: values.budget ? "" : "Please select a budget",
                    websiteType: values.websiteType ? "" : "Please select a type",
                    pages: values.pages ? "" : "Please select page count",
                    timeline: values.timeline ? "" : "Please select a timeline",
                    logoNeeded: values.logoNeeded ? "" : "Please choose an option",
                  };
                  setErrors(newErrors);

                  const hasError = Object.values(newErrors).some((msg) => msg !== "");
                  if (hasError) return;

                  setSending(true);
                  window.setTimeout(() => {
                    setSending(false);
                    setSubmitted(true);
                  }, 700);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Name
                    </label>
                    <input
                      id="name" name="name" type="text" value={values.name} onChange={handleChange}
                      required placeholder="Your Full Name"
                      className="mt-2 w-full rounded-2xl border border-input bg-surface px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-surface-strong"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Email
                    </label>
                    <input
                      id="email" name="email" type="email" value={values.email} onChange={handleChange}
                      required placeholder="you@email.com"
                      className="mt-2 w-full rounded-2xl border border-input bg-surface px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-surface-strong"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Phone
                    </label>
                    <input
                      id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange}
                      placeholder="+1 000 000 0000"
                      className="mt-2 w-full rounded-2xl border border-input bg-surface px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-surface-strong"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  <CustomSelect
                    label="Country"
                    value={values.country}
                    options={countries}
                    error={errors.country}
                    onSelect={(val) => setValues((prev) => ({ ...prev, country: val, budget: "" }))}
                  />

                  <CustomSelect
                    label="Budget Range"
                    value={values.budget}
                    options={budgetOptions}
                    error={errors.budget}
                    onSelect={(val) => setValues((prev) => ({ ...prev, budget: val }))}
                  />

                  <CustomSelect
                    label="Website Type"
                    value={values.websiteType}
                    options={websiteTypes}
                    error={errors.websiteType}
                    onSelect={(val) => setValues((prev) => ({ ...prev, websiteType: val }))}
                  />

                  <CustomSelect
                    label="Pages Needed"
                    value={values.pages}
                    options={pageOptions}
                    error={errors.pages}
                    onSelect={(val) => setValues((prev) => ({ ...prev, pages: val }))}
                  />

                  <CustomSelect
                    label="Timeline"
                    value={values.timeline}
                    options={timelineOptions}
                    error={errors.timeline}
                    onSelect={(val) => setValues((prev) => ({ ...prev, timeline: val }))}
                  />

                  <div>
                    <label className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Need a Logo Too?
                    </label>
                    <div className="mt-2 flex gap-3">
                      {["Yes", "No"].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setValues((prev) => ({ ...prev, logoNeeded: option }))}
                          className={`flex-1 rounded-2xl border px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                            values.logoNeeded === option
                              ? "border-primary/60 bg-primary/10 text-foreground"
                              : "border-input bg-surface text-muted-foreground hover:bg-surface-strong"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {errors.logoNeeded && <p className="mt-1 text-xs text-red-400">{errors.logoNeeded}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="details" className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Project Details
                    </label>
                    <textarea
                      id="details" name="details" value={values.details} onChange={handleChange}
                      rows={5} required placeholder="What kind of website do you need? Any specific features?"
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
                  {sending ? "Sending…" : "Submit Project Details"}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}