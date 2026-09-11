"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MousePointerClick, Search, Bell } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal } from "./elo-ui";
import {
  ViewGestao, ViewAudio, ViewCarteira, ViewFicha, ViewRoteiro, ViewPedido, ViewApp,
} from "./demo-views";

type Persona = "gestao" | "web" | "app";

const PERSONAS: { id: Persona; label: string; quem: string; papel: string }[] = [
  { id: "gestao", label: "Gestão · backoffice", quem: "Cristiane Boff", papel: "Gerência comercial · matriz" },
  { id: "web", label: "Representante · web", quem: "Marcos Delazeri", papel: "Representante PJ · Oeste SC" },
  { id: "app", label: "Representante · app", quem: "Marcos Delazeri", papel: "Representante PJ · Oeste SC" },
];

const ABAS_WEB = [
  { id: "carteira", label: "Carteira" },
  { id: "ficha", label: "Ficha 360" },
  { id: "audio", label: "Relatório por áudio" },
  { id: "roteiro", label: "Roteiro e visita" },
  { id: "pedido", label: "Novo pedido" },
] as const;

type AbaWeb = (typeof ABAS_WEB)[number]["id"];

export function ProposalEloDemo() {
  const [persona, setPersona] = useState<Persona>("web");
  const [aba, setAba] = useState<AbaWeb>("audio");

  const atual = PERSONAS.find((p) => p.id === persona) ?? PERSONAS[1];
  const iniciais = atual.quem.split(" ").map((n) => n[0]).slice(0, 2).join("");

  const conteudo = () => {
    if (persona === "gestao") return <ViewGestao />;
    if (persona === "app") return <ViewApp />;
    switch (aba) {
      case "carteira": return <ViewCarteira />;
      case "ficha": return <ViewFicha />;
      case "roteiro": return <ViewRoteiro />;
      case "pedido": return <ViewPedido />;
      default: return <ViewAudio />;
    }
  };

  const url =
    persona === "gestao" ? "elo.videplast.com.br/gestao"
      : persona === "app" ? "elo.videplast.com.br/campo"
        : `elo.videplast.com.br/${aba}`;

  return (
    <EloSection id="sistema">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[55%] w-[85%] -translate-x-1/2 rounded-full bg-[#D51920]/[0.06] blur-[170px]" />

      <EloSectionHeader
        eyebrow="Protótipo navegável"
        title="Não é maquete."
        accent="Clique e use."
        lead="Três perfis, sete telas, dados da operação real da Videplast — as cinco plantas, os clientes de proteína animal e a linha de produto que vocês fabricam. Troque de perfil no topo e de tela na barra abaixo."
      />

      <EloReveal>
        <div className="overflow-hidden border-2 border-[#D51920]/35 bg-white shadow-[0_0_110px_-40px_rgba(213,25,32,0.55)]">
          {/* barra do navegador */}
          <div className="flex items-center gap-2 border-b border-[#DCE0E0] bg-[#EDEFEF] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C6CBCB]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#C6CBCB]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#C6CBCB]" />
            <span className="ml-3 flex-1 truncate font-mono text-[10px] tracking-wider text-[#5E6669]">{url}</span>
            <span className="hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-[#D51920] sm:flex">
              <MousePointerClick className="h-3 w-3" /> clique e navegue
            </span>
          </div>

          {/* topbar do sistema */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-[#DCE0E0] bg-[#F6F7F7] px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/clientes/videplast/logo-videplast.png"
                alt="Videplast"
                width={706}
                height={160}
                className="h-[16px] w-auto"
              />
              <span className="h-4 w-px bg-[#DCE0E0]" />
              <span className="font-sans text-[14px] font-bold tracking-[0.12em] text-[#131516]">ELO</span>
              <span className="hidden rounded-[4px] border border-[#DCE0E0] px-1.5 py-[2px] font-sans text-[9px] uppercase tracking-[0.08em] text-[#5E6669] sm:inline">
                CRM industrial
              </span>
            </div>

            <div className="order-3 flex w-full gap-[2px] overflow-x-auto rounded-[4px] border border-[#DCE0E0] bg-white p-[3px] sm:order-none sm:w-auto">
              {PERSONAS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPersona(p.id)}
                  aria-current={persona === p.id ? "page" : undefined}
                  className={`flex-shrink-0 rounded-[3px] px-3 py-1.5 font-sans text-[11.5px] font-semibold transition-colors ${
                    persona === p.id
                      ? "bg-[#D51920] text-white"
                      : "text-[#5E6669] hover:bg-[#F6F7F7]"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-3">
              <span className="hidden font-mono text-[10.5px] tabular-nums text-[#5E6669] lg:inline">11/09/2026 · 08:14</span>
              <Search className="hidden h-3.5 w-3.5 text-[#5E6669] sm:block" />
              <span className="relative hidden sm:block">
                <Bell className="h-3.5 w-3.5 text-[#5E6669]" />
                <span className="absolute -right-[2px] -top-[2px] h-1.5 w-1.5 rounded-full bg-[#D51920]" />
              </span>
              <span className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#DCE0E0] font-sans text-[9.5px] font-bold text-[#131516]">
                  {iniciais}
                </span>
                <span className="hidden leading-tight md:block">
                  <span className="block text-[11.5px] font-semibold text-[#131516]">{atual.quem}</span>
                  <span className="block text-[10px] text-[#5E6669]">{atual.papel}</span>
                </span>
              </span>
            </div>
          </div>

          {/* abas do representante web */}
          {persona === "web" && (
            <div className="flex gap-5 overflow-x-auto border-b border-[#DCE0E0] bg-white px-4">
              {ABAS_WEB.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAba(a.id)}
                  aria-current={aba === a.id ? "page" : undefined}
                  className={`flex-shrink-0 border-b-2 py-3 font-sans text-[12.5px] transition-colors ${
                    aba === a.id
                      ? "border-[#D51920] font-semibold text-[#131516]"
                      : "border-transparent text-[#5E6669] hover:text-[#131516]"
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          )}

          <p className="flex items-center justify-center gap-1.5 border-b border-[#DCE0E0] bg-[#D51920]/[0.05] px-4 py-2 font-sans text-[10px] uppercase tracking-[0.14em] text-[#D51920] lg:hidden">
            <MousePointerClick className="h-3 w-3 flex-shrink-0" />
            deslize e toque para navegar
          </p>

          {/* conteúdo */}
          <motion.div
            key={`${persona}-${aba}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="bg-white p-4 md:p-5"
          >
            {conteudo()}
          </motion.div>
        </div>
      </EloReveal>

      <p className="mt-6 text-center text-[13px] text-[#6B7576]">
        Ilustração navegável. As telas finais são construídas com o time de vocês, ajustando o que
        a operação pedir — e os dados saem do SAP, não destes exemplos.
      </p>
    </EloSection>
  );
}
