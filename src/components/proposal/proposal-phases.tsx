"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Rocket } from "lucide-react";
import type { ProposalPhase } from "@/lib/proposals-data";

interface Props {
  phases: ProposalPhase[];
}

const phaseColors = [
  { bg: "bg-brand-blue/10", border: "border-brand-blue/20", text: "text-brand-blue", dot: "bg-brand-blue" },
  { bg: "bg-brand-purple/10", border: "border-brand-purple/20", text: "text-brand-purple", dot: "bg-brand-purple" },
  { bg: "bg-brand-green/10", border: "border-brand-green/20", text: "text-brand-green", dot: "bg-brand-green" },
  { bg: "bg-brand-orange/10", border: "border-brand-orange/20", text: "text-brand-orange", dot: "bg-brand-orange" },
];

export function ProposalPhases({ phases }: Props) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-brand-orange/10 to-brand-green/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2 text-sm font-bold text-brand-blue uppercase tracking-wider"
          >
            <Rocket className="w-4 h-4" />
            Roadmap do Projeto
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white"
          >
            Crescimento{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">
              estruturado por fases
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Um plano de evolução gradual para que o investimento cresça conforme os resultados aparecem.
          </motion.p>
        </div>

        {/* Phases Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {phases.map((phase, i) => {
            const color = phaseColors[i % phaseColors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group"
              >
                {/* Phase Number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${color.bg} flex items-center justify-center`}>
                    <span className={`text-lg font-black ${color.text}`}>{phase.number}</span>
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${color.text}`}>
                      Fase {phase.number}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                {/* Objective */}
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {phase.objective}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  {phase.deliverables.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${color.text} opacity-70`} />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Expected Result */}
                <div className={`flex items-start gap-2 p-3 rounded-xl ${color.bg} border ${color.border}`}>
                  <ArrowRight className={`w-4 h-4 mt-0.5 shrink-0 ${color.text}`} />
                  <span className={`text-sm font-semibold ${color.text}`}>
                    {phase.expectedResult}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
