"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Trophy, Users, Zap, Rocket, Heart, Target, Clock, Globe, Award } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const stats = [
    { number: "14+", label: "Anos de Mercado", icon: Clock },
    { number: "800+", label: "Projetos Entregues", icon: CheckCircle2 },
    { number: "50Mi+", label: "Gerenciados em Ads", icon: Zap },
    { number: "4", label: "Países Atendidos", icon: Globe },
];

const timeline = [
    { year: "2011", title: "O Início", desc: "Fundação como um pequeno estúdio de design focado em identidade visual e branding artesanal." },
    { year: "2015", title: "Expansão Digital", desc: "Percebemos que design sem estratégia não vendia. Iniciamos as operações de Social Media e Web Design." },
    { year: "2018", title: "Foco em Performance", desc: "Implementação robusta do núcleo de Tráfego Pago. O ROI virou nossa métrica principal." },
    { year: "2020", title: "Tecnologia Própria", desc: "Desenvolvimento das primeiras soluções de CRM e Sistemas para franquias (AdmiCom)." },
    { year: "2023", title: "Internacionalização", desc: "Expansão para mercados internacionais (Dubai, Portugal, EUA) e consolidação do modelo Full Service." },
    { year: "2025", title: "Era da Inteligência", desc: "Integração total de IA nos processos e automação de atendimento humanizado." },
];

const values = [
    { title: "Transparência Radical", desc: "Sem letras miúdas. Você sabe exatamente onde cada centavo do seu tráfego está sendo investido.", icon: Target, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "Obsessão por ROI", desc: "Não aceitamos métricas de vaidade. Se não gera venda ou lead qualificado, nós mudamos a rota.", icon: Trophy, color: "text-amber-500", bg: "bg-amber-500/10" },
    { title: "Inovação Constante", desc: "O que funcionava ontem não funciona hoje. Estamos sempre testando novas tecnologias e canais.", icon: Rocket, color: "text-purple-500", bg: "bg-purple-500/10" },
];

export default function SobrePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="bg-slate-950 text-slate-50 overflow-hidden selection:bg-brand-purple/30">

            {/* 1. HERO CINEMATIC */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[100px] opacity-30" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-green mb-8 backdrop-blur-md"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-brand-green mr-2 animate-pulse"></span>
                        Nossa História
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]"
                    >
                        Não somos apenas uma agência.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">Somos seu Braço Direito.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Nascemos da inconformidade com o "mais do mesmo". A ArtDesign une a criatividade de estúdio, a estratégia de consultoria e a tecnologia de startup.
                    </motion.p>
                </div>
            </section>

            {/* 2. STATS SECTION */}
            <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="mb-4 flex justify-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-300">
                                        <stat.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-blue transition-colors" />
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.number}</h3>
                                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. MANIFESTO / VALUES */}
            <section className="py-24 md:py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Nosso DNA</h2>
                        <p className="text-slate-400 text-lg">
                            Princípios inegociáveis que guiam cada linha de código e cada pixel que criamos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-slate-900/50 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all"
                            >
                                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500", item.bg.replace('/10', ''))} />

                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", item.bg)}>
                                    <item.icon className={cn("w-7 h-7", item.color)} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TIMELINE JOURNEY */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-2 block">Evolução Constante</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Nossa Jornada</h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue via-brand-purple to-brand-orange md:-translate-x-1/2 opacity-30" />

                        <div className="space-y-12 md:space-y-24 relative z-10">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-100px" }}
                                    className={cn(
                                        "flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center relative",
                                        i % 2 === 0 ? "md:flex-row-reverse" : ""
                                    )}
                                >
                                    {/* Content Side */}
                                    <div className="md:w-1/2 flex-1 md:px-12 pl-12">
                                        <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl hover:border-brand-purple/50 transition-colors duration-300">
                                            <span className="text-4xl font-black text-white/10 mb-2 block">{item.year}</span>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-4 border-brand-purple md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

                                    {/* Empty Side (Desktop only) */}
                                    <div className="hidden md:block md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA SECTION */}
            <section className="py-32 container mx-auto px-4 relative z-10">
                <div className="bg-gradient-to-br from-brand-blue to-brand-purple rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-blue/20">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Faça parte dessa história.</h2>
                        <p className="text-xl text-white/80">
                            Seja você um cliente buscando crescimento ou um talento buscando desafio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-brand-blue hover:bg-slate-100 font-bold hover:scale-105 transition-transform shadow-xl" asChild>
                                <Link href="/contato">Começar Projeto</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-2 border-white/30 text-white bg-transparent hover:bg-white/10 font-bold hover:scale-105 transition-transform" asChild>
                                <Link href="https://wa.me/5549999999999">Falar no WhatsApp</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
