"use client";

import { motion } from "framer-motion";
import type { ProposalCompany } from "@/lib/proposals-data";
import { Globe } from "lucide-react";
import { ACCENT, CampoDivider, CampoSectionHeader, CampoCompanyBadge } from "./campo-ui";

interface Props {
  companies: ProposalCompany[];
}

export function ProposalCampoSites({ companies }: Props) {
  return (
    <section className="relative bg-[#0A0A09] text-[#EFEBE0] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" />

      <div className="absolute top-1/4 right-0 w-[40%] h-[50%] bg-[#6E8F5E]/[0.05] blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <CampoSectionHeader
          eyebrow="Site institucional"
          title="As redes apresentam. O Google encontra."
          italic="O site consolida a autoridade."
          lead="Dois sites institucionais modernos, rápidos e responsivos — cada um com a estrutura que faz sentido para o negócio que representa."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {companies.map((company, idx) => {
            const a = ACCENT[company.accent];

            return (
              <motion.div
                key={company.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <CampoCompanyBadge
                  name={company.name}
                  handle={company.handle}
                  accent={company.accent}
                  icon={company.icon}
                />

                {/* Sitemap — trilha vertical numerada */}
                <div className="relative mt-8 pl-8">
                  <div
                    className={`absolute left-[15px] top-3 bottom-3 w-[1px] ${a.rule}`}
                  />

                  <ul className="space-y-2.5">
                    {company.siteStructure.map((page, pageIdx) => (
                      <li key={pageIdx} className="relative flex items-center gap-4">
                        <span className="absolute -left-8 w-[31px] flex items-center justify-center">
                          <span
                            className={`w-2 h-2 rotate-45 ${a.solid} opacity-70`}
                          />
                        </span>
                        <div
                          className={`flex-1 flex items-center gap-3 bg-[#151614] border px-5 py-3 ${a.border}`}
                        >
                          <span
                            className={`font-inter text-[10px] font-semibold tabular-nums tracking-widest ${a.text} opacity-60`}
                          >
                            {String(pageIdx + 1).padStart(2, "0")}
                          </span>
                          <span className="font-inter text-sm text-[#EFEBE0]/80">
                            {page}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Propósito do site */}
                <div className={`mt-8 p-7 md:p-8 border ${a.border} ${a.bgSoft}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className={`w-4 h-4 ${a.text}`} />
                    <span
                      className={`text-[10px] tracking-[0.3em] uppercase font-semibold font-inter ${a.text}`}
                    >
                      Papel do site
                    </span>
                  </div>
                  <p className="font-playfair text-base md:text-lg italic text-[#EFEBE0]/80 leading-relaxed">
                    {company.siteNote}
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
