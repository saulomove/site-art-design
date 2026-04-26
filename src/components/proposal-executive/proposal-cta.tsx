"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { MessageCircle, TrendingUp } from "lucide-react";

interface Props {
  proposal: Proposal;
}

export function ProposalExecutiveCta({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  const whatsappMessage = encodeURIComponent(
    `Olá! Sou ${proposal.contactName}. Recebi a proposta da ArtDesign e quero conversar.`
  );
  const whatsappLink = `https://wa.me/${proposal.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative py-24 md:py-32 bg-[#F8F4EC] text-[#0F0F12] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C8302D 0, #C8302D 1px, transparent 1px, transparent 18px)"
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3"
        >
          <div className="h-[1px] w-12 bg-[#C8302D]/60" />
          <span className="inline-block text-[10px] font-bold tracking-[0.4em] text-[#C8302D] uppercase">
            Próximo Passo
          </span>
          <div className="h-[1px] w-12 bg-[#C8302D]/60" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F0F12] leading-[1.1]"
        >
          A base já está pronta, <br className="hidden md:block" />
          <span className="italic text-[#C8302D]">{proposal.contactName}.</span>
        </motion.h2>

        {proposal.closingQuestion && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-xl md:text-2xl italic text-[#0F0F12]/80 max-w-3xl mx-auto leading-relaxed whitespace-pre-line"
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
            className="group inline-flex items-center gap-4 bg-[#C8302D] hover:bg-[#A82420] text-[#F8F4EC] px-12 py-5 font-bold text-base tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_15px_40px_rgba(200,48,45,0.3)]"
          >
            <MessageCircle className="w-5 h-5" />
            Vamos Conversar
            <TrendingUp className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-[10px] text-[#0F0F12]/50 tracking-[0.4em] uppercase">
            Proposta válida até {formattedDate}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-16 mt-16 border-t border-[#0F0F12]/15 text-[#0F0F12]/55 font-inter text-xs"
        >
          <p className="font-bold tracking-[0.3em] uppercase">
            ArtDesign · 16+ anos · 8 países · 449 clientes atendidos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
