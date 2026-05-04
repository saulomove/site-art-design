"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

interface ComparisonRow {
  feature: string;
  excel: string;
  competitor: string;
  artdesign: string;
}

interface Props {
  comparison: { competitorName: string; rows: ComparisonRow[] };
}

function renderCell(value: string) {
  if (value === "true" || value === "✓") {
    return <Check className="w-5 h-5 text-[#D4AF6F]" />;
  }
  if (value === "false" || value === "✗") {
    return <X className="w-5 h-5 text-[#0F0F12]/30" />;
  }
  if (value === "-") {
    return <Minus className="w-4 h-4 text-[#0F0F12]/30" />;
  }
  return <span className="text-xs font-inter text-[#0F0F12]/85 leading-snug">{value}</span>;
}

export function ProposalExecutiveSystemComparison({ comparison }: Props) {
  return (
    <section className="relative py-24 md:py-32 bg-[#F8F4EC] text-[#0F0F12] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold tracking-[0.4em] text-[#C8302D] uppercase"
          >
            Comparativo de Mercado
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F0F12] leading-[1.1]"
          >
            Excel · {comparison.competitorName} · <span className="italic text-[#C8302D]">ArtDesign</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left p-4 bg-[#0F0F12]/5 border-b-2 border-[#0F0F12]/15">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#0F0F12]/55 uppercase">Funcionalidade</span>
                </th>
                <th className="p-4 bg-[#0F0F12]/5 border-b-2 border-[#0F0F12]/15 w-[120px]">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#0F0F12]/55 uppercase">Excel</span>
                </th>
                <th className="p-4 bg-[#0F0F12]/5 border-b-2 border-[#0F0F12]/15 w-[120px]">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#0F0F12]/55 uppercase">{comparison.competitorName}</span>
                </th>
                <th className="p-4 bg-[#0F0F12] border-b-2 border-[#D4AF6F] w-[160px]">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF6F] uppercase">ArtDesign</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/40 transition-colors">
                  <td className="p-4 border-b border-[#0F0F12]/10 text-sm font-inter font-semibold text-[#0F0F12]">
                    {row.feature}
                  </td>
                  <td className="p-4 border-b border-[#0F0F12]/10 text-center">{renderCell(row.excel)}</td>
                  <td className="p-4 border-b border-[#0F0F12]/10 text-center">{renderCell(row.competitor)}</td>
                  <td className="p-4 border-b border-[#D4AF6F]/20 text-center bg-[#0F0F12]/[0.03]">{renderCell(row.artdesign)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
