import Link from 'next/link';
import { getSortedArticlesData } from '@/app/lib/articles';

export default async function ArticlesPage() {
  const articles = await getSortedArticlesData();

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/articles/${article.slug}`}>
              <h2>{article.title}</h2>
            </Link>
            <p>{article.description}</p>
            <small>{new Date(article.date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
