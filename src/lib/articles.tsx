import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import glob from 'fast-glob';

interface Article {
    title: string;
    description: string;
    author: string;
    date: string;
}

export interface ArticleWithSlug extends Article {
    slug: string;
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

            // Use gray-matter to parse the frontmatter
            const { data } = matter(fileContent);

            // Check if the date is present and valid
            if (!data.date || isNaN(new Date(data.date).getTime())) {
                console.error(`Invalid or missing date in file: ${filename}`);
                data.date = '1970-01-01'; // Default to a specific date if missing/invalid
            }

            return {
                ...(data as Article),
                slug: filename.replace(/(\/page)?\.mdx$/, ''),
            };
        })
    );

    return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
