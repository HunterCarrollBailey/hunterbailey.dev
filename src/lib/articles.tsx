import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export interface Article {
    title: string;
    description: string;
    author: string;
    date: string;
}

export interface ArticleWithSlug extends Article {
    slug: string;
    content: MDXRemoteSerializeResult;
}

export async function getAllArticles(): Promise<ArticleWithSlug[]> {
    const articlesDirectory = path.join(process.cwd(), 'src/app/articles');

    // Get all directories inside the articles directory
    const articleFolders = await fs.promises.readdir(articlesDirectory);

    const articles = await Promise.all(
        articleFolders.map(async (folderName) => {
            const filePath = path.join(articlesDirectory, folderName, 'page.mdx');

            if (!fs.existsSync(filePath)) return null;

            const fileContent = await fs.promises.readFile(filePath, 'utf8');
            const { data, content } = matter(fileContent);

            // Validate required fields
            if (!data.title || !data.description || !data.author || !data.date) {
                console.error(`Missing required fields in article: ${folderName}`);
                return null;
            }

            // Serialize the MDX content
            const mdxContent = await serialize(content);

            return {
                ...(data as Article),
                slug: folderName, // Use the folder name as the slug
                content: mdxContent, // Store the serialized MDX content
            };
        })
    );

    return articles.filter((article): article is ArticleWithSlug => article !== null).sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
