"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Camera, Film, Mic2, Tv, Clapperboard } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AudiovisualPage() {
    return (
        <div className="min-h-screen bg-black text-slate-50 selection:bg-rose-600/30">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Darker background for cinematic feel */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-rose-600/10 rounded-full blur-[150px] opacity-20 animate-pulse" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-black to-black opacity-80" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center rounded-full border border-rose-600/20 bg-rose-600/10 px-4 py-1.5 text-sm font-bold text-rose-600 mb-8 backdrop-blur-md"
                    >
                        <Video className="w-4 h-4 mr-2" />
                        Produtora Audiovisual
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-tight uppercase font-serif"
                    >
                        Cinema para <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">sua marca.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        Capte a atenção em segundos. Produzimos vídeos institucionais, comerciais de TV e conteúdo para redes sociais com qualidade 4K e narrativa envolvente.
                    </motion.p>

                    <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white h-16 px-10 text-lg rounded-full shadow-[0_0_30px_-5px_rgba(225,29,72,0.4)]" asChild>
                        <Link href="/contato">Agendar Diária</Link>
                    </Button>
                </div>
            </section>



            {/* BENEFITS GRID */}
            <section className="py-24 bg-slate-900/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Imagens Aéreas (Drone)", desc: "Pilotos credenciados para captar ângulos impossíveis e grandiosos da sua estrutura.", icon: Camera },
                            { title: "Vídeos Institucionais", desc: "Conte a história da sua empresa com emoção e profissionalismo. Construa legado.", icon: Film },
                            { title: "Comerciais de TV", desc: "Produção completa: roteiro, casting, gravação e edição para mídia televisiva.", icon: Tv },
                            { title: "Reels & TikTok", desc: "Vídeos curtos e dinâmicos editados para viralizar e reter a atenção nas redes sociais.", icon: Clapperboard },
                            { title: "Podcast & Casts", desc: "Estrutura completa de áudio e vídeo para gravar seu podcast com qualidade de estúdio.", icon: Mic2 },
                            { title: "Cobertura de Eventos", desc: "Registre seus lançamentos, festas e convenções com uma equipe que não perde nenhum detalhe.", icon: Video },
                        ].map((item, i) => (
                            <div key={i} className="bg-black border border-slate-800 p-8 rounded-3xl hover:border-rose-600/30 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-rose-600/10 flex items-center justify-center mb-6 group-hover:bg-rose-600/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-rose-600" />
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
                <div className="bg-rose-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        Luz, Câmera, Ação.
                    </h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 relative z-10">
                        Não deixe sua marca no escuro. Vamos produzir algo incrível juntos?
                    </p>
                    <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-rose-700 hover:bg-slate-100 font-bold shadow-xl relative z-10" asChild>
                        <Link href="/contato">Solicitar Orçamento</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
