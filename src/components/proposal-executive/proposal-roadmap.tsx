"use client";

import { motion } from "framer-motion";
import type { ProposalPhase } from "@/lib/proposals-data";
import { Target } from "lucide-react";

interface Props {
  phases: ProposalPhase[];
}

export function ProposalExecutiveRoadmap({ phases }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F0F12] text-[#F8F4EC] overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D4AF6F]/[0.04] blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase"
          >
            Plano de Execução
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F8F4EC] leading-[1.1]"
          >
            Roadmap dos primeiros <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">90 dias</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#F8F4EC]/65 font-inter font-light max-w-3xl mx-auto"
          >
            Sem mistério. Cada mês com objetivo claro, entregáveis específicos e resultados mensuráveis.
          </motion.p>
        </div>

        <div className="space-y-6">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="grid lg:grid-cols-[auto,1fr] gap-6 lg:gap-10 items-start bg-[#18181C] border border-[#D4AF6F]/15 p-8 md:p-10 hover:border-[#D4AF6F]/40 transition-colors"
            >
              {/* Number */}
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 lg:min-w-[180px]">
                <span className="font-playfair text-7xl md:text-8xl font-medium text-[#C8302D] leading-none">
                  {String(phase.number).padStart(2, "0")}
                </span>
                <div className="lg:border-l-2 lg:border-[#D4AF6F]/40 lg:pl-4 lg:mt-2">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase">Mês {phase.number}</p>
                  <h3 className="font-playfair text-xl font-medium text-[#F8F4EC]">
                    {phase.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase mb-2">Objetivo</p>
                  <p className="text-[#F8F4EC]/85 font-inter text-base leading-relaxed">
                    {phase.objective}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase mb-3">Entregáveis</p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#F8F4EC]/75 font-inter">
                        <span className="text-[#C8302D] mt-1.5 shrink-0 text-[8px]">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0F0F12] border-l-2 border-[#C8302D] p-5">
                  <div className="flex items-start gap-3">
                    <Target className="w-4 h-4 text-[#C8302D] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase mb-1">Resultado esperado</p>
                      <p className="text-[#F8F4EC]/90 font-inter text-sm leading-relaxed">
                        {phase.expectedResult}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
