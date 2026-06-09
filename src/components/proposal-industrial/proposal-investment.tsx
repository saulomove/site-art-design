"use client";
import { motion } from "framer-motion";
import type { ProposalInvestment } from "@/lib/proposals-data";
import { Check, ShieldCheck, Zap, Wrench } from "lucide-react";

interface Props { investment: ProposalInvestment; clientName: string; }

export function ProposalIndustrialInvestment({ investment, clientName }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#F5F0EB] text-[#111111] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#44D414]/40 bg-white">
            <Wrench className="w-5 h-5 text-[#44D414]" />
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#111111] uppercase font-inter">Investimento</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#111111] leading-[1.1]">
            Proposta de valor<br className="hidden md:block" />
            <span className="italic text-[#111111]/50">para a {clientName}</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Breakdown */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#111111] mb-2">Se contratado separadamente</h3>
              <p className="text-[#111111]/60 font-inter text-sm">Valores avulsos de cada módulo.</p>
            </div>
            <div className="space-y-4">
              {investment.breakdown?.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2">
                  <span className="text-[#111111]/75 font-inter text-sm">{item.item}</span>
                  <div className="flex-1 border-b border-dashed border-[#111111]/15 mx-3" />
                  <span className="font-playfair text-lg font-medium text-[#111111]">{item.value}</span>
                </div>
              ))}
              {investment.originalPrice && (
                <div className="flex justify-between items-center pt-6 mt-6 border-t border-[#44D414]/40">
                  <span className="text-[#111111]/60 uppercase tracking-[0.2em] text-[11px] font-semibold font-inter">Total avulso</span>
                  <span className="font-playfair text-xl font-medium text-[#111111]/50 line-through decoration-[#44D414]/60">{investment.originalPrice}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Package card */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-3 relative mt-8 lg:mt-0">
            <div className="relative bg-[#111111] text-[#F5F0EB] p-10 md:p-14 border border-[#44D414]/30 flex flex-col items-center text-center overflow-hidden">
              {/* Corner ornaments */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#44D414]" />
              <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#44D414]" />
              <div className="absolute top-0 right-0 w-8 h-[2px] bg-[#44D414]" />
              <div className="absolute top-0 right-0 w-[2px] h-8 bg-[#44D414]" />
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#44D414]" />
              <div className="absolute bottom-0 left-0 w-[2px] h-8 bg-[#44D414]" />
              <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-[#44D414]" />
              <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-[#44D414]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[#44D414]/[0.07] blur-[100px] rounded-full pointer-events-none" />

              {investment.savings && (
                <div className="relative inline-flex items-center gap-2 mb-8 px-6 py-2.5 border border-[#44D414]/40 bg-[#44D414]/10">
                  <Zap className="w-4 h-4 text-[#44D414]" />
                  <span className="text-[11px] font-bold tracking-[0.3em] text-[#44D414] uppercase font-inter">Economia de {investment.savings}/mês</span>
                </div>
              )}

              <h3 className="relative font-playfair text-2xl md:text-3xl font-medium text-[#F5F0EB] mb-6">{investment.totalLabel}</h3>

              <div className="relative flex flex-col items-center justify-center mb-12">
                <div className="flex items-baseline gap-2">
                  <span className="font-playfair text-6xl md:text-7xl font-medium text-[#F5F0EB] tracking-tight">
                    <span className="text-3xl text-[#44D414] mr-2 tracking-normal">R$</span>
                    {investment.totalMonthly.replace("R$ ", "").replace("/mês", "")}
                  </span>
                  <span className="text-[#F5F0EB]/60 font-semibold tracking-[0.2em] text-base uppercase font-inter">/mês</span>
                </div>
              </div>

              {investment.packageIncludes && (
                <div className="relative w-full space-y-5 pt-10 border-t border-[#44D414]/20">
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#44D414] pb-3 text-left font-inter">O que contempla</h4>
                  <ul className="grid sm:grid-cols-2 gap-3 text-left">
                    {investment.packageIncludes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#44D414] shrink-0 mt-0.5" />
                        <span className="text-[#F5F0EB]/85 font-inter text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {investment.paymentConditions && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-[#111111]/10 grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#44D414] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[#111111] font-semibold mb-3 tracking-[0.2em] uppercase text-xs font-inter">Condições</h4>
                <ul className="space-y-2">
                  {investment.paymentConditions.map((c, idx) => (
                    <li key={idx} className="text-[#111111]/70 font-inter text-sm leading-relaxed">{c}</li>
                  ))}
                </ul>
              </div>
            </div>
            {investment.notes && (
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#44D414] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#111111] font-semibold mb-3 tracking-[0.2em] uppercase text-xs font-inter">Observações</h4>
                  <ul className="space-y-2">
                    {investment.notes.map((n, idx) => (
                      <li key={idx} className="text-[#111111]/70 font-inter text-sm leading-relaxed">{n}</li>
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
