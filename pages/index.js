import Head from 'next/head';
// Above code is used when you want to use custom titles or metatags (keywords, descriptions,etc).
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  );
}
