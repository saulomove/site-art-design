"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageSquare, Smartphone, Users, Zap, BarChart3, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CrmPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-orange/30">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-1.5 text-sm font-bold text-brand-orange mb-8 backdrop-blur-md"
                        >
                            <Smartphone className="w-4 h-4 mr-2" />
                            ArtAtende CRM
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight"
                        >
                            Centralize seu atendimento.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">Multiplique suas vendas.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                        >
                            A solução definitiva para times comerciais. Um único número de WhatsApp, múltiplos atendentes, chatbots inteligentes e gestão completa de funil.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
                        >
                            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white h-14 px-10 text-lg rounded-full shadow-lg shadow-brand-orange/20" asChild>
                                <Link href="/contato">Agendar Demonstração</Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* MOCKUP VISUAL */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative mx-auto max-w-5xl rounded-xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-amber-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="ml-4 flex-1 h-6 bg-slate-800 rounded-md max-w-[300px]" />
                        </div>
                        <img src="/crm-dashboard.png" alt="ArtAtende Interface" className="w-full h-auto opacity-90" />
                    </motion.div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="py-24 bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "WhatsApp API Oficial", desc: "Esqueça bloqueios e banimentos. Conexão estável e segura para sua operação escalar sem medo.", icon: ShieldCheck },
                            { title: "Múltiplos Atendentes", desc: "Um único número para toda sua equipe. Transfira conversas, monitore atendimentos e centralize o histórico.", icon: Users },
                            { title: "Chatbot Inteligente", desc: "Automatize a triagem e qualificação de leads 24/7. Deixe seu time focado apenas em fechar vendas.", icon: MessageSquare },
                            { title: "Funil Kanban", desc: "Visualize exatamente onde cada lead está no processo de venda. Arraste, solte e converta mais.", icon: BarChart3 },
                            { title: "Relatórios de Vendas", desc: "Saiba quem vende mais, qual o tempo médio de resposta e onde estão os gargalos da operação.", icon: Zap },
                            { title: "Disparos em Massa", desc: "Envie campanhas para sua base de clientes seguindo todas as diretrizes de segurança da Meta.", icon: Smartphone },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-brand-orange/30 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-brand-orange" />
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
                <div className="bg-gradient-to-r from-brand-orange to-red-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        Pare de perder vendas no WhatsApp.
                    </h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 relative z-10">
                        Organize sua operação comercial hoje mesmo com o ArtAtende.
                    </p>
                    <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-brand-orange hover:bg-slate-100 font-bold shadow-xl relative z-10" asChild>
                        <Link href="/contato">Falar com Consultor</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
