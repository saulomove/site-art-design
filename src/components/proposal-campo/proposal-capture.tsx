"use client";

import { motion } from "framer-motion";
import type { ProposalCompany } from "@/lib/proposals-data";
import {
  Plane,
  Instagram,
  Facebook,
  MapPin,
  Globe,
  Video,
  Film,
  Presentation,
} from "lucide-react";
import { ACCENT, CampoDivider, CampoSectionHeader, CAMPO_ICONS, CAMPO_ICON_FALLBACK } from "./campo-ui";

interface Props {
  companies: ProposalCompany[];
}

/** Uma captação alimenta sete destinos — o argumento de reaproveitamento. */
const OUTPUTS = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "Google", icon: MapPin },
  { label: "Site", icon: Globe },
  { label: "Reels", icon: Video },
  { label: "Vídeos institucionais", icon: Film },
  { label: "Apresentações", icon: Presentation },
] as const;

export function ProposalCampoCapture({ companies }: Props) {
  return (
    <section className="relative bg-[#0A0A09] text-[#EFEBE0] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" />

      <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-[#CBA65C]/[0.05] blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <CampoSectionHeader
          eyebrow="Captação com drone"
          title="Mostrar a"
          italic="dimensão real das empresas"
          lead="O drone produz imagens que dificilmente seriam obtidas de outra maneira — e revela o tamanho da operação de um jeito que nenhuma foto no chão consegue."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 items-start">
          {companies.map((company, idx) => {
            const a = ACCENT[company.accent];
            const Icon = CAMPO_ICONS[company.icon] ?? CAMPO_ICON_FALLBACK;

            return (
              <motion.div
                key={company.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`bg-[#151614] border p-8 md:p-10 ${a.border}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className={`w-5 h-5 ${a.text}`} />
                  <span
                    className={`text-[10px] tracking-[0.3em] uppercase font-semibold font-inter ${a.text}`}
                  >
                    {company.shortName}
                  </span>
                </div>

                <p className="text-sm text-[#EFEBE0]/45 font-inter font-light mb-6">
                  O que podemos mostrar do alto:
                </p>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {company.droneShots.map((shot, shotIdx) => (
                    <li
                      key={shotIdx}
                      className="flex items-start gap-2.5 text-sm text-[#EFEBE0]/70 font-inter"
                    >
                      <span
                        className={`flex-shrink-0 leading-5 opacity-60 ${a.text}`}
                      >
                        ◆
                      </span>
                      <span>{shot}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Uma captação → vários canais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#151614] border border-[#EFEBE0]/10 p-10 md:p-14 relative"
        >
          <div className="absolute top-0 left-0 pointer-events-none">
            <div className="w-6 h-[2px] bg-[#6E8F5E]" />
            <div className="w-[2px] h-6 bg-[#6E8F5E]" />
          </div>
          <div className="absolute top-0 right-0 pointer-events-none flex flex-col items-end">
            <div className="w-6 h-[2px] bg-[#CBA65C]" />
            <div className="w-[2px] h-6 bg-[#CBA65C] ml-auto" />
          </div>

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#EFEBE0]/15 mb-5">
              <Plane className="w-4 h-4 text-[#EFEBE0]/60" />
              <span className="font-playfair text-lg font-medium text-[#EFEBE0]">
                1 captação
              </span>
            </div>
            <p className="font-playfair text-xl md:text-2xl font-medium italic text-[#EFEBE0]/80 max-w-2xl mx-auto leading-relaxed">
              Uma única ida a campo gera ativos para todos os canais das duas
              empresas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {OUTPUTS.map((output) => {
              const OutputIcon = output.icon;
              return (
                <div
                  key={output.label}
                  className="flex flex-col items-center gap-2.5 border border-[#EFEBE0]/[0.08] bg-[#0A0A09] px-3 py-5 text-center"
                >
                  <OutputIcon className="w-4 h-4 text-[#EFEBE0]/45" />
                  <span className="text-[11px] font-inter text-[#EFEBE0]/60 leading-tight">
                    {output.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
