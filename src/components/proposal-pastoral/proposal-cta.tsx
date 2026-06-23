"use client";

import { motion } from "framer-motion";
import type { Proposal } from "@/lib/proposals-data";
import { Wheat, MessageCircle } from "lucide-react";

interface Props {
  proposal: Proposal;
}

export function ProposalPastoralCta({ proposal }: Props) {
  const [year, month, day] = proposal.validUntil.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  const whatsappMessage = encodeURIComponent(
    `Olá! Recebi a proposta da ArtDesign para a ${proposal.clientName} e gostaria de conversar.`,
  );
  const whatsappUrl = `https://wa.me/${proposal.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative bg-[#0B1A0D] text-[#EDE5CC] py-28 md:py-40 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#C9A037]/40" />
        <Wheat className="mx-4 h-5 w-5 text-[#C9A037]" />
        <div className="h-[1px] w-32 bg-[#C9A037]/40" />
      </div>

      {/* Large gold glow blob center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#C9A037]/[0.06] blur-[140px] rounded-full pointer-events-none" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A037 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="h-[1px] w-8 bg-[#C9A037]/60" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C9A037] font-inter">
            Próximo Passo
          </span>
          <div className="h-[1px] w-8 bg-[#C9A037]/60" />
        </motion.div>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium text-[#EDE5CC] leading-[1.1] mb-8"
        >
          Da lavoura ao seu animal —
          <br />
          <span className="italic text-[#C9A037]">
            agora é hora da marca crescer.
          </span>
        </motion.h2>

        {/* Closing question */}
        {proposal.closingQuestion && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-xl md:text-2xl italic text-[#EDE5CC]/50 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {proposal.closingQuestion}
          </motion.p>
        )}

        {/* WhatsApp button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-8"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A037] hover:bg-[#B8902F] text-[#0B1A0D] font-semibold font-inter text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,160,55,0.3)]"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Validity */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-[10px] tracking-[0.25em] uppercase text-[#EDE5CC]/25 font-inter"
        >
          Proposta válida até {formattedDate}
        </motion.p>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-20 border-t border-[#C9A037]/10 pt-10"
      >
        <p className="text-center text-[11px] tracking-[0.25em] uppercase text-[#EDE5CC]/20 font-inter">
          ArtDesign · Agência Full Service · +16 anos · 8 países
        </p>
      </motion.div>
    </section>
  );
}
