"use client";

import { motion } from "framer-motion";
import {
  Moon,
  Zap,
  Bot,
  MessageSquare,
  CalendarCheck,
  Sun,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Moon,
    time: "Sexta-feira, 22h30",
    colorHex: "#7c3aed",
    side: "left" as const,
    type: "narration",
    title: "O impulso do cliente",
    description:
      "O cliente está navegando no site da Imóveis Confiança, gosta de um apartamento de 3 quartos no bairro Dois Pinheiros e envia o link no WhatsApp.",
  },
  {
    icon: Zap,
    time: "3 segundos depois...",
    colorHex: "#f97316",
    side: "right" as const,
    type: "narration",
    title: "A leitura em tempo real",
    description:
      "O ArtAtende identifica o link, acessa a página e extrai automaticamente: ID do imóvel, valor, quartos, bairro e metragem.",
  },
  {
    icon: Bot,
    time: "Resposta automática",
    colorHex: "#2563eb",
    side: "left" as const,
    type: "bot",
    title: "A IA responde (em segundos)",
    message:
      "Olá! 👋 Vi que você se interessou pelo Apartamento de 3 quartos no bairro Dois Pinheiros (Ref. #1042). É uma excelente opção com 110m² e 2 vagas de garagem, avaliado em R$ 485.000. \n\nO seu interesse seria para moradia ou investimento?",
  },
  {
    icon: MessageSquare,
    time: "Cliente responde",
    colorHex: "#16a34a",
    side: "right" as const,
    type: "client",
    title: "Qualificação em andamento",
    message: "Moradia! Gostaria muito de visitar. 😊",
  },
  {
    icon: CalendarCheck,
    time: "IA continua",
    colorHex: "#2563eb",
    side: "left" as const,
    type: "bot",
    title: "Agendamento automático",
    message:
      "Perfeito! 🏠 Nossos corretores especialistas iniciam os atendimentos amanhã a partir das 08h na nossa sede (Rua Saul Brandalise, 1531, Videira).\n\nQual o melhor horário para deixarmos sua visita pré-agendada? 08h, 10h ou 14h?",
  },
  {
    icon: CheckCircle2,
    time: "Automaticamente",
    colorHex: "#16a34a",
    side: "right" as const,
    type: "system",
    title: "Lead movido no Kanban",
    description:
      "A IA registra o agendamento, move o lead para a coluna 'Visita Agendada' no Kanban e notifica o corretor responsável.",
  },
  {
    icon: Sun,
    time: "Segunda-feira, 08h00",
    colorHex: "#f59e0b",
    side: "left" as const,
    type: "narration",
    title: "O corretor já começa no fechamento",
    description:
      "O corretor abre o sistema e encontra a visita pré-agendada, o histórico completo da conversa e os dados do imóvel. Sem precisar trocar uma única mensagem manualmente.",
  },
];

function ChatBubble({
  type,
  message,
  colorHex,
}: {
  type: "bot" | "client";
  message: string;
  colorHex: string;
}) {
  const isBot = type === "bot";
  return (
    <div
      className={`flex items-end gap-2 mt-3 ${isBot ? "justify-start" : "justify-end"}`}
    >
      {isBot && (
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${colorHex}20` }}
        >
          <Bot className="w-4 h-4" style={{ color: colorHex }} />
        </div>
      )}
      <div
        className={`max-w-[280px] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line shadow-sm ${
          isBot
            ? "rounded-bl-sm bg-slate-800 text-slate-200"
            : "rounded-br-sm bg-green-600 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export function ProposalCRMShowcase() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-blue/10 to-brand-purple/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 px-5 py-2 text-sm font-bold text-brand-orange uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4" />
            O Diferencial
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white"
          >
            Atendimento inteligente{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">
              24 horas por dia
            </span>
            , 7 dias por semana
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Veja na prática o que acontece quando um lead chega às 22h30 de
            sexta-feira — quando nenhum corretor está disponível.
          </motion.p>
        </div>

        {/* Showcase Timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Center dot */}
                  <div
                    className="absolute left-1/2 top-3 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-900 z-10"
                    style={{ backgroundColor: step.colorHex }}
                  />

                  {/* Card */}
                  <div
                    className={`w-full rounded-2xl overflow-hidden ${
                      step.type === "narration" || step.type === "system"
                        ? "bg-white/[0.03] border border-white/[0.08] p-5"
                        : "bg-slate-900 border border-slate-800 p-5"
                    }`}
                  >
                    {/* Time badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center"
                        style={{ backgroundColor: `${step.colorHex}20` }}
                      >
                        <Icon className="w-3.5 h-3.5" style={{ color: step.colorHex }} />
                      </div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: step.colorHex }}
                      >
                        {step.time}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    {/* Narration / System */}
                    {(step.type === "narration" || step.type === "system") &&
                      step.description && (
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      )}

                    {/* Chat bubbles */}
                    {(step.type === "bot" || step.type === "client") &&
                      step.message && (
                        <ChatBubble
                          type={step.type as "bot" | "client"}
                          message={step.message}
                          colorHex={step.colorHex}
                        />
                      )}

                    {/* System tag */}
                    {step.type === "system" && (
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-xs font-bold text-green-400">
                          Kanban atualizado automaticamente
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Result summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16"
        >
          <div className="rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-blue/5 border border-brand-green/20 p-8 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-black text-white mb-2">
              Resultado: Zero esforço humano
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Da mensagem do cliente às 22h30 de sexta até o corretor iniciar a
              semana com uma visita pré-agendada na segunda às 08h — tudo
              aconteceu{" "}
              <strong className="text-white">sem que nenhum corretor</strong>{" "}
              precisasse responder uma única mensagem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
