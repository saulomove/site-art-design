"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ================================================================
   Identidade do documento. A página é escura e editorial; as telas
   do sistema são claras. O contraste separa argumento de produto.
   O vermelho é o da marca da Videplast.
   ================================================================ */

export const ELO = {
  ground: "#0E1011",
  surface: "#15181A",
  surface2: "#1C2022",
  line: "#272C2E",
  ink: "#EDF0EF",
  ink2: "#9BA5A7",
  ink3: "#6B7576",
  red: "#E8343C",
  redFill: "#D51920",
  green: "#47A87D",
  amber: "#C9A04A",
} as const;

/** Paleta das telas do sistema — clara, espelhando o desenho aprovado. */
export const TELA = {
  bg: "#FFFFFF",
  sunk: "#F6F7F7",
  line: "#DCE0E0",
  line2: "#EDEFEF",
  ink: "#131516",
  ink2: "#5E6669",
  red: "#D51920",
  redDeep: "#A3141A",
  green: "#2E7355",
  amber: "#8A6115",
  neg: "#C0453A",
} as const;

/* ---------------------------- divisor ---------------------------- */

export function EloDivider() {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 flex justify-center">
      <div className="flex items-center gap-3 pt-px">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#272C2E] sm:w-28" />
        <span className="h-[5px] w-[5px] rotate-45 bg-[#D51920]" />
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#272C2E] sm:w-28" />
      </div>
    </div>
  );
}

/* ---------------------------- eyebrow ---------------------------- */

export function EloEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8343C]">
      {children}
    </p>
  );
}

/* ------------------------- cabeçalho de seção -------------------- */

export function EloSectionHeader({
  eyebrow,
  title,
  accent,
  lead,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
  align?: "center" | "left";
}) {
  const centro = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65 }}
      className={`mb-14 ${centro ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      <EloEyebrow>{eyebrow}</EloEyebrow>
      <h2 className="mt-5 font-sans text-[30px] font-bold leading-[1.08] tracking-[-0.022em] text-[#EDF0EF] md:text-[44px]">
        {title}
        {accent && <span className="text-[#E8343C]"> {accent}</span>}
      </h2>
      {lead && (
        <p
          className={`mt-6 text-[16px] leading-relaxed text-[#9BA5A7] md:text-[17px] ${
            centro ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}

/* --------------------------- citação real ------------------------ */

export function EloQuote({
  t,
  who,
  children,
  hot,
}: {
  t: string;
  who: string;
  children: ReactNode;
  hot?: boolean;
}) {
  return (
    <div className="grid grid-cols-[58px_1fr] items-start gap-x-4 sm:grid-cols-[76px_1fr] sm:gap-x-5">
      <span className="border-r border-[#272C2E] pr-3 pt-1 text-right font-mono text-[11px] text-[#6B7576] sm:pr-4 sm:text-[12px]">
        {t}
      </span>
      <div
        className={`border-l-2 py-1 pl-4 sm:pl-5 ${
          hot ? "border-[#E8343C]/55" : "border-[#47A87D]/45"
        }`}
      >
        <span
          className={`block font-sans text-[10px] font-semibold uppercase tracking-[0.16em] ${
            hot ? "text-[#E8343C]" : "text-[#47A87D]"
          }`}
        >
          {who}
        </span>
        <p className="mt-1.5 max-w-[62ch] text-[15px] leading-relaxed text-[#EDF0EF] md:text-[16px]">
          {children}
        </p>
      </div>
    </div>
  );
}

/* ----------------------------- painel ---------------------------- */

export function EloPanel({
  children,
  tone = "base",
  className = "",
}: {
  children: ReactNode;
  tone?: "base" | "red" | "green" | "flat";
  className?: string;
}) {
  const tons = {
    base: "border-[#272C2E] bg-[#15181A]",
    red: "border-[#E8343C]/30 bg-[#E8343C]/[0.05]",
    green: "border-[#47A87D]/30 bg-[#47A87D]/[0.05]",
    flat: "border-transparent border-t-[#272C2E] bg-transparent",
  } as const;
  return (
    <div className={`border p-7 md:p-8 ${tons[tone]} ${className}`}>{children}</div>
  );
}

/* --------------------------- entra na tela ----------------------- */

export function EloReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ seção ---------------------------- */

export function EloSection({
  id,
  children,
  tone = "dark",
  className = "",
}: {
  id: string;
  children: ReactNode;
  tone?: "dark" | "darker";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-[68px] overflow-hidden py-24 md:py-32 ${
        tone === "darker" ? "bg-[#0A0C0D]" : "bg-[#0E1011]"
      } ${className}`}
    >
      <EloDivider />
      <div className="container relative z-10 mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
