"use client";

import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, CheckCircle2, Search } from "lucide-react";
import type { ProposalAnalysis } from "@/lib/proposals-data";

interface Props {
  analysis: ProposalAnalysis;
  clientName: string;
}

export function ProposalAnalysisSection({ analysis, clientName }: Props) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-purple/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 px-5 py-2 text-sm font-bold text-brand-purple uppercase tracking-wider"
          >
            <Search className="w-4 h-4" />
            Análise Estratégica
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900"
          >
            Analisamos o perfil da{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
              {clientName}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            {analysis.intro}
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-green/5 to-white rounded-3xl p-8 border border-brand-green/15 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Pontos Fortes
              </h3>
            </div>

            <div className="space-y-5">
              {analysis.strengths.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {point.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-orange/5 to-white rounded-3xl p-8 border border-brand-orange/15 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Oportunidades de Crescimento
              </h3>
            </div>

            <div className="space-y-5">
              {analysis.opportunities.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-3.5 h-3.5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {point.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <p className="text-slate-700 font-semibold leading-relaxed text-lg">
              {analysis.conclusion}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
