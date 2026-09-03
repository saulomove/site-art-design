"use client";

import { motion } from "framer-motion";
import { VinicolaDivider, VinicolaSectionHeader, VinicolaEyebrow } from "./vinicola-ui";

/**
 * Seção institucional da agência, tematizada para o tema vinicola.
 * Os números são os mesmos do componente genérico ProposalAbout — que não
 * é usado aqui porque o gradiente tri-color da marca ArtDesign quebraria
 * a paleta preta e dourada da Santa Augusta.
 */
const STATS = [
  { number: "449", label: "Clientes atendidos" },
  { number: "16+", label: "Anos de mercado" },
  { number: "8", label: "Países com clientes" },
  { number: "200+", label: "Projetos entregues" },
] as const;

const COUNTRIES = [
  { country: "Brasil", detail: "Sede · 18+ cidades" },
  { country: "Estados Unidos", detail: "Texas" },
  { country: "Emirados Árabes", detail: "Dubai" },
  { country: "Portugal", detail: "Lisboa" },
  { country: "Espanha", detail: "Madrid" },
  { country: "Chile", detail: "Santiago · Talca" },
  { country: "Argentina", detail: "Córdoba · San Francisco" },
  { country: "Colômbia", detail: "Bogotá" },
] as const;

const CAPABILITIES = [
  "Equipe multidisciplinar: design, código, tráfego e estratégia sob o mesmo teto",
  "Produção audiovisual própria, com drone 4K e captação em qualidade de cinema",
  "Tecnologia proprietária — ArtAtende CRM para gestão de WhatsApp",
  "Um gestor responsável por projeto, sem rodízio de atendimento",
] as const;

const TESTIMONIALS = [
  {
    name: "Astor Junior",
    role: "Diretor, Braspan MDF",
    content:
      "O sistema de Cashback para arquitetos foi um divisor de águas. Além da gestão de redes sociais impecável, a tecnologia desenvolvida pela ArtDesign fidelizou nossos parceiros de uma forma que não imaginávamos.",
  },
  {
    name: "Jackson",
    role: "CEO, Grupo Karikal",
    content:
      "Transformação digital completa. Do CRM organizando nosso comercial até a gestão de vendas online. Ter uma agência que cuida de tudo, da foto do produto até o fechamento da venda, é essencial.",
  },
  {
    name: "Cleyton e Richard",
    role: "Sócios, Pitz",
    content:
      "O sistema de gerenciamento de delivery e salão nos deu liberdade total. Somado ao marketing e à papelaria completa, nossa marca se consolidou como referência na região.",
  },
] as const;

export function ProposalVinicolaAgency() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-24 md:py-32">
      <VinicolaDivider />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[45%] w-[70%] -translate-x-1/2 rounded-full bg-[#CA8B35]/[0.05] blur-[160px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="Quem vai fazer isso"
          title="ArtDesign —"
          italic="marketing e tecnologia"
          lead="Uma agência full service que escreve a copy, grava o vídeo, corrige o servidor e gerencia a mídia com a mesma equipe. Sem terceirizar entre frentes, sem repassar o problema adiante."
        />

        {/* Números */}
        <div className="mb-20 grid gap-px overflow-hidden border border-[#CA8B35]/15 bg-[#CA8B35]/15 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: Math.min(idx, 4) * 0.08 }}
              className="bg-[#0B0B0B] p-8 text-center md:p-10"
            >
              <p className="font-playfair text-5xl font-medium text-[#CA8B35] md:text-6xl">
                {stat.number}
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#CCCCCC]/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Países */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 border border-[#CCCCCC]/10 bg-[#121110] p-8 md:p-12"
        >
          <div className="mb-10 text-center">
            <VinicolaEyebrow>Alcance</VinicolaEyebrow>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/60">
              Atendemos marcas em oito países. Uma vinícola de altitude
              catarinense que quer ser reconhecida fora do estado fala com quem
              já trabalha fora dele.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden bg-[#CCCCCC]/10 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTRIES.map((item) => (
              <div key={item.country} className="bg-[#121110] px-6 py-6">
                <p className="text-sm font-semibold text-white">
                  {item.country}
                </p>
                <p className="mt-1.5 text-[12px] text-[#CCCCCC]/45">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Capacidades */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <ul className="grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {CAPABILITIES.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 text-[15px] leading-relaxed text-[#CCCCCC]/75"
              >
                <span className="mt-[9px] h-[5px] w-[5px] flex-shrink-0 rotate-45 bg-[#CA8B35]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Depoimentos */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <VinicolaEyebrow>Quem já trabalha com a gente</VinicolaEyebrow>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item, idx) => (
              <motion.figure
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: Math.min(idx, 3) * 0.08 }}
                className="flex flex-col border border-[#CCCCCC]/10 bg-[#121110] p-8"
              >
                <span
                  aria-hidden="true"
                  className="font-playfair text-4xl leading-none text-[#CA8B35]/30"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-2 flex-1 text-[14px] leading-relaxed text-[#CCCCCC]/70">
                  {item.content}
                </blockquote>
                <figcaption className="mt-6 border-t border-[#CCCCCC]/10 pt-5">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-[12px] text-[#CCCCCC]/45">
                    {item.role}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
