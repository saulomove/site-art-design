"use client";

import { motion } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";

interface Props {
  services: string[];
}

export function ProposalOptionalServices({ services }: Props) {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 px-5 py-2 text-sm font-bold text-brand-purple uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4" />
              Serviços Extras
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-black tracking-tight text-slate-900"
            >
              Podemos implementar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
                posteriormente
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 leading-relaxed"
            >
              Esses serviços podem ser adicionados conforme o crescimento do
              projeto.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                    <Plus className="w-3.5 h-3.5 text-brand-purple" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
