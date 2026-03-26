"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { getProposalBySlug } from "@/lib/proposals-data";
import { ProposalHero } from "@/components/proposal/proposal-hero";
import { ProposalAbout } from "@/components/proposal/proposal-about";
import { ProposalAnalysisSection } from "@/components/proposal/proposal-analysis";
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
import { ProposalCRMDiagnosis } from "@/components/proposal/proposal-crm-diagnosis";
import { ProposalCRMFeatures } from "@/components/proposal/proposal-crm-features";
import { ProposalCRMShowcase } from "@/components/proposal/proposal-crm-showcase";
import { ProposalCRMKanban } from "@/components/proposal/proposal-crm-kanban";
import { ProposalSimulation } from "@/components/proposal/proposal-simulation";
import { ProposalEcommerceAnalysis } from "@/components/proposal/proposal-ecommerce-analysis";
import { ProposalFAQ } from "@/components/proposal/proposal-faq";
import { ProposalBonus } from "@/components/proposal/proposal-bonus";
import { motion, useScroll, useSpring } from "framer-motion";

interface ProposalPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProposalPage({ params }: ProposalPageProps) {
  const { slug } = use(params);
  const proposal = getProposalBySlug(slug);

  if (!proposal) {
    notFound();
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const isCRM = proposal.proposalType === "crm";

  return (
    <div className="flex flex-col gap-0 pb-0 overflow-x-hidden bg-background selection:bg-brand-purple/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange z-[60] origin-left"
        style={{ scaleX }}
      />

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
    </div>
  );
}
