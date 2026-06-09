"use client";
import { motion } from "framer-motion";
import type { ProposalService } from "@/lib/proposals-data";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props { services: ProposalService[]; }

export function ProposalIndustrialScope({ services }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#111111] text-[#F5F0EB] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#44D414]/50 to-transparent" />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #44D414 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#44D414]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block text-[11px] font-semibold tracking-[0.3em] text-[#44D414] uppercase font-inter">
            Módulos do Projeto
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F5F0EB] leading-[1.1]">
            O que a ArtDesign<br className="hidden md:block" />
            <span className="italic text-[#44D414]">vai executar</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const IconComponent = (Icons[service.icon as keyof typeof Icons] as LucideIcon) || Icons.Wrench;
            return (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative bg-[#1A1A1A] border border-[#44D414]/15 p-8 md:p-10 hover:border-[#44D414]/40 transition-colors">
                <div className="absolute top-0 right-0 px-4 py-2">
                  <span className="font-playfair text-[#44D414]/30 text-sm">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#44D414]/10 border border-[#44D414]/30 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-[#44D414]" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-medium text-[#F5F0EB] mb-2">{service.name}</h3>
                    <p className="text-[#F5F0EB]/60 font-inter text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-6 pt-6 border-t border-[#44D414]/10">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#F5F0EB]/80 font-inter">
                      <span className="text-[#44D414] mt-1.5 shrink-0 text-[6px]">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {service.price && (
                  <div className="pt-5 border-t border-[#44D414]/10 flex items-baseline justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-[#44D414]/70 uppercase font-inter">Investimento</span>
                    <div className="text-right">
                      <span className="font-playfair text-xl font-medium text-[#F5F0EB]">{service.price}</span>
                      {service.priceType === "monthly" && <span className="text-[#F5F0EB]/50 text-sm ml-1">/mês</span>}
                      {service.priceType === "project" && <span className="text-[#F5F0EB]/50 text-sm ml-1">/captação</span>}
                      {service.priceNote && <p className="text-[11px] text-[#F5F0EB]/50 mt-1 font-inter">{service.priceNote}</p>}
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
