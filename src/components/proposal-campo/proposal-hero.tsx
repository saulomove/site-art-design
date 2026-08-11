"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { Handshake, Calendar, ChevronDown } from "lucide-react";
import { ACCENT, CAMPO_ICONS, CAMPO_ICON_FALLBACK } from "./campo-ui";

interface Props {
  proposal: Proposal;
}

export function ProposalCampoHero({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  const companies = proposal.companies ?? [];

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-[#0A0A09] text-[#EFEBE0] pt-20 pb-24 sm:pt-0 sm:pb-0">
      {/* Ambient glow — um blob por marca, convergindo no centro */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[55%] rounded-[100%] bg-[#6E8F5E]/[0.10] blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[55%] rounded-[100%] bg-[#CBA65C]/[0.10] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #CBA65C 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Linha de topo: verde → dourado */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6E8F5E]/70 via-[#EFEBE0]/20 to-[#CBA65C]/70" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#6E8F5E]/20 via-transparent to-[#CBA65C]/20" />

      {/* Cantos */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <div className="w-8 h-[1px] bg-[#6E8F5E]/40" />
        <div className="w-[1px] h-8 bg-[#6E8F5E]/40" />
      </div>
      <div className="absolute top-6 right-6 pointer-events-none flex flex-col items-end">
        <div className="w-8 h-[1px] bg-[#CBA65C]/40" />
        <div className="w-[1px] h-8 bg-[#CBA65C]/40 ml-auto" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 border border-[#EFEBE0]/15 bg-[#EFEBE0]/[0.03] backdrop-blur-xl"
        >
          <Handshake className="w-4 h-4 flex-shrink-0 text-[#CBA65C]" />
          <span className="text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.28em] text-[#EFEBE0]/70 uppercase font-inter text-left leading-relaxed">
            Proposta de Presença Digital · Monte Castelo/SC
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#EFEBE0] leading-[1.1] mb-6"
        >
          A autoridade que já existe no campo,
          <br className="hidden md:block" />{" "}
          <span className="italic bg-gradient-to-r from-[#6E8F5E] to-[#CBA65C] bg-clip-text text-transparent">
            agora também no digital.
          </span>
        </motion.h1>

        {/* Divisor animado */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mb-8 flex items-center justify-center gap-3"
        >
          <div className="h-[1px] w-16 bg-[#6E8F5E]/50" />
          <Handshake className="w-5 h-5 text-[#EFEBE0]/50" />
          <div className="h-[1px] w-16 bg-[#CBA65C]/50" />
        </motion.div>

        {/* Conceito */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
          className="text-base md:text-lg text-[#EFEBE0]/55 font-inter font-light max-w-3xl mx-auto leading-relaxed mb-12"
        >
          {proposal.greeting}
        </motion.p>

        {/* As duas marcas — lockup tipográfico, uma placa por empresa */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10"
        >
          {companies.map((company) => {
            const a = ACCENT[company.accent];
            const Icon = CAMPO_ICONS[company.icon] ?? CAMPO_ICON_FALLBACK;
            return (
              <div
                key={company.key}
                className={`flex items-center gap-4 p-5 text-left border ${a.border} ${a.bgSoft}`}
              >
                <div
                  className={`w-11 h-11 flex items-center justify-center flex-shrink-0 border ${a.borderStrong}`}
                >
                  <Icon className={`w-5 h-5 ${a.text}`} />
                </div>
                <div className="min-w-0">
                  <div className="font-playfair text-lg font-medium text-[#EFEBE0] leading-tight">
                    {company.name}
                  </div>
                  <div
                    className={`text-[11px] tracking-[0.1em] sm:tracking-[0.18em] uppercase font-inter mt-1 leading-relaxed ${a.text}`}
                  >
                    {company.tagline}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-3 px-6 py-4 bg-[#151614] border border-[#EFEBE0]/10">
            <div className="w-10 h-10 rounded-full bg-[#EFEBE0]/[0.04] border border-[#EFEBE0]/15 flex items-center justify-center flex-shrink-0">
              <Handshake className="w-5 h-5 text-[#EFEBE0]/60" />
            </div>
            <div className="text-left">
              <div className="text-[11px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase text-[#EFEBE0]/35 font-inter mb-0.5">
                Apresentado a
              </div>
              <div className="text-sm font-semibold font-inter text-[#EFEBE0]">
                {proposal.contactName}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-4 bg-[#151614] border border-[#EFEBE0]/10">
            <div className="w-10 h-10 rounded-full bg-[#EFEBE0]/[0.04] border border-[#EFEBE0]/15 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-[#EFEBE0]/60" />
            </div>
            <div className="text-left">
              <div className="text-[11px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase text-[#EFEBE0]/35 font-inter mb-0.5">
                Válida até
              </div>
              <div className="text-sm font-semibold font-inter text-[#EFEBE0]">
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
        className="relative z-10 mt-16 sm:absolute sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2 sm:mt-0 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] md:text-[10px] tracking-[0.18em] md:tracking-[0.25em] uppercase text-[#EFEBE0]/25 font-inter">
          Rolar para ler
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#EFEBE0]/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}
