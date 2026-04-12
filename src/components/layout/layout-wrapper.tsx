"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsapp } from "@/components/features/floating-whatsapp";
import { AdminProvider } from "@/providers/admin-provider";
import { AnalyticsScripts } from "@/components/features/analytics-scripts";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProposalPage = pathname.startsWith("/proposta");
  const isContractPage = pathname.startsWith("/contrato");

  if (isProposalPage || isContractPage) {
    return (
      <AdminProvider>
        <AnalyticsScripts />
        {children}
      </AdminProvider>
    );
  }

  return (
    <AdminProvider>
      <AnalyticsScripts />
      <Header />
      <main className="flex-1 min-h-screen pt-20">{children}</main>
      <Footer />
      <FloatingWhatsapp />
    </AdminProvider>
  );
}
