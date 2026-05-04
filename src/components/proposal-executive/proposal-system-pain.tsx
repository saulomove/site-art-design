"use client";

import { motion } from "framer-motion";
import { Clock, Zap, X, Check, ArrowRight } from "lucide-react";

interface SystemPain {
  title: string;
  intro?: string;
  before: { dayLabel: string; title: string; items: string[]; result: string };
  after: { dayLabel: string; title: string; items: string[]; result: string };
}

interface Props {
  pain: SystemPain;
}

export function ProposalExecutiveSystemPain({ pain }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#F8F4EC] text-[#0F0F12] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold tracking-[0.4em] text-[#C8302D] uppercase"
          >
            O Antes e o Depois
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F0F12] leading-[1.1]"
          >
            {pain.title}
          </motion.h2>
          {pain.intro && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-[#0F0F12]/65 font-inter font-light max-w-3xl mx-auto leading-relaxed"
            >
              {pain.intro}
            </motion.p>
          )}
        </div>

        <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-6 lg:gap-4 items-stretch">
          {/* HOJE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F0F12]/[0.04] border border-[#0F0F12]/15 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#0F0F12]/15">
              <div className="w-12 h-12 bg-[#0F0F12]/10 border border-[#0F0F12]/20 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#0F0F12]/60" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#0F0F12]/55 uppercase">{pain.before.dayLabel}</p>
                <h3 className="font-playfair text-2xl font-medium text-[#0F0F12]">
                  {pain.before.title}
                </h3>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {pain.before.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#C8302D]/70 shrink-0 mt-1" />
                  <span className="text-sm text-[#0F0F12]/75 font-inter leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-white border-l-2 border-[#C8302D] p-4 mt-4">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#C8302D] uppercase mb-1">Resultado</p>
              <p className="text-sm text-[#0F0F12] font-inter font-semibold leading-snug">
                {pain.before.result}
              </p>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex flex-col items-center justify-center px-2"
          >
            <div className="w-14 h-14 bg-[#C8302D] flex items-center justify-center text-[#F8F4EC]">
              <ArrowRight className="w-7 h-7" />
            </div>
            <p className="mt-3 text-[10px] font-bold tracking-[0.3em] text-[#C8302D] uppercase whitespace-nowrap">
              7 Semanas
            </p>
          </motion.div>

          {/* AMANHÃ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F0F12] text-[#F8F4EC] p-8 md:p-10 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF6F]" />
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#D4AF6F]/30">
              <div className="w-12 h-12 bg-[#D4AF6F]/10 border border-[#D4AF6F]/40 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-[#D4AF6F]" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase">{pain.after.dayLabel}</p>
                <h3 className="font-playfair text-2xl font-medium text-[#F8F4EC]">
                  {pain.after.title}
                </h3>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {pain.after.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D4AF6F] shrink-0 mt-1" />
                  <span className="text-sm text-[#F8F4EC]/85 font-inter leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-[#18181C] border-l-2 border-[#D4AF6F] p-4 mt-4">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase mb-1">Resultado</p>
              <p className="text-sm text-[#F8F4EC] font-inter font-semibold leading-snug">
                {pain.after.result}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
