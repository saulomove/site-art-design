"use client";

import { motion } from "framer-motion";
import type { ProposalCompany } from "@/lib/proposals-data";
import { Instagram, LayoutGrid } from "lucide-react";
import { ACCENT, CampoDivider, CampoSectionHeader, CampoCompanyBadge } from "./campo-ui";

interface Props {
  companies: ProposalCompany[];
}

export function ProposalCampoSocial({ companies }: Props) {
  return (
    <section className="relative bg-[#F2EEE3] text-[#0A0A09] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" onLight />

      <div className="container mx-auto px-4 max-w-6xl">
        <CampoSectionHeader
          onLight
          eyebrow="Instagram"
          title="Mesmo método,"
          italic="intensidades diferentes"
          lead="O Instagram será usado como ferramenta de posicionamento e apresentação institucional. O que muda entre as duas empresas não é a estrutura do trabalho — é o foco do conteúdo e o ritmo de publicação."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {companies.map((company, idx) => {
            const a = ACCENT[company.accent];

            return (
              <motion.div
                key={company.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white p-8 md:p-10 flex flex-col h-full"
              >
                <CampoCompanyBadge
                  onLight
                  name={company.name}
                  handle={company.handle}
                  accent={company.accent}
                  icon={company.icon}
                />

                <div className={`h-[1px] w-full my-8 ${a.ruleLight}`} />

                {/* Abordagem */}
                <p className="font-playfair text-lg md:text-xl italic font-medium text-[#0A0A09]/80 leading-relaxed mb-8">
                  {company.socialApproach}
                </p>

                {/* Prioridades de conteúdo */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Instagram className={`w-4 h-4 ${a.textLight}`} />
                    <span
                      className={`text-[11px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-semibold font-inter ${a.textLight}`}
                    >
                      Prioridades de conteúdo
                    </span>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {company.socialPriorities.map((topic, topicIdx) => (
                      <li
                        key={topicIdx}
                        className="flex items-start gap-2.5 text-sm text-[#0A0A09]/70 font-inter"
                      >
                        <span
                          className={`flex-shrink-0 leading-5 opacity-60 ${a.textLight}`}
                        >
                          ◆
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Destaques do perfil */}
                <div className="mt-auto pt-8 border-t border-[#0A0A09]/10">
                  <div className="flex items-center gap-2 mb-4">
                    <LayoutGrid className={`w-4 h-4 ${a.textLight}`} />
                    <span
                      className={`text-[11px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-semibold font-inter ${a.textLight}`}
                    >
                      Destaques do perfil
                    </span>
                  </div>
                  <p className="text-sm text-[#0A0A09]/55 font-inter font-light leading-relaxed mb-5">
                    Organizados para que qualquer pessoa entenda a empresa sem
                    precisar navegar o feed inteiro.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {company.profileHighlights.map((highlight, hIdx) => (
                      <span
                        key={hIdx}
                        className={`text-[11px] font-inter font-medium rounded-full border px-4 py-2 ${a.borderStrongLight} ${a.textLight} ${a.bgSoftLight}`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
