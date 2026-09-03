"use client";

import { motion } from "framer-motion";
import type { ProposalBeforeAfter } from "@/lib/proposals-data";
import { VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow } from "./vinicola-ui";

interface Props {
  beforeAfter: ProposalBeforeAfter;
}

export function ProposalVinicolaProof({ beforeAfter }: Props) {
  return (
    <section id="prova" className="scroll-mt-[68px] relative overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="A prova"
          title="Quem provou a tese não fomos nós."
          italic="Foi a própria Santa Augusta."
          lead="Numa manhã de quinta-feira, a marca publicou um Reels com uma pessoa falando na câmera e uma pergunta no final. O resultado, em três horas, contra semanas de posts estáticos com a mesma audiência:"
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Antes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="border border-[#CCCCCC]/10 bg-[#121110]/60 p-8 md:p-10"
          >
            <VinicolaEyebrow>Formato atual</VinicolaEyebrow>
            <h3 className="mt-4 font-playfair text-xl font-medium text-[#CCCCCC]/60 md:text-2xl">
              {beforeAfter.beforeTitle}
            </h3>

            <ul className="mt-8 space-y-4">
              {beforeAfter.beforeItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-[#CCCCCC]/45"
                >
                  <span className="mt-[9px] h-[3px] w-[3px] flex-shrink-0 bg-[#CCCCCC]/30" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Depois */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative border-2 border-[#CA8B35]/45 bg-[#121110] p-8 md:p-10"
          >
            <div className="pointer-events-none absolute left-0 top-0">
              <div className="h-[2px] w-7 bg-[#CA8B35]" />
              <div className="h-7 w-[2px] bg-[#CA8B35]" />
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 flex flex-col items-end">
              <div className="ml-auto h-7 w-[2px] bg-[#CA8B35]" />
              <div className="h-[2px] w-7 bg-[#CA8B35]" />
            </div>

            <VinicolaEyebrow>Formato que funciona</VinicolaEyebrow>
            <h3 className="mt-4 font-playfair text-xl font-medium text-white md:text-2xl">
              {beforeAfter.afterTitle}
            </h3>

            <ul className="mt-8 space-y-4">
              {beforeAfter.afterItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-[#CCCCCC]/85"
                >
                  <span className="mt-[7px] h-[5px] w-[5px] flex-shrink-0 rotate-45 bg-[#CA8B35]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {beforeAfter.expectedResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 border border-[#CA8B35]/20 bg-[#CA8B35]/[0.05] p-10 text-center md:p-14"
          >
            <p className="mx-auto max-w-3xl font-playfair text-xl font-medium italic leading-relaxed text-white md:text-2xl">
              {beforeAfter.expectedResults}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
