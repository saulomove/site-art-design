"use client";

import type { ProposalInvestment } from "@/lib/proposals-data";
import { Unlock, Check, Minus, Info } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloPanel, EloEyebrow } from "./elo-ui";

/* ==================== ENTREGAS ==================== */

const SPRINTS = [
  {
    n: "01",
    q: "Semanas 1 a 4",
    t: "Campo",
    m: "O primeiro relatório por áudio cai na ficha de um cliente real.",
    itens: [
      "Ambiente no ar, perfis e permissões definidos pela Videplast",
      "Importação da carteira, dos produtos e dos representantes",
      "Relatório por áudio no WhatsApp, com a IA perguntando o que faltou",
      "Ficha 360 e carteira priorizada por risco e oportunidade",
      "App de campo com check-in e modo offline",
    ],
  },
  {
    n: "02",
    q: "Semanas 5 a 8",
    t: "Funil",
    m: "Passa a existir registro do que acontece antes do pedido firme.",
    itens: [
      "Cotação e oportunidade como registro — o que hoje não existe",
      "Amostra ponta a ponta, com desfecho e motivo estruturado",
      "Desenvolvimento de produto acompanhado nos 3 a 4 meses que leva",
      "Pedido iniciado no campo e aprovado internamente",
      "Conversão real: visita → amostra → pedido",
    ],
  },
  {
    n: "03",
    q: "Semanas 9 a 12",
    t: "Relacionamento",
    m: "O cliente final percebe que a Videplast está junto.",
    itens: [
      "E-mail e WhatsApp etiquetado centralizados por cliente",
      "Contato pós-visita e pós-amostra por IA, humanizado",
      "Alerta de queda de volume e de cliente inativo",
      "Histórico que fica na Videplast quando o representante sai",
      "Painéis da diretoria e da gerência comercial",
    ],
  },
];

export function ProposalEloEntregas() {
  return (
    <EloSection id="entregas" tone="darker">
      <EloSectionHeader
        eyebrow="Entregas"
        title="Doze semanas,"
        accent="com algo no ar a cada quinzena."
        lead="Os três módulos entram juntos porque se alimentam: o funil precisa do dado que vem do campo, e o relacionamento precisa do funil. O que ordena o risco é a sequência — Campo primeiro, porque é onde a adoção se prova."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {SPRINTS.map((s, i) => (
          <EloReveal key={s.n} delay={i * 0.08}>
            <div className="flex h-full flex-col border-t-2 border-[#D51920] bg-[#15181A] p-7 md:p-8">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-[11px] tracking-[0.18em] text-[#E8343C]">{s.n}</span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#6B7576]">{s.q}</span>
              </div>
              <h3 className="mt-5 font-sans text-[24px] font-bold tracking-[-0.02em] text-[#EDF0EF]">{s.t}</h3>
              <ul className="mt-6 flex-1 space-y-2.5">
                {s.itens.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[13.5px] leading-snug text-[#9BA5A7]">
                    <Check className="mt-[3px] h-3 w-3 flex-shrink-0 text-[#D51920]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-[#272C2E] pt-5 text-[13.5px] italic leading-relaxed text-[#6B7576]">
                {s.m}
              </p>
            </div>
          </EloReveal>
        ))}
      </div>

      <EloReveal delay={0.12}>
        <EloPanel className="mt-6">
          <EloEyebrow>Sugestão de piloto</EloEyebrow>
          <p className="mt-5 max-w-4xl text-[15px] leading-relaxed text-[#9BA5A7]">
            Comece com dois ou três representantes, sendo pelo menos um dos antigos. Se o Elo
            funciona com quem &ldquo;não muda nem no Excel&rdquo;, funciona com os outros vinte — e
            aí a adoção deixa de ser discussão.
          </p>
        </EloPanel>
      </EloReveal>
    </EloSection>
  );
}

/* ==================== CLIENTE-ÂNCORA ==================== */

export function ProposalEloAncora() {
  return (
    <EloSection id="ancora">
      <EloSectionHeader
        eyebrow="A Videplast como primeiro cliente"
        title="Vocês não compram"
        accent="um sistema pronto."
        lead="O Genyus Elo está sendo construído a partir da operação de vocês, e a Videplast entra como cliente-âncora. Isso tem três consequências concretas — e todas favorecem quem entra primeiro."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            t: "Prioridade no roadmap",
            d: "Pedido da Videplast entra na frente da fila, com duas janelas de desenvolvimento reservadas por trimestre. É o contrário do sistema de prateleira, em que vocês teriam que se moldar ao que existe.",
          },
          {
            t: "Condição vitalícia",
            d: "A faixa contratada não reajusta acima do IPCA enquanto o contrato durar, e o crescimento da equipe dentro da faixa não gera cobrança nova. Quem entra primeiro paga a condição de quem entrou primeiro.",
          },
          {
            t: "Implantação reduzida",
            d: "O valor de implantação é uma fração do que um projeto deste porte custaria, justamente porque a Videplast é o primeiro cliente e ajuda a formar o produto.",
          },
        ].map((c, i) => (
          <EloReveal key={c.t} delay={i * 0.07}>
            <div className="h-full border border-[#272C2E] bg-[#15181A] p-8">
              <h3 className="font-sans text-[19px] font-semibold leading-snug text-[#EDF0EF]">{c.t}</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-[#9BA5A7]">{c.d}</p>
            </div>
          </EloReveal>
        ))}
      </div>

      <EloReveal delay={0.12}>
        <EloPanel tone="green" className="mt-6">
          <div className="flex items-start gap-4">
            <Unlock className="mt-1 h-5 w-5 flex-shrink-0 text-[#47A87D]" />
            <div>
              <h3 className="font-sans text-[19px] font-semibold text-[#EDF0EF] md:text-[22px]">
                Os dados são da Videplast. Sempre.
              </h3>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#9BA5A7]">
                Tudo que entrar no Elo — carteira, visitas, áudios, histórico de relacionamento — é
                de vocês e sai em formato aberto a qualquer momento, inclusive no encerramento do
                contrato. Sem contrato de fidelidade e sem sequestro de base. Se um dia a parceria
                terminar, a informação não vai embora junto.
              </p>
            </div>
          </div>
        </EloPanel>
      </EloReveal>
    </EloSection>
  );
}

/* ==================== INVESTIMENTO ==================== */

export function ProposalEloInvestimento({ investment }: { investment: ProposalInvestment }) {
  return (
    <EloSection id="investimento" tone="darker">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[55%] w-[85%] -translate-x-1/2 rounded-full bg-[#D51920]/[0.08] blur-[170px]" />

      <EloSectionHeader
        eyebrow="Investimento"
        title="Implantação em quatro entregas,"
        accent="e uma mensalidade por faixa."
        lead="Cada parcela vence quando a parte correspondente estiver no ar e em uso — não em data de calendário. A mensalidade é por faixa de usuários, não por cabeça: adoção é o projeto, e cobrar por pessoa faria vocês limitarem quem entra."
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
        <EloReveal>
          <div className="relative border-2 border-[#D51920]/50 bg-[#16191A] p-8 shadow-[0_0_90px_-30px_rgba(213,25,32,0.5)] md:p-10">
            <div className="pointer-events-none absolute left-0 top-0">
              <div className="h-[2px] w-8 bg-[#D51920]" />
              <div className="h-8 w-[2px] bg-[#D51920]" />
            </div>

            <EloEyebrow>{investment.setupLabel}</EloEyebrow>
            <p className="mt-6 font-sans text-[52px] font-bold leading-none tracking-[-0.03em] text-[#E8343C] md:text-[68px]">
              {investment.setupFee}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B7576]">
              4 parcelas de R$ 12.000 · 12 semanas · 3 módulos
            </p>

            {investment.setupItems && (
              <div className="mt-8 space-y-2.5 border-y border-[#272C2E] py-6">
                {investment.setupItems.map((r, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-4 text-[13.5px]">
                    <span className="text-[#9BA5A7]">{r.item}</span>
                    <span className="flex-shrink-0 font-mono tabular-nums text-[#EDF0EF]">{r.value}</span>
                  </div>
                ))}
              </div>
            )}

            {investment.setupIncludes && (
              <ul className="mt-8 space-y-3">
                {investment.setupIncludes.map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-[#9BA5A7]">
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#D51920]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )}

            {investment.setupNote && (
              <p className="mt-8 border-t border-[#272C2E] pt-6 text-[13px] leading-relaxed text-[#6B7576]">
                {investment.setupNote}
              </p>
            )}
          </div>
        </EloReveal>

        <EloReveal delay={0.08}>
          <div className="border border-[#272C2E] bg-[#15181A] p-8 md:p-10">
            <EloEyebrow>{investment.totalLabel}</EloEyebrow>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-sans text-[52px] font-bold leading-none tracking-[-0.03em] text-[#EDF0EF] md:text-[60px]">
                {investment.totalMonthly}
              </span>
              <span className="text-[18px] text-[#6B7576]">/mês</span>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B7576]">
              a partir da entrega do primeiro módulo
            </p>

            {investment.packageIncludes && (
              <ul className="mt-8 space-y-3 border-t border-[#272C2E] pt-7">
                {investment.packageIncludes.map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-[#9BA5A7]">
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#D51920]/70" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 border border-[#272C2E] bg-[#1C2022] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B7576]">
                A faixa não conta cabeça
              </p>
              <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9BA5A7]">
                De 26 a 60 usuários é o mesmo valor. Os vinte e poucos representantes, as equipes
                deles, os três vendedores técnicos e o time interno cabem todos na faixa contratada
                — e ninguém precisa ficar de fora para economizar.
              </p>
            </div>
          </div>
        </EloReveal>
      </div>

      <EloReveal delay={0.14}>
        <div className="mt-6 border border-[#D51920]/25 bg-[#D51920]/[0.04] p-8 text-center md:p-12">
          <Unlock className="mx-auto h-6 w-6 text-[#E8343C]" />
          <p className="mt-6 font-sans text-[26px] font-bold tracking-[-0.02em] text-[#EDF0EF] md:text-[34px]">
            Sem contrato de fidelidade.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#9BA5A7]">
            A mensalidade é mês a mês. A Videplast fica porque o sistema entrega, não porque
            assinou.
          </p>
        </div>
      </EloReveal>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {investment.paymentConditions && (
          <EloReveal>
            <EloPanel className="h-full">
              <EloEyebrow>Condições</EloEyebrow>
              <ul className="mt-5 space-y-2.5">
                {investment.paymentConditions.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-[#9BA5A7]">
                    <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 bg-[#D51920]/70" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </EloPanel>
          </EloReveal>
        )}
        {investment.exclusions && (
          <EloReveal delay={0.06}>
            <EloPanel className="h-full">
              <EloEyebrow>Fora do valor</EloEyebrow>
              <ul className="mt-5 space-y-3">
                {investment.exclusions.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-[#9BA5A7]">
                    <Minus className="mt-[4px] h-3 w-3 flex-shrink-0 text-[#6B7576]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </EloPanel>
          </EloReveal>
        )}
      </div>

      {investment.notes && (
        <EloReveal delay={0.1}>
          <EloPanel className="mt-5">
            <EloEyebrow>Observações</EloEyebrow>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {investment.notes.map((n, i) => (
                <p key={i} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-[#9BA5A7]">
                  <Info className="mt-[3px] h-3.5 w-3.5 flex-shrink-0 text-[#6B7576]" />
                  <span>{n}</span>
                </p>
              ))}
            </div>
          </EloPanel>
        </EloReveal>
      )}
    </EloSection>
  );
}
