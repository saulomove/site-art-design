"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
    delay?: number;
    featured?: boolean;
    color?: string; // Tailwind bg class for accents
}

export function ServiceCard({
    title,
    description,
    icon: Icon,
    href,
    delay = 0,
    featured = false,
    color = "bg-primary"
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            whileHover={{ y: -5 }}
            className={cn(
                "group relative flex flex-col justify-between rounded-3xl p-8 transition-all overflow-hidden",
                featured
                    ? "bg-slate-900 text-white shadow-2xl shadow-brand-blue/20"
                    : "bg-white border text-foreground hover:shadow-xl hover:border-transparent hover:ring-1 hover:ring-black/5"
            )}
        >
            {/* Background Gradient Hover Effect for non-featured */}
            {!featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            )}

            <div>
                <div className={cn(
                    "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                    featured ? "bg-white/10 text-white" : "bg-gray-100 text-foreground",
                    !featured && `group-hover:${color} group-hover:text-white`
                )}>
                    <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight">{title}</h3>
                <p className={cn("text-base leading-relaxed", featured ? "text-slate-300" : "text-muted-foreground")}>
                    {description}
                </p>
            </div>

            <div className="mt-8">
                <Link
                    href={href}
                    className={cn(
                        "inline-flex items-center text-sm font-bold uppercase tracking-wide transition-all group-hover:translate-x-2",
                        featured ? "text-white" : "text-foreground",
                        !featured && "group-hover:text-brand-blue"
                    )}
                >
                    Saiba Mais
                    <div className={cn("ml-2 flex h-6 w-6 items-center justify-center rounded-full transition-colors", featured ? "bg-white/20" : "bg-gray-100 group-hover:bg-brand-blue/10")}>
                        <ArrowRight className="h-3 w-3" />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
}
