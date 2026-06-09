"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { MessageCircle, TreePine } from "lucide-react";

interface Props { proposal: Proposal; }

export function ProposalForestryCta({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  const whatsappMessage = encodeURIComponent(
    `Olá! Recebi a proposta da ArtDesign para a ${proposal.contactName} e gostaria de conversar.`
  );
  const whatsappLink = `https://wa.me/${proposal.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0A06] text-[#F5EAD5] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#C47B20]/[0.06] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#C47B20]/40" />
        <TreePine className="mx-4 h-5 w-5 text-[#C47B20]" />
        <div className="h-[1px] w-32 bg-[#C47B20]/40" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center space-y-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-[11px] font-semibold tracking-[0.3em] text-[#C47B20] uppercase"
        >
          Próximo Passo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F5EAD5] leading-[1.1]"
        >
          Vamos construir isso<br className="hidden md:block" />
          <span className="italic text-[#C47B20]">juntos?</span>
        </motion.h2>

        {proposal.closingQuestion && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-xl md:text-2xl italic text-[#F5EAD5]/80 max-w-3xl mx-auto leading-relaxed"
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
            className="group inline-flex items-center gap-4 bg-[#C47B20] hover:bg-[#A86A18] text-[#0E0A06] px-10 py-5 font-semibold text-base tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(196,123,32,0.3)]"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <p className="text-[11px] text-[#F5EAD5]/50 tracking-[0.3em] uppercase">
            Proposta válida até {formattedDate}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-16 mt-16 border-t border-[#C47B20]/20 text-[#F5EAD5]/50 font-inter text-xs"
        >
          <p>ArtDesign · Agência Full Service · +16 anos · 8 países</p>
        </motion.div>
      </div>
    </section>
  );
}
