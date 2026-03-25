"use client";

import { motion } from "framer-motion";
import { MoveRight, XSquare, CheckCircle, Zap } from "lucide-react";
import type { ProposalBeforeAfter } from "@/lib/proposals-data";

interface Props {
  beforeAfter: ProposalBeforeAfter;
  clientName: string;
}

export function ProposalBeforeAfter({ beforeAfter, clientName }: Props) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-950">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/10 via-slate-950 to-brand-green/10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            A Virada de Chave
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            O que acontece quando aplicamos nossa estratégia no perfil da {clientName}.
          </motion.p>
        </div>

        {/* The Split Container */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-4 items-stretch mb-20">
          
          {/* BEFORE SIDE (Red/Orange) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-red-950/40 to-slate-900 border border-red-500/20 rounded-3xl p-8 backdrop-blur-md overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-red-500/20 transition-all duration-700" />
            
            <h3 className="text-2xl font-bold text-red-400 mb-8 border-b border-red-500/10 pb-4">
              {beforeAfter.beforeTitle}
            </h3>
            
            <ul className="space-y-6">
              {beforeAfter.beforeItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <XSquare className="w-6 h-6 shrink-0 mt-0.5 text-red-500/60" />
                  <span className="text-slate-300 font-medium leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ARROW DIVIDER (Only visible on MD+) */}
          <div className="hidden md:flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center relative z-20 shadow-[-10px_0_30px_rgba(239,68,68,0.2),10px_0_30px_rgba(34,197,94,0.2)]"
            >
              <MoveRight className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* AFTER SIDE (Green/Cyan) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-brand-green/10 to-brand-blue/10 border border-brand-green/30 rounded-3xl p-8 backdrop-blur-md overflow-hidden group shadow-[0_0_50px_rgba(34,197,94,0.1)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-brand-green/30 transition-all duration-700" />
            
            <h3 className="text-2xl font-bold text-brand-green mb-8 border-b border-brand-green/20 pb-4">
              {beforeAfter.afterTitle}
            </h3>
            
            <ul className="space-y-6">
              {beforeAfter.afterItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 shrink-0 mt-0.5 text-brand-green" />
                  <span className="text-white font-semibold leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Expected Results (The Climax) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden p-[1px]">
            {/* Animated glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-purple to-brand-blue animate-pulse opacity-50" />
            <div className="relative bg-slate-950/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-purple flex items-center justify-center shrink-0 shadow-lg shadow-brand-orange/20">
                <Zap className="w-10 h-10 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple mb-2">
                  Qual é o alvo dessa transformação?
                </h4>
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                  {beforeAfter.expectedResults}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
