"use client";

import {
  AlertTriangle,
  Bell,
  Bot,
  Check,
  Instagram,
  MessageCircle,
  Facebook,
  Sparkles,
  QrCode,
  TrendingUp,
  Gift,
  Send,
  Plus,
  Trash2,
  FileSpreadsheet,
  ArrowRight,
  Clock,
  Wine,
  Download,
  History,
  CalendarDays,
  X,
} from "lucide-react";

/* ================================================================
   Views do protótipo. Cada uma é uma ilustração fiel do que a tela
   vai fazer — dados reais da safra 2026 da Santa Augusta.
   ================================================================ */

const card = "border border-[#CCCCCC]/10 bg-[#151413]";
const label = "text-[9px] uppercase tracking-[0.18em] text-[#CCCCCC]/40";

/* ---------------------------- DASHBOARD ------------------------ */

export function ViewDashboard() {
  const kpis = [
    { v: "18", l: "Lotes em guarda", t: "text-[#CA8B35]" },
    { v: "3", l: "Viram de faixa em 60 dias", t: "text-[#D4574D]" },
    { v: "R$ 187k", l: "A faturar por etapa", t: "text-[#6D9B83]" },
    { v: "12", l: "Conversas na fila", t: "text-white" },
  ];
  const alertas = [
    { c: "text-[#D4574D]", t: "CAT-2025-003 passou de 12 meses em guarda", s: "há 2 dias" },
    { c: "text-[#CA8B35]", t: "SUZ-2025-007 vira de faixa em 58 dias", s: "hoje" },
    { c: "text-[#CA8B35]", t: "9 etapas concluídas sem nota emitida", s: "hoje" },
    { c: "text-[#6D9B83]", t: "Tanque T-04 liberado para nova carga", s: "ontem" },
  ];
  const meses = [
    { m: "Jan", v: 22 },
    { m: "Fev", v: 68 },
    { m: "Mar", v: 100 },
    { m: "Abr", v: 54 },
    { m: "Mai", v: 18 },
    { m: "Jun", v: 8 },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.l} className={`${card} p-4`}>
            <p className={`font-playfair text-2xl font-medium md:text-3xl ${k.t}`}>
              {k.v}
            </p>
            <p className={`mt-2 ${label}`}>{k.l}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr]">
        <div className={`${card} p-5`}>
          <p className={label}>Uva processada por mês · safra 2026</p>
          <div className="mt-6 flex h-32 items-end gap-2">
            {meses.map((x) => (
              <div key={x.m} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full bg-[#CA8B35]"
                    style={{ height: `${x.v}%` }}
                  />
                </div>
                <span className="text-[9px] text-[#CCCCCC]/35">{x.m}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 border-t border-[#CCCCCC]/10 pt-3 text-[11px] text-[#CCCCCC]/45">
            277.429 kg recebidos · 194.748 L produzidos · rendimento médio 70,2%
          </p>
        </div>

        <div className={`${card} p-5`}>
          <div className="flex items-center gap-2">
            <Bell className="h-3.5 w-3.5 text-[#CA8B35]" />
            <p className={label}>Alertas</p>
          </div>
          <ul className="mt-4 space-y-3">
            {alertas.map((a, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rotate-45 ${a.c.replace("text-", "bg-")}`} />
                <span className="min-w-0">
                  <span className="block text-[12px] leading-snug text-[#CCCCCC]/80">
                    {a.t}
                  </span>
                  <span className="text-[10px] text-[#CCCCCC]/35">{a.s}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ SAFRA -------------------------- */

const LOTES_SAFRA = [
  { c: "SUZ-2026-014", p: "SUZIN", u: "Merlot", kg: "5.971", l: "4.060", r: "68%", e: 2, st: "Vinificando" },
  { c: "SDS-2026-011", p: "SERRA DO SOL", u: "Sangiovese", kg: "3.938", l: "2.756", r: "70%", e: 3, st: "Engarrafado" },
  { c: "CAT-2026-008", p: "CATA", u: "Chardonnay", kg: "6.000", l: "4.080", r: "68%", e: 2, st: "Aguardando envase" },
  { c: "MAG-2026-005", p: "MONTE AGUDO", u: "Cabernet Sauvignon", kg: "1.000", l: "680", r: "68%", e: 1, st: "Fermentando" },
] as const;

export function ViewSafra() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {["Todos os produtores", "Safra 2026", "Todas as etapas"].map((f) => (
          <span
            key={f}
            className="border border-[#CCCCCC]/12 px-3 py-1.5 text-[10px] text-[#CCCCCC]/55"
          >
            {f}
          </span>
        ))}
        <span className="ml-auto text-[10px] text-[#CCCCCC]/35">74 lotes</span>
      </div>

      <div className={`${card} overflow-x-auto`}>
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#CCCCCC]/10">
              {["Lote", "Produtor · varietal", "Entrada", "Produzido", "Rend.", "Etapas"].map((h) => (
                <th key={h} className={`px-4 py-3 ${label}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LOTES_SAFRA.map((l) => (
              <tr key={l.c} className="border-b border-[#CCCCCC]/[0.06] last:border-0">
                <td className="px-4 py-3 font-mono text-[11px] text-[#CCCCCC]/50">
                  {l.c}
                </td>
                <td className="px-4 py-3">
                  <span className="block text-[12px] font-semibold text-white">{l.p}</span>
                  <span className="text-[11px] text-[#CCCCCC]/45">{l.u}</span>
                </td>
                <td className="px-4 py-3 text-[12px] text-[#CCCCCC]/70">{l.kg} kg</td>
                <td className="px-4 py-3 text-[12px] text-[#CCCCCC]/70">{l.l} L</td>
                <td className="px-4 py-3">
                  <span className="text-[12px] font-semibold text-[#6D9B83]">{l.r}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1">
                    {[1, 2, 3].map((n) => (
                      <span
                        key={n}
                        className={`h-1.5 w-6 ${n <= l.e ? "bg-[#CA8B35]" : "bg-[#CCCCCC]/12"}`}
                      />
                    ))}
                  </span>
                  <span className="mt-1.5 block text-[10px] text-[#CCCCCC]/40">{l.st}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ------------------------- ATENDIMENTO ------------------------- */

interface Conversa {
  n: string;
  canal: "wa" | "ig" | "fb";
  m: string;
  t: string;
  ativa?: boolean;
  badge?: number;
}

const CONVERSAS: readonly Conversa[] = [
  { n: "Marina Fischer", canal: "wa", m: "Vocês entregam em Florianópolis?", t: "2 min", ativa: true, badge: 2 },
  { n: "@carlos.vinhos", canal: "ig", m: "Qual a diferença do Fenice pro Tapera?", t: "18 min", badge: 1 },
  { n: "Restaurante Dom", canal: "wa", m: "Quero fechar pedido de 60 garrafas", t: "1 h" },
  { n: "Comentário no post", canal: "fb", m: "Tem visitação no sábado?", t: "2 h" },
];

const CANAL_ICON = { wa: MessageCircle, ig: Instagram, fb: Facebook } as const;
const CANAL_COR = { wa: "text-[#6D9B83]", ig: "text-[#CA8B35]", fb: "text-[#7C9BC8]" } as const;

export function ViewAtendimento() {
  return (
    <div className="grid gap-3 lg:grid-cols-[260px_1fr]">
      {/* Fila */}
      <div className={`${card} flex flex-col`}>
        <div className="flex items-center justify-between border-b border-[#CCCCCC]/10 px-4 py-3">
          <p className={label}>Fila · 12</p>
          <span className="bg-[#CA8B35] px-2 py-0.5 text-[9px] font-bold text-[#0B0B0B]">
            3 novas
          </span>
        </div>
        <ul className="divide-y divide-[#CCCCCC]/[0.06]">
          {CONVERSAS.map((c) => {
            const Icon = CANAL_ICON[c.canal];
            return (
              <li
                key={c.n}
                className={`flex gap-3 px-4 py-3 ${c.ativa ? "bg-[#CA8B35]/[0.07] border-l-2 border-[#CA8B35]" : ""}`}
              >
                <Icon className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${CANAL_COR[c.canal]}`} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="truncate text-[12px] font-semibold text-white">{c.n}</span>
                    <span className="flex-shrink-0 text-[9px] text-[#CCCCCC]/35">{c.t}</span>
                  </div>
                  <p className="mt-1 truncate text-[11px] text-[#CCCCCC]/50">{c.m}</p>
                </div>
                {c.badge && (
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#CA8B35] text-[9px] font-bold text-[#0B0B0B]">
                    {c.badge}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Conversa */}
      <div className={`${card} flex flex-col`}>
        <div className="flex items-center justify-between border-b border-[#CCCCCC]/10 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <MessageCircle className="h-3.5 w-3.5 text-[#6D9B83]" />
            <div>
              <p className="text-[12px] font-semibold text-white">Marina Fischer</p>
              <p className="text-[10px] text-[#CCCCCC]/40">
                Cliente desde 2024 · 7 pedidos · ticket médio R$ 412
              </p>
            </div>
          </div>
          <span className="hidden border border-[#CCCCCC]/15 px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#CCCCCC]/50 sm:block">
            Transferir
          </span>
        </div>

        <div className="flex-1 space-y-3 p-4">
          <div className="max-w-[75%] bg-[#1F1D1A] px-3.5 py-2.5">
            <p className="text-[12px] leading-relaxed text-[#CCCCCC]/80">
              Vocês entregam em Florianópolis?
            </p>
          </div>
          <div className="ml-auto max-w-[78%] bg-[#CA8B35]/15 px-3.5 py-2.5">
            <p className="text-[12px] leading-relaxed text-white">
              Entregamos sim, Marina! Frete grátis acima de 6 garrafas. Quer que
              eu monte um kit com os rótulos que você já levou?
            </p>
          </div>
        </div>

        <div className="border-t border-[#CA8B35]/25 bg-[#CA8B35]/[0.06] p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-[#CA8B35]" />
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#CA8B35]">
              DaIA sugeriu esta resposta
            </p>
          </div>
          <p className="mt-2.5 text-[11px] leading-relaxed text-[#CCCCCC]/60">
            Baseado no histórico da Marina: comprou Fenice Pinot Noir duas vezes
            e Tapera uma. Sugestão de kit com margem de R$ 186.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 bg-[#CA8B35] px-3 py-1.5 text-[10px] font-semibold text-[#0B0B0B]">
              <Check className="h-3 w-3" /> Enviar
            </span>
            <span className="border border-[#CCCCCC]/20 px-3 py-1.5 text-[10px] text-[#CCCCCC]/60">
              Editar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ FUNIL -------------------------- */

const COLUNAS = [
  {
    t: "Novo lead",
    cor: "border-[#CCCCCC]/25",
    cards: [
      { n: "Marina Fischer", o: "DaIA · site", v: "—" },
      { n: "@carlos.vinhos", o: "Instagram", v: "—" },
    ],
  },
  {
    t: "Em conversa",
    cor: "border-[#7C9BC8]/40",
    cards: [{ n: "Restaurante Dom", o: "WhatsApp", v: "R$ 3.400" }],
  },
  {
    t: "Proposta enviada",
    cor: "border-[#CA8B35]/50",
    cards: [
      { n: "Empório Sul", o: "Indicação", v: "R$ 8.900" },
      { n: "Hotel Serra", o: "Wine Garden", v: "R$ 2.100" },
    ],
  },
  {
    t: "Fechado",
    cor: "border-[#4F7A63]/50",
    cards: [{ n: "Adega Videira", o: "Campanha", v: "R$ 5.600" }],
  },
] as const;

export function ViewFunil() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="grid min-w-[620px] grid-cols-4 gap-3">
        {COLUNAS.map((col) => (
          <div key={col.t} className="flex flex-col">
            <div className={`border-t-2 ${col.cor} bg-[#151413] px-3 py-2.5`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#CCCCCC]/70">
                  {col.t}
                </span>
                <span className="text-[10px] text-[#CCCCCC]/35">{col.cards.length}</span>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              {col.cards.map((c) => (
                <div key={c.n} className={`${card} p-3`}>
                  <p className="text-[12px] font-semibold text-white">{c.n}</p>
                  <p className="mt-1 text-[10px] text-[#CCCCCC]/40">{c.o}</p>
                  {c.v !== "—" && (
                    <p className="mt-2 font-playfair text-sm text-[#CA8B35]">{c.v}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- CAMPANHAS ------------------------- */

export function ViewCampanhas() {
  const lista = [
    { n: "Marina Fischer", d: "12/09", u: "Fenice Pinot Noir" },
    { n: "Roberto Klein", d: "14/09", u: "Tapera Blend" },
    { n: "Ana Beatriz", d: "19/09", u: "iMorTali" },
  ];
  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_300px]">
      <div className={`${card} p-5`}>
        <div className="flex items-center gap-2">
          <Gift className="h-3.5 w-3.5 text-[#CA8B35]" />
          <p className={label}>Aniversariantes de setembro · 47 clientes</p>
        </div>

        <div className="mt-5 space-y-2">
          {lista.map((c) => (
            <div
              key={c.n}
              className="flex items-center justify-between gap-3 border border-[#CCCCCC]/[0.08] bg-[#1A1917] px-4 py-2.5"
            >
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-white">{c.n}</p>
                <p className="text-[10px] text-[#CCCCCC]/40">Último rótulo: {c.u}</p>
              </div>
              <span className="flex-shrink-0 font-mono text-[11px] text-[#CA8B35]">{c.d}</span>
            </div>
          ))}
          <p className="pt-1 text-[10px] text-[#CCCCCC]/30">+ 44 clientes na lista</p>
        </div>
      </div>

      <div className={`${card} flex flex-col p-5`}>
        <p className={label}>Mensagem</p>
        <div className="mt-4 flex-1 bg-[#1A1917] p-4">
          <p className="text-[11px] leading-relaxed text-[#CCCCCC]/75">
            Oi {"{nome}"}! No mês do seu aniversário, um presente nosso: 10% em
            qualquer rótulo até o fim de setembro. Seu cupom:{" "}
            <span className="text-[#CA8B35]">ANIVER10</span>
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-[#CCCCCC]/10 pt-4">
          <span className="text-[10px] text-[#CCCCCC]/40">Envio em 3 dias</span>
          <span className="flex items-center gap-1.5 bg-[#CA8B35] px-3 py-1.5 text-[10px] font-semibold text-[#0B0B0B]">
            <Send className="h-3 w-3" /> Agendar
          </span>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- ETIQUETA -------------------------- */

export function ViewEtiqueta() {
  return (
    <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
      <div>
        <p className={label}>Etiqueta do lote</p>
        <div className="mt-3 border-2 border-dashed border-[#CCCCCC]/20 bg-white p-5">
          <div className="border border-[#0B0B0B]/15 p-4 text-center">
            <p className="font-playfair text-sm font-medium tracking-[0.2em] text-[#0B0B0B]">
              SANTA AUGUSTA
            </p>
            <div className="my-4 flex justify-center">
              <div className="grid h-20 w-20 grid-cols-5 grid-rows-5 gap-0.5">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      [0, 1, 2, 4, 5, 9, 10, 12, 14, 15, 19, 20, 22, 23, 24].includes(i)
                        ? "bg-[#0B0B0B]"
                        : "bg-transparent"
                    }
                  />
                ))}
              </div>
            </div>
            <p className="font-mono text-[11px] font-bold text-[#0B0B0B]">SUZ-2026-014</p>
            <div className="mt-3 space-y-0.5 text-[9px] text-[#0B0B0B]/70">
              <p>SUZIN · MERLOT</p>
              <p>Entrada 14/04/2026 · 5.971 kg</p>
              <p>Tanque T-02 · 4.060 L</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${card} p-5`}>
        <div className="flex items-center gap-2">
          <QrCode className="h-3.5 w-3.5 text-[#CA8B35]" />
          <p className={label}>Ao ler o QR pelo celular</p>
        </div>
        <div className="mt-5 space-y-3">
          {[
            ["Lote", "SUZ-2026-014 · Merlot · Suzin"],
            ["Entrada", "14/04/2026 · 5.971 kg · nota não registrada"],
            ["Produção", "4.060 L · rendimento 68%"],
            ["Local", "Tanque T-02 · ocupação 64%"],
            ["Etapas faturadas", "Prensagem e vinificação · envase pendente"],
            ["Em guarda há", "5 meses · dentro da faixa"],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#CCCCCC]/[0.06] pb-2.5">
              <span className="text-[10px] uppercase tracking-wider text-[#CCCCCC]/35">{k}</span>
              <span className="text-[12px] text-[#CCCCCC]/80">{v}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[11px] leading-relaxed text-[#CCCCCC]/45">
          Qualquer pessoa da equipe aponta a câmera na barrica e vê o histórico
          completo. Sem procurar em planilha, sem perguntar para ninguém.
        </p>
      </div>
    </div>
  );
}

/* --------------------------- PERFIS ---------------------------- */

const PERFIS = ["Balança", "Produção", "Administrativo", "Financeiro", "Diretoria"] as const;
const PERMISSOES = [
  { m: "Receber carga", v: [true, true, true, false, false] },
  { m: "Apontar produção", v: [false, true, true, false, false] },
  { m: "Editar política de guarda", v: [false, false, true, true, true] },
  { m: "Ver valores e faturamento", v: [false, false, true, true, true] },
  { m: "Emitir cobrança", v: [false, false, false, true, false] },
  { m: "Atender no CRM", v: [false, false, true, true, false] },
  { m: "Ver painel da diretoria", v: [false, false, false, true, true] },
] as const;

export function ViewPerfis() {
  return (
    <div className="space-y-4">
      <div className={`${card} p-4`}>
        <p className="text-[11px] leading-relaxed text-[#CCCCCC]/60">
          Os perfis não vêm prontos: a Santa Augusta cria os que quiser e marca
          o que cada um pode ver e fazer. Abaixo, um exemplo de configuração.
        </p>
      </div>

      <div className={`${card} overflow-x-auto`}>
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#CCCCCC]/10">
              <th className={`whitespace-nowrap px-4 py-3 ${label}`}>Permissão</th>
              {PERFIS.map((p) => (
                <th key={p} className={`px-3 py-3 text-center ${label}`}>
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PERMISSOES.map((row) => (
              <tr key={row.m} className="border-b border-[#CCCCCC]/[0.06] last:border-0">
                <td className="whitespace-nowrap px-4 py-3 text-[12px] text-[#CCCCCC]/80">{row.m}</td>
                {row.v.map((ok, i) => (
                  <td key={i} className="px-3 py-3 text-center">
                    {ok ? (
                      <Check className="mx-auto h-3.5 w-3.5 text-[#6D9B83]" />
                    ) : (
                      <span className="mx-auto block h-[1px] w-3 bg-[#CCCCCC]/20" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-[10px] uppercase tracking-[0.14em] text-[#CA8B35]/60 sm:hidden">
        deslize a tabela para o lado
      </p>
    </div>
  );
}

/* --------------------------- DaIA ------------------------------ */

export function ViewDaia() {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <div className={`${card} p-5`}>
        <div className="flex items-center gap-2">
          <Bot className="h-3.5 w-3.5 text-[#CA8B35]" />
          <p className={label}>DaIA no site · abordagem em 5 segundos</p>
        </div>

        <div className="mt-5 border border-[#CCCCCC]/10 bg-[#1A1917] p-4">
          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#CA8B35]">
              <Bot className="h-3.5 w-3.5 text-[#0B0B0B]" />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] leading-relaxed text-[#CCCCCC]/85">
                Olá! Vi que você está olhando os espumantes. Posso te ajudar a
                escolher entre o Fenice e o Tapera?
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Quero ajuda", "Só olhando"].map((b, i) => (
                  <span
                    key={b}
                    className={`px-3 py-1.5 text-[10px] ${
                      i === 0
                        ? "bg-[#CA8B35] font-semibold text-[#0B0B0B]"
                        : "border border-[#CCCCCC]/20 text-[#CCCCCC]/55"
                    }`}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-[#CCCCCC]/45">
          Mesmo comportamento na loja virtual. Quem responde vira lead no funil,
          com origem rastreada.
        </p>
      </div>

      <div className={`${card} p-5`}>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-3.5 w-3.5 text-[#6D9B83]" />
          <p className={label}>O que a DaIA sabe responder</p>
        </div>
        <ul className="mt-5 space-y-2.5">
          {[
            "Diferença entre os rótulos, corte de uvas e safra",
            "Harmonização e temperatura de serviço",
            "Horário do Wine Garden e como reservar",
            "Prazo e frete para a cidade de quem pergunta",
            "Status do pedido, puxando do sistema",
          ].map((x) => (
            <li key={x} className="flex items-start gap-2.5 text-[12px] leading-snug text-[#CCCCCC]/70">
              <span className="mt-[6px] h-[3px] w-[3px] flex-shrink-0 rotate-45 bg-[#CA8B35]" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-start gap-2.5 border-t border-[#CCCCCC]/10 pt-4">
          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#CA8B35]" />
          <p className="text-[11px] leading-relaxed text-[#CCCCCC]/50">
            Quando não sabe, ela não inventa: passa para um atendente humano com
            o histórico da conversa.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==================== B1 · POLÍTICA DE GUARDA ==================== */

export function ViewPolitica() {
  const faixas = [
    { de: "0", ate: "12", valor: "0,00", un: "R$/L/mês", cor: "#4F7A63", rot: "Cortesia" },
    { de: "13", ate: "24", valor: "0,12", un: "R$/L/mês", cor: "#CA8B35", rot: "Faixa 2" },
    { de: "25", ate: "∞", valor: "0,20", un: "R$/L/mês", cor: "#B5342B", rot: "Faixa 3" },
  ];
  return (
    <div className="space-y-3">
      <div className={`${card} p-5`}>
        <p className={label}>Editor da política · vinificação de terceiros</p>
        <p className="mt-3 text-[12px] leading-relaxed text-[#CCCCCC]/60">
          A regra é da vinícola. O sistema só aplica. Cada faixa tem início, fim,
          unidade e valor — e vale a partir da data que a Fran escolher, sem
          retroagir sobre o tempo já corrido.
        </p>
      </div>

      <div className={card}>
        <div className="grid grid-cols-[1fr_1fr_1.2fr_1fr_auto] gap-2 border-b border-[#CCCCCC]/10 px-4 py-3">
          {["De (meses)", "Até", "Valor", "Unidade", ""].map((h) => (
            <span key={h} className={label}>{h}</span>
          ))}
        </div>
        {faixas.map((f) => (
          <div key={f.rot} className="grid grid-cols-[1fr_1fr_1.2fr_1fr_auto] items-center gap-2 border-b border-[#CCCCCC]/[0.06] px-4 py-3 last:border-0">
            <span className="border border-[#CCCCCC]/12 bg-[#0E0D0C] px-2.5 py-1.5 font-mono text-[12px] text-white">{f.de}</span>
            <span className="border border-[#CCCCCC]/12 bg-[#0E0D0C] px-2.5 py-1.5 font-mono text-[12px] text-white">{f.ate}</span>
            <span className="border px-2.5 py-1.5 font-mono text-[12px] font-bold" style={{ borderColor: `${f.cor}55`, color: f.cor }}>
              R$ {f.valor}
            </span>
            <span className="text-[11px] text-[#CCCCCC]/50">{f.un}</span>
            <Trash2 className="h-3.5 w-3.5 text-[#CCCCCC]/25" />
          </div>
        ))}
        <div className="flex items-center gap-2 px-4 py-3 text-[11px] text-[#CA8B35]">
          <Plus className="h-3.5 w-3.5" /> adicionar faixa
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className={`${card} p-5`}>
          <p className={label}>Avisar antes de virar</p>
          <div className="mt-4 flex gap-2">
            {["90", "60", "30"].map((d) => (
              <span key={d} className="flex-1 border border-[#CA8B35]/40 bg-[#CA8B35]/10 py-2 text-center font-mono text-[12px] text-[#CA8B35]">
                {d}d
              </span>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-[#CCCCCC]/40">Quem recebe: Fran, financeiro e administrativo</p>
        </div>
        <div className={`${card} p-5`}>
          <p className={label}>Simulação com a safra atual</p>
          <p className="mt-3 font-playfair text-2xl font-medium text-[#CA8B35]">R$ 4.680<span className="text-sm text-[#CCCCCC]/40">/mês</span></p>
          <p className="mt-2 text-[11px] leading-relaxed text-[#CCCCCC]/45">
            27 lotes entram na faixa 2 até janeiro · 39.000 L a R$ 0,12
          </p>
        </div>
      </div>
      <p className="text-center text-[10px] text-[#CCCCCC]/25">
        Valores ilustrativos — a política real é definida pela vinícola.
      </p>
    </div>
  );
}

/* ==================== B2 · CENTRAL DE ALERTAS ==================== */

export function ViewAlertas() {
  const push = [
    { t: "Lote vira de faixa em 30 dias", d: "CATA · Pinot Noir · 3.000 L · a partir de 10/10 passa a R$ 0,20/L", cor: "#B5342B", h: "há 2 h" },
    { t: "Rendimento fora da faixa", d: "Suzin · Sauvignon Blanc · 3.246 kg → 4.300 L = 132,5%", cor: "#B5342B", h: "hoje 09:14" },
    { t: "Etapa concluída sem cobrança", d: "Serra do Sol · Sangiovese · vinificação encerrada, sem nota lançada", cor: "#CA8B35", h: "ontem" },
    { t: "Tanque liberado", d: "T-07 esvaziou · 8.000 L disponíveis para a próxima entrada", cor: "#4F7A63", h: "ontem" },
  ];
  return (
    <div className="grid gap-3 lg:grid-cols-[260px_1fr]">
      {/* celular */}
      <div className="mx-auto w-full max-w-[240px] border-2 border-[#CCCCCC]/15 bg-[#0E0D0C] p-3">
        <div className="mb-3 flex items-center justify-between px-1">
          <span className="font-mono text-[9px] text-[#CCCCCC]/35">09:14</span>
          <span className="font-mono text-[9px] text-[#CCCCCC]/35">100%</span>
        </div>
        <div className="space-y-2">
          {push.slice(0, 2).map((p) => (
            <div key={p.t} className="border-l-2 bg-[#1A1817] p-3" style={{ borderColor: p.cor }}>
              <div className="flex items-center gap-1.5">
                <Wine className="h-2.5 w-2.5" style={{ color: p.cor }} />
                <span className="text-[8px] uppercase tracking-wider text-[#CCCCCC]/40">Genyus Wine</span>
              </div>
              <p className="mt-1.5 text-[11px] font-semibold leading-snug text-white">{p.t}</p>
              <p className="mt-1 text-[9px] leading-snug text-[#CCCCCC]/50">{p.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[9px] text-[#CCCCCC]/25">no celular da Fran</p>
      </div>

      {/* central */}
      <div className={card}>
        <div className="flex items-center justify-between border-b border-[#CCCCCC]/10 px-4 py-3">
          <p className={label}>Central de alertas</p>
          <span className="text-[10px] text-[#CA8B35]">marcar todos como lidos</span>
        </div>
        <ul className="divide-y divide-[#CCCCCC]/[0.06]">
          {push.map((p) => (
            <li key={p.t} className="flex gap-3 px-4 py-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45" style={{ background: p.cor }} />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[12px] font-semibold text-white">{p.t}</p>
                  <span className="flex-shrink-0 text-[9px] text-[#CCCCCC]/30">{p.h}</span>
                </div>
                <p className="mt-1 text-[11px] leading-snug text-[#CCCCCC]/50">{p.d}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="border-t border-[#CCCCCC]/10 px-4 py-3 text-[10px] text-[#CCCCCC]/35">
          Cada perfil recebe só o que exige ação dele. A diretoria não recebe aviso de tanque.
        </p>
      </div>
    </div>
  );
}

/* ==================== B3 · FICHA DO PRODUTOR ==================== */

export function ViewProdutores() {
  const lotes = [
    { u: "Cabernet Sauvignon", kg: "8.642", l: "5.876", et: "Envase", cor: "#4F7A63" },
    { u: "Merlot", kg: "7.140", l: "4.855", et: "Guarda · 4 m", cor: "#CA8B35" },
    { u: "Merlot", kg: "5.971", l: "4.060", et: "Guarda · 4 m", cor: "#CA8B35" },
    { u: "Petit Verdot", kg: "4.594", l: "3.124", et: "Fermentando", cor: "#CCCCCC" },
    { u: "Malbec", kg: "3.994", l: "2.830", et: "Guarda · 4 m", cor: "#CA8B35" },
    { u: "Sauvignon Blanc", kg: "3.246", l: "4.300", et: "Rendimento 132,5%", cor: "#B5342B" },
  ];
  return (
    <div className="space-y-3">
      <div className={`${card} p-5`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-playfair text-xl font-medium text-white">Suzin</p>
            <p className="mt-1 text-[11px] text-[#CCCCCC]/40">Produtor · safra 2026 · 11 lotes</p>
          </div>
          <div className="flex gap-6 text-right">
            {[
              { v: "45.880 kg", l: "Uva entregue" },
              { v: "31.161 L", l: "Vinho produzido" },
              { v: "68,0%", l: "Rendimento médio" },
            ].map((k) => (
              <div key={k.l}>
                <p className="font-playfair text-lg font-medium text-[#CA8B35]">{k.v}</p>
                <p className="mt-0.5 text-[9px] uppercase tracking-wider text-[#CCCCCC]/35">{k.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { v: "R$ 57.362", l: "Faturado", c: "#4F7A63" },
          { v: "R$ 68.855", l: "A faturar", c: "#CA8B35" },
          { v: "R$ 3.741", l: "Guarda acumulada", c: "#B5342B" },
        ].map((k) => (
          <div key={k.l} className={`${card} p-4`}>
            <p className="font-playfair text-xl font-medium" style={{ color: k.c }}>{k.v}</p>
            <p className={`mt-1 ${label}`}>{k.l}</p>
          </div>
        ))}
      </div>

      <div className={`${card} overflow-x-auto`}>
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#CCCCCC]/10">
              {["Variedade", "Peso", "Litragem", "Situação"].map((h) => (
                <th key={h} className={`px-4 py-3 ${label}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lotes.map((l, i) => (
              <tr key={i} className="border-b border-[#CCCCCC]/[0.06] last:border-0">
                <td className="whitespace-nowrap px-4 py-3 text-[12px] text-white">{l.u}</td>
                <td className="px-4 py-3 font-mono text-[11px] text-[#CCCCCC]/55">{l.kg} kg</td>
                <td className="px-4 py-3 font-mono text-[11px] text-[#CCCCCC]/55">{l.l} L</td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="px-2 py-0.5 text-[10px] font-semibold" style={{ background: `${l.cor}22`, color: l.cor }}>
                    {l.et}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ==================== B4 · EXTRATO DO PRODUTOR ==================== */

export function ViewExtrato() {
  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_240px]">
      <div className="bg-white p-6 text-[#0B0B0B] md:p-8">
        <div className="flex items-start justify-between border-b border-[#0B0B0B]/10 pb-5">
          <div>
            <p className="font-playfair text-base font-semibold tracking-[0.14em]">SANTA AUGUSTA</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-[#0B0B0B]/45">
              Demonstrativo de vinificação · safra 2026
            </p>
          </div>
          <div className="text-right text-[10px] text-[#0B0B0B]/45">
            <p>Suzin</p>
            <p>Emitido 04/09/2026</p>
          </div>
        </div>

        <table className="mt-5 w-full border-collapse text-left text-[11px]">
          <thead>
            <tr className="border-b border-[#0B0B0B]/10 text-[9px] uppercase tracking-[0.14em] text-[#0B0B0B]/40">
              <th className="py-2">Etapa</th>
              <th className="py-2 text-right">Base</th>
              <th className="py-2 text-right">Tarifa</th>
              <th className="py-2 text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="text-[#0B0B0B]/75">
            {[
              ["1ª · Prensagem e desengace", "45.880 kg", "R$ 1,25/kg", "R$ 57.350"],
              ["2ª · Vinificação", "31.161 L", "R$ 4,15/L", "R$ 68.855"],
              ["3ª · Envase", "pendente", "R$ 4,10/gf", "—"],
              ["Guarda · faixa 2", "10.395 L · 3 m", "R$ 0,12/L/mês", "R$ 3.741"],
            ].map((r, i) => (
              <tr key={i} className="border-b border-[#0B0B0B]/[0.06]">
                <td className="py-2.5">{r[0]}</td>
                <td className="py-2.5 text-right font-mono">{r[1]}</td>
                <td className="py-2.5 text-right font-mono">{r[2]}</td>
                <td className="py-2.5 text-right font-mono font-semibold text-[#0B0B0B]">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-5 flex items-baseline justify-between border-t-2 border-[#0B0B0B] pt-4">
          <span className="text-[11px] uppercase tracking-[0.14em] text-[#0B0B0B]/60">Total do período</span>
          <span className="font-playfair text-2xl font-medium">R$ 129.946</span>
        </div>
        <p className="mt-4 text-[10px] leading-relaxed text-[#0B0B0B]/45">
          Documento gerado pelo sistema com os lotes do produtor. Sai em PDF, vai
          por WhatsApp ou e-mail com um clique, e o produtor vê exatamente por
          que está pagando.
        </p>
      </div>

      <div className="space-y-3">
        {[
          { i: Download, t: "Baixar PDF" },
          { i: MessageCircle, t: "Enviar no WhatsApp" },
          { i: Send, t: "Enviar por e-mail" },
        ].map((b) => (
          <button key={b.t} type="button" className={`${card} flex w-full items-center gap-3 p-4 text-left text-[12px] text-[#CCCCCC]/70`}>
            <b.i className="h-3.5 w-3.5 text-[#CA8B35]" />
            {b.t}
          </button>
        ))}
        <div className="border border-[#CA8B35]/25 bg-[#CA8B35]/[0.06] p-4">
          <p className="text-[11px] leading-relaxed text-[#CCCCCC]/65">
            Hoje esse documento não existe. A conversa com o produtor é feita de
            memória e de print de planilha.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==================== B5 · HISTÓRICO E AUDITORIA ==================== */

export function ViewAuditoria() {
  const log = [
    { q: "Marcos · produção", a: "alterou litragem do lote SUZ-2026-014", de: "4.300 L", para: "4.060 L", h: "04/09 · 09:14", cor: "#CA8B35" },
    { q: "Sistema", a: "bloqueou apontamento por rendimento de 132,5%", de: "—", para: "—", h: "04/09 · 09:12", cor: "#B5342B" },
    { q: "Fran · diretoria", a: "alterou faixa 2 da política de guarda", de: "R$ 0,10/L", para: "R$ 0,12/L", h: "02/09 · 17:40", cor: "#CA8B35" },
    { q: "Ana · financeiro", a: "lançou nota da 2ª etapa · Serra do Sol", de: "sem nota", para: "NF 12506", h: "01/09 · 11:22", cor: "#4F7A63" },
    { q: "Tiago · balança", a: "registrou recebimento · Suzin · Merlot", de: "—", para: "5.971 kg", h: "14/04 · 07:48", cor: "#4F7A63" },
  ];
  return (
    <div className="space-y-3">
      <div className={`${card} flex flex-wrap items-center gap-3 p-4`}>
        <History className="h-3.5 w-3.5 text-[#CA8B35]" />
        <p className="text-[12px] text-[#CCCCCC]/60">
          Toda alteração guarda autor, data, valor anterior e valor novo. Nada é
          apagado — se um número mudou, existe a quem perguntar.
        </p>
      </div>
      <div className={card}>
        <ul className="divide-y divide-[#CCCCCC]/[0.06]">
          {log.map((l, i) => (
            <li key={i} className="flex gap-3 px-4 py-4">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45" style={{ background: l.cor }} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="text-[12px] text-white">
                    <span className="font-semibold">{l.q}</span>{" "}
                    <span className="text-[#CCCCCC]/55">{l.a}</span>
                  </p>
                  <span className="flex-shrink-0 font-mono text-[9px] text-[#CCCCCC]/30">{l.h}</span>
                </div>
                {l.de !== "—" && (
                  <p className="mt-1.5 flex items-center gap-2 font-mono text-[10px]">
                    <span className="text-[#CCCCCC]/35 line-through">{l.de}</span>
                    <ArrowRight className="h-2.5 w-2.5 text-[#CCCCCC]/25" />
                    <span className="text-[#CA8B35]">{l.para}</span>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ==================== B6 · IMPORTAR PLANILHA ==================== */

export function ViewImportar() {
  const achados = [
    { s: "erro", t: "Data inválida", d: "Berto Aguiar · Pinot Noir · 06/02/20226", a: "corrigir para 06/02/2026" },
    { s: "erro", t: "Rendimento impossível", d: "Suzin · Sauvignon Blanc · 132,5%", a: "conferir litragem" },
    { s: "erro", t: "Litro na coluna de peso", d: "Serra do Sol · Sangiovese · \"2707L\"", a: "definir se é kg ou L" },
    { s: "alerta", t: "Lote sem peso", d: "Celso Panceri · 6.000 L · R$ 25.360", a: "informar peso de entrada" },
    { s: "alerta", t: "Número de nota inválido", d: "Fabrício · Niágara · nota \"4.5\"", a: "conferir a nota" },
    { s: "ok", t: "68 lotes prontos", d: "peso, litragem e datas consistentes", a: "importar" },
  ];
  const cor = { erro: "#B5342B", alerta: "#CA8B35", ok: "#4F7A63" } as const;
  return (
    <div className="space-y-3">
      <div className={`${card} p-5`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileSpreadsheet className="h-4 w-4 text-[#4F7A63]" />
            <div>
              <p className="text-[12px] font-semibold text-white">SAFRA 2026 - tabela kg.xlsx</p>
              <p className="mt-0.5 text-[10px] text-[#CCCCCC]/40">15 abas · 75 linhas · lidas em 1,2 s</p>
            </div>
          </div>
          <span className="bg-[#4F7A63]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#6D9B83]">
            analisado
          </span>
        </div>
      </div>

      <div className={card}>
        <p className={`border-b border-[#CCCCCC]/10 px-4 py-3 ${label}`}>
          O que o sistema encontrou antes de importar
        </p>
        <ul className="divide-y divide-[#CCCCCC]/[0.06]">
          {achados.map((a, i) => (
            <li key={i} className="flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-3">
              {a.s === "ok" ? (
                <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: cor[a.s] }} />
              ) : (
                <X className="h-3.5 w-3.5 flex-shrink-0" style={{ color: cor[a.s as "erro" | "alerta"] }} />
              )}
              <span className="text-[12px] font-semibold text-white">{a.t}</span>
              <span className="text-[11px] text-[#CCCCCC]/45">{a.d}</span>
              <span className="ml-auto whitespace-nowrap text-[10px] uppercase tracking-wider" style={{ color: cor[a.s as keyof typeof cor] }}>
                {a.a}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-[11px] leading-relaxed text-[#CCCCCC]/45">
        A safra que já passou entra no sistema em minutos, com os problemas
        apontados um a um. Nada é importado errado em silêncio.
      </p>
    </div>
  );
}

/* ==================== B7 · BI COM FILTROS ==================== */

export function ViewBi() {
  const barras = [
    { m: "jan", v: 15 }, { m: "fev", v: 112 }, { m: "mar", v: 79 },
    { m: "abr", v: 67 }, { m: "mai", v: 0 }, { m: "jun", v: 1 },
  ];
  const max = 112;
  const donut = [
    { n: "Terceiros", p: 64.3, c: "#4F7A63" },
    { n: "Própria", p: 35.7, c: "#CA8B35" },
  ];
  return (
    <div className="space-y-3">
      <div className={`${card} flex flex-wrap items-center gap-2 p-3`}>
        {["Safra 2026", "Todos os produtores", "Todas as variedades", "Por mês"].map((f, i) => (
          <span key={f} className={`px-3 py-1.5 text-[11px] ${i === 0 ? "bg-[#CA8B35] font-semibold text-[#0B0B0B]" : "border border-[#CCCCCC]/12 text-[#CCCCCC]/55"}`}>
            {f}
          </span>
        ))}
        <span className="ml-auto flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#CA8B35]">
          <Download className="h-3 w-3" /> exportar
        </span>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
        <div className={`${card} p-5`}>
          <p className={label}>Uva processada por mês · toneladas</p>
          <div className="mt-6 flex h-[150px] items-end gap-2">
            {barras.map((b) => (
              <div key={b.m} className="flex flex-1 flex-col items-center justify-end">
                <span className="mb-1.5 font-mono text-[9px] text-[#CCCCCC]/40">{b.v || "—"}</span>
                <div className="w-full" style={{ height: `${Math.max((b.v / max) * 110, b.v ? 3 : 1)}px`, background: b.v / max > 0.6 ? "#CA8B35" : "#4F7A63" }} />
                <span className="mt-2 text-[10px] uppercase text-[#CCCCCC]/45">{b.m}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${card} p-5`}>
          <p className={label}>Origem da uva</p>
          <div className="mt-6 flex items-center gap-5">
            <svg viewBox="0 0 42 42" className="h-24 w-24 flex-shrink-0 -rotate-90">
              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#4F7A63" strokeWidth="7" strokeDasharray="64.3 35.7" />
              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#CA8B35" strokeWidth="7" strokeDasharray="35.7 64.3" strokeDashoffset="-64.3" />
            </svg>
            <ul className="space-y-2.5">
              {donut.map((d) => (
                <li key={d.n} className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5" style={{ background: d.c }} />
                  <span className="text-[12px] text-[#CCCCCC]/70">{d.n}</span>
                  <span className="font-mono text-[12px] font-bold text-white">{d.p}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        {[
          { v: "274.722", l: "kg recebidos" },
          { v: "194.748", l: "litros produzidos" },
          { v: "70,9%", l: "rendimento médio" },
          { v: "R$ 666.540", l: "faturável apurado" },
        ].map((k) => (
          <div key={k.l} className={`${card} p-4`}>
            <p className="font-playfair text-lg font-medium text-[#CA8B35]">{k.v}</p>
            <p className={`mt-1 ${label}`}>{k.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==================== B8 · WINE GARDEN ==================== */

export function ViewEventos() {
  const agenda = [
    { h: "14:30", n: "Marina Fischer", p: "4 pessoas", t: "Degustação", cor: "#4F7A63" },
    { h: "16:00", n: "Grupo Hotel Serra", p: "12 pessoas", t: "Visita guiada", cor: "#CA8B35" },
    { h: "17:30", n: "Restaurante Dom", p: "2 pessoas", t: "Prova técnica", cor: "#4F7A63" },
    { h: "19:00", n: "Aniversário · Carlos", p: "8 pessoas", t: "Wine Garden", cor: "#CA8B35" },
  ];
  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_260px]">
      <div className={card}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#CCCCCC]/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 text-[#CA8B35]" />
            <p className={label}>Sábado · 12 de setembro · 14h30 às 20h</p>
          </div>
          <span className="text-[10px] text-[#CCCCCC]/40">26 de 40 lugares</span>
        </div>
        <ul className="divide-y divide-[#CCCCCC]/[0.06]">
          {agenda.map((a) => (
            <li key={a.h} className="flex items-center gap-4 px-4 py-3.5">
              <span className="w-11 flex-shrink-0 font-mono text-[12px] text-[#CA8B35]">{a.h}</span>
              <span className="h-8 w-[2px] flex-shrink-0" style={{ background: a.cor }} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-white">{a.n}</p>
                <p className="mt-0.5 text-[10px] text-[#CCCCCC]/45">{a.t} · {a.p}</p>
              </div>
              <Check className="h-3.5 w-3.5 flex-shrink-0 text-[#6D9B83]" />
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <div className={`${card} p-5`}>
          <div className="flex items-center gap-2">
            <Bot className="h-3.5 w-3.5 text-[#CA8B35]" />
            <p className={label}>Quem reservou</p>
          </div>
          <ul className="mt-4 space-y-2.5 text-[11px] text-[#CCCCCC]/60">
            <li className="flex justify-between"><span>DaIA no site</span><span className="font-mono text-white">2</span></li>
            <li className="flex justify-between"><span>WhatsApp</span><span className="font-mono text-white">1</span></li>
            <li className="flex justify-between"><span>Instagram</span><span className="font-mono text-white">1</span></li>
          </ul>
        </div>
        <div className="border border-[#CA8B35]/25 bg-[#CA8B35]/[0.06] p-4">
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3 text-[#CA8B35]" />
            <p className="text-[10px] uppercase tracking-wider text-[#CA8B35]">lembrete automático</p>
          </div>
          <p className="mt-2.5 text-[11px] leading-relaxed text-[#CCCCCC]/60">
            Cada reserva recebe confirmação na hora e lembrete na véspera. Quem
            veio entra na base e passa a receber as campanhas.
          </p>
        </div>
      </div>
    </div>
  );
}
