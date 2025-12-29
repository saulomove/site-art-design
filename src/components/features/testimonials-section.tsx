"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
    {
        name: "Astor Junior",
        role: "Diretor, Braspan MDF",
        content: "O sistema de Cashback para arquitetos foi um divisor de águas. Além da gestão de redes sociais impecável, a tecnologia desenvolvida pela ArtDesign fidelizou nossos parceiros de uma forma que não imaginávamos.",
        tags: ["Sistema Cashback", "Tráfego", "Drone"]
    },
    {
        name: "Jackson",
        role: "CEO, Grupo Karikal",
        content: "Transformação digital completa. Do CRM organizando nosso comercial até a gestão de vendas online. Ter uma agência que cuida de tudo, da foto do produto até o fechamento da venda, é essencial.",
        tags: ["Gestão 360", "CRM", "E-commerce"]
    },
    {
        name: "Cleyton e Richard",
        role: "Sócios, Pitz",
        content: "O sistema de gerenciamento de delivery e salão nos deu liberdade total. Somado ao marketing e a papelaria completa, nossa marca se consolidou como referência na região.",
        tags: ["Sistema Delivery", "Marketing", "Drone"]
    },
    {
        name: "Raquel e Mayara",
        role: "Sócias, Espaço Equilíbrio",
        content: "A implementação do CRM com Inteligência Artificial humanizada otimizou muito nosso tempo de resposta. O tráfego pago traz os leads, e a IA ajuda a converter. Casamento perfeito.",
        tags: ["CRM com IA", "Tráfego", "Sites"]
    },
    {
        name: "Diego",
        role: "Fundador, DC Tattoo Artes",
        content: "Lotamos nossos cursos presenciais e online com as campanhas de tráfego. O site novo passou a credibilidade que precisávamos para vender tickets mais altos.",
        tags: ["Lançamentos", "Tráfego", "Site"]
    },
    {
        name: "Laura Goetten",
        role: "Mentora & Especialista",
        content: "Minha autoridade digital cresceu exponencialmente. A gestão de tráfego para os cursos e a qualidade audiovisual do material trouxeram um público muito mais qualificado.",
        tags: ["Infoprodutos", "Tráfego", "Branding"]
    },
    {
        name: "Alexandre",
        role: "Grupo Abdalla",
        content: "A qualidade da captação com drone e vídeo elevou a percepção da nossa marca. A gestão das redes sociais mantém nossa comunicação alinhada com essa qualidade visual.",
        tags: ["Audiovisual", "Drone", "Social Media"]
    },
    {
        name: "Jackson",
        role: "Diretor, Akkor / Tresol",
        content: "A integração do comercial digital com o marketing fez toda a diferença. Não é apenas postar, é vender. A estrutura de CRM que montaram é robusta e funcional.",
        tags: ["Comercial Digital", "CRM", "Full Service"]
    },
    {
        name: "André",
        role: "Dehon Farmácia (Videira)",
        content: "Conseguimos comunicar a seriedade da farmácia de manipulação com uma linguagem moderna. O tráfego pago local nos trouxe novos clientes recorrentes.",
        tags: ["Tráfego Local", "Social Drive", "Vídeo"]
    },
    {
        name: "Gabriel",
        role: "MaqGases",
        content: "Atuação consistente no B2B. O site institucional e a presença no LinkedIn e redes sociais fortaleceram nossa marca perante as grandes indústrias.",
        tags: ["B2B", "Site", "Institucional"]
    },
    {
        name: "Alfredo e Gabriel",
        role: "Ilha BD",
        content: "Parceria sólida. Reformularam nosso site e assumiram o tráfego com muita competência. Resultado constante e atendimento ágil.",
        tags: ["Site Performance", "Tráfego", "Social"]
    },
    {
        name: "Aline Paese",
        role: "Empreendedora",
        content: "Os materiais impressos e a gestão digital conversam perfeitamente. Uma identidade visual única que se reflete em todos os pontos de contato da marca.",
        tags: ["Omnichannel", "Design", "Tráfego"]
    },
];

const ReviewCard = ({
    name,
    role,
    content,
    tags,
}: {
    name: string;
    role: string;
    content: string;
    tags: string[];
}) => {
    return (
        <figure
            className={cn(
                "relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6",
                "border-slate-200 bg-white hover:bg-slate-50 transition-colors",
            )}
        >
            <div className="flex flex-row items-center gap-2 mb-4">
                <div className="flex flex-col">
                    <figcaption className="text-lg font-bold text-slate-900 leading-tight">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{role}</p>
                </div>
            </div>

            <div className="mb-4">
                <Quote className="w-6 h-6 text-brand-blue/20 mb-2" />
                <blockquote className="text-sm leading-relaxed text-slate-600 font-medium italic">
                    "{content}"
                </blockquote>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                {tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {tag}
                    </span>
                ))}
            </div>
        </figure>
    );
};

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-slate-50 relative border-t border-slate-200">
            <div className="container mx-auto px-4 mb-12 text-center">
                <div className="inline-block rounded-full bg-brand-green/10 border border-brand-green/20 px-4 py-1.5 text-sm font-bold text-brand-green mb-4 uppercase tracking-wider">
                    Prova Social
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                    Resultados Reais de <span className="text-transparent bg-clip-text bg-gradient-brand">Quem Confia.</span>
                </h2>
                <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                    Não acredite apenas na nossa palavra. Veja o que grandes empresários e marcas da região dizem sobre nossa entrega.
                </p>
            </div>

            <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover speed={80} className="">
                    {testimonials.map((review, i) => (
                        <ReviewCard key={i} {...review} />
                    ))}
                </Marquee>

                {/* Gradients for smooth fade */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-50"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-50"></div>
            </div>
        </section>
    );
}
