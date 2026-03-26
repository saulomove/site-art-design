"use client";

import { motion } from "framer-motion";
import { Search, AlertCircle, ShoppingBag } from "lucide-react";

interface ProposalEcommerceAnalysisProps {
  ecommerceAnalysis: {
    title: string;
    items: string[];
  };
}

export function ProposalEcommerceAnalysis({ ecommerceAnalysis }: ProposalEcommerceAnalysisProps) {
  if (!ecommerceAnalysis || !ecommerceAnalysis.items || ecommerceAnalysis.items.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <motion.div 
              className="lg:w-1/3 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-bold text-sm mb-6">
                <Search className="w-4 h-4" />
                Diagnóstico Extra
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                {ecommerceAnalysis.title || "Análise Inicial da Loja Online"}
              </h2>
              <p className="text-slate-600 text-lg">
                Identificamos gargalos que estão impedindo a sua loja online de converter todo o interesse gerado nas redes sociais.
              </p>
            </motion.div>

            <motion.div 
              className="lg:w-2/3 grid gap-4 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {ecommerceAnalysis.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white border border-slate-200 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <AlertCircle className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-medium md:text-lg">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
