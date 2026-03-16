"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Megaphone,
  MapPin,
  Target,
  Search,
  FileText,
  Camera,
  Globe,
  ShoppingCart,
  Store,
  Settings,
  Share2,
  Palette,
  BarChart3,
  Zap,
} from "lucide-react";
import type { ProposalService } from "@/lib/proposals-data";

interface Props {
  services: ProposalService[];
}

const iconMap: Record<string, React.ElementType> = {
  megaphone: Megaphone,
  mapPin: MapPin,
  target: Target,
  search: Search,
  fileText: FileText,
  camera: Camera,
  globe: Globe,
  shoppingCart: ShoppingCart,
  store: Store,
  settings: Settings,
  share2: Share2,
  palette: Palette,
  barChart3: BarChart3,
  zap: Zap,
};

const colorPalette = [
  { bg: "bg-brand-blue/10", border: "border-brand-blue/20", text: "text-brand-blue", price: "text-brand-blue" },
  { bg: "bg-brand-green/10", border: "border-brand-green/20", text: "text-brand-green", price: "text-brand-green" },
  { bg: "bg-brand-purple/10", border: "border-brand-purple/20", text: "text-brand-purple", price: "text-brand-purple" },
  { bg: "bg-brand-orange/10", border: "border-brand-orange/20", text: "text-brand-orange", price: "text-brand-orange" },
];

const priceTypeLabels: Record<string, string> = {
  monthly: "/mês",
  project: " (projeto)",
  daily: "/diária",
};

export function ProposalScope({ services }: Props) {
  // Split services: monthly vs project-based
  const monthlyServices = services.filter(
    (s) => !s.priceType || s.priceType === "monthly"
  );
  const projectServices = services.filter(
    (s) => s.priceType === "project"
  );

  const hasPrice = services.some((s) => s.price);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-blue/10 border border-brand-blue/20 px-5 py-2 text-sm font-bold text-brand-blue uppercase tracking-wider"
          >
            Escopo de Serviços
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900"
          >
            O que vamos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              construir juntos
            </span>
          </motion.h2>
        </div>

        {/* Monthly Services */}
        {monthlyServices.length > 0 && (
          <>
            {projectServices.length > 0 && (
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-sm font-bold text-slate-500 uppercase tracking-wider mb-8"
              >
                Serviços Recorrentes (Mensal)
              </motion.h3>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {monthlyServices.map((service, i) => {
                const color = colorPalette[i % colorPalette.length];
                const Icon = iconMap[service.icon] || Zap;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                  >
                    {/* Icon + Name */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${color.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-5 h-5 ${color.text}`} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-slate-900 text-base leading-tight">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Items */}
                    <div className="space-y-1.5 mb-4 flex-1">
                      {service.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${color.text} opacity-70`}
                          />
                          <span className="text-sm text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    {service.price && (
                      <div className={`mt-auto pt-4 border-t border-slate-100`}>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-xl font-black ${color.price}`}>
                            {service.price}
                          </span>
                          <span className="text-sm text-slate-400 font-medium">
                            {priceTypeLabels[service.priceType || "monthly"]}
                          </span>
                        </div>
                        {service.priceNote && (
                          <p className="text-[11px] text-slate-400 mt-1">
                            📌 {service.priceNote}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </>
        )}

        {/* Project-Based Services */}
        {projectServices.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-sm font-bold text-slate-500 uppercase tracking-wider mb-8 mt-8"
            >
              Projetos sob Demanda
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projectServices.map((service, i) => {
                const colorIdx = (monthlyServices.length + i) % colorPalette.length;
                const color = colorPalette[colorIdx];
                const Icon = iconMap[service.icon] || Zap;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${color.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-5 h-5 ${color.text}`} />
                      </div>
                      <h3 className="font-bold text-slate-900 text-base leading-tight">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 mb-4 flex-1">
                      {service.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${color.text} opacity-70`}
                          />
                          <span className="text-sm text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>

                    {service.price && (
                      <div className="mt-auto pt-4 border-t border-slate-100">
                        <div className="flex items-baseline gap-1">
                          <span className={`text-xl font-black ${color.price}`}>
                            {service.price}
                          </span>
                          <span className="text-sm text-slate-400 font-medium">
                            {priceTypeLabels[service.priceType || "project"]}
                          </span>
                        </div>
                        {service.priceNote && (
                          <p className="text-[11px] text-slate-400 mt-1">
                            📌 {service.priceNote}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
