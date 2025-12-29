"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";

// Schema de validação
const contactSchema = z.object({
    nome: z.string().min(2, "Nome é obrigatório"),
    empresa: z.string().min(2, "Empresa é obrigatória"),
    whatsapp: z.string().min(8, "WhatsApp inválido"),
    objetivo: z.string().min(1, "Selecione um objetivo"),
    mensagem: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContatoPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        // Simulação de envio para API/Webhook
        console.log("Enviando dados:", data);

        // Simular delay de rede
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSuccess(true);
        setIsSubmitting(false);
        form.reset();
    };

    return (
        <div className="min-h-screen relative overflow-hidden py-20 md:py-32">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center space-y-6 mb-20">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Vamos <span className="text-gradient-brand">Conversar?</span></h1>
                    <p className="text-xl text-muted-foreground text-center mx-auto max-w-2xl">
                        Descubra como podemos acelerar o crescimento da sua empresa com design e tecnologia.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold">Fale conosco</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Estamos prontos para entender seu desafio. Preencha o formulário e receba uma consultoria inicial gratuita.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="h-14 w-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-brand-blue transition-transform group-hover:scale-110">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">WhatsApp</p>
                                    <p className="text-muted-foreground group-hover:text-brand-blue transition-colors">(49) 9 8844-6685</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <a href="https://www.instagram.com/artdesigntrafego/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 w-full">
                                    <div className="h-14 w-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-brand-purple transition-transform group-hover:scale-110">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Instagram</p>
                                        <p className="text-muted-foreground group-hover:text-brand-purple transition-colors">@artdesigntrafego</p>
                                    </div>
                                </a>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="h-14 w-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-brand-orange transition-transform group-hover:scale-110">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Localização</p>
                                    <p className="text-muted-foreground">Caçador, SC</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="border-none shadow-2xl shadow-brand-blue/10 bg-white/80 backdrop-blur-md rounded-[2rem] overflow-hidden">
                        <CardHeader className="bg-slate-50 border-b p-8">
                            <CardTitle className="text-xl font-bold">Solicite uma proposta</CardTitle>
                            <CardDescription>Responda rápido, retornamos em até 24h.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8">
                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                                    <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 animate-in zoom-in duration-500">
                                        <Check className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
                                        <p className="text-muted-foreground">
                                            Obrigado pelo contato. Nossa equipe comercial falará com você em breve.
                                        </p>
                                    </div>
                                    <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-full">Enviar nova mensagem</Button>
                                </div>
                            ) : (
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="nome" className="pl-1">Nome Completo</Label>
                                        <Input id="nome" {...form.register("nome")} placeholder="Seu nome" className="h-12 rounded-xl bg-white" />
                                        {form.formState.errors.nome && <p className="text-red-500 text-xs pl-1">{form.formState.errors.nome.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="empresa" className="pl-1">Nome da Empresa</Label>
                                        <Input id="empresa" {...form.register("empresa")} placeholder="Sua empresa" className="h-12 rounded-xl bg-white" />
                                        {form.formState.errors.empresa && <p className="text-red-500 text-xs pl-1">{form.formState.errors.empresa.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="whatsapp" className="pl-1">WhatsApp</Label>
                                        <Input id="whatsapp" {...form.register("whatsapp")} placeholder="(49) 9 8844-6685" className="h-12 rounded-xl bg-white" />
                                        {form.formState.errors.whatsapp && <p className="text-red-500 text-xs pl-1">{form.formState.errors.whatsapp.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="objetivo" className="pl-1">Objetivo Principal</Label>
                                        <div className="relative">
                                            <select
                                                id="objetivo"
                                                {...form.register("objetivo")}
                                                className="flex h-12 w-full rounded-xl border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring appearance-none"
                                            >
                                                <option value="">Selecione...</option>
                                                <option value="vendas">Aumentar Vendas</option>
                                                <option value="leads">Gerar Leads</option>
                                                <option value="branding">Posicionamento de Marca</option>
                                                <option value="site">Novo Site/Sistema</option>
                                            </select>
                                        </div>
                                        {form.formState.errors.objetivo && <p className="text-red-500 text-xs pl-1">{form.formState.errors.objetivo.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="mensagem" className="pl-1">Mensagem (Opcional)</Label>
                                        <Textarea id="mensagem" {...form.register("mensagem")} placeholder="Conte mais sobre o seu projeto..." className="min-h-[100px] rounded-xl bg-white resize-none" />
                                    </div>

                                    <Button type="submit" className="w-full h-12 rounded-full text-lg shadow-lg shadow-brand-blue/20" disabled={isSubmitting}>
                                        {isSubmitting ? "Enviando..." : <span className="flex items-center">Enviar Solicitação <Send className="ml-2 h-4 w-4" /></span>}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
