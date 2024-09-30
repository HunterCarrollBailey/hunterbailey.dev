// ArticleLayout.tsx
"use client";

import { type ArticleWithSlug } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';
import Card from "@/components/Card";

export function ArticleLayout({
                                  article,
                                  children,
                              }: {
    article: ArticleWithSlug;
    children: React.ReactNode;
}) {
    return (
        <Card adlClasses="mt-16 lg:mt-32">
            <div className="xl:relative">
                <div className="mx-auto max-w-2xl">
                    <article>
                        <header className="flex flex-col">
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                                {article.title}
                            </h1>
                            <time
                                dateTime={article.date}
                                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                            >
                                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                                <span className="ml-3">{formatDate(article.date)}</span>
                            </time>
                        </header>
                        {children}
                    </article>
                </div>
            </div>
        </Card>
    );
}
