"use client";

import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  subtext?: string;
}

interface Props {
  stats: StatItem[];
  clientName: string;
}

export function ProposalExecutiveStats({ stats, clientName }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#F8F4EC] text-[#0F0F12] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C8302D 0, #C8302D 1px, transparent 1px, transparent 24px)"
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold tracking-[0.4em] text-[#C8302D] uppercase"
          >
            Diagnóstico em Números
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-medium text-[#0F0F12] leading-[1.1] max-w-4xl mx-auto"
          >
            O que o perfil do <span className="italic">{clientName}</span> revela hoje
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#0F0F12]/10 border border-[#0F0F12]/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#F8F4EC] p-8 md:p-10 text-center group hover:bg-white transition-colors"
            >
              <div className="font-playfair text-5xl md:text-6xl lg:text-7xl font-medium text-[#C8302D] leading-none mb-4 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F0F12]/80 mb-2">
                {stat.label}
              </div>
              {stat.subtext && (
                <p className="text-xs text-[#0F0F12]/55 font-inter leading-relaxed">
                  {stat.subtext}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
