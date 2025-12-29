"use client";

import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock, Calendar, Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function BlogPage() {
    const [filter, setFilter] = useState<"Todos" | "Growth" | "Tecnologia" | "Inovação">("Todos");

    const filteredPosts = filter === "Todos"
        ? blogPosts
        : blogPosts.filter(post => post.category === filter);

    return (
        <div className="min-h-screen bg-slate-50 selection:bg-brand-blue/30 pt-32 pb-20">

            {/* HERO */}
            <div className="container mx-auto px-4 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-sm font-bold text-brand-blue mb-6"
                >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Knowledge Hub
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
                >
                    Insights que geram <br />
                    <span className="text-transparent bg-clip-text bg-gradient-brand">Crescimento Real.</span>
                </motion.h1>

                <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
                    Estratégias validadas sobre tráfego, tecnologia e vendas. Sem teoria, apenas prática direto do campo de batalha.
                </p>

                {/* FILTERS */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {["Todos", "Growth", "Tecnologia", "Inovação"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat as any)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                                filter === cat
                                    ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-brand-blue hover:text-brand-blue"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* POSTS GRID */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, i) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-brand-blue/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                        >
                            <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden bg-slate-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop"
                                    }}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={cn(
                                        "px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm",
                                        post.category === "Growth" ? "bg-brand-blue" :
                                            post.category === "Tech" ? "bg-brand-green" : "bg-brand-orange"
                                    )}>
                                        {post.category}
                                    </span>
                                </div>
                            </Link>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">
                                    <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {post.date}</span>
                                    <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {post.readTime}</span>
                                </div>

                                <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-blue transition-colors line-clamp-2 leading-tight">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3 flex-grow font-medium">
                                    {post.excerpt}
                                </p>

                                <Button variant="link" className="p-0 h-auto text-base font-black text-brand-blue self-start group/btn" asChild>
                                    <Link href={`/blog/${post.slug}`}>
                                        Ler Artigo Completo <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-400">Nenhum artigo encontrado nesta categoria.</p>
                    </div>
                )}
            </div>

        </div>
    );
}
