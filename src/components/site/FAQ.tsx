import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, SectionHeading } from "./motion-primitives";

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most projects take between 1 to 3 weeks depending on the size and complexity of the site. Simple business websites are usually faster, while larger sites with more pages or custom features take a bit longer. I'll always give you a clear timeline before we start.",
  },
  {
    question: "Can you redesign my website?",
    answer:
      "Yes. If you already have a website that feels outdated, slow, or isn't converting visitors into customers, I can redesign it with a modern layout, better performance, and improved user experience while keeping your brand identity intact.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "I can help you set up and configure hosting, or guide you through deploying the site on a platform of your choice. I'll make sure everything is fast, secure, and properly connected to your domain.",
  },
  {
    question: "Can I update the website later?",
    answer:
      "Absolutely. I build websites that are easy to maintain, and I can walk you through making simple updates yourself. For bigger changes or new features down the line, I'm always available to help.",
  },
  {
    question: "Do you build online stores?",
    answer:
      "Yes, I build e-commerce websites with product listings, shopping carts, and secure checkout so you can start selling online. Whether it's a small store or a larger catalog, I can set it up to fit your business.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="glass-card overflow-hidden rounded-3xl">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
      >
        <span className="font-display text-base font-medium text-foreground sm:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex size-8 shrink-0 items-center justify-center rounded-full border border-hairline text-lg text-muted-foreground"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-8 sm:pb-8 sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          align="center"
          title={
            <>
              Common <span className="text-gradient">Questions</span>
            </>
          }
          description="A few things people usually ask before getting started. Don't see your question here? Reach out anytime."
        />

        <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={0.05 * index}>
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === index ? null : index))
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
