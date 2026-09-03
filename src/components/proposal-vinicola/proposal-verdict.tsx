"use client";

import { motion } from "framer-motion";
import type { ProposalScoreItem } from "@/lib/proposals-data";
import { VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow } from "./vinicola-ui";

interface Props {
  stats?: { value: string; label: string; subtext?: string }[];
  auditScores?: ProposalScoreItem[];
}

/** Faixa de cor por nota. Classes literais — o JIT não gera interpolação. */
function toneFor(score: number) {
  if (score < 3) return { bar: "bg-[#B5342B]", text: "text-[#D4574D]" };
  if (score < 5) return { bar: "bg-[#CA8B35]", text: "text-[#CA8B35]" };
  return { bar: "bg-[#4F7A63]", text: "text-[#6D9B83]" };
}

export function ProposalVinicolaVerdict({ stats, auditScores }: Props) {
  const media =
    auditScores && auditScores.length > 0
      ? auditScores.reduce((sum, s) => sum + s.score, 0) / auditScores.length
      : null;

  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="Veredito em números"
          title="O problema não é marca, produto"
          italic="nem audiência"
          lead="É abandono de infraestrutura. Tudo abaixo foi verificado por acesso direto às páginas públicas da marca, e reconferido no dia em que esta proposta foi montada."
        />

        {/* Números */}
        {stats && stats.length > 0 && (
          <div className="mb-20 grid gap-px overflow-hidden border border-[#CA8B35]/15 bg-[#CA8B35]/15 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: Math.min(idx, 4) * 0.08 }}
                className="bg-[#0B0B0B] p-8 md:p-9"
              >
                <p className="font-playfair text-5xl font-medium text-[#CA8B35] md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm font-semibold leading-snug text-white">
                  {stat.label}
                </p>
                {stat.subtext && (
                  <p className="mt-3 text-[13px] leading-relaxed text-[#CCCCCC]/50">
                    {stat.subtext}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Termômetro */}
        {auditScores && auditScores.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="border border-[#CCCCCC]/10 bg-[#121110] p-8 md:p-12"
          >
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <VinicolaEyebrow>Termômetro por frente</VinicolaEyebrow>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#CCCCCC]/55">
                  Nota de 0 a 10 atribuída por inspeção direta das
                  propriedades, sem acesso a dados internos de venda.
                </p>
              </div>
              {media !== null && (
                <div className="flex items-baseline gap-2 sm:text-right">
                  <span className="font-playfair text-4xl font-medium text-[#CA8B35]">
                    {media.toFixed(1)}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#CCCCCC]/40">
                    média geral
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-7">
              {auditScores.map((item, idx) => {
                const tone = toneFor(item.score);
                const pct = Math.max(0, Math.min(100, (item.score / 10) * 100));

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: Math.min(idx, 6) * 0.06 }}
                  >
                    <div className="mb-3 flex items-baseline justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">
                          {item.label}
                        </p>
                        {item.sublabel && (
                          <p className="mt-1 text-[12px] text-[#CCCCCC]/40">
                            {item.sublabel}
                          </p>
                        )}
                      </div>
                      <span
                        className={`flex-shrink-0 font-mono text-sm font-semibold tabular-nums ${tone.text}`}
                      >
                        {item.score.toFixed(1)}
                      </span>
                    </div>

                    <div className="h-[3px] w-full bg-[#CCCCCC]/[0.08]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 1,
                          delay: 0.15 + Math.min(idx, 6) * 0.06,
                          ease: "easeOut",
                        }}
                        className={`h-full ${tone.bar}`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
