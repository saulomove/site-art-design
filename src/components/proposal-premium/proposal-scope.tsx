"use client";

import { motion } from "framer-motion";
import type { ProposalService } from "@/lib/proposals-data";
import {
  Compass,
  Instagram,
  Calendar,
  PenTool,
  Film,
  Video,
  Target,
  MapPin,
  Share2,
  Code,
  Palette,
  CheckCircle2
} from "lucide-react";

interface Props {
  services: ProposalService[];
}

const iconMap: Record<string, React.ElementType> = {
  compass: Compass,
  instagram: Instagram,
  calendar: Calendar,
  penTool: PenTool,
  film: Film,
  video: Video,
  target: Target,
  mapPin: MapPin,
  share2: Share2,
  code: Code,
  palette: Palette,
};

export function ProposalPremiumScope({ services }: Props) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA] relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
           <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200/50 bg-white shadow-sm"
          >
            <Compass className="w-5 h-5 text-brand-blue" />
            <span className="text-xs font-semibold tracking-widest text-slate-800 uppercase">
              Escopo de Serviços
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]"
          >
            O que vamos construir juntos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-500 font-light font-inter max-w-2xl mx-auto leading-relaxed"
          >
            Um sistema completo de construção de autoridade, retenção de audiência e conversão acelerada.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || CheckCircle2;
            
            return (
              <motion.div
                key={index}
                variants={itemAnim}
                className="group relative bg-white p-10 md:p-12 rounded-[2rem] border border-slate-100 shadow-[0_4px_24px_rgb(0,0,0,0.02)] hover:shadow-[0_24px_54px_rgb(0,0,0,0.06)] transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                {/* Glow Background that reveals on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-colors duration-500">
                      <Icon className="w-8 h-8 text-slate-400 group-hover:text-brand-blue transition-colors duration-500" />
                    </div>
                    {service.price && (
                      <div className="text-right">
                        <div className="font-playfair text-2xl font-medium text-slate-900 group-hover:text-brand-blue transition-colors duration-300">
                          {service.price}
                        </div>
                        {service.priceType === "monthly" && (
                          <div className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                            /mês
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <h3 className="font-playfair text-2xl font-medium text-slate-900 mb-4 tracking-tight leading-snug">
                    {service.name}
                  </h3>
                  
                  <p className="text-slate-500 font-light font-inter leading-relaxed mb-10">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mt-auto">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 line-clamp-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-orange mt-2 shrink-0 transition-colors duration-500" />
                        <span className="text-slate-700 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.priceNote && (
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-widest leading-relaxed">
                        📌 {service.priceNote}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
