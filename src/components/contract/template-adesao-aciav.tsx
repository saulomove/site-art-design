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
  EditableField,
} from "./contract-shared";

/**
 * Contrato de licenciamento de uso e implantação da plataforma ACIAV Saúde
 * para uma nova unidade (tenant). Diferente dos contratos de serviço da
 * agência: aqui a plataforma permanece da CONTRATADA e a CONTRATANTE recebe
 * direito de uso — os dados operacionais é que são da CONTRATANTE.
 */
export function TemplateAdesaoAciav({
  data,
  update,
}: {
  data: ContractData;
  update: (field: keyof ContractData) => (value: string) => void;
}) {
  return (
    <>
      <ContractHeader
        title="CONTRATO DE LICENCIAMENTO DE USO E IMPLANTAÇÃO DA PLATAFORMA ACIAV SAÚDE"
        data={data}
      />

      <ContractParties data={data} update={update} />

      <Hr />

      <Section title="CLÁUSULA 1ª - DO OBJETO">
        <p>
          O presente contrato tem por objeto o{" "}
          <strong>licenciamento de uso da plataforma ACIAV Saúde</strong> e a
          respectiva <strong>implantação de unidade própria</strong> da
          CONTRATANTE, permitindo que esta ofereça às suas empresas associadas um
          programa de benefício de saúde por rede credenciada com descontos.
        </p>
        <p className="mt-3">
          A plataforma ACIAV Saúde é um sistema já desenvolvido, testado e em
          operação, de titularidade da CONTRATADA. Este contrato{" "}
          <strong>não tem por objeto o desenvolvimento de software novo</strong>,
          e sim a criação, configuração e liberação de uma unidade autônoma da
          CONTRATANTE dentro da plataforma existente.
        </p>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 2ª - DO ESCOPO DO LICENCIAMENTO">
        <p className="mb-4">
          A CONTRATANTE terá acesso integral aos módulos da plataforma, nas
          mesmas condições funcionais das demais unidades em operação:
        </p>

        <ServiceBlock
          number="2.1"
          title="Painel de Gestão da Unidade"
          description="Ambiente administrativo da associação."
          items={[
            "Cadastro e gestão das empresas associadas",
            "Credenciamento de clínicas, laboratórios e profissionais de saúde",
            "Gestão de beneficiários titulares e dependentes",
            "Acompanhamento de atendimentos e indicadores da unidade",
            "Configurações e políticas próprias da unidade",
          ]}
        />

        <ServiceBlock
          number="2.2"
          title="Painel da Empresa (RH)"
          description="Acesso individual para cada empresa associada."
          items={[
            "Cadastro de colaboradores e dependentes",
            "Ativação e inativação de beneficiários",
            "Relatórios de utilização da empresa",
          ]}
        />

        <ServiceBlock
          number="2.3"
          title="Painel do Credenciado"
          description="Acesso para a rede credenciada."
          items={[
            "Validação e confirmação de atendimentos",
            "Consulta de elegibilidade do beneficiário",
            "Histórico de atendimentos realizados",
          ]}
        />

        <ServiceBlock
          number="2.4"
          title="Aplicativo do Associado"
          description="Acesso do beneficiário final."
          items={[
            "Carteirinha digital com QR Code",
            "Consulta à rede credenciada por especialidade",
            "Aplicativo para Android e iOS, além de acesso pelo navegador",
          ]}
        />

        <p className="mt-4">
          <strong>2.5.</strong> As atualizações, correções e melhorias
          implementadas na plataforma passam a valer automaticamente para a
          unidade da CONTRATANTE, sem custo adicional, enquanto vigente este
          contrato.
        </p>

        <p className="mt-4">
          <strong>2.6.</strong> O licenciamento compreende os módulos, recursos e
          funcionalidades descritos nesta cláusula, bem como as funcionalidades
          padrão existentes na plataforma e disponibilizadas às unidades
          licenciadas.
        </p>
        <p className="mt-3">
          Solicitações de novas funcionalidades, customizações exclusivas,
          integrações específicas, alterações substanciais de regras de negócio
          ou desenvolvimentos que não façam parte das funcionalidades padrão
          existentes poderão ser objeto de{" "}
          <strong>análise técnica e proposta comercial específica</strong> da
          CONTRATADA, mediante prévia aprovação da CONTRATANTE.
        </p>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 3ª - DA IMPLANTAÇÃO">
        <SubSection title="3.1. Escopo da implantação">
          <p>Os serviços de implantação compreendem:</p>
          <ul className="mt-2 ml-6 list-disc space-y-1">
            <li>Criação e configuração da unidade da CONTRATANTE na plataforma</li>
            <li>Cadastro das empresas associadas indicadas pela CONTRATANTE</li>
            <li>
              Importação da rede credenciada já existente em outra unidade e
              sincronização com a base da CONTRATANTE
            </li>
            <li>Criação dos acessos de todos os perfis de usuário</li>
            <li>Treinamento das equipes da CONTRATANTE, das empresas associadas e dos credenciados</li>
          </ul>
        </SubSection>

        <SubSection title="3.2. Prazo de implantação">
          <p>
            A implantação será concluída no prazo de{" "}
            <strong>7 (sete) dias úteis</strong>, contados cumulativamente a
            partir:
          </p>
          <ul className="mt-2 ml-6 list-none space-y-1">
            <li>I &ndash; da assinatura deste contrato;</li>
            <li>II &ndash; do pagamento da primeira parcela da implantação; e</li>
            <li>
              III &ndash; do recebimento integral, pela CONTRATADA, das
              informações, documentos, arquivos, dados e acessos indispensáveis à
              implantação.
            </li>
          </ul>
          <p className="mt-3">
            A CONTRATADA deverá solicitar formalmente à CONTRATANTE, através dos
            canais oficiais de comunicação previstos neste contrato, os dados,
            documentos e informações necessários, indicando de forma clara o
            conteúdo solicitado e prazo razoável para sua disponibilização.
          </p>
          <p className="mt-3">
            Caso a CONTRATANTE deixe de disponibilizar integralmente alguma
            informação indispensável previamente solicitada pela CONTRATADA, o
            prazo de implantação ficará{" "}
            <strong>suspenso até seu efetivo recebimento</strong>, sendo
            automaticamente prorrogado pelo período correspondente ao atraso.
          </p>
          <p className="mt-3">
            Não serão considerados atraso da CONTRATADA os períodos decorrentes
            de pendências de informações, dados, aprovações, acessos ou demais
            providências de responsabilidade da CONTRATANTE.
          </p>
        </SubSection>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 4ª - DO INVESTIMENTO E DA FORMA DE PAGAMENTO">
        <SubSection title="4.1. Implantação">
          <HighlightBox>
            <p className="text-lg font-bold">
              Valor da implantação: R$ 3.900,00
            </p>
            <p className="mt-1 text-sm">(três mil e novecentos reais)</p>
          </HighlightBox>
          <p className="mt-3">
            O valor será pago em <strong>3 (três) parcelas iguais de R$ 1.300,00
            (mil e trezentos reais)</strong>, mediante boleto bancário, na
            seguinte forma:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1">
            <li><strong>1ª parcela:</strong> à vista, na assinatura deste contrato</li>
            <li><strong>2ª parcela:</strong> 28 (vinte e oito) dias após a assinatura</li>
            <li><strong>3ª parcela:</strong> 56 (cinquenta e seis) dias após a assinatura</li>
          </ul>
        </SubSection>

        <SubSection title="4.2. Mensalidade">
          <HighlightBox>
            <p className="text-lg font-bold">
              Mensalidade: {data.monthlyValue}
            </p>
            <p className="mt-1 text-sm">({data.monthlyValueFull})</p>
          </HighlightBox>
          <p className="mt-3">
            A mensalidade cobre suporte técnico, melhorias, atualizações,
            hospedagem, infraestrutura, manutenção do aplicativo nas lojas,
            backup e monitoramento.
          </p>
          <p className="mt-3">
            A <strong>primeira cobrança da mensalidade ocorrerá 30 (trinta) dias
            após a conclusão da implantação</strong>, e as subsequentes em
            periodicidade mensal, com vencimento todo dia{" "}
            <EditableField
              value={data.paymentDay}
              onChange={update("paymentDay")}
              placeholder="__"
              className="inline-block w-16"
            />{" "}
            de cada mês.
          </p>
        </SubSection>

        <SubSection title="4.3. Reajuste">
          <p>
            Os valores serão reajustados anualmente pela variação do IPCA, ou,
            na sua falta, por índice que venha a substituí-lo, sempre mediante
            comunicação prévia de 30 (trinta) dias.
          </p>
        </SubSection>

        <SubSection title="4.4. Inadimplemento">
          <p>
            O atraso no pagamento implicará multa de 2% (dois por cento) sobre o
            valor devido, acrescida de juros de mora de 1% (um por cento) ao mês.
            Persistindo a inadimplência por mais de 30 (trinta) dias, a
            CONTRATADA poderá suspender o acesso à plataforma, mediante aviso
            prévio de 5 (cinco) dias, preservados os dados da CONTRATANTE.
          </p>
        </SubSection>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 5ª - DA VIGÊNCIA E DA RESCISÃO IMOTIVADA">
        <SubSection title="5.1. Vigência e aviso prévio">
          <p>
            Este contrato vigora por prazo indeterminado, a partir da data de
            assinatura, podendo ser rescindido por qualquer das partes, sem ônus,
            mediante comunicação por escrito com antecedência mínima de{" "}
            <strong>30 (trinta) dias</strong>.
          </p>
          <p className="mt-3">
            <strong>Não há fidelidade contratual.</strong>
          </p>
        </SubSection>

        <SubSection title="5.2. Rescisão após a conclusão da implantação">
          <p>
            Concluída a implantação, o respectivo valor não é restituível, por se
            referir a serviço integralmente executado.
          </p>
        </SubSection>

        <SubSection title="5.3. Rescisão antes da conclusão da implantação">
          <p>
            Caso a CONTRATANTE solicite a rescisão do contrato antes da conclusão
            da implantação, serão devidos à CONTRATADA os valores correspondentes
            às <strong>atividades e serviços efetivamente executados</strong> até
            a data do encerramento.
          </p>
          <p className="mt-3">
            Eventual saldo pago antecipadamente correspondente a atividades de
            implantação ainda não executadas será restituído à CONTRATANTE,
            devidamente atualizado pelo IPCA, no prazo de até 10 (dez) dias úteis
            após a apuração dos serviços executados.
          </p>
          <p className="mt-3">
            Para fins de apuração poderão ser consideradas, entre outras
            atividades previstas na Cláusula 3ª, a criação e configuração da
            unidade, o cadastro ou a importação de empresas, a configuração ou
            importação da rede credenciada, a criação de usuários e acessos, as
            parametrizações, os treinamentos e demais procedimentos técnicos já
            realizados.
          </p>
          <p className="mt-3">
            Caso a implantação deixe de ser concluída por descumprimento
            injustificado e comprovadamente imputável exclusivamente à
            CONTRATADA, serão restituídos à CONTRATANTE os valores
            correspondentes às atividades não executadas, sem prejuízo da
            possibilidade de saneamento da pendência quando cabível.
          </p>
        </SubSection>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 6ª - DAS OBRIGAÇÕES DA CONTRATADA, DO SUPORTE TÉCNICO E DO SLA">
        <SubSection title="6.1. Obrigações gerais">
          <ul className="ml-6 list-disc space-y-1">
            <li>Executar a implantação no prazo e escopo previstos na Cláusula 3ª</li>
            <li>Manter a plataforma disponível, funcional e atualizada</li>
            <li>Prestar suporte técnico à CONTRATANTE, às empresas associadas e aos credenciados</li>
            <li>Manter a hospedagem, a infraestrutura e as rotinas de backup</li>
            <li>Manter o aplicativo publicado e atualizado nas lojas de aplicativos</li>
            <li>Garantir o isolamento dos dados da unidade da CONTRATANTE</li>
            <li>Comunicar previamente manutenções programadas que impliquem indisponibilidade</li>
          </ul>
        </SubSection>

        <SubSection title="6.2. Atendimento Técnico e Acordo de Nível de Serviço - SLA">
          <p>
            O suporte técnico regular será prestado através dos canais oficiais
            disponibilizados pela CONTRATADA, especialmente e-mail e WhatsApp de
            atendimento informados à CONTRATANTE.
          </p>
          <p className="mt-3">
            O horário regular de atendimento será de{" "}
            <strong>segunda-feira a sexta-feira, das 08h00 às 18h00</strong>,
            exceto feriados.
          </p>
          <p className="mt-3">
            Os chamados técnicos serão classificados conforme seu grau de
            impacto:
          </p>

          <div className="mt-3 space-y-3">
            <div>
              <p>
                <strong>I &ndash; CRÍTICO.</strong> Indisponibilidade total da
                plataforma ou falha que impeça de forma generalizada sua
                utilização pelos usuários.
              </p>
              <ul className="mt-1 ml-6 list-disc space-y-1">
                <li>Prazo máximo para primeiro atendimento: 2 (duas) horas</li>
                <li>
                  Prazo objetivo para solução ou apresentação de plano técnico de
                  contingência: até 8 (oito) horas
                </li>
              </ul>
            </div>

            <div>
              <p>
                <strong>II &ndash; ALTO.</strong> Falha em funcionalidade
                essencial, sem alternativa operacional razoável.
              </p>
              <ul className="mt-1 ml-6 list-disc space-y-1">
                <li>Prazo máximo para primeiro atendimento: 4 (quatro) horas úteis</li>
                <li>
                  Prazo objetivo para solução ou apresentação de plano de ação:
                  até 1 (um) dia útil
                </li>
              </ul>
            </div>

            <div>
              <p>
                <strong>III &ndash; MÉDIO.</strong> Falha parcial que não impeça a
                operação da plataforma e possua alternativa temporária de
                utilização.
              </p>
              <ul className="mt-1 ml-6 list-disc space-y-1">
                <li>Prazo máximo para primeiro atendimento: 1 (um) dia útil</li>
                <li>Prazo objetivo para solução: até 3 (três) dias úteis</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>IV &ndash; BAIXO.</strong> Erros visuais, dúvidas
                operacionais, ajustes sem impacto relevante ou demais situações
                que não comprometam a utilização da plataforma.
              </p>
              <ul className="mt-1 ml-6 list-disc space-y-1">
                <li>Prazo máximo para primeiro atendimento: até 2 (dois) dias úteis</li>
                <li>
                  Prazo objetivo para solução: até 5 (cinco) dias úteis ou
                  inclusão no planejamento técnico da plataforma
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-4">
            Os prazos previstos para solução poderão ser substituídos pela
            apresentação de plano de ação, contingência ou previsão técnica
            quando a resolução depender de desenvolvimento de maior complexidade,
            investigação técnica, provedores externos, serviços de infraestrutura,
            APIs, Apple, Google ou qualquer terceiro que não esteja sob controle
            direto da CONTRATADA.
          </p>
          <p className="mt-3">
            Incidentes classificados como <strong>CRÍTICOS</strong> poderão ser
            comunicados por canal emergencial disponibilizado pela CONTRATADA,
            inclusive fora do horário regular de atendimento.
          </p>
        </SubSection>

        <SubSection title="6.3. Manutenções programadas">
          <p>
            As manutenções programadas que possam ocasionar indisponibilidade
            relevante da plataforma serão comunicadas à CONTRATANTE com
            antecedência mínima de <strong>24 (vinte e quatro) horas</strong>,
            sempre que tecnicamente possível, contendo previsão de início e
            duração estimada da intervenção.
          </p>
          <p className="mt-3">
            Manutenções emergenciais necessárias à segurança, integridade,
            estabilidade, correção de vulnerabilidade ou prevenção de danos
            poderão ser realizadas sem observância do prazo de antecedência
            acima, devendo a CONTRATADA comunicar a CONTRATANTE tão logo seja
            razoavelmente possível.
          </p>
        </SubSection>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 7ª - DAS OBRIGAÇÕES DA CONTRATANTE">
        <ul className="ml-6 list-disc space-y-1">
          <li>Efetuar os pagamentos nas condições da Cláusula 4ª</li>
          <li>
            Fornecer tempestivamente as informações, dados, documentos, arquivos
            e acessos necessários à implantação e operação da plataforma, desde
            que previamente solicitados pela CONTRATADA através de canal oficial
            de comunicação, com indicação clara do conteúdo necessário e de prazo
            razoável para sua disponibilização
          </li>
          <li>Indicar responsável para comunicação com a CONTRATADA</li>
          <li>Utilizar a plataforma exclusivamente para a finalidade prevista neste contrato</li>
          <li>Responsabilizar-se pela veracidade dos dados que inserir na plataforma</li>
          <li>Zelar pela guarda das credenciais de acesso dos seus usuários</li>
          <li>
            Definir e negociar diretamente as condições comerciais com as
            empresas associadas e com a rede credenciada da sua unidade
          </li>
        </ul>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 8ª - DO ISOLAMENTO E DA PROTEÇÃO DE DADOS">
        <SubSection title="8.1. Isolamento entre unidades">
          <p>
            A plataforma opera em arquitetura multi-inquilino, na qual cada
            unidade possui identificador próprio. Os dados de empresas,
            beneficiários e credenciados da CONTRATANTE{" "}
            <strong>não são acessíveis por usuários de outras unidades</strong>,
            e vice-versa.
          </p>
        </SubSection>
        <SubSection title="8.2. Titularidade e exportação dos dados">
          <p>
            Os dados operacionais inseridos pela CONTRATANTE e por seus usuários
            são de <strong>titularidade da CONTRATANTE</strong>.
          </p>
          <p className="mt-3">
            A CONTRATANTE poderá solicitar, <strong>durante a vigência ou após o
            encerramento do contrato</strong>, a exportação dos dados de sua
            titularidade em formato estruturado e usualmente utilizado pela
            plataforma, sem cobrança adicional pela extração padrão.
          </p>
          <p className="mt-3">
            A gratuidade compreende exclusivamente a geração e disponibilização
            da exportação padrão existente na plataforma. Serviços adicionais de
            tratamento, saneamento, transformação, estruturação especial,
            conversão para formatos específicos, desenvolvimento de rotinas
            personalizadas, integração com outro sistema ou migração assistida
            poderão ser objeto de orçamento específico previamente aprovado pela
            CONTRATANTE.
          </p>
        </SubSection>

        <SubSection title="8.3. Dados após o encerramento do contrato">
          <p>
            Após o encerramento deste contrato, os dados da CONTRATANTE
            permanecerão disponíveis para solicitação de exportação pelo prazo de
            até <strong>30 (trinta) dias</strong>.
          </p>
          <p className="mt-3">
            Decorrido esse período, a CONTRATADA poderá promover a eliminação dos
            dados dos ambientes ativos da plataforma, ressalvadas:
          </p>
          <ul className="mt-2 ml-6 list-none space-y-1">
            <li>I &ndash; hipóteses de conservação exigidas ou autorizadas pela legislação;</li>
            <li>II &ndash; dados necessários ao exercício regular de direitos;</li>
            <li>III &ndash; cópias existentes em rotinas automáticas de backup.</li>
          </ul>
          <p className="mt-3">
            Dados existentes em backups serão eliminados de acordo com os ciclos
            normais e políticas técnicas de retenção da infraestrutura utilizada,
            ficando vedada sua utilização para qualquer finalidade incompatível
            com este contrato.
          </p>
        </SubSection>

        <SubSection title="8.4. LGPD e finalidade do tratamento">
          <p>
            As partes obrigam-se a observar a Lei nº 13.709/2018 (LGPD). A
            CONTRATANTE atua como <strong>controladora</strong> dos dados dos seus
            beneficiários, e a CONTRATADA como <strong>operadora</strong>,
            tratando-os exclusivamente conforme as finalidades deste contrato e as
            instruções da CONTRATANTE.
          </p>
          <p className="mt-3">
            A CONTRATADA realizará o tratamento dos dados pessoais exclusivamente
            na medida necessária à execução do presente contrato, incluindo o
            funcionamento da plataforma, hospedagem, suporte técnico, manutenção,
            segurança, backup, monitoramento, prevenção de fraudes, resolução de
            incidentes e cumprimento de obrigações legais ou regulatórias.
          </p>
          <p className="mt-3">
            É vedada sua utilização para finalidade incompatível com o objeto
            deste contrato, salvo mediante autorização da CONTRATANTE ou
            fundamento legal aplicável.
          </p>
        </SubSection>

        <SubSection title="8.5. Suboperadores e prestadores de tecnologia">
          <p>
            A CONTRATADA poderá utilizar terceiros ou suboperadores para
            atividades necessárias à prestação dos serviços, incluindo
            hospedagem, cloud computing, armazenamento, bancos de dados,
            monitoramento, comunicação, distribuição de aplicativos e demais
            serviços tecnológicos.
          </p>
          <p className="mt-3">
            A CONTRATADA deverá selecionar fornecedores adequados e exigir, quando
            aplicável, padrões de segurança e proteção de dados compatíveis com a
            legislação vigente e com as características do serviço contratado.
          </p>
          <p className="mt-3">
            A CONTRATADA permanecerá responsável pelas obrigações de proteção de
            dados diretamente relacionadas à contratação e utilização dos
            respectivos suboperadores, <strong>nos limites de sua atuação e
            responsabilidade</strong>.
          </p>
        </SubSection>

        <SubSection title="8.6. Comunicação de incidente de segurança">
          <p>
            A CONTRATADA comunicará à CONTRATANTE, no prazo máximo de{" "}
            <strong>24 (vinte e quatro) horas contado da ciência</strong> de
            incidente de segurança relevante que possa comprometer dados pessoais
            tratados no âmbito deste contrato.
          </p>
          <p className="mt-3">
            A comunicação deverá conter, conforme as informações disponíveis
            naquele momento:
          </p>
          <ul className="mt-2 ml-6 list-none space-y-1">
            <li>I &ndash; natureza do incidente;</li>
            <li>II &ndash; categorias de dados potencialmente afetadas;</li>
            <li>III &ndash; titulares potencialmente envolvidos, quando identificáveis;</li>
            <li>IV &ndash; medidas de contenção já adotadas;</li>
            <li>V &ndash; providências preventivas ou corretivas previstas.</li>
          </ul>
          <p className="mt-3">
            As informações iniciais poderão ser complementadas posteriormente
            conforme o avanço da investigação técnica.
          </p>
        </SubSection>

        <SubSection title="8.7. Titularidade dos dados e propriedade intelectual da plataforma">
          <p>
            A titularidade dos dados inseridos ou gerados pela CONTRATANTE, suas
            empresas associadas, credenciados e usuários permanece com a
            CONTRATANTE e <strong>não se confunde com a propriedade intelectual da
            plataforma</strong>.
          </p>
          <p className="mt-3">
            Permanecem de propriedade exclusiva da CONTRATADA a plataforma ACIAV
            Saúde, código-fonte, arquitetura, estrutura multi-inquilino, APIs,
            componentes, frameworks, interfaces, estrutura lógica do banco de
            dados, documentação técnica, marca, métodos, funcionalidades,
            ferramentas e demais ativos tecnológicos que compõem ou viabilizam o
            funcionamento da solução, nos termos da Cláusula 9ª.
          </p>
        </SubSection>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 9ª - DA PROPRIEDADE INTELECTUAL">
        <p>
          A plataforma ACIAV Saúde, incluindo código-fonte, arquitetura, layout,
          marca e documentação técnica, é de{" "}
          <strong>titularidade exclusiva da CONTRATADA</strong>. Este contrato
          confere à CONTRATANTE tão somente o{" "}
          <strong>direito de uso</strong> da plataforma, não exclusivo e
          intransferível, durante a vigência contratual.
        </p>
        <p className="mt-3">
          É vedado à CONTRATANTE ceder, sublicenciar, copiar, redistribuir ou
          promover engenharia reversa da plataforma, no todo ou em parte.
        </p>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 10ª - DA RESCISÃO">
        <p>
          Além da hipótese prevista na Cláusula 5ª, este contrato poderá ser
          rescindido de pleno direito, independentemente de notificação judicial,
          nas seguintes situações:
        </p>
        <ul className="mt-2 ml-6 list-disc space-y-1">
          <li>Descumprimento de qualquer cláusula contratual, não sanado em 15 (quinze) dias após notificação</li>
          <li>Inadimplência superior a 60 (sessenta) dias</li>
          <li>Utilização da plataforma para finalidade diversa da contratada</li>
          <li>Decretação de falência, recuperação judicial ou dissolução de qualquer das partes</li>
        </ul>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 11ª - DA CONFIDENCIALIDADE E DOS DADOS PESSOAIS">
        <SubSection title="11.1. Prazo geral de confidencialidade">
          <p>
            Ambas as partes obrigam-se a manter sigilo sobre informações
            estratégicas, comerciais, financeiras, operacionais e técnicas a que
            tiverem acesso, durante a vigência deste contrato e pelo prazo de{" "}
            <strong>2 (dois) anos</strong> após o seu encerramento.
          </p>
        </SubSection>

        <SubSection title="11.2. Dados pessoais e dados pessoais sensíveis">
          <p>
            Independentemente do prazo geral de confidencialidade estabelecido
            nesta cláusula, os dados pessoais e dados pessoais sensíveis tratados
            no âmbito da plataforma permanecerão sujeitos aos deveres de sigilo,
            segurança, proteção e tratamento estabelecidos pela legislação
            aplicável enquanto estiverem sob a guarda, controle ou
            responsabilidade de qualquer das partes.
          </p>
        </SubSection>

        <SubSection title="11.3. Compartilhamento de informações confidenciais">
          <p>
            As informações confidenciais não poderão ser divulgadas a terceiros
            sem prévia autorização da Parte proprietária da informação.
          </p>
          <p className="mt-3">
            Não será considerada divulgação indevida a disponibilização
            estritamente necessária:
          </p>
          <ul className="mt-2 ml-6 list-none space-y-1">
            <li>
              I &ndash; a empregados e colaboradores que necessitem da informação
              para execução de suas atividades;
            </li>
            <li>
              II &ndash; a prestadores, suboperadores, fornecedores de
              infraestrutura ou tecnologia necessários à execução deste contrato,
              desde que sujeitos a deveres adequados de confidencialidade e
              proteção de dados;
            </li>
            <li>
              III &ndash; em cumprimento a obrigação legal, ordem judicial ou
              determinação de autoridade competente.
            </li>
          </ul>
          <p className="mt-3">
            As pessoas que tiverem acesso às informações deverão utilizá-las
            exclusivamente para a finalidade relacionada à execução deste
            contrato.
          </p>
        </SubSection>

        <SubSection title="11.4. Responsabilidade por violação">
          <p>
            A Parte que comprovadamente violar as obrigações de confidencialidade
            estabelecidas neste contrato responderá pelos{" "}
            <strong>danos diretos comprovadamente decorrentes de sua conduta</strong>,
            observados o nexo causal, a extensão efetivamente demonstrada do dano
            e a legislação aplicável.
          </p>
        </SubSection>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 12ª - DAS DISPOSIÇÕES GERAIS">
        <SubSection title="12.1. Alterações Contratuais">
          <p>
            Qualquer alteração deste contrato deverá ser formalizada por escrito
            e assinada por ambas as partes, por meio de aditivo contratual.
          </p>
        </SubSection>
        <SubSection title="12.2. Comunicações Oficiais">
          <p>
            As comunicações entre as partes poderão ser realizadas por e-mail ou
            WhatsApp, tendo validade para os fins deste contrato.
          </p>
        </SubSection>
        <SubSection title="12.3. Independência das Cláusulas">
          <p>
            A eventual invalidade de qualquer cláusula não afetará a validade das
            demais.
          </p>
        </SubSection>
        <SubSection title="12.4. Foro">
          <p>
            Fica eleito o foro da Comarca de <strong>Caçador/SC</strong> para
            dirimir quaisquer questões oriundas deste contrato, com renúncia a
            qualquer outro, por mais privilegiado que seja.
          </p>
        </SubSection>
      </Section>

      <Hr />

      <ContractSignatures data={data} update={update} />
    </>
  );
}
