"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Layers, Users } from "lucide-react";
import {
  VinicolaDivider,
  VinicolaSectionHeader,
  VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

const CAMADAS = [
  {
    icon: Database,
    titulo: "O que o CIA já faz",
    tom: "text-[#CCCCCC]/55",
    borda: "border-[#CCCCCC]/12",
    itens: [
      "Controle de lotes e rastreabilidade",
      "Tanques, armazenagem e pesagem",
      "Estoque próprio e de terceiros",
      "Nota de entrada de produtor",
      "Sisdevin, SPED, Bloco K e H",
    ],
    nota: "Continua sendo a fonte da verdade fiscal e industrial. Não mexemos nisso.",
  },
  {
    icon: Layers,
    titulo: "O que o Genyus Wine acrescenta",
    tom: "text-[#CA8B35]",
    borda: "border-[#CA8B35]/40",
    destaque: true,
    itens: [
      "As três etapas de cobrança, e o que falta faturar",
      "Política de guarda por faixa de tempo",
      "Alerta antes de a faixa virar",
      "Validação de rendimento no apontamento",
      "Celular na balança e cor para a diretoria",
    ],
    nota: "A camada comercial e de experiência que ERP de prateleira não entrega.",
  },
  {
    icon: Users,
    titulo: "O que passa a existir",
    tom: "text-[#6D9B83]",
    borda: "border-[#4F7A63]/35",
    itens: [
      "CRM multicanal e atendimento em fila",
      "DaIA capturando lead no site e na loja",
      "Funil, base de clientes e campanhas",
      "Perfis e permissões configuráveis",
      "Notificação chegando a quem precisa agir",
    ],
    nota: "O lado do relacionamento, que hoje não tem sistema nenhum.",
  },
] as const;

export function ProposalGenyusErp() {
  return (
    <section
      id="erp"
      className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32"
    >
      <VinicolaDivider />

      <div className="pointer-events-none absolute right-0 top-1/4 h-[45%] w-[45%] rounded-full bg-[#CA8B35]/[0.05] blur-[150px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="Integração"
          title="O Genyus Wine não substitui o CIA."
          italic="Ele fica em cima."
          lead="A Santa Augusta já tem um ERP especializado em vinícola, com módulo contratado. Trocar de ERP seria caro, arriscado e desnecessário. O que propomos é ler dele e fazer o que ele não faz."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {CAMADAS.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: Math.min(idx, 3) * 0.08 }}
                className={`flex flex-col border bg-[#121110] p-8 ${c.borda} ${
                  "destaque" in c && c.destaque ? "lg:-mt-4 lg:mb-4" : ""
                }`}
              >
                <Icon className={`h-5 w-5 ${c.tom}`} />
                <h3 className="mt-6 font-playfair text-xl font-medium text-white">
                  {c.titulo}
                </h3>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {c.itens.map((i, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-3 text-[14px] leading-snug text-[#CCCCCC]/70"
                    >
                      <span
                        className={`mt-[7px] h-[4px] w-[4px] flex-shrink-0 rotate-45 ${
                          "destaque" in c && c.destaque
                            ? "bg-[#CA8B35]"
                            : "bg-[#CCCCCC]/35"
                        }`}
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-[#CCCCCC]/10 pt-5 text-[13px] italic leading-relaxed text-[#CCCCCC]/45">
                  {c.nota}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Fluxo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-8 border border-[#CCCCCC]/10 bg-[#121110] p-8 md:p-12"
        >
          <VinicolaEyebrow>Como os dados circulam</VinicolaEyebrow>
          <div className="mt-8 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
            <div className="flex-1 border border-[#CCCCCC]/12 bg-[#0B0B0B] p-6 text-center">
              <p className="font-playfair text-lg font-medium text-white">
                CIA Sistemas
              </p>
              <p className="mt-2 text-[12px] text-[#CCCCCC]/45">
                Lotes, tanques, produtores, notas
              </p>
            </div>

            <div className="flex flex-col items-center gap-1.5 px-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#CA8B35]">
                leitura
              </span>
              <ArrowRight className="h-4 w-4 rotate-90 text-[#CA8B35] md:rotate-0" />
            </div>

            <div className="flex-1 border-2 border-[#CA8B35]/45 bg-[#161311] p-6 text-center">
              <p className="font-playfair text-lg font-medium text-[#CA8B35]">
                Genyus Wine
              </p>
              <p className="mt-2 text-[12px] text-[#CCCCCC]/55">
                Etapas, guarda, alertas, CRM
              </p>
            </div>

            <div className="flex flex-col items-center gap-1.5 px-2">
              <ArrowRight className="h-4 w-4 rotate-90 text-[#CCCCCC]/40 md:rotate-0" />
            </div>

            <div className="flex-1 border border-[#CCCCCC]/12 bg-[#0B0B0B] p-6 text-center">
              <p className="font-playfair text-lg font-medium text-white">
                As pessoas
              </p>
              <p className="mt-2 text-[12px] text-[#CCCCCC]/45">
                Balança, produção, financeiro, diretoria
              </p>
            </div>
          </div>

          <p className="mt-8 border-t border-[#CCCCCC]/10 pt-6 text-[14px] leading-relaxed text-[#CCCCCC]/55">
            Nesta fase a integração é <strong className="text-white">somente leitura</strong>.
            Nenhum dado é gravado no ERP sem uma segunda conversa e um aceite
            explícito. E enquanto a API não é liberada, o Genyus Wine opera com
            base própria e importação das planilhas — o projeto não fica parado
            esperando terceiros.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
