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
  audience?: string[];
  strengths: ProposalAnalysisPoint[];
  opportunities: ProposalAnalysisPoint[];
  conclusion: string;
}

export interface ProposalEcosystemAnalysisItem {
  title: string;
  subtitle?: string;
  strengths: ProposalAnalysisPoint[];
  opportunities: ProposalAnalysisPoint[];
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

export interface ProposalBeforeAfter {
  beforeTitle: string;
  beforeItems: string[];
  afterTitle: string;
  afterItems: string[];
  expectedResults: string;
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
  proposalType?: "social_media" | "crm" | "sistema";
  closingQuestion?: string;
  beforeAfter?: ProposalBeforeAfter;
  simulation?: { title: string; items: string[] };
  faq?: { question: string; answer: string }[];
  ecommerceAnalysis?: { title: string; items: string[] };
  bonus?: { title: string; items: string[] };
  commissionModel?: {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; description: string }[];
    closingText: string;
  };
  ecosystemAnalyses?: ProposalEcosystemAnalysisItem[];
  theme?: "standard" | "premium" | "legal" | "executive";
  stats?: { value: string; label: string; subtext?: string }[];
  contentSuggestions?: {
    format: string;
    theme: string;
    hook: string;
    description: string;
  }[];
  roiAnalysis?: {
    intro: string;
    scenarios: {
      label: string;
      monthlyClients: string;
      avgTicket: string;
      avgCommission: string;
      annualRevenue: string;
      roi: string;
    }[];
    conclusion: string;
  };
  systemPain?: {
    title: string;
    intro?: string;
    before: { dayLabel: string; title: string; items: string[]; result: string };
    after: { dayLabel: string; title: string; items: string[]; result: string };
  };
  systemModules?: {
    icon: string;
    title: string;
    description: string;
    features: string[];
  }[];
  systemSprints?: {
    number: number;
    weeks: string;
    title: string;
    deliverables: string[];
    milestone: string;
  }[];
  systemStack?: {
    category: string;
    items: { name: string; role: string }[];
  }[];
  systemPricing?: {
    setup: { value: string; label: string; includes: string[]; payment: string };
    monthly: { value: string; label: string; includes: string[]; annualValue?: string; annualNote?: string };
    year1Total: string;
    paybackDays: string;
    notes?: string[];
  };
  systemComparison?: {
    competitorName: string;
    rows: {
      feature: string;
      excel: string;
      competitor: string;
      artdesign: string;
    }[];
  };
}

// ============================================================
// DADOS DAS PROPOSTAS
// ============================================================

export const proposals: Proposal[] = [
  // ---- DR JAMES OLAYA ----
  {
    slug: "dr-james-olaya",
    clientName: "Dr. James Olaya",
    contactName: "James",
    theme: "premium",
    greeting: "Preparamos uma proposta estratégica completa para estruturar e escalar seu ecossistema digital.",
    validUntil: "2026-04-10",
    whatsappNumber: "5549988446685",
    highlights: [
      "Foco não é apenas 'crescer', é organizar para escalar",
      "Ecossistema completo: Instagram, Loja, Academy e Laser",
      "Design de marca pessoal com autoridade técnica real",
      "Estratégia comprovada focada em conversão"
    ],
    analysis: {
      intro: "Baseado em uma análise profunda do Instagram e dos perfis associados, estas são as conclusões sobre seu momento digital atual:",
      strengths: [
        {
          title: "Autoridade técnica extremamente bem posicionada",
          description: "Conteúdos com profundidade real. Explicações técnicas que te colocam acima de 90% do mercado."
        },
        {
          title: "Conteúdo que educa + vende ao mesmo tempo",
          description: "Estrutura forte de problema → explicação → solução → CTA."
        },
        {
          title: "Uso estratégico de Call-to-Actions (CTAs)",
          description: "Alto engajamento que gera leads orgânicos e abertura de conversas reais na DM."
        },
        {
          title: "Potencial massivo de viralização",
          description: "Demonstrado através de casos com mais de 142 mil curtidas, indicando alta conexão emocional."
        }
      ],
      opportunities: [
        {
          title: "Falta de estrutura clara de funil",
          description: "As publicações retêm atenção, mas existe uma falha entre conteúdo e a venda. O lead não desce com facilidade, perdendo conversões."
        },
        {
          title: "Excesso de foco em microlabial",
          description: "Grande volume de conteúdo num ponto único limita a percepção dos outros serviços e da própria Academy e Laser."
        },
        {
          title: "Falta de segmentação de público",
          description: "Misturar cliente final, iniciantes e avançados na mesma linha contínua reduz a eficiência e não direciona para o ticket mais alto."
        },
        {
          title: "Séries de conteúdos de valor contínuo",
          description: "Falta criar narrativas longas - séries diárias ou análises de casos reais que ativem os gatilhos emocionais da retenção profunda."
        }
      ],
      conclusion: "Você já é uma grande autoridade, já possui um excelente produto e já constrói bastante engajamento. O próximo passo lógico do negócio não é esticar o que você faz hoje, mas sim montar um sistema focado puramente em escalar suas vendas via automação da estrutura."
    },
    ecosystemAnalyses: [
      {
        title: "Jay Loja",
        subtitle: "E-Commerce",
        strengths: [
          {
            title: "Branding forte",
            description: "Produtos com marca própria formam uma base sólida."
          },
          {
            title: "Boa estrutura comercial inicial",
            description: "Condições como Pix, Parcelamento e Combos integrados."
          }
        ],
        opportunities: [
          {
            title: "Produtos esgotados",
            description: "Uma imensa perda de vendas e gatilhos por falhas logísticas."
          },
          {
            title: "Baixa integração social",
            description: "Inexistência de storytelling forte ligando os conteúdos do Instagram à Loja."
          }
        ]
      },
      {
        title: "Jay Academy",
        subtitle: "Educação & Cursos",
        strengths: [
          {
            title: "Autoridade técnica incontestável",
            description: "Referência absoluta para o aluno."
          },
          {
            title: "Promessa clara de transformação",
            description: "Gera valor de vida real para a carreira dos alunos."
          }
        ],
        opportunities: [
          {
            title: "Dispersão de entrada",
            description: "Múltiplas páginas confundem o caminho da venda."
          },
          {
            title: "Falta de funil e UPSELL contínuo",
            description: "Não existe esteira estruturada de produtos para conduzir o aluno do início ao ticket alto avançado."
          }
        ]
      },
      {
        title: "Jayo Laser",
        subtitle: "Tecnologia & Equipamento",
        strengths: [
          {
            title: "Produto de altíssima demanda",
            description: "Soluciona grande dor do mercado estético atual."
          },
          {
            title: "Posicionamento técnico premium",
            description: "Perfeito complemento para o hub do profissional."
          }
        ],
        opportunities: [
          {
            title: "Limitações da estrutura digital atual",
            description: "As plataformas atuais não suportam nem escalam a demanda gerada, com sérios desafios em captação de prospects."
          }
        ]
      },
      {
        title: "Google Meu Negócio",
        subtitle: "Clínica Local & Posicionamento",
        strengths: [
          {
            title: "Selo de existência digital",
            description: "Estrutura básica registrada para contato rápido de indicações."
          }
        ],
        opportunities: [
          {
            title: "SEO Local inativo",
            description: "Inúmeras oportunidades de gerar pacientes quentes locais são perdidas diariamente."
          },
          {
            title: "Gestão inteligente de avaliações",
            description: "Não existe ação robusta pedindo reviews, essenciais para criar prova social maciça offline x online."
          }
        ]
      }
    ],
    services: [
      {
        name: "Posicionamento & Estratégia de Marca",
        description: "Estruturação da comunicação (autoridade + conversão) entre clínica, cursos, produtos e tecnologia.",
        icon: "compass",
        items: [
          "Análise e estruturação estratégica",
          "Organização do ecossistema",
          "Definição de linha editorial",
          "Direcionamento de crescimento"
        ],
        price: "R$ 1.875",
        priceType: "monthly"
      },
      {
        name: "Gestão de Redes Sociais",
        description: "Gestão completa do Instagram e organização do feed focando em retenção.",
        icon: "instagram",
        items: [
          "Planejamento mensal",
          "Publicação de conteúdos",
          "Acompanhamento analítico",
          "Ajustes estratégicos semanais"
        ],
        price: "R$ 1.500",
        priceType: "monthly"
      },
      {
        name: "Planejamento de Conteúdo",
        description: "Organização por objetivos reais (engajamento, autoridade e conversão).",
        icon: "calendar",
        items: [
          "Cronograma temático",
          "Ideias via algoritmos",
          "Definição clara de pilares",
          "Distribuição de frequência"
        ],
        price: "R$ 1.125",
        priceType: "monthly"
      },
      {
        name: "Criação de Conteúdo & Copy",
        description: "Cópias focadas puramente em retenção psicológica e SEO nativo.",
        icon: "penTool",
        items: [
          "Legendas estratégicas",
          "Copywriting persuasivo",
          "SEO avançado",
          "Roteirização direcional"
        ],
        price: "R$ 1.500",
        priceType: "monthly"
      },
      {
        name: "Roteiros de Vídeos",
        description: "Os scripts estruturados que seguram o espectador desde os primeiros 2s.",
        icon: "film",
        items: [
          "Roteiros para Reels/Ads",
          "Hooks de alto impacto",
          "Estratégia dor → CTA",
          "Direcionamento de gravações"
        ],
        price: "R$ 1.500",
        priceType: "monthly"
      },
      {
        name: "Edição Profissional de Vídeos",
        description: "Cortando e montando material para maximizar a retenção média online.",
        icon: "video",
        items: [
          "Legendas hiper-dinâmicas",
          "Recorte de retenção",
          "Efeitos e ilustrações ativas",
          "Trilhas virais"
        ],
        price: "R$ 1.875",
        priceType: "monthly"
      },
      {
        name: "Tráfego Pago Completo (Meta/Google)",
        description: "Distribuindo suas mensagens globalmente para atrair aluno, paciente e consumidor.",
        icon: "target",
        items: [
          "Campanhas de Cursos/Clínica",
          "Funis Topo ao Fundo",
          "Pesquisa na Rede Google",
          "Remarketing constante"
        ],
        price: "R$ 1.500",
        priceType: "monthly",
        priceNote: "Verba direta dos anúncios calculada junto à empresa"
      },
      {
        name: "Google Meu Negócio & SEO",
        description: "Explodindo as vendas locais no radar dos clientes mais próximos.",
        icon: "mapPin",
        items: [
          "Otimização da Ficha",
          "Atualização diária",
          "Geração massiva de reviews",
          "Estratégia clínica pura"
        ],
        price: "R$ 600",
        priceType: "monthly"
      },
      {
        name: "Gestão do Ecossistema Digital",
        description: "Integração viva da Loja, Links, Cursos e Plataformas em um funil só.",
        icon: "share2",
        items: [
          "Gestão Linktree e Sites",
          "Tradução inter-plataforma",
          "CRO (Conversion Rate Opt.)",
          "Coesão analítica global"
        ],
        price: "R$ 1.125",
        priceType: "monthly"
      },
      {
        name: "Desenvolvimento Web & LP",
        description: "Engenharia tecnológica onde se constrói pontes perfeitas de páginas.",
        icon: "code",
        items: [
          "Sites altíssima performance",
          "Landing pages isoladas",
          "Captação e eventos exclus."
        ],
        price: "Sob demanda",
        priceNote: "Adotado avulsamente por projetos complexos extras"
      },
      {
        name: "Design de Materiais & Branding",
        description: "Elevar o nível institucional estético online de todo curso e serviço.",
        icon: "palette",
        items: [
          "PDFs Premium Alunos",
          "Apresentações de Alta Vida",
          "Folders VIPs"
        ],
        price: "R$ 750",
        priceType: "monthly"
      }
    ],
    investment: {
      totalMonthly: "R$ 2.250",
      totalLabel: "Pacote Gestão Ecossistema Total",
      originalPrice: "R$ 13.350",
      savings: "R$ 11.100",
      packageIncludes: [
        "Estratégia de Marca & Ecossistema",
        "Redes Sociais e Copy Premium",
        "Roteiros e Edição Profissional",
        "Tráfego Pago",
        "Google Local, Links & Web Mngmt"
      ],
      breakdown: [
        { item: "Posicionamento & Marca", value: "R$ 1.875" },
        { item: "Redes & Planejamento", value: "R$ 2.625" },
        { item: "Conteúdo, Copy e Roteiros", value: "R$ 3.000" },
        { item: "Edição Fria de Câmeras", value: "R$ 1.875" },
        { item: "Ads, Tráfego e Ecossistema", value: "R$ 3.225" },
        { item: "Estúdio, Gráfica e PDFs", value: "R$ 750" }
      ],
      paymentConditions: [
        "Geração direta de faturamento sem limites escalável",
        "Não existe taxa de comissão aplicada aos cursos",
        "Deslocamento + Viagens taxado separadamente do plano caso uso local externo fora de sua unidade."
      ],
      notes: [
        "Investimento repassável às operadoras Facebook (Meta)/Google estão ISOLADAS deste investimento de gestão operacional de equipe. Faremos alinhamentos diários ou bimestrais das injeções de R$ de mídia conforme tracionar a captação."
      ]
    },
    differentials: [
      "Operação com Funil Total Integrado: Da Bio do Instagram até o Pós Compra na Loja Virtual",
      "Escada de Produtos Ativada: Up-selling com alunos já mapeado (Ticket Baixo x Médio x Mentoria).",
      "Entregamos estrutura, não apensação simples de perfis vazios e dependentes de trends."
    ]
  },
  
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

  // ---- ESPAÇOLASER CAÇADOR ----
  {
    slug: "espacolaser-cacador",
    clientName: "Espaçolaser Caçador",
    contactName: "Equipe Espaçolaser",
    proposalType: "social_media",
    greeting:
      "Olá equipe da Espaçolaser Caçador! 💙 Analisamos de perto a presença digital da unidade. Vemos uma marca forte com muito potencial. Preparamos um diagnóstico e uma estratégia (um Sistema de Crescimento Local) focada em transformar carinho em agendamentos recorrentes. Confira abaixo o Método Pele que Converte que desenhamos pra vocês.",
    validUntil: "2026-03-30",
    whatsappNumber: "5549989094043", // Número do perfil

    highlights: [
      "Agenda limitada de captação por mês na região (Urgência) 🚨",
      "Foco local: O objetivo não é viralizar no Brasil, é dominar Caçador 📍",
      "Sem fidelidade — transparência e parceria de resultados 🤝",
      "Metodologia validada: 'Método Pele que Converte' 💎",
    ],

    // ---- ANÁLISE ESTRATÉGICA ----
    analysis: {
      intro:
        "Fizemos um raio-x estratégico no perfil da unidade para entender onde estamos perdendo oportunidades e como podemos estruturar a captação inteligente de leads da região de Caçador.",
      strengths: [
        {
          title: "Força da Marca e Confiança (Autoridade)",
          description:
            "A unidade já tem presença ativa, linguagem próxima e carisma. A marca já carrega autoridade e segurança nacional da Espaçolaser, facilitando muito a conversão local.",
        },
        {
          title: "Engajamento com Bastidores",
          description:
            "Conteúdos variados, como os de rotina, humor e trends performam bem, o que prova que existe potencial real de conexão do público com a equipe de Caçador.",
        },
      ],
      opportunities: [
        {
          title: "Cenário de Perda (O que NÃO fazer) 🚨",
          description:
            "Depender só de trend/meme, focar só em posts promocionais e não aproveitar o WhatsApp gera perda de oportunidades. O risco é o cliente lembrar do vídeo engraçado, mas ir na concorrência porque faltou clareza de contato e educação de mercado.",
        },
        {
          title: "Antes vs. Depois (Transformação do Cenário)",
          description:
            "Hoje: Perfil reativo vendendo laser. Depois: Uma máquina de gerar desejo (Mostrando resultados, segurança, e comodidade), levando as avaliações direto para o WhatsApp a partir de estratégias ativas intencionais.",
        },
        {
          title: "Construção de Funil de Conteúdo 🎯",
          description:
            "Implementação de 4 etapas: Conteúdo que atrai as pessoas certas, Educa (quebra de objeções rapidamente), Gera Desejo por uma pele livre e Converte via convite irrecusável. O gancho de entrada é mostrar à mulher e ao homem da cidade o que ele perde todos os dias sofrendo com métodos tradicionais.",
        },
        {
          title: "Projeção de Resultado 📈",
          description:
            "Nosso foco real será: 1) Aumentar e dominar o alcance na cidade e região. 2) Ampliar volume diário de conversas no WhatsApp (esse será o principal KPI). 3) Apoiar a conversão final para o agendamento de sessões com conteúdo.",
        },
      ],
      conclusion:
        "Não é sobre postar mais e de forma aleatória. É sobre postar as coisas certas e no ritmo exato pra quem toma decisão. Quando transformamos um perfil reativo num funil, a mágica acontece. O Instagram atrai, mas o WhatsApp é quem de fato fecha.",
    },

    // ---- SERVIÇOS ----
    services: [
      {
        name: "Gestão de Redes Sociais",
        description:
          "Planejamento mensal inteligente focado em dominar a praça local, com foco 100% estratégico.",
        icon: "smartphone",
        items: [
          "Definição mensal de temas focados",
          "Criação de linha editorial com SEO Local (depilação a laser em Caçador)",
          "Direcionamento criativo e arte",
          "Acompanhamento analítico e retenção",
        ],
        price: "R$ 1.490",
        priceType: "monthly",
      },
      {
        name: "Estratégia e Inteligência (O Funil)",
        description:
          "Nosso Método: Mapeamento detalhado dos 4 pilares: Alcance(35%), Autoridade(25%), Desejo(20%), Conversão(20%).",
        icon: "brainCircuit",
        items: [
          "Análise do que performa vs cliente ideal",
          "Micro-histórias focadas em mulheres 18-45 e homens focados em praticidade/irritações",
          "Construção da linguagem e blocos de quebras de objeção",
        ],
        price: "R$ 590",
        priceType: "monthly",
      },
      {
        name: "Gestão do Cronograma",
        description:
          "Distribuição semanal do conteúdo (O mapa tático comercial).",
        icon: "calendarCheck",
        items: [
          "Otimização e divisão entre Reels, Carrosséis e Fixo",
          "Rotina cadenciada com o time de vendas",
          "Sincronização sazonal e de campanhas pontuais via direct",
        ],
        price: "R$ 390",
        priceType: "monthly",
      },
      {
        name: "Tráfego Pago — Meta Ads 🚀",
        description:
          "Campanhas altamente locais direcionadas a Caçador.",
        icon: "target",
        items: [
          "Gestão de Campanhas de Alcance (Marca Forte)",
          "Gestão de Campanhas de Conversão (Lead pro WhatsApp)",
          "Segmentações super avançadas geográficas",
          "Acompanhamento de conversão",
        ],
        price: "R$ 890",
        priceType: "monthly",
        priceNote: "Verba da Meta: Sugerimos apenas R$ 25/dia = R$375 mensais direto para a Meta.",
      },
      {
        name: "Captação Viva (Imagens e Vídeos)",
        description:
          "A materialização no digital. Todo conteúdo pronto, estruturado e visualizado pra rodar.",
        icon: "camcorder",
        items: [
          "1 Diária cheia planejada na unidade por mês",
          "Cenas gravadas com clientes focando nas dores (Antes vs. Depois real!)",
          "Equipe da matriz focada, mostrando atendimento",
          "Vídeos curtos estilo 'Dúvidas' gerando alta humanização",
        ],
        price: "R$ 790",
        priceType: "monthly",
      },
    ],

    // ---- FASES DO PROJETO ----
    phases: [
      {
        number: 1,
        title: "Os Primeiros 30 Dias (Kickoff)",
        objective: "Tangibilizar as vitórias rápidas e organizar a casa para escalar agendamentos.",
        deliverables: [
          "Aprovação e alinhamento",
          "Análise profunda do material atual e configuração de tráfego",
          "Produção dos 2 primeiros cronogramas de semana (1 e 2)",
          "1ª Captação já focada nas grandes objeções",
          "Campanhas ativas rodando",
        ],
        expectedResult: "Primeiros contatos qualificados e elevação perceptiva da qualidade do perfil.",
      },
      {
        number: 2,
        title: "Próximos Passos (Sem Atrito)",
        objective: "Dar sequência rápida com total transparência.",
        deliverables: [
          "1️⃣ Autorização da Proposta no botão final",
          "2️⃣ Reunião rápida de Onboarding (30 min)",
          "3️⃣ Início das Campanhas e do Método Imediatamente",
        ],
        expectedResult: "Começar rapidamente a lucrar e parar a perda diária no perfil desorganizado.",
      },
    ],

    // ---- PILARES DE CONTEÚDO E IDEIAS REAIS ----
    contentPillars: [
      {
        title: "Pilar 1: Alcance & Identificação",
        examples: [
          "Reels cômico sobre 'quem adia a sessão e corre pro Carnaval' c/ CTA pro Agendamento",
          "Bastidores descontraídos do time",
          "Mostrando o dia com agendas cheias (Urgência natural)",
        ],
        objective: "Virar assunto em Caçador",
      },
      {
        title: "Pilar 2: Autoridade e Educação",
        examples: [
          "Carrossel: Mitos e verdades (Dói? Homem faz? Posso depilar com gilete?)",
          "Vídeo ensinando pq a máquina Candela é superior ao que tem em Caçador",
          "Quanto custa de fato ter pele livre o ano todo?",
        ],
        objective: "Antecipação e confiança. O paciente chega pronto.",
      },
      {
        title: "Pilar 3: Desejo Impossível de Ignorar",
        examples: [
          "Fotos do Antes vs. Depois: O cenário de foliculite c/ fim vs. a pele lisa do lado de cá",
          "Micro-histórias reais (depoimento focado)",
          "Autocuidado = Tempo ganho no fim de semana para focar em outras coisas",
        ],
        objective: "Mudar a percepção! Não vender laser, vender paz mental e beleza constante.",
      },
      {
        title: "Pilar 4: Conversão Pura no WhatsApp",
        examples: [
          "Dia de 'Agenda Aberta': Story forte com Urgência chamando pro link",
          "Campanha direcionada ao Meta. Postagens 'Vitrine'",
          "Benefícios rápidos e de alto giro",
        ],
        objective: "Bater metas diárias no celular da Espaçolaser.",
      },
    ],

    // ---- CRONOGRAMA 7 DIAS ----
    contentCalendar: [
      {
        profileName: "Espaçolaser",
        profileHandle: "@espacolaser.cacador",
        objective: ["Amostra tática de 1 semana estratégica na nossa metodologia."],
        days: [
          {
            day: 1,
            type: "Autoridade + Quebra de Objeção",
            format: "Reels Pílula",
            theme: "Ainda acham que Laser é tortura?",
            description: "Conteúdo focado em mostrar o lado amigável, um 'hook' direto que atinge a mente de quem usa lâminas e sofre.",
            objective: "Educação rápida; CTA forte para o zap e stories interagindo 'você acha que dói?'",
            cta: "'Pare de sofrer atoa, clica no link e avalie a resistência agora'",
          },
          {
            day: 2,
            type: "Autoridade Local & Desejo",
            format: "Carrossel Dinâmico",
            theme: "5 Motivos pra fazer depilação com a equipe em Caçador",
            description: "Usando as dores (1. Economia 10x sem cera, 2. Adeus foliculite, 3. Praticidade extrema, etc).",
            objective: "Conteúdo denso salvável (Bomba SEO Local).",
            cta: "'Agenda liberada. Chama nossa Unidade!'",
          },
          {
            day: 3,
            type: "Desejo Puro e Imagem Limpa",
            format: "Post Fixo",
            theme: "Sua Pele, Sua Confiança",
            description: "Post institucional forte e elegante da marca Espaçolaser. Foco no conforto feminino e na praticidade aos homens de barba rala (se aplicável).",
            objective: "Posicionamento visual.",
          },
          {
            day: 4,
            type: "Contexto Engraçado + Venda",
            format: "Reels / Trend",
            theme: "A famosa 'correria' do último segundo da viagem",
            description: "Uma situação que a mulher ou o homem que fazem esporte esquecem, mas que o laser resolve para a vida toda.",
            objective: "Alcance gigantesco e identificação",
            cta: "Não sofra mais. Garanta e invista em conforto no link na Bio",
          },
          {
            day: 5,
            type: "Quebra de Objeção Tática",
            format: "Carrossel Explicativo",
            theme: "Sessões: Preciso de 100 pra dar resultado?",
            description: "Falar claramente como o método se organiza. Uma desmistificação completa respondendo dúvidas reais.",
            objective: "Mudar clientes indecisos em Agendamentos na hora (Link WhatsApp Stories na sequência).",
          },
          {
            day: 6,
            type: "Conversão 'Urgente'",
            format: "Sequência Forte nos Stories",
            theme: "Últimas Vagas de Avaliação da Semana",
            description: "Enquete de aproximação -> Foto da Unidade Caçador -> Link ativo com poucas Vagas.",
            objective: "Converter os expectadores da semana em atendimentos físicos.",
          },
          {
            day: 7,
            type: "Prova Social Local",
            format: "Reels Entrevista Rápida",
            theme: "Bate-papo c/ Consumidor",
            description: "Trecho c/ cliente sorrindo e o 'Por que eu amo vir na Unidade Caçador'.",
            objective: "Geração pesada de confiança via prova social comunitária.",
          },
        ],
      },
    ],

    // ---- DIFERENCIAIS DA AGÊNCIA ----
    differentials: [
      "Sem 'venda de ilusões': Método testado focando em ROI (Taxa de Agendamentos Reais).",
      "Experiência com processos clínicos: Sabemos abordar a insegurança e fragilidade do cliente na área de beleza e saúde.",
      "Livre total: Sem contrato punitivo ou fidelidade trancada. Fica porque vale a pena.",
      "Execução que você vê e pega: Fotos locais, vídeos com seu time, sem usar apenas banco de imagens da franqueadora.",
      "Contraste de Custo-Benefício: O pacote integrado da proposta é desenhado para se pagar com as próprias conversões adicionais que nosso esforço vai gerar.",
    ],

    // ---- INVESTIMENTO ----
    investment: {
      totalMonthly: "R$ 1.600",
      totalLabel: "Pacote 360: O Método Completo",
      originalPrice: "R$ 4.150",
      savings: "R$ 2.550",
      packageIncludes: [
        "Gestão de Redes Sociais com Foco Local",
        "Configuração e Estratégias do Funil Tático",
        "Gestão Semanal de Calendário (4 pilares)",
        "Gestão Integral de Tráfego Pago na Meta",
        "1 Dia Extenso de Captação Fílmica/Fotográfica Mensal na Clínica",
      ],
      breakdown: [
        { item: "Gestão (Conteúdo + Estrutura)", value: "R$ 1.490" },
        { item: "Estratégia e Funil", value: "R$ 590" },
        { item: "Gestão Diária / Cronograma", value: "R$ 390" },
        { item: "Gestão de Tráfego / Performance", value: "R$ 890" },
        { item: "Produção e Captação (Dia Real)", value: "R$ 790" },
      ],
      paymentConditions: [
        "Faturamento mensal sem burocracia (Boleto/PIX).",
        "Isento de multas rescisórias (Você tem a liberdade de romper sem sustos nos primeiros 30 ou 60 dias).",
        "Um pacote de depilação a laser vendido na Unidade Caçador já paga boa parcela (ou todo) do nosso serviço no mês. Isso é mudança do foco em 'Custo' para o 'ROI'.",
      ],
      notes: [
        "Verba do tráfego (direcionado a Meta) a cargo do cliente. Recomendamos algo enxuto como 25 a 30 reais diários no cartão da gerência.",
        "Equipe local da ArtDesign estará na clínica para a captação visual todo mês em datas a conformar.",
        "Se fizer sentido pra vocês iniciarmos a revolução do Instagram ainda nesta semana, clique abaixo no WhatsApp da proposta e mande: ESTAMOS PRONTOS.",
      ],
    },
  },

  // ---- FABY MAGAZINE ----
  {
    slug: "faby-magazine",
    clientName: "Faby Magazine",
    contactName: "Faby",
    greeting: "Olá Faby! 👋 Analisamos o perfil da loja e preparamos um plano estratégico direto ao ponto para transformar seguidores em clientes reais.",
    validUntil: "2026-03-30",
    whatsappNumber: "5549988097625",
    closingQuestion: "Faz sentido pra você esse próximo passo de posicionar a Faby Magazine de forma mais estratégica e aumentar as vendas através do Instagram?",

    highlights: [
      "Estratégia focada em conversão para loja física",
      "Experiência com o mercado de moda e comércio local",
      "Estratégias testadas e validadas no mercado",
      "Sem contrato de fidelidade — resultados falam mais alto",
    ],

    analysis: {
      intro: "Analisamos o cenário atual. O perfil tem nome conhecido, frequência de posts, variedade de produtos, apelo promocional e ponto físico. Mas falta postar com estratégia. O foco é transformar a Faby Magazine de 'loja que posta promoção' para marca que vende 'estilo + experiência + facilidade'.",
      audience: [
        "Mulheres que querem se vestir bem sem pagar caro",
        "Homens que buscam praticidade e estilo",
        "Pessoas que valorizam parcelamento",
        "Público local de Caçador que converte na loja"
      ],
      strengths: [],
      opportunities: [],
      conclusion: ""
    },

    beforeAfter: {
      beforeTitle: "A realidade de hoje (O ANTES)",
      beforeItems: [
        "Postagens sem estratégia comercial estruturada",
        "Baixa interação e poucos comentários reais",
        "Foco quase exclusivo em preço e descontos",
        "Pouca retenção de atenção nos vídeos",
        "Instagram atuando apenas como vitrine/panfleto digital"
      ],
      afterTitle: "O que acontece com a nossa estratégia? (O DEPOIS)",
      afterItems: [
        "Conteúdo que ativa o desejo verdadeiro de compra",
        "Aumento agudo de interação e respostas",
        "Reels dinâmicos com altíssimo alcance regional",
        "Marca sendo lembrada como referência de moda em Caçador",
        "Perfil gerando clientes reais e caixa direto"
      ],
      expectedResults: "🚀 Projeção de Resultados: Com consistência, anúncios direcionados e conteúdo estratégico, é possível aumentar o alcance da loja de 2x a 5x nos primeiros 30 dias, gerando uma fila diária de mensagens no WhatsApp e aumentando o fluxo físico na loja para transformar seguidores num ativo real de lucros."
    },

    phases: [
      {
        number: 1,
        title: "Fase 1: ATRAIR",
        objective: "Trazer novas pessoas para conhecer a Faby Magazine.",
        deliverables: [
          "Reels dinâmicos de Moda (transições, antes/depois)",
          "Conteúdo altamente compartilhável (dicas rápidas)",
          "Campanhas de Alcance no Meta Ads focadas em Caçador"
        ],
        expectedResult: "Aumento considerável nas visualizações e alcance local."
      },
      {
        number: 2,
        title: "Fase 2: ENGAJAR",
        objective: "Fazer o público interagir com os conteúdos da loja.",
        deliverables: [
          "Carrosséis educativos (Dicas de estilo, combinações)",
          "Stories interativos (Enquetes, batalhas de looks)",
          "Bastidores da loja (Humanização)"
        ],
        expectedResult: "Aumento nos salvamentos, comentários e respostas aos stories."
      },
      {
        number: 3,
        title: "Fase 3: GERAR DESEJO",
        objective: "Transformar interesse em vontade de comprar.",
        deliverables: [
          "Fotos de alta qualidade dos looks",
          "Prova social de clientes vestindo Faby Magazine",
          "Demonstração de caimento e detalhes das peças"
        ],
        expectedResult: "Público perguntando 'qual o valor?', 'tem meu tamanho?'"
      },
      {
        number: 4,
        title: "Fase 4: CONVERTER",
        objective: "Fechar a venda e levar fluxo para a loja.",
        deliverables: [
          "CTA forte e claro para o WhatsApp",
          "Campanhas de Mensagem no Meta Ads",
          "Anúncios de urgência e condições facilitadas"
        ],
        expectedResult: "Mensagens diárias de clientes prontos para comprar."
      }
    ],

    contentPillars: [
      {
        title: "Desejo & Estilo",
        examples: [
          "3 looks com a mesma peça",
          "Look completo por menos de R$ 199",
          "Aquele look que veste bem para o jantar"
        ],
        objective: "Mostrar usabilidade, caimento e combinações."
      },
      {
        title: "Conversão & Ofertas",
        examples: [
          "Promoção urgente 48h",
          "Pagamento facilitado em 10x sem juros",
          "Chegou novidade e você precisa ver isso"
        ],
        objective: "Chamar atenção e levar pro WhatsApp direto."
      },
      {
        title: "Relacionamento & Bastidores",
        examples: [
          "Organizando as araras",
          "Escolha da equipe do look do dia",
          "Enquetes: 'A ou B', o que você usaria?"
        ],
        objective: "Gerar proximidade com a Faby."
      },
      {
        title: "Autoridade Comercial",
        examples: [
          "O caçado que combina com tudo",
          "Como montar um look elegante sem gastar muito",
          "Cores em alta da nova estação"
        ],
        objective: "Mostrar que a loja entende de moda."
      }
    ],

    contentCalendar: [
      {
        profileName: "Faby Magazine",
        profileHandle: "@fabymagazine",
        objective: [
          "Aumentar movimento da loja.",
          "Crescer o alcance local.",
          "Receber contatos de venda no WhatsApp."
        ],
        days: [
          {
            day: 1,
            type: "Post Fixo",
            format: "Foto",
            theme: "Look da semana",
            description: "Foto forte de um look feminino ou masculino completo com foco no desejo e na chamada para loja.",
            objective: "Desejo + Visita",
            cta: "Chame no WhatsApp ou venha provar na loja"
          },
          {
            day: 2,
            type: "Stories",
            format: "Interativo",
            theme: "Prova social + Enquete",
            description: "Mostrar 3 peças e perguntar qual o público usaria.",
            objective: "Interação",
            cta: "Responda a enquete"
          },
          {
            day: 3,
            type: "Carrossel",
            format: "Slider",
            theme: "5 looks para ocasiões diferentes",
            description: "Looks para trabalho, jantar, passeio, balada.",
            objective: "Retenção + Salvar",
            cta: "Salve esse post para se inspirar depois"
          },
          {
            day: 4,
            type: "Reels",
            format: "Vídeo dinâmico",
            theme: "1 peça, 3 formas de usar",
            description: "Vídeo curto de transição com música em alta.",
            objective: "Alcance de novos seguidores",
            cta: "Comenta qual look é a sua cara"
          },
          {
            day: 5,
            type: "Post Fixo",
            format: "Oferta",
            theme: "Oferta Estratégica",
            description: "Peça foco com condição facilitada e urgência sem parecer panfleto.",
            objective: "Conversão",
            cta: "Envie esse post para quem ama promoção boa"
          },
          {
            day: 6,
            type: "Stories",
            format: "Bastidores",
            theme: "Chegada de novidades",
            description: "Caixa abrindo, detalhes, arara montada pela equipe.",
            objective: "Humanização + Proximidade",
            cta: "Deslize para reservar"
          },
          {
            day: 7,
            type: "Reels / Carrossel",
            format: "Dica",
            theme: "Tendência de estilo",
            description: "Cores em alta ou calçados coringas.",
            objective: "Autoridade comercial",
            cta: "Quer mais dicas assim? Comenta EU QUERO"
          }
        ]
      }
    ],

    services: [
      {
        name: "Gestão de Redes Sociais",
        description: "Planejamento, criação e acompanhamento estratégico do Instagram com foco em posicionamento, relacionamento e vendas.",
        icon: "megaphone",
        items: [
          "Organização do calendário de postagens",
          "Definição de temas alinhados aos produtos",
          "Criação de legendas estratégicas com SEO",
          "Ajustes de linguagem para fortalecer a marca"
        ],
        price: "R$ 1.497",
        priceType: "monthly"
      },
      {
        name: "Estratégia + Cronograma",
        description: "Construção da linha editorial, pilares, tom de voz e planejamento mensal claro de cada postagem (Reels, Carrossel, Stories).",
        icon: "fileText",
        items: [
          "Definição dos pilares de atração e conversão",
          "Calendário organizado (fixo, Reels, stories)",
          "Sequência inteligente para Campanhas",
          "Posicionamento local"
        ],
        price: "R$ 1.194",
        priceType: "monthly"
      },
      {
        name: "Tráfego Pago – Meta Ads",
        description: "Gestão de anúncios para Caçador: \n\n🎯 Campanha 1 (Alcance): Mostrar a loja para quem ainda não conhece.\n🎯 Campanha 2 (Engajamento): Fazer o público interagir com os looks.\n🎯 Campanha 3 (Conversão/WhatsApp): Levar direto para o seu vendedor.",
        icon: "target",
        items: [
          "Planejamento das 3 campanhas essenciais",
          "Criação e segmentação para o raio da loja",
          "Otimização constante",
          "Acompanhamento de conversões"
        ],
        price: "R$ 850",
        priceType: "monthly",
        priceNote: "Investimento de mídia sugerido: R$ 25/dia (R$ 375 na quinzena inicial)."
      },
      {
        name: "Captação de Imagens e Vídeos",
        description: "Ação presencial! Durante esse dia, vamos produzir: 10 a 20 vídeos curtos (Reels), fotos de looks, bastidores, prova de produto e material para anúncios. Uma diária gera conteúdo para o mês todo.",
        icon: "camera",
        items: [
          "1 diária mensal de captação agendada",
          "Vídeos comerciais e dinâmicos para Reels",
          "Fotos de produtos e prova de caimento",
          "Conteúdo voltado diretamente para conversão"
        ],
        price: "R$ 1.200",
        priceType: "monthly"
      }
    ],

    investment: {
      totalMonthly: "R$ 1.600",
      totalLabel: "Pacote Completo - Faby Magazine🍒",
      originalPrice: "R$ 4.741",
      savings: "R$ 3.141",
      packageIncludes: [
        "Gestão Integrada de Redes Sociais",
        "Desenvolvimento do Cronograma Editorial Mensal",
        "Estratégia de Linha Editorial Completa",
        "Gestão de Tráfego Pago (Instagram e Facebook)",
        "01 Diária Mensal para Captação de Imagens e Vídeos",
      ],
      breakdown: [
        { item: "Valor Individual dos Serviços", value: "R$ 4.741" },
        { item: "Economia no Pacote Completo", value: "R$ 3.141 todo mês" },
        { item: "🎁 BÔNUS INCLUSO 1", value: "Otimização Biografia e Destaques" },
        { item: "🎁 BÔNUS INCLUSO 2", value: "Organização do SEO no Perfil" },
      ],
      paymentConditions: [
        "Trabalhamos de forma simples e justa: Pagamento Mensal.",
        "Sem contato de fidelidade. Fechou, trabalhamos 30 dias. Geração de resultados retém clientes melhor que multas.",
        "Trabalhamos com vagas limitadas para lojistas na região para manter nossa altíssima entrega. Reserve a sua."
      ],
      notes: [
        "O valor do investimento em Meta Ads (Plataforma) não está incluso neste pacote.",
        "Para iniciar conosco, recomendamos os R$ 375 investidos em cartão diretamente na conta de anúncios para os primeiros 15 dias de teste acelerado.",
        "Caso seja necessário mais diárias de gravação num mês de lançamento, cobramos avulso o valor negociado previamente."
      ]
    }
  },

  // ---- MSI VOLTZ ----
  {
    slug: "msi-voltz",
    clientName: "MSI Voltz",
    contactName: "Equipe",
    greeting: "Preparamos uma proposta-base estratégica, pensada e montada exclusivamente para a MSI Voltz, com foco total em conversão comercial. 🔥",
    validUntil: "2026-04-05",
    whatsappNumber: "5549999094360",

    analysis: {
      intro: "Realizamos uma análise do seu perfil e ecossistema digital para identificar pontos fortes, de atenção e oportunidades táticas.",
      strengths: [
        { title: "Apelo comercial muito forte", description: "O produto se vende com benefícios claros: economia, praticidade, mobilidade e inovação sem depender de gasolina." },
        { title: "Nicho com alto potencial", description: "Alto poder de desejo local e regional em Curitibanos, Videira e Fraiburgo." },
        { title: "Interesse real na compra", description: "Vários comentários de usuários reais giram em torno de valor, localização e formas de adquirir." },
        { title: "Bons formatos em ação", description: "Conteúdos que trazem evento, contexto humano, novidade ou lifestyle da equipe alcançam boas métricas." }
      ],
      opportunities: [
        { title: "Vício do 'Post Promocional'", description: "Atualmente, muita vitrine pura de produto e preço. Faz girar no início, mas não alavanca o crescimento extremo da marca." },
        { title: "Falta de consistência geral", description: "Pouca robustez de identidade visual e de cruzamento de posicionamento entre as unidades." },
        { title: "Escala nas legendas", description: "Legendas sendo sub-utilizadas para tráfego orgânico via SEO (pesquisa regional)." },
        { title: "Objeções ocultas", description: "Falta responder fortemente nas postagens as grandes dores: Precisa CNH? Tem bateria? Posso parcelar? Tem a manutenção na própria loja?" },
        { title: "Risco de comotização", description: "No Instagram atual, ser só vitrine isola a marca da conectividade com o cliente final." }
      ],
      conclusion: "A proposta ideal para a MSI Voltz não deve vender só 'postagem'. Ela precisa entregar uma \n\nESTRUTURA COMERCIAL DIGITAL ATIVA:\n1. Fortalecimento da Marca (confiança).\n2. Geração de Demanda (volume de mensagens).\n3. Otimização das Ferramentas da Loja Física na forma Digital (E-commerce e Site)."
    },

    ecommerceAnalysis: {
      title: "Mini Diagnóstico Extra — Loja Online (Nuvemshop)",
      items: [
        "A aparência do portal pode melhorar para transmitir seriedade de uma concessionária moderna.",
        "Existe falta de hierarquia visual e vitrines destacadas por seções.",
        "Produtos sem destaque adequado ou descrições ricas, focando mais na transação mecânica do que na jornada do cliente.",
        "Experiência e categorizações pouco elaboradas impedem navegabilidade.",
        "Possui um altíssimo potencial de personalização dentro da própria lógica da Nuvemshop a ser escalada."
      ]
    },

    beforeAfter: {
      beforeTitle: "Situação atual",
      beforeItems: [
        "Postagens muitas vezes curtas, sem estratégia ou objetivo definido",
        "Concentração num só canal, muito em preço/descontos e venda isolada",
        "Baixo engajamento ou relacionamento prolongado no funil digital",
        "Menor diferenciação ou descolamento estético dos concorrentes online"
      ],
      afterTitle: "Potencial Absoluto",
      afterItems: [
        "Conteúdos que fisgam o cliente e trabalham até a tomada de decisão",
        "Educação e quebra constante de objeções comuns de mobilidade",
        "Aceleração de contatos de demanda no Whatsapp com tráfego inteligente",
        "Marca extremamente forte e loja fluindo em Vendas de Autopropelidos"
      ],
      expectedResults: "Chegou a hora de sair de apenas mais uma loja virtual de motos, e tornar um Ecossistema que atrai e retém desejo humano das ruas na sua máquina corporativa digital."
    },

    simulation: {
      title: "O que pode acontecer nos primeiros 30 dias",
      items: [
        "Alcance maciço de público na cidade com lembrança de marca reforçada diariamente.",
        "Crescimento real de novas pessoas te descobrindo e chamando no botão de WhatsApp.",
        "Sinal e movimentação percebida nas visitas diretamente na loja física/unidade.",
        "Reconhecimento como a principal referência regional em veículos elétricos e economia.",
        "Visual orgulhoso e muito profissional refletindo o valor dos produtos expostos."
      ]
    },

    phases: [
      {
        number: 1,
        title: "Semana 1: Alinhamento e Visual",
        objective: "Criar fundação do cenário.",
        deliverables: [
          "Alinhamento estratégico rigoroso e base do negócio",
          "Organização extrema do perfil no feed e destaques",
          "Definições oficiais de identidade e comunicação verbal"
        ],
        expectedResult: "Casa Arrumada."
      },
      {
        number: 2,
        title: "Semana 2: O Motor Gira",
        objective: "Plano no terreno.",
        deliverables: [
          "Início pontual das postagens ativas de conteúdo",
          "Abertura em campo da 1ª grande Campanha no Meta Ads (Facebook/Instagram)"
        ],
        expectedResult: "Tráfego ativado e girando pessoas."
      },
      {
        number: 3,
        title: "Semana 3: Captação",
        objective: "Combustível de Conversões.",
        deliverables: [
          "Materialização do Dia de Captação e Imagens Profissionais",
          "Ajustes de copy nas campanhas vigentes",
          "Acompanhamento da volumetria no Whatsapp"
        ],
        expectedResult: "Bateria carregada de novidades."
      },
      {
        number: 4,
        title: "Semana 4: Velocidade Cruzeiro",
        objective: "Otimizar e Ampliar.",
        deliverables: [
          "Otimização geral dos criativos e segmentação no Tráfego Pago",
          "Leitura dos resultados parciais para escalabilidade",
          "Engatilhamento natural das próximas estratégias de escala"
        ],
        expectedResult: "Previsibilidade Comercial iniciada."
      }
    ],

    contentPillars: [
      {
        title: "Atração e Topo (40%)",
        examples: ["Economia em Gasolina", "Sensação Lifestyle", "Rotinas Urbanas com fluidez"],
        objective: "Atrair base fria para o negócio."
      },
      {
        title: "Autoridade Certa (30%)",
        examples: ["Bastidores da própria loja física", "Estrutura de mecânica ativa e suporte rápido", "Atendimentos Reais"],
        objective: "Construção local de extrema credibilidade perante rivais."
      },
      {
        title: "Destranca Objeção (20%)",
        examples: ["Mas gasta bateria e energia?", "O emplacamento?", "Não tem força?", "E as chuvas?"],
        objective: "Informar antes do lead chegar armado de inseguranças."
      },
      {
        title: "Foco Oferta Forte (10%)",
        examples: ["Condições Avassaladoras", "Super parcelamentos das linhas exclusivas", "Calls To Action"],
        objective: "Fechamento Direto na boca do funil."
      }
    ],

    contentCalendar: [
      {
        profileName: "MSI Voltz | Piloto Principal",
        profileHandle: "@msi_voltz",
        objective: ["Exemplo Tático de Grade de Publicação do Material Semanal"],
        days: [
          {
            day: 1,
            type: "Atração de Impacto",
            format: "Reels / Vídeo Curto",
            theme: "'Quanto você pode economizar trocando a gasolina por um motor elétrico hoje?'",
            description: "Conteúdo focado com imagens fortes do deslocamento nas cidades de atuação + letreiros gigantes.",
            objective: "Atração via dores latentes atuais e fáceis (Gasolina cara) e gatilhos comparativos lógicos.",
            cta: "Aciona nosso time ali no Whatsapp agora mesmo!"
          },
          {
            day: 2,
            type: "Forte Objeção (Explicador)",
            format: "Carrossel Gráfico (Slides)",
            theme: "As '5 grandes dúvidas' travadas na garganta da galera local.",
            description: "Dúvidas essenciais no ar destrinchadas num conteúdo visual (Ex: Precisa emplacar? Agilidade no morro? CNH?)",
            objective: "Eliminar a vergonha do provável comprador via educação.",
            cta: "Chega de dúvida: Salve esse guia."
          },
          {
            day: 3,
            type: "Decisão Comercial",
            format: "Post Fixo C/ Produto Único",
            theme: "Destaque Pesado do Scooter/Moto da Quinzena.",
            description: "Uma headline insana ressaltando apenas aquele modelo na sua melhor luz fotográfica.",
            objective: "Despertar urgência focal num tipo de produto.",
            cta: "Unidades limitadíssimas pra essa cor."
          },
          {
            day: 4,
            type: "Autoridade Visceral",
            format: "Reels Institucional Dinâmico",
            theme: "A Força Genuína Oculta nos seus Bastidores.",
            description: "Cenas empolgantes ou bem estruturadas mostrando a mecânica em volta e do atendimento sério do time.",
            objective: "Provocar a prova real social nas cabeças difusas das pessoas comparando a MSI em relação a lojinha local sem porte.",
            cta: "Nós só paramos, quando resolvemos o percurso inteiro pra você."
          },
          {
            day: 5,
            type: "Conexão Pessoal Estilo",
            format: "Carrossel Dinâmico",
            theme: "O Match Ideal: Para quem exatamente esse veículo x faz sentido bruto?",
            description: "Listagem apontada com o dedo do estilo que mais serve se para motoboys e rotina maluca, e qual foca mais num simples traslado leve, isolando o foco de atenção de cada target sem eles saírem do Instagram de vocês.",
            objective: "Nicho. Segmentar e isolar a tribo.",
            cta: "Fala pra gente nos cometários, em qual rota dessas o autopropelido é a sua salvação atual?"
          },
          {
            day: 6,
            type: "Tiro Corto Story Varejista",
            format: "Super Sequência de Stories",
            theme: "Oferta e Oportunidades no calor.",
            description: "Táticas de aproximação real dos bastidores do final de semana na loja. Acompanhando de um Story link direto para a loja preta do site com o botão oficial sem travamento.",
            objective: "Acordar os 'espectadores' para tomadores de ação orgânica no D-1 e fim do mês.",
            cta: "Link ali e agende um simples Test Drive para hoje ainda."
          },
          {
            day: 7,
            type: "Fechamento Exclusivo",
            format: "Post Fixo / Story em conjunto.",
            theme: "A Segurança da compra em 3 unificações na sua loja matriz e filiais.",
            description: "Bater a chancela sobre o serviço completo desde o pré e o incrível suporte pós venda super acessível com a MSI Voltz, focada na segurança do local/pessoa certa e garantida de estar operando sério pra ti onde quer que a moto esteja.",
            objective: "Fechar na balança como marca líder invicta.",
            cta: "Mande direct pra fechar parceria conosco via agendamento."
          }
        ]
      }
    ],

    services: [
      {
        name: "Gestão Operacional das Redes Sociais",
        description: "Transformar os feeds do Instagram da sua vitrine parada para serem o seu canal com ativa escala comercial tática local e forte presença humana.",
        icon: "monitorPlay",
        items: [
          "Planejamento robusto de estratégias mensais em mídias orgânicas",
          "Execução rígida de pautas da linha focada no SEO de pesquisas locais da região",
          "Direções de conteúdos (Carrosséis atrativos, Dinâmicos em Reels)",
          "Acompanhamento da régua de performance gerada"
        ],
        price: "R$ 1.490",
        priceType: "monthly"
      },
      {
        name: "Estratégia e Cronogramas do Material Vertical",
        description: "Alinharemos não só 'uma postagem', e sim toda a grade e inteligência da rede por inteiro visando os próximos passos de compra dos clientes.",
        icon: "clipboardList",
        items: [
          "Calendário visual estrutural das deficiências mapeadas pra vendas",
          "Estudado alinhamento sobre quebras de dores focais atreladas no mês e calendário varejo comercial sazonal"
        ],
        price: "R$ 690",
        priceType: "monthly"
      },
      {
        name: "Captação Premium Híbrida em Imagens e Vídeos",
        description: "Vamos pessoalmente fazer o seu banco real sem usar apenas materiais robóticos dos grandes fabricantes industrias. Mostrando como ela opera com vocês nas suas dependências com humanos.",
        icon: "video",
        items: [
          "1 poderosa Diária fechada presencial em rotinas pra suprir conteúdo na quinzena inteira",
          "Gravação de ganchos que performam, conteúdos educacionais ou pautas 'trend' do momento para surfe livre nas ondas da web. Tira a estaca morta de foto na luz fria."
        ],
        price: "R$ 1.290",
        priceType: "monthly"
      },
      {
        name: "Gerenciamento Avançado Meta Ads (Tráfego Pago)",
        description: "Comprar inteligência da rede social visando segmentar e forçar o aparecimento da sua nova comunicação estritamente para pessoas das 3 cidades das filiais ou regiões em um raio hiper quente em potencial.",
        icon: "rocket",
        items: [
          "Estrutura e Gestão dos seus orçamentos dentro da Meta de Inteligência Comercial (Alcance ou Cadastro/Mensagens via Whats).",
          "Testes de A/B agressivos de cópia nas campanhas de performance",
          "Ajustes métricos para escalar as verbas iniciais propostas com responsabilidade ao invés de jogar aos ventos dos boosts comuns."
        ],
        price: "R$ 890",
        priceType: "monthly",
        priceNote: "Para aquecimento ágil inicial: +R$ 375 de Verba Adicional Mínima pra depositar via banco/cartão no algoritmo Ads gerindo uns incríveis primeiros 15 dias de disparo base de teste (Sugerido)."
      },
      {
        name: "Auxílio Em Escalabilidade nos Marketplaces",
        description: "Garantir a expansão além apenas dos sites e instagram. O comércio tá pegando fogo e onde podemos te dar suporte estratégico lá estamos para auxiliar fortemente com direções de uso.",
        icon: "packagePlus",
        items: [
          "Organização de padronagens fotográficas e título forte de alcance lá",
          "Frentes estratégicas competitivas orientando entrada e melhora visual para briga com concessionárias menores no país"
        ],
        price: "R$ 890",
        priceType: "monthly"
      },
      {
        name: "Remodelação Pesada na Loja Oficial Online e Edição (Nuvemshop)",
        description: "O Site é o principal funil ou poço sem fundo dos seus leads. Não aceitaremos a estrutura anterior simples frente ao nosso trabalho árduo. Iremos moldar as bases com carinho.",
        icon: "shoppingCart",
        items: [
          "Geração do novo Layout e reorganização da vitrine (Banners de alto nível e confiança de segurança no site)",
          "Arquitetura de sub-seções facilitadas nas páginas nativas do fornecedor para os produtos e clareza total de conversões sem susto em copys fáceis."
        ],
        price: "R$ 1.690",
        priceType: "monthly"
      }
    ],

    commissionModel: {
      title: "O Modelo de Parceria",
      subtitle: "Nós apostamos com você.",
      description: "Custo operacional digital pesa, principalmente ao tracionar múltiplas lojas. Para não estrangular o orçamento da MSI Voltz e iniciarmos com tração total nas 3 unidades (Videira, Fraiburgo e Curitibanos) de uma só vez, aplicamos nosso formato de **Coparticipação Digital de Risco**.",
      features: [
        {
          title: "Base Operacional Ultra-Acessível",
          description: "Nossa agência subsidia a maior parte do custo da operação para viabilizar as 3 lojas de uma vez. O que custaria um fixo de R$ 6.940, reduzimos para R$ 1.750 mensais na parcela."
        },
        {
          title: "Ganha-Ganha: 3% das Vendas",
          description: "Como somos nós operando o tráfego e as ferramentas online de venda, nós recebemos um Success Fee de apenas 3% de cada venda concretizada por sua Nuvemshop ou Marketplaces ativados. Simples e justo."
        }
      ],
      closingText: "Sabe por que fazemos isso? Porque o nosso real lucro não virá da manutenção de R$ 1.750. Virá do volume de motos que vamos ajudar a vender no seu digital. Nossos objetivos agora são os mesmos."
    },

    investment: {
      totalMonthly: "R$ 1.750",
      totalLabel: "Pacote Estrutura Digital MSI+ (Fixo)",
      originalPrice: "R$ 6.940",
      savings: "R$ 5.190",
      packageIncludes: [
        "Plano Executivo de Redes Sociais Mensal",
        "Engenharia da Grade e Fatores de Atração dos Posts",
        "Investida Focada nas Campanhas Patrocinadas Regionais",
        "01 Diária de Captação Físico Audiovisual na Unidade Combinada",
        "Transformação Completa Estética na Nuvemshop Interna do Negócio",
        "Apoios na Geração das descrições do Marketplace"
      ],
      breakdown: [
        { item: "Valor Individual dos Serviços", value: "R$ 6.940 mensais" },
        { item: "Parcela Fixa Subsidiada das 3 Lojas", value: "R$ 1.750 fixos" },
        { item: "Coparticipação (Success Fee Partner)", value: "Apenas 3% por venda online" },
        { item: "Economia Fixa Ancorada", value: "R$ 5.190 todo mês economizado" }
      ],
      paymentConditions: [
        "Sem contato forçado e estúpido de fidelidade a longo prazo. Renovação super descomplicada e cíclica.",
        "Trabalharmos para gerar resultados consistentes, esse é o motivo do cliente não evadir.",
        "A taxa de Coparticipação (3%) ocorre exclusivamente sobre as vendas viabilizadas ou convertidas diretamente na Nuvemshop C/ nosso tráfego ou Marketplaces estruturados."
      ],
      notes: [
        "A verba extra (Budget injetado) da própria inteligência nos Meta Ads Platform não compõe essa precificação de gestão estratégica listada em nossa gestão supracitada. Será injetado sempre pelo cliente após discussões de investimentos."
      ]
    },

    bonus: {
      title: "Cerejas do Bolo para Acionamento Inicial do Pacote!",
      items: [
        "Limpeza Imediata e Re-engenharia de Copywriting na Bio do Perfil do Instagram 🚀",
        "Desenvolvimentos Estéticos Completos dos seus Destaques do Instagram em Alto Padrão Digital 🎨",
        "Tiro Inicial no Sistema E-commerce para você e os clientes passíveis notarem visibilidade e confiança na 1ª Semana 🛡",
        "Pé na tábua das contas Ads na Meta para geração das primeiras campanhas não se arrastando ⚙"
      ]
    },

    faq: [
      {
        question: "Isso da certo mesmo para o porte da cidade X na sub-região e interior?",
        answer: "Pode apostar que funciona incrivelmente bem! Ao contrário dos grandes pólos metropolitanos enlouquecidos e caros no leilão virtual dos acessos; investir pesado inteligentemente e hiper-segmentado nesses nichos curtos rendem vendas expressivas e posicionamento de titã frente na rua central rapidamente e a curtos preços no digital diário."
      },
      {
        question: "Será que nossa equipe vai saber lidar com tráfego e gravações das pautas?",
        answer: "Sem burocracias pesadas. O banco de captação que faremos alimenta com e sem uso estressante da imagem ou desgaste dos donos ou frente de vendas em vídeos com cara de 'apresentador'. Usa os que querem. No tráfego nós gerenciamos os fluxões pesados e lincamos no botões. Você atende os negócios pelo CRM local já."
      },
      {
        question: "Teríamos que colocar quantias gigantes para divulgar nos anúncios?",
        answer: "Teste escalável. Falei para darmos o primeiro bote com uns simples e potentes R$ 375 injetados no cartões fracionados em módicos quinzenais testando a máquina de interesse. Ao se validar na prática a taxa de retorno positivo, você mesmo vai colocar mais verbas no pote mês a mês feliz com os leads caindo quentíssimos aí."
      },
      {
        question: "E demora que os clientes vejam 'esse antes x depois' de vocês?",
        answer: "Do dia zero a diferença é assustadora já em pouquíssimo tempo pro cliente recorrente (Ele nota a mudança de casa). E a geração dos contatos de anúncios se bem enquadradas já podem jorrar perguntas nos Whatsapp do seu funil entre a marcação dos 5 a 14 dias incialmente do mês 1, enquanto escalamos!"
      }
    ],

    differentials: [
      "Visão 360 Graus. Sem pensar só 'No postzinho' sem métrica.",
      "Análise aprofundada nos dados da Loja E-Commerce Virtual (Um abismo não trabalhado antes).",
      "Experiências completas das marcas fortes em mercado Digital Moderno."
    ],
    closingQuestion: "E aí equipe MSI Voltz, fechado a proposta pra alavancarmos como devem?\nA ArtDesign já tá preparadíssima!\nVamos subir a régua das negociações de mobilidade online em 30 dias juntos. Aguardo o alinhamento definitivo nos telefones/wpp hoje."
  },

  // ---- DUDU GUINCHOS ----
  {
    slug: "dudu-guinchos",
    clientName: "Dudu Guinchos",
    contactName: "Dudu",
    theme: "premium",
    greeting: "Preparamos uma proposta estratégica completa para transformar o Dudu Guinchos na referência digital de guincho e içamento da Serra Gaúcha.",
    validUntil: "2026-04-23",
    whatsappNumber: "5549988446685",
    highlights: [
      "15 anos de experiência e +3.000 clientes — é hora de o digital refletir isso",
      "Seus concorrentes já aparecem no Google. Você ainda não.",
      "Solução completa: Instagram, Google, Site e Tráfego Pago",
      "Sem fidelidade. Foco total em resultado."
    ],

    analysis: {
      intro: "Analisamos profundamente o perfil @dudupaese.guinchos, a presença no Google e o posicionamento digital atual. Estas são as conclusões sobre o momento atual da empresa:",
      strengths: [
        {
          title: "Identidade visual consistente e profissional",
          description: "Logo definido, paleta de cores aplicada (laranja, preto e branco) nos posts. Transmite profissionalismo e diferencial frente aos concorrentes do setor."
        },
        {
          title: "Volume de conteúdo publicado impressionante",
          description: "Com 204 posts, a empresa demonstra constância e comprometimento. Não é um perfil abandonado — há investimento real em presença digital."
        },
        {
          title: "Bio funcional com CTA direto para WhatsApp",
          description: "Menciona 15 anos de experiência, +3.000 clientes e tem link direto para WhatsApp com mensagem pré-preenchida. Funcional e objetivo."
        },
        {
          title: "Conteúdo com prova social e autoridade técnica",
          description: "Posts com frases como 'Altura não é obstáculo, é onde a gente trabalha', apresentação da frota e serviços reforçam credibilidade real."
        }
      ],
      opportunities: [
        {
          title: "Invisível no Google Maps — concorrentes dominam",
          description: "O Dudu Guinchos NÃO aparece no Google Maps. Concorrentes como García Guincho (5.0★, 54 avaliações) e G. Mincarone (4.9★) estão captando seus clientes agora mesmo."
        },
        {
          title: "Sem site profissional — credibilidade limitada",
          description: "Nenhum site próprio indexado no Google. A ausência impede SEO, dificulta fechar contratos maiores com construtoras e limita a apresentação dos serviços."
        },
        {
          title: "Baixo alcance orgânico — 854 seguidores para 204 posts",
          description: "Proporção muito baixa indica que o conteúdo não está sendo distribuído estrategicamente. Sem hashtags otimizadas, SEO no Instagram ou tráfego pago."
        },
        {
          title: "Conteúdo focado na empresa, não nas dores do cliente",
          description: "Falta conteúdo como 'O que acontece quando você contrata um guincho sem experiência?' ou 'Como escolher içamento seguro?'. Esse tipo de conteúdo gera muito mais engajamento."
        },
        {
          title: "Destaques quase inexistentes — apenas 1 ativo",
          description: "Para 15 anos de atuação, faltam destaques como: Frota, Antes e Depois, Depoimentos, Sobre Nós, Obras Realizadas. Prejudica quem visita o perfil pela primeira vez."
        }
      ],
      conclusion: "O Dudu Guinchos tem um produto sólido — 15 anos, +3.000 clientes, frota própria e identidade visual. Mas está praticamente invisível digitalmente. Os concorrentes já estão no Google, já recebem avaliações e já captam clientes que deveriam ser seus. O potencial de crescimento com uma gestão profissional é enorme."
    },

    beforeAfter: {
      beforeTitle: "Situação Atual",
      beforeItems: [
        "Invisível no Google Maps — clientes encontram concorrentes",
        "Sem site profissional — perde credibilidade em contratos maiores",
        "854 seguidores para 204 posts — conteúdo não chega nas pessoas certas",
        "Apenas 1 destaque nos Stories — experiência ruim para visitantes",
        "Zero tráfego pago — depende 100% de indicação",
        "Sem Google Meu Negócio — perde leads quentes diariamente"
      ],
      afterTitle: "Com a ArtDesign",
      afterItems: [
        "Presença dominante no Google Maps com avaliações 5 estrelas",
        "Site profissional que vende serviço e gera credibilidade",
        "Conteúdo estratégico que atrai e converte clientes ideais",
        "Destaques organizados: Frota, Obras, Depoimentos, Serviços",
        "Tráfego pago gerando orçamentos direto no WhatsApp",
        "SEO local para dominar buscas em Garibaldi, Carlos Barbosa, Bento Gonçalves, Farroupilha e Caxias"
      ],
      expectedResults: "Em 90 dias, o Dudu Guinchos será encontrado por quem precisa de guincho em Garibaldi, Carlos Barbosa e Bento Gonçalves — depois expandindo para Farroupilha e Caxias. No Google, no Instagram e com site próprio. Clientes entrando pelo WhatsApp todos os dias."
    },

    simulation: {
      title: "O que esperar nos primeiros 30 dias",
      items: [
        "Google Meu Negócio criado e otimizado — visibilidade imediata no Google Maps",
        "Perfil do Instagram reorganizado com destaques profissionais completos",
        "Bio otimizada com foco em conversão e palavras-chave locais",
        "7 conteúdos estratégicos publicados (autoridade + prova social + conversão)",
        "Estrutura de site em desenvolvimento com SEO local",
        "Primeiras avaliações 5 estrelas sendo coletadas no Google"
      ]
    },

    services: [
      {
        name: "Gestão de Redes Sociais",
        description: "Instagram estratégico focado em gerar autoridade, confiança e conversão para o Dudu Guinchos.",
        icon: "Instagram",
        items: [
          "Planejamento estratégico mensal de conteúdo",
          "Criação de posts para feed e Reels",
          "Copywriting persuasivo com SEO e CTAs",
          "Conteúdo focado nas dores do cliente (não só na empresa)",
          "Organização completa dos Destaques (Frota, Obras, Depoimentos, Serviços)",
          "Otimização de bio e posicionamento profissional da marca"
        ],
        price: "R$ 800,00",
        priceType: "monthly"
      },
      {
        name: "Google Meu Negócio & SEO Local",
        description: "Aparecer no Google quando alguém buscar guincho na Serra Gaúcha. Prioridade máxima.",
        icon: "MapPin",
        items: [
          "Criação completa do perfil no Google Meu Negócio",
          "Otimização com palavras-chave locais (Garibaldi, Carlos Barbosa, Bento Gonçalves, Farroupilha, Caxias, Serra Gaúcha)",
          "Inserção de fotos profissionais da frota e operações",
          "Configuração detalhada de todos os serviços",
          "Estratégia ativa de coleta de avaliações 5 estrelas",
          "Postagens semanais dentro do Google",
          "Gestão mensal contínua e otimização"
        ],
        price: "R$ 600,00 setup + R$ 200,00/mês",
        priceType: "project",
        priceNote: "Setup único de R$ 600 + gestão mensal de R$ 200"
      },
      {
        name: "Criação de Site Profissional",
        description: "Site que vende serviço, não só mostra empresa. Focado em conversão e SEO local.",
        icon: "Globe",
        items: [
          "Página Home com impacto imediato e CTA para WhatsApp",
          "Página de Serviços (Guincho, Içamento, Transporte de Cargas)",
          "Seção de Prova Social (fotos reais, obras, depoimentos)",
          "Página Sobre (15 anos, +3.000 clientes, história da empresa)",
          "Página de Contato com botão WhatsApp e clique para ligar",
          "SEO otimizado para aparecer nas buscas do Google",
          "Site leve, rápido, responsivo e focado em conversão"
        ],
        price: "R$ 1.200,00",
        priceType: "project",
        priceNote: "Valor único de desenvolvimento"
      },
      {
        name: "Gestão de Tráfego Pago",
        description: "Campanhas pagas para gerar clientes de forma rápida e escalável via Meta Ads e Google Ads.",
        icon: "Target",
        items: [
          "Campanhas segmentadas para WhatsApp (geração de leads)",
          "Segmentação regional: Garibaldi, Carlos Barbosa, Bento Gonçalves (foco principal) + Farroupilha e Caxias do Sul",
          "Público com intenção de contratação (construtoras, obras, empresas)",
          "Campanhas de pesquisa no Google para palavras-chave de compra",
          "Remarketing para quem visitou o perfil ou site",
          "Relatórios mensais de performance e otimização contínua"
        ],
        price: "R$ 500,00",
        priceType: "monthly",
        priceNote: "Investimento em mídia paga (budget dos anúncios) é separado — sugerido a partir de R$ 10/dia"
      }
    ],

    investment: {
      totalMonthly: "R$ 1.200,00",
      totalLabel: "Pacote Completo Mensal",
      originalPrice: "R$ 3.100,00",
      savings: "R$ 1.900,00 de economia",
      packageIncludes: [
        "Gestão completa de Redes Sociais (Instagram)",
        "Google Meu Negócio — criação e gestão mensal",
        "Site profissional com SEO local (incluso no pacote)",
        "Gestão de Tráfego Pago (Meta Ads + Google Ads)",
        "Estratégia completa de posicionamento digital",
        "Relatórios mensais de resultado"
      ],
      paymentConditions: [
        "Pagamento mensal: R$ 1.200,00/mês via PIX ou boleto",
        "Sem fidelidade — cancelamento a qualquer momento",
        "Budget de anúncios: responsabilidade do cliente (a partir de R$ 10/dia)"
      ],
      notes: [
        "O investimento em mídia paga (budget Meta Ads e Google Ads) é separado e de responsabilidade do cliente",
        "Sugerimos iniciar tráfego pago a partir do 2º ou 3º mês — no início, focamos em estrutura + orgânico",
        "Nosso objetivo é simples: gerar resultado para você querer continuar"
      ]
    },

    contentPillars: [
      {
        title: "Autoridade & Experiência (40%)",
        examples: [
          "15 anos de mercado + 3.000 clientes atendidos",
          "Bastidores de operações reais de içamento",
          "Apresentação da frota e equipamentos",
          "Cases de obras realizadas com antes e depois"
        ],
        objective: "Posicionar o Dudu Guinchos como a referência em guincho e içamento da região"
      },
      {
        title: "Educativo & Dores do Cliente (30%)",
        examples: [
          "O que acontece quando você contrata um guincho sem experiência?",
          "Como escolher um serviço de içamento seguro?",
          "Quando você PRECISA de um guincho na obra?",
          "Erros que podem causar acidentes em içamento"
        ],
        objective: "Gerar engajamento abordando as dores e dúvidas reais do público"
      },
      {
        title: "Prova Social & Resultados (20%)",
        examples: [
          "Fotos e vídeos de obras realizadas",
          "Depoimentos de clientes satisfeitos",
          "Antes e depois de operações complexas",
          "Números e conquistas da empresa"
        ],
        objective: "Criar confiança e eliminar objeções através de resultados reais"
      },
      {
        title: "Conversão & Oferta (10%)",
        examples: [
          "Precisa de guincho agora? Chame no WhatsApp",
          "Orçamento sem compromisso em 5 minutos",
          "Atendimento 24h para emergências",
          "Cobertura em toda Serra Gaúcha"
        ],
        objective: "Converter audiência em leads qualificados via WhatsApp"
      }
    ],

    contentCalendar: [
      {
        profileName: "Dudu Guinchos",
        profileHandle: "@dudupaese.guinchos",
        objective: [
          "Gerar autoridade e confiança imediata",
          "Mostrar resultado rápido nos primeiros 7 dias",
          "Converter seguidores em leads no WhatsApp"
        ],
        days: [
          {
            day: 1,
            type: "Autoridade",
            format: "Reels",
            theme: "15 anos no mercado",
            description: "Reel impactante mostrando a trajetória: 15 anos, +3.000 clientes, frota própria. Imagens reais da operação com texto de impacto.",
            objective: "Posicionar como referência absoluta da região",
            cta: "Solicite seu orçamento — link na bio"
          },
          {
            day: 2,
            type: "Educativo",
            format: "Reels",
            theme: "Erro que pode causar acidente",
            description: "Reel educativo: 'Erro que pode causar acidente em içamento'. Mostrar riscos de contratar sem experiência, com cenas reais de segurança.",
            objective: "Gerar engajamento abordando medo real do público",
            cta: "Não arrisque. Fale com quem tem 15 anos de experiência."
          },
          {
            day: 3,
            type: "Bastidor",
            format: "Reels",
            theme: "Operação real de içamento",
            description: "Bastidor: 'Olha como funciona um içamento seguro'. Mostrar a operação do início ao fim, equipe trabalhando, equipamento.",
            objective: "Humanizar a marca e mostrar competência técnica",
            cta: "Precisou de guincho? Chama no WhatsApp"
          },
          {
            day: 4,
            type: "Prova Social",
            format: "Carrossel",
            theme: "Antes e depois de obra",
            description: "Carrossel com fotos reais: antes da obra (terreno/construção) e depois com o material içado. Depoimento do cliente se possível.",
            objective: "Prova social visual que elimina objeções",
            cta: "Mais de 3.000 clientes satisfeitos"
          },
          {
            day: 5,
            type: "Educativo",
            format: "Reels",
            theme: "Quando você PRECISA de um guincho?",
            description: "Reel listando as 5 situações em que um guincho é essencial: obras em altura, material pesado, acesso difícil, emergência, prazo apertado.",
            objective: "Educar o público sobre quando contratar",
            cta: "Se identificou? Peça orçamento sem compromisso"
          },
          {
            day: 6,
            type: "Autoridade Técnica",
            format: "Reels",
            theme: "Equipamento certo faz toda diferença",
            description: "Apresentação dos equipamentos e da frota. Mostrar o diferencial técnico que só 15 anos de experiência trazem.",
            objective: "Diferenciação técnica frente aos concorrentes",
            cta: "Equipamento profissional + experiência = segurança"
          },
          {
            day: 7,
            type: "Conversão",
            format: "Reels + Stories",
            theme: "Precisa de guincho agora?",
            description: "Reel direto ao ponto: 'Precisa de guincho? Atendemos toda Serra Gaúcha. Orçamento em 5 minutos no WhatsApp.' + Sequência de Stories com CTA.",
            objective: "Conversão direta — gerar mensagens no WhatsApp",
            cta: "📲 Clique no link da bio e peça seu orçamento"
          }
        ]
      }
    ],

    phases: [
      {
        number: 1,
        title: "Estruturação Digital (Semana 1-2)",
        objective: "Montar toda a base digital profissional do Dudu Guinchos",
        deliverables: [
          "Criação do Google Meu Negócio completo e otimizado",
          "Reorganização do perfil do Instagram (bio, destaques, identidade)",
          "Início do desenvolvimento do site profissional",
          "Planejamento estratégico do 1º mês de conteúdo",
          "Definição da linha editorial e pilares de conteúdo"
        ],
        expectedResult: "Base digital completa montada. Presença no Google Maps ativa. Instagram profissionalizado."
      },
      {
        number: 2,
        title: "Conteúdo & Autoridade (Semana 3-4)",
        objective: "Lançar conteúdo estratégico e construir autoridade online",
        deliverables: [
          "Publicação dos primeiros 7 conteúdos estratégicos",
          "Entrega do site profissional publicado",
          "Início da coleta de avaliações no Google",
          "Primeiras postagens no Google Meu Negócio",
          "Otimização de SEO local no site"
        ],
        expectedResult: "Perfil ativo com conteúdo de alta qualidade. Site no ar. Google Maps com primeiras avaliações."
      },
      {
        number: 3,
        title: "Aceleração & Tráfego (Mês 2-3)",
        objective: "Escalar resultados com tráfego pago e otimização contínua",
        deliverables: [
          "Lançamento de campanhas de tráfego pago (Meta Ads + Google Ads)",
          "Campanhas segmentadas por região (Serra Gaúcha)",
          "Otimização contínua do Google Meu Negócio",
          "Conteúdo mensal estratégico no Instagram",
          "Relatórios de performance e ajustes"
        ],
        expectedResult: "Fluxo constante de orçamentos via WhatsApp. Dominância no Google local. Marca reconhecida digitalmente."
      }
    ],

    differentials: [
      "Estratégia completa, não só postagens — do Instagram ao Google, tudo integrado",
      "Foco em geração de clientes reais, não métricas de vaidade",
      "Conhecimento de mercado local e segmentação regional precisa",
      "Sem fidelidade — nosso objetivo é gerar resultado para você querer continuar"
    ],

    faq: [
      {
        question: "Preciso ter muito conteúdo gravado para começar?",
        answer: "Não! Nos primeiros dias, direcionamos exatamente o que gravar — roteiros simples e objetivos. Bastidores da operação, frota e obras já são conteúdo poderoso. Você grava no dia a dia e nós transformamos em conteúdo profissional."
      },
      {
        question: "Em quanto tempo vou ver resultado?",
        answer: "O Google Meu Negócio gera visibilidade quase imediata. No Instagram, os primeiros 30 dias já mostram diferença no posicionamento e engajamento. Com tráfego pago (a partir do 2º mês), os orçamentos começam a chegar diretamente no WhatsApp."
      },
      {
        question: "O investimento em anúncios está incluso?",
        answer: "Não. O valor do pacote cobre toda a gestão e estratégia. O budget dos anúncios (Meta Ads e Google Ads) é pago diretamente às plataformas pelo cliente. Sugerimos começar com R$ 10/dia e escalar conforme resultados."
      },
      {
        question: "E se eu quiser cancelar?",
        answer: "Sem fidelidade, sem multa. Você cancela quando quiser com 30 dias de antecedência. Nosso compromisso é gerar resultado — se gera resultado, você fica. Simples assim."
      }
    ],

    closingQuestion: "Dudu, hoje você já faz o serviço com excelência há 15 anos.\nAgora é hora de fazer o cliente te encontrar.\n\nVamos transformar o Dudu Guinchos na referência digital de guincho da Serra Gaúcha?"
  },

  // ---- DR. FERNANDO REUTER ----
  {
    slug: "dr-fernando-reuter",
    clientName: "Dr. Fernando Reuter",
    contactName: "Dr. Fernando",
    theme: "legal",
    greeting: "Preparamos uma estratégia digital sob medida para posicionar o escritório Dr. Fernando Reuter como referência em advocacia trabalhista patronal e direito do produtor rural em Santa Cecília/SC.",
    validUntil: "2026-04-23",
    whatsappNumber: "5549988446685",
    highlights: [
      "Nicho de alto valor: trabalhista patronal e produtor rural",
      "Google Meu Negócio já cadastrado — vamos profissionalizar",
      "Reels estratégicos para ganhar alcance em 2026",
      "Site próprio + SEO jurídico local"
    ],

    analysis: {
      intro: "Analisamos o perfil @reuterfernando, o Google Meu Negócio, redes sociais e posicionamento digital atual. Estas são as conclusões objetivas do momento presente:",
      strengths: [
        {
          title: "Identidade profissional e nicho bem definidos",
          description: "A bio comunica com clareza o nicho: advocacia trabalhista patronal, produtor rural e revisão de contratos. Diferencial importante para advogados — mercado com alta capacidade de investimento."
        },
        {
          title: "Base de conteúdo já construída",
          description: "Com 105 posts, há investimento prévio em presença digital. Existem artes seguindo padrão visual com logo, telefone e e-mail no rodapé."
        },
        {
          title: "Google Meu Negócio já existe",
          description: "O escritório já está no Google Maps com endereço, telefone e horário. Ponto de partida positivo — vamos otimizar e transformar em máquina de captação local."
        },
        {
          title: "Presença em múltiplas plataformas",
          description: "Instagram, Facebook, LinkedIn e Threads — demonstra iniciativa. Com gestão profissional, todas essas frentes podem ser potencializadas em uma estratégia unificada."
        },
        {
          title: "Foto de perfil adequada e nicho com demanda real",
          description: "Terno, postura séria, ambiente de escritório. Transmite credibilidade. Direito trabalhista patronal e defesa do produtor rural são nichos com excelente potencial de mercado em SC."
        }
      ],
      opportunities: [
        {
          title: "Pouquíssimos Reels — praticamente zero vídeo",
          description: "Apenas 2 reels publicados. Em 2026, vídeos são o principal motor de alcance orgânico. Sem reels frequentes, o perfil praticamente não cresce. Os dois existentes não têm edição, legenda nem CTA."
        },
        {
          title: "Engajamento muito baixo (menos de 1%)",
          description: "3 a 5 curtidas e 0 a 1 comentário por post para 692 seguidores. Taxa abaixo de 1% — o conteúdo não está chegando ao público certo nem gerando interação."
        },
        {
          title: "Mistura de conteúdo pessoal e profissional sem estratégia",
          description: "Feed com fotos da família e posts jurídicos na mesma linha do tempo. Dilui autoridade profissional e confunde o visitante sobre o posicionamento."
        },
        {
          title: "Banco de imagens genéricas substituindo conteúdo autoral",
          description: "Posts profissionais usam stock photos (homem negro com computador, pessoa assinando contrato). Reduz identificação com o advogado e não gera conexão com o público local."
        },
        {
          title: "Google Meu Negócio incompleto e com status irregular",
          description: "Aparece como 'Fecha em breve', sem fotos do escritório, sem avaliações visíveis e sem descrição do negócio. Está indexado — mas não converte."
        },
        {
          title: "Sem site próprio — credibilidade limitada",
          description: "Link na bio aponta para plataforma de terceiros (meucontato.adv.br). Impede SEO, limita apresentação dos serviços e prejudica credibilidade para contratos maiores."
        },
        {
          title: "Bio sem CTA claro e nome inconsistente com o escritório",
          description: "Bio descreve áreas de atuação mas não orienta o visitante (sem link direto para WhatsApp). Nome 'Adv. Reuter' difere de 'Escritório Dr. Fernando Reuter' usado no Google e Facebook — dificulta que quem pesquisa o escritório encontre o Instagram."
        }
      ],
      conclusion: "O Dr. Fernando tem nicho bem definido, base iniciada e identidade profissional. O que falta é estratégia, consistência e qualidade de execução. É o perfil que vai valorizar resultados visíveis — crescimento, leads no WhatsApp e autoridade digital na região. Gestão de redes + Google + site + captação de fotos/vídeos são complementares e necessários."
    },

    services: [
      {
        name: "Gestão de Redes Sociais",
        description: "Instagram estratégico para posicionar o Dr. Fernando como autoridade em trabalhista patronal e direito rural.",
        icon: "Instagram",
        items: [
          "Planejamento estratégico mensal de conteúdo jurídico",
          "Criação de posts, carrosséis e Reels semanais",
          "Copywriting persuasivo com linguagem acessível ao empresário e produtor rural",
          "Padronização visual completa do feed",
          "Destaques profissionais: Áreas de Atuação, Sobre, Depoimentos, Bastidores",
          "Reformulação da bio com CTA direto para WhatsApp",
          "Gestão de comentários e mensagens"
        ],
        price: "R$ 1.200,00",
        priceType: "monthly",
        priceNote: "Mensalidade"
      },
      {
        name: "Captação de Fotos e Vídeos",
        description: "1 diária mensal de produção audiovisual: ensaio profissional e banco de Reels para 30 dias de conteúdo.",
        icon: "Camera",
        items: [
          "Ensaio fotográfico profissional do Dr. Fernando (autoridade)",
          "Fotos do escritório, fachada e ambiente de atendimento",
          "Gravação de 8 a 12 Reels em 1 dia de produção",
          "Edição profissional com legendas, cortes e CTAs",
          "Fotos adicionais para Google Meu Negócio e site",
          "Banco de conteúdo organizado para a equipe"
        ],
        price: "R$ 900,00",
        priceType: "monthly",
        priceNote: "1 diária/mês"
      },
      {
        name: "Google Meu Negócio & SEO Local",
        description: "Transformar o Google Meu Negócio em canal de captação real — aparecer quando alguém buscar 'advogado trabalhista Santa Cecília'.",
        icon: "MapPin",
        items: [
          "Correção completa de horários e dados do perfil",
          "Descrição otimizada com palavras-chave locais",
          "Inserção de fotos profissionais do escritório e do advogado",
          "Estratégia ativa de coleta de avaliações 5 estrelas",
          "Postagens semanais dentro do Google (novidades, artigos, CTAs)",
          "Configuração detalhada de todos os serviços",
          "Monitoramento de posicionamento local"
        ],
        price: "R$ 500,00",
        priceType: "monthly",
        priceNote: "Mensalidade"
      },
      {
        name: "Site Profissional",
        description: "Site próprio com domínio personalizado, SEO jurídico e foco em conversão via WhatsApp.",
        icon: "Globe",
        items: [
          "Domínio próprio (ex.: drfernandoreuter.adv.br)",
          "Página Home com autoridade e CTA direto para WhatsApp",
          "Páginas de Áreas de Atuação detalhadas",
          "Página Sobre o Advogado (trajetória, OAB, especializações)",
          "Blog jurídico para SEO (ranqueamento orgânico no Google)",
          "Página de Contato com formulário, WhatsApp e localização",
          "SEO otimizado para buscas locais (Santa Cecília/SC e região)",
          "Site responsivo, rápido e focado em conversão"
        ],
        price: "R$ 2.200,00",
        priceType: "project",
        priceNote: "Valor único de desenvolvimento"
      }
    ],

    investment: {
      totalMonthly: "R$ 1.200,00",
      totalLabel: "Pacote Completo Mensal",
      originalPrice: "R$ 2.600,00/mês + R$ 2.200 site",
      savings: "R$ 1.400,00/mês + site incluso",
      breakdown: [
        { item: "Gestão de Redes Sociais", value: "R$ 1.200/mês" },
        { item: "Captação de Fotos e Vídeos (1 diária)", value: "R$ 900/mês" },
        { item: "Google Meu Negócio", value: "R$ 500/mês" },
        { item: "Site Profissional (único)", value: "R$ 2.200" }
      ],
      packageIncludes: [
        "Gestão completa do Instagram",
        "Captação mensal de fotos e vídeos",
        "Gestão profissional do Google Meu Negócio",
        "Site profissional com domínio próprio (incluso, sem custo extra)",
        "Relatórios mensais de performance",
        "Acompanhamento estratégico contínuo"
      ],
      paymentConditions: [
        "Pagamento mensal: R$ 1.200,00/mês via PIX ou boleto",
        "Sem fidelidade — cancelamento a qualquer momento com 30 dias de aviso",
        "Site profissional incluso no pacote (sem valor adicional)"
      ],
      notes: [
        "Contratando separadamente, o investimento seria R$ 2.600/mês + R$ 2.200 de site",
        "O pacote completo representa mais de 50% de economia em relação aos serviços avulsos",
        "Nosso compromisso: gerar autoridade digital real para o escritório em 90 dias"
      ]
    },

    closingQuestion: "Dr. Fernando, o nicho que o senhor atende é exatamente o que tem maior capacidade de pagar por um advogado online.\n\nO que falta não é o conhecimento técnico — é a estratégia digital para que esse público encontre o escritório.\n\nVamos construir essa presença juntos?"
  },

  // ---- MATEUS — LICENCIADO ADEMICON VIDEIRA ----
  {
    slug: "mateus-ademicon-videira",
    clientName: "Mateus Ferreira",
    contactName: "Mateus",
    theme: "executive",
    greeting: "Você já provou que o algoritmo entrega seu conteúdo. Os números do seu próprio perfil mostram o caminho. Falta só estratégia para transformar esse alcance em clientes contemplados.",
    validUntil: "2026-05-03",
    whatsappNumber: "5549988446685",
    highlights: [
      "Rating A Ademicon 2025 — entre as melhores unidades do Brasil",
      "Seu melhor Reel: 6.910 views (4,7x seu número de seguidores)",
      "1.500+ stories arquivados — banco de conteúdo praticamente inexplorado",
      "2º lugar no Google local — perdendo por 4 avaliações"
    ],

    stats: [
      { value: "6.910", label: "Views no melhor Reel", subtext: "4,7x seu número de seguidores — alcance orgânico real" },
      { value: "1.500+", label: "Stories arquivados", subtext: "Banco de conteúdo de clientes, contemplados e entregas" },
      { value: "5,0★", label: "Nota no Google Maps", subtext: "Maior avaliação da região — 6 reviews" },
      { value: "<1,5%", label: "Engajamento atual", subtext: "9 curtidas em posts recentes vs. potencial de milhares" }
    ],

    analysis: {
      intro: "Análise completa do @mateus_ademicon_videira, do Google Meu Negócio Ademicon Videira e da concorrência local em Videira/SC. Os dados são públicos e foram coletados nas plataformas oficiais — sem suposições.",
      strengths: [
        {
          title: "Credenciais excepcionais subaproveitadas",
          description: "Rating A Ademicon 2025 (Graciosa Country Clube), unidade eleita uma das melhores do Brasil pelo 2º ano consecutivo, participação no podcast CONCAST com André Marini, formação em Direito. Hoje, quase nada disso aparece visualmente no perfil."
        },
        {
          title: "Banco de 1.500+ stories como ativo dormente",
          description: "311 stories de Clientes, 268 de Contemplados, 307 de Entregas, 275 de Comparação consórcio x financiamento, 110 sobre Golpes (educativo) e 237 de Serviços. É matéria-prima para meses de Reels de alto impacto."
        },
        {
          title: "Reels com alcance orgânico comprovado",
          description: "O melhor Reel chegou a 6.910 views (4,7x seguidores) — o algoritmo está entregando para quem ainda não te segue. Outros Reels: 2.894, 2.342, 2.070, 1.671 views. A prova de que o formato funciona é o próprio perfil."
        },
        {
          title: "Google Meu Negócio com nota máxima",
          description: "5,0★ — a mais alta da região para 'consórcio Videira SC'. Cadastrado, ativo e com o endereço correto. Falta só estratégia de captação de avaliações para assumir a 1ª posição local."
        },
        {
          title: "Identidade visual alinhada e perfil consistente",
          description: "244 publicações, paleta vermelha e preta da Ademicon respeitada, foto de perfil profissional, presença em Instagram, Facebook, LinkedIn, Threads e YouTube. Base sólida pra escalar."
        }
      ],
      opportunities: [
        {
          title: "Formato errado: estáticos com 9 curtidas vs. Reels de 6.910",
          description: "O mesmo conteúdo que chega a quase 7 mil pessoas em vídeo, quando vira card estático, recebe 9 curtidas. O problema não é o que você fala — é o formato escolhido. Migrar para Reels semanais é a alavanca número um."
        },
        {
          title: "Perfil pessoal misturado com institucional Ademicon",
          description: "Seu @ funciona como repositório institucional da franquia — não como canal de autoridade do Mateus. Quem busca consultor confiável quer ver o consultor, não só a marca. Personal brand é o que diferencia franqueado bom de franqueado A+."
        },
        {
          title: "Sem site ou landing page próprios",
          description: "Você depende 100% de Instagram e Google. Se o algoritmo muda ou o Insta cair, sua presença digital some. Não há ativo digital próprio (drmateus.com ou similar) — e o subdomínio genérico da Ademicon não posiciona seu nome no Google."
        },
        {
          title: "2º lugar no Google local por falta de avaliações",
          description: "Você tem nota 5,0 (a mais alta) mas perde a 1ª posição para concorrente com 4,5 e 10 avaliações. Faltam 5 a 10 reviews para virar a chave. Com 268 stories de contemplados, conquistar isso em 30 dias é trivial."
        },
        {
          title: "LinkedIn praticamente parado",
          description: "~15 conexões para um empresário do seu porte. LinkedIn é o canal certo pra B2B, parcerias com construtoras, advogados e contadores que indicam consórcio. Hoje está zerado."
        }
      ],
      conclusion: "Mateus, você já tem tudo que a maioria dos consultores passa anos tentando construir: prêmios reais, clientes reais, histórias reais e credibilidade real. O que falta não é conteúdo — é estratégia para transformar esse ativo em audiência e essa audiência em clientes. Um Reel seu já chegou a 6.910 pessoas. Com gestão profissional, a meta é que isso seja a média — e não o pico."
    },

    services: [
      {
        name: "Gestão de Redes Sociais — Personal Brand",
        description: "Posicionar o Mateus como autoridade pessoal em consórcio em Videira e Joaçaba — separando o consultor da marca institucional Ademicon.",
        icon: "Instagram",
        items: [
          "5 publicações semanais (2 Reels + 2 carrosséis/estáticos + 1 stories estratégico)",
          "Calendário editorial de 90 dias com pilares de conteúdo definidos",
          "Copywriting com CTAs voltados a captura no WhatsApp",
          "Otimização da bio com link de conversão",
          "Gestão do Direct e qualificação de leads",
          "Reativação do LinkedIn (2 publicações/semana — B2B e parcerias)",
          "Relatório quinzenal + reunião mensal de estratégia"
        ],
        price: "R$ 1.500,00",
        priceType: "monthly",
        priceNote: "Mensalidade"
      },
      {
        name: "Captação & Reciclagem de Conteúdo",
        description: "Transformar os 1.500+ stories arquivados em Reels de alto impacto + scripts personalizados para o Mateus gravar.",
        icon: "Camera",
        items: [
          "Reciclagem dos Highlights (Contemplados, Entregas, Comparação, Golpes)",
          "Scripts de Reels personalizados — só o Mateus grava",
          "Edição profissional com legendas, cortes e CTAs",
          "Banco de identidades visuais únicas (mantendo padrão Ademicon)",
          "Templates exclusivos para feed, Reels e stories",
          "Capas padronizadas para Highlights"
        ],
        price: "R$ 600,00",
        priceType: "monthly",
        priceNote: "Mensalidade"
      },
      {
        name: "Google Meu Negócio + SEO Local",
        description: "Assumir a 1ª posição na busca 'consórcio Videira SC' — hoje você está em 2º por falta de 4 avaliações.",
        icon: "MapPin",
        items: [
          "Otimização completa do perfil (descrição, serviços, fotos, horários)",
          "Estratégia ativa de captação de avaliações 5★ via clientes contemplados",
          "Postagens semanais dentro do Google",
          "Inserção de fotos profissionais da unidade e da equipe",
          "Monitoramento mensal de posicionamento local",
          "Replicação da estratégia para a unidade Joaçaba"
        ],
        price: "R$ 500,00",
        priceType: "monthly",
        priceNote: "Mensalidade · cobre as duas unidades"
      },
      {
        name: "Landing Page de Conversão",
        description: "Página própria com CTA direto para WhatsApp — o destino ideal das suas campanhas de tráfego pago.",
        icon: "Globe",
        items: [
          "Apresentação do Mateus (foto, credenciais, premiações)",
          "Tipos de consórcio disponíveis (imóveis, veículos, serviços)",
          "Depoimentos em vídeo de clientes contemplados",
          "Formulário de captura de leads + CTA para WhatsApp",
          "SEO local (consórcio Videira, consórcio Joaçaba SC)",
          "Domínio próprio + Google Analytics integrado"
        ],
        price: "R$ 1.500,00",
        priceType: "project",
        priceNote: "Valor único de desenvolvimento"
      }
    ],

    investment: {
      totalMonthly: "R$ 2.000,00",
      totalLabel: "Pacote Personal Brand · Crescimento",
      originalPrice: "R$ 2.600/mês + R$ 1.500 LP",
      savings: "R$ 600/mês + LP inclusa",
      breakdown: [
        { item: "Gestão de Redes Sociais", value: "R$ 1.500/mês" },
        { item: "Captação & Reciclagem", value: "R$ 600/mês" },
        { item: "Google Meu Negócio", value: "R$ 500/mês" },
        { item: "Landing Page (único)", value: "R$ 1.500" }
      ],
      packageIncludes: [
        "Gestão completa do Instagram pessoal + LinkedIn",
        "5 posts semanais (2 Reels + 2 estáticos + 1 stories estratégico)",
        "Reciclagem dos 1.500+ stories arquivados em conteúdo de feed",
        "Google Meu Negócio das duas unidades (Videira e Joaçaba)",
        "Estratégia de captação ativa de avaliações 5★",
        "Landing page de conversão (incluída no pacote)",
        "Relatório quinzenal + reunião mensal estratégica"
      ],
      paymentConditions: [
        "Pagamento mensal: R$ 2.000,00/mês via PIX ou boleto",
        "Sem fidelidade — cancelamento a qualquer momento com 30 dias de aviso",
        "Landing page inclusa no pacote (sem valor adicional)",
        "Tráfego pago disponível como upgrade futuro (verba de mídia separada)"
      ],
      notes: [
        "Contratando separadamente, o investimento seria R$ 2.600/mês + R$ 1.500 de LP",
        "O ticket médio do consórcio (R$ 100k a R$ 500k) torna o ROI altamente favorável",
        "Meta de 90 dias: 2.500 seguidores, alcance médio acima de 3.000 views por Reel, 1ª posição no Google local"
      ]
    },

    beforeAfter: {
      beforeTitle: "Cenário atual do @mateus_ademicon_videira",
      beforeItems: [
        "1.464 seguidores e crescimento lento (~1,5% engajamento)",
        "9 curtidas por post estático em média",
        "Apenas 2 Reels publicados em todo o histórico",
        "1.500+ stories de clientes/contemplados arquivados sem reaproveitamento",
        "Bio sem CTA direto para WhatsApp ou simulação",
        "Subdomínio genérico da Ademicon — sem ativo digital próprio",
        "2º lugar no Google local por falta de 4 avaliações",
        "LinkedIn praticamente parado (~15 conexões)",
        "Perfil pessoal misturado com institucional Ademicon"
      ],
      afterTitle: "Posicionamento alcançado",
      afterItems: [
        "2.500+ seguidores com taxa de engajamento acima de 3%",
        "Reels semanais com média de 3.000+ views",
        "1.500 stories convertidos em pílulas de conteúdo de alto impacto",
        "Bio profissional com link único e CTA direto para WhatsApp",
        "Landing page própria como destino do tráfego (orgânico e pago)",
        "1ª posição no Google local em \"consórcio Videira SC\"",
        "LinkedIn ativo com B2B (construtoras, contadores, advogados)",
        "Personal brand do Mateus claramente diferenciada da Ademicon institucional"
      ],
      expectedResults: "Em 90 dias o Mateus deixa de ser \"mais um licenciado Ademicon\" e passa a ser o consultor de consórcio referência em Videira e Joaçaba — com leads chegando todos os dias direto no WhatsApp."
    },

    phases: [
      {
        number: 1,
        title: "Fundação & Diagnóstico",
        objective: "Estruturar o ecossistema digital do Mateus, separar personal brand da marca institucional Ademicon e gerar os primeiros sinais visíveis de movimento no perfil.",
        deliverables: [
          "Reestruturação completa da bio com link único e CTA para WhatsApp",
          "Auditoria e organização dos 7 grupos de Highlights (capas padronizadas)",
          "Definição dos 4 pilares de conteúdo (autoridade, educação, prova social, conversão)",
          "Calendário editorial de 90 dias entregue antes do mês 2",
          "Banco visual exclusivo (templates de feed, Reels e carrossel)",
          "Otimização do Google Meu Negócio Videira + criação Joaçaba",
          "Início da campanha de captação de avaliações (meta: +5 reviews em 30 dias)",
          "Reativação do LinkedIn (foto, headline, primeira semana de posts)",
          "Primeiros 5 Reels publicados com identidade visual nova"
        ],
        expectedResult: "Perfil reposicionado, calendário pronto, 1ª avaliação extra no Google e os primeiros Reels já no ar — o algoritmo começa a entender que o perfil voltou a ser ativo."
      },
      {
        number: 2,
        title: "Escala de Conteúdo & Autoridade",
        objective: "Atingir frequência total de 5 publicações semanais, reciclar o banco de stories em material de feed e dominar o Google local.",
        deliverables: [
          "20+ publicações no mês (Reels semanais + carrosséis + stories estratégicos)",
          "Reciclagem de 30 stories de Contemplados em Reels de prova social",
          "Reels educativos sobre golpes em consórcio (alto engajamento previsto)",
          "Carrosséis comparativos consórcio x financiamento com gráficos",
          "Lançamento da landing page de conversão",
          "Avaliações no Google ultrapassando o concorrente líder",
          "Posts no LinkedIn 2x/semana focados em B2B (construtoras, contadores)",
          "Relatório quinzenal com métricas de alcance, engajamento e leads"
        ],
        expectedResult: "Crescimento mensurável: alcance médio dos Reels acima de 1.500 views, engajamento dobrando, primeiros leads chegando no WhatsApp pela landing page."
      },
      {
        number: 3,
        title: "Conversão & Liderança Digital",
        objective: "Consolidar o Mateus como autoridade pessoal em consórcio na região, com leads consistentes e a Ademicon Videira na 1ª posição do Google local.",
        deliverables: [
          "5 publicações semanais mantidas com qualidade premium",
          "Reels com performance acima de 3.000 views (média)",
          "1ª posição no Google em \"consórcio Videira SC\" e \"consórcio Joaçaba\"",
          "Mínimo de 5 a 10 leads/mês qualificados via Direct + landing page",
          "Banco de Reels reserva para 60 dias seguintes",
          "Plano sugerido de tráfego pago (Meta + Google) para o mês 4",
          "Relatório consolidado de 90 dias com ROI mensurado"
        ],
        expectedResult: "Mateus deixa de \"postar\" e passa a operar uma máquina previsível de geração de autoridade e leads. A próxima fase já vem com tráfego pago somado para acelerar o crescimento."
      }
    ],

    contentSuggestions: [
      {
        format: "Reel",
        theme: "Por que o financiamento custa 3x mais que você imagina",
        hook: "\"Ninguém te conta isso na hora da assinatura — mas eu vou te contar agora.\"",
        description: "Reel direto à câmera com o Mateus mostrando, no whiteboard ou em uma planilha, a diferença real entre R$ 300 mil financiados e a mesma carta no consórcio. Termina com CTA \"chama no Direct que eu te mando a simulação\". Formato campeão de salvamentos."
      },
      {
        format: "Carrossel",
        theme: "5 sinais de que o consórcio que você assinou é golpe",
        hook: "\"Antes de pagar a próxima parcela, leia até o final.\"",
        description: "Carrossel educativo de 8 lâminas alavancando os 110 stories de Golpes que o Mateus já produziu. Aproveita o nicho de consultor confiável e convoca quem está em consórcios suspeitos a buscar revisão. Gera DMs."
      },
      {
        format: "Reel",
        theme: "Ele esperava 8 anos. Saiu em 14 meses.",
        hook: "\"Esse cliente entrou achando que ia esperar 8 anos. Olha o que aconteceu.\"",
        description: "Reel emocional com áudio de tendência usando 1 dos 268 stories de Contemplados. Foto do cliente recebendo a carta + texto sobreposto contando a história em 3 atos. Tipo de conteúdo que o Mateus nunca produziu para feed e que tem alto potencial viral."
      },
      {
        format: "Reel",
        theme: "O que separa um licenciado A de um licenciado comum",
        hook: "\"Existem mais de 700 licenciados Ademicon no Brasil. Apenas alguns recebem o Rating A.\"",
        description: "Posicionamento direto puxando a credencial do Rating A 2025. Mostra o troféu, o prêmio no Graciosa, e termina com \"se você vai contratar consórcio, contrate com quem a própria Ademicon reconhece como referência\". Diferenciação imediata."
      },
      {
        format: "Carrossel",
        theme: "Como funciona a contemplação por lance — sem mistério",
        hook: "\"O lance é a estratégia mais subutilizada do consórcio. Mostro o porquê.\"",
        description: "Educativo de alto valor percebido. 7 lâminas explicando lance livre, lance fixo e estratégias para sair antes da hora. Usa dados e gráficos. Posiciona o Mateus como o consultor que ENSINA — não só vende."
      },
      {
        format: "Reel",
        theme: "Bastidor: dia de entrega de carta",
        hook: "\"Esse foi o melhor momento do nosso mês.\"",
        description: "Conteúdo emocional aproveitando os 307 stories de Entregas. Cliente recebendo a carta, abraço, agradecimento. Trilha sonora emotiva. É o tipo de conteúdo que humaniza o vendedor e converte por gatilho de prova social."
      }
    ],

    roiAnalysis: {
      intro: "Investir R$ 2.000/mês em estratégia digital significa R$ 24.000/ano. Vamos olhar quantos clientes esse investimento precisa gerar para se pagar — e o que acontece a partir do segundo cliente.",
      scenarios: [
        {
          label: "Cenário Conservador",
          monthlyClients: "1 cliente / 2 meses",
          avgTicket: "R$ 150.000",
          avgCommission: "~R$ 4.500",
          annualRevenue: "R$ 27.000",
          roi: "1,1x · paga o ano"
        },
        {
          label: "Cenário Esperado",
          monthlyClients: "1 cliente / mês",
          avgTicket: "R$ 200.000",
          avgCommission: "~R$ 6.000",
          annualRevenue: "R$ 72.000",
          roi: "3x · sobra R$ 48k"
        },
        {
          label: "Cenário Otimista",
          monthlyClients: "2 clientes / mês",
          avgTicket: "R$ 250.000",
          avgCommission: "~R$ 7.500",
          annualRevenue: "R$ 180.000",
          roi: "7,5x · sobra R$ 156k"
        }
      ],
      conclusion: "Mateus, no cenário mais conservador (1 cliente a cada 2 meses) o investimento já se paga. No cenário esperado — perfeitamente alcançável dado o seu Reel de 6.910 views orgânicos — você multiplica por 3 o que investe. O consórcio é um dos poucos produtos onde 1 carta paga meses inteiros de marketing."
    },

    differentials: [
      "Equipe multidisciplinar: design, código, tráfego e estratégia sob o mesmo teto",
      "Tecnologia proprietária: ArtAtende CRM para gestão de WhatsApp e qualificação de leads",
      "Especialistas em personal brand para profissionais liberais e franqueados",
      "Metodologia própria com foco em ROI e métricas mensuráveis",
      "Suporte dedicado: cada cliente tem um gestor responsável direto",
      "Produção audiovisual premium com cinema quality e drone 4K"
    ],

    closingQuestion: "Mateus, seu próprio perfil já provou que 1 Reel pode chegar a 6.910 pessoas sem gastar R$ 1 em anúncio.\n\nA pergunta não é se funciona — é quanto cliente você ainda vai deixar passar antes de transformar isso em rotina.\n\nVamos construir essa máquina juntos?"
  },

  // ---- ADEMICON CHAPECÓ & SMO — SISTEMA FINANCEIRO ----
  {
    slug: "ademicon-chapeco-smo",
    clientName: "Ademicon Chapecó & SMO",
    contactName: "Equipe Ademicon",
    theme: "executive",
    proposalType: "sistema",
    greeting: "Sistema financeiro multi-filial sob medida + Bot WhatsApp inteligente para Chapecó Centro, EFAPI e São Miguel do Oeste. Acabar com o Excel, ganhar 3 horas por mês e ter rastreabilidade completa de cada centavo.",
    validUntil: "2026-06-03",
    whatsappNumber: "5549988446685",

    services: [],
    investment: { totalMonthly: "R$ 199,00" },

    systemPain: {
      title: "Hoje vs. Depois do Sistema",
      intro: "A diferença não está no software. Está no tempo que volta pro seu dia, na confiança nos números e na rastreabilidade que vocês passam a ter.",
      before: {
        dayLabel: "Segunda-feira · 8h",
        title: "Como é hoje",
        items: [
          "Abrem 3 planilhas: Chapecó Centro, EFAPI e SMO",
          "Consolidam manualmente em uma aba \"CONSOLIDADO\"",
          "Criam fórmulas SUM para juntar receitas e despesas",
          "Mandam para o contador por email",
          "Contador volta: \"a coluna D não bateu com a nota\"",
          "Mais 1 hora caçando o erro nas planilhas",
          "Ninguém sabe quem alterou o quê (zero auditoria)"
        ],
        result: "3 horas perdidas, 1 erro encontrado depois, zero rastreabilidade."
      },
      after: {
        dayLabel: "Segunda-feira · 8h",
        title: "Como vai ser",
        items: [
          "Abre o sistema (qualquer dispositivo, 24/7)",
          "Clica em \"Relatório · Consolidado\"",
          "Vê em 10 segundos: receita, despesa, resultado por filial",
          "Exporta PDF e manda para o contador",
          "Contador não precisa conferir — sistema tem auditoria completa",
          "Bot WhatsApp pergunta o saldo de qualquer filial em segundos",
          "Cada lançamento tem nome, hora e IP de quem fez"
        ],
        result: "10 minutos, zero erros, rastreabilidade total. Time pode focar em vender consórcio."
      }
    },

    systemModules: [
      {
        icon: "LayoutDashboard",
        title: "Dashboard Inteligente",
        description: "Painel consolidado de todas as filiais em tempo real. Tudo que você precisa saber em uma tela.",
        features: [
          "Saldo consolidado das 3 filiais (Chapecó Centro + EFAPI + SMO)",
          "Receita vs. Despesa dos últimos 30 dias",
          "Gráficos de fluxo de caixa em tempo real",
          "Alertas de contas vencidas em destaque",
          "Últimas 10 transações com filtro por filial",
          "Acesso por permissão (cada usuário vê o que pode)"
        ]
      },
      {
        icon: "ArrowLeftRight",
        title: "Lançamento de Transações",
        description: "Entrada e saída em segundos, com categorização automática que aprende com o tempo.",
        features: [
          "Lançamento entrada/saída com 1 clique",
          "Categoria automática (sistema aprende seus padrões)",
          "Método de pagamento: PIX, boleto, dinheiro, TED, CC",
          "Status: pendente, pago, agendado",
          "Edição com regra de 24h + auditoria completa",
          "Cancelamento por soft-delete (mantém histórico)"
        ]
      },
      {
        icon: "Calendar",
        title: "Contas a Pagar / Receber",
        description: "Visão clara de tudo que entra e tudo que sai — agrupado por urgência e filial.",
        features: [
          "Contas vencidas em destaque vermelho",
          "Vencimentos próximos (1-7 dias) em alerta amarelo",
          "Marcar como pago em 1 clique",
          "Histórico de pagamentos por fornecedor",
          "Filtros por status, vencimento, filial e categoria",
          "Notificações automáticas por email e WhatsApp"
        ]
      },
      {
        icon: "FileBarChart",
        title: "Relatórios Profissionais",
        description: "Fluxo de caixa, despesa por categoria, receita por filial — tudo exportável em Excel e PDF.",
        features: [
          "Fluxo de caixa mensal consolidado ou por filial",
          "Despesa por categoria com gráficos comparativos",
          "Receita por filial (Chapecó Centro vs EFAPI vs SMO)",
          "Comparativo: este mês vs mês anterior",
          "Auditoria completa: quem fez, quando, o quê",
          "Export Excel, PDF e CSV"
        ]
      },
      {
        icon: "MessageSquare",
        title: "Bot WhatsApp Integrado",
        description: "Lance transações, consulte saldos e receba alertas pelo WhatsApp — sem abrir o sistema.",
        features: [
          "\"Aluguel Centro 12 mil\" → bot lança automaticamente",
          "\"Qual meu saldo?\" → bot responde com saldo das 3 filiais",
          "\"Contas vencendo hoje?\" → bot lista tudo",
          "\"Corrigir, era 12.5\" → bot atualiza valor",
          "Notificação diária 8h: contas a pagar do dia",
          "Alertas de saldo baixo em tempo real"
        ]
      },
      {
        icon: "Users",
        title: "Permissões Granulares",
        description: "Cada usuário vê e faz só o que pode. Admin total, gerente por filial, contador, visualizador.",
        features: [
          "Admin: acesso total a todas as filiais",
          "Gerente Filial: acesso restrito à sua unidade",
          "Contador: leitura/escrita em todas as filiais",
          "Visualizador: leitura apenas (relatórios)",
          "Trilha de auditoria de toda ação (quem, quando, IP)",
          "Desconexão automática após 30 min de inatividade"
        ]
      },
      {
        icon: "ShieldCheck",
        title: "Segurança & LGPD",
        description: "HTTPS de ponta a ponta, backup diário automático, conformidade LGPD garantida.",
        features: [
          "Criptografia HTTPS em toda a aplicação",
          "Backup automático diário (recuperação em 24h)",
          "Conformidade LGPD: dados protegidos por lei",
          "Auditoria 100% rastreável",
          "Login com senha forte + recuperação por email",
          "Direito de export de dados a qualquer momento"
        ]
      },
      {
        icon: "Zap",
        title: "Performance & Disponibilidade",
        description: "99,9% de uptime garantido. Sistema rápido, responsivo, acessível de qualquer dispositivo.",
        features: [
          "Uptime garantido de 99,9% (máx 2h down/mês)",
          "Dashboard carrega em menos de 2 segundos",
          "Acesso 24/7 de qualquer dispositivo (PWA)",
          "Funciona em desktop, tablet e celular",
          "Infraestrutura escalável (cresce com você)",
          "Monitoramento ativo (Sentry para erros)"
        ]
      }
    ],

    systemSprints: [
      {
        number: 1,
        weeks: "Semana 1",
        title: "Kick-off & Fundação",
        deliverables: [
          "Reunião de alinhamento (1h via Zoom)",
          "Recebimento das planilhas históricas",
          "Setup completo da infraestrutura (Vercel + Supabase + n8n)",
          "Modelagem do banco de dados (8 tabelas)",
          "Definição de permissões por usuário"
        ],
        milestone: "Infra pronta, banco modelado, equipe alinhada — pronto para começar a codar."
      },
      {
        number: 2,
        weeks: "Semana 2",
        title: "Auth & Dashboard",
        deliverables: [
          "Login/cadastro com email + senha",
          "Recuperação de senha por email",
          "Middleware de permissões (RBAC)",
          "Dashboard básico com saldos consolidados",
          "Painel admin: criar usuários e filiais"
        ],
        milestone: "Você consegue fazer login, criar usuários e ver os primeiros números no dashboard."
      },
      {
        number: 3,
        weeks: "Semana 3",
        title: "Transações & Categorias",
        deliverables: [
          "Formulário de lançamento (entrada/saída)",
          "CRUD completo de transações",
          "Edição com regra de 24h + auditoria",
          "Cancelamento por soft-delete",
          "CRUD de categorias pré-populado"
        ],
        milestone: "Time já consegue lançar transações reais — substitui o Excel a partir daqui."
      },
      {
        number: 4,
        weeks: "Semana 4",
        title: "Contas & Notificações",
        deliverables: [
          "Visão de contas a pagar/receber",
          "Filtros por urgência, filial e categoria",
          "Marcar como pago em 1 clique",
          "Notificações por email para contas vencendo",
          "Job diário de checagem de vencimentos"
        ],
        milestone: "Sistema avisa antes de vencer. Ninguém mais é pego de surpresa."
      },
      {
        number: 5,
        weeks: "Semana 5",
        title: "Relatórios & Auditoria",
        deliverables: [
          "Fluxo de caixa consolidado e por filial",
          "Despesa por categoria com gráficos",
          "Receita por filial (comparativo)",
          "Tela de auditoria (admin only)",
          "Export Excel + PDF + CSV"
        ],
        milestone: "Contador recebe relatório pronto. Não precisa mais conferir manualmente."
      },
      {
        number: 6,
        weeks: "Semana 6",
        title: "Bot WhatsApp + n8n",
        deliverables: [
          "Endpoint /api/bot/intent (parser de mensagens)",
          "Workflow n8n integrando UazAPI",
          "5 intents: nova_transacao, listar, saldo, atualizar, confirmar",
          "Notificações proativas via WhatsApp",
          "Logs completos de todas as conversas"
        ],
        milestone: "Bot ativo. Você lança transação no WhatsApp e cai direto no sistema."
      },
      {
        number: 7,
        weeks: "Semana 7",
        title: "QA, Migração & Go-Live",
        deliverables: [
          "Migração de dados históricos (até 12 meses)",
          "Validação de saldos (deve bater com Excel)",
          "Testes end-to-end de todos os fluxos",
          "Treinamento de 2h via Zoom para a equipe",
          "Deploy em produção + suporte intensivo"
        ],
        milestone: "Sistema 100% no ar, dados migrados, equipe treinada. Excel pode ser arquivado."
      }
    ],

    systemStack: [
      {
        category: "Frontend",
        items: [
          { name: "Next.js 14", role: "Framework React de ponta com renderização híbrida" },
          { name: "TypeScript", role: "Tipagem forte para zero bugs em runtime" },
          { name: "Tailwind + shadcn/ui", role: "Interface elegante e consistente" },
          { name: "Recharts", role: "Gráficos interativos profissionais" }
        ]
      },
      {
        category: "Backend",
        items: [
          { name: "Next.js API Routes", role: "Servidor Node.js serverless" },
          { name: "Prisma ORM", role: "Acesso ao banco com type-safety" },
          { name: "NextAuth.js v5", role: "Autenticação JWT segura" },
          { name: "Zod", role: "Validação de schemas em runtime" }
        ]
      },
      {
        category: "Infraestrutura",
        items: [
          { name: "Vercel", role: "Deploy automático com SSL e CDN global" },
          { name: "Supabase (PostgreSQL)", role: "Banco gerenciado com backup diário" },
          { name: "Sentry", role: "Monitoramento de erros em tempo real" },
          { name: "Resend/SendGrid", role: "Envio transacional de emails" }
        ]
      },
      {
        category: "Bot & Integração",
        items: [
          { name: "n8n", role: "Orquestrador de workflows (no nosso VPS)" },
          { name: "UazAPI", role: "Gateway WhatsApp Business" },
          { name: "REST API customizada", role: "Endpoint /api/bot/intent" },
          { name: "Cron Jobs", role: "Notificações diárias automáticas" }
        ]
      }
    ],

    systemPricing: {
      setup: {
        value: "R$ 7.500,00",
        label: "Implantação completa",
        payment: "50% no início (R$ 3.750) + 50% no go-live (R$ 3.750)",
        includes: [
          "Setup técnico de toda a plataforma",
          "Migração de dados históricos (até 12 meses)",
          "Criação de usuários iniciais e configuração de filiais",
          "Setup completo do bot WhatsApp",
          "Treinamento de 2h via Zoom para a equipe",
          "Primeiro mês de suporte prioritário"
        ]
      },
      monthly: {
        value: "R$ 199,00",
        label: "SaaS mensal",
        annualValue: "R$ 1.990,00/ano",
        annualNote: "equivale a R$ 165,83/mês — economia de 17%",
        includes: [
          "Até 3 filiais (cobre Chapecó Centro, EFAPI e SMO)",
          "Usuários ilimitados",
          "Transações ilimitadas",
          "Bot WhatsApp completo com notificações",
          "Backup automático diário",
          "Auditoria 100% rastreável",
          "Suporte 24-48h via email/WhatsApp",
          "Uptime garantido de 99,9%"
        ]
      },
      year1Total: "R$ 9.888,00",
      paybackDays: "17 dias",
      notes: [
        "Garantia de reembolso integral da implantação se o sistema não funcionar nos primeiros 30 dias.",
        "A partir do 2º ano, somente a mensalidade — sem novo custo de implantação.",
        "Sem fidelidade contratual além de 30 dias de aviso prévio para cancelamento."
      ]
    },

    systemComparison: {
      competitorName: "Mobills Premium",
      rows: [
        { feature: "Multi-filial (3 unidades)", excel: "false", competitor: "false", artdesign: "true" },
        { feature: "Bot WhatsApp integrado", excel: "false", competitor: "false", artdesign: "true" },
        { feature: "Permissões por usuário/filial", excel: "false", competitor: "false", artdesign: "true" },
        { feature: "Auditoria completa (quem-quando-o quê)", excel: "false", competitor: "false", artdesign: "true" },
        { feature: "Relatórios consolidados", excel: "Manual", competitor: "Limitado", artdesign: "true" },
        { feature: "Notificações automáticas", excel: "false", competitor: "true", artdesign: "true" },
        { feature: "Backup diário automático", excel: "false", competitor: "true", artdesign: "true" },
        { feature: "Customizado pra Ademicon", excel: "false", competitor: "false", artdesign: "true" },
        { feature: "Suporte dedicado", excel: "-", competitor: "Genérico", artdesign: "true" },
        { feature: "Custo Year 1", excel: "R$ 0", competitor: "R$ 199", artdesign: "R$ 9.888" },
        { feature: "Valor entregue", excel: "Nenhum", competitor: "App pessoal", artdesign: "Operação inteira" }
      ]
    },

    faq: [
      {
        question: "E se vocês saírem do negócio? Meus dados ficam reféns?",
        answer: "Não. Seus dados são seus, sempre. Você pode exportar tudo para Excel/CSV a qualquer momento. Além disso, temos backup diário automático e contrato com cláusula de portabilidade — se quiser sair, sai com tudo na mão."
      },
      {
        question: "Quantos usuários posso ter no sistema?",
        answer: "Ilimitado. Pode cadastrar todos os funcionários das 3 filiais, contador, gerentes — quantos forem necessários. Não cobramos por usuário."
      },
      {
        question: "E se a operação crescer para 5 filiais?",
        answer: "O sistema já foi pensado pra escalar. O plano atual cobre até 3 filiais. A partir da 4ª, conversamos sobre upgrade — mas o software já suporta tecnicamente."
      },
      {
        question: "Como funciona o bot WhatsApp na prática?",
        answer: "Você manda mensagem normal: \"Aluguel Centro 12 mil\". O bot entende, lança no sistema e confirma. \"Qual meu saldo?\" — bot responde com saldo das 3 filiais. Sem app extra, sem login — é o mesmo WhatsApp que você já usa."
      },
      {
        question: "Quanto tempo leva pra migrar nossos dados do Excel?",
        answer: "1 a 2 dias. A gente faz tudo: você manda as planilhas, nós convertemos e validamos. Você só aprova os totais finais antes do go-live."
      },
      {
        question: "Se precisar de algo customizado fora do escopo?",
        answer: "Conversamos. Customizações dentro do tema (ex: novo relatório, nova categoria especial) entram no roadmap futuro. Customizações maiores são orçadas à parte com prazo definido."
      },
      {
        question: "Qual o horário de suporte?",
        answer: "Segunda a sexta, das 9h às 18h (horário de SC). Resposta em 24-48h via email/WhatsApp. Para emergências (sistema fora do ar), atendimento imediato."
      },
      {
        question: "Posso cancelar depois?",
        answer: "Sim, sem penalidade. Basta avisar com 30 dias de antecedência. Você sai com seus dados e sem multa contratual."
      }
    ],

    differentials: [
      "16 anos de mercado entregando sistemas customizados",
      "Equipe multidisciplinar: design, código, infraestrutura e suporte sob o mesmo teto",
      "Tecnologia proprietária: ArtAtende CRM (gestão de WhatsApp em produção)",
      "Metodologia própria com sprints semanais e milestones claros",
      "Suporte dedicado: cada cliente tem um gestor responsável direto",
      "Garantia de reembolso integral nos primeiros 30 dias se o sistema não funcionar"
    ],

    closingQuestion: "Hoje vocês perdem 3 horas todo mês consolidando planilha — e ainda assim erram, ainda assim o contador volta cobrando.\n\nEm 7 semanas isso acaba. Em 17 dias o investimento se paga. A partir daí, só sobra eficiência.\n\nVamos começar segunda?"
  }
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
