"use client";

import { type ArticleWithSlug } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';
import Card from "@/components/Card";

export const ArticleLayout = ({
  article,
  children,
}: {
    article: ArticleWithSlug;
    children: React.ReactNode;
}) => {
    return (
        <Card adlClasses="mt-16 p-10">
            <div className="xl:relative">
                <div className="mx-auto max-w-5xl">
                    <article>
                        <header className="flex flex-col">
                            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                                {article.title}
                            </h1>
                            <p className="mt-2 text-lg">{article.description}</p>
                            <time
                                dateTime={article.date}
                                className="order-first flex items-center text-base"
                            >
                                <span className="h-4 w-0.5 rounded-full bg-cyan-500" />
                                <span className="ml-3">{formatDate(article.date)}</span>
                            </time>
                        </header>
                        <div className="prose mt-6 max-w-none prose-headings:text-slate-100">{children}</div> {/* Make sure to render children */}
                    </article>
                </div>
            </div>
        </Card>
    );
}
