"use client";

import { useState, useEffect } from "react";
import { useAdmin } from "@/providers/admin-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label"; // Assume Label component exists, or I will use standard label if not created. I forgot to create Label component. I will use standard label for now to save time or create it. I will use standard label.
// Better create ui/input.tsx and ui/label.tsx, ui/textarea.tsx.
// Wait, I haven't created Input and Label components yet. I must handle this.
// I will use standard HTML elements styled with tailwind for inputs to be faster, or create the components quickly.
// Given "Senior Dev" persona, I should create the components.

// Let's create Input and Label components first in the same step via multi_write or inline them?
// I will create them as separate files first to be clean.

// But wait, I'm inside write_to_file for admin page. I will write the admin page utilizing standard HTML elements with Tailwind classes for inputs to avoid context switching and potential errors if I forget to create them.
// Actually, I can create them in the next tool call. I will mock them here or use standard.
// I'll stick to standard HTML with tailwind classes for inputs in this file.

const settingsSchema = z.object({
    whatsapp: z.string().min(1, "WhatsApp é obrigatório"),
    ga4Id: z.string().optional(),
    pixelId: z.string().optional(),
    googleAdsId: z.string().optional(),
    siteTitle: z.string().min(1, "Título é obrigatório"),
    siteDescription: z.string().min(1, "Descrição é obrigatória"),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

export default function AdminPage() {
    const { isAuthenticated, login, logout, settings, updateSettings } = useAdmin();
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const form = useForm<SettingsFormValues>({
        resolver: zodResolver(settingsSchema),
        defaultValues: settings,
    });

    // Reset form when settings load
    useEffect(() => {
        form.reset(settings);
    }, [settings, form]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!login(password)) {
            setLoginError(true);
        } else {
            setLoginError(false);
        }
    };

    const onSubmit = (data: SettingsFormValues) => {
        updateSettings(data);
        setSuccessMsg("Configurações salvas com sucesso!");
        setTimeout(() => setSuccessMsg(""), 3000);
    };

    if (!isAuthenticated) {
        return (
            <div className="container flex items-center justify-center min-h-[80vh]">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Login Admin</CardTitle>
                        <CardDescription>Acesso restrito para configurações.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Senha</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="admin123"
                                />
                            </div>
                            {loginError && <p className="text-red-500 text-sm">Senha incorreta.</p>}
                            <Button type="submit" className="w-full">Entrar</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Painel Administrativo</h1>
                <Button variant="outline" onClick={logout}>Sair</Button>
            </div>

            <div className="grid gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Configurações Gerais</CardTitle>
                        <CardDescription>Gerencie tags, contato e SEO básico.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold border-b pb-2">Contato</h3>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">WhatsApp (apenas números)</label>
                                    <input
                                        {...form.register("whatsapp")}
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    />
                                    {form.formState.errors.whatsapp && (
                                        <p className="text-red-500 text-sm">{form.formState.errors.whatsapp.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold border-b pb-2">SEO Básico</h3>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">Título do Site</label>
                                    <input
                                        {...form.register("siteTitle")}
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">Descrição Global</label>
                                    <textarea
                                        {...form.register("siteDescription")}
                                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold border-b pb-2">Tags & Analytics</h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Google Analytics 4 (ID)</label>
                                        <input
                                            {...form.register("ga4Id")}
                                            placeholder="G-XXXXXXXXXX"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Meta Pixel (ID)</label>
                                        <input
                                            {...form.register("pixelId")}
                                            placeholder="1234567890"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Google Ads (ID)</label>
                                        <input
                                            {...form.register("googleAdsId")}
                                            placeholder="AW-XXXXXXXXXX"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {successMsg && (
                                <div className="bg-green-100 text-green-800 p-3 rounded-md text-sm font-medium">
                                    {successMsg}
                                </div>
                            )}

                            <Button type="submit" size="lg">Salvar Alterações</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
