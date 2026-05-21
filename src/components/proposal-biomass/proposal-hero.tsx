"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { Leaf, Calendar, Award, ChevronDown } from "lucide-react";

interface Props { proposal: Proposal; }

export function ProposalBiomassHero({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-[#0C1F14] text-[#F2EAD0] pt-20 pb-24 sm:pt-0 sm:pb-0">
      {/* Green glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-[100%] bg-[#2D5040]/40 blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-[100%] bg-[#C4A035]/[0.06] blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C4A035]/30 to-transparent" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C4A035]/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        {/* Certification badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 inline-flex items-center gap-3 px-6 py-3 border border-[#C4A035]/40 bg-[#C4A035]/[0.06] backdrop-blur-xl"
        >
          <Award className="w-4 h-4 text-[#C4A035]" />
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C4A035] uppercase">
            Proposta Estratégica · Biomassa Certificada ENplus A1
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mx-auto mb-8 flex items-center justify-center gap-3"
        >
          <div className="h-[1px] w-16 bg-[#C4A035]/40" />
          <Leaf className="w-4 h-4 text-[#C4A035]" />
          <div className="h-[1px] w-16 bg-[#C4A035]/40" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#F2EAD0] leading-[1.1] mb-8"
        >
          Crescimento digital para<br className="hidden md:block" />
          <span className="italic text-[#C4A035]">
            a {proposal.clientName}
          </span>
        </motion.h1>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-lg md:text-xl text-[#F2EAD0]/60 font-inter font-light max-w-3xl mx-auto leading-relaxed mb-14"
        >
          {proposal.greeting}
        </motion.p>

        {/* Info chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-3 px-6 py-4 bg-[#1A3524] border border-[#C4A035]/20 text-[#F2EAD0]">
            <div className="w-10 h-10 rounded-full bg-[#C4A035]/10 border border-[#C4A035]/30 flex items-center justify-center">
              <span className="font-playfair text-lg font-semibold text-[#C4A035]">
                {proposal.contactName.charAt(0)}
              </span>
            </div>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-[#C4A035]/70 font-medium uppercase tracking-[0.25em]">Apresentado a</p>
              <p className="font-semibold text-[#F2EAD0]">{proposal.contactName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-4 bg-[#1A3524] border border-[#C4A035]/20 text-[#F2EAD0]">
            <div className="w-10 h-10 rounded-full bg-[#C4A035]/10 border border-[#C4A035]/30 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#C4A035]" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-[#C4A035]/70 font-medium uppercase tracking-[0.25em]">Válida até</p>
              <p className="font-semibold text-[#F2EAD0]">{formattedDate}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 mt-16 sm:mt-0 sm:absolute sm:bottom-12 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center gap-2 text-[#C4A035]/60"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Rolar para ler</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
