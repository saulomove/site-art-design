"use client";

import { Car, Mic, FileText, Bell, Package, TrendingUp, type LucideIcon } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloPanel, EloEyebrow } from "./elo-ui";

interface Etapa {
  icon: LucideIcon;
  q: string;
  t: string;
  hoje: string;
  elo: string;
}

const JORNADA: readonly Etapa[] = [
  {
    icon: Car,
    q: "09:30 · Capinzal/SC",
    t: "O Marcos entra na BRF",
    hoje: "A Videplast fica sabendo que ele foi — se ele contar. E vai saber semana que vem, no relatório que cada um manda de um jeito.",
    elo: "Ele dá check-in no app. O horário e o cliente ficam registrados, sem rastreamento contínuo: é declaração, não vigilância.",
  },
  {
    icon: Mic,
    q: "10:18 · no carro",
    t: "Manda um áudio de 47 segundos",
    hoje: "O que ele falou some. Vira memória, e memória de quarenta e sete segundos dura até a próxima visita.",
    elo: "O Elo transcreve, identifica a BRF na carteira dele, extrai assunto, resultado e próxima ação, e pergunta só o que faltou.",
  },
  {
    icon: FileText,
    q: "10:19 · um toque depois",
    t: "O relatório existe",
    hoje: "Não existe. Na melhor das hipóteses vira uma linha num Excel que ninguém abre.",
    elo: "Relatório completo na ficha da BRF, com o áudio anexado. Quatorze caracteres digitados. A gerência vê em tempo real.",
  },
  {
    icon: Bell,
    q: "19/09 · nove dias depois",
    t: "O prazo chega",
    hoje: "Se alguém lembrar. E o laudo do FFS não tem dono nem data em sistema nenhum.",
    elo: "O Elo avisa o Marcos na véspera e avisa a qualidade. Se o prazo passar, sobe para a gerência comercial.",
  },
  {
    icon: Package,
    q: "quando a amostra for",
    t: "A cotação de termoformado vira amostra",
    hoje: "Manda, produz, custa, entrega — e o desfecho não volta. &ldquo;E o resultado dessa amostra? Cadê?&rdquo;",
    elo: "A amostra é etapa do funil, com aprovação, reprovação e motivo estruturado. O Elo pergunta ao cliente se recebeu.",
  },
  {
    icon: TrendingUp,
    q: "no fechamento do mês",
    t: "O senhor abre o painel",
    hoje: "Vê faturamento e comissão. Não vê visita, não vê cotação perdida, não vê cliente esfriando antes de virar queda.",
    elo: "Vê quem foi visitado e quem não foi, o que está no funil, a amostra parada e o cliente caindo antes de virar −38%.",
  },
];

export function ProposalEloJornada() {
  return (
    <EloSection id="jornada">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[50%] w-[50%] rounded-full bg-[#D51920]/[0.05] blur-[160px]" />

      <EloSectionHeader
        eyebrow="Uma visita, do começo ao fim"
        title="O mesmo dia,"
        accent="com e sem o Elo."
        lead="Esta é a visita do Marcos Delazeri à BRF de Capinzal em 11 de setembro — a mesma que aparece no protótipo. Acompanhe o que acontece hoje e o que passaria a acontecer."
      />

      <div className="relative">
        <div className="pointer-events-none absolute bottom-10 left-[23px] top-10 hidden w-px bg-gradient-to-b from-[#D51920]/40 via-[#272C2E] to-[#D51920]/40 md:block" />

        <div className="space-y-4">
          {JORNADA.map((e, i) => {
            const Icon = e.icon;
            return (
              <EloReveal key={e.t} delay={Math.min(i, 6) * 0.05}>
                <div className="relative md:pl-16">
                  <div className="absolute left-0 top-7 hidden h-12 w-12 items-center justify-center border border-[#D51920]/40 bg-[#0E1011] md:flex">
                    <Icon className="h-4 w-4 text-[#E8343C]" />
                  </div>

                  <div className="border-l-2 border-[#D51920]/40 bg-[#15181A] p-7 md:p-8">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-[11px] text-[#E8343C]">{e.q}</span>
                    </div>
                    <h3 className="mt-3 font-sans text-[20px] font-semibold leading-snug text-[#EDF0EF] md:text-[23px]">
                      {e.t}
                    </h3>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <div className="border-l border-[#272C2E] pl-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6B7576]">
                          Hoje
                        </p>
                        <p
                          className="mt-2.5 text-[14px] leading-relaxed text-[#6B7576]"
                          dangerouslySetInnerHTML={{ __html: e.hoje }}
                        />
                      </div>
                      <div className="border-l-2 border-[#D51920]/50 pl-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8343C]">
                          Com o Elo
                        </p>
                        <p className="mt-2.5 text-[14px] leading-relaxed text-[#EDF0EF]">{e.elo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </EloReveal>
            );
          })}
        </div>
      </div>

      <EloReveal delay={0.1}>
        <EloPanel tone="red" className="mt-8">
          <EloEyebrow>O que muda de verdade</EloEyebrow>
          <p className="mt-5 max-w-4xl font-sans text-[21px] font-semibold leading-snug text-[#EDF0EF] md:text-[27px]">
            Nada no dia do Marcos fica mais difícil. Ele continua dirigindo, visitando e falando —
            só que agora o que ele fala não some.
          </p>
        </EloPanel>
      </EloReveal>
    </EloSection>
  );
}
