"use client";

import { motion } from "framer-motion";
import {
  Moon,
  SmartphoneNfc,
  EyeOff,
  BedDouble,
  TrendingDown,
  Zap,
} from "lucide-react";

const pains = [
  {
    icon: Moon,
    color: "brand-purple",
    colorHex: "#7c3aed",
    title: "Lead chega de madrugada e não é respondido",
    description:
      "Domingo às 22h, o cliente vê um apartamento no site e manda mensagem. Na segunda-feira, quando o corretor responde, ele já visitou o imóvel do concorrente.",
    tag: "Timing perdido",
  },
  {
    icon: SmartphoneNfc,
    color: "brand-orange",
    colorHex: "#f97316",
    title: "Cada corretor usa o próprio celular",
    description:
      "Quando um corretor sai da imobiliária, leva consigo toda a conversa, os contatos e o histórico. A carteira de clientes fica no celular pessoal, não na empresa.",
    tag: "Ativo desprotegido",
  },
  {
    icon: EyeOff,
    color: "brand-blue",
    colorHex: "#2563eb",
    title: "O gestor não sabe o que está acontecendo",
    description:
      "Quantos leads estão em negociação? Quem não fez follow-up? Qual corretor está ocioso? Sem um painel centralizado, a gestão é feita no chico.",
    tag: "Zero visibilidade",
  },
  {
    icon: BedDouble,
    color: "brand-green",
    colorHex: "#16a34a",
    title: "Clientes antigos esquecidos no banco de dados",
    description:
      "O cliente que procurou um imóvel há 3 meses e não fechou ainda existe. Mas sem sistema, ele some. Quando entrar um imóvel no perfil dele, ninguém vai avisar.",
    tag: "Oportunidade perdida",
  },
  {
    icon: TrendingDown,
    color: "brand-orange",
    colorHex: "#f97316",
    title: "Dinheiro em tráfego indo pelo ralo",
    description:
      "Você investe em Instagram, Google e portais para atrair leads. Mas esses leads caem em um WhatsApp desorganizado e somem sem resposta. O investimento foi perdido.",
    tag: "ROI desperdiçado",
  },
];

export function ProposalCRMDiagnosis() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-950">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-red-500/5 to-transparent rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-5 py-2 text-sm font-bold text-red-400 uppercase tracking-wider"
          >
            <Zap className="w-4 h-4" />
            O Diagnóstico
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white"
          >
            Por que a sua imobiliária está{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              perdendo dinheiro
            </span>{" "}
            hoje?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            No mercado imobiliário, velocidade é tudo. O cliente que entra em
            contato manda mensagem para 3 ou 4 imobiliárias ao mesmo tempo.
            Quem responde primeiro, vende. Quem demora, perde a comissão.
          </motion.p>
        </div>

        {/* Pain Cards Grid */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${pain.colorHex}15` }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: pain.colorHex }}
                  />
                </div>

                {/* Tag */}
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-3"
                  style={{
                    backgroundColor: `${pain.colorHex}15`,
                    color: pain.colorHex,
                  }}
                >
                  {pain.tag}
                </span>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {pain.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pain.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20 p-8">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.05),transparent_70%)]" />
            <p className="relative text-xl md:text-2xl font-bold text-white leading-relaxed">
              &ldquo;Quem responde primeiro,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                vende
              </span>
              . Quem demora 5 minutos perde a venda para o concorrente que
              chegou antes.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
