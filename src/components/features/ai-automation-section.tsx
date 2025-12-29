"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, BrainCircuit, Cpu, GitBranch, Link as LinkIcon, MessageSquare, Network, Sparkles, Wand2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AIAutomationSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-slate-950 border-t border-slate-900">
            {/* Background Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Column - The Tech Flow */}
                    <div className="flex-1 relative w-full group">
                        {/* Glow behind the flow */}
                        <div className="absolute -inset-4 bg-brand-purple/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />

                        <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm overflow-hidden shadow-2xl">
                            {/* Window Controls */}
                            <div className="h-8 bg-slate-900 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                <div className="ml-auto text-[10px] font-mono text-slate-500">ai_workflow_v4.json</div>
                            </div>

                            {/* The Flow Image */}
                            <div className="relative p-1">
                                <img
                                    src="/ai-flow.png"
                                    alt="Fluxo de Inteligência Artificial ArtDesign"
                                    className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                                />

                                {/* Scanning Effect Overlay */}
                                <motion.div
                                    animate={{ top: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-px bg-brand-green/80 shadow-[0_0_20px_2px_rgba(74,222,128,0.5)] z-20 pointer-events-none"
                                >
                                    <div className="absolute right-0 -top-1 text-[9px] font-mono text-brand-green bg-slate-900 px-1 rounded">SCANNING NODES...</div>
                                </motion.div>

                                {/* Active Node Pulse Overlay (Simulating processing) */}
                                <div className="absolute inset-0 bg-brand-purple/5 mix-blend-overlay pointer-events-none animate-pulse" />
                            </div>
                        </div>

                        {/* Floating Info Cards */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-6 top-1/4 bg-slate-900/90 backdrop-blur-md border border-brand-green/30 p-3 rounded-lg shadow-xl hidden lg:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center">
                                    <Cpu className="w-4 h-4 text-brand-green animate-spin-slow" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">Neural Engine</div>
                                    <div className="text-[10px] text-brand-green">Processing...</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="absolute -left-6 bottom-1/4 bg-slate-900/90 backdrop-blur-md border border-brand-purple/30 p-3 rounded-lg shadow-xl hidden lg:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center">
                                    <GitBranch className="w-4 h-4 text-brand-purple" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">Context Logic</div>
                                    <div className="text-[10px] text-brand-purple">Branching Active</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-block rounded-full bg-brand-purple/10 border border-brand-purple/20 px-4 py-1.5 text-sm font-bold text-brand-purple mb-2">
                            INTELIGÊNCIA ARTIFICIAL HUMANIZADA
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                            Mais que um Chatbot.<br />
                            Um <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-pink-500 to-brand-orange">Cérebro Digital.</span>
                        </h2>

                        <p className="text-lg text-slate-400 leading-relaxed font-light">
                            Esqueça aquelas respostas robóticas de "Digite 1 para suporte". Nossa IA entende o contexto, lembra do cliente e toma decisões.
                            Ela consulta seu estoque, verifica horários disponíveis e fecha vendas sozinha, usando a mesma linguagem natural da sua equipe.
                        </p>

                        <div className="space-y-4 pt-4">
                            {[
                                {
                                    title: "Memória de Longo Prazo",
                                    desc: "A IA lembra das conversas passadas e preferências do cliente.",
                                    icon: BrainCircuit,
                                    color: "text-brand-purple"
                                },
                                {
                                    title: "Roteamento Inteligente (Multi-LLM)",
                                    desc: "Alterna entre GPT-4 e Gemini para garantir a melhor resposta.",
                                    icon: Network,
                                    color: "text-blue-400"
                                },
                                {
                                    title: "Ações Reais no Banco de Dados",
                                    desc: "Cria pedidos, agenda consultas e atualiza o CRM automaticamente.",
                                    icon: Bot,
                                    color: "text-brand-green"
                                },
                                {
                                    title: "Atendimento 100% Humanizado",
                                    desc: "Treinada para soar exatamente como um especialista da sua marca.",
                                    icon: MessageSquare,
                                    color: "text-brand-orange"
                                }

                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group rounded-xl p-3 hover:bg-white/5 transition-colors">
                                    <div className={cn("w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/10 transition-colors", item.color)}>
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-base mb-1 group-hover:text-brand-purple transition-colors">{item.title}</h4>
                                        <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Button className="h-14 px-8 rounded-full bg-brand-purple text-white hover:bg-brand-purple/90 font-bold text-base shadow-[0_0_20px_-5px_oklch(0.5_0.2_300/0.5)] hover:shadow-[0_0_30px_-5px_oklch(0.5_0.2_300/0.7)] transition-all" asChild>
                                <Link href="/contato">
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    Ver Demonstração de IA
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
