"use client";

import { Button } from "@/components/ui/button";
import { WorldMap } from "@/components/features/world-map";
import { IndustriesSection } from "@/components/features/industries-section";
import { MarketplaceSection } from "@/components/features/marketplace-section";
import { TestimonialsSection } from "@/components/features/testimonials-section";
import { AIAutomationSection } from "@/components/features/ai-automation-section";
import { SpotlightCard } from "@/components/features/spotlight-card";
import { Marquee } from "@/components/ui/marquee";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, BarChart3, Laptop, Share2, Smartphone, CheckCircle2, AlertCircle, TrendingUp, Zap, Target, Rocket } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col gap-0 pb-0 overflow-x-hidden bg-background selection:bg-brand-purple/30">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-brand z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-screen flex-col items-center justify-center text-center pt-20 px-4 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 -z-10 bg-background">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-bl from-brand-orange/20 to-brand-green/20 rounded-full blur-[100px]"
          />
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-20 flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/50 backdrop-blur-md px-6 py-2 text-sm font-semibold text-brand-blue shadow-lg shadow-brand-blue/10 hover:shadow-brand-blue/20 transition-all cursor-default"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
            </span>
            Agência Full-Service Premium
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] max-w-5xl mx-auto"
          >
            Não somos apenas uma agência. <br />
            <span className="text-transparent bg-clip-text bg-gradient-brand animate-gradient-x">Somos seu Braço Direito!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light"
          >
            Transforme sua presença digital em autoridade indiscutível. Unimos <strong className="text-brand-purple font-semibold">Design de Elite</strong>, <strong className="text-brand-blue font-semibold">Tráfego Inteligente</strong> e <strong className="text-brand-green font-semibold">Tecnologia</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full justify-center"
          >
            <Button size="lg" className="h-16 px-12 text-lg rounded-full bg-brand-blue hover:bg-brand-blue/90 shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-1 transition-all duration-300" asChild>
              <Link href="/planos">
                Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 text-lg rounded-full border-2 bg-white/50 hover:bg-white hover:border-brand-purple/50 backdrop-blur-sm transition-all duration-300" asChild>
              <Link href="/cases">
                Ver Portfolio
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. REALITY CHECK Section */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block rounded-full bg-red-100 border border-red-200 px-4 py-1.5 text-sm font-bold text-red-600 mb-6 uppercase tracking-wider"
            >
              Alerta de Mercado ⚠️
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[0.9]">
              Você não precisa de mais "Marketing". <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Você precisa de Vendas.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto">
              O modelo tradicional quebrou. Se sua agência ainda foca em métricas de vaidade, <strong>seu negócio está sangrando dinheiro.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Genérico",
                desc: "Sua marca é julgada em milissegundos. Templates prontos e visuais amadores destroem sua autoridade antes mesmo do cliente ler uma palavra.",
                icon: AlertCircle,
                color: "text-red-600",
                bg: "bg-red-50",
                border: "group-hover:border-red-500/50"
              },
              {
                title: "Tráfego Cego",
                desc: "Impulsionar botão não é gestão. Sem Pixel, API de Conversão e Inteligência de Dados, você está apenas doando dinheiro para as plataformas.",
                icon: TrendingUp,
                color: "text-orange-600",
                bg: "bg-orange-50",
                border: "group-hover:border-orange-500/50"
              },
              {
                title: "Ausência de Funil",
                desc: "Postar todo dia sem um caminho claro de conversão é hobby, não business. Likes não pagam boletos. Onde está seu ROI real?",
                icon: Target,
                color: "text-amber-600",
                bg: "bg-amber-50",
                border: "group-hover:border-amber-500/50"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-300 group cursor-default relative overflow-hidden ${item.border}`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${item.color.replace('text', 'bg')}`} />

                <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 shadow-sm", item.bg)}>
                  <item.icon className={cn("h-8 w-8", item.color)} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-black transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GLOBAL PRESENCE MAP (Social Proof) */}
      <section className="py-20 bg-slate-50/50 backdrop-blur-sm border-y overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2 block">Alcance Global</span>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Nossa presença pelo mundo</h3>
            <p className="text-muted-foreground mt-2">De Caçador/SC para +14 cidades e 4 continentes.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY (The Solution) */}
      <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/10 via-slate-950 to-slate-950" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center mb-20">
            <div className="flex-1">
              <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">O Método ArtDesign</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Não vendemos serviços.<br />Entregamos <span className="text-brand-green">Ecossistemas.</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Abandonamos a ideia de "contratar um freelancer". Aqui, sua empresa passa por 4 etapas estruturadas para garantir crescimento previsível.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                { step: "01", title: "Diagnóstico", desc: "Análise profunda do cenário atual e concorrentes.", icon: Target },
                { step: "02", title: "Estratégia", desc: "Definição de canais, funis e identidade visual.", icon: Zap },
                { step: "03", title: "Execução", desc: "Design high-end, copy persuasiva e setup técnico.", icon: Rocket },
                { step: "04", title: "Otimização", desc: "Acompanhamento diário de métricas e ROI.", icon: BarChart3 }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">{s.step}</span>
                    <s.icon className="text-brand-green h-6 w-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-bold text-lg text-brand-green mb-2">{s.title}</h4>
                  <p className="text-sm text-slate-400">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 INDUSTRIES SERVED (New Section) */}
      <IndustriesSection />

      {/* 4.6 MARKETPLACE & E-COMMERCE (New Section) */}
      <MarketplaceSection />

      {/* 5. SERVICES SPOTLIGHT (The Vehicles) */}
      <section className="py-24 md:py-32 relative bg-slate-950 -mt-px">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6">
              Nossas Soluções
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ferramentas de <span className="text-transparent bg-clip-text bg-gradient-brand">Aceleração</span></h2>
            <p className="text-xl text-slate-400">Nossas frentes de atuação integradas para cobrir 360º do seu digital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightCard
              title="Social Media"
              description="Branding e conteúdo que cria fãs, não apenas seguidores. Posicionamento de autoridade."
              icon={Share2}
              href="/servicos/social"
              color="bg-brand-purple"
              delay={0}
            />
            <SpotlightCard
              title="Tráfego Pago"
              description="Anúncios no Meta e Google Ads focados em conversão e vendas. Chega de métricas de vaidade."
              icon={BarChart3}
              href="/servicos/trafego"
              color="bg-brand-blue"
              delay={1}
            />
            <SpotlightCard
              title="Websites Premium"
              description="O cartão de visitas mais importante do seu negócio. Rápido, bonito e vendedor."
              icon={Laptop}
              href="/servicos/sites"
              color="bg-brand-green"
              delay={2}
            />
            <SpotlightCard
              title="Tech & CRM"
              description="Automatize seu atendimento e organize seus leads. CRM e inteligência artificial."
              icon={Smartphone}
              href="/servicos/tech"
              color="bg-brand-orange"
              delay={3}
            />
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" className="bg-transparent rounded-full px-8 h-12 border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-base" asChild>
              <Link href="/servicos">Ver todos os detalhes <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. ARTATENDE CRM */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Content */}
            <div className="flex-1 space-y-8 order-2 lg:order-1">
              <div className="inline-block rounded-full bg-brand-purple/10 border border-brand-purple/20 px-4 py-1.5 text-sm font-bold text-brand-purple mb-2">
                TECNOLOGIA EXCLUSIVA
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Organize seu comercial com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">ArtAtende CRM.</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Chega de perder leads no WhatsApp. Nossa plataforma centraliza todo o seu atendimento, permitindo múltiplos atendentes em um único número, automação de respostas e gestão completa do funil de vendas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Múltiplos Atendentes (1 Número)",
                  "Chatbot & Automação com IA",
                  "Gestão de Funil (Kanban)",
                  "Relatórios de Performance",
                  "Disparo em Massa Seguro",
                  "Agendamento de Mensagens"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button className="h-14 px-8 rounded-full bg-brand-purple text-white hover:bg-brand-purple/90 font-bold text-base shadow-lg shadow-brand-purple/20" asChild>
                  <Link href="/servicos/crm">
                    Conhecer o ArtAtende
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual (CRM Mockup) */}
            <div className="flex-1 relative w-full order-1 lg:order-2">
              <div className="relative rounded-xl bg-slate-100 p-2 md:p-4 border border-slate-200 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-purple/5 to-brand-blue/5 rounded-xl -z-10" />

                {/* Browser Bar */}
                <div className="flex items-center gap-2 mb-3 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-6 bg-white/50 rounded-md w-full max-w-[200px]" />
                </div>

                {/* CRM Image */}
                <img
                  src="/crm-dashboard.png"
                  alt="Dashboard ArtAtende CRM"
                  className="w-full h-auto rounded-lg shadow-inner border border-slate-200/50"
                />

                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">WhatsApp API</p>
                      <p className="text-xs text-slate-500">Oficial & Estável</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6.5 HUMANIZED AI AUTOMATION (New) */}
      <AIAutomationSection />

      {/* 7. SYSTEMS DEVELOPMENT (AdmiCom) */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Visual (Laptop Mockup) */}
            <div className="flex-1 relative w-full">
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
                  <img src="/admicom-dashboard.png" className="h-full w-full object-cover object-top" alt="AdmiCom Dashboard" />
                </div>
              </div>
              <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
              </div>

              {/* Floating Data Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -right-4 top-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Gestão Fiscal</p>
                    <p className="text-xs text-slate-500">Comissões em Tempo Real</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-8">
              <div className="inline-block rounded-full bg-red-100 border border-red-200 px-4 py-1.5 text-sm font-bold text-red-600 mb-2">
                DESENVOLVIMENTO SOB MEDIDA
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Sistemas complexos simplificados para <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Franquias e Grandes Negócios.</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Precisa cruzar dados de vendas com comissões? Controlar estoque de múltiplas filiais? Desenvolvemos soluções robustas como o <strong>AdmiCom</strong>, focado em transparência financeira e gestão de performance entre Franqueadora e Franquiados.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Dashboards de BI Personalizados",
                  "Sistemas de Cálculo de Comissão",
                  "Integração de ERPs e CRMs",
                  "Plataformas para Franquias"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Target className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button className="h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-bold text-base" asChild>
                  <Link href="/contato">
                    Orçar Meu Sistema
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. PREMIUM AUDIOVISUAL (Drone & Production) */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-slate-900 border-y border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Visual (Drone Animation) */}
            <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
              <div className="aspect-square relative z-10 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotateZ: [0, 1, 0, -1, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-full h-full"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] rounded-full scale-75" />

                  {/* Drone Image */}
                  <img
                    src="https://www-cdn.djiits.com/dps/b011864ecbe030f5533bb4aa75654377.png"
                    alt="Drone 4K ArtDesign"
                    className="w-full h-auto object-contain drop-shadow-2xl brightness-110 contrast-125 relative z-10"
                  />
                </motion.div>
              </div>

              {/* Tech Specs Overlay */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute bottom-10 -left-4 md:-left-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Resolução 4K</p>
                    <p className="text-slate-400 text-xs">Cinema Quality</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-8">
              <div className="inline-block rounded-full bg-brand-blue/10 border border-brand-blue/20 px-4 py-1.5 text-sm font-bold text-brand-blue mb-2">
                PRODUÇÃO CINEMATOGRÁFICA
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Imagens que contam histórias e <span className="text-transparent bg-clip-text bg-gradient-brand">vendem sonhos.</span>
              </h2>

              <p className="text-lg text-slate-400 leading-relaxed font-light">
                Não basta um celular. Para posicionar sua marca no topo, você precisa de produção de elite. Nossa equipe de audiovisual utiliza equipamentos de cinema e <strong>Drones de Alta Performance</strong> para criar vídeos institucionais, comerciais e tours virtuais que prendem a atenção.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Captação Aérea em 4K (Drone)",
                  "Edição & Color Grading Profissional",
                  "Roteiros Persuasivos para Reels/TikTok",
                  "Cobertura de Eventos Corporativos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-slate-900" />
                    </div>
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button className="h-14 px-8 rounded-full bg-white text-slate-900 hover:bg-slate-200 font-bold text-base" asChild>
                  <Link href="/contato">
                    Solicitar Orçamento de Vídeo
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8.5 TESTIMONIALS (Social Proof) */}
      <TestimonialsSection />

      {/* 9. FINAL CTA */}
      <section className="py-32 container mx-auto px-4 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-blue/20 group border border-slate-100"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">Sua empresa está pronta para o <span className="text-transparent bg-clip-text bg-gradient-brand">próximo nível?</span></h2>
            <p className="text-xl text-slate-500">
              Não perca mais tempo com estratégias amadoras. Agende uma consultoria gratuita e descubra o potencial oculto do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-slate-900 text-white hover:bg-slate-800 font-bold hover:scale-105 transition-transform shadow-xl shadow-slate-900/20" asChild>
                <Link href="/contato">Agendar Consultoria Grátis</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div >
  );
}
