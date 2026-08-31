"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { MessageCircle, Activity, Building2, FileText } from "lucide-react";
import { AciavBadge, AciavHighlight, AciavCheck } from "./aciav-ui";

interface Props {
  proposal: Proposal;
}

export function ProposalAciavCta({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  const whatsappMessage = encodeURIComponent(
    "Olá! Recebi a proposta da ArtDesign para a ACIC utilizar o ACIAV Saúde e gostaria de conversar.",
  );
  const whatsappUrl = `https://wa.me/${proposal.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden bg-[#08494a] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#08494a] via-[#0d6b6b] to-[#08494a]" />
        <div className="absolute left-1/2 top-0 h-[60%] w-[70%] -translate-x-1/2 rounded-full bg-[#1c9b96]/20 blur-[130px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        {/* Diferenciais */}
        {proposal.differentials && proposal.differentials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 rounded-3xl bg-white/[0.06] p-8 ring-1 ring-white/10 md:p-10"
          >
            <AciavBadge onDark>Em resumo</AciavBadge>
            <ul className="mt-7 grid gap-4 text-[15px] leading-relaxed text-white/85 sm:grid-cols-2 sm:gap-x-10">
              {proposal.differentials.map((item, idx) => (
                <AciavCheck key={idx} tone="white">
                  {item}
                </AciavCheck>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
            O sistema já existe.
            <br />
            Falta{" "}
            <AciavHighlight>abrir a unidade da ACIC</AciavHighlight>
          </h2>

          {proposal.closingQuestion && (
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {proposal.closingQuestion}
            </p>
          )}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#e85d1f] px-9 py-5 text-base font-bold text-white transition-colors duration-300 hover:bg-[#cf4f15] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>

            {proposal.contractSlug && (
              <a
                href={`/contrato/${proposal.contractSlug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-9 py-5 text-base font-bold text-[#08494a] ring-1 ring-white/30 transition-colors duration-300 hover:bg-[#e6f3f2] sm:w-auto"
              >
                <FileText className="h-5 w-5" />
                Gerar contrato
              </a>
            )}
          </div>

          <p className="mt-6 text-sm text-white/45">
            Proposta válida até {formattedDate}
          </p>
        </motion.div>

        {/* Dados para formalização */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 rounded-3xl bg-white p-8 md:p-10"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6a7a86]">
            <Building2 className="h-3.5 w-3.5" />
            Dados para formalização
          </span>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#6a7a86]">
                Contratante
              </span>
              <p className="mt-2 text-[15px] font-bold leading-snug text-[#0c1e2a]">
                Associação Empresarial de Caçador — ACIC
              </p>
              <p className="mt-1 text-sm text-[#2b3b48]/70">
                CNPJ 83.059.667/0001-97
              </p>
              <p className="mt-1 text-sm text-[#2b3b48]/70">
                Responsável: {proposal.contactName}
              </p>
            </div>

            <div className="md:border-l md:border-[#e7ecef] md:pl-8">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#6a7a86]">
                Contratada
              </span>
              <p className="mt-2 text-[15px] font-bold leading-snug text-[#0c1e2a]">
                Saulo Cristiano Machado
              </p>
              <p className="mt-1 text-sm text-[#2b3b48]/70">
                CNPJ 51.035.885/0001-03
              </p>
              <p className="mt-1 text-sm text-[#2b3b48]/70">
                Caçador — SC · (49) 98844-6685
              </p>
            </div>
          </div>
        </motion.div>

        {/* Rodapé */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/10 pt-10">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-[#e85d1f]" />
            <span className="text-base font-extrabold tracking-tight text-white">
              ACIAV<span className="text-white/60">SAÚDE</span>
            </span>
          </div>
          <p className="text-center text-[13px] text-white/40">
            Plataforma desenvolvida e mantida pela ArtDesign
          </p>
        </div>
      </div>
    </section>
  );
}
