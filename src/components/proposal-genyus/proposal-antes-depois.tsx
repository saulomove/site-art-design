"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import {
  VinicolaDivider, VinicolaSectionHeader,
} from "../proposal-vinicola/vinicola-ui";

interface Caso {
  aba: string;
  celula: string;
  conteudo: string;
  problema: string;
  sistema: string;
  regra: string;
}

const CASOS: readonly Caso[] = [
  {
    aba: "BERTO AGUIAR",
    celula: "Data",
    conteudo: "06/02/20226",
    problema:
      "Um zero a mais. A planilha aceita e soma normalmente — e qualquer conta de tempo passa a tratar esse lote como se estivesse parado há 55 meses.",
    sistema:
      "Data é calendário, não texto. Não existe o ano 20226 para escolher.",
    regra: "Campo de data com seletor",
  },
  {
    aba: "SERRA DO SOL",
    celula: "Peso (kg)",
    conteudo: "2707L",
    problema:
      "Uma litragem digitada dentro da coluna de peso. A soma de quilos da safra inteira fica errada, e o rendimento desse lote é incalculável.",
    sistema:
      "Peso é peso, em quilo, com a unidade fixa na tela. Litro tem campo próprio.",
    regra: "Campo numérico com unidade travada",
  },
  {
    aba: "SUZIN",
    celula: "Litragem",
    conteudo: "4300",
    problema:
      "3.246 kg de Sauvignon Blanc que geraram 4.300 litros. É 132,5% de rendimento — mais líquido do que uva entrou. Fisicamente impossível, e ninguém viu.",
    sistema:
      "O sistema divide na hora e compara com a faixa da casa. Acima de 100%, não salva. Entre 85% e 100%, pede confirmação de um segundo perfil.",
    regra: "Validação de rendimento no apontamento",
  },
  {
    aba: "FABRICIO",
    celula: "Nota",
    conteudo: "4.5",
    problema:
      "Um número de nota fiscal que não é número de nota fiscal. Ninguém consegue conferir esse faturamento depois.",
    sistema:
      "A nota tem formato próprio e fica ligada à etapa que ela cobre. Sem nota, a etapa aparece como pendente na tela do financeiro.",
    regra: "Nota vinculada à etapa",
  },
  {
    aba: "CELSO PANCERI",
    celula: "linha inteira",
    conteudo: "—    —    —    6000L    R$ 25.360",
    problema:
      "Seis mil litros e vinte e cinco mil reais lançados, sem peso, sem data e sem preço por quilo. É a diferença de 6.000 L que apareceu quando somamos a safra.",
    sistema:
      "O lote não abre sem produtor, peso e data. O que falta fica visível como pendência, não como buraco.",
    regra: "Campos obrigatórios na abertura do lote",
  },
  {
    aba: "Vinicola VSA",
    celula: "Uva recebida",
    conteudo: "NIAGARA · NIAGARA BASE · Cabernet Sauvignon(mangedora)",
    problema:
      "Vinte e sete grafias diferentes para as variedades. Nenhum relatório por uva fecha, porque a mesma uva aparece com três nomes.",
    sistema:
      "Variedade é lista. Quem digita escolhe, não escreve. E se faltar uma, a vinícola cadastra.",
    regra: "Lista fechada de variedades",
  },
  {
    aba: "todas as abas",
    celula: "Nota",
    conteudo: "(vazio em 68 das 75 linhas)",
    problema:
      "Nove por cento dos recebimentos têm número de nota. Nos outros 91%, olhando a planilha, não dá para saber se foi faturado.",
    sistema:
      "Todo lote mostra as três etapas com a cor do estado: cobrado, a cobrar, vencido. O que falta faturar não some da tela nem no fim da safra.",
    regra: "Estado de cobrança por etapa",
  },
];

export function ProposalGenyusAntesDepois() {
  return (
    <section
      id="antes-depois"
      className="relative scroll-mt-[68px] overflow-hidden bg-[#F4F0E8] py-24 md:py-32"
    >
      <VinicolaDivider onLight />

      <div className="container mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          onLight
          eyebrow="Célula por célula"
          title="Estas são células reais"
          italic="da sua planilha"
          lead="Nada aqui foi inventado para ilustrar. São sete casos que estão nos arquivos que a Fran enviou — e o que exatamente o sistema faz para cada um deixar de acontecer."
        />

        <div className="space-y-4">
          {CASOS.map((c, idx) => (
            <motion.div
              key={`${c.aba}-${c.celula}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: Math.min(idx, 6) * 0.05 }}
              className="grid items-stretch gap-px overflow-hidden bg-[#0B0B0B]/10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
            >
              {/* ANTES — a planilha */}
              <div className="min-w-0 bg-white p-7 md:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="bg-[#B5342B]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#B5342B]">
                    Na planilha
                  </span>
                  <span className="font-mono text-[11px] text-[#0B0B0B]/40">
                    aba {c.aba} · coluna {c.celula}
                  </span>
                </div>

                {/* a célula */}
                <div className="min-w-0 border border-[#0B0B0B]/12 bg-[#F7F7F5]">
                  <div className="border-b border-[#0B0B0B]/10 bg-[#0B0B0B]/[0.04] px-3 py-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#0B0B0B]/40">
                      {c.celula}
                    </span>
                  </div>
                  <p className="overflow-x-auto whitespace-nowrap px-3 py-3 font-mono text-[13px] text-[#B5342B]">
                    {c.conteudo}
                  </p>
                </div>

                <p className="mt-5 text-[14px] leading-relaxed text-[#0B0B0B]/65">
                  {c.problema}
                </p>
              </div>

              {/* seta */}
              <div className="flex items-center justify-center bg-white px-4 py-2 lg:px-5">
                <ArrowRight className="h-4 w-4 rotate-90 text-[#8A6A24] lg:rotate-0" />
              </div>

              {/* DEPOIS — o sistema */}
              <div className="min-w-0 bg-[#0B0B0B] p-7 md:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="bg-[#CA8B35]/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#CA8B35]">
                    No Genyus Wine
                  </span>
                </div>

                <div className="flex items-start gap-3 border border-[#4F7A63]/30 bg-[#4F7A63]/[0.07] p-4">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6D9B83]" />
                  <p className="text-[13px] font-semibold leading-snug text-white">
                    {c.regra}
                  </p>
                </div>

                <p className="mt-5 text-[14px] leading-relaxed text-[#CCCCCC]/65">
                  {c.sistema}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-8 bg-white p-8 md:p-10"
        >
          <p className="max-w-4xl text-[15px] leading-relaxed text-[#0B0B0B]/70">
            Nenhum desses erros é descuido de quem trabalha na vinícola. São
            todos consequência da mesma coisa: a planilha aceita qualquer coisa
            que se digite nela, em qualquer coluna, e nunca discorda.{" "}
            <strong className="text-[#0B0B0B]">
              A diferença de um sistema não é ser mais bonito — é discordar na
              hora certa.
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
