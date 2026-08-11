"use client";

import { motion } from "framer-motion";
import type { ProposalObjectiveChain } from "@/lib/proposals-data";
import { ChevronRight } from "lucide-react";
import { CampoDivider, CampoSectionHeader } from "./campo-ui";

interface Props {
  objectiveChain: ProposalObjectiveChain;
}

/**
 * Os 5 elos interpolam verde (Massaneiro) → dourado (UDK): é o momento em que
 * as duas identidades se fundem numa estratégia só. Classes literais — nunca
 * interpoladas — para o JIT do Tailwind gerar todas.
 */
const CHAIN_TONES = [
  { text: "text-[#6E8F5E]", border: "border-[#6E8F5E]/35", bg: "bg-[#6E8F5E]/[0.07]" },
  { text: "text-[#85955A]", border: "border-[#85955A]/35", bg: "bg-[#85955A]/[0.07]" },
  { text: "text-[#9C9B57]", border: "border-[#9C9B57]/35", bg: "bg-[#9C9B57]/[0.07]" },
  { text: "text-[#B4A159]", border: "border-[#B4A159]/35", bg: "bg-[#B4A159]/[0.07]" },
  { text: "text-[#CBA65C]", border: "border-[#CBA65C]/35", bg: "bg-[#CBA65C]/[0.07]" },
] as const;

export function ProposalCampoObjective({ objectiveChain }: Props) {
  return (
    <section className="relative bg-[#0A0A09] text-[#EFEBE0] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-gradient-to-r from-[#6E8F5E]/[0.06] to-[#CBA65C]/[0.06] blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <CampoSectionHeader
          eyebrow="Objetivo do projeto"
          title="Não redes sociais por redes sociais —"
          italic="um ecossistema digital institucional"
          lead={objectiveChain.intro}
        />

        {/* Cadeia de 5 elos */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3 mb-14"
        >
          {objectiveChain.chain.map((link, idx) => {
            const tone = CHAIN_TONES[idx] ?? CHAIN_TONES[CHAIN_TONES.length - 1];
            const isLast = idx === objectiveChain.chain.length - 1;

            return (
              <div key={link} className="relative flex md:block items-center gap-4">
                <div
                  className={`flex-1 md:flex-none border p-6 md:p-7 h-full flex flex-col justify-center min-h-[7rem] ${tone.border} ${tone.bg}`}
                >
                  <span
                    className={`font-inter text-[10px] font-semibold tracking-[0.3em] tabular-nums mb-3 ${tone.text}`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-playfair text-lg md:text-xl font-medium text-[#EFEBE0] leading-tight">
                    {link}
                  </span>
                </div>

                {/* Conector */}
                {!isLast && (
                  <>
                    <ChevronRight
                      className={`md:hidden w-5 h-5 flex-shrink-0 rotate-90 ${tone.text} opacity-50`}
                    />
                    <ChevronRight
                      className={`hidden md:block absolute top-1/2 -right-[13px] -translate-y-1/2 w-5 h-5 z-10 ${tone.text} opacity-60`}
                    />
                  </>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Conclusão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-[#151614] border border-[#EFEBE0]/10 p-10 md:p-14 max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute top-0 left-0 pointer-events-none">
            <div className="w-6 h-[2px] bg-[#6E8F5E]" />
            <div className="w-[2px] h-6 bg-[#6E8F5E]" />
          </div>
          <div className="absolute bottom-0 right-0 pointer-events-none flex flex-col items-end justify-end">
            <div className="w-[2px] h-6 bg-[#CBA65C] ml-auto" />
            <div className="w-6 h-[2px] bg-[#CBA65C]" />
          </div>

          <p className="font-playfair text-xl md:text-2xl font-medium italic text-[#EFEBE0]/85 leading-relaxed">
            {objectiveChain.conclusion}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
