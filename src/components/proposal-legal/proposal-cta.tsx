"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { MessageCircle, Scale } from "lucide-react";

interface Props {
  proposal: Proposal;
}

export function ProposalLegalCta({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  const whatsappMessage = encodeURIComponent(
    `Olá! Sou ${proposal.contactName}. Recebi a proposta da ArtDesign e gostaria de conversar.`
  );
  const whatsappLink = `https://wa.me/${proposal.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0F1C] text-[#F5F1E8] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#C9A961]/[0.05] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#C9A961]/40" />
        <Scale className="mx-4 h-5 w-5 text-[#C9A961]" />
        <div className="h-[1px] w-32 bg-[#C9A961]/40" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center space-y-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-[11px] font-semibold tracking-[0.3em] text-[#C9A961] uppercase"
        >
          Próximo Passo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F5F1E8] leading-[1.1]"
        >
          Vamos conversar, <br className="hidden md:block" />
          <span className="italic text-[#C9A961]">{proposal.contactName}?</span>
        </motion.h2>

        {proposal.closingQuestion && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-xl md:text-2xl italic text-[#F5F1E8]/80 max-w-3xl mx-auto leading-relaxed whitespace-pre-line"
          >
            {proposal.closingQuestion}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 pt-8"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-[#C9A961] hover:bg-[#B8974F] text-[#0A0F1C] px-10 py-5 font-semibold text-base tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,97,0.3)]"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>

          <p className="text-[11px] text-[#F5F1E8]/50 tracking-[0.3em] uppercase">
            Proposta válida até {formattedDate}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-16 mt-16 border-t border-[#C9A961]/20 text-[#F5F1E8]/50 font-inter text-xs"
        >
          <p>ArtDesign · Agência Full Service · +16 anos · 8 países</p>
        </motion.div>
      </div>
    </section>
  );
}
