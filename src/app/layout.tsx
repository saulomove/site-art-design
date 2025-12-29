import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsapp } from "@/components/features/floating-whatsapp";
import { AdminProvider } from "@/providers/admin-provider";
import { AnalyticsScripts } from "@/components/features/analytics-scripts";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ArtDesign | Marketing e Tecnologia",
  description: "A ArtDesign transforma presença digital em demanda e vendas reais. Agência que une design, tecnologia e performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable
        )}
      >
        <AdminProvider>
          <AnalyticsScripts />
          <Header />
          <main className="flex-1 min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <FloatingWhatsapp />
        </AdminProvider>
      </body>
    </html>
  );
}
