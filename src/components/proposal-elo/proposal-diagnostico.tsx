"use client";

import { Check, X, Mic, ArrowRight } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloPanel, EloEyebrow } from "./elo-ui";

const ESTADO = [
  { t: "Entrada de pedido", ok: true, d: "Portal interno que é front-end do SAP. Ao salvar, grava no ERP e dispara a produção. O representante já tem usuário e e-mail Videplast." },
  { t: "Comissionamento", ok: true, d: "A comissão é imputada no ato do pedido e já contabilizada. No fim do mês o sistema gera o relatório, o pedido de compra e avisa no Teams." },
  { t: "BI", ok: true, d: "Power BI no front, extração e tratamento em Microsoft Fabric, tudo desenvolvido internamente." },
  { t: "Cotação", ok: false, d: "Não existe. Tudo que acontece antes do pedido firme — proposta, negociação, recusa — não tem onde ser registrado." },
  { t: "Visita", ok: false, d: "Nenhum sistema. Relatório livre por Excel, corpo de e-mail, papel ou foto. Cada representante de um jeito." },
  { t: "Amostra", ok: false, d: "Pede, produz, envia, custa — e o desfecho não volta. Aprovada ou reprovada, e por quê, ninguém sabe." },
  { t: "Saída de representante", ok: false, d: "A carteira passa adiante com histórico de pedido e nada mais. Anos de relacionamento vão junto com quem saiu." },
];

export function ProposalEloDiagnostico() {
  return (
    <EloSection id="diagnostico">
      <EloSectionHeader
        eyebrow="O diagnóstico"
        title="Metade já funciona."
        accent="Não vamos tocar nela."
        lead="O risco de um projeto assim é prometer resolver o que já está resolvido. O que o César descreveu na reunião está de pé e continua como está — o Elo trata exatamente do que não existe."
      />

      <div className="grid gap-3 lg:grid-cols-2">
        {ESTADO.map((e, i) => (
          <EloReveal key={e.t} delay={Math.min(i, 6) * 0.04}>
            <div
              className={`flex h-full gap-4 border p-6 ${
                e.ok ? "border-[#47A87D]/25 bg-[#47A87D]/[0.04]" : "border-[#E8343C]/30 bg-[#E8343C]/[0.05]"
              }`}
            >
              <span className="mt-[3px] flex-shrink-0">
                {e.ok ? (
                  <Check className="h-4 w-4 text-[#47A87D]" />
                ) : (
                  <X className="h-4 w-4 text-[#E8343C]" />
                )}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-sans text-[16px] font-semibold text-[#EDF0EF]">{e.t}</h3>
                  <span
                    className={`font-sans text-[9.5px] font-semibold uppercase tracking-[0.14em] ${
                      e.ok ? "text-[#47A87D]" : "text-[#E8343C]"
                    }`}
                  >
                    {e.ok ? "já funciona" : "não existe"}
                  </span>
                </div>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[#9BA5A7]">{e.d}</p>
              </div>
            </div>
          </EloReveal>
        ))}
      </div>

      <EloReveal delay={0.1}>
        <EloPanel className="mt-8">
          <EloEyebrow>O recorte do projeto</EloEyebrow>
          <p className="mt-5 max-w-4xl text-[16px] leading-relaxed text-[#EDF0EF] md:text-[17px]">
            O Elo não disputa o pedido, não mexe na comissão e não substitui o BI. Ele ocupa o
            espaço entre a visita e o pedido firme, e o espaço depois da entrega — os dois lugares
            onde hoje não há registro nenhum.
          </p>
        </EloPanel>
      </EloReveal>
    </EloSection>
  );
}

/* ==================== O ÁUDIO ==================== */

export function ProposalEloAudio() {
  return (
    <EloSection id="audio" tone="darker">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[50%] w-[50%] rounded-full bg-[#D51920]/[0.07] blur-[160px]" />

      <EloSectionHeader
        eyebrow="O coração do Elo"
        title="O representante fala."
        accent="O Elo escreve."
        lead="É o único ponto do projeto que nenhum CRM de mercado tem. Kanban, funil e painel todo mundo faz — transformar o áudio de quem está saindo da fábrica em relatório estruturado, e perguntar de volta só o que faltou, não."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {[
          { n: "01", t: "Ele manda um áudio", d: "Do carro, saindo do cliente, como já manda para todo mundo. Pelo WhatsApp, no número da Videplast. Sem instalar nada, sem abrir formulário, sem esperar chegar em casa." },
          { n: "02", t: "O Elo transcreve e entende", d: "Identifica o cliente citado, a data, o tipo de contato, o assunto, o resultado e o próximo passo. Cruza com o histórico da carteira para completar o que o áudio não disse." },
          { n: "03", t: "Pergunta só o que faltou", d: "Uma pergunta por vez, na mesma conversa. Nunca pergunta o que dá para inferir. E o áudio original fica anexado ao relatório — se a máquina errar, o senhor ouve." },
        ].map((p, i) => (
          <EloReveal key={p.n} delay={i * 0.07}>
            <div className="h-full border-t-2 border-[#D51920] bg-[#15181A] p-7">
              <p className="font-mono text-[11px] tracking-[0.18em] text-[#E8343C]">{p.n}</p>
              <h3 className="mt-4 font-sans text-[19px] font-semibold leading-snug text-[#EDF0EF]">{p.t}</h3>
              <p className="mt-3.5 text-[14px] leading-relaxed text-[#9BA5A7]">{p.d}</p>
            </div>
          </EloReveal>
        ))}
      </div>

      <EloReveal delay={0.12}>
        <div className="mt-8 grid gap-6 border-2 border-[#D51920]/40 bg-[#16191A] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 flex-shrink-0 text-[#E8343C]" />
              <EloEyebrow>Por que isso resolve o problema cultural</EloEyebrow>
            </div>
            <p className="mt-6 max-w-2xl font-sans text-[22px] font-semibold leading-snug text-[#EDF0EF] md:text-[28px]">
              &ldquo;Tem representante que tá há 30 anos aqui. Eu não mudo esse cara mais. Nem no
              Excel.&rdquo;
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#9BA5A7]">
              O senhor disse isso aos dez minutos e vinte e oito segundos, e está certo. Por isso o
              Elo não começa por uma tela. Começa por um áudio no WhatsApp — a única ferramenta que
              o representante de trinta anos já usa todo dia, sem treinamento e sem resistência.
              <strong className="font-semibold text-[#EDF0EF]"> Mudança de comportamento exigida: nenhuma.</strong>
            </p>
          </div>
          <div className="flex-shrink-0 border-t border-[#272C2E] pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="font-sans text-[52px] font-bold leading-none tracking-[-0.03em] text-[#E8343C] md:text-[64px]">
              14
            </p>
            <p className="mt-4 max-w-[190px] text-[13.5px] leading-relaxed text-[#9BA5A7]">
              caracteres digitados pelo representante no exemplo ao lado. O resto do relatório saiu
              do áudio e do histórico.
            </p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[11px] text-[#6B7576]">
              veja na próxima seção <ArrowRight className="h-3 w-3" />
            </p>
          </div>
        </div>
      </EloReveal>
    </EloSection>
  );
}
