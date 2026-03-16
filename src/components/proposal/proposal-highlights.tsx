"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface ProposalHighlightsProps {
  highlights: string[];
  clientName: string;
}

export function ProposalHighlights({ highlights, clientName }: ProposalHighlightsProps) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-white border-y border-slate-100">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_var(--tw-gradient-stops))] from-brand-orange/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Left: Title */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 px-4 py-2 text-sm font-bold text-brand-orange mb-4">
                <Sparkles className="w-4 h-4" />
                Diferenciais
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Por que escolher<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                  a ArtDesign
                </span>
                ?
              </h3>
            </div>

            {/* Right: Highlights List */}
            <div className="flex-1 grid gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl px-5 py-4 hover:bg-brand-blue/5 hover:border-brand-blue/20 border border-transparent transition-all group"
                >
                  <div className="w-7 h-7 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
