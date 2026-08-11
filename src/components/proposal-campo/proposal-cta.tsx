"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { MessageCircle, X, Handshake } from "lucide-react";
import { CampoDivider } from "./campo-ui";

interface Props {
  proposal: Proposal;
}

/** Alterna o acento das percepções entre as duas marcas. */
const QUOTE_TONES = [
  { text: "text-[#6E8F5E]", border: "border-[#6E8F5E]/25" },
  { text: "text-[#CBA65C]", border: "border-[#CBA65C]/25" },
] as const;

export function ProposalCampoCta({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  // Mensagem própria: o clientName combinado ("Massaneiro + UDK") leria mal
  // no template padrão do projeto.
  const whatsappMessage = encodeURIComponent(
    "Olá! Recebi a proposta de presença digital da ArtDesign para a Massaneiro Mudas Florestais e a UDK Consultoria, e gostaria de conversar.",
  );
  const whatsappUrl = `https://wa.me/${proposal.whatsappNumber}?text=${whatsappMessage}`;

  const anchor = proposal.valueAnchor;

  return (
    <section className="relative bg-[#060706] text-[#EFEBE0] py-24 md:py-32 overflow-hidden">
      <CampoDivider tone="joint" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[75%] h-[60%] bg-gradient-to-r from-[#6E8F5E]/[0.07] to-[#CBA65C]/[0.07] blur-[160px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #CBA65C 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* ---- O que estão contratando de verdade ---- */}
        {anchor && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-[1px] w-8 bg-[#EFEBE0]/25" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-semibold font-inter text-[#EFEBE0]/40">
                  O que vocês estão contratando
                </span>
                <div className="h-[1px] w-8 bg-[#EFEBE0]/25" />
              </div>
              <h2 className="font-playfair text-3xl md:text-5xl font-medium leading-tight text-[#EFEBE0]">
                Não é um pacote de posts.{" "}
                <span className="italic bg-gradient-to-r from-[#6E8F5E] to-[#CBA65C] bg-clip-text text-transparent">
                  É a imagem digital de duas empresas.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14"
            >
              {/* Não estão contratando */}
              <div className="bg-[#131412] border border-[#EFEBE0]/[0.07] p-8 md:p-10">
                <p className="text-[10px] tracking-[0.3em] uppercase font-semibold font-inter text-[#EFEBE0]/30 mb-6">
                  Não estão contratando
                </p>
                <ul className="space-y-3.5">
                  {anchor.notList.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm font-inter text-[#EFEBE0]/35"
                    >
                      <X className="w-4 h-4 flex-shrink-0 text-[#EFEBE0]/25" />
                      <span className="line-through decoration-[#EFEBE0]/20">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Estão contratando */}
              <div className="bg-[#151614] border border-[#CBA65C]/25 p-8 md:p-10 relative">
                <div className="absolute top-0 left-0 pointer-events-none">
                  <div className="w-6 h-[2px] bg-[#6E8F5E]" />
                  <div className="w-[2px] h-6 bg-[#6E8F5E]" />
                </div>
                <div className="absolute top-0 right-0 pointer-events-none flex flex-col items-end">
                  <div className="w-6 h-[2px] bg-[#CBA65C]" />
                  <div className="w-[2px] h-6 bg-[#CBA65C] ml-auto" />
                </div>

                <p className="text-[10px] tracking-[0.3em] uppercase font-semibold font-inter text-[#CBA65C]/80 mb-6">
                  Estão contratando
                </p>
                <p className="font-playfair text-xl md:text-2xl font-medium text-[#EFEBE0] leading-relaxed">
                  {anchor.statement}
                </p>
              </div>
            </motion.div>

            {/* Percepções */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mb-6"
            >
              <p className="text-center text-sm text-[#EFEBE0]/45 font-inter font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                Quando alguém pesquisar pelas marcas daqui a alguns meses,
                queremos que a percepção seja:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {anchor.perceptions.map((perception, idx) => {
                  const tone = QUOTE_TONES[idx % QUOTE_TONES.length];
                  return (
                    <div
                      key={idx}
                      className={`bg-[#131412] border p-6 md:p-7 ${tone.border}`}
                    >
                      <span
                        className={`font-playfair text-4xl leading-none opacity-25 ${tone.text}`}
                      >
                        &ldquo;
                      </span>
                      <p className="font-playfair text-lg md:text-xl italic font-medium text-[#EFEBE0]/85 -mt-3">
                        {perception}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="text-center font-inter text-sm text-[#EFEBE0]/45 mt-8">
                {anchor.closing}
              </p>
            </motion.div>

            <div className="h-[1px] w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-[#EFEBE0]/15 to-transparent my-16" />
          </>
        )}

        {/* ---- Encerramento ---- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] text-[#EFEBE0] mb-8">
            Vocês já construíram autoridade no campo.
            <br className="hidden md:block" />{" "}
            <span className="italic bg-gradient-to-r from-[#6E8F5E] to-[#CBA65C] bg-clip-text text-transparent">
              Agora é hora de fazer o digital mostrar isso.
            </span>
          </h2>

          <p className="text-base md:text-lg text-[#EFEBE0]/50 font-inter font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Massaneiro e UDK não precisam parecer maiores do que são. Precisam
            apenas mostrar, de maneira profissional, tudo aquilo que já são.
          </p>

          {/* Assinatura da tese */}
          <p className="font-playfair text-2xl md:text-4xl font-medium leading-tight mb-12">
            <span className="text-[#6E8F5E]">Duas empresas.</span>{" "}
            <span className="text-[#CBA65C]">Duas identidades.</span>
            <br className="hidden sm:block" />{" "}
            <span className="text-[#EFEBE0]">
              Uma estratégia integrada de autoridade digital.
            </span>
          </p>

          {proposal.closingQuestion && (
            <p className="font-playfair text-lg md:text-xl italic text-[#EFEBE0]/60 max-w-2xl mx-auto mb-10">
              {proposal.closingQuestion}
            </p>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#6E8F5E] to-[#CBA65C] text-[#0A0A09] font-semibold font-inter text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_45px_rgba(203,166,92,0.25)]"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>

          <p className="mt-6 text-xs text-[#EFEBE0]/30 font-inter">
            Proposta válida até {formattedDate}
          </p>
        </motion.div>

        {/* Rodapé */}
        <div className="mt-20 pt-10 border-t border-[#EFEBE0]/[0.07] flex flex-col items-center gap-3">
          <Handshake className="w-5 h-5 text-[#EFEBE0]/25" />
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#EFEBE0]/30 font-inter text-center">
            ArtDesign · Agência Full Service · +16 anos · 8 países
          </p>
        </div>
      </div>
    </section>
  );
}
