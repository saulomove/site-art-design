"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  desc: string;
  noDesktop: boolean;
}

interface Props {
  /** Valor mensal exibido no botão de atalho — vem de investment.totalMonthly. */
  monthlyValue: string;
  /** Seções do índice. Se omitido, usa as da proposta de presença digital. */
  items?: readonly NavItem[];
  /** Rótulo do botão de investimento no desktop. */
  investLabel?: string;
  /** Sufixo após o valor. Vazio para valores que não são mensais. */
  valueSuffix?: string;
}

const SECOES = [
  {
    id: "diagnostico",
    label: "Diagnóstico",
    desc: "Veredito em números e nota por frente",
    noDesktop: false,
  },
  {
    id: "achados",
    label: "O que está quebrado",
    desc: "Os achados críticos, com a evidência transcrita",
    noDesktop: true,
  },
  {
    id: "ativos",
    label: "Ativos",
    desc: "O que já está construído e sustenta a proposta",
    noDesktop: true,
  },
  {
    id: "prova",
    label: "A prova",
    desc: "Reels contra estático: o teste que a própria marca fez",
    noDesktop: false,
  },
  {
    id: "concorrencia",
    label: "Concorrência",
    desc: "O que as vinícolas de altitude cobram por experiência",
    noDesktop: false,
  },
  {
    id: "artdesign",
    label: "ArtDesign",
    desc: "Quem executa: números, países e clientes",
    noDesktop: false,
  },
  {
    id: "proposta",
    label: "A proposta",
    desc: "Os 14 serviços, com escopo e valor abertos",
    noDesktop: false,
  },
  {
    id: "conteudo",
    label: "Conteúdo",
    desc: "Pautas e a direção de arte já produzida",
    noDesktop: true,
  },
  {
    id: "plano",
    label: "90 dias",
    desc: "As três ondas e a ordem de execução",
    noDesktop: false,
  },
] as const;

export function ProposalVinicolaNav({
  monthlyValue,
  items,
  investLabel = "Investimento ·",
  valueSuffix = "/mês",
}: Props) {
  const SECOES_ATIVAS: readonly NavItem[] = items ?? SECOES;
  const [visivel, setVisivel] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [ativa, setAtiva] = useState<string>("");

  // A barra só aparece depois que o hero sai de cena.
  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Seção ativa por IntersectionObserver — mais barato que ouvir scroll.
  useEffect(() => {
    const ids = [...SECOES_ATIVAS.map((s) => s.id), "investimento"];
    const alvos = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (alvos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visiveis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visiveis[0]) setAtiva(visiveis[0].target.id);
      },
      { rootMargin: "-68px 0px -55% 0px", threshold: 0 },
    );

    alvos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [SECOES_ATIVAS]);

  // Trava o scroll do corpo enquanto o índice está aberto.
  useEffect(() => {
    if (!aberto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto]);

  const irPara = useCallback((id: string) => {
    setAberto(false);
    const alvo = document.getElementById(id);
    if (alvo) alvo.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <AnimatePresence>
        {visivel && (
          <motion.nav
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -70, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            aria-label="Navegação da proposta"
            className="fixed inset-x-0 top-1 z-50 border-b border-[#CA8B35]/15 bg-[#0B0B0B]/92 backdrop-blur-md"
          >
            <div className="container mx-auto flex h-[60px] max-w-6xl items-center justify-between gap-4 px-4">
              {/* Marca */}
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex-shrink-0 opacity-90 transition-opacity hover:opacity-100"
                aria-label="Voltar ao topo"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/clientes/santa-augusta/logo-vsa.png"
                  alt="Vinícola Santa Augusta"
                  width={500}
                  height={167}
                  className="h-8 w-auto sm:h-9"
                />
              </button>

              {/* Links — só em telas grandes */}
              <ul className="hidden flex-1 items-center justify-center gap-6 lg:flex">
                {SECOES_ATIVAS.filter((s) => !s.noDesktop).map((secao) => (
                  <li key={secao.id}>
                    <button
                      type="button"
                      onClick={() => irPara(secao.id)}
                      aria-current={ativa === secao.id ? "true" : undefined}
                      className={`whitespace-nowrap text-[11px] uppercase tracking-[0.14em] transition-colors ${
                        ativa === secao.id
                          ? "text-[#CA8B35]"
                          : "text-[#CCCCCC]/55 hover:text-[#CCCCCC]"
                      }`}
                    >
                      {secao.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Investimento + índice */}
              <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => irPara("investimento")}
                  className={`flex items-center gap-2 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors sm:px-5 sm:py-2.5 sm:text-xs ${
                    ativa === "investimento"
                      ? "bg-[#E6AE50] text-[#0B0B0B]"
                      : "bg-[#CA8B35] text-[#0B0B0B] hover:bg-[#E6AE50]"
                  }`}
                >
                  <span className="hidden sm:inline">{investLabel}</span>
                  <span className="font-playfair text-sm font-medium tracking-normal sm:text-base">
                    {monthlyValue}
                  </span>
                  {valueSuffix && (
                    <span className="tracking-normal opacity-70">{valueSuffix}</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setAberto(true)}
                  aria-label="Abrir índice da proposta"
                  aria-expanded={aberto}
                  className="flex h-10 w-10 items-center justify-center border border-[#CCCCCC]/20 text-[#CCCCCC] transition-colors hover:border-[#CA8B35]/50 hover:text-white"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Índice completo, com descrição de cada seção */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-[#0B0B0B]/97 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Índice da proposta"
          >
            <div className="container mx-auto max-w-3xl px-4 py-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#CA8B35]">
                  Índice da proposta
                </span>
                <button
                  type="button"
                  onClick={() => setAberto(false)}
                  aria-label="Fechar índice"
                  className="flex h-10 w-10 items-center justify-center border border-[#CCCCCC]/20 text-[#CCCCCC] transition-colors hover:border-[#CA8B35]/50 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <ul className="space-y-px bg-[#CCCCCC]/10">
                {SECOES_ATIVAS.map((secao, idx) => (
                  <li key={secao.id}>
                    <button
                      type="button"
                      onClick={() => irPara(secao.id)}
                      className={`flex w-full items-start gap-5 bg-[#0B0B0B] px-5 py-5 text-left transition-colors hover:bg-[#121110] ${
                        ativa === secao.id ? "bg-[#121110]" : ""
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] tabular-nums ${
                          ativa === secao.id
                            ? "text-[#CA8B35]"
                            : "text-[#CCCCCC]/30"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-playfair text-lg font-medium ${
                            ativa === secao.id ? "text-[#CA8B35]" : "text-white"
                          }`}
                        >
                          {secao.label}
                        </span>
                        <span className="mt-1 block text-[13px] leading-relaxed text-[#CCCCCC]/50">
                          {secao.desc}
                        </span>
                      </span>
                      <ArrowRight className="mt-1.5 h-4 w-4 flex-shrink-0 text-[#CCCCCC]/25" />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Investimento em destaque */}
              <button
                type="button"
                onClick={() => irPara("investimento")}
                className="mt-4 flex w-full items-center justify-between gap-5 border-2 border-[#CA8B35]/50 bg-[#161311] px-6 py-6 text-left transition-colors hover:border-[#CA8B35]"
              >
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#CA8B35]">
                    Investimento
                  </span>
                  <span className="mt-2 block font-playfair text-xl font-medium text-white">
                    Sem entrada e sem fidelidade
                  </span>
                  <span className="mt-1 block text-[13px] text-[#CCCCCC]/50">
                    Tudo incluso numa mensalidade só
                  </span>
                </span>
                <span className="flex flex-shrink-0 items-baseline gap-1">
                  <span className="font-playfair text-3xl font-medium text-[#CA8B35] sm:text-4xl">
                    {monthlyValue}
                  </span>
                  {valueSuffix && (
                    <span className="text-xs text-[#CCCCCC]/40">{valueSuffix}</span>
                  )}
                </span>
              </button>

              <button
                type="button"
                onClick={() => irPara("fechamento")}
                className="mt-4 w-full border border-[#CCCCCC]/15 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CCCCCC]/70 transition-colors hover:border-[#CA8B35]/40 hover:text-white"
              >
                Falar com a gente
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
