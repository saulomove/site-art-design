"use client";

import { motion } from "framer-motion";
import { Users, Award, Globe2, Rocket, CheckCircle2, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const stats = [
  { number: "50+", label: "Clientes Atendidos", icon: Users },
  { number: "16+", label: "Anos de Mercado", icon: Award },
  { number: "8", label: "Países com Clientes", icon: Globe2 },
  { number: "200+", label: "Projetos Entregues", icon: Rocket },
];

const differentials = [
  "Equipe multidisciplinar: design, código, tráfego e estratégia sob o mesmo teto",
  "Tecnologia proprietária: ArtAtende CRM para gestão de WhatsApp",
  "Presença global — clientes no Brasil, EUA, Emirados Árabes, Portugal, Espanha, Chile, Argentina e Colômbia",
  "Metodologia própria com foco em ROI e resultados mensuráveis",
  "Suporte dedicado: seu projeto tem um gestor responsável",
  "Produção audiovisual premium com Drone 4K e cinema quality",
];

const countries = [
  { country: "Brasil", flag: "🇧🇷", detail: "Sede — 18+ cidades" },
  { country: "Estados Unidos", flag: "🇺🇸", detail: "Texas" },
  { country: "Emirados Árabes", flag: "🇦🇪", detail: "Dubai" },
  { country: "Portugal", flag: "🇵🇹", detail: "Lisboa" },
  { country: "Espanha", flag: "🇪🇸", detail: "Madrid" },
  { country: "Chile", flag: "🇨🇱", detail: "Santiago • Talca" },
  { country: "Argentina", flag: "🇦🇷", detail: "Córdoba • San Francisco" },
  { country: "Colômbia", flag: "🇨🇴", detail: "Bogotá" },
];

const testimonials = [
  {
    name: "Astor Junior",
    role: "Diretor, Braspan MDF",
    content: "O sistema de Cashback para arquitetos foi um divisor de águas. Além da gestão de redes sociais impecável, a tecnologia desenvolvida pela ArtDesign fidelizou nossos parceiros de uma forma que não imaginávamos.",
    tags: ["Sistema Cashback", "Tráfego", "Drone"],
  },
  {
    name: "Jackson",
    role: "CEO, Grupo Karikal",
    content: "Transformação digital completa. Do CRM organizando nosso comercial até a gestão de vendas online. Ter uma agência que cuida de tudo, da foto do produto até o fechamento da venda, é essencial.",
    tags: ["Gestão 360", "CRM", "E-commerce"],
  },
  {
    name: "Cleyton e Richard",
    role: "Sócios, Pitz",
    content: "O sistema de gerenciamento de delivery e salão nos deu liberdade total. Somado ao marketing e a papelaria completa, nossa marca se consolidou como referência na região.",
    tags: ["Sistema Delivery", "Marketing", "Drone"],
  },
  {
    name: "Raquel e Mayara",
    role: "Sócias, Espaço Equilíbrio",
    content: "A implementação do CRM com Inteligência Artificial humanizada otimizou muito nosso tempo de resposta. O tráfego pago traz os leads, e a IA ajuda a converter. Casamento perfeito.",
    tags: ["CRM com IA", "Tráfego", "Sites"],
  },
  {
    name: "Diego",
    role: "Fundador, DC Tattoo Artes",
    content: "Lotamos nossos cursos presenciais e online com as campanhas de tráfego. O site novo passou a credibilidade que precisávamos para vender tickets mais altos.",
    tags: ["Lançamentos", "Tráfego", "Site"],
  },
  {
    name: "Laura Goetten",
    role: "Mentora & Especialista",
    content: "Minha autoridade digital cresceu exponencialmente. A gestão de tráfego para os cursos e a qualidade audiovisual do material trouxeram um público muito mais qualificado.",
    tags: ["Infoprodutos", "Tráfego", "Branding"],
  },
  {
    name: "Alexandre",
    role: "Grupo Abdalla",
    content: "A qualidade da captação com drone e vídeo elevou a percepção da nossa marca. A gestão das redes sociais mantém nossa comunicação alinhada com essa qualidade visual.",
    tags: ["Audiovisual", "Drone", "Social Media"],
  },
  {
    name: "Jackson",
    role: "Diretor, Akkor / Tresol",
    content: "A integração do comercial digital com o marketing fez toda a diferença. Não é apenas postar, é vender. A estrutura de CRM que montaram é robusta e funcional.",
    tags: ["Comercial Digital", "CRM", "Full Service"],
  },
  {
    name: "André",
    role: "Dehon Farmácia (Videira)",
    content: "Conseguimos comunicar a seriedade da farmácia de manipulação com uma linguagem moderna. O tráfego pago local nos trouxe novos clientes recorrentes.",
    tags: ["Tráfego Local", "Social Drive", "Vídeo"],
  },
  {
    name: "Gabriel",
    role: "MaqGases",
    content: "Atuação consistente no B2B. O site institucional e a presença no LinkedIn e redes sociais fortaleceram nossa marca perante as grandes indústrias.",
    tags: ["B2B", "Site", "Institucional"],
  },
  {
    name: "Alfredo e Gabriel",
    role: "Ilha BD",
    content: "Parceria sólida. Reformularam nosso site e assumiram o tráfego com muita competência. Resultado constante e atendimento ágil.",
    tags: ["Site Performance", "Tráfego", "Social"],
  },
  {
    name: "Aline Paese",
    role: "Empreendedora",
    content: "Os materiais impressos e a gestão digital conversam perfeitamente. Uma identidade visual única que se reflete em todos os pontos de contato da marca.",
    tags: ["Omnichannel", "Design", "Tráfego"],
  },
];

const ReviewCard = ({
  name,
  role,
  content,
  tags,
}: {
  name: string;
  role: string;
  content: string;
  tags: string[];
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6",
        "border-slate-200 bg-white hover:bg-slate-50 transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-2 mb-4">
        <div className="flex flex-col">
          <figcaption className="text-lg font-bold text-slate-900 leading-tight">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            {role}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <Quote className="w-6 h-6 text-brand-blue/20 mb-2" />
        <blockquote className="text-sm leading-relaxed text-slate-600 font-medium italic">
          &ldquo;{content}&rdquo;
        </blockquote>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </figure>
  );
};

export function ProposalAbout() {
  return (
    <>
      {/* ===== ABOUT SECTION ===== */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-brand-blue/10 border border-brand-blue/20 px-5 py-2 text-sm font-bold text-brand-blue uppercase tracking-wider"
            >
              Quem Somos
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight"
            >
              Não somos apenas uma agência.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">
                Somos seu braço direito.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-light"
            >
              A ArtDesign é uma agência full-service com <strong className="font-semibold text-slate-800">mais de 16 anos de mercado</strong> que une design de elite, tecnologia
              proprietária e performance digital para transformar negócios. Somos o parceiro que
              você estava procurando.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg shadow-slate-200/50 border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Differentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Por que a ArtDesign é{" "}
              <span className="text-brand-purple">diferente</span>?
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {differentials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-6 h-6 mt-0.5 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== COUNTRIES SECTION ===== */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-brand-green/10 border border-brand-green/20 px-5 py-2 text-sm font-bold text-brand-green uppercase tracking-wider mb-4"
            >
              Alcance Global
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight"
            >
              Clientes em <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">8 países</span> e 4 continentes
            </motion.h3>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {countries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-brand-blue/5 hover:border-brand-blue/20 transition-all group"
              >
                <span className="text-3xl">{item.flag}</span>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-slate-900 truncate">{item.country}</span>
                  <span className="text-xs text-slate-500 truncate">{item.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="container mx-auto px-4 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-orange/10 border border-brand-orange/20 px-5 py-2 text-sm font-bold text-brand-orange mb-4 uppercase tracking-wider"
          >
            Prova Social
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Resultados Reais de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">
              Quem Confia.
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 mt-4 max-w-2xl mx-auto"
          >
            Não acredite apenas na nossa palavra. Veja o que grandes empresários e marcas dizem sobre
            nossa entrega.
          </motion.p>
        </div>

        <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover speed={80}>
            {testimonials.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Marquee>

          {/* Gradients for smooth fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-50"></div>
        </div>
      </section>
    </>
  );
}
