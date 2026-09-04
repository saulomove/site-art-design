"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Grape, Timer, LayoutGrid, MessageSquare, Filter,
  Send, Bot, QrCode, Users, Search, Bell, MousePointerClick,
  type LucideIcon,
} from "lucide-react";
import {
  VinicolaDivider, VinicolaSectionHeader,
} from "../proposal-vinicola/vinicola-ui";
import { TelaGuarda, TelaAdega } from "./proposal-telas";
import {
  ViewDashboard, ViewSafra, ViewAtendimento, ViewFunil,
  ViewCampanhas, ViewEtiqueta, ViewPerfis, ViewDaia,
} from "./demo-views";

interface Modulo {
  id: string;
  label: string;
  icon: LucideIcon;
  titulo: string;
  sub: string;
  badge?: string;
  destaque?: boolean;
}

const MODULOS: Modulo[] = [
  { id: "dashboard", label: "Painel", icon: LayoutDashboard, titulo: "Painel geral", sub: "O estado da operação numa tela" },
  { id: "safra", label: "Safra", icon: Grape, titulo: "Safra 2026", sub: "Todos os lotes e em que etapa cada um está" },
  { id: "guarda", label: "Guarda", icon: Timer, titulo: "Guarda", sub: "O que está parado, há quanto tempo e quanto já vale", destaque: true },
  { id: "adega", label: "Adega", icon: LayoutGrid, titulo: "Mapa da adega", sub: "Ocupação e status de cada tanque e barrica" },
  { id: "atendimento", label: "Atendimento", icon: MessageSquare, titulo: "Atendimento", sub: "WhatsApp, Instagram e Facebook numa fila só", badge: "12" },
  { id: "funil", label: "Funil", icon: Filter, titulo: "Funil de vendas", sub: "Do primeiro contato ao pedido fechado" },
  { id: "campanhas", label: "Campanhas", icon: Send, titulo: "Campanhas", sub: "A base de clientes virando venda" },
  { id: "daia", label: "DaIA", icon: Bot, titulo: "DaIA", sub: "A assistente no site, na loja e no atendimento" },
  { id: "etiquetas", label: "Etiquetas", icon: QrCode, titulo: "Etiquetas e QR", sub: "O lote inteiro na câmera do celular" },
  { id: "perfis", label: "Perfis", icon: Users, titulo: "Perfis e permissões", sub: "Quem vê o quê, definido pela vinícola" },
];

export function ProposalGenyusDemo() {
  const [ativo, setAtivo] = useState("dashboard");
  const mod = MODULOS.find((m) => m.id === ativo) ?? MODULOS[0];

  const conteudo = () => {
    switch (ativo) {
      case "safra": return <ViewSafra />;
      case "guarda": return <div className="border border-[#CCCCCC]/10 bg-[#0E0D0C]"><TelaGuarda /></div>;
      case "adega": return <div className="border border-[#CCCCCC]/10 bg-[#0E0D0C]"><TelaAdega /></div>;
      case "atendimento": return <ViewAtendimento />;
      case "funil": return <ViewFunil />;
      case "campanhas": return <ViewCampanhas />;
      case "daia": return <ViewDaia />;
      case "etiquetas": return <ViewEtiqueta />;
      case "perfis": return <ViewPerfis />;
      default: return <ViewDashboard />;
    }
  };

  return (
    <section id="demo" className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[55%] w-[85%] -translate-x-1/2 rounded-full bg-[#CA8B35]/[0.07] blur-[170px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="Protótipo navegável"
          title="Passeie pelo sistema."
          italic="Clique e veja."
          lead="Não é imagem parada. Use o menu do sistema e navegue pelos módulos como se já estivesse dentro do Genyus Wine — com os dados reais da safra 2026 da Santa Augusta."
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden border-2 border-[#CA8B35]/35 bg-[#0E0D0C] shadow-[0_0_100px_-35px_rgba(202,139,53,0.5)]"
        >
          {/* Barra do navegador */}
          <div className="flex items-center gap-2 border-b border-[#CCCCCC]/10 bg-[#151413] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#CCCCCC]/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#CCCCCC]/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#CCCCCC]/20" />
            <span className="ml-3 flex-1 truncate font-mono text-[10px] tracking-wider text-[#CCCCCC]/35">
              genyus.wine/{ativo}
            </span>
            <span className="hidden items-center gap-1.5 text-[9px] uppercase tracking-wider text-[#CA8B35] sm:flex">
              <MousePointerClick className="h-3 w-3" /> clique nos módulos
            </span>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Menu lateral — vira barra rolável no celular */}
            <nav className="flex gap-1 overflow-x-auto border-b border-[#CCCCCC]/10 bg-[#121110] p-2 lg:w-[190px] lg:flex-shrink-0 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r lg:p-3">
              <div className="mb-2 hidden px-2 lg:block">
                <p className="font-playfair text-sm font-medium tracking-[0.14em] text-[#CA8B35]">
                  GENYUS WINE
                </p>
                <p className="mt-0.5 text-[9px] uppercase tracking-wider text-[#CCCCCC]/30">
                  Santa Augusta
                </p>
              </div>
              {MODULOS.map((m) => {
                const Icon = m.icon;
                const on = ativo === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setAtivo(m.id)}
                    aria-current={on ? "page" : undefined}
                    className={`flex flex-shrink-0 items-center gap-2.5 px-3 py-2.5 text-left text-[12px] transition-colors ${
                      on
                        ? "bg-[#CA8B35] font-semibold text-[#0B0B0B]"
                        : "text-[#CCCCCC]/60 hover:bg-[#CCCCCC]/[0.06] hover:text-white"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                    <span className="whitespace-nowrap">{m.label}</span>
                    {m.badge && !on && (
                      <span className="ml-auto hidden rounded-full bg-[#CA8B35] px-1.5 text-[9px] font-bold text-[#0B0B0B] lg:block">
                        {m.badge}
                      </span>
                    )}
                    {m.destaque && !on && (
                      <span className="ml-auto hidden h-1.5 w-1.5 rotate-45 bg-[#CA8B35] lg:block" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Dica no celular — a barra de módulos rola na horizontal */}
            <p className="flex items-center justify-center gap-1.5 border-b border-[#CCCCCC]/10 bg-[#CA8B35]/[0.06] px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-[#CA8B35] lg:hidden">
              <MousePointerClick className="h-3 w-3 flex-shrink-0" />
              deslize e toque nos módulos
            </p>

            {/* Conteúdo */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#CCCCCC]/10 px-5 py-3.5">
                <div className="min-w-0">
                  <p className="font-playfair text-base font-medium text-white">{mod.titulo}</p>
                  <p className="mt-0.5 text-[11px] text-[#CCCCCC]/40">{mod.sub}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="h-3.5 w-3.5 text-[#CCCCCC]/30" />
                  <span className="relative">
                    <Bell className="h-3.5 w-3.5 text-[#CCCCCC]/30" />
                    <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-[#CA8B35]" />
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CA8B35]/20 text-[9px] font-bold text-[#CA8B35]">
                    FR
                  </span>
                </div>
              </div>

              <motion.div
                key={ativo}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 md:p-5"
              >
                {conteudo()}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-[13px] text-[#CCCCCC]/40">
          Ilustração navegável do sistema. As telas finais são construídas com a
          equipe da vinícola, ajustando o que a operação pedir.
        </p>
      </div>
    </section>
  );
}
