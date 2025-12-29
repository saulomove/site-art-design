"use client";

import { motion } from "framer-motion";
import {
    ShoppingBag,
    Truck,
    MessageCircle,
    BarChart3,
    Globe,
    Store,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const marketplaces = [
    {
        name: "Mercado Livre",
        url: "/logos/mercado-livre.png",
        bg: "bg-[#FFE600]",
        className: "p-4 w-32 h-32 md:w-40 md:h-40" // Meli is the Hero
    },
    {
        name: "Amazon",
        url: "/logos/amazon.png",
        bg: "bg-white",
        className: "p-3 w-20 h-20 md:w-24 md:h-24"
    },
    {
        name: "Leroy Merlin",
        url: "/logos/leroy-merlin.png",
        bg: "bg-white",
        className: "p-3 w-20 h-20 md:w-24 md:h-24"
    },
    {
        name: "WhatsApp",
        url: "/logos/whatsapp.svg",
        bg: "bg-[#25D366]",
        className: "p-3 w-20 h-20 md:w-24 md:h-24"
    },
    {
        name: "Magalu",
        url: "/logos/magalu.png",
        bg: "bg-blue-600",
        className: "p-3 w-16 h-16 md:w-20 md:h-20"
    },
    {
        name: "Shopee",
        url: "/logos/shopee.png",
        bg: "bg-[#EE4D2D]",
        className: "p-3 w-16 h-16 md:w-20 md:h-20"
    }
];

const features = [
    {
        icon: Store,
        title: "Loja Própria & Marketplaces",
        desc: "Criamos e gerenciamos sua loja virtual e conectamos seus produtos aos maiores marketplaces do Brasil."
    },
    {
        icon: MessageCircle,
        title: "Vendas no WhatsApp",
        desc: "Transforme seu WhatsApp em uma máquina de vendas com catálogos automatizados e recuperação de carrinho."
    },
    {
        icon: Truck,
        title: "Logística Integrada",
        desc: "Gestão unificada de estoque e pedidos. Vendeu no Mercado Livre? Baixa no site automaticamente."
    },
    {
        icon: BarChart3,
        title: "Gestão de Performance",
        desc: "Análise de ROI, margem de contribuição e estratégias de Ads específicas para cada canal."
    }
];

export function MarketplaceSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-slate-900 text-white">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-slate-900 to-slate-900 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Content Column */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-block rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 text-sm font-bold text-yellow-500 mb-2">
                            FULL COMMERCE 360º
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Sua loja online em <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">todos os lugares.</span>
                        </h2>

                        <p className="text-lg text-slate-400 leading-relaxed font-light max-w-xl">
                            Não dependa de um único canal. Nossa operação de <strong>Full Commerce</strong> posiciona sua marca no Mercado Livre, Amazon, Leroy Merlin e Google Shopping, enquanto seu WhatsApp converte leads em clientes fiéis.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 pt-8">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-3"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <Button className="h-14 px-8 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-base shadow-lg shadow-yellow-500/20" asChild>
                                <Link href="/contato">
                                    Quero Vender Mais Online
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Visual Column - The Ecosystem */}
                    <div className="flex-1 relative w-full flex items-center justify-center min-h-[500px] lg:min-h-[600px]">

                        {/* Central Hub */}
                        <div className="absolute z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center shadow-2xl">
                            <div className="text-center">
                                <ShoppingBag className="w-10 h-10 text-white mx-auto mb-1" />
                                <span className="text-xs font-bold text-slate-300">SUA LOJA</span>
                            </div>
                        </div>

                        {/* Orbiting Planets */}
                        {marketplaces.map((item, i) => {
                            // Calculate orbit position
                            const angle = (i * (360 / marketplaces.length)) * (Math.PI / 180);
                            const radius = 160; // Adjust for spread
                            // Using standard CSS for orbit simulation in this static view, or framer motion for entry

                            // Specific positioning tweaks for a nice spread without math overkill in inline styles
                            // We'll use a pre-calculated layout approach for simplicity and robustness
                            const positions = [
                                "top-0 left-1/2 -translate-x-1/2 -translate-y-12", // Top (Mercado Livre)
                                "top-[25%] right-[5%] translate-x-4", // Top Right
                                "bottom-[25%] right-[5%] translate-x-4", // Bottom Right
                                "bottom-0 left-1/2 -translate-x-1/2 translate-y-12", // Bottom
                                "bottom-[25%] left-[5%] -translate-x-4", // Bottom Left
                                "top-[25%] left-[5%] -translate-x-4", // Top Left
                            ];

                            return (
                                <motion.div
                                    key={i}
                                    className={cn("absolute rounded-3xl shadow-2xl flex items-center justify-center border-4 border-slate-800 z-10 overflow-hidden bg-white", item.className, positions[i])}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ delay: i * 0.1, type: "spring" }}
                                >
                                    <div className={cn("absolute inset-0 opacity-10", item.bg)} />
                                    <img
                                        src={item.url}
                                        alt={item.name}
                                        className="w-[80%] h-[80%] object-contain relative z-10"
                                    />
                                </motion.div>
                            )
                        })}

                        {/* Connecting Lines (Decorative SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <motion.path
                                d="M50,50 L50,10 M50,50 L85,30 M50,50 L85,70 M50,50 L50,90 M50,50 L15,70 M50,50 L15,30"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                strokeDasharray="2 2"
                                className="text-slate-500"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                        </svg>

                        {/* Pulsing Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[300px] h-[300px] border border-slate-700/50 rounded-full" />
                            <div className="absolute w-[450px] h-[450px] border border-slate-700/30 rounded-full" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
