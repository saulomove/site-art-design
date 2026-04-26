"use client";

import { motion } from "framer-motion";
import type { ProposalAnalysis } from "@/lib/proposals-data";
import { TrendingUp, AlertOctagon } from "lucide-react";

interface Props {
  analysis: ProposalAnalysis;
  clientName: string;
}

export function ProposalExecutiveAnalysis({ analysis, clientName }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F0F12] text-[#F8F4EC] overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#C8302D]/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF6F]/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase"
          >
            Análise Estratégica
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F8F4EC] leading-[1.1]"
          >
            Onde {clientName} já está forte —<br className="hidden md:block" />
            <span className="italic text-[#D4AF6F]">e onde está deixando dinheiro na mesa</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#F8F4EC]/65 font-inter font-light max-w-3xl mx-auto leading-relaxed"
          >
            {analysis.intro}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {/* Forças */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#18181C] border border-[#D4AF6F]/20 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#D4AF6F]/20">
              <div className="w-12 h-12 bg-[#D4AF6F]/10 border border-[#D4AF6F]/40 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#D4AF6F]" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase">Ativos atuais</p>
                <h3 className="font-playfair text-2xl font-medium text-[#F8F4EC]">
                  Forças do perfil
                </h3>
              </div>
            </div>
            <ul className="space-y-6">
              {analysis.strengths.map((item, idx) => (
                <li key={idx} className="grid grid-cols-[auto,1fr] gap-4">
                  <span className="font-playfair text-[#D4AF6F] text-2xl font-medium leading-none pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-semibold text-[#F8F4EC] mb-1.5">{item.title}</h4>
                    <p className="text-sm text-[#F8F4EC]/65 font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Oportunidades */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#C8302D] text-[#F8F4EC] p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#F8F4EC]/30">
              <div className="w-12 h-12 bg-[#F8F4EC]/10 border border-[#F8F4EC]/30 flex items-center justify-center">
                <AlertOctagon className="w-5 h-5 text-[#F8F4EC]" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#F8F4EC]/80 uppercase">Pontos críticos</p>
                <h3 className="font-playfair text-2xl font-medium text-[#F8F4EC]">
                  Oportunidades imediatas
                </h3>
              </div>
            </div>
            <ul className="space-y-6">
              {analysis.opportunities.map((item, idx) => (
                <li key={idx} className="grid grid-cols-[auto,1fr] gap-4">
                  <span className="font-playfair text-[#F8F4EC]/70 text-2xl font-medium leading-none pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-semibold text-[#F8F4EC] mb-1.5">{item.title}</h4>
                    <p className="text-sm text-[#F8F4EC]/85 font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Conclusão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto bg-[#18181C] border-l-4 border-[#C8302D] p-8 md:p-12"
        >
          <span className="block text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase mb-4">
            Diagnóstico Final
          </span>
          <p className="font-playfair text-xl md:text-2xl text-[#F8F4EC] leading-relaxed italic">
            &ldquo;{analysis.conclusion}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
