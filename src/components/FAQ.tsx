"use client";

import React, { useState } from "react";
import { faqs } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-8 bg-cream flex flex-col gap-4">
      <div className="max-w-xl mx-auto w-full">
        <SectionHeading
          badge="Questions &amp; Answers"
          badgeColor="maroon"
          title="Frequently Asked"
        />

        <div className="flex flex-col gap-2.5 mt-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border-2 border-ink shadow-tactile-sm transition-all overflow-hidden ${
                  isOpen ? "bg-sand/40" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full min-h-[48px] p-3.5 flex items-center justify-between text-left font-sans font-bold text-xs sm:text-sm text-maroon cursor-pointer focus:outline-none focus:ring-2 focus:ring-maroon"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-ink shrink-0 ml-2 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-3.5 pb-3.5 pt-1 border-t border-dashed border-ink/20">
                        <p className="font-sans text-xs text-ink-muted leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
