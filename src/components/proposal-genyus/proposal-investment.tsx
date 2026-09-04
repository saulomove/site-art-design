"use client";

import { motion } from "framer-motion";
import type { Proposal, ProposalInvestment } from "@/lib/proposals-data";
import { Unlock, Info, Minus } from "lucide-react";
import {
  VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

interface Props {
  investment: ProposalInvestment;
  packages?: Proposal["systemPackages"];
}

export function ProposalGenyusInvestment({ investment, packages }: Props) {
  return (
    <section id="investimento" className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[60%] w-[85%] -translate-x-1/2 rounded-full bg-[#CA8B35]/[0.09] blur-[170px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="Investimento"
          title="O sistema completo,"
          italic="e uma mensalidade só"
          lead="Três módulos que se alimentam entre si, entregues em nove semanas. A mensalidade é uma só e não muda com o tamanho do sistema — cobre hospedagem, suporte e evolução."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
          {/* Projeto */}
          <motion.div
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.75 }}
            className="relative flex flex-col border-2 border-[#CA8B35]/50 bg-[#161311] p-8 shadow-[0_0_90px_-30px_rgba(202,139,53,0.45)] md:p-10"
          >
            <div className="pointer-events-none absolute left-0 top-0">
              <div className="h-[2px] w-8 bg-[#CA8B35]" /><div className="h-8 w-[2px] bg-[#CA8B35]" />
            </div>
            <VinicolaEyebrow>{investment.setupLabel}</VinicolaEyebrow>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-3">
              <span className="font-playfair text-5xl font-medium text-[#CA8B35] md:text-7xl">
                {investment.setupFee}
              </span>
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[#CCCCCC]/45">
              3x de R$ 5.000 · nove semanas · 20 telas
            </p>

            {/* o que compõe o pacote */}
            {packages && packages.length > 0 && (
              <div className="mt-8 border-t border-[#CCCCCC]/10 pt-7">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC]/30">
                  O que entra no pacote
                </p>
                <ul className="mt-5 space-y-4">
                  {packages.map((m) => (
                    <li key={m.key} className="flex items-start justify-between gap-5">
                      <span className="min-w-0">
                        <span className="block text-[14px] font-semibold text-white">
                          {m.name}
                        </span>
                        <span className="mt-1 block text-[13px] leading-snug text-[#CCCCCC]/50">
                          {m.tagline}
                        </span>
                      </span>
                      <span className="flex-shrink-0 font-mono text-[13px] tabular-nums text-[#CCCCCC]/60">
                        {m.price}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start justify-between gap-5 border-t border-[#CCCCCC]/[0.08] pt-4">
                    <span className="min-w-0">
                      <span className="block text-[14px] font-semibold text-[#6D9B83]">
                        Base do sistema
                      </span>
                      <span className="mt-1 block text-[13px] leading-snug text-[#CCCCCC]/50">
                        Perfis, alertas, auditoria, relatórios e importação
                      </span>
                    </span>
                    <span className="flex-shrink-0 font-mono text-[13px] text-[#6D9B83]">
                      inclusa
                    </span>
                  </li>
                </ul>
              </div>
            )}

            {/* por que os três de uma vez */}
            <div className="mt-8 border-l-2 border-[#CA8B35]/50 bg-[#CA8B35]/[0.05] p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#CA8B35]">
                Por que os três de uma vez
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-[#CCCCCC]/75">
                Os três módulos formam um ciclo. O produtor que a vinícola cobra
                na Gestão de terceiros é um cliente dentro do CRM. Quem visita o
                Wine Garden no sábado entra na mesma base que recebe a campanha
                na terça. E a DaIA que responde no site é a mesma que confirma a
                reserva e joga o lead no funil.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-[#CCCCCC]/75">
                Separados, cada módulo resolve uma perda.{" "}
                <strong className="text-white">
                  Juntos, deixam de existir buracos entre eles.
                </strong>
              </p>
            </div>

            {/* dimensão do que está em jogo */}
            <p className="mt-6 text-[13px] leading-relaxed text-[#CCCCCC]/45">
              Para dimensionar: no simulador da seção da guarda, com{" "}
              <span className="text-[#CCCCCC]/70">20% do volume da sua safra em guarda a R$ 0,10 por litro</span>,
              a receita anual chega a R$ 46.740 — três vezes o investimento
              único do sistema completo. Não é promessa de receita, é a medida
              do que está em jogo.
            </p>

            {investment.setupNote && (
              <p className="mt-8 border-t border-[#CCCCCC]/10 pt-7 text-[13px] leading-relaxed text-[#CCCCCC]/45">{investment.setupNote}</p>
            )}
          </motion.div>

          {/* Mensal */}
          <motion.div
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.75, delay: 0.1 }}
            className="flex flex-col border border-[#CCCCCC]/12 bg-[#121110] p-8 md:p-10"
          >
            <VinicolaEyebrow>{investment.totalLabel}</VinicolaEyebrow>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-playfair text-5xl font-medium text-white md:text-6xl">{investment.totalMonthly}</span>
              <span className="text-lg text-[#CCCCCC]/40">/mês</span>
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#CCCCCC]/45">Um só, para quantos módulos forem</p>

            {investment.packageIncludes && (
              <ul className="mt-7 flex-1 space-y-3 border-t border-[#CCCCCC]/10 pt-7">
                {investment.packageIncludes.map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-[#CCCCCC]/75">
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#CA8B35]/70" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>

        {/* Sem fidelidade */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="mt-6 border border-[#CA8B35]/30 bg-[#CA8B35]/[0.05] p-10 text-center md:p-14"
        >
          <div className="flex justify-center"><Unlock className="h-6 w-6 text-[#CA8B35]" /></div>
          <h3 className="mx-auto mt-6 max-w-3xl font-playfair text-2xl font-medium leading-snug text-white md:text-4xl">
            Sem contrato de fidelidade.
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/65 md:text-base">
            A mensalidade é mês a mês. E o mais importante: o código e os dados
            são da Santa Augusta. Se um dia a parceria terminar, o sistema não
            vai embora junto.
          </p>
        </motion.div>

        {/* Fora do valor + condições */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {investment.exclusions && investment.exclusions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
              className="border border-[#CCCCCC]/10 bg-[#121110] p-8"
            >
              <VinicolaEyebrow>Fora do valor</VinicolaEyebrow>
              <ul className="mt-6 space-y-4">
                {investment.exclusions.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-[#CCCCCC]/55">
                    <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#CCCCCC]/30" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {investment.paymentConditions && (
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-[#CCCCCC]/10 bg-[#121110] p-8"
            >
              <VinicolaEyebrow>Condições</VinicolaEyebrow>
              <ul className="mt-6 space-y-3">
                {investment.paymentConditions.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-[#CCCCCC]/70">
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#CA8B35]/60" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {investment.notes && (
          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
            className="mt-6 border border-[#CCCCCC]/10 bg-[#121110] p-8"
          >
            <VinicolaEyebrow>Observações</VinicolaEyebrow>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {investment.notes.map((n, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#CA8B35]/60" />
                  <span className="text-[14px] leading-relaxed text-[#CCCCCC]/55">{n}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
