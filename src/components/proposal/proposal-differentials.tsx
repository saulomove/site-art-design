"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  HandshakeIcon,
  CheckCircle2,
  Heart,
  Ban,
} from "lucide-react";

interface Props {
  differentials?: string[];
}

export function ProposalDifferentials({ differentials }: Props) {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-white border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 border border-brand-green/20 px-5 py-2 text-sm font-bold text-brand-green uppercase tracking-wider"
            >
              <Shield className="w-4 h-4" />
              Nosso Compromisso
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black tracking-tight text-slate-900"
            >
              Por que trabalhar com a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                ArtDesign
              </span>
              ?
            </motion.h2>
          </div>

          {/* Main Differentials Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* No Lock-in */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-green/5 to-white rounded-2xl p-6 border border-brand-green/15 text-center group hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-green/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Ban className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Sem Fidelização
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Trabalhamos <strong>mês a mês</strong>. O cliente permanece
                porque vê resultado, não por contrato.
              </p>
            </motion.div>

            {/* Transparency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-brand-blue/5 to-white rounded-2xl p-6 border border-brand-blue/15 text-center group hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-blue/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Transparência Total
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Zero margem</strong> sobre serviços externos. O cliente
                paga exatamente o valor oficial das plataformas.
              </p>
            </motion.div>

            {/* Partnership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-brand-purple/5 to-white rounded-2xl p-6 border border-brand-purple/15 text-center group hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-purple/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-brand-purple" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Parceria Real
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nosso compromisso é <strong>provar o valor</strong> do trabalho
                todos os meses. Foco em resultado.
              </p>
            </motion.div>
          </div>

          {/* Additional Differentials List */}
          {differentials && differentials.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100"
            >
              <div className="grid sm:grid-cols-2 gap-3">
                {differentials.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
