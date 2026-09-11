"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloEyebrow } from "./elo-ui";

type Marca = "sim" | "nao" | "meio";

const COLUNAS = ["Planilha e e-mail", "CRM de mercado", "Genyus Elo"] as const;

const LINHAS: { r: string; d: string; v: readonly [Marca, Marca, Marca] }[] = [
  { r: "Relatório de visita sem ninguém digitar", d: "o representante manda áudio, a IA estrutura e pergunta o que faltou", v: ["nao", "nao", "sim"] },
  { r: "Entende filme, espessura, lote e preço piso", d: "não é “Oportunidade” e “Conta” — é FFS 120µ, RQ por lote e margem contra o piso", v: ["meio", "nao", "sim"] },
  { r: "O representante PJ controla o que é visto", d: "a etiqueta do WhatsApp resolve a ingerência sem advogado", v: ["nao", "nao", "sim"] },
  { r: "Memória técnica de amostra por cliente", d: "“esta linha reprovou 2 amostras por selagem a 148 °C”", v: ["nao", "nao", "sim"] },
  { r: "Lê o SAP ECC pelo BTP, sem API pronta", d: "interface construída para a realidade de vocês, não para o conector padrão", v: ["nao", "meio", "sim"] },
  { r: "Funciona antes de o TI liberar qualquer coisa", d: "a primeira fase roda com base própria e exportação do comercial", v: ["sim", "nao", "sim"] },
  { r: "Primeiro módulo em uso em quatro semanas", d: "não em seis meses de implantação com consultoria", v: ["meio", "nao", "sim"] },
  { r: "Quem atende é quem escreveu o código", d: "sem ticket, sem parceiro certificado, sem fila de suporte", v: ["nao", "nao", "sim"] },
  { r: "O que vocês pedirem entra no produto", d: "duas janelas de desenvolvimento reservadas por trimestre", v: ["nao", "nao", "sim"] },
];

const ICONE: Record<Marca, { i: typeof Check; c: string }> = {
  sim: { i: Check, c: "text-[#47A87D]" },
  meio: { i: Minus, c: "text-[#C9A04A]" },
  nao: { i: X, c: "text-[#6B7576]" },
};

export function ProposalEloPorque() {
  return (
    <EloSection id="porque">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[50%] w-[55%] rounded-full bg-[#D51920]/[0.06] blur-[170px]" />

      <EloSectionHeader
        eyebrow="A pergunta difícil"
        title="Por que não comprar"
        accent="um CRM que já existe?"
        lead="É a pergunta certa, e merece resposta direta. Existem CRMs excelentes no mercado, e alguns custam menos que este. A diferença não está em quantidade de função."
      />

      <EloReveal>
        <div className="mx-auto mb-14 max-w-4xl border-l-2 border-[#D51920] bg-[#15181A] p-8 md:p-12">
          <p className="font-sans text-[24px] font-semibold leading-snug text-[#EDF0EF] md:text-[34px]">
            Todo CRM do mercado parte de um pressuposto: que alguém vai digitar.
          </p>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[#9BA5A7] md:text-[17px]">
            O problema da Videplast é um homem de trinta anos de casa que{" "}
            <strong className="font-semibold text-[#EDF0EF]">não vai digitar</strong> — e o senhor
            mesmo disse que não muda mais esse cara, nem no Excel. Um sistema que exige digitação
            não resolve o seu problema; ele apenas documenta que o problema continua.
          </p>
        </div>
      </EloReveal>

      <EloReveal delay={0.06}>
        <div className="overflow-x-auto border border-[#272C2E] bg-[#15181A]">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#272C2E]">
                <th className="px-6 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6B7576]">
                  &nbsp;
                </th>
                {COLUNAS.map((c, i) => (
                  <th
                    key={c}
                    className={`px-5 py-5 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.14em] ${
                      i === 2 ? "bg-[#D51920]/[0.09] text-[#E8343C]" : "text-[#6B7576]"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LINHAS.map((l, k) => (
                <motion.tr
                  key={l.r}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: Math.min(k, 8) * 0.05 }}
                  className="border-b border-[#272C2E]/60 last:border-0"
                >
                  <td className="px-6 py-4">
                    <p className="text-[14.5px] font-medium text-[#EDF0EF]">{l.r}</p>
                    <p className="mt-1 max-w-[46ch] text-[12.5px] leading-snug text-[#6B7576]">{l.d}</p>
                  </td>
                  {l.v.map((m, i) => {
                    const { i: Icon, c } = ICONE[m];
                    return (
                      <td
                        key={i}
                        className={`px-5 py-4 text-center ${i === 2 ? "bg-[#D51920]/[0.09]" : ""}`}
                      >
                        <Icon className={`mx-auto h-4 w-4 ${i === 2 && m === "sim" ? "text-[#E8343C]" : c}`} />
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </EloReveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {[
          {
            t: "Um CRM genérico não sabe o que é uma amostra de filme",
            d: "Para ele, amostra é um anexo. Para vocês, é um processo de três a quatro meses que envolve PCP, laboratório, o cliente e um motivo técnico de reprovação que vale mais que a amostra em si.",
          },
          {
            t: "Um CRM genérico não resolve a ingerência",
            d: "Ele grava tudo ou não grava nada. A etiqueta do WhatsApp — o representante escolhe cliente por cliente — só existe porque foi desenhada para a relação com PJ que vocês têm.",
          },
          {
            t: "Um CRM genérico não vai construir sua interface do BTP",
            d: "O ECC não tem API. O fornecedor de prateleira entrega o conector padrão e o resto é com você. Aqui a interface faz parte do escopo, e foi desenhada com o César antes de existir contrato.",
          },
        ].map((c, i) => (
          <EloReveal key={c.t} delay={i * 0.07}>
            <div className="h-full border-t-2 border-[#D51920] bg-[#15181A] p-7">
              <h3 className="font-sans text-[17px] font-semibold leading-snug text-[#EDF0EF]">{c.t}</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-[#9BA5A7]">{c.d}</p>
            </div>
          </EloReveal>
        ))}
      </div>

      <EloReveal delay={0.12}>
        <div className="mt-8 border border-[#D51920]/30 bg-[#D51920]/[0.05] p-8 md:p-12">
          <EloEyebrow>Em uma frase</EloEyebrow>
          <p className="mx-auto mt-6 max-w-4xl text-center font-sans text-[22px] font-semibold leading-snug text-[#EDF0EF] md:text-[30px]">
            Um CRM de mercado é comprado e depois adaptado à operação. O Elo é o contrário:
            <span className="text-[#E8343C]"> nasce da operação de vocês</span> e, por isso, não
            precisa ser adaptado a nada.
          </p>
        </div>
      </EloReveal>
    </EloSection>
  );
}
