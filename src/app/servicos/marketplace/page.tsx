"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Truck, BarChart4, Globe, RefreshCw, Box } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MarketplacePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-yellow-500/30">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 text-sm font-bold text-yellow-500 mb-8 backdrop-blur-md"
                            >
                                <ShoppingBag className="w-4 h-4 mr-2" />
                                Full Commerce & Marketplaces
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight"
                            >
                                Venda onde todo  <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">mundo compra.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-xl text-slate-400 max-w-xl leading-relaxed mb-10"
                            >
                                Colocamos seus produtos no <strong>Mercado Livre, Amazon e Shopee</strong> com gestão profissional. Cuidamos do cadastro à logística, focando em alta reputação e vendas diárias.
                            </motion.p>

                            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold h-16 px-10 text-lg rounded-full shadow-lg shadow-yellow-500/20" asChild>
                                <Link href="/contato">Iniciar Operação</Link>
                            </Button>
                        </div>

                        {/* LOGOS VISUAL */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full" />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-2xl flex items-center justify-center shadow-lg transform translate-y-8">
                                    <img src="/logos/mercado-livre.svg" alt="Mercado Livre" className="h-12 w-auto" />
                                </div>
                                <div className="bg-white p-6 rounded-2xl flex items-center justify-center shadow-lg transform -translate-y-8">
                                    <img src="/logos/amazon.svg" alt="Amazon" className="h-10 w-auto" />
                                </div>
                                <div className="bg-white p-6 rounded-2xl flex items-center justify-center shadow-lg transform translate-y-4">
                                    <img src="/logos/shopee.svg" alt="Shopee" className="h-12 w-auto" />
                                </div>
                                <div className="bg-white p-6 rounded-2xl flex items-center justify-center shadow-lg transform -translate-y-4">
                                    <img src="/logos/magalu.png" alt="Magalu" className="h-8 w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS GRID */}
            <section className="py-24 bg-slate-900/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Gestão Full Commerce", desc: "Cadastro, precificação, atendimento e expedição. Assumimos a operação do seu e-commerce.", icon: Globe },
                            { title: "Alta Reputação", desc: "Estratégias para manter sua conta no verde (Platinum/Gold) e ganhar destaque no algoritmo.", icon: BarChart4 },
                            { title: "Logística Integrada", desc: "Configuração de Mercado Envio, Fulfillment e transportadoras parceiras.", icon: Truck },
                            { title: "Análise de Concorrência", desc: "Monitoramos preços e ofertas dos competidores para você estar sempre à frente.", icon: RefreshCw },
                            { title: "Kits e Bundles", desc: "Criação de ofertas combinadas para aumentar o ticket médio das suas vendas.", icon: Box },
                            { title: "Hub de Integração", desc: "Conecte seu ERP (Bling/Tiny) para sincronizar estoque em múltiplos canais.", icon: ShoppingBag },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-yellow-500/30 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-yellow-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-24 container mx-auto px-4">
                <div className="bg-yellow-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 relative z-10">
                        Seu produto na vitrine do mundo.
                    </h2>
                    <p className="text-slate-900/80 text-lg max-w-2xl mx-auto mb-10 relative z-10 font-medium">
                        Não dependa apenas do seu site. Venda onde o tráfego já existe.
                    </p>
                    <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-slate-900 text-white hover:bg-slate-800 font-bold shadow-xl relative z-10" asChild>
                        <Link href="/contato">Vender em Marketplaces</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
