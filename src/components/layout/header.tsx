"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, BarChart3, Share2, Laptop, Smartphone, Code2, ShoppingBag, Video, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "A Agência" },
];

const serviceCategories = [
    {
        title: "Growth & Vendas",
        color: "text-brand-blue",
        items: [
            { name: "Tráfego Pago", href: "/servicos/trafego", icon: BarChart3, desc: "Google & Meta Ads" },
            { name: "Social Media", href: "/servicos/social", icon: Share2, desc: "Branding & Conteúdo" },
            { name: "Marketplaces", href: "/servicos/marketplace", icon: ShoppingBag, desc: "Mercado Livre & Amazon" },
        ]
    },
    {
        title: "Tecnologia",
        color: "text-brand-green",
        items: [
            { name: "Websites", href: "/servicos/sites", icon: Laptop, desc: "Alta Conversão" },
            { name: "ArtAtende CRM", href: "/servicos/crm", icon: Smartphone, desc: "Gestão de WhatsApp" },
            { name: "Sistemas (Dev)", href: "/servicos/tech", icon: Code2, desc: "Software Sob Medida" },
        ]
    },
    {
        title: "Inovação & Produção",
        color: "text-brand-orange",
        items: [
            { name: "Audiovisual", href: "/servicos/audiovisual", icon: Video, desc: "Drone & Filmes" },
            { name: "IA & Automação", href: "/servicos/ai", icon: Sparkles, desc: "Chatbots & Agentes" },
        ]
    }
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md py-4 border-slate-200/50 shadow-sm"
                    : "bg-transparent py-6 border-transparent"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between relative">
                {/* Logo */}
                {/* Logo */}
                <Link href="/" className="relative z-50 block">
                    <img
                        src="/logo-full.png"
                        alt="ArtDesign Logo"
                        className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-slate-100/50",
                                pathname === link.href
                                    ? "text-brand-blue font-bold bg-brand-blue/5"
                                    : "text-slate-600 hover:text-brand-blue"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Wrapper to control hover exit specifically for the services menu area */}
                    <div
                        className="relative px-2 py-4 cursor-pointer group"
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => setIsServicesHovered(false)}
                    >
                        <div className={cn(
                            "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all group-hover:bg-slate-100/50",
                            pathname.includes('/servicos') ? "text-brand-blue font-bold bg-brand-blue/5" : "text-slate-600 group-hover:text-brand-blue"
                        )}>
                            Soluções
                            <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isServicesHovered ? "rotate-180" : "")} />
                        </div>

                        {/* MEGA MENU DROPDOWN */}
                        <AnimatePresence>
                            {isServicesHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden p-6 grid grid-cols-3 gap-6 transform origin-top-center"
                                >
                                    {serviceCategories.map((category, idx) => (
                                        <div key={idx} className="space-y-4">
                                            <h3 className={cn("text-xs font-bold uppercase tracking-wider border-b border-slate-100 pb-2", category.color)}>
                                                {category.title}
                                            </h3>
                                            <div className="space-y-2">
                                                {category.items.map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        href={item.href}
                                                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                                    >
                                                        <div className={cn("mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-slate-100 group-hover/item:bg-white group-hover/item:shadow-md transition-all", category.color.replace('text-', 'bg-').replace('text', 'bg') + '/10')}>
                                                            <item.icon className={cn("w-4 h-4", category.color)} />
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-slate-800 text-sm group-hover/item:text-brand-blue transition-colors">
                                                                {item.name}
                                                            </div>
                                                            <div className="text-xs text-slate-500 leading-tight mt-0.5">
                                                                {item.desc}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-span-3 bg-slate-50 -mx-6 -mb-6 p-4 flex items-center justify-between border-t border-slate-100 mt-2">
                                        <span className="text-sm text-slate-500 ml-4">
                                            Dúvida sobre qual escolher?
                                        </span>
                                        <Link href="/servicos" className="text-sm font-bold text-brand-blue hover:underline mr-4 flex items-center gap-1">
                                            Ver todas as soluções <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        href="/planos"
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-slate-100/50",
                            pathname === "/planos"
                                ? "text-brand-blue font-bold bg-brand-blue/5"
                                : "text-slate-600 hover:text-brand-blue"
                        )}
                    >
                        Planos
                    </Link>
                    <Link
                        href="/blog"
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-slate-100/50",
                            pathname.includes("/blog")
                                ? "text-brand-blue font-bold bg-brand-blue/5"
                                : "text-slate-600 hover:text-brand-blue"
                        )}
                    >
                        Blog
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button className="rounded-full font-bold shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 transition-all" asChild>
                        <Link href="/contato">Falar com Consultor</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-600 py-2 border-b border-slate-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="py-2 border-b border-slate-50">
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 block">Soluções</span>
                                <div className="grid grid-cols-1 gap-2">
                                    {[...serviceCategories[0].items, ...serviceCategories[1].items, ...serviceCategories[2].items].map((item, i) => (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                                <item.icon className="w-4 h-4 text-brand-blue" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-bold text-slate-800 block">{item.name}</span>
                                                <span className="text-xs text-slate-500 block">{item.desc}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/planos"
                                className="text-lg font-medium text-slate-600 py-2 border-b border-slate-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Planos
                            </Link>
                            <Link
                                href="/blog"
                                className="text-lg font-medium text-slate-600 py-2 border-b border-slate-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Blog
                            </Link>

                            <Button className="w-full mt-4 rounded-full" size="lg" asChild>
                                <Link href="/contato" onClick={() => setIsOpen(false)}>
                                    Falar com Consultor
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
