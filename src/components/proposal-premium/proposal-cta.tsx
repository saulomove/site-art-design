"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  proposal: Proposal;
}

export function ProposalPremiumCta({ proposal }: Props) {
  const whatsappLink = `https://wa.me/${proposal.whatsappNumber}?text=${encodeURIComponent(
    `Olá Saulo! Analisei a proposta para a ${proposal.clientName} e gostaria de agendar nossa reunião de alinhamento e assinatura.`
  )}`;

  return (
    <section className="relative py-32 overflow-hidden bg-slate-900 border-t border-slate-800">
      {/* Immersive Dark Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-blue)_0%,_transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-brand-purple)_0%,_transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-12 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl shadow-sm"
         >
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
             Próximos Passos
           </span>
         </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.1] mb-8"
        >
          Pronto para <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange animate-gradient bg-[length:200%_auto]">
            mudar o jogo?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 font-light font-inter max-w-2xl mx-auto leading-relaxed mb-16"
        >
          {proposal.closingQuestion || "Pronto para embarcar nessa jornada conosco e alcançar novos patamares de sucesso?"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Button
            size="lg"
            className="group relative h-auto px-10 py-6 text-lg font-medium rounded-full bg-white text-slate-900 hover:bg-slate-50 overflow-hidden shadow-[0_0_40px_rgb(255,255,255,0.2)] hover:shadow-[0_0_80px_rgb(255,255,255,0.4)] transition-all duration-500"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-6 h-6 text-brand-blue" />
                Aprovar Proposta e Assinar
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2 text-brand-purple" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
