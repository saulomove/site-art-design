"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { getProposalBySlug } from "@/lib/proposals-data";
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
import { ProposalThemeDispatcher } from "@/components/proposal-premium/proposal-theme-dispatcher";
import { ProposalSimulation } from "@/components/proposal/proposal-simulation";
import { ProposalEcommerceAnalysis } from "@/components/proposal/proposal-ecommerce-analysis";
import { ProposalFAQ } from "@/components/proposal/proposal-faq";
import { ProposalBonus } from "@/components/proposal/proposal-bonus";
import { ProposalCommissionModel } from "@/components/proposal/proposal-commission-model";
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

      {/* Dynamic Theme Renderer based on isPremium Flag */}
      <ProposalThemeDispatcher proposal={proposal} />
    </div>
  );
}
