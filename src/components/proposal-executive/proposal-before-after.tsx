"use client";

import { motion } from "framer-motion";
import type { ProposalBeforeAfter } from "@/lib/proposals-data";
import { ArrowRight, X, Check } from "lucide-react";

interface Props {
  beforeAfter: ProposalBeforeAfter;
  clientName: string;
}

export function ProposalExecutiveBeforeAfter({ beforeAfter, clientName }: Props) {
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
            Transformação em 90 Dias
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F0F12] leading-[1.1]"
          >
            De onde {clientName} parte <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">para onde vai chegar</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-6 lg:gap-8 items-stretch">
          {/* Antes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F0F12]/[0.04] border border-[#0F0F12]/15 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#0F0F12]/15">
              <span className="font-playfair text-3xl font-medium text-[#0F0F12]/40">01</span>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#0F0F12]/55 uppercase">Cenário Atual</p>
                <h3 className="font-playfair text-2xl font-medium text-[#0F0F12]">
                  {beforeAfter.beforeTitle}
                </h3>
              </div>
            </div>
            <ul className="space-y-4">
              {beforeAfter.beforeItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#C8302D]/70 shrink-0 mt-1" />
                  <span className="text-sm text-[#0F0F12]/75 font-inter leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex flex-col items-center justify-center px-2"
          >
            <div className="w-16 h-16 bg-[#C8302D] flex items-center justify-center text-[#F8F4EC]">
              <ArrowRight className="w-8 h-8" />
            </div>
            <p className="mt-4 text-[10px] font-bold tracking-[0.3em] text-[#C8302D] uppercase whitespace-nowrap">
              90 Dias
            </p>
          </motion.div>

          {/* Depois */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F0F12] text-[#F8F4EC] p-8 md:p-10 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF6F]" />
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#D4AF6F]/30">
              <span className="font-playfair text-3xl font-medium text-[#D4AF6F]">02</span>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase">Após 90 dias com a ArtDesign</p>
                <h3 className="font-playfair text-2xl font-medium text-[#F8F4EC]">
                  {beforeAfter.afterTitle}
                </h3>
              </div>
            </div>
            <ul className="space-y-4">
              {beforeAfter.afterItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D4AF6F] shrink-0 mt-1" />
                  <span className="text-sm text-[#F8F4EC]/85 font-inter leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center font-playfair text-xl md:text-2xl italic text-[#0F0F12]/80 leading-relaxed"
        >
          &ldquo;{beforeAfter.expectedResults}&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
