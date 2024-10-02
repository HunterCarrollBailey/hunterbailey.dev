import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const articlesDirectory = path.join(process.cwd(), 'app/content/articles');

// Function to get the content of an article based on slug
async function getArticleData(slug: string) {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Serialize MDX content for server-side rendering
  const { content: compiledContent } = await compileMDX({ source: content });

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    compiledSource: compiledContent,
  };
}

// Define the dynamic paths (slugs) for your articles
export async function generateStaticParams() {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    return { slug };
  });
}

// The dynamic article page component
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const articleData = await getArticleData(slug);

  return (
    <div>
      <h1>{articleData.title}</h1>
      <p>{articleData.description}</p>
      <small>{new Date(articleData.date).toLocaleDateString()}</small>
      <div>{articleData.compiledSource}</div>
    </div>
  );
}
