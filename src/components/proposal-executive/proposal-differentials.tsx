"use client";

import { motion } from "framer-motion";
import { Award, Globe2, Users, Code2, Headphones, Zap } from "lucide-react";

interface Props {
  differentials: string[];
}

const iconMap = [Award, Users, Globe2, Code2, Headphones, Zap];

export function ProposalExecutiveDifferentials({ differentials }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#F8F4EC] text-[#0F0F12] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold tracking-[0.4em] text-[#C8302D] uppercase"
          >
            Por que ArtDesign
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F0F12] leading-[1.1]"
          >
            16 anos transformando <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">presença em receita</span>
          </motion.h2>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#0F0F12]/10 border border-[#0F0F12]/10 mb-16"
        >
          {[
            { v: "16+", l: "Anos de mercado" },
            { v: "449", l: "Clientes atendidos" },
            { v: "8", l: "Países com clientes" },
            { v: "200+", l: "Projetos entregues" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#F8F4EC] p-8 text-center">
              <div className="font-playfair text-4xl md:text-5xl font-medium text-[#C8302D] mb-2 tracking-tight">
                {stat.v}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F0F12]/70">
                {stat.l}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Differentials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white border border-[#0F0F12]/10 p-6 hover:border-[#C8302D]/40 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-[#C8302D]/10 border border-[#C8302D]/30 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#C8302D]" />
                </div>
                <p className="text-[#0F0F12]/85 font-inter text-sm leading-relaxed">
                  {item}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
