"use client";

import { motion } from "framer-motion";
import type { ProposalInvestment, ProposalGoal } from "@/lib/proposals-data";
import { Minus, Info } from "lucide-react";
import {
  VinicolaDivider,
  VinicolaSectionHeader,
  VinicolaEyebrow,
  VinicolaRule,
} from "./vinicola-ui";

interface Props {
  investment: ProposalInvestment;
  goals?: ProposalGoal[];
}

export function ProposalVinicolaInvestment({ investment, goals }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[60%] w-[85%] -translate-x-1/2 rounded-full bg-[#CA8B35]/[0.09] blur-[170px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="Pacote completo"
          title="Tudo junto, pela condição que"
          italic="não existe separado"
          lead="As frentes se sustentam entre si: o site precisa da medição, a mídia precisa do site, o conteúdo precisa da captação. Contratadas isoladamente, somam R$ 21.500 de implantação e R$ 9.600 por mês."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Implantação */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75 }}
            className="flex flex-col border border-[#CCCCCC]/12 bg-[#121110] p-8 md:p-10"
          >
            <VinicolaEyebrow>{investment.setupLabel}</VinicolaEyebrow>

            {investment.setupOriginalPrice && (
              <p className="mt-6 font-mono text-sm text-[#CCCCCC]/35 line-through">
                {investment.setupOriginalPrice}
              </p>
            )}

            <p className="mt-1 font-playfair text-5xl font-medium text-white md:text-6xl">
              {investment.setupFee}
            </p>

            {investment.setupItems && investment.setupItems.length > 0 && (
              <div className="mt-7 space-y-2 border-y border-[#CCCCCC]/10 py-5">
                {investment.setupItems.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-baseline justify-between gap-4 text-[13px]"
                  >
                    <span className="text-[#CCCCCC]/50">{row.item}</span>
                    <span className="flex-shrink-0 font-mono tabular-nums text-[#CCCCCC]/80">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {investment.setupIncludes && (
              <ul className="mt-7 flex-1 space-y-3">
                {investment.setupIncludes.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[14px] leading-snug text-[#CCCCCC]/75"
                  >
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#CA8B35]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {investment.setupNote && (
              <p className="mt-8 text-[13px] leading-relaxed text-[#CCCCCC]/45">
                {investment.setupNote}
              </p>
            )}
          </motion.div>

          {/* Mensal — o clímax */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative flex flex-col border-2 border-[#CA8B35]/50 bg-[#161311] p-8 shadow-[0_0_90px_-30px_rgba(202,139,53,0.5)] md:p-10"
          >
            <div className="pointer-events-none absolute left-0 top-0">
              <div className="h-[2px] w-8 bg-[#CA8B35]" />
              <div className="h-8 w-[2px] bg-[#CA8B35]" />
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 flex flex-col items-end">
              <div className="ml-auto h-8 w-[2px] bg-[#CA8B35]" />
              <div className="h-[2px] w-8 bg-[#CA8B35]" />
            </div>

            <VinicolaEyebrow>{investment.totalLabel}</VinicolaEyebrow>

            {investment.originalPrice && (
              <p className="mt-6 font-mono text-sm text-[#CCCCCC]/35 line-through">
                {investment.originalPrice}/mês
              </p>
            )}

            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-playfair text-5xl font-medium text-[#CA8B35] md:text-7xl">
                {investment.totalMonthly}
              </span>
              <span className="text-lg text-[#CCCCCC]/40">/mês</span>
            </div>

            {investment.packageIncludes && (
              <ul className="mt-8 flex-1 space-y-3 border-t border-[#CA8B35]/20 pt-7">
                {investment.packageIncludes.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[14px] leading-snug text-[#CCCCCC]/85"
                  >
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#CA8B35]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>

        {/* Fora do valor */}
        {investment.exclusions && investment.exclusions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mt-6 border border-[#CCCCCC]/10 bg-[#121110] p-8"
          >
            <VinicolaEyebrow>Fora do honorário</VinicolaEyebrow>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {investment.exclusions.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[14px] leading-relaxed text-[#CCCCCC]/55"
                >
                  <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#CCCCCC]/30" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Condições e notas */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {investment.paymentConditions && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="border border-[#CCCCCC]/10 bg-[#121110] p-8"
            >
              <VinicolaEyebrow>Condições</VinicolaEyebrow>
              <ul className="mt-6 space-y-3">
                {investment.paymentConditions.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[14px] leading-relaxed text-[#CCCCCC]/70"
                  >
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#CA8B35]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {investment.notes && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-[#CCCCCC]/10 bg-[#121110] p-8"
            >
              <VinicolaEyebrow>Observações</VinicolaEyebrow>
              <ul className="mt-6 space-y-4">
                {investment.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#CA8B35]/60" />
                    <span className="text-[14px] leading-relaxed text-[#CCCCCC]/55">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Metas */}
        {goals && goals.length > 0 && (
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="mb-10 text-center"
            >
              <div className="flex justify-center">
                <VinicolaRule width="w-14" />
              </div>
              <h3 className="mt-8 font-playfair text-2xl font-medium text-white md:text-4xl">
                Onde queremos chegar em{" "}
                <span className="italic text-[#CA8B35]">6 meses</span>
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/55">
                As metas serão fixadas de verdade no dia 15, quando a medição
                já estiver rodando e existir linha de base real. O que segue é
                a direção e como cada número será conferido.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="overflow-x-auto border border-[#CCCCCC]/10 bg-[#121110]"
            >
              <table className="w-full min-w-[620px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#CCCCCC]/10">
                    {["Indicador", "Hoje", "Meta", "Como se mede"].map((col) => (
                      <th
                        key={col}
                        className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CCCCCC]/40"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {goals.map((goal) => (
                    <tr
                      key={goal.indicator}
                      className="border-b border-[#CCCCCC]/[0.06] last:border-0"
                    >
                      <td className="px-6 py-5 text-[14px] font-medium text-white">
                        {goal.indicator}
                      </td>
                      <td className="px-6 py-5 font-mono text-[13px] text-[#CCCCCC]/45">
                        {goal.today}
                      </td>
                      <td className="px-6 py-5 font-mono text-[13px] font-semibold text-[#CA8B35]">
                        {goal.target}
                      </td>
                      <td className="px-6 py-5 text-[13px] text-[#CCCCCC]/50">
                        {goal.how}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
