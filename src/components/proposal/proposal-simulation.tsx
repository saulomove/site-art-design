"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

interface ProposalSimulationProps {
  simulation: {
    title: string;
    items: string[];
  };
}

export function ProposalSimulation({ simulation }: ProposalSimulationProps) {
  if (!simulation || !simulation.items || simulation.items.length === 0) return null;

  return (
    <section className="py-20 relative bg-[#0a0f1c] border-y border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green font-bold text-sm mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Visão de Futuro
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight"
          >
            {simulation.title || "O que pode acontecer em 30 dias"}
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {simulation.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-brand-green/30 transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:bg-brand-green/30 transition-colors">
                <ArrowRight className="w-5 h-5 text-brand-green" />
              </div>
              <p className="text-lg md:text-xl text-slate-200 font-medium">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
