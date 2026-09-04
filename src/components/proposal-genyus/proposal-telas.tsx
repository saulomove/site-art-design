"use client";

import { motion } from "framer-motion";
import type { ProposalScreenSpec } from "@/lib/proposals-data";
import { AlertTriangle, Camera, QrCode, Check } from "lucide-react";
import {
  VinicolaDivider,
  VinicolaSectionHeader,
  VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

interface Props {
  screens?: ProposalScreenSpec[];
}

/* ---------------------------------------------------------------- */
/*  Mockups — ilustrações das telas, montadas em HTML                */
/* ---------------------------------------------------------------- */

function Moldura({
  children,
  legenda,
}: {
  children: React.ReactNode;
  legenda: string;
}) {
  return (
    <div>
      <div className="overflow-hidden border border-[#CCCCCC]/12 bg-[#0E0D0C]">
        <div className="flex items-center gap-2 border-b border-[#CCCCCC]/10 bg-[#151413] px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#CCCCCC]/20" />
          <span className="h-2 w-2 rounded-full bg-[#CCCCCC]/20" />
          <span className="h-2 w-2 rounded-full bg-[#CCCCCC]/20" />
          <span className="ml-3 font-mono text-[10px] tracking-wider text-[#CCCCCC]/35">
            genyus.wine
          </span>
        </div>
        {children}
      </div>
      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC]/30">
        {legenda}
      </p>
    </div>
  );
}

function TelaRecebimento() {
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[28px] border-[6px] border-[#1A1815] bg-[#0E0D0C] shadow-2xl">
        <div className="flex items-center justify-between bg-[#151413] px-4 py-2 font-mono text-[9px] text-[#CCCCCC]/40">
          <span>9:41</span>
          <span>Genyus Wine</span>
        </div>
        <div className="p-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#CA8B35]">
            Novo recebimento
          </p>

          <div className="mt-4 space-y-3">
            <div>
              <p className="text-[9px] uppercase tracking-wider text-[#CCCCCC]/35">
                Produtor
              </p>
              <div className="mt-1 border border-[#CCCCCC]/12 bg-[#151413] px-3 py-2.5 text-[13px] text-white">
                SUZIN
              </div>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wider text-[#CCCCCC]/35">
                Varietal
              </p>
              <div className="mt-1 border border-[#CCCCCC]/12 bg-[#151413] px-3 py-2.5 text-[13px] text-white">
                Merlot
              </div>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-wider text-[#CCCCCC]/35">
                Peso na balança
              </p>
              <div className="mt-1 flex items-baseline gap-1.5 border border-[#CA8B35]/40 bg-[#CA8B35]/[0.07] px-3 py-2.5">
                <span className="font-playfair text-2xl font-medium text-[#CA8B35]">
                  5.971
                </span>
                <span className="text-[11px] text-[#CCCCCC]/45">kg</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-center gap-1.5 border border-dashed border-[#CCCCCC]/15 py-3">
                <Camera className="h-4 w-4 text-[#CCCCCC]/35" />
                <span className="text-[9px] text-[#CCCCCC]/35">Nota</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 border border-dashed border-[#CCCCCC]/15 py-3">
                <Camera className="h-4 w-4 text-[#CCCCCC]/35" />
                <span className="text-[9px] text-[#CCCCCC]/35">Carga</span>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-[#CA8B35] py-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B0B0B]">
            Registrar lote
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-[9px] text-[#CCCCCC]/35">
            <QrCode className="h-3 w-3" />
            Gera etiqueta SUZ-2026-014
          </div>
        </div>
      </div>
    </div>
  );
}

const LOTES = [
  {
    codigo: "CAT-2025-003",
    produtor: "CATA",
    varietal: "Pinot Noir",
    entrada: "10/04/2025",
    litros: "3.400 L",
    meses: 14,
    pct: 100,
    status: "Faixa virada",
    cor: "bg-[#B5342B]",
    texto: "text-[#D4574D]",
    fundo: "bg-[#B5342B]/10",
  },
  {
    codigo: "SUZ-2025-007",
    produtor: "SUZIN",
    varietal: "Malbec",
    entrada: "15/02/2025",
    litros: "2.720 L",
    meses: 10,
    pct: 83,
    status: "Vira em 60 dias",
    cor: "bg-[#CA8B35]",
    texto: "text-[#CA8B35]",
    fundo: "bg-[#CA8B35]/10",
  },
  {
    codigo: "SDS-2026-011",
    produtor: "SERRA DO SOL",
    varietal: "Sangiovese",
    entrada: "17/03/2026",
    litros: "2.756 L",
    meses: 3,
    pct: 25,
    status: "Dentro da faixa",
    cor: "bg-[#4F7A63]",
    texto: "text-[#6D9B83]",
    fundo: "bg-[#4F7A63]/10",
  },
] as const;

export function TelaGuarda() {
  return (
    <div className="p-5 md:p-7">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#CA8B35]">
            Painel da guarda
          </p>
          <p className="mt-1.5 font-playfair text-xl font-medium text-white">
            18 lotes armazenados
          </p>
        </div>
        <div className="flex gap-2 text-[9px] uppercase tracking-wider">
          {[
            { l: "Dentro", c: "bg-[#4F7A63]" },
            { l: "Perto", c: "bg-[#CA8B35]" },
            { l: "Virou", c: "bg-[#B5342B]" },
          ].map((x) => (
            <span key={x.l} className="flex items-center gap-1.5 text-[#CCCCCC]/40">
              <span className={`h-2 w-2 ${x.c}`} />
              {x.l}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {LOTES.map((lote) => (
          <div
            key={lote.codigo}
            className="border border-[#CCCCCC]/10 bg-[#151413] p-4 md:p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-[10px] text-[#CCCCCC]/40">
                    {lote.codigo}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${lote.fundo} ${lote.texto}`}
                  >
                    {lote.status}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-white">
                  {lote.produtor} · {lote.varietal}
                </p>
                <p className="mt-0.5 text-[11px] text-[#CCCCCC]/40">
                  Entrada {lote.entrada} · {lote.litros}
                </p>
              </div>
              <div className="text-right">
                <p className={`font-playfair text-2xl font-medium ${lote.texto}`}>
                  {lote.meses}
                </p>
                <p className="text-[9px] uppercase tracking-wider text-[#CCCCCC]/35">
                  meses
                </p>
              </div>
            </div>

            <div className="mt-4 h-1.5 w-full bg-[#CCCCCC]/[0.08]">
              <div
                className={`h-full ${lote.cor}`}
                style={{ width: `${lote.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TANQUES = [
  { id: "T-01", pct: 88, st: "guarda", l: "8.800 L" },
  { id: "T-02", pct: 64, st: "ferment", l: "6.400 L" },
  { id: "T-03", pct: 100, st: "guarda", l: "10.000 L" },
  { id: "T-04", pct: 0, st: "livre", l: "vazio" },
  { id: "T-05", pct: 42, st: "envase", l: "4.200 L" },
  { id: "T-06", pct: 95, st: "guarda", l: "9.500 L" },
  { id: "B-01", pct: 100, st: "guarda", l: "225 L" },
  { id: "B-02", pct: 100, st: "guarda", l: "225 L" },
  { id: "B-03", pct: 0, st: "livre", l: "vazio" },
  { id: "B-04", pct: 100, st: "ferment", l: "225 L" },
] as const;

const ST_COR: Record<string, { bar: string; label: string; text: string }> = {
  guarda: { bar: "bg-[#CA8B35]", label: "Em guarda", text: "text-[#CA8B35]" },
  ferment: { bar: "bg-[#4F7A63]", label: "Fermentando", text: "text-[#6D9B83]" },
  envase: { bar: "bg-[#7C6BA8]", label: "Aguardando envase", text: "text-[#9C8BC8]" },
  livre: { bar: "bg-[#CCCCCC]/20", label: "Livre", text: "text-[#CCCCCC]/40" },
};

export function TelaAdega() {
  return (
    <div className="p-5 md:p-7">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#CA8B35]">
            Mapa da adega
          </p>
          <p className="mt-1.5 font-playfair text-xl font-medium text-white">
            Ocupação em tempo real
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-wider">
          {Object.entries(ST_COR).map(([k, v]) => (
            <span key={k} className="flex items-center gap-1.5 text-[#CCCCCC]/40">
              <span className={`h-2 w-2 ${v.bar}`} />
              {v.label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5">
        {TANQUES.map((t) => {
          const c = ST_COR[t.st];
          return (
            <div
              key={t.id}
              className="flex flex-col justify-between border border-[#CCCCCC]/10 bg-[#151413] p-3"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] text-[#CCCCCC]/50">
                  {t.id}
                </span>
                <span className={`text-[9px] ${c.text}`}>{t.pct}%</span>
              </div>
              <div className="my-3 flex h-16 items-end bg-[#CCCCCC]/[0.06]">
                <div
                  className={`w-full ${c.bar}`}
                  style={{ height: `${Math.max(t.pct, 4)}%` }}
                />
              </div>
              <span className="text-[10px] text-[#CCCCCC]/45">{t.l}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TelaApontamento() {
  return (
    <div className="p-5 md:p-7">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#CA8B35]">
        Apontamento de produção
      </p>
      <p className="mt-1.5 font-playfair text-xl font-medium text-white">
        Lote SUZ-2026-002 · Sauvignon Blanc
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="border border-[#CCCCCC]/12 bg-[#151413] p-4">
          <p className="text-[9px] uppercase tracking-wider text-[#CCCCCC]/35">
            Uva recebida
          </p>
          <p className="mt-2 font-playfair text-2xl font-medium text-white">
            3.246 <span className="text-sm text-[#CCCCCC]/40">kg</span>
          </p>
        </div>
        <div className="border border-[#B5342B]/50 bg-[#B5342B]/[0.08] p-4">
          <p className="text-[9px] uppercase tracking-wider text-[#CCCCCC]/35">
            Litragem informada
          </p>
          <p className="mt-2 font-playfair text-2xl font-medium text-[#D4574D]">
            4.300 <span className="text-sm text-[#CCCCCC]/40">L</span>
          </p>
        </div>
        <div className="border border-[#B5342B]/50 bg-[#B5342B]/[0.08] p-4">
          <p className="text-[9px] uppercase tracking-wider text-[#CCCCCC]/35">
            Rendimento
          </p>
          <p className="mt-2 font-playfair text-2xl font-medium text-[#D4574D]">
            132%
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3 border-l-2 border-[#B5342B] bg-[#B5342B]/[0.06] p-4">
        <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D4574D]" />
        <div>
          <p className="text-[13px] font-semibold text-white">
            Rendimento acima do fisicamente possível
          </p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-[#CCCCCC]/55">
            A média da casa é 70,2%. Confira a litragem ou registre a mistura de
            partidas antes de salvar.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <span className="border border-[#CCCCCC]/20 px-5 py-2.5 text-[11px] uppercase tracking-wider text-[#CCCCCC]/60">
          Corrigir
        </span>
        <span className="flex items-center gap-2 border border-[#CCCCCC]/12 px-5 py-2.5 text-[11px] uppercase tracking-wider text-[#CCCCCC]/35">
          <Check className="h-3 w-3" />
          Justificar e salvar
        </span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */

export function ProposalGenyusTelas({ screens }: Props) {
  const restantes = (screens ?? []).filter((s) =>
    ["financeiro", "bi"].includes(s.key),
  );
  const byKey = (k: string) => (screens ?? []).find((s) => s.key === k);

  const blocos = [
    { spec: byKey("recebimento"), render: <TelaRecebimento />, legenda: "Recebimento no celular", lado: true },
    { spec: byKey("apontamento"), render: <TelaApontamento />, legenda: "Validação de rendimento", lado: true },
  ];

  return (
    <section
      id="telas"
      className="relative scroll-mt-[68px] overflow-hidden bg-[#F4F0E8] py-24 md:py-32"
    >
      <VinicolaDivider onLight />

      <div className="container mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          onLight
          eyebrow="As telas"
          title="Não é conceito. É"
          italic="o que vai estar na tela"
          lead="As ilustrações abaixo mostram como cada perfil usa o sistema no dia a dia — da balança à diretoria. São representações do que será construído, com os dados reais da sua safra."
        />

        {/* Blocos com mockup ao lado da descrição */}
        <div className="space-y-8">
          {blocos.map((b, idx) =>
            b.spec ? (
              <motion.div
                key={b.spec.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="grid items-center gap-10 bg-white p-8 md:p-12 lg:grid-cols-2 lg:gap-14"
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A6A24]">
                    {b.spec.role}
                  </span>
                  <h3 className="mt-4 font-playfair text-2xl font-medium text-[#0B0B0B] md:text-3xl">
                    {b.spec.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#0B0B0B]/65">
                    {b.spec.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {b.spec.points.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] leading-snug text-[#0B0B0B]/75"
                      >
                        <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#8A6A24]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  {b.legenda === "Recebimento no celular" ? (
                    <>
                      {b.render}
                      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#0B0B0B]/30">
                        {b.legenda}
                      </p>
                    </>
                  ) : (
                    <Moldura legenda={b.legenda}>{b.render}</Moldura>
                  )}
                </div>
              </motion.div>
            ) : null,
          )}
        </div>

        {/* Guarda e adega em largura cheia */}
        {(["guarda", "adega"] as const).map((k, idx) => {
          const spec = byKey(k);
          if (!spec) return null;
          return (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="mt-8 bg-white p-8 md:p-12"
            >
              <div className="mb-8 max-w-3xl">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A6A24]">
                  {spec.role}
                </span>
                <h3 className="mt-4 font-playfair text-2xl font-medium text-[#0B0B0B] md:text-3xl">
                  {spec.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#0B0B0B]/65">
                  {spec.description}
                </p>
              </div>

              <Moldura legenda={idx === 0 ? "Painel da guarda" : "Mapa da adega"}>
                {idx === 0 ? <TelaGuarda /> : <TelaAdega />}
              </Moldura>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {spec.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] leading-snug text-[#0B0B0B]/75"
                  >
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#8A6A24]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}

        {/* Demais telas */}
        {restantes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mt-8 grid gap-6 md:grid-cols-2"
          >
            {restantes.map((s) => (
              <div key={s.key} className="bg-white p-8">
                <VinicolaEyebrow onLight>{s.role}</VinicolaEyebrow>
                <h3 className="mt-4 font-playfair text-xl font-medium text-[#0B0B0B]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0B0B0B]/65">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[13px] leading-snug text-[#0B0B0B]/70"
                    >
                      <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#8A6A24]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
