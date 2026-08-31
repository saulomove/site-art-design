"use client";

import { motion } from "framer-motion";
import type { ProposalBeforeAfter } from "@/lib/proposals-data";
import { X, Sparkles } from "lucide-react";
import { AciavSectionHeader, AciavCheck } from "./aciav-ui";

interface Props {
  beforeAfter: ProposalBeforeAfter;
}

export function ProposalAciavComparison({ beforeAfter }: Props) {
  return (
    <section className="bg-[#f7f5f1] py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <AciavSectionHeader
          eyebrow="Por que é diferente"
          title="A ACIC não vai contratar um projeto."
          highlight="Vai entrar num sistema pronto."
          lead="A parte difícil já foi feita: desenvolvimento, validação em operação real, publicação nas lojas e ajustes a partir do uso do dia a dia em Videira. Para Caçador, isso vira configuração."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Construir do zero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-[#e7ecef] bg-white/60 p-8 md:p-10"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6a7a86]">
              O caminho longo
            </span>
            <h3 className="mt-3 text-xl font-bold text-[#2b3b48]/70 md:text-2xl">
              {beforeAfter.beforeTitle}
            </h3>

            <ul className="mt-8 space-y-4">
              {beforeAfter.beforeItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#e7ecef]">
                    <X className="h-3 w-3 text-[#6a7a86]" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-[#6a7a86]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Aderir */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl bg-white p-8 shadow-[0_30px_60px_-24px_rgba(8,30,40,.22)] ring-2 ring-[#1c9b96]/30 md:p-10"
          >
            <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-[#e85d1f] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              <Sparkles className="h-3 w-3" />
              Esta proposta
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0d6b6b]">
              O caminho curto
            </span>
            <h3 className="mt-3 text-xl font-bold text-[#0c1e2a] md:text-2xl">
              {beforeAfter.afterTitle}
            </h3>

            <ul className="mt-8 space-y-4 text-[15px] leading-relaxed text-[#2b3b48]">
              {beforeAfter.afterItems.map((item, idx) => (
                <AciavCheck key={idx}>{item}</AciavCheck>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Conclusão */}
        {beforeAfter.expectedResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 rounded-3xl bg-[#08494a] p-9 text-center md:p-12"
          >
            <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-white/90 md:text-2xl">
              {beforeAfter.expectedResults}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
