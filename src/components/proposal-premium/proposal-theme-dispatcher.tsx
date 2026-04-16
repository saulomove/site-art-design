import { ProposalHero } from "@/components/proposal/proposal-hero";
import { ProposalAbout } from "@/components/proposal/proposal-about";
import { ProposalAnalysisSection } from "@/components/proposal/proposal-analysis";
import { ProposalEcosystemAnalysis } from "@/components/proposal/proposal-ecosystem-analysis";
import { ProposalBeforeAfter } from "@/components/proposal/proposal-before-after";
import { ProposalProfileAnalysis } from "@/components/proposal/proposal-profile-analysis";
import { ProposalHighlights } from "@/components/proposal/proposal-highlights";
import { ProposalScope } from "@/components/proposal/proposal-scope";
import { ProposalPhases } from "@/components/proposal/proposal-phases";
import { ProposalInvestmentSection } from "@/components/proposal/proposal-investment";
import { ProposalDifferentials } from "@/components/proposal/proposal-differentials";
import { ProposalOptionalServices } from "@/components/proposal/proposal-optional-services";
import { ProposalContentCalendar } from "@/components/proposal/proposal-content-calendar";
import { ProposalCTA } from "@/components/proposal/proposal-cta";
import { ProposalSimulation } from "@/components/proposal/proposal-simulation";
import { ProposalEcommerceAnalysis } from "@/components/proposal/proposal-ecommerce-analysis";
import { ProposalFAQ } from "@/components/proposal/proposal-faq";
import { ProposalBonus } from "@/components/proposal/proposal-bonus";
import { ProposalCommissionModel } from "@/components/proposal/proposal-commission-model";
import { ProposalCRMDiagnosis } from "@/components/proposal/proposal-crm-diagnosis";
import { ProposalCRMFeatures } from "@/components/proposal/proposal-crm-features";
import { ProposalCRMShowcase } from "@/components/proposal/proposal-crm-showcase";
import { ProposalCRMKanban } from "@/components/proposal/proposal-crm-kanban";

// Premium imports
import { ProposalPremiumHero } from "@/components/proposal-premium/proposal-hero";
import { ProposalPremiumAnalysis } from "@/components/proposal-premium/proposal-analysis";
import { ProposalPremiumEcosystem } from "@/components/proposal-premium/proposal-ecosystem";
import { ProposalPremiumScope } from "@/components/proposal-premium/proposal-scope";
import { ProposalPremiumInvestment } from "@/components/proposal-premium/proposal-investment";
import { ProposalPremiumCta } from "@/components/proposal-premium/proposal-cta";

// Legal imports
import { ProposalLegalHero } from "@/components/proposal-legal/proposal-hero";
import { ProposalLegalAnalysis } from "@/components/proposal-legal/proposal-analysis";
import { ProposalLegalScope } from "@/components/proposal-legal/proposal-scope";
import { ProposalLegalInvestment } from "@/components/proposal-legal/proposal-investment";
import { ProposalLegalCta } from "@/components/proposal-legal/proposal-cta";

import type { Proposal } from "@/lib/proposals-data";

export function ProposalThemeDispatcher({ proposal }: { proposal: Proposal }) {
  const isLegal = proposal.theme === "legal";
  const isPremium = proposal.theme === "premium";

  if (isLegal) {
    return (
      <>
        <ProposalLegalHero proposal={proposal} />
        {proposal.analysis && (
          <ProposalLegalAnalysis
            analysis={proposal.analysis}
            clientName={proposal.clientName}
          />
        )}
        <ProposalLegalScope services={proposal.services} />
        <ProposalLegalInvestment
          investment={proposal.investment}
          clientName={proposal.clientName}
        />
        <ProposalLegalCta proposal={proposal} />
      </>
    );
  }

  if (isPremium) {
    return (
      <>
        {/* Premium Hero */}
        <ProposalPremiumHero proposal={proposal} />

        {/* 2. Sobre a ArtDesign (We keep standard for now unless requested) */}
        <ProposalAbout />

        {/* Premium Core Strategy */}
        {!proposal.profileAnalyses && proposal.analysis && (
          <ProposalPremiumAnalysis
            analysis={proposal.analysis}
            clientName={proposal.clientName}
          />
        )}

        {/* Premium Ecosystem Strategy */}
        {proposal.ecosystemAnalyses && proposal.ecosystemAnalyses.length > 0 && (
          <ProposalPremiumEcosystem
            analyses={proposal.ecosystemAnalyses}
            clientName={proposal.clientName}
          />
        )}

        {/* Premium Scope */}
        <ProposalPremiumScope services={proposal.services} />

        {/* Fallbacks for features that don't have premium variants yet */}
        {proposal.optionalServices && proposal.optionalServices.length > 0 && (
          <ProposalOptionalServices services={proposal.optionalServices} />
        )}
        
        {proposal.faq && proposal.faq.length > 0 && (
          <ProposalFAQ faq={proposal.faq} />
        )}

        {/* Premium Investment */}
        <ProposalPremiumInvestment
          investment={proposal.investment}
          clientName={proposal.clientName}
        />

        {/* Premium CTA */}
        <ProposalPremiumCta proposal={proposal} />
      </>
    );
  }

  const isCRM = proposal.proposalType === "crm";

  // STANDARD THEME RENDER (Original logic)
  return (
    <>
      {/* 1. Hero */}
      <ProposalHero proposal={proposal} />

      {/* 2. Sobre a ArtDesign */}
      <ProposalAbout />

      {isCRM ? (
        <>
          {/* CRM: Diagnóstico */}
          <ProposalCRMDiagnosis />

          {/* CRM: Destaques */}
          {proposal.highlights && proposal.highlights.length > 0 && (
            <ProposalHighlights
              highlights={proposal.highlights}
              clientName={proposal.clientName}
            />
          )}

          {/* CRM: Módulos da Solução */}
          <ProposalCRMFeatures />

          {/* CRM: Showcase 24/7 */}
          <ProposalCRMShowcase />

          {/* CRM: Funil Kanban */}
          <ProposalCRMKanban />

          {/* CRM: Investimento */}
          <ProposalInvestmentSection
            investment={proposal.investment}
            clientName={proposal.clientName}
          />

          {/* CRM: Diferenciais */}
          {proposal.differentials && (
            <ProposalDifferentials differentials={proposal.differentials} />
          )}
        </>
      ) : (
        <>
          {/* Social Media: Antes & Depois */}
      {proposal.beforeAfter && (
        <ProposalBeforeAfter
          beforeAfter={proposal.beforeAfter}
          clientName={proposal.clientName}
        />
      )}

      {/* Social Media: Simulação (O que acontece em 30 dias) */}
      {proposal.simulation && (
        <ProposalSimulation simulation={proposal.simulation} />
      )}

      {/* Social Media: Análise de Perfis (multi-perfil) */}
      {proposal.profileAnalyses && proposal.profileAnalyses.length > 0 && (
        <ProposalProfileAnalysis
          profileAnalyses={proposal.profileAnalyses}
          clientName={proposal.clientName}
        />
      )}

      {/* Social Media: Análise Estratégica (perfil único) */}
      {!proposal.profileAnalyses && proposal.analysis && (
        <ProposalAnalysisSection
          analysis={proposal.analysis}
          clientName={proposal.clientName}
        />
      )}

      {/* Social Media: Análise do Ecossistema */}
      {proposal.ecosystemAnalyses && proposal.ecosystemAnalyses.length > 0 && (
        <ProposalEcosystemAnalysis
          ecosystemAnalyses={proposal.ecosystemAnalyses}
          clientName={proposal.clientName}
        />
      )}

      {/* Social Media: Análise de E-commerce */}
      {proposal.ecommerceAnalysis && (
        <ProposalEcommerceAnalysis ecommerceAnalysis={proposal.ecommerceAnalysis} />
      )}

      {/* Social Media: Destaques */}
      {proposal.highlights && proposal.highlights.length > 0 && (
        <ProposalHighlights
          highlights={proposal.highlights}
          clientName={proposal.clientName}
        />
      )}

      {/* Social Media: Escopo dos Serviços */}
      <ProposalScope services={proposal.services} />

      {/* Social Media: Fases do Projeto */}
      {proposal.phases && proposal.phases.length > 0 && (
        <ProposalPhases phases={proposal.phases} />
      )}

      {/* Social Media: Calendário de Conteúdo */}
      {proposal.contentCalendar && proposal.contentCalendar.length > 0 && (
        <ProposalContentCalendar contentCalendar={proposal.contentCalendar} />
      )}

      {/* Social Media: Parceria Compartilhada (NEW) */}
      {proposal.commissionModel && (
        <ProposalCommissionModel commissionModel={proposal.commissionModel} />
      )}

      {/* Social Media: Investimento */}
      <ProposalInvestmentSection
        investment={proposal.investment}
        clientName={proposal.clientName}
      />

      {/* Social Media: Bônus Exclusivos */}
      {proposal.bonus && (
        <ProposalBonus bonus={proposal.bonus} />
      )}

      {/* Social Media: Diferenciais */}
      {proposal.differentials && (
        <ProposalDifferentials differentials={proposal.differentials} />
      )}

      {/* Social Media: Serviços Opcionais */}
      {proposal.optionalServices && proposal.optionalServices.length > 0 && (
        <ProposalOptionalServices services={proposal.optionalServices} />
      )}

      {/* Social Media: Dúvidas Frequentes (FAQ) */}
      {proposal.faq && proposal.faq.length > 0 && (
        <ProposalFAQ faq={proposal.faq} />
      )}
        </>
      )}

      {/* CTA — always shown */}
      <ProposalCTA
        clientName={proposal.clientName}
        contactName={proposal.contactName}
        validUntil={proposal.validUntil}
        whatsappNumber={proposal.whatsappNumber}
        closingQuestion={proposal.closingQuestion}
      />
    </>
  );
}
