'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { fetchRandomNumber } from './utils/generateRandomNumber';

export default function Home() {
  const router = useRouter();

  const handleRandomPage = () => {
    const randomNumber = fetchRandomNumber();

    if (randomNumber > 5) {
      router.push('/openEye');
    } else {
      router.push('/closeEye');
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>救急救命テスト</h1>
        <button className={styles.button} onClick={handleRandomPage}>
          テスト開始
        </button>
      </main>
    </div>
  );
}
