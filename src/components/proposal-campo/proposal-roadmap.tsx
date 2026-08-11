"use client";

import { motion } from "framer-motion";
import type { ProposalPhase } from "@/lib/proposals-data";
import { Flag } from "lucide-react";
import { CampoDivider, CampoSectionHeader } from "./campo-ui";

interface Props {
  phases: ProposalPhase[];
}

/**
 * As 4 etapas caminham de verde (Massaneiro) para dourado (UDK): na
 * Consolidação, as duas marcas já operam como um ecossistema só.
 * Classes literais — o JIT não gera interpolação.
 */
const PHASE_TONES = [
  { text: "text-[#6E8F5E]", border: "border-[#6E8F5E]/30", solid: "bg-[#6E8F5E]" },
  { text: "text-[#8F9A5A]", border: "border-[#8F9A5A]/30", solid: "bg-[#8F9A5A]" },
  { text: "text-[#B09E58]", border: "border-[#B09E58]/30", solid: "bg-[#B09E58]" },
  { text: "text-[#CBA65C]", border: "border-[#CBA65C]/30", solid: "bg-[#CBA65C]" },
] as const;

export function ProposalCampoRoadmap({ phases }: Props) {
  return (
    <section className="relative bg-[#0A0A09] text-[#EFEBE0] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <CampoSectionHeader
          eyebrow="Plano de implantação"
          title="Quatro etapas até"
          italic="o ecossistema completo"
          lead="Cada etapa entrega algo concreto e prepara a seguinte. Nada fica esperando o projeto inteiro terminar para gerar valor."
        />

        {/* Trilho com gradiente verde → dourado */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[42px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#6E8F5E] via-[#B09E58] to-[#CBA65C] opacity-40" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {phases.map((phase, idx) => {
              const tone = PHASE_TONES[idx] ?? PHASE_TONES[PHASE_TONES.length - 1];

              return (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: Math.min(idx, 4) * 0.1 }}
                  className="relative flex flex-col"
                >
                  {/* Marcador no trilho */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-[84px] h-[84px] flex items-center justify-center border bg-[#0A0A09] relative z-10 ${tone.border}`}
                    >
                      <span
                        className={`font-playfair text-3xl font-medium ${tone.text}`}
                      >
                        {String(phase.number).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#151614] border border-[#EFEBE0]/[0.07] p-7 flex flex-col flex-1">
                    <div className={`w-8 h-[2px] mb-4 ${tone.solid}`} />

                    <h3 className="font-playfair text-xl font-medium text-[#EFEBE0] mb-3 leading-tight">
                      {phase.title}
                    </h3>

                    <p className="text-sm text-[#EFEBE0]/50 font-inter font-light leading-relaxed mb-6">
                      {phase.objective}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {phase.deliverables.map((deliverable, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2.5 text-[13px] text-[#EFEBE0]/65 font-inter leading-snug"
                        >
                          <span
                            className={`flex-shrink-0 leading-5 opacity-60 ${tone.text}`}
                          >
                            ◆
                          </span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5 border-t border-[#EFEBE0]/[0.07]">
                      <span className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-semibold font-inter text-[#EFEBE0]/30 mb-2">
                        <Flag className="w-3 h-3" />
                        Resultado
                      </span>
                      <p className="text-[13px] italic text-[#EFEBE0]/55 font-inter leading-relaxed">
                        {phase.expectedResult}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
