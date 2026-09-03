"use client";

import { motion } from "framer-motion";
import type { ProposalService } from "@/lib/proposals-data";
import {
  Wrench,
  Globe,
  BarChart3,
  ShieldCheck,
  Layout,
  MapPin,
  PenTool,
  Instagram,
  Camera,
  Star,
  Search,
  Settings,
  Mail,
  Target,
  type LucideIcon,
} from "lucide-react";
import { VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow } from "./vinicola-ui";

interface Props {
  services: ProposalService[];
}

const ICONS: Record<string, LucideIcon> = {
  Wrench,
  Globe,
  BarChart3,
  ShieldCheck,
  Layout,
  MapPin,
  PenTool,
  Instagram,
  Camera,
  Star,
  Search,
  Settings,
  Mail,
  Target,
};

const FALLBACK: LucideIcon = Layout;

function ServiceCard({ service, index }: { service: ProposalService; index: number }) {
  const Icon = ICONS[service.icon] ?? FALLBACK;
  const isMonthly = service.priceType === "monthly";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: Math.min(index, 5) * 0.06 }}
      className="flex flex-col border border-[#CCCCCC]/10 bg-[#121110] p-8 transition-colors duration-300 hover:border-[#CA8B35]/30 md:p-9"
    >
      <div className="mb-6 flex items-start justify-between gap-5">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-[#CA8B35]/30">
          <Icon className="h-5 w-5 text-[#CA8B35]" />
        </span>
        <div className="text-right">
          <span className="block font-playfair text-2xl font-medium text-white">
            {service.price}
          </span>
          <span className="block text-[10px] uppercase tracking-[0.18em] text-[#CCCCCC]/40">
            {isMonthly ? "por mês" : "valor de referência"}
          </span>
        </div>
      </div>

      <h3 className="font-playfair text-xl font-medium leading-snug text-white">
        {service.name}
      </h3>

      <p className="mt-4 text-[14px] leading-relaxed text-[#CCCCCC]/55">
        {service.description}
      </p>

      <ul className="mt-6 space-y-2.5 border-t border-[#CCCCCC]/[0.08] pt-6">
        {service.items.map((item, itemIdx) => (
          <li
            key={itemIdx}
            className="flex items-start gap-3 text-[13px] leading-snug text-[#CCCCCC]/70"
          >
            <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#CA8B35]/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ProposalVinicolaServices({ services }: Props) {
  const implantacao = services.filter((s) => s.priceType === "project");
  const mensais = services.filter((s) => s.priceType === "monthly");

  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="Nossa proposta"
          title="Cada frente com escopo e"
          italic="valor abertos"
          lead="Nada de pacote fechado sem se saber o que tem dentro. Abaixo está cada serviço com o que entrega e quanto custa isoladamente. No fim, a condição para contratar tudo junto."
        />

        {/* Implantação */}
        {implantacao.length > 0 && (
          <div className="mb-20">
            <div className="mb-10 flex flex-col gap-3 border-b border-[#CCCCCC]/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <VinicolaEyebrow>Fundação · incluída na mensalidade</VinicolaEyebrow>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#CCCCCC]/55">
                  O que precisa acontecer antes de qualquer verba de mídia.
                  Os valores ao lado são de referência, para a Santa Augusta
                  saber o que cada frente vale — mas{" "}
                  <span className="text-[#CA8B35]">
                    nenhuma delas é cobrada à parte
                  </span>
                  : todas entram na mensalidade, sem custo de entrada.
                </p>
              </div>
              <span className="font-mono text-xs tracking-[0.14em] text-[#CA8B35]/70">
                {implantacao.length} serviços
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {implantacao.map((service, idx) => (
                <ServiceCard key={service.name} service={service} index={idx} />
              ))}
            </div>
          </div>
        )}

        {/* Mensais */}
        {mensais.length > 0 && (
          <div>
            <div className="mb-10 flex flex-col gap-3 border-b border-[#CCCCCC]/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <VinicolaEyebrow>Gestão · recorrente</VinicolaEyebrow>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#CCCCCC]/55">
                  A operação contínua. Sem quantidade fixa de publicações: a
                  régua é a pauta que gera conversa e a cadência que ocupa os
                  dias em que a vinícola fatura.
                </p>
              </div>
              <span className="font-mono text-xs tracking-[0.14em] text-[#CA8B35]/70">
                {mensais.length} serviços
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {mensais.map((service, idx) => (
                <ServiceCard key={service.name} service={service} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
