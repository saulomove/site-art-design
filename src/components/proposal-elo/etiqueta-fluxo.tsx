"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Tag, Check, Search, MoreVertical, ShieldCheck, EyeOff } from "lucide-react";

/* ================================================================
   O fluxo da etiqueta, quadro a quadro, no WhatsApp Business real
   do representante. Anda sozinho; dá para tocar em cada passo.
   ================================================================ */

const mono = "font-mono tabular-nums";

const PASSOS = [
  { n: "01", t: "A conversa do cliente", d: "O representante já conversa com a Marlene, da BRF, no WhatsApp Business dele. Nada muda nisso." },
  { n: "02", t: "Ele abre as etiquetas", d: "O WhatsApp Business já tem essa função nativa. Não instalamos nada no aparelho dele." },
  { n: "03", t: "Marca “Cliente Videplast”", d: "Um toque. A partir daqui, essa conversa — e só ela — passa a alimentar o Elo." },
  { n: "04", t: "O Elo passa a acompanhar", d: "Uma conversa acompanhada, catorze ignoradas. E ele desmarca quando quiser, sem pedir a ninguém." },
];

const CONVERSAS = [
  { n: "Marlene Kuhn · BRF", m: "Marcos, e a amostra? já são três semanas", h: "09:41", on: true },
  { n: "Fernanda (esposa)", m: "não esquece o mercado 🙂", h: "09:12", on: false },
  { n: "Plastimax Repres.", m: "consegue rodar 2t de stretch essa semana?", h: "08:57", on: false },
  { n: "Grupo — Futebol quinta", m: "tô dentro", h: "ontem", on: false },
];

const ETIQUETAS = [
  { t: "Cliente Videplast", c: "#2E7355" },
  { t: "Novo cliente", c: "#5E6669" },
  { t: "Pagamento pendente", c: "#8A6115" },
  { t: "Pedido finalizado", c: "#5E6669" },
];

export function EtiquetaFluxo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const visivel = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (!visivel) return;
    const t = setInterval(() => setI((x) => (x + 1) % PASSOS.length), 3400);
    return () => clearInterval(t);
  }, [visivel]);

  return (
    <div ref={ref} className="grid gap-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-14">
      {/* o aparelho */}
      <div className="mx-auto w-full max-w-[300px] min-w-0">
        <div className="rounded-[26px] border-[8px] border-[#272C2E] bg-[#0E1011] shadow-[0_34px_80px_-32px_rgba(0,0,0,0.9)]">
          <div className="overflow-hidden rounded-[18px] bg-[#0B141A]">
            {/* topo do whatsapp */}
            <div className="flex items-center justify-between bg-[#1F2C34] px-4 py-3">
              <span className="font-sans text-[13px] font-semibold text-[#E9EDEF]">
                {i >= 1 ? "Marlene Kuhn" : "WhatsApp Business"}
              </span>
              <span className="flex items-center gap-3 text-[#8696A0]">
                <Search className="h-3.5 w-3.5" />
                <MoreVertical className="h-3.5 w-3.5" />
              </span>
            </div>

            <div className="relative h-[366px] overflow-hidden">
              <AnimatePresence mode="wait">
                {/* 01 · lista de conversas */}
                {i === 0 && (
                  <motion.div
                    key="p0"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="divide-y divide-[#1F2C34]"
                  >
                    {CONVERSAS.map((c) => (
                      <div key={c.n} className="flex items-start gap-3 px-4 py-3.5">
                        <span className="mt-0.5 h-8 w-8 flex-shrink-0 rounded-full bg-[#2A3942]" />
                        <span className="min-w-0 flex-1">
                          <span className="flex items-baseline justify-between gap-2">
                            <span className="min-w-0 truncate text-[12.5px] font-semibold text-[#E9EDEF]">
                              {c.n}
                            </span>
                            <span className={`flex-shrink-0 text-[9.5px] text-[#8696A0] ${mono}`}>{c.h}</span>
                          </span>
                          <span className="mt-0.5 block truncate text-[11.5px] text-[#8696A0]">{c.m}</span>
                        </span>
                      </div>
                    ))}
                    <p className="px-4 py-3 text-[10.5px] text-[#8696A0]">
                      + 11 outras conversas
                    </p>
                  </motion.div>
                )}

                {/* 02 · menu de etiquetas */}
                {i === 1 && (
                  <motion.div
                    key="p1"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full"
                  >
                    <div className="space-y-2 p-4 opacity-30">
                      <div className="max-w-[76%] rounded-[7px] rounded-tl-[2px] bg-[#1F2C34] px-3 py-2 text-[11.5px] text-[#E9EDEF]">
                        Marcos, e a amostra? já são três semanas
                      </div>
                      <div className="ml-auto max-w-[76%] rounded-[7px] rounded-tr-[2px] bg-[#005C4B] px-3 py-2 text-[11.5px] text-[#E9EDEF]">
                        Vou cobrar o laboratório hoje e te dou posição
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="absolute inset-x-6 top-8 rounded-[6px] bg-[#233138] py-2 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.9)]"
                    >
                      <p className="px-4 pb-2 pt-1 text-[10px] uppercase tracking-[0.14em] text-[#8696A0]">
                        Etiquetas
                      </p>
                      {ETIQUETAS.map((e) => (
                        <div key={e.t} className="flex items-center gap-2.5 px-4 py-2.5">
                          <Tag className="h-3.5 w-3.5 flex-shrink-0" style={{ color: e.c }} />
                          <span className="min-w-0 truncate text-[12px] text-[#E9EDEF]">{e.t}</span>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {/* 03 · etiqueta aplicada */}
                {i === 2 && (
                  <motion.div
                    key="p2"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-2 border-b border-[#1F2C34] bg-[#182229] px-4 py-2.5"
                    >
                      <Tag className="h-3.5 w-3.5 flex-shrink-0 text-[#2E7355]" />
                      <span className="text-[11.5px] font-semibold text-[#2E7355]">Cliente Videplast</span>
                      <Check className="ml-auto h-3.5 w-3.5 text-[#2E7355]" />
                    </motion.div>
                    <div className="space-y-2 p-4">
                      <div className="max-w-[76%] rounded-[7px] rounded-tl-[2px] bg-[#1F2C34] px-3 py-2 text-[11.5px] text-[#E9EDEF]">
                        Marcos, e a amostra? já são três semanas
                      </div>
                      <div className="ml-auto max-w-[76%] rounded-[7px] rounded-tr-[2px] bg-[#005C4B] px-3 py-2 text-[11.5px] text-[#E9EDEF]">
                        Vou cobrar o laboratório hoje e te dou posição
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        className="ml-auto max-w-[76%] rounded-[7px] rounded-tr-[2px] bg-[#005C4B] px-3 py-2 text-[11.5px] text-[#E9EDEF]"
                      >
                        Marlene, a linha de cortes sobe volume em novembro, né? já mando a cotação do FFS
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* 04 · o painel do elo */}
                {i === 3 && (
                  <motion.div
                    key="p3"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-white"
                  >
                    <div className="border-b border-[#DCE0E0] bg-[#F6F7F7] px-4 py-3">
                      <span className="font-sans text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#D51920]">
                        Elo · privacidade
                      </span>
                    </div>
                    <div className="space-y-3 p-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="border border-[#2E7355]/40 bg-[#2E7355]/[0.06] p-3">
                          <p className={`text-[24px] font-bold leading-none text-[#2E7355] ${mono}`}>1</p>
                          <p className="mt-2 text-[10.5px] leading-snug text-[#131516]">
                            conversa acompanhada
                          </p>
                        </div>
                        <div className="border border-[#DCE0E0] bg-[#F6F7F7] p-3">
                          <p className={`text-[24px] font-bold leading-none text-[#5E6669] ${mono}`}>14</p>
                          <p className="mt-2 text-[10.5px] leading-snug text-[#5E6669]">
                            ignoradas na entrada
                          </p>
                        </div>
                      </div>

                      <div className="border border-[#DCE0E0] p-3">
                        <p className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#5E6669]">
                          Entram no Elo
                        </p>
                        <p className="mt-2 flex items-center gap-2 text-[11.5px] text-[#131516]">
                          <Tag className="h-3 w-3 flex-shrink-0 text-[#2E7355]" />
                          Marlene Kuhn · BRF S.A.
                        </p>
                      </div>

                      <div className="border border-[#DCE0E0] bg-[#F6F7F7] p-3">
                        <p className="flex items-center gap-2 font-sans text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#5E6669]">
                          <EyeOff className="h-3 w-3" /> Nunca gravadas
                        </p>
                        <p className="mt-2 text-[11px] leading-snug text-[#5E6669]">
                          Fernanda · Plastimax Repres. · Grupo Futebol quinta · + 11
                        </p>
                      </div>

                      <div className="flex items-start gap-2 border border-[#2E7355]/40 bg-[#2E7355]/[0.05] p-3">
                        <ShieldCheck className="mt-[1px] h-3.5 w-3.5 flex-shrink-0 text-[#2E7355]" />
                        <p className="min-w-0 text-[10.5px] leading-snug text-[#131516]">
                          Você controla, a qualquer momento. Tirou a etiqueta, o Elo para.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] uppercase tracking-[0.16em] text-[#6B7576]">
          O que não está etiquetado nunca é gravado
        </p>
      </div>

      {/* os passos */}
      <div className="min-w-0">
        <div className="space-y-1">
          {PASSOS.map((p, k) => {
            const on = k === i;
            return (
              <button
                key={p.n}
                type="button"
                onClick={() => setI(k)}
                aria-pressed={on}
                className="group relative block w-full border-l-2 py-4 pl-5 text-left transition-colors"
                style={{ borderColor: on ? "#E8343C" : "#272C2E" }}
              >
                <span className="flex items-baseline gap-3">
                  <span className={`text-[11px] ${on ? "text-[#E8343C]" : "text-[#6B7576]"} ${mono}`}>
                    {p.n}
                  </span>
                  <span
                    className={`font-sans text-[16px] font-semibold transition-colors md:text-[18px] ${
                      on ? "text-[#EDF0EF]" : "text-[#6B7576] group-hover:text-[#9BA5A7]"
                    }`}
                  >
                    {p.t}
                  </span>
                </span>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2.5 max-w-[56ch] text-[13.5px] leading-relaxed text-[#9BA5A7]">
                        {p.d}
                      </p>
                      <span className="mt-3.5 block h-[2px] w-full max-w-[220px] bg-[#272C2E]">
                        <motion.span
                          key={`b-${k}-${i}`}
                          className="block h-full bg-[#E8343C]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3.4, ease: "linear" }}
                        />
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        <div className="mt-8 border border-[#272C2E] bg-[#15181A] p-6 md:p-7">
          <p className="max-w-[72ch] text-[13.5px] leading-relaxed text-[#9BA5A7]">
            Verificamos endpoint por endpoint antes de escrever isto: a API que usamos expõe as
            etiquetas do WhatsApp Business, permite filtrar conversa por etiqueta e avisa em tempo
            real quando uma etiqueta é aplicada ou retirada.{" "}
            <span className="text-[#EDF0EF]">
              Requisito: a linha do representante precisa ser WhatsApp Business — não o comum.
            </span>{" "}
            É gratuito e a migração leva dois minutos, sem perder conversa.
          </p>
        </div>
      </div>
    </div>
  );
}
