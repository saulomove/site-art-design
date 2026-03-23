"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  TrendingDown,
  ArrowDown,
  Receipt,
  AlertCircle,
  Package,
} from "lucide-react";
import type { ProposalInvestment } from "@/lib/proposals-data";

interface Props {
  investment: ProposalInvestment;
  clientName: string;
}

export function ProposalInvestmentSection({ investment, clientName }: Props) {
  const hasComparison = investment.originalPrice && investment.savings;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-green/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 border border-brand-green/20 px-5 py-2 text-sm font-bold text-brand-green uppercase tracking-wider"
          >
            <Receipt className="w-4 h-4" />
            Investimento
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900"
          >
            Investimento para a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
              {clientName}
            </span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Profile Pricing Cards */}
          {investment.profilePricing && investment.profilePricing.length > 0 && (
            <div className="mb-8">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-sm font-bold text-slate-500 uppercase tracking-wider mb-6"
              >
                Valores por Perfil (individual)
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {investment.profilePricing.map((profile, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                  >
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-900">
                        {profile.profileName}
                      </h4>
                      <span className="text-sm text-slate-500">{profile.profileHandle}</span>
                    </div>
                    <div className="space-y-1.5 mb-5">
                      {profile.services.map((service, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="text-sm text-slate-600">{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <span className="text-2xl font-black text-slate-900">
                        {profile.total}
                      </span>
                      <span className="text-sm text-slate-500 font-medium ml-1">
                        /mês
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-2"
              >
                <span className="text-sm text-slate-400 font-medium">
                  Total individual:{" "}
                  <span className="line-through font-bold text-slate-500">
                    {investment.originalPrice}/mês
                  </span>
                </span>
              </motion.div>
            </div>
          )}
          {/* Main Pricing — Individual vs Package side-by-side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden mb-8"
          >
            {/* BG decoration */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-brand-green/10 to-transparent rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-to-tr from-brand-blue/10 to-transparent rounded-full blur-[60px]" />

            <div className="relative z-10 grid md:grid-cols-2">
              {/* LEFT — Individual Breakdown */}
              {investment.breakdown && investment.breakdown.length > 0 && (
                <div className="p-8 md:p-10 md:border-r border-slate-800">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                    Valores Individuais
                  </h4>
                  <div className="space-y-2">
                    {investment.breakdown.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm text-slate-400">
                          {item.item}
                        </span>
                        <span className="text-sm font-bold text-slate-300">
                          {item.value}
                        </span>
                      </div>
                    ))}
                    {investment.originalPrice && (
                      <div className="flex justify-between items-center py-3 px-3 rounded-lg bg-white/5 border-t border-slate-700 mt-2">
                        <span className="text-sm font-bold text-white">
                          Total avulso
                        </span>
                        <span className="text-lg font-black text-red-400 line-through">
                          {investment.originalPrice}/mês
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <ArrowDown className="w-6 h-6 text-slate-600 md:hidden" />
                  </div>
                </div>
              )}

              {/* RIGHT — Package Offer */}
              <div className="p-8 md:p-10 flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand-green/5 to-transparent border-t md:border-t-0 border-slate-800">
                {investment.totalLabel && (
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="w-5 h-5 text-brand-green" />
                    <span className="text-sm font-bold text-brand-green uppercase tracking-wider">
                      {investment.totalLabel}
                    </span>
                  </div>
                )}

                {/* Comparison */}
                {hasComparison && (
                  <div className="mb-2">
                    <span className="text-slate-500 line-through text-lg font-medium">
                      {investment.originalPrice}/mês
                    </span>
                  </div>
                )}

                {/* Main Price */}
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tight">
                    {investment.totalMonthly}
                  </span>
                  <span className="text-xl text-slate-400 font-medium ml-2">
                    /mês
                  </span>
                </div>

                {/* Savings Badge */}
                {investment.savings && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/20 border border-brand-green/30 px-5 py-2">
                      <TrendingDown className="w-4 h-4 text-brand-green" />
                      <span className="text-brand-green font-bold text-sm">
                        Economia de {investment.savings}/mês
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Package Includes */}
                {investment.packageIncludes && (
                  <div className="grid gap-2 text-left w-full">
                    {investment.packageIncludes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 p-1.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Setup / Project Fees */}
          {investment.setupItems && investment.setupItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 mb-8"
            >
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-purple" />
                Projetos sob Demanda (valor único)
              </h4>
              <div className="space-y-3">
                {investment.setupItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 px-4 rounded-xl bg-white border border-slate-100"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {item.item}
                    </span>
                    <span className="text-sm font-bold text-brand-purple">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Legacy setupFee support */}
          {!investment.setupItems && investment.setupFee && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8 text-center"
            >
              <span className="text-sm text-slate-500 font-medium">
                Setup inicial:
              </span>
              <span className="text-xl font-bold text-slate-900 ml-2">
                {investment.setupFee}
              </span>
            </motion.div>
          )}

          {/* Payment Conditions */}
          {investment.paymentConditions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-green/5 rounded-2xl p-6 border border-brand-green/15 mb-8"
            >
              <h4 className="text-sm font-bold text-brand-green uppercase tracking-wider mb-3">
                Condições de Pagamento
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {investment.paymentConditions.map((cond, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">
                      {cond}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Notes / Transparency */}
          {investment.notes && investment.notes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
            >
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Importante
              </h4>
              <div className="space-y-2">
                {investment.notes.map((note, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-slate-400 shrink-0">📌</span>
                    <span className="text-sm text-slate-600">{note}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
