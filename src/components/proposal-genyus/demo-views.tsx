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
            ["Entrada", "14/04/2026 · 5.971 kg · nota 12508"],
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
