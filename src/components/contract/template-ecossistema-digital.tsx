"use client";

import {
  ContractData,
  ContractHeader,
  ContractParties,
  ContractSignatures,
  Section,
  SubSection,
  Hr,
  HighlightBox,
  ServiceBlock,
  DiagnosticBlock,
  SelectField,
} from "./contract-shared";

export function TemplateEcossistemaDigital({
  data,
  update,
}: {
  data: ContractData;
  update: (field: keyof ContractData) => (value: string) => void;
}) {
  return (
    <>
      <ContractHeader
        title="CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE GESTÃO DE ECOSSISTEMA DIGITAL"
        data={data}
      />

      <ContractParties data={data} update={update} />

      <Hr />

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

      <Section title="CLÁUSULA 4ª - SERVIÇOS SOB DEMANDA (NÃO INCLUSOS NO PACOTE)">
        <p>
          Os seguintes serviços, quando solicitados, serão orçados e cobrados
          separadamente:
        </p>

        <SubSection title="4.1. Desenvolvimento Web & Landing Pages">
          <p className="mb-2 text-sm text-gray-600">
            Engenharia tecnológica para construção de sites e páginas de alta performance.
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
            o valor devido, acrescido de juros de 1% (um por cento) ao mês pro rata die.
          </p>
        </SubSection>
      </Section>

      <Hr />

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
          <p>Não há período m��nimo de permanência ou fidelidade contratual.</p>
        </SubSection>
      </Section>

      <Hr />

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

      <Section title="CLÁUSULA 8ª - DAS OBRIGAÇÕES DA CONTRATADA">
        <p>São obrigações da CONTRATADA:</p>
        <ol className="mt-3 ml-6 list-[lower-alpha] space-y-2 text-sm">
          <li>Executar os serviços descritos na Cláusula 3ª com qualidade, profissionalismo e dentro dos prazos acordados;</li>
          <li>Manter comunicação ativa e transparente com o CONTRATANTE, reportando resultados mensalmente;</li>
          <li>Utilizar exclusivamente conteúdos, imagens e informações fornecidas ou autorizadas pelo CONTRATANTE;</li>
          <li>Respeitar diretrizes de marca, tom de voz e posicionamento definidos em conjunto;</li>
          <li>Manter sigilo sobre informações estratégicas, comerciais e pessoais do CONTRATANTE;</li>
          <li>Emitir Nota Fiscal de Serviços referente aos valores mensais;</li>
          <li>Fornecer relatórios mensais de performance das ações realizadas;</li>
          <li>Solicitar aprovações quando necessário antes de publicações ou ações críticas.</li>
        </ol>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 9ª - DAS OBRIGAÇÕES DO CONTRATANTE">
        <p>São obrigações do CONTRATANTE:</p>
        <ol className="mt-3 ml-6 list-[lower-alpha] space-y-2 text-sm">
          <li>Efetuar o pagamento mensal na data de vencimento acordada;</li>
          <li>
            <strong>Fornecer todos os acessos necessários</strong> às plataformas digitais para execução dos serviços até a data de início do contrato (15/04/2026), incluindo:
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
          <li>Fornecer materiais, informações, briefings e aprovações dentro de prazos razoáveis;</li>
          <li>Revisar e aprovar conteúdos estratégicos antes da publicação, quando aplicável;</li>
          <li><strong>Responsabilizar-se integralmente pelos custos de investimento direto em mídia paga</strong> (Meta Ads, Google Ads);</li>
          <li><strong>Responsabilizar-se por todas as despesas de viagem</strong> para produções externas, coberturas de eventos ou sessões fora da unidade;</li>
          <li>Comunicar formalmente qualquer alteração de escopo ou necessidade adicional;</li>
          <li>Manter canais de comunicação ativos para alinhamentos estratégicos;</li>
          <li>Garantir que todos os acessos fornecidos permaneçam ativos durante a vigência do contrato.</li>
        </ol>
      </Section>

      <Hr />

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

      <Section title="CLÁUSULA 11ª - DA PROPRIEDADE INTELECTUAL E TITULARIDADE DOS ATIVOS">
        <SubSection title="11.1. Propriedade dos Ativos Digitais">
          <p>Todos os ativos criados durante a vigência deste contrato pertencem ao CONTRATANTE, incluindo, mas não se limitando a:</p>
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
          <p>A CONTRATADA atua como <strong>gestora operacional</strong> dos ativos, mas o CONTRATANTE é o <strong>proprietário titular</strong> de todos eles.</p>
        </SubSection>
        <SubSection title="11.3. Transferência em Caso de Rescisão">
          <p>Em caso de rescisão contratual, a CONTRATADA compromete-se a:</p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
            <li>Transferir todos os acessos administrativos ao CONTRATANTE em até 5 (cinco) dias úteis;</li>
            <li>Fornecer arquivos editáveis de materiais criados (PSD, AI, MP4 source, etc.) mediante solicitação;</li>
            <li>Não reter ou bloquear qualquer ativo digital do CONTRATANTE.</li>
          </ul>
        </SubSection>
        <SubSection title="11.4. Portfólio e Divulgação">
          <p>A CONTRATADA poderá utilizar o trabalho realizado para fins de portfólio e divulgação institucional, salvo solicitação expressa em contrário pelo CONTRATANTE.</p>
        </SubSection>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 12ª - DA CONFIDENCIALIDADE">
        <p>Ambas as partes comprometem-se a manter sigilo absoluto sobre informações estratégicas, comerciais, financeiras e operacionais da outra parte, durante a vigência deste contrato e após sua rescisão.</p>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 13ª - DAS DISPOSIÇÕES GERAIS">
        <SubSection title="13.1. Alterações Contratuais">
          <p>Qualquer alteração neste contrato deverá ser formalizada por escrito e assinada por ambas as partes através de aditivo contratual.</p>
        </SubSection>
        <SubSection title="13.2. Comunicações Oficiais">
          <p>Todas as comunicações oficiais entre as partes poderão ser realizadas via e-mail ou WhatsApp, tendo validade jurídica.</p>
        </SubSection>
        <SubSection title="13.3. Independência das Cláusulas">
          <p>A invalidade de qualquer cláusula deste contrato não afetará a validade das demais.</p>
        </SubSection>
        <SubSection title="13.4. Foro">
          <p>Fica eleito o foro da Comarca de <strong>Caçador/SC</strong> para dirimir quaisquer questões oriundas deste contrato, renunciando as partes a qualquer outro, por mais privilegiado que seja.</p>
        </SubSection>
      </Section>

      <Hr />

      <ContractSignatures data={data} update={update} />
    </>
  );
}
