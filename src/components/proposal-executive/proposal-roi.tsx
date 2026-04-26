"use client";

import { motion } from "framer-motion";
import { TrendingUp, Calculator } from "lucide-react";

interface ROIScenario {
  label: string;
  monthlyClients: string;
  avgTicket: string;
  avgCommission: string;
  annualRevenue: string;
  roi: string;
}

interface Props {
  roiAnalysis: {
    intro: string;
    scenarios: ROIScenario[];
    conclusion: string;
  };
  clientName: string;
}

export function ProposalExecutiveRoi({ roiAnalysis, clientName }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F0F12] text-[#F8F4EC] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C8302D]/[0.06] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF6F]/[0.05] blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase"
          >
            <Calculator className="w-4 h-4" />
            ROI Projetado
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F8F4EC] leading-[1.1]"
          >
            A matemática do <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">retorno</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#F8F4EC]/65 font-inter font-light max-w-3xl mx-auto leading-relaxed"
          >
            {roiAnalysis.intro}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {roiAnalysis.scenarios.map((scenario, idx) => {
            const isOptimistic = idx === roiAnalysis.scenarios.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 md:p-10 border ${
                  isOptimistic
                    ? "bg-gradient-to-br from-[#C8302D] to-[#A82420] border-[#D4AF6F] text-[#F8F4EC]"
                    : "bg-[#18181C] border-[#D4AF6F]/20 text-[#F8F4EC]"
                }`}
              >
                {isOptimistic && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF6F] text-[#0F0F12]">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Recomendado</span>
                  </div>
                )}

                <span className="block text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
                  style={{ color: isOptimistic ? "rgba(248,244,236,0.85)" : "#D4AF6F" }}
                >
                  {scenario.label}
                </span>

                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-baseline border-b border-current/20 pb-3">
                    <span className="text-xs font-inter opacity-70">Novos clientes</span>
                    <span className="font-playfair text-xl font-medium">{scenario.monthlyClients}</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-current/20 pb-3">
                    <span className="text-xs font-inter opacity-70">Ticket médio</span>
                    <span className="font-playfair text-xl font-medium">{scenario.avgTicket}</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-current/20 pb-3">
                    <span className="text-xs font-inter opacity-70">Comissão média</span>
                    <span className="font-playfair text-xl font-medium">{scenario.avgCommission}</span>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-current/30">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70 mb-2">Receita anual</p>
                  <p className="font-playfair text-3xl md:text-4xl font-medium leading-tight mb-4">
                    {scenario.annualRevenue}
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t border-current/20">
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span className="font-inter text-sm font-semibold">
                      ROI {scenario.roi}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#18181C] border border-[#D4AF6F]/30 p-8 md:p-10 text-center"
        >
          <span className="block text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase mb-4">
            O ponto-chave para {clientName}
          </span>
          <p className="font-playfair text-xl md:text-2xl text-[#F8F4EC] leading-relaxed italic">
            &ldquo;{roiAnalysis.conclusion}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
