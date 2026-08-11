"use client";

import { motion } from "framer-motion";
import type {
  ProposalCompany,
  ProposalAuthorityPillar,
} from "@/lib/proposals-data";
import { Brain } from "lucide-react";
import { ACCENT, CampoDivider, CampoSectionHeader, CAMPO_ICONS, CAMPO_ICON_FALLBACK } from "./campo-ui";

interface Props {
  companies: ProposalCompany[];
  authorityPillars?: ProposalAuthorityPillar[];
}

export function ProposalCampoAuthority({ companies, authorityPillars }: Props) {
  return (
    <section className="relative bg-[#F2EEE3] text-[#0A0A09] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" onLight />

      <div className="container mx-auto px-4 max-w-6xl">
        <CampoSectionHeader
          onLight
          eyebrow="Produção de conteúdo técnico"
          title="Transformar conhecimento"
          italic="em autoridade"
          lead="Existe uma oportunidade enorme de transformar conhecimento técnico em conteúdo simples e fácil de consumir. Alguns exemplos de pauta que já dariam para produzir:"
        />

        {/* Exemplos de pauta por empresa */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start mb-16">
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
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className={`w-5 h-5 ${a.textLight}`} />
                  <span
                    className={`text-[10px] tracking-[0.3em] uppercase font-semibold font-inter ${a.textLight}`}
                  >
                    {company.shortName}
                  </span>
                </div>

                <div className="space-y-4">
                  {company.contentExamples.map((idea, ideaIdx) => (
                    <div
                      key={ideaIdx}
                      className={`bg-white border-l-2 p-6 md:p-7 ${a.borderStrongLight}`}
                    >
                      <span
                        className={`font-playfair text-4xl leading-none opacity-20 ${a.textLight}`}
                      >
                        &ldquo;
                      </span>
                      <p className="font-playfair text-lg md:text-xl italic font-medium text-[#0A0A09]/80 leading-snug -mt-4">
                        {idea}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#0A0A09] p-10 md:p-12 text-center mb-20"
        >
          <Brain className="w-6 h-6 mx-auto mb-5 text-[#CBA65C]" />
          <p className="font-playfair text-xl md:text-2xl font-medium italic text-[#EFEBE0]/85 max-w-3xl mx-auto leading-relaxed">
            É assim que transformamos o conhecimento que hoje está somente dentro
            das empresas em patrimônio digital das marcas.
          </p>
        </motion.div>

        {/* Os 4 pilares */}
        {authorityPillars && authorityPillars.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-[1px] w-8 bg-[#0A0A09]/25" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-semibold font-inter text-[#0A0A09]/45">
                  Estratégia de autoridade
                </span>
                <div className="h-[1px] w-8 bg-[#0A0A09]/25" />
              </div>
              <h3 className="font-playfair text-2xl md:text-4xl font-medium text-[#0A0A09] leading-tight">
                Quatro pilares que sustentam a comunicação
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {authorityPillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="bg-white p-7 md:p-8 border-t-2 border-[#0A0A09]/15"
                >
                  <span className="font-inter text-[10px] font-semibold tracking-[0.3em] tabular-nums text-[#0A0A09]/35">
                    {pillar.number}
                  </span>
                  <h4 className="font-playfair text-xl font-medium text-[#0A0A09] mt-3 mb-3 leading-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#0A0A09]/60 font-inter font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center font-playfair text-lg md:text-xl italic text-[#0A0A09]/60 max-w-2xl mx-auto mt-12"
            >
              A combinação desses pilares evita um perfil que simplesmente fica
              tentando vender alguma coisa.
            </motion.p>
          </>
        )}
      </div>
    </section>
  );
}
