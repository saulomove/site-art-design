"use client";

import { motion } from "framer-motion";
import type { ProposalInvestment } from "@/lib/proposals-data";
import { Handshake, CheckCircle2, Sprout, Beef, Minus } from "lucide-react";
import { CampoDivider } from "./campo-ui";

interface Props {
  investment: ProposalInvestment;
}

/** Acento por posição no split — Massaneiro (verde) primeiro, UDK (dourado) depois. */
const SPLIT_TONES = [
  { text: "text-[#6E8F5E]", border: "border-[#6E8F5E]/35", bg: "bg-[#6E8F5E]/[0.07]", Icon: Sprout },
  { text: "text-[#CBA65C]", border: "border-[#CBA65C]/35", bg: "bg-[#CBA65C]/[0.07]", Icon: Beef },
] as const;

export function ProposalCampoPartnership({ investment }: Props) {
  return (
    <section className="relative bg-[#0A0A09] text-[#EFEBE0] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" />

      {/* Glow mais forte da página — os dois acentos convergindo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] left-[3%] w-[48%] h-[50%] bg-[#6E8F5E]/[0.11] blur-[150px] rounded-full" />
        <div className="absolute bottom-[3%] right-[3%] w-[48%] h-[50%] bg-[#CBA65C]/[0.11] blur-[150px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border border-[#CBA65C]/35 bg-gradient-to-r from-[#6E8F5E]/[0.08] to-[#CBA65C]/[0.08]">
            <Handshake className="w-4 h-4 text-[#CBA65C]" />
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase font-inter bg-gradient-to-r from-[#6E8F5E] to-[#CBA65C] bg-clip-text text-transparent">
              Parceria Digital Completa
            </span>
          </div>

          <h2 className="font-playfair text-3xl md:text-5xl font-medium leading-tight text-[#EFEBE0] mb-6">
            Em vez de dois contratos separados,
            <br className="hidden md:block" />{" "}
            <span className="italic inline-block pr-[0.12em] bg-gradient-to-r from-[#6E8F5E] to-[#CBA65C] bg-clip-text text-transparent">
              uma operação conjunta
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#EFEBE0]/55 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            É uma parceria de comunicação das duas empresas — não dois planos de
            social media rodando em paralelo. É daí que vem a condição especial.
          </p>
        </motion.div>

        {/* ---------- 1. IMPLANTAÇÃO (peso secundário) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#151614] border border-[#6E8F5E]/30 p-8 md:p-10 mb-6"
        >
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#6E8F5E] font-inter font-semibold mb-2">
                Etapa única
              </p>
              <h3 className="font-playfair text-xl md:text-2xl font-medium text-[#EFEBE0] mb-5">
                {investment.setupLabel ?? "Implantação"}
              </h3>

              {investment.setupIncludes &&
                investment.setupIncludes.length > 0 && (
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    {investment.setupIncludes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[13px] text-[#EFEBE0]/60 font-inter leading-snug"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8F5E] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
            </div>

            {/* Preço da implantação */}
            <div className="lg:text-right lg:border-l lg:border-[#EFEBE0]/10 lg:pl-12 flex-shrink-0">
              {investment.setupItems && investment.setupItems.length > 0 && (
                <div className="space-y-1.5 mb-3">
                  {investment.setupItems.map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between lg:justify-end lg:gap-4 text-[13px] font-inter"
                    >
                      <span className="text-[#EFEBE0]/40">{row.item}</span>
                      <span className="text-[#EFEBE0]/55 tabular-nums">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {investment.setupOriginalPrice && (
                <p className="text-sm font-inter text-[#EFEBE0]/35 line-through decoration-[#EFEBE0]/25 mb-2">
                  {investment.setupOriginalPrice}
                </p>
              )}

              <p className="font-playfair text-4xl md:text-5xl font-medium text-[#6E8F5E] leading-none">
                {investment.setupFee}
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#EFEBE0]/35 font-inter mt-2">
                Contratação conjunta
              </p>
            </div>
          </div>

          {investment.setupNote && (
            <p className="mt-6 pt-5 border-t border-[#EFEBE0]/[0.07] text-xs italic text-[#EFEBE0]/35 font-inter leading-relaxed">
              {investment.setupNote}
            </p>
          )}
        </motion.div>

        {/* ---------- 2. GESTÃO MENSAL (o clímax) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="bg-gradient-to-r from-[#6E8F5E] via-[#B09E58] to-[#CBA65C] p-[2px] shadow-[0_0_80px_-20px_rgba(203,166,92,0.35)]"
        >
          <div className="bg-[#0A0A09] p-8 md:p-14">
            {/* Badge */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 border border-[#CBA65C]/40 bg-[#CBA65C]/[0.07]">
                <Handshake className="w-3.5 h-3.5 text-[#CBA65C]" />
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase font-inter text-[#CBA65C]">
                  A proposta que queremos fechar
                </span>
              </div>

              <h3 className="font-playfair text-2xl md:text-4xl font-medium text-[#EFEBE0] leading-tight mb-3">
                {investment.totalLabel ?? "Gestão completa mensal"}
              </h3>
              <p className="text-sm md:text-base text-[#EFEBE0]/50 font-inter font-light max-w-2xl mx-auto">
                Um único contrato cobrindo as duas contas por completo — do
                planejamento à publicação, da ida a campo ao relatório.
              </p>
            </div>

            {/* Preço */}
            <div className="text-center mb-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#EFEBE0]/35 font-inter mb-4">
                Condição especial Massaneiro + UDK
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-playfair text-6xl md:text-8xl font-medium leading-none bg-gradient-to-r from-[#6E8F5E] to-[#CBA65C] bg-clip-text text-transparent">
                  {investment.totalMonthly}
                </span>
                <span className="text-lg md:text-2xl text-[#EFEBE0]/40 font-inter">
                  /mês
                </span>
              </div>
              <p className="font-playfair text-lg md:text-xl italic text-[#EFEBE0]/70 mt-4">
                as duas empresas juntas, com tudo incluso
              </p>
            </div>

            {/* Split por perfil */}
            {investment.splitItems && investment.splitItems.length > 0 && (
              <div className="mb-10">
                {investment.splitLabel && (
                  <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#EFEBE0]/35 font-inter mb-5">
                    {investment.splitLabel}
                  </p>
                )}
                <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {investment.splitItems.map((item, idx) => {
                    const tone = SPLIT_TONES[idx % SPLIT_TONES.length];
                    const SplitIcon = tone.Icon;
                    return (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between gap-4 border p-6 ${tone.border} ${tone.bg}`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <SplitIcon
                            className={`w-5 h-5 flex-shrink-0 ${tone.text}`}
                          />
                          <span className="text-sm font-inter text-[#EFEBE0]/75 leading-tight">
                            {item.label}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1 flex-shrink-0">
                          <span
                            className={`font-playfair text-3xl font-medium ${tone.text}`}
                          >
                            {item.value}
                          </span>
                          <span className="text-xs text-[#EFEBE0]/35 font-inter">
                            /mês
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Ancoragem — texto, não número riscado (ver nota no data layer) */}
            {investment.originalPrice && (
              <p className="text-center text-sm md:text-base text-[#EFEBE0]/50 font-inter font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Contratada individualmente, com as captações avulsas, a operação
                completa das duas empresas{" "}
                <span className="text-[#EFEBE0]/80 font-medium">
                  ultrapassaria {investment.originalPrice} por mês
                </span>
                .
              </p>
            )}

            {/* Incluso */}
            {investment.packageIncludes &&
              investment.packageIncludes.length > 0 && (
                <div className="border-t border-[#EFEBE0]/10 pt-8">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#EFEBE0]/40 font-inter font-semibold mb-6 text-center">
                    Tudo isto está incluso — nas duas contas
                  </p>
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                    {investment.packageIncludes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-[13px] text-[#EFEBE0]/70 font-inter leading-snug"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CBA65C] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Exclusões */}
            {investment.exclusions && investment.exclusions.length > 0 && (
              <div className="mt-8 pt-8 border-t border-[#EFEBE0]/10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#EFEBE0]/35 font-inter font-semibold mb-4 text-center">
                  As duas únicas coisas fora do valor
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {investment.exclusions.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 bg-[#151614] border border-[#EFEBE0]/[0.07] px-5 py-4 text-[13px] text-[#EFEBE0]/50 font-inter leading-snug"
                    >
                      <Minus className="w-3.5 h-3.5 text-[#EFEBE0]/30 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>

        {/* Condições e observações */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {investment.paymentConditions &&
            investment.paymentConditions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8 }}
                className="bg-[#151614] border border-[#EFEBE0]/[0.07] p-8"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#EFEBE0]/35 font-inter font-semibold mb-4">
                  Condições
                </p>
                <ul className="space-y-3">
                  {investment.paymentConditions.map((condition, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[#EFEBE0]/55 font-inter leading-relaxed"
                    >
                      <span className="text-[#EFEBE0]/25 flex-shrink-0 leading-5">
                        ◆
                      </span>
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

          {investment.notes && investment.notes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#151614] border border-[#EFEBE0]/[0.07] p-8"
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#EFEBE0]/35 font-inter font-semibold mb-4">
                Observações
              </p>
              <ul className="space-y-3">
                {investment.notes.map((note, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-[#EFEBE0]/40 font-inter leading-relaxed"
                  >
                    <span className="text-[#EFEBE0]/20 flex-shrink-0 leading-5">
                      ◆
                    </span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
