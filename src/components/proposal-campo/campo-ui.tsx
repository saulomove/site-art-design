"use client";

import { motion } from "framer-motion";
import {
  Sprout,
  Beef,
  Palette,
  Instagram,
  Facebook,
  MapPin,
  Globe,
  Camera,
  Plane,
  PenTool,
  BarChart3,
  Handshake,
  type LucideIcon,
} from "lucide-react";

/**
 * Tema "campo" — proposta multi-empresa.
 *
 * Paleta: base preta quente + marfim, com DOIS acentos de primeira classe —
 * verde musgo (Massaneiro) e dourado champagne (UDK). As seções conjuntas
 * fundem os dois em gradiente.
 *
 * IMPORTANTE: todas as classes abaixo são literais completas. O JIT do
 * Tailwind não gera classes interpoladas (`bg-${x}`), então a cor por empresa
 * SEMPRE se resolve por indexação neste mapa — nunca por template string.
 */
export const ACCENT = {
  moss: {
    // sobre fundo escuro
    text: "text-[#6E8F5E]",
    textSoft: "text-[#6E8F5E]/70",
    border: "border-[#6E8F5E]/25",
    borderStrong: "border-[#6E8F5E]/50",
    bgSoft: "bg-[#6E8F5E]/[0.08]",
    solid: "bg-[#6E8F5E]",
    rule: "bg-[#6E8F5E]/40",
    glow: "bg-[#6E8F5E]/[0.07]",
    // sobre fundo claro (#F2EEE3)
    textLight: "text-[#3F5A35]",
    borderLight: "border-[#3F5A35]/20",
    borderStrongLight: "border-[#3F5A35]/45",
    bgSoftLight: "bg-[#3F5A35]/[0.06]",
    solidLight: "bg-[#3F5A35]",
    ruleLight: "bg-[#3F5A35]/30",
  },
  gold: {
    text: "text-[#CBA65C]",
    textSoft: "text-[#CBA65C]/70",
    border: "border-[#CBA65C]/25",
    borderStrong: "border-[#CBA65C]/50",
    bgSoft: "bg-[#CBA65C]/[0.08]",
    solid: "bg-[#CBA65C]",
    rule: "bg-[#CBA65C]/40",
    glow: "bg-[#CBA65C]/[0.07]",
    textLight: "text-[#8A6A24]",
    borderLight: "border-[#8A6A24]/20",
    borderStrongLight: "border-[#8A6A24]/45",
    bgSoftLight: "bg-[#8A6A24]/[0.06]",
    solidLight: "bg-[#8A6A24]",
    ruleLight: "bg-[#8A6A24]/30",
  },
} as const;

export type CampoAccent = keyof typeof ACCENT;

/** Ícones das empresas e dos serviços. Fallback protege contra chave inexistente. */
export const CAMPO_ICONS: Record<string, LucideIcon> = {
  Sprout,
  Beef,
  Palette,
  Instagram,
  Facebook,
  MapPin,
  Globe,
  Camera,
  Plane,
  PenTool,
  BarChart3,
  Handshake,
};

/** Fallback do iconMap. Usar como `CAMPO_ICONS[key] ?? CAMPO_ICON_FALLBACK`. */
export const CAMPO_ICON_FALLBACK: LucideIcon = Sprout;

/**
 * Divisor de topo de seção. `joint` funde os dois acentos — assinatura
 * visual das seções que falam das duas empresas ao mesmo tempo.
 */
export function CampoDivider({
  tone = "joint",
  onLight = false,
}: {
  tone?: CampoAccent | "joint";
  onLight?: boolean;
}) {
  if (tone === "joint") {
    return (
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none">
        <div
          className={`h-[1px] w-24 ${onLight ? ACCENT.moss.ruleLight : ACCENT.moss.rule}`}
        />
        <Sprout
          className={`mx-3 h-4 w-4 ${onLight ? ACCENT.moss.textLight : ACCENT.moss.text}`}
        />
        <Handshake
          className={`h-5 w-5 ${onLight ? "text-[#0A0A09]/50" : "text-[#EFEBE0]/50"}`}
        />
        <Beef
          className={`mx-3 h-4 w-4 ${onLight ? ACCENT.gold.textLight : ACCENT.gold.text}`}
        />
        <div
          className={`h-[1px] w-24 ${onLight ? ACCENT.gold.ruleLight : ACCENT.gold.rule}`}
        />
      </div>
    );
  }

  const a = ACCENT[tone];
  const Icon = tone === "moss" ? Sprout : Beef;

  return (
    <div className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none">
      <div className={`h-[1px] w-32 ${onLight ? a.ruleLight : a.rule}`} />
      <Icon className={`mx-4 h-5 w-5 ${onLight ? a.textLight : a.text}`} />
      <div className={`h-[1px] w-32 ${onLight ? a.ruleLight : a.rule}`} />
    </div>
  );
}

/** Header padrão de seção: eyebrow entre rules, H2 Playfair e lead opcional. */
export function CampoSectionHeader({
  eyebrow,
  title,
  italic,
  lead,
  onLight = false,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  lead?: string;
  onLight?: boolean;
}) {
  const eyebrowColor = onLight ? "text-[#0A0A09]/45" : "text-[#EFEBE0]/40";
  const ruleColor = onLight ? "bg-[#0A0A09]/25" : "bg-[#EFEBE0]/25";
  const titleColor = onLight ? "text-[#0A0A09]" : "text-[#EFEBE0]";
  const leadColor = onLight ? "text-[#0A0A09]/60" : "text-[#EFEBE0]/55";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <div className={`h-[1px] w-8 ${ruleColor}`} />
        <span
          className={`text-[10px] tracking-[0.3em] uppercase font-semibold font-inter ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
        <div className={`h-[1px] w-8 ${ruleColor}`} />
      </div>
      <h2
        className={`font-playfair text-3xl md:text-5xl font-medium leading-tight ${titleColor}`}
      >
        {title}
        {italic && (
          <>
            {" "}
            {/* pr-[0.12em]: o overhang do itálico é cortado pelo bg-clip-text */}
            <span className="italic inline-block pr-[0.12em] bg-gradient-to-r from-[#6E8F5E] to-[#CBA65C] bg-clip-text text-transparent">
              {italic}
            </span>
          </>
        )}
      </h2>
      {lead && (
        <p
          className={`mt-6 text-base md:text-lg font-inter font-light max-w-3xl mx-auto leading-relaxed ${leadColor}`}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}

/** Faixa de identidade da empresa — usada no topo de cada bloco bifurcado. */
export function CampoCompanyBadge({
  name,
  handle,
  tagline,
  accent,
  icon,
  onLight = false,
}: {
  name: string;
  handle: string;
  tagline?: string;
  accent: CampoAccent;
  icon: string;
  onLight?: boolean;
}) {
  const a = ACCENT[accent];
  const Icon = CAMPO_ICONS[icon] ?? CAMPO_ICON_FALLBACK;

  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 flex items-center justify-center flex-shrink-0 border ${
          onLight ? `${a.borderLight} ${a.bgSoftLight}` : `${a.border} ${a.bgSoft}`
        }`}
      >
        <Icon className={`w-6 h-6 ${onLight ? a.textLight : a.text}`} />
      </div>
      <div className="min-w-0">
        <h3
          className={`font-playfair text-xl md:text-2xl font-medium leading-tight ${
            onLight ? "text-[#0A0A09]" : "text-[#EFEBE0]"
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-[11px] tracking-[0.18em] uppercase font-inter mt-1 ${
            onLight ? a.textLight : a.text
          }`}
        >
          {handle}
          {tagline && (
            <span className={onLight ? "text-[#0A0A09]/40" : "text-[#EFEBE0]/35"}>
              {" · "}
              {tagline}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

/** Bullet padrão do tema. */
export function CampoBullet({
  accent,
  onLight = false,
}: {
  accent: CampoAccent;
  onLight?: boolean;
}) {
  const a = ACCENT[accent];
  return (
    <span
      className={`flex-shrink-0 leading-5 ${onLight ? a.textLight : a.text} opacity-60`}
    >
      ◆
    </span>
  );
}
