import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import glob from 'fast-glob';

interface Article {
    title: string;
    description: string;
    author: string;
    date: string;
}

export interface ArticleWithSlug extends Article {
    slug: string;
    content: any; // MDX content will be stored here
}

export async function getAllArticles(): Promise<ArticleWithSlug[]> {
    const articlesDirectory = path.join(process.cwd(), './src/app/articles');
    const articleFilenames = await glob('**/page.mdx', {
        cwd: articlesDirectory,
    });

    const articles = await Promise.all(
        articleFilenames.map(async (filename) => {
            const filePath = path.join(articlesDirectory, filename);
            const fileContent = await fs.readFile(filePath, 'utf8');

            const { data, content } = matter(fileContent);
            const mdxSource = await serialize(content);

            return {
                ...(data as Article),
                slug: filename.replace(/(\/page)?\.mdx$/, ''),
                content: mdxSource,
            };
        })
    );

    return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
