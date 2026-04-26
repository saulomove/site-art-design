"use client";

import { motion } from "framer-motion";
import { Lightbulb, Quote } from "lucide-react";

interface ContentSuggestion {
  format: string;
  theme: string;
  hook: string;
  description: string;
}

interface Props {
  contentSuggestions: ContentSuggestion[];
}

export function ProposalExecutiveContentIdeas({ contentSuggestions }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#F8F4EC] text-[#0F0F12] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, #C8302D 0, #C8302D 1px, transparent 1px, transparent 22px)"
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] text-[#C8302D] uppercase"
          >
            <Lightbulb className="w-4 h-4" />
            Pré-visualização do Conteúdo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F0F12] leading-[1.1]"
          >
            Algumas ideias que <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">já estão na manga</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#0F0F12]/65 font-inter font-light max-w-3xl mx-auto leading-relaxed"
          >
            Estes são exemplos reais de Reels e carrosséis pensados especificamente para o seu nicho — autoridade, prova social e conversão. Não é teoria: é o que vai pro feed.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contentSuggestions.map((idea, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border border-[#0F0F12]/10 p-8 hover:border-[#C8302D]/40 transition-colors group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8302D]/10 border border-[#C8302D]/30">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#C8302D] uppercase">
                    {idea.format}
                  </span>
                </span>
                <span className="font-playfair text-2xl font-medium text-[#D4AF6F]/60">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-playfair text-xl md:text-2xl font-medium text-[#0F0F12] mb-4 leading-snug">
                {idea.theme}
              </h3>

              <div className="bg-[#F8F4EC] border-l-2 border-[#C8302D] p-4 mb-5">
                <Quote className="w-3 h-3 text-[#C8302D] mb-2" />
                <p className="text-[#0F0F12] font-playfair italic text-base leading-relaxed">
                  &ldquo;{idea.hook}&rdquo;
                </p>
              </div>

              <p className="text-sm text-[#0F0F12]/70 font-inter leading-relaxed">
                {idea.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-sm text-[#0F0F12]/55 font-inter italic max-w-2xl mx-auto"
        >
          Estes são apenas {contentSuggestions.length} exemplos. O calendário editorial mensal entrega 20+ ideias no mesmo nível, mapeadas pelos pilares: autoridade, educação, prova social e conversão.
        </motion.p>
      </div>
    </section>
  );
}
