"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { Calendar, User, ChevronDown, Activity } from "lucide-react";
import { AciavBadge, AciavHighlight } from "./aciav-ui";

interface Props {
  proposal: Proposal;
}

export function ProposalAciavHero({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <section className="relative overflow-hidden bg-[#08494a] pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Gradiente e textura do hero do aciavsaude.com.br */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#08494a] via-[#0d6b6b] to-[#08494a]" />
        <div className="absolute -right-[10%] top-[-15%] h-[70%] w-[60%] rounded-full bg-[#1c9b96]/25 blur-[130px]" />
        <div className="absolute -left-[10%] bottom-[-20%] h-[60%] w-[50%] rounded-full bg-[#08494a] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Marca */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center gap-2.5"
        >
          <Activity className="h-6 w-6 flex-shrink-0 text-[#e85d1f]" />
          <span className="text-lg font-extrabold tracking-tight text-white">
            ACIAV<span className="text-white/70">SAÚDE</span>
          </span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          {/* Coluna de texto */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <AciavBadge onDark>Proposta de adesão · Unidade ACIC</AciavBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-7 text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Tudo que Videira tem,
              <br />
              Caçador terá em{" "}
              <AciavHighlight>7 dias úteis</AciavHighlight>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              {proposal.greeting}
            </motion.p>

            {/* Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.07] px-5 py-4 ring-1 ring-white/15">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                  <User className="h-4 w-4 text-white/70" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Apresentado a
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {proposal.contactName}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.07] px-5 py-4 ring-1 ring-white/15">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Calendar className="h-4 w-4 text-white/70" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Válida até
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {formattedDate}
                  </span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Coluna dos destaques */}
          {proposal.highlights && proposal.highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="rounded-3xl bg-white p-7 shadow-[0_30px_60px_-20px_rgba(8,30,40,.45)] md:p-9"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6a7a86]">
                Em resumo
              </span>

              <ul className="mt-6 space-y-5">
                {proposal.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#e6f3f2] text-[11px] font-bold text-[#0d6b6b]">
                      {idx + 1}
                    </span>
                    <span className="text-[15px] leading-relaxed text-[#2b3b48]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl bg-[#fff1e8] px-5 py-4">
                <p className="text-sm font-semibold text-[#cf4f15]">
                  Implantação R$ 3.900 · Mensalidade R$ 500
                </p>
                <p className="mt-1 text-[13px] text-[#cf4f15]/75">
                  Implantação em 3x no boleto
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 mt-16 flex justify-center"
      >
        <ChevronDown className="h-5 w-5 animate-bounce text-white/35" />
      </motion.div>
    </section>
  );
}
