"use client";

import { motion } from "framer-motion";
import { Grape, MessagesSquare, CalendarDays, Layers, Check, type LucideIcon } from "lucide-react";
import type { Proposal } from "@/lib/proposals-data";
import {
  VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

const ICONES: Record<string, LucideIcon> = {
  grape: Grape,
  messages: MessagesSquare,
  calendar: CalendarDays,
};

interface Props {
  packages?: Proposal["systemPackages"];
  base?: Proposal["systemBase"];
}

export function ProposalGenyusPacotes({ packages, base }: Props) {
  if (!packages || packages.length === 0) return null;

  return (
    <section
      id="pacotes"
      className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32"
    >
      <VinicolaDivider />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[55%] w-[85%] -translate-x-1/2 rounded-full bg-[#CA8B35]/[0.06] blur-[170px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="O sistema em três partes"
          title="Três módulos."
          italic="Contrate na ordem que doer mais."
          lead="O Genyus Wine não é um bloco só. São três sistemas que conversam entre si e funcionam separados — cada um resolvendo uma perda diferente da vinícola. A base do sistema vem junto em qualquer um deles."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((m, idx) => {
            const Icon = ICONES[m.icon] ?? Layers;
            return (
              <motion.article
                key={m.key}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: Math.min(idx, 3) * 0.08 }}
                className={`flex flex-col border bg-[#121110] p-8 md:p-9 ${
                  m.highlight
                    ? "border-[#CA8B35]/45 shadow-[0_0_80px_-35px_rgba(202,139,53,0.5)] lg:-mt-4 lg:mb-4"
                    : "border-[#CCCCCC]/12"
                }`}
              >
                {/* cabeçalho */}
                <div className="flex items-start justify-between gap-4">
                  <Icon className={`h-5 w-5 ${m.highlight ? "text-[#CA8B35]" : "text-[#CCCCCC]/50"}`} />
                  {m.highlight && (
                    <span className="bg-[#CA8B35] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#0B0B0B]">
                      comece por aqui
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-playfair text-2xl font-medium text-white">
                  {m.name}
                </h3>
                <p className="mt-2 text-[13px] italic leading-snug text-[#CA8B35]">
                  {m.tagline}
                </p>

                {/* preço */}
                <div className="mt-7 border-y border-[#CCCCCC]/10 py-6">
                  <p className="font-playfair text-4xl font-medium leading-none text-white">
                    {m.price}
                  </p>
                  <p className="mt-2.5 text-[12px] text-[#CCCCCC]/45">
                    {m.installments} · {m.weeks}
                  </p>
                </div>

                {/* a dor */}
                <p className="mt-6 text-[14px] leading-relaxed text-[#CCCCCC]/60">
                  {m.pain}
                </p>

                {/* entregas */}
                <ul className="mt-6 flex-1 space-y-2.5">
                  {m.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] leading-snug text-[#CCCCCC]/75">
                      <Check className={`mt-[3px] h-3 w-3 flex-shrink-0 ${m.highlight ? "text-[#CA8B35]" : "text-[#6D9B83]"}`} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                {/* telas */}
                <div className="mt-7 border-t border-[#CCCCCC]/10 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC]/30">
                    {m.screens.length} telas
                  </p>
                  <p className="mt-2.5 text-[12px] leading-relaxed text-[#CCCCCC]/45">
                    {m.screens.join(" · ")}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* soma */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-5 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border border-[#CA8B35]/30 bg-[#161311] p-8 md:p-10"
        >
          <div>
            <VinicolaEyebrow>Os três juntos</VinicolaEyebrow>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#CCCCCC]/65">
              Contratados de uma vez, os três módulos entram em dez semanas, com
              algo funcionando a cada quinzena. E a mensalidade continua sendo uma
              só, não importa quantos módulos a vinícola tenha.
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-playfair text-5xl font-medium leading-none text-[#CA8B35]">
              R$ 15.000
            </p>
            <p className="mt-3 text-[13px] text-[#CCCCCC]/50">
              3x de R$ 5.000 · + R$ 350/mês
            </p>
          </div>
        </motion.div>

        {/* base do sistema */}
        {base && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mt-5 border border-[#4F7A63]/30 bg-[#111413] p-8 md:p-10"
          >
            <div className="flex items-start gap-4">
              <Layers className="mt-1 h-5 w-5 flex-shrink-0 text-[#6D9B83]" />
              <div className="min-w-0">
                <h3 className="font-playfair text-xl font-medium text-white md:text-2xl">
                  A base do sistema vem em qualquer módulo
                </h3>
                <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-[#CCCCCC]/60">
                  {base.intro}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {base.items.map((i) => (
                <div key={i.title} className="border-l-2 border-[#4F7A63]/35 pl-5">
                  <p className="text-[13px] font-semibold text-white">{i.title}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#CCCCCC]/55">
                    {i.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
