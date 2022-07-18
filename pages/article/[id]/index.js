import { server } from '../../../config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../../components/Meta';

const article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href={'/'}>Go Back</Link>
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticProps = async (context) => {
//   const res = await fetch(`${server}/api/articles/${context.params.id}`);
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles/`);
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const articles = await res.json();

  //  this dynamically genereated all the paths for the posts, so even though we have 6 articles, if we search for the 20th, the 20th will be dynamically generated if it exists on jsonplaceholder
  //   therefore this method is better and fast than getServerSideProps in this context

  //  returns an array of all the ids for each article
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    // Returns 404 page if id does not exist
    fallback: false,
  };
};

export default article;
