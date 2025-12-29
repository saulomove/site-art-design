"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, TrendingUp, DollarSign, PieChart, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrafegoPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-blue/30">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue mb-8 backdrop-blur-md"
                            >
                                <BarChart3 className="w-4 h-4 mr-2" />
                                Gestão de Tráfego Pago
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight"
                            >
                                Anúncio bom é aquele que <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">paga a conta.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-xl text-slate-400 max-w-xl leading-relaxed mb-10"
                            >
                                Chega de métricas de vaidade. Criamos campanhas no Google e Meta focadas exclusivamente em <strong>ROI, ROAS e Vendas</strong>. Se não coloca dinheiro no seu bolso, não nos interessa.
                            </motion.p>

                            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white h-16 px-10 text-lg rounded-full shadow-lg shadow-brand-blue/20" asChild>
                                <Link href="/planos">Ver Planos de Tráfego</Link>
                            </Button>
                        </div>

                        {/* ABSTRACT CHART VISUAL */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] rounded-full" />
                            <div className="relative bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-2xl">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                                        <div className="space-y-1">
                                            <p className="text-sm text-slate-400">Total Investido</p>
                                            <p className="text-2xl font-bold text-white">R$ 12.450,00</p>
                                        </div>
                                        <div className="space-y-1 text-right">
                                            <p className="text-sm text-slate-400">Retorno (ROAS)</p>
                                            <p className="text-2xl font-bold text-brand-green">14.5x</p>
                                        </div>
                                    </div>
                                    {/* Mock Bars */}
                                    <div className="flex items-end gap-2 h-40">
                                        {[40, 60, 45, 70, 50, 80, 65, 90, 75, 100].map((h, i) => (
                                            <div key={i} className="flex-1 bg-brand-blue rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
                                        ))}
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
                            { title: "Google Ads (Intenção)", desc: "Capturamos o cliente no momento exato em que ele busca pelo seu produto ou serviço.", icon: Target },
                            { title: "Meta Ads (Atenção)", desc: "Geramos desejo e reconhecimento de marca no Instagram e Facebook com criativos persuasivos.", icon: Users },
                            { title: "Remarketing Inteligente", desc: "Perseguimos (do jeito bom) quem visitou seu site mas não comprou, recuperando vendas perdidas.", icon: TrendingUp },
                            { title: "Dashboards em Tempo Real", desc: "Acompanhe seus resultados 24h por dia com nossos painéis de BI transparentes.", icon: PieChart },
                            { title: "Otimização de Conversão", desc: "Não olhamos apenas para o clique. Analisamos a página de destino para garantir a venda.", icon: DollarSign },
                            { title: "Escala Previsível", desc: "Aumentamos o investimento conforme o retorno se mantém, escalando seu faturamento com segurança.", icon: BarChart3 },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-brand-blue/30 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-brand-blue" />
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
                <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        Pare de queimar dinheiro.
                    </h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 relative z-10">
                        Tenha uma estratégia profissional de aquisição de clientes rodando ainda essa semana.
                    </p>
                    <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-brand-blue hover:bg-slate-100 font-bold shadow-xl relative z-10" asChild>
                        <Link href="/contato">Solicitar Proposta</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
