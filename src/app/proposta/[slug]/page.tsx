"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { getProposalBySlug } from "@/lib/proposals-data";
import { ProposalHero } from "@/components/proposal/proposal-hero";
import { ProposalAbout } from "@/components/proposal/proposal-about";
import { ProposalAnalysisSection } from "@/components/proposal/proposal-analysis";
import { ProposalHighlights } from "@/components/proposal/proposal-highlights";
import { ProposalScope } from "@/components/proposal/proposal-scope";
import { ProposalPhases } from "@/components/proposal/proposal-phases";
import { ProposalInvestmentSection } from "@/components/proposal/proposal-investment";
import { ProposalDifferentials } from "@/components/proposal/proposal-differentials";
import { ProposalCTA } from "@/components/proposal/proposal-cta";
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

  return (
    <div className="flex flex-col gap-0 pb-0 overflow-x-hidden bg-background selection:bg-brand-purple/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* 1. Hero */}
      <ProposalHero proposal={proposal} />

      {/* 2. Sobre a ArtDesign (stats, countries, testimonials) */}
      <ProposalAbout />

      {/* 3. Análise Estratégica (se houver) */}
      {proposal.analysis && (
        <ProposalAnalysisSection
          analysis={proposal.analysis}
          clientName={proposal.clientName}
        />
      )}

      {/* 4. Diferenciais/Highlights (se houver) */}
      {proposal.highlights && proposal.highlights.length > 0 && (
        <ProposalHighlights
          highlights={proposal.highlights}
          clientName={proposal.clientName}
        />
      )}

      {/* 5. Escopo dos Serviços */}
      <ProposalScope services={proposal.services} />

      {/* 6. Fases do Projeto (se houver) */}
      {proposal.phases && proposal.phases.length > 0 && (
        <ProposalPhases phases={proposal.phases} />
      )}

      {/* 7. Investimento */}
      <ProposalInvestmentSection
        investment={proposal.investment}
        clientName={proposal.clientName}
      />

      {/* 8. Diferenciais ArtDesign (se houver) */}
      {proposal.differentials && (
        <ProposalDifferentials differentials={proposal.differentials} />
      )}

      {/* 9. CTA de Aceite */}
      <ProposalCTA
        clientName={proposal.clientName}
        contactName={proposal.contactName}
        validUntil={proposal.validUntil}
        whatsappNumber={proposal.whatsappNumber}
      />
    </div>
  );
}
