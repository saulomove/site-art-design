"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Building2,
  Stethoscope,
  Smartphone,
  ShieldCheck,
  Network,
  Activity,
  type LucideIcon,
} from "lucide-react";

/**
 * Tema "aciav" — replica a identidade do produto ACIAV Saúde
 * (apps/landing-page/app/globals.css do monorepo aciav-saude-root).
 *
 * Teal profundo + laranja de destaque + off-white quente, cards brancos
 * arredondados e Plus Jakarta Sans em peso alto. A proposta deve parecer
 * o próprio produto que está sendo vendido.
 *
 * Classes sempre literais — o JIT do Tailwind não gera interpolação.
 */
export const ACIAV = {
  teal900: "#08494a",
  teal800: "#0d6b6b",
  teal700: "#14807e",
  teal600: "#1c9b96",
  teal50: "#e6f3f2",
  orange: "#e85d1f",
  orange600: "#cf4f15",
  orange50: "#fff1e8",
  ink: "#0c1e2a",
  ink2: "#2b3b48",
  muted: "#6a7a86",
  line: "#e7ecef",
  bgWarm: "#f7f5f1",
  mint: "#1aa37a",
} as const;

export const ACIAV_ICONS: Record<string, LucideIcon> = {
  LayoutDashboard,
  Building2,
  Stethoscope,
  Smartphone,
  ShieldCheck,
  Network,
  Activity,
};

export const ACIAV_ICON_FALLBACK: LucideIcon = Activity;

/** Pill de rótulo, no padrão dos badges da landing do ACIAV Saúde. */
export function AciavBadge({
  children,
  onDark = false,
  dot = true,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  dot?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] ${
        onDark
          ? "bg-white/10 text-white/85 ring-1 ring-white/20"
          : "bg-[#e6f3f2] text-[#0d6b6b] ring-1 ring-[#1c9b96]/20"
      }`}
    >
      {dot && (
        <span
          className={`h-2 w-2 flex-shrink-0 rounded-full ${
            onDark ? "bg-[#2ee8a4]" : "bg-[#1aa37a]"
          }`}
        />
      )}
      {children}
    </span>
  );
}

/**
 * Palavra em destaque no título: laranja com sublinhado, exatamente como o
 * "aprovar" do hero do aciavsaude.com.br.
 */
export function AciavHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block text-[#e85d1f]">
      {children}
      <span className="absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full bg-[#e85d1f]/55 md:h-1" />
    </span>
  );
}

export function AciavSectionHeader({
  eyebrow,
  title,
  highlight,
  lead,
  onDark = false,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  lead?: string;
  onDark?: boolean;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`${isCenter ? "text-center mx-auto" : "text-left"} max-w-3xl mb-14`}
    >
      <AciavBadge onDark={onDark}>{eyebrow}</AciavBadge>

      <h2
        className={`mt-6 text-3xl font-bold leading-[1.15] tracking-tight md:text-[2.75rem] ${
          onDark ? "text-white" : "text-[#0c1e2a]"
        }`}
      >
        {title}
        {highlight && (
          <>
            {" "}
            <AciavHighlight>{highlight}</AciavHighlight>
          </>
        )}
      </h2>

      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            onDark ? "text-white/70" : "text-[#2b3b48]/75"
          }`}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}

/** Item de lista com check — o padrão de checklist da landing. */
export function AciavCheck({
  children,
  tone = "mint",
}: {
  children: React.ReactNode;
  tone?: "mint" | "orange" | "white";
}) {
  const ring =
    tone === "orange"
      ? "bg-[#fff1e8] text-[#e85d1f]"
      : tone === "white"
        ? "bg-white/15 text-[#2ee8a4]"
        : "bg-[#e6f3f2] text-[#1aa37a]";

  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${ring}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span className="min-w-0">{children}</span>
    </li>
  );
}
