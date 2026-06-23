"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  BookOpen,
  Camera,
  Sprout,
  Users,
  ShoppingBag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ContentSuggestion {
  format: string;
  theme: string;
  hook: string;
  description: string;
}

interface Props {
  contentSuggestions?: ContentSuggestion[];
}

interface ContentPillar {
  title: string;
  icon: LucideIcon;
  iconColor: "gold" | "green";
  description: string;
  examples: string[];
}

const contentPillars: ContentPillar[] = [
  {
    title: "Autoridade",
    icon: BookOpen,
    iconColor: "gold",
    description:
      "Conteúdos técnicos que educam e posicionam a marca como expert em alfafa premium.",
    examples: [
      "Por que a alfafa é a rainha das forrageiras?",
      "Quanto de proteína existe na alfafa?",
      "Alfafa ou feno comum: qual a diferença?",
    ],
  },
  {
    title: "Produção",
    icon: Camera,
    iconColor: "green",
    description:
      "Bastidores autênticos da lavoura que geram conexão emocional e confiança.",
    examples: [
      "Dia de corte da alfafa",
      "Como nasce a Alfafa Santa Fé",
      "Bastidores da enfardadeira",
    ],
  },
  {
    title: "Resultado Animal",
    icon: Sprout,
    iconColor: "gold",
    description:
      "Provas visuais e técnicas do impacto do produto nos animais.",
    examples: [
      "Benefícios para cavalos crioulos",
      "Ganho de condição corporal",
      "Alimentação estratégica para haras",
    ],
  },
  {
    title: "Marca e Família",
    icon: Users,
    iconColor: "green",
    description:
      "Humanização da empresa — quem está por trás da qualidade que chega até o cliente.",
    examples: [
      "História da fazenda",
      "A família por trás da ASF",
      "Valores e tradição no agro",
    ],
  },
  {
    title: "Comercial",
    icon: ShoppingBag,
    iconColor: "gold",
    description:
      "Conteúdos diretos para geração de pedidos e orçamentos.",
    examples: [
      "Estoque disponível agora",
      "Regiões atendidas",
      "Como fazer seu pedido",
    ],
  },
];

export function ProposalPastoralContentStrategy({ contentSuggestions }: Props) {
  const hasContentSuggestions =
    contentSuggestions && contentSuggestions.length > 0;

  return (
    <section className="relative bg-[#0B1A0D] text-[#EDE5CC] py-24 md:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#C9A037]/40" />
        <Wheat className="mx-4 h-5 w-5 text-[#C9A037]" />
        <div className="h-[1px] w-32 bg-[#C9A037]/40" />
      </div>

      {/* Ambient glow top-right */}
      <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-[#C9A037]/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-[#C9A037]/60" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C9A037] font-inter">
              Estratégia de Conteúdo
            </span>
            <div className="h-[1px] w-8 bg-[#C9A037]/60" />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-medium text-[#EDE5CC] leading-tight mb-6">
            Os 5 pilares que vão construir{" "}
            <span className="italic text-[#C9A037]">a autoridade da marca</span>
          </h2>
          <p className="text-base md:text-lg text-[#EDE5CC]/55 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            Cada post que publicamos segue uma estratégia clara. Não se trata de
            postar por postar — cada conteúdo tem um objetivo específico que
            contribui para transformar a Alfafa Santa Fé em referência regional.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {contentPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isGold = pillar.iconColor === "gold";

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-[#132714] border border-[#C9A037]/15 p-7 hover:border-[#C9A037]/40 transition-colors duration-300 group"
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-[#C9A037]/10 border border-[#C9A037]/20 flex items-center justify-center mb-5 group-hover:border-[#C9A037]/40 transition-colors duration-300">
                  <Icon
                    className={`w-5 h-5 ${isGold ? "text-[#C9A037]" : "text-[#3D7A42]"}`}
                  />
                </div>

                {/* Pillar number + title */}
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A037]/60 font-inter mb-1">
                  Pilar {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="font-playfair text-xl font-medium text-[#EDE5CC] mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#EDE5CC]/55 font-inter leading-relaxed mb-5">
                  {pillar.description}
                </p>

                {/* Examples */}
                <ul className="space-y-2">
                  {pillar.examples.map((example) => (
                    <li
                      key={example}
                      className="flex items-start gap-2 text-sm text-[#EDE5CC]/40 font-inter"
                    >
                      <span className="text-[#C9A037]/60 flex-shrink-0 leading-5">
                        ◆
                      </span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Content suggestions (conditional) */}
        {hasContentSuggestions && (
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-[1px] w-8 bg-[#C9A037]/60" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C9A037] font-inter">
                  Exemplos de Conteúdo
                </span>
                <div className="h-[1px] w-8 bg-[#C9A037]/60" />
              </div>
              <h3 className="font-playfair text-2xl md:text-4xl font-medium text-[#EDE5CC] leading-tight">
                O que criaremos{" "}
                <span className="italic text-[#C9A037]">no primeiro mês</span>
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {contentSuggestions.map((suggestion, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.08 }}
                  className="border border-[#C9A037]/15 p-6 hover:border-[#C9A037]/30 transition-colors duration-300"
                >
                  {/* Format badge */}
                  <span className="inline-block px-3 py-1 bg-[#C9A037]/10 text-[#C9A037] border border-[#C9A037]/20 text-[9px] tracking-[0.2em] uppercase font-inter font-semibold mb-4">
                    {suggestion.format}
                  </span>

                  {/* Theme */}
                  <h4 className="font-playfair text-lg font-medium text-[#EDE5CC] mb-2">
                    {suggestion.theme}
                  </h4>

                  {/* Hook */}
                  <p className="font-playfair italic text-[#C9A037]/70 text-sm mb-3 leading-relaxed">
                    &ldquo;{suggestion.hook}&rdquo;
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#EDE5CC]/50 font-inter leading-relaxed">
                    {suggestion.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
