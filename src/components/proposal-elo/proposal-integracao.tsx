"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Users, Globe, Instagram, Facebook, Mic, type LucideIcon } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloPanel, EloEyebrow, EloQuote, EloHintClique, EloHintAnima } from "./elo-ui";

interface Canal {
  id: string;
  icon: LucideIcon;
  nome: string;
  de: string;
  msg: string;
  hora: string;
  cor: string;
}

const CANAIS: readonly Canal[] = [
  { id: "email", icon: Mail, nome: "E-mail", de: "compras@brf.com.br", msg: "Segue pedido de cotação para FFS 120µ — 34 t, entrega outubro.", hora: "08:14", cor: "#E8343C" },
  { id: "wpp", icon: MessageCircle, nome: "WhatsApp do representante", de: "Marcos Delazeri", msg: "Áudio 0:47 · saindo agora da BRF, laudo parcial deu ok", hora: "10:18", cor: "#47A87D" },
  { id: "teams", icon: Users, nome: "Teams interno", de: "Ana Pilatti · PCP Videira", msg: "Consigo antecipar 8 t de FFS para a semana 34.", hora: "11:02", cor: "#7A8FD6" },
  { id: "site", icon: Globe, nome: "Site videplast.com.br", de: "Formulário de contato", msg: "Interesse em termoformado PA/PE para linha de cortes especiais.", hora: "14:37", cor: "#C9A04A" },
  { id: "insta", icon: Instagram, nome: "Direct do Instagram", de: "@coop.languiru", msg: "Vocês fazem sacola impressa em 4 cores?", hora: "16:20", cor: "#D06BA8" },
  { id: "face", icon: Facebook, nome: "Facebook", de: "Comentário em publicação", msg: "Qual o prazo para valvulado de 25 kg?", hora: "17:05", cor: "#5B8DD9" },
];

const FICHA = [
  { c: "email", t: "Cotação recebida", d: "FFS 120µ · 34 t · entrega outubro", h: "08:14" },
  { c: "wpp", t: "Relatório de visita", d: "Laudo parcial aprovado · produção liberada", h: "10:19" },
  { c: "teams", t: "Capacidade confirmada", d: "PCP Videira antecipa 8 t para a semana 34", h: "11:02" },
  { c: "site", t: "Nova oportunidade", d: "Termoformado PA/PE · linha de cortes especiais", h: "14:37" },
];

export function ProposalEloIntegracao() {
  const [ativo, setAtivo] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setAtivo((a) => (a + 1) % CANAIS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <EloSection id="integracao" tone="darker">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60%] w-[80%] -translate-x-1/2 rounded-full bg-[#D51920]/[0.07] blur-[180px]" />

      <EloSectionHeader
        eyebrow="O fim das quatro janelas"
        title="Seis lugares diferentes."
        accent="Uma ficha só."
        lead="Hoje uma única negociação com a BRF passa por e-mail, WhatsApp do representante, Teams do PCP e formulário do site — e em nenhum momento essas quatro coisas se encontram. O Elo faz todas caírem na mesma ficha do cliente, na ordem em que aconteceram."
      />

      <EloReveal>
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <EloHintAnima>Os canais se alternam</EloHintAnima>
          <EloHintClique>ou clique num deles</EloHintClique>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          {/* canais */}
          <div className="space-y-2.5">
            {CANAIS.map((c, i) => {
              const Icon = c.icon;
              const on = ativo === i;
              return (
                <motion.button
                  key={c.id}
                  type="button"
                  onClick={() => setAtivo(i)}
                  animate={{
                    borderColor: on ? c.cor : "#272C2E",
                    backgroundColor: on ? "#1C2022" : "#15181A",
                    x: on ? 8 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ x: on ? 8 : 4 }}
                  className="flex w-full items-start gap-3.5 border p-3.5 text-left transition-shadow hover:shadow-[0_0_28px_-14px_rgba(232,52,60,0.7)]"
                >
                  <Icon className="mt-[3px] h-4 w-4 flex-shrink-0" style={{ color: on ? c.cor : "#6B7576" }} />
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <span className="text-[12.5px] font-semibold text-[#EDF0EF]">{c.nome}</span>
                      <span className="font-mono text-[10.5px] text-[#6B7576]">{c.hora}</span>
                    </span>
                    <span className="mt-0.5 block font-mono text-[10.5px] text-[#6B7576]">{c.de}</span>
                    <span className="mt-1.5 block text-[12px] leading-snug text-[#9BA5A7]">{c.msg}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* convergência */}
          <div className="relative mx-auto hidden h-[380px] w-[110px] lg:block" aria-hidden="true">
            <svg viewBox="0 0 110 380" className="h-full w-full">
              {CANAIS.map((c, i) => {
                const y = 34 + i * 62;
                const on = ativo === i;
                return (
                  <path
                    key={c.id}
                    d={`M 0 ${y} C 55 ${y}, 55 190, 110 190`}
                    fill="none"
                    stroke={on ? c.cor : "#272C2E"}
                    strokeWidth={on ? 1.6 : 1}
                    opacity={on ? 1 : 0.5}
                  />
                );
              })}
              <AnimatePresence mode="wait">
                <motion.circle
                  key={ativo}
                  r="3.5"
                  fill={CANAIS[ativo].cor}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.2, times: [0, 0.1, 0.85, 1] }}
                >
                  <animateMotion
                    dur="2.2s"
                    repeatCount="indefinite"
                    path={`M 0 ${34 + ativo * 62} C 55 ${34 + ativo * 62}, 55 190, 110 190`}
                  />
                </motion.circle>
              </AnimatePresence>
            </svg>
          </div>

          {/* ficha unificada */}
          <div className="border-2 border-[#D51920]/40 bg-white">
            <div className="flex items-baseline justify-between gap-3 border-b border-[#DCE0E0] bg-[#F6F7F7] px-4 py-3">
              <div>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[#5E6669]">Ficha unificada</p>
                <p className="mt-1 font-sans text-[15px] font-bold text-[#131516]">BRF S.A. — Capinzal/SC</p>
              </div>
              <span className="font-mono text-[10.5px] text-[#5E6669]">11/09/2026</span>
            </div>

            <ul className="divide-y divide-[#EDEFEF]">
              {FICHA.map((f) => {
                const canal = CANAIS.find((c) => c.id === f.c);
                const Icon = canal?.icon ?? Mail;
                const on = CANAIS[ativo].id === f.c;
                return (
                  <motion.li
                    key={f.t}
                    animate={{ backgroundColor: on ? "#F6F7F7" : "#FFFFFF" }}
                    transition={{ duration: 0.35 }}
                    className="flex items-start gap-3 px-4 py-3"
                  >
                    <Icon className="mt-[3px] h-3.5 w-3.5 flex-shrink-0" style={{ color: canal?.cor }} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[12.5px] font-semibold text-[#131516]">{f.t}</p>
                      <p className="mt-0.5 text-[11.5px] leading-snug text-[#5E6669]">{f.d}</p>
                    </div>
                    <span className="flex-shrink-0 font-mono text-[10.5px] text-[#5E6669]">{f.h}</span>
                  </motion.li>
                );
              })}
              <li className="flex items-center gap-3 bg-[#D51920]/[0.05] px-4 py-3">
                <Mic className="h-3.5 w-3.5 flex-shrink-0 text-[#D51920]" />
                <p className="text-[11.5px] leading-snug text-[#5E6669]">
                  <strong className="font-semibold text-[#131516]">Tudo na ordem em que aconteceu.</strong>{" "}
                  Quem abre a ficha vê a negociação inteira, não um pedaço dela.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </EloReveal>

      {/* o que entra quando, sem prometer o que depende de terceiro */}
      <EloReveal delay={0.06}>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              q: "Entra na fase 1",
              c: "#47A87D",
              l: ["WhatsApp do representante, por etiqueta", "Formulário do site videplast.com.br", "Direct do Instagram e comentário do Facebook", "Áudio e relatório de visita"],
            },
            {
              q: "Entra na fase 1, com uma caixa",
              c: "#C9A04A",
              l: ["E-mail comercial — basta uma caixa dedicada (ex.: comercial@videplast.com.br) com encaminhamento ou IMAP de leitura", "Nada de acesso à caixa pessoal de ninguém"],
            },
            {
              q: "Fase 2, mediante liberação",
              c: "#9BA5A7",
              l: ["Microsoft Teams — tecnicamente possível pelo Microsoft Graph, mas exige consentimento de administrador do tenant", "Por isso não está prometido nesta proposta: depende de uma decisão da TI, não nossa", "Enquanto não houver, o que vem do Teams entra como anotação manual na ficha"],
            },
          ].map((b) => (
            <div key={b.q} className="min-w-0 border border-[#272C2E] bg-[#15181A] p-6">
              <p
                className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: b.c }}
              >
                {b.q}
              </p>
              <ul className="mt-4 space-y-2.5">
                {b.l.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-[#9BA5A7]">
                    <span className="mt-[6px] h-1 w-1 flex-shrink-0" style={{ background: b.c }} />
                    <span className="min-w-0">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </EloReveal>

      <div className="mt-14 space-y-6">
        <EloReveal>
          <EloQuote t="34:34" who="César">
            Tem um fluxo pra cadastrar produto. Eles fazem o fluxo e depois mandam e-mail. O time de
            cadastro devolve por e-mail porque falta uma coisa, e eles não voltam no sistema —
            mandam por e-mail.{" "}
            <strong className="font-semibold text-[#E8343C]">
              Você tem três, quatro janelas da mesma coisa.
            </strong>
          </EloQuote>
        </EloReveal>
        <EloReveal delay={0.06}>
          <EloQuote t="36:07" who="Mateus">
            A Patrícia ficou três anos com a gente e resolveu sair. Eu pego toda a carteira dela e
            jogo pra outro consultor. O outro consultor recebe{" "}
            <strong className="font-semibold text-[#EDF0EF]">todo o histórico de três anos atrás</strong>,
            tudo que tá acontecendo. Ele pega aquilo e já sabe.
          </EloQuote>
        </EloReveal>
        <EloReveal delay={0.12}>
          <EloQuote t="36:29" who="Fernando" hot>
            Então isso é um ponto de vocês. Se o representante para… a carteira dele, o que ele
            atendeu, o que passou. <strong className="font-semibold text-[#E8343C]">Essas coisas a
            gente não tem.</strong>
          </EloQuote>
        </EloReveal>
      </div>

      <EloReveal delay={0.1}>
        <EloPanel tone="red" className="mt-10">
          <EloEyebrow>O que isso vale no dia em que acontece</EloEyebrow>
          <p className="mt-5 max-w-4xl font-sans text-[21px] font-semibold leading-snug text-[#EDF0EF] md:text-[27px]">
            Quando um representante sai, a Videplast perde vinte anos de relacionamento e fica com
            uma lista de pedidos. Com o Elo, a carteira passa adiante com cada conversa, cada
            visita e cada promessa feita.
          </p>
        </EloPanel>
      </EloReveal>
    </EloSection>
  );
}
