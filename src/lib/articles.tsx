import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export interface Article {
    title: string;
    description: string;
    author: string;
    date: string;
}

export interface ArticleWithSlug extends Article {
    slug: string;
    content: any;
}

export async function getAllArticles(): Promise<ArticleWithSlug[]> {
    // Define the path to the articles directory
    const articlesDirectory = path.join(process.cwd(), 'src/app/articles');

    // Read all folders inside the articles directory
    const articleFolders = await fs.promises.readdir(articlesDirectory);

    const articles = await Promise.all(
        articleFolders.map(async (folderName) => {
            // Construct the path to the page.mdx file for each folder
            const filePath = path.join(articlesDirectory, folderName, 'page.mdx');

            // Check if the page.mdx file exists
            if (!fs.existsSync(filePath)) {
                console.error(`MDX file not found: ${filePath}`);
                return null; // Return null if the file does not exist
            }

            // Read the content of the page.mdx file
            const fileContent = await fs.promises.readFile(filePath, 'utf8');

            // Extract frontmatter data and content using gray-matter
            const { data, content } = matter(fileContent);

            // Serialize the MDX content
            const mdxContent = await serialize(content);

            return {
                ...(data as Article),
                slug: folderName,   // Use the folder name as the article slug
                content: mdxContent,
            };
        })
    );

    // Filter out any articles that were null due to missing files
    return articles.filter((article): article is ArticleWithSlug => article !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
