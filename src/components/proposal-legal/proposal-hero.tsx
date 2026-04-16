"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { Scale, Calendar, ChevronDown } from "lucide-react";

interface Props {
  proposal: Proposal;
}

export function ProposalLegalHero({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-[#0A0F1C] text-[#F5F1E8] pt-20 pb-24 sm:pt-0 sm:pb-0">
      {/* Subtle gold glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-[100%] bg-[#C9A961]/[0.06] blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-[100%] bg-[#C9A961]/[0.04] blur-[120px]" />
      </div>

      {/* Ornamental top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 inline-flex items-center gap-2 px-6 py-2.5 rounded-none border border-[#C9A961]/30 bg-[#C9A961]/[0.04] backdrop-blur-xl"
        >
          <Scale className="w-4 h-4 text-[#C9A961]" />
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#C9A961] uppercase">
            Proposta Exclusiva · Advocacia
          </span>
        </motion.div>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mx-auto mb-8 flex items-center justify-center gap-3"
        >
          <div className="h-[1px] w-16 bg-[#C9A961]/40" />
          <div className="h-1 w-1 rotate-45 bg-[#C9A961]" />
          <div className="h-[1px] w-16 bg-[#C9A961]/40" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#F5F1E8] leading-[1.1] mb-8"
        >
          Uma estratégia digital à altura <br className="hidden md:block" />
          <span className="italic text-[#C9A961]">
            do {proposal.clientName}
          </span>
        </motion.h1>

        {/* Greeting / Intro */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-lg md:text-xl text-[#F5F1E8]/60 font-inter font-light max-w-3xl mx-auto leading-relaxed mb-14"
        >
          {proposal.greeting}
        </motion.p>

        {/* Info Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-3 px-6 py-4 bg-[#0F1626] border border-[#C9A961]/20 text-[#F5F1E8]">
            <div className="w-10 h-10 rounded-full bg-[#C9A961]/10 border border-[#C9A961]/30 flex items-center justify-center">
              <span className="font-playfair text-lg font-semibold text-[#C9A961]">
                {proposal.contactName.charAt(0)}
              </span>
            </div>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-[#C9A961]/70 font-medium uppercase tracking-[0.25em]">Apresentado a</p>
              <p className="font-semibold text-[#F5F1E8]">{proposal.contactName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-4 bg-[#0F1626] border border-[#C9A961]/20 text-[#F5F1E8]">
            <div className="w-10 h-10 rounded-full bg-[#C9A961]/10 border border-[#C9A961]/30 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#C9A961]" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-[#C9A961]/70 font-medium uppercase tracking-[0.25em]">Válida até</p>
              <p className="font-semibold text-[#F5F1E8]">{formattedDate}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 mt-16 sm:mt-0 sm:absolute sm:bottom-12 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center gap-2 text-[#C9A961]/60"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Rolar para ler</span>
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
