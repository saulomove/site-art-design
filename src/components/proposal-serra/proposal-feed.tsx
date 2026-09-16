"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid3x3, Bookmark, UserSquare2, Heart, MessageCircle, Send } from "lucide-react";
import { SerraSection, SerraHeader, SerraReveal, SerraHint, serif } from "./serra-ui";

/* ================================================================
   O feed simulado. Nove publicações que poderiam ir ao ar na
   primeira quinzena — conteúdo real, não "post exemplo".
   ================================================================ */

type Post = {
  id: string;
  tipo: "urgencia" | "curso" | "prova" | "institucional" | "base" | "explica" | "equipe" | "agenda" | "carrossel";
  topo: string;
  destaque: string;
  base?: string;
  rodape: string;
  fundo: "ember" | "escuro" | "papel" | "campo" | "mato";
  legenda: string;
};

const POSTS: Post[] = [
  {
    id: "itr",
    tipo: "urgencia",
    topo: "Prazo final",
    destaque: "30/09",
    base: "ITR 2026",
    rodape: "O Sindicato ajuda você a declarar",
    fundo: "ember",
    legenda:
      "O prazo para declarar o ITR de 2026 termina em 30 de setembro. Quem perde o prazo paga multa. Passe no Sindicato ou chame no WhatsApp — a gente orienta e ajuda a organizar a documentação. Rua João Goetten Sobrinho, 671, Centro. (49) 3244-2153.",
  },
  {
    id: "curso",
    tipo: "curso",
    topo: "Turma aberta",
    destaque: "Curso gratuito",
    base: "Inscrições pelo Sindicato",
    rodape: "Vagas limitadas",
    fundo: "mato",
    legenda:
      "Mais uma turma do SENAR abrindo em Santa Cecília. Curso gratuito, com certificado, para produtor e trabalhador rural. A inscrição é feita aqui no Sindicato. Chame no WhatsApp para garantir a vaga.",
  },
  {
    id: "gratuito",
    tipo: "explica",
    topo: "Sim, é de graça",
    destaque: "Por que os cursos do SENAR não custam nada",
    rodape: "Arraste para entender",
    fundo: "escuro",
    legenda:
      "Muito produtor não se inscreve porque acha que vai ter que pagar. Não vai. Os cursos do SENAR são custeados pela contribuição do setor — você já ajudou a pagar. O que falta é usar. Arraste e entenda como funciona.",
  },
  {
    id: "tecnicos",
    tipo: "prova",
    topo: "Polo de cursos técnicos",
    destaque: "24",
    base: "novos Técnicos em Zootecnia formados aqui",
    rodape: "Sistema FAESC/SENAR · Polo Santa Cecília",
    fundo: "papel",
    legenda:
      "Santa Cecília não é só ponto de inscrição: é polo de cursos técnicos do Sistema FAESC/SENAR. Já formamos turma de Técnico em Zootecnia e turma de Técnico em Florestas. Formação técnica de verdade, aqui, sem precisar sair da região.",
  },
  {
    id: "52anos",
    tipo: "institucional",
    topo: "Desde 19 de agosto de 1974",
    destaque: "52",
    base: "anos ao lado do produtor",
    rodape: "Sindicato Rural de Santa Cecília",
    fundo: "escuro",
    legenda:
      "Cinquenta e dois anos. Cinco décadas de assembleias, cursos, orientação e defesa do produtor rural de Santa Cecília. Obrigado a cada associado que construiu esta história — e bem-vindo a quem está chegando agora.",
  },
  {
    id: "base",
    tipo: "base",
    topo: "Nossa base",
    destaque: "3 municípios",
    base: "Santa Cecília · Ponte Alta do Norte · Timbó Grande",
    rodape: "O Sindicato também é seu",
    fundo: "campo",
    legenda:
      "Você é de Ponte Alta do Norte ou de Timbó Grande? O Sindicato Rural de Santa Cecília também atende você. A base foi ampliada atendendo a um pedido dos próprios produtores dessas localidades. Mesmos cursos, mesma orientação, mesmo atendimento.",
  },
  {
    id: "faz",
    tipo: "carrossel",
    topo: "Você sabia?",
    destaque: "O que o Sindicato faz por você",
    rodape: "Arraste →",
    fundo: "papel",
    legenda:
      "Muita gente só lembra do Sindicato na hora do documento. Mas tem mais coisa aqui do que você imagina: cursos gratuitos, orientação sobre ITR, apoio em documentação, representação da classe e formação técnica. Arraste e confira item por item.",
  },
  {
    id: "equipe",
    tipo: "equipe",
    topo: "Quem atende você",
    destaque: "A gente está aqui",
    base: "Rua João Goetten Sobrinho, 671 · Centro",
    rodape: "Segunda a sexta · (49) 3244-2153",
    fundo: "escuro",
    legenda:
      "Atrás de cada curso e cada orientação tem gente. Esta é a equipe que atende você no Sindicato Rural de Santa Cecília. Passe para tomar um café e tirar suas dúvidas — a porta está aberta.",
  },
  {
    id: "agenda",
    tipo: "agenda",
    topo: "Agenda",
    destaque: "Outubro",
    base: "no Sindicato",
    rodape: "Salve este post",
    fundo: "ember",
    legenda:
      "Tudo o que acontece no Sindicato em outubro, num post só. Salve para não perder nenhuma data e compartilhe com o vizinho que ainda não segue a gente.",
  },
];

const FUNDOS = {
  ember: { bg: "#C8552F", ink: "#FFF6F1", dim: "#FFD9C7", rule: "#FFF6F1" },
  escuro: { bg: "#0D1411", ink: "#EDF2EE", dim: "#93A69C", rule: "#C8552F" },
  papel: { bg: "#F4F2EC", ink: "#17201C", dim: "#5A665F", rule: "#B8481F" },
  campo: { bg: "#D9A441", ink: "#2B1F06", dim: "#5F4A17", rule: "#2B1F06" },
  mato: { bg: "#2E5C43", ink: "#EAF5EE", dim: "#A6C7B4", rule: "#D9A441" },
} as const;

function Quadro({ p, mini = false }: { p: Post; mini?: boolean }) {
  const c = FUNDOS[p.fundo];
  const grande = p.destaque.length <= 6;
  return (
    <div
      className="flex aspect-square min-w-0 flex-col justify-between overflow-hidden p-3 sm:p-4"
      style={{ background: c.bg }}
    >
      <div className="min-w-0">
        <span
          className="block truncate font-mono uppercase tracking-[0.16em]"
          style={{ color: c.dim, fontSize: mini ? 7 : 9 }}
        >
          {p.topo}
        </span>
        <span aria-hidden className="mt-1.5 block h-[2px] w-6" style={{ background: c.rule }} />
      </div>

      <div className="min-w-0">
        <p
          className={`${serif} font-bold leading-[0.95] tracking-[-0.02em]`}
          style={{
            color: c.ink,
            fontSize: mini ? (grande ? 30 : 13) : grande ? 52 : 19,
          }}
        >
          {p.destaque}
        </p>
        {p.base && (
          <p
            className="mt-1.5 font-semibold leading-snug"
            style={{ color: c.dim, fontSize: mini ? 7.5 : 10.5 }}
          >
            {p.base}
          </p>
        )}
      </div>

      <p
        className="min-w-0 truncate font-mono uppercase tracking-[0.12em]"
        style={{ color: c.dim, fontSize: mini ? 6.5 : 8.5 }}
      >
        {p.rodape}
      </p>
    </div>
  );
}

export function ProposalSerraFeed() {
  const [sel, setSel] = useState<string | null>("itr");
  const post = POSTS.find((p) => p.id === sel) ?? null;

  return (
    <SerraSection id="feed" tone="darker">
      <SerraHeader
        eyebrow="O feed"
        title="Não é um exemplo genérico."
        accent="É a primeira quinzena de vocês."
        lead="Nove publicações escritas a partir do que o Sindicato realmente tem: o prazo do ITR que vence agora, as turmas do SENAR, o polo de cursos técnicos, os três municípios e os 52 anos. Toque numa delas para ler a legenda inteira."
      />

      <SerraReveal>
        <div className="mt-8">
          <SerraHint>Toque em qualquer publicação</SerraHint>
        </div>
      </SerraReveal>

      <SerraReveal delay={0.06}>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,390px)_minmax(0,1fr)] lg:gap-14">
          {/* o perfil */}
          <div className="mx-auto w-full max-w-[390px] min-w-0">
            <div className="overflow-hidden rounded-[10px] border border-[#2A3A33] bg-[#0D1411]">
              {/* cabeçalho do perfil */}
              <div className="border-b border-[#2A3A33] p-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#C8552F] bg-[#141D19]">
                    <span className={`${serif} text-[17px] font-bold leading-none text-[#C8552F]`}>
                      SR
                    </span>
                  </span>
                  <div className="grid min-w-0 flex-1 grid-cols-3 gap-1 text-center">
                    {[["9", "posts"], ["—", "seguidores"], ["3", "seguindo"]].map(([v, l]) => (
                      <span key={l} className="min-w-0">
                        <span className="block font-mono text-[14px] font-bold tabular-nums text-[#EDF2EE]">
                          {v}
                        </span>
                        <span className="block truncate text-[10.5px] text-[#63756C]">{l}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-[13px] font-semibold text-[#EDF2EE]">
                  sindicatoruralsantacecilia
                </p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#93A69C]">
                  Sindicato Rural de Santa Cecília · desde 1974
                  <br />
                  Cursos gratuitos do SENAR, ITR e apoio ao produtor
                  <br />
                  Santa Cecília · Ponte Alta do Norte · Timbó Grande
                  <br />
                  <span className="text-[#C8552F]">📍 R. João Goetten Sobrinho, 671 · Centro</span>
                </p>

                <div className="mt-4 flex gap-2">
                  <span className="flex-1 rounded-[5px] bg-[#C8552F] py-2 text-center text-[12px] font-semibold text-white">
                    Seguir
                  </span>
                  <span className="flex-1 rounded-[5px] border border-[#2A3A33] py-2 text-center text-[12px] text-[#93A69C]">
                    Mensagem
                  </span>
                </div>

                {/* destaques */}
                <div className="mt-5 flex gap-4 overflow-x-auto">
                  {["Cursos", "ITR", "A sede", "52 anos", "Agenda"].map((d) => (
                    <span key={d} className="flex flex-shrink-0 flex-col items-center gap-1.5">
                      <span className="h-12 w-12 rounded-full border border-[#2A3A33] bg-[#141D19]" />
                      <span className="text-[9.5px] text-[#93A69C]">{d}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* abas */}
              <div className="flex border-b border-[#2A3A33]">
                {[Grid3x3, Bookmark, UserSquare2].map((I, i) => (
                  <span
                    key={i}
                    className={`flex flex-1 justify-center border-b-2 py-2.5 ${
                      i === 0 ? "border-[#EDF2EE] text-[#EDF2EE]" : "border-transparent text-[#63756C]"
                    }`}
                  >
                    <I className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                ))}
              </div>

              {/* a grade */}
              <div className="grid grid-cols-3 gap-[2px] bg-[#2A3A33] p-[2px]">
                {POSTS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSel(p.id)}
                    aria-pressed={sel === p.id}
                    className={`relative min-w-0 transition-opacity ${
                      sel === p.id ? "opacity-100" : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Quadro p={p} mini />
                    {sel === p.id && (
                      <motion.span
                        layoutId="selPost"
                        className="pointer-events-none absolute inset-0 border-2 border-[#C8552F]"
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-4 text-center text-[11.5px] leading-snug text-[#63756C]">
              Estudo de feed. A arte final é produzida com a identidade
              <br className="hidden sm:block" /> e as fotos reais do Sindicato.
            </p>
          </div>

          {/* a publicação aberta */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              {post && (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.32 }}
                  className="min-w-0"
                >
                  <div className="grid gap-6 sm:grid-cols-[minmax(0,260px)_minmax(0,1fr)] sm:gap-8">
                    <div className="min-w-0 border border-[#2A3A33]">
                      <Quadro p={post} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-4 text-[#93A69C]">
                        <Heart className="h-5 w-5" strokeWidth={1.7} />
                        <MessageCircle className="h-5 w-5" strokeWidth={1.7} />
                        <Send className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8552F]">
                        Legenda
                      </p>
                      <p className="mt-3 max-w-[62ch] text-[14.5px] leading-relaxed text-[#EDF2EE]">
                        {post.legenda}
                      </p>
                      <p className="mt-5 max-w-[62ch] font-mono text-[12px] leading-relaxed text-[#63756C]">
                        #SindicatoRuralSantaCecilia #SenarSC #SistemaFaesc #ProdutorRural
                        #SantaCeciliaSC #PonteAltaDoNorte #TimboGrande
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SerraReveal>
    </SerraSection>
  );
}
