"use client";

import { motion } from "framer-motion";
import { Wheat, TrendingUp, Target, Search } from "lucide-react";

export function ProposalPastoralTrafficBudget() {
  return (
    <section className="relative bg-[#F6EFDF] text-[#0B1A0D] py-24 md:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#C9A037]/40" />
        <Wheat className="mx-4 h-5 w-5 text-[#C9A037]" />
        <div className="h-[1px] w-32 bg-[#C9A037]/40" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-[#C9A037]/60" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C9A037] font-inter">
              Verba de Anúncios
            </span>
            <div className="h-[1px] w-8 bg-[#C9A037]/60" />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-medium text-[#0B1A0D] leading-tight mb-6">
            Como funciona o{" "}
            <span className="italic text-[#0B1A0D]/50">
              investimento em tráfego pago
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#0B1A0D]/60 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            A gestão do tráfego pago está inclusa no pacote mensal. A verba de
            anúncios — o valor que vai direto para Meta e Google — é paga
            separadamente, diretamente pelo cliente às plataformas. E o melhor:
            dá para começar pequeno e crescer conforme os resultados aparecem.
          </p>
        </motion.div>

        {/* Main callout block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative bg-[#0B1A0D] text-[#EDE5CC] p-10 md:p-14 mb-10"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 pointer-events-none">
            <div className="w-8 h-[1px] bg-[#C9A037]/40" />
            <div className="w-[1px] h-8 bg-[#C9A037]/40" />
          </div>
          <div className="absolute top-0 right-0 pointer-events-none flex flex-col items-end">
            <div className="w-8 h-[1px] bg-[#C9A037]/40" />
            <div className="w-[1px] h-8 bg-[#C9A037]/40 ml-auto" />
          </div>
          <div className="absolute bottom-0 left-0 pointer-events-none flex flex-col">
            <div className="w-[1px] h-8 bg-[#C9A037]/40" />
            <div className="w-8 h-[1px] bg-[#C9A037]/40" />
          </div>
          <div className="absolute bottom-0 right-0 pointer-events-none flex flex-col items-end">
            <div className="w-[1px] h-8 bg-[#C9A037]/40 ml-auto" />
            <div className="w-8 h-[1px] bg-[#C9A037]/40" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* LEFT 2/3 */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#C9A037]/10 border border-[#C9A037]/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#C9A037]" />
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A037] font-inter font-semibold">
                  Abordagem gradativa
                </span>
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#EDE5CC] mb-4 leading-snug">
                Começa pequeno, cresce com resultado
              </h3>
              <p className="text-sm md:text-base text-[#EDE5CC]/55 font-inter leading-relaxed">
                A estratégia é validar antes de escalar. Começamos com uma verba
                mínima — em torno de R$&nbsp;17/dia (≈&nbsp;R$&nbsp;500/mês por
                plataforma) — para entender o que ressoa com criadores de
                cavalos e haras da região. Conforme os resultados aparecem,
                aumentamos a verba com segurança, investindo mais no que
                funciona e pausando o que não converte.
              </p>
            </div>

            {/* RIGHT 1/3 */}
            <div className="bg-[#132714] border border-[#C9A037]/20 p-8 text-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#EDE5CC]/40 font-inter mb-4">
                Verba mínima para iniciar
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="font-playfair text-3xl font-medium text-[#C9A037]">
                  R$ 17
                </span>
                <span className="text-sm text-[#EDE5CC]/40 font-inter">/dia</span>
              </div>
              <p className="text-xs text-[#EDE5CC]/35 font-inter mb-5">
                ≈ R$ 500/mês por plataforma
              </p>
              <div className="h-[1px] bg-[#C9A037]/15 mb-5" />
              <p className="text-xs text-[#EDE5CC]/40 font-inter leading-relaxed">
                Com R$&nbsp;17/dia já é possível testar, aprender e iniciar a
                captação de clientes para a Alfafa Santa Fé.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Meta Ads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-white border border-[#0B1A0D]/10 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-[#C9A037] flex-shrink-0" />
              <h3 className="font-playfair text-2xl font-medium text-[#0B1A0D]">
                Meta Ads
              </h3>
            </div>
            <p className="text-sm text-[#0B1A0D]/60 font-inter leading-relaxed mb-6">
              Instagram e Facebook — alcançamos públicos específicos por
              localização, interesse e comportamento. Ideal para impactar
              criadores de cavalos e produtores rurais que ainda não estão
              procurando por alfafa, mas podem se interessar ao ver conteúdo
              sobre nutrição animal premium.
            </p>
            <ul className="space-y-3">
              {[
                "Criadores de cavalos crioulos e haras no Sul do Brasil",
                "Pecuaristas e produtores rurais por localização",
                "Remarketing para quem visitou o perfil",
                "Campanhas institucionais de autoridade de marca",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#0B1A0D]/55 font-inter"
                >
                  <span className="text-[#C9A037]/70 flex-shrink-0 leading-5">
                    ◆
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Google Ads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="bg-[#0B1A0D] text-[#EDE5CC] p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-6 h-6 text-[#C9A037] flex-shrink-0" />
              <h3 className="font-playfair text-2xl font-medium text-[#EDE5CC]">
                Google Ads
              </h3>
            </div>
            <p className="text-sm text-[#EDE5CC]/55 font-inter leading-relaxed mb-6">
              Quem digita no Google &ldquo;alfafa para cavalos SC&rdquo; ou
              &ldquo;feno de alfafa premium&rdquo; já está com a intenção de
              comprar. O Google Ads coloca a Alfafa Santa Fé na frente dessas
              pessoas no exato momento em que elas estão procurando.
            </p>
            <ul className="space-y-3">
              {[
                "Busca por 'alfafa para cavalos' em SC e RS",
                "Busca por 'feno de alfafa premium' na região",
                "Leads diretos para pedidos e orçamentos",
                "Custo por clique controlado e segmentado",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#EDE5CC]/45 font-inter"
                >
                  <span className="text-[#C9A037]/60 flex-shrink-0 leading-5">
                    ◆
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs text-[#0B1A0D]/40 font-inter italic"
        >
          A verba de anúncios é paga diretamente pelo cliente às plataformas
          (Meta Business / Google Ads). Não há margem da ArtDesign sobre esse
          valor.
        </motion.p>
      </div>
    </section>
  );
}
