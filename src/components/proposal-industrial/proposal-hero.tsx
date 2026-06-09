"use client";
import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { Wrench, Calendar, ChevronDown, Zap } from "lucide-react";

interface Props { proposal: Proposal; }

export function ProposalIndustrialHero({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-[#111111] text-[#F5F0EB] pt-20 pb-24 sm:pt-0 sm:pb-0">
      {/* Orange glow top */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[70%] h-[50%] rounded-[100%] bg-[#44D414]/[0.12] blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-[100%] bg-[#44D414]/[0.06] blur-[120px]" />
        {/* Industrial dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #44D414 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#44D414]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#44D414]/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 inline-flex items-center gap-3 px-6 py-3 border border-[#44D414]/40 bg-[#44D414]/[0.08] backdrop-blur-xl"
        >
          <Wrench className="w-4 h-4 text-[#44D414]" />
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#44D414] uppercase font-inter">
            Proposta Estratégica · Ferramentas &amp; Equipamentos Profissionais
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#F5F0EB] leading-[1.1] mb-6"
        >
          Mais presença digital<br className="hidden md:block" />
          para a <span className="italic text-[#44D414]">{proposal.clientName}</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mb-8 flex items-center justify-center gap-3"
        >
          <div className="h-[1px] w-12 bg-[#44D414]/40" />
          <Zap className="w-4 h-4 text-[#44D414]" />
          <div className="h-[1px] w-12 bg-[#44D414]/40" />
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-lg md:text-xl text-[#F5F0EB]/60 font-inter font-light max-w-3xl mx-auto leading-relaxed mb-12"
        >
          {proposal.greeting}
        </motion.p>

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-3 px-6 py-4 bg-[#1A1A1A] border border-[#44D414]/20 text-[#F5F0EB]">
            <div className="w-10 h-10 rounded-full bg-[#44D414]/10 border border-[#44D414]/30 flex items-center justify-center">
              <Wrench className="w-4 h-4 text-[#44D414]" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-[#44D414]/70 font-medium uppercase tracking-[0.25em] font-inter">Apresentado a</p>
              <p className="font-semibold text-[#F5F0EB] font-inter">{proposal.contactName}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 bg-[#1A1A1A] border border-[#44D414]/20 text-[#F5F0EB]">
            <div className="w-10 h-10 rounded-full bg-[#44D414]/10 border border-[#44D414]/30 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#44D414]" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-[#44D414]/70 font-medium uppercase tracking-[0.25em] font-inter">Válida até</p>
              <p className="font-semibold text-[#F5F0EB] font-inter">{formattedDate}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 mt-16 sm:mt-0 sm:absolute sm:bottom-12 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center gap-2 text-[#44D414]/60"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase font-inter">Rolar para ler</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
