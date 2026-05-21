"use client";

import { motion } from "framer-motion";
import type { ProposalAnalysis } from "@/lib/proposals-data";
import { CheckCircle2, AlertTriangle, Leaf } from "lucide-react";

interface Props {
  analysis: ProposalAnalysis;
  clientName: string;
}

export function ProposalBiomassAnalysis({ analysis, clientName }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0C1F14] text-[#F2EAD0] overflow-hidden">
      {/* Top ornament */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#C4A035]/40" />
        <Leaf className="mx-4 h-5 w-5 text-[#C4A035]" />
        <div className="h-[1px] w-32 bg-[#C4A035]/40" />
      </div>
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-[#2D5040]/40 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] font-semibold tracking-[0.3em] text-[#C4A035] uppercase"
          >
            Diagnóstico Digital
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F2EAD0] leading-[1.1]"
          >
            Análise completa do ecossistema<br className="hidden md:block" />
            <span className="italic text-[#C4A035]">da {clientName}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-[#F2EAD0]/60 font-inter font-light max-w-3xl mx-auto leading-relaxed"
          >
            {analysis.intro}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Pontos Fortes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A3524] border border-[#C4A035]/15 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#C4A035]/20">
              <CheckCircle2 className="w-6 h-6 text-[#C4A035]" />
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#F2EAD0]">
                Pontos Fortes
              </h3>
            </div>
            <ul className="space-y-6">
              {analysis.strengths.map((item, idx) => (
                <li key={idx}>
                  <div className="flex items-start gap-3">
                    <span className="font-playfair text-[#C4A035] text-xl font-medium shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-semibold text-[#F2EAD0] mb-1.5">{item.title}</h4>
                      <p className="text-sm text-[#F2EAD0]/60 font-inter leading-relaxed">{item.description}</p>
                    </div>
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
            className="bg-[#F2EAD0] text-[#0C1F14] p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#0C1F14]/15">
              <AlertTriangle className="w-6 h-6 text-[#C4A035]" />
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#0C1F14]">
                Oportunidades de Crescimento
              </h3>
            </div>
            <ul className="space-y-6">
              {analysis.opportunities.map((item, idx) => (
                <li key={idx}>
                  <div className="flex items-start gap-3">
                    <span className="font-playfair text-[#C4A035] text-xl font-medium shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-semibold text-[#0C1F14] mb-1.5">{item.title}</h4>
                      <p className="text-sm text-[#0C1F14]/65 font-inter leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Conclusão */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl text-center border-l-2 border-r-2 border-[#C4A035]/40 px-8 py-10"
        >
          <span className="block text-[11px] font-semibold tracking-[0.3em] text-[#C4A035] uppercase mb-4">
            Conclusão do Diagnóstico
          </span>
          <p className="font-playfair text-xl md:text-2xl italic text-[#F2EAD0] leading-relaxed">
            &ldquo;{analysis.conclusion}&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
