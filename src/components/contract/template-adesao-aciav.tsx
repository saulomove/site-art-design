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
            <strong>7 (sete) dias úteis</strong>, contados a partir da assinatura
            deste contrato e do pagamento da primeira parcela, condicionada ao
            fornecimento tempestivo, pela CONTRATANTE, das informações
            necessárias ao cadastro.
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

      <Section title="CLÁUSULA 5ª - DA VIGÊNCIA">
        <p>
          Este contrato vigora por prazo indeterminado, a partir da data de
          assinatura, podendo ser rescindido por qualquer das partes, sem ônus,
          mediante comunicação por escrito com antecedência mínima de 30
          (trinta) dias.
        </p>
        <p className="mt-3">
          <strong>Não há fidelidade contratual.</strong> O valor da implantação,
          por se referir a serviço já executado, não é restituível em caso de
          rescisão.
        </p>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 6ª - DAS OBRIGAÇÕES DA CONTRATADA">
        <ul className="ml-6 list-disc space-y-1">
          <li>Executar a implantação no prazo e escopo previstos na Cláusula 3ª</li>
          <li>Manter a plataforma disponível, funcional e atualizada</li>
          <li>Prestar suporte técnico à CONTRATANTE, às empresas associadas e aos credenciados</li>
          <li>Manter a hospedagem, a infraestrutura e as rotinas de backup</li>
          <li>Manter o aplicativo publicado e atualizado nas lojas de aplicativos</li>
          <li>Garantir o isolamento dos dados da unidade da CONTRATANTE</li>
          <li>Comunicar previamente manutenções programadas que impliquem indisponibilidade</li>
        </ul>
      </Section>

      <Hr />

      <Section title="CLÁUSULA 7ª - DAS OBRIGAÇÕES DA CONTRATANTE">
        <ul className="ml-6 list-disc space-y-1">
          <li>Efetuar os pagamentos nas condições da Cláusula 4ª</li>
          <li>Fornecer tempestivamente as informações necessárias à implantação</li>
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
        <SubSection title="8.2. Titularidade dos dados">
          <p>
            Os dados operacionais inseridos pela CONTRATANTE e por seus usuários
            são de titularidade da CONTRATANTE. Em caso de rescisão, a
            CONTRATANTE poderá solicitar a extração dos seus dados em formato
            estruturado, no prazo de 30 (trinta) dias contados do encerramento.
          </p>
        </SubSection>
        <SubSection title="8.3. LGPD">
          <p>
            As partes obrigam-se a observar a Lei nº 13.709/2018 (LGPD). A
            CONTRATANTE atua como controladora dos dados dos seus beneficiários,
            e a CONTRATADA como operadora, tratando-os exclusivamente conforme as
            finalidades deste contrato e as instruções da CONTRATANTE.
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

      <Section title="CLÁUSULA 11ª - DA CONFIDENCIALIDADE">
        <p>
          Ambas as partes obrigam-se a manter sigilo sobre informações
          estratégicas, comerciais, financeiras, operacionais e técnicas a que
          tiverem acesso, durante a vigência deste contrato e pelo prazo de 2
          (dois) anos após o seu encerramento.
        </p>
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
