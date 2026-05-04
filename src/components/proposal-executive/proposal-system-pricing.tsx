"use client";

import { motion } from "framer-motion";
import { Check, Wallet, RotateCw, Zap, ShieldCheck } from "lucide-react";

interface SystemPricing {
  setup: { value: string; label: string; includes: string[]; payment: string };
  monthly: { value: string; label: string; includes: string[]; annualValue?: string; annualNote?: string };
  year1Total: string;
  paybackDays: string;
  notes?: string[];
}

interface Props {
  pricing: SystemPricing;
  clientName: string;
}

export function ProposalExecutiveSystemPricing({ pricing, clientName }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#F8F4EC] text-[#0F0F12] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 border border-[#C8302D]/40 bg-white"
          >
            <Wallet className="w-4 h-4 text-[#C8302D]" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#C8302D] uppercase">
              Investimento
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F0F12] leading-[1.1]"
          >
            Estrutura clara <br className="hidden md:block" />
            <span className="italic text-[#C8302D]">para {clientName}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* SETUP CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#0F0F12]/15 p-8 md:p-10 relative"
          >
            <div className="flex items-start justify-between mb-8 pb-6 border-b border-[#0F0F12]/10">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#C8302D] uppercase">01 · Implantação</span>
                <h3 className="font-playfair text-2xl font-medium text-[#0F0F12] mt-1">
                  {pricing.setup.label}
                </h3>
              </div>
              <Zap className="w-6 h-6 text-[#C8302D]" />
            </div>

            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#0F0F12]/55 uppercase mb-2">Valor único</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl text-[#C8302D] font-playfair font-medium">R$</span>
                <span className="font-playfair text-5xl md:text-6xl font-medium text-[#0F0F12] leading-none tracking-tight">
                  {pricing.setup.value.replace("R$ ", "").replace(",00", "")}
                </span>
              </div>
            </div>

            <p className="text-[10px] font-bold tracking-[0.3em] text-[#0F0F12]/55 uppercase mb-3">O que inclui</p>
            <ul className="space-y-2.5 mb-6">
              {pricing.setup.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C8302D] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#0F0F12]/85 font-inter leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F8F4EC] border-l-2 border-[#C8302D] p-4">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#C8302D] uppercase mb-1">Pagamento</p>
              <p className="text-sm text-[#0F0F12] font-inter font-semibold">{pricing.setup.payment}</p>
            </div>
          </motion.div>

          {/* MONTHLY CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F0F12] text-[#F8F4EC] p-8 md:p-10 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8302D] via-[#D4AF6F] to-[#C8302D]" />

            <div className="flex items-start justify-between mb-8 pb-6 border-b border-[#D4AF6F]/30">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase">02 · SaaS Mensal</span>
                <h3 className="font-playfair text-2xl font-medium text-[#F8F4EC] mt-1">
                  {pricing.monthly.label}
                </h3>
              </div>
              <RotateCw className="w-6 h-6 text-[#D4AF6F]" />
            </div>

            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase mb-2">Mensalidade</p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl text-[#D4AF6F] font-playfair font-medium">R$</span>
                <span className="font-playfair text-5xl md:text-6xl font-medium text-[#F8F4EC] leading-none tracking-tight">
                  {pricing.monthly.value.replace("R$ ", "").replace(",00", "")}
                </span>
                <span className="text-[#D4AF6F]/80 font-bold tracking-[0.2em] text-sm uppercase">/mês</span>
              </div>
              {pricing.monthly.annualValue && (
                <p className="text-xs text-[#F8F4EC]/65 font-inter italic">
                  Plano anual: {pricing.monthly.annualValue} {pricing.monthly.annualNote && `(${pricing.monthly.annualNote})`}
                </p>
              )}
            </div>

            <p className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase mb-3">O que inclui</p>
            <ul className="space-y-2.5 mb-6">
              {pricing.monthly.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#D4AF6F] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#F8F4EC]/85 font-inter leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Total + Payback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0F0F12] text-[#F8F4EC] p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center mb-10"
        >
          <div className="md:border-r md:border-[#D4AF6F]/20 md:pr-8">
            <p className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF6F] uppercase mb-3">Investimento Year 1</p>
            <p className="font-playfair text-4xl md:text-5xl font-medium text-[#F8F4EC] tracking-tight">
              {pricing.year1Total}
            </p>
            <p className="text-xs text-[#F8F4EC]/55 font-inter mt-2 italic">
              Implantação + 12 meses de SaaS
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-[#C8302D] uppercase mb-3">Payback Estimado</p>
            <p className="font-playfair text-4xl md:text-5xl font-medium text-[#C8302D] tracking-tight">
              {pricing.paybackDays}
            </p>
            <p className="text-xs text-[#F8F4EC]/55 font-inter mt-2 italic">
              Considerando economia de 3h/mês de consolidação manual
            </p>
          </div>
        </motion.div>

        {pricing.notes && pricing.notes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 max-w-3xl mx-auto"
          >
            <ShieldCheck className="w-5 h-5 text-[#C8302D] shrink-0 mt-0.5" />
            <ul className="space-y-2">
              {pricing.notes.map((n, idx) => (
                <li key={idx} className="text-sm text-[#0F0F12]/70 font-inter leading-relaxed">
                  {n}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
