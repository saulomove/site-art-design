"use client";

import { motion } from "framer-motion";
import type { ProposalAnalysis } from "@/lib/proposals-data";
import { CheckCircle2, AlertCircle, TrendingUp, Wheat } from "lucide-react";

interface Props {
  analysis: ProposalAnalysis;
  clientName: string;
}

export function ProposalPastoralAnalysis({ analysis, clientName }: Props) {
  return (
    <>
      {/* ── Light diagnostic section ── */}
      <section className="relative bg-[#F6EFDF] text-[#0B1A0D] py-24 md:py-32 overflow-hidden">
        {/* Section divider */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
          <div className="h-[1px] w-32 bg-[#C9A037]/40" />
          <Wheat className="mx-4 h-5 w-5 text-[#C9A037]" />
          <div className="h-[1px] w-32 bg-[#C9A037]/40" />
        </div>

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
                Diagnóstico Estratégico
              </span>
              <div className="h-[1px] w-8 bg-[#C9A037]/60" />
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-medium text-[#0B1A0D] leading-tight mb-6">
              O que encontramos na{" "}
              <span className="italic text-[#0B1A0D]/50">
                presença digital da {clientName}
              </span>
            </h2>
            <p className="text-base md:text-lg text-[#0B1A0D]/60 font-inter font-light max-w-2xl mx-auto leading-relaxed">
              {analysis.intro}
            </p>
          </motion.div>

          {/* Two-column cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT — Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white border border-[#0B1A0D]/10 p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-6 h-6 text-[#3D7A42] flex-shrink-0" />
                <h3 className="font-playfair text-xl font-medium text-[#0B1A0D]">
                  Pontos Fortes
                </h3>
              </div>
              <ul className="space-y-6">
                {analysis.strengths.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-[11px] font-bold text-[#C9A037] font-inter tracking-wider flex-shrink-0 mt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0B1A0D] font-inter mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-[#0B1A0D]/55 font-inter leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT — Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0B1A0D] text-[#EDE5CC] p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <AlertCircle className="w-6 h-6 text-[#C9A037] flex-shrink-0" />
                <h3 className="font-playfair text-xl font-medium text-[#EDE5CC]">
                  Oportunidades de Crescimento
                </h3>
              </div>
              <ul className="space-y-6">
                {analysis.opportunities.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-[11px] font-bold text-[#C9A037] font-inter tracking-wider flex-shrink-0 mt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#EDE5CC] font-inter mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-[#EDE5CC]/50 font-inter leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Dark transformation block ── */}
      <section className="relative bg-[#0B1A0D] text-[#EDE5CC] py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#132714] border border-[#C9A037]/20 p-10 md:p-14"
          >
            {/* Corner accents — top-left */}
            <div className="absolute top-0 left-0 pointer-events-none">
              <div className="w-8 h-[1px] bg-[#C9A037]/40" />
              <div className="w-[1px] h-8 bg-[#C9A037]/40" />
            </div>
            {/* Corner accents — bottom-right */}
            <div className="absolute bottom-0 right-0 pointer-events-none flex flex-col items-end">
              <div className="w-[1px] h-8 bg-[#C9A037]/40 ml-auto" />
              <div className="w-8 h-[1px] bg-[#C9A037]/40" />
            </div>

            {/* Label */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-[#C9A037]/10 border border-[#C9A037]/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-[#C9A037]" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C9A037] font-inter">
                Transformação de Posicionamento
              </span>
            </div>

            {/* 3-col comparison */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center mb-10">
              {/* TODAY */}
              <div className="bg-[#0B1A0D] border border-[#C9A037]/10 p-8 text-center">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#EDE5CC]/30 font-inter mb-3">
                  Hoje
                </p>
                <p className="font-playfair text-lg md:text-xl italic text-[#EDE5CC]/60 leading-relaxed">
                  &ldquo;Uma fazenda que vende alfafa.&rdquo;
                </p>
              </div>

              {/* Divider */}
              <div className="flex flex-col items-center gap-3 py-4">
                <div className="h-8 w-[1px] bg-[#C9A037]/20 hidden md:block" />
                <Wheat className="w-6 h-6 text-[#C9A037]/60" />
                <div className="h-8 w-[1px] bg-[#C9A037]/20 hidden md:block" />
              </div>

              {/* OBJECTIVE */}
              <div className="bg-[#1A3A1A] border border-[#C9A037]/20 p-8 text-center">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A037]/60 font-inter mb-3">
                  Objetivo
                </p>
                <p className="font-playfair text-lg md:text-xl italic text-[#C9A037] leading-relaxed">
                  &ldquo;Referência em alfafa premium no Sul do Brasil.&rdquo;
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="border-t border-[#C9A037]/10 pt-8">
              <p className="font-playfair text-base md:text-lg italic text-[#EDE5CC]/50 text-center leading-relaxed max-w-3xl mx-auto">
                &ldquo;{analysis.conclusion}&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
