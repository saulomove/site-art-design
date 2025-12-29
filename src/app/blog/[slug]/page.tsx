import { blogPosts, BlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Artigo não encontrado | ArtDesign",
        };
    }

    return {
        title: `${post.title} | Blog ArtDesign`,
        description: post.excerpt,
        openGraph: {
            images: [post.image],
        }
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white selection:bg-brand-blue/30 pt-32 pb-20">

            {/* HEADER */}
            <div className="container mx-auto px-4 max-w-4xl mb-12">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-brand-blue mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para o Blog
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {post.category}
                    </span>
                    <span className="flex items-center text-slate-400 text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-1" /> {post.date}
                    </span>
                    <span className="flex items-center text-slate-400 text-sm font-medium">
                        <Clock className="w-4 h-4 mr-1" /> {post.readTime}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                    {post.title}
                </h1>

                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* CONTENT */}
            <div className="container mx-auto px-4 max-w-3xl">
                <div
                    className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-brand-blue hover:prose-a:text-brand-blue/80 prose-img:rounded-xl mb-16"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* SERVICE CTA */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Gostou deste conteúdo?
                        </h3>
                        <p className="text-slate-500 text-lg">
                            Nossa equipe é especialista em {post.category === "Growth" ? "crescimento e vendas" : post.category === "Tech" ? "desenvolvimento e performance" : "inovação e automação"}.
                            Podemos aplicar essa estratégia no seu negócio hoje mesmo.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <Button size="lg" className="rounded-full font-bold h-14 px-8 shadow-xl shadow-brand-blue/10" asChild>
                            <Link href={post.relatedServiceHref}>
                                Conhecer Solução <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

        </article>
    );
}
