"use client";

import { motion } from "framer-motion";
import { Bell, RefreshCw, Plus, ArrowRight } from "lucide-react";
import { AciavSectionHeader } from "./aciav-ui";

interface Props {
  optionalServices: string[];
}

export function ProposalAciavNext({ optionalServices }: Props) {
  const [featured, ...rest] = optionalServices;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <AciavSectionHeader
          eyebrow="Próximos passos"
          title="A plataforma continua"
          highlight="evoluindo"
          lead="Com duas unidades operando, abrem-se possibilidades que não existiam com uma só. Estas são evoluções previstas — a serem detalhadas junto com a ACIC."
        />

        {/* Sincronização entre unidades */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-[#f7f5f1] p-8 md:p-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1e8] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#cf4f15]">
                  <Bell className="h-3 w-3" />
                  Em estudo
                </span>
                <h3 className="mt-5 text-2xl font-bold leading-tight text-[#0c1e2a] md:text-3xl">
                  Rede sincronizada entre Videira e Caçador
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-[#2b3b48]/80 md:text-base">
                  {featured}
                </p>
              </div>

              {/* Diagrama do fluxo */}
              <div className="w-full flex-shrink-0 lg:w-[340px]">
                <div className="rounded-2xl bg-white p-6 shadow-[0_20px_45px_-24px_rgba(8,30,40,.25)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-xl bg-[#e6f3f2] px-4 py-2.5 text-sm font-bold text-[#0d6b6b]">
                      Videira
                    </span>
                    <div className="flex flex-1 flex-col items-center gap-1">
                      <ArrowRight className="h-4 w-4 text-[#1c9b96]" />
                      <ArrowRight className="h-4 w-4 rotate-180 text-[#e85d1f]" />
                    </div>
                    <span className="rounded-xl bg-[#fff1e8] px-4 py-2.5 text-sm font-bold text-[#cf4f15]">
                      Caçador
                    </span>
                  </div>

                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#f7f5f1] p-4">
                    <Bell className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#e85d1f]" />
                    <p className="text-[13px] leading-snug text-[#2b3b48]">
                      <span className="font-semibold">Novo credenciado</span>{" "}
                      cadastrado na outra unidade
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0d6b6b] px-4 py-3 text-sm font-semibold text-white opacity-90"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Sincronizar
                  </button>
                  <p className="mt-3 text-center text-[11px] text-[#6a7a86]">
                    Ilustração do comportamento previsto
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Demais evoluções */}
        {rest.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            {rest.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-[#e7ecef] bg-white px-6 py-5"
              >
                <Plus className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1c9b96]" />
                <span className="text-[15px] leading-relaxed text-[#2b3b48]">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
