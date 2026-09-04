"use client";

import { motion } from "framer-motion";
import {
  Truck, Scale, FlaskConical, Droplets, Timer, Package, FileText,
  type LucideIcon,
} from "lucide-react";
import {
  VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

interface Etapa {
  icon: LucideIcon;
  quando: string;
  quem: string;
  titulo: string;
  acontece: string;
  sistema: string;
  valor?: string;
  valorRot?: string;
  cor: string;
  borda: string;
}

const JORNADA: readonly Etapa[] = [
  {
    icon: Truck,
    quando: "14/04 · 07h48",
    quem: "Balança",
    titulo: "O caminhão da Suzin encosta",
    acontece:
      "5.971 kg de Merlot descem na balança. Hoje isso vira um bilhete de papel que alguém digita à noite, se lembrar.",
    sistema:
      "O Tiago abre o celular, escolhe Suzin, escolhe Merlot, digita o peso e fotografa a nota. Quarenta segundos. O lote SUZ-2026-014 já existe.",
    cor: "text-[#6D9B83]",
    borda: "border-[#4F7A63]/40",
  },
  {
    icon: Scale,
    quando: "14/04 · 07h49",
    quem: "O sistema",
    titulo: "A primeira cobrança nasce sozinha",
    acontece:
      "Ninguém calcula nada. A conta da prensagem aparece só quando o financeiro for atrás, semanas depois.",
    sistema:
      "5.971 kg × R$ 1,25 = R$ 7.463,75. Já está na lista do financeiro como faturável, com a etiqueta e o QR do lote impressos na hora.",
    valor: "R$ 7.463",
    valorRot: "1ª etapa · prensagem",
    cor: "text-[#CA8B35]",
    borda: "border-[#CA8B35]/40",
  },
  {
    icon: FlaskConical,
    quando: "15/04 a 20/05",
    quem: "Produção",
    titulo: "Fermenta no tanque T-02",
    acontece:
      "A ocupação da adega vive na cabeça de quem trabalha lá. Saber o que está livre exige perguntar.",
    sistema:
      "O mapa da adega mostra o T-02 ocupado, com o quê, de quem e desde quando. O relógio da guarda começa a contar neste dia.",
    cor: "text-[#6D9B83]",
    borda: "border-[#4F7A63]/40",
  },
  {
    icon: Droplets,
    quando: "20/05",
    quem: "Produção",
    titulo: "O apontamento: 4.060 litros",
    acontece:
      "Digita-se na planilha. Se fosse 4.300, como aconteceu num lote de Sauvignon Blanc, ninguém veria que dá 132%.",
    sistema:
      "O sistema divide 4.060 por 5.971 e vê 68,0% — dentro da faixa da casa. Aprova. Se estivesse acima de 100%, não deixaria salvar.",
    valor: "68,0%",
    valorRot: "rendimento conferido",
    cor: "text-[#6D9B83]",
    borda: "border-[#4F7A63]/40",
  },
  {
    icon: FileText,
    quando: "20/05",
    quem: "Financeiro",
    titulo: "A segunda cobrança fecha",
    acontece:
      "O valor existe na planilha, mas em 68 dos 75 lotes não há número de nota. Faturado ou não, ninguém sabe olhando.",
    sistema:
      "4.060 L × R$ 4,15 = R$ 16.849. O financeiro emite, lança a nota, e o lote muda de cor. O que não foi cobrado continua vermelho na tela.",
    valor: "R$ 16.849",
    valorRot: "2ª etapa · vinificação",
    cor: "text-[#CA8B35]",
    borda: "border-[#CA8B35]/40",
  },
  {
    icon: Timer,
    quando: "de 21/05 em diante",
    quem: "O sistema",
    titulo: "Começa a guarda — e o relógio não esquece",
    acontece:
      "Aqui a receita evapora. O vinho ocupa tanque por meses e a cobrança da guarda depende de alguém lembrar.",
    sistema:
      "Doze meses de cortesia, contados a partir de hoje. Em fevereiro de 2027 chega o aviso de 90 dias. Em maio, o lote entra na faixa 2 e passa a acumular sozinho.",
    valor: "R$ 487/mês",
    valorRot: "a partir do 13º mês",
    cor: "text-[#D4574D]",
    borda: "border-[#B5342B]/40",
  },
  {
    icon: Package,
    quando: "quando a Suzin decidir",
    quem: "Produção e financeiro",
    titulo: "Envase — a cobrança que hoje não existe",
    acontece:
      "A terceira etapa, R$ 4,10 por garrafa, não tem uma única linha registrada na tabela de safra. Nenhuma.",
    sistema:
      "4.060 L viram 5.413 garrafas. O sistema calcula, coloca na fila de faturamento e fecha o ciclo do lote.",
    valor: "R$ 22.193",
    valorRot: "3ª etapa · envase",
    cor: "text-[#CA8B35]",
    borda: "border-[#CA8B35]/40",
  },
];

export function ProposalGenyusJornada() {
  return (
    <section
      id="jornada"
      className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32"
    >
      <VinicolaDivider />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[50%] w-[50%] rounded-full bg-[#CA8B35]/[0.06] blur-[160px]" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <VinicolaSectionHeader
          eyebrow="Um lote de verdade"
          title="Do caminhão à garrafa,"
          italic="acompanhando um lote só"
          lead="Este é o SUZ-2026-014: 5.971 kg de Merlot da Suzin, recebidos em 14 de abril, que renderam 4.060 litros. É uma linha real da sua planilha. Acompanhe o que acontece com ele hoje — e o que passaria a acontecer."
        />

        <div className="relative">
          <div className="pointer-events-none absolute bottom-10 left-[23px] top-10 hidden w-px bg-gradient-to-b from-[#4F7A63]/40 via-[#CA8B35]/50 to-[#B5342B]/40 md:block" />

          <div className="space-y-4">
            {JORNADA.map((e, idx) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={e.titulo}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: Math.min(idx, 6) * 0.05 }}
                  className="relative md:pl-16"
                >
                  <div className={`absolute left-0 top-7 hidden h-12 w-12 items-center justify-center border bg-[#0B0B0B] md:flex ${e.borda}`}>
                    <Icon className={`h-4 w-4 ${e.cor}`} />
                  </div>

                  <div className={`border-l-2 bg-[#121110] p-7 md:p-8 ${e.borda}`}>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className={`font-mono text-[11px] ${e.cor}`}>{e.quando}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC]/30">
                        {e.quem}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
                      <h3 className="max-w-xl font-playfair text-xl font-medium leading-snug text-white md:text-2xl">
                        {e.titulo}
                      </h3>
                      {e.valor && (
                        <div className="flex-shrink-0 text-left md:text-right">
                          <p className={`font-playfair text-2xl font-medium ${e.cor}`}>{e.valor}</p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-[#CCCCCC]/35">
                            {e.valorRot}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <div className="border-l border-[#CCCCCC]/12 pl-5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC]/30">
                          Hoje
                        </p>
                        <p className="mt-2.5 text-[14px] leading-relaxed text-[#CCCCCC]/50">
                          {e.acontece}
                        </p>
                      </div>
                      <div className="border-l-2 border-[#CA8B35]/40 pl-5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#CA8B35]">
                          Com o Genyus Wine
                        </p>
                        <p className="mt-2.5 text-[14px] leading-relaxed text-[#CCCCCC]/75">
                          {e.sistema}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-8 border-2 border-[#CA8B35]/40 bg-[#161311] p-8 md:p-12"
        >
          <VinicolaEyebrow>O lote inteiro, somado</VinicolaEyebrow>
          <div className="mt-7 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-playfair text-2xl font-medium leading-snug text-white md:text-3xl">
                Um lote de Merlot vale R$ 46.506 em serviço — e isso antes de um
                único mês de guarda.
              </p>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/60">
                Na planilha de hoje esse lote aparece com as duas primeiras
                etapas lançadas, sem número de nota em nenhuma delas, e sem a
                terceira. São <strong className="text-white">75 lotes</strong> como
                este por safra. O sistema não precisa fazer mágica: basta não
                deixar nada cair no caminho.
              </p>
            </div>
            <div className="flex-shrink-0 border-t border-[#CA8B35]/20 pt-7 md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <ul className="space-y-3">
                {[
                  ["1ª · prensagem", "R$ 7.463"],
                  ["2ª · vinificação", "R$ 16.849"],
                  ["3ª · envase", "R$ 22.193"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-baseline justify-between gap-8 text-[13px]">
                    <span className="text-[#CCCCCC]/50">{k}</span>
                    <span className="font-mono text-white">{v}</span>
                  </li>
                ))}
                <li className="flex items-baseline justify-between gap-8 border-t border-[#CCCCCC]/12 pt-3">
                  <span className="text-[13px] text-[#CCCCCC]/70">total do lote</span>
                  <span className="font-playfair text-2xl font-medium text-[#CA8B35]">
                    R$ 46.506
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
