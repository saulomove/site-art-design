"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { TrendingUp, Calendar, ChevronDown } from "lucide-react";

interface Props {
  proposal: Proposal;
}

export function ProposalExecutiveHero({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-[#0F0F12] text-[#F8F4EC] pt-20 pb-24 sm:pt-0 sm:pb-0">
      {/* Diagonal stripe pattern background */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C8302D 0, #C8302D 1px, transparent 1px, transparent 14px)"
        }}
      />
      {/* Crimson glow */}
      <div className="absolute top-[-20%] left-[10%] w-[60%] h-[60%] rounded-full bg-[#C8302D]/[0.08] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#D4AF6F]/[0.05] blur-[140px] pointer-events-none" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 flex">
        <div className="h-[3px] flex-1 bg-[#C8302D]" />
        <div className="h-[3px] w-32 bg-[#D4AF6F]" />
        <div className="h-[3px] flex-1 bg-[#C8302D]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <div className="h-[1px] w-12 bg-[#D4AF6F]/60" />
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase">
            Proposta Estratégica · Consórcio
          </span>
          <div className="h-[1px] w-12 bg-[#D4AF6F]/60" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="text-center font-playfair text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#F8F4EC] leading-[1.05] mb-8"
        >
          De licenciado a <br className="hidden md:block" />
          <span className="italic font-normal">
            <span className="text-[#C8302D]">autoridade</span> digital
          </span>
        </motion.h1>

        {/* Subhead with name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="text-center text-base md:text-lg text-[#D4AF6F] font-inter font-semibold tracking-[0.3em] uppercase mb-6"
        >
          Para {proposal.clientName}
        </motion.p>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="text-center text-lg md:text-xl text-[#F8F4EC]/70 font-inter font-light max-w-3xl mx-auto leading-relaxed mb-14"
        >
          {proposal.greeting}
        </motion.p>

        {/* Info bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:divide-x sm:divide-[#D4AF6F]/20 border-y border-[#D4AF6F]/20 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 px-8 py-5">
            <div className="w-10 h-10 bg-[#C8302D]/10 border border-[#C8302D]/40 flex items-center justify-center">
              <span className="font-playfair text-base font-semibold text-[#C8302D]">
                {proposal.contactName.charAt(0)}
              </span>
            </div>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-[#D4AF6F]/70 font-bold uppercase tracking-[0.3em]">Apresentado a</p>
              <p className="font-semibold text-[#F8F4EC]">{proposal.contactName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-8 py-5">
            <div className="w-10 h-10 bg-[#D4AF6F]/10 border border-[#D4AF6F]/40 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#D4AF6F]" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-[#D4AF6F]/70 font-bold uppercase tracking-[0.3em]">Válida até</p>
              <p className="font-semibold text-[#F8F4EC]">{formattedDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-8 py-5">
            <div className="w-10 h-10 bg-[#C8302D]/10 border border-[#C8302D]/40 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#C8302D]" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-[#D4AF6F]/70 font-bold uppercase tracking-[0.3em]">Foco</p>
              <p className="font-semibold text-[#F8F4EC]">Personal Brand · Leads</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 mt-16 sm:mt-0 sm:absolute sm:bottom-12 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center gap-2 text-[#D4AF6F]/60"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Os números não mentem</span>
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
