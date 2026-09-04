"use client";

import { motion } from "framer-motion";
import {
  Truck, FlaskConical, ClipboardList, Wallet, Crown, ArrowDown, type LucideIcon,
} from "lucide-react";
import {
  VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

interface Nivel {
  n: string;
  icon: LucideIcon;
  papel: string;
  quem: string;
  faz: string;
  ve: readonly string[];
  alerta: string;
  cor: string;
  borda: string;
  fundo: string;
}

const NIVEIS: readonly Nivel[] = [
  {
    n: "01",
    icon: Truck,
    papel: "Recebimento",
    quem: "Quem está na balança quando o caminhão chega",
    faz: "Registra o produtor, a variedade e o peso pelo celular, com foto da nota. Leva menos de um minuto e o lote já nasce no sistema.",
    ve: ["Só a tela de recebimento", "Os lotes que ele mesmo lançou", "Nenhum valor, nenhum preço"],
    alerta: "Recebe confirmação de que o lote entrou. Nada além disso.",
    cor: "text-[#6D9B83]",
    borda: "border-[#4F7A63]/35",
    fundo: "bg-[#4F7A63]",
  },
  {
    n: "02",
    icon: FlaskConical,
    papel: "Produção",
    quem: "Quem conduz a vinificação e movimenta os tanques",
    faz: "Aponta prensagem, litragem obtida, transferências e engarrafamento. Move o lote de etapa e o sistema confere o rendimento na hora.",
    ve: ["Todos os lotes e o mapa da adega", "O tempo de cada lote parado", "Volumes, não valores"],
    alerta: "É avisado quando um tanque está ocupado além do previsto e quando um apontamento sai da faixa técnica.",
    cor: "text-[#6D9B83]",
    borda: "border-[#4F7A63]/35",
    fundo: "bg-[#4F7A63]",
  },
  {
    n: "03",
    icon: ClipboardList,
    papel: "Administrativo",
    quem: "Quem fala com o produtor e organiza a casa",
    faz: "Confere o que está pronto para faturar, dispara a comunicação com o produtor e cuida da base de clientes e do atendimento.",
    ve: ["Lotes por produtor e por etapa", "O que já foi cobrado e o que não", "CRM, funil e campanhas"],
    alerta: "Recebe o aviso de 90 e 60 dias para renegociar a permanência antes de a faixa de guarda virar.",
    cor: "text-[#CA8B35]",
    borda: "border-[#CA8B35]/35",
    fundo: "bg-[#CA8B35]",
  },
  {
    n: "04",
    icon: Wallet,
    papel: "Financeiro",
    quem: "Quem transforma etapa concluída em fatura",
    faz: "Vê a lista do que está faturável por etapa, com o cálculo já feito, e marca o que foi cobrado. O que falta cobrar não some da tela.",
    ve: ["As três etapas e a guarda acumulada", "Valores por produtor e por lote", "O total pendente da safra"],
    alerta: "É avisado a 30 dias da virada de faixa e sempre que uma etapa fica concluída sem cobrança.",
    cor: "text-[#CA8B35]",
    borda: "border-[#CA8B35]/35",
    fundo: "bg-[#CA8B35]",
  },
  {
    n: "05",
    icon: Crown,
    papel: "Diretoria",
    quem: "A Fran",
    faz: "Abre o painel e vê a safra inteira em cores: o que entrou, o que está parado, o que falta cobrar e o que vendeu. Sem pedir relatório a ninguém.",
    ve: ["Tudo, em visão consolidada", "Receita por etapa e por produtor", "Guarda acumulada e projeção"],
    alerta: "Recebe só o que exige decisão: lote parado demais, rendimento fora da faixa, cobrança vencendo.",
    cor: "text-[#8A6A24]",
    borda: "border-[#8A6A24]/45",
    fundo: "bg-[#8A6A24]",
  },
];

export function ProposalGenyusHierarquia() {
  return (
    <section
      id="hierarquia"
      className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32"
    >
      <VinicolaDivider />

      <div className="pointer-events-none absolute left-0 top-1/3 h-[50%] w-[50%] rounded-full bg-[#4F7A63]/[0.06] blur-[160px]" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <VinicolaSectionHeader
          eyebrow="Estrutura e hierarquia"
          title="O dado entra uma vez"
          italic="e sobe a estrutura sozinho"
          lead="Hoje a informação é digitada de novo a cada etapa, em planilhas diferentes, por pessoas diferentes. No Genyus Wine o lote nasce na balança e vai subindo — cada nível vê o que precisa ver, e ninguém redigita nada."
        />

        <div className="relative">
          {/* Linha da estrutura */}
          <div className="pointer-events-none absolute bottom-8 left-[27px] top-8 hidden w-px bg-gradient-to-b from-[#4F7A63]/40 via-[#CA8B35]/40 to-[#8A6A24]/50 md:block" />

          <div className="space-y-4">
            {NIVEIS.map((nv, idx) => {
              const Icon = nv.icon;
              return (
                <motion.div
                  key={nv.n}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: Math.min(idx, 5) * 0.07 }}
                  className="relative md:pl-20"
                >
                  {/* Nó */}
                  <div
                    className={`absolute left-0 top-8 hidden h-14 w-14 items-center justify-center border bg-[#0B0B0B] md:flex ${nv.borda}`}
                  >
                    <Icon className={`h-5 w-5 ${nv.cor}`} />
                  </div>

                  <div className={`border-l-2 bg-[#121110] p-7 md:p-9 ${nv.borda}`}>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className={`font-mono text-[11px] tracking-[0.2em] ${nv.cor}`}>
                        {nv.n}
                      </span>
                      <h3 className="font-playfair text-xl font-medium text-white md:text-2xl">
                        {nv.papel}
                      </h3>
                      <span className="text-[13px] text-[#CCCCCC]/45">{nv.quem}</span>
                    </div>

                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/70">
                      {nv.faz}
                    </p>

                    <div className="mt-7 grid gap-6 border-t border-[#CCCCCC]/[0.08] pt-6 md:grid-cols-2">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC]/35">
                          O que enxerga
                        </p>
                        <ul className="mt-3 space-y-2">
                          {nv.ve.map((v, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-[13px] leading-snug text-[#CCCCCC]/65"
                            >
                              <span
                                className={`mt-[6px] h-[4px] w-[4px] flex-shrink-0 rotate-45 ${nv.fundo}`}
                              />
                              <span>{v}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#CCCCCC]/35">
                          O que o sistema avisa
                        </p>
                        <p className="mt-3 text-[13px] leading-relaxed text-[#CCCCCC]/65">
                          {nv.alerta}
                        </p>
                      </div>
                    </div>
                  </div>

                  {idx < NIVEIS.length - 1 && (
                    <div className="flex justify-center py-2 md:hidden">
                      <ArrowDown className="h-4 w-4 text-[#CCCCCC]/25" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 border border-[#CA8B35]/25 bg-[#161311] p-8 md:p-10"
        >
          <VinicolaEyebrow>A regra de fundo</VinicolaEyebrow>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#CCCCCC]/70">
            Os cinco perfis acima são o ponto de partida, não uma camisa de
            força. A vinícola cria quantos perfis quiser e marca, item a item, o
            que cada um enxerga e o que cada um pode alterar — inclusive esconder
            valores de quem só precisa lidar com volume. Toda alteração fica
            registrada com autor, data e valor anterior. Se um número mudar,
            existe a quem perguntar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
