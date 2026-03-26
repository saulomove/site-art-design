"use client";

import { motion } from "framer-motion";
import { Gift, Check } from "lucide-react";

interface ProposalBonusProps {
  bonus: {
    title: string;
    items: string[];
  };
}

export function ProposalBonus({ bonus }: ProposalBonusProps) {
  if (!bonus || !bonus.items || bonus.items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Glowing Card */}
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600">
            <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-30" />
            <div className="relative bg-[#0f1423] rounded-[22px] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row gap-10 items-center">
              
              {/* Left Side: Icon & Title */}
              <div className="md:w-1/3 text-center md:text-left">
                <div className="w-20 h-20 mx-auto md:mx-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-yellow-500/20">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                  Bônus<br />
                  <span className="text-yellow-400">Exclusivo</span>
                </h3>
                <p className="text-slate-400 text-sm mt-3 uppercase tracking-wider font-semibold">
                  {bonus.title || "Válido para início imediato"}
                </p>
              </div>

              {/* Right Side: List */}
              <div className="md:w-2/3 w-full">
                <ul className="space-y-4">
                  {bonus.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-yellow-500" />
                      </div>
                      <span className="text-white text-lg font-medium">{item}</span>
                    </motion.div>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
