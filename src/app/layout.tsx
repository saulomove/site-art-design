import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable
        )}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
