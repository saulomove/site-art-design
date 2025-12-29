"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SpotlightCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    color: string;
    delay?: number;
}

export function SpotlightCard({ title, description, icon: Icon, href, color, delay = 0 }: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const colorMap: Record<string, string> = {
        "bg-brand-purple": "rgba(168, 85, 247, 0.15)", // purple-500
        "bg-brand-blue": "rgba(59, 130, 246, 0.15)",   // blue-500
        "bg-brand-green": "rgba(34, 197, 94, 0.15)",   // green-500
        "bg-brand-orange": "rgba(249, 115, 22, 0.15)", // orange-500
    };

    const spotlightColor = colorMap[color] || "rgba(255,255,255,0.1)";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
        >
            <Link href={href} className="block h-full">
                <div
                    ref={divRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsFocused(true)}
                    onMouseLeave={() => setIsFocused(false)}
                    className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-8 text-white overflow-hidden group transition-colors hover:border-white/20"
                >
                    {/* Spotlight Gradient */}
                    <div
                        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                        style={{
                            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                        }}
                    />

                    <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300", color)}>
                        <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex items-center text-sm font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
