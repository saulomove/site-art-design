"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Workflow, Shield, Server, Box } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TechPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-red-500/30">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-red-600/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-sm font-bold text-red-500 mb-8 backdrop-blur-md"
                            >
                                <Code2 className="w-4 h-4 mr-2" />
                                Desenvolvimento Sob Medida
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight"
                            >
                                Software que molda <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">o seu negócio.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-xl text-slate-400 max-w-xl leading-relaxed mb-10"
                            >
                                Quando as ferramentas de mercado não são suficientes. Criamos sistemas complexos, APIs, Dashboards e Aplicativos 100% personalizados para sua operação.
                            </motion.p>

                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-16 px-10 text-lg rounded-full shadow-lg shadow-red-600/20" asChild>
                                <Link href="/contato">Agendar Reunião Técnica</Link>
                            </Button>
                        </div>

                        {/* CODE VISUAL */}
                        <div className="relative font-mono text-sm leading-relaxed overflow-hidden bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl opacity-80 hover:opacity-100 transition-opacity">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-blue-400">const <span className="text-yellow-400">Project</span> = {'{'}</div>
                            <div className="pl-4 text-slate-300">Target: <span className="text-green-400">"Scalability"</span>,</div>
                            <div className="pl-4 text-slate-300">Stack: <span className="text-green-400">["NextJS", "Node", "Postgres"]</span>,</div>
                            <div className="pl-4 text-slate-300">Status: <span className="text-green-400">"Ready_to_Launch"</span>,</div>
                            <div className="pl-4 text-blue-400">run: <span className="text-yellow-400">()</span> {'=>'} {'{'}</div>
                            <div className="pl-8 text-slate-300">optimizeProcess();</div>
                            <div className="pl-8 text-slate-300">increaseProfit();</div>
                            <div className="pl-4 text-blue-400">{'}'}</div>
                            <div className="text-blue-400">{'}'}</div>

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS GRID */}
            <section className="py-24 bg-slate-900/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "SaaS Próprio", desc: "Tem uma ideia de startup? Nós desenvolvemos o MVP e escalamos a plataforma completa.", icon: Box },
                            { title: "Dashboard de BI", desc: "Centralize dados de várias fontes em painéis gerenciais intuitivos para tomada de decisão.", icon: Database },
                            { title: "Integração (API)", desc: "Conecte seu ERP, CRM e E-commerce. Fazemos sistemas conversarem entre si.", icon: Workflow },
                            { title: "Segurança de Dados", desc: "Arquitetura robusta seguindo as normas da LGPD e melhores práticas de segurança.", icon: Shield },
                            { title: "Infraestrutura Cloud", desc: "AWS, Google Cloud ou Azure. Configuramos servidores escaláveis e de alta performance.", icon: Server },
                            { title: "Apps Nativos", desc: "Aplicativos iOS e Android para fidelizar clientes ou otimizar a força de vendas.", icon: Smartphone },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-red-600/30 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-red-500" />
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
                <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        Sua regra de negócio é única?
                    </h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 relative z-10">
                        Seu software também deve ser. Chega de "gambiarras".
                    </p>
                    <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-red-600 hover:bg-slate-100 font-bold shadow-xl relative z-10" asChild>
                        <Link href="/contato">Falar com Dev Team</Link>
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
