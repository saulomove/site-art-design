"use client";

import { useState, useRef, use, useEffect, useCallback } from "react";
import { notFound } from "next/navigation";
import { Printer, Save, Check, Loader2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Contract Data (can be moved to a shared data file later)          */
/* ------------------------------------------------------------------ */

interface ContractData {
  slug: string;
  contractNumber: string;
  startDate: string;
  clientName: string;
  clientDocument: string;
  clientAddress: string;
  clientCityState: string;
  clientCep: string;
  clientRepresentative: string;
  monthlyValue: string;
  monthlyValueFull: string;
  paymentDay: string;
  signatureCity: string;
  signatureDate: string;
}

const contracts: Record<string, ContractData> = {
  "dr-james-olaya": {
    slug: "dr-james-olaya",
    contractNumber: "049/2026",
    startDate: "15/04/2026",
    clientName: "James Olaya",
    clientDocument: "",
    clientAddress: "",
    clientCityState: "",
    clientCep: "",
    clientRepresentative: "James Olaya",
    monthlyValue: "R$ 2.250,00",
    monthlyValueFull: "dois mil duzentos e cinquenta reais",
    paymentDay: "",
    signatureCity: "Caçador/SC",
    signatureDate: "",
  },
};

/* ------------------------------------------------------------------ */
/*  Editable Field Component                                          */
/* ------------------------------------------------------------------ */

function EditableField({
  value,
  onChange,
  placeholder,
  className = "",
  multiline = false,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  className?: string;
  multiline?: boolean;
}) {
  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={2}
        className={`editable-field border-b-2 border-dashed border-brand-blue/40 bg-brand-blue/5 px-2 py-1 text-foreground outline-none transition-colors focus:border-brand-blue focus:bg-brand-blue/10 print:border-0 print:bg-transparent print:p-0 ${className}`}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`editable-field border-b-2 border-dashed border-brand-blue/40 bg-brand-blue/5 px-2 py-1 text-foreground outline-none transition-colors focus:border-brand-blue focus:bg-brand-blue/10 print:border-0 print:bg-transparent print:p-0 ${className}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Select Field for Payment Day                                      */
/* ------------------------------------------------------------------ */

function SelectField({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="editable-field border-b-2 border-dashed border-brand-blue/40 bg-brand-blue/5 px-2 py-1 text-foreground outline-none transition-colors focus:border-brand-blue focus:bg-brand-blue/10 print:border-0 print:bg-transparent print:p-0 print:appearance-none"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Contract Page                                                */
/* ------------------------------------------------------------------ */

interface ContractPageProps {
  params: Promise<{ slug: string }>;
}

export default function ContractPage({ params }: ContractPageProps) {
  const { slug } = use(params);
  const contractBase = contracts[slug];

  if (!contractBase) {
    notFound();
  }

  const [data, setData] = useState<ContractData>(contractBase);
  const [savedData, setSavedData] = useState<ContractData>(contractBase);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [isLoading, setIsLoading] = useState(true);
  const contractRef = useRef<HTMLDivElement>(null);

  // Carrega dados do banco ao montar
  useEffect(() => {
    fetch(`/api/contratos/${slug}`)
      .then((res) => {
        if (res.ok) return res.json();
        return null;
      })
      .then((dbData) => {
        if (dbData) {
          const loaded: ContractData = {
            slug: dbData.slug,
            contractNumber: dbData.contractNumber,
            startDate: dbData.startDate,
            clientName: dbData.clientName,
            clientDocument: dbData.clientDocument || "",
            clientAddress: dbData.clientAddress || "",
            clientCityState: dbData.clientCityState || "",
            clientCep: dbData.clientCep || "",
            clientRepresentative: dbData.clientRepresentative || "",
            monthlyValue: dbData.monthlyValue,
            monthlyValueFull: dbData.monthlyValueFull,
            paymentDay: dbData.paymentDay || "",
            signatureCity: dbData.signatureCity || "Caçador/SC",
            signatureDate: dbData.signatureDate || "",
          };
          setData(loaded);
          setSavedData(loaded);
        }
      })
      .finally(() => setIsLoading(false));
  }, [slug]);

  const hasChanges = JSON.stringify(data) !== JSON.stringify(savedData);

  const update = (field: keyof ContractData) => (value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const handleSave = useCallback(async () => {
    setSaveStatus("saving");
    try {
      const res = await fetch(`/api/contratos/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSavedData({ ...data });
        setSaveStatus("saved");
        setTimeout(() => setSaveStatus("idle"), 2000);
      }
    } catch {
      setSaveStatus("idle");
    }
  }, [data, slug]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Floating action bar — hidden on print */}
      <div className="fixed top-4 right-4 z-50 flex gap-3 print:hidden">
        {hasChanges && (
          <button
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:opacity-70"
          >
            {saveStatus === "saving" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            {saveStatus === "saving" ? "Salvando..." : "Salvar Alterações"}
          </button>
        )}
        {saveStatus === "saved" && !hasChanges && (
          <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2.5 text-sm font-semibold text-green-700">
            <Check className="h-4 w-4" />
            Salvo
          </span>
        )}
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
        >
          <Printer className="h-4 w-4" />
          Imprimir / PDF
        </button>
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/80">
          <div className="flex items-center gap-3 text-gray-600">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Carregando contrato...</span>
          </div>
        </div>
      )}

      {/* Contract body */}
      <div
        ref={contractRef}
        className="contract-body mx-auto max-w-[210mm] bg-white px-8 py-12 text-[15px] leading-relaxed text-gray-800 print:max-w-none print:px-0 print:py-0 sm:px-12 md:px-16"
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 print:text-xl">
            CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE GESTÃO DE ECOSSISTEMA DIGITAL
          </h1>
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <span>
              <strong>CONTRATO Nº:</strong> {data.contractNumber}
            </span>
            <span>
              <strong>DATA DE INÍCIO:</strong> {data.startDate}
            </span>
          </div>
        </div>

        {/* PARTES */}
        <Section title="PARTES">
          <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-5 print:border-gray-300 print:bg-white">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-blue print:text-gray-900">
              Contratada
            </h3>
            <InfoRow label="Razão Social" value="51.035.885 SAULO CRISTIANO MACHADO" />
            <InfoRow label="CNPJ" value="51.035.885/0001-03" />
            <InfoRow label="Endereço" value="Rua Estefano João Fabiano, 59, Bairro Municípios" />
            <InfoRow label="Cidade/Estado" value="Caçador/SC" />
            <InfoRow label="CEP" value="89505-020" />
            <InfoRow label="Representante Legal" value="Saulo Cristiano Machado" />
            <InfoRow label="CPF" value="009.737.119-06" />
            <InfoRow label="Nome Fantasia" value="ArtDesign" />
          </div>

          <div className="rounded-lg border-2 border-brand-blue/20 bg-brand-blue/5 p-5 print:border-gray-300 print:bg-white">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-blue print:text-gray-900">
              Contratante
              <span className="ml-2 text-xs font-normal text-brand-orange print:hidden">
                (campos editáveis)
              </span>
            </h3>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
                  Nome/Razão Social:
                </span>
                <EditableField
                  value={data.clientName}
                  onChange={update("clientName")}
                  placeholder="Nome completo ou razão social"
                  className="flex-1 min-w-[200px]"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
                  CNPJ/CPF:
                </span>
                <EditableField
                  value={data.clientDocument}
                  onChange={update("clientDocument")}
                  placeholder="000.000.000-00 ou 00.000.000/0000-00"
                  className="flex-1 min-w-[200px]"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
                  Endereço:
                </span>
                <EditableField
                  value={data.clientAddress}
                  onChange={update("clientAddress")}
                  placeholder="Rua, número, bairro"
                  className="flex-1 min-w-[200px]"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
                  Cidade/Estado:
                </span>
                <EditableField
                  value={data.clientCityState}
                  onChange={update("clientCityState")}
                  placeholder="Cidade/UF"
                  className="flex-1 min-w-[200px]"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
                  CEP:
                </span>
                <EditableField
                  value={data.clientCep}
                  onChange={update("clientCep")}
                  placeholder="00000-000"
                  className="flex-1 min-w-[200px]"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
                  Representante Legal:
                </span>
                <EditableField
                  value={data.clientRepresentative}
                  onChange={update("clientRepresentative")}
                  placeholder="Nome do representante"
                  className="flex-1 min-w-[200px]"
                />
              </div>
            </div>
          </div>
        </Section>

        <Hr />

        {/* CLÁUSULA 1 - DO OBJETO */}
        <Section title="CLÁUSULA 1ª - DO OBJETO">
          <p>
            O presente contrato tem por objeto a prestação de serviços de{" "}
            <strong>Gestão Completa de Ecossistema Digital</strong> do CONTRATANTE,
            abrangendo a estruturação, integração e operação das seguintes frentes do
            negócio:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-1">
            <li><strong>Jay Academy</strong> (Educação & Cursos de Micropigmentação)</li>
            <li><strong>Jayo Laser</strong> (Tecnologia & Equipamentos)</li>
            <li><strong>Clínica James Olaya</strong> (Atendimento Local & Google Meu Negócio)</li>
          </ul>
          <p className="mt-3">
            O objetivo é construir um sistema completo de construção de autoridade,
            retenção de audiência e conversão acelerada através de posicionamento
            estratégico, gestão de redes sociais, criação de conteúdo, tráfego pago e
            integração de todas as plataformas digitais.
          </p>
        </Section>

        <Hr />

        {/* CLÁUSULA 2 - DIAGNÓSTICO */}
        <Section title="CLÁUSULA 2ª - DO DIAGNÓSTICO DO ECOSSISTEMA ATUAL">
          <p>
            A CONTRATADA realizou auditoria detalhada sobre as frentes ativas do
            CONTRATANTE, identificando os seguintes pontos:
          </p>

          <SubSection title="2.1. Jay Academy (Educação & Cursos)">
            <DiagnosticBlock
              works={[
                "Autoridade técnica incontestável - Referência absoluta para o aluno",
                "Promessa clara de transformação que gera valor real para a carreira dos alunos",
              ]}
              issues={[
                "Dispersão de entrada: múltiplas páginas confundem o caminho da venda",
                "Falta de funil e upsell contínuo: não existe esteira estruturada de produtos para conduzir o aluno do início ao ticket alto avançado",
              ]}
            />
          </SubSection>

          <SubSection title="2.2. Jayo Laser (Tecnologia & Equipamento)">
            <DiagnosticBlock
              works={[
                "Produto de altíssima demanda que soluciona grande dor do mercado estético atual",
                "Posicionamento técnico premium como complemento perfeito para o hub do profissional",
              ]}
              issues={[
                "Limitações da estrutura digital atual: as plataformas atuais não suportam nem escalam a demanda gerada, com sérios desafios em captação de prospects",
              ]}
            />
          </SubSection>

          <SubSection title="2.3. Clínica James Olaya (Google Meu Negócio & Posicionamento Local)">
            <DiagnosticBlock
              works={[
                "Selo de existência digital: estrutura básica registrada para contato rápido de indicações",
              ]}
              issues={[
                "SEO Local inativo: inúmeras oportunidades de gerar pacientes quentes locais são perdidas diariamente",
                "Gestão inteligente de avaliações: não existe ação robusta pedindo reviews, essenciais para criar prova social maciça",
              ]}
            />
          </SubSection>
        </Section>

        <Hr />

        {/* CLÁUSULA 3 - ESCOPO */}
        <Section title="CLÁUSULA 3ª - DO ESCOPO DETALHADO DE SERVIÇOS">
          <p>
            A CONTRATADA executará os seguintes serviços mensais integrados para todo
            o ecossistema do CONTRATANTE:
          </p>

          <ServiceBlock
            number="3.1"
            title="Posicionamento & Estratégia de Marca"
            description="Estruturação da comunicação (autoridade + conversão) entre clínica, cursos, produtos e tecnologia."
            items={[
              "Análise e estruturação estratégica do ecossistema completo",
              "Organização da comunicação integrada entre as 3 frentes",
              "Definição de linha editorial alinhada aos objetivos comerciais",
              "Direcionamento de crescimento e expansão digital",
            ]}
          />

          <ServiceBlock
            number="3.2"
            title="Gestão de Redes Sociais"
            description="Gestão completa do Instagram e organização do feed focando em retenção de audiência."
            items={[
              "Planejamento mensal estratégico de conteúdo",
              "Publicação regular de posts alinhados à estratégia",
              "Acompanhamento analítico semanal de métricas",
              "Ajustes estratégicos baseados em performance",
            ]}
          />

          <ServiceBlock
            number="3.3"
            title="Planejamento de Conteúdo"
            description="Organização por objetivos reais (engajamento, autoridade e conversão)."
            items={[
              "Cronograma temático mensal estruturado",
              "Ideação baseada em análise de algoritmos e tendências",
              "Definição clara de pilares de conteúdo",
              "Distribuição estratégica de frequência de publicações",
            ]}
          />

          <ServiceBlock
            number="3.4"
            title="Criação de Conteúdo & Copywriting"
            description="Cópias focadas puramente em retenção psicológica e SEO nativo."
            items={[
              "Legendas estratégicas orientadas a conversão",
              "Copywriting persuasivo aplicado em todos os materiais",
              "Otimização de SEO avançado",
              "Roteirização direcional para gravações",
            ]}
          />

          <ServiceBlock
            number="3.5"
            title="Roteiros de Vídeos"
            description="Scripts estruturados que seguram o espectador desde os primeiros 2 segundos."
            items={[
              "Roteiros para Reels e Ads de alta performance",
              "Hooks de alto impacto para captura de atenção",
              "Estrutura narrativa baseada em gatilhos (dor → solução → CTA)",
              "Direcionamento técnico para gravações",
            ]}
          />

          <ServiceBlock
            number="3.6"
            title="Edição Profissional de Vídeos"
            description="Cortando e montando material para maximizar a retenção média online."
            items={[
              "Legendas hiper-dinâmicas sincronizadas",
              "Recorte estratégico focado em retenção",
              "Aplicação de efeitos visuais e ilustrações ativas",
              "Seleção e sincronização de trilhas virais",
            ]}
          />

          <ServiceBlock
            number="3.7"
            title="Tráfego Pago Completo (Meta Ads e Google Ads)"
            description="Distribuindo mensagens globalmente para atrair aluno, paciente e consumidor."
            items={[
              "Campanhas para Cursos, Clínica e Produtos",
              "Funis estruturados de topo ao fundo",
              "Campanhas de pesquisa na Rede Google",
              "Remarketing constante para base aquecida",
              "Relatórios mensais de performance",
            ]}
          />

          <HighlightBox>
            <strong>IMPORTANTE:</strong> O investimento direto em mídia paga (budget
            para Meta Ads e Google Ads) é de responsabilidade exclusiva do CONTRATANTE
            e não está incluído no valor deste contrato.
          </HighlightBox>

          <ServiceBlock
            number="3.8"
            title="Google Meu Negócio & SEO Local"
            description="Explodindo as vendas locais no radar dos clientes mais próximos."
            items={[
              "Otimização completa da Ficha Google Meu Negócio",
              "Atualização diária de informações e posts",
              "Estratégia de geração massiva de reviews (avaliações)",
              "Estratégia focada em atração de pacientes locais",
            ]}
          />

          <ServiceBlock
            number="3.9"
            title="Gestão do Ecossistema Digital"
            description="Integração viva da Loja, Links, Cursos e Plataformas em um funil unificado."
            items={[
              "Gestão de Linktree e ferramentas de bio",
              "Tradução e integração inter-plataforma",
              "CRO (Conversion Rate Optimization)",
              "Análise de coesão analítica global do ecossistema",
            ]}
          />

          <ServiceBlock
            number="3.10"
            title="Design de Materiais & Branding"
            description="Elevar o nível institucional estético online de todo curso e serviço."
            items={[
              "PDFs Premium para Alunos",
              "Apresentações Institucionais de Alta Qualidade",
              "Folders VIP e materiais gráficos",
            ]}
          />
        </Section>

        <Hr />

        {/* CLÁUSULA 4 - SOB DEMANDA */}
        <Section title="CLÁUSULA 4ª - SERVIÇOS SOB DEMANDA (NÃO INCLUSOS NO PACOTE)">
          <p>
            Os seguintes serviços, quando solicitados, serão orçados e cobrados
            separadamente:
          </p>

          <SubSection title="4.1. Desenvolvimento Web & Landing Pages">
            <p className="mb-2 text-sm text-gray-600">
              Engenharia tecnológica para construção de sites e páginas de alta
              performance.
            </p>
            <ul className="ml-6 list-disc space-y-1 text-sm">
              <li>Sites institucionais ou e-commerce de alta performance</li>
              <li>Landing pages isoladas para captação</li>
              <li>Páginas para eventos exclusivos</li>
            </ul>
            <p className="mt-2 text-sm italic text-gray-500">
              Observação: Serviços web serão adotados avulsamente para projetos
              complexos extras mediante orçamento específico.
            </p>
          </SubSection>

          <SubSection title="4.2. Deslocamentos e Viagens">
            <HighlightBox>
              <strong>IMPORTANTE:</strong> Todas as despesas de viagem (passagens,
              hospedagem, alimentação, deslocamento) para produção audiovisual externa,
              cobertura de eventos presenciais ou sessões de foto/vídeo em locações
              fora da unidade do CONTRATANTE serão de responsabilidade exclusiva do
              CONTRATANTE e cobradas separadamente mediante orçamento prévio.
            </HighlightBox>
          </SubSection>
        </Section>

        <Hr />

        {/* CLÁUSULA 5 - INVESTIMENTO */}
        <Section title="CLÁUSULA 5ª - DO INVESTIMENTO E FORMA DE PAGAMENTO">
          <SubSection title="5.1. Valor do Pacote Completo">
            <p>
              O CONTRATANTE pagará à CONTRATADA o valor mensal de{" "}
              <strong>{data.monthlyValue} ({data.monthlyValueFull})</strong>,
              referente ao pacote completo de gestão de ecossistema digital descrito na
              Cláusula 3ª.
            </p>
          </SubSection>

          <SubSection title="5.2. Forma de Pagamento">
            <ul className="ml-6 list-disc space-y-1">
              <li>Pagamento mensal antecipado</li>
              <li>Emissão de Nota Fiscal de Serviços pela CONTRATADA</li>
              <li>
                Vencimento: dia{" "}
                <SelectField
                  value={data.paymentDay}
                  onChange={update("paymentDay")}
                  placeholder="Escolher dia"
                  options={[
                    { label: "10", value: "10" },
                    { label: "15", value: "15" },
                    { label: "20", value: "20" },
                  ]}
                />{" "}
                de cada mês
              </li>
              <li>Forma de pagamento: Boleto bancário ou PIX</li>
            </ul>
          </SubSection>

          <SubSection title="5.3. Investimentos de Responsabilidade do CONTRATANTE (NÃO INCLUSOS)">
            <p className="mb-2 font-semibold">
              O CONTRATANTE é exclusivamente responsável pelos seguintes investimentos:
            </p>
            <ol className="ml-6 list-[lower-alpha] space-y-2 text-sm">
              <li>
                <strong>Budget de tráfego pago:</strong> investimento direto nas
                plataformas Meta Ads e Google Ads para veiculação de campanhas (valor a
                ser definido conforme estratégia, sugerido mínimo de R$ 3.000/mês)
              </li>
              <li>
                <strong>Despesas de viagem:</strong> passagens, hospedagem, alimentação
                e deslocamento para produções externas
              </li>
              <li>
                <strong>Serviços sob demanda:</strong> desenvolvimento web, landing
                pages e projetos especiais conforme Cláusula 4ª
              </li>
            </ol>
          </SubSection>

          <SubSection title="5.4. Atraso no Pagamento">
            <p className="text-sm">
              Em caso de atraso superior a 10 (dez) dias corridos, a CONTRATADA poderá
              suspender temporariamente a prestação dos serviços até a regularização do
              pagamento, sem prejuízo da cobrança de multa de 2% (dois por cento) sobre
              o valor devido, acrescido de juros de 1% (um por cento) ao mês pro rata
              die.
            </p>
          </SubSection>
        </Section>

        <Hr />

        {/* CLÁUSULA 6 - VIGÊNCIA */}
        <Section title="CLÁUSULA 6ª - DA VIGÊNCIA E RENOVAÇÃO">
          <SubSection title="6.1. Data de Início">
            <p>
              O presente contrato entra em vigor no dia{" "}
              <strong>15 de abril de 2026</strong> e terá vigência <strong>mensal</strong>,
              renovando-se automaticamente a cada mês, salvo manifestação contrária de
              qualquer das partes.
            </p>
          </SubSection>
          <SubSection title="6.2. Período Mínimo">
            <p>Não há período mínimo de permanência ou fidelidade contratual.</p>
          </SubSection>
        </Section>

        <Hr />

        {/* CLÁUSULA 7 - RESCISÃO */}
        <Section title="CLÁUSULA 7ª - DA RESCISÃO">
          <SubSection title="7.1. Rescisão por Qualquer das Partes">
            <p>
              Qualquer das partes poderá rescindir o presente contrato a qualquer
              momento, mediante comunicação formal por escrito (e-mail ou WhatsApp) com
              antecedência mínima de <strong>30 (trinta) dias</strong>.
            </p>
          </SubSection>
          <SubSection title="7.2. Finalização do Mês em Curso">
            <p>
              Caso a rescisão ocorra durante um mês já pago, a CONTRATADA obriga-se a
              concluir todos os serviços referentes ao período já quitado.
            </p>
          </SubSection>
          <SubSection title="7.3. Ausência de Multa Rescisória">
            <p>
              Não haverá cobrança de multa rescisória por nenhuma das partes, desde que
              respeitado o prazo de antecedência de 30 dias.
            </p>
          </SubSection>
        </Section>

        <Hr />

        {/* CLÁUSULA 8 - OBRIGAÇÕES CONTRATADA */}
        <Section title="CLÁUSULA 8ª - DAS OBRIGAÇÕES DA CONTRATADA">
          <p>São obrigações da CONTRATADA:</p>
          <ol className="mt-3 ml-6 list-[lower-alpha] space-y-2 text-sm">
            <li>
              Executar os serviços descritos na Cláusula 3ª com qualidade,
              profissionalismo e dentro dos prazos acordados;
            </li>
            <li>
              Manter comunicação ativa e transparente com o CONTRATANTE, reportando
              resultados mensalmente;
            </li>
            <li>
              Utilizar exclusivamente conteúdos, imagens e informações fornecidas ou
              autorizadas pelo CONTRATANTE;
            </li>
            <li>
              Respeitar diretrizes de marca, tom de voz e posicionamento definidos em
              conjunto;
            </li>
            <li>
              Manter sigilo sobre informações estratégicas, comerciais e pessoais do
              CONTRATANTE;
            </li>
            <li>
              Emitir Nota Fiscal de Serviços referente aos valores mensais;
            </li>
            <li>
              Fornecer relatórios mensais de performance das ações realizadas;
            </li>
            <li>
              Solicitar aprovações quando necessário antes de publicações ou ações
              críticas.
            </li>
          </ol>
        </Section>

        <Hr />

        {/* CLÁUSULA 9 - OBRIGAÇÕES CONTRATANTE */}
        <Section title="CLÁUSULA 9ª - DAS OBRIGAÇÕES DO CONTRATANTE">
          <p>São obrigações do CONTRATANTE:</p>
          <ol className="mt-3 ml-6 list-[lower-alpha] space-y-2 text-sm">
            <li>Efetuar o pagamento mensal na data de vencimento acordada;</li>
            <li>
              <strong>Fornecer todos os acessos necessários</strong> às plataformas
              digitais para execução dos serviços até a data de início do contrato
              (15/04/2026), incluindo:
              <ul className="mt-1 ml-4 list-disc space-y-1">
                <li>Instagram (acesso completo como administrador)</li>
                <li>Facebook Business Manager (acesso completo)</li>
                <li>Google Ads e Google Analytics (acesso administrativo)</li>
                <li>Google Meu Negócio (acesso de gerenciamento)</li>
                <li>Hotmart ou plataforma de cursos (acesso administrativo)</li>
                <li>Linktree ou ferramenta de bio (acesso completo)</li>
                <li>Plataformas de email marketing (se existentes)</li>
                <li>Qualquer outra plataforma relevante ao ecossistema</li>
              </ul>
            </li>
            <li>
              Fornecer materiais, informações, briefings e aprovações dentro de prazos
              razoáveis;
            </li>
            <li>
              Revisar e aprovar conteúdos estratégicos antes da publicação, quando
              aplicável;
            </li>
            <li>
              <strong>
                Responsabilizar-se integralmente pelos custos de investimento direto em
                mídia paga
              </strong>{" "}
              (Meta Ads, Google Ads);
            </li>
            <li>
              <strong>
                Responsabilizar-se por todas as despesas de viagem
              </strong>{" "}
              para produções externas, coberturas de eventos ou sessões fora da unidade;
            </li>
            <li>
              Comunicar formalmente qualquer alteração de escopo ou necessidade
              adicional;
            </li>
            <li>
              Manter canais de comunicação ativos para alinhamentos estratégicos;
            </li>
            <li>
              Garantir que todos os acessos fornecidos permaneçam ativos durante a
              vigência do contrato.
            </li>
          </ol>
        </Section>

        <Hr />

        {/* CLÁUSULA 10 - CONDIÇÃO PARA INÍCIO */}
        <Section title="CLÁUSULA 10ª - CONDIÇÃO PARA INÍCIO DOS TRABALHOS">
          <HighlightBox>
            A CONTRATADA iniciará a execução dos serviços no dia 15/04/2026 SOMENTE
            se o CONTRATANTE tiver fornecido todos os acessos listados na Cláusula 9ª,
            alínea &quot;b&quot;.
          </HighlightBox>
          <p className="mt-3 text-sm">
            Caso os acessos não sejam fornecidos até esta data, o início dos trabalhos
            será adiado proporcionalmente, sem prejuízo do pagamento mensal acordado,
            que permanecerá devido a partir da data de assinatura deste contrato.
          </p>
        </Section>

        <Hr />

        {/* CLÁUSULA 11 - PROPRIEDADE INTELECTUAL */}
        <Section title="CLÁUSULA 11ª - DA PROPRIEDADE INTELECTUAL E TITULARIDADE DOS ATIVOS">
          <SubSection title="11.1. Propriedade dos Ativos Digitais">
            <p>
              Todos os ativos criados durante a vigência deste contrato pertencem ao
              CONTRATANTE, incluindo, mas não se limitando a:
            </p>
            <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
              <li>Contas de redes sociais (Instagram, Facebook, LinkedIn, etc.)</li>
              <li>Contas de anúncios (Meta Business Manager, Google Ads)</li>
              <li>Listas de leads e base de clientes</li>
              <li>Domínios e hospedagens</li>
              <li>Contas em plataformas de terceiros (Hotmart, ActiveCampaign, etc.)</li>
              <li>Conteúdos criados (textos, vídeos, imagens, roteiros)</li>
            </ul>
          </SubSection>
          <SubSection title="11.2. Gestão vs. Propriedade">
            <p>
              A CONTRATADA atua como <strong>gestora operacional</strong> dos ativos,
              mas o CONTRATANTE é o <strong>proprietário titular</strong> de todos eles.
            </p>
          </SubSection>
          <SubSection title="11.3. Transferência em Caso de Rescisão">
            <p>Em caso de rescisão contratual, a CONTRATADA compromete-se a:</p>
            <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
              <li>
                Transferir todos os acessos administrativos ao CONTRATANTE em até 5
                (cinco) dias úteis;
              </li>
              <li>
                Fornecer arquivos editáveis de materiais criados (PSD, AI, MP4 source,
                etc.) mediante solicitação;
              </li>
              <li>
                Não reter ou bloquear qualquer ativo digital do CONTRATANTE.
              </li>
            </ul>
          </SubSection>
          <SubSection title="11.4. Portfólio e Divulgação">
            <p>
              A CONTRATADA poderá utilizar o trabalho realizado para fins de portfólio
              e divulgação institucional, salvo solicitação expressa em contrário pelo
              CONTRATANTE.
            </p>
          </SubSection>
        </Section>

        <Hr />

        {/* CLÁUSULA 12 - CONFIDENCIALIDADE */}
        <Section title="CLÁUSULA 12ª - DA CONFIDENCIALIDADE">
          <p>
            Ambas as partes comprometem-se a manter sigilo absoluto sobre informações
            estratégicas, comerciais, financeiras e operacionais da outra parte, durante
            a vigência deste contrato e após sua rescisão.
          </p>
        </Section>

        <Hr />

        {/* CLÁUSULA 13 - DISPOSIÇÕES GERAIS */}
        <Section title="CLÁUSULA 13ª - DAS DISPOSIÇÕES GERAIS">
          <SubSection title="13.1. Alterações Contratuais">
            <p>
              Qualquer alteração neste contrato deverá ser formalizada por escrito e
              assinada por ambas as partes através de aditivo contratual.
            </p>
          </SubSection>
          <SubSection title="13.2. Comunicações Oficiais">
            <p>
              Todas as comunicações oficiais entre as partes poderão ser realizadas via
              e-mail ou WhatsApp, tendo validade jurídica.
            </p>
          </SubSection>
          <SubSection title="13.3. Independência das Cláusulas">
            <p>
              A invalidade de qualquer cláusula deste contrato não afetará a validade
              das demais.
            </p>
          </SubSection>
          <SubSection title="13.4. Foro">
            <p>
              Fica eleito o foro da Comarca de{" "}
              <strong>Caçador/SC</strong> para dirimir quaisquer questões oriundas deste
              contrato, renunciando as partes a qualquer outro, por mais privilegiado
              que seja.
            </p>
          </SubSection>
        </Section>

        <Hr />

        {/* ASSINATURAS */}
        <Section title="ASSINATURAS">
          <p className="mb-8 text-sm text-gray-600">
            E por estarem assim justas e contratadas, as partes assinam o presente
            instrumento em 2 (duas) vias de igual teor e forma, na presença de 2 (duas)
            testemunhas.
          </p>

          <p className="mb-10 text-center font-semibold">
            {data.signatureCity},{" "}
            <EditableField
              value={data.signatureDate}
              onChange={update("signatureDate")}
              placeholder="____ de abril de 2026"
              className="inline-block w-52 text-center"
            />
          </p>

          {/* Signature blocks */}
          <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2 print:grid-cols-2">
            {/* CONTRATADA */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-px w-64 bg-gray-400" />
              <p className="text-sm font-bold">51.035.885 SAULO CRISTIANO MACHADO</p>
              <p className="text-xs text-gray-500">CNPJ: 51.035.885/0001-03</p>
              <p className="text-xs text-gray-500">
                Saulo Cristiano Machado (Representante Legal)
              </p>
              <p className="text-xs text-gray-500">CPF: 009.737.119-06</p>
            </div>

            {/* CONTRATANTE */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-px w-64 bg-gray-400" />
              <p className="text-sm font-bold uppercase">{data.clientName || "JAMES OLAYA"}</p>
              <p className="text-xs text-gray-500">
                {data.clientDocument
                  ? `CNPJ/CPF: ${data.clientDocument}`
                  : "CNPJ/CPF: A PREENCHER"}
              </p>
            </div>
          </div>

          {/* Witnesses */}
          <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2 print:grid-cols-2">
            <div className="text-center">
              <div className="mx-auto mb-4 h-px w-64 bg-gray-400" />
              <p className="text-sm text-gray-600">Testemunha 1</p>
              <p className="text-xs text-gray-500">Nome:</p>
              <p className="text-xs text-gray-500">CPF:</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-px w-64 bg-gray-400" />
              <p className="text-sm text-gray-600">Testemunha 2</p>
              <p className="text-xs text-gray-500">Nome:</p>
              <p className="text-xs text-gray-500">CPF:</p>
            </div>
          </div>
        </Section>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .contract-body {
            font-size: 12px;
            line-height: 1.6;
            padding: 10mm 15mm;
            max-width: 100%;
          }

          .editable-field {
            border: none !important;
            background: transparent !important;
            padding: 0 !important;
          }

          select.editable-field {
            -webkit-appearance: none;
            appearance: none;
          }

          h2 {
            page-break-after: avoid;
          }

          .signature-block {
            page-break-inside: avoid;
          }
        }

        @page {
          size: A4;
          margin: 15mm;
        }
      `}</style>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Helper Components                                                 */
/* ------------------------------------------------------------------ */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-bold text-gray-900 print:text-base">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 mb-4">
      <h3 className="mb-2 text-sm font-bold text-gray-800">{title}</h3>
      {children}
    </div>
  );
}

function Hr() {
  return <hr className="my-8 border-gray-200 print:border-gray-300" />;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 py-0.5 text-sm">
      <span className="w-36 shrink-0 font-semibold text-gray-600">{label}:</span>
      <span>{value}</span>
    </div>
  );
}

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-brand-orange bg-brand-orange/5 p-4 text-sm print:border-gray-400 print:bg-gray-50">
      {children}
    </div>
  );
}

function DiagnosticBlock({
  works,
  issues,
}: {
  works: string[];
  issues: string[];
}) {
  return (
    <div className="space-y-3 text-sm">
      <div>
        <p className="mb-1 font-semibold text-green-700 print:text-gray-800">
          O que já funciona:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          {works.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-1 font-semibold text-red-600 print:text-gray-800">
          Gargalos identificados:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          {issues.map((issue, i) => (
            <li key={i}>{issue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServiceBlock({
  number,
  title,
  description,
  items,
}: {
  number: string;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="mt-5 mb-4">
      <h3 className="mb-1 text-sm font-bold text-gray-800">
        {number}. {title}
      </h3>
      <p className="mb-2 text-sm text-gray-600">{description}</p>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
        Entregas:
      </p>
      <ul className="ml-6 list-disc space-y-1 text-sm">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
