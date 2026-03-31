"use client";

import { motion } from "framer-motion";
import type { ProposalAnalysis } from "@/lib/proposals-data";
import { TrendingUp, Activity, CheckCircle2, Search } from "lucide-react";

interface Props {
  analysis: ProposalAnalysis;
  clientName: string;
}

export function ProposalPremiumAnalysis({ analysis, clientName }: Props) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="py-24 md:py-32 relative bg-[#FAFAFA] overflow-hidden">
      {/* Subtle background blurs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-orange/5 blur-3xl pointer-events-none rounded-full mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-blue/5 blur-3xl pointer-events-none rounded-full mix-blend-multiply" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200/50 bg-white shadow-sm"
          >
            <Search className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-semibold tracking-widest text-slate-800 uppercase">
              Diagnóstico Estratégico
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900"
          >
            Uma visão sobre <br />
            <span className="italic text-slate-500 font-light">{clientName}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-500 font-light font-inter max-w-2xl mx-auto leading-relaxed"
          >
            {analysis.intro}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Strengths Card */}
          <motion.div variants={item} className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-white/80 backdrop-blur-xl border border-white p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 h-full flex flex-col">
              
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-playfair text-3xl font-medium text-slate-900">
                  Pontos Fortes
                </h3>
              </div>

              <div className="flex-1 space-y-8">
                {analysis.strengths.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-5 group/item">
                    <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-1 shadow-sm group-hover/item:border-brand-blue/30 group-hover/item:bg-brand-blue/5 transition-colors duration-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-brand-blue transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">
                        {point.title}
                      </h4>
                      <p className="text-slate-500 font-light leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Opportunities Card */}
          <motion.div variants={item} className="relative group perspective-1000 mt-8 lg:mt-0 lg:translate-y-12">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-white/80 backdrop-blur-xl border border-white p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 h-full flex flex-col">
              
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-playfair text-3xl font-medium text-slate-900">
                  Oportunidades
                </h3>
              </div>

              <div className="flex-1 space-y-8">
                {analysis.opportunities.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-5 group/item">
                    <div className="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-400 text-xs font-bold rounded-lg shadow-sm group-hover/item:border-brand-orange/30 group-hover/item:bg-brand-orange/5 group-hover/item:text-brand-orange transition-colors duration-300 shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">
                        {point.title}
                      </h4>
                      <p className="text-slate-500 font-light leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Conclusion Box */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="mt-32 max-w-4xl mx-auto"
        >
          <div className="relative rounded-[2.5rem] p-[1px] bg-gradient-to-br from-slate-200 via-transparent to-slate-200 overflow-hidden">
             <div className="absolute inset-0 bg-slate-50/50 backdrop-blur-3xl" />
             <div className="relative px-8 py-12 md:p-16 text-center z-10">
               <span className="font-playfair text-2xl md:text-3xl text-slate-800 leading-snug font-medium block">
                 “{analysis.conclusion}”
               </span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
