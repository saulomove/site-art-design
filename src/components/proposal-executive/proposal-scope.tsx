"use client";

import { motion } from "framer-motion";
import type { ProposalService } from "@/lib/proposals-data";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  services: ProposalService[];
}

export function ProposalExecutiveScope({ services }: Props) {
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
            Escopo do Trabalho
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F0F12] leading-[1.1]"
          >
            Frentes de execução <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">da ArtDesign</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#0F0F12]/10 border border-[#0F0F12]/10">
          {services.map((service, idx) => {
            const IconComponent = (Icons[service.icon as keyof typeof Icons] as LucideIcon) || Icons.Check;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F8F4EC] hover:bg-white transition-colors p-8 md:p-10 group"
              >
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#0F0F12]/10">
                  <div className="w-12 h-12 bg-[#C8302D]/10 border border-[#C8302D]/30 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-[#C8302D]" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-playfair text-[#D4AF6F]/80 text-sm font-medium mb-1">
                      {String(idx + 1).padStart(2, "0")} · Frente
                    </span>
                    <h3 className="font-playfair text-2xl font-medium text-[#0F0F12] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-[#0F0F12]/65 font-inter text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#0F0F12]/80 font-inter">
                      <span className="text-[#C8302D] mt-1.5 shrink-0 text-[8px]">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {service.price && (
                  <div className="pt-5 border-t border-[#0F0F12]/10 flex items-baseline justify-between">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#0F0F12]/60 uppercase">
                      Investimento
                    </span>
                    <div className="text-right">
                      <span className="font-playfair text-xl font-medium text-[#C8302D]">
                        {service.price}
                      </span>
                      {service.priceNote && (
                        <p className="text-[11px] text-[#0F0F12]/50 mt-1 font-inter">
                          {service.priceNote}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
