"use client";

import { motion } from "framer-motion";
import type { ProposalService } from "@/lib/proposals-data";
import {
  AciavSectionHeader,
  AciavCheck,
  ACIAV_ICONS,
  ACIAV_ICON_FALLBACK,
} from "./aciav-ui";

interface Props {
  services: ProposalService[];
}

export function ProposalAciavModules({ services }: Props) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <AciavSectionHeader
          eyebrow="O que a ACIC recebe"
          title="Todos os acessos da plataforma,"
          highlight="sem exceção"
          lead="A unidade da ACIC não é uma versão reduzida. É o mesmo sistema que Videira opera hoje — os mesmos painéis, o mesmo aplicativo, as mesmas funcionalidades."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = ACIAV_ICONS[service.icon] ?? ACIAV_ICON_FALLBACK;
            const isLast = idx === services.length - 1;

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: Math.min(idx, 4) * 0.08 }}
                className={`flex flex-col rounded-3xl border border-[#e7ecef] bg-[#f7f5f1] p-8 transition-shadow duration-300 hover:shadow-[0_24px_50px_-24px_rgba(8,30,40,.22)] md:p-9 ${
                  isLast && services.length % 2 !== 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0d6b6b]">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <div className="min-w-0 pt-1.5">
                    <h3 className="text-xl font-bold leading-tight text-[#0c1e2a]">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-[#2b3b48]/75">
                  {service.description}
                </p>

                <ul
                  className={`mt-7 space-y-3 text-[15px] leading-relaxed text-[#2b3b48] ${
                    isLast && services.length % 2 !== 0
                      ? "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 sm:[&>li]:mb-3"
                      : ""
                  }`}
                >
                  {service.items.map((item, itemIdx) => (
                    <AciavCheck key={itemIdx}>{item}</AciavCheck>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
