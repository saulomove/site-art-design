"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ================================================================
   Serra Catarinense, inverno. Verde-pinus quase preto, névoa e uma
   única brasa quente. A referência não é o "agro verde e dourado":
   é o cartaz de leilão, o edital afixado, a placa de fazenda.
   ================================================================ */

export const SERRA = {
  ground: "#0D1411",
  surface: "#141D19",
  surface2: "#1C2722",
  line: "#2A3A33",
  ink: "#EDF2EE",
  ink2: "#93A69C",
  ink3: "#63756C",
  ember: "#C8552F",
  emberHi: "#E0703F",
  campo: "#D9A441",
  mato: "#5A9E6F",
} as const;

/** Superfícies claras — os mockups de post, o Google, o material impresso. */
export const PAPEL = {
  bg: "#F4F2EC",
  bg2: "#E9E6DC",
  line: "#D3CEC0",
  ink: "#17201C",
  ink2: "#5A665F",
  ember: "#B8481F",
} as const;

export const serif = "font-bitter";

/* --------------------------- seção ------------------------------ */

export function SerraSection({
  id,
  children,
  tone = "dark",
  className = "",
}: {
  id: string;
  children: ReactNode;
  tone?: "dark" | "darker" | "papel";
  className?: string;
}) {
  const fundo =
    tone === "papel" ? "bg-[#F4F2EC]" : tone === "darker" ? "bg-[#0A100D]" : "bg-[#0D1411]";
  return (
    <section
      id={id}
      className={`relative scroll-mt-[68px] overflow-hidden py-24 md:py-32 ${fundo} ${className}`}
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}

/* ---------------------- régua de topo ---------------------------- */

export function SerraRule({ escuro = true }: { escuro?: boolean }) {
  return (
    <span
      aria-hidden
      className={`block h-[3px] w-14 ${escuro ? "bg-[#C8552F]" : "bg-[#B8481F]"}`}
    />
  );
}

/* ----------------------- sobrelinha ------------------------------ */

export function SerraEyebrow({
  children,
  claro = false,
}: {
  children: ReactNode;
  claro?: boolean;
}) {
  return (
    <span
      className={`block font-mono text-[11px] uppercase tracking-[0.22em] ${
        claro ? "text-[#B8481F]" : "text-[#C8552F]"
      }`}
    >
      {children}
    </span>
  );
}

/* --------------------- cabeçalho de seção ------------------------ */

export function SerraHeader({
  eyebrow,
  title,
  accent,
  lead,
  claro = false,
  centro = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
  claro?: boolean;
  centro?: boolean;
}) {
  return (
    <div className={`${centro ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <div className={centro ? "flex justify-center" : ""}>
        <SerraEyebrow claro={claro}>{eyebrow}</SerraEyebrow>
      </div>
      <div className={`mt-5 ${centro ? "flex justify-center" : ""}`}>
        <SerraRule escuro={!claro} />
      </div>
      <h2
        className={`mt-6 ${serif} text-[30px] font-bold leading-[1.1] tracking-[-0.015em] md:text-[46px] ${
          claro ? "text-[#17201C]" : "text-[#EDF2EE]"
        }`}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className={claro ? "text-[#B8481F]" : "text-[#C8552F]"}>{accent}</span>
          </>
        )}
      </h2>
      {lead && (
        <p
          className={`mt-6 text-[16px] leading-relaxed md:text-[17.5px] ${
            claro ? "text-[#5A665F]" : "text-[#93A69C]"
          } ${centro ? "mx-auto" : ""}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* ------------------------ entra na tela -------------------------- */

export function SerraReveal({
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------- painel ------------------------------ */

export function SerraPanel({
  children,
  tone = "base",
  className = "",
}: {
  children: ReactNode;
  tone?: "base" | "ember" | "mato" | "papel";
  className?: string;
}) {
  const tons = {
    base: "border-[#2A3A33] bg-[#141D19]",
    ember: "border-[#C8552F]/40 bg-[#C8552F]/[0.06]",
    mato: "border-[#5A9E6F]/35 bg-[#5A9E6F]/[0.05]",
    papel: "border-[#D3CEC0] bg-[#F4F2EC]",
  };
  return <div className={`min-w-0 border ${tons[tone]} p-7 md:p-8 ${className}`}>{children}</div>;
}

/* ---------------- aviso de interação / animação ------------------ */

export function SerraHint({
  children,
  anima = false,
  claro = false,
  className = "",
}: {
  children: ReactNode;
  anima?: boolean;
  claro?: boolean;
  className?: string;
}) {
  const cor = anima ? "#5A9E6F" : claro ? "#B8481F" : "#C8552F";
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em]"
      style={{ borderColor: `${cor}66`, background: `${cor}14`, color: cor }}
    >
      <span className="relative flex h-2 w-2">
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: cor }}
          animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative h-2 w-2 rounded-full" style={{ background: cor }} />
      </span>
      <span className={className}>{children}</span>
    </span>
  );
}

/* ------------------------- carimbo ------------------------------- */

export function SerraCarimbo({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block -rotate-3 border-2 border-[#C8552F] px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#C8552F]">
      {children}
    </span>
  );
}
