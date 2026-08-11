"use client";

import { motion } from "framer-motion";
import type { ProposalCompany } from "@/lib/proposals-data";
import { Info } from "lucide-react";
import { ACCENT, CampoDivider, CampoSectionHeader, CampoCompanyBadge } from "./campo-ui";

interface Props {
  companies: ProposalCompany[];
}

const RECURRENCE_SUFFIX: Record<string, string> = {
  project: "",
  monthly: "/mês",
  session: "/captação",
};

/** "R$ 1.290" → 1290 */
function parseBRL(value: string): number {
  return Number(value.replace(/\D/g, ""));
}

/** 4860 → "R$ 4.860" — determinístico, sem toLocaleString (evita hydration mismatch). */
function formatBRL(value: number): string {
  return `R$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

export function ProposalCampoInvestment({ companies }: Props) {
  return (
    <section className="relative bg-[#F2EEE3] text-[#0A0A09] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" onLight />

      <div className="container mx-auto px-4 max-w-6xl">
        <CampoSectionHeader
          onLight
          eyebrow="Investimento por empresa"
          title="Os valores de cada uma,"
          italic="lado a lado"
          lead="Assim fica transparente o que cada empresa contrataria isoladamente — e, na sequência, o que muda quando as duas caminham juntas."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {companies.map((company, idx) => {
            const a = ACCENT[company.accent];

            const setupTotal = company.pricing
              .filter((row) => row.type === "project")
              .reduce((sum, row) => sum + parseBRL(row.value), 0);

            const monthlyTotal = company.pricing
              .filter((row) => row.type === "monthly")
              .reduce((sum, row) => sum + parseBRL(row.value), 0);

            return (
              <motion.div
                key={company.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white p-8 md:p-10 flex flex-col"
              >
                <CampoCompanyBadge
                  onLight
                  name={company.name}
                  handle={company.handle}
                  accent={company.accent}
                  icon={company.icon}
                />

                <div className={`h-[1px] w-full my-8 ${a.ruleLight}`} />

                {/* Linhas de preço */}
                <div className="space-y-0 mb-8">
                  {company.pricing.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="flex items-baseline justify-between gap-4 py-3.5 border-b border-[#0A0A09]/[0.08]"
                    >
                      <span className="text-sm text-[#0A0A09]/65 font-inter">
                        {row.item}
                      </span>
                      <span className="text-sm font-semibold text-[#0A0A09] font-inter whitespace-nowrap">
                        {row.value}
                        <span className="text-[#0A0A09]/40 font-normal">
                          {RECURRENCE_SUFFIX[row.type]}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Subtotais */}
                <div className="mt-auto grid grid-cols-2 gap-3">
                  <div className={`p-5 border ${a.borderLight} ${a.bgSoftLight}`}>
                    <p className="text-[11px] md:text-[10px] tracking-[0.08em] md:tracking-[0.25em] uppercase font-inter text-[#0A0A09]/45 mb-2">
                      Implantação
                    </p>
                    <p
                      className={`font-playfair text-2xl font-medium ${a.textLight}`}
                    >
                      {formatBRL(setupTotal)}
                    </p>
                  </div>
                  <div className={`p-5 border ${a.borderLight} ${a.bgSoftLight}`}>
                    <p className="text-[11px] md:text-[10px] tracking-[0.08em] md:tracking-[0.25em] uppercase font-inter text-[#0A0A09]/45 mb-2">
                      Recorrente
                    </p>
                    <p
                      className={`font-playfair text-2xl font-medium ${a.textLight}`}
                    >
                      {formatBRL(monthlyTotal)}
                      <span className="text-sm font-inter font-normal text-[#0A0A09]/40">
                        /mês
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Justificativa da diferença de preço */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex items-start gap-4 bg-white border-l-2 border-[#8A6A24]/45 p-7 md:p-8"
        >
          <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#8A6A24]" />
          <p className="text-sm md:text-base text-[#0A0A09]/70 font-inter font-light leading-relaxed">
            A diferença na gestão mensal acontece porque a{" "}
            <strong className="font-semibold text-[#0A0A09]">
              UDK possui potencial e necessidade de uma produção de conteúdo mais
              intensa
            </strong>
            , principalmente pela quantidade de temas técnicos e pela própria
            rotina de campo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
