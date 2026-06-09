"use client";
import { motion } from "framer-motion";
import type { ProposalAnalysis } from "@/lib/proposals-data";
import { CheckCircle2, AlertTriangle, Wrench } from "lucide-react";

interface Props { analysis: ProposalAnalysis; clientName: string; }

export function ProposalIndustrialAnalysis({ analysis, clientName }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#F5F0EB] text-[#111111] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#44D414]/40" />
        <Wrench className="mx-4 h-5 w-5 text-[#44D414]" />
        <div className="h-[1px] w-32 bg-[#44D414]/40" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block text-[11px] font-semibold tracking-[0.3em] text-[#44D414] uppercase font-inter">
            Diagnóstico Digital
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#111111] leading-[1.1]">
            O que encontramos na<br className="hidden md:block" />
            <span className="italic text-[#111111]/50">presença digital da {clientName}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-lg text-[#111111]/70 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            {analysis.intro}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Pontos Fortes */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white border border-[#111111]/10 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#44D414]/30">
              <CheckCircle2 className="w-6 h-6 text-[#44D414]" />
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#111111]">Pontos Positivos</h3>
            </div>
            <ul className="space-y-5">
              {analysis.strengths.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-playfair text-[#44D414] text-xl font-medium shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1 font-inter">{item.title}</h4>
                    <p className="text-sm text-[#111111]/65 font-inter leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Oportunidades */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-[#111111] text-[#F5F0EB] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#44D414]/30">
              <AlertTriangle className="w-6 h-6 text-[#44D414]" />
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#F5F0EB]">Oportunidades de Crescimento</h3>
            </div>
            <ul className="space-y-5">
              {analysis.opportunities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-playfair text-[#44D414] text-xl font-medium shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="font-semibold text-[#F5F0EB] mb-1 font-inter">{item.title}</h4>
                    <p className="text-sm text-[#F5F0EB]/65 font-inter leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative mx-auto max-w-4xl text-center border-l-2 border-r-2 border-[#44D414]/40 px-8 py-10">
          <span className="block text-[11px] font-semibold tracking-[0.3em] text-[#44D414] uppercase mb-4 font-inter">Conclusão do Diagnóstico</span>
          <p className="font-playfair text-xl md:text-2xl italic text-[#111111] leading-relaxed">&ldquo;{analysis.conclusion}&rdquo;</p>
        </motion.blockquote>
      </div>
    </section>
  );
}
