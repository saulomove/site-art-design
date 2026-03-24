// ============================================================
// PROPOSALS DATA LAYER
// ============================================================

export interface ProposalService {
  name: string;
  description: string;
  icon: string;
  items: string[];
  price?: string;
  priceNote?: string;
  priceType?: "monthly" | "project" | "daily";
}

export interface ProposalInvestment {
  totalMonthly: string;
  totalLabel?: string;
  originalPrice?: string;
  savings?: string;
  packageIncludes?: string[];
  breakdown?: { item: string; value: string }[];
  setupItems?: { item: string; value: string }[];
  setupFee?: string;
  paymentConditions?: string[];
  notes?: string[];
  profilePricing?: ProposalProfilePricing[];
}

export interface ProposalProfilePricing {
  profileName: string;
  profileHandle: string;
  services: string[];
  total: string;
}

export interface ProposalAnalysisPoint {
  title: string;
  description: string;
}

export interface ProposalAnalysis {
  intro: string;
  strengths: ProposalAnalysisPoint[];
  opportunities: ProposalAnalysisPoint[];
  conclusion: string;
}

export interface ProposalProfileAnalysisItem {
  profileName: string;
  profileHandle: string;
  profileRole: string;
  strengths: ProposalAnalysisPoint[];
  opportunities: ProposalAnalysisPoint[];
}

export interface ProposalPhase {
  number: number;
  title: string;
  objective: string;
  deliverables: string[];
  expectedResult: string;
}

export interface ProposalContentPillar {
  title: string;
  examples: string[];
  objective: string;
}

export interface ContentCalendarDay {
  day: number;
  type: string;
  format: string;
  theme: string;
  description: string;
  objective: string;
  cta?: string;
}

export interface ContentCalendarProfile {
  profileName: string;
  profileHandle: string;
  objective: string[];
  days: ContentCalendarDay[];
}

export interface Proposal {
  slug: string;
  clientName: string;
  contactName: string;
  greeting: string;
  clientLogo?: string;
  validUntil: string;
  whatsappNumber: string;
  highlights?: string[];
  services: ProposalService[];
  investment: ProposalInvestment;
  analysis?: ProposalAnalysis;
  profileAnalyses?: ProposalProfileAnalysisItem[];
  phases?: ProposalPhase[];
  contentPillars?: ProposalContentPillar[];
  differentials?: string[];
  positioningStatement?: string;
  brandEssence?: string;
  optionalServices?: string[];
  contentCalendar?: ContentCalendarProfile[];
  proposalType?: "social_media" | "crm";
}

// ============================================================
// DADOS DAS PROPOSTAS
// ============================================================

export const proposals: Proposal[] = [
  // ---- PROPOSTA EXEMPLO ----
  {
    slug: "empresa-exemplo-marco-2026",
    clientName: "Empresa Exemplo",
    contactName: "João",
    greeting:
      "Olá João! 👋 Preparamos algo especial para a Empresa Exemplo. Confira abaixo nossa proposta personalizada para transformar sua presença digital.",
    validUntil: "2026-03-22",
    whatsappNumber: "5549999999999",
    highlights: [
      "Equipe dedicada ao seu projeto",
      "+16 anos de experiência no mercado",
      "Resultados mensuráveis desde o 1º mês",
      "Tecnologia proprietária (ArtAtende CRM)",
    ],
    services: [
      {
        name: "Redes Sociais",
        description:
          "Gestão completa das redes com estratégia, criação e análise de performance.",
        icon: "share2",
        items: [
          "Planejamento mensal",
          "Criação de conteúdo",
          "Copywriting estratégico",
          "Relatórios de performance",
        ],
      },
      {
        name: "Tráfego Pago",
        description:
          "Campanhas de alta performance em Meta Ads e Google Ads.",
        icon: "target",
        items: [
          "Meta Ads (Instagram & Facebook)",
          "Google Ads (Pesquisa & Display)",
          "Remarketing inteligente",
          "Otimização contínua",
        ],
      },
      {
        name: "Website Premium",
        description:
          "Site institucional de alto padrão com foco em conversão.",
        icon: "globe",
        items: [
          "Design exclusivo",
          "Desenvolvimento responsivo",
          "SEO otimizado",
          "Integração com analytics",
        ],
      },
      {
        name: "Setup Inicial",
        description:
          "Configuração completa do ecossistema digital da empresa.",
        icon: "settings",
        items: [
          "Pixel & Tag Manager",
          "Métricas e conversões",
          "Integrações de CRM",
          "Treinamento da equipe",
        ],
      },
    ],
    investment: {
      totalMonthly: "R$ 4.500",
      breakdown: [
        { item: "Gestão de Redes Sociais", value: "R$ 1.500" },
        { item: "Tráfego Pago (gestão)", value: "R$ 1.200" },
        { item: "Manutenção do site", value: "R$ 800" },
        { item: "Relatórios e estratégia", value: "R$ 1.000" },
      ],
      setupFee: "R$ 3.500",
      paymentConditions: [
        "Pagamento mensal via boleto ou PIX",
        "Setup pode ser parcelado em até 3x",
        "Sem fidelidade — cancele quando quiser",
      ],
      notes: [
        "Valores de mídia (Meta Ads / Google Ads) não inclusos",
        "Hospedagem e domínio por conta do cliente",
      ],
    },
  },

  // ---- MOLDURAS VOLPATO ----
  {
    slug: "molduras-volpato",
    clientName: "Molduras Volpato",
    contactName: "Volpato",
    greeting:
      "Preparamos uma proposta estratégica completa para a Molduras Volpato. Confira abaixo como vamos transformar sua presença digital em um ecossistema de vendas premium.",
    validUntil: "2026-03-22",
    whatsappNumber: "5549999999999",
    brandEssence: "Curadoria de arte aplicada a ambientes.",
    positioningStatement:
      "A Molduras Volpato transforma ambientes por meio de quadros decorativos com curadoria, consultoria e produção própria, conectando arte, arquitetura e identidade.",

    highlights: [
      "Projeto estratégico por fases — crescimento sustentável",
      "Sem fidelização — permanência por resultado",
      "Transparência total de custos",
      "+16 anos de experiência da agência",
    ],

    // ---- ANÁLISE ESTRATÉGICA ----
    analysis: {
      intro:
        "Realizamos uma análise do posicionamento atual da marca para identificar pontos fortes, oportunidades de crescimento e sugestões estratégicas que podem ampliar a presença digital e as vendas online.",
      strengths: [
        {
          title: "Posicionamento Premium",
          description:
            "A comunicação transmite sofisticação, estética refinada, curadoria de arte e conexão com arquitetura. Isso diferencia a marca de lojas comuns de quadros decorativos.",
        },
        {
          title: "Narrativa de Marca Forte",
          description:
            "Posts sobre história da empresa, trajetória do fundador e produção própria criam uma narrativa muito forte. Marcas fortes vendem histórias, valores e propósito.",
        },
        {
          title: "Qualidade Estética",
          description:
            "As imagens publicadas possuem bom gosto, ambientes sofisticados e estética alinhada ao público de arquitetura. Isso cria desejo e percepção de valor.",
        },
        {
          title: "Conexão com Arquitetura",
          description:
            "A marca já se comunica com arquitetos, designers de interiores e projetos de decoração — abrindo portas para vendas recorrentes via especificação.",
        },
      ],
      opportunities: [
        {
          title: "Estrutura Comercial Digital",
          description:
            "Hoje falta site estruturado, e-commerce, landing pages e catálogo digital. Muitos potenciais clientes descobrem a marca, mas não encontram um caminho claro para comprar.",
        },
        {
          title: "Funil de Conteúdo",
          description:
            "O conteúdo atual é excelente para posicionamento, mas para aumentar vendas precisamos incluir prova social, diferenciais técnicos, demonstrações e conteúdos de conversão.",
        },
        {
          title: "Conteúdo para Arquitetos",
          description:
            "Arquitetos podem ser uma das maiores fontes de venda. Podemos fortalecer com guias de especificação, blocos 3D, biblioteca de materiais e apresentação de coleções.",
        },
        {
          title: "Uso de Vídeo",
          description:
            "Reels, vídeos curtos, bastidores e aplicações em ambientes são o formato que mais entrega alcance orgânico no Instagram atual.",
        },
      ],
      conclusion:
        "A Molduras Volpato já possui produto forte, estética diferenciada, narrativa de marca e posicionamento premium. Nosso trabalho é transformar esse potencial em crescimento digital estruturado.",
    },

    // ---- SERVIÇOS ----
    services: [
      {
        name: "Gestão de Redes Sociais",
        description:
          "Construir autoridade da marca, atrair clientes e gerar demanda para os produtos.",
        icon: "megaphone",
        items: [
          "Planejamento estratégico de conteúdo",
          "Calendário editorial mensal",
          "Criação de posts e legendas estratégicas",
          "Planejamento de Reels",
          "Otimização do perfil",
          "Análise de métricas e relatórios",
          "Reuniões estratégicas",
        ],
        price: "R$ 1.800",
        priceType: "monthly",
      },
      {
        name: "Google Meu Negócio",
        description:
          "Reforçar autoridade local, gerar confiança e aumentar descoberta orgânica.",
        icon: "mapPin",
        items: [
          "Otimização completa do perfil",
          "Cadastro de produtos e descrição estratégica",
          "Publicação periódica de conteúdo",
          "Monitoramento e resposta a avaliações",
          "Melhoria de posicionamento local",
        ],
        price: "R$ 350",
        priceType: "monthly",
      },
      {
        name: "Tráfego Meta Ads",
        description:
          "Campanhas de performance no Instagram e Facebook para gerar demanda e vendas.",
        icon: "target",
        items: [
          "Criação e estruturação de campanhas",
          "Públicos e funil de conversão",
          "Remarketing inteligente",
          "Otimização semanal",
          "Relatórios mensais",
          "Estratégia de crescimento",
        ],
        price: "R$ 1.200",
        priceType: "monthly",
        priceNote: "Investimento em anúncios não incluso",
      },
      {
        name: "Tráfego Google Ads",
        description:
          "Capturar demanda quente de quem já procura por quadros e decoração premium.",
        icon: "search",
        items: [
          "Campanhas de pesquisa e marca",
          "Campanhas institucionais e comerciais",
          "Configuração de conversões",
          "Remarketing",
          "Otimização e relatórios mensais",
        ],
        price: "R$ 900",
        priceType: "monthly",
        priceNote: "Investimento em anúncios não incluso",
      },
      {
        name: "Gestão Estratégica de Conteúdo",
        description:
          "Planejamento avançado de conteúdo focado em conversão por persona e funil.",
        icon: "fileText",
        items: [
          "Planejamento mensal de campanhas",
          "Pauta estratégica por persona",
          "Roteiro de vídeos",
          "Funil de conteúdo (topo, meio e fundo)",
          "Conteúdos para arquitetos e vendas",
        ],
        price: "R$ 700",
        priceType: "monthly",
      },
      {
        name: "Captação de Fotos e Vídeos",
        description:
          "Conteúdo profissional para elevar a percepção premium da marca.",
        icon: "camera",
        items: [
          "Captação de fotos profissionais",
          "Gravação de vídeos e Reels",
          "Bastidores da fábrica e showroom",
          "Material para anúncios",
          "Material para redes sociais",
        ],
        price: "R$ 900",
        priceType: "monthly",
        priceNote: "No pacote mensal. Diária avulsa: R$ 1.200",
      },
      {
        name: "Site Institucional Premium",
        description:
          "Criar a presença digital oficial e a 'casa da marca' no digital.",
        icon: "globe",
        items: [
          "Home, Sobre, Curadoria, Projetos",
          "Página para Arquitetos e Lojistas",
          "Consultoria e Contato/WhatsApp",
          "Design premium e SEO inicial",
          "Integração com analytics e pixel",
        ],
        price: "R$ 4.500",
        priceType: "project",
      },
      {
        name: "Implantação de E-commerce",
        description:
          "Profissionalizar a operação de vendas online e escalar o catálogo.",
        icon: "shoppingCart",
        items: [
          "Implantação da plataforma",
          "Configuração visual e categorias",
          "Configuração de pagamentos e fretes",
          "Cadastro inicial de produtos",
          "Ajustes estratégicos",
        ],
        price: "R$ 3.500",
        priceType: "project",
        priceNote: "Plataforma paga separadamente (ex: Nuvemshop)",
      },
      {
        name: "Inserção em Marketplaces",
        description:
          "Ampliar alcance com estratégia de mix controlado, preservando posicionamento premium.",
        icon: "store",
        items: [
          "Criação de contas e configuração",
          "Cadastro e padronização de produtos",
          "Configuração logística",
          "Acompanhamento de performance",
        ],
        price: "R$ 1.200",
        priceType: "project",
        priceNote: "Valor por marketplace",
      },
    ],

    // ---- FASES DO PROJETO ----
    phases: [
      {
        number: 1,
        title: "Fundamento e Posicionamento",
        objective:
          "Organizar marca, narrativa, presença e base comercial digital.",
        deliverables: [
          "Diagnóstico estratégico",
          "Definição de público-alvo e personas",
          "Gestão de Instagram",
          "Cronograma de conteúdo",
          "Captação inicial de foto/vídeo",
          "Otimização do Google Meu Negócio",
          "Meta Ads inicial",
          "Landing page ou site enxuto",
          "Setup de métricas",
        ],
        expectedResult:
          "Marca mais clara, comunicação premium consistente, primeiros leads qualificados.",
      },
      {
        number: 2,
        title: "Estrutura de Conversão",
        objective: "Criar o motor comercial digital.",
        deliverables: [
          "Site institucional completo",
          "Implantação do e-commerce",
          "Páginas de produto premium",
          "Estrutura para arquitetos e consultoria",
          "Meta Ads com funil completo",
          "Google Ads de intenção",
          "CRM comercial",
          "Captação recorrente de conteúdo",
        ],
        expectedResult:
          "Geração de vendas digitais, aumento de leads, maior previsibilidade comercial.",
      },
      {
        number: 3,
        title: "Escala e Canais",
        objective: "Expandir canais e públicos.",
        deliverables: [
          "Entrada em marketplaces selecionados",
          "Programa para Arquitetos",
          "Catálogo digital interativo",
          "Automações de e-mail/CRM",
          "Remarketing avançado",
          "Campanhas segmentadas B2B e B2C",
          "Otimização de SEO",
        ],
        expectedResult:
          "Crescimento de volume, recorrência, mais especificações e capilaridade digital.",
      },
      {
        number: 4,
        title: "Experiência Premium e Diferenciação",
        objective:
          "Transformar a Volpato em referência nacional dentro do nicho.",
        deliverables: [
          "Simulador de quadro no ambiente",
          "Showroom digital avançado",
          "Integração 3D Warehouse",
          "Área exclusiva para arquitetos",
          "Campanhas de branding cinematográficas",
          "Projetos especiais e collabs",
        ],
        expectedResult:
          "Diferenciação real, autoridade nacional, aumento do ticket médio.",
      },
    ],

    // ---- INVESTIMENTO ----
    investment: {
      totalMonthly: "R$ 3.600",
      totalLabel: "Pacote Completo ArtDesign",
      originalPrice: "R$ 5.850",
      savings: "R$ 2.250",
      packageIncludes: [
        "Gestão de Redes Sociais",
        "Planejamento Estratégico de Conteúdo",
        "Gestão Meta Ads",
        "Gestão Google Ads",
        "Google Meu Negócio",
        "Cronograma de Conteúdo",
        "Roteiros de Vídeo",
        "Acompanhamento Estratégico",
        "Captação de Conteúdo Mensal",
      ],
      breakdown: [
        { item: "Gestão de Redes Sociais", value: "R$ 1.800" },
        { item: "Gestão Estratégica de Conteúdo", value: "R$ 700" },
        { item: "Tráfego Meta Ads", value: "R$ 1.200" },
        { item: "Tráfego Google Ads", value: "R$ 900" },
        { item: "Google Meu Negócio", value: "R$ 350" },
        { item: "Captação de Conteúdo", value: "R$ 900" },
      ],
      setupItems: [
        { item: "Site Institucional Premium", value: "R$ 4.500" },
        { item: "Implantação de E-commerce", value: "R$ 3.500" },
        { item: "Inserção em Marketplace (por canal)", value: "R$ 1.200" },
      ],
      paymentConditions: [
        "Pagamento mensal via boleto ou PIX",
        "Sem fidelização — cancele quando quiser",
        "Projetos podem ser parcelados",
        "Evolução por fases conforme maturidade",
      ],
      notes: [
        "Investimento em mídia (Meta Ads / Google Ads) não incluso",
        "Plataformas de e-commerce pagas diretamente pelo cliente",
        "Domínio e hospedagem por conta do cliente",
        "Custos de deslocamento para captação presencial informados previamente",
        "A agência não coloca margem sobre custos externos — tudo pelo valor oficial",
      ],
    },

    // ---- DIFERENCIAIS ArtDesign ----
    differentials: [
      "Projeto estratégico completo, não apenas execução",
      "Transparência total de custos — sem margem sobre serviços externos",
      "Nenhuma fidelização obrigatória — permanência por resultado",
      "Cancelamento a qualquer momento, sem multa",
      "Crescimento estruturado por fases",
      "Foco em resultado real e ROI mensurável",
    ],

    // ---- PILARES DE CONTEÚDO ----
    contentPillars: [
      {
        title: "Inspiração e Ambiente",
        examples: [
          "Antes e depois de ambientes",
          "Composições de quadros",
          "Aplicação em projetos de arquitetura",
          "Ambientes reais de clientes",
        ],
        objective: "Gerar desejo",
      },
      {
        title: "Curadoria e Conceito",
        examples: [
          "Como nasce uma coleção",
          "Processo de curadoria",
          "Escolha de molduras e gravuras",
          "Tendências de decoração",
        ],
        objective: "Aumentar valor percebido",
      },
      {
        title: "Bastidores da Produção",
        examples: [
          "Montagem de molduras",
          "Escolha de materiais",
          "Produção de canvas",
          "Acabamento e embalagem",
        ],
        objective: "Mostrar qualidade e autenticidade",
      },
      {
        title: "Conteúdo Educativo",
        examples: [
          "Como escolher o tamanho ideal",
          "Como montar composições",
          "Qual quadro usar em cada ambiente",
          "Combinar quadros com painéis ripados",
        ],
        objective: "Reduzir dúvidas de compra",
      },
      {
        title: "Conteúdo Comercial",
        examples: [
          "Destaque de coleções",
          "Novidades e lançamentos",
          "Consultoria personalizada",
          "Promoções especiais",
        ],
        objective: "Gerar vendas",
      },
      {
        title: "Conteúdo para Arquitetos",
        examples: [
          "Blocos 3D e biblioteca",
          "Apresentação de coleções",
          "Quadros para projetos corporativos",
          "Especificação segura",
        ],
        objective: "Gerar especificações recorrentes",
      },
    ],
  },

  // ---- ADEMICON CAÇADOR & ARIEL LOPES ----
  {
    slug: "ademicon-cacador",
    clientName: "Ademicon Caçador & Ariel Lopes",
    contactName: "Ariel",
    greeting:
      "Preparamos uma proposta estratégica completa para estruturar e escalar a presença digital da Ademicon Caçador e do gestor Ariel Lopes. Confira abaixo como vamos transformar os dois perfis em um ecossistema digital de resultados.",
    validUntil: "2026-03-22",
    whatsappNumber: "5549999999999",

    highlights: [
      "Dois perfis estratégicos trabalhando juntos",
      "Sem fidelização — permanência por resultado",
      "Transparência total de custos",
      "+16 anos de experiência da agência",
    ],

    // ---- ANÁLISE DOS PERFIS ----
    profileAnalyses: [
      {
        profileName: "Ademicon Caçador",
        profileHandle: "@ademiconcacador",
        profileRole: "Perfil Institucional",
        strengths: [
          {
            title: "Base de Comunicação Ativa",
            description:
              "O perfil não está parado. Há publicações sobre consórcio, investimento, agro, veículos, imóveis, oportunidades e eventos — a unidade já entendeu que precisa aparecer.",
          },
          {
            title: "Presença Local e Regional",
            description:
              "Posts ligados a Caçador, eventos locais, patrocínios e aniversários da cidade. Excelente para fortalecer posicionamento regional e gerar identificação.",
          },
          {
            title: "Sinais de Autoridade",
            description:
              "Conteúdos como marca de resultados, unidade certificada, presença em ações locais e educativos sobre consórcio constroem percepção de empresa séria.",
          },
          {
            title: "Potencial Comercial Real",
            description:
              "O nicho é excelente para transformar conteúdo em direct, WhatsApp, cadastro, agendamento e visitas na unidade. Não é só perfil bonito — tem potencial de conversão.",
          },
        ],
        opportunities: [
          {
            title: "Linha Editorial Estratégica",
            description:
              "Falta estrutura de funil clara. Organizar conteúdo por pilares: autoridade, educação financeira, quebra de objeção, prova social e conversão.",
          },
          {
            title: "Comunicação Personalizada",
            description:
              "Alguns posts falam de consórcio de forma genérica. Precisa explorar diferenciais da unidade de Caçador, atendimento local, histórias reais e contexto regional.",
          },
          {
            title: "Prova Social Forte",
            description:
              "O mercado de consórcio precisa de confiança. Faltam bastidores de atendimento, casos reais, contemplações, comparativos e validação do processo.",
          },
          {
            title: "Captação de Leads",
            description:
              "O Instagram atua mais como vitrine do que máquina de leads. Faltam CTA inteligente, landing pages, integração com formulários e automação para WhatsApp.",
          },
        ],
      },
      {
        profileName: "Ariel Lopes",
        profileHandle: "@ariellopes_ademicon",
        profileRole: "Perfil do Gestor",
        strengths: [
          {
            title: "Personalidade Forte",
            description:
              "Maior ativo do perfil. Ariel aparece com opinião, energia, motivação, posicionamento, mentalidade e liderança — perfis pessoais fortes geram mais conexão e alcance.",
          },
          {
            title: "Potencial de Autoridade Pessoal",
            description:
              "Aparece como gestor, líder, mentor — com discurso de crescimento. Espaço para posicioná-lo como referência local e regional no segmento.",
          },
          {
            title: "Conteúdo Humano + Comercial",
            description:
              "Posts de oportunidade, mentalidade, bastidores, casal, trabalho, evento e reflexão. Esse formato humaniza e cria conexão genuína com o público.",
          },
          {
            title: "Maior Potencial de Influência",
            description:
              "Pode ser grande acelerador de vendas, recrutamento, autoridade, parcerias, palestras, eventos, networking e posicionamento como gestor forte da unidade.",
          },
        ],
        opportunities: [
          {
            title: "Posicionamento Refinado",
            description:
              "Hoje oscila entre motivacional, humor, carreira, opinião e reflexões soltas. Precisa lapidar para que o público entenda: este cara domina planejamento e liderança.",
          },
          {
            title: "Conversão dos Conteúdos",
            description:
              "Muitos conteúdos têm bom gancho, mas faltam CTA estratégico, oferta bem amarrada, continuidade de funil e conexão com WhatsApp/formulário.",
          },
          {
            title: "Marca Pessoal Estruturada",
            description:
              "Ariel já tem presença, mas pode virar algo maior: gestor referência, especialista em planejamento, rosto comercial da unidade e figura pública local no nicho.",
          },
          {
            title: "Consistência Visual e Narrativa",
            description:
              "Criar identidade clara de líder acessível, gestor de resultados, consultor de visão, autoridade em planejamento e construtor de oportunidades.",
          },
        ],
      },
    ],

    // ---- SERVIÇOS ----
    services: [
      {
        name: "Gestão de Redes Sociais",
        description:
          "Estruturar e administrar os perfis digitais com foco em crescimento, autoridade e geração de oportunidades comerciais.",
        icon: "megaphone",
        items: [
          "Planejamento estratégico de conteúdo",
          "Calendário editorial",
          "Definição de pilares de conteúdo",
          "Criação de campanhas",
          "Acompanhamento de performance",
          "Reuniões estratégicas",
        ],
        price: "R$ 1.500",
        priceType: "monthly",
      },
      {
        name: "Criação de Conteúdo",
        description:
          "Produção completa de conteúdos para redes sociais com foco em autoridade, educação e conversão.",
        icon: "palette",
        items: [
          "Posts e carrosséis",
          "Vídeos curtos e Reels",
          "Roteiros estratégicos",
          "Legendas e copywriting",
          "Chamadas de conversão",
          "Conteúdos de quebra de objeção",
        ],
        price: "R$ 1.200",
        priceType: "monthly",
      },
      {
        name: "Captação de Imagens e Vídeos",
        description:
          "Produção de materiais reais da unidade e do gestor para alimentar redes, campanhas e site.",
        icon: "camera",
        items: [
          "Captação de vídeos e fotos",
          "Gravação de conteúdos estratégicos",
          "Vídeos educativos e institucionais",
          "Conteúdos para autoridade",
          "Material para anúncios",
        ],
        price: "R$ 1.000",
        priceType: "monthly",
      },
      {
        name: "Tráfego Meta Ads",
        description:
          "Campanhas pagas no Instagram e Facebook para geração de leads, alcance e fortalecimento de marca.",
        icon: "target",
        items: [
          "Geração de leads qualificados",
          "Aumento de alcance",
          "Fortalecimento de marca",
          "Captação de clientes",
          "Recrutamento de consultores",
          "Otimização e relatórios",
        ],
        price: "R$ 900",
        priceType: "monthly",
        priceNote: "Investimento em anúncios não incluso",
      },
      {
        name: "Tráfego Google Ads",
        description:
          "Campanhas focadas em quem já está pesquisando por consórcio, planejamento financeiro e investimento.",
        icon: "search",
        items: [
          "Campanhas de pesquisa",
          "Consórcio imobiliário e veículos",
          "Investimento e planejamento financeiro",
          "Público próximo da decisão de compra",
          "Configuração de conversões",
          "Relatórios mensais",
        ],
        price: "R$ 900",
        priceType: "monthly",
        priceNote: "Investimento em anúncios não incluso",
      },
      {
        name: "Google Meu Negócio",
        description:
          "Estruturação e gestão da presença no Google para aparecer quando alguém pesquisa por serviços na cidade.",
        icon: "mapPin",
        items: [
          "Otimização completa do perfil",
          "Publicação de conteúdos",
          "Gestão de avaliações",
          "Posicionamento local",
          "Melhoria de descoberta orgânica",
        ],
        price: "R$ 400",
        priceType: "monthly",
      },
      {
        name: "Site Institucional",
        description:
          "Site profissional para fortalecer credibilidade, explicar serviços, gerar leads e ranquear no Google.",
        icon: "globe",
        items: [
          "Design profissional e responsivo",
          "Páginas de serviços e consórcio",
          "Formulários de captação",
          "SEO inicial",
          "Integração com analytics e pixel",
        ],
        price: "R$ 3.500",
        priceType: "project",
      },
      {
        name: "Landing Pages de Captação",
        description:
          "Páginas específicas para captação de clientes por produto: imóveis, veículos, agro, investimento.",
        icon: "fileText",
        items: [
          "Página focada em conversão",
          "Formulários de captação",
          "Integração com WhatsApp",
          "Design persuasivo",
          "Teste e otimização",
        ],
        price: "R$ 800",
        priceType: "project",
        priceNote: "Valor por página",
      },
      {
        name: "Landing Pages para Consultores",
        description:
          "Cada consultor poderá ter sua própria página para captar clientes com rastreamento individual.",
        icon: "zap",
        items: [
          "Página individual por consultor",
          "Formulário próprio",
          "Botão WhatsApp direto",
          "Rastreio por vendedor",
          "Geração de leads individual",
        ],
        price: "R$ 500",
        priceType: "project",
        priceNote: "Valor por página",
      },
    ],

    // ---- FASES DO PROJETO ----
    phases: [
      {
        number: 1,
        title: "Estruturação",
        objective:
          "Organizar redes sociais, iniciar produção de conteúdo estratégico e começar campanhas.",
        deliverables: [
          "Diagnóstico e planejamento estratégico",
          "Organização dos dois perfis",
          "Produção de conteúdo inicial",
          "Captação de vídeos e fotos",
          "Início de campanhas Meta Ads",
          "Otimização do Google Meu Negócio",
          "Setup de métricas e pixel",
        ],
        expectedResult:
          "Perfis organizados, comunicação consistente, primeiros leads qualificados.",
      },
      {
        number: 2,
        title: "Captação",
        objective:
          "Criar motor comercial digital com landing pages, formulários e campanhas mais agressivas.",
        deliverables: [
          "Site institucional completo",
          "Landing pages por produto",
          "Formulários de captação",
          "Integração de leads com WhatsApp",
          "Google Ads ativo",
          "Campanhas com funil completo",
          "Conteúdo de conversão intenso",
        ],
        expectedResult:
          "Geração consistente de leads, aumento de oportunidades comerciais e previsibilidade.",
      },
      {
        number: 3,
        title: "Escala",
        objective:
          "Expandir tráfego, criar páginas individuais para consultores e implementar automações.",
        deliverables: [
          "Expansão de tráfego pago",
          "Landing pages para consultores",
          "Funis comerciais avançados",
          "Automações de WhatsApp",
          "CRM de gestão de leads",
          "SEO para Google",
          "Relatórios estratégicos",
        ],
        expectedResult:
          "Crescimento escalável, equipe usando o digital como ferramenta de vendas, autoridade regional consolidada.",
      },
    ],

    // ---- INVESTIMENTO ----
    investment: {
      totalMonthly: "R$ 2.900",
      totalLabel: "Pacote Integrado — 2 Perfis",
      originalPrice: "R$ 3.800",
      savings: "R$ 900",
      profilePricing: [
        {
          profileName: "Ademicon Caçador",
          profileHandle: "@ademiconcacador",
          services: [
            "Gestão de Redes Sociais",
            "Criação de Conteúdo",
            "Captação de Imagens e Vídeos",
            "Tráfego Meta Ads",
            "Tráfego Google Ads",
            "Google Meu Negócio",
            "Site Institucional",
            "Landing Pages de Captação",
            "Landing Pages para Consultores",
          ],
          total: "R$ 1.900",
        },
        {
          profileName: "Ariel Lopes",
          profileHandle: "@ariellopes_ademicon",
          services: [
            "Gestão de Redes Sociais",
            "Criação de Conteúdo",
            "Captação de Imagens e Vídeos",
            "Tráfego Meta Ads",
            "Tráfego Google Ads",
            "Google Meu Negócio",
            "Site Institucional",
            "Landing Pages de Captação",
            "Landing Pages para Consultores",
          ],
          total: "R$ 1.900",
        },
      ],
      packageIncludes: [
        "Gestão completa dos dois perfis",
        "Planejamento estratégico integrado",
        "Conteúdos para os dois perfis",
        "Captação de imagens e vídeos",
        "Meta Ads para ambos os perfis",
        "Google Ads",
        "Google Meu Negócio",
        "Reuniões de alinhamento",
      ],
      paymentConditions: [
        "Pagamento mensal via boleto ou PIX",
        "Sem fidelização — cancele quando quiser",
        "Projetos podem ser parcelados",
        "Evolução por fases conforme resultados",
      ],
      notes: [
        "Investimento em mídia (Meta Ads / Google Ads) não incluso",
        "Domínio e hospedagem por conta do cliente",
        "Ferramentas e plataformas externas pelo valor oficial, sem margem",
        "Custos de deslocamento para captação presencial informados previamente",
      ],
    },

    // ---- DIFERENCIAIS ----
    differentials: [
      "Dois perfis estratégicos integrados — institucional + marca pessoal",
      "Transparência total de custos — sem margem sobre serviços externos",
      "Nenhuma fidelização obrigatória — permanência por resultado",
      "Cancelamento a qualquer momento, sem multa",
      "Crescimento estruturado por fases",
      "Foco em geração de leads e conversão real",
    ],

    // ---- SERVIÇOS OPCIONAIS ----
    optionalServices: [
      "CRM de gestão de leads",
      "Automação de WhatsApp",
      "Funil de vendas digital",
      "E-mail marketing / nutrição de leads",
      "SEO para Google + Blog educativo",
      "Relatórios estratégicos avançados",
      "Treinamentos para equipe comercial",
      "Produção de materiais comerciais",
      "Captação de depoimentos e cases",
      "Gestão de campanhas especiais",
    ],

    // ---- CALENDÁRIO DE CONTEÚDO ----
    contentCalendar: [
      {
        profileName: "Ademicon Caçador",
        profileHandle: "@ademiconcacador",
        objective: [
          "Fortalecer a marca da unidade",
          "Educar o público sobre consórcio",
          "Gerar confiança",
          "Gerar leads para a equipe comercial",
        ],
        days: [
          {
            day: 1,
            type: "Autoridade",
            format: "Reels",
            theme: "Por que o consórcio está crescendo tanto no Brasil",
            description:
              "Com os juros altos dos financiamentos, cada vez mais pessoas estão descobrindo uma alternativa mais inteligente: o consórcio. Sem juros, com planejamento e com poder de compra à vista.",
            objective: "Gerar curiosidade, educar e posicionar como especialista",
            cta: "Quer entender se consórcio faz sentido para você? Nos chame no WhatsApp.",
          },
          {
            day: 2,
            type: "Educação",
            format: "Carrossel",
            theme: "3 erros que impedem muitas pessoas de comprar um imóvel",
            description:
              "1️⃣ Esperar o momento perfeito \n2️⃣ Acreditar que precisa ter muito dinheiro \n3️⃣ Não ter planejamento \n\nÚltimo slide: Como o consórcio pode ajudar.",
            objective: "Educar, gerar reflexão e atrair interessados",
          },
          {
            day: 3,
            type: "Prova Social",
            format: "Reels",
            theme: "Como funciona uma contemplação",
            description:
              "Explicação simples sobre assembleia, sorteio e lance. Conteúdo que tira dúvidas e gera segurança no público.",
            objective: "Tirar dúvidas e gerar segurança",
          },
          {
            day: 4,
            type: "Autoridade Local",
            format: "Post",
            theme: "Por que escolher a Ademicon Caçador",
            description:
              "Atendimento local, consultoria personalizada, planejamento estratégico e presença forte na região.",
            objective: "Reforçar confiança e fortalecer marca local",
          },
          {
            day: 5,
            type: "Educação",
            format: "Reels",
            theme: "Consórcio ou financiamento: qual a diferença?",
            description:
              "Explicação simples sobre juros, planejamento e poder de compra. Comparativo que esclarece e gera interesse.",
            objective: "Esclarecer dúvidas e gerar interesse",
          },
          {
            day: 6,
            type: "Conversão",
            format: "Reels",
            theme: "Simulação simples",
            description:
              "Com cerca de R$350 a R$400 por mês você já pode iniciar um planejamento para um crédito de até R$100 mil.",
            objective: "Gerar leads e despertar interesse",
            cta: "Nos chame para fazer uma simulação.",
          },
          {
            day: 7,
            type: "Conexão Local",
            format: "Post",
            theme: "Ademicon Caçador — Planejamento para a região",
            description:
              "Mensagem reforçando atendimento próximo, planejamento financeiro e apoio ao crescimento das famílias da região.",
            objective: "Fortalecer conexão local e humanizar a marca",
          },
        ],
      },
      {
        profileName: "Ariel Lopes",
        profileHandle: "@ariellopes_ademicon",
        objective: [
          "Fortalecer autoridade pessoal",
          "Gerar conexão com o público",
          "Atrair clientes e consultores",
          "Posicionar Ariel como referência",
        ],
        days: [
          {
            day: 1,
            type: "Mentalidade",
            format: "Reels",
            theme: "A maior mentira sobre estabilidade",
            description:
              "Muita gente acredita que estabilidade é ter um emprego fixo. Mas quando sua renda depende da decisão de outra pessoa… isso não é estabilidade.",
            objective: "Gerar reflexão e aumentar alcance",
          },
          {
            day: 2,
            type: "Autoridade",
            format: "Reels",
            theme: "O que ninguém te conta sobre planejamento financeiro",
            description:
              "Planejamento não é para quem já tem dinheiro. Planejamento é justamente o caminho para construir patrimônio.",
            objective: "Posicionar Ariel como especialista",
          },
          {
            day: 3,
            type: "Educação",
            format: "Carrossel",
            theme: "Consórcio pode ser investimento?",
            description:
              "1️⃣ Sim, quando usado com estratégia \n2️⃣ Permite planejamento \n3️⃣ Possibilidade de aquisição de imóveis \n4️⃣ Construção de patrimônio",
            objective: "Educar e gerar curiosidade",
          },
          {
            day: 4,
            type: "Bastidores",
            format: "Reels",
            theme: "Bastidores de um dia de trabalho",
            description:
              "Mostrar reuniões, atendimentos, planejamento e gravação de conteúdos. Humanizar e gerar conexão.",
            objective: "Humanizar e gerar conexão",
          },
          {
            day: 5,
            type: "Oportunidade",
            format: "Reels",
            theme: "Você quer crescer profissionalmente?",
            description:
              "Falar sobre oportunidade, carreira e crescimento dentro da Ademicon. Conteúdo voltado para recrutamento de consultores.",
            objective: "Recrutamento de consultores",
          },
          {
            day: 6,
            type: "Reflexão",
            format: "Reels",
            theme: "O tempo vai passar de qualquer forma",
            description:
              "Daqui a 5 anos você pode olhar para trás e ver crescimento… ou perceber que não começou.",
            objective: "Gerar reflexão e aumentar engajamento",
          },
          {
            day: 7,
            type: "Conversão",
            format: "Reels",
            theme: "Quanto você quer ganhar por mês?",
            description:
              "Me diga quanto você quer ganhar por mês. E nós mostramos o caminho para construir isso.",
            objective: "Gerar oportunidades e iniciar conversas",
            cta: "Digite SIM nos comentários.",
          },
        ],
      },
    ],
  },

  // ---- DR. RICARDO NICOLAS — ODONTOLOGIA ESPECIALIZADA ----
  {
    slug: "dr-ricardo-nicolas",
    clientName: "Dr. Ricardo Nicolas — Odontologia Especializada",
    contactName: "Ricardo",
    greeting:
      "Olá Dr. Ricardo! 👋 Preparamos uma proposta estratégica completa para transformar o perfil @odontologia_especializada_rn em uma máquina de agendamentos. Confira abaixo como vamos posicionar você como referência odontológica na região.",
    validUntil: "2026-03-27",
    whatsappNumber: "5549988446685",

    highlights: [
      "Estratégia dupla: entrada popular + ticket alto premium",
      "Sem fidelização — permanência por resultado",
      "Captação presencial de conteúdo profissional",
      "+16 anos de experiência da agência",
    ],

    // ---- ANÁLISE ESTRATÉGICA ----
    analysis: {
      intro:
        "Realizamos uma análise completa do perfil @odontologia_especializada_rn e identificamos um cenário com base sólida, mas com enorme potencial subutilizado. Com as estratégias certas, o Instagram pode se tornar o principal canal de captação de pacientes para a clínica.",
      strengths: [
        {
          title: "Autoridade do Profissional",
          description:
            "A presença do dentista no conteúdo gera confiança imediata. Pacientes querem ver quem vai cuidar do sorriso deles — e isso é ouro no digital.",
        },
        {
          title: "Ambiente Real da Clínica",
          description:
            "Mostrar a clínica real humaniza a marca, transmite profissionalismo e reduz a ansiedade de novos pacientes. Isso é um diferencial competitivo forte.",
        },
        {
          title: "Uso de Vídeo (Reels)",
          description:
            "O perfil já começou a usar Reels — o formato que mais entrega alcance orgânico no Instagram atualmente. Isso mostra que há abertura para conteúdo dinâmico.",
        },
        {
          title: "Tema 'Sorriso' Bem Explorado",
          description:
            "O nicho odontológico tem altíssimo potencial de viralização com conteúdos de estética, antes e depois, e transformações. O tema já está alinhado com o que funciona.",
        },
      ],
      opportunities: [
        {
          title: "Frequência de Publicação",
          description:
            "Com apenas 4 posts, o perfil está praticamente 'morto' para o algoritmo. A frequência precisa ser diária no primeiro mês para reativar o alcance e ganhar tração.",
        },
        {
          title: "Identidade Visual e Branding",
          description:
            "Falta padrão visual nas publicações. Um branding consistente com paleta de cores, tipografia e estilo fotográfico eleva a percepção de profissionalismo e valor do serviço.",
        },
        {
          title: "Copywriting e CTA de Conversão",
          description:
            "As legendas atuais não direcionam para ação. Precisam de copywriting estratégico com chamadas claras para agendamento via WhatsApp, explorando dores e desejos dos pacientes.",
        },
        {
          title: "Prova Social e Posicionamento",
          description:
            "Faltam antes/depois, depoimentos e casos reais que geram confiança. Também não há um posicionamento claro — é preciso definir se é premium, acessível ou especialista.",
        },
        {
          title: "Exploração das Dores do Paciente",
          description:
            "O conteúdo não explora as dores emocionais do paciente: medo de dentista, insegurança com o sorriso, autoestima. Esses gatilhos são decisivos para gerar ação.",
        },
      ],
      conclusion:
        "O perfil já tem o ingrediente mais valioso: um profissional presente e disposto a aparecer. Com estratégia, frequência, conteúdo profissional e tráfego pago, vamos transformar o Instagram em canal de agendamentos e posicionar o Dr. Ricardo como referência odontológica da região.",
    },

    // ---- SERVIÇOS ----
    services: [
      {
        name: "Gestão de Redes Sociais",
        description:
          "Estruturar e administrar o perfil do Instagram com foco em crescimento, autoridade e geração de agendamentos.",
        icon: "megaphone",
        items: [
          "Planejamento estratégico mensal",
          "1 post por dia (primeiros 30 dias)",
          "Reels + Carrosséis + Posts educativos",
          "Copywriting profissional (legendas que vendem)",
          "Estratégia por pilar: Autoridade / Dor / Estética / Prova Social / Conversão",
          "CTA focado em WhatsApp",
          "Análise de métricas e relatórios",
        ],
        price: "R$ 1.000",
        priceType: "monthly",
      },
      {
        name: "Captação de Conteúdo Profissional",
        description:
          "Produção de fotos e vídeos reais na clínica — o diferencial que separa amador de profissional.",
        icon: "camera",
        items: [
          "Visita presencial na clínica",
          "Fotos profissionais (clínica + profissional)",
          "Gravação de Reels estratégicos",
          "Direcionamento e roteiro de conteúdo",
          "Conteúdo de bastidores e atendimento",
          "Material para anúncios",
        ],
        price: "R$ 700",
        priceType: "monthly",
      },
      {
        name: "Tráfego Pago (Meta Ads)",
        description:
          "Campanhas de performance no Instagram e Facebook para gerar agendamentos e alcance local.",
        icon: "target",
        items: [
          "Campanhas de agendamento via WhatsApp",
          "Campanhas de reconhecimento local",
          "Campanhas por procedimento (alinhador, limpeza, estética)",
          "Segmentação: Dor / Estética / Remarketing",
          "Otimização semanal e testes A/B",
          "Relatórios de performance",
        ],
        price: "R$ 600",
        priceType: "monthly",
        priceNote: "Investimento em anúncios não incluso (sugestão inicial: R$10/dia)",
      },
      {
        name: "Google Meu Negócio",
        description:
          "Otimização da presença no Google para atrair pacientes que já estão pesquisando por dentista na região.",
        icon: "mapPin",
        items: [
          "Otimização completa do perfil",
          "Gestão de avaliações e respostas",
          "Postagens semanais",
          "SEO local para aparecer no Google",
          "Melhoria de posicionamento regional",
        ],
        price: "R$ 400",
        priceType: "monthly",
      },
      {
        name: "Site Institucional",
        description:
          "Site profissional para aparecer no Google, gerar leads e aumentar a autoridade digital.",
        icon: "globe",
        items: [
          "Design profissional e responsivo",
          "Páginas de procedimentos",
          "Formulário de agendamento",
          "SEO otimizado",
          "Integração com analytics e pixel",
        ],
        price: "R$ 3.500",
        priceType: "project",
        priceNote: "Apresentado como próximo passo estratégico de crescimento",
      },
    ],

    // ---- FASES DO PROJETO ----
    phases: [
      {
        number: 1,
        title: "Ativação e Posicionamento",
        objective:
          "Reativar o perfil, criar identidade visual, iniciar produção de conteúdo diário e posicionar o Dr. Ricardo como referência.",
        deliverables: [
          "Diagnóstico e planejamento estratégico",
          "Criação de identidade visual do perfil",
          "Otimização completa do Instagram",
          "Produção de conteúdo diário (30 dias)",
          "Captação presencial de fotos e vídeos",
          "Otimização do Google Meu Negócio",
          "Setup de métricas e pixel",
        ],
        expectedResult:
          "Perfil ativo, comunicação profissional, primeiros acessos e agendamentos orgânicos.",
      },
      {
        number: 2,
        title: "Tração e Conversão",
        objective:
          "Ativar tráfego pago, criar motor de agendamentos via WhatsApp e escalar a presença local.",
        deliverables: [
          "Início de campanhas Meta Ads",
          "Campanhas por procedimento",
          "Segmentação de públicos (Dor / Estética / Remarketing)",
          "CTA inteligente integrado com WhatsApp",
          "Captação recorrente de conteúdo",
          "Prova social: depoimentos e antes/depois",
          "Relatórios de performance",
        ],
        expectedResult:
          "Geração consistente de agendamentos, aumento de visibilidade local e previsibilidade comercial.",
      },
      {
        number: 3,
        title: "Escala e Autoridade",
        objective:
          "Expandir presença digital com site, Google Ads e posicionamento como referência na região.",
        deliverables: [
          "Site institucional otimizado",
          "Google Ads (pesquisa local)",
          "SEO para Google orgânico",
          "Funil de conteúdo avançado",
          "Automação de agendamento",
          "Conteúdos de alto impacto (transformações, cases)",
          "Campanhas de branding regional",
        ],
        expectedResult:
          "Autoridade digital consolidada, múltiplos canais de captação, crescimento sustentável de pacientes.",
      },
    ],

    // ---- CALENDÁRIO DE CONTEÚDO ----
    contentCalendar: [
      {
        profileName: "Dr. Ricardo Nicolas",
        profileHandle: "@odontologia_especializada_rn",
        objective: [
          "Reativar o perfil com frequência diária",
          "Posicionar como referência odontológica",
          "Gerar agendamentos via WhatsApp",
          "Criar autoridade e confiança",
        ],
        days: [
          {
            day: 1,
            type: "Educação",
            format: "Reels",
            theme: "Você pode estar com problema e não sabe",
            description:
              "Conteúdo de alerta sobre problemas dentários silenciosos — cáries ocultas, gengivite, bruxismo. Gera curiosidade e preocupação saudável que leva o paciente a buscar avaliação.",
            objective: "Gerar curiosidade, educar e ativar decisão",
            cta: "Quando foi sua última avaliação? Chame no WhatsApp e agende.",
          },
          {
            day: 2,
            type: "Autoridade",
            format: "Carrossel",
            theme: "3 sinais de que você precisa ir ao dentista",
            description:
              "1️⃣ Sangramento na gengiva 2️⃣ Sensibilidade ao comer 3️⃣ Dor ao mastigar — Último slide: Se você tem algum desses sinais, não espere piorar.",
            objective: "Educar e posicionar como especialista acessível",
          },
          {
            day: 3,
            type: "Estética",
            format: "Reels",
            theme: "Antes e depois — transformação do sorriso",
            description:
              "Mostrar resultado real de procedimento estético. Transição dramática com música impactante. Conteúdo com altíssimo potencial de viralização.",
            objective: "Gerar desejo, prova social e alcance viral",
            cta: "Quer transformar seu sorriso? O primeiro passo é uma avaliação.",
          },
          {
            day: 4,
            type: "Dor",
            format: "Reels",
            theme: "Dói usar alinhador invisível?",
            description:
              "Dr. Ricardo responde dúvida comum com linguagem acessível. Desmistifica o medo, mostra conforto e resultado. Formato falando para câmera.",
            objective: "Quebrar objeções e gerar interesse em alinhador",
          },
          {
            day: 5,
            type: "Educação",
            format: "Carrossel",
            theme: "Quanto custa NÃO cuidar dos dentes?",
            description:
              "Comparativo: custo de uma limpeza preventiva vs. custo de um canal + coroa. Mostra que prevenir é MUITO mais barato. Gatilho financeiro poderoso.",
            objective: "Gatilho de urgência e prevenção",
          },
          {
            day: 6,
            type: "Bastidores",
            format: "Reels",
            theme: "Um dia na clínica do Dr. Ricardo",
            description:
              "Bastidores reais: chegada na clínica, preparo, atendimento, equipe em ação. Humaniza o dentista, mostra profissionalismo e reduz medo dos pacientes.",
            objective: "Humanizar, gerar conexão e reduzir ansiedade",
          },
          {
            day: 7,
            type: "Conversão",
            format: "Reels",
            theme: "Agenda aberta essa semana",
            description:
              "CTA direto com senso de urgência: vagas limitadas, agenda abrindo, aproveite. Formato rápido, objetivo, com link direto para WhatsApp.",
            objective: "Gerar agendamentos diretos",
            cta: "Vagas limitadas! Agende agora pelo WhatsApp.",
          },
        ],
      },
    ],

    // ---- INVESTIMENTO ----
    investment: {
      totalMonthly: "R$ 1.250",
      totalLabel: "Pacote Completo ArtDesign",
      originalPrice: "R$ 2.700",
      savings: "R$ 1.450",
      packageIncludes: [
        "Gestão completa do Instagram",
        "Planejamento estratégico mensal",
        "Conteúdo diário (1º mês)",
        "Captação presencial de conteúdo",
        "Gestão de tráfego Meta Ads",
        "Google Meu Negócio",
        "Relatórios de performance",
        "Reuniões de alinhamento",
      ],
      breakdown: [
        { item: "Gestão de Redes Sociais", value: "R$ 1.000" },
        { item: "Captação de Conteúdo", value: "R$ 700" },
        { item: "Tráfego Pago (Meta Ads)", value: "R$ 600" },
        { item: "Google Meu Negócio", value: "R$ 400" },
      ],
      setupItems: [
        { item: "Site Institucional (futuro)", value: "R$ 3.500" },
      ],
      paymentConditions: [
        "Pagamento mensal via boleto ou PIX",
        "Sem fidelização — cancele quando quiser",
        "Contrato mensal — continua se gostar",
        "Sem burocracia, sem multa",
      ],
      notes: [
        "Investimento em mídia (Meta Ads) não incluso — sugestão inicial: R$10/dia",
        "Domínio e hospedagem por conta do cliente (quando contratar site)",
        "Custos de deslocamento para captação presencial informados previamente",
        "Primeiros 30 dias = fase de aprendizado do algoritmo — resultados crescem progressivamente",
      ],
    },

    // ---- DIFERENCIAIS ----
    differentials: [
      "Estratégia dupla: entrada popular (limpeza, avaliação) + ticket alto (estética, implantes)",
      "Captação presencial profissional — fotos e vídeos reais na clínica",
      "Transparência total de custos — sem margem sobre serviços externos",
      "Nenhuma fidelização obrigatória — permanência por resultado",
      "Cancelamento a qualquer momento, sem multa",
      "Crescimento estruturado por fases",
      "Foco em agendamentos reais e ROI mensurável",
    ],

    // ---- SERVIÇOS OPCIONAIS ----
    optionalServices: [
      "Google Ads (campanhas de pesquisa local)",
      "Site institucional otimizado para Google",
      "Landing pages por procedimento",
      "Automação de agendamento via WhatsApp",
      "Produção de depoimentos em vídeo",
      "Campanhas de SEO orgânico",
      "E-mail marketing para pacientes",
      "Gestão de campanhas sazonais",
    ],
  },

  // ---- IMÓVEIS CONFIANÇA — ARTATENDE CRM ----
  {
    slug: "imoveis-confianca-artatende",
    clientName: "Imóveis Confiança",
    contactName: "Imóveis Confiança",
    proposalType: "crm",
    greeting:
      "Olá! 👋 Preparamos esta proposta especialmente para a Imóveis Confiança. Aqui você vai entender como o ArtAtende vai transformar o WhatsApp de vocês em uma máquina de qualificação e vendas que funciona 24 horas por dia, 7 dias por semana — mesmo quando nenhum corretor está disponível.",
    validUntil: "2026-04-07",
    whatsappNumber: "5549991109591",
    highlights: [
      "Um único número para toda a equipe de corretores",
      "IA que responde e qualifica leads às 22h30 do domingo",
      "Funil Kanban visual para o gestor acompanhar cada negociação",
      "Histórico blindado — nunca mais perde com saída de corretor",
    ],
    services: [
      {
        name: "Implantação e Onboarding",
        description:
          "Construção da máquina de atendimento personalizada para a Imóveis Confiança. Você não precisará se preocupar com nenhuma configuração técnica.",
        icon: "settings",
        items: [
          "Mapeamento e engenharia de prompts da IA (persona, tom e limites)",
          "Integração com o site imoveisconfianca.net.br (leitura de links)",
          "Configuração do funil Kanban imobiliário (5 etapas)",
          "Criação das etiquetas de segmentação de leads",
          "Treinamento prático da equipe de corretores",
          "Boas práticas anti-banimento do WhatsApp",
        ],
        price: "R$ 2.500",
        priceType: "project",
      },
      {
        name: "Licenciamento Mensal (SaaS)",
        description:
          "Acesso completo à plataforma ArtAtende para toda a equipe. Um único número oficial distribuindo atendimentos e a IA funcionando 24/7.",
        icon: "zap",
        items: [
          "1 número de WhatsApp oficial da imobiliária",
          "Até 5 corretores/atendentes simultâneos",
          "Construtor de fluxos e automações (Drag & Drop)",
          "Painel Kanban e funil de vendas",
          "Dashboard com métricas em tempo real",
          "Módulo de campanhas e etiquetas",
          "Suporte técnico em horário comercial",
        ],
        price: "R$ 597",
        priceType: "monthly",
      },
      {
        name: "Inteligência Artificial (IA)",
        description:
          "A Imóveis Confiança tem total controle e transparência sobre o consumo de IA. O custo é repassado pelo valor exato de consumo, sem margens.",
        icon: "cpu",
        items: [
          "Integração com ChatGPT (OpenAI) ou Claude (Anthropic)",
          "Custo por token — Pay-as-you-go",
          "Estimativa para imobiliária de médio porte: R$ 50 a R$ 150/mês",
          "Limite de segurança configurado (evita custo excessivo)",
          "IA treinada para qualificar e agendar — nunca negociar preços",
        ],
        price: "R$ 50 – R$ 150",
        priceType: "monthly",
        priceNote: "Custo variável direto de API — sem margem da agência",
      },
    ],
    investment: {
      totalMonthly: "R$ 597",
      totalLabel: "Licenciamento Mensal ArtAtende",
      breakdown: [
        { item: "1 número WhatsApp oficial", value: "incluso" },
        { item: "Até 5 corretores simultâneos", value: "incluso" },
        { item: "Kanban imobiliário + automações", value: "incluso" },
        { item: "Dashboard e relatórios", value: "incluso" },
        { item: "Suporte técnico", value: "incluso" },
      ],
      setupItems: [
        { item: "Implantação e Onboarding Completo", value: "R$ 2.500" },
      ],
      paymentConditions: [
        "Taxa de implantação: pagamento único via PIX ou boleto",
        "Mensalidade: cobrada todo dia 1° via PIX ou boleto",
        "Implantação pode ser parcelada nas 2 primeiras mensalidades",
        "Sem fidelização — cancele quando quiser",
      ],
      notes: [
        "Custo de IA (OpenAI / Anthropic) faturado separadamente pelo valor exato de consumo",
        "Estimativa de IA para imobiliária de médio porte: R$ 50 a R$ 150/mês",
        "Número de WhatsApp e chip fornecidos pela Imóveis Confiança",
        "Integrações externas (n8n, portais imobiliários) avaliadas caso a caso",
      ],
    },
    differentials: [
      "IA agnóstica: suporta ChatGPT, Claude, Gemini e Deepseek — você escolhe o melhor custo",
      "Histórico de clientes 100% da empresa — jamais fica no celular do corretor",
      "Construtor de fluxos visual — sem necessidade de código",
      "Nenhuma fidelização obrigatória — permanência por resultado",
      "Transparência total de custos — sem margem sobre serviços externos",
      "Suporte técnico humano incluído no plano",
    ],
  },
];

// ============================================================
// HELPERS
// ============================================================

export function getProposalBySlug(slug: string): Proposal | undefined {
  return proposals.find((p) => p.slug === slug);
}

export function getAllProposalSlugs(): string[] {
  return proposals.map((p) => p.slug);
}
