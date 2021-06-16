import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LoginControl from '../components/LoginControl';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>A React Status Page</h1>
        <LoginControl />
      </main>
    </div>
  );
}
