"use client";

import { motion } from "framer-motion";
import type { ProposalCompany } from "@/lib/proposals-data";
import { CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { ACCENT, CampoDivider, CampoSectionHeader, CampoCompanyBadge } from "./campo-ui";

interface Props {
  companies: ProposalCompany[];
}

export function ProposalCampoDiagnosis({ companies }: Props) {
  return (
    <section className="relative bg-[#F2EEE3] text-[#0A0A09] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" onLight />

      <div className="container mx-auto px-4 max-w-6xl">
        <CampoSectionHeader
          onLight
          eyebrow="Diagnóstico"
          title="Duas empresas,"
          italic="dois pontos de partida"
          lead="Antes de propor qualquer coisa, olhamos o que já existe. O que segue é o retrato honesto de cada marca no ambiente digital hoje — e onde está a oportunidade de cada uma."
        />

        <div className="space-y-16">
          {companies.map((company) => {
            const a = ACCENT[company.accent];

            return (
              <motion.div
                key={company.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className={`border-t pt-10 ${a.borderLight}`}
              >
                {/* Identidade */}
                <div className="mb-10">
                  <CampoCompanyBadge
                    onLight
                    name={company.name}
                    handle={company.handle}
                    tagline={company.tagline}
                    accent={company.accent}
                    icon={company.icon}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-start">
                  {/* Pontos positivos */}
                  <div className="bg-white p-8 md:p-10 h-full">
                    <div className="flex items-center gap-2 mb-6">
                      <CheckCircle2 className={`w-4 h-4 ${a.textLight}`} />
                      <span
                        className={`text-[10px] tracking-[0.3em] uppercase font-semibold font-inter ${a.textLight}`}
                      >
                        Pontos positivos
                      </span>
                    </div>
                    <ul className="space-y-4">
                      {company.diagnosis.positives.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span
                            className={`text-[10px] font-inter font-semibold tabular-nums pt-1 flex-shrink-0 ${a.textLight} opacity-50`}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-[#0A0A09]/70 font-inter leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pontos de atenção */}
                  <div className="bg-[#0A0A09] p-8 md:p-10 h-full">
                    <div className="flex items-center gap-2 mb-6">
                      <AlertCircle className={`w-4 h-4 ${a.text}`} />
                      <span
                        className={`text-[10px] tracking-[0.3em] uppercase font-semibold font-inter ${a.text}`}
                      >
                        Pontos de atenção
                      </span>
                    </div>

                    <p className="text-sm text-[#EFEBE0]/60 font-inter font-light leading-relaxed mb-6">
                      {company.diagnosis.attentionIntro}
                    </p>

                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#EFEBE0]/30 font-inter mb-4">
                      Oportunidades identificadas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {company.diagnosis.attentionPoints.map((gap, idx) => (
                        <span
                          key={idx}
                          className={`text-[11px] font-inter px-3 py-1.5 border text-[#EFEBE0]/65 ${a.border} ${a.bgSoft}`}
                        >
                          {gap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Oportunidade */}
                <div
                  className={`mt-8 p-8 md:p-12 relative border ${a.borderLight} ${a.bgSoftLight}`}
                >
                  <div className="absolute top-0 left-0 pointer-events-none">
                    <div className={`w-6 h-[2px] ${a.solidLight}`} />
                    <div className={`w-[2px] h-6 ${a.solidLight}`} />
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className={`w-4 h-4 ${a.textLight}`} />
                    <span
                      className={`text-[10px] tracking-[0.3em] uppercase font-semibold font-inter ${a.textLight}`}
                    >
                      A oportunidade da {company.shortName}
                    </span>
                  </div>
                  <p className="font-playfair text-lg md:text-2xl font-medium text-[#0A0A09]/85 leading-relaxed">
                    {company.diagnosis.opportunity}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
