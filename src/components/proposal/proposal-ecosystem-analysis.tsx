"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Share2,
  Store,
  GraduationCap,
  Activity,
  MapPin,
  Globe
} from "lucide-react";
import type { ProposalEcosystemAnalysisItem } from "@/lib/proposals-data";

interface Props {
  ecosystemAnalyses: ProposalEcosystemAnalysisItem[];
  clientName: string;
}

const getIconForTitle = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes("loja") || lower.includes("ecommerce") || lower.includes("e-commerce")) return Store;
  if (lower.includes("curso") || lower.includes("academy")) return GraduationCap;
  if (lower.includes("laser") || lower.includes("clínica") || lower.includes("clinica")) return Activity;
  if (lower.includes("google") || lower.includes("local")) return MapPin;
  return Globe;
};

export function ProposalEcosystemAnalysis({
  ecosystemAnalyses,
  clientName,
}: Props) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50 border-y border-slate-200">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-orange/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 px-5 py-2 text-sm font-bold text-brand-orange uppercase tracking-wider"
          >
            <Share2 className="w-4 h-4" />
            Análise do Ecossistema Digital
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900"
          >
            Visão 360° do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">
              Ecossistema
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Além do Instagram, mapeamos como cada canal de aquisição está estruturado hoje e onde estão as maiores oportunidades de integração e escala para as operações de {clientName}.
          </motion.p>
        </div>

        {/* Ecosystem Items Grid */}
        <div className="max-w-6xl mx-auto grid gap-12 lg:gap-16">
          {ecosystemAnalyses.map((item, idx) => {
            const Icon = getIconForTitle(item.title);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden"
              >
                {/* Decorative background shape */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-50 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Title Area */}
                  <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white shadow-lg shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-slate-500 font-medium mt-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Strengths */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                          Pontos Fortes
                        </div>
                      </div>
                      <div className="space-y-5">
                        {item.strengths.map((point, i) => (
                          <div key={i} className="flex gap-4 group">
                            <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-emerald-100 transition-all">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                            <div>
                              <h5 className="font-bold text-slate-900 mb-1 leading-snug">
                                {point.title}
                              </h5>
                              <p className="text-slate-600 text-sm leading-relaxed">
                                {point.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Opportunities */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Pontos de Atenção
                        </div>
                      </div>
                      <div className="space-y-5">
                        {item.opportunities.map((point, i) => (
                          <div key={i} className="flex gap-4 group">
                            <div className="w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-amber-100 transition-all">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                            </div>
                            <div>
                              <h5 className="font-bold text-slate-900 mb-1 leading-snug">
                                {point.title}
                              </h5>
                              <p className="text-slate-600 text-sm leading-relaxed">
                                {point.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Conclusion highlight */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 pointer-events-none" />
             <p className="text-white text-lg font-medium relative z-10 leading-relaxed">
               <span className="text-brand-orange font-bold">O próximo passo não é crescer desordenadamente,</span><br/>é estruturar todas essas frentes para que funcionem juntas como um <span className="text-brand-blue font-bold">sistema de aquisição escalável</span>.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
