"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { MessageCircle, FileText } from "lucide-react";
import {
  VinicolaDivider, VinicolaEyebrow, VinicolaRule,
} from "../proposal-vinicola/vinicola-ui";

interface Props { proposal: Proposal }

export function ProposalGenyusCta({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  const msg = encodeURIComponent(
    "Olá! Recebi a proposta do Genyus Wine da ArtDesign para a Vinícola Santa Augusta e gostaria de conversar.",
  );
  const whatsappUrl = `https://wa.me/${proposal.whatsappNumber}?text=${msg}`;

  return (
    <section id="fechamento" className="relative scroll-mt-[68px] overflow-hidden bg-[#070707] py-24 md:py-32">
      <VinicolaDivider />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[55%] w-[75%] -translate-x-1/2 rounded-full bg-[#CA8B35]/[0.06] blur-[160px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        {proposal.differentials && proposal.differentials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <div className="mb-10 text-center"><VinicolaEyebrow>Por que com a gente</VinicolaEyebrow></div>
            <ul className="grid gap-x-12 gap-y-5 sm:grid-cols-2">
              {proposal.differentials.map((d, i) => (
                <li key={i} className="flex items-start gap-4 text-[15px] leading-relaxed text-[#CCCCCC]/80">
                  <span className="mt-[9px] h-[5px] w-[5px] flex-shrink-0 rotate-45 bg-[#CA8B35]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {proposal.caveats && proposal.caveats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-20 border border-[#CCCCCC]/10 bg-[#121110] p-8 md:p-12"
          >
            <div className="mb-8">
              <VinicolaEyebrow>O que precisa ficar claro</VinicolaEyebrow>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/60">
                Preferimos apontar os limites agora do que explicá-los depois.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {proposal.caveats.map((c, i) => (
                <div key={i} className="border-l border-[#CA8B35]/25 pl-6">
                  <h4 className="font-playfair text-base font-medium text-white md:text-lg">{c.title}</h4>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#CCCCCC]/55">{c.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }}
          className="text-center"
        >
          <div className="flex justify-center"><VinicolaRule width="w-16" /></div>
          <h2 className="mt-10 font-playfair text-3xl font-medium leading-[1.2] text-white md:text-5xl">
            <span className="block tracking-[0.08em]">A FRAN JÁ DESENHOU O SISTEMA.</span>
            <span className="mt-3 block italic text-[#CA8B35]">Nós vamos construí-lo.</span>
          </h2>

          {proposal.closingQuestion && (
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/60 md:text-lg">
              {proposal.closingQuestion}
            </p>
          )}

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 bg-[#CA8B35] px-10 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#0B0B0B] transition-colors duration-300 hover:bg-[#E6AE50] sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            {proposal.contractSlug && (
              <a href={`/contrato/${proposal.contractSlug}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 border border-[#CCCCCC]/25 px-10 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#CCCCCC] transition-colors duration-300 hover:border-[#CA8B35]/60 hover:text-white sm:w-auto">
                <FileText className="h-4 w-4" />
                Gerar contrato
              </a>
            )}
          </div>

          <p className="mt-8 text-[13px] text-[#CCCCCC]/35">Proposta válida até {formattedDate}</p>
        </motion.div>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-[#CCCCCC]/[0.08] pt-12">
          <p className="font-playfair text-lg font-medium tracking-[0.12em] text-[#CA8B35]">GENYUS WINE</p>
          <p className="text-center text-[11px] uppercase tracking-[0.24em] text-[#CCCCCC]/30">
            Desenvolvido pela ArtDesign · Videira/SC
          </p>
        </div>
      </div>
    </section>
  );
}
