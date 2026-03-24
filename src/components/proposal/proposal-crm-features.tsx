"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Inbox,
  Kanban,
  Bot,
  Tags,
  ClipboardList,
  Layers,
} from "lucide-react";

const modules = [
  {
    icon: Inbox,
    colorHex: "#2563eb",
    number: "01",
    title: "Caixa de Entrada Unificada",
    tagline: "O balcão de atendimento digital da imobiliária",
    benefit:
      "Um único número de WhatsApp para toda a equipe. O sistema distribui cada conversa para o corretor certo automaticamente, sem bagunça, sem mensagem perdida.",
    metaphor: "Como se todos os corretores atendessem pelo mesmo guichê — mas cada um com sua fila.",
  },
  {
    icon: LayoutDashboard,
    colorHex: "#7c3aed",
    number: "02",
    title: "Painel de Controle em Tempo Real",
    tagline: "O painel de controle do gestor",
    benefit:
      "Veja quantos leads estão na fila, quem está atendendo, quem está ocioso e o tempo médio de resposta de cada corretor — tudo em uma única tela.",
    metaphor: "Como uma câmera de segurança de todos os atendimentos, ao vivo.",
  },
  {
    icon: Kanban,
    colorHex: "#16a34a",
    number: "03",
    title: "Funil Kanban Imobiliário",
    tagline: "O mural que não some",
    benefit:
      "Visualize o funil completo: Novo Lead → Visita Agendada → Em Negociação → Análise de Crédito → Chaves Entregues. Arraste e solte os cards conforme a negociação avança.",
    metaphor: "Como um quadro de post-its que nunca some e qualquer um pode ver.",
  },
  {
    icon: Bot,
    colorHex: "#f97316",
    number: "04",
    title: "Robô de Atendimento com IA 24/7",
    tagline: "O corretor que nunca dorme",
    benefit:
      "Às 22h30 de sexta-feira, quando nenhum corretor está disponível, a Inteligência Artificial responde, qualifica e agenda a visita. O corretor chega segunda-feira com o cliente já encaminhado.",
    metaphor: "Como ter um assistente virtual treinado para falar sobre imóveis, sem folga e sem erro.",
  },
  {
    icon: Tags,
    colorHex: "#06b6d4",
    number: "05",
    title: "Etiquetas e Campanhas Inteligentes",
    tagline: "A memória que o WhatsApp não tem",
    benefit:
      "Marque o cliente como 'Busca 2Q Centro' ou 'Investidor'. Quando entrar um imóvel com esse perfil, dispare uma mensagem segmentada só para quem tem esse interesse.",
    metaphor: "Como uma agenda que lembra de cada cliente e avisa na hora certa.",
  },
  {
    icon: ClipboardList,
    colorHex: "#ec4899",
    number: "06",
    title: "Tarefas e Agendamentos",
    tagline: "O assistente pessoal de cada corretor",
    benefit:
      "Crie lembretes automáticos: 'Ligar para João amanhã às 10h', 'Enviar proposta até sexta'. O sistema cobra o corretor no momento certo, para nenhum follow-up ser esquecido.",
    metaphor: "Como um secretário que manda notificação no celular na hora exata.",
  },
];

export function ProposalCRMFeatures() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-purple/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 px-5 py-2 text-sm font-bold text-brand-purple uppercase tracking-wider"
          >
            <Layers className="w-4 h-4" />
            A Solução
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900"
          >
            6 módulos que transformam o WhatsApp em uma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
              máquina de vendas
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            O ArtAtende não é só um organizador de mensagens. É uma central de
            inteligência para a sua operação comercial. Conheça cada módulo:
          </motion.p>
        </div>

        {/* Modules Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-3xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Number watermark */}
                <span
                  className="absolute top-4 right-5 text-6xl font-black opacity-[0.04] select-none"
                  style={{ color: mod.colorHex }}
                >
                  {mod.number}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${mod.colorHex}12` }}
                >
                  <Icon className="w-7 h-7" style={{ color: mod.colorHex }} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-black text-slate-900 mb-1 leading-snug">
                  {mod.title}
                </h3>
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ color: mod.colorHex }}
                >
                  {mod.tagline}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {mod.benefit}
                </p>

                {/* Metaphor */}
                <div
                  className="rounded-xl p-3 text-xs text-slate-500 italic leading-relaxed"
                  style={{ backgroundColor: `${mod.colorHex}08` }}
                >
                  💡 {mod.metaphor}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
