"use client";

import { motion } from "framer-motion";
import type { ProposalInvestment } from "@/lib/proposals-data";
import { Check, ShieldCheck, Sparkles, Leaf } from "lucide-react";

interface Props {
  investment: ProposalInvestment;
  clientName: string;
}

export function ProposalBiomassInvestment({ investment, clientName }: Props) {
  const isCustomPackage = investment.originalPrice && investment.savings;

  return (
    <section className="relative py-24 md:py-32 bg-[#F2EAD0] text-[#0C1F14] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#C4A035]/40 bg-white"
          >
            <Leaf className="w-5 h-5 text-[#C4A035]" />
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#0C1F14] uppercase">
              Investimento
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0C1F14] leading-[1.1]"
          >
            Proposta de valor<br className="hidden md:block" />
            <span className="italic text-[#0C1F14]/60">para a {clientName}</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8 lg:pr-4"
          >
            <div className="mb-10">
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#0C1F14] mb-2">
                Se contratado separadamente
              </h3>
              <p className="text-[#0C1F14]/60 font-inter text-sm">
                Valores avulsos de cada módulo.
              </p>
            </div>
            <div className="space-y-4">
              {investment.breakdown && investment.breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2">
                  <span className="text-[#0C1F14]/75 font-inter text-sm">{item.item}</span>
                  <div className="flex-1 border-b border-dashed border-[#0C1F14]/15 mx-3" />
                  <span className="font-playfair text-lg font-medium text-[#0C1F14]">{item.value}</span>
                </div>
              ))}
              {isCustomPackage && (
                <div className="flex justify-between items-center pt-6 mt-6 border-t border-[#C4A035]/40">
                  <span className="text-[#0C1F14]/60 uppercase tracking-[0.2em] text-[11px] font-semibold">Total avulso</span>
                  <span className="font-playfair text-xl font-medium text-[#0C1F14]/50 line-through decoration-[#C4A035]/60">
                    {investment.originalPrice}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Main package card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-3 relative mt-8 lg:mt-0"
          >
            <div className="relative bg-[#0C1F14] text-[#F2EAD0] p-10 md:p-14 border border-[#C4A035]/30 flex flex-col items-center text-center overflow-hidden">
              {/* Corner ornaments */}
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#C4A035]" />
              <div className="absolute top-0 left-0 w-[1px] h-8 bg-[#C4A035]" />
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-[#C4A035]" />
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-[#C4A035]" />
              <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-[#C4A035]" />
              <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-[#C4A035]" />
              <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-[#C4A035]" />
              <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-[#C4A035]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[#2D5040]/40 blur-[100px] rounded-full pointer-events-none" />

              {isCustomPackage && (
                <div className="relative inline-flex items-center gap-2 mb-8 px-6 py-2.5 border border-[#C4A035]/40 bg-[#C4A035]/10">
                  <Sparkles className="w-4 h-4 text-[#C4A035]" />
                  <span className="text-[11px] font-bold tracking-[0.3em] text-[#C4A035] uppercase">
                    Economia de {investment.savings}
                  </span>
                </div>
              )}

              <h3 className="relative font-playfair text-2xl md:text-3xl font-medium text-[#F2EAD0] mb-6">
                {investment.totalLabel}
              </h3>

              <div className="relative flex flex-col items-center justify-center mb-12">
                <div className="flex items-baseline gap-2">
                  {investment.totalMonthly.startsWith("R$") ? (
                    <>
                      <span className="font-playfair text-6xl md:text-7xl font-medium text-[#F2EAD0] tracking-tight">
                        <span className="text-3xl text-[#C4A035] mr-2 tracking-normal">R$</span>
                        {investment.totalMonthly.replace("R$ ", "").replace("/mês", "")}
                      </span>
                      <span className="text-[#F2EAD0]/60 font-semibold tracking-[0.2em] text-base uppercase">/mês</span>
                    </>
                  ) : (
                    <span className="font-playfair text-4xl md:text-5xl font-medium text-[#F2EAD0] tracking-tight">
                      {investment.totalMonthly}
                    </span>
                  )}
                </div>
              </div>

              {investment.packageIncludes && (
                <div className="relative w-full space-y-5 pt-10 border-t border-[#C4A035]/20">
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C4A035] pb-3 text-left">
                    O que contempla
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3 text-left">
                    {investment.packageIncludes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#C4A035] shrink-0 mt-0.5" />
                        <span className="text-[#F2EAD0]/85 font-inter text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Conditions */}
        {investment.paymentConditions && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-[#0C1F14]/10 grid md:grid-cols-2 gap-8"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C4A035] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[#0C1F14] font-semibold mb-3 tracking-[0.2em] uppercase text-xs">Condições</h4>
                <ul className="space-y-2">
                  {investment.paymentConditions.map((c, idx) => (
                    <li key={idx} className="text-[#0C1F14]/70 font-inter text-sm leading-relaxed">{c}</li>
                  ))}
                </ul>
              </div>
            </div>
            {investment.notes && (
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#C4A035] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#0C1F14] font-semibold mb-3 tracking-[0.2em] uppercase text-xs">Observações</h4>
                  <ul className="space-y-2">
                    {investment.notes.map((n, idx) => (
                      <li key={idx} className="text-[#0C1F14]/70 font-inter text-sm leading-relaxed">{n}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
