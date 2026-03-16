"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Sparkles } from "lucide-react";
import type { Proposal } from "@/lib/proposals-data";

interface ProposalHeroProps {
  proposal: Proposal;
}

export function ProposalHero({ proposal }: ProposalHeroProps) {
  const validDate = new Date(proposal.validUntil);
  const formattedDate = validDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-bl from-brand-orange/20 to-brand-green/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 rounded-full blur-[100px]"
        />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-20 flex flex-col items-center gap-8">
        {/* ArtDesign Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/logo-full.png"
            alt="ArtDesign"
            className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-70"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 rounded-full border border-brand-purple/30 bg-white/5 backdrop-blur-md px-6 py-2.5 text-sm font-semibold text-brand-purple shadow-lg shadow-brand-purple/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
          </span>
          Proposta Exclusiva
        </motion.div>

        {/* Client Logo */}
        {proposal.clientLogo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={proposal.clientLogo}
              alt={proposal.clientName}
              className="h-16 md:h-20 w-auto object-contain"
            />
          </motion.div>
        )}

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] text-white"
        >
          Proposta para{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange animate-gradient-x">
            {proposal.clientName}
          </span>
        </motion.h1>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed font-light"
        >
          {proposal.greeting}
        </motion.p>

        {/* Validity & Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm px-5 py-2.5 text-sm text-slate-300">
            <Clock className="w-4 h-4 text-brand-orange" />
            Válida até {formattedDate}
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm px-5 py-2.5 text-sm text-slate-300">
            <Shield className="w-4 h-4 text-brand-green" />
            Proposta confidencial
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm px-5 py-2.5 text-sm text-slate-300">
            <Sparkles className="w-4 h-4 text-brand-purple" />
            Feita sob medida
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-500 uppercase tracking-widest">Role para ver</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-brand-purple"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
