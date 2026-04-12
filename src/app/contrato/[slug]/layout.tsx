import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Contrato de Prestação de Serviços | ArtDesign",
  description:
    "Contrato de prestação de serviços — ArtDesign Marketing & Tecnologia",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ContractLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground antialiased">
      {children}
    </div>
  );
}
