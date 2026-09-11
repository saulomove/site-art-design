"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloEyebrow, EloHintClique } from "./elo-ui";

/* ================================================================
   Os quatro gráficos que a Videplast não consegue montar hoje.
   O botão vira a chave: à esquerda o que existe, à direita o que
   passa a existir. Os valores do lado Elo são ilustrativos — o que
   não é ilustrativo é que hoje nenhum deles existe.
   ================================================================ */

const mono = "font-mono tabular-nums";
const VAZIO = "#383F41";
const T = { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const };

function Vazio({ texto = "não existe hoje" }: { texto?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-[#6B7576]">
      <HelpCircle className="h-3 w-3" strokeWidth={2} />
      {texto}
    </span>
  );
}

function Moldura({
  n, titulo, sub, children,
}: { n: string; titulo: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col border border-[#272C2E] bg-[#15181A] p-6 md:p-7">
      <div className="flex items-baseline gap-3">
        <span className={`text-[11px] text-[#E8343C] ${mono}`}>{n}</span>
        <span className="min-w-0">
          <span className="block font-sans text-[15.5px] font-semibold leading-snug text-[#EDF0EF] md:text-[17px]">
            {titulo}
          </span>
          <span className="mt-1 block text-[12px] leading-snug text-[#6B7576]">{sub}</span>
        </span>
      </div>
      <div className="mt-7 flex-1">{children}</div>
    </div>
  );
}

/* ---------- 01 · funil ---------- */
const FUNIL = [
  { e: "Visitas realizadas", elo: 100, v: "412 visitas", hoje: null },
  { e: "Cotações enviadas", elo: 64, v: "R$ 8,7 mi", hoje: null },
  { e: "Amostras em teste", elo: 41, v: "38 amostras", hoje: null },
  { e: "Negociação de preço", elo: 27, v: "R$ 4,2 mi", hoje: null },
  { e: "Pedido faturado", elo: 18, v: "R$ 2,9 mi", hoje: 18 },
];

function Funil({ elo }: { elo: boolean }) {
  return (
    <div className="space-y-3.5">
      {FUNIL.map((f) => {
        const conhecido = elo || f.hoje !== null;
        const pct = elo ? f.elo : f.hoje ?? 0;
        return (
          <div key={f.e} className="min-w-0">
            <div className="flex items-baseline justify-between gap-3">
              <span className="min-w-0 truncate text-[12.5px] text-[#9BA5A7]">{f.e}</span>
              {conhecido ? (
                <span className={`flex-shrink-0 text-[12px] font-semibold text-[#EDF0EF] ${mono}`}>{f.v}</span>
              ) : (
                <span className={`flex-shrink-0 text-[12px] text-[#6B7576] ${mono}`}>—</span>
              )}
            </div>
            <div className="mt-1.5 h-[9px] w-full bg-[#0E1011]">
              <motion.div
                className="h-full"
                style={{ background: conhecido ? "#E8343C" : VAZIO }}
                animate={{ width: `${conhecido ? pct : 100}%`, opacity: 1 }}
                transition={T}
              />
            </div>
          </div>
        );
      })}
      <p className="pt-1 text-[11.5px] leading-snug text-[#6B7576]">
        {elo
          ? "As cinco etapas medidas. Dá para saber onde o negócio morre."
          : "Só a última linha existe. As quatro anteriores acontecem — e não deixam rastro."}
      </p>
    </div>
  );
}

/* ---------- 02 · cobertura da carteira ---------- */
const COBERTURA = [
  { l: "Visitados nos últimos 30 dias", pct: 44, c: "#47A87D" },
  { l: "Entre 30 e 90 dias", pct: 29, c: "#C9A04A" },
  { l: "Sem contato há mais de 90 dias", pct: 27, c: "#E8343C" },
];

const R_DONUT = 54;
const C_DONUT = 2 * Math.PI * R_DONUT;
const ARCOS = COBERTURA.map((s, i) => ({
  ...s,
  off: COBERTURA.slice(0, i).reduce((a, b) => a + b.pct, 0),
}));

function Donut({ elo }: { elo: boolean }) {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-7">
      <span className="relative flex h-[140px] w-[140px] flex-shrink-0 items-center justify-center">
      <svg viewBox="0 0 140 140" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="70" cy="70" r={R_DONUT} fill="none" stroke={VAZIO} strokeWidth="15" />
        {ARCOS.map((s, k) => (
          <motion.circle
            key={s.l}
            cx="70" cy="70" r={R_DONUT} fill="none" stroke={s.c} strokeWidth="15"
            strokeDasharray={`${(s.pct / 100) * C_DONUT} ${C_DONUT}`}
            strokeDashoffset={-(s.off / 100) * C_DONUT}
            initial={false}
            animate={{ opacity: elo ? 1 : 0 }}
            transition={{ ...T, delay: elo ? k * 0.14 : 0 }}
          />
        ))}
      </svg>
      <AnimatePresence mode="wait">
        {elo ? (
          <motion.span key="c1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative text-center">
            <span className={`block text-[21px] font-bold leading-none text-[#E8343C] ${mono}`}>27%</span>
            <span className="mt-1 block text-[9.5px] leading-tight text-[#6B7576]">sem contato<br />há 90+ dias</span>
          </motion.span>
        ) : (
          <motion.span key="c0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative text-center">
            <HelpCircle className="mx-auto h-6 w-6 text-[#6B7576]" strokeWidth={1.6} />
          </motion.span>
        )}
      </AnimatePresence>
      </span>

      <div className="min-w-0 flex-1">
        <AnimatePresence mode="wait">
          {elo ? (
            <motion.ul
              key="on" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {COBERTURA.map((s) => (
                <li key={s.l} className="flex items-start gap-2.5">
                  <span className="mt-[5px] h-2.5 w-2.5 flex-shrink-0" style={{ background: s.c }} />
                  <span className="min-w-0">
                    <span className={`block text-[15px] font-bold leading-none text-[#EDF0EF] ${mono}`}>
                      {s.pct}%
                    </span>
                    <span className="mt-1 block text-[11.5px] leading-snug text-[#9BA5A7]">{s.l}</span>
                  </span>
                </li>
              ))}
            </motion.ul>
          ) : (
            <motion.div key="off" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className={`text-[34px] font-bold leading-none text-[#6B7576] ${mono}`}>100%</p>
              <p className="mt-2.5 text-[12.5px] leading-snug text-[#9BA5A7]">
                da carteira sem informação de quando foi visitada pela última vez.
              </p>
              <span className="mt-3 inline-block"><Vazio /></span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------- 03 · a régua da amostra ---------- */
const AMOSTRA = [
  { e: "Solicitada", d: 2, c: "#47A87D" },
  { e: "Produzida", d: 11, c: "#47A87D" },
  { e: "Enviada", d: 4, c: "#47A87D" },
  { e: "Recebida", d: 3, c: "#47A87D" },
  { e: "Em teste", d: 22, c: "#C9A04A" },
  { e: "Resultado", d: 0, c: "#6B7576" },
];
const TOTAL_AM = AMOSTRA.reduce((a, b) => a + b.d, 0);

function Amostra({ elo }: { elo: boolean }) {
  return (
    <div>
      <div className="flex h-[34px] w-full min-w-0 overflow-hidden bg-[#0E1011]">
        {elo ? (
          AMOSTRA.filter((s) => s.d > 0).map((s) => (
            <motion.div
              key={s.e}
              className="flex items-center justify-center"
              style={{ background: `${s.c}30`, borderRight: `1px solid ${s.c}` }}
              initial={{ width: 0 }}
              animate={{ width: `${(s.d / TOTAL_AM) * 100}%` }}
              transition={T}
            >
              <span className={`text-[10.5px] font-semibold text-[#EDF0EF] ${mono}`}>{s.d}d</span>
            </motion.div>
          ))
        ) : (
          <>
            <div className="flex w-[8%] items-center justify-center border-r border-[#47A87D]" style={{ background: "#47A87D30" }}>
              <span className={`text-[10px] text-[#EDF0EF] ${mono}`}>·</span>
            </div>
            <div className="flex flex-1 items-center justify-center" style={{ background: VAZIO }}>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6B7576]">? ? ? ? ?</span>
            </div>
          </>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {AMOSTRA.map((s) => (
          <span key={s.e} className="flex items-center gap-1.5 text-[11px] text-[#9BA5A7]">
            <span
              className="h-2 w-2 flex-shrink-0"
              style={{ background: elo || s.e === "Solicitada" ? s.c : VAZIO }}
            />
            {s.e}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-2.5 border-t border-[#272C2E] pt-5">
        {[
          { l: "Prazo típico da linha", d: 29, c: "#47A87D" },
          { l: "Esta amostra, até hoje", d: 42, c: elo ? "#C9A04A" : VAZIO },
        ].map((b) => (
          <div key={b.l} className="grid min-w-0 grid-cols-[minmax(0,1fr)_40px] items-center gap-3">
            <span className="min-w-0">
              <span className="block truncate text-[11.5px] text-[#9BA5A7]">{b.l}</span>
              <span className="mt-1 block h-[6px] w-full bg-[#0E1011]">
                <motion.span
                  className="block h-full"
                  style={{ background: b.c }}
                  animate={{ width: elo || b.d === 29 ? `${(b.d / 48) * 100}%` : "100%", opacity: 1 }}
                  transition={T}
                />
              </span>
            </span>
            <span className={`text-right text-[12px] font-semibold text-[#EDF0EF] ${mono}`}>
              {elo || b.d === 29 ? `${b.d}d` : "?"}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 border-l-2 pl-4" style={{ borderColor: elo ? "#C9A04A" : "#272C2E" }}>
        <p className="text-[12.5px] leading-relaxed text-[#9BA5A7]">
          {elo ? (
            <>
              <span className="text-[#EDF0EF]">42 dias até aqui, 22 deles parada em teste.</span> O
              prazo típico do termoformado é 15 — o Elo avisou no dia 16 e cobrou o laboratório
              sozinho.
            </>
          ) : (
            <>
              Sabe-se que foi pedida e sabe-se se voltou.{" "}
              <span className="text-[#EDF0EF]">O que houve entre uma coisa e outra, ninguém sabe</span>{" "}
              — e são três a quatro meses.
            </>
          )}
        </p>
      </div>
    </div>
  );
}

/* ---------- 04 · atividade por representante ---------- */
const REPS = [
  { n: "Delazeri Rep. Com.", r: "Oeste SC", v: 41, meta: 36 },
  { n: "Panizzon Embalagens", r: "Serra RS", v: 33, meta: 36 },
  { n: "JR Trade Norte", r: "Sudoeste PR", v: 29, meta: 32 },
  { n: "Brandalise & Cia", r: "Alto Vale SC", v: 12, meta: 30 },
  { n: "Mattei Agroindustrial", r: "Centro-Oeste MT", v: 26, meta: 28 },
  { n: "Schmitt Repres.", r: "Norte RS", v: 31, meta: 30 },
];
const MAXV = 45;

function Reps({ elo }: { elo: boolean }) {
  return (
    <div className="space-y-3">
      {REPS.map((r) => {
        const abaixo = r.v < r.meta * 0.8;
        return (
          <div key={r.n} className="grid min-w-0 grid-cols-[minmax(0,1fr)_46px] items-center gap-3">
            <div className="min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <span className="min-w-0 truncate text-[12px] text-[#EDF0EF]">{r.n}</span>
                <span className="flex-shrink-0 text-[10.5px] text-[#6B7576]">{r.r}</span>
              </div>
              <div className="relative mt-1.5 h-[8px] w-full bg-[#0E1011]">
                <motion.div
                  className="h-full"
                  style={{ background: elo ? (abaixo ? "#E8343C" : "#47A87D") : VAZIO }}
                  animate={{ width: elo ? `${(r.v / MAXV) * 100}%` : "100%", opacity: 1 }}
                  transition={T}
                />
                {elo && (
                  <motion.span
                    className="absolute top-[-3px] h-[14px] w-[2px] bg-[#EDF0EF]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, left: `${(r.meta / MAXV) * 100}%` }}
                    transition={{ ...T, delay: 0.2 }}
                  />
                )}
              </div>
            </div>
            <span className={`text-right text-[12.5px] font-semibold ${mono} ${elo ? "text-[#EDF0EF]" : "text-[#6B7576]"}`}>
              {elo ? r.v : "—"}
            </span>
          </div>
        );
      })}
      <p className="pt-1 text-[11.5px] leading-snug text-[#6B7576]">
        {elo
          ? "Visitas registradas no mês, traço branco na meta. Brandalise está em 12 de 30 — é uma conversa, não uma punição."
          : "Nenhuma barra tem valor. Não é que estejam ruins: é que não se mede."}
      </p>
    </div>
  );
}

export function ProposalEloGraficos() {
  const [elo, setElo] = useState(false);

  return (
    <EloSection id="graficos" tone="darker">
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[45%] w-[55%] rounded-full bg-[#D51920]/[0.06] blur-[170px]" />

      <EloSectionHeader
        eyebrow="Os números"
        title="Estes quatro gráficos a Videplast não consegue montar hoje."
        lead="Não por falta de ferramenta — o Power BI está lá, o Fabric está lá. É por falta de dado: o que o representante faz no cliente nunca vira registro. Vire a chave abaixo e veja a mesma tela nos dois estados."
      />

      {/* a chave */}
      <EloReveal>
        <div className="mt-12">
          <EloHintClique className="mb-4">Vire a chave</EloHintClique>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex border border-[#E8343C]/35 bg-[#15181A] p-1 shadow-[0_0_40px_-14px_rgba(232,52,60,0.55)]">
            {[
              { id: false, l: "Hoje" },
              { id: true, l: "Com o Elo" },
            ].map((o) => {
              const on = elo === o.id;
              return (
                <button
                  key={o.l}
                  type="button"
                  onClick={() => setElo(o.id)}
                  aria-pressed={on}
                  className={`relative px-7 py-3 font-sans text-[13.5px] font-semibold transition-colors ${
                    on ? "text-[#EDF0EF]" : "text-[#9BA5A7] hover:bg-[#1C2022] hover:text-[#EDF0EF]"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="chaveGrafico"
                      className="absolute inset-0 border border-[#E8343C]/60 bg-[#E8343C]/[0.1]"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative">{o.l}</span>
                </button>
              );
            })}
          </div>
          <p className="w-full min-w-0 text-[12.5px] leading-snug text-[#6B7576] sm:w-auto sm:flex-1">
            {elo
              ? "Os valores são ilustrativos — não temos a base de vocês. O que não é ilustrativo é que hoje nenhum deles existe."
              : "Este é o estado real da informação hoje, pelo que ouvimos na reunião."}
          </p>
        </div>
      </EloReveal>

      <EloReveal delay={0.06}>
        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          <Moldura n="01" titulo="O funil comercial" sub="Do primeiro contato ao pedido faturado, últimos 90 dias">
            <Funil elo={elo} />
          </Moldura>
          <Moldura n="02" titulo="Cobertura da carteira" sub="Quando cada cliente foi visitado pela última vez">
            <Donut elo={elo} />
          </Moldura>
          <Moldura n="03" titulo="A régua da amostra" sub="Termoformado PA/PE 150µ para a BRF Capinzal, dias por etapa">
            <Amostra elo={elo} />
          </Moldura>
          <Moldura n="04" titulo="Atividade por representante" sub="Visitas registradas no mês contra a meta combinada">
            <Reps elo={elo} />
          </Moldura>
        </div>
      </EloReveal>

      <EloReveal delay={0.12}>
        <div className="mt-12 border-l-2 border-[#E8343C] bg-[#15181A] px-7 py-7 md:px-9">
          <EloEyebrow>Por que o Power BI não resolve isto</EloEyebrow>
          <p className="mt-4 max-w-[82ch] font-sans text-[17px] font-semibold leading-snug text-[#EDF0EF] md:text-[21px]">
            Ferramenta de BI mostra o dado que existe. Nenhuma delas cria o dado que nunca foi
            registrado.
          </p>
          <p className="mt-4 max-w-[82ch] text-[14px] leading-relaxed text-[#9BA5A7] md:text-[15px]">
            O Fabric já está pago e já está rodando — e continuará. O que o Elo faz é encher a fonte:
            a partir do momento em que a visita, a cotação e a amostra viram registro, esses mesmos
            gráficos passam a existir no Power BI de vocês também, sem trocar de ferramenta. O Elo
            não concorre com o BI. Ele é o que faltava antes dele.
          </p>
        </div>
      </EloReveal>
    </EloSection>
  );
}
