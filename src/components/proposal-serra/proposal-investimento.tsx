"use client";

import {
  Instagram, PenTool, MapPin, Layout, Camera, Award, Check, X, MessageCircle, type LucideIcon,
} from "lucide-react";
import type { Proposal, ProposalService } from "@/lib/proposals-data";
import { SerraSection, SerraHeader, SerraReveal, SerraPanel, SerraCarimbo, serif } from "./serra-ui";

/* ================================================================
   Primeiro o preço de cada serviço, como se fosse contratado
   separado. Só depois o pacote. A diferença entre os dois números
   é o argumento — e ela precisa ser vista, não afirmada.
   ================================================================ */

const ICONES: Record<string, LucideIcon> = {
  Instagram, PenTool, MapPin, Layout, Camera, Award,
};

export function ProposalSerraServicos({ services }: { services: ProposalService[] }) {
  return (
    <SerraSection id="servicos" tone="darker">
      <SerraHeader
        eyebrow="Os serviços, um a um"
        title="Cada frente tem preço próprio."
        accent="Porque cada uma dá trabalho por si."
        lead="Antes de falar em pacote, vale ver o que há dentro dele. São seis frentes, e qualquer agência cobraria por cada uma separadamente. Estes são os valores que a ArtDesign pratica quando o serviço é contratado sozinho."
      />

      <SerraReveal>
        <div className="mt-14 divide-y divide-[#2A3A33] border-y border-[#2A3A33]">
          {services.map((s, i) => {
            const Icon = ICONES[s.icon] ?? Award;
            return (
              <div key={s.name} className="grid min-w-0 gap-5 py-8 lg:grid-cols-[minmax(0,1fr)_170px] lg:gap-10">
                <div className="min-w-0">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#2A3A33] bg-[#141D19]">
                      <Icon className="h-4 w-4 text-[#C8552F]" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-mono text-[11px] tabular-nums text-[#63756C]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className={`min-w-0 ${serif} text-[19px] font-bold leading-snug text-[#EDF2EE] md:text-[22px]`}>
                          {s.name}
                        </h3>
                      </div>
                      <p className="mt-2.5 max-w-[70ch] text-[14.5px] leading-relaxed text-[#93A69C]">
                        {s.description}
                      </p>
                      <ul className="mt-4 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
                        {s.items.map((it) => (
                          <li key={it} className="flex items-start gap-2.5 text-[13px] leading-snug text-[#93A69C]">
                            <span className="mt-[7px] h-1 w-1 flex-shrink-0 bg-[#C8552F]" />
                            <span className="min-w-0">{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="min-w-0 lg:pt-1 lg:text-right">
                  <p className={`${serif} text-[26px] font-bold leading-none text-[#EDF2EE] md:text-[30px]`}>
                    {s.price}
                  </p>
                  <p className="mt-1.5 text-[11.5px] leading-snug text-[#63756C]">
                    {s.priceNote ?? (s.priceType === "project" ? "por evento" : "por mês, avulso")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </SerraReveal>
    </SerraSection>
  );
}

/* ==================== O PACOTE ==================== */

export function ProposalSerraPacote({ proposal }: { proposal: Proposal }) {
  const inv = proposal.investment;

  return (
    <SerraSection id="investimento">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[55%] w-[80%] -translate-x-1/2 rounded-full bg-[#C8552F]/[0.08] blur-[180px]" />

      <SerraHeader
        centro
        eyebrow="O investimento"
        title="Somando tudo, dá R$ 2.440 por mês."
        accent="O pacote custa menos da metade."
        lead="A ArtDesign trabalha com pacote fechado porque as seis frentes se alimentam: a foto do curso vira post, o post vira novidade no Google, a arte do banner reaproveita o padrão da marca. Separadas, elas custam mais e rendem menos."
      />

      <SerraReveal>
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="divide-y divide-[#2A3A33] border-y border-[#2A3A33]">
            {inv.breakdown?.map((b) => (
              <div key={b.item} className="flex min-w-0 items-baseline justify-between gap-4 py-3.5">
                <span className="min-w-0 text-[14px] text-[#93A69C]">{b.item}</span>
                <span className="flex-shrink-0 font-mono text-[14px] tabular-nums text-[#93A69C]">
                  {b.value}
                </span>
              </div>
            ))}
            <div className="flex min-w-0 items-baseline justify-between gap-4 py-5">
              <span className="min-w-0 font-sans text-[15px] font-semibold text-[#EDF2EE]">
                Soma dos serviços avulsos
              </span>
              <span className={`flex-shrink-0 ${serif} text-[26px] font-bold leading-none tabular-nums text-[#EDF2EE] line-through decoration-[#C8552F] decoration-2`}>
                {inv.originalPrice}
              </span>
            </div>
          </div>
        </div>
      </SerraReveal>

      <SerraReveal delay={0.1}>
        <div className="mx-auto mt-10 max-w-3xl border-2 border-[#C8552F] bg-[#141D19] p-8 text-center md:p-12">
          <div className="flex justify-center">
            <SerraCarimbo>Pacote completo</SerraCarimbo>
          </div>
          <p className={`mt-7 ${serif} text-[56px] font-bold leading-none tracking-[-0.03em] tabular-nums text-[#C8552F] md:text-[84px]`}>
            {inv.totalMonthly}
          </p>
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-[#93A69C]">
            por mês · tudo incluído
          </p>
          <p className="mx-auto mt-7 max-w-[54ch] text-[15px] leading-relaxed text-[#93A69C]">
            Economia de{" "}
            <span className="font-semibold text-[#EDF2EE]">R$ 1.240 por mês</span> em relação à soma
            dos serviços avulsos — <span className="font-semibold text-[#EDF2EE]">R$ 14.880 ao ano</span>.
            Sem taxa de implantação e sem fidelidade.
          </p>
        </div>
      </SerraReveal>

      <SerraReveal delay={0.16}>
        <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
          <SerraPanel tone="mato">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5A9E6F]">
              Está incluído
            </span>
            <ul className="mt-5 space-y-2.5">
              {inv.packageIncludes?.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] leading-snug text-[#EDF2EE]">
                  <Check className="mt-[3px] h-3.5 w-3.5 flex-shrink-0 text-[#5A9E6F]" strokeWidth={2.8} />
                  <span className="min-w-0">{t}</span>
                </li>
              ))}
            </ul>
          </SerraPanel>

          <SerraPanel>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#93A69C]">
              Não está incluído — dito agora, não na fatura
            </span>
            <ul className="mt-5 space-y-3">
              {inv.exclusions?.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#93A69C]">
                  <X className="mt-[3px] h-3.5 w-3.5 flex-shrink-0 text-[#63756C]" strokeWidth={2.6} />
                  <span className="min-w-0">{t}</span>
                </li>
              ))}
            </ul>

            <span className="mt-7 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#93A69C]">
              Condições
            </span>
            <ul className="mt-4 space-y-2">
              {inv.paymentConditions?.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#EDF2EE]">
                  <span className="mt-[7px] h-1 w-1 flex-shrink-0 bg-[#C8552F]" />
                  <span className="min-w-0">{t}</span>
                </li>
              ))}
            </ul>
          </SerraPanel>
        </div>
      </SerraReveal>

      <SerraReveal delay={0.2}>
        <div className="mx-auto mt-8 max-w-5xl space-y-3">
          {inv.notes?.map((n) => (
            <p key={n} className="border-l-2 border-[#2A3A33] pl-5 text-[13.5px] leading-relaxed text-[#63756C]">
              {n}
            </p>
          ))}
        </div>
      </SerraReveal>
    </SerraSection>
  );
}

/* ==================== COMO TRABALHAMOS ==================== */

const FLUXO = [
  { n: "01", q: "Até o dia 25", t: "O calendário do mês seguinte", d: "A diretoria recebe o plano completo — data, formato e assunto de cada publicação — e aprova antes de o mês começar. Nada vai ao ar sem vocês saberem." },
  { n: "02", q: "Durante o mês", t: "Produção e publicação", d: "Arte, texto e agendamento por nossa conta. Comentários e mensagens respondidos em dias úteis, com as dúvidas técnicas encaminhadas à secretaria." },
  { n: "03", q: "Quando houver evento", t: "A ArtDesign vai até lá", d: "Curso, assembleia, dia de campo ou entrega de certificados: captamos foto e vídeo no local. As imagens ficam num banco que é da entidade." },
  { n: "04", q: "Quando precisar", t: "Material impresso em arte final", d: "Pediu banner para o curso? Sai no padrão da marca, pronto para a gráfica, dentro da mensalidade — sem orçamento extra a cada peça." },
  { n: "05", q: "No fim do mês", t: "Relatório sem enrolação", d: "Quantas pessoas foram alcançadas, quantas passaram a seguir, quantas mandaram mensagem e quais posts trouxeram mais gente. Uma página, em português." },
];

export function ProposalSerraFluxo() {
  return (
    <SerraSection id="fluxo" tone="darker">
      <SerraHeader
        eyebrow="Como trabalhamos"
        title="Um mês de trabalho,"
        accent="do dia 25 ao dia 25."
        lead="Entidade que presta contas em assembleia não pode ser surpreendida pelo próprio perfil. Por isso o ciclo começa com aprovação e termina com relatório."
      />

      <SerraReveal>
        <div className="relative mt-14">
          <div className="pointer-events-none absolute bottom-6 left-[19px] top-6 hidden w-px bg-gradient-to-b from-[#C8552F]/50 via-[#2A3A33] to-[#C8552F]/50 md:block" />
          <div className="space-y-4">
            {FLUXO.map((f) => (
              <div key={f.n} className="relative md:pl-14">
                <span className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center border border-[#C8552F]/45 bg-[#0A100D] font-mono text-[11px] tabular-nums text-[#C8552F] md:flex">
                  {f.n}
                </span>
                <div className="min-w-0 border-l-2 border-[#C8552F]/40 bg-[#141D19] p-6 md:p-7">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#C8552F]">
                    {f.q}
                  </span>
                  <p className={`mt-3 ${serif} text-[19px] font-bold leading-snug text-[#EDF2EE] md:text-[22px]`}>
                    {f.t}
                  </p>
                  <p className="mt-3 max-w-[80ch] text-[14.5px] leading-relaxed text-[#93A69C]">
                    {f.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SerraReveal>
    </SerraSection>
  );
}

/* ==================== FECHAMENTO ==================== */

export function ProposalSerraCta({ proposal }: { proposal: Proposal }) {
  const msg = encodeURIComponent(
    "Olá! Sou do Sindicato Rural de Santa Cecília e vi a proposta de presença digital da ArtDesign. Podemos conversar?"
  );
  return (
    <SerraSection id="fechar">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8552F]/[0.09] blur-[190px]" />

      <div className="mx-auto max-w-4xl text-center">
        <SerraReveal>
          <p className={`${serif} text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#EDF2EE] md:text-[52px]`}>
            {proposal.closingQuestion}
          </p>
        </SerraReveal>

        <SerraReveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-[60ch] text-[16px] leading-relaxed text-[#93A69C] md:text-[17.5px]">
            O trabalho não é construir reputação — ela já existe, e tem 52 anos. É fazer com que ela
            apareça onde o produtor procura hoje: no celular, antes de pegar a estrada.
          </p>
        </SerraReveal>

        <SerraReveal delay={0.18}>
          <div className="mt-12 flex flex-col items-center gap-5">
            <a
              href={`https://wa.me/${proposal.whatsappNumber}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C8552F] px-9 py-5 font-sans text-[15px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#E0703F]"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
              Falar com a ArtDesign
            </a>
            <p className="font-mono text-[12px] tracking-[0.12em] text-[#63756C]">
              Sem taxa de implantação · sem fidelidade · R$ 1.200 por mês
            </p>
          </div>
        </SerraReveal>

        <SerraReveal delay={0.24}>
          <div className="mt-16 border-t border-[#2A3A33] pt-10">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#63756C]">
              Agência ArtDesign
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-[#63756C]">
              Proposta preparada para o Sindicato Rural de Santa Cecília a partir de pesquisa
              pública realizada em 15 de setembro de 2026.
            </p>
          </div>
        </SerraReveal>
      </div>
    </SerraSection>
  );
}
