import React from 'react';
import Card from '@/components/Card';
import Link from 'next/link';
import { getAllArticles, ArticleWithSlug } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

function Article({ article }: { article: ArticleWithSlug }) {
    return (
        <article className={'md:grid md:grid-cols-4 md:items-baseline'}>
            <div className="hidden md:block md:col-span-1">
                <time dateTime={article.date} className="relative order-first mb-3 flex items-center text-sm text-slate-400">
                    <span className="absolute inset-y-0 left-0 flex items-center mt-2" aria-hidden={true}>
                        {formatDate(article.date)}
                        <span className="h-4 w-0.5 rounded-full" />
                    </span>
                </time>
            </div>
            <div className="md:col-span-3">
                <h2 className={'text-base font-semibold tracking-tight'}>
                    <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                </h2>
                <time dateTime={article.date} className="relative z-10 order-first mb-3 flex items-center text-sm text-slate-400 pl-3.5 mt-3 md:hidden">
                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden={true}>
                        {formatDate(article.date)}
                        <span className="h-4 w-0.5 rounded-full" />
                    </span>
                </time>
                <p className="relative z-10 mt-2 text-sm text-slate-100">
                    {article.description}
                </p>
                <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-cyan-500" aria-hidden={true}>
                    <Link href={`/articles/${article.slug}`}>Read Article</Link>
                    <ChevronRightIcon className={'ml-1 h-4 w-4 stroke-current'} />
                </div>
            </div>
        </article>
    );
}

export default async function ArticlesIndex() {
    const articles: ArticleWithSlug[] = await getAllArticles();

    return (
        <section className="p-5">
            <Card>
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-heading font-bold text-white tracking-light sm:text-5xl">
                        Writing on software development, gaming, and anything else that strikes my mind.
                    </h1>
                    <p className="mt-6 text-base">
                        Over the years I’ve been told many a time, “You need to start a podcast,” “You need to do some content creation,” or other such comments.
                        So after some thought on it, I figured it would be nice to write down my thoughts on those “Soap Boxes” and finally put them out there.
                    </p>
                </div>
            </Card>
            <Card adlClasses={'mt-5 p-5'}>
                <div className="md:border-1 md:border-cyan-500 md:pl-6">
                    <div className="flex flex-col max-w-3xl space-y-12">
                        {articles.length > 0 ? (
                            articles.map((article) => (
                                <Article article={article} key={article.slug} />
                            ))
                        ) : (
                            <h3 className={'text-xl font-semibold mx-auto w-full'}>
                                Nothing here yet! Check Back Soon!
                            </h3>
                        )}
                    </div>
                </div>
            </Card>
        </section>
    );
}
