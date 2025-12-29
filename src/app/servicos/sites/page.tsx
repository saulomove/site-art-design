"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, Zap, Globe, Gauge, Search, Lock, Target } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SitesPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-green/30">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center rounded-full border border-brand-green/20 bg-brand-green/10 px-4 py-1.5 text-sm font-bold text-brand-green mb-8 backdrop-blur-md"
                    >
                        <Laptop className="w-4 h-4 mr-2" />
                        Web Development
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight"
                    >
                        Site bonito não basta.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Ele precisa vender.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                        Desenvolvemos sites institucionais e Landing Pages focadas em conversão. Performance extrema (Core Web Vitals), SEO nativo e design que transmite confiança.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white h-16 px-10 text-lg rounded-full shadow-lg shadow-brand-green/20" asChild>
                            <Link href="/planos">Ver Planos Web</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* BENEFITS GRID */}
            <section className="py-24 bg-slate-900/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "SEO Nativo", desc: "Estrutura de código otimizada para o Google amar seu site e colocá-lo no topo das buscas.", icon: Search },
                            { title: "Ultra Velocidade", desc: "Carregamento instantâneo. Ninguém espera um site lento carregar (e o Google penaliza).", icon: Zap },
                            { title: "Design Responsivo", desc: "Experiência perfeita no celular, tablet ou desktop. Seu cliente compra de qualquer lugar.", icon: Smartphone },
                            { title: "Landing Pages", desc: "Páginas de aterrissagem focadas em uma única ação: converter visitante em lead.", icon: Target },
                            { title: "Institucionais", desc: "O cartão de visitas da sua empresa. Transmita solidez, história e valores.", icon: Globe },
                            { title: "Segurança SSL", desc: "Proteção de dados e cadeado verde garantidos. Confiança total para o usuário.", icon: Lock },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-brand-green/30 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors">
                                    {/* @ts-ignore - Dynamic Icon */}
                                    <item.icon className="w-6 h-6 text-brand-green" />
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
                <div className="bg-brand-green rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        Sua empresa existe no digital?
                    </h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 relative z-10">
                        Não entregamos templates prontos. Entregamos máquinas de venda online.
                    </p>
                    <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-brand-green hover:bg-slate-100 font-bold shadow-xl relative z-10" asChild>
                        <Link href="/contato">Orçar Meu Site</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

function Smartphone(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
        </svg>
    )
}
