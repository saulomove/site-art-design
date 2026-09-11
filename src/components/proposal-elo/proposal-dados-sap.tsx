"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShieldCheck, Ban, ArrowRightLeft, Clock } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloPanel, EloEyebrow } from "./elo-ui";

/* ================================================================
   O anexo técnico do César, dentro da proposta. Ele é o gestor de
   TI e é ele quem vai dimensionar esforço de interface no BTP.
   Grupo A por carga, Grupo B em tempo real, e o que fica de fora.
   ================================================================ */

const mono = "font-mono tabular-nums";

type Campo = { n: string; d?: string };
type Objeto = { id: string; cod: string; nome: string; para: string; campos: Campo[] };

const GRUPO_A: Objeto[] = [
  {
    id: "a1", cod: "A1", nome: "Clientes", para: "base da carteira e da ficha 360",
    campos: [
      { n: "codigo_sap", d: "identificador único, chave de tudo" },
      { n: "razao_social" }, { n: "nome_fantasia" }, { n: "cnpj" },
      { n: "cidade / uf" },
      { n: "grupo_economico", d: "se existir — para ver matriz e filiais juntas" },
      { n: "segmento", d: "proteína animal, laticínio, pet, químico…" },
      { n: "situacao", d: "ativo / inativo / bloqueado" },
      { n: "representante_codigo", d: "quem atende hoje" },
      { n: "condicao_pagamento" }, { n: "limite_credito" }, { n: "data_cadastro" },
    ],
  },
  {
    id: "a2", cod: "A2", nome: "Representantes", para: "login, carteira e região",
    campos: [
      { n: "codigo_sap" }, { n: "razao_social", d: "pessoa jurídica" }, { n: "cnpj" },
      { n: "email", d: "o da Videplast, para o login" }, { n: "regiao" },
      { n: "situacao", d: "ativo / inativo" },
      { n: "equipe", d: "se houver vendedores vinculados ao representante" },
    ],
  },
  {
    id: "a3", cod: "A3", nome: "Produtos", para: "cotação e histórico por linha",
    campos: [
      { n: "codigo_sap" }, { n: "descricao" },
      { n: "linha / familia", d: "FFS, termoformado, stretch, valvulado, sacola…" },
      { n: "unidade", d: "kg, milheiro, bobina" },
      { n: "especificacao", d: "espessura, largura, estrutura — se estiver estruturado" },
      { n: "situacao", d: "ativo / descontinuado" },
    ],
  },
  {
    id: "a4", cod: "A4", nome: "Tabela de preço", para: "o representante consulta, nunca altera",
    campos: [
      { n: "produto_codigo" },
      { n: "cliente_codigo", d: "ou grupo/tabela, conforme a regra de vocês" },
      { n: "preco" },
      { n: "preco_piso", d: "se existir — é o que dá o alerta de margem" },
      { n: "vigencia_inicio / fim", d: "para o lote guardar qual tabela valia" },
    ],
  },
];

const GRUPO_B: Objeto[] = [
  {
    id: "b1", cod: "B1", nome: "Resumo comercial do cliente", para: "chamada por codigo_sap",
    campos: [
      { n: "faturamento_12m", d: "valor e volume, quebrado por mês" },
      { n: "ticket_medio" },
      { n: "mix_produtos", d: "linhas compradas nos últimos 12 meses" },
      { n: "ultima_compra", d: "data e valor" },
      { n: "tendencia", d: "ou simplesmente os 12 pontos, que a gente calcula" },
    ],
  },
  {
    id: "b2", cod: "B2", nome: "Pedidos do cliente", para: "últimos 12 meses",
    campos: [
      { n: "numero_pedido" }, { n: "data_pedido" },
      { n: "produtos", d: "código, quantidade, preço praticado" },
      { n: "valor_total" },
      { n: "status", d: "em produção, programado, faturado, atrasado" },
      { n: "previsao_entrega" },
      { n: "planta", d: "Videira/SC · Rio Verde/GO · Várzea Grande/MT · Três Rios/RJ · União da Vitória/PR" },
    ],
  },
  {
    id: "b3", cod: "B3", nome: "Reclamações de qualidade", para: "só as abertas, e as fechadas de 12 meses",
    campos: [
      { n: "numero_rq" }, { n: "data_abertura" }, { n: "produto_codigo / lote" },
      { n: "descricao" }, { n: "status", d: "aberta, em análise, encerrada" }, { n: "responsavel" },
    ],
  },
  {
    id: "b4", cod: "B4", nome: "Devoluções", para: "evita o representante ser surpreendido",
    campos: [
      { n: "documento" }, { n: "data" }, { n: "produto_codigo" },
      { n: "quantidade / valor" }, { n: "motivo" },
    ],
  },
  {
    id: "b5", cod: "B5", nome: "Situação financeira", para: "opcional — decisão de vocês",
    campos: [
      { n: "titulos_em_aberto", d: "vencimento, valor, situação" },
      { n: "limite_disponivel" },
      { n: "bloqueio_credito", d: "sim / não" },
    ],
  },
];

const FORA = [
  ["Nenhuma escrita", "Sem criação de pedido, sem alteração de cadastro, sem estorno. Nada volta para o SAP nesta fase."],
  ["Nada de produção e PCP", "Ordem de produção, apontamento de máquina, receita e programação ficam inteiramente fora."],
  ["Nada de fiscal, contábil ou folha", "Fora de escopo em qualquer fase do projeto."],
  ["Nada de estoque", "Nem de matéria-prima, nem de produto acabado."],
  ["Nada de custo", "O Elo trabalha com preço e, se vocês liberarem, com preço piso. Custo de produção não sai do SAP."],
];

type Grupo = "a" | "b" | "fora";

function Objetos({ lista, cor }: { lista: Objeto[]; cor: string }) {
  const [aberto, setAberto] = useState<string | null>(lista[0]?.id ?? null);
  return (
    <div className="divide-y divide-[#272C2E] border-y border-[#272C2E]">
      {lista.map((o) => {
        const on = aberto === o.id;
        return (
          <div key={o.id} className="min-w-0">
            <button
              type="button"
              onClick={() => setAberto(on ? null : o.id)}
              aria-expanded={on}
              className="group flex w-full items-center gap-4 py-5 text-left"
            >
              <span
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[3px] border text-[11px] font-semibold ${mono}`}
                style={{ borderColor: `${cor}55`, color: cor, background: `${cor}12` }}
              >
                {o.cod}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-sans text-[16px] font-semibold leading-tight text-[#EDF0EF] md:text-[18px]">
                  {o.nome}
                </span>
                <span className="mt-0.5 block text-[12.5px] leading-snug text-[#6B7576]">{o.para}</span>
              </span>
              <span className={`hidden flex-shrink-0 text-[11px] text-[#6B7576] sm:block ${mono}`}>
                {o.campos.length} campos
              </span>
              {on ? (
                <Minus className="h-4 w-4 flex-shrink-0 text-[#9BA5A7]" />
              ) : (
                <Plus className="h-4 w-4 flex-shrink-0 text-[#6B7576] transition-colors group-hover:text-[#EDF0EF]" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-x-8 gap-y-2 pb-6 pl-12 sm:grid-cols-2">
                    {o.campos.map((c) => (
                      <div key={c.n} className="min-w-0 border-l border-[#272C2E] pl-3.5">
                        <p className={`text-[12.5px] text-[#EDF0EF] ${mono}`}>{c.n}</p>
                        {c.d && <p className="mt-0.5 text-[11.5px] leading-snug text-[#6B7576]">{c.d}</p>}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function ProposalEloDadosSap() {
  const [grupo, setGrupo] = useState<Grupo>("a");

  return (
    <EloSection id="dados-sap">
      <EloSectionHeader
        eyebrow="Anexo técnico · para o César"
        title="A lista exata do que o Elo precisa ler do SAP."
        lead="César, isto está aqui dentro de propósito: você não deveria precisar de uma reunião para dimensionar o esforço. Abaixo está tudo o que o Elo lê, separado pelo que pode vir por carga diária e pelo que precisa ser síncrono — e, principalmente, tudo o que ele não precisa."
      />

      <EloReveal>
        <EloPanel tone="green" className="mt-12">
          <p className="font-sans text-[17px] font-semibold leading-snug text-[#EDF0EF] md:text-[21px]">
            Antes de tudo: o Elo não depende de vocês para entrar no ar.
          </p>
          <p className="mt-4 max-w-[78ch] text-[14.5px] leading-relaxed text-[#9BA5A7] md:text-[15.5px]">
            A primeira fase roda com base própria, alimentada por uma planilha que o próprio time
            comercial exporta — sem interface, sem projeto de TI, sem entrar na fila. Esta lista
            existe para a segunda fase, quando fizer sentido ligar as duas pontas.{" "}
            <span className="text-[#EDF0EF]">
              Nada aqui é pré-requisito para o projeto começar, e nada precisa ser feito antes de 20
              de outubro.
            </span>
          </p>
        </EloPanel>
      </EloReveal>

      {/* três premissas */}
      <EloReveal delay={0.06}>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { Icon: ShieldCheck, t: "Somente leitura", d: "O Elo não grava nada no SAP nesta fase. O pedido continua entrando pelo portal que já funciona." },
            { Icon: Clock, t: "Nada antes do go-live do S/4", d: "A conversão muda tabelas e campos. Construir interface no ECC agora seria refazer em trinta dias." },
            { Icon: ArrowRightLeft, t: "Duas velocidades", d: "Cadastro por carga diária, consulta de cliente em tempo real. Foi a separação que você mesmo fez na reunião." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="min-w-0 border border-[#272C2E] bg-[#15181A] p-6">
              <Icon className="h-5 w-5 text-[#47A87D]" strokeWidth={1.7} />
              <p className="mt-4 font-sans text-[14.5px] font-semibold leading-snug text-[#EDF0EF]">{t}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#9BA5A7]">{d}</p>
            </div>
          ))}
        </div>
      </EloReveal>

      {/* alternador */}
      <EloReveal delay={0.1}>
        <div className="mt-16 flex flex-wrap gap-2">
          {([
            { id: "a" as const, l: "Grupo A · carga diária", s: "4 objetos · arquivo ou batch" },
            { id: "b" as const, l: "Grupo B · tempo real", s: "5 consultas · REST síncrono" },
            { id: "fora" as const, l: "O que o Elo não precisa", s: "5 exclusões explícitas" },
          ]).map((g) => {
            const on = grupo === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setGrupo(g.id)}
                aria-pressed={on}
                className={`min-w-0 flex-1 border px-5 py-4 text-left transition-colors sm:flex-none ${
                  on
                    ? "border-[#E8343C]/60 bg-[#E8343C]/[0.08]"
                    : "border-[#272C2E] bg-[#15181A] hover:border-[#3A4143]"
                }`}
              >
                <span className={`block font-sans text-[13.5px] font-semibold ${on ? "text-[#EDF0EF]" : "text-[#9BA5A7]"}`}>
                  {g.l}
                </span>
                <span className="mt-0.5 block text-[11.5px] text-[#6B7576]">{g.s}</span>
              </button>
            );
          })}
        </div>
      </EloReveal>

      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={grupo}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {grupo === "a" && (
              <>
                <p className="mb-7 max-w-[80ch] text-[14.5px] leading-relaxed text-[#9BA5A7]">
                  Cadastro. Muda pouco, tolera atraso de um dia e não precisa de interface síncrona.
                  Pode sair como exportação agendada em CSV, JSON ou posicional — o que for mais
                  barato do seu lado. Em embalagem flexível o cadastro de produto costuma explodir,
                  porque cada combinação de cliente, arte, espessura e largura vira item — então a A3
                  pode ser a maior das quatro. Mesmo assim, carga completa diária de dezenas de
                  milhares de linhas fica na casa de poucos megabytes.
                </p>
                <Objetos lista={GRUPO_A} cor="#47A87D" />
                <div className="mt-8 border-l-2 border-[#C9A04A]/60 bg-[#C9A04A]/[0.05] px-6 py-5">
                  <EloEyebrow>Sobre a A4 — a decisão é de vocês</EloEyebrow>
                  <p className="mt-3 max-w-[78ch] text-[13.5px] leading-relaxed text-[#9BA5A7]">
                    Na reunião ficou claro que precificação e estratégia comercial são internas e que
                    o representante recebe pronto. O Elo respeita isso: ele exibe a tabela vigente,
                    não simula, não negocia e não permite edição. Se preferirem não expor{" "}
                    <span className={`text-[#EDF0EF] ${mono}`}>preco_piso</span> ao representante, o
                    campo fica visível apenas nos perfis internos — é permissão, não integração.
                  </p>
                </div>
              </>
            )}

            {grupo === "b" && (
              <>
                <p className="mb-7 max-w-[80ch] text-[14.5px] leading-relaxed text-[#9BA5A7]">
                  É a consulta que o representante faz antes de entrar na reunião com o cliente, e a
                  razão pela qual isto não sai por carga: ele precisa da situação de agora, não da de
                  ontem. Chamada sob demanda, uma por abertura de ficha —{" "}
                  <span className="text-[#EDF0EF]">
                    estimativa de 200 a 400 chamadas por dia útil no pico
                  </span>
                  .
                </p>
                <Objetos lista={GRUPO_B} cor="#E8343C" />
                <div className="mt-8 border-l-2 border-[#C9A04A]/60 bg-[#C9A04A]/[0.05] px-6 py-5">
                  <EloEyebrow>Sobre a B5</EloEyebrow>
                  <p className="mt-3 max-w-[78ch] text-[13.5px] leading-relaxed text-[#9BA5A7]">
                    Entra só se vocês quiserem. Há empresas que preferem não expor inadimplência ao
                    representante PJ. Se ficar de fora, o Elo funciona igual — o representante apenas
                    não vê a aba financeira, e o alerta de crédito fica restrito ao perfil interno.
                  </p>
                </div>
              </>
            )}

            {grupo === "fora" && (
              <>
                <p className="mb-7 max-w-[80ch] text-[14.5px] leading-relaxed text-[#9BA5A7]">
                  Listado de propósito, porque encurta a sua conta de esforço e delimita o risco. Um
                  projeto de CRM costuma chegar até a TI como um pedido aberto. Este chega fechado.
                </p>
                <div className="divide-y divide-[#272C2E] border-y border-[#272C2E]">
                  {FORA.map(([t, d]) => (
                    <div key={t} className="flex items-start gap-4 py-5">
                      <Ban className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6B7576]" strokeWidth={1.6} />
                      <div className="min-w-0">
                        <p className="font-sans text-[15.5px] font-semibold leading-snug text-[#EDF0EF] md:text-[17px]">
                          {t}
                        </p>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#9BA5A7]">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* contrato de interface */}
      <EloReveal delay={0.06}>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="min-w-0 border border-[#272C2E] bg-[#15181A] p-7">
            <EloEyebrow>Grupo A · formato</EloEyebrow>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#9BA5A7]">
              O que for mais barato para vocês: CSV, JSON, XML ou posicional, depositado em SFTP,
              blob ou endpoint. Uma vez por dia, em horário de baixa. Carga completa ou incremental
              por data de alteração, tanto faz.
            </p>
          </div>
          <div className="min-w-0 border border-[#272C2E] bg-[#15181A] p-7">
            <EloEyebrow>Grupo B · formato</EloEyebrow>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#9BA5A7]">
              REST com JSON, autenticação por token, apontando para o endpoint que vocês publicarem.
              Do nosso lado a implementação é trivial; o esforço é construir as interfaces no BTP —
              que é exatamente o que precisamos dimensionar.
            </p>
          </div>
        </div>
      </EloReveal>

      <EloReveal delay={0.1}>
        <div className="mt-8 border border-[#E8343C]/35 bg-[#E8343C]/[0.05] p-7 md:p-9">
          <p className="max-w-[80ch] font-sans text-[16px] font-semibold leading-snug text-[#EDF0EF] md:text-[19px]">
            Se algum campo não existir estruturado no ECC ou custar caro para expor, diga que não
            existe.
          </p>
          <p className="mt-3.5 max-w-[80ch] text-[13.5px] leading-relaxed text-[#9BA5A7]">
            Quase todos têm alternativa ou podem entrar numa fase seguinte. O que não queremos é
            você orçar um esforço maior do que o necessário por causa de um campo secundário. A lista
            existe para medir esforço, não para fechar escopo.
          </p>
        </div>
      </EloReveal>

      {/* premissas e as duas perguntas */}
      <EloReveal delay={0.14}>
        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="min-w-0">
            <EloEyebrow>O que assumimos — corrija o que estiver errado</EloEyebrow>
            <ul className="mt-6 space-y-4">
              {[
                ["Não existem interfaces prontas", "no BTP expondo cliente, produto ou pedido para outro consumidor. Estamos orçando como construção do zero."],
                ["A janela abre depois de 20 de outubro", "passado o período de estabilização do go-live. Não pediremos nada antes disso."],
                ["Reclamação de qualidade fica no SAP", "então a B3 sai da mesma origem das demais."],
                ["A carga da primeira fase não passa por vocês", "o time comercial exporta e nós importamos. Se mais adiante existir rotina que já alimenta o Power BI ou o Fabric, conversamos — mas não contamos com isso."],
              ].map(([t, d]) => (
                <li key={t} className="flex items-start gap-3.5">
                  <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 bg-[#E8343C]" />
                  <p className="min-w-0 text-[14px] leading-relaxed text-[#9BA5A7]">
                    <span className="font-semibold text-[#EDF0EF]">{t}</span> {d}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <EloEyebrow>As duas perguntas que faltam</EloEyebrow>
            <div className="mt-6 space-y-4">
              {[
                ["01", "Quantos clientes ativos e quantos itens de produto?", "É a única informação que falta para fechar a estimativa de volume. Ordem de grandeza basta."],
                ["02", "Alguma das premissas ao lado está errada?", "Se qualquer uma delas não se sustentar, preferimos saber agora."],
              ].map(([n, p, d]) => (
                <div key={n} className="min-w-0 border border-[#272C2E] bg-[#15181A] p-6">
                  <span className={`text-[11px] text-[#E8343C] ${mono}`}>{n}</span>
                  <p className="mt-2.5 font-sans text-[15px] font-semibold leading-snug text-[#EDF0EF] md:text-[16.5px]">
                    {p}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#6B7576]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </EloReveal>
    </EloSection>
  );
}
