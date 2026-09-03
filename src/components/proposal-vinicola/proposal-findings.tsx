"use client";

import { motion } from "framer-motion";
import type { ProposalAuditFinding } from "@/lib/proposals-data";
import { AlertTriangle } from "lucide-react";
import {
  VinicolaDivider,
  VinicolaSectionHeader,
  VinicolaEvidence,
  SEVERITY,
  type SeverityKey,
} from "./vinicola-ui";

interface Props {
  findings: ProposalAuditFinding[];
}

export function ProposalVinicolaFindings({ findings }: Props) {
  const criticos = findings.filter((f) => f.severity === "critico");
  const demais = findings.filter((f) => f.severity !== "critico");

  return (
    <section id="achados" className="scroll-mt-[68px] relative overflow-hidden bg-[#F4F0E8] py-24 md:py-32">
      <VinicolaDivider onLight />

      <div className="container mx-auto max-w-5xl px-4">
        <VinicolaSectionHeader
          onLight
          eyebrow="O que está quebrado agora"
          title="Cada achado abaixo pode ser"
          italic="demonstrado ao vivo"
          lead="Não é diagnóstico de percepção. É o resultado de acesso direto a cada URL, com a evidência transcrita. Bastam dois cliques no navegador para confirmar qualquer um deles."
        />

        {/* Críticos */}
        <div className="space-y-6">
          {criticos.map((finding, idx) => {
            const tone = SEVERITY[finding.severity as SeverityKey];

            return (
              <motion.article
                key={finding.ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: Math.min(idx, 5) * 0.06 }}
                className={`border-l-2 bg-white p-8 md:p-10 ${tone.edgeLight}`}
              >
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span
                    className={`px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] ${tone.bgLight} ${tone.textLight}`}
                  >
                    {finding.ref} · {tone.label.toUpperCase()}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#0B0B0B]/40">
                    {finding.area}
                  </span>
                </div>

                <h3 className="font-playfair text-xl font-medium leading-snug text-[#0B0B0B] md:text-2xl">
                  {finding.title}
                </h3>

                <p className="mt-4 text-[15px] leading-relaxed text-[#0B0B0B]/70">
                  {finding.description}
                </p>

                {finding.evidence && finding.evidence.length > 0 && (
                  <VinicolaEvidence onLight lines={finding.evidence} />
                )}

                {finding.impact && (
                  <div className="mt-6 flex items-start gap-3 border-t border-[#0B0B0B]/10 pt-5">
                    <AlertTriangle
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tone.textLight}`}
                    />
                    <p className="text-[15px] font-medium leading-relaxed text-[#0B0B0B]/80">
                      {finding.impact}
                    </p>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Atenção e demais */}
        {demais.length > 0 && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mb-6 mt-16 text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-[#0B0B0B]/40"
            >
              Pontos de atenção
            </motion.p>

            <div className="grid gap-5 md:grid-cols-2">
              {demais.map((finding, idx) => {
                const tone = SEVERITY[finding.severity as SeverityKey];

                return (
                  <motion.article
                    key={finding.ref}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: Math.min(idx, 4) * 0.06 }}
                    className="flex flex-col bg-white p-7 md:p-8"
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-2.5">
                      <span
                        className={`px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] ${tone.bgLight} ${tone.textLight}`}
                      >
                        {finding.ref}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#0B0B0B]/40">
                        {finding.area}
                      </span>
                    </div>

                    <h3 className="font-playfair text-lg font-medium leading-snug text-[#0B0B0B]">
                      {finding.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-[#0B0B0B]/65">
                      {finding.description}
                    </p>

                    {finding.evidence && finding.evidence.length > 0 && (
                      <VinicolaEvidence onLight lines={finding.evidence} />
                    )}

                    {finding.impact && (
                      <p className="mt-auto pt-5 text-[14px] font-medium leading-relaxed text-[#0B0B0B]/75">
                        {finding.impact}
                      </p>
                    )}
                  </motion.article>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
