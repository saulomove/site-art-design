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

// Executive imports (financial / consórcio / B2B)
import { ProposalExecutiveHero } from "@/components/proposal-executive/proposal-hero";
import { ProposalExecutiveStats } from "@/components/proposal-executive/proposal-stats";
import { ProposalExecutiveAnalysis } from "@/components/proposal-executive/proposal-analysis";
import { ProposalExecutiveBeforeAfter } from "@/components/proposal-executive/proposal-before-after";
import { ProposalExecutiveScope } from "@/components/proposal-executive/proposal-scope";
import { ProposalExecutiveContentIdeas } from "@/components/proposal-executive/proposal-content-ideas";
import { ProposalExecutiveRoadmap } from "@/components/proposal-executive/proposal-roadmap";
import { ProposalExecutiveRoi } from "@/components/proposal-executive/proposal-roi";
import { ProposalExecutiveDifferentials } from "@/components/proposal-executive/proposal-differentials";
import { ProposalExecutiveInvestment } from "@/components/proposal-executive/proposal-investment";
import { ProposalExecutiveCta } from "@/components/proposal-executive/proposal-cta";

// Biomass imports (industrial / sustentabilidade / exportação)
import { ProposalBiomassHero } from "@/components/proposal-biomass/proposal-hero";
import { ProposalBiomassAboutInternational } from "@/components/proposal-biomass/proposal-about-international";
import { ProposalBiomassAnalysis } from "@/components/proposal-biomass/proposal-analysis";
import { ProposalBiomassScope } from "@/components/proposal-biomass/proposal-scope";
import { ProposalBiomassPhases } from "@/components/proposal-biomass/proposal-phases";
import { ProposalBiomassInvestment } from "@/components/proposal-biomass/proposal-investment";
import { ProposalBiomassCta } from "@/components/proposal-biomass/proposal-cta";

// Forestry imports (setor madeireiro / florestal)
import { ProposalForestryHero } from "@/components/proposal-forestry/proposal-hero";
import { ProposalForestryAnalysis } from "@/components/proposal-forestry/proposal-analysis";
import { ProposalForestryScope } from "@/components/proposal-forestry/proposal-scope";
import { ProposalForestryInvestment } from "@/components/proposal-forestry/proposal-investment";
import { ProposalForestryCta } from "@/components/proposal-forestry/proposal-cta";

// Executive system (sistema/SaaS variant)
import { ProposalExecutiveSystemHero } from "@/components/proposal-executive/proposal-system-hero";
import { ProposalExecutiveSystemPain } from "@/components/proposal-executive/proposal-system-pain";
import { ProposalExecutiveSystemModules } from "@/components/proposal-executive/proposal-system-modules";
import { ProposalExecutiveSystemSprints } from "@/components/proposal-executive/proposal-system-sprints";
import { ProposalExecutiveSystemStack } from "@/components/proposal-executive/proposal-system-stack";
import { ProposalExecutiveSystemPricing } from "@/components/proposal-executive/proposal-system-pricing";
import { ProposalExecutiveSystemComparison } from "@/components/proposal-executive/proposal-system-comparison";

import type { Proposal } from "@/lib/proposals-data";

export function ProposalThemeDispatcher({ proposal }: { proposal: Proposal }) {
  const isLegal = proposal.theme === "legal";
  const isExecutive = proposal.theme === "executive";
  const isPremium = proposal.theme === "premium";
  const isBiomass = proposal.theme === "biomass";
  const isForestry = proposal.theme === "forestry";

  if (isForestry) {
    return (
      <>
        <ProposalForestryHero proposal={proposal} />
        <ProposalAbout />
        {proposal.analysis && (
          <ProposalForestryAnalysis
            analysis={proposal.analysis}
            clientName={proposal.clientName}
          />
        )}
        <ProposalForestryScope services={proposal.services} />
        {proposal.optionalServices && proposal.optionalServices.length > 0 && (
          <ProposalOptionalServices services={proposal.optionalServices} />
        )}
        {proposal.phases && proposal.phases.length > 0 && (
          <ProposalPhases phases={proposal.phases} />
        )}
        <ProposalForestryInvestment
          investment={proposal.investment}
          clientName={proposal.clientName}
        />
        {proposal.differentials && proposal.differentials.length > 0 && (
          <ProposalDifferentials differentials={proposal.differentials} />
        )}
        <ProposalForestryCta proposal={proposal} />
      </>
    );
  }

  if (isBiomass) {
    return (
      <>
        <ProposalBiomassHero proposal={proposal} />
        <ProposalBiomassAboutInternational />
        {proposal.analysis && (
          <ProposalBiomassAnalysis
            analysis={proposal.analysis}
            clientName={proposal.clientName}
          />
        )}
        <ProposalBiomassScope services={proposal.services} />
        {proposal.optionalServices && proposal.optionalServices.length > 0 && (
          <ProposalOptionalServices services={proposal.optionalServices} />
        )}
        {proposal.phases && proposal.phases.length > 0 && (
          <ProposalBiomassPhases phases={proposal.phases} />
        )}
        <ProposalBiomassInvestment
          investment={proposal.investment}
          clientName={proposal.clientName}
        />
        {proposal.differentials && proposal.differentials.length > 0 && (
          <ProposalDifferentials differentials={proposal.differentials} />
        )}
        <ProposalBiomassCta proposal={proposal} />
      </>
    );
  }

  if (isExecutive && proposal.proposalType === "sistema") {
    return (
      <>
        <ProposalExecutiveSystemHero proposal={proposal} />
        {proposal.systemPain && (
          <ProposalExecutiveSystemPain pain={proposal.systemPain} />
        )}
        {proposal.systemModules && proposal.systemModules.length > 0 && (
          <ProposalExecutiveSystemModules modules={proposal.systemModules} />
        )}
        {proposal.systemSprints && proposal.systemSprints.length > 0 && (
          <ProposalExecutiveSystemSprints sprints={proposal.systemSprints} />
        )}
        {proposal.systemStack && proposal.systemStack.length > 0 && (
          <ProposalExecutiveSystemStack stack={proposal.systemStack} />
        )}
        {proposal.systemPricing && (
          <ProposalExecutiveSystemPricing
            pricing={proposal.systemPricing}
            clientName={proposal.clientName}
          />
        )}
        {proposal.systemComparison && (
          <ProposalExecutiveSystemComparison comparison={proposal.systemComparison} />
        )}
        {proposal.faq && proposal.faq.length > 0 && (
          <ProposalFAQ faq={proposal.faq} />
        )}
        {proposal.differentials && proposal.differentials.length > 0 && (
          <ProposalExecutiveDifferentials differentials={proposal.differentials} />
        )}
        <ProposalExecutiveCta proposal={proposal} />
      </>
    );
  }

  if (isExecutive) {
    return (
      <>
        <ProposalExecutiveHero proposal={proposal} />
        {proposal.stats && proposal.stats.length > 0 && (
          <ProposalExecutiveStats
            stats={proposal.stats}
            clientName={proposal.clientName}
          />
        )}
        {proposal.analysis && (
          <ProposalExecutiveAnalysis
            analysis={proposal.analysis}
            clientName={proposal.clientName}
          />
        )}
        {proposal.beforeAfter && (
          <ProposalExecutiveBeforeAfter
            beforeAfter={proposal.beforeAfter}
            clientName={proposal.clientName}
          />
        )}
        <ProposalExecutiveScope services={proposal.services} />
        {proposal.contentSuggestions && proposal.contentSuggestions.length > 0 && (
          <ProposalExecutiveContentIdeas contentSuggestions={proposal.contentSuggestions} />
        )}
        {proposal.phases && proposal.phases.length > 0 && (
          <ProposalExecutiveRoadmap phases={proposal.phases} />
        )}
        {proposal.roiAnalysis && (
          <ProposalExecutiveRoi
            roiAnalysis={proposal.roiAnalysis}
            clientName={proposal.clientName}
          />
        )}
        <ProposalExecutiveInvestment
          investment={proposal.investment}
          clientName={proposal.clientName}
        />
        {proposal.differentials && proposal.differentials.length > 0 && (
          <ProposalExecutiveDifferentials differentials={proposal.differentials} />
        )}
        <ProposalExecutiveCta proposal={proposal} />
      </>
    );
  }

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
