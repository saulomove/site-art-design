import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../../globals.css";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

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
    <div
      className={cn(
        "min-h-screen bg-background font-sans text-foreground antialiased",
        fontSans.variable
      )}
    >
      {children}
    </div>
  );
}
