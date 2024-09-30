import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { ArticleWithSlug } from '@/lib/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import MDXContent from '@/components/MDXContent'; // Ensure this import

export default async function ArticlePage({ params }: { params: { slug: string } }) {
    const articlePath = path.join(process.cwd(), 'src/app/articles', params.slug, 'page.mdx');

    if (!fs.existsSync(articlePath)) {
        return <div>Article not found</div>;
    }

    const fileContent = await fs.promises.readFile(articlePath, 'utf8');
    const { data, content } = matter(fileContent);
    const mdxSource = await serialize(content);

    const article: ArticleWithSlug = {
        title: data.title as string,
        description: data.description as string,
        author: data.author as string,
        date: data.date as string,
        slug: params.slug,
        content: mdxSource,
    };

    return (
        <ArticleLayout article={article}>
            <MDXContent content={mdxSource} />
        </ArticleLayout>
    );
}
