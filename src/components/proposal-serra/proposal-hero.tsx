"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Search, Instagram, Facebook, MapPin, X, Check } from "lucide-react";
import type { Proposal } from "@/lib/proposals-data";
import { SerraSection, SerraHeader, SerraReveal, SerraEyebrow, SerraRule, SerraPanel, serif } from "./serra-ui";

/* ================================================================
   Abre com o contraste que define a proposta: 52 anos de casa,
   zero presença digital. Os números sobem quando entram em cena.
   ================================================================ */

function Conta({ ate, dur = 1.5 }: { ate: number; dur?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visivel = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visivel) return;
    const c = animate(0, ate, {
      duration: dur,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [visivel, ate, dur]);
  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString("pt-BR")}
    </span>
  );
}

const KPIS = [
  { n: 52, s: "", l: "anos de Sindicato", d: "fundado em 19 de agosto de 1974" },
  { n: 3, s: "", l: "municípios na base", d: "Santa Cecília · Ponte Alta do Norte · Timbó Grande" },
  { n: 450, s: "+", l: "cursos gratuitos por mês", d: "o SENAR/SC oferta, o Sindicato inscreve" },
  { n: 0, s: "", l: "perfis na internet", d: "nem Instagram, nem Facebook, nem Google", zero: true },
];

export function ProposalSerraHero({ proposal }: { proposal: Proposal }) {
  return (
    <section className="relative overflow-hidden bg-[#0D1411] pb-20 pt-28 md:pb-28 md:pt-36">
      {/* névoa */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[70%] w-[70%] rounded-full bg-[#C8552F]/[0.07] blur-[190px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[60%] w-[60%] rounded-full bg-[#5A9E6F]/[0.05] blur-[180px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          <span className={`${serif} text-[17px] font-bold tracking-tight text-[#EDF2EE]`}>
            Sindicato Rural de Santa Cecília
          </span>
          <span className="h-4 w-px bg-[#2A3A33]" />
          <SerraEyebrow>Proposta · presença digital · setembro de 2026</SerraEyebrow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 origin-left"
        >
          <SerraRule />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.14 }}
          className={`mt-8 max-w-[20ch] ${serif} text-[36px] font-bold leading-[1.04] tracking-[-0.02em] text-[#EDF2EE] md:text-[66px]`}
        >
          São 52 anos de Sindicato.{" "}
          <span className="text-[#C8552F]">E nenhum minuto de internet.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[#93A69C] md:text-[19px]"
        >
          Presidente {proposal.contactName}, esta proposta começou com uma busca. Procuramos o Sindicato Rural de
          Santa Cecília no Google, no Instagram e no Facebook antes de escrever qualquer coisa.{" "}
          <span className="text-[#EDF2EE]">
            O que encontramos está logo abaixo — e é exatamente o que um produtor de Timbó Grande
            encontra hoje.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 gap-px bg-[#2A3A33] md:grid-cols-4"
        >
          {KPIS.map((k) => (
            <div
              key={k.l}
              className={`min-w-0 p-6 md:p-7 ${k.zero ? "bg-[#C8552F]/[0.08]" : "bg-[#0D1411]"}`}
            >
              <p
                className={`${serif} text-[34px] font-bold leading-none tracking-[-0.02em] md:text-[44px] ${
                  k.zero ? "text-[#C8552F]" : "text-[#EDF2EE]"
                }`}
              >
                <Conta ate={k.n} />
                {k.s}
              </p>
              <p
                className={`mt-4 text-[13.5px] font-semibold leading-snug ${
                  k.zero ? "text-[#C8552F]" : "text-[#EDF2EE]"
                }`}
              >
                {k.l}
              </p>
              <p className="mt-1.5 text-[12px] leading-snug text-[#63756C]">{k.d}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== O QUE A BUSCA DEVOLVEU ==================== */

const ACHADOS = [
  {
    Icon: Instagram,
    canal: "Instagram",
    busca: "sindicato rural santa cecília",
    achou: false,
    r: "Nenhum perfil oficial. Aparecem sindicatos de outras cidades e de outros estados.",
  },
  {
    Icon: Facebook,
    canal: "Facebook",
    busca: "Sindicato Rural de Santa Cecília",
    achou: false,
    r: "Nenhuma página oficial. O primeiro resultado é uma entidade de Santa Cecília do Sul, no Rio Grande do Sul.",
  },
  {
    Icon: MapPin,
    canal: "Google Meu Negócio",
    busca: "sindicato rural santa cecília sc",
    achou: false,
    r: "Sem perfil verificado. Quem responde pelo Sindicato no Google são sites de terceiros: Solutudo, Guia Múltiplo, Yelp e Guia Já.",
  },
  {
    Icon: Search,
    canal: "O que o produtor vê",
    busca: "—",
    achou: false,
    r: "Endereço e telefone repetidos por agregadores, sem foto, sem horário de atendimento, sem uma única palavra escrita pelo próprio Sindicato.",
  },
];

export function ProposalSerraBusca() {
  return (
    <SerraSection id="busca" tone="darker">
      <SerraHeader
        eyebrow="O diagnóstico"
        title="Não estamos supondo."
        accent="Nós procuramos."
        lead="Em 15 de setembro de 2026 fizemos as buscas que qualquer produtor faria. Este é o resultado, canal por canal, sem retoque."
      />

      <SerraReveal>
        <div className="mt-14 divide-y divide-[#2A3A33] border-y border-[#2A3A33]">
          {ACHADOS.map(({ Icon, canal, busca, r }) => (
            <div
              key={canal}
              className="grid min-w-0 gap-4 py-7 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-10"
            >
              <div className="flex min-w-0 items-start gap-3.5">
                <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#63756C]" strokeWidth={1.7} />
                <div className="min-w-0">
                  <p className={`${serif} text-[17px] font-bold leading-tight text-[#EDF2EE]`}>
                    {canal}
                  </p>
                  {busca !== "—" && (
                    <p className="mt-1.5 truncate font-mono text-[11px] text-[#63756C]">
                      &ldquo;{busca}&rdquo;
                    </p>
                  )}
                </div>
              </div>
              <div className="flex min-w-0 items-start gap-3.5">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#C8552F]/60">
                  <X className="h-3 w-3 text-[#C8552F]" strokeWidth={3} />
                </span>
                <p className="min-w-0 text-[14.5px] leading-relaxed text-[#93A69C]">{r}</p>
              </div>
            </div>
          ))}
        </div>
      </SerraReveal>

      <SerraReveal delay={0.08}>
        <SerraPanel tone="ember" className="mt-10">
          <p className={`${serif} text-[19px] font-bold leading-snug text-[#EDF2EE] md:text-[24px]`}>
            E não é que o setor não esteja na internet.
          </p>
          <p className="mt-4 max-w-[80ch] text-[15px] leading-relaxed text-[#93A69C]">
            A Associação Rural de Lages publica no Instagram e atende por WhatsApp. O Sindicato
            Rural de Campo Alegre mantém página no Facebook. Sindicatos rurais de outros estados
            aparecem antes do de Santa Cecília numa busca feita aqui de Caçador.{" "}
            <span className="text-[#EDF2EE]">
              O produtor da região já procura no celular. Só não encontra vocês.
            </span>
          </p>
        </SerraPanel>
      </SerraReveal>

      <SerraReveal delay={0.12}>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["O que se perde hoje", "Turma de curso que não enche porque o produtor não soube a tempo."],
            ["O que se perde hoje", "Produtor de Ponte Alta do Norte e Timbó Grande que ainda não sabe que o Sindicato também é dele."],
            ["O que se perde hoje", "Prazo que passa — ITR, assembleia, campanha — sem ninguém ser avisado."],
          ].map(([t, d], i) => (
            <div key={i} className="min-w-0 border border-[#2A3A33] bg-[#141D19] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#63756C]">{t}</p>
              <p className="mt-3.5 text-[14.5px] leading-relaxed text-[#EDF2EE]">{d}</p>
            </div>
          ))}
        </div>
      </SerraReveal>
    </SerraSection>
  );
}

/* ==================== O QUE JÁ EXISTE E NINGUÉM SABE ==================== */

const ATIVOS = [
  {
    t: "Cerca de 450 cursos gratuitos por mês",
    d: "O SENAR/SC abre centenas de turmas todo mês em Santa Catarina, de manejo de pastagem a operação de motosserra. São gratuitos para o produtor e para o trabalhador rural. E a inscrição passa pelo sindicato do município.",
    tag: "A porta é o Sindicato",
  },
  {
    t: "Polo de cursos técnicos do Sistema FAESC/SENAR",
    d: "Santa Cecília não é só ponto de inscrição: é polo. Já formou turma de Técnico em Zootecnia — 24 novos técnicos — e turma de Técnico em Florestas. Poucos sindicatos da Serra têm isso.",
    tag: "Prova social pronta",
  },
  {
    t: "Base ampliada para três municípios",
    d: "Além de Santa Cecília, a base passou a incluir Ponte Alta do Norte e Timbó Grande, atendendo a um pedido dos produtores dessas localidades. É público novo que ainda não foi avisado direito.",
    tag: "Público a conquistar",
  },
  {
    t: "Prazos que só o Sindicato domina",
    d: "O ITR de 2026 vence em 30 de setembro. Assembleias, campanhas e convocações têm data. Quem avisa primeiro vira referência — e quem vira referência recebe a ligação antes dos outros.",
    tag: "Conteúdo com hora marcada",
  },
];

export function ProposalSerraTesouro() {
  return (
    <SerraSection id="tesouro">
      <SerraHeader
        eyebrow="A oportunidade"
        title="O Sindicato já tem o melhor produto da região."
        accent="E ele é de graça."
        lead="Esta não é uma proposta para inventar algo novo. É para mostrar o que já existe. Em 52 anos vocês construíram um ativo que a maioria das empresas pagaria caro para ter — e ele está sendo divulgado no boca a boca."
      />

      <SerraReveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {ATIVOS.map((a, i) => (
            <div key={a.t} className="min-w-0 border border-[#2A3A33] bg-[#141D19] p-7 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] tabular-nums text-[#C8552F]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate rounded-[3px] border border-[#5A9E6F]/40 bg-[#5A9E6F]/[0.08] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-[#5A9E6F]">
                  {a.tag}
                </span>
              </div>
              <p className={`mt-5 ${serif} text-[20px] font-bold leading-snug text-[#EDF2EE] md:text-[23px]`}>
                {a.t}
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#93A69C]">{a.d}</p>
            </div>
          ))}
        </div>
      </SerraReveal>

      <SerraReveal delay={0.1}>
        <div className="mt-10 border-l-[3px] border-[#C8552F] bg-[#141D19] px-7 py-8 md:px-10 md:py-10">
          <p className={`max-w-[26ch] ${serif} text-[24px] font-bold leading-tight text-[#EDF2EE] md:max-w-none md:text-[34px]`}>
            Não falta produto. Falta quem fique sabendo.
          </p>
          <p className="mt-5 max-w-[82ch] text-[15px] leading-relaxed text-[#93A69C] md:text-[16px]">
            Um sindicato rural não vende — ele convoca. E convocação que não chega não convoca
            ninguém. Todo o trabalho desta proposta serve a uma coisa só:{" "}
            <span className="text-[#EDF2EE]">
              fazer com que o produtor de Santa Cecília, de Ponte Alta do Norte e de Timbó Grande
              saiba o que o Sindicato tem para ele antes da turma fechar e antes do prazo vencer.
            </span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["Encher turma de curso", "Alcançar a base nova", "Avisar prazo antes", "Registrar o que já é feito"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 border border-[#2A3A33] bg-[#0D1411] px-3.5 py-2 text-[12.5px] text-[#93A69C]"
              >
                <Check className="h-3.5 w-3.5 flex-shrink-0 text-[#5A9E6F]" strokeWidth={2.6} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </SerraReveal>
    </SerraSection>
  );
}
