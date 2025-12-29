"use client";

import { motion } from "framer-motion";
import {
    Factory,
    HardHat,
    Sparkles,
    Stethoscope,
    Utensils,
    GraduationCap,
    Store,
    Palette,
    Mic,
    Cpu,
    Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
    {
        title: "Indústria & Distribuição",
        icon: Factory,
        color: "text-blue-600",
        bg: "bg-blue-100",
        items: ["MDF, painéis e derivados", "Indústria madeireira (FSC)", "Revestimentos", "Gases industriais e medicinais", "Distribuidores", "Indústria química leve"]
    },
    {
        title: "Construção & Arquitetura",
        icon: HardHat,
        color: "text-orange-600",
        bg: "bg-orange-100",
        items: ["Construtoras", "Arquitetura e Interiores", "Obras corporativas", "Marcenaria sob medida", "Acabamentos", "Tratamento acústico"]
    },
    {
        title: "Estética & Bem-estar",
        icon: Sparkles,
        color: "text-pink-600",
        bg: "bg-pink-100",
        items: ["Estética avançada", "Micropigmentação", "Design de sobrancelhas", "Profissionais da beleza", "Cursos na área", "Formação profissional"]
    },
    {
        title: "Saúde & Clínica",
        icon: Stethoscope,
        color: "text-green-600",
        bg: "bg-green-100",
        items: ["Fisioterapia e Pilates", "Clínicas multidisciplinares", "Farmácia (varejo/manipulação)", "Profissionais da saúde", "Reabilitação"]
    },
    {
        title: "Alimentação & Gastronomia",
        icon: Utensils,
        color: "text-red-600",
        bg: "bg-red-100",
        items: ["Pizzarias e Restaurantes", "Delivery", "Marcas gastronômicas", "Operações com múltiplas unidades"]
    },
    {
        title: "Educação & Cursos",
        icon: GraduationCap,
        color: "text-purple-600",
        bg: "bg-purple-100",
        items: ["Cursos profissionalizantes", "Formação técnica", "Cursos de saúde/estética", "Mentorias", "Produtos digitais"]
    },
    {
        title: "Comércio & Serviços",
        icon: Store,
        color: "text-cyan-600",
        bg: "bg-cyan-100",
        items: ["Comércio local", "Empresas regionais", "Marcas em expansão", "Negócios B2B e B2C", "Empresas familiares", "Franquias"]
    },
    {
        title: "Criativos & Autônomos",
        icon: Palette,
        color: "text-fuchsia-600",
        bg: "bg-fuchsia-100",
        items: ["Artistas e Tatuadores", "Profissionais criativos", "Prestadores de serviço", "Marcas pessoais"]
    },
    {
        title: "Eventos & Institucional",
        icon: Mic,
        color: "text-yellow-600",
        bg: "bg-yellow-100",
        items: ["Eventos corporativos", "Feiras e exposições", "Congressos", "Lançamentos de marca", "Cobertura institucional"]
    },
    {
        title: "Tecnologia & Inovação",
        icon: Cpu,
        color: "text-indigo-600",
        bg: "bg-indigo-100",
        items: ["Desenvolvimento de sistemas", "Plataformas web", "CRM e automações", "Soluções SaaS", "Integrações"]
    }
];

export function IndustriesSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
            <div className="container mx-auto px-4 relative z-10">

                <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block rounded-full bg-brand-blue/10 border border-brand-blue/20 px-4 py-1.5 text-sm font-bold text-brand-blue mb-4 uppercase tracking-wider"
                    >
                        Para quem é?
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
                        Expertise que gera resultados em <br />
                        <span className="text-transparent bg-clip-text bg-gradient-brand">diversos segmentos.</span>
                    </h2>

                    <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-100 italic text-slate-600 text-lg leading-relaxed">
                        "Atendemos empresas da indústria ao comércio, da saúde à estética, da construção à gastronomia — <strong className="text-brand-purple">sempre com estratégia, criatividade e foco em crescimento real.</strong>"
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {industries.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", item.bg)}>
                                    <item.icon className={cn("w-6 h-6", item.color)} />
                                </div>
                                <h3 className="font-bold text-slate-900 leading-tight">{item.title}</h3>
                            </div>

                            <ul className="space-y-2">
                                {item.items.slice(0, 4).map((subItem, j) => (
                                    <li key={j} className="text-sm text-slate-500 flex items-start gap-2">
                                        <div className="w-1 h-1 rounded-full bg-slate-300 mt-2 shrink-0" />
                                        <span className="leading-tight">{subItem}</span>
                                    </li>
                                ))}
                                {item.items.length > 4 && (
                                    <li className="text-xs font-semibold text-brand-blue pl-3 pt-1">
                                        + outros nichos
                                    </li>
                                )}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
