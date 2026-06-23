"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { Sprout, Wheat, Calendar, ChevronDown } from "lucide-react";

interface Props {
  proposal: Proposal;
}

export function ProposalPastoralHero({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-[#0B1A0D] text-[#EDE5CC] pt-20 pb-24 sm:pt-0 sm:pb-0">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gold top-center */}
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] rounded-[100%] bg-[#C9A037]/[0.10] blur-[160px]" />
        {/* Green bottom-right */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] rounded-[100%] bg-[#3D7A42]/[0.14] blur-[130px]" />
        {/* Gold bottom-left */}
        <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] rounded-[100%] bg-[#C9A037]/[0.07] blur-[120px]" />
        {/* Grain dot texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #C9A037 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A037]/70 to-transparent" />
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A037]/20 to-transparent" />

      {/* Corner accents top-left */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <div className="w-8 h-[1px] bg-[#C9A037]/40" />
        <div className="w-[1px] h-8 bg-[#C9A037]/40" />
      </div>
      {/* Corner accents top-right */}
      <div className="absolute top-6 right-6 pointer-events-none flex flex-col items-end">
        <div className="w-8 h-[1px] bg-[#C9A037]/40" />
        <div className="w-[1px] h-8 bg-[#C9A037]/40 ml-auto" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 inline-flex items-center gap-3 px-6 py-3 border border-[#C9A037]/40 bg-[#C9A037]/[0.08] backdrop-blur-xl"
        >
          <Sprout className="w-4 h-4 text-[#C9A037]" />
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C9A037] uppercase font-inter">
            Proposta Estratégica · Agronegócio Premium · Lebon Régis/SC
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#EDE5CC] leading-[1.1] mb-6"
        >
          A qualidade da alfafa
          <br className="hidden md:block" />
          já existe.{" "}
          <span className="italic text-[#C9A037]">Falta o mundo saber.</span>
        </motion.h1>

        {/* Animated gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mb-8 flex items-center justify-center gap-3"
        >
          <div className="h-[1px] w-12 bg-[#C9A037]/40" />
          <Wheat className="w-5 h-5 text-[#C9A037]" />
          <div className="h-[1px] w-12 bg-[#C9A037]/40" />
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
          className="text-lg md:text-xl text-[#EDE5CC]/60 font-inter font-light max-w-3xl mx-auto leading-relaxed mb-12"
        >
          {proposal.greeting}
        </motion.p>

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Chip 1 — Presented to */}
          <div className="flex items-center gap-3 px-6 py-4 bg-[#132714] border border-[#C9A037]/20 text-[#EDE5CC]">
            <div className="w-10 h-10 rounded-full bg-[#C9A037]/10 border border-[#C9A037]/30 flex items-center justify-center flex-shrink-0">
              <Sprout className="w-5 h-5 text-[#C9A037]" />
            </div>
            <div className="text-left">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#EDE5CC]/40 font-inter mb-0.5">
                Apresentado a
              </div>
              <div className="text-sm font-semibold font-inter text-[#EDE5CC]">
                {proposal.contactName}
              </div>
            </div>
          </div>

          {/* Chip 2 — Valid until */}
          <div className="flex items-center gap-3 px-6 py-4 bg-[#132714] border border-[#C9A037]/20 text-[#EDE5CC]">
            <div className="w-10 h-10 rounded-full bg-[#C9A037]/10 border border-[#C9A037]/30 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-[#C9A037]" />
            </div>
            <div className="text-left">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#EDE5CC]/40 font-inter mb-0.5">
                Válida até
              </div>
              <div className="text-sm font-semibold font-inter text-[#EDE5CC]">
                {formattedDate}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="relative z-10 mt-16 sm:absolute sm:bottom-12 sm:left-1/2 sm:-translate-x-1/2 sm:mt-0 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#EDE5CC]/30 font-inter">
          Rolar para ler
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#C9A037]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
