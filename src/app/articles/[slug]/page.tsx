import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc'; // Use the correct import
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { ArticleWithSlug, Article } from '@/lib/articles'; // Ensure these types are correct
import { ArticleLayout } from '@/components/ArticleLayout';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
    // Construct the path to the MDX file based on the slug
    const articlePath = path.join(process.cwd(), 'src/app/articles', params.slug, 'page.mdx');

    if (!fs.existsSync(articlePath)) {
        return <div>Article not found</div>;
    }

    const fileContent = await fs.promises.readFile(articlePath, 'utf8');

    // Extract frontmatter (metadata) and the MDX content
    const { data, content } = matter(fileContent);

    // Ensure `data` has all the necessary properties
    const frontmatterData = data as Article;

    // Serialize the MDX content for rendering
    const mdxSource = await serialize(content);

    // Combine the extracted data with the slug and serialized content
    const article: ArticleWithSlug = {
        ...frontmatterData,
        slug: params.slug,
        content: mdxSource,
    };

    return (
        <ArticleLayout article={article}>
            <MDXRemote source={mdxSource} />
        </ArticleLayout>
    );
}
