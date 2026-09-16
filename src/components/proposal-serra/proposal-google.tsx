"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, Phone, Navigation, Globe, Clock, Check, X, Printer, Handshake } from "lucide-react";
import { SerraSection, SerraHeader, SerraReveal, SerraHint, SerraPanel, serif } from "./serra-ui";

/* ================================================================
   O Google é o primeiro lugar onde o produtor procura, e hoje quem
   responde pelo Sindicato lá são agregadores. Aqui mostramos o
   antes e o depois do mesmo resultado de busca.
   ================================================================ */

export function ProposalSerraGoogle() {
  const [depois, setDepois] = useState(true);

  return (
    <SerraSection id="google" tone="papel">
      <SerraHeader
        claro
        eyebrow="Google Meu Negócio"
        title="O primeiro lugar onde o produtor procura"
        accent="é o que ninguém está cuidando."
        lead="Antes de ligar, as pessoas pesquisam. Hoje quem responde pelo Sindicato no Google são sites de terceiros que copiaram o endereço. Vire a chave e veja a mesma busca nos dois estados."
      />

      <SerraReveal>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div className="inline-flex border border-[#D3CEC0] bg-white p-1">
            {[
              { v: false, l: "Hoje" },
              { v: true, l: "Com o perfil" },
            ].map((o) => {
              const on = depois === o.v;
              return (
                <button
                  key={o.l}
                  type="button"
                  onClick={() => setDepois(o.v)}
                  aria-pressed={on}
                  className={`relative px-6 py-2.5 font-sans text-[13px] font-semibold transition-colors ${
                    on ? "text-[#17201C]" : "text-[#5A665F] hover:text-[#17201C]"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="chaveGoogle"
                      className="absolute inset-0 border border-[#B8481F]/60 bg-[#B8481F]/[0.08]"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative">{o.l}</span>
                </button>
              );
            })}
          </div>
          <SerraHint claro>Vire a chave</SerraHint>
        </div>
      </SerraReveal>

      <SerraReveal delay={0.06}>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-12">
          {/* a busca */}
          <div className="min-w-0 border border-[#D3CEC0] bg-white">
            <div className="flex items-center gap-3 border-b border-[#E5E1D6] px-5 py-4">
              <Search className="h-4 w-4 flex-shrink-0 text-[#5A665F]" />
              <span className="min-w-0 truncate font-mono text-[13px] text-[#17201C]">
                sindicato rural santa cecília sc
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={String(depois)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="p-5"
              >
                {depois ? (
                  <div className="min-w-0 border border-[#D3CEC0] p-5">
                    <p className={`${serif} text-[20px] font-bold leading-tight text-[#17201C]`}>
                      Sindicato Rural de Santa Cecília
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-1">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-[#D9A441] text-[#D9A441]" />
                        ))}
                      </span>
                      <span className="font-mono text-[12px] text-[#5A665F]">
                        4,9 · 37 avaliações
                      </span>
                    </div>
                    <p className="mt-2 text-[13px] text-[#5A665F]">
                      Sindicato · Entidade de classe rural
                    </p>
                    <p className="mt-1 flex flex-wrap items-center gap-1.5 text-[13px]">
                      <span className="font-semibold text-[#2E7355]">Aberto agora</span>
                      <span className="text-[#5A665F]">· Fecha às 17h</span>
                    </p>

                    <div className="mt-4 space-y-2">
                      {[
                        [Navigation, "Rua João Goetten Sobrinho, 671 · Centro · Santa Cecília/SC"],
                        [Phone, "(49) 3244-2153"],
                        [Globe, "srsantacecilia@faesc.com.br"],
                        [Clock, "Segunda a sexta, das 8h às 17h"],
                      ].map(([I, t], i) => {
                        const Icon = I as typeof Phone;
                        return (
                          <p key={i} className="flex items-start gap-2.5 text-[12.5px] text-[#17201C]">
                            <Icon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#5A665F]" />
                            <span className="min-w-0">{t as string}</span>
                          </p>
                        );
                      })}
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-1.5">
                      {["Sede", "Curso", "Turma", "Equipe"].map((f) => (
                        <span
                          key={f}
                          className="flex aspect-square items-center justify-center bg-[#E9E6DC] font-mono text-[9px] uppercase tracking-[0.1em] text-[#5A665F]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 border-t border-[#E5E1D6] pt-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#B8481F]">
                        Novidade publicada pelo Sindicato
                      </p>
                      <p className="mt-2 text-[12.5px] leading-snug text-[#17201C]">
                        Turma de curso gratuito do SENAR com inscrições abertas. Vagas limitadas —
                        inscreva-se pelo telefone ou na sede.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="min-w-0 space-y-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#B8481F]">
                      Nenhum perfil da entidade — só agregadores
                    </p>
                    {[
                      ["solutudo.com.br", "Sindicato Rural De Santa Cecilia em Santa Cecília, SC"],
                      ["guiamultiplo.com.br", "Sindicato Rural de Santa Cecília — Bairro: Centro"],
                      ["yelp.com", "SINDICATO RURAL DE SANTA CECÍLIA — Updated February 2026"],
                      ["planetabrasileiro.com", "Sindicato Rural De Santa Cecília — telefone"],
                    ].map(([d, t]) => (
                      <div key={d} className="min-w-0 border-b border-[#E5E1D6] pb-3">
                        <p className="truncate font-mono text-[11px] text-[#5A665F]">{d}</p>
                        <p className="mt-1 truncate text-[14px] text-[#1a0dab]">{t}</p>
                        <p className="mt-1 text-[12px] text-[#5A665F]">
                          Endereço e telefone copiados de cadastro público. Sem foto, sem horário,
                          sem resposta.
                        </p>
                      </div>
                    ))}
                    <div className="flex items-start gap-2.5 bg-[#B8481F]/[0.07] p-4">
                      <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#B8481F]" strokeWidth={2.6} />
                      <p className="min-w-0 text-[12.5px] leading-snug text-[#17201C]">
                        Nenhuma dessas páginas é do Sindicato. Nenhuma pode ser corrigida por vocês.
                        E é isso que o produtor encontra.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* o que muda */}
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#B8481F]">
              O que o perfil verificado resolve
            </p>
            <ul className="mt-5 space-y-4">
              {[
                ["Aparece no Maps", "Quem digita o nome recebe rota até a Rua João Goetten Sobrinho, 671."],
                ["Horário correto", "O produtor sai de Timbó Grande sabendo que vai encontrar alguém."],
                ["Telefone e e-mail oficiais", "Sem depender de cadastro de terceiro que pode estar desatualizado."],
                ["Fotos da sede e das turmas", "Quem nunca veio já sabe onde é e como é."],
                ["Turma aberta publicada no Google", "O curso aparece na busca, não só para quem já segue."],
                ["Avaliações respondidas", "A entidade passa a ter voz no lugar onde falam dela."],
              ].map(([t, d]) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#2E7355]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3.2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14px] font-semibold text-[#17201C]">{t}</span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-[#5A665F]">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-[#D3CEC0] pl-4 text-[12.5px] leading-relaxed text-[#5A665F]">
              As avaliações e as fotos do exemplo são ilustrativas. O perfil, a verificação e a
              alimentação mensal é que são o serviço.
            </p>
          </div>
        </div>
      </SerraReveal>
    </SerraSection>
  );
}

/* ==================== MATERIAL FÍSICO ==================== */

const PECAS = [
  { t: "Banner de lona", d: "Curso, assembleia, dia de campo e feira", f: "2 × 1 m · PDF em alta" },
  { t: "Cartaz A3", d: "Para fixar na sede, na cooperativa e no comércio", f: "297 × 420 mm · CMYK" },
  { t: "Folder e panfleto", d: "O que o Sindicato faz, para entregar na mão", f: "Frente e verso · com sangria" },
  { t: "Adesivo de veículo", d: "Identificação da caminhonete e do trator", f: "Vetor · escalável" },
  { t: "Faixa de evento", d: "Abertura de curso e entrega de certificados", f: "Sob medida" },
  { t: "Convite de assembleia", d: "Digital para WhatsApp e impresso para a base", f: "Duas versões" },
  { t: "Modelo de certificado", d: "Padrão da entidade para cada turma formada", f: "Editável" },
  { t: "Placa e sinalização", d: "Fachada, recepção e sala de curso", f: "Arte para impressão" },
];

export function ProposalSerraMaterial() {
  return (
    <SerraSection id="material">
      <SerraHeader
        eyebrow="Material impresso"
        title="A arte é nossa."
        accent="A impressão fica com quem imprime bem."
        lead="Banner, cartaz, folder, adesivo, convite e certificado — tudo criado no padrão da entidade e entregue em arquivo final pronto para gráfica. A impressão em si não fazemos, e explicamos exatamente por quê."
      />

      <SerraReveal>
        <div className="mt-14 grid gap-px bg-[#2A3A33] sm:grid-cols-2 lg:grid-cols-4">
          {PECAS.map((p) => (
            <div key={p.t} className="min-w-0 bg-[#0D1411] p-6">
              <p className={`${serif} text-[17px] font-bold leading-snug text-[#EDF2EE]`}>{p.t}</p>
              <p className="mt-2.5 text-[13px] leading-snug text-[#93A69C]">{p.d}</p>
              <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#63756C]">
                {p.f}
              </p>
            </div>
          ))}
        </div>
      </SerraReveal>

      <SerraReveal delay={0.08}>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <SerraPanel>
            <div className="flex items-center gap-3">
              <Printer className="h-5 w-5 flex-shrink-0 text-[#93A69C]" strokeWidth={1.7} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#93A69C]">
                O que não fazemos, e por quê
              </span>
            </div>
            <p className="mt-5 text-[14.5px] leading-relaxed text-[#93A69C]">
              A Genyus não imprime. Agência que revende impressão acaba escolhendo a gráfica pela
              margem, e não pela qualidade.{" "}
              <span className="text-[#EDF2EE]">
                Preferimos entregar o arquivo final e deixar o Sindicato negociar direto
              </span>{" "}
              — sem intermediário, sem marcação escondida no orçamento da lona.
            </p>
          </SerraPanel>

          <SerraPanel tone="mato">
            <div className="flex items-center gap-3">
              <Handshake className="h-5 w-5 flex-shrink-0 text-[#5A9E6F]" strokeWidth={1.7} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5A9E6F]">
                O que fazemos no lugar
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "Indicamos gráficas parceiras da região, já testadas por nós",
                "Entregamos o arquivo no formato exato que aquela gráfica pede",
                "Falamos direto com o impressor quando surge dúvida técnica",
                "Conferimos a prova antes de a tiragem rodar",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] leading-snug text-[#EDF2EE]">
                  <Check className="mt-[3px] h-3.5 w-3.5 flex-shrink-0 text-[#5A9E6F]" strokeWidth={2.8} />
                  <span className="min-w-0">{t}</span>
                </li>
              ))}
            </ul>
          </SerraPanel>
        </div>
      </SerraReveal>
    </SerraSection>
  );
}
