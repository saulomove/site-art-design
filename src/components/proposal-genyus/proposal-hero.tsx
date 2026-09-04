"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { ChevronDown } from "lucide-react";
import { VinicolaRule } from "../proposal-vinicola/vinicola-ui";

interface Props {
  proposal: Proposal;
}

export function ProposalGenyusHero({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <section
      id="inicio"
      className="relative flex min-h-[95vh] scroll-mt-[68px] flex-col items-center justify-center overflow-hidden bg-[#0B0B0B] px-4 py-24 sm:py-0"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-15%] h-[65%] w-[80%] -translate-x-1/2 rounded-full bg-[#CA8B35]/[0.07] blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[55%] w-[55%] rounded-full bg-[#CA8B35]/[0.05] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #CA8B35 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[6%] left-1/2 -translate-x-1/2 select-none font-playfair text-[20vw] font-medium leading-none tracking-[0.06em] text-white/[0.022]"
      >
        GENYUS
      </span>

      <div className="pointer-events-none absolute left-6 top-6">
        <div className="h-[1px] w-10 bg-[#CA8B35]/40" />
        <div className="h-10 w-[1px] bg-[#CA8B35]/40" />
      </div>
      <div className="pointer-events-none absolute right-6 top-6 flex flex-col items-end">
        <div className="h-[1px] w-10 bg-[#CA8B35]/40" />
        <div className="ml-auto h-10 w-[1px] bg-[#CA8B35]/40" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 flex justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/clientes/santa-augusta/logo-vsa.png"
            alt="Vinícola Santa Augusta"
            width={500}
            height={167}
            className="h-14 w-auto md:h-16"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#CCCCCC]/45 md:tracking-[0.44em]"
        >
          Proposta de Sistema · Genyus Wine
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-8 font-playfair text-[2rem] font-medium leading-[1.2] text-white sm:text-5xl lg:text-[3.5rem]"
        >
          <span className="block tracking-[0.1em] sm:tracking-[0.14em]">
            MEIO MILHÃO DE REAIS
          </span>
          <span className="mt-2 block italic text-[#CA8B35]">
            controlados numa planilha.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <VinicolaRule width="w-20" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mx-auto mt-10 max-w-2xl text-[15px] font-light leading-relaxed text-[#CCCCCC]/70 md:text-lg"
        >
          {proposal.greeting}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-14 flex flex-col items-center justify-center gap-5 text-[11px] uppercase tracking-[0.22em] text-[#CCCCCC]/40 sm:flex-row sm:gap-8"
        >
          <span>Genyus Wine</span>
          <span
            aria-hidden="true"
            className="hidden h-3 w-[1px] bg-[#CA8B35]/40 sm:block"
          />
          <span>Safra 2026 · 14 produtores</span>
          <span
            aria-hidden="true"
            className="hidden h-3 w-[1px] bg-[#CA8B35]/40 sm:block"
          />
          <span>Válida até {formattedDate}</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative z-10 mt-16 sm:absolute sm:bottom-10 sm:mt-0"
      >
        <ChevronDown className="h-5 w-5 animate-bounce text-[#CA8B35]/45" />
      </motion.div>
    </section>
  );
}
