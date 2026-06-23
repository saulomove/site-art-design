"use client";

import { motion } from "framer-motion";
import type { ProposalInvestment } from "@/lib/proposals-data";
import { Wheat, CheckCircle2 } from "lucide-react";

interface Props {
  investment: ProposalInvestment;
  clientName: string;
}

export function ProposalPastoralInvestment({ investment, clientName }: Props) {
  return (
    <section className="relative bg-[#0B1A0D] text-[#EDE5CC] py-24 md:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#C9A037]/40" />
        <Wheat className="mx-4 h-5 w-5 text-[#C9A037]" />
        <div className="h-[1px] w-32 bg-[#C9A037]/40" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[35%] h-[60%] bg-[#C9A037]/[0.04] blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-[#C9A037]/60" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C9A037] font-inter">
              Investimento
            </span>
            <div className="h-[1px] w-8 bg-[#C9A037]/60" />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-medium text-[#EDE5CC] leading-tight">
            Tudo que a {clientName} precisa{" "}
            <span className="italic text-[#C9A037]">em um único pacote</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* LEFT — Breakdown table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A037]/70 font-inter font-semibold mb-6">
              Valor Individual
            </p>

            {investment.breakdown && investment.breakdown.length > 0 && (
              <div className="space-y-4 mb-6">
                {investment.breakdown.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3 border-b border-[#C9A037]/10"
                  >
                    <span className="text-sm text-[#EDE5CC]/55 font-inter">
                      {row.item}
                    </span>
                    <span className="text-sm font-semibold text-[#EDE5CC] font-inter">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {investment.originalPrice && (
              <div className="bg-[#132714] border border-[#C9A037]/10 p-5 flex items-center justify-between">
                <span className="text-sm text-[#EDE5CC]/40 font-inter">
                  Investimento individual
                </span>
                <span className="text-base font-semibold text-[#EDE5CC]/50 font-inter">
                  {investment.originalPrice}
                </span>
              </div>
            )}

            {/* Payment conditions */}
            {investment.paymentConditions &&
              investment.paymentConditions.length > 0 && (
                <div className="mt-8">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A037]/70 font-inter font-semibold mb-4">
                    Condições de Pagamento
                  </p>
                  <ul className="space-y-2">
                    {investment.paymentConditions.map((condition, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-[#EDE5CC]/50 font-inter"
                      >
                        <span className="text-[#C9A037]/60 flex-shrink-0 leading-5">
                          ◆
                        </span>
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </motion.div>

          {/* RIGHT — Package highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#132714] border-2 border-[#C9A037]/50 p-8 md:p-10 relative"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 pointer-events-none">
              <div className="w-6 h-[2px] bg-[#C9A037]" />
              <div className="w-[2px] h-6 bg-[#C9A037]" />
            </div>
            <div className="absolute top-0 right-0 pointer-events-none flex flex-col items-end">
              <div className="w-6 h-[2px] bg-[#C9A037]" />
              <div className="w-[2px] h-6 bg-[#C9A037] ml-auto" />
            </div>

            {/* Eyebrow */}
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A037]/70 font-inter font-semibold mb-1">
              Pacote Completo
            </p>
            <p className="text-sm text-[#EDE5CC]/50 font-inter mb-6">
              {clientName}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-playfair text-5xl font-medium text-[#C9A037]">
                {investment.totalMonthly}
              </span>
              <span className="text-base text-[#EDE5CC]/40 font-inter">/mês</span>
            </div>

            {/* Savings */}
            {investment.savings && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A037]/10 border border-[#C9A037]/30 mb-8">
                <span className="text-[11px] text-[#C9A037] font-inter font-semibold">
                  Você economiza {investment.savings}/mês
                </span>
              </div>
            )}

            {/* Package includes */}
            {investment.packageIncludes &&
              investment.packageIncludes.length > 0 && (
                <div className="border-t border-[#C9A037]/15 pt-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#EDE5CC]/35 font-inter mb-4">
                    Incluso no pacote
                  </p>
                  <ul className="space-y-3">
                    {investment.packageIncludes.map((include, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-[#EDE5CC]/60 font-inter"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C9A037] flex-shrink-0 mt-0.5" />
                        <span>{include}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </motion.div>
        </div>

        {/* Notes */}
        {investment.notes && investment.notes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#132714] border border-[#C9A037]/10 p-8"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A037]/60 font-inter font-semibold mb-4">
              Observações
            </p>
            <ul className="space-y-3">
              {investment.notes.map((note, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-[#EDE5CC]/40 font-inter leading-relaxed"
                >
                  <span className="text-[#C9A037]/40 flex-shrink-0 leading-5">
                    ◆
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
