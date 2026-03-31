"use client";

import { motion } from "framer-motion";
import type { ProposalEcosystemAnalysisItem } from "@/lib/proposals-data";
import { 
  CheckCircle2, 
  MapPin, 
  ShoppingCart, 
  GraduationCap, 
  Zap, 
  Target 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  analyses: ProposalEcosystemAnalysisItem[];
  clientName: string;
}

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  ShoppingCart,
  GraduationCap,
  Zap,
};

export function ProposalPremiumEcosystem({ analyses, clientName }: Props) {
  return (
    <section className="py-24 md:py-32 relative bg-white overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200/50 bg-white/50 backdrop-blur-xl shadow-sm"
          >
            <Target className="w-5 h-5 text-brand-orange" />
            <span className="text-xs font-semibold tracking-widest text-slate-800 uppercase">
              Integração de Frentes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]"
          >
            Ecossistema Completo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-500 font-light font-inter max-w-2xl mx-auto leading-relaxed"
          >
            Nossa auditoria detalhada sobre as demais frentes ativas de {" "}
            <span className="font-medium text-slate-900">{clientName}</span>,
            mostrando pontos de alavancagem não explorados.
          </motion.p>
        </div>

        <div className="space-y-16 lg:space-y-32">
          {analyses.map((analysis, index) => {
            // Find a matching icon by checking substrings
            let matchedKey: React.ElementType = Target;
            if (analysis.title.toLowerCase().includes("loja")) matchedKey = iconMap["ShoppingCart"];
            if (analysis.title.toLowerCase().includes("academy")) matchedKey = iconMap["GraduationCap"];
            if (analysis.title.toLowerCase().includes("laser")) matchedKey = iconMap["Zap"];
            if (analysis.title.toLowerCase().includes("google")) matchedKey = iconMap["MapPin"];

            const IconComponent = matchedKey || Target;
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={cn(
                  "flex flex-col gap-12 lg:gap-24 relative",
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row",
                  "items-center"
                )}
              >
                {/* Visual Block (Glass Frame) */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[2.5rem] p-1 bg-gradient-to-br from-slate-200/50 via-slate-100 to-slate-200/50">
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[2.5rem]" />
                    <div className="relative h-full w-full rounded-[2.2rem] bg-slate-50 overflow-hidden flex items-center justify-center p-12">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-brand-blue)_0%,_transparent_60%)] mix-blend-multiply blur-2xl" />
                      
                      {/* Icon inside an Apple-style glowing bubble */}
                      <div className="relative z-10 w-32 h-32 rounded-full bg-white shadow-2xl shadow-brand-blue/10 flex items-center justify-center border border-slate-100 isolate">
                        <IconComponent className="w-12 h-12 text-slate-900" />
                        <div className="absolute inset-0 rounded-full border border-white mix-blend-overlay" />
                      </div>
                      
                      <div className="absolute bottom-8 left-8 right-8 text-center">
                         <span className="font-playfair text-3xl font-medium tracking-tight text-slate-800/20 uppercase tracking-widest">{analysis.title}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="w-full lg:w-1/2 space-y-10">
                  <div>
                    <h3 className="font-playfair text-4xl font-medium text-slate-900 mb-4">
                      {analysis.title}
                    </h3>
                    <p className="text-xl text-slate-500 font-light font-inter leading-relaxed">
                      {analysis.subtitle}
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Strengths List */}
                    {analysis.strengths.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-3">O que já funciona</h4>
                        <ul className="space-y-3">
                          {analysis.strengths.map((str, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-slate-800 font-medium leading-relaxed">{str.title}</span>
                                {str.description && <span className="text-slate-500 font-light text-sm">{str.description}</span>}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Opportunities List */}
                    {analysis.opportunities.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-orange border-b border-brand-orange/10 pb-3">Gargalos Encontrados</h4>
                        <ul className="space-y-4">
                          {analysis.opportunities.map((opp, i) => (
                            <li key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-brand-orange/5 border border-brand-orange/10">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0" />
                               <div className="flex flex-col">
                                <span className="text-slate-700 font-medium leading-relaxed">{opp.title}</span>
                                {opp.description && <span className="text-slate-500 font-light text-sm mt-1">{opp.description}</span>}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
