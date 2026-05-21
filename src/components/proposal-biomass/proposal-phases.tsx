"use client";

import { motion } from "framer-motion";
import type { ProposalPhase } from "@/lib/proposals-data";
import { CheckCircle2 } from "lucide-react";

interface Props { phases: ProposalPhase[]; }

export function ProposalBiomassPhases({ phases }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0C1F14] text-[#F2EAD0] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C4A035]/30 to-transparent" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] font-semibold tracking-[0.3em] text-[#C4A035] uppercase"
          >
            Roadmap do Projeto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F2EAD0] leading-[1.1]"
          >
            Crescimento estruturado<br className="hidden md:block" />
            <span className="italic text-[#C4A035]">em fases</span>
          </motion.h2>
        </div>

        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-[#C4A035]/20 hidden md:block" />

          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-[#C4A035] hidden md:block" />

              <div className="bg-[#1A3524] border border-[#C4A035]/15 p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <span className="font-playfair text-5xl font-medium text-[#C4A035]/30 leading-none shrink-0">
                    {String(phase.number).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#F2EAD0] mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-[#F2EAD0]/60 font-inter text-sm leading-relaxed">
                      {phase.objective}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-[#C4A035]/15">
                  <div>
                    <h4 className="text-[10px] font-semibold tracking-[0.25em] text-[#C4A035] uppercase mb-3">
                      Entregas
                    </h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#F2EAD0]/75 font-inter">
                          <CheckCircle2 className="w-4 h-4 text-[#C4A035] shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:border-l md:border-[#C4A035]/15 md:pl-6">
                    <h4 className="text-[10px] font-semibold tracking-[0.25em] text-[#C4A035] uppercase mb-3">
                      Resultado esperado
                    </h4>
                    <p className="text-sm text-[#F2EAD0]/75 font-inter leading-relaxed">
                      {phase.expectedResult}
                    </p>
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
