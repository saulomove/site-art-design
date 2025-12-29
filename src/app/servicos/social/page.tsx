"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Share2, Heart, MessageCircle, PenTool, CalendarClock, Crown, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SocialPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-purple/30">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center rounded-full border border-brand-purple/20 bg-brand-purple/10 px-4 py-1.5 text-sm font-bold text-brand-purple mb-8 backdrop-blur-md"
                            >
                                <Share2 className="w-4 h-4 mr-2" />
                                Social Media & Branding
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight"
                            >
                                Sua marca não pode ser <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-500">invisível.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-xl text-slate-400 max-w-xl leading-relaxed mb-10"
                            >
                                Likes não pagam boletos, mas a <strong>Autoridade</strong> constrói impérios. Transformamos seu Instagram e LinkedIn em canais de posicionamento e vendas.
                            </motion.p>

                            <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white h-16 px-10 text-lg rounded-full shadow-lg shadow-brand-purple/20" asChild>
                                <Link href="/planos">Ver Planos Social</Link>
                            </Button>
                        </div>

                        {/* MOCKUP VISUAL */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-purple/20 blur-[100px] rounded-full" />
                            {/* Simple Phone Mockup */}
                            <div className="relative mx-auto w-[300px] h-[600px] bg-slate-900 border-8 border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />
                                <div className="p-6 space-y-4 pt-12">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-purple to-brand-orange" />
                                        <div className="space-y-1">
                                            <div className="w-24 h-3 bg-slate-800 rounded" />
                                            <div className="w-16 h-2 bg-slate-800 rounded" />
                                        </div>
                                    </div>
                                    <div className="w-full aspect-square bg-slate-800 rounded-xl animate-pulse" />
                                    <div className="space-y-2">
                                        <div className="w-full h-3 bg-slate-800 rounded" />
                                        <div className="w-3/4 h-3 bg-slate-800 rounded" />
                                    </div>
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
                            { title: "Design High-End", desc: "Artes que transmitem profissionalismo e valor. Nada de templates prontos do Canva.", icon: PenTool },
                            { title: "Conteúdo Estratégico", desc: "Posts pensados para cada etapa do funil: Atração, Consciência e Conversão.", icon: Crown },
                            { title: "Engajamento Real", desc: "Criamos comunidades de fãs, não apenas seguidores. Interação genuína com sua marca.", icon: Heart },
                            { title: "Calendário Organizado", desc: "Postagens consistentes e nos melhores horários. Sua marca sempre presente.", icon: CalendarClock },
                            { title: "Copywriting Persuasivo", desc: "Legendas que prendem a atenção e chamam para a ação (CTA).", icon: MessageSquare },
                            { title: "Relatórios Mensais", desc: "Análise de crescimento, alcance e retenção para ajustar a rota constantemente.", icon: Share2 },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-brand-purple/30 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-brand-purple" />
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
                <div className="bg-brand-purple rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        Autoridade não se compra.
                    </h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 relative z-10">
                        Se constrói. Comece a construir a sua hoje com quem entende do jogo.
                    </p>
                    <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-brand-purple hover:bg-slate-100 font-bold shadow-xl relative z-10" asChild>
                        <Link href="/contato">Solicitar Orçamento</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
