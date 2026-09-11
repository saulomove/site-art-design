"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { AlertTriangle, MessageCircle, ArrowRight } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloPanel, EloEyebrow } from "./elo-ui";

/* ==================== QUEM CONSTRÓI ==================== */

export function ProposalEloGenyus() {
  return (
    <EloSection id="genyus">
      <EloSectionHeader
        eyebrow="Quem constrói"
        title="A Genyus não vende software."
        accent="Constrói o que falta."
        lead="O Elo nasce do mesmo método que já está rodando em outras operações: escutar a dor, desenhar em cima dela e entregar por partes, com algo funcionando cedo."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {[
          {
            n: "Conferência de comissionamento",
            d: "Uma operação com mais de R$ 180 milhões vendidos no ano levava de oito a nove dias para conferir o comissionamento, com quatro a cinco meses de atraso acumulado. Hoje a conferência roda em dois minutos e meio, em três unidades.",
            m: "9 dias → 2min30",
          },
          {
            n: "Atendimento multicanal com IA",
            d: "WhatsApp, Instagram e Facebook numa fila só, com transferência entre atendentes, histórico do cliente ao lado da conversa e assistente de IA respondendo no site e na loja. Em produção, não em protótipo.",
            m: "3 canais, 1 fila",
          },
          {
            n: "Sistema sob medida em indústria",
            d: "Sistemas rodando em operações com representantes externos e time técnico interno, nacional e internacional — o mesmo desenho de canal que a Videplast tem.",
            m: "modelo conhecido",
          },
        ].map((c, i) => (
          <EloReveal key={c.n} delay={i * 0.07}>
            <div className="flex h-full flex-col border border-[#272C2E] bg-[#15181A] p-7 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#E8343C]">{c.m}</p>
              <h3 className="mt-5 font-sans text-[18px] font-semibold leading-snug text-[#EDF0EF]">{c.n}</h3>
              <p className="mt-4 flex-1 text-[14px] leading-relaxed text-[#9BA5A7]">{c.d}</p>
            </div>
          </EloReveal>
        ))}
      </div>

      <EloReveal delay={0.12}>
        <EloPanel className="mt-6">
          <EloEyebrow>A infraestrutura já está paga e rodando</EloEyebrow>
          <div className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-3">
            {[
              ["API de IA do Google", "contratada e em produção, é a que transcreve e estrutura o áudio"],
              ["Conexão de WhatsApp", "licença ativa, com suporte a etiquetas do WhatsApp Business"],
              ["Integração validada no Meta", "aplicação aprovada para Instagram e Facebook"],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-[#272C2E] pl-5">
                <h4 className="font-sans text-[14.5px] font-semibold text-[#EDF0EF]">{t}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-[#9BA5A7]">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 border-t border-[#272C2E] pt-6 text-[14px] leading-relaxed text-[#9BA5A7]">
            Nada nesta proposta depende de contratar fornecedor novo ou de tecnologia que ainda
            precise ser provada. <strong className="font-semibold text-[#EDF0EF]">A transcrição
            desta própria reunião de 45 minutos foi feita com a mesma tecnologia</strong> — e
            reconheceu SAP ECC, S/4 HANA, BTP e IDocs corretamente.
          </p>
        </EloPanel>
      </EloReveal>
    </EloSection>
  );
}

/* ==================== RESSALVAS ==================== */

const RESSALVAS = [
  {
    t: "O WhatsApp do representante precisa ser Business",
    d: "Etiqueta não existe no WhatsApp comum. A migração é gratuita e mantém o mesmo número, mas é um passo de onboarding que precisa estar no plano de adoção — não é automático.",
  },
  {
    t: "A integração depende do time de TI de vocês",
    d: "As interfaces são construídas do lado da Videplast, no middleware BTP, e isso é esforço real do time do César. Por isso a primeira fase foi desenhada para não depender disso.",
  },
  {
    t: "Disparo em massa tem limite técnico",
    d: "Atendimento e contatos pontuais rodam na conexão que já usamos. Volume alto de disparo ativo é o cenário em que a Meta bloqueia números, e aí o caminho seguro é a API oficial, com custo por conversa. Preferimos avisar agora.",
  },
  {
    t: "O sistema não conserta relacionamento sozinho",
    d: "Ele mostra quem não foi visitado, avisa quando o cliente esfria e guarda o que foi combinado. Quem visita, liga e negocia continua sendo gente. A ferramenta tira a cegueira, não o trabalho.",
  },
  {
    t: "Adoção é o risco principal, e é de vocês",
    d: "O Elo foi desenhado para exigir o mínimo do representante — um áudio no WhatsApp. Ainda assim, sem patrocínio interno e sem alguém cobrando, nenhuma ferramenta pega. Vale definir o dono do projeto antes de começar.",
  },
];

export function ProposalEloRessalvas() {
  return (
    <EloSection id="ressalvas" tone="darker">
      <EloSectionHeader
        eyebrow="O que não prometemos"
        title="Cinco ressalvas,"
        accent="ditas antes e não depois."
        lead="Uma proposta que só tem vantagem é uma proposta que ainda não foi pensada. Estes são os pontos que podem dar trabalho — e é melhor que apareçam aqui do que na terceira semana."
      />

      <div className="space-y-3">
        {RESSALVAS.map((r, i) => (
          <EloReveal key={r.t} delay={Math.min(i, 5) * 0.04}>
            <div className="flex gap-5 border border-[#272C2E] bg-[#15181A] p-7">
              <AlertTriangle className="mt-1 h-4 w-4 flex-shrink-0 text-[#C9A04A]" />
              <div className="min-w-0">
                <h3 className="font-sans text-[16px] font-semibold text-[#EDF0EF]">{r.t}</h3>
                <p className="mt-2.5 max-w-4xl text-[14px] leading-relaxed text-[#9BA5A7]">{r.d}</p>
              </div>
            </div>
          </EloReveal>
        ))}
      </div>
    </EloSection>
  );
}

/* ==================== FECHAMENTO ==================== */

export function ProposalEloCta({ proposal }: { proposal: Proposal }) {
  const msg = encodeURIComponent(
    "Olá! Recebi a proposta do Genyus Elo e gostaria de conversar.",
  );
  const link = `https://wa.me/${proposal.whatsappNumber}?text=${msg}`;

  return (
    <section id="fechamento" className="relative overflow-hidden bg-[#0E1011] py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[70%] w-[90%] -translate-x-1/2 rounded-full bg-[#D51920]/[0.11] blur-[190px]" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.75 }}
        >
          <Image
            src="/clientes/videplast/logo-videplast.png"
            alt="Videplast"
            width={706}
            height={160}
            className="mx-auto h-[24px] w-auto opacity-80 md:h-[28px]"
          />

          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8343C]">
            Uma pergunta para fechar
          </p>

          <h2 className="mt-8 font-sans text-[30px] font-bold leading-[1.1] tracking-[-0.025em] text-[#EDF0EF] md:text-[46px]">
            {proposal.closingQuestion}
          </h2>

          <p className="mx-auto mt-9 max-w-2xl text-[16px] leading-relaxed text-[#9BA5A7] md:text-[17px]">
            O primeiro módulo entra no ar em quatro semanas e não depende de uma linha de código no
            SAP. O que a gente precisa agora é de uma hora com o senhor e com o César para fechar o
            recorte do piloto.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#D51920] px-9 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#E8343C]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com a Genyus
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sistema"
              className="inline-flex items-center gap-2 border border-[#272C2E] px-9 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#9BA5A7] transition-colors hover:border-[#D51920]/50 hover:text-[#EDF0EF]"
            >
              Rever o sistema
            </a>
          </div>

          <p className="mt-14 border-t border-[#272C2E] pt-8 text-[13px] leading-relaxed text-[#6B7576]">
            Proposta preparada pela Genyus para a Videplast a partir da reunião de 10 de setembro de
            2026 com Fernando, César, Mateus, Patrícia e Saulo. Todas as citações deste documento
            têm o tempo da própria gravação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
