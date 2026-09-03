"use client";

import { motion } from "framer-motion";
import type { ProposalArtPiece } from "@/lib/proposals-data";
import { Film, Images, Square } from "lucide-react";
import { VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow } from "./vinicola-ui";

interface Props {
  contentSuggestions?: {
    format: string;
    theme: string;
    hook: string;
    description: string;
  }[];
  artDirection?: ProposalArtPiece[];
}

/** Tom por formato — classes literais. */
const FORMAT_TONES: Record<
  string,
  { text: string; border: string; bg: string; Icon: typeof Film }
> = {
  Reels: {
    text: "text-[#CA8B35]",
    border: "border-[#CA8B35]/35",
    bg: "bg-[#CA8B35]/10",
    Icon: Film,
  },
  Carrossel: {
    text: "text-[#E6AE50]",
    border: "border-[#E6AE50]/35",
    bg: "bg-[#E6AE50]/10",
    Icon: Images,
  },
  Post: {
    text: "text-[#CCCCCC]",
    border: "border-[#CCCCCC]/25",
    bg: "bg-[#CCCCCC]/[0.07]",
    Icon: Square,
  },
};

const DEFAULT_TONE = FORMAT_TONES.Post;

export function ProposalVinicolaContent({
  contentSuggestions,
  artDirection,
}: Props) {
  return (
    <section id="conteudo" className="scroll-mt-[68px] relative overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />

      <div className="pointer-events-none absolute left-0 top-1/3 h-[45%] w-[40%] rounded-full bg-[#CA8B35]/[0.05] blur-[150px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="Sugestão de conteúdo"
          title="O que publicaríamos"
          italic="já na primeira semana"
          lead="Pautas construídas sobre o que a Santa Augusta já tem e não usa: o prêmio guardado, as pessoas da casa, a altitude, o Wine Garden e a escada de rótulos. Toda legenda termina em pergunta ou tarefa."
        />

        {/* Pautas */}
        {contentSuggestions && contentSuggestions.length > 0 && (
          <div className="mb-24 grid gap-5 md:grid-cols-2">
            {contentSuggestions.map((item, idx) => {
              const tone = FORMAT_TONES[item.format] ?? DEFAULT_TONE;
              const Icon = tone.Icon;

              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: Math.min(idx, 5) * 0.05 }}
                  className="flex flex-col border border-[#CCCCCC]/10 bg-[#121110] p-7 md:p-8"
                >
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-2 border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${tone.border} ${tone.bg} ${tone.text}`}
                    >
                      <Icon className="h-3 w-3" />
                      {item.format}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC]/40">
                      {item.theme}
                    </span>
                  </div>

                  <p className="font-playfair text-lg font-medium italic leading-snug text-white md:text-xl">
                    {item.hook}
                  </p>

                  <p className="mt-4 text-[14px] leading-relaxed text-[#CCCCCC]/60">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* Direção de arte */}
        {artDirection && artDirection.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="mb-12 border-t border-[#CCCCCC]/10 pt-14 text-center"
            >
              <VinicolaEyebrow>Direção de arte</VinicolaEyebrow>
              <h3 className="mx-auto mt-5 max-w-2xl font-playfair text-2xl font-medium leading-snug text-white md:text-4xl">
                Não é promessa de padrão.{" "}
                <span className="italic text-[#CA8B35]">É o padrão.</span>
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/60">
                As peças abaixo foram produzidas por nós especificamente para a
                Santa Augusta, antes de qualquer contrato — usando os rótulos e
                a identidade da casa.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {artDirection.map((piece, idx) => (
                <motion.figure
                  key={piece.image}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: Math.min(idx, 4) * 0.08 }}
                  className="group flex flex-col border border-[#CCCCCC]/10 bg-[#121110]"
                >
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={piece.image}
                      alt={`${piece.title} — ${piece.format}`}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="flex flex-1 flex-col p-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#CA8B35]/70">
                      {piece.format}
                    </span>
                    <span className="mt-2 font-playfair text-lg font-medium text-white">
                      {piece.title}
                    </span>
                    <span className="mt-3 text-[13px] leading-relaxed text-[#CCCCCC]/55">
                      {piece.note}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
