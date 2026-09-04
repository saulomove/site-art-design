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
} from "../proposal-vinicola/vinicola-ui";

interface Props {
  stats?: { value: string; label: string; subtext?: string }[];
  findings?: ProposalAuditFinding[];
}

export function ProposalGenyusPlanilha({ stats, findings }: Props) {
  return (
    <section
      id="planilha"
      className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32"
    >
      <VinicolaDivider />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="O que as planilhas revelam"
          title="Lemos as duas planilhas"
          italic="linha por linha"
          lead="Tudo abaixo foi apurado nos arquivos que a Fran enviou — a tabela de safra com 75 recebimentos de 14 produtores, e o controle de produção que ela vem montando. Não há estimativa aqui."
        />

        {stats && stats.length > 0 && (
          <div className="mb-20 grid gap-px overflow-hidden border border-[#CA8B35]/15 bg-[#CA8B35]/15 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: Math.min(idx, 4) * 0.08 }}
                className="bg-[#0B0B0B] p-8 md:p-9"
              >
                <p className="font-playfair text-4xl font-medium text-[#CA8B35] md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-4 text-sm font-semibold leading-snug text-white">
                  {s.label}
                </p>
                {s.subtext && (
                  <p className="mt-3 text-[13px] leading-relaxed text-[#CCCCCC]/50">
                    {s.subtext}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {findings && findings.length > 0 && (
          <div className="space-y-5">
            {findings.map((f, idx) => {
              const tone = SEVERITY[f.severity as SeverityKey];
              return (
                <motion.article
                  key={f.ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: Math.min(idx, 5) * 0.05 }}
                  className={`border-l-2 bg-[#121110] p-8 md:p-10 ${tone.edge}`}
                >
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span
                      className={`px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] ${tone.bg} ${tone.text}`}
                    >
                      {f.ref} · {tone.label.toUpperCase()}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#CCCCCC]/35">
                      {f.area}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl font-medium leading-snug text-white md:text-2xl">
                    {f.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-[#CCCCCC]/65">
                    {f.description}
                  </p>

                  {f.evidence && f.evidence.length > 0 && (
                    <VinicolaEvidence lines={f.evidence} />
                  )}

                  {f.impact && (
                    <div className="mt-6 flex items-start gap-3 border-t border-[#CCCCCC]/10 pt-5">
                      <AlertTriangle
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tone.text}`}
                      />
                      <p className="text-[15px] font-medium leading-relaxed text-white/85">
                        {f.impact}
                      </p>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
