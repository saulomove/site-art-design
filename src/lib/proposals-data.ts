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
  setupLabel?: string;
  setupIncludes?: string[];
  setupOriginalPrice?: string;
  setupNote?: string;
  /** Divisão do valor conjunto entre as partes (ex.: R$ 900 por perfil). */
  splitLabel?: string;
  splitItems?: { label: string; value: string }[];
  /** O que explicitamente NÃO está incluso — renderizado em destaque. */
  exclusions?: string[];
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


// ------------------------------------------------------------
// Auditoria de presença digital (tema "vinicola")
// ------------------------------------------------------------


export interface ProposalScreenSpec {
  key: string;
  title: string;
  role: string;
  description: string;
  points: string[];
}

export interface ProposalAuditFinding {
  ref: string;
  severity: "critico" | "atencao" | "forte" | "oportunidade";
  area: string;
  title: string;
  description: string;
  /** Linhas de evidência transcritas — renderizadas em fonte mono. */
  evidence?: string[];
  impact?: string;
}

export interface ProposalScoreItem {
  label: string;
  sublabel?: string;
  /** Nota de 0 a 10. */
  score: number;
}

export interface ProposalBenchmarkRow {
  name: string;
  note?: string;
  highlight?: boolean;
  cells: string[];
}

export interface ProposalBenchmark {
  title: string;
  intro?: string;
  columns: string[];
  rows: ProposalBenchmarkRow[];
  footnote?: string;
}

export interface ProposalGoal {
  indicator: string;
  today: string;
  target: string;
  how: string;
}

export interface ProposalArtPiece {
  image: string;
  format: string;
  title: string;
  note: string;
}

export interface ProposalCaveat {
  title: string;
  description: string;
}

export interface ProposalBeforeAfter {
  beforeTitle: string;
  beforeItems: string[];
  afterTitle: string;
  afterItems: string[];
  expectedResults: string;
}

// ------------------------------------------------------------
// Propostas multi-empresa (duas marcas em um único documento)
// ------------------------------------------------------------

export interface ProposalCompanyDiagnosis {
  positives: string[];
  attentionIntro: string;
  attentionPoints: string[];
  opportunity: string;
}

export interface ProposalCompanyPricingRow {
  item: string;
  value: string;
  type: "project" | "monthly" | "session";
}

export interface ProposalCompany {
  key: string;
  name: string;
  shortName: string;
  handle: string;
  tagline: string;
  location?: string;
  /** Acento visual da empresa dentro do tema. */
  accent: "moss" | "gold";
  /** Chave do iconMap local do tema (nunca usada para montar classe Tailwind). */
  icon: string;
  diagnosis: ProposalCompanyDiagnosis;
  socialApproach: string;
  socialPriorities: string[];
  siteStructure: string[];
  siteNote: string;
  droneShots: string[];
  contentExamples: string[];
  profileHighlights: string[];
  pricing: ProposalCompanyPricingRow[];
}

export interface ProposalAuthorityPillar {
  number: string;
  title: string;
  description: string;
}

export interface ProposalObjectiveChain {
  intro: string;
  chain: string[];
  conclusion: string;
}

export interface ProposalValueAnchor {
  notList: string[];
  statement: string;
  perceptions: string[];
  closing: string;
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
  /** Slug do contrato em /contrato/[slug] — habilita o botão "Gerar contrato". */
  auditFindings?: ProposalAuditFinding[];
  screens?: ProposalScreenSpec[];
  auditScores?: ProposalScoreItem[];
  benchmark?: ProposalBenchmark;
  goals?: ProposalGoal[];
  caveats?: ProposalCaveat[];
  artDirection?: ProposalArtPiece[];
  contractSlug?: string;
  companies?: ProposalCompany[];
  authorityPillars?: ProposalAuthorityPillar[];
  objectiveChain?: ProposalObjectiveChain;
  valueAnchor?: ProposalValueAnchor;
  theme?: "standard" | "premium" | "legal" | "executive" | "biomass" | "forestry" | "industrial" | "pastoral" | "campo" | "aciav" | "vinicola" | "genyus";
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
  /** Os módulos vendáveis do sistema, cada um com preço próprio. */
  systemPackages?: {
    key: string;
    name: string;
    tagline: string;
    price: string;
    installments: string;
    weeks: string;
    icon: string;
    pain: string;
    screens: string[];
    deliverables: string[];
    highlight?: boolean;
  }[];
  /** O que vem junto com qualquer módulo contratado. */
  systemBase?: {
    intro: string;
    items: { title: string; description: string }[];
  };
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
    marketValue?: string;
    marketValueNote?: string;
    setup: { value: string; label: string; badge?: string; includes: string[]; payment: string };
    monthly: { value: string; label: string; includes: string[]; annualValue?: string; annualNote?: string };
    standaloneComparison?: {
      title: string;
      subtitle: string;
      items: { item: string; value: string; description?: string }[];
      totalLabel: string;
      total: string;
      artdesignLabel: string;
      artdesignValue: string;
      savings: string;
      closing: string;
    };
    year1Total: string;
    paybackDays?: string;
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
        category: "Experiência do Usuário",
        items: [
          { name: "Plataforma de Última Geração", role: "Construída com a mesma tecnologia usada por Netflix, Uber e ChatGPT — performance e estabilidade comprovadas em escala global" },
          { name: "Sistema à Prova de Erros", role: "Camada de proteção que detecta inconsistências antes de chegar ao usuário — zero crashes em produção" },
          { name: "Design Profissional Adaptável", role: "Interface limpa que funciona perfeitamente em desktop, tablet e celular sem perder funcionalidade" },
          { name: "Visualização Inteligente de Dados", role: "Gráficos interativos que mostram o que importa em segundos — sem precisar montar planilha" }
        ]
      },
      {
        category: "Motor & Processamento",
        items: [
          { name: "Processamento em Nuvem Escalável", role: "Servidores que crescem automaticamente conforme a demanda — nunca trava em momento crítico" },
          { name: "Banco de Dados Inteligente", role: "Camada de proteção que torna impossível perder ou corromper informações — cada lançamento auditado" },
          { name: "Autenticação de Nível Bancário", role: "Login com criptografia avançada e proteção contra invasão e roubo de credenciais" },
          { name: "Validação em Tempo Real", role: "Cada dado é verificado antes de ser salvo — impossível registrar erro de digitação ou estrutura" }
        ]
      },
      {
        category: "Estrutura & Segurança",
        items: [
          { name: "Hospedagem Premium Global", role: "Servidores espalhados pelo mundo para acesso rápido de qualquer lugar — SSL bancário incluso" },
          { name: "Backup Automático Diário", role: "Replicação em múltiplas regiões — seus dados protegidos contra qualquer falha de hardware" },
          { name: "Monitoramento 24/7 Inteligente", role: "Sistema alerta nossa equipe ANTES de você perceber qualquer problema — manutenção preventiva" },
          { name: "Comunicação Profissional", role: "Notificações por email entregues com 99,9% de taxa de chegada — sem cair em spam" }
        ]
      },
      {
        category: "Inteligência Conversacional",
        items: [
          { name: "IA Conversacional Própria", role: "Inteligência artificial que entende suas mensagens em linguagem natural — sem comandos rígidos ou códigos para decorar" },
          { name: "Conexão Oficial WhatsApp Business", role: "Integração validada e estável com o WhatsApp — mensagens chegam e respondem em tempo real" },
          { name: "Orquestração Inteligente", role: "Camada proprietária da ArtDesign que conecta o WhatsApp à sua operação financeira de forma transparente" },
          { name: "Automação 24/7", role: "Robôs que trabalham por você mesmo de madrugada — alertas, lembretes e cobranças automáticas" }
        ]
      }
    ],

    systemPricing: {
      marketValue: "R$ 40.000,00",
      marketValueNote: "Valor de mercado para um sistema customizado deste porte (multi-filial + bot WhatsApp + auditoria + relatórios profissionais).",
      setup: {
        value: "R$ 15.000,00",
        label: "Implantação completa",
        badge: "62% OFF · Indicação Ademicon",
        payment: "50% no início (R$ 7.500) + 50% no go-live (R$ 7.500)",
        includes: [
          "Desenvolvimento do sistema sob medida para a operação Ademicon",
          "Migração de dados históricos (até 12 meses)",
          "Configuração das 3 filiais (Chapecó Centro, EFAPI e SMO)",
          "Setup completo da inteligência conversacional do WhatsApp",
          "Treinamento ao vivo de 2h via Zoom para toda a equipe",
          "Primeiro mês de suporte prioritário com gestor dedicado"
        ]
      },
      monthly: {
        value: "R$ 149,00",
        label: "Estrutura, suporte e manutenção",
        annualValue: "R$ 1.490,00/ano",
        annualNote: "equivale a R$ 124,17/mês — economia de 17%",
        includes: [
          "Hospedagem premium global com SSL bancário",
          "Backup automático diário em múltiplas regiões",
          "Monitoramento 24/7 com alerta proativo",
          "Suporte técnico dedicado (resposta em 24-48h)",
          "Atualizações de segurança e novas funcionalidades",
          "Bot WhatsApp ativo com notificações automáticas",
          "Uptime garantido de 99,9%",
          "Usuários e transações ilimitadas"
        ]
      },
      standaloneComparison: {
        title: "Por que vale mais deixar a estrutura conosco",
        subtitle: "Se vocês fossem manter sozinhos toda a infraestrutura necessária para um sistema deste porte rodar com segurança, pagariam por mês:",
        items: [
          { item: "VPS dedicada de produção", value: "R$ 480,00", description: "Servidor robusto com recursos para multi-filial" },
          { item: "Domínio próprio + certificado SSL", value: "R$ 25,00", description: "Endereço próprio e criptografia bancária" },
          { item: "Backup gerenciado em nuvem", value: "R$ 120,00", description: "Cópias diárias replicadas em múltiplas regiões" },
          { item: "Serviço de envio de email", value: "R$ 80,00", description: "Notificações entregues sem cair em spam" },
          { item: "Monitoramento profissional 24/7", value: "R$ 90,00", description: "Alertas ativos antes do problema afetar usuários" },
          { item: "Gateway WhatsApp Business oficial", value: "R$ 120,00", description: "Conexão validada com o WhatsApp" },
          { item: "Suporte técnico (1 dev parcial)", value: "R$ 1.500,00", description: "Para correções, ajustes e dúvidas técnicas" }
        ],
        totalLabel: "Custo total se contratado isolado",
        total: "R$ 2.415,00/mês",
        artdesignLabel: "Com a ArtDesign",
        artdesignValue: "R$ 149,00/mês",
        savings: "R$ 2.266,00/mês de economia",
        closing: "Mais de R$ 27.000 economizados por ano — e ainda recebem uma equipe técnica dedicada por trás. Sistema, estrutura e suporte: tudo sob a mesma responsabilidade. Se algo trava, vocês têm um único número pra ligar."
      },
      year1Total: "R$ 16.788,00",
      notes: [
        "Garantia de reembolso integral da implantação se o sistema não funcionar nos primeiros 30 dias.",
        "A partir do 2º ano, somente a mensalidade de R$ 149/mês — sem novo custo de implantação.",
        "Sem fidelidade contratual além de 30 dias de aviso prévio para cancelamento.",
        "Indicação de parceiros Ademicon: desconto de 62% mantido para toda a rede licenciada."
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
        { feature: "Estrutura e infra inclusas", excel: "-", competitor: "Compartilhada", artdesign: "true" },
        { feature: "Custo mensal", excel: "R$ 0", competitor: "R$ 199", artdesign: "R$ 149" },
        { feature: "Valor entregue", excel: "Nenhum", competitor: "App pessoal genérico", artdesign: "Operação inteira sob medida" }
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
  },

  // ---- JOMA PELLET ----
  {
    slug: "joma-pellet",
    clientName: "Joma Pellet",
    contactName: "Rafael",
    theme: "biomass",
    greeting: "Preparamos uma estratégia digital completa para transformar o potencial industrial e a certificação da Joma Pellet em vendas reais, autoridade de mercado e crescimento nos segmentos B2B, B2C e de exportação.",
    validUntil: "2026-05-28",
    whatsappNumber: "5547996345644",
    highlights: [
      "Certificação ENplus A1 — diferencial raríssimo no Brasil",
      "Estratégia integrada: B2B + B2C + Exportação",
      "Transparência total — sem margem sobre custos externos",
      "Permanência por resultado — sem fidelização"
    ],
    analysis: {
      intro: "Realizamos uma análise completa do ecossistema digital da Joma Pellet — site, redes sociais, Mercado Livre, Google e mercado competitivo. O diagnóstico é claro: produto excepcional, presença digital invisível.",
      strengths: [
        {
          title: "Certificação ENplus A1 (BR 039) + ISO 17225-2",
          description: "A Joma está entre as pouquíssimas fabricantes brasileiras com certificação internacional de pellets. Isso é o maior ativo de vendas que existe no segmento — e está sendo subaproveitado digitalmente."
        },
        {
          title: "Fábrica própria de 3.000 m² com produção própria",
          description: "Controle total da cadeia produtiva, poder de precificação e capacidade de escala. Isso é impossível de replicar rapidamente por concorrentes — e deve ser comunicado com força."
        },
        {
          title: "Produto 100% pinus conífera virgem, sem aditivos",
          description: "Qualidade verificável por laudo técnico. Em um mercado onde muitos produtos têm aditivos e baixo padrão, a pureza do produto da Joma é argumento de venda no B2C (pet) e no B2B (indústria e exportação)."
        },
        {
          title: "Localização estratégica no Sul do Brasil + Exportação",
          description: "Santa Cecília/SC está no coração do polo madeireiro catarinense. Site já bilíngue PT/EN, associada à ABIMCI, com histórico de exportação para o mercado europeu."
        }
      ],
      opportunities: [
        {
          title: "Invisível nos termos de busca transacionais",
          description: "A empresa só aparece no Google quando alguém busca pelo próprio nome. Para 'comprar pellet madeira', 'granulado higiênico pinus' ou 'pellet para lareira', a Joma não existe — e o concorrente aparece patrocinado."
        },
        {
          title: "Zero investimento em tráfego pago (Google Ads e Meta Ads)",
          description: "Nenhuma campanha ativa identificada. Enquanto isso, concorrentes já compram tráfego no nicho. Há janela de oportunidade clara antes que outros dominem o espaço pago."
        },
        {
          title: "Instagram com 421 seguidores em 3 anos de operação",
          description: "19 posts e zero Reels com performance expressiva. O perfil existe, mas não cresce. A certificação ENplus A1 sozinha poderia viralizar com o argumento e formato certos."
        },
        {
          title: "Canal Mercado Livre sem otimização e sem reputação",
          description: "Concorrentes com produtos inferiores têm 1.800 a 3.800 avaliações. A conta da Joma no ML existe mas está invisível no Google Shopping e sem estratégia de avaliações e ML Ads."
        },
        {
          title: "Site sem geração de leads",
          description: "One-page institucional sem formulário de captura, sem blog, sem SEO técnico por página. Todo visitante que não clicar no WhatsApp é perdido para sempre."
        },
        {
          title: "Apenas 4 avaliações no Google Meu Negócio",
          description: "Para uma empresa com distribuição nacional, é sinal de ausência de estratégia de pós-venda e coleta de reputação. Isso prejudica conversão B2B e confiança de novos distribuidores."
        }
      ],
      conclusion: "A Joma Pellet tem o melhor produto do mercado — certificado, rastreável e com capacidade industrial real. O problema não é o produto. É que o mercado não consegue encontrá-la. Com uma estratégia digital integrada, isso muda rapidamente."
    },
    services: [
      {
        name: "Vídeo Institucional",
        description: "Apresentação profissional da Joma Pellet — quem é, o que produz, seus diferenciais, estrutura, qualidade e certificações. Utilizável no site, redes sociais, WhatsApp comercial e apresentações B2B.",
        icon: "video",
        items: [
          "Captação de imagens na empresa",
          "Roteiro estratégico + direção de cenas",
          "Gravações: estrutura, produção, produto e equipe",
          "Edição profissional com trilha e tratamento de imagem",
          "Inserção de textos e legendas na tela",
          "Versão horizontal (site) + adaptação para redes sociais"
        ],
        price: "R$ 1.500",
        priceType: "project"
      },
      {
        name: "Renovação do Site Bilíngue",
        description: "Novo site moderno, comercial e preparado para gerar contatos — em português e inglês — com foco em credibilidade para clientes nacionais e compradores internacionais.",
        icon: "globe",
        items: [
          "Novo layout responsivo (mobile, tablet e desktop)",
          "Versão completa em português e inglês",
          "Páginas: home, empresa, produtos, aplicações, certificações e contato",
          "Textos comerciais otimizados + botão WhatsApp",
          "Integração com redes sociais e vídeo institucional",
          "Otimização básica para Google (SEO on-page)",
          "Configuração de segurança + treinamento de uso"
        ],
        price: "R$ 4.500",
        priceType: "project"
      },
      {
        name: "Gestão de Redes Sociais",
        description: "Criação de conteúdos estratégicos para Instagram e Facebook — mantendo a marca ativa, gerando autoridade no segmento e atraindo clientes dos mercados B2B e B2C.",
        icon: "megaphone",
        items: [
          "Planejamento mensal de conteúdo",
          "12 publicações mensais (3 por semana)",
          "Artes + legendas estratégicas",
          "Conteúdos educativos, institucionais e comerciais",
          "Publicações sobre aplicações, certificações e sustentabilidade",
          "Stories estratégicos conforme calendário",
          "Relatório mensal de desempenho"
        ],
        price: "R$ 2.000",
        priceType: "monthly"
      }
    ],
    investment: {
      totalMonthly: "R$ 1.900",
      totalLabel: "Pacote Crescimento Digital Joma Pellet",
      originalPrice: "R$ 6.000",
      savings: "sem pagamento inicial",
      packageIncludes: [
        "Vídeo Institucional completo",
        "Renovação do site em PT + EN",
        "Gestão mensal de Instagram e Facebook",
        "Planejamento estratégico de conteúdo",
        "Relatório mensal de desempenho",
        "Google Meu Negócio (otimização básica)",
        "Suporte estratégico mensal"
      ],
      breakdown: [
        { item: "Vídeo Institucional (projeto único)", value: "R$ 1.500" },
        { item: "Renovação do Site Bilíngue (projeto único)", value: "R$ 4.500" },
        { item: "Gestão de Redes Sociais", value: "R$ 2.000/mês" }
      ],
      paymentConditions: [
        "Pacote: R$ 1.900/mês — contrato inicial de 6 meses",
        "Sem pagamento inicial — site e vídeo diluídos no pacote mensal",
        "Contratação individual: vídeo 50% aprovação + 50% entrega; site 50% aprovação + 50% publicação",
        "Pagamento mensal via boleto ou PIX"
      ],
      notes: [
        "Domínio, hospedagem e ferramentas externas não inclusos",
        "Verba de anúncios (Google Ads / Meta Ads) paga diretamente pelo cliente",
        "Deslocamentos fora da região combinada orçados separadamente"
      ]
    },
    phases: [
      {
        number: 1,
        title: "Produção",
        objective: "Gravar o vídeo institucional e desenvolver o novo site bilíngue — base visual e comercial da marca no digital.",
        deliverables: [
          "Briefing estratégico e roteiro do vídeo",
          "Captação de imagens na empresa",
          "Edição profissional: versão horizontal + adaptação para redes",
          "Desenvolvimento do novo site PT/EN",
          "SEO on-page, analytics e pixel Meta configurados",
          "Treinamento de uso do site",
          "Publicação do site com vídeo institucional integrado"
        ],
        expectedResult: "Site novo no ar, vídeo institucional disponível para todas as frentes comerciais e marca digital com presença profissional imediata."
      },
      {
        number: 2,
        title: "Ativação",
        objective: "Iniciar a gestão de redes sociais com cadência estratégica e estruturar o Google Meu Negócio.",
        deliverables: [
          "Planejamento editorial do primeiro mês",
          "Primeiras 12 publicações (educativas, institucionais e comerciais)",
          "Conteúdos sobre a certificação ENplus A1 e aplicações",
          "Organização dos Destaques do Instagram",
          "Otimização completa do perfil no Google Meu Negócio",
          "Fotos da fábrica e posts no Google Business",
          "Relatório do primeiro mês"
        ],
        expectedResult: "Redes sociais ativas com identidade clara, Google Meu Negócio estruturado e primeiras interações orgânicas com potenciais clientes."
      },
      {
        number: 3,
        title: "Crescimento",
        objective: "Ampliar alcance e resultados com tráfego pago, SEO e loja virtual — escalando os canais construídos nas fases anteriores.",
        deliverables: [
          "Google Ads e Meta Ads (módulo opcional adicional)",
          "Estratégia de coleta de avaliações Google (meta: 50+ avaliações)",
          "Blog SEO com artigos técnicos por aplicação (módulo opcional)",
          "Loja virtual integrada ao site (módulo opcional)",
          "Remarketing para visitantes do site",
          "Relatórios mensais de performance",
          "Revisão estratégica e planejamento do próximo ciclo"
        ],
        expectedResult: "Geração recorrente de leads qualificados, visibilidade nos termos de busca transacionais e canal de vendas diretas estruturado."
      }
    ],
    optionalServices: [
      "Google Meu Negócio — gestão avançada: R$ 450/mês",
      "Tráfego Pago (Google Ads + Meta Ads) — gestão: R$ 900/mês (verba de anúncios paga diretamente pelo cliente)",
      "Blog e SEO — artigos técnicos por segmento: R$ 800/mês",
      "Loja Virtual com Checkout Mercado Pago — ideal para começar: R$ 2.500 (único)",
      "Loja Virtual Completa — catálogo, pedidos, estoque e pagamentos: R$ 4.500 (único)"
    ],
    differentials: [
      "Site, vídeo e redes sociais em uma única mensalidade — sem entrada nem surpresas",
      "Site bilíngue (PT + EN) preparado para comunicar com compradores internacionais",
      "Cancelamento livre após os 6 meses — permanência exclusivamente por resultado",
      "Transparência total de custos — sem margem sobre domínio, hospedagem ou ferramentas",
      "Equipe especializada no mercado industrial catarinense: B2B, pet e exportação",
      "Entregamos estrutura e autoridade — não apenas posts bonitos"
    ],
    closingQuestion: "A Joma Pellet tem o produto certo, a certificação certa e o momento certo — o que falta é ser encontrada por quem precisa exatamente do que vocês fabricam. Vamos mudar isso juntos?"
  },

  // ---- JAQUIRANA MADEIRAS ----
  {
    slug: "jaquirana-madeiras",
    clientName: "Jaquirana Madeiras",
    contactName: "Jaquirana Madeiras",
    theme: "forestry",
    greeting: "Preparamos uma estratégia digital completa para transformar a Jaquirana Madeiras em referência no setor florestal do Sul do Brasil — gerando leads de compra de florestas, demanda para venda de toras e autoridade institucional.",
    validUntil: "2026-06-15",
    whatsappNumber: "5549988446685",
    highlights: [
      "3 frentes estratégicas: compra de florestas, venda de toras e marca",
      "TikTok já validado com 7 mil seguidores orgânicos",
      "Nicho com baixíssima concorrência digital profissional",
      "Sem fidelização — permanência por resultado"
    ],
    analysis: {
      intro: "Realizamos uma análise completa da presença digital da Jaquirana Madeiras. O diagnóstico é claro: operação robusta, conteúdo autêntico e mercado de baixa concorrência digital — mas ainda sem a estrutura para transformar esse potencial em negócios concretos.",
      strengths: [
        {
          title: "Conteúdo real e autêntico das operações",
          description: "Harvesters, forwarders, carregamentos, caminhões — material visual único que nenhum concorrente consegue replicar. O TikTok com 7 mil seguidores prova que o mercado já quer consumir esse conteúdo."
        },
        {
          title: "TikTok validado organicamente com 7 mil seguidores",
          description: "7 mil seguidores num nicho B2B florestal é um ativo raro. Confirma que a linguagem visual das operações já tem audiência — falta estrutura para converter esse alcance em negócios."
        },
        {
          title: "Presença física consolidada em RS e SC",
          description: "Operação em dois estados do Sul significa cobertura regional real, capacidade logística e relações com o mercado já estabelecidas."
        },
        {
          title: "Nicho com baixíssima concorrência digital profissional",
          description: "Serrarias, laminadoras e proprietários rurais ainda são muito pouco disputados digitalmente. Quem estruturar presença profissional primeiro domina o espaço."
        }
      ],
      opportunities: [
        {
          title: "Ausência de site institucional",
          description: "Toda empresa que pesquisa um fornecedor de toras ou quer vender uma floresta precisa encontrar presença digital profissional. Sem site, a Jaquirana perde credibilidade antes do primeiro contato."
        },
        {
          title: "Comunicação sem segmentação por público",
          description: "Um produtor rural que quer vender sua floresta tem dores completamente diferentes de uma serraria buscando 5.000 m³ de pinus. A comunicação atual fala para todo mundo — e não converte ninguém."
        },
        {
          title: "Legendas fracas apesar do conteúdo forte",
          description: "Os vídeos mostram operação real e geram curtidas. Mas faltam história, bastidores com contexto, diferenciais técnicos e CTAs. Conteúdo bom + legenda fraca = alcance sem retorno comercial."
        },
        {
          title: "Zero funil digital de captação de leads",
          description: "Sem landing pages, formulários ou campanhas segmentadas, cada lead precisa encontrar o WhatsApp por conta própria. A Jaquirana perde oportunidades todos os dias."
        },
        {
          title: "Google Meu Negócio e SEO subutilizados",
          description: "Proprietários rurais e compradores industriais pesquisam no Google antes de qualquer contato. Hoje a Jaquirana é invisível para termos como 'compra de florestas de pinus RS' ou 'fornecedor de toras SC'."
        }
      ],
      conclusion: "A Jaquirana Madeiras tem o ativo mais difícil de construir no marketing digital: operação real, autêntica e impossível de replicar. O próximo passo é transformar esse ativo em um ecossistema digital que compra mais florestas, vende mais toras e consolida a marca como referência regional."
    },
    services: [
      {
        name: "Gestão de Redes Sociais",
        description: "Planejamento estratégico e publicação de conteúdos para Instagram e TikTok com foco nas 3 frentes: compra de florestas, venda de toras e autoridade institucional.",
        icon: "Megaphone",
        items: [
          "Planejamento mensal e calendário editorial",
          "Criação de artes e legendas estratégicas com CTAs",
          "Reels institucionais e stories de bastidores",
          "3 publicações semanais (12-15 posts/mês)",
          "8 a 12 stories semanais",
          "Relatório mensal de desempenho"
        ],
        price: "R$ 590",
        priceType: "monthly"
      },
      {
        name: "Produção de Vídeos e Conteúdo",
        description: "Captação e edição profissional dos conteúdos das operações — harvesters, forwarders, transporte e floresta — para Instagram, TikTok e YouTube.",
        icon: "Video",
        items: [
          "Captação de vídeos nas operações florestais",
          "Edição profissional com trilha e legendas",
          "Reels para Instagram",
          "Shorts para YouTube",
          "Vídeos para TikTok"
        ],
        price: "R$ 490",
        priceType: "monthly"
      },
      {
        name: "Google Meu Negócio",
        description: "Estruturação e gestão do perfil no Google para que proprietários rurais e compradores industriais encontrem a Jaquirana nas buscas locais e regionais.",
        icon: "MapPin",
        items: [
          "Otimização completa do perfil",
          "Cadastro de produtos e serviços",
          "Atualizações semanais",
          "Estratégia de coleta de avaliações",
          "Gestão da reputação online"
        ],
        price: "R$ 190",
        priceType: "monthly"
      },
      {
        name: "Site Institucional",
        description: "Site profissional com páginas segmentadas para as 3 frentes: compra de florestas, venda de toras e institucional — com formulários de captação e integração WhatsApp.",
        icon: "Globe",
        items: [
          "Site responsivo (mobile, tablet e desktop)",
          "Páginas: institucional, compra de florestas e venda de toras",
          "Formulários de captação de leads por frente",
          "Integração WhatsApp + SEO inicial",
          "Manutenção mensal inclusa no pacote"
        ],
        price: "R$ 3.500",
        priceType: "project",
        priceNote: "Valor total diluído e incluso no pacote mensal — sem custo adicional"
      },
      {
        name: "SEO e Posicionamento Google",
        description: "Posicionamento orgânico para os termos que proprietários rurais e compradores industriais usam ao pesquisar no Google em RS e SC.",
        icon: "Search",
        items: [
          "Pesquisa de palavras-chave por frente de negócio",
          "Criação de conteúdos estratégicos (blog / landing pages)",
          "SEO local RS e SC",
          "Otimização contínua"
        ],
        price: "R$ 390",
        priceType: "monthly"
      },
      {
        name: "Tráfego Pago (Meta + Google Ads)",
        description: "Campanhas segmentadas por público: proprietários rurais (compra de florestas) e compradores industriais (venda de toras).",
        icon: "Target",
        items: [
          "Meta Ads: compra de florestas e campanhas institucionais",
          "Google Ads: captação por segmento (floresta + toras)",
          "Remarketing para visitantes do site",
          "Relatórios mensais de performance"
        ],
        price: "R$ 490",
        priceType: "monthly",
        priceNote: "Verba de anúncios paga diretamente pelo cliente"
      },
      {
        name: "Consultoria Estratégica",
        description: "Acompanhamento mensal com análise de indicadores, planejamento de crescimento e alinhamento comercial por frente de negócio.",
        icon: "LineChart",
        items: [
          "Reuniões mensais de estratégia",
          "Análise de indicadores e KPIs por frente",
          "Planejamento de crescimento trimestral",
          "Acompanhamento comercial"
        ],
        price: "R$ 290",
        priceType: "monthly"
      }
    ],
    investment: {
      totalMonthly: "R$ 2.250",
      totalLabel: "Pacote Estratégico Jaquirana Madeiras",
      originalPrice: "R$ 2.830",
      savings: "R$ 580",
      packageIncludes: [
        "Gestão de Redes Sociais",
        "Produção de Vídeos e Conteúdo",
        "Google Meu Negócio",
        "Site Institucional (R$ 3.500 incluso — sem custo adicional)",
        "SEO e Posicionamento Google",
        "Tráfego Pago (Meta + Google Ads)",
        "Consultoria Estratégica",
        "Relatórios mensais integrados"
      ],
      breakdown: [
        { item: "Gestão de Redes Sociais", value: "R$ 590" },
        { item: "Produção de Vídeos e Conteúdo", value: "R$ 490" },
        { item: "Google Meu Negócio", value: "R$ 190" },
        { item: "Site Institucional (diluído no pacote)", value: "R$ 390" },
        { item: "SEO e Posicionamento Google", value: "R$ 390" },
        { item: "Tráfego Pago (Meta + Google Ads)", value: "R$ 490" },
        { item: "Consultoria Estratégica", value: "R$ 290" }
      ],
      paymentConditions: [
        "Pagamento mensal via boleto ou PIX",
        "Sem fidelização contratual — permanência por resultado",
        "Site institucional (R$ 3.500) incluso e diluído no pacote — sem entrada"
      ],
      notes: [
        "Verba de anúncios (Meta Ads / Google Ads) paga diretamente pelo cliente",
        "Domínio, hospedagem e ferramentas externas não inclusos",
        "Custos de deslocamento para captações presenciais por conta do contratante"
      ]
    },
    phases: [
      {
        number: 1,
        title: "Fundação",
        objective: "Estruturar as bases digitais: redes sociais, Google Meu Negócio e início da produção de conteúdo estratégico.",
        deliverables: [
          "Diagnóstico estratégico e planejamento editorial",
          "Organização dos perfis Instagram e TikTok",
          "Primeiros conteúdos das 3 frentes (floresta, toras, institucional)",
          "Otimização completa do Google Meu Negócio",
          "Estratégia de captação de avaliações Google",
          "Setup de métricas e relatórios",
          "Início das produções de vídeo nas operações"
        ],
        expectedResult: "Perfis organizados com identidade clara, Google Meu Negócio estruturado e primeiros conteúdos estratégicos com CTAs para cada público."
      },
      {
        number: 2,
        title: "Captação",
        objective: "Criar o motor de geração de leads: site, tráfego pago e SEO segmentado por frente de negócio.",
        deliverables: [
          "Site institucional com páginas por frente de negócio",
          "Formulários de captação de leads (compra floresta / venda toras)",
          "Início das campanhas Meta Ads e Google Ads segmentadas",
          "Primeiros artigos de SEO (ex: como vender floresta de pinus RS)",
          "Remarketing para visitantes do site",
          "Integração de leads com WhatsApp",
          "Relatório do segundo mês com análise de resultados"
        ],
        expectedResult: "Leads qualificados chegando pelas 2 frentes comerciais, site convertendo visitas em contatos e tráfego pago ativo com segmentação por público."
      },
      {
        number: 3,
        title: "Autoridade",
        objective: "Consolidar a Jaquirana como referência digital no setor florestal do Sul do Brasil.",
        deliverables: [
          "Série 'Quanto vale sua floresta?' — conteúdo educativo",
          "Série 'Da floresta à indústria' — processo completo",
          "'Jaquirana Responde' com Ricardo Castilhos",
          "Blog de autoridade sobre o setor florestal",
          "SEO avançado para termos regionais",
          "Relatórios estratégicos trimestrais",
          "Planejamento de crescimento para o próximo ciclo"
        ],
        expectedResult: "Jaquirana reconhecida como referência digital no setor florestal de RS e SC, com geração recorrente de leads qualificados nas duas frentes comerciais."
      }
    ],
    optionalServices: [
      "Site Institucional (implantação única) — R$ 4.900",
      "Site Institucional (locação + manutenção) — R$ 390/mês",
      "Fotografia e Drone (operações florestais) — sob orçamento",
      "Portal de Avaliação de Florestas — lead qualificado por hectares, cidade e idade do pinus",
      "Mapa de Operações digital (RS + SC) — ferramenta de credibilidade B2B"
    ],
    differentials: [
      "Estratégia segmentada por frente: compra de florestas, venda de toras e posicionamento institucional",
      "Experiência em B2B industrial e agronegócio no Sul do Brasil",
      "Transparência total — sem margem sobre custos externos",
      "Sem fidelização contratual — permanência exclusivamente por resultado",
      "Relatórios mensais com dados reais por frente de negócio",
      "Time que entende a linguagem do setor: do harvester ao lead qualificado"
    ],
    closingQuestion: "A Jaquirana Madeiras já tem o ativo mais raro do marketing digital: operação real, autêntica e impossível de replicar. O próximo passo é transformar isso em negócios concretos — mais florestas compradas, mais toras vendidas, mais autoridade construída."
  },

  // ---- MC EQUIPAMENTOS E SERVIÇOS ----
  {
    slug: "mc-equipamentos",
    clientName: "MC Equipamentos",
    contactName: "MC Equipamentos",
    theme: "industrial",
    greeting: "Após análise da presença digital da MC Equipamentos e Serviços, identificamos uma grande oportunidade: a marca já é reconhecida em Santa Cecília e região — o que falta é transformar essa autoridade local em clientes novos todos os meses através do digital.",
    validUntil: "2026-07-09",
    whatsappNumber: "5549999999999",
    highlights: [
      "Marca já reconhecida localmente — falta presença digital consistente",
      "Concorrência digital praticamente ausente na região",
      "Oficina e loja: dois motores de receita para explorar",
      "Sem fidelização — permanência por resultado"
    ],
    analysis: {
      intro: "Realizamos uma análise completa da presença digital da MC Equipamentos e Serviços. A marca tem fundações sólidas — loja física consolidada, nota 5 estrelas no Google, produto diversificado. O diagnóstico revela: o potencial existe, mas está sendo desperdiçado por falta de estratégia digital.",
      strengths: [
        {
          title: "Marca visual profissional e bem definida",
          description: "A identidade da MC já está estabelecida. Isso elimina uma etapa cara do marketing — o problema não é identidade visual, é visibilidade digital."
        },
        {
          title: "Nota 5 estrelas no Google + loja física consolidada",
          description: "Reputação positiva comprovada. Clientes satisfeitos existem — falta transformar essa satisfação em avaliações ativas e novos clientes via Google."
        },
        {
          title: "Oficina própria com alto potencial de margem",
          description: "Serviços de oficina geram mais margem que venda de produtos. Esse ativo praticamente não aparece nas redes — uma oportunidade enorme sendo ignorada."
        },
        {
          title: "Produto diversificado: ferramentas, lubrificantes, soldagem, EPIs",
          description: "Catálogo amplo significa múltiplos públicos para atingir: mecânicos, agricultores, transportadores, construtores — cada um com dores específicas."
        },
        {
          title: "Localização estratégica na BR 116",
          description: "Rodovia de alto fluxo significa clientes em trânsito. Uma presença forte no Google Meu Negócio converte 'perto de mim' em visita na loja."
        }
      ],
      opportunities: [
        {
          title: "Conteúdo sem persuasão — catálogo que não vende",
          description: "Posts mostram produtos, não soluções. Ninguém compra uma ferramenta porque viu a foto dela. As pessoas compram para resolver um problema: produtividade, economia de tempo, menos parada."
        },
        {
          title: "Google Meu Negócio com apenas 3 avaliações",
          description: "Uma empresa com nota 5 e 3 avaliações não aparece nas buscas locais. Meta: 50 avaliações em 90 dias — isso coloca a MC no topo para 'ferramentas Santa Cecília'."
        },
        {
          title: "Oficina invisível nas redes sociais",
          description: "Antes e depois, recuperação de peças, serviços executados — esse conteúdo gera autoridade e confiança. Hoje está completamente ausente no perfil."
        },
        {
          title: "Zero site institucional ou catálogo online",
          description: "Clientes que pesquisam antes de comprar não encontram a MC no Google além do Maps. Um site com catálogo e integração WhatsApp captura esse público 24h por dia."
        },
        {
          title: "Nenhuma campanha paga ativa",
          description: "Em cidades pequenas como Santa Cecília, pouquíssimos concorrentes investem em Meta Ads. O custo para dominar o espaço regional é muito menor do que em mercados mais disputados."
        }
      ],
      conclusion: "A MC Equipamentos tem tudo o que os algoritmos precisam: operação real, produto diversificado e reputação positiva. O que falta é uma estratégia que transforme essa estrutura em clientes novos toda semana — na loja física, na oficina e pelo WhatsApp."
    },
    services: [
      {
        name: "Gestão de Redes Sociais",
        description: "Planejamento e publicação de conteúdo estratégico no Instagram e Facebook, focado em converter seguidores em clientes da loja e da oficina.",
        icon: "Megaphone",
        items: [
          "Planejamento mensal e calendário editorial",
          "Artes profissionais e legendas persuasivas",
          "12 publicações mensais + 12 Stories",
          "4 Reels mensais",
          "Estratégia de crescimento da marca",
          "Relatório mensal de desempenho"
        ],
        price: "R$ 790",
        priceType: "monthly"
      },
      {
        name: "Produção de Fotos e Vídeos",
        description: "Captação profissional mensal na loja e oficina para produção de conteúdo real — ferramentas em ação, bastidores, equipe, demonstrações.",
        icon: "Camera",
        items: [
          "1 visita mensal de captação",
          "Fotos profissionais de produtos e ambiente",
          "Vídeos para Reels e Stories",
          "Bastidores da oficina e loja",
          "Banco de imagens atualizado mensalmente"
        ],
        price: "R$ 450",
        priceType: "monthly"
      },
      {
        name: "Captação com Drone",
        description: "Imagens aéreas da empresa para fortalecer a percepção de marca sólida e profissional — fachada, pátio, estrutura e vídeo institucional.",
        icon: "Plane",
        items: [
          "Imagens aéreas da fachada e estrutura",
          "Vídeo institucional com drone",
          "Material para site e redes sociais",
          "Fortalece percepção de empresa consolidada"
        ],
        price: "R$ 300",
        priceType: "project"
      },
      {
        name: "Google Meu Negócio",
        description: "Otimização e gestão ativa do perfil para que a MC apareça no topo das buscas locais quando clientes procuram ferramentas e oficina em Santa Cecília.",
        icon: "MapPin",
        items: [
          "Otimização completa do perfil e categorias",
          "Publicações semanais com produtos e serviços",
          "Estratégia de captação de avaliações (meta: 50 em 90 dias)",
          "Atualização de fotos e informações",
          "Monitoramento e relatório mensal"
        ],
        price: "R$ 290",
        priceType: "monthly"
      },
      {
        name: "Tráfego Pago (Meta Ads)",
        description: "Campanhas segmentadas para alcançar mecânicos, agricultores, transportadores e construtores na região — gerando contatos diretos no WhatsApp.",
        icon: "Target",
        items: [
          "Configuração do Gerenciador de Anúncios",
          "Campanhas de alcance e mensagens WhatsApp",
          "Segmentação regional por interesse e profissão",
          "Remarketing para visitantes do perfil",
          "Relatórios mensais de performance"
        ],
        price: "R$ 490",
        priceType: "monthly",
        priceNote: "Verba de anúncios paga diretamente pelo cliente"
      }
    ],
    investment: {
      totalMonthly: "R$ 1.290",
      totalLabel: "Pacote Completo MC Equipamentos",
      originalPrice: "R$ 2.320",
      savings: "R$ 1.030",
      packageIncludes: [
        "Gestão completa de Redes Sociais",
        "Produção mensal de Fotos e Vídeos",
        "Gestão do Google Meu Negócio",
        "Gestão de Campanhas Meta Ads",
        "1 Captação com Drone por mês",
        "Planejamento Estratégico",
        "Relatório Mensal Integrado"
      ],
      breakdown: [
        { item: "Gestão de Redes Sociais", value: "R$ 790" },
        { item: "Produção de Fotos e Vídeos", value: "R$ 450" },
        { item: "Google Meu Negócio", value: "R$ 290" },
        { item: "Meta Ads (gestão)", value: "R$ 490" },
        { item: "Captação com Drone", value: "R$ 300" }
      ],
      paymentConditions: [
        "Pagamento mensal via boleto ou PIX",
        "Sem fidelização contratual — permanência por resultado",
        "Contrato ativo enquanto for interessante para ambas as partes"
      ],
      notes: [
        "Verba de anúncios (Meta Ads / Google Ads) paga diretamente pelo cliente",
        "Custos de deslocamento, alimentação e hospedagem (quando necessários) por conta do contratante",
        "Vídeos extras, eventos e campanhas especiais orçados separadamente"
      ]
    },
    phases: [
      {
        number: 1,
        title: "Fundação",
        objective: "Estruturar as bases: perfis de redes sociais, Google Meu Negócio e início da produção de conteúdo estratégico.",
        deliverables: [
          "Diagnóstico e planejamento editorial completo",
          "Organização visual dos perfis Instagram e Facebook",
          "Primeiros conteúdos: loja, oficina e produtos em destaque",
          "Otimização completa do Google Meu Negócio",
          "Lançamento da estratégia de captação de avaliações",
          "Primeira captação com drone (institucional)",
          "Setup de métricas e relatórios"
        ],
        expectedResult: "Perfis organizados e ativos, Google Meu Negócio otimizado e primeiros conteúdos estratégicos publicados com foco em conversão."
      },
      {
        number: 2,
        title: "Ativação",
        objective: "Lançar as campanhas pagas e ampliar o alcance regional com conteúdo de oficina e produto em ação.",
        deliverables: [
          "Lançamento das campanhas Meta Ads (WhatsApp + alcance)",
          "Série 'Ferramenta em Ação' — Reels de produtos funcionando",
          "Série 'Bastidores da Oficina' — antes e depois",
          "Segmentação de públicos por profissão e interesse",
          "Relatório do segundo mês com análise de resultados"
        ],
        expectedResult: "Contatos chegando pelo WhatsApp via campanhas, engajamento crescente nas redes e oficina ganhando visibilidade."
      },
      {
        number: 3,
        title: "Conversão",
        objective: "Consolidar a MC como referência digital em ferramentas e oficina na região e escalar os resultados.",
        deliverables: [
          "Série 'Dica do Mecânico' — autoridade técnica",
          "Série 'Produto da Semana' — conversão direta",
          "Remarketing para públicos engajados",
          "Meta de 50 avaliações no Google atingida",
          "Relatório estratégico com KPIs e planejamento de crescimento"
        ],
        expectedResult: "MC Equipamentos como referência digital em Santa Cecília — aparecendo no Google, gerando leads e convertendo seguidores em clientes da loja e da oficina."
      }
    ],
    optionalServices: [
      "Google Ads (pesquisa local) — gestão R$ 290/mês (verba separada)",
      "Site Institucional com catálogo — orçamento sob consulta",
      "WhatsApp Business estruturado (catálogo, etiquetas, automações)",
      "Cobertura de eventos e inaugurações — sob orçamento",
      "Campanhas sazonais (Dia do Trabalhador, Black Friday, etc.)"
    ],
    differentials: [
      "Estratégia focada em conversão local: loja física + WhatsApp + oficina",
      "Conteúdo técnico que educa e vende — solução, não produto",
      "Meta de 50 avaliações Google em 90 dias para dominar busca local",
      "Sem fidelização contratual — permanência exclusivamente por resultado",
      "Transparência total sobre verbas — sem margem sobre anúncios",
      "Experiência em varejo local, B2B e nichos industriais no Sul do Brasil"
    ],
    closingQuestion: "A MC já tem reputação, produto e estrutura. O que falta é ser encontrada por quem ainda não conhece. Com presença digital consistente, a loja que hoje depende de indicação começa a receber clientes novos todos os dias — pela busca do Google, pelo Instagram e pelo WhatsApp."
  },

  // ── ALFAFA SANTA FÉ ─────────────────────────────────────────
  {
    slug: "alfafa-santa-fe",
    clientName: "Alfafa Santa Fé",
    contactName: "Celso",
    theme: "pastoral",
    greeting: "Após analisar o perfil da Alfafa Santa Fé, identificamos algo claro: a qualidade do produto e a estrutura produtiva são excepcionais — mas a imagem digital ainda não reflete esse nível de excelência. É exatamente isso que vamos mudar juntos.",
    validUntil: "2026-06-29",
    whatsappNumber: "5549999998132",
    closingQuestion: "Pronto para transformar a Alfafa Santa Fé na referência em alfafa premium do Sul do Brasil?",
    highlights: [
      "Produto premium com apelo visual único — lavouras, máquinas, colheita",
      "Mercado de equinos em crescimento — criadores de crioulo + haras",
      "Produção própria do campo à entrega — diferencial raro de explorar",
      "Sem presença digital consistente — campo aberto para liderança"
    ],
    analysis: {
      intro: "Realizamos uma análise completa da presença digital da Alfafa Santa Fé. A marca tem um produto de excelência, forte apelo visual e um mercado em crescimento. O diagnóstico revela: o potencial é enorme, mas a comunicação digital ainda está muito aquém da qualidade do que é produzido no campo.",
      strengths: [
        {
          title: "Produto premium com forte apelo visual",
          description: "A alfafa tipo A tem cor verde intensa, folhas preservadas e aparência de alto valor. Isso facilita muito a geração de conteúdo e reforça naturalmente o posicionamento premium."
        },
        {
          title: "Produção própria do plantio à entrega",
          description: "Pouquíssimos concorrentes controlam toda a cadeia. 'Da lavoura até o seu animal' é uma narrativa poderosa que gera confiança e autoridade impossíveis de copiar."
        },
        {
          title: "Forte apelo visual da operação no campo",
          description: "Lavouras extensas, máquinas de enfardamento, colheita, carregamentos — essa operação gera conteúdo autêntico e emocionalmente envolvente que a concorrência simplesmente não consegue replicar."
        },
        {
          title: "Mercado de nutrição animal em crescimento",
          description: "O mercado de cavalos crioulos, haras e criadores premium está em franca expansão no Sul do Brasil. Quem compra alfafa tipo A é um cliente de alto valor e recorrente."
        },
        {
          title: "Produto de recompra com alta fidelização",
          description: "Quem aprova a qualidade compra novamente. Isso reduz o custo de aquisição de clientes no longo prazo e abre caminho para contratos recorrentes com haras e centros de treinamento."
        }
      ],
      opportunities: [
        {
          title: "Falta de autoridade e posicionamento digital",
          description: "Hoje o perfil mostra o produto, mas ainda não transmite autoridade. Um possível comprador não consegue entender quem é a empresa, há quanto tempo atua ou por que é melhor que outras opções."
        },
        {
          title: "Ausência de prova social e resultados",
          description: "Existem poucos conteúdos mostrando clientes, haras atendidos, resultados nos animais ou depoimentos. O mercado agro compra baseado em confiança — e confiança se constrói com prova."
        },
        {
          title: "Ausência no Google — perda de oportunidades diárias",
          description: "Quando criadores pesquisam 'alfafa para cavalos SC' ou 'feno de alfafa premium', a Alfafa Santa Fé praticamente não existe no Google. Cada busca sem resposta é uma venda perdida."
        },
        {
          title: "Sem estratégia de captação de novos clientes",
          description: "O Instagram funciona como vitrine, mas não existe uma estrutura de geração contínua de leads. Sem anúncios segmentados e Google Meu Negócio, o crescimento depende apenas de indicação."
        },
        {
          title: "Posicionamento ainda de 'produtor', não de marca premium",
          description: "A comunicação atual transmite uma fazenda que vende alfafa. O objetivo é construir percepção de marca referência — o que permitirá cobrar por qualidade, não apenas competir por preço."
        }
      ],
      conclusion: "A Alfafa Santa Fé tem tudo o que é preciso: produto de excelência, estrutura produtiva própria e um mercado que valoriza qualidade. O que falta é uma estratégia que transforme essa operação em autoridade digital — fazendo com que mais haras, criadores e produtores encontrem, confiem e escolham a ASF."
    },
    contentSuggestions: [
      {
        format: "Post Fixo",
        theme: "Por que a alfafa é a rainha das forrageiras?",
        hook: "A alimentação do seu animal começa pela qualidade do que vai para o cocho.",
        description: "Conteúdo educativo sobre os diferenciais nutricionais: 20–25% proteína bruta, cálcio, fósforo e digestibilidade. Posiciona a ASF como referência técnica no mercado."
      },
      {
        format: "Post Fixo",
        theme: "Da lavoura ao cocho — a história por trás de cada fardo",
        hook: "Cada fardo tem uma história de cuidado, manejo e qualidade.",
        description: "Apresenta o diferencial da produção própria: do plantio ao enfardamento e à entrega. Gera confiança e diferencia a marca de revendedores e intermediários."
      },
      {
        format: "Carrossel",
        theme: "5 sinais de que a alimentação pode estar limitando o desempenho do seu cavalo",
        hook: "Seu cavalo está rendendo menos do que deveria?",
        description: "Conteúdo de autoridade sobre nutrição equina: pelagem sem brilho, baixa condição corporal, pouca disposição. CTA direto para solicitar orçamento da ASF."
      },
      {
        format: "Carrossel",
        theme: "Como produzimos nossa alfafa premium",
        hook: "Tudo começa na lavoura. Deixa a gente te mostrar.",
        description: "Bastidores da produção slide a slide: plantio → crescimento → corte → secagem → enfardamento → entrega. Processo completo que gera confiança e autoridade."
      },
      {
        format: "Reels",
        theme: "O dia da colheita na Alfafa Santa Fé",
        hook: "Poucos minutos de vídeo. Meses de dedicação no campo.",
        description: "Drone + máquinas + equipe em ação durante o corte. Formato de alto alcance orgânico, conteúdo autêntico que a concorrência não consegue replicar."
      },
      {
        format: "Reels",
        theme: "Por dentro da Alfafa Santa Fé",
        hook: "Conheça quem está por trás da qualidade que chega até você.",
        description: "Celso falando sobre a história da fazenda, os valores e o compromisso com a qualidade. Humaniza a marca e gera a conexão emocional que fecha negócios."
      }
    ],
    services: [
      {
        name: "Google Meu Negócio",
        description: "Criação e gestão completa do perfil no Google para que a Alfafa Santa Fé apareça nas buscas regionais quando criadores, haras e produtores procuram alfafa premium.",
        icon: "MapPin",
        items: [
          "Criação ou otimização completa do perfil",
          "Configuração estratégica de categorias e serviços",
          "Descrição institucional e inserção de produtos",
          "Publicações mensais com conteúdo e fotos",
          "Estratégia de captação de avaliações",
          "Monitoramento e atualizações frequentes"
        ],
        price: "R$ 390",
        priceType: "monthly"
      },
      {
        name: "Gestão de Redes Sociais",
        description: "Planejamento estratégico e publicação de conteúdo profissional no Instagram, com foco em transformar seguidores em clientes recorrentes da Alfafa Santa Fé.",
        icon: "Megaphone",
        items: [
          "Planejamento mensal e calendário editorial",
          "12 conteúdos estratégicos por mês",
          "Artes profissionais e legendas persuasivas",
          "Posts fixos, carrosséis, Reels e Stories",
          "Estratégia de crescimento orgânico",
          "Relatório mensal de desempenho"
        ],
        price: "R$ 990",
        priceType: "monthly"
      },
      {
        name: "Captação de Fotos e Vídeos",
        description: "Visita presencial mensal para captação profissional — lavoura, máquinas, colheita, enfardamento, entregas e bastidores. A operação da ASF é o maior patrimônio de conteúdo que existe.",
        icon: "Camera",
        items: [
          "1 visita mensal de captação presencial",
          "Fotos profissionais da lavoura e produção",
          "Vídeos para Reels e Stories",
          "Imagens aéreas com drone",
          "Bastidores da colheita e enfardamento",
          "Banco de imagens atualizado mensalmente"
        ],
        price: "R$ 790",
        priceType: "monthly"
      },
      {
        name: "Produção de Reels",
        description: "Produção contínua de vídeos estratégicos — processo de produção, dia de colheita, entregas, curiosidades sobre nutrição animal e bastidores. Reels são o maior canal de alcance orgânico.",
        icon: "Video",
        items: [
          "Até 4 Reels mensais",
          "Roteirização e edição profissional",
          "Motion graphics e legendas dinâmicas",
          "Inserção de identidade visual ASF",
          "Formatos otimizados para Instagram",
          "Conteúdo de alto alcance orgânico"
        ],
        price: "R$ 490",
        priceType: "monthly"
      },
      {
        name: "Gestão de Tráfego Pago",
        description: "Campanhas segmentadas no Meta Ads e Google Ads para alcançar criadores de cavalos, haras e pecuaristas no Sul do Brasil — gerando pedidos e orçamentos de forma contínua.",
        icon: "Target",
        items: [
          "Campanhas de alcance e reconhecimento de marca",
          "Campanhas para WhatsApp (pedidos diretos)",
          "Segmentação por perfil equino, pecuarista e rural",
          "Remarketing para visitantes do perfil",
          "Monitoramento diário e otimizações constantes",
          "Relatórios mensais de performance"
        ],
        price: "R$ 790",
        priceType: "monthly",
        priceNote: "Verba de anúncios paga diretamente pelo cliente (mín. R$ 500/mês)"
      }
    ],
    investment: {
      totalMonthly: "R$ 1.650",
      totalLabel: "Pacote Completo Alfafa Santa Fé",
      originalPrice: "R$ 3.450",
      savings: "R$ 1.800",
      packageIncludes: [
        "Gestão completa do Google Meu Negócio",
        "Gestão estratégica do Instagram (12 conteúdos/mês)",
        "4 Reels profissionais mensais",
        "1 captação presencial mensal (foto + vídeo + drone)",
        "Gestão de campanhas Meta Ads e Google Ads",
        "Planejamento editorial e calendário de conteúdo",
        "Reuniões de acompanhamento mensais",
        "Relatórios integrados de desempenho"
      ],
      breakdown: [
        { item: "Google Meu Negócio", value: "R$ 390" },
        { item: "Gestão de Redes Sociais", value: "R$ 990" },
        { item: "Captação Foto e Vídeo + Drone", value: "R$ 790" },
        { item: "Produção de Reels", value: "R$ 490" },
        { item: "Gestão de Tráfego Pago (Meta + Google)", value: "R$ 790" }
      ],
      paymentConditions: [
        "Pagamento mensal via boleto ou PIX",
        "Sem fidelização contratual — permanência por resultado",
        "Contrato ativo enquanto for interessante para ambas as partes"
      ],
      notes: [
        "Verba de anúncios (Meta Ads / Google Ads) paga diretamente pelo cliente — recomendação mínima: R$ 500/mês por plataforma",
        "Custos de deslocamento para Rio Bonito – Lebon Régis por conta do contratante",
        "Feiras agropecuárias, eventos e campanhas sazonais orçados separadamente"
      ]
    },
    phases: [
      {
        number: 1,
        title: "Fundação",
        objective: "Estruturar as bases digitais da marca: Google Meu Negócio, identidade do perfil, primeiros conteúdos de autoridade e início das captações.",
        deliverables: [
          "Diagnóstico completo e planejamento editorial",
          "Criação ou otimização do Google Meu Negócio",
          "Organização visual e bio estratégica do Instagram",
          "Primeira captação presencial: lavoura, máquinas e produção",
          "Primeiros posts de autoridade: produto, processo e marca",
          "Configuração dos destaques: Quem Somos, Produção, Clientes, Orçamentos",
          "Setup de métricas e relatório inicial"
        ],
        expectedResult: "Perfil organizado, Google Meu Negócio ativo e primeiros conteúdos estratégicos publicados com identidade visual consistente e foco em autoridade."
      },
      {
        number: 2,
        title: "Crescimento",
        objective: "Ativar as campanhas pagas, ampliar o alcance regional e construir os pilares de autoridade com conteúdo de produção, nutrição animal e bastidores.",
        deliverables: [
          "Lançamento das campanhas Meta Ads (WhatsApp + alcance)",
          "Série 'Da lavoura ao cocho' — Reels com processo completo",
          "Série 'Nutrição que faz diferença' — posts técnicos sobre alfafa",
          "Segmentação de públicos: criadores de cavalos, haras, pecuaristas",
          "Estratégia de captação de avaliações no Google (meta: 20+ em 60 dias)",
          "Relatório do segundo mês com análise de resultados"
        ],
        expectedResult: "Contatos chegando pelo WhatsApp via campanhas, crescimento orgânico do perfil e ASF ganhando reconhecimento junto a haras e criadores regionais."
      },
      {
        number: 3,
        title: "Referência",
        objective: "Consolidar a Alfafa Santa Fé como referência em alfafa premium no Sul do Brasil, escalando resultados e expandindo o alcance regional.",
        deliverables: [
          "Série 'Resultados ASF' — clientes e animais em destaque",
          "Série 'Por dentro da ASF' — humanização da marca e família",
          "Google Ads ativo para captar buscas de intenção de compra",
          "Remarketing para públicos engajados com maior intenção",
          "Meta de 50+ avaliações no Google para dominar buscas locais",
          "Relatório estratégico com KPIs e planejamento de escala"
        ],
        expectedResult: "Alfafa Santa Fé como referência reconhecida no Sul do Brasil — aparecendo no Google, gerando leads qualificados de haras e criadores e consolidando posição premium no mercado."
      }
    ],
    optionalServices: [
      "Site Institucional com catálogo e integração WhatsApp — orçamento sob consulta",
      "Google Ads (pesquisa local) — gestão R$ 390/mês (verba separada)",
      "Cobertura de feiras agropecuárias e eventos rurais — sob orçamento",
      "WhatsApp Business estruturado (catálogo, etiquetas, automações)",
      "Campanhas sazonais (abertura de safra, feiras regionais, etc.)"
    ],
    differentials: [
      "Estratégia focada em resultado comercial — pedidos e orçamentos reais, não apenas seguidores",
      "Conteúdo autêntico do campo: nenhum concorrente tem o que a ASF tem para mostrar",
      "Google Meu Negócio ativo para captar buscas de criadores, haras e pecuaristas",
      "Sem fidelização contratual — permanência exclusivamente por resultado",
      "Transparência total sobre verbas — sem margem da ArtDesign sobre anúncios",
      "Experiência em agronegócio e nichos premium no Sul do Brasil"
    ]
  },
  {
    slug: "massaneiro-udk",
    clientName: "Massaneiro Mudas Florestais + UDK Consultoria",
    contactName: "Lean",
    theme: "campo",
    greeting:
      "Massaneiro Mudas Florestais e UDK Consultoria já possuem algo que muitas empresas levam anos tentando construir: experiência prática, operação real, conhecimento técnico e mercado. Neste projeto, o objetivo não é simplesmente publicar nas redes sociais ou buscar novos clientes — é transformar toda essa estrutura que já existe no mundo físico em presença, credibilidade e autoridade no ambiente digital.",
    validUntil: "2026-08-26",
    whatsappNumber: "5549988446685",
    closingQuestion:
      "Vamos fazer o digital mostrar tudo aquilo que Massaneiro e UDK já são?",
    objectiveChain: {
      intro:
        "Não queremos transformar Massaneiro e UDK em empresas dependentes das redes sociais para conseguir clientes. Queremos construir um ecossistema digital institucional.",
      chain: [
        "Operação real",
        "Conteúdo",
        "Presença digital",
        "Autoridade",
        "Confiança"
      ],
      conclusion:
        "Assim, quando alguém conhecer as empresas por indicação, parceria, relacionamento comercial ou pesquisa, encontrará uma estrutura digital que confirma a credibilidade que elas já possuem presencialmente."
    },
    companies: [
      {
        key: "massaneiro",
        name: "Massaneiro Mudas Florestais",
        shortName: "Massaneiro",
        handle: "@massaneiro.mudasflorestais",
        tagline: "Erva-Mate, Eucalipto e Pinus",
        location: "BR 116, km 97 — Monte Castelo/SC",
        accent: "moss",
        icon: "Sprout",
        diagnosis: {
          positives: [
            "Nome e posicionamento de mercado já definidos",
            "Segmento muito claro: Erva-Mate, Eucalipto e Pinus",
            "Localização física já apresentada no perfil",
            "Identidade visual existente",
            "Operação real com grande potencial para produção de conteúdo",
            "Possibilidade de mostrar viveiro, mudas, processos, equipe, produção e estrutura"
          ],
          attentionIntro:
            "Hoje o Instagram possui seguidores, porém não possui conteúdo publicado. Isso cria uma diferença muito grande entre a empresa que existe fisicamente e aquilo que uma pessoa encontra ao pesquisar a marca digitalmente.",
          attentionPoints: [
            "Ausência de conteúdo institucional",
            "Ausência de portfólio visual",
            "Ausência de apresentação da estrutura",
            "Ausência de conteúdo sobre os produtos",
            "Ausência de Facebook estruturado",
            "Ausência de presença organizada no Google",
            "Ausência de site institucional",
            "Falta de caminhos claros de contato",
            "Identidade visual ainda pouco explorada digitalmente"
          ],
          opportunity:
            "A Massaneiro não necessita de um volume excessivo de conteúdo. O melhor posicionamento é uma comunicação mais enxuta, visual e consistente, priorizando qualidade, estrutura, produção, espécies, conhecimento e bastidores. O objetivo será fazer com que o perfil funcione como uma verdadeira vitrine institucional da empresa."
        },
        socialApproach:
          "Presença mais objetiva, visual e institucional — cadência consistente, sem depender de volume.",
        socialPriorities: [
          "Mudas",
          "Espécies",
          "Estrutura",
          "Produção",
          "Equipe",
          "Logística",
          "Bastidores",
          "Conhecimento técnico",
          "Qualidade e desenvolvimento das plantas"
        ],
        siteStructure: [
          "Home",
          "Empresa",
          "Estrutura",
          "Mudas",
          "Erva-Mate",
          "Eucalipto",
          "Pinus",
          "Localização",
          "Contato"
        ],
        siteNote:
          "O site funcionará como catálogo institucional e apresentação da empresa.",
        droneShots: [
          "Viveiro",
          "Produção",
          "Propriedades",
          "Estrutura",
          "Áreas cultivadas",
          "Logística",
          "Dimensão da operação"
        ],
        contentExamples: [
          "O que observar antes de escolher uma muda de erva-mate.",
          "Qual a importância da qualidade da muda no desenvolvimento da floresta?",
          "O início de uma boa produção começa muito antes do plantio."
        ],
        profileHighlights: [
          "Sobre",
          "Mudas",
          "Estrutura",
          "Produção",
          "Localização",
          "Contato"
        ],
        pricing: [
          { item: "Refinamento / Identidade Visual", value: "R$ 1.290", type: "project" },
          { item: "Estruturação Instagram + Facebook + Meta", value: "R$ 490", type: "project" },
          { item: "Implantação Google Perfil da Empresa", value: "R$ 590", type: "project" },
          { item: "Site Institucional Massaneiro", value: "R$ 2.490", type: "project" },
          { item: "Gestão Estratégica de Redes Sociais", value: "R$ 1.290", type: "monthly" },
          { item: "Gestão e atualização Google", value: "R$ 390", type: "monthly" },
          { item: "Captação profissional de foto e vídeo", value: "R$ 790", type: "session" },
          { item: "Captação aérea com drone", value: "R$ 490", type: "session" }
        ]
      },
      {
        key: "udk",
        name: "UDK Consultoria",
        shortName: "UDK",
        handle: "@udkconsultoria",
        tagline: "Agronegócio · Bovinocultura de Leite e Corte",
        location: "Reprodução · Sanidade · Nutrição · Gestão",
        accent: "gold",
        icon: "Beef",
        diagnosis: {
          positives: [
            "Nicho bem definido",
            "Serviços técnicos com grande potencial de autoridade",
            "Atuação em bovinocultura de leite e corte",
            "Conhecimento em reprodução, sanidade, nutrição e gestão",
            "WhatsApp já disponível no perfil",
            "Experiência prática capaz de gerar conteúdos extremamente relevantes",
            "Grande potencial para conteúdo educativo e de campo"
          ],
          attentionIntro:
            "O perfil já possui um início de comunicação, porém ainda existe uma distância considerável entre a dimensão do trabalho desenvolvido pela UDK e aquilo que está sendo apresentado digitalmente.",
          attentionPoints: [
            "Consistência visual",
            "Apresentação dos serviços",
            "Prova de conhecimento técnico",
            "Rotina de campo",
            "Resultados e cases",
            "Conteúdos educativos",
            "Vídeos",
            "Presença dos profissionais",
            "Depoimentos",
            "Google",
            "Facebook",
            "Site",
            "Organização dos destaques",
            "Identidade institucional"
          ],
          opportunity:
            "Na UDK podemos trabalhar uma comunicação mais ativa e educativa, aproveitando a rotina de atendimento para transformar conhecimento técnico em conteúdo. Cada visita, propriedade, diagnóstico, orientação e acompanhamento possui potencial para fortalecer a percepção de autoridade da marca. Aqui o conteúdo terá um volume naturalmente maior que na Massaneiro, porém sempre priorizando conteúdo relevante em vez de simplesmente quantidade."
        },
        socialApproach:
          "Presença mais dinâmica e técnica — a rotina de campo vira conteúdo educativo e prova de autoridade.",
        socialPriorities: [
          "Manejo",
          "Reprodução",
          "Nutrição",
          "Sanidade",
          "Gestão",
          "Produção leiteira",
          "Gado de corte",
          "Rotina nas propriedades",
          "Conteúdo educativo",
          "Resultados e evolução das propriedades"
        ],
        siteStructure: [
          "Home",
          "UDK",
          "Áreas de atuação",
          "Bovinocultura de Leite",
          "Bovinocultura de Corte",
          "Reprodução",
          "Sanidade",
          "Nutrição",
          "Gestão",
          "Conteúdos",
          "Contato"
        ],
        siteNote:
          "Além de apresentar a empresa, o site poderá se tornar uma verdadeira base de conteúdo técnico e autoridade no agronegócio.",
        droneShots: [
          "Propriedades atendidas",
          "Rebanhos",
          "Instalações",
          "Fazendas",
          "Pastagens",
          "Rotina de campo"
        ],
        contentExamples: [
          "3 sinais de que a reprodução do rebanho precisa de atenção.",
          "Produzir mais leite nem sempre significa lucrar mais.",
          "O erro silencioso na alimentação que pode diminuir a produtividade."
        ],
        profileHighlights: [
          "Sobre",
          "Serviços",
          "Leite",
          "Corte",
          "Campo",
          "Resultados",
          "Contato"
        ],
        pricing: [
          { item: "Refinamento / Identidade Visual", value: "R$ 1.290", type: "project" },
          { item: "Estruturação Instagram + Facebook + Meta", value: "R$ 490", type: "project" },
          { item: "Implantação Google Perfil da Empresa", value: "R$ 590", type: "project" },
          { item: "Site Institucional UDK", value: "R$ 3.490", type: "project" },
          { item: "Gestão Estratégica de Redes Sociais", value: "R$ 1.790", type: "monthly" },
          { item: "Gestão e atualização Google", value: "R$ 390", type: "monthly" },
          { item: "Captação profissional de foto e vídeo", value: "R$ 990", type: "session" },
          { item: "Captação aérea com drone", value: "R$ 490", type: "session" }
        ]
      }
    ],
    services: [
      {
        name: "Identidade Visual e Posicionamento",
        description:
          "As empresas já possuem logotipos, mas uma marca precisa ir além do arquivo da logo. Vamos transformar a identidade existente em um sistema visual consistente, para que qualquer comunicação seja imediatamente reconhecida como Massaneiro ou UDK.",
        icon: "Palette",
        items: [
          "Avaliação das marcas atuais",
          "Refinamento ou redesign quando necessário",
          "Definição de cores e tipografia",
          "Aplicações digitais e elementos gráficos",
          "Padrão fotográfico",
          "Capas, templates e assinatura visual",
          "Padronização em Instagram, Facebook, Google e site"
        ]
      },
      {
        name: "Instagram — Estruturação e Gestão",
        description:
          "O Instagram será utilizado principalmente como ferramenta de posicionamento, autoridade e apresentação institucional. Todo o conteúdo será planejado estrategicamente.",
        icon: "Instagram",
        items: [
          "Planejamento editorial e definição de pautas",
          "Criação das artes e edição de fotografias",
          "Edição de vídeos, Reels e carrosséis",
          "Textos e legendas",
          "Organização visual do perfil",
          "Publicação e direcionamento de comunicação",
          "Acompanhamento do desempenho"
        ]
      },
      {
        name: "Facebook — Presença Institucional",
        description:
          "Mesmo que o Instagram seja o principal canal de conteúdo, o Facebook continua sendo um importante ponto de validação da marca. Dessa maneira, as marcas deixam de depender de apenas um canal.",
        icon: "Facebook",
        items: [
          "Criação ou estruturação das páginas",
          "Padronização de identidade",
          "Configuração de informações e contatos",
          "Integração Instagram + Facebook (Meta Business)",
          "Inserção de localização",
          "Organização da apresentação",
          "Distribuição estratégica dos conteúdos"
        ]
      },
      {
        name: "Google Perfil da Empresa",
        description:
          "Ser encontrado também é autoridade. Quando alguém pesquisar por Massaneiro Mudas Florestais ou UDK Consultoria, precisamos controlar aquilo que essa pessoa encontrará. As avaliações também podem se transformar em uma poderosa prova social.",
        icon: "MapPin",
        items: [
          "Criação ou reivindicação do perfil",
          "Configuração de endereço, telefone e horário",
          "Área de atuação e categorias",
          "Descrição estratégica",
          "Fotografias, serviços e produtos",
          "Atualização de informações e acompanhamento",
          "Estratégia de avaliações"
        ]
      },
      {
        name: "Site Institucional",
        description:
          "As redes sociais apresentam. O Google encontra. O site consolida a autoridade. Nossa proposta é desenvolver sites institucionais modernos, rápidos e responsivos para cada empresa.",
        icon: "Globe",
        items: [
          "Estrutura de páginas planejada por empresa",
          "Layout responsivo e carregamento rápido",
          "Apresentação de estrutura, produtos e serviços",
          "Catálogo institucional (Massaneiro)",
          "Base de conteúdo técnico (UDK)",
          "Localização e caminhos claros de contato",
          "Integração com WhatsApp"
        ]
      },
      {
        name: "Captação Profissional de Fotos e Vídeos",
        description:
          "Esse será um dos maiores diferenciais do projeto. As duas empresas possuem uma enorme vantagem: existe conteúdo acontecendo todos os dias. Nossa função será transformar isso em material profissional.",
        icon: "Camera",
        items: [
          "Instalações, viveiros, plantações e propriedades",
          "Animais, equipamentos e processos",
          "Equipe, atendimentos e rotina",
          "Bastidores e depoimentos",
          "Entrevistas e vídeos institucionais",
          "Vídeos educativos",
          "Banco profissional de imagens"
        ]
      },
      {
        name: "Captação com Drone",
        description:
          "O drone permitirá produzir imagens que dificilmente seriam obtidas de outra maneira — e mostra a real dimensão das empresas. Uma única captação gera ativos para vários canais.",
        icon: "Plane",
        items: [
          "Imagens aéreas da estrutura e da operação",
          "Áreas cultivadas, propriedades e pastagens",
          "Material para Instagram e Facebook",
          "Material para Google e site",
          "Reels e vídeos institucionais",
          "Apresentações comerciais"
        ]
      },
      {
        name: "Copywriting e SEO",
        description:
          "Todo o conteúdo será desenvolvido pensando nas pesquisas realizadas pelo público, trabalhando palavras relacionadas ao segmento de cada empresa de maneira natural.",
        icon: "PenTool",
        items: [
          "Legendas e títulos",
          "Biografias dos perfis",
          "Textos do site",
          "Descrição no Google",
          "Descrição dos serviços",
          "Conteúdos educativos"
        ]
      },
      {
        name: "Monitoramento e Estratégia",
        description:
          "O trabalho não termina quando o conteúdo é publicado. As informações coletadas orientarão os próximos conteúdos.",
        icon: "BarChart3",
        items: [
          "Alcance e visualizações",
          "Crescimento e interações",
          "Conteúdos com melhor desempenho",
          "Visitas aos perfis e pesquisas",
          "Acessos e comportamento da audiência",
          "Reuniões estratégicas de acompanhamento"
        ]
      }
    ],
    authorityPillars: [
      {
        number: "01",
        title: "Quem somos",
        description: "História, pessoas, estrutura e propósito."
      },
      {
        number: "02",
        title: "O que fazemos",
        description: "Produtos, serviços, processos e conhecimento."
      },
      {
        number: "03",
        title: "Como fazemos",
        description:
          "Bastidores, tecnologia, metodologia, acompanhamento e rotina."
      },
      {
        number: "04",
        title: "Por que confiar",
        description:
          "Experiência, clientes, resultados, estrutura, depoimentos e conhecimento técnico."
      }
    ],
    phases: [
      {
        number: 1,
        title: "Fundação",
        objective:
          "Organizar as marcas, as redes sociais, o Google e toda a estrutura visual, deixando o planejamento pronto para a produção começar.",
        deliverables: [
          "Estratégia e planejamento editorial das duas marcas",
          "Refinamento e padronização das identidades visuais",
          "Estruturação de Instagram, Facebook e Meta Business",
          "Criação ou reivindicação do Google Perfil da Empresa",
          "Organização visual e biografias dos perfis",
          "Definição dos destaques de cada empresa"
        ],
        expectedResult:
          "Massaneiro e UDK com bases digitais organizadas, identidade padronizada e planejamento aprovado para iniciar a produção."
      },
      {
        number: 2,
        title: "Construção",
        objective:
          "Sair a campo: captação profissional, criação do banco de imagens e início da nova comunicação nos perfis.",
        deliverables: [
          "Captação profissional de fotos e vídeos nas duas operações",
          "Captação aérea com drone",
          "Montagem do banco profissional de imagens",
          "Primeiros conteúdos institucionais publicados",
          "Início da cadência de Reels e carrosséis",
          "Desenvolvimento dos sites institucionais"
        ],
        expectedResult:
          "Perfis com conteúdo real da operação, banco de imagens formado e sites em construção com material próprio."
      },
      {
        number: 3,
        title: "Autoridade",
        objective:
          "Transformar o conhecimento técnico que hoje existe dentro das empresas em conteúdo — e em percepção de autoridade.",
        deliverables: [
          "Conteúdos técnicos e educativos das duas marcas",
          "Bastidores, estrutura e rotina de campo",
          "Cases e resultados das propriedades atendidas",
          "Depoimentos e presença dos profissionais",
          "Estratégia de avaliações no Google",
          "Otimização contínua a partir dos dados"
        ],
        expectedResult:
          "As duas marcas reconhecidas como referência técnica em seus segmentos, com prova social acumulando no Google."
      },
      {
        number: 4,
        title: "Consolidação",
        objective:
          "Fazer site, Google, redes sociais e conteúdo trabalharem juntos como um único ecossistema.",
        deliverables: [
          "Sites institucionais no ar e integrados aos perfis",
          "Google Perfil da Empresa ativo e alimentado",
          "Conteúdo distribuído de forma coordenada entre os canais",
          "Copywriting e SEO aplicados em todos os pontos",
          "Relatórios de desempenho e reuniões estratégicas",
          "Planejamento do ciclo seguinte"
        ],
        expectedResult:
          "Ecossistema digital institucional completo: quem pesquisar pelas marcas encontrará uma estrutura à altura do que elas representam presencialmente."
      }
    ],
    optionalServices: [
      "Meta Ads e Google Ads",
      "Landing pages e campanhas institucionais",
      "Materiais gráficos, catálogos e apresentações comerciais",
      "Materiais para eventos e feiras",
      "Vídeos institucionais e fotografia profissional",
      "Campanhas de recrutamento",
      "Automações e WhatsApp",
      "Desenvolvimento web, sistemas e soluções digitais"
    ],
    investment: {
      totalMonthly: "R$ 1.800",
      totalLabel: "Gestão Completa Mensal — Massaneiro + UDK",
      originalPrice: "R$ 6.000",
      splitLabel: "Na prática, o custo por perfil",
      splitItems: [
        { label: "Massaneiro Mudas Florestais", value: "R$ 900" },
        { label: "UDK Consultoria", value: "R$ 900" }
      ],
      exclusions: [
        "Custos de deslocamento para captações fora da região de Monte Castelo/SC",
        "Verbas de anúncio (Meta Ads e Google Ads), quando contratadas, pagas diretamente às plataformas"
      ],
      packageIncludes: [
        "Gestão do Instagram da Massaneiro",
        "Gestão do Instagram da UDK",
        "Gestão do Facebook das duas empresas",
        "Gestão do Google das duas empresas",
        "Planejamento estratégico",
        "Cronogramas de conteúdo",
        "Design",
        "Copywriting",
        "Reels",
        "Carrosséis",
        "Conteúdo institucional",
        "Conteúdo educativo",
        "Edição de fotos",
        "Edição de vídeos",
        "Captação de conteúdo conforme planejamento",
        "Captação aérea conforme necessidade das pautas",
        "Banco de fotos e vídeos",
        "Otimização dos perfis",
        "Acompanhamento de resultados",
        "Reuniões estratégicas",
        "Suporte da agência"
      ],
      setupFee: "R$ 6.890",
      setupLabel: "Implantação — Parceria Digital Completa",
      setupOriginalPrice: "R$ 10.720",
      setupIncludes: [
        "Estratégia das duas marcas",
        "Refinamento das duas identidades",
        "Estruturação do Instagram",
        "Estruturação do Facebook",
        "Meta Business",
        "Google Perfil da Empresa",
        "Site institucional Massaneiro",
        "Site institucional UDK",
        "Organização visual dos perfis",
        "Estrutura inicial de conteúdo",
        "Planejamento editorial"
      ],
      setupItems: [
        { item: "Implantação Massaneiro", value: "R$ 4.860" },
        { item: "Implantação UDK", value: "R$ 5.860" }
      ],
      setupNote:
        "O pagamento da implantação poderá ser negociado de acordo com a estrutura comercial da proposta.",
      paymentConditions: [
        "Implantação e gestão mensal contratadas em conjunto pelas duas empresas",
        "Gestão mensal paga via boleto ou PIX",
        "Sem fidelização contratual — permanência por resultado"
      ],
      notes: [
        "A condição só existe na contratação conjunta: é uma operação única atendendo duas marcas, com a mesma ida a campo, o mesmo planejamento e a mesma equipe. Contratadas separadamente, valem as tabelas individuais acima.",
        "Os valores individuais de cada empresa permanecem disponíveis caso apenas uma das marcas siga com o projeto."
      ]
    },
    valueAnchor: {
      notList: [
        "apenas artes",
        "apenas posts",
        "apenas vídeos",
        "apenas um site"
      ],
      statement:
        "Estarão contratando uma equipe responsável por construir e manter a imagem digital de duas empresas.",
      perceptions: [
        "Essa empresa é estruturada.",
        "Eles entendem do que fazem.",
        "Existe experiência aqui.",
        "É uma empresa em que eu posso confiar."
      ],
      closing: "É isso que significa autoridade digital."
    },
    differentials: [
      "Duas empresas, duas identidades e uma única estratégia integrada de autoridade digital",
      "Conteúdo baseado na operação real — nenhum concorrente tem o que Massaneiro e UDK têm para mostrar",
      "Captação profissional própria: fotos, vídeos e drone inclusos na gestão mensal",
      "Presença construída em quatro frentes: Instagram, Facebook, Google e site institucional",
      "Sem fidelização contratual — permanência exclusivamente por resultado",
      "Agência full service com mais de 16 anos de estrada e atuação em 8 países"
    ]
  },
  {
    slug: "acic-cacador",
    contractSlug: "acic-cacador",
    clientName: "ACIC — Associação Empresarial de Caçador",
    contactName: "Eduardo Tombini",
    theme: "aciav",
    proposalType: "sistema",
    greeting:
      "A ACIC não vai contratar o desenvolvimento de um sistema. Vai receber a sua própria unidade dentro do ACIAV Saúde — a mesma plataforma que já está construída, testada e em operação em Videira, com todos os painéis, o aplicativo publicado nas lojas e a rede credenciada. No ar em 7 dias úteis a partir da assinatura.",
    validUntil: "2026-09-03",
    whatsappNumber: "5549988446685",
    closingQuestion:
      "Vamos abrir a unidade da ACIC e levar o benefício de saúde para as empresas associadas de Caçador?",

    highlights: [
      "Plataforma pronta e em operação real — não é um projeto a construir",
      "Unidade própria da ACIC, com dados isolados dos de Videira",
      "Aplicativo já publicado na Google Play e na App Store",
      "Rede credenciada de Videira importada e sincronizada na implantação",
      "Go-live em 7 dias úteis após a assinatura",
    ],

    beforeAfter: {
      beforeTitle: "Construir uma plataforma equivalente do zero",
      beforeItems: [
        "Investimento de R$ 30.000 em desenvolvimento",
        "Cerca de 6 meses até o go-live",
        "Risco de escopo, prazo e retrabalho ao longo do projeto",
        "Publicação nas lojas a fazer do zero, com filas de review",
        "Rede credenciada a construir sem nenhuma base inicial",
        "Acompanhamento técnico necessário durante todo o período",
      ],
      afterTitle: "Aderir ao ACIAV Saúde como unidade ACIC",
      afterItems: [
        "Investimento de R$ 3.900 na implantação",
        "7 dias úteis até o go-live",
        "Plataforma validada em operação real em Videira",
        "Aplicativo já disponível na Google Play e na App Store",
        "Credenciados de Videira importados e sincronizados na largada",
        "Suporte, melhorias e atualizações contínuas por R$ 500/mês",
      ],
      expectedResults:
        "A ACIC entra num sistema que já passou pela parte difícil: o que em Videira levou meses de desenvolvimento, validação e ajuste, em Caçador é configuração.",
    },

    services: [
      {
        name: "Painel de Gestão da ACIC",
        description:
          "O centro de comando da unidade. É por aqui que a ACIC cadastra empresas associadas, credencia clínicas e profissionais, acompanha os atendimentos e enxerga o desempenho do convênio em Caçador.",
        icon: "LayoutDashboard",
        items: [
          "Cadastro e gestão das empresas associadas",
          "Credenciamento de clínicas, laboratórios e profissionais",
          "Visão de vidas ativas, atendimentos e movimentação",
          "Gestão de beneficiários titulares e dependentes",
          "Relatórios e indicadores da unidade",
          "Configurações e políticas próprias da ACIC",
        ],
      },
      {
        name: "Painel da Empresa (RH)",
        description:
          "Cada empresa associada recebe o seu próprio acesso. O RH cadastra e gerencia os colaboradores sem depender da ACIC para operações do dia a dia.",
        icon: "Building2",
        items: [
          "Cadastro de colaboradores e dependentes",
          "Ativação e inativação de beneficiários",
          "Acompanhamento da utilização pela equipe",
          "Relatórios da empresa",
          "Gestão autônoma, sem intermediação da associação",
        ],
      },
      {
        name: "Painel do Credenciado",
        description:
          "Clínicas, laboratórios e profissionais credenciados validam o atendimento na hora, direto no painel — sem telefonema, sem papel e sem dúvida sobre quem é beneficiário.",
        icon: "Stethoscope",
        items: [
          "Validação e confirmação de atendimentos",
          "Consulta de elegibilidade do beneficiário",
          "Histórico de atendimentos realizados",
          "Dados do estabelecimento sempre atualizados",
        ],
      },
      {
        name: "Aplicativo do Associado",
        description:
          "O beneficiário leva a carteirinha no bolso. Aplicativo disponível para Android e iOS, além do acesso pelo navegador — mesma experiência que os associados de Videira já usam.",
        icon: "Smartphone",
        items: [
          "Carteirinha digital com QR Code",
          "Rede credenciada com busca por especialidade",
          "App para Android (Google Play) e iOS (App Store)",
          "Acesso também pelo navegador, sem instalar nada",
          "Login por CPF, sem burocracia",
          "Dependentes vinculados ao titular",
        ],
      },
      {
        name: "Unidade própria e isolamento de dados",
        description:
          "A ACIC recebe a sua própria unidade dentro da plataforma. A arquitetura do sistema é multi-inquilino desde a origem: cada unidade enxerga exclusivamente os seus dados.",
        icon: "ShieldCheck",
        items: [
          "Empresas, beneficiários e credenciados exclusivos da ACIC",
          "Nenhum dado de Caçador visível para Videira, e vice-versa",
          "Identidade e políticas configuráveis por unidade",
          "Usuários e permissões próprios da associação",
          "Registro de auditoria das operações",
        ],
      },
    ],

    phases: [
      {
        number: 1,
        title: "Criação da unidade",
        objective:
          "Abrir a unidade da ACIC dentro da plataforma e deixar a base configurada com a identidade e as regras da associação.",
        deliverables: [
          "Criação da unidade ACIC Caçador no sistema",
          "Configuração de identidade e dados institucionais",
          "Definição de políticas de acesso e segurança",
          "Criação dos usuários de gestão da associação",
        ],
        expectedResult:
          "Unidade da ACIC criada e isolada, pronta para receber empresas, credenciados e beneficiários.",
      },
      {
        number: 2,
        title: "Cadastro e importação",
        objective:
          "Popular a base de Caçador — incluindo a importação e sincronização da rede credenciada de Videira.",
        deliverables: [
          "Cadastro das empresas associadas indicadas pela ACIC",
          "Importação dos credenciados de Videira para a base de Caçador",
          "Sincronização das duas redes",
          "Cadastro dos credenciados próprios de Caçador",
        ],
        expectedResult:
          "Base da ACIC populada, com rede credenciada disponível desde o primeiro dia em vez de começar vazia.",
      },
      {
        number: 3,
        title: "Acessos e validação",
        objective:
          "Liberar os acessos de cada perfil e validar os fluxos de ponta a ponta antes de abrir para os associados.",
        deliverables: [
          "Criação dos acessos de RH das empresas",
          "Criação dos acessos dos credenciados",
          "Teste do fluxo completo: cadastro, carteirinha e validação de atendimento",
          "Conferência do app nas lojas com a unidade da ACIC",
        ],
        expectedResult:
          "Todos os perfis funcionando e testados, sem surpresa no dia da abertura.",
      },
      {
        number: 4,
        title: "Treinamento e go-live",
        objective:
          "Treinar as equipes da ACIC, das empresas e dos credenciados, e colocar a operação no ar.",
        deliverables: [
          "Treinamento da equipe de gestão da ACIC",
          "Orientação para o RH das empresas associadas",
          "Orientação para os credenciados",
          "Material de apoio e canal de suporte",
          "Go-live da unidade",
        ],
        expectedResult:
          "Convênio no ar em Caçador, com as equipes sabendo operar o sistema sem depender da agência.",
      },
    ],

    investment: {
      setupFee: "R$ 3.900",
      setupLabel: "Implantação da unidade ACIC Caçador",
      setupIncludes: [
        "Criação e configuração da unidade da ACIC",
        "Cadastro das empresas associadas",
        "Importação dos credenciados de Videira",
        "Sincronização das redes de Videira e Caçador",
        "Criação dos acessos de todos os perfis",
        "Treinamento das equipes",
      ],
      setupItems: [
        { item: "1ª parcela — na assinatura", value: "R$ 1.300" },
        { item: "2ª parcela — 28 dias", value: "R$ 1.300" },
        { item: "3ª parcela — 56 dias", value: "R$ 1.300" },
      ],
      setupNote:
        "Parcelado em 3x no boleto: a primeira à vista, na assinatura, e as demais em 28 e 56 dias.",
      totalMonthly: "R$ 500",
      totalLabel: "Mensalidade — suporte, melhorias e atualizações",
      packageIncludes: [
        "Suporte técnico à ACIC, às empresas e aos credenciados",
        "Melhorias e novas funcionalidades da plataforma",
        "Atualizações de segurança e manutenção evolutiva",
        "Hospedagem e infraestrutura da unidade",
        "Manutenção do aplicativo nas lojas",
        "Backup e monitoramento",
      ],
      paymentConditions: [
        "Implantação: R$ 3.900 em 3x no boleto — à vista, 28 dias e 56 dias",
        "Mensalidade: primeira cobrança 30 dias após a conclusão da implantação",
        "Implantação concluída em 7 dias úteis a partir da assinatura",
      ],
      notes: [
        "Toda melhoria feita na plataforma passa a valer também para a unidade da ACIC, sem custo adicional.",
        "Os valores de adesão das empresas associadas e as condições comerciais com os credenciados são definidos pela própria ACIC.",
      ],
    },

    optionalServices: [
      "Notificação de sincronização entre as unidades: quando Videira cadastrar um novo credenciado, a gestão de Caçador recebe o aviso na barra de notificação e sincroniza com um clique — e o mesmo no sentido inverso",
      "Relatórios personalizados conforme a necessidade da associação",
      "Integrações com sistemas já usados pela ACIC",
      "Campanhas de divulgação do convênio para as empresas associadas",
      "Materiais de apresentação e treinamento adicionais",
    ],

    faq: [
      {
        question: "Os dados de Caçador ficam separados dos de Videira?",
        answer:
          "Sim. A plataforma é multi-inquilino desde a arquitetura: cada unidade tem o seu próprio identificador e toda consulta ao banco é filtrada por ele. As empresas, os beneficiários e os credenciados da ACIC são exclusivos da ACIC — nenhum usuário de Videira enxerga dado de Caçador, e vice-versa.",
      },
      {
        question: "A ACIC precisa de equipe técnica para operar?",
        answer:
          "Não. A ACIC opera pelo painel de gestão, que é feito para uso administrativo. A parte técnica — servidor, banco de dados, atualizações, app nas lojas — fica inteiramente com a ArtDesign e está coberta pela mensalidade.",
      },
      {
        question: "Podemos ter credenciados exclusivos de Caçador?",
        answer:
          "Sim. A ACIC credencia livremente clínicas, laboratórios e profissionais da região. A importação da rede de Videira serve para que Caçador não comece do zero — mas a rede própria da ACIC é gerida pela ACIC.",
      },
      {
        question: "Quando começa a cobrança da mensalidade?",
        answer:
          "Trinta dias após a conclusão da implantação. Como a implantação leva 7 dias úteis a partir da assinatura, a primeira mensalidade cai cerca de um mês depois do sistema já estar no ar e em uso.",
      },
      {
        question: "O aplicativo já existe ou precisa ser desenvolvido?",
        answer:
          "Já existe e já está publicado na Google Play e na App Store. Os associados da ACIC usam o mesmo aplicativo dos de Videira, entrando na unidade de Caçador — não há desenvolvimento nem espera por aprovação de loja.",
      },
      {
        question: "E se a plataforma evoluir depois que entrarmos?",
        answer:
          "A ACIC recebe as evoluções junto. Como é uma plataforma única atendendo várias unidades, toda melhoria entra para todo mundo — isso está incluso na mensalidade.",
      },
    ],

    differentials: [
      "Plataforma em operação real, não um projeto no papel",
      "Go-live em 7 dias úteis contra os cerca de 6 meses de um desenvolvimento",
      "Rede credenciada de Videira disponível na largada",
      "Aplicativo já publicado nas duas lojas",
      "Evoluções da plataforma incluídas na mensalidade",
      "Suporte direto com quem desenvolveu o sistema",
    ],
  },
  {
    slug: "santa-augusta",
    clientName: "Vinícola Santa Augusta",
    contactName: "Vinícola Santa Augusta",
    theme: "vinicola",
    greeting:
      "A Santa Augusta tem produto premiado, marca madura e audiência construída. O que falta não é matéria-prima de marketing — é infraestrutura e operação. Este documento mostra, com evidência verificada página por página, onde está o dinheiro parado. E o que propomos fazer com ele.",
    validUntil: "2026-09-17",
    whatsappNumber: "5549988446685",
    closingQuestion:
      "Vamos colocar a operação digital no mesmo nível do que já está na garrafa?",

    stats: [
      {
        value: "500",
        label: "Erro em toda a loja do site",
        subtext:
          "A vitrine, as 4 categorias e as páginas de produto retornam erro fatal. Ninguém compra pelo domínio da marca.",
      },
      {
        value: "0",
        label: "Ferramentas de medição",
        subtext:
          "Sem GA4, sem Tag Manager, sem Pixel da Meta no site institucional — que é o endereço na ficha do Google.",
      },
      {
        value: "0",
        label: "Anúncios ativos",
        subtext:
          "Nenhuma campanha na Biblioteca da Meta, hoje ou no histórico. Zero mídia paga.",
      },
      {
        value: "78",
        label: "Posts de blog parados",
        subtext:
          "Patrimônio de SEO sem atualização desde 8 de dezembro de 2021. Conteúdo pago e não aproveitado.",
      },
    ],

    auditScores: [
      {
        label: "Infraestrutura de e-commerce",
        sublabel: "Domínio, checkout, exibição de preço",
        score: 2.5,
      },
      {
        label: "Dados e mensuração",
        sublabel: "GA4, pixels, atribuição, LGPD",
        score: 3.0,
      },
      {
        label: "SEO técnico e conteúdo",
        sublabel: "Canonical, schema, blog, on-page",
        score: 3.8,
      },
      {
        label: "Redes sociais",
        sublabel: "Alcance, engajamento, formato, conversão",
        score: 4.8,
      },
      {
        label: "Google Meu Negócio",
        sublabel: "Ficha, posts, avaliações, respostas",
        score: 5.2,
      },
      {
        label: "Marca e conteúdo de produto",
        sublabel: "Identidade, fotografia, fichas técnicas",
        score: 7.8,
      },
    ],

    auditFindings: [
      {
        ref: "C-01",
        severity: "critico",
        area: "E-commerce",
        title: "A loja dentro do site oficial está fora do ar",
        description:
          "Testamos a vitrine, as quatro categorias e cinco páginas de produto individuais. Todas retornam erro fatal do WordPress. O botão principal da home — “Conheça todos os produtos” — e o item de menu “Vinhos e Espumantes” apontam exatamente para esse erro.",
        evidence: [
          "GET /vinhos-e-espumantes/            → 500  “Há um erro crítico no seu site”",
          "GET /produtos/tinto/                 → 500",
          "GET /produto/vinho-tinto-imortali/   → 500",
          "GET /produto/kit-espumante-santa-augusta/ → 500",
        ],
        impact:
          "Quem chega pesquisando a marca no Google encontra uma loja quebrada. É o tráfego mais qualificado que existe, e está sendo perdido inteiro.",
      },
      {
        ref: "C-02",
        severity: "critico",
        area: "Arquitetura",
        title: "A loja que funciona roda no domínio de outra empresa",
        description:
          "O endereço loja.santaaugusta.com.br é fachada. A tag canonical, o sitemap inteiro e todos os links internos apontam para o domínio da plataforma. O cliente digita os dados do cartão numa URL que não tem o nome da Santa Augusta.",
        evidence: [
          "canonical  → vinicolasantaaugusta.commercesuite.com.br",
          "sitemap    → 112 de 112 URLs em commercesuite.com.br",
          "checkout   → commercesuite.com.br/checkout/cart",
        ],
        impact:
          "A autoridade de SEO da loja é creditada a um domínio de terceiro, o abandono sobe no passo mais sensível da compra, e a atribuição de conversão se fragmenta entre hosts diferentes.",
      },
      {
        ref: "C-03",
        severity: "critico",
        area: "Dados e mídia",
        title: "O site que o Google indica não mede absolutamente nada",
        description:
          "A loja tem Tag Manager, GA4, Google Ads e Pixel da Meta instalados. O site institucional — que é o link cadastrado na ficha do Google e o destino de toda a busca de marca — não tem nada.",
        evidence: [
          "loja.santaaugusta.com.br  → GTM-5GHNRL7 · GA4 G-7DC8YG0M67 · Ads AW-11084625174 · Meta Pixel",
          "santaaugusta.com.br       → sem GTM · sem GA4 · sem Meta Pixel · sem Google Ads",
        ],
        impact:
          "Não existe público de remarketing formado a partir de quem pesquisa a marca. Sem pixel, todo visitante é perdido para sempre. Qualquer verba investida hoje seria otimizada com dados incompletos.",
      },
      {
        ref: "C-04",
        severity: "critico",
        area: "Enoturismo",
        title: "O negócio de maior margem não existe digitalmente",
        description:
          "O Wine Garden é anunciado na bio do Instagram, aos sábados das 14h30 às 20h. A URL /wine-garden/ retorna 404. Não há preço publicado, não há reserva online, e a loja vende apenas garrafas — nenhuma experiência.",
        evidence: [
          "GET /wine-garden/  → 404",
          "GET /sobre-nos/    → 404  (indexada no Google)",
          "GET /premios/      → 404  (não consta no sitemap)",
        ],
        impact:
          "O turista que pesquisa “vinícola para visitar em Santa Catarina” na quinta à noite, com cartão na mão, não tem como comprar. Ele compra do concorrente que tem checkout.",
      },
      {
        ref: "C-05",
        severity: "critico",
        area: "Conversão",
        title: "Metade das vitrines exibe “Carregando…” no lugar do preço",
        description:
          "Nas listas de Destaques, Mais Vendidos, categorias e produtos relacionados, boa parte dos cards nunca resolve o preço. O carrossel duplica os mesmos produtos e a segunda cópia fica travada.",
        evidence: [
          "Home     → 8 de 16 cards de “Destaques” com “Carregando...”",
          "Vinhos   → 9 de 15 cards visíveis sem preço",
          "PDP      → 4 de 4 produtos relacionados sem preço",
        ],
        impact:
          "Produto sem preço não é comparado, não é clicado e não entra no carrinho. É perda direta de receita em cada sessão, e a correção é de dias.",
      },
      {
        ref: "C-06",
        severity: "critico",
        area: "Jurídico · LGPD",
        title: "Dados obrigatórios ausentes e cookies sem consentimento",
        description:
          "O rodapé da loja não traz CNPJ nem endereço físico, exigidos pelo Decreto 7.962/2013 para comércio eletrônico. Nenhum dos dois sites apresenta banner de consentimento, embora a loja carregue Pixel, GA4 e Google Ads. Também não há verificação de idade em loja de bebida alcoólica.",
        evidence: [
          "Rodapé da loja → sem CNPJ · sem endereço · 2 telefones e 2 WhatsApps distintos",
          "Banner LGPD    → ausente nos dois domínios",
          "Portaria 18+   → ausente",
        ],
        impact:
          "Exposição a notificação do Procon, a sanções da ANPD e a questionamento de autorregulamentação publicitária de bebidas.",
      },
      {
        ref: "A-01",
        severity: "atencao",
        area: "Reputação",
        title: "54 avaliações no Google e nenhuma resposta",
        description:
          "A ficha está em 4,4 com 54 avaliações — o maior volume entre as vinícolas locais e a menor nota do grupo. Não há uma única resposta do proprietário, incluindo às críticas. A última atualização publicada é de cinco anos atrás.",
        evidence: [
          "Santa Augusta       4,4 · 54 avaliações · 0 respostas",
          "Vinícola Zago       4,9 · 35 avaliações",
          "Vinícola Monte Vecchio  4,9 · 52 avaliações",
        ],
        impact:
          "Responder avaliação é o gesto de reputação de menor custo que existe e é fator de posicionamento local. Há 54 conversas em aberto.",
      },
      {
        ref: "A-02",
        severity: "atencao",
        area: "Redes sociais",
        title: "O calendário ignora o dia em que a vinícola fatura",
        description:
          "Analisando 36 publicações datadas entre abril e agosto, 72% saem em terça ou quinta. Sábado e domingo somam duas publicações em quatro meses. O Wine Garden funciona justamente aos sábados, das 14h30 às 20h.",
        evidence: [
          "Quinta 14 · Terça 12 · Sexta 5 · Quarta 2 · Seg/Sáb/Dom 1 cada",
          "Intervalo médio 3,5 dias · 13 janelas de silêncio ≥ 5 dias",
        ],
        impact:
          "A marca não comunica no dia e no horário em que está aberta e vendendo experiência. É receita deixada na mesa por calendário, não por verba.",
      },
      {
        ref: "A-03",
        severity: "atencao",
        area: "Conversão",
        title: "O botão “Compre Aqui” da bio está mal formatado",
        description:
          "O link na bio aponta para um número de WhatsApp fora do padrão brasileiro: sem o DDI 55 e com um dígito a menos. É o CTA de venda principal do perfil. O agregador usado é de terceiro, sem nenhum parâmetro de rastreio.",
        evidence: [
          "Compre Aqui   → wa.me/4999812565   (formato inválido)",
          "Nosso Site    → commercesuite.com.br  (não é o domínio da marca)",
          "Enoturismo    → PDF no Google Drive",
        ],
        impact:
          "Sem UTM, nenhuma venda vinda do Instagram pode ser atribuída. E o material de enoturismo de uma marca premium é um PDF em nuvem, sem indexação.",
      },
      {
        ref: "A-04",
        severity: "atencao",
        area: "Reputação",
        title: "Destaque “GOLPE!!!” fixado no perfil",
        description:
          "Existe um destaque permanente alertando sobre fraude usando a marca, o que indica histórico de perfis falsos vendendo em nome da vinícola. Não há página oficial de canais verificados no site.",
        impact:
          "Risco reputacional real e sem protocolo. Uma página de “canais oficiais” no domínio da marca resolve, protege receita e encerra a dúvida do comprador.",
      },
    ],

    highlights: [
      "Medalha Grande Ouro no Concurso do Espumante Brasileiro 2023 — 13 premiados entre 505 amostras, única vinícola catarinense do evento",
      "Fichas de rótulo em nível de importadora premium: visual, olfato, paladar, método, corte, temperatura e harmonizações",
      "Três linhas com escada de preço pronta: Tapera (R$ 83–99), Santa Augusta (R$ 94–150), Fenice (R$ 154–275) e o iMorTali a R$ 391",
      "18,7 mil seguidores no Instagram com conta verificada e 17 mil no Facebook",
      "Wine Garden, hospedagem, visitação e Clube VSA já operando fisicamente",
      "Direção de arte consistente e de alto padrão — o feed tem cara de vinícola premium",
      "Quatro materiais ricos já produzidos: guias de espumantes, linguagem do vinho, harmonizações e ocasiões",
      "Loja Tray configurada com frete real, filtros e recuperação de carrinho ativa",
      "78 artigos de blog já publicados, respondendo exatamente às buscas de quem descobre vinho",
    ],

    beforeAfter: {
      beforeTitle: "Post estático — o formato de hoje",
      beforeItems: [
        "4 a 12 curtidas por publicação",
        "Zero comentários na maioria dos posts",
        "Taxa de engajamento entre 0,02% e 0,06%",
        "Legenda terminando em “Conheça nossos rótulos. Link na bio.”",
        "Mesma lista de 13 hashtags repetida em todos os posts",
        "Sem pergunta, sem enquete, sem convite à conversa",
      ],
      afterTitle: "Reels com pessoa — a prova que veio da própria marca",
      afterItems: [
        "109 curtidas em 3 horas",
        "30 comentários e 7 compartilhamentos",
        "Uma pessoa falando na câmera, comparando dois rótulos",
        "Terminando com pergunta direta: “TAPERA ou FENICE?”",
        "Mesma audiência, mesmo perfil, mesmo dia",
        "Melhor desempenho de produto de todo o período analisado",
      ],
      expectedResults:
        "O problema não é a base nem o volume de publicação. É formato e convite à conversa. E quem provou isso não fomos nós: foi a própria Santa Augusta, numa manhã de quinta-feira.",
    },

    benchmark: {
      title: "O que os concorrentes de altitude cobram — publicamente",
      intro:
        "Todas as vinícolas abaixo publicam preço de experiência e têm caminho de reserva. A Santa Augusta é a única da lista sem nenhum dos dois.",
      columns: ["Entrada", "Intermediária", "Premium", "Reserva online"],
      rows: [
        {
          name: "Suzin",
          note: "São Joaquim",
          cells: ["R$ 95", "R$ 125", "R$ 145", "Sim, via Wine Locals"],
        },
        {
          name: "Leone di Venezia",
          cells: ["R$ 128", "R$ 345", "R$ 375", "Parcial"],
        },
        {
          name: "Pericó",
          cells: ["R$ 130", "R$ 180", "—", "Sim, via Wine Locals"],
        },
        {
          name: "Villa Francioni",
          cells: ["R$ 150", "R$ 220–280", "R$ 350", "Sim, checkout próprio"],
        },
        {
          name: "Thera",
          note: "Bom Retiro",
          cells: ["R$ 139", "R$ 280", "R$ 595", "Sim, loja própria"],
        },
        {
          name: "Casa Valduga",
          note: "RS, referência",
          cells: ["R$ 195", "R$ 300–350", "R$ 600", "Parcial"],
        },
        {
          name: "Santa Augusta",
          highlight: true,
          cells: [
            "Nenhum preço publicado",
            "—",
            "—",
            "Não",
          ],
        },
      ],
      footnote:
        "Preços coletados nas páginas públicas das vinícolas. O Vale do Rio do Peixe — Videira, Tangará e Pinheiro Preto — concentra cerca de 80% da uva de Santa Catarina e tem oferta digital de experiência quase nula. A barreira para virar a vinícola-âncora da região é baixíssima, e a janela está se fechando: o estado passou de 263 vinícolas em 2020 para 339 em 2026.",
    },

    services: [
      {
        name: "Resgate técnico da operação",
        description:
          "A primeira entrega, e a que devolve receita sem depender de mídia. Diagnóstico do erro fatal no servidor, restauração ou redirecionamento das rotas de produto, correção da exibição de preço nas vitrines e limpeza das páginas obsoletas ainda publicadas.",
        icon: "Wrench",
        price: "R$ 2.900",
        priceType: "project",
        items: [
          "Leitura do log do servidor e diagnóstico do erro 500",
          "Restauração das páginas de produto ou redirecionamento 301 para a loja",
          "Correção do preço “Carregando…” em vitrines, categorias e relacionados",
          "Correção dos 404 indexados: /sobre-nos/ e /wine-garden/",
          "Remoção da campanha de Black Friday de 2021 ainda publicada",
        ],
      },
      {
        name: "Unificação do domínio da loja",
        description:
          "Trazer a autoridade de SEO e a confiança do checkout de volta para o nome Santa Augusta. Hoje as 112 URLs da loja e o pagamento rodam no domínio da plataforma.",
        icon: "Globe",
        price: "R$ 1.900",
        priceType: "project",
        items: [
          "Definição do domínio próprio como primário no painel da Tray",
          "Redirecionamento 301 do domínio da plataforma para o da marca",
          "Regeração do sitemap e reenvio da indexação no Search Console",
          "Desativação do WooCommerce e unificação da base de cadastros",
          "Botões de compra do site apontando para a loja",
        ],
      },
      {
        name: "Camada de medição completa",
        description:
          "Pré-requisito de tudo. Sem isto, nenhuma verba pode ser otimizada e nenhum resultado pode ser provado. Instalação nos dois domínios, com medição entre eles.",
        icon: "BarChart3",
        price: "R$ 2.400",
        priceType: "project",
        items: [
          "Google Tag Manager nos dois domínios",
          "GA4 com medição entre domínios e eventos de e-commerce",
          "Pixel da Meta com API de Conversões",
          "Tags de conversão do Google Ads e Search Console",
          "Painel de linha de base documentado no dia 15",
        ],
      },
      {
        name: "Conformidade legal e LGPD",
        description:
          "Fechar a exposição a Procon e ANPD antes de escalar tráfego. Uma loja de bebida alcoólica com pixels rodando e sem consentimento é risco que cresce junto com o investimento.",
        icon: "ShieldCheck",
        price: "R$ 1.200",
        priceType: "project",
        items: [
          "CNPJ, razão social e endereço completo no rodapé dos dois sites",
          "Plataforma de consentimento de cookies integrada ao Tag Manager",
          "Portaria de verificação de idade",
          "Revisão da política de privacidade e de trocas",
          "Remoção da política duplicada",
        ],
      },
      {
        name: "Novo site institucional e de enoturismo",
        description:
          "O ativo que hoje não existe. Um site à altura da marca, com o negócio de maior margem finalmente comprável: Wine Garden com preço, o que inclui, política de cancelamento e reserva online.",
        icon: "Layout",
        price: "R$ 8.900",
        priceType: "project",
        items: [
          "Páginas de Wine Garden, visitação, harmonizações, hospedagem e eventos",
          "Três níveis de experiência com preço publicado e reserva",
          "Página de prêmios com o Grande Ouro de 2023 em destaque",
          "Página de canais oficiais, encerrando o problema dos perfis falsos",
          "Página de links própria, com UTM em cada destino",
          "SEO on-page: H1, alt, meta e schema de LocalBusiness e Winery",
        ],
      },
      {
        name: "Reestruturação do Google Meu Negócio",
        description:
          "O canal mais próximo do dinheiro do enoturismo e o mais barato de corrigir. Hoje está no ar, mas sem gestão há cinco anos.",
        icon: "MapPin",
        price: "R$ 1.800",
        priceType: "project",
        items: [
          "Categorias secundárias, atributos e produtos cadastrados",
          "Fotografia atual e horário do Wine Garden aos sábados",
          "Resposta às 54 avaliações existentes, começando pelas críticas",
          "Link de reserva e botão de agendamento",
          "Padronização de nome, endereço, telefone e horário em todos os canais",
        ],
      },
      {
        name: "Sistema de conteúdo e linha editorial",
        description:
          "A base que faz a gestão mensal render. Pilares definidos, templates construídos sobre a identidade que já existe, e um padrão de copy que pede ação em vez de terminar em “link na bio”.",
        icon: "PenTool",
        price: "R$ 2.400",
        priceType: "project",
        items: [
          "Cinco pilares editoriais: Rosto da vinícola, Altitude, Wine Garden, Harmonização e Bastidor de safra",
          "Templates de post, carrossel e Reels sobre a identidade atual",
          "Padrão de copy com pergunta ou tarefa ao fim de cada legenda",
          "Calendário que ocupa sábado, o dia em que o Wine Garden abre",
          "Banco de pautas e diretrizes de hashtag",
        ],
      },
      {
        name: "Gestão de redes sociais",
        description:
          "Instagram, Facebook e YouTube Shorts operados com vídeo como formato principal — porque foi o vídeo que a própria marca provou funcionar. Sem quantidade fixa de posts: a régua é a pauta que gera conversa.",
        icon: "Instagram",
        price: "R$ 2.900",
        priceType: "monthly",
        items: [
          "Planejamento editorial e aprovação mensal do calendário",
          "Criação de artes, carrosséis e edição de Reels",
          "Copywriting com convite à conversa em toda publicação",
          "Publicação e gestão de comunidade, respondendo comentários e direct",
          "Republicação dos Reels no Facebook e como Shorts no YouTube",
          "Consolidação dos dois canais do YouTube e abertura do LinkedIn",
        ],
      },
      {
        name: "Captação de fotos e vídeos na vinícola",
        description:
          "O diferencial que nenhum concorrente da região tem construído. Ida a campo com regularidade para transformar vinhedo, adega, Wine Garden e as pessoas da casa em banco de conteúdo próprio.",
        icon: "Camera",
        price: "R$ 1.900",
        priceType: "monthly",
        items: [
          "Captação mensal na vinícola com equipe e equipamento próprios",
          "Vinhedo, adega, barricas, Wine Garden e bastidor de safra",
          "As irmãs à frente do negócio e o enólogo na câmera",
          "Fotografia de produto e de experiência",
          "Captação aérea com drone conforme a pauta",
          "Banco de imagens organizado e entregue à vinícola",
        ],
      },
      {
        name: "Gestão do Google Meu Negócio",
        description:
          "Rotina contínua depois da reestruturação: publicações semanais, resposta a toda avaliação nova e um programa ativo de coleta para virar o jogo contra os vizinhos de 4,9.",
        icon: "Star",
        price: "R$ 800",
        priceType: "monthly",
        items: [
          "Posts semanais na ficha",
          "Resposta a 100% das avaliações novas",
          "Programa de coleta: QR code no Wine Garden, na sacola e no pós-compra",
          "Atualização de fotos, produtos e horário especial de vindima",
          "Gestão das Perguntas e Respostas",
        ],
      },
      {
        name: "Conteúdo de busca — blog e SEO",
        description:
          "Recuperar os 78 artigos já publicados vale mais e custa menos do que produzir do zero. Atualizar, datar, categorizar e ligar cada um a um rótulo comprável.",
        icon: "Search",
        price: "R$ 900",
        priceType: "monthly",
        items: [
          "Recuperação editorial progressiva dos 78 posts existentes",
          "Duas pautas novas por mês ancoradas em busca real",
          "Roteiro de vinícolas em Videira, vinho de altitude, o que fazer na Serra",
          "Data visível, categorias e busca interna no blog",
          "Ponte de venda: todo post levando a um produto comprável",
        ],
      },
      {
        name: "Manutenção e evolução do site e da loja",
        description:
          "O site é ativo vivo. Atualizações, correções, novas páginas de campanha e ajustes de conversão testados a partir do que os dados mostrarem.",
        icon: "Settings",
        price: "R$ 700",
        priceType: "monthly",
        items: [
          "Atualizações de segurança e plataforma",
          "Novas páginas e ajustes de campanha",
          "Testes de conversão na loja e na página de reserva",
          "Monitoramento de disponibilidade e performance",
          "Otimização de imagens e velocidade",
        ],
      },
      {
        name: "E-mail marketing e clube de assinatura",
        description:
          "A Confraria já existe no papel e tem regulamento pronto, mas os pontos não podem ser gastos porque a loja estava fora do ar. É a alavanca de receita recorrente mais óbvia do negócio.",
        icon: "Mail",
        price: "R$ 900",
        priceType: "monthly",
        items: [
          "Reativação da base com sequência de retomada",
          "Fluxos de boas-vindas, carrinho abandonado e pós-compra",
          "Estruturação da Confraria como clube de assinatura com níveis e preço",
          "Régua de recorrência e curadoria mensal",
          "Aproveitamento dos quatro materiais ricos já produzidos como isca",
        ],
      },
      {
        name: "Gestão de mídia paga",
        description:
          "Entra por último, e de propósito. Só depois que o funil estiver funcionando e a medição instalada — antes disso, cada real vira aprendizado perdido em jornada quebrada.",
        icon: "Target",
        price: "R$ 1.500",
        priceType: "monthly",
        items: [
          "Google Ads: campanha de marca, busca local e Performance Max com catálogo",
          "Meta Ads: tráfego local por raio para o Wine Garden e remarketing",
          "Públicos semelhantes a partir da base de compradores",
          "Campanha de vendas com catálogo integrado",
          "Verba de anúncio paga direto às plataformas, sugerida a partir de R$ 3.000/mês",
        ],
      },
    ],

    contentSuggestions: [
      {
        format: "Reels",
        theme: "Rosto da vinícola",
        hook: "“Quem faz o vinho que você bebe?”",
        description:
          "As irmãs à frente da vinícola e o enólogo falando na câmera sobre uma decisão real da safra. É o formato que a própria marca já provou: 109 curtidas e 30 comentários em três horas, contra 4 a 12 dos estáticos.",
      },
      {
        format: "Reels",
        theme: "Altitude",
        hook: "“Mil metros mudam o vinho. Veja como.”",
        description:
          "O que o terroir de altitude catarinense faz com a uva, filmado no vinhedo. Conecta com as coordenadas que a marca já usa como grafismo e justifica o preço antes de o anúncio pedir a compra.",
      },
      {
        format: "Carrossel",
        theme: "Harmonização aplicável",
        hook: "“O que servir com Fenice num jantar de sexta”",
        description:
          "Harmonização prática, do dia a dia, não enciclopédica. Último card levando direto ao rótulo na loja, com UTM. Reaproveita as fichas de degustação que já existem e são excelentes.",
      },
      {
        format: "Reels",
        theme: "Wine Garden",
        hook: "“Sábado, 14h30. É assim que começa.”",
        description:
          "Publicado no sábado — o dia em que a vinícola está aberta e faturando, e que hoje concentra 1 post em 4 meses. Mostra a experiência e leva à reserva.",
      },
      {
        format: "Post",
        theme: "Prova e prêmio",
        hook: "“13 entre 505. Uma delas é catarinense.”",
        description:
          "O Grande Ouro de 2023 no Concurso do Espumante Brasileiro. Hoje esse prêmio não aparece em nenhum canal próprio da marca — é o maior ativo de reputação da empresa, guardado numa gaveta.",
      },
      {
        format: "Carrossel",
        theme: "Escada de rótulos",
        hook: "“Por onde começar na Santa Augusta”",
        description:
          "Tapera para começar, Santa Augusta para o dia a dia, Fenice para a ocasião, iMorTali para guardar. Transforma a arquitetura de preço que já existe em jornada de entrada, recompra e presente.",
      },
      {
        format: "Reels",
        theme: "Bastidor de safra",
        hook: "“O que acontece na adega enquanto você dorme”",
        description:
          "Vindima, prensa, barrica, dégorgement. Conteúdo sazonal ancorado no calendário real da vinícola, aproveitando a Vindima de Altitude promovida pela associação estadual entre março e maio.",
      },
      {
        format: "Post",
        theme: "Conversa direta",
        hook: "“Tapera ou Fenice? Responde aí.”",
        description:
          "Pergunta binária, simples de responder, que gera comentário — o sinal de maior peso na distribuição. Foi exatamente esse o formato do Reels que quebrou o recorde do perfil.",
      },
    ],

    artDirection: [
      {
        image: "/clientes/santa-augusta/arte-03.jpg",
        format: "Post · Rótulo topo de linha",
        title: "iMorTali",
        note: "Fotografia de produto sobre preto e dourado, com assinatura de exclusividade. O padrão para os rótulos de maior valor agregado.",
      },
      {
        image: "/clientes/santa-augusta/arte-01.jpg",
        format: "Post · Linha Fenice",
        title: "O Coração da Adega",
        note: "Grafismo autoral sobre bordô, com a garrafa como protagonista. Direção de arte que sustenta preço sem precisar dizer o preço.",
      },
      {
        image: "/clientes/santa-augusta/arte-02.jpg",
        format: "Post · Movimento",
        title: "Sabor em Movimento",
        note: "Captação com líquido em movimento. É o tipo de imagem que rende bem em estático e vira Reels de alto desempenho.",
      },
      {
        image: "/clientes/santa-augusta/arte-04.jpg",
        format: "Post · Institucional",
        title: "Vinhos que contam histórias",
        note: "A escada completa de rótulos numa única peça. Serve para apresentação de portfólio, capa de destaque e material de ponto de venda.",
      },
    ],

    phases: [
      {
        number: 1,
        title: "Estancar a perda",
        objective:
          "Nada aqui depende de criatividade. É correção — e é o que garante que a vinícola veja resultado antes da primeira fatura vencer.",
        deliverables: [
          "Erro 500 diagnosticado e resolvido, ou rotas redirecionadas para a loja",
          "Preço visível em 100% das vitrines e produtos relacionados",
          "Domínio da loja unificado, com 301 e sitemap regerado",
          "Rastreamento completo instalado nos dois domínios",
          "WhatsApp corrigido e padronizado em todos os canais",
          "CNPJ, endereço, banner LGPD e portaria 18+ publicados",
        ],
        expectedResult:
          "A operação volta a vender pelo domínio da marca, e passa a existir linha de base medida para tudo que vem depois.",
      },
      {
        number: 2,
        title: "Construir o que falta",
        objective:
          "Criar os ativos que hoje não existem, para que a mídia da fase 3 tenha para onde levar as pessoas.",
        deliverables: [
          "Site institucional e de enoturismo no ar",
          "Wine Garden com três níveis de experiência, preço e reserva online",
          "Página de prêmios com o Grande Ouro de 2023 em destaque",
          "Ficha do Google reestruturada e as 54 avaliações respondidas",
          "Instagram virado para vídeo, com sábado ocupado no calendário",
          "Página de links própria, com UTM em cada destino",
        ],
        expectedResult:
          "O negócio de maior margem passa a ser comprável, e o tráfego de marca encontra caminho em vez de erro.",
      },
      {
        number: 3,
        title: "Ocupar o território",
        objective:
          "Só aqui entra verba de mídia, com funil funcionando e medição instalada. A partir deste ponto, cada real investido pode ser lido em receita.",
        deliverables: [
          "Google Ads e Meta Ads com campanha de marca, busca local e catálogo",
          "Experiências listadas na Wine Locals e nos portais de turismo",
          "Confraria relançada como clube de assinatura",
          "Recuperação editorial dos 78 posts, ligados a produto comprável",
          "Ação com criadores de vinho e turismo da região",
          "Painel de receita por canal, com reunião de performance",
        ],
        expectedResult:
          "A Santa Augusta ocupa a posição de vinícola-âncora do Vale do Rio do Peixe, com receita recorrente e atribuição por canal.",
      },
    ],

    goals: [
      {
        indicator: "Páginas de produto funcionando",
        today: "0%",
        target: "100%",
        how: "Verificação técnica",
      },
      {
        indicator: "Engajamento médio por publicação",
        today: "0,02% a 0,06%",
        target: "1,0% a 1,5%",
        how: "Instagram Insights",
      },
      {
        indicator: "Publicações em vídeo",
        today: "23%",
        target: "60%",
        how: "Calendário editorial",
      },
      {
        indicator: "Avaliações no Google",
        today: "54 · 4,4★",
        target: "120 · 4,7★",
        how: "Google Meu Negócio",
      },
      {
        indicator: "Taxa de resposta a avaliações",
        today: "0%",
        target: "100%",
        how: "Google Meu Negócio",
      },
      {
        indicator: "Receita da loja atribuída",
        today: "Não mensurável",
        target: "Rastreada por canal",
        how: "GA4 e painel próprio",
      },
      {
        indicator: "Reservas do Wine Garden",
        today: "Não existe o canal",
        target: "Canal ativo e medido",
        how: "UTM e formulário",
      },
    ],

    caveats: [
      {
        title: "A base de seguidores pode estar inflada",
        description:
          "Engajamento de 0,04% também é sintoma clássico de base adquirida ou herdada de campanhas antigas. Antes de assinar meta de engajamento, vamos abrir o Instagram Insights e olhar alcance real, demografia e proporção de contas ativas. Se a base for inflada, a estratégia muda de “ativar seguidores” para “reconquistar alcance com vídeo e mídia”. Preferimos ajustar a meta agora a quebrar promessa no terceiro mês.",
      },
      {
        title: "A causa do erro 500 só se confirma vendo o log",
        description:
          "O padrão é consistente com erro fatal de PHP num plugin ou tema do WooCommerce, quase sempre após atualização de versão no servidor. É diagnóstico provável, não confirmado. O primeiro pedido será acesso ao log — e, se o conserto se mostrar mais profundo, conversamos antes de executar, não depois.",
      },
      {
        title: "Não tivemos acesso a dados internos",
        description:
          "Todo o diagnóstico foi feito sobre evidência pública. Faturamento, custo de aquisição atual, volume de visitas ao Wine Garden e histórico de campanhas são desconhecidos. As metas propostas são referências de mercado e serão revistas na primeira reunião com dados reais.",
      },
      {
        title: "Não usamos seguidor como indicador de contrato",
        description:
          "Seguidor é a métrica mais fácil de subir e a que menos se converte em receita. Preferimos ser medidos por engajamento sobre base ativa, reservas, pedidos e avaliações.",
      },
    ],

    investment: {
      setupFee: "R$ 0",
      setupLabel: "Custo de entrada",
      setupOriginalPrice: "R$ 21.500",
      setupIncludes: [
        "Resgate técnico da operação — erro 500, preço e 404s",
        "Unificação do domínio da loja e do checkout",
        "Camada de medição completa: GTM, GA4, Pixel e API de Conversões",
        "Conformidade legal e LGPD",
        "Novo site institucional e de enoturismo",
        "Reestruturação do Google Meu Negócio",
        "Sistema de conteúdo e linha editorial",
      ],
      setupNote:
        "Contratadas isoladamente, estas sete frentes somariam R$ 21.500 de implantação. Aqui elas entram na mensalidade, sem cobrança de entrada — a Santa Augusta começa a ver resultado antes de desembolsar qualquer valor de projeto.",
      totalMonthly: "R$ 2.500",
      totalLabel: "Gestão Completa · tudo incluso",
      originalPrice: "R$ 9.600",
      packageIncludes: [
        "Todas as sete frentes de fundação, sem custo de entrada",
        "Gestão de redes sociais — Instagram, Facebook e YouTube Shorts",
        "Captação mensal de fotos e vídeos na vinícola, com drone",
        "Reels, carrosséis e posts sem quantidade fixa",
        "Copywriting e gestão de comunidade",
        "Gestão contínua do Google Meu Negócio e programa de avaliações",
        "Conteúdo de busca: blog, SEO e recuperação dos 78 artigos",
        "Manutenção e evolução do site e da loja",
        "E-mail marketing, CRM e clube de assinatura",
        "Gestão de Google Ads e Meta Ads",
        "Painel de receita por canal e reunião mensal de performance",
      ],
      exclusions: [
        "Verba de anúncio, paga diretamente ao Google e à Meta",
      ],
      paymentConditions: [
        "Sem contrato de fidelidade — a relação é mês a mês",
        "Sem custo de entrada e sem taxa de implantação",
        "Primeira mensalidade na assinatura, e as seguintes na mesma data",
        "Cancelamento a qualquer momento, com aviso de 30 dias",
      ],
      notes: [
        "A permanência é decidida pelo resultado, não por cláusula. Se em algum mês a Santa Augusta entender que não vale, encerra — e nós entregamos todos os acessos, arquivos e o banco de imagens produzido.",
        "Deslocamento para captações está incluso na região de Videira e entorno.",
      ],
    },

    differentials: [
      "Sem contrato de fidelidade: trabalhamos mês a mês e a renovação é decidida pelo resultado",
      "Sem custo de entrada — nenhuma taxa de implantação, projeto ou setup",
      "Diagnóstico verificado página por página, com evidência transcrita — não é achismo de reunião",
      "Somos a agência que produz o vídeo, escreve a copy, corrige o servidor e gerencia a mídia: uma única equipe, sem terceirização entre frentes",
      "Captação própria na vinícola todo mês, com equipe e drone — o ativo que nenhum concorrente da região construiu",
      "Ordem de execução deliberada: consertar e medir antes de investir verba",
      "Metas revistas com dados reais na primeira reunião, não prometidas no papel",
      "Mais de 16 anos de estrada, 449 clientes atendidos e operação em 8 países",
    ],
  },
  {
    slug: "santa-augusta-genyus-wine",
    clientName: "Vinícola Santa Augusta",
    contactName: "Vinícola Santa Augusta",
    theme: "genyus",
    proposalType: "sistema",
    greeting:
      "A Santa Augusta presta serviço de vinificação para 14 produtores e movimenta mais de meio milhão de reais por safra nesse serviço. Todo esse controle vive hoje em duas planilhas. Este documento mostra o que elas revelam — e propõe o sistema que a Fran já começou a desenhar sozinha no Excel.",
    validUntil: "2026-09-18",
    whatsappNumber: "5549988446685",
    closingQuestion:
      "Vamos tirar meio milhão de reais por safra da planilha e colocar num sistema que avisa antes de o dinheiro escapar?",

    stats: [
      {
        value: "R$ 641 mil",
        label: "Movimento da safra 2026",
        subtext:
          "Prensagem e vinificação somados, apurados linha a linha nas 75 entradas da planilha de safra.",
      },
      {
        value: "91%",
        label: "Das linhas sem nota fiscal",
        subtext:
          "68 de 75 recebimentos não têm número de nota registrado. Não dá para saber, olhando, o que foi faturado e o que não foi.",
      },
      {
        value: "32%",
        label: "De inflação na sua dashboard",
        subtext:
          "A mesma carga da Serra do Sol aparece em três linhas, e a tabela dinâmica soma o peso três vezes.",
      },
      {
        value: "14 meses",
        label: "O lote mais antigo parado",
        subtext:
          "Pinot Noir da CATA, recebido em 10/04/2025, ainda consta como fermentando — e sem nenhuma cobrança de guarda associada.",
      },
    ],

    auditFindings: [
      {
        ref: "P-01",
        severity: "critico",
        area: "Faturamento",
        title: "Três etapas de cobrança, e nenhuma delas com controle de emissão",
        description:
          "A operação cobra em três momentos distintos, cada um com sua nota. Mas na planilha da safra apenas 7 das 75 linhas registram número de nota. O restante fica no escuro: pode ter sido faturado, pode não ter.",
        evidence: [
          "1ª etapa · Desengace e prensagem   R$ 1,25 por quilo de uva",
          "2ª etapa · Vinificação              R$ 3,25 por litro produzido",
          "3ª etapa · Envase                   R$ 4,10 por garrafa",
          "",
          "Linhas com nota registrada:  7 de 75   (9%)",
        ],
        impact:
          "Cada etapa não faturada é receita que já foi trabalhada e entregue. Não há como auditar isso numa planilha de 16 abas sem somar tudo à mão, produtor por produtor.",
      },
      {
        ref: "P-02",
        severity: "critico",
        area: "Guarda",
        title: "O vinho de terceiro fica anos parado e ninguém cobra por isso",
        description:
          "A planilha termina na litragem produzida. O que acontece depois — o vinho ocupando tanque por um, dois ou três anos — não tem coluna, não tem tarifa e não tem alerta. Hoje a cobrança da guarda é feita caso a caso, o que na prática significa quando alguém lembra.",
        evidence: [
          "CATA · Pinot Noir · safra 2025",
          "Recebido em 10/04/2025 · 5.000 kg → 3.400 L",
          "Status na planilha hoje: FERMENTANDO",
          "Tempo em guarda: 14 meses · Valor cobrado por isso: nenhum",
        ],
        impact:
          "É o maior vazamento da operação, e o mais silencioso: ninguém sente falta de uma receita que nunca foi lançada.",
      },
      {
        ref: "P-03",
        severity: "critico",
        area: "Confiabilidade",
        title: "Três linhas são fisicamente impossíveis — e viraram fatura",
        description:
          "Não se extrai mais litro do que o peso da uva que entrou. O rendimento médio da casa é 70,9%, exatamente a faixa técnica correta. Mas há linhas acima de 100%, o que só pode ser erro de digitação ou mistura de partidas não registrada.",
        evidence: [
          "Suzin           Sauvignon Blanc   3.246 kg → 4.300 L   =  132%",
          "Serra do Sol    Sangiovese        3.578 kg → 4.400 L   =  123%",
          "Água Escondida  Chardonnay          258 kg →   310 L   =  120%",
          "",
          "Rendimento médio real da vinícola: 70,9%",
        ],
        impact:
          "A linha da Suzin virou fatura de R$ 13.975. Pelo rendimento real da casa seriam cerca de 2.270 L — uma diferença de aproximadamente R$ 6.600 numa única linha.",
      },
      {
        ref: "P-04",
        severity: "atencao",
        area: "Dados",
        title: "A planilha não consegue somar a si mesma",
        description:
          "Peso e litragem foram digitados como texto em várias células, misturando número e observação no mesmo campo. Nenhuma fórmula alcança esses valores.",
        evidence: [
          '"3000kg"      "1541,kg"      "2707L"',
          '"600L de sb barricado + 150"',
          '"310L sauvignon blanc cata"',
          "",
          "29 grafias distintas de varietal, com duplicatas por espaço e caixa",
        ],
        impact:
          "Qualquer total tirado dessa base precisa de limpeza manual antes. É por isso que o número nunca bate entre duas pessoas.",
      },
      {
        ref: "P-05",
        severity: "forte",
        area: "Operação",
        title: "A operação em si é boa — o controle é que não acompanha",
        description:
          "O rendimento médio de 70,9% está exatamente na faixa técnica esperada, e a conversão de litro para garrafa fecha em 750 ml em todas as linhas conferidas. Não há problema de processo produtivo. O problema é que nada disso é medido no momento em que acontece.",
        impact:
          "Isso é uma boa notícia comercial: não estamos propondo consertar a produção. Estamos propondo enxergá-la.",
      },
    ],

    screens: [
      {
        key: "recebimento",
        title: "Recebimento na balança",
        role: "Produção · celular",
        description:
          "A primeira tela do fluxo, feita para ser usada em pé, com luva, na chegada do caminhão. Poucos campos, letra grande, foto da nota e da carga. Gera o lote e imprime a etiqueta com QR.",
        points: [
          "Produtor, varietal e peso — nada além disso",
          "Foto da nota de entrada e da carga anexadas ao lote",
          "Funciona com internet ruim e sincroniza depois",
          "Gera o código do lote e a etiqueta com QR na hora",
        ],
      },
      {
        key: "apontamento",
        title: "Apontamento de produção",
        role: "Produção · desktop",
        description:
          "Onde se informa a litragem produzida. O sistema calcula o rendimento na hora e compara com a faixa técnica da casa. Fora do intervalo, ele avisa antes de deixar salvar.",
        points: [
          "Rendimento calculado automaticamente em litro por quilo",
          "Alerta imediato quando o número foge da faixa de 55% a 85%",
          "As três linhas impossíveis da safra 2026 não teriam passado",
          "Histórico de quem apontou, quando e o que mudou",
        ],
      },
      {
        key: "guarda",
        title: "Painel da guarda",
        role: "Diretoria e administrativo",
        description:
          "A tela que não existe hoje em lugar nenhum. Cada lote em guarda com sua barra de tempo colorida, a faixa de tarifa em que está e o valor já acumulado.",
        points: [
          "Verde dentro da faixa, âmbar quando falta pouco, vermelho quando virou",
          "Valor de guarda acumulado por lote e por produtor",
          "Memória de cálculo aberta, faixa por faixa, para o produtor conferir",
          "Filtro por produtor, varietal e ano de entrada",
        ],
      },
      {
        key: "adega",
        title: "Mapa da adega",
        role: "Todos os perfis",
        description:
          "Os tanques e as barricas como blocos coloridos, com ocupação e status. Bate o olho e sabe o que tem na adega, de quem é e há quanto tempo está lá.",
        points: [
          "Ocupação por tanque, em litros e em percentual",
          "Cor por status: fermentando, em guarda, aguardando envase",
          "QR na barrica leva direto ao lote pelo celular",
          "Leitura sincronizada com o cadastro de tanques do ERP",
        ],
      },
      {
        key: "financeiro",
        title: "O que há para faturar",
        role: "Financeiro",
        description:
          "A fila do dinheiro. Cada etapa concluída e ainda não faturada aparece aqui, com valor calculado e o produtor correspondente.",
        points: [
          "Etapas concluídas sem nota emitida, separadas por etapa",
          "Guarda acumulada pronta para cobrança no fechamento",
          "Alerta de lote entregue sem faturamento da terceira etapa",
          "Exportação para lançamento no CIA Sistemas",
        ],
      },
      {
        key: "bi",
        title: "Painel da diretoria",
        role: "Diretoria",
        description:
          "A visão que a Fran quer ter numa olhada: safra por varietal, rendimento por produtor, receita por etapa e projeção do que a guarda vai render.",
        points: [
          "Uva processada por cliente, por tipo e por mês",
          "Rendimento médio por produtor, com desvios destacados",
          "Receita realizada por etapa contra receita pendente",
          "Projeção de faturamento de guarda para os próximos meses",
        ],
      },
    ],

    services: [
      {
        name: "Módulo Safra",
        description:
          "O caminho da uva, do caminhão à garrafa. Recebimento, prensagem, vinificação e envase, cada etapa com seu apontamento, seu valor e sua nota.",
        icon: "Grape",
        items: [
          "Recebimento pelo celular na balança, com foto e etiqueta QR",
          "As três etapas de cobrança com valor configurável",
          "Rendimento calculado e validado no momento do apontamento",
          "Status do lote visível para todos os perfis",
          "Controle de nota fiscal emitida por etapa",
        ],
      },
      {
        name: "Módulo Guarda",
        description:
          "O que hoje não existe em lugar nenhum. Cada lote parado gera receita conforme o tempo, com política configurável e aviso antes de a faixa virar.",
        icon: "Timer",
        items: [
          "Editor de política com faixas de tempo e valores próprios",
          "Semáforo por lote: dentro da faixa, perto de virar, vencido",
          "Notificação em 90, 60 e 30 dias antes da virada",
          "Valor acumulado por lote e por produtor, com memória de cálculo",
          "Acúmulo por período, sem retroagir sobre o tempo já corrido",
        ],
      },
      {
        name: "Mapa da adega",
        description:
          "Tanques e barricas como blocos coloridos, com ocupação e status. A tela mais visual do sistema e a que responde “o que tem aqui dentro” sem depender da memória de ninguém.",
        icon: "LayoutGrid",
        items: [
          "Ocupação por tanque em litros e percentual",
          "Cor por status do lote",
          "QR na barrica abrindo o lote no celular",
          "Sincronizado com o cadastro de tanques do ERP",
        ],
      },
      {
        name: "Painéis e BI",
        description:
          "A visão da diretoria e a fila do financeiro. Safra por varietal, rendimento por produtor, receita por etapa e o que está pronto para faturar.",
        icon: "BarChart3",
        items: [
          "Uva processada por cliente, tipo e mês",
          "Rendimento médio por produtor com desvios destacados",
          "Receita realizada contra receita pendente por etapa",
          "Projeção de faturamento da guarda",
        ],
      },
      {
        name: "CRM multicanal",
        description:
          "WhatsApp, Instagram, Facebook e comentários numa fila só, com transferência entre atendentes e histórico preservado.",
        icon: "MessageSquare",
        items: [
          "Uma ou várias conexões de WhatsApp",
          "Direct do Instagram, Messenger e comentários",
          "Fila, transferência e histórico por cliente",
          "Transcrição de áudio por IA",
        ],
      },
      {
        name: "DaIA, funil e campanhas",
        description:
          "A parte que traz venda. A assistente de IA aborda no site e na loja, o funil organiza, e as campanhas trazem o cliente de volta.",
        icon: "Bot",
        items: [
          "DaIA no site institucional e na loja virtual",
          "Captura de lead automática por tempo de permanência",
          "Funil visual e ficha completa do cliente",
          "Campanhas por aniversário, rótulo e tempo sem comprar",
        ],
      },
    ],

    systemModules: [
      {
        icon: "MessageSquare",
        title: "Atendimento multicanal",
        description:
          "Uma caixa de entrada só, com fila e transferência entre atendentes. Vários números de WhatsApp e várias pessoas atendendo ao mesmo tempo, sem passar celular de mão em mão.",
        features: [
          "WhatsApp — uma ou várias conexões simultâneas",
          "Direct do Instagram e Messenger do Facebook",
          "Comentários do Instagram e do Facebook na mesma fila",
          "Transferência entre atendentes com histórico preservado",
          "Transcrição automática de áudio pela IA",
        ],
      },
      {
        icon: "Bot",
        title: "DaIA no site e na loja",
        description:
          "A assistente de IA que já roda em outros clientes nossos, ativada no site institucional e na loja. Aborda o visitante depois de alguns segundos, responde e captura o contato antes que ele vá embora.",
        features: [
          "Abordagem automática por tempo de permanência na página",
          "Captura de nome, contato e interesse direto para o funil",
          "Responde dúvidas sobre rótulos, visitação e Wine Garden",
          "Passa para atendente humano quando a conversa pede",
          "Mesma IA no site, na loja e no WhatsApp",
        ],
      },
      {
        icon: "Filter",
        title: "Funil e base de clientes",
        description:
          "Todo contato que entra por qualquer canal vira registro. Histórico de compras, visitas ao Wine Garden e conversas no mesmo lugar.",
        features: [
          "Funil visual por etapa, com arrastar e soltar",
          "Ficha do cliente com histórico completo de contato",
          "Origem de cada lead identificada e rastreada",
          "Segmentação por rótulo comprado, ticket e recorrência",
        ],
      },
      {
        icon: "Send",
        title: "Campanhas e reativação",
        description:
          "A base de clientes virando venda. Listas por critério e disparo programado — os aniversariantes do mês, quem comprou Fenice e sumiu, quem visitou e não voltou.",
        features: [
          "Listas dinâmicas por aniversário, rótulo e tempo sem comprar",
          "Cupom e link rastreado dentro da mensagem",
          "Agendamento e fila de envio com controle de ritmo",
          "Opt-out respeitado e registrado por contato",
        ],
      },
    ],

    systemPackages: [
      {
        key: "terceiros",
        name: "Gestão de terceiros",
        tagline: "Do caminhão na balança à cobrança da guarda",
        price: "R$ 5.000",
        installments: "2x de R$ 2.500",
        weeks: "4 semanas",
        icon: "grape",
        highlight: true,
        pain: "64,3% de tudo que entra na adega é uva de terceiro, e as três etapas de cobrança dependem de alguém lembrar. A guarda, que é o serviço mais longo, não tem onde ser registrada — e por isso não é cobrada.",
        screens: ["Painel da safra", "Safra e lotes", "Guarda", "Editor da política de guarda", "Mapa da adega", "Etiquetas e QR", "Ficha do produtor", "Demonstrativo do produtor"],
        deliverables: [
          "Recebimento pelo celular na balança, com foto da nota e etiqueta impressa na hora",
          "As três etapas de cobrança com tarifa configurável e estado visível por etapa",
          "Validação de rendimento no apontamento — o sistema barra o que a física não permite",
          "Política de guarda com faixas de tempo e valores definidos pela vinícola",
          "Alertas de virada de faixa em 90, 60 e 30 dias, para quem precisa agir",
          "Mapa da adega com ocupação e tempo parado por tanque",
          "Ficha do produtor e demonstrativo em PDF para enviar por WhatsApp",
        ],
      },
      {
        key: "crm",
        name: "CRM",
        tagline: "O cliente que compra uma vez passa a voltar",
        price: "R$ 5.000",
        installments: "2x de R$ 2.500",
        weeks: "3 semanas",
        icon: "messages",
        pain: "As mensagens chegam por WhatsApp, direct do Instagram e comentário no Facebook, cada uma num aparelho, e responde quem viu primeiro. Quem comprou não fica registrado em lugar nenhum — e por isso nunca é reconvidado.",
        screens: ["Atendimento multicanal", "DaIA", "Funil de vendas", "Campanhas"],
        deliverables: [
          "WhatsApp, Instagram e Facebook numa fila só, com transferência entre atendentes",
          "Histórico do cliente aberto ao lado da conversa: o que comprou e quanto gastou",
          "DaIA respondendo no site e na loja, e passando para uma pessoa quando não souber",
          "Funil de vendas do primeiro contato ao pedido fechado",
          "Base de clientes viva, alimentada por todos os canais",
          "Campanhas de aniversário e de reativação de quem sumiu",
        ],
      },
      {
        key: "wine-garden",
        name: "Wine Garden",
        tagline: "Quem visita no sábado vira cliente na segunda",
        price: "R$ 5.000",
        installments: "2x de R$ 2.500",
        weeks: "2 semanas",
        icon: "calendar",
        pain: "Todo sábado, das 14h30 às 20h, dezenas de pessoas passam pela vinícola, provam os rótulos e vão embora. Nenhum nome fica, nenhuma preferência é anotada, e a próxima campanha não sabe que elas existiram.",
        screens: ["Reservas e agenda", "A casa agora", "Pós-visita e conversão"],
        deliverables: [
          "Reserva pelo site, pela DaIA, pelo WhatsApp e pelo Instagram, com lugares controlados",
          "Confirmação na hora e lembrete automático na véspera",
          "Check-in no dia e visão de quem está na casa agora",
          "Registro do que cada mesa provou e do que levou",
          "Quem visitou entra na base do CRM com as preferências dela",
          "Relatório de conversão: quantos visitaram, quantos compraram e quanto renderam depois",
        ],
      },
    ],
    systemBase: {
      intro: "Estes cinco itens não são um quarto módulo e não têm preço à parte: vêm com qualquer módulo contratado, porque sem eles nenhum dos outros funciona direito.",
      items: [
        { title: "Perfis e permissões", description: "A vinícola cria quantos perfis quiser e marca, item a item, o que cada um vê e pode alterar — inclusive esconder valores de quem só lida com volume." },
        { title: "Central de alertas", description: "Cada perfil recebe só o que exige ação dele, no sistema e no celular. A diretoria não é avisada sobre tanque." },
        { title: "Histórico e auditoria", description: "Toda alteração guarda autor, data, valor anterior e valor novo. Se um número mudou, existe a quem perguntar." },
        { title: "Relatórios", description: "A operação em número e em cor, com filtro por safra, produtor, variedade e período, e exportação quando precisar." },
        { title: "Importação das planilhas", description: "A safra que já passou entra no sistema em minutos, com os problemas apontados um a um antes de importar." },
      ],
    },
    systemSprints: [
      {
        number: 1,
        weeks: "Terceiros · semanas 1 e 2",
        title: "Fundação e recebimento",
        deliverables: [
          "Ambiente no ar, perfis e permissões configuráveis",
          "Cadastro de produtores, varietais e tanques",
          "Tela de recebimento no celular, com foto e etiqueta QR",
          "Importação das duas planilhas atuais como base histórica",
        ],
        milestone: "A próxima carga que chegar já entra pelo sistema.",
      },
      {
        number: 2,
        weeks: "Terceiros · semanas 3 e 4",
        title: "Etapas, rendimento e guarda",
        deliverables: [
          "As três etapas de cobrança com valores configuráveis",
          "Cálculo de rendimento com alerta de desvio no apontamento",
          "Editor de política de guarda com faixas, valores e alertas",
          "Mapa da adega, ficha do produtor e demonstrativo em PDF",
        ],
        milestone: "A vinícola passa a ter uma política de guarda — e a cobrar por ela.",
      },
      {
        number: 3,
        weeks: "CRM · semanas 5 a 7",
        title: "Atendimento, DaIA e campanhas",
        deliverables: [
          "Atendimento multicanal com fila e transferência",
          "DaIA ativa no site institucional e na loja",
          "Funil de vendas e base de clientes unificada",
          "Campanhas de aniversário e de reativação",
        ],
        milestone: "As três caixas de mensagem viram uma fila só, e a base começa a crescer sozinha.",
      },
      {
        number: 4,
        weeks: "Wine Garden · semanas 8 e 9",
        title: "Reservas, visita e conversão",
        deliverables: [
          "Reservas pelo site, pela DaIA e pelo WhatsApp, com controle de lugares",
          "Confirmação, lembrete de véspera e check-in no dia",
          "Registro do que cada mesa provou e levou",
          "Relatório de conversão de visita em venda",
        ],
        milestone: "Quem visitou no sábado passa a existir na base na segunda-feira.",
      },
    ],

    investment: {
      setupFee: "R$ 5.000",
      setupLabel: "Desenvolvimento por módulo",
      setupIncludes: [
        "Perfis e permissões configuráveis pela própria vinícola",
        "Central de alertas no sistema e no celular",
        "Histórico e auditoria de toda alteração",
        "Relatórios com filtro e exportação",
        "Importação das planilhas atuais como base histórica",
        "Hospedagem, banco de dados e backup diário",
      ],
      setupItems: [
        { item: "Um módulo", value: "R$ 5.000" },
        { item: "Dois módulos", value: "R$ 10.000" },
        { item: "Os três módulos", value: "R$ 15.000" },
      ],
      setupNote:
        "Cada módulo é parcelado em 2x, acompanhando as entregas dele. Os três juntos ficam em 3x de R$ 5.000. A mensalidade é uma só, independente de quantos módulos a vinícola contratar.",
      totalMonthly: "R$ 350",
      totalLabel: "Manutenção, hospedagem e evolução — do sistema inteiro",
      packageIncludes: [
        "Hospedagem, banco de dados e backup diário",
        "Conexão de WhatsApp e infraestrutura da DaIA",
        "Suporte à Santa Augusta e aos usuários do sistema",
        "Correções e melhorias contínuas",
        "Novas telas e relatórios conforme a operação pedir",
        "Atualizações de segurança",
      ],
      exclusions: [
        "Disparo em massa de campanhas acima do volume de atendimento normal, que pode exigir a API oficial do WhatsApp com custo por conversa",
      ],
      paymentConditions: [
        "Cada módulo em 2x, acompanhando as entregas dele",
        "A mensalidade é única e não muda com o número de módulos",
        "Mensalidade a partir da entrega do primeiro módulo",
        "Sem contrato de fidelidade — a relação é mês a mês",
        "O código e os dados são da Santa Augusta",
      ],
      notes: [
        "Os módulos podem ser contratados juntos ou em sequência. Se a vinícola preferir começar pela dor maior, o de Gestão de terceiros funciona sozinho — os outros dois entram quando ela quiser.",
        "A integração com o CIA Sistemas entra assim que a API for liberada. Enquanto isso, o Genyus Wine opera com base própria e importação das planilhas — o sistema não fica parado esperando terceiros.",
        "Nesta fase a integração é somente leitura. Nenhum dado é escrito no ERP sem uma segunda conversa e um aceite explícito.",
      ],
    },

    differentials: [
      "O sistema não briga com o CIA Sistemas: lê dele e faz o que ele não faz",
      "Já temos rodando em outros clientes o CRM, a API do WhatsApp, a DaIA e a IA do Gemini",
      "Perfis e permissões configuráveis pela vinícola, sem depender da agência",
      "Sem contrato de fidelidade — mês a mês, renovado por resultado",
      "Oito semanas com entrega a cada quinzena, não um ano de promessa",
      "Mais de 16 anos de estrada, 449 clientes e sistemas em produção em 8 países",
    ],

    caveats: [
      {
        title: "A política de guarda ainda não existe — e isso é bom",
        description:
          "Hoje a cobrança da guarda é feita caso a caso. O sistema não vai apenas registrar uma regra: ele vai ajudar a Santa Augusta a criar a primeira. Por isso o editor de política vem configurável, e não com valores fixos que a gente inventou.",
      },
      {
        title: "A API do CIA Sistemas ainda depende de terceiro",
        description:
          "A liberação está em negociação com o fornecedor. O projeto foi desenhado para não depender disso: o Genyus Wine funciona com base própria desde a primeira semana, e a integração entra como ganho quando a API vier. Nesta fase, somente leitura.",
      },
      {
        title: "Campanha em massa tem limite técnico",
        description:
          "Atendimento e disparos pontuais rodam na conexão que já usamos. Volume alto de disparo ativo é o cenário em que a Meta bloqueia números, e aí o caminho seguro é a API oficial do WhatsApp, que tem custo por conversa. Preferimos avisar agora a explicar depois.",
      },
      {
        title: "Os números deste documento vêm das suas planilhas",
        description:
          "Tudo que está aqui foi apurado linha a linha nos arquivos que a Fran enviou. A planilha de controle de produção usa dados de exemplo em parte das linhas, então os totais dela servem para mostrar o método, não para fechar caixa.",
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
