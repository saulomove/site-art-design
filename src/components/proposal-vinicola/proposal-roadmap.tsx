"use client";

import { motion } from "framer-motion";
import type { ProposalPhase } from "@/lib/proposals-data";
import { VinicolaDivider, VinicolaSectionHeader } from "./vinicola-ui";

interface Props {
  phases: ProposalPhase[];
}

const PHASE_LABELS = ["Dias 1 a 30", "Dias 31 a 60", "Dias 61 a 90"];

export function ProposalVinicolaRoadmap({ phases }: Props) {
  return (
    <section id="plano" className="scroll-mt-[68px] relative overflow-hidden bg-[#F4F0E8] py-24 md:py-32">
      <VinicolaDivider onLight />

      <div className="container mx-auto max-w-5xl px-4">
        <VinicolaSectionHeader
          onLight
          eyebrow="Plano de 90 dias"
          title="Três ondas, e a"
          italic="ordem importa"
          lead="Não adianta trazer tráfego para um funil furado. Consertar e medir vem antes de investir — e é por isso que a vinícola vê resultado antes da primeira fatura vencer."
        />

        <div className="relative">
          <div className="pointer-events-none absolute bottom-6 left-[23px] top-6 hidden w-[1px] bg-gradient-to-b from-[#9A2B23] via-[#8A6A24] to-[#3B5F4C] opacity-40 md:block" />

          <div className="space-y-6">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: Math.min(idx, 3) * 0.1 }}
                className="relative flex flex-col gap-6 md:flex-row md:gap-10"
              >
                <span className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#0B0B0B]/15 bg-[#F4F0E8] font-playfair text-lg font-medium text-[#0B0B0B]">
                  {phase.number}
                </span>

                <div className="flex-1 bg-white p-8 md:p-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8A6A24]">
                    {PHASE_LABELS[idx] ?? `Etapa ${phase.number}`}
                  </span>

                  <h3 className="mt-3 font-playfair text-2xl font-medium text-[#0B0B0B] md:text-3xl">
                    {phase.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-[#0B0B0B]/65">
                    {phase.objective}
                  </p>

                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2 sm:gap-x-8">
                    {phase.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-3 text-[14px] leading-snug text-[#0B0B0B]/75"
                      >
                        <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#8A6A24]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-7 border-t border-[#0B0B0B]/10 pt-6 font-playfair text-[15px] italic leading-relaxed text-[#0B0B0B]/70 md:text-base">
                    {phase.expectedResult}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
