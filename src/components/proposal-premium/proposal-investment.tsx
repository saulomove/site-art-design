"use client";

import { motion } from "framer-motion";
import type { ProposalInvestment } from "@/lib/proposals-data";
import { Check, ShieldCheck, ArrowRight, Wallet, Sparkles } from "lucide-react";

interface Props {
  investment: ProposalInvestment;
  clientName: string;
}

export function ProposalPremiumInvestment({ investment, clientName }: Props) {
  const isCustomPackage = investment.originalPrice && investment.savings;

  return (
    <section className="py-24 md:py-32 relative bg-slate-900 overflow-hidden text-slate-50">
      {/* Dark Mode Glow Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl shadow-sm"
           >
             <Wallet className="w-5 h-5 text-brand-blue" />
             <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
               Investimento
             </span>
           </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]"
          >
            Investimento para a <br className="hidden md:block" /> {clientName}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg md:text-xl text-slate-400 font-light font-inter max-w-2xl mx-auto leading-relaxed"
          >
            Nenhuma construção de sistema é um gasto, é uma realocação de capital inteligente.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Breakdown List Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8 lg:pr-8"
          >
            <div className="mb-12">
               <h3 className="font-playfair text-3xl font-medium text-white mb-4">
                 Valores Individuais
               </h3>
               <p className="text-slate-400 font-light font-inter">
                 Composição de escopo avulso no mercado.
               </p>
            </div>

            <div className="space-y-4">
              {investment.breakdown && investment.breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-slate-300 font-inter font-light transition-colors group-hover:text-white">
                    {item.item}
                  </span>
                  <div className="flex-1 border-b border-dashed border-slate-700/50 mx-4" />
                  <span className="font-playfair text-xl font-medium text-slate-100">
                    {item.value}
                  </span>
                </div>
              ))}
              
              {isCustomPackage && (
                <div className="flex justify-between items-center pt-8 border-t border-slate-800 mt-8">
                  <span className="text-slate-400 uppercase tracking-widest text-sm font-semibold">
                    Total avulso
                  </span>
                  <span className="font-playfair text-2xl font-medium text-slate-500 line-through decoration-slate-600">
                    {investment.originalPrice}/mês
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Premium Package Highlight Column */}
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
             className="lg:col-span-3 relative perspective-1000 mt-12 lg:mt-0"
          >
             {/* Animated Gradient Border Layer */}
             <div className="absolute -inset-[2px] rounded-[2.5rem] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange blur-[1px] opacity-70 animate-pulse transition-opacity" style={{ animationDuration: '4s' }} />
             
             {/* Main Card */}
             <div className="relative bg-slate-900 p-10 md:p-14 rounded-[2.5rem] border border-slate-800/80 shadow-[0_0_80px_rgb(0,0,0,0.5)] flex flex-col items-center text-center overflow-hidden">
                {/* Internal Glow Effect */}
                <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-br from-brand-blue/20 to-transparent blur-3xl rounded-full" />
                
                {isCustomPackage && (
                  <div className="relative inline-flex items-center gap-2 mb-10 px-8 py-3 rounded-full border border-brand-orange/30 bg-brand-orange/10">
                    <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />
                    <span className="text-sm font-bold tracking-widest text-brand-orange uppercase">
                      Economia de {investment.savings}/mês
                    </span>
                  </div>
                )}

                <h3 className="relative font-playfair justify-center text-2xl md:text-3xl font-medium text-white mb-6">
                  {investment.totalLabel}
                </h3>
                
                <div className="relative flex flex-col items-center justify-center mb-16">
                  {isCustomPackage && (
                    <span className="text-slate-500 line-through font-inter text-2xl font-medium mb-2">
                       {investment.originalPrice}/mês
                    </span>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="font-playfair text-7xl md:text-8xl font-medium text-white tracking-tighter">
                      <span className="text-4xl text-slate-400 mr-2 tracking-normal">R$</span>
                      {investment.totalMonthly.replace('R$ ', '')}
                    </span>
                    <span className="text-slate-400 font-semibold tracking-widest text-xl uppercase">
                      /mês
                    </span>
                  </div>
                </div>

                {investment.packageIncludes && (
                  <div className="relative w-full space-y-6 pt-12 border-t border-slate-800">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 border-b border-slate-800/50 pb-4 text-left">
                      O plano master contempla
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-4 text-left">
                      {investment.packageIncludes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                          <span className="text-slate-300 font-light text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
             </div>
          </motion.div>
        </div>

        {/* Payment Conditions Notes */}
        {investment.paymentConditions && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 pt-16 border-t border-slate-800 grid md:grid-cols-2 gap-8 lg:gap-16"
          >
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-brand-blue shrink-0" />
              <div>
                <h4 className="text-white font-semibold mb-2 tracking-wide uppercase text-sm">Condições Operacionais</h4>
                <ul className="space-y-2">
                  {investment.paymentConditions.map((condition, idx) => (
                    <li key={idx} className="text-slate-400 font-light font-inter text-sm leading-relaxed">
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {investment.notes && (
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-brand-orange shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2 tracking-wide uppercase text-sm">Alinhamentos Finais</h4>
                  <ul className="space-y-2">
                    {investment.notes.map((note, idx) => (
                      <li key={idx} className="text-slate-400 font-light font-inter text-sm leading-relaxed">
                        {note}
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
