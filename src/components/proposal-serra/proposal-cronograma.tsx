"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImgIcon, Layers, Film, Clock, ChevronDown } from "lucide-react";
import { SerraSection, SerraHeader, SerraReveal, SerraHint, SerraPanel, serif } from "./serra-ui";

/* ================================================================
   Dez dias de conteúdo, escritos antes de haver contrato. É a
   demonstração mais barata de autoridade que existe: mostrar que
   já se entendeu o negócio do cliente.
   ================================================================ */

type Dia = {
  n: number;
  dia: string;
  data: string;
  formato: "Card" | "Carrossel" | "Reels" | "Story";
  pilar: string;
  titulo: string;
  gancho: string;
  porque: string;
  story: string;
};

const PILAR_COR: Record<string, string> = {
  Urgência: "#C8552F",
  Serviço: "#5A9E6F",
  Autoridade: "#D9A441",
  Relacionamento: "#93A69C",
};

const ICONE = { Card: ImgIcon, Carrossel: Layers, Reels: Film, Story: Clock };

const DIAS: Dia[] = [
  {
    n: 1,
    dia: "Segunda",
    data: "Dia 1",
    formato: "Card",
    pilar: "Autoridade",
    titulo: "O Sindicato agora está aqui",
    gancho: "São 52 anos de Sindicato. E este é o primeiro post.",
    porque:
      "Post de abertura assume a chegada com naturalidade, em vez de fingir que o perfil sempre existiu. Ancora os 52 anos e apresenta a base dos três municípios logo na estreia.",
    story: "Bastidor: a placa da sede, com a data de fundação.",
  },
  {
    n: 2,
    dia: "Terça",
    data: "Dia 2",
    formato: "Card",
    pilar: "Urgência",
    titulo: "O ITR vence em 30 de setembro",
    gancho: "Faltam poucos dias. Quem perde o prazo, paga multa.",
    porque:
      "É o assunto mais urgente do calendário rural neste momento e o Sindicato é quem orienta. Conteúdo de utilidade imediata rende salvamento e compartilhamento — exatamente o que um perfil novo precisa.",
    story: "Enquete: “Você já declarou seu ITR?” Sim / Ainda não / Não sei se preciso.",
  },
  {
    n: 3,
    dia: "Quarta",
    data: "Dia 3",
    formato: "Carrossel",
    pilar: "Serviço",
    titulo: "O que o Sindicato faz por você",
    gancho: "Muita gente só lembra do Sindicato na hora do documento.",
    porque:
      "Carrossel de seis telas listando cursos, orientação de ITR, documentação, representação da classe e formação técnica. É o post que mais vai ser encaminhado de um produtor para outro.",
    story: "Caixinha de pergunta: “O que você não sabia que o Sindicato faz?”",
  },
  {
    n: 4,
    dia: "Quinta",
    data: "Dia 4",
    formato: "Card",
    pilar: "Serviço",
    titulo: "Turma aberta — curso gratuito do SENAR",
    gancho: "Vagas limitadas. Inscrição aqui no Sindicato.",
    porque:
      "O primeiro chamado direto para ação. Data, carga horária, vagas e o WhatsApp para inscrever. Toda turma do mês vira um post como este.",
    story: "Contagem de vagas restantes, atualizada conforme as inscrições entram.",
  },
  {
    n: 5,
    dia: "Sexta",
    data: "Dia 5",
    formato: "Reels",
    pilar: "Relacionamento",
    titulo: "Quem atende você",
    gancho: "Atrás de cada curso e cada orientação tem gente.",
    porque:
      "Vídeo curto na sede, apresentando a equipe e o atendimento. No interior, relação se constrói por rosto conhecido — e é o formato que mais alcança quem ainda não segue o perfil.",
    story: "Sequência: a porta, o balcão, a sala de curso, o café.",
  },
  {
    n: 6,
    dia: "Segunda",
    data: "Dia 6",
    formato: "Carrossel",
    pilar: "Serviço",
    titulo: "Os cursos do SENAR são gratuitos. Sim, gratuitos.",
    gancho: "Você já ajudou a pagar. O que falta é usar.",
    porque:
      "Derruba a objeção que mais impede inscrição. Explica de onde vem o custeio, quem pode participar e como se inscrever. Conteúdo que converte direto em turma cheia.",
    story: "Antes e depois: turma vazia × turma cheia, com chamada para inscrição.",
  },
  {
    n: 7,
    dia: "Terça",
    data: "Dia 7",
    formato: "Card",
    pilar: "Urgência",
    titulo: "ITR — reta final e a lista de documentos",
    gancho: "Separe estes documentos antes de vir.",
    porque:
      "Retoma o prazo já próximo do fim e resolve a dúvida prática de quem decidiu declarar. Reforço de urgência com utilidade, não repetição do mesmo post.",
    story: "Lembrete com contagem regressiva e o endereço da sede.",
  },
  {
    n: 8,
    dia: "Quarta",
    data: "Dia 8",
    formato: "Card",
    pilar: "Autoridade",
    titulo: "24 novos Técnicos em Zootecnia formados aqui",
    gancho: "Santa Cecília não é ponto de inscrição. É polo.",
    porque:
      "Prova social forte e verdadeira. Poucos sindicatos da Serra têm polo de curso técnico — isso diferencia a entidade e atrai produtor de fora da base.",
    story: "Fotos da formatura e depoimento de um formando.",
  },
  {
    n: 9,
    dia: "Quinta",
    data: "Dia 9",
    formato: "Card",
    pilar: "Relacionamento",
    titulo: "Ponte Alta do Norte e Timbó Grande, o Sindicato também é seu",
    gancho: "A base foi ampliada a pedido dos próprios produtores.",
    porque:
      "Fala diretamente com o público novo, que ainda não sabe que é atendido. É o post com maior chance de trazer associado que hoje não existe no cadastro.",
    story: "Mapa dos três municípios, com os quilômetros até a sede.",
  },
  {
    n: 10,
    dia: "Sexta",
    data: "Dia 10",
    formato: "Card",
    pilar: "Serviço",
    titulo: "Agenda de outubro no Sindicato",
    gancho: "Tudo o que acontece no mês, num post só. Salve.",
    porque:
      "Fecha a quinzena com utilidade e cria o hábito: todo fim de mês sai a agenda do mês seguinte. É o post que ensina o seguidor a voltar.",
    story: "Cada data do mês como um story separado, publicado na véspera.",
  },
];

export function ProposalSerraCronograma() {
  const [aberto, setAberto] = useState<number | null>(2);

  return (
    <SerraSection id="cronograma">
      <SerraHeader
        eyebrow="Cronograma editorial"
        title="Dez dias de conteúdo,"
        accent="escritos antes de haver contrato."
        lead="Costuma-se pedir para o cliente confiar. Preferimos mostrar. Abaixo estão os dez primeiros dias do perfil, dia a dia, com o gancho, o formato, o story de apoio e a razão de cada um estar ali."
      />

      <SerraReveal>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <SerraHint>Abra qualquer dia</SerraHint>
          <span className="text-[12.5px] text-[#63756C]">
            os quatro pilares se alternam de propósito — nunca dois pedidos seguidos
          </span>
        </div>
      </SerraReveal>

      <SerraReveal delay={0.06}>
        <div className="mt-8 flex flex-wrap gap-4">
          {Object.entries(PILAR_COR).map(([p, c]) => (
            <span key={p} className="flex items-center gap-2 text-[12.5px] text-[#93A69C]">
              <span className="h-2.5 w-2.5 flex-shrink-0" style={{ background: c }} />
              {p}
            </span>
          ))}
        </div>
      </SerraReveal>

      <SerraReveal delay={0.1}>
        <div className="mt-8 divide-y divide-[#2A3A33] border-y border-[#2A3A33]">
          {DIAS.map((d) => {
            const on = aberto === d.n;
            const cor = PILAR_COR[d.pilar];
            const Icon = ICONE[d.formato];
            return (
              <div key={d.n} className="min-w-0">
                <button
                  type="button"
                  onClick={() => setAberto(on ? null : d.n)}
                  aria-expanded={on}
                  className={`group grid w-full min-w-0 grid-cols-[46px_minmax(0,1fr)_auto] items-center gap-4 px-2 py-5 text-left transition-colors sm:grid-cols-[64px_minmax(0,1fr)_120px_auto] sm:gap-5 ${
                    on ? "bg-[#141D19]" : "hover:bg-[#111a16]"
                  }`}
                >
                  <span className="min-w-0">
                    <span
                      className={`block ${serif} text-[22px] font-bold leading-none tabular-nums sm:text-[28px]`}
                      style={{ color: on ? cor : "#63756C" }}
                    >
                      {String(d.n).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block truncate font-mono text-[9.5px] uppercase tracking-[0.1em] text-[#63756C]">
                      {d.dia}
                    </span>
                  </span>

                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 flex-shrink-0"
                        style={{ background: cor }}
                        aria-hidden
                      />
                      <span
                        className={`min-w-0 truncate font-sans text-[15px] font-semibold sm:text-[17px] ${
                          on ? "text-[#EDF2EE]" : "text-[#93A69C] group-hover:text-[#EDF2EE]"
                        }`}
                      >
                        {d.titulo}
                      </span>
                    </span>
                    <span className="mt-1.5 block truncate text-[12.5px] italic text-[#63756C]">
                      &ldquo;{d.gancho}&rdquo;
                    </span>
                  </span>

                  <span className="hidden items-center gap-2 sm:flex">
                    <Icon className="h-3.5 w-3.5 flex-shrink-0 text-[#63756C]" strokeWidth={1.8} />
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#63756C]">
                      {d.formato}
                    </span>
                  </span>

                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 transition-transform ${
                      on ? "rotate-180 text-[#C8552F]" : "text-[#63756C]"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-[#141D19]"
                    >
                      <div className="grid gap-6 px-2 pb-7 sm:grid-cols-2 sm:gap-10 sm:pl-[84px] sm:pr-6">
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C8552F]">
                            Por que este post
                          </p>
                          <p className="mt-3 text-[14px] leading-relaxed text-[#EDF2EE]">
                            {d.porque}
                          </p>
                        </div>
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#63756C]">
                            Story de apoio no mesmo dia
                          </p>
                          <p className="mt-3 text-[14px] leading-relaxed text-[#93A69C]">
                            {d.story}
                          </p>
                          <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#63756C] sm:hidden">
                            Formato: {d.formato}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </SerraReveal>

      <SerraReveal delay={0.14}>
        <SerraPanel tone="ember" className="mt-10">
          <p className={`${serif} text-[19px] font-bold leading-snug text-[#EDF2EE] md:text-[24px]`}>
            Repare no que não tem aqui.
          </p>
          <p className="mt-4 max-w-[84ch] text-[15px] leading-relaxed text-[#93A69C]">
            Nenhum &ldquo;bom dia&rdquo; com foto de paisagem, nenhuma frase motivacional, nenhuma
            data comemorativa genérica. Dez dias, dez assuntos que só o Sindicato Rural de Santa
            Cecília poderia publicar.{" "}
            <span className="text-[#EDF2EE]">
              É assim que um perfil institucional vira referência em vez de ruído.
            </span>
          </p>
        </SerraPanel>
      </SerraReveal>
    </SerraSection>
  );
}
