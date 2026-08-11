"use client";

import { motion } from "framer-motion";
import type { ProposalInvestment } from "@/lib/proposals-data";
import { Handshake, CheckCircle2 } from "lucide-react";
import { CampoDivider } from "./campo-ui";

interface Props {
  investment: ProposalInvestment;
}

export function ProposalCampoPartnership({ investment }: Props) {
  return (
    <section className="relative bg-[#0A0A09] text-[#EFEBE0] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" />

      {/* Glow mais forte da página — os dois acentos convergindo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[45%] h-[50%] bg-[#6E8F5E]/[0.10] blur-[150px] rounded-full" />
        <div className="absolute bottom-[5%] right-[5%] w-[45%] h-[50%] bg-[#CBA65C]/[0.10] blur-[150px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
            <span className="italic bg-gradient-to-r from-[#6E8F5E] to-[#CBA65C] bg-clip-text text-transparent">
              uma operação conjunta
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#EFEBE0]/55 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            É uma parceria de comunicação das duas empresas — não dois planos de
            social media rodando em paralelo. É daí que vem a condição especial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* ---- IMPLANTAÇÃO ---- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#151614] border-2 border-[#6E8F5E]/40 p-8 md:p-10 relative flex flex-col"
          >
            <div className="absolute top-0 left-0 pointer-events-none">
              <div className="w-6 h-[2px] bg-[#6E8F5E]" />
              <div className="w-[2px] h-6 bg-[#6E8F5E]" />
            </div>
            <div className="absolute top-0 right-0 pointer-events-none flex flex-col items-end">
              <div className="w-6 h-[2px] bg-[#6E8F5E]" />
              <div className="w-[2px] h-6 bg-[#6E8F5E] ml-auto" />
            </div>

            <p className="text-[10px] tracking-[0.3em] uppercase text-[#6E8F5E] font-inter font-semibold mb-2">
              Etapa única
            </p>
            <h3 className="font-playfair text-2xl font-medium text-[#EFEBE0] mb-6">
              {investment.setupLabel ?? "Implantação"}
            </h3>

            {/* Somatório individual */}
            {investment.setupItems && investment.setupItems.length > 0 && (
              <div className="space-y-2.5 mb-5">
                {investment.setupItems.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-sm font-inter"
                  >
                    <span className="text-[#EFEBE0]/45">{row.item}</span>
                    <span className="text-[#EFEBE0]/60">{row.value}</span>
                  </div>
                ))}
              </div>
            )}

            {investment.setupOriginalPrice && (
              <div className="flex items-center justify-between border-t border-[#EFEBE0]/10 pt-4 mb-6">
                <span className="text-sm text-[#EFEBE0]/40 font-inter">
                  Valor individual somado
                </span>
                <span className="text-base font-inter text-[#EFEBE0]/40 line-through decoration-[#EFEBE0]/30">
                  {investment.setupOriginalPrice}
                </span>
              </div>
            )}

            {/* Preço */}
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#EFEBE0]/35 font-inter mb-2">
              Condição especial para contratação conjunta
            </p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-playfair text-5xl md:text-6xl font-medium text-[#6E8F5E]">
                {investment.setupFee}
              </span>
            </div>

            {/* Inclusos */}
            {investment.setupIncludes && investment.setupIncludes.length > 0 && (
              <div className="border-t border-[#EFEBE0]/10 pt-6 flex-1">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#EFEBE0]/35 font-inter mb-4">
                  Incluso na implantação
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {investment.setupIncludes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[13px] text-[#EFEBE0]/65 font-inter leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8F5E] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {investment.setupNote && (
              <p className="mt-6 text-xs italic text-[#EFEBE0]/35 font-inter leading-relaxed">
                {investment.setupNote}
              </p>
            )}
          </motion.div>

          {/* ---- GESTÃO MENSAL ---- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#151614] border-2 border-[#CBA65C]/40 p-8 md:p-10 relative flex flex-col"
          >
            <div className="absolute top-0 left-0 pointer-events-none">
              <div className="w-6 h-[2px] bg-[#CBA65C]" />
              <div className="w-[2px] h-6 bg-[#CBA65C]" />
            </div>
            <div className="absolute top-0 right-0 pointer-events-none flex flex-col items-end">
              <div className="w-6 h-[2px] bg-[#CBA65C]" />
              <div className="w-[2px] h-6 bg-[#CBA65C] ml-auto" />
            </div>

            <p className="text-[10px] tracking-[0.3em] uppercase text-[#CBA65C] font-inter font-semibold mb-2">
              Recorrente
            </p>
            <h3 className="font-playfair text-2xl font-medium text-[#EFEBE0] mb-6">
              {investment.totalLabel ?? "Gestão completa mensal"}
            </h3>

            {/* Ancoragem como TEXTO — a soma mensal isolada é menor que o pacote;
                riscar um número aqui seria enganoso. */}
            {investment.originalPrice && (
              <p className="text-sm text-[#EFEBE0]/45 font-inter font-light leading-relaxed border-t border-[#EFEBE0]/10 pt-4 mb-6">
                Contratada individualmente, com as captações avulsas, a operação
                completa das duas empresas{" "}
                <span className="text-[#EFEBE0]/70">
                  ultrapassaria {investment.originalPrice} por mês
                </span>
                .
              </p>
            )}

            <p className="text-[10px] tracking-[0.25em] uppercase text-[#EFEBE0]/35 font-inter mb-2">
              Condição especial Massaneiro + UDK
            </p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-playfair text-5xl md:text-6xl font-medium text-[#CBA65C]">
                {investment.totalMonthly}
              </span>
              <span className="text-base text-[#EFEBE0]/40 font-inter">/mês</span>
            </div>

            {investment.packageIncludes &&
              investment.packageIncludes.length > 0 && (
                <div className="border-t border-[#EFEBE0]/10 pt-6 flex-1">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#EFEBE0]/35 font-inter mb-4">
                    Incluso no projeto conjunto
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {investment.packageIncludes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-[13px] text-[#EFEBE0]/65 font-inter leading-snug"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CBA65C] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </motion.div>
        </div>

        {/* Condições e observações */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
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
