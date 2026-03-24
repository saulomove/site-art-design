"use client";

import { motion } from "framer-motion";
import { Kanban, User, MapPin } from "lucide-react";

interface KanbanCard {
  name: string;
  detail: string;
  tag?: string;
  tagColor?: string;
}

interface KanbanColumn {
  title: string;
  emoji: string;
  colorHex: string;
  cards: KanbanCard[];
}

const columns: KanbanColumn[] = [
  {
    title: "Novo Lead",
    emoji: "🟡",
    colorHex: "#f59e0b",
    cards: [
      { name: "Maria Silva", detail: "Busca 2Q no Centro", tag: "IA qualificando", tagColor: "#7c3aed" },
      { name: "Roberto Lemes", detail: "Locação em Videira", tag: "Aguardando", tagColor: "#94a3b8" },
    ],
  },
  {
    title: "Visita Agendada",
    emoji: "🔵",
    colorHex: "#2563eb",
    cards: [
      { name: "João Pereira", detail: "Sáb 10h — Ap. 3Q Dois Pinheiros", tag: "IA agendou", tagColor: "#2563eb" },
    ],
  },
  {
    title: "Em Negociação",
    emoji: "🟠",
    colorHex: "#f97316",
    cards: [
      { name: "Carlos Lima", detail: "Proposta R$ 320k enviada", tag: "Aguardando retorno", tagColor: "#f97316" },
      { name: "Fernanda Costa", detail: "Casa 150m² — Treviso", tag: "Contraproposta", tagColor: "#f97316" },
    ],
  },
  {
    title: "Análise de Crédito",
    emoji: "🟣",
    colorHex: "#7c3aed",
    cards: [
      { name: "Ana Torres", detail: "Documentação no banco", tag: "CEF — em análise", tagColor: "#7c3aed" },
    ],
  },
  {
    title: "Chaves Entregues",
    emoji: "🟢",
    colorHex: "#16a34a",
    cards: [
      { name: "Família Rech", detail: "Ap. Bairro Glória — Escriturado", tag: "Concluído ✓", tagColor: "#16a34a" },
    ],
  },
];

export function ProposalCRMKanban() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-100">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,#f8fafc_0%,#f1f5f9_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 border border-brand-green/20 px-5 py-2 text-sm font-bold text-brand-green uppercase tracking-wider"
          >
            <Kanban className="w-4 h-4" />
            Funil Imobiliário
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900"
          >
            Visualize onde está{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
              cada negociação
            </span>{" "}
            em tempo real
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            O gestor e os corretores enxergam o funil completo em uma única
            tela. Cada lead é um card que avança de coluna conforme a
            negociação evolui — sem anotações em papel, sem conversa esquecida.
          </motion.p>
        </div>

        {/* Kanban Board */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden"
          >
            {/* Board header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">
                Imóveis Confiança — Funil de Vendas
              </span>
            </div>

            {/* Kanban columns */}
            <div className="overflow-x-auto">
              <div className="flex gap-0 min-w-[900px]">
                {columns.map((col, ci) => (
                  <div
                    key={ci}
                    className="flex-1 border-r border-slate-100 last:border-r-0"
                  >
                    {/* Column header */}
                    <div
                      className="flex items-center gap-2 px-4 py-3 border-b"
                      style={{ borderBottomColor: `${col.colorHex}30`, backgroundColor: `${col.colorHex}06` }}
                    >
                      <span>{col.emoji}</span>
                      <span
                        className="text-xs font-black uppercase tracking-wider"
                        style={{ color: col.colorHex }}
                      >
                        {col.title}
                      </span>
                      <span
                        className="ml-auto text-xs font-bold rounded-full px-2 py-0.5"
                        style={{ backgroundColor: `${col.colorHex}15`, color: col.colorHex }}
                      >
                        {col.cards.length}
                      </span>
                    </div>

                    {/* Cards */}
                    <div className="p-3 space-y-2.5 min-h-[280px]">
                      {col.cards.map((card, cardI) => (
                        <motion.div
                          key={cardI}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: ci * 0.05 + cardI * 0.08 }}
                          className="group rounded-xl bg-white border border-slate-100 p-3 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200 cursor-pointer"
                        >
                          <div className="flex items-start gap-2 mb-2">
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${col.colorHex}15` }}
                            >
                              <User
                                className="w-3.5 h-3.5"
                                style={{ color: col.colorHex }}
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-slate-900 truncate">
                                {card.name}
                              </p>
                              <div className="flex items-center gap-1 mt-0.5">
                                <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                                <p className="text-[10px] text-slate-400 truncate leading-tight">
                                  {card.detail}
                                </p>
                              </div>
                            </div>
                          </div>
                          {card.tag && (
                            <span
                              className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{
                                backgroundColor: `${card.tagColor}15`,
                                color: card.tagColor,
                              }}
                            >
                              {card.tag}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-slate-500 mt-6"
          >
            Esta é uma visualização demonstrativa do funil. As colunas e etapas
            são personalizadas para a operação da Imóveis Confiança.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
