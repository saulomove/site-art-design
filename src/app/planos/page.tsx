"use client";

import { Button } from "@/components/ui/button";
import { Check, Star, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Essencial",
        subtitle: "Presença + Organização",
        price: "Consulte",
        features: [
            "Gestão de 1 Rede Social",
            "8 Posts Mensais + 4 Stories",
            "Relatório Básico",
            "Suporte por Email",
        ],
        highlight: false,
        color: "brand-blue" // logic variable
    },
    {
        name: "Crescimento",
        subtitle: "Conteúdo + Tráfego + Site",
        price: "Recomendado",
        features: [
            "Gestão de 2 Redes Sociais",
            "12 Posts + 8 Reels Mensais",
            "Gestão de Tráfego (até R$ 2k/mês)",
            "Site Institucional (Manutenção)",
            "Reunião Mensal de Estratégia",
            "Acesso ao Dashboard",
        ],
        highlight: true,
        color: "brand-purple"
    },
    {
        name: "Performance",
        subtitle: "Estratégia Completa + Mídia + Dados",
        price: "Personalizado",
        features: [
            "Gestão Omnichannel (Insta, LinkedIn, Tik)",
            "Produção de Conteúdo Ilimitada (aprovada)",
            "Gestão de Tráfego Avançada (Escala)",
            "Automação de Marketing (CRM)",
            "Consultoria de Vendas",
            "Relatórios Semanais",
        ],
        highlight: false,
        color: "brand-orange"
    },
];

export default function PlanosPage() {
    return (
        <div className="container mx-auto px-4 py-20 md:py-32">
            {/* Header */}
            <div className="text-center space-y-6 mb-20">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-4">
                    <Zap className="mr-2 h-4 w-4 text-brand-orange" />
                    Planos Mensais
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Investimento <span className="text-gradient-brand">Inteligente</span></h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Marketing que funciona não é pontual. É contínuo. Escolha o ritmo ideal para o seu crescimento.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className={cn(
                            "flex flex-col rounded-3xl p-8 transition-all relative",
                            plan.highlight
                                ? "bg-slate-900 text-white shadow-2xl shadow-brand-purple/20 md:-mt-8 md:mb-4 border border-brand-purple/50 z-10"
                                : "bg-white border border-border hover:border-brand-blue/30 hover:shadow-xl"
                        )}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white px-6 py-1.5 rounded-full text-sm font-bold flex items-center shadow-lg shadow-brand-purple/40 tracking-wide uppercase">
                                <Star className="w-3.5 h-3.5 mr-1.5 fill-current" /> Mais Escolhido
                            </div>
                        )}

                        <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                            <p className={cn("text-sm font-medium", plan.highlight ? "text-slate-300" : "text-muted-foreground")}>{plan.subtitle}</p>
                        </div>

                        <div className="flex-1">
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <div className={cn("mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0", plan.highlight ? "bg-brand-purple text-white" : "bg-brand-blue/10 text-brand-blue")}>
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className={cn("text-base", plan.highlight ? "text-slate-200" : "text-slate-600")}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button
                            variant={plan.highlight ? "default" : "outline"}
                            size="lg"
                            className={cn(
                                "w-full h-12 text-base font-bold",
                                plan.highlight ? "bg-brand-purple hover:bg-brand-purple/90 border-0" : "border-2 hover:bg-slate-50"
                            )}
                            asChild
                        >
                            <Link href={`https://wa.me/5511999999999?text=Olá, quero saber mais sobre o plano ${plan.name}`}>
                                Quero este plano
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>

            <div className="mt-24 text-center p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <p className="text-lg text-muted-foreground mb-4">Precisa de um escopo personalizado para um projeto grande?</p>
                <Button variant="link" className="text-brand-blue text-lg" asChild>
                    <Link href="/contato">Fale com um consultor senior <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
    );
}
