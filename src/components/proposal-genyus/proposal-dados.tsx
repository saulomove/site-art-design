"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import {
  VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

const OURO = "#8A6A24";
const VERDE = "#4F7A63";
const VERMELHO = "#B5342B";

function kg(v: number) {
  return v.toLocaleString("pt-BR") + " kg";
}

/* ---------------------------- moldura ---------------------------- */

function Grafico({
  n, titulo, achado, children, largo,
}: {
  n: string; titulo: string; achado: React.ReactNode; children: React.ReactNode; largo?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65 }}
      className={`flex flex-col bg-white p-7 md:p-9 ${largo ? "lg:col-span-2" : ""}`}
    >
      <figcaption className="mb-7">
        <span className="font-mono text-[11px] tracking-[0.2em] text-[#8A6A24]/60">{n}</span>
        <h3 className="mt-2 font-playfair text-xl font-medium leading-snug text-[#0B0B0B] md:text-2xl">
          {titulo}
        </h3>
      </figcaption>
      <div className="flex-1">{children}</div>
      <p className="mt-7 border-t border-[#0B0B0B]/[0.08] pt-5 text-[14px] leading-relaxed text-[#0B0B0B]/70">
        {achado}
      </p>
    </motion.figure>
  );
}

/* ------------------------- A1 · produtores ------------------------ */

const CLIENTES = [
  { n: "Vinícola Santa Augusta", v: 97984, p: 35.7, propria: true },
  { n: "Suzin", v: 45880, p: 16.7 },
  { n: "Serra do Sol", v: 34425, p: 12.5 },
  { n: "Monte Agudo", v: 32426, p: 11.8 },
  { n: "CATA", v: 32176, p: 11.7 },
  { n: "Legado", v: 11602, p: 4.2 },
  { n: "Berto Aguiar", v: 4519, p: 1.6 },
  { n: "Vinicius Cailiari", v: 3816, p: 1.4 },
  { n: "Marques Cervantes", v: 3000, p: 1.1 },
  { n: "Jean", v: 2706, p: 1.0 },
  { n: "Viam", v: 2242, p: 0.8 },
  { n: "Fabrício", v: 1650, p: 0.6 },
  { n: "Água Escondida", v: 1341, p: 0.5 },
  { n: "Fazenda Favorita", v: 954, p: 0.3 },
];

function A1() {
  const max = CLIENTES[0].v;
  return (
    <Grafico
      n="A · 01"
      titulo="Quem enche a adega"
      achado={
        <>
          <strong className="text-[#0B0B0B]">64,3% de tudo que entra é uva de terceiro.</strong>{" "}
          Só um terço da adega é uva da própria Santa Augusta. Ou seja: dois
          terços da operação são exatamente o serviço que o módulo de guarda
          cobra — e que hoje não tem onde ser cobrado.
        </>
      }
    >
      {/* barra própria × terceiros */}
      <div className="mb-8">
        <div className="flex h-8 w-full overflow-hidden">
          <div className="flex items-center justify-center" style={{ width: "35.7%", background: OURO }}>
            <span className="text-[10px] font-bold text-white">35,7%</span>
          </div>
          <div className="flex items-center justify-center" style={{ width: "64.3%", background: VERDE }}>
            <span className="text-[10px] font-bold text-white">64,3%</span>
          </div>
        </div>
        <div className="mt-2.5 flex justify-between text-[11px] uppercase tracking-[0.14em] text-[#0B0B0B]/45">
          <span>Uva própria</span>
          <span>Uva de terceiro</span>
        </div>
      </div>

      <ul className="space-y-2.5">
        {CLIENTES.map((c) => (
          <li key={c.n} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
            <span
              className={`w-[112px] flex-shrink-0 truncate text-[12px] sm:w-[140px] ${
                c.propria ? "font-semibold text-[#8A6A24]" : "text-[#0B0B0B]/70"
              }`}
            >
              {c.n}
            </span>
            <span className="h-[9px] bg-[#0B0B0B]/[0.05]">
              <span
                className="block h-full"
                style={{ width: `${(c.v / max) * 100}%`, background: c.propria ? OURO : VERDE }}
              />
            </span>
            <span className="w-[76px] flex-shrink-0 text-right font-mono text-[11px] text-[#0B0B0B]/50">
              {kg(c.v)}
            </span>
          </li>
        ))}
      </ul>
    </Grafico>
  );
}

/* --------------------------- A2 · uvas ---------------------------- */

const UVAS = [
  { n: "Merlot", v: 40239, p: 14.6 },
  { n: "Sauvignon Blanc", v: 30808, p: 11.2 },
  { n: "Chardonnay", v: 27142, p: 9.9 },
  { n: "Malbec", v: 26561, p: 9.7 },
  { n: "Moscato Giallo", v: 20813, p: 7.6 },
  { n: "Cabernet Sauvignon", v: 15103, p: 5.5 },
  { n: "Sangiovese", v: 14856, p: 5.4 },
  { n: "Trebbiano", v: 13391, p: 4.9 },
  { n: "Pinot Noir", v: 13100, p: 4.8 },
  { n: "Viognier", v: 11594, p: 4.2 },
  { n: "Outras 17 grafias", v: 61115, p: 22.2, resto: true },
];

function A2() {
  const max = Math.max(...UVAS.map((u) => u.v));
  return (
    <Grafico
      n="A · 02"
      titulo="Vinte e sete grafias, não vinte e sete uvas"
      achado={
        <>
          A planilha registra <strong className="text-[#0B0B0B]">27 nomes diferentes</strong> de
          variedade — mas boa parte é a mesma uva escrita de jeitos diferentes:{" "}
          <em>Niagara</em> e <em>Niagara base</em>, <em>Cabernet Sauvignon</em>,{" "}
          <em>Cabernet Sauvignon (espaldeira)</em> e{" "}
          <em>Cabernet Sauvignon(mangedora)</em>. Cada pessoa digita como quer, e
          nenhum relatório fecha. No sistema, variedade é lista — não campo livre.
        </>
      }
    >
      <ul className="space-y-2.5">
        {UVAS.map((u) => (
          <li key={u.n} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
            <span
              className={`w-[112px] flex-shrink-0 truncate text-[12px] sm:w-[140px] ${
                u.resto ? "italic text-[#0B0B0B]/40" : "text-[#0B0B0B]/70"
              }`}
            >
              {u.n}
            </span>
            <span className="h-[9px] bg-[#0B0B0B]/[0.05]">
              <span
                className="block h-full"
                style={{
                  width: `${(u.v / max) * 100}%`,
                  background: u.resto ? "#0B0B0B26" : OURO,
                }}
              />
            </span>
            <span className="w-[52px] flex-shrink-0 text-right font-mono text-[11px] text-[#0B0B0B]/50">
              {u.p.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}%
            </span>
          </li>
        ))}
      </ul>
    </Grafico>
  );
}

/* --------------------------- A3 · meses --------------------------- */

const MESES = [
  { m: "jan", kg: 15378, n: 2 },
  { m: "fev", kg: 111971, n: 25 },
  { m: "mar", kg: 78862, n: 27 },
  { m: "abr", kg: 66665, n: 18 },
  { m: "mai", kg: 0, n: 0 },
  { m: "jun", kg: 761, n: 1 },
];

function A3() {
  const max = Math.max(...MESES.map((m) => m.kg));
  return (
    <Grafico
      n="A · 03"
      titulo="A safra inteira cabe em dez semanas"
      achado={
        <>
          <strong className="text-[#0B0B0B]">Fevereiro e março concentram 69,5% do volume</strong>{" "}
          e 52 dos 75 recebimentos. É exatamente quando a equipe tem menos tempo
          para preencher planilha — e é por isso que os erros se concentram aí.
          Recebimento pelo celular na balança resolve o pico, não o resto do ano.
        </>
      }
    >
      <div className="flex h-[220px] items-end gap-2 sm:gap-4">
        {MESES.map((m) => (
          <div key={m.m} className="flex flex-1 flex-col items-center justify-end">
            <span className="mb-2 font-mono text-[10px] text-[#0B0B0B]/45">
              {m.kg > 0 ? `${(m.kg / 1000).toFixed(0)}t` : "—"}
            </span>
            <div
              className="w-full"
              style={{
                height: `${Math.max((m.kg / max) * 165, m.kg > 0 ? 3 : 1)}px`,
                background: m.kg / max > 0.6 ? VERMELHO : OURO,
              }}
            />
            <span className="mt-3 text-[11px] uppercase tracking-[0.1em] text-[#0B0B0B]/55">
              {m.m}
            </span>
            <span className="mt-0.5 text-[10px] text-[#0B0B0B]/30">
              {m.n > 0 ? `${m.n} lotes` : "—"}
            </span>
          </div>
        ))}
      </div>
    </Grafico>
  );
}

/* ------------------------ A4 · rendimento ------------------------- */

const REND = [
  { c: "Suzin", u: "Sauvignon Blanc", kg: 3246, l: 4300, r: 132.5 },
  { c: "Serra do Sol", u: "Sangiovese", kg: 3578, l: 4400, r: 123.0 },
  { c: "Água Escondida", u: "Chardonnay", kg: 258, l: 310, r: 120.2 },
  { c: "Vinicius Cailiari", u: "Chardonnay", kg: 922, l: 830, r: 90.0 },
  { c: "Vinicius Cailiari", u: "Felicia", kg: 400, l: 350, r: 87.5 },
  { c: "Santa Augusta", u: "Sauvignon Blanc", kg: 3000, l: 600, r: 20.0 },
];
/** Os 73 lotes com peso e litragem, só o rendimento — para a nuvem de pontos. */
const NUVEM = [
  132.5, 123.0, 120.2, 90.0, 87.5, 76.9, 76.4, 75.8, 75.0, 75.0, 75.0, 75.0,
  74.8, 74.7, 74.7, 72.8, 71.9, 71.2, 71.1, 70.9, 70.0, 70.0, 70.0, 70.0, 70.0,
  70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 69.9, 69.5, 69.4, 69.3,
  69.1, 69.0, 68.8, 68.7, 68.5, 68.5, 68.4, 68.1, 68.1, 68.1, 68.0, 68.0, 68.0,
  68.0, 68.0, 68.0, 68.0, 68.0, 68.0, 68.0, 68.0, 67.9, 67.5, 66.5, 64.7, 64.6,
  64.6, 63.3, 63.0, 60.0, 60.0, 59.9, 59.4, 20.0, 70.0,
];

function A4() {
  const H = 230;
  const esc = (r: number) => H - (Math.min(r, 140) / 140) * H;
  return (
    <Grafico
      n="A · 04"
      largo
      titulo="Seis lotes que a física não explica"
      achado={
        <>
          Cada ponto é um dos <strong className="text-[#0B0B0B]">73 lotes</strong> com peso e
          litragem registrados. A faixa verde é o rendimento real da casa — a
          média apurada é <strong className="text-[#0B0B0B]">70,9%</strong>, exatamente a faixa
          técnica correta. Mas cinco lotes estão acima de 85% e um deles marca{" "}
          <strong className="text-[#B5342B]">132,5%</strong>: mais litro do que uva
          entrou. E um lote marca 20%, quatro vezes abaixo do normal. Não é
          problema de produção — é digitação que ninguém confere. No sistema, o
          apontamento é barrado na hora.
        </>
      }
    >
      <div className="overflow-x-auto">
        <div className="min-w-[520px]">
          <svg viewBox={`0 0 760 ${H + 30}`} className="w-full" role="img" aria-label="Dispersão de rendimento por lote">
            {/* faixa técnica 60–78% */}
            <rect x="42" y={esc(78)} width="712" height={esc(60) - esc(78)} fill={VERDE} opacity="0.1" />
            <line x1="42" y1={esc(70.9)} x2="754" y2={esc(70.9)} stroke={VERDE} strokeWidth="1" strokeDasharray="4 4" />
            <line x1="42" y1={esc(100)} x2="754" y2={esc(100)} stroke={VERMELHO} strokeWidth="1" />
            {[0, 25, 50, 75, 100, 125].map((t) => (
              <g key={t}>
                <text x="34" y={esc(t) + 4} textAnchor="end" fontSize="10" fill="#0B0B0B" opacity="0.35" fontFamily="monospace">
                  {t}%
                </text>
                <line x1="42" y1={esc(t)} x2="754" y2={esc(t)} stroke="#0B0B0B" strokeWidth="0.5" opacity="0.06" />
              </g>
            ))}
            <text x="48" y={esc(100) - 6} fontSize="10" fill={VERMELHO} fontFamily="monospace">
              100% — o limite físico
            </text>
            <text x="750" y={esc(70.9) - 8} textAnchor="end" fontSize="10" fill={VERDE} fontFamily="monospace">
              70,9% — a média da casa
            </text>
            {NUVEM.map((r, i) => {
              const anom = r > 85 || r < 45;
              return (
                <circle
                  key={i}
                  cx={54 + i * 9.6}
                  cy={esc(r)}
                  r={anom ? 5 : 3.5}
                  fill={anom ? VERMELHO : VERDE}
                  opacity={anom ? 0.95 : 0.5}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <ul className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {REND.map((l) => (
          <li key={`${l.c}-${l.u}`} className="border-l-2 border-[#B5342B]/50 bg-[#B5342B]/[0.04] px-4 py-3">
            <p className="text-[12px] font-semibold text-[#0B0B0B]">
              {l.c} · {l.u}
            </p>
            <p className="mt-1 font-mono text-[11px] text-[#0B0B0B]/55">
              {l.kg.toLocaleString("pt-BR")} kg → {l.l.toLocaleString("pt-BR")} L ={" "}
              <span className="font-bold text-[#B5342B]">
                {l.r.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}%
              </span>
            </p>
          </li>
        ))}
      </ul>
    </Grafico>
  );
}

/* --------------------------- A5 · etapas -------------------------- */

const ETAPAS = [
  { e: "1ª · Prensagem e desengace", tar: "R$ 1,25/kg", v: 209738, n: 55, cor: OURO },
  { e: "2ª · Vinificação", tar: "R$ 2,30 a R$ 4,15/L", v: 456802, n: 55, cor: OURO },
  { e: "3ª · Envase", tar: "R$ 4,10/garrafa", v: 0, n: 0, cor: VERMELHO },
];

function A5() {
  const max = 456802;
  return (
    <Grafico
      n="A · 05"
      titulo="A terceira cobrança não existe em lugar nenhum"
      achado={
        <>
          As duas primeiras etapas somam{" "}
          <strong className="text-[#0B0B0B]">R$ 666.540</strong> apurados na planilha. A
          terceira — o envase, a R$ 4,10 por garrafa — não tem uma única linha
          registrada na tabela de safra. E das 75 linhas,{" "}
          <strong className="text-[#B5342B]">apenas 7 têm número de nota</strong>. O
          faturamento existe; o registro de que ele aconteceu, não.
        </>
      }
    >
      <div className="space-y-7">
        {ETAPAS.map((e) => (
          <div key={e.e}>
            <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="text-[13px] font-semibold text-[#0B0B0B]">{e.e}</span>
              <span className="font-mono text-[11px] text-[#0B0B0B]/40">{e.tar}</span>
            </div>
            <div className="h-7 w-full bg-[#0B0B0B]/[0.05]">
              <div
                className="flex h-full items-center px-3"
                style={{ width: `${Math.max((e.v / max) * 100, e.v === 0 ? 100 : 0)}%`, background: e.v === 0 ? "transparent" : e.cor }}
              >
                {e.v > 0 ? (
                  <span className="font-mono text-[11px] font-bold text-white">
                    R$ {e.v.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                  </span>
                ) : (
                  <span className="font-mono text-[11px] font-bold text-[#B5342B]">
                    nenhum registro
                  </span>
                )}
              </div>
            </div>
            <p className="mt-2 text-[11px] text-[#0B0B0B]/40">
              {e.n > 0 ? `${e.n} de 75 lotes com valor lançado` : "0 de 75 lotes"}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4 border border-[#B5342B]/25 bg-[#B5342B]/[0.04] p-5">
        <p className="font-playfair text-4xl font-medium text-[#B5342B]">9%</p>
        <p className="text-[13px] leading-relaxed text-[#0B0B0B]/70">
          das linhas têm número de nota. As outras 68 podem ter sido faturadas ou
          não — olhando a planilha, não dá para saber.
        </p>
      </div>
    </Grafico>
  );
}

/* -------------------------- A6 · a adega hoje --------------------- */

function A6() {
  const faixas = [
    { f: "Até 6 meses", n: 46, cor: VERDE, nota: "Dentro da primeira faixa" },
    { f: "7 a 12 meses", n: 27, cor: OURO, nota: "Viram de faixa até janeiro" },
    { f: "Sem data registrada", n: 1, cor: "#0B0B0B40", nota: "Não dá para calcular" },
    { f: "Lote fantasma", n: 1, cor: VERMELHO, nota: "Data digitada como 20226" },
  ];
  const tot = 75;
  return (
    <Grafico
      n="A · 06"
      largo
      titulo="Onde a safra 2026 está hoje"
      achado={
        <>
          Se a política de guarda fosse de doze meses,{" "}
          <strong className="text-[#0B0B0B]">27 lotes virariam de faixa entre agora e janeiro</strong>{" "}
          — e ninguém seria avisado, porque não há o que avisar. Há ainda um lote
          com data digitada como <span className="font-mono">06/02/20226</span>,
          que qualquer soma vai tratar como se estivesse parado há 55 meses.
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div>
      <div className="mb-8 flex h-10 w-full overflow-hidden">
        {faixas.map((f) => (
          <div
            key={f.f}
            className="flex items-center justify-center"
            style={{ width: `${(f.n / tot) * 100}%`, background: f.cor, minWidth: f.n < 3 ? "10px" : undefined }}
          >
            {f.n > 3 && <span className="text-[11px] font-bold text-white">{f.n}</span>}
          </div>
        ))}
      </div>
      <ul className="space-y-3.5">
        {faixas.map((f) => (
          <li key={f.f} className="flex items-start gap-3.5">
            <span className="mt-[6px] h-2.5 w-2.5 flex-shrink-0" style={{ background: f.cor }} />
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-[#0B0B0B]">
                {f.f} · {f.n} {f.n === 1 ? "lote" : "lotes"}
              </p>
              <p className="mt-0.5 text-[12px] text-[#0B0B0B]/50">{f.nota}</p>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <div className="border-l-2 border-[#8A6A24]/40 bg-[#8A6A24]/[0.05] p-7">
        <p className="font-playfair text-5xl font-medium text-[#8A6A24]">27</p>
        <p className="mt-4 text-[14px] leading-relaxed text-[#0B0B0B]/70">
          lotes cruzam a marca de doze meses entre setembro e janeiro. Com uma
          tarifa de R$ 0,12 por litro ao mês sobre o volume deles, é receita que
          simplesmente não é lançada hoje — porque não existe o campo onde lançar.
        </p>
      </div>
      </div>
    </Grafico>
  );
}

/* ---------------------------- a seção ----------------------------- */

export function ProposalGenyusDados() {
  return (
    <section
      id="dados"
      className="relative scroll-mt-[68px] overflow-hidden bg-[#F4F0E8] py-24 md:py-32"
    >
      <VinicolaDivider onLight />

      <div className="container mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          onLight
          eyebrow="O retrato da safra"
          title="Colocamos a sua safra"
          italic="em gráfico"
          lead="Tudo nesta página saiu das duas planilhas que a Fran enviou — 75 recebimentos, 14 produtores, 274.722 kg de uva. Nenhum número foi estimado. Foi o mesmo processamento que o Genyus Wine faz sozinho toda vez que um lote entra."
        />

        {/* o achado que abre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-6 border-l-2 border-[#B5342B] bg-white p-8 md:p-10"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-[#B5342B]" />
            <div>
              <VinicolaEyebrow onLight>O que apareceu ao somar</VinicolaEyebrow>
              <h3 className="mt-4 font-playfair text-2xl font-medium leading-snug text-[#0B0B0B] md:text-3xl">
                Seis mil litros que a planilha soma, mas não sabe de onde vieram.
              </h3>
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#0B0B0B]/70">
                A litragem total da safra fecha em{" "}
                <strong className="text-[#0B0B0B]">200.748 litros</strong>. Mas ao cruzar
                litro contra peso, só{" "}
                <strong className="text-[#0B0B0B]">194.748 litros</strong> têm uva
                correspondente. A diferença são{" "}
                <strong className="text-[#B5342B]">6.000 litros do lote do Celso Panceri</strong>{" "}
                — espumante de Niágara, R$ 25.360 lançados, sem peso, sem data e
                sem preço por quilo registrados.
              </p>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#0B0B0B]/70">
                O lote provavelmente existe e está correto. O ponto é outro: a
                planilha somou os dois números sem reclamar, e ninguém percebeu.
                Este achado não veio de leitura — veio de rodar a conta. É
                literalmente o que o sistema passa a fazer todo dia.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <A1 />
          <A2 />
          <A3 />
          <A5 />
          <A4 />
          <A6 />
        </div>
      </div>
    </section>
  );
}
