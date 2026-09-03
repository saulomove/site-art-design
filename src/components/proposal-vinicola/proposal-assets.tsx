"use client";

import { motion } from "framer-motion";
import { VinicolaDivider, VinicolaSectionHeader } from "./vinicola-ui";

interface Props {
  highlights: string[];
}

export function ProposalVinicolaAssets({ highlights }: Props) {
  return (
    <section id="ativos" className="scroll-mt-[68px] relative overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />

      <div className="pointer-events-none absolute right-0 top-1/4 h-[50%] w-[45%] rounded-full bg-[#CA8B35]/[0.05] blur-[150px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="O que já está construído"
          title="Um diagnóstico só de problemas"
          italic="subestima o cliente"
          lead="Estes ativos já existem, já foram pagos e reduzem drasticamente o custo e o prazo do projeto. Nada aqui precisa ser construído — só ativado."
        />

        <div className="grid gap-px overflow-hidden border border-[#CCCCCC]/10 bg-[#CCCCCC]/10 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: Math.min(idx, 6) * 0.06 }}
              className="flex gap-5 bg-[#0B0B0B] p-8 md:p-9"
            >
              <span className="font-mono text-[11px] font-semibold tabular-nums text-[#CA8B35]/50">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-relaxed text-[#CCCCCC]/80">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
