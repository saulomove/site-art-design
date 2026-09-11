"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloEyebrow, EloHintClique, EloHintAnima } from "./elo-ui";

/* ================================================================
   A DaIA — a assistente da Genyus — trabalhando junto com o Elo.
   Cinco réguas. Escolhe-se uma e a conversa correspondente vai
   aparecendo mensagem a mensagem, do jeito que chega no cliente.
   ================================================================ */

const mono = "font-mono tabular-nums";

type Msg = { de: "daia" | "cliente"; t: string; h: string };
type Regua = {
  id: string;
  nome: string;
  gatilho: string;
  quem: string;
  canal: string;
  resultado: string;
  cor: string;
  conversa: Msg[];
  fecho: string;
};

const REGUAS: Regua[] = [
  {
    id: "posvisita",
    nome: "Pós-visita",
    gatilho: "2 dias após o check-in do representante",
    quem: "Para o cliente visitado",
    canal: "WhatsApp",
    resultado: "Confirma a visita sem depender da palavra do representante",
    cor: "#47A87D",
    conversa: [
      { de: "daia", h: "09:12", t: "Bom dia, Marlene! Aqui é a assistente da Videplast. O Marcos esteve aí na terça — conseguiu esclarecer o que a senhora precisava sobre o termoformado?" },
      { de: "cliente", h: "09:31", t: "Bom dia! Esteve sim. Ficou de me dar retorno da amostra, que já está demorando." },
      { de: "daia", h: "09:31", t: "Anotado. Vou acionar o time agora e a senhora recebe uma posição ainda hoje. Obrigada pelo retorno!" },
    ],
    fecho: "A visita foi confirmada pelo cliente e a cobrança da amostra entrou no painel — sem ninguém digitar nada.",
  },
  {
    id: "posamostra",
    nome: "Pós-amostra",
    gatilho: "5 dias após a amostra ser entregue",
    quem: "Para quem recebeu a amostra",
    canal: "WhatsApp",
    resultado: "Fecha o buraco de 3 a 4 meses entre envio e resultado",
    cor: "#C9A04A",
    conversa: [
      { de: "daia", h: "14:03", t: "Olá, Marlene. A amostra de termoformado PA/PE 150µ chegou aí no dia 22. Já conseguiram rodar na linha? Alguma dúvida no teste?" },
      { de: "cliente", h: "16:48", t: "Rodou. Deu problema de selagem de novo, tá abrindo no túnel." },
      { de: "daia", h: "16:48", t: "Entendi — vou registrar como reprovação por selagem. A que temperatura a linha de vocês trabalha hoje?" },
      { de: "cliente", h: "16:52", t: "152 graus." },
      { de: "daia", h: "16:52", t: "Perfeito, é exatamente o que precisávamos saber. O engenheiro de aplicação vai te chamar amanhã." },
    ],
    fecho: "Motivo estruturado de reprovação e a especificação real da linha — as duas coisas que hoje se perdem e que passam a ficar na memória técnica do cliente.",
  },
  {
    id: "inativo",
    nome: "Cliente sem compra",
    gatilho: "90 dias sem pedido faturado",
    quem: "Avisa o representante e reaproxima o cliente",
    canal: "WhatsApp + painel",
    resultado: "Remarketing de carteira — a receita que escorre em silêncio",
    cor: "#E8343C",
    conversa: [
      { de: "daia", h: "10:20", t: "Marcos, o Frigorífico Alibem está há 96 dias sem comprar. Nos 12 meses anteriores foram R$ 1,4 mi. Quer que eu abra a conversa?" },
      { de: "cliente", h: "10:34", t: "Pode abrir. Vou ligar depois pra ela também." },
      { de: "daia", h: "10:35", t: "Feito. Já mandei e coloquei uma visita sugerida no seu roteiro de quinta, que você passa perto de Santa Rosa." },
    ],
    fecho: "Foi o ponto do Fernando na reunião: ninguém percebe o cliente que parou de comprar — percebe-se o faturamento no fim do mês.",
  },
  {
    id: "prevenda",
    nome: "Pré-venda do site",
    gatilho: "Formulário preenchido no videplast.com.br",
    quem: "Responde o lead e distribui por região",
    canal: "Site → WhatsApp → Elo",
    resultado: "Resposta em segundos, não em dois dias",
    cor: "#47A87D",
    conversa: [
      { de: "daia", h: "22:47", t: "Olá! Recebemos seu contato pelo site da Videplast há um minuto. Você procura embalagem para qual aplicação?" },
      { de: "cliente", h: "22:49", t: "Sacola valvulada 25 kg pra ração. Uns 40 mil por mês." },
      { de: "daia", h: "22:49", t: "Ótimo — trabalhamos com valvulado nessa faixa em Rio Verde. Você está em qual cidade? Já encaminho para o representante da sua região." },
      { de: "cliente", h: "22:51", t: "Cascavel, Paraná." },
      { de: "daia", h: "22:51", t: "Encaminhado para a JR Trade Norte, que atende o Sudoeste do PR. Você recebe o contato amanhã cedo." },
    ],
    fecho: "Quase onze da noite. O lead foi qualificado, roteado por região e já estava na carteira certa antes de alguém chegar na fábrica.",
  },
  {
    id: "reajuste",
    nome: "Reajuste de tabela",
    gatilho: "30 dias antes da vigência nova",
    quem: "Avisa quem ainda compra no preço antigo",
    canal: "Painel interno",
    resultado: "Antecipa pedido e evita a conversa difícil no dia",
    cor: "#C9A04A",
    conversa: [
      { de: "daia", h: "08:00", t: "Cristiane, a tabela do FFS sobe em 01/10. Há 14 clientes comprando na vigência atual, R$ 3,1 mi nos últimos 90 dias." },
      { de: "cliente", h: "08:14", t: "Manda a lista pros representantes com o comparativo." },
      { de: "daia", h: "08:14", t: "Enviado para os 6 representantes envolvidos, com o de/para por item e o volume de cada cliente." },
    ],
    fecho: "O reajuste deixa de ser um susto no dia 1º e vira trinta dias de trabalho comercial.",
  },
];

function Balao({ m, i, cor }: { m: Msg; i: number; cor: string }) {
  const daia = m.de === "daia";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.36, delay: 0.18 + i * 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`flex ${daia ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[84%] min-w-0 rounded-[7px] px-3.5 py-2.5 ${
          daia ? "rounded-tl-[2px] bg-white" : "rounded-tr-[2px] bg-[#DCF8C6]"
        }`}
      >
        {daia && (
          <span
            className="mb-1 block font-sans text-[9.5px] font-semibold uppercase tracking-[0.14em]"
            style={{ color: cor }}
          >
            DaIA · Videplast
          </span>
        )}
        <p className="text-[12.5px] leading-relaxed text-[#131516]">{m.t}</p>
        <span className={`mt-1 flex items-center justify-end gap-1 text-[9.5px] text-[#5E6669] ${mono}`}>
          {m.h}
          {daia ? <CheckCheck className="h-3 w-3 text-[#2E7355]" /> : <Check className="h-3 w-3" />}
        </span>
      </div>
    </motion.div>
  );
}

export function ProposalEloDaia() {
  const [ativa, setAtiva] = useState(REGUAS[0].id);
  const r = REGUAS.find((x) => x.id === ativa) ?? REGUAS[0];

  return (
    <EloSection id="daia">
      <EloSectionHeader
        eyebrow="A IA trabalhando junto"
        title="O Elo registra. A DaIA não deixa parar."
        lead="A DaIA é a assistente que a Genyus já opera em outros clientes. No Elo ela não é um chat bonito na tela — ela é quem cobra o que ficou em aberto, confirma o que o representante disse e reabre o cliente que parou de comprar. Escolha uma régua e veja a conversa como ela chega."
      />

      {/* números da operação */}
      <EloReveal>
        <div className="mt-12 grid grid-cols-2 gap-px bg-[#272C2E] md:grid-cols-4">
          {[
            ["340", "contatos por mês", "sem ninguém digitar"],
            ["71%", "responderam", "é conversa, não disparo"],
            ["18", "clientes reabertos", "estavam há 90+ dias parados"],
            ["< 60s", "resposta ao lead do site", "inclusive de madrugada"],
          ].map(([v, l, s]) => (
            <div key={l} className="min-w-0 bg-[#0E1011] p-6">
              <p className={`text-[26px] font-bold leading-none text-[#EDF0EF] md:text-[32px] ${mono}`}>{v}</p>
              <p className="mt-3 text-[13px] font-semibold text-[#EDF0EF]">{l}</p>
              <p className="mt-1 text-[11.5px] leading-snug text-[#6B7576]">{s}</p>
            </div>
          ))}
        </div>
      </EloReveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-14">
        {/* as réguas */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <EloEyebrow>As cinco réguas</EloEyebrow>
            <EloHintClique>Escolha uma</EloHintClique>
          </div>
          <div className="mt-5 divide-y divide-[#272C2E] border-y border-[#272C2E]">
            {REGUAS.map((g) => {
              const on = g.id === ativa;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setAtiva(g.id)}
                  aria-pressed={on}
                  className={`group relative block w-full py-5 pl-4 pr-3 text-left transition-colors ${
                    on ? "bg-[#15181A]" : "hover:bg-[#131617]"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="reguaAtiva"
                      className="absolute inset-y-0 left-0 w-[3px]"
                      style={{ background: g.cor }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span
                      className={`font-sans text-[16px] font-semibold transition-colors md:text-[18px] ${
                        on ? "text-[#EDF0EF]" : "text-[#9BA5A7] group-hover:text-[#EDF0EF]"
                      }`}
                    >
                      {g.nome}
                    </span>
                    <span
                      className="rounded-[3px] border px-2 py-[2px] text-[9.5px] font-semibold uppercase tracking-[0.1em]"
                      style={{ borderColor: `${g.cor}55`, color: g.cor, background: `${g.cor}12` }}
                    >
                      {g.canal}
                    </span>
                  </div>
                  <div className="mt-2 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    <p className="min-w-0 text-[12.5px] leading-snug text-[#6B7576]">
                      <span className="text-[#9BA5A7]">Gatilho:</span> {g.gatilho}
                    </p>
                    <p className="min-w-0 text-[12.5px] leading-snug text-[#6B7576]">
                      <span className="text-[#9BA5A7]">Ação:</span> {g.quem}
                    </p>
                  </div>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden text-[13px] leading-relaxed text-[#EDF0EF]"
                      >
                        <span className="mt-3 block">{g.resultado}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <p className="mt-7 max-w-[74ch] text-[13px] leading-relaxed text-[#6B7576]">
            Toda régua é ligada, desligada e editada por vocês. A DaIA só fala com quem o Elo tem
            base para falar — e nunca com a conversa que o representante não etiquetou.
          </p>
        </div>

        {/* o telefone com a conversa */}
        <div className="mx-auto w-full max-w-[340px] min-w-0">
          <div className="mb-4 flex justify-center lg:justify-start">
            <EloHintAnima>A conversa vai chegando</EloHintAnima>
          </div>
          <div className="rounded-[8px] border border-[#272C2E] bg-[#0B0D0E] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-3 border-b border-[#272C2E] px-4 py-3">
              <span
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-sans text-[11px] font-bold text-[#0E1011]"
                style={{ background: r.cor }}
              >
                V
              </span>
              <span className="min-w-0">
                <span className="block truncate font-sans text-[13px] font-semibold text-[#EDF0EF]">
                  Videplast
                </span>
                <span className="block text-[10.5px] text-[#6B7576]">conta comercial verificada</span>
              </span>
            </div>

            <div className="min-h-[340px] space-y-2.5 bg-[#0E1011] p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-2.5"
                >
                  <p className="text-center text-[10px] uppercase tracking-[0.16em] text-[#6B7576]">
                    {r.gatilho}
                  </p>
                  {r.conversa.map((m, i) => (
                    <Balao key={`${r.id}-${i}`} m={m} i={i} cor={r.cor} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-[#272C2E] px-4 py-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={r.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-[12.5px] leading-relaxed text-[#9BA5A7]"
                >
                  {r.fecho}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </EloSection>
  );
}
