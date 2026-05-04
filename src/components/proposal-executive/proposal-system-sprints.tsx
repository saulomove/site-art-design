"use client";

import { motion } from "framer-motion";
import { Flag } from "lucide-react";

interface SystemSprint {
  number: number;
  weeks: string;
  title: string;
  deliverables: string[];
  milestone: string;
}

interface Props {
  sprints: SystemSprint[];
}

export function ProposalExecutiveSystemSprints({ sprints }: Props) {
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
            className="inline-block text-[10px] font-bold tracking-[0.4em] text-[#C8302D] uppercase"
          >
            Cronograma de Entrega
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F0F12] leading-[1.1]"
          >
            7 sprints <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">do código ao go-live</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C8302D] via-[#D4AF6F] to-[#C8302D]" />

          <div className="space-y-6">
            {sprints.map((sprint, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="grid md:grid-cols-[120px,1fr] gap-6 md:gap-10 items-start"
              >
                {/* Number bubble */}
                <div className="relative flex md:flex-col items-center md:items-center gap-4 md:gap-2">
                  <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[80px] bg-[#0F0F12] border border-[#D4AF6F] flex items-center justify-center z-10">
                    <span className="font-playfair text-3xl md:text-4xl font-medium text-[#D4AF6F]">
                      {String(sprint.number).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#C8302D] uppercase md:text-center md:mt-1">
                    {sprint.weeks}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-white border border-[#0F0F12]/10 p-6 md:p-8 hover:border-[#C8302D]/40 transition-colors">
                  <h3 className="font-playfair text-xl md:text-2xl font-medium text-[#0F0F12] mb-4">
                    {sprint.title}
                  </h3>

                  <div className="mb-5">
                    <p className="text-[10px] font-bold tracking-[0.3em] text-[#C8302D]/80 uppercase mb-3">Entregáveis</p>
                    <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2">
                      {sprint.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#0F0F12]/80 font-inter">
                          <span className="text-[#C8302D] mt-1.5 shrink-0 text-[8px]">▸</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#F8F4EC] border-l-2 border-[#D4AF6F] p-4">
                    <div className="flex items-start gap-3">
                      <Flag className="w-4 h-4 text-[#D4AF6F] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.3em] text-[#0F0F12]/55 uppercase mb-1">Milestone</p>
                        <p className="text-sm text-[#0F0F12] font-inter font-semibold leading-snug">
                          {sprint.milestone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
