"use client";

import { SpotlightCard } from "@/components/features/spotlight-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Laptop, Share2, Smartphone, Zap, Rocket, Target, Cpu, Globe, Code2, Database, Shield, ShoppingBag, Video, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicosPage() {
    return (
        <div className="bg-slate-950 min-h-screen selection:bg-brand-purple/30">

            {/* 1. HERO ECOSYSTEM */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[100px] opacity-30" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-green mb-8 backdrop-blur-md"
                    >
                        <Globe className="w-4 h-4 mr-2 text-brand-green" />
                        Ecossistema Digital 360º
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6"
                    >
                        Soluções que <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">Escalam Negócios.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Uma suite completa de serviços para cada estágio da sua empresa. Do tráfego que atrai, ao sistema que gerencia.
                    </motion.p>
                </div>
            </section>

            {/* 2. CLUSTER: GROWTH (Traffic & Social & Marketplace) */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <span className="text-brand-blue font-bold tracking-widest uppercase text-sm border border-brand-blue/20 px-4 py-1 rounded-full bg-brand-blue/5 mb-4 inline-block">
                            Fase 01: Atração & Vendas
                        </span>
                        <h2 className="text-3xl font-bold text-white mb-4">Growth & Performance</h2>
                        <p className="text-slate-400 leading-relaxed">
                            O combustível do seu negócio. Focamos em estratégias de aquisição que trazem leads qualificados e posicionam sua marca como autoridade.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <SpotlightCard
                            title="Tráfego Pago (Ads)"
                            description="Gestão de alta performance no Meta e Google Ads. Foco total em ROI e escala previsível de vendas."
                            icon={BarChart3}
                            href="/servicos/trafego"
                            color="bg-brand-blue"
                            delay={0}
                        />
                        <SpotlightCard
                            title="Social Media"
                            description="Posicionamento de autoridade. Conteúdo que engaja e prepara o terreno para a conversão."
                            icon={Share2}
                            href="/servicos/social"
                            color="bg-brand-purple"
                            delay={0.1}
                        />
                        <SpotlightCard
                            title="Full Commerce"
                            description="Venda no Mercado Livre e Amazon. Gestão 360º da sua operação em marketplaces."
                            icon={ShoppingBag}
                            href="/servicos/marketplace"
                            color="bg-yellow-500"
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>

            {/* 3. FEATURE: CUSTOM SOFTWARE FACTORY (High Ticket) */}
            <section className="py-24 relative overflow-hidden my-12">
                <div className="absolute inset-0 bg-slate-900 border-y border-white/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-bold text-red-500">
                                <Code2 className="w-4 h-4 mr-2" />
                                SOLUÇÃO HIGH-END
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                Sua empresa não cabe em uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">planilha.</span>
                            </h2>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                Desenvolvemos sistemas sob medida para operações complexas. De ERPs integrados a Aplicativos Nativos e Dashboards de BI. Tecnologia proprietária é o maior ativo que sua empresa pode ter.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                {["Sistemas Web (SaaS)", "Aplicativos Mobile", "Integração via API", "Automação de Processos"].map((tag, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-slate-950/50 border border-white/10 px-4 py-2 rounded-lg">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <span className="text-sm font-medium text-slate-200">{tag}</span>
                                    </div>
                                ))}
                            </div>

                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg rounded-full shadow-lg shadow-red-600/20 mt-4" asChild>
                                <Link href="/servicos/tech">
                                    Conhecer Fábrica de Software <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-2 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                                <div className="absolute inset-0 bg-red-500/5 blur-3xl -z-10" />
                                <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-950">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="p-8 space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-1/3 h-32 rounded-lg bg-slate-800/50 animate-pulse" />
                                            <div className="w-1/3 h-32 rounded-lg bg-slate-800/50 animate-pulse delay-75" />
                                            <div className="w-1/3 h-32 rounded-lg bg-slate-800/50 animate-pulse delay-150" />
                                        </div>
                                        <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                                        <div className="h-4 w-1/2 bg-slate-800 rounded animate-pulse" />
                                        <div className="h-64 w-full bg-slate-800/30 rounded-lg border border-slate-700/50 relative overflow-hidden">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-700 font-mono text-sm">
                                                {'<System Architecture />'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CLUSTER: INNOVATION & INFRA (Web, CRM, AI, AV) */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <span className="text-brand-green font-bold tracking-widest uppercase text-sm border border-brand-green/20 px-4 py-1 rounded-full bg-brand-green/5 mb-4 inline-block">
                            Fase 02: Estrutura & Inovação
                        </span>
                        <h2 className="text-3xl font-bold text-white mb-4">Ecossistema de Tecnologia</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Websites ultra-rápidos, CRMs inteligentes e Automação com IA. Além de uma produtora audiovisual completa para elevar o nível do seu conteúdo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        <SpotlightCard
                            title="Websites Premium"
                            description="Landing Pages de alta conversão e SEO nativo."
                            icon={Laptop}
                            href="/servicos/sites"
                            color="bg-brand-green"
                            delay={0}
                        />
                        <SpotlightCard
                            title="ArtAtende CRM"
                            description="Centralize seu WhatsApp e organize seu time."
                            icon={Smartphone}
                            href="/servicos/crm"
                            color="bg-brand-orange"
                            delay={0.1}
                        />
                        <SpotlightCard
                            title="IA & Automação"
                            description="Agentes inteligentes e chatbots que trabalham 24/7."
                            icon={Sparkles}
                            href="/servicos/ai"
                            color="bg-cyan-500"
                            delay={0.2}
                        />
                        <SpotlightCard
                            title="Audiovisual"
                            description="Drone 4K, vídeos institucionais e comerciais de TV."
                            icon={Video}
                            href="/servicos/audiovisual"
                            color="bg-rose-500"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* 5. METHODOLOGY RECAP */}
            <section className="py-24 relative border-t border-white/5 bg-slate-900/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Metodologia Validada</h2>
                        <p className="text-slate-400">Não importa o serviço, o processo de excelência é o mesmo.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
                        {[
                            { step: "01", title: "Imersão", desc: "Entendemos seu modelo de negócio a fundo antes de escrever uma linha de código ou anúncio.", icon: Shield, color: "text-brand-blue" },
                            { step: "02", title: "Execução Plena", desc: "Times especialistas em cada área. Designers desenham, Devs codam, Gestores gerenciam.", icon: Zap, color: "text-brand-purple" },
                            { step: "03", title: "Otimização", desc: "Análise contínua de dados para melhorar a performance mês a mês. O trabalho nunca para.", icon: Rocket, color: "text-brand-orange" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/5">
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA */}
            <section className="py-20 container mx-auto px-4 pb-32">
                <div className="bg-white/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] opacity-20" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Pronto para começar?</h2>
                        <p className="text-slate-300 text-lg">
                            Seja qual for a necessidade do seu negócio hoje, temos a solução técnica e estratégica para resolver.
                        </p>
                        <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-slate-950 hover:bg-brand-green hover:text-white font-bold transition-all shadow-xl" asChild>
                            <Link href="/contato">
                                Falar com Consultor <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
