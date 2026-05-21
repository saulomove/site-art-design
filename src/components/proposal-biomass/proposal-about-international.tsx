"use client";

import { motion } from "framer-motion";
import { Globe2, TrendingUp, Shield, Users, Leaf } from "lucide-react";

const stats = [
  { value: "+16", label: "Anos de mercado", sub: "Desde 2008 no digital" },
  { value: "8", label: "Países atendidos", sub: "Brasil, EUA, Europa e mais" },
  { value: "+200", label: "Projetos entregues", sub: "B2B, indústria e exportação" },
  { value: "3", label: "Idiomas de operação", sub: "PT · EN · ES" },
];

const pillars = [
  {
    icon: Globe2,
    title: "Presença internacional",
    description: "Atendemos empresas que operam em mercados globais — com comunicação estruturada para Brasil, Europa e América do Norte.",
  },
  {
    icon: TrendingUp,
    title: "Resultado, não promessa",
    description: "Estratégias baseadas em dados reais, com metas definidas desde o primeiro contrato e relatórios mensais com transparência total.",
  },
  {
    icon: Shield,
    title: "Parceiro de longo prazo",
    description: "Não vendemos projetos avulsos. Construímos ecossistemas digitais que crescem junto com o negócio do cliente.",
  },
  {
    icon: Users,
    title: "Equipe multidisciplinar",
    description: "Estrategistas, designers, desenvolvedores e especialistas em tráfego pago trabalhando de forma integrada.",
  },
];

export function ProposalBiomassAboutInternational() {
  return (
    <section className="relative py-24 md:py-32 bg-[#F2EAD0] text-[#0C1F14] overflow-hidden">
      {/* Decorative top */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#C4A035]/40" />
        <Leaf className="mx-4 h-5 w-5 text-[#C4A035]" />
        <div className="h-[1px] w-32 bg-[#C4A035]/40" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] font-semibold tracking-[0.3em] text-[#C4A035] uppercase"
          >
            Quem vai trabalhar por vocês
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0C1F14] leading-[1.1]"
          >
            ArtDesign — agência full service<br className="hidden md:block" />
            <span className="italic text-[#0C1F14]/60">com atuação internacional</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-[#0C1F14]/70 font-inter font-light max-w-3xl mx-auto leading-relaxed"
          >
            Fundada em 2008, a ArtDesign atua há mais de 16 anos no mercado digital, construindo estratégias para empresas brasileiras que operam localmente, nationally e no exterior. Entendemos os dois mundos: a realidade industrial do Sul do Brasil e as exigências do mercado europeu.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-[#0C1F14]/10 p-6 md:p-8 text-center"
            >
              <div className="font-playfair text-4xl md:text-5xl font-medium text-[#C4A035] mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-[#0C1F14] text-sm mb-1">{stat.label}</div>
              <div className="text-[#0C1F14]/50 text-xs font-inter">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-5 p-8 bg-white border border-[#0C1F14]/10"
              >
                <div className="w-12 h-12 rounded-full bg-[#0C1F14] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#C4A035]" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-medium text-[#0C1F14] mb-2">{pillar.title}</h3>
                  <p className="text-[#0C1F14]/65 font-inter text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* International highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#0C1F14] text-[#F2EAD0] p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C4A035]/40 to-transparent" />
          <Globe2 className="w-8 h-8 text-[#C4A035] mx-auto mb-6" />
          <p className="font-playfair text-xl md:text-2xl italic text-[#F2EAD0] leading-relaxed max-w-3xl mx-auto">
            &ldquo;A Joma Pellet tem certificação internacional e potencial de exportação real. Nossa agência entende o que significa construir autoridade digital para mercados exigentes — porque já fizemos isso para outras empresas brasileiras no exterior.&rdquo;
          </p>
          <p className="mt-6 text-[11px] text-[#C4A035] tracking-[0.3em] uppercase font-semibold">
            ArtDesign · Videira, SC · Desde 2008
          </p>
        </motion.div>
      </div>
    </section>
  );
}
