"use client";

import { motion } from "framer-motion";
import type { ProposalService } from "@/lib/proposals-data";
import {
  Wheat,
  MapPin,
  Megaphone,
  Camera,
  Video,
  Target,
  Wrench,
  Zap,
  Plane,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  services: ProposalService[];
}

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Megaphone,
  Camera,
  Video,
  Target,
  Wrench,
  Zap,
  Plane,
  Search,
};

export function ProposalPastoralScope({ services }: Props) {
  return (
    <section className="relative bg-[#0B1A0D] text-[#EDE5CC] py-24 md:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#C9A037]/40" />
        <Wheat className="mx-4 h-5 w-5 text-[#C9A037]" />
        <div className="h-[1px] w-32 bg-[#C9A037]/40" />
      </div>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[40%] bg-[#3D7A42]/[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-[#C9A037]/60" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C9A037] font-inter">
              Escopo de Serviços
            </span>
            <div className="h-[1px] w-8 bg-[#C9A037]/60" />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-medium text-[#EDE5CC] leading-tight mb-6">
            Cada serviço com um propósito{" "}
            <span className="italic text-[#C9A037]">
              estratégico e mensurável
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#EDE5CC]/55 font-inter font-light max-w-2xl mx-auto leading-relaxed">
            Não vendemos posts. Vendemos crescimento, autoridade e geração de
            demanda para a Alfafa Santa Fé.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] ?? Wheat;

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-[#132714] border border-[#C9A037]/15 p-8 md:p-10 hover:border-[#C9A037]/30 transition-colors duration-300 group flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#C9A037]/10 border border-[#C9A037]/20 flex items-center justify-center mb-6 group-hover:border-[#C9A037]/40 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#C9A037]" />
                </div>

                {/* Name */}
                <h3 className="font-playfair text-2xl font-medium text-[#EDE5CC] mb-4">
                  {service.name}
                </h3>

                {/* Gold separator */}
                <div className="h-[1px] bg-[#C9A037]/20 mb-5" />

                {/* Description */}
                <p className="text-sm text-[#EDE5CC]/55 font-inter leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2.5 flex-1 mb-8">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[#EDE5CC]/45 font-inter"
                    >
                      <span className="text-[#C9A037]/60 flex-shrink-0 leading-5">
                        ◆
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                {service.price && (
                  <div className="border-t border-[#C9A037]/10 pt-6 mt-auto">
                    <div className="flex items-baseline gap-1">
                      <span className="font-playfair text-2xl font-medium text-[#C9A037]">
                        {service.price}
                      </span>
                      <span className="text-sm text-[#EDE5CC]/40 font-inter">
                        {service.priceType === "monthly" ? "/mês" : "/captação"}
                      </span>
                    </div>
                    {service.priceNote && (
                      <p className="text-xs text-[#EDE5CC]/35 font-inter italic mt-1">
                        {service.priceNote}
                      </p>
                    )}
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
