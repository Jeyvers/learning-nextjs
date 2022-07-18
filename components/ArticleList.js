import Link from 'next/link';
import articleStyles from '../styles/Articles.module.css';

const ArticleList = ({ articles }) => {
  //

  const Article = ({ id, title, body }) => {
    return (
      <Link href='/article/[id]' as={`/article/${id}`}>
        <a className={articleStyles.card}>
          <h3>{title} &rarr; </h3>
          <p>{body}</p>
        </a>
      </Link>
    );
  };

  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;
