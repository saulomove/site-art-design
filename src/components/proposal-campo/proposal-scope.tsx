"use client";

import { motion } from "framer-motion";
import type { ProposalService } from "@/lib/proposals-data";
import { CampoDivider, CampoSectionHeader, CAMPO_ICONS, CAMPO_ICON_FALLBACK } from "./campo-ui";

interface Props {
  services: ProposalService[];
}

/** Alterna verde/dourado nos cards: sinaliza "isto vale para as duas empresas". */
const CARD_TONES = [
  { rule: "bg-[#6E8F5E]", icon: "text-[#6E8F5E]", border: "border-[#6E8F5E]/25" },
  { rule: "bg-[#CBA65C]", icon: "text-[#CBA65C]", border: "border-[#CBA65C]/25" },
] as const;

export function ProposalCampoScope({ services }: Props) {
  return (
    <section className="relative bg-[#0A0A09] text-[#EFEBE0] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55%] h-[40%] bg-[#CBA65C]/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <CampoSectionHeader
          eyebrow="Escopo do trabalho"
          title="Tudo que será estruturado"
          italic="nas duas empresas"
          lead="Cada frente abaixo é executada para a Massaneiro e para a UDK. O que muda entre elas é o foco e a intensidade — não a estrutura."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const tone = CARD_TONES[idx % CARD_TONES.length];
            const Icon = CAMPO_ICONS[service.icon] ?? CAMPO_ICON_FALLBACK;

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: Math.min(idx, 5) * 0.07 }}
                className="bg-[#151614] border border-[#EFEBE0]/[0.08] p-8 md:p-10 flex flex-col hover:border-[#EFEBE0]/20 transition-colors duration-300"
              >
                <div className={`w-10 h-[2px] mb-6 ${tone.rule}`} />

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-11 h-11 flex items-center justify-center flex-shrink-0 border ${tone.border}`}
                  >
                    <Icon className={`w-5 h-5 ${tone.icon}`} />
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-medium text-[#EFEBE0] leading-tight pt-1.5">
                    {service.name}
                  </h3>
                </div>

                <p className="text-sm text-[#EFEBE0]/50 font-inter font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mt-auto">
                  {service.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2.5 text-sm text-[#EFEBE0]/65 font-inter"
                    >
                      <span
                        className={`flex-shrink-0 leading-5 opacity-60 ${tone.icon}`}
                      >
                        ◆
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
