"use client";

import { motion } from "framer-motion";
import type { ProposalPhase } from "@/lib/proposals-data";
import { Flag, Rocket } from "lucide-react";
import { AciavSectionHeader } from "./aciav-ui";

interface Props {
  phases: ProposalPhase[];
}

export function ProposalAciavTimeline({ phases }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#08494a] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08494a] via-[#0d6b6b] to-[#08494a]" />
        <div className="absolute right-0 top-1/3 h-[50%] w-[45%] rounded-full bg-[#1c9b96]/20 blur-[130px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <AciavSectionHeader
          onDark
          eyebrow="Implantação"
          title="Da assinatura ao go-live em"
          highlight="7 dias úteis"
          lead="Não há desenvolvimento no caminho. O trabalho é de configuração, carga de dados e treinamento — por isso o prazo é de dias, não de meses."
        />

        <div className="relative">
          {/* Trilho */}
          <div className="pointer-events-none absolute left-[27px] top-4 bottom-4 hidden w-[2px] bg-gradient-to-b from-[#1c9b96] via-[#1c9b96]/40 to-[#e85d1f] md:block" />

          <div className="space-y-5">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: Math.min(idx, 4) * 0.08 }}
                className="relative flex flex-col gap-5 md:flex-row md:gap-8"
              >
                {/* Marcador */}
                <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-[#0d6b6b] shadow-[0_12px_30px_-12px_rgba(0,0,0,.5)]">
                  {String(phase.number).padStart(2, "0")}
                </span>

                <div className="flex-1 rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 backdrop-blur-sm md:p-8">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                    {phase.objective}
                  </p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:gap-x-8">
                    {phase.deliverables.map((deliverable, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-sm leading-snug text-white/75"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2ee8a4]" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-start gap-2.5 border-t border-white/10 pt-5">
                    <Flag className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#e85d1f]" />
                    <p className="text-sm leading-relaxed text-white/60">
                      {phase.expectedResult}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marco final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 flex flex-col items-center gap-4 rounded-3xl bg-[#e85d1f] p-8 text-center md:flex-row md:justify-center md:gap-6 md:p-9 md:text-left"
        >
          <Rocket className="h-8 w-8 flex-shrink-0 text-white" />
          <p className="text-lg font-bold leading-snug text-white md:text-2xl">
            Convênio no ar em Caçador, com as equipes treinadas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
