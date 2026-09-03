"use client";

import { motion } from "framer-motion";
import type { ProposalBenchmark } from "@/lib/proposals-data";
import { VinicolaDivider, VinicolaSectionHeader } from "./vinicola-ui";

interface Props {
  benchmark: ProposalBenchmark;
}

export function ProposalVinicolaBenchmark({ benchmark }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#F4F0E8] py-24 md:py-32">
      <VinicolaDivider onLight />

      <div className="container mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          onLight
          eyebrow="Concorrência"
          title={benchmark.title}
          lead={benchmark.intro}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="overflow-x-auto bg-white"
        >
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#0B0B0B]/10">
                <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B0B0B]/45">
                  Vinícola
                </th>
                {benchmark.columns.map((col) => (
                  <th
                    key={col}
                    className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B0B0B]/45"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {benchmark.rows.map((row) => (
                <tr
                  key={row.name}
                  className={`border-b border-[#0B0B0B]/[0.07] last:border-0 ${
                    row.highlight ? "bg-[#9A2B23]/[0.05]" : ""
                  }`}
                >
                  <td className="px-6 py-5">
                    <span
                      className={`block text-[15px] leading-snug ${
                        row.highlight
                          ? "font-semibold text-[#9A2B23]"
                          : "font-medium text-[#0B0B0B]"
                      }`}
                    >
                      {row.name}
                    </span>
                    {row.note && (
                      <span className="mt-0.5 block text-[12px] italic text-[#0B0B0B]/45">
                        {row.note}
                      </span>
                    )}
                  </td>
                  {row.cells.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className={`px-6 py-5 text-[14px] ${
                        row.highlight
                          ? "font-medium text-[#9A2B23]"
                          : "text-[#0B0B0B]/70"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {benchmark.footnote && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-8 max-w-3xl text-[14px] leading-relaxed text-[#0B0B0B]/55"
          >
            {benchmark.footnote}
          </motion.p>
        )}
      </div>
    </section>
  );
}
