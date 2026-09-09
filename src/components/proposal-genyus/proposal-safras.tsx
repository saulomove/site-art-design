"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowRight, UserMinus, UserPlus } from "lucide-react";
import {
  VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

const OURO = "#CA8B35";
const VERDE = "#4F7A63";
const VERMELHO = "#B5342B";

/* ---------------------------- os números ---------------------------- */

const COMPARA = [
  { r: "Uva recebida", a: "153.903 kg", b: "274.722 kg", d: "+79%", bom: true },
  { r: "Litros produzidos", a: "124.797 L", b: "200.748 L", d: "+61%", bom: true },
  { r: "Lotes na safra", a: "66", b: "75", d: "+14%", bom: true },
  { r: "Produtores atendidos", a: "11", b: "15", d: "+4", bom: true },
  { r: "Linhas com nota fiscal", a: "56 de 66 · 85%", b: "7 de 75 · 9%", d: "−76 p.p.", bom: false },
];

const PRODUTORES = [
  { n: "Santa Augusta", a: 27338, b: 97984, d: "+258%" },
  { n: "Suzin", a: 65662, b: 45880, d: "−30%", queda: true },
  { n: "Serra do Sol", a: 27007, b: 34425, d: "+27%" },
  { n: "Monte Agudo", a: 11239, b: 32426, d: "+189%" },
  { n: "CATA", a: 7821, b: 32176, d: "+311%" },
  { n: "Legado", a: null, b: 11602, d: "novo" },
  { n: "Marcelo Minosso", a: 8425, b: null, d: "não voltou" },
  { n: "Berto Aguiar", a: 2957, b: 4519, d: "+53%" },
  { n: "Vinicius Cailiari", a: null, b: 3816, d: "novo" },
  { n: "Marques Cervantes", a: null, b: 3000, d: "novo" },
  { n: "Jean", a: null, b: 2706, d: "novo" },
  { n: "Vian", a: 1392, b: 2242, d: "+61%" },
  { n: "Fabrício", a: null, b: 1650, d: "novo" },
  { n: "Água Escondida", a: null, b: 1341, d: "novo" },
  { n: "Fazenda Favorita", a: 2063, b: 954, d: "−54%", queda: true },
];

const PRECOS = [
  { s: "Prensagem e desengace", u: "por kg", a: "R$ 1,15", b: "R$ 1,25", d: "+8,7%" },
  { s: "Vinificação · base e espumante", u: "por litro", a: "R$ 2,15", b: "R$ 2,30", d: "+7,0%" },
  { s: "Vinificação · branco e rosé", u: "por litro", a: "R$ 3,05", b: "R$ 3,25", d: "+6,6%" },
  { s: "Vinificação · tinto", u: "por litro", a: "R$ 3,90", b: "R$ 4,15", d: "+6,4%" },
];

/* ------------------------------ seção ------------------------------ */

export function ProposalGenyusSafras() {
  const maxP = 97984;

  return (
    <section
      id="safras"
      className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32"
    >
      <VinicolaDivider />
      <div className="pointer-events-none absolute left-0 top-1/3 h-[50%] w-[55%] rounded-full bg-[#B5342B]/[0.06] blur-[160px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="Duas safras lado a lado"
          title="A operação cresceu 79%."
          italic="O controle foi junto?"
          lead="Com o arquivo de 2025 na mão, dá para comparar. E a comparação diz mais do que qualquer uma das duas planilhas isolada — porque mostra a direção em que a coisa está andando."
        />

        {/* tabela comparativa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="mb-6 overflow-x-auto border border-[#CCCCCC]/12 bg-[#121110]"
        >
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#CCCCCC]/10">
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#CCCCCC]/35">
                  &nbsp;
                </th>
                <th className="px-5 py-4 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-[#CCCCCC]/45">
                  Safra 2025
                </th>
                <th className="px-5 py-4 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-[#CA8B35]">
                  Safra 2026
                </th>
                <th className="px-5 py-4 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-[#CCCCCC]/35">
                  Variação
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARA.map((l) => (
                <tr
                  key={l.r}
                  className={`border-b border-[#CCCCCC]/[0.06] last:border-0 ${
                    !l.bom ? "bg-[#B5342B]/[0.07]" : ""
                  }`}
                >
                  <td className={`whitespace-nowrap px-6 py-4 text-[14px] ${!l.bom ? "font-semibold text-white" : "text-[#CCCCCC]/75"}`}>
                    {l.r}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-mono text-[13px] text-[#CCCCCC]/55">
                    {l.a}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-mono text-[13px] text-white">
                    {l.b}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-right">
                    <span
                      className={`font-mono text-[13px] font-bold ${l.bom ? "text-[#6D9B83]" : "text-[#D4574D]"}`}
                    >
                      {l.d}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* o achado que fecha */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="mb-16 border-l-2 border-[#B5342B] bg-[#121110] p-8 md:p-12"
        >
          <VinicolaEyebrow>O que a comparação revela</VinicolaEyebrow>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-playfair text-2xl font-medium leading-snug text-white md:text-3xl">
                O controle não quebrou por descuido. Ele quebrou quando o volume
                dobrou.
              </h3>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/65">
                Em 2025, com 66 lotes, a equipe conseguia anotar o número da nota
                em <strong className="text-white">85% das linhas</strong>. Em 2026,
                com 75 lotes e quase o dobro de uva, esse número caiu para{" "}
                <strong className="text-[#D4574D]">9%</strong>. Não é falta de
                cuidado — é o limite de uma planilha preenchida à mão enquanto a
                balança não para.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/65">
                E a operação vai crescer de novo. A pergunta não é se a planilha
                vai dar conta em 2027: é quanto vai custar descobrir que não deu.
              </p>
            </div>

            {/* barras de disciplina */}
            <div className="flex flex-shrink-0 items-end gap-8 border-t border-[#CCCCCC]/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {[
                { ano: "2025", pct: 85, cor: VERDE, alt: 150 },
                { ano: "2026", pct: 9, cor: VERMELHO, alt: 16 },
              ].map((x) => (
                <div key={x.ano} className="flex flex-col items-center">
                  <span className="mb-3 font-playfair text-3xl font-medium" style={{ color: x.cor }}>
                    {x.pct}%
                  </span>
                  <div className="flex h-[150px] w-14 items-end bg-[#CCCCCC]/[0.06]">
                    <div className="w-full" style={{ height: `${x.alt}px`, background: x.cor }} />
                  </div>
                  <span className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[#CCCCCC]/45">
                    {x.ano}
                  </span>
                </div>
              ))}
              <p className="max-w-[130px] pb-1 text-[11px] leading-relaxed text-[#CCCCCC]/40">
                linhas com número de nota registrado
              </p>
            </div>
          </div>
        </motion.div>

        {/* produtores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="mb-6 border border-[#CCCCCC]/12 bg-[#121110] p-8 md:p-10"
        >
          <VinicolaEyebrow>Quem entrou, quem cresceu, quem sumiu</VinicolaEyebrow>
          <h3 className="mt-5 font-playfair text-xl font-medium text-white md:text-2xl">
            O maior cliente de 2025 entregou 30% menos em 2026 — e ninguém foi
            avisado
          </h3>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#CCCCCC]/60">
            Com uma planilha por ano, essa comparação não existe. É preciso abrir
            dois arquivos e somar à mão para descobrir que o Suzin caiu de 65.662
            para 45.880 kg, que o Marcelo Minosso não voltou, e que seis
            produtores novos entraram.
          </p>

          <div className="mt-9 space-y-3">
            <div className="flex items-center justify-end gap-6 pb-2 text-[10px] uppercase tracking-[0.16em]">
              <span className="text-[#CCCCCC]/40">2025</span>
              <span className="text-[#CA8B35]">2026</span>
            </div>
            {PRODUTORES.map((p) => (
              <div key={p.n} className="grid grid-cols-[110px_1fr_auto] items-center gap-3 sm:grid-cols-[150px_1fr_auto] sm:gap-4">
                <span className="truncate text-[12px] text-[#CCCCCC]/70 sm:text-[13px]">{p.n}</span>
                <span className="space-y-[3px]">
                  <span className="block h-[7px] bg-[#CCCCCC]/[0.05]">
                    {p.a !== null && (
                      <span className="block h-full" style={{ width: `${(p.a / maxP) * 100}%`, background: "#CCCCCC66" }} />
                    )}
                  </span>
                  <span className="block h-[7px] bg-[#CCCCCC]/[0.05]">
                    {p.b !== null && (
                      <span className="block h-full" style={{ width: `${(p.b / maxP) * 100}%`, background: OURO }} />
                    )}
                  </span>
                </span>
                <span
                  className={`w-[74px] flex-shrink-0 text-right font-mono text-[11px] ${
                    p.d === "não voltou"
                      ? "text-[#D4574D]"
                      : p.d === "novo"
                        ? "text-[#6D9B83]"
                        : p.queda
                          ? "text-[#D4574D]"
                          : "text-[#CCCCCC]/45"
                  }`}
                >
                  {p.d}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 grid gap-4 border-t border-[#CCCCCC]/10 pt-7 sm:grid-cols-3">
            {[
              { i: UserMinus, v: "2", l: "produtores não voltaram", s: "Marcelo Minosso e Villaggio Grando", c: VERMELHO },
              { i: UserPlus, v: "6", l: "produtores novos em 2026", s: "Ninguém foi cadastrado com histórico", c: VERDE },
              { i: TrendingDown, v: "2", l: "caíram mais de 30%", s: "Suzin e Fazenda Favorita", c: OURO },
            ].map((k) => {
              const Icon = k.i;
              return (
                <div key={k.l} className="flex gap-4">
                  <Icon className="mt-1 h-4 w-4 flex-shrink-0" style={{ color: k.c }} />
                  <div>
                    <p className="font-playfair text-2xl font-medium" style={{ color: k.c }}>{k.v}</p>
                    <p className="mt-1 text-[13px] font-semibold text-white">{k.l}</p>
                    <p className="mt-1 text-[12px] leading-snug text-[#CCCCCC]/45">{k.s}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-7 border-t border-[#CCCCCC]/10 pt-6 text-[13px] leading-relaxed text-[#CCCCCC]/45">
            Duas contas fecham a mesma história: em 2025, a uva de terceiro era{" "}
            <strong className="text-[#CCCCCC]/75">82,2%</strong> de tudo que entrou.
            Em 2026, <strong className="text-[#CCCCCC]/75">64,3%</strong> — não porque
            entrou menos uva de fora, mas porque a própria Santa Augusta cresceu
            258%. O serviço de terceiros cresceu 40% em volume no mesmo período.
          </p>
        </motion.div>

        {/* preços */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="border border-[#CCCCCC]/12 bg-[#121110] p-8 md:p-10"
        >
          <VinicolaEyebrow>A tabela mudou entre as safras</VinicolaEyebrow>
          <h3 className="mt-5 font-playfair text-xl font-medium text-white md:text-2xl">
            A vinícola já reajusta. O sistema só precisa guardar qual tabela valia
            em cada lote.
          </h3>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#CCCCCC]/10">
                  {["Serviço", "2025", "2026", "Reajuste"].map((h, i) => (
                    <th
                      key={h}
                      className={`px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                        i === 0 ? "text-[#CCCCCC]/35" : "text-right text-[#CCCCCC]/35"
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRECOS.map((p) => (
                  <tr key={p.s} className="border-b border-[#CCCCCC]/[0.06] last:border-0">
                    <td className="px-4 py-3.5">
                      <span className="block whitespace-nowrap text-[13px] text-white">{p.s}</span>
                      <span className="mt-0.5 block text-[11px] text-[#CCCCCC]/35">{p.u}</span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-right font-mono text-[13px] text-[#CCCCCC]/50">{p.a}</td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-right font-mono text-[13px] text-white">{p.b}</td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-right font-mono text-[13px] text-[#6D9B83]">{p.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] leading-relaxed text-[#CCCCCC]/55">
            <span className="flex items-center gap-2 text-[#CCCCCC]/40">
              hoje <ArrowRight className="h-3 w-3" />
            </span>
            <span>
              o valor é digitado linha a linha, e em 2026 apareceu um lote de
              branco a R$ 3,20 no meio de todos os outros a R$ 3,25.
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] leading-relaxed text-[#CCCCCC]/75">
            <span className="flex items-center gap-2 text-[#CA8B35]">
              no sistema <ArrowRight className="h-3 w-3" />
            </span>
            <span>
              a tabela é cadastrada uma vez por safra, o lote guarda qual tabela
              valia quando entrou, e o reajuste do ano seguinte não mexe no que já
              foi acordado.
            </span>
          </div>
        </motion.div>

        {/* nota de método */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="mt-8 flex items-start gap-3 text-[13px] leading-relaxed text-[#CCCCCC]/35"
        >
          <TrendingUp className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
          <span>
            Tudo nesta página foi apurado nos dois arquivos que a Fran enviou:
            Vinificação 2025 e SAFRA 2026 — tabela kg. Dois produtores aparecem
            com nomes diferentes entre os anos, Panceri e Celso, Adelar Vian e
            Viam, e foram tratados como o mesmo. Isso, por si só, já é um dos
            problemas que o cadastro único resolve.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
