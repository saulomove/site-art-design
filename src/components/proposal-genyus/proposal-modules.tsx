"use client";

import { motion } from "framer-motion";
import type { ProposalService, Proposal } from "@/lib/proposals-data";
import {
  Grape, Timer, LayoutGrid, BarChart3, MessageSquare, Bot, Filter, Send,
  type LucideIcon,
} from "lucide-react";
import {
  VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

const ICONS: Record<string, LucideIcon> = {
  Grape, Timer, LayoutGrid, BarChart3, MessageSquare, Bot, Filter, Send,
};
const FALLBACK: LucideIcon = LayoutGrid;

interface Props {
  services: ProposalService[];
  systemModules?: Proposal["systemModules"];
}

export function ProposalGenyusModules({ services, systemModules }: Props) {
  return (
    <section id="modulos" className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="O que o sistema tem"
          title="Seis módulos, um sistema só."
          italic="Da uva à venda da garrafa."
          lead="A safra e a guarda resolvem o controle. O CRM e a DaIA trazem venda. Tudo na mesma base, com o mesmo login e os mesmos perfis."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, idx) => {
            const Icon = ICONS[s.icon] ?? FALLBACK;
            const destaque = s.name.includes("Guarda");
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: Math.min(idx, 5) * 0.06 }}
                className={`flex flex-col border p-8 transition-colors duration-300 md:p-9 ${
                  destaque
                    ? "border-[#CA8B35]/45 bg-[#161311]"
                    : "border-[#CCCCCC]/10 bg-[#121110] hover:border-[#CA8B35]/25"
                }`}
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center border ${destaque ? "border-[#CA8B35]/50" : "border-[#CA8B35]/25"}`}>
                    <Icon className="h-5 w-5 text-[#CA8B35]" />
                  </span>
                  {destaque && (
                    <span className="bg-[#CA8B35] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0B0B0B]">
                      O diferencial
                    </span>
                  )}
                </div>

                <h3 className="font-playfair text-xl font-medium leading-snug text-white">
                  {s.name}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-[#CCCCCC]/55">
                  {s.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-[#CCCCCC]/[0.08] pt-6">
                  {s.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] leading-snug text-[#CCCCCC]/70">
                      <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#CA8B35]/70" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {systemModules && systemModules.length > 0 && (
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="mb-10 border-t border-[#CCCCCC]/10 pt-14 text-center"
            >
              <VinicolaEyebrow>Detalhe do CRM</VinicolaEyebrow>
              <h3 className="mx-auto mt-5 max-w-2xl font-playfair text-2xl font-medium leading-snug text-white md:text-3xl">
                Todo canal numa fila só, e a IA trabalhando junto
              </h3>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {systemModules.map((m, idx) => {
                const Icon = ICONS[m.icon] ?? FALLBACK;
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: Math.min(idx, 4) * 0.06 }}
                    className="border border-[#CCCCCC]/10 bg-[#121110] p-7 md:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-[#CA8B35]" />
                      <div>
                        <h4 className="font-playfair text-lg font-medium text-white">{m.title}</h4>
                        <p className="mt-3 text-[14px] leading-relaxed text-[#CCCCCC]/55">{m.description}</p>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-2 pl-9">
                      {m.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] leading-snug text-[#CCCCCC]/65">
                          <span className="mt-[7px] h-[3px] w-[3px] flex-shrink-0 rotate-45 bg-[#CA8B35]/60" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
