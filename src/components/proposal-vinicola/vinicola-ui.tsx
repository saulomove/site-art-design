"use client";

import { motion } from "framer-motion";

/**
 * Tema "vinicola" — construído sobre a identidade real da Vinícola Santa
 * Augusta, extraída do CSS do site (santaaugusta.com.br) e conferida na
 * página no ar: dourado #CA8B35 sobre preto #0B0B0B, texto #CCCCCC,
 * serifada de alto contraste com letterspacing muito aberto.
 *
 * A marca usa DM Serif Display; aqui usamos Playfair Display, que já está
 * carregada no site da agência e ocupa o mesmo território visual. O que
 * define a assinatura não é a face em si, e sim o tracking generoso e o
 * contraste entre versal espaçada e itálico.
 *
 * Classes sempre literais — o JIT do Tailwind não gera interpolação.
 */
export const VINHO = {
  ink: "#0B0B0B",
  inkDeep: "#070707",
  surface: "#121110",
  surfaceUp: "#1A1815",
  gold: "#CA8B35",
  goldLight: "#E6AE50",
  text: "#CCCCCC",
  textDim: "#B1B1B1",
  cream: "#F4F0E8",
  creamCard: "#FFFFFF",
} as const;

/** Coordenadas da vinícola — grafismo que a própria marca usa no site. */
export const COORDENADAS = "27°03'38.6\"S  51°09'07.2\"W";

/** Filete com losango, no lugar de ícone. Mais sóbrio para o segmento. */
export function VinicolaRule({
  onLight = false,
  width = "w-16",
}: {
  onLight?: boolean;
  width?: string;
}) {
  const line = onLight ? "bg-[#0B0B0B]/20" : "bg-[#CA8B35]/40";
  const dot = onLight ? "bg-[#8A6A24]" : "bg-[#CA8B35]";
  return (
    <span className="inline-flex items-center gap-3" aria-hidden="true">
      <span className={`h-[1px] ${width} ${line}`} />
      <span className={`h-[5px] w-[5px] rotate-45 ${dot}`} />
      <span className={`h-[1px] ${width} ${line}`} />
    </span>
  );
}

/** Divisor de topo de seção. */
export function VinicolaDivider({ onLight = false }: { onLight?: boolean }) {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 flex justify-center pt-10 md:pt-14">
      <VinicolaRule onLight={onLight} width="w-12 sm:w-20 md:w-28" />
    </div>
  );
}

/** Eyebrow em versal espaçada — a assinatura tipográfica da marca. */
export function VinicolaEyebrow({
  children,
  onLight = false,
}: {
  children: React.ReactNode;
  onLight?: boolean;
}) {
  return (
    <span
      className={`block text-[11px] font-semibold uppercase tracking-[0.32em] md:text-[10px] md:tracking-[0.42em] ${
        onLight ? "text-[#8A6A24]" : "text-[#CA8B35]"
      }`}
    >
      {children}
    </span>
  );
}

export function VinicolaSectionHeader({
  eyebrow,
  title,
  italic,
  lead,
  onLight = false,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  lead?: string;
  onLight?: boolean;
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className={`mb-16 max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}
    >
      <VinicolaEyebrow onLight={onLight}>{eyebrow}</VinicolaEyebrow>

      <h2
        className={`mt-6 font-playfair text-3xl font-medium leading-[1.15] md:text-5xl ${
          onLight ? "text-[#0B0B0B]" : "text-white"
        }`}
      >
        {title}
        {italic && (
          <>
            {" "}
            <span
              className={`italic ${onLight ? "text-[#8A6A24]" : "text-[#CA8B35]"}`}
            >
              {italic}
            </span>
          </>
        )}
      </h2>

      {lead && (
        <p
          className={`mt-6 text-base leading-relaxed md:text-lg ${
            onLight ? "text-[#0B0B0B]/65" : "text-[#CCCCCC]/70"
          }`}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}

/** Selo de severidade dos achados da auditoria. */
export const SEVERITY = {
  critico: {
    label: "Crítico",
    text: "text-[#B5342B]",
    bg: "bg-[#B5342B]/10",
    border: "border-[#B5342B]/30",
    bar: "bg-[#B5342B]",
    textLight: "text-[#9A2B23]",
    bgLight: "bg-[#9A2B23]/[0.06]",
    borderLight: "border-[#9A2B23]/25",
    barLight: "bg-[#9A2B23]",
    edge: "border-[#B5342B]",
    edgeLight: "border-[#9A2B23]",
  },
  atencao: {
    label: "Atenção",
    text: "text-[#CA8B35]",
    bg: "bg-[#CA8B35]/10",
    border: "border-[#CA8B35]/30",
    bar: "bg-[#CA8B35]",
    textLight: "text-[#8A6A24]",
    bgLight: "bg-[#8A6A24]/[0.06]",
    borderLight: "border-[#8A6A24]/25",
    barLight: "bg-[#8A6A24]",
    edge: "border-[#CA8B35]",
    edgeLight: "border-[#8A6A24]",
  },
  oportunidade: {
    label: "Oportunidade",
    text: "text-[#4F7A63]",
    bg: "bg-[#4F7A63]/10",
    border: "border-[#4F7A63]/30",
    bar: "bg-[#4F7A63]",
    textLight: "text-[#3B5F4C]",
    bgLight: "bg-[#3B5F4C]/[0.06]",
    borderLight: "border-[#3B5F4C]/25",
    barLight: "bg-[#3B5F4C]",
    edge: "border-[#4F7A63]",
    edgeLight: "border-[#3B5F4C]",
  },
  forte: {
    label: "Ponto forte",
    text: "text-[#4F7A63]",
    bg: "bg-[#4F7A63]/10",
    border: "border-[#4F7A63]/30",
    bar: "bg-[#4F7A63]",
    textLight: "text-[#3B5F4C]",
    bgLight: "bg-[#3B5F4C]/[0.06]",
    borderLight: "border-[#3B5F4C]/25",
    barLight: "bg-[#3B5F4C]",
    edge: "border-[#4F7A63]",
    edgeLight: "border-[#3B5F4C]",
  },
} as const;

export type SeverityKey = keyof typeof SEVERITY;

/** Bloco de evidência técnica em fonte mono. */
export function VinicolaEvidence({
  lines,
  onLight = false,
}: {
  lines: string[];
  onLight?: boolean;
}) {
  return (
    <div
      className={`mt-5 overflow-x-auto border-l-2 px-5 py-4 ${
        onLight
          ? "border-[#0B0B0B]/15 bg-[#0B0B0B]/[0.04]"
          : "border-[#CA8B35]/25 bg-black/40"
      }`}
    >
      <pre
        className={`whitespace-pre-wrap break-words md:whitespace-pre font-mono text-[11px] leading-relaxed md:text-[12px] ${
          onLight ? "text-[#0B0B0B]/70" : "text-[#CCCCCC]/65"
        }`}
      >
        {lines.join("\n")}
      </pre>
    </div>
  );
}
