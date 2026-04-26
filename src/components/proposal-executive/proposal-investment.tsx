"use client";

import { motion } from "framer-motion";
import type { ProposalInvestment } from "@/lib/proposals-data";
import { Check, ShieldCheck, Wallet, TrendingUp } from "lucide-react";

interface Props {
  investment: ProposalInvestment;
  clientName: string;
}

export function ProposalExecutiveInvestment({ investment, clientName }: Props) {
  const isCustomPackage = investment.originalPrice && investment.savings;

  return (
    <section className="relative py-24 md:py-32 bg-[#0F0F12] text-[#F8F4EC] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#C8302D]/[0.06] blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 border border-[#D4AF6F]/40 bg-[#18181C]"
          >
            <Wallet className="w-4 h-4 text-[#D4AF6F]" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase">
              Investimento Estratégico
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F8F4EC] leading-[1.1]"
          >
            Pacote completo <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">para {clientName}</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Breakdown — ancoragem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="mb-10">
              <span className="block text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase mb-3">
                Cenário 01 · Avulso
              </span>
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#F8F4EC] mb-2">
                Se contratar separado
              </h3>
              <p className="text-[#F8F4EC]/55 font-inter text-sm">
                Valores avulsos, cobrados isolados.
              </p>
            </div>

            <div className="space-y-3">
              {investment.breakdown && investment.breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between items-baseline py-2.5 border-b border-[#F8F4EC]/10">
                  <span className="text-[#F8F4EC]/75 font-inter text-sm">
                    {item.item}
                  </span>
                  <span className="font-playfair text-lg font-medium text-[#F8F4EC]">
                    {item.value}
                  </span>
                </div>
              ))}

              {isCustomPackage && (
                <div className="flex justify-between items-baseline pt-6 mt-4 border-t-2 border-[#C8302D]/40">
                  <span className="text-[#D4AF6F] uppercase tracking-[0.25em] text-[11px] font-bold">
                    Total avulso
                  </span>
                  <span className="font-playfair text-xl font-medium text-[#F8F4EC]/40 line-through decoration-[#C8302D] decoration-2">
                    {investment.originalPrice}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Pacote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-3 relative mt-8 lg:mt-0"
          >
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#D4AF6F]/40 pointer-events-none" />
            <div className="relative bg-gradient-to-br from-[#18181C] via-[#0F0F12] to-[#18181C] p-10 md:p-14 border border-[#D4AF6F] flex flex-col items-center text-center overflow-hidden">
              {/* Crimson stripe top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8302D] via-[#D4AF6F] to-[#C8302D]" />

              <span className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase mb-3">
                Cenário 02 · Pacote ArtDesign
              </span>

              {isCustomPackage && (
                <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-[#C8302D]/15 border border-[#C8302D]/40">
                  <TrendingUp className="w-4 h-4 text-[#C8302D]" />
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#C8302D] uppercase">
                    Você economiza {investment.savings}
                  </span>
                </div>
              )}

              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#F8F4EC] mb-8">
                {investment.totalLabel}
              </h3>

              <div className="flex flex-col items-center justify-center mb-12">
                <div className="flex items-baseline gap-2">
                  <span className="font-playfair text-6xl md:text-8xl font-medium text-[#F8F4EC] tracking-tight">
                    <span className="text-3xl md:text-4xl text-[#C8302D] mr-2 tracking-normal">R$</span>
                    {investment.totalMonthly.replace("R$ ", "").replace("/mês", "").replace(",00", "")}
                  </span>
                  <span className="text-[#D4AF6F] font-bold tracking-[0.2em] text-base uppercase">
                    /mês
                  </span>
                </div>
              </div>

              {investment.packageIncludes && (
                <div className="w-full space-y-5 pt-8 border-t border-[#D4AF6F]/20">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF6F] pb-3 text-left">
                    O que está incluso
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3 text-left">
                    {investment.packageIncludes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#C8302D] shrink-0 mt-0.5" />
                        <span className="text-[#F8F4EC]/85 font-inter text-sm leading-relaxed">
                          {item}
                        </span>
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
            className="mt-20 pt-12 border-t border-[#F8F4EC]/10 grid md:grid-cols-2 gap-8"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D4AF6F] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[#F8F4EC] font-bold mb-3 tracking-[0.3em] uppercase text-[10px]">
                  Condições
                </h4>
                <ul className="space-y-2">
                  {investment.paymentConditions.map((c, idx) => (
                    <li key={idx} className="text-[#F8F4EC]/65 font-inter text-sm leading-relaxed">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {investment.notes && (
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#C8302D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#F8F4EC] font-bold mb-3 tracking-[0.3em] uppercase text-[10px]">
                    Observações
                  </h4>
                  <ul className="space-y-2">
                    {investment.notes.map((n, idx) => (
                      <li key={idx} className="text-[#F8F4EC]/65 font-inter text-sm leading-relaxed">
                        {n}
                      </li>
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
