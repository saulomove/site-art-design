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
  SelectField,
} from "./contract-shared";

export function TemplateEcommerce({
  data,
  update,
}: {
  data: ContractData;
  update: (field: keyof ContractData) => (value: string) => void;
}) {
  return (
    <>
      <ContractHeader
        title="CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE GESTÃO COMERCIAL E-COMMERCE"
        data={data}
      />

      <ContractParties data={data} update={update} />

      <Hr />

      {/* CLÁUSULA 1 - DO OBJETO */}
      <Section title="CLÁUSULA 1ª - DO OBJETO">
        <p>
          O presente contrato tem por objeto a prestação de serviços de{" "}
          <strong>Gestão Comercial Completa de E-commerce e Marketplaces</strong>,
          compreendendo atendimento pré-venda, gestão de pedidos, estoque, pós-venda,
          relacionamento com clientes e operação em múltiplas plataformas de venda
          online, conforme descrito no escopo detalhado da Cláusula 2ª.
        </p>
      </Section>

      <Hr />

      {/* CLÁUSULA 2 - ESCOPO */}
      <Section title="CLÁUSULA 2ª - DO ESCOPO DETALHADO DE SERVIÇOS">
        <p>
          A CONTRATADA obriga-se a prestar os seguintes serviços ao CONTRATANTE:
        </p>

        <ServiceBlock
          number="2.1"
          title="Atendimento Pré-Venda"
          items={[
            "Atendimento via WhatsApp Business aos leads e interessados",
            "Atendimento via chat do site oficial (Jayoloja)",
            "Atendimento via Direct (DM) do Instagram",
            "Esclarecimento de dúvidas sobre produtos, preços, prazos e condições",
            "Envio de catálogos, informações técnicas e especificações",
            "Qualificação de leads e direcionamento para conversão",
          ]}
        />

        <ServiceBlock
          number="2.2"
          title="Processamento de Pedidos"
          items={[
            "Recebimento e validação de pedidos em todas as plataformas",
            "Conferência de dados cadastrais e endereço de entrega",
            "Acompanhamento de status de pagamento",
            "Emissão de confirmação de compra ao cliente",
            "Repasse organizado de pedidos para setor logístico/expedição",
          ]}
        />

        <ServiceBlock
          number="2.3"
          title="Gestão de Estoque nos Marketplaces"
          items={[
            "Atualização de disponibilidade de produtos em tempo real",
            "Sincronização de estoque entre plataformas",
            "Alerta de produtos com estoque baixo ou zerado",
            "Desativação temporária de anúncios de produtos esgotados",
            "Reativação de produtos reabastecidos",
          ]}
        />

        <ServiceBlock
          number="2.4"
          title="Atendimento Pós-Venda"
          items={[
            "Suporte a dúvidas sobre produtos já adquiridos",
            "Gestão de solicitações de troca, devolução e reembolso",
            "Acompanhamento de reclamações e resolução de problemas",
            "Monitoramento de avaliações e feedbacks",
            "Acionamento de SAC quando necessário",
          ]}
        />

        <SubSection title="2.5. Cadastro de Produtos em Marketplaces">
          <p className="mb-2 text-sm">
            Cadastro completo de novos produtos nas plataformas ativas:
          </p>
          <ul className="ml-6 list-disc space-y-1 text-sm mb-3">
            <li><strong>Site Oficial</strong> (Jayoloja)</li>
            <li><strong>Mercado Livre</strong></li>
            <li><strong>Amazon</strong></li>
            <li><strong>TikTok Shop</strong></li>
            <li>Outras plataformas que vierem a ser incluídas</li>
          </ul>
          <ul className="ml-6 list-disc space-y-1 text-sm">
            <li>Elaboração de títulos otimizados para SEO interno das plataformas</li>
            <li>Redação de descrições persuasivas e completas</li>
            <li>Organização de categorias e subcategorias</li>
            <li>Upload de imagens e vídeos dos produtos</li>
            <li>Configuração de variações (tamanho, cor, modelo, etc.)</li>
          </ul>
        </SubSection>

        <ServiceBlock
          number="2.6"
          title="Precificação e Promoções"
          items={[
            "Monitoramento de precificação competitiva",
            "Sugestão de ajustes estratégicos de preços",
            "Criação e gestão de cupons de desconto",
            "Configuração de promoções sazonais e campanhas específicas",
            "Análise de margem e lucratividade por produto",
          ]}
        />

        <ServiceBlock
          number="2.7"
          title="Relacionamento com Cliente (CRM)"
          items={[
            "Registro e organização de histórico de interações",
            "Segmentação de clientes (novos, recorrentes, inativos)",
            "Disparo de comunicações personalizadas",
            "Recuperação de carrinhos abandonados",
            "Criação de réguas de relacionamento pós-compra",
            "Fidelização e recompra",
          ]}
        />

        <ServiceBlock
          number="2.8"
          title="Gestão de Reputação e Avaliações"
          items={[
            "Monitoramento de avaliações em todos os marketplaces",
            "Resposta profissional a comentários positivos e negativos",
            "Solicitação ativa de avaliações para clientes satisfeitos",
            "Gestão de reclamações em plataformas como Reclame Aqui (se aplicável)",
          ]}
        />

        <ServiceBlock
          number="2.9"
          title="Relatórios e Indicadores"
          items={[
            "Relatório mensal de vendas por plataforma",
            "Indicadores de conversão e ticket médio",
            "Produtos mais vendidos e menos vendidos",
            "Taxa de devolução e principais motivos",
            "Análise de performance comercial",
          ]}
        />
      </Section>

      <Hr />

      {/* CLÁUSULA 3 - HORÁRIO */}
      <Section title="CLÁUSULA 3ª - HORÁRIO DE ATENDIMENTO">
        <SubSection title="3.1. Horário Comercial Garantido">
          <p>Segunda a sexta-feira, das <strong>08h00 às 18h00</strong>.</p>
        </SubSection>
        <SubSection title="3.2. Plantão de Monitoramento (Finais de Semana e Feriados)">
          <p>
            A CONTRATADA manterá monitoramento ativo em finais de semana e feriados,
            respondendo demandas urgentes conforme disponibilidade,{" "}
            <strong>sem obrigatoriedade de horário fixo</strong>.
          </p>
          <p className="mt-2 text-sm italic text-gray-500">
            Observação: O objetivo é manter presença ativa para não perder vendas, mas
            sem SLA (Service Level Agreement) rígido fora do horário comercial.
          </p>
        </SubSection>
      </Section>

      <Hr />

      {/* CLÁUSULA 4 - PLATAFORMAS */}
      <Section title="CLÁUSULA 4ª - PLATAFORMAS ATUALMENTE GERENCIADAS">
        <ul className="ml-6 list-disc space-y-1">
          <li>Site Oficial: <strong>Jayoloja</strong></li>
          <li><strong>Mercado Livre</strong></li>
          <li><strong>Amazon</strong></li>
          <li><strong>TikTok Shop</strong></li>
        </ul>
        <SubSection title="4.1. Inclusão de Novas Plataformas">
          <p>
            Caso o CONTRATANTE deseje incluir novos marketplaces (Shopee, Magalu, etc.),
            a CONTRATADA fará a integração e gestão sem custo adicional, desde que
            previamente alinhado.
          </p>
        </SubSection>
      </Section>

      <Hr />

      {/* CLÁUSULA 5 - INVESTIMENTO */}
      <Section title="CLÁUSULA 5ª - DO INVESTIMENTO E FORMA DE PAGAMENTO">
        <SubSection title="5.1. Valor Mensal Fixo">
          <p>
            O CONTRATANTE pagará à CONTRATADA o valor mensal fixo de{" "}
            <strong>{data.monthlyValue} ({data.monthlyValueFull})</strong>,
            referente à operação base de gestão comercial.
          </p>
        </SubSection>

        <SubSection title="5.2. Comissionamento sobre Faturamento">
          <p>
            Além do valor fixo, o CONTRATANTE pagará à CONTRATADA{" "}
            <strong>5% (cinco por cento)</strong> sobre o{" "}
            <strong>faturamento bruto mensal</strong> gerado em todas as plataformas
            gerenciadas.
          </p>
          <div className="mt-3 rounded-lg bg-gray-50 p-4 text-sm print:bg-white print:border print:border-gray-200">
            <p className="font-semibold mb-2">Exemplo de cálculo:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Faturamento mensal bruto: R$ 30.000,00</li>
              <li>Comissão de 5%: R$ 1.500,00</li>
              <li>Valor fixo: R$ 1.500,00</li>
              <li><strong>Total a pagar no mês: R$ 3.000,00</strong></li>
            </ul>
          </div>
        </SubSection>

        <SubSection title="5.3. Apuração do Faturamento">
          <p className="text-sm">
            O faturamento será apurado mensalmente com base nos relatórios extraídos
            diretamente das plataformas (Mercado Livre, Amazon, TikTok Shop, Jayoloja),
            considerando:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
            <li><strong>Vendas aprovadas e pagas</strong> (excluindo cancelamentos e devoluções)</li>
            <li>Período de apuração: do dia 1º ao último dia de cada mês</li>
          </ul>
        </SubSection>

        <SubSection title="5.4. Forma de Pagamento">
          <ul className="ml-6 list-disc space-y-1">
            <li>Pagamento mensal antecipado do <strong>valor fixo (R$ 1.500,00)</strong></li>
            <li>
              Pagamento do <strong>comissionamento (5%)</strong> até o dia{" "}
              <strong>10 do mês subsequente</strong>, após fechamento e apuração do
              faturamento
            </li>
            <li>Emissão de Nota Fiscal de Serviços pela CONTRATADA</li>
            <li>
              Vencimento do fixo: dia{" "}
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

        <SubSection title="5.5. Atraso no Pagamento">
          <p className="text-sm">
            Em caso de atraso superior a 10 (dez) dias corridos, a CONTRATADA poderá
            suspender temporariamente a prestação dos serviços até a regularização do
            pagamento, sem prejuízo da cobrança de multa de 2% (dois por cento) sobre
            o valor devido, acrescido de juros de 1% (um por cento) ao mês pro rata die.
          </p>
        </SubSection>
      </Section>

      <Hr />

      {/* CLÁUSULA 6 - VIGÊNCIA */}
      <Section title="CLÁUSULA 6ª - DA VIGÊNCIA E RENOVAÇÃO">
        <SubSection title="6.1. Vigência">
          <p>
            O presente contrato entra em vigor na data de sua assinatura e terá vigência{" "}
            <strong>mensal</strong>, renovando-se automaticamente a cada mês, salvo
            manifestação contrária de qualquer das partes.
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
            Executar os serviços descritos na Cláusula 2ª com qualidade, agilidade e
            profissionalismo;
          </li>
          <li>
            Manter atendimento cordial, profissional e alinhado ao tom de voz da marca;
          </li>
          <li>
            Responder clientes dentro de prazos razoáveis (máximo 24h em dias úteis no
            horário comercial);
          </li>
          <li>
            Manter organização e registro de todas as interações no CRM;
          </li>
          <li>
            Reportar mensalmente os resultados e indicadores ao CONTRATANTE;
          </li>
          <li>
            Manter sigilo sobre informações comerciais, de clientes e estratégicas;
          </li>
          <li>
            Solicitar aprovação do CONTRATANTE para decisões que fujam do padrão
            operacional;
          </li>
          <li>
            Emitir Nota Fiscal de Serviços referente aos valores mensais.
          </li>
        </ol>
      </Section>

      <Hr />

      {/* CLÁUSULA 9 - OBRIGAÇÕES CONTRATANTE */}
      <Section title="CLÁUSULA 9ª - DAS OBRIGAÇÕES DO CONTRATANTE">
        <p>São obrigações do CONTRATANTE:</p>
        <ol className="mt-3 ml-6 list-[lower-alpha] space-y-2 text-sm">
          <li>Efetuar os pagamentos (fixo + comissionamento) nas datas acordadas;</li>
          <li>
            Fornecer acessos administrativos às plataformas gerenciadas (logins, APIs,
            etc.);
          </li>
          <li>Fornecer informações técnicas completas sobre os produtos;</li>
          <li>
            Fornecer imagens, vídeos e materiais de qualidade para cadastros;
          </li>
          <li>
            Manter estoque organizado e informar atualizações de disponibilidade;
          </li>
          <li>
            Garantir processo logístico ágil para expedição de pedidos;
          </li>
          <li>
            Definir políticas claras de troca, devolução e garantia;
          </li>
          <li>
            Responsabilizar-se por questões fiscais, tributárias e logísticas (frete,
            embalagem, etc.);
          </li>
          <li>
            Comunicar formalmente qualquer alteração de política comercial ou produtos.
          </li>
        </ol>
      </Section>

      <Hr />

      {/* CLÁUSULA 10 - PROPRIEDADE */}
      <Section title="CLÁUSULA 10ª - DA PROPRIEDADE E TITULARIDADE DOS ATIVOS">
        <SubSection title="10.1. Propriedade das Contas">
          <p>
            Todas as contas de marketplaces, site, CRM, listas de clientes e ativos
            digitais pertencem exclusivamente ao CONTRATANTE.
          </p>
        </SubSection>
        <SubSection title="10.2. Gestão Operacional">
          <p>
            A CONTRATADA atua como <strong>gestora operacional</strong> dos canais de
            venda, mas não detém propriedade sobre os ativos, dados de clientes ou
            plataformas.
          </p>
        </SubSection>
        <SubSection title="10.3. Transferência em Caso de Rescisão">
          <p>Em caso de rescisão contratual, a CONTRATADA compromete-se a:</p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
            <li>
              Transferir todos os acessos administrativos ao CONTRATANTE em até 5
              (cinco) dias úteis;
            </li>
            <li>
              Fornecer relatórios finais e histórico de atendimento organizado;
            </li>
            <li>
              Não reter ou bloquear qualquer informação ou acesso do CONTRATANTE.
            </li>
          </ul>
        </SubSection>
      </Section>

      <Hr />

      {/* CLÁUSULA 11 - CONFIDENCIALIDADE */}
      <Section title="CLÁUSULA 11ª - DA CONFIDENCIALIDADE">
        <p>
          Ambas as partes comprometem-se a manter sigilo absoluto sobre informações
          estratégicas, comerciais, financeiras, dados de clientes e operacionais da
          outra parte, durante a vigência deste contrato e após sua rescisão.
        </p>
      </Section>

      <Hr />

      {/* CLÁUSULA 12 - DISPOSIÇÕES GERAIS */}
      <Section title="CLÁUSULA 12ª - DAS DISPOSIÇÕES GERAIS">
        <SubSection title="12.1. Alterações Contratuais">
          <p>
            Qualquer alteração neste contrato deverá ser formalizada por escrito e
            assinada por ambas as partes através de aditivo contratual.
          </p>
        </SubSection>
        <SubSection title="12.2. Comunicações Oficiais">
          <p>
            Todas as comunicações oficiais entre as partes poderão ser realizadas via
            e-mail ou WhatsApp, tendo validade jurídica.
          </p>
        </SubSection>
        <SubSection title="12.3. Independência das Cláusulas">
          <p>
            A invalidade de qualquer cláusula deste contrato não afetará a validade
            das demais.
          </p>
        </SubSection>
        <SubSection title="12.4. Foro">
          <p>
            Fica eleito o foro da Comarca de{" "}
            <strong>Caçador/SC</strong> para dirimir quaisquer questões oriundas deste
            contrato, renunciando as partes a qualquer outro, por mais privilegiado
            que seja.
          </p>
        </SubSection>
      </Section>

      <Hr />

      <ContractSignatures data={data} update={update} />
    </>
  );
}
