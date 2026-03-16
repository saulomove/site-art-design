"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Play,
  Layers,
  Image as ImageIcon,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Building2,
  User,
} from "lucide-react";
import type { ContentCalendarProfile } from "@/lib/proposals-data";

interface Props {
  contentCalendar: ContentCalendarProfile[];
}

const typeColors: Record<string, string> = {
  Autoridade: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
  Educação: "bg-brand-green/10 text-brand-green border-brand-green/20",
  "Prova Social": "bg-brand-purple/10 text-brand-purple border-brand-purple/20",
  "Autoridade Local": "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
  Conversão: "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
  "Conexão Local": "bg-teal-500/10 text-teal-600 border-teal-500/20",
  Mentalidade: "bg-brand-purple/10 text-brand-purple border-brand-purple/20",
  Bastidores: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  Oportunidade: "bg-brand-green/10 text-brand-green border-brand-green/20",
  Reflexão: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
};

const formatIcons: Record<string, React.ElementType> = {
  Reels: Play,
  Carrossel: Layers,
  Post: ImageIcon,
};

const profileIcons: Record<number, React.ElementType> = {
  0: Building2,
  1: User,
};

const profileAccent = ["brand-blue", "brand-purple"];

export function ProposalContentCalendar({ contentCalendar }: Props) {
  const [activeProfile, setActiveProfile] = useState(0);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-950">
      {/* BG Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-brand-blue/10 to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-purple/10 to-transparent rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 px-5 py-2 text-sm font-bold text-brand-orange uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4" />
            Sugestão Estratégica
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white"
          >
            Planejamento de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">
              7 dias
            </span>{" "}
            de conteúdo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Para demonstrar na prática como estruturamos conteúdos estratégicos,
            preparamos uma{" "}
            <span className="text-white font-semibold">
              simulação de uma semana de conteúdo
            </span>{" "}
            para os dois perfis.
          </motion.p>
        </div>

        {/* Profile Tabs */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex gap-3 justify-center">
            {contentCalendar.map((profile, idx) => {
              const Icon = profileIcons[idx] || Building2;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveProfile(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                    activeProfile === idx
                      ? `bg-${profileAccent[idx]}/20 text-white border border-${profileAccent[idx]}/30`
                      : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {profile.profileName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Profile Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProfile}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            {/* Profile objectives */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {contentCalendar[activeProfile].objective.map((obj, i) => (
                <span
                  key={i}
                  className="text-xs font-medium text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  {obj}
                </span>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid gap-4">
              {contentCalendar[activeProfile].days.map((day, i) => {
                const FormatIcon = formatIcons[day.format] || Play;
                const typeColor =
                  typeColors[day.type] ||
                  "bg-slate-500/10 text-slate-400 border-slate-500/20";

                return (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 p-5 md:p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Day number */}
                      <div className="flex items-center gap-3 md:w-20 shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <span className="text-sm font-black text-white">
                            {String(day.day).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="md:hidden text-xs font-bold text-slate-500 uppercase">
                          Dia {day.day}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-full border ${typeColor}`}
                          >
                            {day.type}
                          </span>
                          <span className="flex items-center gap-1 text-xs font-medium text-slate-500">
                            <FormatIcon className="w-3 h-3" />
                            {day.format}
                          </span>
                        </div>

                        <h4 className="text-base md:text-lg font-bold text-white group-hover:text-brand-blue transition-colors">
                          {day.theme}
                        </h4>

                        <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">
                          {day.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-1">
                          <span className="flex items-center gap-1.5 text-xs text-slate-500">
                            <Sparkles className="w-3 h-3 text-brand-green" />
                            <span className="text-slate-400">
                              {day.objective}
                            </span>
                          </span>
                          {day.cta && (
                            <span className="flex items-center gap-1.5 text-xs text-brand-orange font-medium">
                              <MessageCircle className="w-3 h-3" />
                              {day.cta}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-orange/10 rounded-2xl p-6 border border-white/10">
            <p className="text-slate-300 font-medium leading-relaxed">
              Quando aplicado de forma consistente, o digital deixa de ser
              apenas presença nas redes sociais e passa a funcionar como{" "}
              <span className="text-white font-bold">
                um canal real de crescimento e geração de negócios
              </span>{" "}
              para a unidade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
