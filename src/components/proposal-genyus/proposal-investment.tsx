"use client";

import { motion } from "framer-motion";
import type { ProposalInvestment } from "@/lib/proposals-data";
import { Unlock, Info, Minus } from "lucide-react";
import {
  VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

interface Props { investment: ProposalInvestment }

export function ProposalGenyusInvestment({ investment }: Props) {
  return (
    <section id="investimento" className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[60%] w-[85%] -translate-x-1/2 rounded-full bg-[#CA8B35]/[0.09] blur-[170px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="Investimento"
          title="Um sistema sob medida"
          italic="por menos que uma safra perde"
          lead="Desenvolvimento parcelado acompanhando as entregas, e uma mensalidade que cobre hospedagem, suporte e evolução contínua."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Projeto */}
          <motion.div
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.75 }}
            className="relative flex flex-col border-2 border-[#CA8B35]/50 bg-[#161311] p-8 shadow-[0_0_90px_-30px_rgba(202,139,53,0.45)] md:p-10"
          >
            <div className="pointer-events-none absolute left-0 top-0">
              <div className="h-[2px] w-8 bg-[#CA8B35]" /><div className="h-8 w-[2px] bg-[#CA8B35]" />
            </div>
            <VinicolaEyebrow>{investment.setupLabel}</VinicolaEyebrow>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-playfair text-5xl font-medium text-[#CA8B35] md:text-7xl">{investment.setupFee}</span>
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#CCCCCC]/45">Pagamento em 3 vezes</p>

            {investment.setupItems && (
              <div className="mt-7 space-y-2 border-y border-[#CCCCCC]/10 py-5">
                {investment.setupItems.map((r, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-4 text-[13px]">
                    <span className="text-[#CCCCCC]/50">{r.item}</span>
                    <span className="flex-shrink-0 font-mono tabular-nums text-[#CCCCCC]/80">{r.value}</span>
                  </div>
                ))}
              </div>
            )}

            {investment.setupIncludes && (
              <ul className="mt-7 flex-1 space-y-3">
                {investment.setupIncludes.map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-[#CCCCCC]/80">
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#CA8B35]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )}

            {investment.setupNote && (
              <p className="mt-8 text-[13px] leading-relaxed text-[#CCCCCC]/45">{investment.setupNote}</p>
            )}
          </motion.div>

          {/* Mensal */}
          <motion.div
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.75, delay: 0.1 }}
            className="flex flex-col border border-[#CCCCCC]/12 bg-[#121110] p-8 md:p-10"
          >
            <VinicolaEyebrow>{investment.totalLabel}</VinicolaEyebrow>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-playfair text-5xl font-medium text-white md:text-6xl">{investment.totalMonthly}</span>
              <span className="text-lg text-[#CCCCCC]/40">/mês</span>
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#CCCCCC]/45">A partir da entrega final</p>

            {investment.packageIncludes && (
              <ul className="mt-7 flex-1 space-y-3 border-t border-[#CCCCCC]/10 pt-7">
                {investment.packageIncludes.map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-[#CCCCCC]/75">
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#CA8B35]/70" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>

        {/* Sem fidelidade */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="mt-6 border border-[#CA8B35]/30 bg-[#CA8B35]/[0.05] p-10 text-center md:p-14"
        >
          <div className="flex justify-center"><Unlock className="h-6 w-6 text-[#CA8B35]" /></div>
          <h3 className="mx-auto mt-6 max-w-3xl font-playfair text-2xl font-medium leading-snug text-white md:text-4xl">
            Sem contrato de fidelidade.
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/65 md:text-base">
            A mensalidade é mês a mês. E o mais importante: o código e os dados
            são da Santa Augusta. Se um dia a parceria terminar, o sistema não
            vai embora junto.
          </p>
        </motion.div>

        {/* Fora do valor + condições */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {investment.exclusions && investment.exclusions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
              className="border border-[#CCCCCC]/10 bg-[#121110] p-8"
            >
              <VinicolaEyebrow>Fora do valor</VinicolaEyebrow>
              <ul className="mt-6 space-y-4">
                {investment.exclusions.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-[#CCCCCC]/55">
                    <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#CCCCCC]/30" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {investment.paymentConditions && (
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-[#CCCCCC]/10 bg-[#121110] p-8"
            >
              <VinicolaEyebrow>Condições</VinicolaEyebrow>
              <ul className="mt-6 space-y-3">
                {investment.paymentConditions.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-[#CCCCCC]/70">
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#CA8B35]/60" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {investment.notes && (
          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
            className="mt-6 border border-[#CCCCCC]/10 bg-[#121110] p-8"
          >
            <VinicolaEyebrow>Observações</VinicolaEyebrow>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {investment.notes.map((n, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#CA8B35]/60" />
                  <span className="text-[14px] leading-relaxed text-[#CCCCCC]/55">{n}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
