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
  phases?: ProposalPhase[];
  contentPillars?: ProposalContentPillar[];
  differentials?: string[];
  positioningStatement?: string;
  brandEssence?: string;
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
