"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

interface StackCategory {
  category: string;
  items: { name: string; role: string }[];
}

interface Props {
  stack: StackCategory[];
}

export function ProposalExecutiveSystemStack({ stack }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F0F12] text-[#F8F4EC] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase"
          >
            <Code2 className="w-4 h-4" />
            Tecnologia Empregada
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#F8F4EC] leading-[1.1]"
          >
            Stack moderno, <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">infraestrutura sólida</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-[#18181C] border border-[#D4AF6F]/15 p-6"
            >
              <div className="pb-4 mb-5 border-b border-[#D4AF6F]/20">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#C8302D] uppercase">
                  Categoria {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-playfair text-xl font-medium text-[#F8F4EC] mt-1">
                  {cat.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i}>
                    <p className="font-playfair text-base font-medium text-[#D4AF6F]">{item.name}</p>
                    <p className="text-xs text-[#F8F4EC]/60 font-inter mt-0.5 leading-relaxed">
                      {item.role}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-sm text-[#F8F4EC]/55 font-inter italic max-w-2xl mx-auto"
        >
          Tecnologias utilizadas pelas maiores empresas do mundo (Uber, Netflix, Vercel) — reduzem tempo de manutenção e garantem escala.
        </motion.p>
      </div>
    </section>
  );
}
