"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import {
  VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

const COLUNAS = ["Planilha", "ERP de vinícola", "CRM de mercado", "Genyus Wine"] as const;

type Marca = "sim" | "nao" | "parcial";
const LINHAS: { r: string; v: readonly [Marca, Marca, Marca, Marca] }[] = [
  { r: "Controle de lote e rastreabilidade", v: ["parcial", "sim", "nao", "sim"] },
  { r: "Cobrança por etapa de vinificação", v: ["parcial", "nao", "nao", "sim"] },
  { r: "Política de guarda por faixa de tempo", v: ["nao", "nao", "nao", "sim"] },
  { r: "Alerta antes de a faixa virar", v: ["nao", "nao", "nao", "sim"] },
  { r: "Validação de rendimento no apontamento", v: ["nao", "nao", "nao", "sim"] },
  { r: "Recebimento pelo celular na balança", v: ["nao", "parcial", "nao", "sim"] },
  { r: "Atendimento multicanal com IA", v: ["nao", "nao", "sim", "sim"] },
  { r: "Adega e cliente no mesmo sistema", v: ["nao", "nao", "nao", "sim"] },
  { r: "Feito sob medida, código do cliente", v: ["nao", "nao", "nao", "sim"] },
];

const ICONE: Record<Marca, { i: typeof Check; c: string }> = {
  sim: { i: Check, c: "text-[#6D9B83]" },
  parcial: { i: Minus, c: "text-[#CA8B35]" },
  nao: { i: X, c: "text-[#CCCCCC]/20" },
};

const EXCLUSIVOS = [
  {
    n: "01",
    t: "A guarda é regra comercial, não industrial",
    d: "ERP de vinícola controla onde o vinho está. Nenhum deles sabe que aquele lote entrou há 14 meses, que a faixa de preço virou e que existe dinheiro a cobrar. Isso não é um recurso que falta num sistema pronto — é um problema que só quem conhece a operação da Santa Augusta consegue modelar.",
  },
  {
    n: "02",
    t: "O sistema sabe o que é fisicamente possível",
    d: "Ele conhece a faixa de rendimento da casa, 70,2%, apurada da sua própria safra. Quando alguém digitar uma litragem que dá 132%, ele avisa antes de virar fatura. Um software genérico aceita qualquer número, porque não sabe que está falando de uva.",
  },
  {
    n: "03",
    t: "A adega e o cliente no mesmo lugar",
    d: "De um lado, o lote de Merlot da Suzin no tanque T-02. Do outro, a Marina que comprou Fenice duas vezes e faz aniversário em setembro. Nenhum ERP faz CRM, nenhum CRM entende vinificação. Aqui é um login só, uma base só, uma equipe só.",
  },
  {
    n: "04",
    t: "A DaIA fala dos seus rótulos",
    d: "Não é um chatbot genérico com respostas prontas. Ela sabe a diferença entre o Fenice e o Tapera, o horário do Wine Garden aos sábados e o prazo de entrega para a cidade de quem está perguntando. E quando não sabe, passa para uma pessoa em vez de inventar.",
  },
  {
    n: "05",
    t: "O sistema é seu, não alugado",
    d: "Em SaaS de prateleira a vinícola é mais um número, e uma funcionalidade específica de vinificação de terceiros nunca vai entrar no roteiro do fornecedor. Aqui, o código e os dados são da Santa Augusta, e o que a operação pedir entra no próximo ciclo.",
  },
  {
    n: "06",
    t: "Quem cuida do marketing é quem construiu o sistema",
    d: "A mesma equipe que vai gerir o Instagram, gravar na vinícola e rodar as campanhas é a que escreve o código. O lead que a DaIA captura no site cai no funil que nós desenhamos, e a campanha de aniversário sai da base que nós alimentamos. Não há fornecedor no meio para culpar.",
  },
];

export function ProposalGenyusExclusivos() {
  return (
    <section id="exclusivos" className="relative scroll-mt-[68px] overflow-hidden bg-[#F4F0E8] py-24 md:py-32">
      <VinicolaDivider onLight />

      <div className="container mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          onLight
          eyebrow="O que só aqui existe"
          title="Isso não se compra pronto"
          italic="em lugar nenhum"
          lead="Há bons ERPs de vinícola e há bons CRMs. O que não existe é um sistema que entenda de uva e de cliente ao mesmo tempo — e que cobre pela guarda."
        />

        {/* Comparativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="mb-3 overflow-x-auto bg-white"
        >
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#0B0B0B]/10">
                <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B0B0B]/45">
                  Recurso
                </th>
                {COLUNAS.map((c, i) => (
                  <th
                    key={c}
                    className={`px-4 py-5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] ${
                      i === 3 ? "bg-[#8A6A24]/[0.08] text-[#8A6A24]" : "text-[#0B0B0B]/45"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LINHAS.map((l) => (
                <tr key={l.r} className="border-b border-[#0B0B0B]/[0.06] last:border-0">
                  <td className="px-6 py-4 text-[14px] text-[#0B0B0B]/80">{l.r}</td>
                  {l.v.map((m, i) => {
                    const { i: Icon, c } = ICONE[m];
                    return (
                      <td
                        key={i}
                        className={`px-4 py-4 text-center ${i === 3 ? "bg-[#8A6A24]/[0.08]" : ""}`}
                      >
                        <Icon className={`mx-auto h-4 w-4 ${i === 3 && m === "sim" ? "text-[#8A6A24]" : c}`} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mb-12 text-center text-[10px] uppercase tracking-[0.14em] text-[#8A6A24]/70 md:hidden">
          deslize a tabela para o lado
        </p>

        {/* Os seis pontos */}
        <div className="grid gap-5 md:grid-cols-2">
          {EXCLUSIVOS.map((e, idx) => (
            <motion.div
              key={e.n}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: Math.min(idx, 5) * 0.06 }}
              className="flex gap-5 bg-white p-7 md:p-8"
            >
              <span className="font-playfair text-2xl font-medium text-[#8A6A24]/35">{e.n}</span>
              <div className="min-w-0">
                <h3 className="font-playfair text-lg font-medium leading-snug text-[#0B0B0B] md:text-xl">
                  {e.t}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#0B0B0B]/65">{e.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="mt-8 bg-[#0B0B0B] p-10 text-center md:p-14"
        >
          <VinicolaEyebrow>Em uma frase</VinicolaEyebrow>
          <p className="mx-auto mt-6 max-w-3xl font-playfair text-xl font-medium italic leading-relaxed text-white md:text-3xl">
            Não existe no mercado um sistema que saiba, ao mesmo tempo, que o
            tanque T-02 tem Merlot da Suzin há cinco meses e que a Marina faz
            aniversário na semana que vem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
