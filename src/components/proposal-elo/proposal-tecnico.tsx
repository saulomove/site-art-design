"use client";

import { Tag, ShieldCheck, Database, Zap, Lock, Eye } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloPanel, EloEyebrow, EloQuote } from "./elo-ui";
import { EtiquetaFluxo } from "./etiqueta-fluxo";

/* ==================== A ETIQUETA ==================== */

export function ProposalEloEtiqueta() {
  return (
    <EloSection id="etiqueta">
      <EloSectionHeader
        eyebrow="A questão da ingerência"
        title="O representante decide"
        accent="o que a Videplast vê."
        lead="O senhor levantou isso sozinho na reunião: o representante é pessoa jurídica, não funcionário. Um sistema que pareça vigilância não é adotado — é sabotado. A solução está numa função que o WhatsApp já tem."
      />

      <EloReveal>
        <div className="mb-14">
          <EtiquetaFluxo />
        </div>
      </EloReveal>

      <EloReveal delay={0.06}>
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="border border-[#272C2E] bg-[#15181A] p-8">
            <div className="flex items-center gap-3">
              <Tag className="h-5 w-5 flex-shrink-0 text-[#E8343C]" />
              <EloEyebrow>Como funciona</EloEyebrow>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-[#9BA5A7]">
              O representante marca a conversa do cliente com a etiqueta{" "}
              <strong className="font-semibold text-[#EDF0EF]">&ldquo;Cliente Videplast&rdquo;</strong>{" "}
              no WhatsApp Business dele. A partir dali, as mensagens daquela conversa entram no Elo.
              As outras conversas — família, outras representadas, o que for — são descartadas na
              entrada e nunca chegam a ser gravadas.
            </p>
            <div className="mt-7 space-y-3 border-t border-[#272C2E] pt-6">
              {[
                ["Ele etiqueta", "a conversa do cliente, no aparelho dele"],
                ["O Elo é avisado", "no mesmo instante, e passa a acompanhar só aquele contato"],
                ["Ele desetiqueta", "e o Elo para de acompanhar. Sem pedir autorização a ninguém"],
              ].map(([a, b], i) => (
                <div key={a} className="flex gap-4">
                  <span className="font-mono text-[11px] text-[#6B7576]">0{i + 1}</span>
                  <p className="text-[14px] leading-snug text-[#9BA5A7]">
                    <strong className="font-semibold text-[#EDF0EF]">{a}</strong> {b}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <EloPanel tone="green">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 flex-shrink-0 text-[#47A87D]" />
                <EloEyebrow>O que isso resolve</EloEyebrow>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-[#9BA5A7]">
                A etiqueta vira o <strong className="font-semibold text-[#EDF0EF]">consentimento
                operacional do PJ</strong>. O representante não é monitorado — ele escolhe o que
                compartilhar, cliente por cliente. Isso transforma a conversa de adoção: em vez de
                impor, a Videplast oferece uma ferramenta que ele controla.
              </p>
            </EloPanel>

            <EloPanel>
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 flex-shrink-0 text-[#9BA5A7]" />
                <EloEyebrow>E o que precisa ser dito com precisão</EloEyebrow>
              </div>
              <p className="mt-5 text-[14px] leading-relaxed text-[#9BA5A7]">
                A conexão é com a conta inteira e o filtro é do lado do Elo. Então a frase honesta é{" "}
                <em className="text-[#EDF0EF]">&ldquo;só armazenamos o que você etiquetar, e a
                etiqueta é sua&rdquo;</em> — nunca &ldquo;não conseguimos ver suas outras
                conversas&rdquo;, que não se sustenta numa pergunta do jurídico. O Elo mantém trilha
                de auditoria comprovando que nada fora da etiqueta foi gravado, e o próprio
                representante pode consultá-la.
              </p>
            </EloPanel>
          </div>
        </div>
      </EloReveal>

      <EloReveal delay={0.1}>
        <div className="mt-8">
          <EloQuote t="11:00" who="Fernando" hot>
            A gente tem que cuidar um pouco com a questão da ingerência. Ele é representante, ele
            não é um funcionário da Videplast. Mas eu precisava ter um pouco mais da certeza do
            atendimento dele.
          </EloQuote>
        </div>
      </EloReveal>
    </EloSection>
  );
}

/* ==================== ARQUITETURA ==================== */

const FASES = [
  {
    n: "Fase 1",
    t: "Autônomo, sem depender do TI",
    q: "da assinatura ao go-live",
    icon: Database,
    itens: [
      "Base própria do Elo, alimentada por exportação do time comercial",
      "Nenhuma interface, nenhum projeto de TI, nenhuma fila",
      "Os três módulos funcionando em uso real desde a primeira quinzena",
      "A carteira cresce sozinha conforme os representantes usam",
    ],
  },
  {
    n: "Fase 2",
    t: "Integração de leitura ao SAP",
    q: "a partir de 20 de outubro",
    icon: Zap,
    itens: [
      "Carga diária de cadastro: clientes, produtos, representantes e tabela de preço",
      "Consulta em tempo real do resumo do cliente, direto na ficha 360",
      "Interfaces construídas no BTP sobre as tabelas já definitivas do S/4 HANA",
      "Somente leitura — nada é escrito no SAP",
    ],
  },
];

export function ProposalEloArquitetura() {
  return (
    <EloSection id="arquitetura" tone="darker">
      <EloSectionHeader
        eyebrow="Arquitetura"
        title="O projeto não espera"
        accent="a integração ficar pronta."
        lead="César, esta seção é para o senhor. A conversão para o S/4 HANA muda tabelas e campos, e o middleware terá de ser reconfigurado ponto a ponto. Construir interface no ECC agora é construir duas vezes — então o Elo sobe sem depender disso."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {FASES.map((f, i) => {
          const Icon = f.icon;
          return (
            <EloReveal key={f.n} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col border p-8 ${
                  i === 0 ? "border-[#D51920]/40 bg-[#16191A]" : "border-[#272C2E] bg-[#15181A]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <Icon className={`h-5 w-5 ${i === 0 ? "text-[#E8343C]" : "text-[#9BA5A7]"}`} />
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#6B7576]">
                    {f.q}
                  </span>
                </div>
                <p className={`mt-6 font-mono text-[11px] tracking-[0.18em] ${i === 0 ? "text-[#E8343C]" : "text-[#6B7576]"}`}>
                  {f.n}
                </p>
                <h3 className="mt-2.5 font-sans text-[21px] font-semibold leading-snug text-[#EDF0EF]">
                  {f.t}
                </h3>
                <ul className="mt-6 flex-1 space-y-3">
                  {f.itens.map((x) => (
                    <li key={x} className="flex items-start gap-3 text-[14px] leading-snug text-[#9BA5A7]">
                      <span className={`mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 ${i === 0 ? "bg-[#D51920]" : "bg-[#6B7576]"}`} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </EloReveal>
          );
        })}
      </div>

      <EloReveal delay={0.12}>
        <EloPanel className="mt-6">
          <div className="flex items-center gap-3">
            <Lock className="h-5 w-5 flex-shrink-0 text-[#9BA5A7]" />
            <EloEyebrow>Três compromissos técnicos</EloEyebrow>
          </div>
          <div className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-3">
            {[
              { t: "Somente leitura", d: "O Elo não grava nada no SAP. O pedido continua entrando pelo portal que já funciona, e o comissionamento segue intocado." },
              { t: "Duas velocidades", d: "Cadastro por carga diária, que tolera atraso. Resumo do cliente em tempo real, porque o representante precisa da situação de agora — a separação que o senhor mesmo fez na reunião." },
              { t: "Os dados são de vocês", d: "Exportáveis a qualquer momento em formato aberto, inclusive no encerramento do contrato. Isso está escrito, não subentendido." },
            ].map((c) => (
              <div key={c.t} className="border-l-2 border-[#272C2E] pl-5">
                <h4 className="font-sans text-[15px] font-semibold text-[#EDF0EF]">{c.t}</h4>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#9BA5A7]">{c.d}</p>
              </div>
            ))}
          </div>
        </EloPanel>
      </EloReveal>

      <EloReveal delay={0.16}>
        <p className="mt-8 max-w-4xl text-[14px] leading-relaxed text-[#6B7576]">
          A lista completa das entidades e campos que o Elo precisa ler — separada por carga e por
          tempo real, com o que explicitamente <em>não</em> precisamos — está no anexo técnico que
          acompanha esta proposta. Ela existe para dimensionar esforço, não para fechar escopo.
        </p>
      </EloReveal>
    </EloSection>
  );
}
