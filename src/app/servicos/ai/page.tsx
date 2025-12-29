"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Cpu, Sparkles, MessageSquare, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AiPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                    {/* Matrix-like grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d412_1px,transparent_1px),linear-gradient(to_bottom,#06b6d412_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-bold text-cyan-500 mb-8 backdrop-blur-md"
                            >
                                <Sparkles className="w-4 h-4 mr-2" />
                                IA & Automação
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight"
                            >
                                Sua empresa no <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Piloto Automático.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-xl text-slate-400 max-w-xl leading-relaxed mb-10"
                            >
                                Reduza custos e erros humanos. Implementamos <strong>Agentes de IA</strong> que atendem clientes, processam pedidos e conectam seus softwares (Zapier/n8n) 24/7.
                            </motion.p>

                            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white h-16 px-10 text-lg rounded-full shadow-lg shadow-cyan-500/20" asChild>
                                <Link href="/contato">Automatizar Processos</Link>
                            </Button>
                        </div>

                        {/* AI VISUAL */}
                        <div className="relative">
                            <div className="relative bg-slate-900 border border-slate-700/50 p-6 rounded-2xl shadow-2xl overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                                            <span className="text-xs font-bold">User</span>
                                        </div>
                                        <div className="bg-slate-800 rounded-r-xl rounded-bl-xl p-4 text-sm text-slate-300">
                                            Quero agendar uma reunião e enviar a proposta por email automaticamente.
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start justify-end">
                                        <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-l-xl rounded-br-xl p-4 text-sm text-cyan-200">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Bot className="w-4 h-4" />
                                                <span className="font-bold">Agente ArtAI</span>
                                            </div>
                                            Entendido. Iniciando automação:<br />
                                            1. Checando agenda no Google Calendar... ✅<br />
                                            2. Gerando PDF da proposta... ✅<br />
                                            3. Enviando e-mail via SMTP... ✅<br />
                                            <span className="text-green-400 font-bold mt-2 block">Processo Concluído!</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center shrink-0 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                            <Sparkles className="w-5 h-5 text-cyan-400" />
                                        </div>
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
                            { title: "Chatbots Humanizados", desc: "IA que entende contexto, ironia e complexidade. Nada de robôs burros.", icon: MessageSquare },
                            { title: "Integração (Zapier/n8n)", desc: "Conecte seu CRM, Planilhas, Email e Slack. Dados trafegando sem mãos humanas.", icon: Workflow },
                            { title: "Geração de Conteúdo", desc: "IA treinada na voz da sua marca para criar posts, artigos e e-mails de vendas.", icon: Sparkles },
                            { title: "Análise de Dados", desc: "Processe milhares de linhas de feedback ou vendas para encontrar padrões ocultos.", icon: Cpu },
                            { title: "Atendimento 24/7", desc: "Sua empresa nunca dorme. Respostas instantâneas a qualquer hora do dia ou da noite.", icon: Bot },
                            { title: "Redução de Custos", desc: "Automatize tarefas repetitivas e libere sua equipe para pensar estrategicamente.", icon: Zap },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-cyan-500/30 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-cyan-500" />
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
                <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        O futuro já começou.
                    </h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 relative z-10">
                        Quem não usa IA hoje, estará fora do mercado amanhã. Simples assim.
                    </p>
                    <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-cyan-700 hover:bg-slate-100 font-bold shadow-xl relative z-10" asChild>
                        <Link href="/contato">Falar com Especialista</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
