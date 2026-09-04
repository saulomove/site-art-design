"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { Flag } from "lucide-react";
import { VinicolaDivider, VinicolaSectionHeader } from "../proposal-vinicola/vinicola-ui";

interface Props { sprints: NonNullable<Proposal["systemSprints"]> }

export function ProposalGenyusRoadmap({ sprints }: Props) {
  return (
    <section id="entregas" className="relative scroll-mt-[68px] overflow-hidden bg-[#F4F0E8] py-24 md:py-32">
      <VinicolaDivider onLight />
      <div className="container mx-auto max-w-5xl px-4">
        <VinicolaSectionHeader
          onLight
          eyebrow="Entregas"
          title="Cada módulo entra por conta própria,"
          italic="e nunca some por dois meses"
          lead="Os três juntos levam dez semanas, com algo funcionando a cada quinzena. Contratados em separado, Gestão de terceiros leva 4 semanas, e CRM e Wine Garden levam 3 cada — sempre com a base do sistema no ar desde a primeira entrega."
        />

        <div className="relative">
          <div className="pointer-events-none absolute bottom-6 left-[23px] top-6 hidden w-[1px] bg-gradient-to-b from-[#8A6A24] to-[#3B5F4C] opacity-40 md:block" />
          <div className="space-y-6">
            {sprints.map((s, idx) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: Math.min(idx, 4) * 0.08 }}
                className="relative flex flex-col gap-6 md:flex-row md:gap-10"
              >
                <span className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#0B0B0B]/15 bg-[#F4F0E8] font-playfair text-lg font-medium text-[#0B0B0B]">
                  {s.number}
                </span>
                <div className="flex-1 bg-white p-8 md:p-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8A6A24]">{s.weeks}</span>
                  <h3 className="mt-3 font-playfair text-2xl font-medium text-[#0B0B0B] md:text-3xl">{s.title}</h3>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:gap-x-8">
                    {s.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-[#0B0B0B]/75">
                        <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#8A6A24]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex items-start gap-3 border-t border-[#0B0B0B]/10 pt-6">
                    <Flag className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8A6A24]" />
                    <p className="font-playfair text-[15px] italic leading-relaxed text-[#0B0B0B]/70 md:text-base">{s.milestone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
