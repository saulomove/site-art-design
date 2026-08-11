"use client";

import { motion } from "framer-motion";
import { Rocket, Plus } from "lucide-react";
import { CampoDivider, CampoSectionHeader } from "./campo-ui";

interface Props {
  optionalServices: string[];
}

export function ProposalCampoFuture({ optionalServices }: Props) {
  return (
    <section className="relative bg-[#0A0A09] text-[#EFEBE0] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" />

      <div className="absolute top-0 right-1/4 w-[40%] h-[45%] bg-[#6E8F5E]/[0.05] blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <CampoSectionHeader
          eyebrow="O que mais podemos entregar"
          title="Um parceiro capaz de acompanhar"
          italic="o crescimento das empresas"
          lead="Mesmo que nem todas essas soluções sejam necessárias neste primeiro momento, queremos que Massaneiro e UDK saibam o que está disponível quando fizer sentido."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-14"
        >
          {optionalServices.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-[#151614] border border-[#EFEBE0]/[0.07] px-5 py-4"
            >
              <Plus className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#CBA65C]/70" />
              <span className="text-sm text-[#EFEBE0]/70 font-inter leading-relaxed">
                {service}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Ressalva de prioridade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="border border-[#6E8F5E]/25 bg-[#6E8F5E]/[0.06] p-10 md:p-12 text-center relative"
        >
          <div className="absolute top-0 left-0 pointer-events-none">
            <div className="w-6 h-[2px] bg-[#6E8F5E]" />
            <div className="w-[2px] h-6 bg-[#6E8F5E]" />
          </div>

          <Rocket className="w-6 h-6 mx-auto mb-5 text-[#6E8F5E]" />
          <p className="font-playfair text-xl md:text-2xl font-medium italic text-[#EFEBE0]/85 max-w-2xl mx-auto leading-relaxed">
            Neste momento, porém, não enxergamos necessidade de colocar a
            aquisição de clientes como prioridade. Primeiro construiremos
            presença e autoridade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
