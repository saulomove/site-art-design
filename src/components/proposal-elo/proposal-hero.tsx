"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { EloQuote, EloSection, EloSectionHeader, EloReveal, EloPanel } from "./elo-ui";

export function ProposalEloHero({ proposal }: { proposal: Proposal }) {
  return (
    <section className="relative overflow-hidden bg-[#0E1011] pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[70%] w-[95%] -translate-x-1/2 rounded-full bg-[#D51920]/[0.09] blur-[190px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <Image
            src="/clientes/videplast/logo-videplast.png"
            alt="Videplast"
            width={706}
            height={160}
            priority
            className="h-[26px] w-auto md:h-[32px]"
          />
          <span className="h-7 w-px bg-[#272C2E]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#6B7576]">
            Proposta · Genyus Elo · setembro de 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="mt-12 max-w-4xl font-sans text-[38px] font-bold leading-[1.02] tracking-[-0.028em] text-[#EDF0EF] md:text-[68px]"
        >
          &ldquo;Você nem sabe.<br />
          <span className="text-[#E8343C]">Será que atendeu?</span><br />
          Será que ele prospectou?&rdquo;
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[#9BA5A7] md:text-[18px]"
        >
          Fernando, isso foi o senhor, aos dezenove minutos e cinquenta e um segundos da nossa
          conversa. Esta proposta é a resposta a essa frase — e a nenhuma outra.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24 }}
          className="mt-14 grid gap-px overflow-hidden border border-[#272C2E] bg-[#272C2E] sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { v: "20+", l: "representantes PJ", s: "≈50 pessoas em campo" },
            { v: "5", l: "plantas industriais", s: "SC · GO · MT · RJ · PR" },
            { v: "0", l: "registro de visita", s: "Excel, e-mail ou papel" },
            { v: "0", l: "registro de cotação", s: "só o pedido firme existe" },
          ].map((k) => (
            <div key={k.l} className="bg-[#0E1011] p-7">
              <p className="font-sans text-[38px] font-bold leading-none tracking-[-0.03em] text-[#E8343C] md:text-[46px]">
                {k.v}
              </p>
              <p className="mt-4 text-[14px] font-semibold text-[#EDF0EF]">{k.l}</p>
              <p className="mt-1.5 text-[12.5px] leading-snug text-[#6B7576]">{k.s}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.36 }}
          className="mt-10 max-w-3xl text-[15px] leading-relaxed text-[#6B7576]"
        >
          {proposal.greeting}
        </motion.p>
      </div>
    </section>
  );
}

/* ==================== O QUE OUVIMOS ==================== */

export function ProposalEloEscuta() {
  return (
    <EloSection id="escuta" tone="darker">
      <EloSectionHeader
        eyebrow="O que ouvimos"
        title="Antes de propor,"
        accent="escutamos."
        lead="Tudo que vem a seguir saiu dos quarenta e cinco minutos da reunião de 10 de setembro. Os tempos são os da própria gravação — nada aqui foi suposto."
      />

      <div className="space-y-6">
        <EloReveal>
          <EloQuote t="20:32" who="Fernando" hot>
            Eu tenho um representante, vou lá fazer uma visita do cliente dele e o cara me fala
            assim: &ldquo;faz dois anos que eu não vejo&rdquo;.
          </EloQuote>
        </EloReveal>
        <EloReveal delay={0.05}>
          <EloQuote t="20:48" who="Fernando" hot>
            O cliente já fechou a fábrica. Já mudou faz dois anos. O cara me leva pra visitar a
            fábrica e a fábrica é aqui, ó.
          </EloQuote>
        </EloReveal>
        <EloReveal delay={0.1}>
          <EloQuote t="14:13" who="César">
            A parte de visitas, hoje não existe um sistema. Existe um relatório: um escreve no
            Excel, o outro manda no corpo do e-mail, um escreve no papel do pão e manda uma foto.
          </EloQuote>
        </EloReveal>
        <EloReveal delay={0.15}>
          <EloQuote t="08:01" who="César">
            A gente não tem o conceito de cotação. Só o conceito de pedido.{" "}
            <strong className="font-semibold text-[#E8343C]">
              Tudo que está antes do pedido firme não tem registro.
            </strong>
          </EloQuote>
        </EloReveal>
        <EloReveal delay={0.2}>
          <EloQuote t="27:09" who="Fernando" hot>
            Aí eu tenho um cliente que é um baita cliente potencial, que poderia ter desenvolvido
            coisa nova, outras frentes de negociação. Mas esse cara acomoda e não faz. Se a gente
            tivesse esse acompanhamento um pouco mais próximo, eu poderia cobrar mais.
          </EloQuote>
        </EloReveal>
        <EloReveal delay={0.25}>
          <EloQuote t="37:10" who="César">
            Se há desligamento, você tem histórico de pedido só. Não tem histórico de atendimento.
            De visita, de nada.
          </EloQuote>
        </EloReveal>
      </div>

      <EloReveal delay={0.1}>
        <EloPanel tone="red" className="mt-12">
          <p className="max-w-4xl text-[16px] leading-relaxed text-[#EDF0EF] md:text-[18px]">
            O senhor não pediu um CRM. Pediu <strong className="font-semibold">enxergar</strong> o
            que já acontece todo dia e some. Toda decisão de desenho deste projeto sai daí.
          </p>
        </EloPanel>
      </EloReveal>
    </EloSection>
  );
}
