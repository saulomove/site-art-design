"use client";

import { motion } from "framer-motion";
import type { ProposalInvestment } from "@/lib/proposals-data";
import { Info } from "lucide-react";
import { AciavSectionHeader, AciavCheck } from "./aciav-ui";

interface Props {
  investment: ProposalInvestment;
}

export function ProposalAciavInvestment({ investment }: Props) {
  return (
    <section className="bg-[#f7f5f1] py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <AciavSectionHeader
          eyebrow="Investimento"
          title="Uma implantação e uma"
          highlight="mensalidade"
          lead="Sem custo de desenvolvimento, sem licença por usuário e sem cobrança por vida cadastrada."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Implantação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col rounded-3xl bg-white p-8 shadow-[0_24px_50px_-28px_rgba(8,30,40,.25)] md:p-10"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0d6b6b]">
              Etapa única
            </span>
            <h3 className="mt-3 text-xl font-bold text-[#0c1e2a]">
              {investment.setupLabel ?? "Implantação"}
            </h3>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight text-[#0c1e2a] md:text-6xl">
                {investment.setupFee}
              </span>
            </div>

            {/* Parcelas */}
            {investment.setupItems && investment.setupItems.length > 0 && (
              <div className="mt-6 rounded-2xl bg-[#f7f5f1] p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6a7a86]">
                  Em 3x no boleto
                </span>
                <div className="mt-4 space-y-2.5">
                  {investment.setupItems.map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="text-[#2b3b48]/75">{row.item}</span>
                      <span className="flex-shrink-0 font-bold text-[#0c1e2a]">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {investment.setupIncludes &&
              investment.setupIncludes.length > 0 && (
                <div className="mt-7 border-t border-[#e7ecef] pt-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6a7a86]">
                    Incluso na implantação
                  </span>
                  <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[#2b3b48]">
                    {investment.setupIncludes.map((item, idx) => (
                      <AciavCheck key={idx}>{item}</AciavCheck>
                    ))}
                  </ul>
                </div>
              )}

            {investment.setupNote && (
              <p className="mt-auto pt-6 text-[13px] leading-relaxed text-[#6a7a86]">
                {investment.setupNote}
              </p>
            )}
          </motion.div>

          {/* Mensalidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex flex-col overflow-hidden rounded-3xl bg-[#08494a] p-8 shadow-[0_30px_60px_-24px_rgba(8,30,40,.45)] md:p-10"
          >
            <div className="pointer-events-none absolute -right-[20%] -top-[20%] h-[60%] w-[70%] rounded-full bg-[#1c9b96]/25 blur-[90px]" />

            <div className="relative z-10 flex flex-1 flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2ee8a4]">
                Recorrente
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">
                {investment.totalLabel ?? "Mensalidade"}
              </h3>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                  {investment.totalMonthly}
                </span>
                <span className="text-lg text-white/50">/mês</span>
              </div>

              <div className="mt-6 rounded-2xl bg-[#e85d1f] px-5 py-4">
                <p className="text-sm font-semibold leading-snug text-white">
                  A primeira cobrança acontece 30 dias após a conclusão da
                  implantação.
                </p>
              </div>

              {investment.packageIncludes &&
                investment.packageIncludes.length > 0 && (
                  <div className="mt-7 border-t border-white/15 pt-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                      Coberto pela mensalidade
                    </span>
                    <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-white/85">
                      {investment.packageIncludes.map((item, idx) => (
                        <AciavCheck key={idx} tone="white">
                          {item}
                        </AciavCheck>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </motion.div>
        </div>

        {/* Condições e observações */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {investment.paymentConditions &&
            investment.paymentConditions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-[#e7ecef] bg-white p-8"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6a7a86]">
                  Condições
                </span>
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[#2b3b48]">
                  {investment.paymentConditions.map((condition, idx) => (
                    <AciavCheck key={idx}>{condition}</AciavCheck>
                  ))}
                </ul>
              </motion.div>
            )}

          {investment.notes && investment.notes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl border border-[#e7ecef] bg-white p-8"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6a7a86]">
                Observações
              </span>
              <ul className="mt-5 space-y-4">
                {investment.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1c9b96]" />
                    <span className="text-[15px] leading-relaxed text-[#2b3b48]/80">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
