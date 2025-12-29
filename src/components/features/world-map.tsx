"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function WorldMap() {
    const brazilCities = [
        "Itabuna/BA",
        "Campo Largo/PR", "Curitiba/PR",
        "Rio de Janeiro/RJ",
        "Farroupilha/RS", "Porto Alegre/RS",
        "Araranguá/SC", "Balneário Camboriú/SC", "Caçador/SC", "Curitibanos/SC",
        "Joaçaba/SC", "Mafra/SC", "Papanduva/SC", "Santa Cecília/SC", "Videira/SC",
        "Campinas/SP", "Paulínia/SP", "São José dos Campos/SP"
    ];

    const international = [
        { country: "Estados Unidos", flag: "🇺🇸", city: "Texas" },
        { country: "Emirados Árabes", flag: "🇦🇪", city: "Dubai" },
        { country: "Japão", flag: "🇯🇵", city: "Tokyo" },
        { country: "Portugal", flag: "🇵🇹", city: "Lisboa" },
        { country: "Espanha", flag: "🇪🇸", city: "Madrid" },
        { country: "Chile", flag: "🇨🇱", city: "Santiago • Talca" },
        { country: "Argentina", flag: "🇦🇷", city: "Córdoba • San Francisco" },
        { country: "Colômbia", flag: "🇨🇴", city: "Bogotá" },
    ];

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Coluna Brasil */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50"
            >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <span className="text-4xl shadow-sm rounded-full bg-slate-50 p-2">🇧🇷</span>
                    <div>
                        <h4 className="text-2xl font-bold text-slate-900">Brasil</h4>
                        <p className="text-sm text-slate-500">Clientes Ativos</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-3">
                    {brazilCities.map((city, i) => (
                        <div key={i} className="flex items-center gap-1.5 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green/40 group-hover:bg-brand-green group-hover:scale-125 transition-all shrink-0" />
                            <span className="text-slate-600 font-medium text-xs sm:text-sm group-hover:text-slate-900 transition-colors truncate" title={city}>{city}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Coluna Internacional */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl"
            >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <span className="text-4xl bg-white/5 p-2 rounded-full">🌍</span>
                    <div>
                        <h4 className="text-2xl font-bold text-white">Internacional</h4>
                        <p className="text-sm text-slate-400">Presença Global</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {international.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                            <span className="text-2xl">{item.flag}</span>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm leading-none mb-1">{item.country}</span>
                                <span className="text-brand-blue text-xs font-medium">{item.city}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
