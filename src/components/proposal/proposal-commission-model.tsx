"use client";

import { motion } from "framer-motion";
import { Handshake, Zap, Scale, TrendingUp } from "lucide-react";

interface ProposalCommissionModelProps {
  commissionModel: {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; description: string }[];
    closingText: string;
  };
}

export function ProposalCommissionModel({ commissionModel }: ProposalCommissionModelProps) {
  if (!commissionModel) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 border-y border-brand-green/20">
      {/* Background Ornaments */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-bold text-sm tracking-wide mb-6 uppercase"
            >
              <Handshake className="w-4 h-4" />
              O Modelo de Parceria
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6"
            >
              Nós apostamos<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">
                com você.
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed font-medium bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm"
              dangerouslySetInnerHTML={{ __html: commissionModel.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}
            />
          </div>

          {/* Cards / Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {commissionModel.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 border border-brand-green/20 group-hover:scale-110 group-hover:bg-brand-green/20 transition-all">
                  {idx === 0 ? <Scale className="w-7 h-7 text-brand-green" /> : <TrendingUp className="w-7 h-7 text-brand-green" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{feature.title}</h3>
                <p className="text-slate-400 text-[17px] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing Truth Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-b from-brand-green/40 to-transparent"
          >
            <div className="bg-slate-900 rounded-[23px] p-8 md:p-10 flex flex-col items-center text-center">
              <Zap className="w-10 h-10 text-brand-green mb-6 opacity-80" />
              <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed max-w-2xl">
                {commissionModel.closingText}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
