import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t pt-16 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2 space-y-6">
                        <Link href="/" className="block relative h-20 w-72 hover:opacity-90 transition-opacity">
                            <Image
                                src="/logo-full.png"
                                alt="Art Agência"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
                            Transformando presença digital em vendas reais através de design, tecnologia e estratégia.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Serviços</h4>
                        <ul className="space-y-4 text-base text-muted-foreground">
                            <li><Link href="/servicos/social" className="hover:text-primary transition-colors">Redes Sociais</Link></li>
                            <li><Link href="/servicos/trafego" className="hover:text-primary transition-colors">Tráfego Pago</Link></li>
                            <li><Link href="/servicos/sites" className="hover:text-primary transition-colors">Sites & LPs</Link></li>
                            <li><Link href="/servicos/tech" className="hover:text-primary transition-colors">Sistemas & IA</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Empresa</h4>
                        <ul className="space-y-4 text-base text-muted-foreground">
                            <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
                            <li><Link href="/cases" className="hover:text-primary transition-colors">Cases</Link></li>
                            <li><Link href="/planos" className="hover:text-primary transition-colors">Planos</Link></li>
                            <li><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
                            <li><a href="https://www.instagram.com/artdesigntrafego/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>© {currentYear} ArtDesign. Caçador, SC. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
