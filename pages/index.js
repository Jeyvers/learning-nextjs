import Head from 'next/head';
// Above code is used when you want to use custom titles or metatags (keywords, descriptions,etc).
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

// Fetching data
// getStaticProps fetches data in build time
// getServerSideProps fetches data on every request
// getStaticPaths dynamically generate paths based on teh data we're fetching

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
