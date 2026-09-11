"use client";

import { Play, Check, MapPin, Plus } from "lucide-react";

/* ================================================================
   As telas do Genyus Elo. Claras, densas, de sistema industrial.
   Dados da operação real da Videplast: proteína animal, cooperativas,
   as cinco plantas e a linha de produto que eles fabricam.
   ================================================================ */

const card = "min-w-0 border border-[#DCE0E0] bg-white";
const head = "border-b border-[#EDEFEF] bg-[#F6F7F7] px-4 py-3";
const rot = "font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5E6669]";
const mono = "font-mono tabular-nums";

function Pill({ t, c }: { t: string; c: "v" | "a" | "n" | "c" }) {
  const cor = {
    v: "border-[#2E7355]/45 text-[#2E7355] bg-[#2E7355]/[0.07]",
    a: "border-[#8A6115]/45 text-[#8A6115] bg-[#8A6115]/[0.07]",
    n: "border-[#C0453A]/50 text-[#C0453A] bg-[#C0453A]/[0.07]",
    c: "border-[#DCE0E0] text-[#5E6669] bg-white",
  }[c];
  return (
    <span className={`inline-block whitespace-nowrap rounded-[4px] border px-2 py-[3px] font-sans text-[9px] font-semibold uppercase tracking-[0.1em] ${cor}`}>
      {t}
    </span>
  );
}

function Barra({ pct, cor = "#2E7355" }: { pct: number; cor?: string }) {
  return (
    <span className="block h-[5px] w-full rounded-[2px] bg-[#EDEFEF]">
      <span className="block h-full rounded-[2px]" style={{ width: `${Math.min(pct, 100)}%`, background: cor }} />
    </span>
  );
}

/* ==================== 01 · PAINEL DA GESTÃO ==================== */

const KPIS = [
  { r: "Faturamento mês", v: "R$ 18,4 mi", d: "+6,2% vs. ago/2026", c: "#2E7355" },
  { r: "Volume faturado", v: "1.247 t", d: "+3,1% meta 1.320 t", c: "#2E7355" },
  { r: "Preço médio", v: "R$ 14,78/kg", d: "−0,4% mix puxou para baixo", c: "#C0453A" },
  { r: "Margem bruta", v: "23,4%", d: "+0,8 p.p. resina estável", c: "#2E7355" },
  { r: "Pedidos em atraso", v: "7", d: "+2 Rio Verde e Videira", c: "#C0453A" },
];

const PLANTAS = [
  { n: "Videira/SC", l: "Extrusão + impressão + FFS", p: 94, v: "R$ 6,21 mi" },
  { n: "Várzea Grande/MT", l: "Termoformado + laminação", p: 81, v: "R$ 3,44 mi" },
  { n: "Três Rios/RJ", l: "Stretch + encolhível", p: 68, v: "R$ 2,18 mi" },
  { n: "Rio Verde/GO", l: "Valvulado + sacola", p: 87, v: "R$ 4,02 mi" },
  { n: "União da Vitória/PR", l: "Extrusão + conversão", p: 57, v: "R$ 1,63 mi" },
];

const REPS = [
  { n: "Delazeri Rep. Com. Ltda", r: "Oeste SC", m: 96, x: 104 },
  { n: "Panizzon Embalagens ME", r: "Serra RS", m: 88, x: 71 },
  { n: "JR Trade Norte Ltda", r: "Sudoeste PR", m: 74, x: 78 },
  { n: "Brandalise & Cia", r: "Alto Vale SC", m: 62, x: 44 },
  { n: "Mattei Agroindustrial", r: "Centro-Oeste MT", m: 118, x: 126 },
  { n: "Schmitt Repres. Ltda", r: "Norte RS", m: 70, x: 66 },
  { n: "Vialle Com. Embalagens", r: "Sudoeste GO", m: 92, x: 58 },
  { n: "Fronza Repres. Ind.", r: "Litoral SC", m: 48, x: 51 },
];

const RQ = [
  { id: "RQ-2026-0417", c: "BRF S.A. · Capinzal/SC", d: "Solda fria em bobina de FFS 120µ, linha 3 parada 2x", l: "VP-FFS-260812-03", t: "9 dias", k: "a" as const },
  { id: "RQ-2026-0421", c: "Aurora Coop · Chapecó/SC", d: "Variação de espessura em stretch manual", l: "VP-STR-260825-11", t: "6 dias", k: "a" as const },
  { id: "RQ-2026-0424", c: "Frigorífico Alibem · Santa Rosa/RS", d: "Vazamento em valvulado 25 kg após paletização", l: "VP-VAL-260830-02", t: "4 dias", k: "n" as const },
  { id: "RQ-2026-0428", c: "Coop. Languiru · Teutônia/RS", d: "Impressão fora de registro em sacola vulcão", l: "VP-SAC-260903-07", t: "3 dias", k: "c" as const },
  { id: "RQ-2026-0430", c: "Pamplona Alimentos · Rio do Sul/SC", d: "Encolhimento irregular em túnel a 165 °C", l: "VP-ENC-260904-05", t: "2 dias", k: "c" as const },
];

const RISCO = [
  { c: "Seara Alimentos · Forquilhinha/SC", r: "JR Trade Norte Ltda", d: "14/07/2026", v: "−38%", f: "R$ 1,84 mi/12m" },
  { c: "Coop. Agroindustrial Alfa · Erechim/RS", r: "Schmitt Repres. Ltda", d: "02/06/2026", v: "−52%", f: "R$ 0,92 mi/12m" },
  { c: "Frigorífico Canção · Xanxerê/SC", r: "Brandalise & Cia", d: "28/05/2026", v: "−61%", f: "R$ 0,64 mi/12m" },
  { c: "JBS Aves · Montenegro/RS", r: "Fronza Repres. Ind.", d: "21/08/2026", v: "−24%", f: "R$ 2,41 mi/12m" },
  { c: "Coop. Castrolanda · Castro/PR", r: "JR Trade Norte Ltda", d: "11/08/2026", v: "−21%", f: "R$ 1,28 mi/12m" },
];

export function ViewGestao() {
  return (
    <div className="space-y-3">
      <div className="grid gap-px overflow-hidden border border-[#DCE0E0] bg-[#DCE0E0] sm:grid-cols-3 lg:grid-cols-5">
        {KPIS.map((k) => (
          <div key={k.r} className="bg-white p-4">
            <p className={rot}>{k.r}</p>
            <p className={`mt-2 font-sans text-[22px] font-bold tracking-[-0.02em] text-[#131516] ${mono}`}>{k.v}</p>
            <p className="mt-1.5 text-[11px] leading-snug" style={{ color: k.c }}>{k.d}</p>
          </div>
        ))}
      </div>

      <div className="grid min-w-0 gap-3 lg:grid-cols-2">
        <div className={card}>
          <div className={`${head} flex items-baseline justify-between gap-3`}>
            <p className="font-sans text-[13px] font-semibold text-[#131516]">Meta vs. realizado por representante</p>
            <span className={rot}>setembro · parcial</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[470px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#EDEFEF]">
                  {["Representante (PJ)", "Região", "Meta (t)", "Real (t)", "Atingimento"].map((h) => (
                    <th key={h} className={`whitespace-nowrap px-4 py-2.5 ${rot}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {REPS.map((r) => {
                  const pct = Math.round((r.x / r.m) * 100);
                  const cor = pct >= 100 ? "#2E7355" : pct >= 80 ? "#8A6115" : "#C0453A";
                  return (
                    <tr key={r.n} className="border-b border-[#EDEFEF] last:border-0">
                      <td className="whitespace-nowrap px-4 py-2.5 text-[12.5px] text-[#131516]">{r.n}</td>
                      <td className="whitespace-nowrap px-4 py-2.5 text-[12px] text-[#5E6669]">{r.r}</td>
                      <td className={`px-4 py-2.5 text-right text-[12px] text-[#5E6669] ${mono}`}>{r.m}</td>
                      <td className={`px-4 py-2.5 text-right text-[12px] text-[#131516] ${mono}`}>{r.x}</td>
                      <td className="px-4 py-2.5">
                        <span className="flex items-center gap-2.5">
                          <span className="w-16"><Barra pct={pct} cor={cor} /></span>
                          <span className={`w-9 text-right text-[11px] ${mono}`} style={{ color: cor }}>{pct}%</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className={card}>
          <div className={`${head} flex items-baseline justify-between gap-3`}>
            <p className="font-sans text-[13px] font-semibold text-[#131516]">Ocupação e carteira por planta</p>
            <span className={rot}>capacidade extrusão/conversão</span>
          </div>
          <div className="space-y-4 p-4">
            {PLANTAS.map((p) => (
              <div key={p.n}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="text-[12.5px] font-semibold text-[#131516]">
                    {p.n} <span className="font-normal text-[#5E6669]">{p.l}</span>
                  </span>
                  <span className={`text-[12px] text-[#131516] ${mono}`}>{p.p}%</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <Barra pct={p.p} cor={p.p >= 85 ? "#8A6115" : p.p >= 65 ? "#2E7355" : "#5E6669"} />
                  <span className={`w-[70px] flex-shrink-0 text-right text-[11px] text-[#5E6669] ${mono}`}>{p.v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid min-w-0 gap-3 lg:grid-cols-2">
        <div className={card}>
          <div className={`${head} flex items-baseline justify-between gap-3`}>
            <p className="font-sans text-[13px] font-semibold text-[#131516]">Reclamações de qualidade em aberto</p>
            <span className={rot}>6 · SLA médio 4,2 dias</span>
          </div>
          <ul className="divide-y divide-[#EDEFEF]">
            {RQ.map((r) => (
              <li key={r.id} className="flex gap-3 px-4 py-3">
                <span className="mt-1 h-full w-[2px] flex-shrink-0" style={{ background: r.k === "n" ? "#C0453A" : r.k === "a" ? "#8A6115" : "#DCE0E0" }} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2.5">
                    <span className={`text-[11px] text-[#5E6669] ${mono}`}>{r.id}</span>
                    <span className="text-[12.5px] font-semibold text-[#131516]">{r.c}</span>
                  </div>
                  <p className="mt-0.5 text-[12px] leading-snug text-[#5E6669]">{r.d}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className={`text-[10.5px] text-[#5E6669] ${mono}`}>{r.l}</p>
                  <p className={`mt-0.5 text-[11px] ${mono}`} style={{ color: r.k === "n" ? "#C0453A" : "#5E6669" }}>{r.t}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={card}>
          <div className={`${head} flex items-baseline justify-between gap-3`}>
            <p className="font-sans text-[13px] font-semibold text-[#131516]">Queda de volume e clientes inativos</p>
            <span className={rot}>gatilho: −20% em 90 dias</span>
          </div>
          <ul className="divide-y divide-[#EDEFEF]">
            {RISCO.map((r) => (
              <li key={r.c} className="flex items-baseline justify-between gap-4 px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-[12.5px] font-semibold text-[#131516]">{r.c}</p>
                  <p className="mt-0.5 text-[11.5px] text-[#5E6669]">{r.r} · última compra {r.d}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className={`text-[13px] font-semibold text-[#C0453A] ${mono}`}>{r.v}</p>
                  <p className={`mt-0.5 text-[11px] text-[#5E6669] ${mono}`}>{r.f}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ==================== 02 · RELATÓRIO POR ÁUDIO ==================== */

const ONDA = [12, 26, 44, 31, 58, 72, 49, 66, 88, 54, 37, 62, 79, 95, 61, 43, 28, 52, 70, 84, 58, 33, 47, 66, 91, 73, 50, 29, 41, 63, 77, 88, 56, 38, 24, 45, 68, 80, 52, 30];

const RELATORIO = [
  { c: "Cliente", v: "BRF S.A. — Capinzal/SC", s: "CL-00418 · carteira Oeste SC", o: "IA" },
  { c: "Data", v: "11/09/2026 · 09:30", s: "horário do check-in no app", o: "App" },
  { c: "Tipo", v: "Visita presencial", s: "inferido do áudio e da geolocalização", o: "IA" },
  { c: "Contato", v: "Marlene Kuhn", s: "Suprimentos de embalagem", o: "IA" },
  { c: "Assunto", v: "Reposição de FFS 120µ antes do reajuste", s: "34 t fechadas no preço da tabela 2026/S2", o: "IA" },
  { c: "Resultado", v: "Laudo parcial aprovado · produção normal liberada", s: "RQ-2026-0417 segue aberta até o laudo final", o: "IA" },
  { c: "Próxima ação", v: "Enviar laudo completo — 19/09/2026", s: "e cotar termoformado PA/PE 150µ, 12 t/mês a partir de novembro", o: "Digitado" },
];

export function ViewAudio() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className={rot}>Relatório por áudio · WhatsApp</p>
          <p className="mt-2 font-sans text-[19px] font-bold tracking-[-0.02em] text-[#131516]">
            O representante falou. O Elo estruturou.
          </p>
        </div>
        <div className="rounded-[4px] border border-[#DCE0E0] bg-white px-3.5 py-2">
          <span className="text-[12px] text-[#5E6669]">Digitado pelo representante: </span>
          <span className={`text-[13px] font-semibold text-[#131516] ${mono}`}>14 caracteres</span>
        </div>
      </div>

      <div className="grid min-w-0 gap-3 lg:grid-cols-2">
        {/* conversa */}
        <div className={card}>
          <div className={`${head} flex items-baseline justify-between gap-3`}>
            <p className="font-sans text-[13px] font-semibold text-[#131516]">WhatsApp · Marcos Delazeri</p>
            <span className={`text-[11px] text-[#5E6669] ${mono}`}>11/09/2026 · 10:18</span>
          </div>

          <div className="space-y-3 p-4">
            <div className="border border-[#DCE0E0] bg-[#F6F7F7] p-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-[4px] bg-[#D51920]">
                  <Play className="h-3 w-3 fill-white text-white" />
                </span>
                <span className="flex flex-1 items-center gap-[2px] overflow-hidden">
                  {ONDA.map((h, i) => (
                    <span key={i} className="w-[3px] flex-shrink-0 rounded-[1px]"
                      style={{ height: `${Math.max(h * 0.26, 3)}px`, background: i < 17 ? "#D51920" : "#C6CBCB" }} />
                  ))}
                </span>
                <span className={`flex-shrink-0 text-[11px] text-[#5E6669] ${mono}`}>0:47</span>
              </div>
              <p className="mt-3.5 border-t border-[#DCE0E0] pt-3 text-[13px] leading-relaxed text-[#131516]">
                &ldquo;Ó, saindo agora da BRF Capinzal, falei com a Marlene. Eles aceitaram seguir
                com a produção normal com as bobinas do lote de setembro, o laudo parcial deu ok.
                Fechamos a reposição do FFS cento e vinte antes do reajuste, trinta e quatro
                toneladas. E ela pediu cotação do termoformado pra linha nova, uns doze toneladas
                por mês a partir de novembro.&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="rounded-[4px] border border-[#DCE0E0] px-2 py-[3px] font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-[#5E6669]">
                  transcrição automática
                </span>
                <span className={`text-[10.5px] text-[#5E6669] ${mono}`}>10:18</span>
              </div>
            </div>

            <div className="border-l-2 border-[#D51920] bg-[#F6F7F7] p-3.5">
              <p className="flex items-baseline gap-2">
                <span className="font-sans text-[11px] font-bold tracking-[0.06em] text-[#D51920]">ELO</span>
                <span className="text-[11px] text-[#5E6669]">respondeu em 6 s</span>
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#131516]">
                Registrei a visita da BRF Capinzal. Falta uma informação: o laudo do FFS 120µ ficou
                para qual data?
              </p>
              <p className={`mt-2 text-[10.5px] text-[#5E6669] ${mono}`}>10:18</p>
            </div>

            <div className="flex justify-end">
              <div className="rounded-[4px] bg-[#131516] px-3.5 py-2.5">
                <p className="text-[13px] text-white">sexta, dia 19</p>
                <p className={`mt-1 text-[10px] text-white/55 ${mono}`}>10:19 · digitado</p>
              </div>
            </div>

            <div className="border-l-2 border-[#D51920] bg-[#F6F7F7] p-3.5">
              <p className="font-sans text-[11px] font-bold tracking-[0.06em] text-[#D51920]">ELO</p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#131516]">
                Pronto. Registrei na ficha da BRF Capinzal: visita de 11/09/2026, laudo completo
                para 19/09/2026 e cotação de termoformado como próxima ação.
              </p>
              <p className={`mt-2 text-[10.5px] text-[#2E7355] ${mono}`}>10:19 · sincronizado com o CRM</p>
            </div>
          </div>
        </div>

        {/* relatório */}
        <div className={card}>
          <div className={`${head} flex items-baseline justify-between gap-3`}>
            <p className="font-sans text-[13px] font-semibold text-[#131516]">Relatório de visita · VS-2026-3094</p>
            <Pill t="gravado na ficha" c="v" />
          </div>

          <div className="divide-y divide-[#EDEFEF]">
            {RELATORIO.map((r) => (
              <div key={r.c} className="flex items-start gap-4 px-4 py-3">
                <span className={`w-[86px] flex-shrink-0 pt-[2px] ${rot}`}>{r.c}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold leading-snug text-[#131516]">{r.v}</p>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-[#5E6669]">{r.s}</p>
                </div>
                <span
                  className={`flex-shrink-0 rounded-[4px] border px-1.5 py-[2px] font-sans text-[9px] font-semibold uppercase tracking-[0.08em] ${
                    r.o === "IA" ? "border-[#D51920] text-[#D51920]" : "border-[#DCE0E0] text-[#5E6669]"
                  }`}
                >
                  {r.o}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 border-t border-[#EDEFEF] bg-[#F6F7F7] px-4 py-3">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-[4px] bg-[#D51920]">
              <Play className="h-3 w-3 fill-white text-white" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-semibold text-[#131516]">Áudio original anexado</p>
              <p className={`mt-0.5 text-[10.5px] text-[#5E6669] ${mono}`}>audio-vs3094.ogg · 0:47 · 11/09/2026 10:18</p>
            </div>
            <span className={`flex-shrink-0 ${rot}`}>auditoria</span>
          </div>

          <p className="border-t border-[#EDEFEF] px-4 py-3 text-[12px] leading-relaxed text-[#5E6669]">
            Nada foi digitado pelo representante além de <span className={mono}>&ldquo;sexta, dia 19&rdquo;</span>.
            Os demais campos saíram do áudio e do histórico do cliente.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==================== 03 · MINHA CARTEIRA ==================== */

const CARTEIRA = [
  { c: "BRF S.A.", ci: "Capinzal/SC", s: "Risco", k: "n" as const, v: "412", r: "R$ 6,12 mi", d: "−8%", u: "28/08/2026", a: "Fechar FFS antes do reajuste" },
  { c: "Seara Alimentos", ci: "Forquilhinha/SC", s: "Risco", k: "n" as const, v: "96", r: "R$ 1,84 mi", d: "−38%", u: "14/07/2026", a: "Resgatar volume de stretch" },
  { c: "Frigorífico Canção", ci: "Xanxerê/SC", s: "Risco", k: "n" as const, v: "38", r: "R$ 0,64 mi", d: "−61%", u: "28/05/2026", a: "Reativar com valvulado" },
  { c: "Coop. Agroind. Alfa", ci: "Erechim/RS", s: "Risco", k: "n" as const, v: "52", r: "R$ 0,92 mi", d: "−52%", u: "02/06/2026", a: "Visita com técnico interno" },
  { c: "Aurora Coop", ci: "Chapecó/SC", s: "Oportunidade", k: "v" as const, v: "288", r: "R$ 4,38 mi", d: "+14%", u: "05/09/2026", a: "Cotar termoformado 150µ" },
  { c: "Coop. Languiru", ci: "Teutônia/RS", s: "Oportunidade", k: "v" as const, v: "164", r: "R$ 2,51 mi", d: "+22%", u: "03/09/2026", a: "Ampliar mix de sacola" },
  { c: "Copérdia", ci: "Concórdia/SC", s: "Atenção", k: "a" as const, v: "121", r: "R$ 1,76 mi", d: "−4%", u: "01/09/2026", a: "Tratar RQ-2026-0431" },
  { c: "Pamplona Alimentos", ci: "Rio do Sul/SC", s: "Em dia", k: "c" as const, v: "88", r: "R$ 1,34 mi", d: "+2%", u: "08/09/2026", a: "Renovar contrato anual" },
];

export function ViewCarteira() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className={rot}>Minha carteira</p>
          <p className="mt-2 font-sans text-[19px] font-bold tracking-[-0.02em] text-[#131516]">
            Priorizada por risco e oportunidade
          </p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-[4px] border border-[#C0453A]/50 px-3 py-1.5 text-[12px] text-[#C0453A]">Risco 4</span>
          <span className="rounded-[4px] border border-[#DCE0E0] px-3 py-1.5 text-[12px] text-[#5E6669]">Oportunidade 3</span>
          <span className="rounded-[4px] border border-[#DCE0E0] px-3 py-1.5 text-[12px] text-[#5E6669]">Em dia 27</span>
        </div>
      </div>

      <div className={`${card} overflow-x-auto`}>
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#DCE0E0] bg-[#F6F7F7]">
              {["Cliente", "Cidade", "Sinal", "Vol. 12m (t)", "Receita 12m", "Var.", "Últ. contato", "Próxima ação"].map((h) => (
                <th key={h} className={`whitespace-nowrap px-4 py-3 ${rot}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CARTEIRA.map((l) => (
              <tr key={l.c} className="border-b border-[#EDEFEF] last:border-0 hover:bg-[#F6F7F7]">
                <td className="whitespace-nowrap px-4 py-3 text-[13px] font-semibold text-[#131516]">{l.c}</td>
                <td className="whitespace-nowrap px-4 py-3 text-[12px] text-[#5E6669]">{l.ci}</td>
                <td className="px-4 py-3"><Pill t={l.s} c={l.k} /></td>
                <td className={`px-4 py-3 text-right text-[12px] text-[#131516] ${mono}`}>{l.v}</td>
                <td className={`whitespace-nowrap px-4 py-3 text-right text-[12px] text-[#131516] ${mono}`}>{l.r}</td>
                <td className={`px-4 py-3 text-right text-[12px] ${mono}`} style={{ color: l.d.startsWith("−") ? "#C0453A" : "#2E7355" }}>{l.d}</td>
                <td className={`whitespace-nowrap px-4 py-3 text-[12px] text-[#5E6669] ${mono}`}>{l.u}</td>
                <td className="whitespace-nowrap px-4 py-3 text-[12px] text-[#131516]">{l.a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11.5px] text-[#5E6669]">Clique em uma linha para abrir a ficha 360.</p>
    </div>
  );
}

/* ==================== 04 · FICHA 360 ==================== */

const VENDAS = [
  { m: "mar", t: 38.2, v: "R$ 566 mil" }, { m: "abr", t: 41.6, v: "R$ 618 mil" },
  { m: "mai", t: 35.4, v: "R$ 526 mil" }, { m: "jun", t: 33.1, v: "R$ 491 mil" },
  { m: "jul", t: 29.8, v: "R$ 443 mil" }, { m: "ago", t: 26.4, v: "R$ 392 mil" },
];
const MIX = [
  { p: "Filme FFS 120µ", q: 62, v: "R$ 14,62/kg", t: "256 t" },
  { p: "Termoformado PA/PE", q: 16, v: "R$ 22,40/kg", t: "66 t" },
  { p: "Stretch manual 20µ", q: 11, v: "R$ 9,74/kg", t: "45 t" },
  { p: "Sacola vulcão", q: 7, v: "R$ 16,70/kg", t: "29 t" },
  { p: "Encolhível 50µ", q: 4, v: "R$ 11,42/kg", t: "16 t" },
];
const HIST = [
  { d: "28/08/2026", t: "Visita presencial · Marcos Delazeri", x: "Tratativa da RQ-2026-0417 e sinalização de reajuste de resina para outubro." },
  { d: "14/08/2026", t: "Ligação · Ana Pilatti (interno)", x: "Ajuste de programação: antecipação de 8 t de FFS para a semana 34." },
  { d: "30/07/2026", t: "Visita técnica conjunta", x: "Teste de selagem a 148 °C na linha 3. Ajuste de parâmetro aprovado pelo cliente." },
  { d: "11/07/2026", t: "E-mail · proposta", x: "Proposta 2026/0712 para termoformado PA/PE 150µ, sem retorno formal." },
];
const DEVOL = [
  { d: "22/08/2026", l: "VP-FFS-260812-03", m: "Solda fria", k: "1.840", v: "R$ 27.324,80" },
  { d: "19/06/2026", l: "VP-STR-260610-08", m: "Espessura fora de faixa", k: "620", v: "R$ 6.125,60" },
  { d: "04/03/2026", l: "VP-FFS-260226-02", m: "Bobina com emenda", k: "980", v: "R$ 14.318,40" },
];
const maxV = 41.6;

export function ViewFicha() {
  return (
    <div className="space-y-3">
      <div className={`${card} p-4 md:p-5`}>
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`text-[11px] text-[#5E6669] ${mono}`}>CL-00418</span>
              <Pill t="risco de queda" c="n" />
            </div>
            <p className="mt-2 font-sans text-[24px] font-bold tracking-[-0.02em] text-[#131516]">BRF S.A.</p>
            <p className="mt-1 text-[12.5px] text-[#5E6669]">Unidade Capinzal/SC · CNPJ 01.838.723/0064-12</p>
            <p className="mt-0.5 text-[12.5px] text-[#5E6669]">Comprador: Marlene Kuhn · Suprimentos de embalagem · (49) 3555-8120</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { r: "Receita 12 meses", v: "R$ 6,12 mi", s: "R$ 14,86/kg médio", c: "#131516" },
              { r: "Volume 12 meses", v: "412 t", s: "34 t/mês médio", c: "#131516" },
              { r: "Variação 6m", v: "−8%", s: "queda em stretch", c: "#C0453A" },
              { r: "Devoluções", v: "0,74%", s: "4 ocorrências", c: "#8A6115" },
              { r: "Inadimplência", v: "0,0%", s: "sem título em atraso", c: "#2E7355" },
            ].map((k) => (
              <div key={k.r}>
                <p className={rot}>{k.r}</p>
                <p className={`mt-1.5 text-[17px] font-semibold ${mono}`} style={{ color: k.c }}>{k.v}</p>
                <p className="mt-0.5 text-[11px] text-[#5E6669]">{k.s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid min-w-0 gap-3 lg:grid-cols-3">
        <div className={card}>
          <div className={`${head} flex items-baseline justify-between gap-2`}>
            <p className="font-sans text-[13px] font-semibold text-[#131516]">Venda dos últimos 6 meses</p>
            <span className={rot}>meta 96 t</span>
          </div>
          <div className="p-4">
            <div className="flex h-[120px] items-end gap-2">
              {VENDAS.map((v, i) => (
                <div key={v.m} className="flex flex-1 flex-col items-center justify-end">
                  <span className={`mb-1.5 text-[10px] text-[#5E6669] ${mono}`}>{v.t}</span>
                  <div className="w-full rounded-t-[2px]"
                    style={{ height: `${(v.t / maxV) * 90}px`, background: i === VENDAS.length - 1 ? "#E08A8A" : "#D51920" }} />
                  <span className="mt-2 text-[10px] uppercase text-[#5E6669]">{v.m}</span>
                  <span className={`text-[9.5px] text-[#5E6669] ${mono}`}>{v.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={card}>
          <div className={head}><p className="font-sans text-[13px] font-semibold text-[#131516]">Próxima ação sugerida</p></div>
          <div className="p-4">
            <div className="border-l-2 border-[#D51920] pl-3.5">
              <p className="font-sans text-[14px] font-semibold leading-snug text-[#131516]">
                Fechar reposição de FFS 120µ antes do dia 18
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-[#5E6669]">
                Consumo médio de 34 t/mês e último embarque em 22/08/2026. Estoque do cliente cobre
                ~11 dias. Reajuste de resina aprovado para 01/10/2026: fechar volume no preço atual
                protege R$ 0,42/kg.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#EDEFEF] pt-3.5">
              {[
                { r: "Último contato", v: "28/08/2026", s: "Visita técnica" },
                { r: "Visita agendada", v: "11/09 · 09:30", s: "Com técnico interno" },
                { r: "Limite de crédito", v: "R$ 2,40 mi", s: "Utilizado 61%" },
                { r: "Tabela vigente", v: "2026/S2", s: "válida até 30/09" },
              ].map((x) => (
                <div key={x.r}>
                  <p className={rot}>{x.r}</p>
                  <p className={`mt-1 text-[12.5px] text-[#131516] ${mono}`}>{x.v}</p>
                  <p className="text-[10.5px] text-[#5E6669]">{x.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={card}>
          <div className={`${head} flex items-baseline justify-between gap-2`}>
            <p className="font-sans text-[13px] font-semibold text-[#131516]">Reclamação em aberto</p>
            <Pill t="em análise laboratorial" c="a" />
          </div>
          <div className="p-4">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className={`text-[11px] text-[#5E6669] ${mono}`}>RQ-2026-0417</span>
              <span className="text-[13px] font-semibold text-[#131516]">Solda fria em bobina de FFS 120µ</span>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-[#5E6669]">
              Linha 3 de envase parou 2 vezes no turno B. Cliente reteve 4 bobinas do lote. Amostra
              coletada em 03/09/2026, laudo previsto para 12/09/2026.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#EDEFEF] pt-3.5">
              {[["Lote", "VP-FFS-260812-03"], ["Abertura", "02/09/2026"], ["Massa", "1.840 kg"]].map(([r, v]) => (
                <div key={r}>
                  <p className={rot}>{r}</p>
                  <p className={`mt-1 text-[11.5px] text-[#131516] ${mono}`}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid min-w-0 gap-3 lg:grid-cols-3">
        <div className={card}>
          <div className={`${head} flex items-baseline justify-between gap-2`}>
            <p className="font-sans text-[13px] font-semibold text-[#131516]">Devoluções · 12 meses</p>
            <span className={rot}>0,74% do faturado</span>
          </div>
          <ul className="divide-y divide-[#EDEFEF]">
            {DEVOL.map((d) => (
              <li key={d.l} className="flex items-baseline justify-between gap-3 px-4 py-2.5">
                <div className="min-w-0">
                  <p className="text-[12px] text-[#131516]">{d.m}</p>
                  <p className={`text-[10.5px] text-[#5E6669] ${mono}`}>{d.d} · {d.l}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className={`text-[11.5px] text-[#131516] ${mono}`}>{d.v}</p>
                  <p className={`text-[10.5px] text-[#5E6669] ${mono}`}>{d.k} kg</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={card}>
          <div className={`${head} flex items-baseline justify-between gap-2`}>
            <p className="font-sans text-[13px] font-semibold text-[#131516]">Mix de produtos e preço</p>
            <span className={rot}>tabela 2026/S2</span>
          </div>
          <div className="space-y-3 p-4">
            {MIX.map((m) => (
              <div key={m.p}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[12px] text-[#131516]">{m.p}</span>
                  <span className={`flex-shrink-0 text-[11.5px] text-[#131516] ${mono}`}>{m.v}</span>
                </div>
                <div className="mt-1.5 flex items-center gap-2.5">
                  <Barra pct={m.q} cor="#D51920" />
                  <span className={`w-14 flex-shrink-0 text-right text-[10.5px] text-[#5E6669] ${mono}`}>{m.t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={card}>
          <div className={head}><p className="font-sans text-[13px] font-semibold text-[#131516]">Histórico de relacionamento</p></div>
          <ul className="divide-y divide-[#EDEFEF]">
            {HIST.map((h) => (
              <li key={h.d} className="px-4 py-3">
                <div className="flex flex-wrap items-baseline gap-x-2.5">
                  <span className={`text-[10.5px] text-[#5E6669] ${mono}`}>{h.d}</span>
                  <span className="text-[12px] font-semibold text-[#131516]">{h.t}</span>
                </div>
                <p className="mt-1 text-[11.5px] leading-snug text-[#5E6669]">{h.x}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ==================== 05 · ROTEIRO E VISITA ==================== */

const ROTEIRO = [
  { h: "08:00", c: "Copérdia · Concórdia/SC", s: "Concluída", k: "v" as const, o: "Fechamento de valvulado 25 kg e retorno da RQ-2026-0431", km: "0 km" },
  { h: "09:30", c: "BRF S.A. · Capinzal/SC", s: "Em andamento", k: "n" as const, o: "Reposição de FFS 120µ antes do reajuste + laudo parcial", km: "42 km" },
  { h: "11:30", c: "Aurora Coop · Chapecó/SC", s: "Prevista", k: "c" as const, o: "Cotação de termoformado PA/PE 150µ para nova linha", km: "68 km" },
  { h: "14:00", c: "Frigorífico Canção · Xanxerê/SC", s: "Prevista", k: "a" as const, o: "Reativação: cliente sem compra desde 28/05/2026", km: "54 km" },
  { h: "16:15", c: "Coop. Alfa · Erechim/RS", s: "Prevista", k: "c" as const, o: "Visita conjunta com técnico interno sobre stretch", km: "50 km" },
];

export function ViewRoteiro() {
  return (
    <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
      <div className={card}>
        <div className={`${head} flex flex-wrap items-baseline justify-between gap-3`}>
          <p className="font-sans text-[13px] font-semibold text-[#131516]">Roteiro de hoje · 11/09/2026</p>
          <span className={`text-[11px] text-[#5E6669] ${mono}`}>5 visitas · 1 concluída · 214 km</span>
        </div>
        <ul className="divide-y divide-[#EDEFEF]">
          {ROTEIRO.map((r) => (
            <li key={r.h} className="flex gap-4 px-4 py-3.5">
              <span className={`w-11 flex-shrink-0 pt-[2px] text-[12px] font-semibold text-[#D51920] ${mono}`}>{r.h}</span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[13px] font-semibold text-[#131516]">{r.c}</span>
                  <Pill t={r.s} c={r.k} />
                </div>
                <p className="mt-1 text-[11.5px] leading-snug text-[#5E6669]">{r.o}</p>
              </div>
              <span className={`flex-shrink-0 pt-[2px] text-[11px] text-[#5E6669] ${mono}`}>{r.km}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={card}>
        <div className={`${head} flex flex-wrap items-baseline justify-between gap-3`}>
          <p className="font-sans text-[13px] font-semibold text-[#131516]">Registro de visita · BRF Capinzal</p>
          <span className={`text-[11px] text-[#2E7355] ${mono}`}>rascunho salvo 09:52</span>
        </div>
        <div className="space-y-4 p-4">
          <div>
            <p className={rot}>Tipo de contato</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Visita presencial", "Telefone", "Videochamada", "Visita técnica conjunta"].map((t, i) => (
                <span key={t} className={`rounded-[4px] border px-2.5 py-1.5 text-[11.5px] ${
                  i === 0 ? "border-[#D51920] bg-[#D51920]/[0.06] font-semibold text-[#D51920]" : "border-[#DCE0E0] text-[#5E6669]"
                }`}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className={rot}>Assunto tratado</p>
            <div className="mt-2 border border-[#DCE0E0] bg-[#F6F7F7] p-3">
              <p className="text-[12.5px] leading-relaxed text-[#131516]">
                Apresentado laudo parcial da RQ-2026-0417. Comprador aceita seguir com produção
                normal mediante bobinas do lote 260902. Pediu cotação de termoformado PA/PE 150µ
                para a nova linha de cortes especiais, previsão de 12 t/mês a partir de novembro.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[["Próxima ação", "Enviar cotação termoformado"], ["Prazo", "15/09/2026"], ["Envolver planta", "Videira · PCP"]].map(([r, v]) => (
              <div key={r}>
                <p className={rot}>{r}</p>
                <div className="mt-1.5 border border-[#DCE0E0] bg-white px-2.5 py-2 text-[12px] text-[#131516]">{v}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-[#EDEFEF] pt-3.5">
            <button type="button" className="flex items-center gap-2 rounded-[4px] bg-[#D51920] px-4 py-2 font-sans text-[12px] font-semibold text-white">
              <Check className="h-3 w-3" /> Concluir visita
            </button>
            <button type="button" className="flex items-center gap-2 rounded-[4px] border border-[#DCE0E0] px-4 py-2 text-[12px] text-[#5E6669]">
              <MapPin className="h-3 w-3" /> Check-in
            </button>
            <button type="button" className="rounded-[4px] border border-[#DCE0E0] px-4 py-2 text-[12px] text-[#5E6669]">
              Salvar e continuar depois
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 06 · NOVO PEDIDO ==================== */

const ITENS = [
  { p: "Filme FFS 120µ", e: "PE coex · 480 mm · trat. corona", f: "480 mm / 250 kg", q: "34.000", pr: "14,62", v: "no piso", k: "v" as const, t: "R$ 497.080,00", d: "02/10/2026" },
  { p: "Stretch manual 20µ", e: "Pré-estirado · 500 mm", f: "500 mm / 18 kg", q: "12.400", pr: "9,74", v: "−R$ 0,14", k: "n" as const, t: "R$ 120.776,00", d: "02/10/2026" },
  { p: "Termoformado PA/PE 150µ", e: "Barreira · 320 mm", f: "320 mm / 120 kg", q: "11.200", pr: "22,40", v: "+R$ 0,90", k: "v" as const, t: "R$ 250.880,00", d: "08/10/2026" },
  { p: "Sacola vulcão impressa", e: "4 cores · 380×520 mm", f: "Caixa / 20 kg", q: "7.200", pr: "13,49", v: "no piso", k: "v" as const, t: "R$ 97.128,00", d: "08/10/2026" },
];

export function ViewPedido() {
  return (
    <div className="space-y-3">
      <div className={`${card} flex flex-wrap items-center justify-between gap-4 p-4`}>
        <div>
          <p className={rot}>Novo pedido · rascunho</p>
          <p className="mt-1.5 font-sans text-[17px] font-bold text-[#131516]">BRF S.A. — Capinzal/SC</p>
          <p className="mt-0.5 text-[12px] text-[#5E6669]">Tabela 2026/S2 · limite disponível R$ 936 mil · crédito aprovado</p>
        </div>
        <div className="text-left sm:text-right">
          <p className={rot}>Total do pedido</p>
          <p className={`mt-1 font-sans text-[24px] font-bold text-[#131516] ${mono}`}>R$ 965.864,00</p>
          <p className={`mt-0.5 text-[11px] text-[#5E6669] ${mono}`}>64,8 t · margem média 22,1%</p>
        </div>
      </div>

      <div className={`${card} overflow-x-auto`}>
        <table className="w-full min-w-[800px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#DCE0E0] bg-[#F6F7F7]">
              {["Produto", "Formato", "Qtd. (kg)", "R$/kg", "vs. piso", "Total", "Entrega"].map((h) => (
                <th key={h} className={`whitespace-nowrap px-4 py-3 ${rot}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ITENS.map((i) => (
              <tr key={i.p} className="border-b border-[#EDEFEF] last:border-0">
                <td className="px-4 py-3">
                  <p className="whitespace-nowrap text-[12.5px] font-semibold text-[#131516]">{i.p}</p>
                  <p className="mt-0.5 whitespace-nowrap text-[11px] text-[#5E6669]">{i.e}</p>
                </td>
                <td className={`whitespace-nowrap px-4 py-3 text-[11.5px] text-[#5E6669] ${mono}`}>{i.f}</td>
                <td className={`whitespace-nowrap px-4 py-3 text-right text-[12px] text-[#131516] ${mono}`}>{i.q}</td>
                <td className={`whitespace-nowrap px-4 py-3 text-right text-[12px] text-[#131516] ${mono}`}>{i.pr}</td>
                <td className="whitespace-nowrap px-4 py-3 text-right"><Pill t={i.v} c={i.k} /></td>
                <td className={`whitespace-nowrap px-4 py-3 text-right text-[12px] font-semibold text-[#131516] ${mono}`}>{i.t}</td>
                <td className={`whitespace-nowrap px-4 py-3 text-right text-[11.5px] text-[#5E6669] ${mono}`}>{i.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="border border-[#8A6115]/40 bg-[#8A6115]/[0.06] p-4">
          <p className="font-sans text-[12.5px] font-semibold text-[#8A6115]">Stretch manual 20µ está R$ 0,14 abaixo do piso</p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-[#5E6669]">
            O pedido segue para aprovação da gerência comercial antes de entrar no SAP. O
            representante não altera preço — apenas solicita.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="flex items-center gap-2 rounded-[4px] bg-[#D51920] px-5 py-2.5 font-sans text-[12.5px] font-semibold text-white">
            <Plus className="h-3.5 w-3.5" /> Enviar para aprovação
          </button>
          <button type="button" className="rounded-[4px] border border-[#DCE0E0] px-5 py-2.5 text-[12.5px] text-[#5E6669]">
            Salvar rascunho
          </button>
        </div>
      </div>
    </div>
  );
}

/* ==================== 07 · APP DO REPRESENTANTE ==================== */

export function ViewApp() {
  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
      <div className="max-w-md">
        <p className={rot}>Elo Campo · aplicativo</p>
        <p className="mt-3 font-sans text-[24px] font-bold leading-[1.14] tracking-[-0.02em] text-[#131516]">
          O mesmo dado, em pé na fábrica do cliente
        </p>
        <p className="mt-4 text-[13.5px] leading-relaxed text-[#5E6669]">
          Modo offline com sincronização ao recuperar sinal, alvos de toque de 44 px e a mesma
          tipografia monoespaçada para lote, data e valor. O representante que não quiser instalar
          nada continua mandando áudio pelo WhatsApp — o app é para quem quiser mais.
        </p>
        <ul className="mt-6 space-y-2.5">
          {[
            "Check-in declaratório na visita, não rastreamento contínuo",
            "Ficha 360 do cliente disponível sem sinal",
            "Pedido iniciado no campo, aprovado internamente",
            "O áudio entra pelo app ou pelo WhatsApp, dá no mesmo",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-[#5E6669]">
              <Check className="mt-[3px] h-3 w-3 flex-shrink-0 text-[#2E7355]" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto w-full max-w-[300px] rounded-[18px] border-[6px] border-[#DCE0E0] bg-white">
        <div className="flex items-center justify-between px-4 pb-1 pt-2.5">
          <span className={`text-[10px] text-[#5E6669] ${mono}`}>09:41</span>
          <span className={`text-[10px] text-[#5E6669] ${mono}`}>4G · 68%</span>
        </div>
        <div className="flex items-center justify-between border-y border-[#EDEFEF] bg-[#F6F7F7] px-4 py-2.5">
          <span className="font-sans text-[13px] font-bold text-[#131516]">Hoje</span>
          <span className={`text-[9.5px] text-[#2E7355] ${mono}`}>SINC. 09:38</span>
        </div>

        <div className="space-y-2.5 p-3">
          <div className="border border-[#DCE0E0] bg-[#F6F7F7] p-3">
            <div className="flex items-baseline justify-between">
              <span className={rot}>Roteiro de hoje</span>
              <span className={`text-[10px] text-[#5E6669] ${mono}`}>11/09/2026</span>
            </div>
            <div className="mt-2.5 flex gap-5">
              {[["5", "visitas"], ["1", "concluída"], ["214", "km previstos"]].map(([v, l]) => (
                <div key={l}>
                  <p className={`text-[19px] font-bold leading-none text-[#131516] ${mono}`}>{v}</p>
                  <p className="mt-1 text-[9.5px] text-[#5E6669]">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {ROTEIRO.slice(0, 3).map((r) => (
            <div key={r.h} className="border border-[#DCE0E0] p-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-[11px] font-semibold text-[#131516] ${mono}`}>{r.h}</span>
                <Pill t={r.s} c={r.k} />
                <span className={`ml-auto text-[10px] text-[#5E6669] ${mono}`}>{r.km}</span>
              </div>
              <p className="mt-2 text-[12.5px] font-semibold leading-snug text-[#131516]">{r.c}</p>
              <p className="mt-1 text-[11px] leading-snug text-[#5E6669]">{r.o}</p>
              <div className="mt-2.5 grid grid-cols-2 gap-2">
                <button type="button" className="rounded-[4px] bg-[#D51920] py-2 font-sans text-[11.5px] font-semibold text-white">
                  Abrir ficha
                </button>
                <button type="button" className="rounded-[4px] border border-[#DCE0E0] py-2 text-[11.5px] text-[#5E6669]">
                  Check-in
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex border-t border-[#EDEFEF] bg-[#F6F7F7]">
          {["Hoje", "Carteira", "Ficha 360", "Pedido"].map((t, i) => (
            <span key={t} className={`flex-1 py-2.5 text-center text-[10.5px] ${i === 0 ? "font-semibold text-[#131516]" : "text-[#5E6669]"}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
