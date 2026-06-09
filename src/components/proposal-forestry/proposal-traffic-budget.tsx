"use client";

import { motion } from "framer-motion";
import { TreePine, TrendingUp, Search, Target } from "lucide-react";

export function ProposalForestryTrafficBudget() {
  return (
    <section className="relative py-24 md:py-32 bg-[#F5EAD5] text-[#0E0A06] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-32 bg-[#C47B20]/40" />
        <TreePine className="mx-4 h-5 w-5 text-[#C47B20]" />
        <div className="h-[1px] w-32 bg-[#C47B20]/40" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] font-semibold tracking-[0.3em] text-[#C47B20] uppercase"
          >
            Verba de Anúncios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-[#0E0A06] leading-[1.1]"
          >
            Como funciona o<br className="hidden md:block" />
            <span className="italic text-[#0E0A06]/60">investimento em tráfego pago</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-[#0E0A06]/70 font-inter font-light max-w-3xl mx-auto leading-relaxed"
          >
            A gestão do tráfego pago está inclusa no pacote mensal. A verba de anúncios — o valor que vai direto para Meta e Google — é paga separadamente, diretamente pelo cliente às plataformas. E o melhor: dá para começar pequeno e crescer conforme os resultados aparecem.
          </motion.p>
        </div>

        {/* Gradual approach callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0E0A06] text-[#F5EAD5] p-10 md:p-14 mb-14 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#C47B20]" />
          <div className="absolute top-0 left-0 w-[1px] h-8 bg-[#C47B20]" />
          <div className="absolute top-0 right-0 w-8 h-[1px] bg-[#C47B20]" />
          <div className="absolute top-0 right-0 w-[1px] h-8 bg-[#C47B20]" />
          <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-[#C47B20]" />
          <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-[#C47B20]" />
          <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-[#C47B20]" />
          <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-[#C47B20]" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-[#C47B20]" />
                <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C47B20] uppercase">
                  Abordagem gradativa
                </span>
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#F5EAD5] mb-5 leading-snug">
                Começa pequeno, cresce com resultado
              </h3>
              <p className="text-[#F5EAD5]/70 font-inter text-base leading-relaxed">
                Não é necessário investir grandes valores logo no início. Começamos com uma verba mínima, validamos quais públicos e mensagens funcionam melhor para cada frente da Jaquirana — e à medida que os resultados aparecem, aumentamos o investimento de forma estratégica. Sem desperdício, sem risco desnecessário.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center bg-[#1C1208] border border-[#C47B20]/20 p-8">
              <p className="text-[10px] font-semibold tracking-[0.3em] text-[#C47B20] uppercase mb-3">
                Verba mínima para iniciar
              </p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-playfair text-3xl font-medium text-[#C47B20]">R$&nbsp;10</span>
                <span className="text-[#F5EAD5]/60 text-sm">/dia</span>
              </div>
              <p className="text-[#F5EAD5]/50 text-xs font-inter">≈ R$ 300/mês por plataforma</p>
              <div className="mt-4 pt-4 border-t border-[#C47B20]/20 w-full">
                <p className="text-[#F5EAD5]/70 text-xs font-inter leading-relaxed">
                  Quanto mais verba, mais alcance e mais rápido os resultados aparecem — mas R$&nbsp;10/dia já é suficiente para testar, aprender e iniciar a captação de leads.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Meta + Google */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Meta Ads */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#0E0A06]/10 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#C47B20]/20">
              <div className="w-10 h-10 rounded-full bg-[#C47B20]/10 border border-[#C47B20]/30 flex items-center justify-center">
                <Target className="w-4 h-4 text-[#C47B20]" />
              </div>
              <h3 className="font-playfair text-2xl font-medium text-[#0E0A06]">Meta Ads</h3>
            </div>
            <p className="text-[#0E0A06]/70 font-inter text-sm leading-relaxed mb-6">
              Instagram e Facebook — alcançamos públicos específicos por localização, interesse e comportamento. Ideal para impactar proprietários rurais que <strong>ainda não estão procurando</strong> vender a floresta, mas podem se interessar ao ver o conteúdo certo.
            </p>
            <ul className="space-y-3">
              {[
                "Proprietários rurais com terras no RS e SC",
                "Compradores industriais por setor e cargo",
                "Remarketing para quem visitou o site",
                "Campanhas institucionais de autoridade de marca"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#0E0A06]/80 font-inter">
                  <span className="text-[#C47B20] mt-1.5 shrink-0 text-[6px]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Google Ads */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#0E0A06]/10 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#C47B20]/20">
              <div className="w-10 h-10 rounded-full bg-[#C47B20]/10 border border-[#C47B20]/30 flex items-center justify-center">
                <Search className="w-4 h-4 text-[#C47B20]" />
              </div>
              <h3 className="font-playfair text-2xl font-medium text-[#0E0A06]">Google Ads</h3>
            </div>
            <p className="text-[#0E0A06]/70 font-inter text-sm leading-relaxed mb-6">
              Quem digita no Google <em>"comprar floresta de pinus RS"</em> ou <em>"fornecedor de toras SC"</em> já está com a intenção de fechar negócio. O Google Ads coloca a Jaquirana na frente dessas pessoas no exato momento em que elas estão procurando.
            </p>
            <ul className="space-y-3">
              {[
                "Busca por 'compra de florestas' em RS e SC",
                "Busca por 'fornecedor de toras de pinus'",
                "Leads diretos para cada frente de negócio",
                "Custo por clique controlado e segmentado"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#0E0A06]/80 font-inter">
                  <span className="text-[#C47B20] mt-1.5 shrink-0 text-[6px]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[#0E0A06]/50 font-inter mt-10"
        >
          A verba de anúncios é paga diretamente pelo cliente às plataformas (Meta Business / Google Ads). Não há margem da ArtDesign sobre esse valor.
        </motion.p>
      </div>
    </section>
  );
}
