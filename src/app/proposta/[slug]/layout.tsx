import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Proposta Exclusiva | ArtDesign",
  description: "Proposta comercial personalizada — ArtDesign Marketing & Tecnologia",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ProposalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {children}
    </div>
  );
}

