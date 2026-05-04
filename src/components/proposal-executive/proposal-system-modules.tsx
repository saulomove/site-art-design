"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SystemModule {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface Props {
  modules: SystemModule[];
}

export function ProposalExecutiveSystemModules({ modules }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F0F12] text-[#F8F4EC] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#C8302D]/[0.05] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#D4AF6F]/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase"
          >
            Módulos do Sistema
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F8F4EC] leading-[1.1]"
          >
            Tudo que você precisa <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">em um só lugar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#F8F4EC]/65 font-inter font-light max-w-3xl mx-auto leading-relaxed"
          >
            Construído sob medida para a operação multi-filial da Ademicon. Sem features inúteis — só o que move o ponteiro.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#D4AF6F]/10 border border-[#D4AF6F]/15">
          {modules.map((mod, idx) => {
            const IconComponent = (Icons[mod.icon as keyof typeof Icons] as LucideIcon) || Icons.Box;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-[#0F0F12] hover:bg-[#18181C] transition-colors p-8 md:p-10 group"
              >
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#D4AF6F]/15">
                  <div className="w-12 h-12 bg-[#C8302D]/10 border border-[#C8302D]/40 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-[#C8302D]" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-playfair text-[#D4AF6F]/70 text-sm font-medium mb-1">
                      Módulo {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-playfair text-2xl font-medium text-[#F8F4EC] mb-2">
                      {mod.title}
                    </h3>
                    <p className="text-[#F8F4EC]/65 font-inter text-sm leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {mod.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#F8F4EC]/80 font-inter">
                      <span className="text-[#C8302D] mt-1.5 shrink-0 text-[8px]">▸</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
