"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AciavSectionHeader } from "./aciav-ui";

interface Props {
  faq: { question: string; answer: string }[];
}

export function ProposalAciavFaq({ faq }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq || faq.length === 0) return null;

  return (
    <section className="bg-[#f7f5f1] py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <AciavSectionHeader
          eyebrow="Dúvidas frequentes"
          title="O que a diretoria costuma"
          highlight="perguntar"
        />

        <div className="space-y-3">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: Math.min(idx, 5) * 0.05 }}
                className="overflow-hidden rounded-2xl border border-[#e7ecef] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-8"
                >
                  <span className="text-[15px] font-bold leading-snug text-[#0c1e2a] md:text-base">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#e85d1f] text-white"
                        : "bg-[#e6f3f2] text-[#0d6b6b]"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-[#2b3b48]/80 md:px-8 md:pb-7">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
