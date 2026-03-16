"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Search,
  Building2,
  User,
} from "lucide-react";
import type { ProposalProfileAnalysisItem } from "@/lib/proposals-data";

interface Props {
  profileAnalyses: ProposalProfileAnalysisItem[];
  clientName: string;
}

const profileIcons: Record<string, React.ElementType> = {
  "Perfil Institucional": Building2,
  "Perfil do Gestor": User,
};

const profileColors = [
  {
    badge: "bg-brand-blue/10 border-brand-blue/20 text-brand-blue",
    strengthBg: "from-brand-blue/5",
    strengthBorder: "border-brand-blue/15",
    strengthIcon: "text-brand-blue",
    opportunityBg: "from-brand-blue/5",
    opportunityBorder: "border-brand-blue/10",
  },
  {
    badge: "bg-brand-purple/10 border-brand-purple/20 text-brand-purple",
    strengthBg: "from-brand-purple/5",
    strengthBorder: "border-brand-purple/15",
    strengthIcon: "text-brand-purple",
    opportunityBg: "from-brand-purple/5",
    opportunityBorder: "border-brand-purple/10",
  },
];

export function ProposalProfileAnalysis({
  profileAnalyses,
  clientName,
}: Props) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-purple/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 px-5 py-2 text-sm font-bold text-brand-purple uppercase tracking-wider"
          >
            <Search className="w-4 h-4" />
            Análise Estratégica
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900"
          >
            Analisamos os perfis da{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              {clientName}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Realizamos uma análise detalhada de cada perfil para identificar
            pontos fortes, oportunidades e sugestões estratégicas que vão
            potencializar sua presença digital.
          </motion.p>
        </div>

        {/* Profiles */}
        <div className="max-w-6xl mx-auto space-y-16">
          {profileAnalyses.map((profile, idx) => {
            const color = profileColors[idx % profileColors.length];
            const ProfileIcon =
              profileIcons[profile.profileRole] || Building2;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${color.badge}`}
                  >
                    <ProfileIcon className="w-4 h-4" />
                    {profile.profileRole}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      {profile.profileName}
                    </h3>
                    <span className="text-sm text-slate-500 font-medium">
                      {profile.profileHandle}
                    </span>
                  </div>
                </div>

                {/* Strengths & Opportunities Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <div
                    className={`bg-gradient-to-br ${color.strengthBg} to-white rounded-3xl p-7 border ${color.strengthBorder} shadow-lg`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-9 h-9 rounded-xl bg-brand-green/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-brand-green" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Pontos Fortes
                      </h4>
                    </div>
                    <div className="space-y-4">
                      {profile.strengths.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 mt-0.5 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                          </div>
                          <div>
                            <h5 className="font-bold text-slate-900 text-sm mb-0.5">
                              {point.title}
                            </h5>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Opportunities */}
                  <div
                    className={`bg-gradient-to-br from-brand-orange/5 to-white rounded-3xl p-7 border border-brand-orange/15 shadow-lg`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-9 h-9 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Oportunidades
                      </h4>
                    </div>
                    <div className="space-y-4">
                      {profile.opportunities.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 mt-0.5 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                            <AlertTriangle className="w-3 h-3 text-brand-orange" />
                          </div>
                          <div>
                            <h5 className="font-bold text-slate-900 text-sm mb-0.5">
                              {point.title}
                            </h5>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ecosystem Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-brand-blue/5 via-brand-purple/5 to-brand-blue/5 rounded-2xl p-6 border border-brand-purple/10">
            <p className="text-slate-700 font-semibold leading-relaxed text-lg">
              Quando bem estruturados,{" "}
              <span className="text-brand-blue font-bold">
                o perfil institucional gera confiança
              </span>{" "}
              e{" "}
              <span className="text-brand-purple font-bold">
                o perfil pessoal gera conexão e influência
              </span>
              . Os dois juntos aceleram vendas, recrutamento e autoridade
              regional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
