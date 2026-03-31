"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { Sparkles, Calendar, ChevronDown } from "lucide-react";

interface Props {
  proposal: Proposal;
}

export function ProposalPremiumHero({ proposal }: Props) {
  // Configuração simples para não depender do date-fns atoa
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white selection:bg-brand-blue/20">
      {/* Liquid Glass Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-[100%] bg-gradient-to-r from-brand-blue/10 to-brand-purple/5 blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-[100%] bg-gradient-to-r from-brand-orange/10 to-transparent blur-[120px] mix-blend-multiply opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200/60 bg-white/40 backdrop-blur-xl shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-brand-orange" />
          <span className="text-sm font-medium tracking-widest text-slate-600 uppercase">
            Proposta Exclusiva
          </span>
        </motion.div>

        {/* Main Headline (Playfair Display) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-8"
        >
          Preparado para <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-brand-purple to-slate-900 animate-gradient bg-[length:200%_auto]">
            {proposal.clientName}
          </span>
        </motion.h1>

        {/* Greeting / Intro */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-500 font-inter font-light max-w-3xl mx-auto leading-relaxed mb-12"
        >
          {proposal.greeting}
        </motion.p>

        {/* Info Cards Row (Liquid Glass) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-slate-700">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <span className="font-playfair text-lg font-bold text-slate-900">
                {proposal.contactName.charAt(0)}
              </span>
            </div>
            <div className="text-left leading-tight">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Apresentado a</p>
              <p className="font-semibold text-slate-900">{proposal.contactName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-slate-700">
            <div className="w-10 h-10 rounded-full bg-brand-orange/5 flex items-center justify-center border border-brand-orange/10">
              <Calendar className="w-4 h-4 text-brand-orange" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Válida até</p>
              <p className="font-semibold text-slate-900">{formattedDate}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Rolar para ler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
